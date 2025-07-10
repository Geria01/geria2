
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const loginSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required').max(254),
  password: z.string().min(8, 'Password must be at least 8 characters').max(128),
});

// Simple in-memory rate limiting (use Redis in production)
const loginAttempts = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const attempts = loginAttempts.get(ip) || [];
  const recentAttempts = attempts.filter((time: number) => now - time < 15 * 60 * 1000); // 15 minutes
  
  if (recentAttempts.length >= 5) {
    return true;
  }
  
  recentAttempts.push(now);
  loginAttempts.set(ip, recentAttempts);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json({ 
        message: 'Too many login attempts. Please try again later.' 
      }, { status: 429 });
    }

    const body = await request.json();
    
    // Validate input
    const validatedData = loginSchema.parse(body);
    const { email, password } = validatedData;
    
    // Secure admin authentication with constant-time comparison
    if (email === process.env.ADMIN_EMAIL && 
        process.env.ADMIN_PASSWORD_HASH && 
        await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH)) {
      const adminUser = {
        id: 'admin-1',
        email: email,
        name: 'Admin',
        role: 'admin' as const
      };
      
      const response = NextResponse.json({ 
        user: adminUser,
        message: 'Login successful' 
      });
      
      // Add security headers
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('X-Frame-Options', 'DENY');
      response.headers.set('X-XSS-Protection', '1; mode=block');
      
      return response;
    }

    // Mock user authentication - replace with actual database logic
    const user = {
      id: Date.now().toString(),
      email: email,
      name: email.split('@')[0],
      role: 'candidate' as const,
      userType: 'candidate'
    };

    const response = NextResponse.json({ 
      user,
      message: 'Login successful' 
    });
    
    // Add security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    
    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        message: 'Invalid input data',
        errors: error.errors 
      }, { status: 400 });
    }
    
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}


import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = loginSchema.parse(body);
    const { email, password } = validatedData;

    // Rate limiting should be implemented here
    // TODO: Add rate limiting middleware
    
    // Secure admin authentication
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
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

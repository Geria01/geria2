
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long'),
  company: z.string().max(100, 'Company name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Invalid phone number format').optional(),
  userType: z.enum(['candidate', 'client']).default('candidate')
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = signupSchema.parse(body);
    const { email, password, firstName, lastName, company, phoneNumber, userType } = validatedData;

    // Check for existing user (mock implementation)
    // TODO: Implement proper database check
    
    // Hash password before storing (mock implementation)
    // TODO: Implement proper password hashing with bcrypt
    
    const user = {
      id: Date.now().toString(),
      email: email,
      name: `${firstName} ${lastName}`,
      firstName,
      lastName,
      company: company || '',
      phoneNumber: phoneNumber || '',
      role: userType === 'client' ? 'client' : 'candidate',
      userType: userType
    };

    const response = NextResponse.json({ 
      user,
      message: 'Account created successfully' 
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
    
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

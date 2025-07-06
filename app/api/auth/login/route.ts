
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password, userType } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password required' }, { status: 400 });
    }

    // Mock authentication - replace with actual database logic
    const user = {
      id: Date.now().toString(),
      email: email,
      name: email.split('@')[0], // Simple name from email
      role: userType === 'client' ? 'client' : 'candidate',
      userType: userType || 'candidate'
    };

    return NextResponse.json({ 
      user,
      message: 'Login successful' 
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

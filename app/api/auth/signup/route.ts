
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName, company, phoneNumber, userType } = body;

    // Validate input
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ message: 'Required fields missing' }, { status: 400 });
    }

    // Mock user creation - replace with actual database logic
    const user = {
      id: Date.now().toString(),
      email: email,
      name: `${firstName} ${lastName}`,
      firstName,
      lastName,
      company: company || '',
      phoneNumber: phoneNumber || '',
      role: userType === 'client' ? 'client' : 'candidate',
      userType: userType || 'candidate'
    };

    return NextResponse.json({ 
      user,
      message: 'Account created successfully' 
    });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

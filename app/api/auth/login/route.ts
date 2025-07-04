import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    // Mock authentication - replace with actual auth logic
    if (email === 'test@example.com' && password === 'password') {
      const user = {
        id: '1',
        email: email,
        name: 'Test User',
        role: 'candidate' as const
      };

      return NextResponse.json(user);
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
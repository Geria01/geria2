import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 });
    }

    // Mock user creation - replace with actual database logic
    const user = {
      id: Date.now().toString(),
      email: email,
      name: name,
      role: 'candidate' as const
    };

    return NextResponse.json(user);
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
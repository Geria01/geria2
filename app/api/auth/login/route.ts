
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    // Simple demo authentication - replace with real authentication
    const adminEmail = 'admin@geria.io';
    const adminPassword = 'admin123';
    
    if (email === adminEmail && password === adminPassword) {
      return NextResponse.json({
        id: '1',
        email: email,
        name: 'Admin User',
        role: 'admin'
      });
    }
    
    // For demo purposes, any other email creates a candidate account
    if (email && password) {
      return NextResponse.json({
        id: Date.now().toString(),
        email: email,
        name: email.split('@')[0],
        role: 'candidate'
      });
    }
    
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

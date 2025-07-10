
import { NextRequest, NextResponse } from 'next/server';
import { emailSchema } from '@/lib/validation';

// Simple rate limiting (use Redis in production)
const rateLimit = new Map();

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 5;

    // Rate limiting
    const requests = rateLimit.get(ip) || [];
    const validRequests = requests.filter((time: number) => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return NextResponse.json({ 
        message: 'Too many requests. Please try again later.' 
      }, { status: 429 });
    }

    const body = await request.json();
    
    // Validate input
    const validation = emailSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ 
        message: 'Invalid email address' 
      }, { status: 400 });
    }

    const { email } = validation.data;

    // Store rate limit
    rateLimit.set(ip, [...validRequests, now]);

    // TODO: Add to your email service
    console.log('Newsletter subscription:', email);

    return NextResponse.json({ 
      message: 'Successfully subscribed!',
      success: true 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ 
      message: 'Internal server error' 
    }, { status: 500 });
  }
}

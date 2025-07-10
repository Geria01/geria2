
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const subscribeSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = subscribeSchema.parse(body);
    const { email } = validatedData;

    // Basic rate limiting check (in production, use Redis or similar)
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    console.log(`Newsletter subscription from IP: ${ip}, Email: ${email}`);

    // Check for environment variables
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !listId || !serverPrefix) {
      console.error('Missing Mailchimp environment variables');
      return NextResponse.json({ 
        message: 'Newsletter service temporarily unavailable' 
      }, { status: 503 });
    }

    // Mailchimp API call
    const response = await fetch(`https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        ip_signup: ip,
        timestamp_signup: new Date().toISOString(),
      }),
    });

    if (response.ok) {
      const result = NextResponse.json({ message: 'Successfully subscribed to newsletter!' });
      result.headers.set('X-Content-Type-Options', 'nosniff');
      return result;
    } else {
      const error = await response.json();
      console.error('Mailchimp error:', error);
      
      if (error.title === 'Member Exists') {
        return NextResponse.json({ 
          message: 'This email is already subscribed to our newsletter.' 
        }, { status: 400 });
      }
      
      return NextResponse.json({ 
        message: 'Failed to subscribe. Please try again later.' 
      }, { status: 500 });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        message: 'Invalid email format',
        errors: error.errors 
      }, { status: 400 });
    }
    
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ 
      message: 'Server error. Please try again later.' 
    }, { status: 500 });
  }
}

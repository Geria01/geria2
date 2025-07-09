import { NextResponse } from 'next/server';

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX || 'us14';
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

export async function POST(request: Request) {
  try {
    // Check if required environment variables are set
    if (!MAILCHIMP_API_KEY) {
      console.error('MAILCHIMP_API_KEY environment variable is not set');
      return NextResponse.json({ error: 'Newsletter service is not properly configured' }, { status: 500 });
    }

    if (!MAILCHIMP_LIST_ID) {
      console.error('MAILCHIMP_LIST_ID environment variable is not set');
      return NextResponse.json({ error: 'Newsletter service is not properly configured' }, { status: 500 });
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Mailchimp API request
    const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending', // GDPR compliant - requires double opt-in
        merge_fields: {
          FNAME: '',
          LNAME: ''
        },
        tags: ['blog-subscriber']
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      if (data.title === 'Member Exists') {
        return NextResponse.json({ error: 'This email is already subscribed' }, { status: 409 });
      }
      
      // More specific error handling
      if (data.title === 'Resource Not Found') {
        console.error('Mailchimp List ID not found. Please check MAILCHIMP_LIST_ID environment variable.');
        return NextResponse.json({ error: 'Newsletter service configuration error' }, { status: 500 });
      }
      
      if (data.title === 'API Key Invalid') {
        console.error('Invalid Mailchimp API key. Please check MAILCHIMP_API_KEY environment variable.');
        return NextResponse.json({ error: 'Newsletter service authentication error' }, { status: 500 });
      }
      
      console.error('Mailchimp error:', data);
      return NextResponse.json({ error: 'Failed to subscribe to newsletter' }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Successfully subscribed! Please check your email to confirm your subscription.',
      requiresConfirmation: true 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
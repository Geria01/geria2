import { NextResponse } from 'next/server';

const MAILCHIMP_API_KEY = 'd15ec857da58c38203dbf6d3813ab84e-us14';
const MAILCHIMP_SERVER_PREFIX = 'us14';
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID || 'your-list-id'; // You'll need to set this

export async function POST(request: Request) {
  try {
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
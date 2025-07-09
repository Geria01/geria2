
import { NextRequest, NextResponse } from 'next/server';

const mailchimp = require('@mailchimp/mailchimp_marketing');

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: 'd15ec857da58c38203dbf6d3813ab84e-us14',
  server: 'us14', // Extract server from API key
});

export async function POST(request: NextRequest) {
  try {
    const { email, gdprConsent } = await request.json();

    // Validate required fields
    if (!email || !gdprConsent) {
      return NextResponse.json(
        { error: 'Email and GDPR consent are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Add to Mailchimp list
    const listId = process.env.MAILCHIMP_LIST_ID || 'your-list-id'; // You'll need to set this
    
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'pending', // Use 'pending' for double opt-in (GDPR compliant)
      merge_fields: {
        GDPR: 'Yes',
        SIGNUP_DATE: new Date().toISOString(),
      },
      tags: ['blog-subscriber'],
    });

    return NextResponse.json(
      { 
        message: 'Successfully subscribed! Please check your email to confirm your subscription.',
        id: response.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Mailchimp subscription error:', error);

    // Handle specific Mailchimp errors
    if (error.response?.body?.title === 'Member Exists') {
      return NextResponse.json(
        { error: 'This email is already subscribed to our newsletter.' },
        { status: 400 }
      );
    }

    if (error.response?.body?.title === 'Invalid Resource') {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Subscription failed. Please try again later.' },
      { status: 500 }
    );
  }
}

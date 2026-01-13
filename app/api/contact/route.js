import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/config/site-config';

export async function POST(request) {
  try {
    const { name, email, phone, message, service } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    console.log('Setting up email transport with Gmail credentials');
    
    // Create a transporter with Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification error:', verifyError);
      return NextResponse.json(
        { error: 'Could not connect to email server: ' + verifyError.message },
        { status: 500 }
      );
    }

    // Email to business owner
    const businessEmail = await transporter.sendMail({
      from: `"${siteConfig.businessName} Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: `[Blenheim Painters] New Contact Form Submission from ${name}`,
      html: `
        <div style="border: 2px solid #4CAF50; padding: 10px; background-color: #f0f8f0; margin-bottom: 20px;">
          <p style="margin: 0; color: #2e7d32; font-weight: bold;">📧 Form submitted via Blenheim Painters website</p>
        </div>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Needed:</strong> ${service || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
        <hr style="margin-top: 20px; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">Source: Blenheim Painters Contact Form</p>
      `,
    });

    // Confirmation email to client
    const clientEmail = await transporter.sendMail({
      from: `"${siteConfig.businessName}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting ${siteConfig.businessName}`,
      html: `
        <h1>Thank You for Contacting ${siteConfig.businessName}</h1>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We have received your inquiry and will get back to you as soon as possible.</p>
        <p>Here's a copy of the information you provided:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          <li><strong>Service Needed:</strong> ${service || 'Not provided'}</li>
          <li><strong>Message:</strong> ${message || 'Not provided'}</li>
        </ul>
        <p>Best regards,</p>
        <p>Little Dog Decorating Team</p>
      `,
    });

    console.log('Business email sent: %s', businessEmail.messageId);
    console.log('Client confirmation email sent: %s', clientEmail.messageId);

    return NextResponse.json({ 
      success: true,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email: ' + error.message },
      { status: 500 }
    );
  }
} 
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const {
      roofSize,
      roofType,
      roofCondition,
      roofAngle,
      scaffolding,
      firstName,
      email
    } = await request.json();

    // Validate required fields
    if (!firstName || !email || !roofSize || !roofType) {
      return NextResponse.json(
        { error: 'First name, email, roof size, and roof type are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

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
    } catch (verifyError) {
      return NextResponse.json(
        { error: 'Could not connect to email server: ' + verifyError.message },
        { status: 500 }
      );
    }

    // Email to business owner
    const businessEmail = await transporter.sendMail({
      from: `"Roof Cost Calculator" <${process.env.EMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: `New Roof Cost Estimate Submission from ${firstName}`,
      html: `
        <h1>New Roof Cost Calculator Submission</h1>
        <ul>
          <li><strong>Name:</strong> ${firstName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Roof Size:</strong> ${roofSize} sqm</li>
          <li><strong>Roof Type:</strong> ${roofType}</li>
          <li><strong>Roof Condition:</strong> ${roofCondition}</li>
          <li><strong>Roof Angle:</strong> ${roofAngle}</li>
          <li><strong>Scaffolding Required:</strong> ${scaffolding ? 'Yes' : 'No'}</li>
        </ul>
      `,
    });

    // Confirmation email to client (optional)
    // await transporter.sendMail({
    //   from: `"Little Dog Decorating" <${process.env.EMAIL_USER}>`,
    //   to: email,
    //   subject: 'Your Roof Painting Estimate Request',
    //   html: `<p>Thank you for using our calculator, ${firstName}! We'll be in touch soon with your estimate.</p>`
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email: ' + error.message },
      { status: 500 }
    );
  }
} 
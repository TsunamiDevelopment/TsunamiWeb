import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    company,
    projectType,
    budget,
    message
  } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHOMAIL_USER,
      pass: process.env.ZOHOMAIL_PASS,
    },
  });

  try {
    // Email to owner
    await transporter.sendMail({
      from: 'Design - TsunamiDev <design@tsunamidev.org>',
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.ZOHOMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    // Confirmation email to client
    await transporter.sendMail({
      from: 'Design - TsunamiDev <design@tsunamidev.org>',
      to: email,
      subject: "Thank you for contacting Tsunami Development!",
      html: `
        <p>Hi ${firstName},</p>
        <p>Thanks for reaching out! We received your message and will get back to you shortly.</p>
        <p>Best,<br/>The Tsunami Development Team</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
}

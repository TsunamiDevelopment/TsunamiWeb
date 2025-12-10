import nodemailer from "nodemailer";
import { rateLimit } from "@/utils/rate-limit"; // make sure this exists!

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
    }

  // Get IP
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";

  // Rate limit
  const limit = await rateLimit.limit(ip);
  if (!limit.success) {
    return res.status(429).json({ message: "Slow down." });
  }

  // Honeypot check (this field should be hidden in your form)
  if (req.body.website) {
    return res.status(400).json({ success: false });
  }

  const {
    firstName,
    lastName,
    email,
    company,
    projectType,
    budget,
    message,
  } = req.body;

  // Basic validation
  if (!firstName || firstName.length < 2) {
    return res.status(400).json({ message: "Invalid name" });
  }
  if (!lastName || lastName.length < 2) {
    return res.status(400).json({ message: "Invalid name" });
  }
  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email" });
  }
  if (!message || message.length < 10) {
    return res.status(400).json({ message: "Message too short" });
  }

  // Email transport
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHOMAIL_USER,
      pass: process.env.ZOHOMAIL_PASS,
    },
  });

  try {
    // Email to you
    await transporter.sendMail({
      from: "Design - TsunamiDev <design@tsunamidev.org>",
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.ZOHOMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    // Confirmation email
    await transporter.sendMail({
      from: "Design - TsunamiDev <design@tsunamidev.org>",
      to: email,
      subject: "Thank you for contacting Tsunami Development!",
      html: `
        <p>Hi ${firstName},</p>
        <p>Thanks for reaching out! We received your message and will get back to you shortly.</p>
        <p>Best,<br/>The Tsunami Development Team</p>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ message: "Failed to send message" });
  }
}

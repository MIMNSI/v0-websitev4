import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("📨 Processing Contact Form for:", body.email);

    // 1. Validate that secrets exist
    if (!process.env.SMTP_PASSWORD || !process.env.SMTP_USERNAME) {
      console.error("❌ Missing SMTP Credentials in .env.local");
      return NextResponse.json(
        { message: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // 2. Configure the Transporter using YOUR variable names
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // True for 465, False for 587
      auth: {
        user: process.env.SMTP_USERNAME, // Matches your key
        pass: process.env.SMTP_PASSWORD, // Matches your key
      },
    });

    // 3. Define the Email
    const mailOptions = {
      from: `"MetaShop AI" <${process.env.EMAIL_FROM}>`, // Matches your key
      to: "info@metashopai.com", // Where the lead should go
      replyTo: body.email, // Hitting "Reply" goes to the customer
      subject: `New Contact Request: ${body.name}`,
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone || "Not provided"}
        Message: ${body.message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Submission</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${
        body.email
      }</a></p>
          <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
          <br/>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <strong>Message:</strong><br/>
            ${body.message}
          </div>
        </div>
      `,
    };

    // 4. Send
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error: any) {
    console.error("❌ SMTP Error:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}

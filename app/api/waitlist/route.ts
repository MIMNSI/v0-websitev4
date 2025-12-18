import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("📝 Processing Waitlist Joiner:", body.email);

    // 1. Validate Secrets (Reusing the Contact Form credentials)
    if (!process.env.SMTP_PASSWORD || !process.env.SMTP_USERNAME) {
      console.error("❌ Missing SMTP Credentials in .env.local");
      return NextResponse.json(
        { message: "Server config error" },
        { status: 500 }
      );
    }

    // 2. Setup Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 3. Define Email Content (Specific for Waitlist)
    const mailOptions = {
      from: `"MetaShop Waitlist" <${process.env.EMAIL_FROM}>`,
      to: "info@metashopai.com", // Where the lead goes
      replyTo: body.email,
      subject: `🚀 New Waitlist Joiner: ${body.email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #2dffa7; background: #000; padding: 10px; display: inline-block;">New Waitlist Signup</h2>
          <p>Someone just joined the <strong>Image-to-3D</strong> waitlist!</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p><strong>Email:</strong> <a href="mailto:${
            body.email
          }" style="color: #0070f3; text-decoration: none;">${
        body.email
      }</a></p>
          <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
          <p><strong>Source:</strong> ${body.source || "Website"}</p>
          <br/>
          <small style="color: #888;">This lead was sent directly from your V4 website.</small>
        </div>
      `,
    };

    // 4. Send
    await transporter.sendMail(mailOptions);
    console.log("✅ Waitlist Email sent successfully!");

    // Return 'success: true' to match frontend expectations
    return NextResponse.json({ success: true, message: "Added to waitlist!" });
  } catch (error: any) {
    console.error("❌ Waitlist Error:", error);
    return NextResponse.json(
      { message: "Failed to join waitlist." },
      { status: 500 }
    );
  }
}

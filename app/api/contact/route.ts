import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate the request data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Configure Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <rafayzia10@gmail.com>`,
      to: "rafayzia10@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #f8f9fa; padding: 30px; border-radius: 10px; border-left: 4px solid #007bff;">
              <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
              <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong style="color: #007bff;">Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong style="color: #007bff;">Email:</strong> ${email}</p>
                <p style="margin: 10px 0;"><strong style="color: #007bff;">Subject:</strong> ${subject}</p>
              </div>
              <div style="background-color: white; padding: 20px; border-radius: 8px;">
                <h3 style="color: #333; margin-bottom: 15px;">Message:</h3>
                <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
              </div>
              <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  This message was sent from your portfolio contact form at ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Auto-reply email to the person who submitted the form
    const autoReplyOptions = {
      from: `"Rafay Zia" <rafayzia10@gmail.com>`,
      to: email,
      subject: "Thank you for reaching out! - Rafay Zia",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #f8f9fa; padding: 30px; border-radius: 10px; border-left: 4px solid #007bff;">
              <h2 style="color: #333; margin-bottom: 20px;">Thank you for reaching out!</h2>
              <p style="line-height: 1.6; color: #555;">Hi ${name},</p>
              <p style="line-height: 1.6; color: #555;">
                Thank you for your message! I've received your inquiry and I'll get back to you soon.
              </p>
              <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0; color: #333;"><strong>If you need a faster response:</strong></p>
                <p style="margin: 10px 0; color: #555;">
                  Contact me on <a href="https://www.upwork.com/freelancers/~016187e6d333d1a266" 
                  style="color: #007bff; text-decoration: none;">Upwork</a> - I'll reply for sure there!
                </p>
                <p style="margin: 10px 0; color: #555;">
                  Or email me directly at <a href="mailto:rafayzia10@gmail.com" 
                  style="color: #007bff; text-decoration: none;">rafayzia10@gmail.com</a>
                </p>
              </div>
              <p style="line-height: 1.6; color: #555;">
                <strong>Expected response time:</strong> 2-3 business days
              </p>
              <div style="margin-top: 30px; padding: 20px; background-color: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196f3;">
                <p style="margin: 0; color: #333;"><strong>Your message:</strong></p>
                <p style="margin: 10px 0; color: #666; font-style: italic;">"${message}"</p>
              </div>
              <div style="margin-top: 20px; text-align: center;">
                <p style="color: #666; font-size: 14px;">
                  Best regards,<br>
                  <strong style="color: #007bff;">Rafay Zia</strong><br>
                  Full Stack Developer<br>
                  <a href="https://rafayzia.dev" style="color: #007bff; text-decoration: none;">rafayzia.dev</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send both emails
    const [contactResult, autoReplyResult] = await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);
    
    console.log('Contact email sent:', contactResult.messageId);
    console.log('Auto-reply sent:', autoReplyResult.messageId);
    
    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully!" 
    })

  } catch (error: any) {
    console.error("Error sending email via Brevo SMTP:", error)
    
    // Provide more specific error messages
    let errorMessage = "Failed to send message";
    if (error?.message) {
      errorMessage = error.message;
    }
    
    return NextResponse.json({ 
      error: errorMessage,
      success: false 
    }, { status: 500 })
  }
}
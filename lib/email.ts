import nodemailer from "nodemailer";

// Set port and secure mode correctly
const port = Number(process.env.EMAIL_SERVER_PORT || process.env.SMTP_PORT || 587);
const secure = port === 465; // true for port 465, false for 587

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST || process.env.SMTP_HOST,
  port,
  secure,
  auth: {
    user: process.env.EMAIL_SERVER_USER || process.env.SMTP_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD || process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, 
  },
});

// Send Verification Email (OTP)
export async function sendVerificationEmail(email: string, token: string) {
  const otp = token.replace(/\D/g, "").substring(0, 6); // Get 6-digit code

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || `"BankApp" <${process.env.EMAIL_SERVER_USER}>`,
    to: email,
    subject: "Verify your email address",
    text: `Your verification code is: ${otp}. This code will expire in 10 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">Verify your email address</h2>
        <p>Thank you for signing up with BankApp. Please use the following code to verify your email address:</p>
        <div style="background-color: #F3F4F6; padding: 16px; text-align: center; font-size: 24px; letter-spacing: 8px; font-weight: bold;">
          ${otp}
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't sign up for BankApp, you can safely ignore this email.</p>
      </div>
    `,
  });
}

// General-purpose Send Email
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM || `"BankApp" <${process.env.EMAIL_SERVER_USER}>`,
    to,
    subject,
    html,
  });
}

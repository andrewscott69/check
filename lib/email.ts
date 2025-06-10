import nodemailer from "nodemailer"
import { generateEmailTemplate } from "@/lib/emailTemplate"

const port = Number(process.env.EMAIL_SERVER_PORT || process.env.SMTP_PORT || 587)
const secure = port === 465

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST || process.env.SMTP_HOST,
  port,
  secure,
  auth: {
    user: process.env.EMAIL_SERVER_USER || process.env.SMTP_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD || process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
})

// Send Verification Email (OTP)
export async function sendVerificationEmail(email: string, token: string) {
  const otp = token.replace(/\D/g, "").substring(0, 6)

  const html = generateEmailTemplate({
    title: "Verify your email address",
    message: `Thank you for signing up with BankApp. Please use the following code to verify your email address:<br /><br />
              <strong style="font-size: 24px; letter-spacing: 8px;">${otp}</strong><br /><br />
              This code will expire in 10 minutes.`,
  })

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || `"BankApp" <${process.env.EMAIL_SERVER_USER}>`,
    to: email,
    subject: "Verify your email address",
    html,
  })
}

// General-purpose Send Email
export async function sendEmail({
  to,
  subject,
  title,
  message,
  ctaText,
  ctaUrl,
  footerNote,
}: {
  to: string
  subject: string
  title: string
  message: string
  ctaText?: string
  ctaUrl?: string
  footerNote?: string
}) {
  const html = generateEmailTemplate({ title, message, ctaText, ctaUrl, footerNote })

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || `"BankApp" <${process.env.EMAIL_SERVER_USER}>`,
    to,
    subject,
    html,
  })
}

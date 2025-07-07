import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { email, accountNumber, message } = await req.json()

  if (!email || !accountNumber || !message) {
    return NextResponse.json({ message: "Please fill in all fields." }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  })

  const mailOptions = {
    from: `"Support Contact" <${process.env.EMAIL_SERVER_USER}>`,
    to: process.env.EMAIL_SERVER_USER,
    subject: `Support Request from ${email}`,
    text: `Account Number: ${accountNumber}\n\nMessage:\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Your message has been sent to support." })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 })
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ success: true }); 
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 1000 * 60 * 20); 

    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token,
        type: "PASSWORD_RESET",
        expiresAt,
      },
    });

    const resetLink = `https://silvercrest-eta.vercel.app/u/reset-password?token=${token}`;

    await sendEmail({
      to: email,
      subject: "Reset Your Password",
      title: "Password Reset Request",
      message: `We received a request to reset your password. Click the link below to set a new password:<br/><br/><a href="${resetLink}" style="color:blue;">Reset Password</a><br/><br/>If you didn't request this, please ignore this email.`,
      ctaText: "Reset Password",
      ctaUrl: resetLink,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

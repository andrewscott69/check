import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { sendEmail } from "@/lib/email";

const JWT_SECRET = process.env.JWT_SECRET as string;

function normalizeOtp(token: string | null | undefined): string | null {
  if (typeof token !== "string") return null;
  return token.replace(/\D/g, "").substring(0, 6);
}

export async function POST(request: Request) {
  try {
    const { email, otp, status } = await request.json();

    if (!email || !otp || !status) {
      return NextResponse.json(
        { error: "Email, verification code, and status are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const tokenEntry = await prisma.verificationToken.findFirst({
      where: {
        userId: user.id,
        type: "EMAIL_VERIFICATION",
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: "desc" },
    });

    if (!tokenEntry || normalizeOtp(tokenEntry.token) !== otp) {
      return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    // Mark user as verified (in both signup and login)
    await prisma.user.update({
      where: { id: user.id },
      data: { isVerified: true },
    });

    // Delete used OTP
    await prisma.verificationToken.delete({ where: { id: tokenEntry.id } });

    // Send welcome email on first signup
    if (status === "signup") {
      await sendEmail({
        to: email,
        subject: "Account Creation!",
        title: "Welcome to SilverCrest Bank!",
        message: `
          Dear Customer,<br /><br />
          Your account has been verified successfully. Please note that it will take <strong>5 to 7 business days</strong> for your account to become fully active and ready for use.<br /><br />
          Thank you for joining us!
        `,
        ctaText: "Visit Your Dashboard",
        ctaUrl: "https://silvercrestbank.com/dashboard",
        footerNote: "Need help? Reply to this email or contact support@silvercrestbank.com.",
      });

      return NextResponse.json({
        success: true,
        message: "Email verified successfully. Welcome email sent.",
        redirect: "/u/login",
      });
    }

    // If status is login, create session and respond
    if (status === "login") {
      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "7d",
      });

      const response = NextResponse.json({
        success: true,
        message: "OTP verified and session created",
        redirect: user.isOnboarded ? "/u/dashboard" : "/u/signup",
      });

      response.cookies.set("session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid status" }, { status: 400 });

  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ error: "Failed to verify" }, { status: 500 });
  }
}

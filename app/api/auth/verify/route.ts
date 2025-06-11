import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

// Safe helper to normalize token to 6-digit OTP
function normalizeOtp(token: string | null | undefined): string | null {
  if (typeof token !== "string") return null;
  return token.replace(/\D/g, "").substring(0, 6);
}

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and verification code are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        userId: user.id,
        type: "EMAIL_VERIFICATION",
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: "desc" },
    });

    if (!verificationToken) {
      return NextResponse.json(
        { error: "Verification code expired or not found" },
        { status: 400 }
      );
    }

    const normalizedToken = normalizeOtp(verificationToken.token);

    if (!normalizedToken || otp !== normalizedToken) {
      return NextResponse.json(
        { error: "Invalid verification code" },
        { status: 400 }
      );
    }

    
    await prisma.user.update({
      where: { id: user.id },
      data: { isVerified: true },
    });

    // Delete used verification token
    await prisma.verificationToken.delete({
      where: { id: verificationToken.id },
    });

    
   // const { firstName } = user;

    
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
    });

  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify email" },
      { status: 500 }
    );
  }
}

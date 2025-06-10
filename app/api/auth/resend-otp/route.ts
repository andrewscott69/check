import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/email";
import { TokenType } from "@prisma/client"; 
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Delete any existing email verification tokens for this user
    await prisma.verificationToken.deleteMany({
      where: {
        userId: user.id,
        type: TokenType.EMAIL_VERIFICATION, 
      },
    });

    // Generate new token
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10); 

    // Create new verification token
    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token,
        type: TokenType.EMAIL_VERIFICATION, 
        expiresAt,
      },
    });

    
    await sendVerificationEmail(email, token);

    return NextResponse.json({
      success: true,
      message: "Verification code resent to your email",
    });
  } catch (error) {
    console.error("Resend OTP error:", error);
    return NextResponse.json(
      { error: "Failed to resend verification code" },
      { status: 500 }
    );
  }
}

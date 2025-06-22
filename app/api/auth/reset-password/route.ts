import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { TokenType } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword || newPassword.length < 6) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const tokenEntry = await prisma.verificationToken.findFirst({
      where: {
        token,
        type: TokenType.PASSWORD_RESET,
        expiresAt: { gt: new Date() },
      },
    });

    if (!tokenEntry) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: tokenEntry.userId },
      data: { password: hashed },
    });

    await prisma.verificationToken.delete({ where: { id: tokenEntry.id } });

    return NextResponse.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

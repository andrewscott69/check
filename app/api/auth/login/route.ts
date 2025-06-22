import { NextResponse } from "next/server"
import { compare } from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { sendVerificationEmail } from "@/lib/email"
import crypto from "crypto"

export async function POST(request: Request) {
  try {
    const { id, password } = await request.json()

    if (!id || !password) {
      return new Response("Missing ID or password", { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { id } })

    if (!user || !user.password) {
      return NextResponse.json({ error: "Invalid ID or password" }, { status: 401 })
    }

    const isPasswordValid = await compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid ID or password" }, { status: 401 })
    }

    if (!user.isVerified) {
      return NextResponse.json({ error: "Please verify your email before logging in" }, { status: 401 })
    }

    const token = crypto.randomBytes(32).toString("hex")
    const expiresAt = new Date(Date.now() + 1000 * 60 * 20)


    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token,
        type: "EMAIL_VERIFICATION",
        expiresAt,
      },
    })

    
    await sendVerificationEmail(user.email, token)

    return NextResponse.json({
      success: true,
      message: "OTP sent to email",
      redirect: "/u/verify-otp",
      status: "login",
      email: user.email, 
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}

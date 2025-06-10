import { NextResponse } from "next/server"
import { compare } from "bcryptjs"
import { prisma } from "@/lib/prisma"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function POST(request: Request) {
  try {
    const requestBody = await request.json()
    const { email, password }: { email: string; password: string } = requestBody

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user || !user.password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    if (!user.isVerified) {
      return NextResponse.json({ error: "Please verify your email before logging in" }, { status: 401 })
    }

    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }
  const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }, 
    )

    
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      redirect: user.isOnboarded ? "/u/dashboard" : "/u/signup",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isOnboarded: user.isOnboarded,
      },
    })

   
    response.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, 
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ success: false, error: "Missing email" }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user || !user.phoneNumber) {
      return NextResponse.json({ success: false, error: "Phone number not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, phone: user.phoneNumber })
  } catch (err) {
    console.error("get-phone error:", err)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}

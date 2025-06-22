
import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { prisma } from "@/lib/prisma"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const sessionCookie = req.cookies.get("session")
  if (!sessionCookie?.value) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const decoded = jwt.verify(sessionCookie.value, JWT_SECRET) as { userId: string }
    const transaction = await prisma.transaction.findUnique({
      where: {
        id: params.id,
        userId: decoded.userId,
      },
    })

    if (!transaction) return NextResponse.json({ error: "Not found" }, { status: 404 })

    return NextResponse.json(transaction)
  } catch (err) {
    return NextResponse.json({ error: "Error fetching transaction" }, { status: 500 })
  }
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const sessionCookie = req.cookies.get("session")
    if (!sessionCookie?.value) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  
    const { newDate } = await req.json()
    if (!newDate) return NextResponse.json({ error: "Missing new date" }, { status: 400 })
  
    try {
      const decoded = jwt.verify(sessionCookie.value, JWT_SECRET) as { userId: string }
  
      const updated = await prisma.transaction.updateMany({
        where: { id: params.id, userId: decoded.userId },
        data: { createdAt: new Date(newDate) },
      })
  
      if (!updated.count) return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 })
  
      return NextResponse.json({ success: true })
    } catch (err) {
      return NextResponse.json({ error: "Update failed" }, { status: 500 })
    }
  }
  

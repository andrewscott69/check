import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import jwt from "jsonwebtoken"
import { generateReceiptHTML } from "@/lib/receipt"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function GET(req: NextRequest) {
  try {
    // Extract session token from cookies
    const session = req.cookies.get("session")?.value
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Verify JWT session
    let decoded: { userId: string }
    try {
      decoded = jwt.verify(session, JWT_SECRET) as { userId: string }
    } catch {
      return NextResponse.json({ error: "Invalid or expired session" }, { status: 401 })
    }

    // Get transaction ID from URL
    const url = new URL(req.url)
    const idMatch = url.pathname.match(/\/transactions\/([^\/]+)\/?$/)
    const txId = idMatch?.[1]

    if (!txId) {
      return NextResponse.json({ error: "Invalid transaction ID" }, { status: 400 })
    }

    // Fetch transaction
    const transaction = await prisma.transaction.findFirst({
      where: {
        id: txId,
        userId: decoded.userId,
      },
    })

    if (!transaction) {
      return NextResponse.json({ error: "Transaction not found" }, { status: 404 })
    }

    // Generate receipt HTML
    const html = generateReceiptHTML(transaction)

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": `attachment; filename=receipt-${transaction.id}.html`,
      },
    })
  } catch (err) {
    console.error("Error generating receipt:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

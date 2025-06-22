import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import jwt from "jsonwebtoken"
import { generateReceiptHTML } from "@/lib/receipt"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function GET(req: NextRequest) {
  try {

    const session = req.cookies.get("session")?.value
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }


    let decoded
    try {
      decoded = jwt.verify(session, JWT_SECRET) as { userId: string }
    } catch (err) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
    }

  
    const url = new URL(req.url)
    const segments = url.pathname.split("/")
    const txId = segments[segments.length - 2] 

    if (!txId) {
      return NextResponse.json({ error: "Invalid transaction ID" }, { status: 400 })
    }

    // Fetch transaction
    const tx = await prisma.transaction.findFirst({
      where: {
        id: txId,
        userId: decoded.userId,
      },
    })

    if (!tx) {
      return NextResponse.json({ error: "Transaction not found" }, { status: 404 })
    }

    const html = generateReceiptHTML(tx)

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": `attachment; filename=receipt-${tx.id}.html`,
      },
    })
  } catch (error) {
    console.error("Receipt generation failed:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

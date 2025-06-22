
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import jwt from "jsonwebtoken"
import { generateReceiptHTML } from "@/lib/receipt"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const session = req.headers.get("cookie")?.split("session=")[1]?.split(";")[0]
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const decoded = jwt.verify(session, JWT_SECRET) as { userId: string }
    const tx = await prisma.transaction.findUnique({
      where: { id: params.id, userId: decoded.userId },
    })

    if (!tx) return NextResponse.json({ error: "Transaction not found" }, { status: 404 })

    const html = generateReceiptHTML(tx)

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": `attachment; filename=receipt-${tx.id}.html`,
      },
    })
  } catch (err) {
    return NextResponse.json({ error: "Failed to generate receipt" }, { status: 500 })
  }
}

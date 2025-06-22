import { type NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GET(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get("session");
    if (!sessionCookie?.value) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let decoded;
    try {
      decoded = jwt.verify(sessionCookie.value, JWT_SECRET) as { userId: string };
    } catch {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const skip = (page - 1) * limit;

    // Total count for pagination
    const total = await prisma.transaction.count({
      where: { userId: decoded.userId },
    });

    // Paginated transactions
    const transactions = await prisma.transaction.findMany({
      where: { userId: decoded.userId },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      include: {
        bankAccount: true,
        card: true,
      },
    });

    return NextResponse.json({
      page,
      limit,
      total,
      transactions,
    });
  } catch (error) {
    console.error("Transaction fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

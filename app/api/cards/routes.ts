import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, cardNumber, expiryDate, cvv, type, color } = body

    // In a real app, you'd get the userId from authentication
    // For now, we'll use a placeholder
    const userId = "user_placeholder_id"

    const card = await prisma.card.create({
      data: {
        userId,
        name,
        cardNumber,
        expiryDate,
        cvv,
        isActive: true,
        balance: 0,
        currencyType: "USDT", // You might want to make this configurable
        // Note: type and color aren't in your schema, you might want to add them
        // or store them differently
      },
    })

    return NextResponse.json({
      success: true,
      card: {
        id: card.id,
        name: card.name,
        number: card.cardNumber,
        expiry: card.expiryDate,
        type,
        color,
      },
    })
  } catch (error) {
    console.error("Error creating card:", error)
    return NextResponse.json({ success: false, error: "Failed to create card" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // In a real app, you'd filter by authenticated user
    const cards = await prisma.card.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    const formattedCards = cards.map((card) => ({
      id: card.id,
      name: card.name,
      number: card.cardNumber,
      expiry: card.expiryDate,
      type: "visa", // You'll need to store/determine this
      color: "blue", // You'll need to store/determine this
    }))

    return NextResponse.json({ success: true, cards: formattedCards })
  } catch (error) {
    console.error("Error fetching cards:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch cards" }, { status: 500 })
  }
}

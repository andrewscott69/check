import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { prisma } from "@/lib/prisma"
import { CardType, CardNetwork } from "@prisma/client"


const JWT_SECRET = process.env.JWT_SECRET as string

function detectCardNetwork(cardNumber: string): CardNetwork {
  const cleaned = cardNumber.replace(/\s/g, "")
  if (/^4/.test(cleaned)) return CardNetwork.VISA
  if (/^5[1-5]/.test(cleaned) || /^2(22[1-9]|2[3-9]|[3-6]|7[0-1]|720)/.test(cleaned)) return CardNetwork.MASTERCARD
  if (/^3[47]/.test(cleaned)) return CardNetwork.AMEX
  if (/^6/.test(cleaned)) return CardNetwork.DISCOVER
  return CardNetwork.UNKNOWN
}

function getCardColor(cardNumber: string): string {
  const type = detectCardNetwork(cardNumber)
  switch (type) {
    case CardNetwork.VISA:
      return "blue"
    case CardNetwork.MASTERCARD:
      return "red"
    case CardNetwork.AMEX:
      return "green"
    case CardNetwork.DISCOVER:
      return "purple"
    default:
      return "gray"
  }
}

async function getUserIdFromRequest(request: NextRequest): Promise<string | null> {
  const sessionCookie = request.cookies.get("session")
  if (!sessionCookie?.value) return null
  try {
    const decoded = jwt.verify(sessionCookie.value, JWT_SECRET) as { userId: string }
    return decoded.userId
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = await getUserIdFromRequest(request)
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const body = await request.json()
    const { name, cardNumber, expiryDate, cvv } = body

    const network = detectCardNetwork(cardNumber)
    const color = getCardColor(cardNumber)

    const card = await prisma.card.create({
      data: {
        userId,
        name,
        cardNumber,
        expiryDate,
        cvv,
        type: CardType.DEBIT, 
        network,
        color,
        isActive: true,
        balance: 0,
        currencyType: "USD",
      },
    })

    return NextResponse.json({
      success: true,
      card: {
        id: card.id,
        name: card.name,
        number: card.cardNumber,
        expiry: card.expiryDate,
        type: card.type,
        network: card.network,
        color: card.color,
      },
    })
  } catch (error) {
    console.error("Error creating card:", error)
    return NextResponse.json({ success: false, error: "Failed to create card" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const userId = await getUserIdFromRequest(request)
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const cards = await prisma.card.findMany({
      where: {
        userId,
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
      type: card.type,
      network: card.network,
      color: card.color,
    }))

    return NextResponse.json({ success: true, cards: formattedCards })
  } catch (error) {
    console.error("Error fetching cards:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch cards" }, { status: 500 })
  }
}

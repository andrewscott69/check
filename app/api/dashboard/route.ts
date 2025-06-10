import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { prisma } from "@/lib/prisma"

const JWT_SECRET = process.env.JWT_SECRET as string

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get("session")

    if (!sessionCookie?.value) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    let decoded
    try {
      decoded = jwt.verify(sessionCookie.value, JWT_SECRET) as { userId: string; email: string }
    } catch (err) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        address: true,
        bankAccounts: true,
        cards: {
          where: { isActive: true },
          orderBy: { createdAt: "desc" },
        },
        transactions: {
          orderBy: { createdAt: "desc" },
          take: 10,
        },
        walletAddresses: true,
        
      },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Calculate dashboard metrics
    const totalBalance = user.bankAccounts.reduce((sum, account) => sum + account.balance, 0)
    const totalSavings = totalBalance * 0.1 
    const monthlySpending = user.transactions
      .filter((t) => {
        const transactionDate = new Date(t.createdAt)
        const currentMonth = new Date()
        return (
          transactionDate.getMonth() === currentMonth.getMonth() &&
          transactionDate.getFullYear() === currentMonth.getFullYear()
        )
      })
      .reduce((sum, t) => sum + Math.abs(t.amount), 0)

    
    const formattedCards = user.cards.map((card) => ({
      id: card.id,
      name: card.name || "Card",
      number: card.cardNumber,
      expiry: card.expiryDate,
      type: detectCardType(card.cardNumber),
      color: getCardColor(card.cardNumber),
      balance: card.balance,
    }))

    
    const formattedBankAccounts = user.bankAccounts.map((account) => ({
      id: account.id,
      accountNumber: account.accountNumber,
      routingNumber: account.routingNumber,
      accountType: account.accountType,
      accountName: account.accountName,
      balance: account.balance,
      availableBalance: account.availableBalance,
      status: account.status,
      currencyType: account.currencyType,
      interestRate: account.interestRate,
      overdraftLimit: account.overdraftLimit,
      hasOverdraftProtection: account.hasOverdraftProtection,
      minimumBalance: account.minimumBalance,
      openedAt: account.openedAt,
    }))

    const dashboardData = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      totalBalance,
      totalSavings,
      monthlySpending,
      cards: formattedCards,
      transactions: user.transactions,
      bankAccounts: formattedBankAccounts,
      isOnboarded: user.isOnboarded,
    }

    return NextResponse.json(dashboardData)
  } catch (error) {
    console.error("Dashboard GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Helper function to detect card type
function detectCardType(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\s/g, "")

  if (/^4/.test(cleaned)) return "visa"
  if (/^5[1-5]/.test(cleaned) || /^2(22[1-9]|2[3-9]|[3-6]|7[0-1]|720)/.test(cleaned)) return "mastercard"
  if (/^3[47]/.test(cleaned)) return "amex"
  if (/^6/.test(cleaned)) return "discover"

  return "unknown"
}

// Helper function to get card color based on type
function getCardColor(cardNumber: string): string {
  const type = detectCardType(cardNumber)

  switch (type) {
    case "visa":
      return "blue"
    case "mastercard":
      return "red"
    case "amex":
      return "green"
    case "discover":
      return "purple"
    default:
      return "gray"
  }
}

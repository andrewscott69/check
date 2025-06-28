import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { sendVerificationEmail } from "@/lib/email"
import crypto from "crypto"

// --- Helper: Generate Random ID ---
function generateCustomUserId(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const randomLetters = Array.from({ length: 2 }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join("")

  const randomNumbers = Math.floor(100 + Math.random() * 900) // 3-digit number

  return `SC-${randomNumbers}${randomLetters}`
}

// --- Helper: Ensure ID is Unique ---
async function generateUniqueUserId(): Promise<string> {
  let id: string
  let exists = true

  do {
    id = generateCustomUserId()
    const existing = await prisma.user.findUnique({ where: { id } })
    exists = !!existing
  } while (exists)

  return id
}

// --- Account Number Generator ---
function generateAccountNumber(): string {
  const timestamp = Date.now().toString().slice(-6) 
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, "0")
  return timestamp + random
}

// --- Get Account Name ---
function getDefaultAccountName(accountType: string, firstName: string): string {
  const typeMap: Record<string, string> = {
    CHECKING: "Checking Account",
    SAVINGS: "Savings Account",
    BUSINESS_CHECKING: "Business Checking",
    BUSINESS_SAVINGS: "Business Savings",
    MONEY_MARKET: "Money Market Account",
    CERTIFICATE_OF_DEPOSIT: "Certificate of Deposit",
  }

  return `${firstName}'s ${typeMap[accountType] || "Account"}`
}

// --- Interest Rates ---
function getInterestRate(accountType: string): number {
  const rateMap: Record<string, number> = {
    CHECKING: 0.01,
    SAVINGS: 0.5,
    BUSINESS_CHECKING: 0.01,
    BUSINESS_SAVINGS: 0.75,
    MONEY_MARKET: 1.25,
    CERTIFICATE_OF_DEPOSIT: 2.5,
  }

  return rateMap[accountType] || 0.0
}

// --- Main Signup Handler ---
export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      dateOfBirth,
      accountType,
      streetAddress,
      city,
      state,
      zipCode,
      country = "US",
      occupation,
      employmentStatus,
      annualIncome,
      agreeToTerms,
    } = body

    if (!email || !password || !firstName || !lastName || !accountType) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
    }

    if (!agreeToTerms) {
      return NextResponse.json({ error: "You must agree to the terms and conditions" }, { status: 400 })
    }

    const validAccountTypes = [
      "CHECKING",
      "SAVINGS",
      "BUSINESS_CHECKING",
      "BUSINESS_SAVINGS",
      "MONEY_MARKET",
      "CERTIFICATE_OF_DEPOSIT",
    ]

    if (!validAccountTypes.includes(accountType)) {
      return NextResponse.json({ error: "Invalid account type" }, { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const uniqueId = await generateUniqueUserId()

    const newUser = await prisma.user.create({
      data: {
        id: uniqueId,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
        occupation,
        employmentStatus,
        annualIncome,
        isOnboarded: true,
        address: {
          create: {
            streetAddress,
            city,
            state,
            zipCode,
            country,
          },
        },
        bankAccounts: {
          create: {
            accountNumber: generateAccountNumber(),
            routingNumber: "SCBXX7710537",
            accountType,
            accountName: getDefaultAccountName(accountType, firstName),
            interestRate: getInterestRate(accountType),
            balance: 0.0,
            availableBalance: 0.0,
            status: "PENDING_APPROVAL",
            currencyType: "USD",
            hasOverdraftProtection: false,
            minimumBalance: 0.0,
          },
        },
      },
      include: {
        bankAccounts: true,
        address: true,
      },
    })

    const token = crypto.randomBytes(32).toString("hex")
    const expiresAt = new Date(Date.now() + 1000 * 60 * 20) 

    await prisma.verificationToken.create({
      data: {
        userId: newUser.id,
        token,
        type: "EMAIL_VERIFICATION",
        expiresAt,
      },
    })

    await sendVerificationEmail(email, token)

    return NextResponse.json(
      {
        message: "User registered successfully. Verification email sent.",
        user: {
          id: newUser.id,
          email: newUser.email,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Register API error:", error)

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Something went wrong" },
      { status: 500 }
    )
  }
}

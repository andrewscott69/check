import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


function generateAccountNumber(): string {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
  return timestamp + random;
}

function getDefaultAccountName(accountType: string, firstName: string): string {
  const typeMap: Record<string, string> = {
    CHECKING: "Checking Account",
    SAVINGS: "Savings Account",
    BUSINESS_CHECKING: "Business Checking",
    BUSINESS_SAVINGS: "Business Savings",
    MONEY_MARKET: "Money Market Account",
    CERTIFICATE_OF_DEPOSIT: "Certificate of Deposit",
  };
  return `${firstName}'s ${typeMap[accountType] || "Account"}`;
}

function getInterestRate(accountType: string): number {
  const rateMap: Record<string, number> = {
    CHECKING: 0.01,
    SAVINGS: 0.5,
    BUSINESS_CHECKING: 0.01,
    BUSINESS_SAVINGS: 0.75,
    MONEY_MARKET: 1.25,
    CERTIFICATE_OF_DEPOSIT: 2.5,
  };
  return rateMap[accountType] || 0.0;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { accountType = "CHECKING", email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required to identify user" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const validAccountTypes = [
      "CHECKING",
      "SAVINGS",
      "BUSINESS_CHECKING",
      "BUSINESS_SAVINGS",
      "MONEY_MARKET",
      "CERTIFICATE_OF_DEPOSIT",
    ];

    if (!validAccountTypes.includes(accountType)) {
      return NextResponse.json({ error: "Invalid account type" }, { status: 400 });
    }

    const account = await prisma.bankAccount.create({
      data: {
        userId: user.id,
        accountNumber: generateAccountNumber(),
        routingNumber: "SCBXX7710537",
        accountType,
        accountName: getDefaultAccountName(accountType, user.firstName || "User"),
        interestRate: getInterestRate(accountType),
        balance: 0.0,
        availableBalance: 0.0,
        status: "PENDING_APPROVAL",
        currencyType: "USD",
        hasOverdraftProtection: false,
        minimumBalance: 0.0,
      },
    });

    return NextResponse.json(account, { status: 201 });
  } catch (error) {
    console.error("Create Bank Account Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Server error" },
      { status: 500 }
    );
  }
}

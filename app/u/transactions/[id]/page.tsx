import Link from "next/link"
import { ArrowDown, ArrowLeft, DollarSign, Download, MapPin, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MobileNav } from "@/components/mobile-nav"
import { UserNav } from "@/components/user-nav"

export default function TransactionDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch transaction details based on the ID
  const transaction = {
    id: params.id,
    description: "Starbucks Coffee",
    amount: "-$4.50",
    date: "Today, 8:30 AM",
    type: "debit",
    category: "Food & Drink",
    merchant: "Starbucks",
    location: "123 Main St, San Francisco, CA",
    paymentMethod: "Visa ending in 4587",
    reference: "TXN123456789",
    status: "Completed",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <DollarSign className="h-6 w-6" />
          <span>BankApp</span>
        </Link>
        <MobileNav />
        <div className="ml-auto flex items-center gap-4">
          <UserNav />
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/transactions">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Transaction Details</h1>
          </div>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{transaction.description}</CardTitle>
                  <CardDescription>{transaction.date}</CardDescription>
                </div>
                <div
                  className={`text-xl font-bold ${
                    transaction.type === "credit" ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {transaction.amount}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${
                    transaction.type === "credit" ? "bg-emerald-100" : "bg-rose-100"
                  }`}
                >
                  {transaction.type === "credit" ? (
                    <ArrowDown className={`h-8 w-8 text-emerald-600`} />
                  ) : (
                    <ArrowDown className={`h-8 w-8 text-rose-600`} />
                  )}
                </div>
              </div>
              <Separator />
              <div className="grid gap-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium">{transaction.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">{transaction.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Merchant</span>
                  <span className="font-medium">{transaction.merchant}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="font-medium">{transaction.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reference</span>
                  <span className="font-medium">{transaction.reference}</span>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{transaction.location}</span>
              </div>
              <div className="flex justify-center gap-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Receipt
                </Button>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}


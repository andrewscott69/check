import Link from "next/link"
import { Bell, CreditCard, DollarSign, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MobileNav } from "@/components/mobile-nav"
import { UserNav } from "@/components/user-nav"
import { CardsList } from "@/components/cards-list"

export default function CardsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden md:flex md:gap-2 lg:gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <DollarSign className="h-6 w-6" />
            <span>BankApp</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link href="/cards" className="text-sm font-medium text-primary">
            Cards
          </Link>
          <Link
            href="/transactions"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Transactions
          </Link>
          <Link
            href="/settings"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Settings
          </Link>
        </nav>
        <MobileNav />
        <div className="ml-auto flex items-center gap-4">
          <form className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-64 rounded-lg bg-background pl-8 md:w-80" />
            </div>
          </form>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <UserNav />
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Cards</h1>
            <p className="text-muted-foreground">Manage your debit and credit cards.</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Card
          </Button>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Cards</CardTitle>
              <CardDescription>You have 3 active cards. Click on a card to view details.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <CardsList expanded />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Security</CardTitle>
              <CardDescription>Manage your card security settings.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium leading-none">Online Transactions</p>
                      <p className="text-sm text-muted-foreground">Allow online purchases with your cards</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Enabled
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium leading-none">International Transactions</p>
                      <p className="text-sm text-muted-foreground">Allow transactions outside your country</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Disabled
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium leading-none">ATM Withdrawals</p>
                      <p className="text-sm text-muted-foreground">Allow cash withdrawals from ATMs</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Enabled
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}


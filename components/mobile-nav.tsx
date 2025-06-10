"use client"

import { useState } from "react"
import Link from "next/link"
import { CreditCard, DollarSign, Home, Menu, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setOpen(false)}>
            <DollarSign className="h-6 w-6" />
            <span>BankApp</span>
          </Link>
        </div>
        <div className="mt-8 px-7">
          <nav className="flex flex-col gap-4">
            <Link href="/u/dashboard" className="flex items-center gap-2 text-sm font-medium" onClick={() => setOpen(false)}>
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/u/cards" className="flex items-center gap-2 text-sm font-medium" onClick={() => setOpen(false)}>
              <CreditCard className="h-4 w-4" />
              Cards
            </Link>
            <Link
              href="/u/transactions"
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              <DollarSign className="h-4 w-4" />
              Transactions
            </Link>
            <Link
              href="/u/settings"
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}


"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, DollarSign, Home, Menu, Settings } from "lucide-react";
import Image from "next/image"


import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
          <Link
            href="/u/dashboard"
            className="mb-8 flex items-center gap-2 text-2xl font-bold text-slate-900"
          >
            <Image
              src="/Silver-Crest.png"
              alt="Silver Crest Logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="mt-8 px-7">
          <nav className="flex flex-col gap-4">
            <Link
              href="/u/dashboard"
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            {/* <Link
              href="/u/cards"
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              <CreditCard className="h-4 w-4" />
              Cards
            </Link> */}
            <Link
              href="/u/dashboard/transactions"
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              <DollarSign className="h-4 w-4" />
              Transactions
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

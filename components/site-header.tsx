"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Info, LogIn, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export function SiteHeader() {
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main Header */}
      <div className="bg-emerald-900 text-white">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <Image
                src="/Silver Crest.png"
                alt="Horizon Banking"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex space-x-1">
              <Button
                variant="ghost"
                className={`text-white text-base font-medium h-20 px-6 rounded-none border-b-2 ${
                  activeTab === "personal" ? "border-yellow-400" : "border-transparent"
                }`}
                onClick={() => setActiveTab("personal")}
              >
                PERSONAL BANKING
              </Button>
              <Button
                variant="ghost"
                className={`text-white text-base font-medium h-20 px-6 rounded-none border-b-2 ${
                  activeTab === "business" ? "border-yellow-400" : "border-transparent"
                }`}
                onClick={() => setActiveTab("business")}
              >
                BUSINESS BANKING
              </Button>
              <Button
                variant="ghost"
                className={`text-white text-base font-medium h-20 px-6 rounded-none border-b-2 ${
                  activeTab === "wealth" ? "border-yellow-400" : "border-transparent"
                }`}
                onClick={() => setActiveTab("wealth")}
              >
                WEALTH MANAGEMENT
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Info className="h-5 w-5" />
                  <span className="sr-only">About Silver Crest Bank</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white text-black max-w-md">
                <DialogHeader>
                  <DialogTitle>About Silver Crest Offshore Banking</DialogTitle>
                </DialogHeader>
                <p className="mt-4 text-sm leading-relaxed">
                  Silver Crest Bank is a trusted international offshore financial institution, offering global banking solutions 
                  to individuals and businesses seeking secure, private, and flexible financial services.
                </p>
                <a
                  href="/about-offshore-banking.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md font-medium transition"
                >
                  Learn More About Offshore Banking
                </a>
              </DialogContent>
            </Dialog>

{/*             <Button variant="ghost" size="icon" className="text-white">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button> */}

            <Link href="/u/login">
              <Button variant="ghost" className="hidden md:flex items-center gap-2 text-white">
                <LogIn className="h-5 w-5" />
                <span>Log in</span>
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/personal-banking" className="text-lg font-medium px-2 py-2 hover:bg-gray-100 rounded-md">
                    Personal Banking
                  </Link>
                  <Link href="/business-banking" className="text-lg font-medium px-2 py-2 hover:bg-gray-100 rounded-md">
                    Business Banking
                  </Link>
                  <Link
                    href="/wealth-management"
                    className="text-lg font-medium px-2 py-2 hover:bg-gray-100 rounded-md"
                  >
                    Wealth Management
                  </Link>
                  <Link href="/u/signup" className="text-lg font-medium px-2 py-2 hover:bg-gray-100 rounded-md">
                    Log In
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex overflow-x-auto">
            <Link href="/checking" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              CHECKING
            </Link>
            <Link href="/savings" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              SAVINGS
            </Link>
            <Link href="/loans" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              LOANS
            </Link>
            <Link href="/mortgages" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              MORTGAGES
            </Link>
            <Link href="/credit-cards" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              CREDIT CARDS
            </Link>
            <Link href="/online-banking" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              ONLINE BANKING
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

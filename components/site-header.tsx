"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, LogIn, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
                src="/placeholder.svg?height=50&width=180"
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
            <Button variant="ghost" size="icon" className="text-white">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <Link href="/u/signup">
              <Button variant="ghost" className="hidden md:flex items-center gap-2 text-white">
                <LogIn className="h-5 w-5" />
                <span>Create Account</span>
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
                    Get Started
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
            <Link href="/bank" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              BANK
            </Link>
            <Link href="/save" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              SAVE
            </Link>
            <Link href="/borrow" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              BORROW
            </Link>
            <Link href="/insure" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              INSURE
            </Link>
            <Link
              href="/financial-wellness"
              className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800"
            >
              FINANCIAL WELLNESS
            </Link>
            <Link href="/payments" className="px-6 py-4 text-sm font-medium whitespace-nowrap hover:bg-green-800">
              PAYMENTS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

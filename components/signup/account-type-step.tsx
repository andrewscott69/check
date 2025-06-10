"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Percent,
  DollarSign,
  Building,
  Briefcase,
  PiggyBank,
  Clock,
} from "lucide-react"
// import type { SignupData } from "@/app/u/signup/page"
import type { SignupStepProps } from "@/types/SignupStepProps"


interface AccountTypeOption {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  interestRate: number
  minimumBalance: number
  monthlyFee: number
  forBusiness: boolean
}

export default function AccountTypeStep({ data, onNext, onPrev, isLoading }: SignupStepProps) {
  const [selectedAccountType, setSelectedAccountType] = useState<string>(data.accountType || "CHECKING")
  const [accountCategory, setAccountCategory] = useState<"personal" | "business">("personal")

  const accountTypes: AccountTypeOption[] = [
    {
      id: "CHECKING",
      title: "Checking Account",
      description: "Everyday banking for your daily transactions",
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      features: [
        "No minimum balance requirement",
        "Free debit card",
        "Unlimited transactions",
        "Mobile check deposits",
        "Bill pay services",
      ],
      interestRate: 0.01,
      minimumBalance: 25,
      monthlyFee: 0,
      forBusiness: false,
    },
    {
      id: "SAVINGS",
      title: "Savings Account",
      description: "Grow your money with competitive interest rates",
      icon: <PiggyBank className="h-6 w-6 text-green-600" />,
      features: [
        "Competitive interest rates",
        "Automatic savings options",
        "Goal-based savings tools",
        "FDIC insured",
        "Limited monthly transactions",
      ],
      interestRate: 0.5,
      minimumBalance: 100,
      monthlyFee: 0,
      forBusiness: false,
    },
    {
      id: "MONEY_MARKET",
      title: "Money Market Account",
      description: "Higher yields with check-writing privileges",
      icon: <Percent className="h-6 w-6 text-purple-600" />,
      features: [
        "Higher interest rates than savings",
        "Check-writing privileges",
        "Debit card access",
        "FDIC insured",
        "Tiered interest structure",
      ],
      interestRate: 1.25,
      minimumBalance: 1000,
      monthlyFee: 10,
      forBusiness: false,
    },
    {
      id: "CERTIFICATE_OF_DEPOSIT",
      title: "Certificate of Deposit",
      description: "Guaranteed returns with fixed terms",
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      features: [
        "Highest fixed interest rates",
        "Terms from 3 months to 5 years",
        "FDIC insured",
        "Guaranteed returns",
        "Early withdrawal penalties apply",
      ],
      interestRate: 2.5,
      minimumBalance: 5000,
      monthlyFee: 0,
      forBusiness: false,
    },
    {
      id: "BUSINESS_CHECKING",
      title: "Business Checking",
      description: "Banking solutions for your business needs",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      features: [
        "Business debit card",
        "Employee cards available",
        "Cash management tools",
        "Merchant services",
        "Payroll processing",
      ],
      interestRate: 0.01,
      minimumBalance: 500,
      monthlyFee: 15,
      forBusiness: true,
    },
    {
      id: "BUSINESS_SAVINGS",
      title: "Business Savings",
      description: "Build reserves for your business",
      icon: <Building className="h-6 w-6 text-green-600" />,
      features: [
        "Higher interest for business funds",
        "Liquidity for business needs",
        "Overdraft protection option",
        "FDIC insured",
        "Online management tools",
      ],
      interestRate: 0.75,
      minimumBalance: 1000,
      monthlyFee: 5,
      forBusiness: true,
    },
  ]

  const handleNext = () => {
    if (selectedAccountType) {
      onNext({ ...data, accountType: selectedAccountType })
    }
  }

  const filteredAccountTypes = accountTypes.filter(
    (account) => account.forBusiness === (accountCategory === "business"),
  )

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Account Type</h2>
        <p className="text-gray-600">Select the account that best fits your banking needs</p>
      </div>

      {/* Personal vs Business Toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              accountCategory === "personal" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            } border border-gray-200`}
            onClick={() => setAccountCategory("personal")}
          >
            Personal Accounts
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              accountCategory === "business" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            } border border-gray-200`}
            onClick={() => setAccountCategory("business")}
          >
            Business Accounts
          </button>
        </div>
      </div>

      {/* Account Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAccountTypes.map((account) => {
          const isSelected = selectedAccountType === account.id
          return (
            <Card
              key={account.id}
              onClick={() => setSelectedAccountType(account.id)}
              className={`cursor-pointer border transition-all ${
                isSelected
                  ? "border-green-500 ring-2 ring-green-400 bg-green-50"
                  : "hover:border-green-400"
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {account.icon}
                    <CardTitle className="text-lg">{account.title}</CardTitle>
                  </div>
                  <div className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                    {account.interestRate}% APY
                  </div>
                </div>
                <CardDescription>{account.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <ul className="space-y-1 text-sm">
                  {account.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-gray-500 pt-2">
                <div>Min Balance: ${account.minimumBalance}</div>
                <div>{account.monthlyFee > 0 ? `$${account.monthlyFee}/mo` : "No monthly fee"}</div>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-between pt-6">
        {onPrev && (
          <Button variant="outline" onClick={onPrev}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
        )}
        <Button onClick={handleNext} disabled={!selectedAccountType} className="ml-auto">
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

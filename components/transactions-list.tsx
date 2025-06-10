import Link from "next/link"
import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TransactionsListProps {
  type?: "all" | "incoming" | "outgoing"
}

export function TransactionsList({ type = "all" }: TransactionsListProps) {
  const allTransactions = [
    {
      id: "1",
      description: "Starbucks Coffee",
      amount: "-$4.50",
      date: "Today, 8:30 AM",
      type: "debit",
      category: "Food & Drink",
    },
    {
      id: "2",
      description: "Salary Deposit",
      amount: "+$2,500.00",
      date: "Yesterday, 5:30 PM",
      type: "credit",
      category: "Income",
    },
    {
      id: "3",
      description: "Amazon Purchase",
      amount: "-$35.84",
      date: "Yesterday, 2:15 PM",
      type: "debit",
      category: "Shopping",
    },
    {
      id: "4",
      description: "Transfer from Sarah",
      amount: "+$150.00",
      date: "Mar 23, 2023",
      type: "credit",
      category: "Transfer",
    },
    {
      id: "5",
      description: "Uber Ride",
      amount: "-$12.80",
      date: "Mar 23, 2023",
      type: "debit",
      category: "Transportation",
    },
    {
      id: "6",
      description: "Netflix Subscription",
      amount: "-$14.99",
      date: "Mar 22, 2023",
      type: "debit",
      category: "Entertainment",
    },
    {
      id: "7",
      description: "Freelance Payment",
      amount: "+$450.00",
      date: "Mar 21, 2023",
      type: "credit",
      category: "Income",
    },
    {
      id: "8",
      description: "Grocery Store",
      amount: "-$68.53",
      date: "Mar 20, 2023",
      type: "debit",
      category: "Groceries",
    },
    {
      id: "9",
      description: "Interest Payment",
      amount: "+$2.35",
      date: "Mar 19, 2023",
      type: "credit",
      category: "Interest",
    },
    {
      id: "10",
      description: "Gas Station",
      amount: "-$45.20",
      date: "Mar 18, 2023",
      type: "debit",
      category: "Transportation",
    },
  ]

  const transactions =
    type === "all"
      ? allTransactions
      : type === "incoming"
        ? allTransactions.filter((t) => t.type === "credit")
        : allTransactions.filter((t) => t.type === "debit")

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                transaction.type === "credit" ? "bg-emerald-100" : "bg-rose-100"
              }`}
            >
              {transaction.type === "credit" ? (
                <ArrowDown className={`h-5 w-5 text-emerald-600`} />
              ) : (
                <ArrowUp className={`h-5 w-5 text-rose-600`} />
              )}
            </div>
            <div>
              <div className="font-medium">{transaction.description}</div>
              <div className="flex text-sm text-muted-foreground">
                <span>{transaction.date}</span>
                <span className="mx-2">•</span>
                <span>{transaction.category}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className={`text-sm font-medium ${transaction.type === "credit" ? "text-emerald-600" : "text-rose-600"}`}
            >
              {transaction.amount}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={`/transactions/${transaction.id}`}>View Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                <DropdownMenuItem>Report Issue</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}


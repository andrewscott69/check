"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowDown,
  ArrowUp,
  ArrowLeftRight,
  MoreHorizontal,
} from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export enum TransactionType {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
  TRANSFER = "TRANSFER",
  PAYMENT = "PAYMENT",
  REFUND = "REFUND",
}

export enum TransactionStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  CANCELLED = "CANCELLED",
}

export enum CurrencyType {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  BTC = "BTC",
  ETH = "ETH",
}

interface Transaction {
  id: string
  userId: string
  cardId?: string | null
  type: TransactionType
  amount: number
  fee: number
  status: TransactionStatus
  currencyType: CurrencyType
  accountName: string
  description?: string | null
  txHash?: string | null
  createdAt: string | Date
  updatedAt: string | Date
}

interface RecentTransactionsProps {
  transactions?: Transaction[]
}

export function RecentTransactions({ transactions = [] }: RecentTransactionsProps) {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleView = (tx: Transaction) => {
    setSelectedTransaction(tx)
    setIsModalOpen(true)
  }

  const getTransactionIcon = (type: TransactionType) => {
    switch (type) {
      case TransactionType.DEPOSIT:
      case TransactionType.REFUND:
        return <ArrowDown className="h-5 w-5 text-emerald-600" />
      case TransactionType.WITHDRAWAL:
      case TransactionType.PAYMENT:
        return <ArrowUp className="h-5 w-5 text-rose-600" />
      case TransactionType.TRANSFER:
        return <ArrowLeftRight className="h-5 w-5 text-red-600" />
      default:
        return <ArrowDown className="h-5 w-5 text-gray-600" />
    }
  }

  const getTransactionIconBg = (type: TransactionType) => {
    switch (type) {
      case TransactionType.DEPOSIT:
      case TransactionType.REFUND:
        return "bg-emerald-100"
      case TransactionType.WITHDRAWAL:
      case TransactionType.PAYMENT:
      case TransactionType.TRANSFER:
        return "bg-rose-100"
      default:
        return "bg-gray-100"
    }
  }

  const getTransactionAmountColor = (type: TransactionType) => {
    switch (type) {
      case TransactionType.DEPOSIT:
      case TransactionType.REFUND:
        return "text-emerald-600"
      case TransactionType.WITHDRAWAL:
      case TransactionType.PAYMENT:
      case TransactionType.TRANSFER:
        return "text-rose-600"
      default:
        return "text-gray-600"
    }
  }

  const getTransactionAmountPrefix = (type: TransactionType) => {
    switch (type) {
      case TransactionType.DEPOSIT:
      case TransactionType.REFUND:
        return "+"
      case TransactionType.WITHDRAWAL:
      case TransactionType.PAYMENT:
      case TransactionType.TRANSFER:
        return "-"
      default:
        return ""
    }
  }

  const formatAmount = (amount: number, type: TransactionType, currencyType: CurrencyType) => {
    const prefix = getTransactionAmountPrefix(type)
    const currencySymbol = getCurrencySymbol(currencyType)
    return `${prefix}${currencySymbol}${Math.abs(amount).toFixed(2)}`
  }

  const getCurrencySymbol = (currencyType: CurrencyType) => {
    switch (currencyType) {
      case CurrencyType.USD:
        return "$"
      case CurrencyType.EUR:
        return "€"
      case CurrencyType.GBP:
        return "£"
      case CurrencyType.BTC:
        return "₿"
      case CurrencyType.ETH:
        return "Ξ"
      default:
        return "$"
    }
  }

  const formatDate = (date: string | Date) => {
    const transactionDate = new Date(date)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (transactionDate.toDateString() === today.toDateString()) {
      return `Today, ${format(transactionDate, "h:mm a")}`
    } else if (transactionDate.toDateString() === yesterday.toDateString()) {
      return `Yesterday, ${format(transactionDate, "h:mm a")}`
    } else {
      return format(transactionDate, "MMM d, yyyy")
    }
  }

  const getStatusBadge = (status: TransactionStatus) => {
    switch (status) {
      case TransactionStatus.COMPLETED:
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Completed</Badge>
      case TransactionStatus.PENDING:
        return (
          <Badge variant="outline" className="text-amber-600 border-amber-300">
            Pending
          </Badge>
        )
      case TransactionStatus.FAILED:
        return <Badge variant="destructive">Failed</Badge>
      case TransactionStatus.CANCELLED:
        return <Badge variant="secondary">Cancelled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <>
      <div className="space-y-4">
        {transactions.slice(0, 5).map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full ${getTransactionIconBg(transaction.type)}`}
              >
                {getTransactionIcon(transaction.type)}
              </div>
              <div>
                <div className="font-medium">
                  {transaction.description || `${transaction.type.charAt(0) + transaction.type.slice(1).toLowerCase()}`}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{formatDate(transaction.createdAt)}</span>
                  {getStatusBadge(transaction.status)}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`text-sm font-medium ${getTransactionAmountColor(transaction.type)}`}>
                {formatAmount(transaction.amount, transaction.type, transaction.currencyType)}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleView(transaction)}>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                  {transaction.txHash && (
                    <DropdownMenuItem asChild>
                      <Link href={`https://etherscan.io/tx/${transaction.txHash}`} target="_blank">
                        View on Blockchain
                      </Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/u/dashboard/transactions">View All Transactions</Link>
          </Button>
        </div>
      </div>

      {/* Transaction Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-2 text-sm">
              <p><strong>Type:</strong> {selectedTransaction.type}</p>
              <p><strong>Amount:</strong> {formatAmount(selectedTransaction.amount, selectedTransaction.type, selectedTransaction.currencyType)}</p>
              <p><strong>Status:</strong> {selectedTransaction.status}</p>
              <p><strong>Description:</strong> {selectedTransaction.description || "—"}</p>
              <p><strong>Date:</strong> {formatDate(selectedTransaction.createdAt)}</p>
              {selectedTransaction.txHash && (
                <p>
                  <strong>Tx Hash:</strong>{" "}
                  <a href={`https://etherscan.io/tx/${selectedTransaction.txHash}`} target="_blank" className="text-blue-600 underline">
                    View on Etherscan
                  </a>
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

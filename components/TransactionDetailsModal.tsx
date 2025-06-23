"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { Transaction, TransactionStatus } from "@/lib/transaction"

interface Props {
  transaction: Transaction | null
  open: boolean
  onClose: () => void
}

export function TransactionDetailsModal({ transaction, open, onClose }: Props) {
  if (!transaction) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Transaction Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 text-sm">
          <div><strong>ID:</strong> {transaction.id}</div>
          <div><strong>Type:</strong> {transaction.type}</div>
          <div><strong>Amount:</strong> ${transaction.amount.toFixed(2)}</div>
          <div><strong>Fee:</strong> ${transaction.fee.toFixed(2)}</div>
          <div><strong>Status:</strong> <Badge>{transaction.status}</Badge></div>
          <div><strong>Account:</strong> {transaction.accountName}</div>
          <div><strong>Description:</strong> {transaction.description || "-"}</div>
          <div><strong>Currency:</strong> {transaction.currencyType}</div>
          <div><strong>Tx Hash:</strong> {transaction.txHash || "N/A"}</div>
          <div><strong>Date:</strong> {format(new Date(transaction.createdAt), "PPPp")}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowLeftRight,
  MoreHorizontal,
} from "lucide-react";
import { format } from "date-fns";
import jsPDF from "jspdf";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

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

export interface Transaction {
  id: string;
  userId: string;
  cardId?: string | null;
  type: TransactionType;
  amount: number;
  fee: number;
  status: TransactionStatus;
  currencyType: CurrencyType;
  accountName: string;
  description?: string | null;
  txHash?: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  reference?: string;
  recipientName?: string;
  recipientBank?: string;
  toAccount?: string;
  merchantName?: string;
  iban?: string;
  recipientAcount?: string;
}

interface RecentTransactionsProps {
  transactions?: Transaction[];
}

export function RecentTransactions({
  transactions = [],
}: RecentTransactionsProps) {
  const [openTransaction, setOpenTransaction] = useState<Transaction | null>(
    null
  );
  const formatAmount = (amount: number, currency: CurrencyType) => {
    const symbolMap: Record<CurrencyType, string> = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      BTC: "₿",
      ETH: "Ξ",
    };
    return `${symbolMap[currency] || "$"}${amount.toFixed(2)}`;
  };
  

 
  const generateReceiptPDF = (tx: Transaction) => {
    const doc = new jsPDF();
    const logo = new Image();
    logo.src = "/Silver-Crest.png";
    logo.onload = () => {
      doc.addImage(logo, "PNG", 85, 10, 40, 20);
      doc.setFontSize(18);
      doc.text("Silver Crest Bank", 105, 35, { align: "center" });
      doc.setFontSize(12);
      doc.text(
        "Avenue de la Liberté 25, 2900 Porrentruy, Switzerland",
        105,
        42,
        { align: "center" }
      );
      doc.text("support@silvercrest.com | +41 32 466 78 90", 105, 48, {
        align: "center",
      });
      doc.line(20, 54, 190, 54);
      doc.setFontSize(16);
      doc.text("Transaction Receipt", 105, 64, { align: "center" });

      const displayName =
        tx.recipientName || tx.merchantName || "N/A";
      const accountNumber =
        tx.recipientAcount || tx.toAccount || tx.iban || "N/A";

      const details = [
        ["Transaction ID:", tx.id],
        ["Type:", tx.type],
        ["Status:", tx.status],
        ["Amount:", formatAmount(tx.amount, tx.currencyType)],
        ["Fee:", formatAmount(tx.fee, tx.currencyType)],
        ["Account Name:", displayName],
        ["Account Number:", accountNumber],
        ["Date:", new Date(tx.createdAt).toLocaleString()],
        ["Description:", tx.description || "N/A"],
        ["Bank:", tx.recipientBank || "N/A"],
        ["Reference:", tx.reference || "N/A"],
      ];

      let y = 80;
      doc.setFontSize(12);
      details.forEach(([label, value]) => {
        doc.text(label, 30, y);
        doc.text(String(value), 90, y);
        y += 10;
      });

      doc.line(20, y + 10, 190, y + 10);
      doc.setFontSize(10);
      doc.text(
        "This receipt is computer-generated and does not require a signature.",
        105,
        y + 20,
        { align: "center" }
      );

      doc.save(`Transaction-${tx.id}.pdf`);
    };
  };



 

  const getTransactionIcon = (type: TransactionType) => {
    switch (type) {
      case TransactionType.DEPOSIT:
      case TransactionType.REFUND:
        return <ArrowDown className="h-5 w-5 text-emerald-600" />;
      case TransactionType.WITHDRAWAL:
      case TransactionType.PAYMENT:
        return <ArrowUp className="h-5 w-5 text-rose-600" />;
      case TransactionType.TRANSFER:
        return <ArrowLeftRight className="h-5 w-5 text-red-600" />;
      default:
        return <ArrowDown className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTransactionIconBg = (type: TransactionType) => {
    switch (type) {
      case TransactionType.DEPOSIT:
      case TransactionType.REFUND:
        return "bg-emerald-100";
      case TransactionType.WITHDRAWAL:
      case TransactionType.PAYMENT:
      case TransactionType.TRANSFER:
        return "bg-rose-100";
      default:
        return "bg-gray-100";
    }
  };

  const getTransactionAmountColor = (type: TransactionType) => {
    switch (type) {
      case TransactionType.DEPOSIT:
      case TransactionType.REFUND:
        return "text-emerald-600";
      case TransactionType.WITHDRAWAL:
      case TransactionType.PAYMENT:
      case TransactionType.TRANSFER:
        return "text-rose-600";
      default:
        return "text-gray-600";
    }
  };

  const getTransactionAmountPrefix = (type: TransactionType) => {
    switch (type) {
      case TransactionType.DEPOSIT:
      case TransactionType.REFUND:
        return "+";
      case TransactionType.WITHDRAWAL:
      case TransactionType.PAYMENT:
      case TransactionType.TRANSFER:
        return "-";
      default:
        return "";
    }
  };

  const getCurrencySymbol = (currencyType: CurrencyType) => {
    switch (currencyType) {
      case CurrencyType.USD:
        return "$";
      case CurrencyType.EUR:
        return "€";
      case CurrencyType.GBP:
        return "£";
      case CurrencyType.BTC:
        return "₿";
      case CurrencyType.ETH:
        return "Ξ";
      default:
        return "$";
    }
  };

  const formatDate = (date: string | Date) => {
    const transactionDate = new Date(date);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (transactionDate.toDateString() === today.toDateString()) {
      return `Today, ${format(transactionDate, "h:mm a")}`;
    } else if (transactionDate.toDateString() === yesterday.toDateString()) {
      return `Yesterday, ${format(transactionDate, "h:mm a")}`;
    } else {
      return format(transactionDate, "MMM d, yyyy");
    }
  };

  const getStatusBadge = (status: TransactionStatus) => {
    switch (status) {
      case TransactionStatus.COMPLETED:
        return (
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            Completed
          </Badge>
        );
      case TransactionStatus.PENDING:
        return (
          <Badge variant="outline" className="text-amber-600 border-amber-300">
            Pending
          </Badge>
        );
      case TransactionStatus.FAILED:
        return <Badge variant="destructive">Failed</Badge>;
      case TransactionStatus.CANCELLED:
        return <Badge variant="secondary">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      {transactions.slice(0, 5).map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`flex h-9 w-9 items-center justify-center rounded-full ${getTransactionIconBg(transaction.type)}`}>
              {getTransactionIcon(transaction.type)}
            </div>
            <div>
              <div className="font-medium">
                {transaction.description || `${transaction.type.charAt(0)}${transaction.type.slice(1).toLowerCase()}`}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{formatDate(transaction.createdAt)}</span>
                {getStatusBadge(transaction.status)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className={`text-sm font-medium ${getTransactionAmountColor(transaction.type)}`}>
              {`${getTransactionAmountPrefix(transaction.type)}${getCurrencySymbol(transaction.currencyType)}${Math.abs(transaction.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
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
                <DropdownMenuItem onClick={() => setOpenTransaction(transaction)}>
                  View Details
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => generateReceiptPDF(transaction)}>
                  Download Receipt
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}

      <Dialog
        open={!!openTransaction}
        onOpenChange={(open) => !open && setOpenTransaction(null)}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
            <DialogDescription>
              Full information about this transaction.
            </DialogDescription>
          </DialogHeader>
          {openTransaction && (
            <div className="space-y-2 text-sm">
              <p><strong>ID:</strong> {openTransaction.id}</p>
              <p><strong>Amount:</strong> ${openTransaction.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
              <p><strong>Status:</strong> {openTransaction.status}</p>
              <p><strong>Type:</strong> {openTransaction.type}</p>
              <p><strong>Date:</strong> {new Date(openTransaction.createdAt).toLocaleString()}</p>
              <p><strong>Account:</strong> {openTransaction.accountName}</p>
              {openTransaction.description && <p><strong>Description:</strong> {openTransaction.description}</p>}
            </div>
          )}
          <DialogClose asChild>
            <Button className="mt-4 w-full">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/u/dashboard/transactions">View All Transactions</Link>
        </Button>
      </div>
    </div>
  );
}

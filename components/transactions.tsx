"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeftRight, MoreHorizontal, DollarSign, User } from "lucide-react";
import { format } from "date-fns";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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

interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  fee: number;
  status: TransactionStatus;
  currencyType: CurrencyType;
  accountName: string;
  description?: string | null;
  txHash?: string | null;
  createdAt: string | Date;
  reference?: string | null;
  fromAccount?: string | null;
  toAccount?: string | null;
  merchantName?: string | null;
  category?: string | null;
  recipientName?: string | null;
  recipientBank?: string | null;
  recipientAccount?: string | null;
  swiftCode?: string | null;
  estimatedArrival?: string | null;
}

export function RecentTransactions() {
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/transactions?page=${page}&limit=${itemsPerPage}`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        setTransactions(data.transactions);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [page]);

  const formatAmount = (
    amount: number,
    type: TransactionType,
    currencyType: CurrencyType
  ) => {
    const prefix = [TransactionType.DEPOSIT, TransactionType.REFUND].includes(
      type
    )
      ? "+"
      : "-";
    const symbol =
      { USD: "$", EUR: "€", GBP: "£", BTC: "₿", ETH: "Ξ" }[currencyType] || "$";
    return `${prefix}${symbol}${Math.abs(amount).toFixed(2)}`;
  };

  const formatDate = (date: string | Date) =>
    format(new Date(date), "MMM d, yyyy h:mm a");

  const getStatusBadge = (status: TransactionStatus) => {
    switch (status) {
      case TransactionStatus.COMPLETED:
        return (
          <Badge className="bg-emerald-100 text-emerald-800">Completed</Badge>
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
        return <Badge>{status}</Badge>;
    }
  };

  const getAmountColor = (type: TransactionType) => {
    return [TransactionType.DEPOSIT, TransactionType.REFUND].includes(type)
      ? "text-emerald-600"
      : "text-rose-600";
  };

  const handleDownloadReceipt = async (tx: Transaction) => {
    setSelectedTransaction(tx);
    await new Promise((r) => setTimeout(r, 50));
    const receiptEl = document.getElementById("pdf-receipt");
    if (!receiptEl) return;

    const canvas = await html2canvas(receiptEl);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`receipt-${tx.id}.pdf`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link
          href="/u/dashboard"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <DollarSign className="h-6 w-6" />
          <span>SecureBank</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Help
          </Button>
          <Button variant="outline" size="sm">
            Notifications
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1 bg-slate-50 p-4 md:p-8">
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">
              Loading transactions...
            </div>
          ) : transactions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="rounded-full bg-muted p-3 mb-4">
                <ArrowLeftRight className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-sm mb-1">
                No transactions yet
              </h3>
              <p className="text-xs text-muted-foreground">
                Your transactions will appear here once available
              </p>
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell>{formatDate(tx.createdAt)}</TableCell>
                      <TableCell>{tx.description || tx.accountName}</TableCell>
                      <TableCell>{tx.type}</TableCell>
                      <TableCell
                        className={`text-right font-medium ${getAmountColor(
                          tx.type
                        )}`}
                      >
                        {formatAmount(tx.amount, tx.type, tx.currencyType)}
                      </TableCell>
                      <TableCell>{getStatusBadge(tx.status)}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedTransaction(tx);
                                setShowDialog(true);
                              }}
                            >
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDownloadReceipt(tx)}
                            >
                              Download Receipt
                            </DropdownMenuItem>
                            {tx.status === TransactionStatus.PENDING && (
                              <DropdownMenuItem className="text-red-600">
                                Cancel Transaction
                              </DropdownMenuItem>
                            )}
                            {tx.txHash && (
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`https://etherscan.io/tx/${tx.txHash}`}
                                  target="_blank"
                                >
                                  View on Blockchain
                                </Link>
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </>
          )}
        </div>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Transaction Details</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                ID: {selectedTransaction?.id}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Amount:</strong>{" "}
                {selectedTransaction &&
                  formatAmount(
                    selectedTransaction.amount,
                    selectedTransaction.type,
                    selectedTransaction.currencyType
                  )}
              </p>
              <p>
                <strong>Status:</strong> {selectedTransaction?.status}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {selectedTransaction?.createdAt &&
                  formatDate(selectedTransaction.createdAt)}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {selectedTransaction?.description || "N/A"}
              </p>
              <p>
                <strong>Fee:</strong> {selectedTransaction?.fee}
              </p>
              <p>
                <strong>Account:</strong> {selectedTransaction?.accountName}
              </p>
              {selectedTransaction?.merchantName && (
                <p>
                  <strong>Merchant:</strong> {selectedTransaction.merchantName}
                </p>
              )}
              {selectedTransaction?.category && (
                <p>
                  <strong>Category:</strong> {selectedTransaction.category}
                </p>
              )}
              {selectedTransaction?.reference && (
                <p>
                  <strong>Reference:</strong> {selectedTransaction.reference}
                </p>
              )}
              {selectedTransaction?.recipientName && (
                <p>
                  <strong>Recipient:</strong>{" "}
                  {selectedTransaction.recipientName}
                </p>
              )}
              {selectedTransaction?.recipientBank && (
                <p>
                  <strong>Bank:</strong> {selectedTransaction.recipientBank}
                </p>
              )}
              {selectedTransaction?.recipientAccount && (
                <p>
                  <strong>Account:</strong>{" "}
                  {selectedTransaction.recipientAccount}
                </p>
              )}
              {selectedTransaction?.swiftCode && (
                <p>
                  <strong>SWIFT:</strong> {selectedTransaction.swiftCode}
                </p>
              )}
              {selectedTransaction?.estimatedArrival && (
                <p>
                  <strong>ETA:</strong> {selectedTransaction.estimatedArrival}
                </p>
              )}
              {selectedTransaction?.txHash && (
                <p>
                  <strong>TX Hash:</strong>{" "}
                  <Link
                    className="text-blue-600 underline"
                    href={`https://etherscan.io/tx/${selectedTransaction.txHash}`}
                    target="_blank"
                  >
                    {selectedTransaction.txHash}
                  </Link>
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Receipt PDF Template */}
        <div
          id="pdf-receipt"
          className="p-8 bg-white w-[600px] text-sm font-sans"
          style={{
            position: "absolute",
            top: 0,
            left: "-9999px",
            color: "black", 
            backgroundColor: "white", 
          }}
        >
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div>
              <h1 className="text-lg font-bold text-gray-800">SecureBank</h1>
              <p className="text-xs text-gray-500">securebank.app</p>
            </div>
            <div className="text-right text-xs text-gray-500">
              <p>
                Receipt #:{" "}
                {selectedTransaction?.reference || selectedTransaction?.id}
              </p>
              <p>
                Date:{" "}
                {selectedTransaction &&
                  formatDate(selectedTransaction.createdAt)}
              </p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <p>
              <strong>Transaction Type:</strong> {selectedTransaction?.type}
            </p>
            <p>
              <strong>Amount:</strong>{" "}
              {selectedTransaction &&
                formatAmount(
                  selectedTransaction.amount,
                  selectedTransaction.type,
                  selectedTransaction.currencyType
                )}
            </p>
            <p>
              <strong>Status:</strong> {selectedTransaction?.status}
            </p>
            <p>
              <strong>Fee:</strong> ${selectedTransaction?.fee}
            </p>
            <p>
              <strong>Account Name:</strong> {selectedTransaction?.accountName}
            </p>
            {selectedTransaction?.merchantName && (
              <p>
                <strong>Merchant:</strong> {selectedTransaction.merchantName}
              </p>
            )}
            {selectedTransaction?.recipientName && (
              <p>
                <strong>Recipient:</strong> {selectedTransaction.recipientName}
              </p>
            )}
            {selectedTransaction?.recipientBank && (
              <p>
                <strong>Bank:</strong> {selectedTransaction.recipientBank}
              </p>
            )}
            {selectedTransaction?.recipientAccount && (
              <p>
                <strong>Account:</strong> {selectedTransaction.recipientAccount}
              </p>
            )}
            {selectedTransaction?.swiftCode && (
              <p>
                <strong>SWIFT:</strong> {selectedTransaction.swiftCode}
              </p>
            )}
          </div>
          <div className="text-xs text-gray-500 border-t pt-4">
            <p>Thank you for banking with SecureBank.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

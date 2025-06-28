"use client";

import { useState } from "react";
import { format } from "date-fns";
import jsPDF from "jspdf";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { MoreHorizontal } from "lucide-react";

interface Transaction {
  id: string;
  type: string;
  amount: number;
  fee: number;
  status: string;
  currencyType: string;
  accountName: string;
  description?: string;
  createdAt: string;
  reference?: string;
  recipientName?: string;
  recipientBank?: string;
  toAccount?: string;
  merchantName?: string;
  iban?: string;
  recipientAcount?: string;
}

interface Props {
  transactions: Transaction[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function RecentTransactions({
  transactions,
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const [openTransaction, setOpenTransaction] = useState<Transaction | null>(
    null
  );

  const formatAmount = (amount: number, currency: string) => {
    const symbolMap: Record<string, string> = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      BTC: "₿",
      ETH: "Ξ",
    };
    return `${symbolMap[currency] || "$"}${amount.toFixed(2)}`;
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-800";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "FAILED":
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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

      const displayName = tx.recipientName || tx.merchantName || "N/A";
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

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reference</TableHead>
            <TableHead>Recipient</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell>{format(new Date(tx.createdAt), "PPpp")}</TableCell>
              <TableCell>{tx.description || "-"}</TableCell>
              <TableCell>{tx.type}</TableCell>
              <TableCell>
                {`${
                  { USD: "$", EUR: "€", GBP: "£", BTC: "₿", ETH: "Ξ" }[
                    tx.currencyType
                  ] || ""
                }${tx.amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
              </TableCell>
              <TableCell>
                <Badge className={getStatusBadgeClass(tx.status)}>
                  {tx.status}
                </Badge>
              </TableCell>
              <TableCell>{tx.reference || "-"}</TableCell>
              <TableCell>
                {tx.recipientName || tx.merchantName || tx.accountName || "-"}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setOpenTransaction(tx)}>
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => generateReceiptPDF(tx)}>
                      Download Receipt
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <Dialog
        open={!!openTransaction}
        onOpenChange={(open) => !open && setOpenTransaction(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
            <DialogDescription>
              Detailed information about this transaction.
            </DialogDescription>
          </DialogHeader>
          {openTransaction && (
            <div className="space-y-2 text-sm">
              <p>
                <strong>ID:</strong> {openTransaction.id}
              </p>
              <p>
                <strong>Type:</strong> {openTransaction.type}
              </p>
              <p>
                <strong>Status:</strong> {openTransaction.status}
              </p>
              <p>
                <strong>Amount:</strong>{" "}
                {formatAmount(
                  openTransaction.amount,
                  openTransaction.currencyType
                )}
              </p>
              <p>
                <strong>Fee:</strong>{" "}
                {formatAmount(
                  openTransaction.fee,
                  openTransaction.currencyType
                )}
              </p>
              <p>
                <strong>Recipient Name:</strong>{" "}
                {openTransaction.recipientName ||
                  openTransaction.merchantName ||
                  openTransaction.accountName ||
                  "N/A"}
              </p>
              <p>
                <strong>Recipient Account:</strong>{" "}
                {openTransaction.recipientAcount ||
                  openTransaction.toAccount ||
                  openTransaction.iban ||
                  "N/A"}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {openTransaction.description || "N/A"}
              </p>
              <p>
                <strong>Reference:</strong> {openTransaction.reference || "N/A"}
              </p>
              <p>
                <strong>Recipient:</strong>{" "}
                {openTransaction.recipientName ||
                  openTransaction.merchantName ||
                  openTransaction.accountName ||
                  "N/A"}
              </p>
              <p>
                <strong>Bank:</strong> {openTransaction.recipientBank || "N/A"}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(openTransaction.createdAt).toLocaleString()}
              </p>
            </div>
          )}
          <DialogClose asChild>
            <Button className="mt-4 w-full">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

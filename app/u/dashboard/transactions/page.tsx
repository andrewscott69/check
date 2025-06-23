
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RecentTransactions } from "@/components/transactions";
import Link from "next/link";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";
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
}

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/transactions?page=${currentPage}`);

        if (res.status === 401) {
          router.push("/u/login");
          return;
        }

        if (!res.ok) throw new Error("Failed to fetch transactions");

        const data = await res.json();
        setTransactions(data.transactions);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [currentPage, router]);

  if (loading) return <p className="p-4 text-center">Loading...</p>;

  return (
  
      <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-slate-900 text-white px-4 md:px-6">
          <nav className="hidden md:flex  items-center justify-center gap-4">
            <Link
              href="/u/dashboard"
              className="flex items-center justify-center"
            >
              <Image
                src="/Silver-Crest-BW.png"
                alt="Silver Crest Logo"
                width={80}
                height={80}
              />
            </Link>
            <Link
              href="/u/dashboard"
              className="text-sm font-medium text-white"
            >
              Dashboard
            </Link>
          </nav>

          <MobileNav />
          <div className="ml-auto flex items-center gap-4">
            

            <UserNav />
          </div>
        </header>
        <main className="flex-1 bg-slate-50 p-4 md:p-8">
         
    <RecentTransactions
      transactions={transactions}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={(page) => setCurrentPage(page)}
    />
  
    </main>
    </div>
  
  );
};

export default TransactionsPage;



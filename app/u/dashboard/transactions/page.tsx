"use client"

import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import { RecentTransactions } from '@/components/transactions'

enum BankAccountType {
  CHECKING = "CHECKING",
  SAVINGS = "SAVINGS",
  BUSINESS_CHECKING = "BUSINESS_CHECKING",
  BUSINESS_SAVINGS = "BUSINESS_SAVINGS",
  MONEY_MARKET = "MONEY_MARKET",
  CERTIFICATE_OF_DEPOSIT = "CERTIFICATE_OF_DEPOSIT",
}

enum BankAccountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
  CLOSED = "CLOSED",
  PENDING_APPROVAL = "PENDING_APPROVAL",
}

interface BankAccount {
  id: string;
  accountNumber: string;
  routingNumber: string;
  accountType: BankAccountType;
  accountName: string;
  balance: number;
  availableBalance: number;
  status: BankAccountStatus;
  currencyType: string;
  interestRate: number;
  overdraftLimit: number;
  hasOverdraftProtection: boolean;
  minimumBalance: number;
  openedAt: string;
}

interface DashboardData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  transactions: any[];
  bankAccounts: BankAccount[];
}

const TransactionsPage = () => {
  const [userData, setUserData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch("/api/dashboard", {
          credentials: "include",
        });

        if (res.status === 401) {
          router.push("/u/login");
          return;
        }

        if (!res.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        const data = await res.json();
        setUserData(data);

        if (data.bankAccounts && data.bankAccounts.length > 0) {
          setSelectedAccount(data.bankAccounts[0].id);
        }
      } catch (error) {
        console.error("Error loading dashboard:", error);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [router]);

  if (loading) return <p className="text-center p-4">Loading...</p>
  if (error) return <p className="text-center text-red-500 p-4">{error}</p>

  return <RecentTransactions  />
}

export default TransactionsPage

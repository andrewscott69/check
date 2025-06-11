"use client"

import Link from "next/link"
import {
  ArrowDown,
  ArrowUp,
  Bell,
  CreditCard,
  DollarSign,
  Search,
  Loader2,
  Copy,
  Eye,
  EyeOff,
  Building,
  PiggyBank,
  Briefcase,
  Clock,
  Percent,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  BanknoteIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardsList } from "../../../components/cards-list"
import { MobileNav } from "../../../components/mobile-nav"
import { RecentTransactions } from "../../../components/recent-transactions"
import { UserNav } from "../../../components/user-nav"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


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
  id: string
  accountNumber: string
  routingNumber: string
  accountType: BankAccountType
  accountName: string
  balance: number
  availableBalance: number
  status: BankAccountStatus
  currencyType: string
  interestRate: number
  overdraftLimit: number
  hasOverdraftProtection: boolean
  minimumBalance: number
  openedAt: string
}

interface DashboardData {
  id: string
  email: string
  firstName?: string
  lastName?: string
  totalBalance: number
  totalSavings: number
  monthlySpending: number
  cards: any[]
  transactions: any[]
  bankAccounts: BankAccount[]
  isOnboarded: boolean
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAccountNumbers, setShowAccountNumbers] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)
  const [loggingOut, setLoggingOut] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch("/api/dashboard", {
          credentials: "include",
        })

        if (res.status === 401) {
          router.push("/u/login")
          return
        }

        if (!res.ok) {
          throw new Error("Failed to fetch dashboard data")
        }

        const data = await res.json()
        setUserData(data)

        if (data.bankAccounts && data.bankAccounts.length > 0) {
          setSelectedAccount(data.bankAccounts[0].id)
        }
      } catch (error) {
        console.error("Error loading dashboard:", error)
        setError("Failed to load dashboard data")
      } finally {
        setLoading(false)
      }
    }

    fetchDashboard()
  }, [router])

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch("/api/logout", { method: "POST", credentials: "include" })
      router.push("/u/login")
    } catch (err) {
      toast.error("Logout failed")
      setLoggingOut(false)
    }
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast.success(`${label} copied to clipboard`)
  }

  const formatAccountNumber = (accountNumber: string) => {
    if (!showAccountNumbers) {
      return "••••" + accountNumber.slice(-4)
    }
    return accountNumber.replace(/(\d{4})/g, "$1 ").trim()
  }

  const getAccountTypeIcon = (accountType: BankAccountType) => {
    switch (accountType) {
      case BankAccountType.CHECKING:
        return <DollarSign className="h-5 w-5 text-blue-600" />
      case BankAccountType.SAVINGS:
        return <PiggyBank className="h-5 w-5 text-green-600" />
      case BankAccountType.BUSINESS_CHECKING:
        return <Briefcase className="h-5 w-5 text-blue-600" />
      case BankAccountType.BUSINESS_SAVINGS:
        return <Building className="h-5 w-5 text-green-600" />
      case BankAccountType.MONEY_MARKET:
        return <Percent className="h-5 w-5 text-purple-600" />
      case BankAccountType.CERTIFICATE_OF_DEPOSIT:
        return <Clock className="h-5 w-5 text-amber-600" />
      default:
        return <BanknoteIcon className="h-5 w-5 text-gray-600" />
    }
  }

  const getAccountTypeLabel = (accountType: BankAccountType) => {
    switch (accountType) {
      case BankAccountType.CHECKING:
        return "Checking Account"
      case BankAccountType.SAVINGS:
        return "Savings Account"
      case BankAccountType.BUSINESS_CHECKING:
        return "Business Checking"
      case BankAccountType.BUSINESS_SAVINGS:
        return "Business Savings"
      case BankAccountType.MONEY_MARKET:
        return "Money Market Account"
      case BankAccountType.CERTIFICATE_OF_DEPOSIT:
        return "Certificate of Deposit"
      default:
        return "Account"
    }
  }

  const getStatusBadge = (status: BankAccountStatus) => {
    switch (status) {
      case BankAccountStatus.ACTIVE:
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
      case BankAccountStatus.PENDING_APPROVAL:
        return (
          <Badge variant="outline" className="text-amber-600 border-amber-300">
            Pending Approval
          </Badge>
        )
      case BankAccountStatus.SUSPENDED:
        return <Badge variant="destructive">Suspended</Badge>
      case BankAccountStatus.INACTIVE:
        return <Badge variant="secondary">Inactive</Badge>
      case BankAccountStatus.CLOSED:
        return (
          <Badge variant="outline" className="text-gray-500">
            Closed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <p>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (error || !userData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error || "Failed to load data."}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    )
  }

  const selectedAccountData = userData.bankAccounts?.find((account) => account.id === selectedAccount)
  const hasPendingAccount = userData.bankAccounts?.some(
    (account) => account.status === BankAccountStatus.PENDING_APPROVAL,
  )

  return (
    <div className="flex min-h-screen flex-col">

        {/* Pending Approval Overlay */}
      {hasPendingAccount && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur">
            <CardContent className="pt-8 pb-8 px-8 text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Under Review</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your account is currently awaiting approval. We're reviewing your information and will notify you once
                  the process is complete.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-amber-800">Approval in Progress</p>
                      <p className="text-xs text-amber-700 mt-1">This usually takes 1-3 business days</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={() => router.push("/u/support")}>
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

        {/* Main Dashboard Content - Disabled when pending */}
        <div className={hasPendingAccount ? "pointer-events-none opacity-30" : ""}>
        <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden md:flex md:gap-2 lg:gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <DollarSign className="h-6 w-6" />
            <span>BankApp</span>
          </Link>
          <Link href="/u/dashboard" className="text-sm font-medium text-primary">
            Dashboard
          </Link>
          <Link
            href="/u/accounts"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Accounts
          </Link>
          <Link
            href="/u/cards"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Cards
          </Link>
          <Link
            href="/u/transactions"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Transactions
          </Link>
          <Link
            href="/u/settings"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Settings
          </Link>
        </nav>
        <MobileNav />
        <div className="ml-auto flex items-center gap-4">
          <form className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-64 rounded-lg bg-background pl-8 md:w-80" />
            </div>
          </form>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <UserNav />
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome, {userData.firstName || userData.email.split("@")[0]}!</p>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link href="/u/send">
                <ArrowUp className="mr-2 h-4 w-4" />
                Send
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/u/receive">
                <ArrowDown className="mr-2 h-4 w-4" />
                Receive
              </Link>
            </Button>  
          </div>
        </div>

        {/* Bank Accounts Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Your Bank Accounts</h2>
            <Button variant="outline" size="sm" onClick={() => setShowAccountNumbers(!showAccountNumbers)}>
              {showAccountNumbers ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
              {showAccountNumbers ? "Hide Details" : "Show Details"}
            </Button>
          </div>

          {userData.bankAccounts && userData.bankAccounts.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {userData.bankAccounts.map((account) => (
                <Card
                  key={account.id}
                  className={`cursor-pointer transition-all hover:border-primary ${
                    selectedAccount === account.id ? "border-2 border-primary" : ""
                  }`}
                  onClick={() => setSelectedAccount(account.id)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getAccountTypeIcon(account.accountType)}
                        <CardTitle className="text-base">{account.accountName}</CardTitle>
                      </div>
                      {getStatusBadge(account.status)}
                    </div>
                    <CardDescription>{getAccountTypeLabel(account.accountType)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Account Number</span>
                        <div className="flex items-center gap-1">
                          <span className="font-mono text-sm">{formatAccountNumber(account.accountNumber)}</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    copyToClipboard(account.accountNumber, "Account number")
                                  }}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Copy account number</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Available Balance</span>
                        <span className="font-semibold">${account.availableBalance.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex w-full justify-between text-xs text-muted-foreground">
                      <span>Opened: {formatDate(account.openedAt)}</span>
                      <span>{account.interestRate > 0 ? `${account.interestRate}% APY` : ""}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Bank Accounts Found</h3>
                <p className="text-muted-foreground mb-4">You don't have any bank accounts yet.</p>
                <Button asChild>
                  <Link href="/u/accounts/new">Open a New Account</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Selected Account Details */}
          {selectedAccountData && (
            <Card className="mt-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getAccountTypeIcon(selectedAccountData.accountType)}
                    <div>
                      <CardTitle>{selectedAccountData.accountName}</CardTitle>
                      <CardDescription>{getAccountTypeLabel(selectedAccountData.accountType)}</CardDescription>
                    </div>
                  </div>
                  {getStatusBadge(selectedAccountData.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Left Column - Account Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">Account Information</h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-sm font-medium">Account Number</div>
                          <div className="flex items-center justify-end gap-1">
                            <span className="font-mono">{formatAccountNumber(selectedAccountData.accountNumber)}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => copyToClipboard(selectedAccountData.accountNumber, "Account number")}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-sm font-medium">Routing Number</div>
                          <div className="flex items-center justify-end gap-1">
                            <span className="font-mono">{selectedAccountData.routingNumber}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => copyToClipboard(selectedAccountData.routingNumber, "Routing number")}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-sm font-medium">Account Type</div>
                          <div className="text-right">{getAccountTypeLabel(selectedAccountData.accountType)}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-sm font-medium">Date Opened</div>
                          <div className="text-right">{formatDate(selectedAccountData.openedAt)}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-sm font-medium">Currency</div>
                          <div className="text-right">{selectedAccountData.currencyType}</div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">Account Features</h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-sm font-medium">Interest Rate</div>
                          <div className="text-right">{selectedAccountData.interestRate}% APY</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-sm font-medium">Minimum Balance</div>
                          <div className="text-right">${selectedAccountData.minimumBalance.toFixed(2)}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="text-sm font-medium">Overdraft Protection</div>
                          <div className="text-right flex items-center justify-end">
                            {selectedAccountData.hasOverdraftProtection ? (
                              <>
                                <CheckCircle2 className="h-4 w-4 text-green-600 mr-1" />
                                <span>Enabled (${selectedAccountData.overdraftLimit.toFixed(2)})</span>
                              </>
                            ) : (
                              "Not Enabled"
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Balance & Actions */}
                  <div className="space-y-6">
                    <Card className="bg-primary/5 border-none">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">Current Balance</h3>
                          <div className="text-3xl font-bold">${selectedAccountData.balance.toFixed(2)}</div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Available: ${selectedAccountData.availableBalance.toFixed(2)}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-3">
                      <Button className="w-full justify-between">
                        View Statements
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        Account Settings
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        Direct Deposit Form
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${userData.totalBalance.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">Across all accounts</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${userData.totalSavings.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">10% of total balance</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Spending</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${userData.monthlySpending.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Your Cards</CardTitle>
                  <CardDescription>
                    {userData.cards.length === 0
                      ? "No cards added yet"
                      : `You have ${userData.cards.length} active card${userData.cards.length > 1 ? "s" : ""}`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center px-16">
                  <CardsList cards={userData.cards} expanded={true} />
                </CardContent>
              </Card>
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>
                    {userData.transactions.length === 0
                      ? "No transactions yet"
                      : `${userData.transactions.length} recent transactions`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentTransactions transactions={userData.transactions} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>View detailed analytics of your spending habits</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Analytics dashboard coming soon</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>Generate and download financial reports</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Reports dashboard coming soon</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
        </div>
     
    </div>
  )
}

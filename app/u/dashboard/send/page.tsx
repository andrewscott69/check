"use client";

import type React from "react";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
import Link from "next/link";
import { countries } from "@/lib/countries";
import { MobileNav } from "@/components/mobile-nav";
import {
  ArrowLeft,
  Building,
  CreditCard,
  DollarSign,
  Globe,
  Info,
  Landmark,
  User,
  CheckCircle,
  Bell,
} from "lucide-react";
import { UserNav } from "@/components/user-nav";
import { toast } from "sonner" 
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { TransactionStatusCard } from "@/components/transcation-status-card";
import Image from "next/image";

interface BankAccount {
  id: string;
  accountNumber: string;
  routingNumber: string;
  accountType: string;
  accountName: string;
  balance: number;
  availableBalance: number;
  status: string;
  currencyType: string;
  interestRate: number;
  overdraftLimit: number;
  hasOverdraftProtection: boolean;
  minimumBalance: number;
  openedAt: string;
}

interface Recipient {
  id: string;
  name: string;
  accountNumber: string;
  lastUsed: string;
}

interface TransferResult {
  success: boolean;
  transactionId: string;
  message: string;
  details: {
    amount: number;
    fee: number;
    total: number;
    transferType: string;
    recipient: string;
    estimatedArrival: string;
    status: string;
    requiresApproval: boolean;
    isApproved: boolean;
  };
}

export default function TransferPage() {
  const [transferType, setTransferType] = useState("local");
  const [amount, setAmount] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [recipientType, setRecipientType] = useState("existing");
  const [loading, setLoading] = useState(false);
  const [transferResult, setTransferResult] = useState<TransferResult | null>(
    null
  );

  const router = useRouter();
  const userEmail =
    typeof window !== "undefined" ? localStorage.getItem("userEmail") : "";

  const [formData, setFormData] = useState({
    recipientName: "",
    accountNumber: "",
    routingNumber: "",
    swiftCode: "",
    iban: "",
    bankName: "",
    bankAddress: "",
    country: "",
    currency: "USD",
    intermediaryBank: "",
    reference: "",
    note: "",
    transferDate: "now",
  });

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await fetch("/api/dashboard");
      const data = await response.json();
      if (data.bankAccounts) {
        setAccounts(data.bankAccounts);
        if (data.bankAccounts.length > 0) {
          setSelectedAccount(data.bankAccounts[0].id);
        }
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    setShowSummary(true);
  };

  const handleBack = () => {
    setShowSummary(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const selectedAccountData = accounts.find(
      (acc) => acc.id === selectedAccount
    );
  
    const transferData = {
      transferType,
      fromAccountId: selectedAccount,
      amount: Number.parseFloat(amount.replace(/,/g, "")),
      recipientData: {
        name: formData.recipientName,
        accountNumber: formData.accountNumber,
        routingNumber: formData.routingNumber,
        swiftCode: formData.swiftCode,
        iban: formData.iban,
        bankName: formData.bankName,
        bankAddress: formData.bankAddress,
        country: formData.country,
        currency: formData.currency,
        intermediaryBank: formData.intermediaryBank,
      },
      reference: formData.reference,
      note: formData.note,
      scheduledDate: formData.transferDate,
      status: "unverified",
    };
  
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transferData),
      });
  
      const result = await res.json();
  
      if (result.success && result.status === "transfer") {
        // case: OTP flow
        sessionStorage.setItem("transferData", JSON.stringify(transferData));
        sessionStorage.setItem("verificationEmail", result.email);
        sessionStorage.setItem("verificationStatus", "transfer");
  
        router.push("/u/verify-otp");
      } else if (result.success && result.status === "unverified") {
        // case: unverified, not auto-approved
        setTransferResult(result);
        setShowSuccess(true);
      } else {
        alert(result.error || "Transfer failed.");
      }
    } catch (error) {
      console.error("Transfer submit error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const transferData = sessionStorage.getItem("transferData");
    if (!transferData) return;
  
    const parsed = JSON.parse(transferData);
    if (parsed.status === "verified") {
      
      fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            toast.success("Transfer successful!");
            
          } else {
            toast.error(result.error || "Transfer failed");
          }
        })
        .catch(() => toast.error("Something went wrong"))
        .finally(() => {
          sessionStorage.removeItem("transferData");
        });
    }
  }, []);
  
  const getFee = () => {
    switch (transferType) {
      case "local":
        return 0;
      case "international":
        return 15;
      case "wire":
        return 35;
      default:
        return 0;
    }
  };

  const getTotal = () => {
    const amt = Number.parseFloat(amount) || 0;
    return amt + getFee();
  };



  if (showSuccess && transferResult) {
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
          <div className="mx-auto max-w-2xl space-y-6">
            {transferResult && transferResult.details && (
              <TransactionStatusCard
                transaction={{
                  id: transferResult.transactionId,
                  amount: transferResult.details.amount,
                  fee: transferResult.details.fee,
                  status: transferResult.details.status,
                  transferType: transferResult.details.transferType,
                  recipient: transferResult.details.recipient,
                  estimatedArrival: transferResult.details.estimatedArrival,
                  requiresApproval: transferResult.details.requiresApproval,
                  createdAt: new Date().toISOString(),
                }}
              />
            )}

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="mb-2 text-xl font-semibold">
                  Account Blocked!
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {transferResult.message}
                </p>

                {transferResult.details.requiresApproval && (
                  <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-800">
                    <p className="text-sm font-medium">⏳ Status: suspended</p>
                    <p className="text-xs">
                      Access to this account has been temporarily suspended pending review of suspicious activity. 
                      Please reach out to our support team for resolution.
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button asChild className="w-full">
                  <Link href="/u/dashboard">Return to Dashboard</Link>
                </Button>
               <Button variant="outline" asChild className="w-full">
                  <a href="mailto:servicecenter@silvercrestbank.com">Contact Support</a>
               </Button>

              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  // Rest of the component remains the same as your original code...
  return (
    <div className="flex min-h-screen flex-col">
      <header className=" flex h-16 items-center justify-between border-b bg-slate-900 px-4 md:px-6">
        <Link href="/u/dashboard" className="flex items-center gap-2">
          <Image
            src="/Silver-Crest-BW.png"
            alt="Silver Crest Logo"
            width={90}
            height={90}
            className="object-contain"
          />
          {/* Optional: add brand name */}
          {/* <span className="text-white text-lg font-semibold">Silver Crest</span> */}
        </Link>

        <div className="flex items-center gap-4">
          {/* <Button
            variant="outline"
            size="icon"
            className="rounded-full border-black text-amber-500 hover:text-amber-600"
          >
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button> */}
          <UserNav />
        </div>
      </header>

      <main className="flex-1 bg-slate-50 p-4 md:p-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/u/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Money Transfer</h1>
          </div>

          {!showSummary ? (
            <Card className="border-0 shadow-md">
              <CardHeader className="bg-white rounded-t-lg border-b pb-2">
                <CardTitle>Transfer Funds</CardTitle>
                <CardDescription>
                  Send money locally or internationally
                </CardDescription>
              </CardHeader>
              <Tabs
                defaultValue="local"
                className="w-full"
                onValueChange={setTransferType}
              >
                <div className="px-6 pt-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="local">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Local Transfer
                    </TabsTrigger>
                    <TabsTrigger value="international">
                      <Globe className="mr-2 h-4 w-4" />
                      International
                    </TabsTrigger>
                    <TabsTrigger value="wire">
                      <Landmark className="mr-2 h-4 w-4" />
                      Wire Transfer
                    </TabsTrigger>
                  </TabsList>
                </div>

                <CardContent className="pt-6">
                  <form>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="from-account">From Account</Label>
                          <Select
                            value={selectedAccount}
                            onValueChange={setSelectedAccount}
                          >
                            <SelectTrigger id="from-account">
                              <SelectValue placeholder="Select account" />
                            </SelectTrigger>
                            <SelectContent>
                              {accounts.map((account) => (
                                <SelectItem key={account.id} value={account.id}>
                                  {account.accountName} (*
                                  {account.accountNumber.slice(-4)}) - $
                                  {account.availableBalance.toLocaleString(
                                    "en-US",
                                    {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    }
                                  )}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="amount">Amount</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="amount"
                              placeholder="0.00"
                              className="pl-9"
                              value={amount}
                              onChange={(e) => {
                                const rawValue = e.target.value.replace(
                                  /,/g,
                                  ""
                                );
                                // Only allow numbers and decimals
                                if (/^\d*\.?\d{0,2}$/.test(rawValue)) {
                                  const [integer, decimal] =
                                    rawValue.split(".");
                                  const formattedInteger =
                                    Number(integer).toLocaleString("en-US");
                                  const formatted =
                                    decimal !== undefined
                                      ? `${formattedInteger}.${decimal}`
                                      : formattedInteger;
                                  setAmount(formatted);
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <TabsContent value="local" className="mt-0 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="recipient-name">Recipient Name</Label>
                          <Input
                            id="recipient-name"
                            placeholder="Full name"
                            value={formData.recipientName}
                            onChange={(e) =>
                              handleInputChange("recipientName", e.target.value)
                            }
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="account-number">
                              Account Number
                            </Label>
                            <Input
                              id="account-number"
                              placeholder="Enter account number"
                              value={formData.accountNumber}
                              onChange={(e) =>
                                handleInputChange(
                                  "accountNumber",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="routing-number">
                              Routing Number
                            </Label>
                            <Input
                              id="routing-number"
                              placeholder="Enter routing number"
                              value={formData.routingNumber}
                              onChange={(e) =>
                                handleInputChange(
                                  "routingNumber",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent
                        value="international"
                        className="mt-0 space-y-4"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="recipient-name-intl">
                            Recipient Name
                          </Label>
                          <Input
                            id="recipient-name-intl"
                            placeholder="Full name as it appears on the account"
                            value={formData.recipientName}
                            onChange={(e) =>
                              handleInputChange("recipientName", e.target.value)
                            }
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="recipient-country">
                              Recipient Country
                            </Label>
                            <Select
                              value={formData.country}
                              onValueChange={(value) =>
                                handleInputChange("country", value)
                              }
                            >
                              <SelectTrigger id="recipient-country">
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                              <SelectContent>
                                {countries.map((country) => (
                                  <SelectItem key={country} value={country}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="currency">Currency</Label>
                            <Select
                              value={formData.currency}
                              onValueChange={(value) =>
                                handleInputChange("currency", value)
                              }
                            >
                              <SelectTrigger id="currency">
                                <SelectValue placeholder="Select currency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="USD">
                                  USD - US Dollar
                                </SelectItem>
                                <SelectItem value="EUR">EUR - Euro</SelectItem>
                                <SelectItem value="GBP">
                                  GBP - British Pound
                                </SelectItem>
                                <SelectItem value="CAD">
                                  CAD - Canadian Dollar
                                </SelectItem>
                                <SelectItem value="JPY">
                                  JPY - Japanese Yen
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="swift-code">SWIFT/BIC Code</Label>
                          <Input
                            id="swift-code"
                            placeholder="Enter SWIFT or BIC code"
                            value={formData.swiftCode}
                            onChange={(e) =>
                              handleInputChange("swiftCode", e.target.value)
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="iban">IBAN/Account Number</Label>
                          <Input
                            id="iban"
                            placeholder="Enter IBAN or account number"
                            value={formData.iban}
                            onChange={(e) =>
                              handleInputChange("iban", e.target.value)
                            }
                          />
                        </div>

                        <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-800">
                          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">
                            International transfers typically take 1-3 business
                            days and may incur additional fees from intermediary
                            banks.
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="wire" className="mt-0 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="wire-recipient">Recipient Name</Label>
                          <Input
                            id="wire-recipient"
                            placeholder="Full legal name"
                            value={formData.recipientName}
                            onChange={(e) =>
                              handleInputChange("recipientName", e.target.value)
                            }
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="recipient-bank">
                              Recipient Bank
                            </Label>
                            <Input
                              id="recipient-bank"
                              placeholder="Bank name"
                              value={formData.bankName}
                              onChange={(e) =>
                                handleInputChange("bankName", e.target.value)
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="recipient-bank-address">
                              Bank Address
                            </Label>
                            <Input
                              id="recipient-bank-address"
                              placeholder="Bank address"
                              value={formData.bankAddress}
                              onChange={(e) =>
                                handleInputChange("bankAddress", e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="wire-account">Account Number</Label>
                            <Input
                              id="wire-account"
                              placeholder="Enter account number"
                              value={formData.accountNumber}
                              onChange={(e) =>
                                handleInputChange(
                                  "accountNumber",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="wire-routing">
                              ABA/Routing Number
                            </Label>
                            <Input
                              id="wire-routing"
                              placeholder="Enter routing number"
                              value={formData.routingNumber}
                              onChange={(e) =>
                                handleInputChange(
                                  "routingNumber",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="intermediary-bank">
                            Intermediary Bank (Optional)
                          </Label>
                          <Input
                            id="intermediary-bank"
                            placeholder="Intermediary bank name if applicable"
                            value={formData.intermediaryBank}
                            onChange={(e) =>
                              handleInputChange(
                                "intermediaryBank",
                                e.target.value
                              )
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="reference">
                            Reference Code/Message
                          </Label>
                          <Input
                            id="reference"
                            placeholder="Reference for recipient"
                            value={formData.reference}
                            onChange={(e) =>
                              handleInputChange("reference", e.target.value)
                            }
                          />
                        </div>

                        <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-800">
                          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">
                            Wire transfers typically incur a $25-$50 fee and may
                            take 1-2 business days to process.
                          </p>
                        </div>
                      </TabsContent>

                      <div className="space-y-2">
                        <Label htmlFor="transfer-date">Transfer Date</Label>
                        <Select
                          value={formData.transferDate}
                          onValueChange={(value) =>
                            handleInputChange("transferDate", value)
                          }
                        >
                          <SelectTrigger id="transfer-date">
                            <SelectValue placeholder="Select date" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="now">Send Now</SelectItem>
                            <SelectItem value="today">Later Today</SelectItem>
                            <SelectItem value="tomorrow">Tomorrow</SelectItem>
                            <SelectItem value="custom">
                              Schedule for Later
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="note">Note (Optional)</Label>
                        <Textarea
                          id="note"
                          placeholder="Add a note or reference for this transfer"
                          value={formData.note}
                          onChange={(e) =>
                            handleInputChange("note", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>

                <CardFooter className="flex flex-col space-y-2 border-t pt-4 mt-2">
                  <Button
                    className="w-full bg-amber-500"
                    onClick={handleContinue}
                    disabled={!amount || !selectedAccount}
                  >
                    Continue
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/u/dashboard">Cancel</Link>
                  </Button>
                </CardFooter>
              </Tabs>
            </Card>
          ) : (
            <Card className="border-0 shadow-md">
              <CardHeader className="bg-white rounded-t-lg border-b">
                <CardTitle>Transfer Summary</CardTitle>
                <CardDescription>
                  Review your transfer details before confirming
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Transfer Type
                      </h3>
                      <p className="text-base font-medium flex items-center gap-2 mt-1">
                        {transferType === "local" && (
                          <CreditCard className="h-4 w-4" />
                        )}
                        {transferType === "international" && (
                          <Globe className="h-4 w-4" />
                        )}
                        {transferType === "wire" && (
                          <Landmark className="h-4 w-4" />
                        )}
                        {transferType === "local"
                          ? "Local Transfer"
                          : transferType === "international"
                          ? "International Transfer"
                          : "Wire Transfer"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        From Account
                      </h3>
                      <p className="text-base font-medium mt-1">
                        {
                          accounts.find((acc) => acc.id === selectedAccount)
                            ?.accountName
                        }
                        (*
                        {accounts
                          .find((acc) => acc.id === selectedAccount)
                          ?.accountNumber.slice(-4)}
                        )
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        To Recipient
                      </h3>
                      <p className="text-base font-medium mt-1">
                        {recipientType === "existing"
                          ? recipients.find(
                              (rec) => rec.id === selectedRecipient
                            )?.name
                          : formData.recipientName}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Transfer Date
                      </h3>
                      <p className="text-base font-medium mt-1">Immediate</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Amount
                      </h3>
                      <p className="text-xl font-bold mt-1">
                        $
                        {Number(amount.replace(/,/g, "") || 0).toLocaleString(
                          "en-US",
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Fee
                      </h3>
                      <p className="text-base font-medium mt-1">
                        ${getFee().toFixed(2)}
                      </p>
                    </div>
                    <Separator className="my-2" />
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Total
                      </h3>
                      <p className="text-xl font-bold mt-1">
                        ${getTotal().toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Estimated Arrival
                      </h3>
                      <p className="text-base font-medium mt-1">
                        {transferType === "local"
                          ? "Same day"
                          : transferType === "international"
                          ? "1-3 business days"
                          : "1-2 business days"}
                      </p>
                      <Badge
                        variant="outline"
                        className="mt-2 bg-green-50 text-green-700 border-green-200"
                      >
                        {transferType === "local" ? "No fee" : "Fee included"}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <Building className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-700">
                    By proceeding, you agree to our transfer terms and
                    conditions. Transfers may be subject to review.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 border-t pt-4 mt-2">
                <Button
                  className="w-full bg-amber-500"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Confirm Transfer"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleBack}
                >
                  Back to Edit
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

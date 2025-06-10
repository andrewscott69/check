"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Copy, Loader2, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock admin wallet addresses
const ADMIN_WALLETS = {
  BTC: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  USDT: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  SOL: "8ZUgCCZpZDWrV6xZniFUhJcZW9KnrJsJBcL6unYHiWxw",
}

// Currency icons and details
const CURRENCY_DETAILS = {
  BTC: {
    name: "Bitcoin",
    icon: "/bitcoin-icon.svg", // Replace with actual path
    color: "bg-orange-500",
  },
  USDT: {
    name: "Tether",
    icon: "/usdt-icon.svg", // Replace with actual path
    color: "bg-green-500",
  },
  SOL: {
    name: "Solana",
    icon: "/solana-icon.svg", // Replace with actual path
    color: "bg-purple-500",
  },
}

interface FundCardModalProps {
    isOpen: boolean;
    onClose: () => void;
    card: {
      currencyType: keyof typeof ADMIN_WALLETS;
      name: string;
      cardNumber: string;
      balance: number;
    } | null;
    onSuccess: (transaction: {
      id: string;
      type: string;
      amount: number;
      currencyType: string;
      status: string;
      date: string;
    }) => void;
  }
  export function FundCardModal({ isOpen, onClose, card, onSuccess }: FundCardModalProps) {
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("wallet")
  const [walletUrl, setWalletUrl] = useState("")

  useEffect(() => {
    if (card && amount) {
      // Generate deep link for Trust Wallet or other wallets
      // This is a simplified example - actual implementation will vary
      const adminAddress = ADMIN_WALLETS[card.currencyType]

      if (card.currencyType === "BTC") {
        setWalletUrl(`bitcoin:${adminAddress}?amount=${amount}`)
      } else if (card.currencyType === "USDT") {
        setWalletUrl(`ethereum:${adminAddress}?value=${amount}&gas=21000`)
      } else if (card.currencyType === "SOL") {
        setWalletUrl(`solana:${adminAddress}?amount=${amount}`)
      }
    }
  }, [card, amount])

  const handleCopyAddress = () => {
    if (card) {
      navigator.clipboard.writeText(ADMIN_WALLETS[card.currencyType])
      alert("Address copied to clipboard!")
    }
  }

  const handleOpenWallet = () => {
    if (walletUrl) {
      // In a real app, this would open the wallet app
      window.open(walletUrl, "_blank")

      // Simulate transaction processing
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        onSuccess({
            id: `tx-${Math.random().toString(36).substring(2, 9)}`,
            type: "DEPOSIT",
            amount: Number.parseFloat(amount),
            currencyType: card?.currencyType ?? "BTC", // Provide a default currency type
            status: "COMPLETED",
            date: new Date().toISOString(),
          });
        handleClose()
      }, 3000)
    }
  }

  const handleClose = () => {
    setAmount("")
    setIsLoading(false)
    setActiveTab("wallet")
    onClose()
  }

  if (!card) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Fund Your {CURRENCY_DETAILS[card.currencyType]?.name} Card</DialogTitle>
          <DialogDescription>
            Add funds to your card by sending {card.currencyType} to the address below.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="mb-4 flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${CURRENCY_DETAILS[card.currencyType]?.color} text-white`}
              >
                {card.currencyType}
              </div>
              <div className="ml-3">
                <div className="font-medium">{card.name}</div>
                <div className="text-sm text-muted-foreground">{card.cardNumber}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">
                {card.balance} {card.currencyType}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to Fund ({card.currencyType})</Label>
              <Input
                id="amount"
                type="number"
                step="0.000001"
                min="0"
                placeholder={`0.00 ${card.currencyType}`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="wallet">Wallet App</TabsTrigger>
                <TabsTrigger value="manual">Manual Transfer</TabsTrigger>
              </TabsList>

              <TabsContent value="wallet" className="space-y-4 py-4">
                <p className="text-sm text-muted-foreground">
                  Click the button below to open your wallet app and complete the transfer.
                </p>
                <Button className="w-full" onClick={handleOpenWallet} disabled={!amount || isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Open Wallet App
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </TabsContent>

              <TabsContent value="manual" className="space-y-4 py-4">
                <div className="flex justify-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-lg border p-2">
                    <QrCode className="h-full w-full text-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Wallet Address</Label>
                  <div className="flex">
                    <Input
                      value={ADMIN_WALLETS[card.currencyType]}
                      readOnly
                      className="rounded-r-none font-mono text-sm"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-l-none border-l-0"
                      onClick={handleCopyAddress}
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy address</span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Send exactly {amount || "0.00"} {card.currencyType} to this address.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


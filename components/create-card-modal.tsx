"use client"

import { useState } from "react"
import { Check, CreditCard, Loader2 } from "lucide-react"

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CreateCardModalProps {
    isOpen: boolean
    onClose: () => void
    onSuccess: (card: {
      id: string
      name: string
      cardNumber: string
      expiryDate: string
      currencyType: string
      balance: number
    }) => void
  }

  interface Card {
    id: string
    name: string
    cardNumber: string
    expiryDate: string
    currencyType: string
    balance: number
  }
  

  export function CreateCardModal({ isOpen, onClose, onSuccess }: CreateCardModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [cardName, setCardName] = useState("")
  const [currencyType, setCurrencyType] = useState("")
  const [isCreated, setIsCreated] = useState(false)
  const [newCard, setNewCard] = useState<Card | null>(null)

  const handleCreateCard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {

         // In a real app, this would be an API call to create a card
      // const response = await fetch('/api/cards', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name: cardName, currencyType }),
      // });
      // const data = await response.json();

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
  
      // Mock response data
      const mockCard: Card = {
        id: `card-${Math.random().toString(36).substring(2, 9)}`,
        name: cardName,
        cardNumber: `**** **** **** ${Math.floor(1000 + Math.random() * 9000)}`,
        expiryDate: "12/28",
        currencyType,
        balance: 0,
      };
  
      setNewCard(mockCard);
      setIsCreated(true);
  
      // Wait 2 seconds before closing the modal
      setTimeout(() => {
        onSuccess(mockCard);
        handleClose();
      }, 2000);
    } catch (error) {
      console.error("Error creating card:", error);
    } finally {
      setIsLoading(false);
    }
  };
  


  const handleClose = () => {
    setIsCreated(false)
    setCardName("")
    setCurrencyType("")
    setNewCard(null)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        {isCreated ? (
          <div className="flex flex-col items-center justify-center py-6">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-center text-xl">Card Created Successfully!</DialogTitle>
            <DialogDescription className="text-center">
              Your new {currencyType} card has been created and is ready to use.
            </DialogDescription>
            <div className="mt-6 w-full rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{newCard?.name}</span>
                <span className="text-xs text-muted-foreground">{newCard?.currencyType}</span>
              </div>
              <div className="mt-2 text-sm">{newCard?.cardNumber}</div>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Create New Crypto Card</DialogTitle>
              <DialogDescription>
                Create a new card for a specific cryptocurrency. Each card can only hold one type of cryptocurrency.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateCard} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">Card Name</Label>
                <Input
                  id="cardName"
                  placeholder="My Bitcoin Card"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currencyType">Currency Type</Label>
                <Select value={currencyType} onValueChange={setCurrencyType} required>
                  <SelectTrigger id="currencyType">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                    <SelectItem value="USDT">Tether (USDT)</SelectItem>
                    <SelectItem value="SOL">Solana (SOL)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading || !cardName || !currencyType}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Create Card
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}


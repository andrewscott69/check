"use client"

import type React from "react"

import { useState } from "react"
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
import { CreditCard, Check, Loader2 } from "lucide-react"

interface AddCardModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCardAdded: () => void
}

interface CardFormData {
  name: string
  cardNumber: string
  expiryDate: string
  cvv: string
}

// Card type detection function
function detectCardType(cardNumber: string): { type: string; color: string } {
  const cleaned = cardNumber.replace(/\s/g, "")

  // Visa: starts with 4
  if (/^4/.test(cleaned)) {
    return { type: "visa", color: "blue" }
  }

  // Mastercard: starts with 5 or 2221-2720
  if (/^5[1-5]/.test(cleaned) || /^2(22[1-9]|2[3-9]|[3-6]|7[0-1]|720)/.test(cleaned)) {
    return { type: "mastercard", color: "red" }
  }

  // American Express: starts with 34 or 37
  if (/^3[47]/.test(cleaned)) {
    return { type: "amex", color: "green" }
  }

  // Discover: starts with 6
  if (/^6/.test(cleaned)) {
    return { type: "discover", color: "purple" }
  }

  return { type: "unknown", color: "gray" }
}

// Format card number with spaces
function formatCardNumber(value: string): string {
  const cleaned = value.replace(/\s/g, "")
  const match = cleaned.match(/.{1,4}/g)
  return match ? match.join(" ") : cleaned
}

// Format expiry date MM/YY
function formatExpiryDate(value: string): string {
  const cleaned = value.replace(/\D/g, "")
  if (cleaned.length >= 2) {
    return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4)
  }
  return cleaned
}

export function AddCardModal({ open, onOpenChange, onCardAdded }: AddCardModalProps) {
  const [formData, setFormData] = useState<CardFormData>({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<CardFormData>>({})

  const detectedCard = detectCardType(formData.cardNumber)

  const validateForm = (): boolean => {
    const newErrors: Partial<CardFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Card name is required"
    }

    const cleanedNumber = formData.cardNumber.replace(/\s/g, "")
    if (!cleanedNumber) {
      newErrors.cardNumber = "Card number is required"
    } else if (cleanedNumber.length < 13 || cleanedNumber.length > 19) {
      newErrors.cardNumber = "Invalid card number length"
    }

    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry date is required"
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Invalid expiry format (MM/YY)"
    }

    if (!formData.cvv) {
      newErrors.cvv = "CVV is required"
    } else if (formData.cvv.length < 3 || formData.cvv.length > 4) {
      newErrors.cvv = "Invalid CVV length"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await fetch("/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          cardNumber: formData.cardNumber.replace(/\s/g, ""),
          expiryDate: formData.expiryDate,
          cvv: formData.cvv,
          type: detectedCard.type,
          color: detectedCard.color,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to add card")
      }

      // Reset form and close modal
      setFormData({ name: "", cardNumber: "", expiryDate: "", cvv: "" })
      setErrors({})
      onOpenChange(false)
      onCardAdded()
    } catch (error) {
      console.error("Error adding card:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof CardFormData, value: string) => {
    let formattedValue = value

    if (field === "cardNumber") {
      formattedValue = formatCardNumber(value.replace(/\D/g, ""))
      if (formattedValue.replace(/\s/g, "").length > 19) return
    } else if (field === "expiryDate") {
      formattedValue = formatExpiryDate(value)
      if (formattedValue.replace(/\D/g, "").length > 4) return
    } else if (field === "cvv") {
      formattedValue = value.replace(/\D/g, "")
      if (formattedValue.length > 4) return
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const getCardIcon = () => {
    switch (detectedCard.type) {
      case "visa":
        return <div className="text-blue-600 font-bold text-sm">VISA</div>
      case "mastercard":
        return (
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full -ml-1"></div>
          </div>
        )
      case "amex":
        return <div className="text-green-600 font-bold text-sm">AMEX</div>
      case "discover":
        return <div className="text-purple-600 font-bold text-sm">DISC</div>
      default:
        return <CreditCard className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Add New Card
          </DialogTitle>
          <DialogDescription>
            Enter your card details below. We'll automatically detect the card type.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Card Name</Label>
            <Input
              id="name"
              placeholder="e.g., Personal Card, Work Card"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber" className="flex items-center justify-between">
              Card Number
              <div className="flex items-center gap-2">
                {getCardIcon()}
                {detectedCard.type !== "unknown" && <Check className="h-4 w-4 text-green-500" />}
              </div>
            </Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => handleInputChange("cardNumber", e.target.value)}
              className={errors.cardNumber ? "border-red-500" : ""}
            />
            {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                className={errors.expiryDate ? "border-red-500" : ""}
              />
              {errors.expiryDate && <p className="text-sm text-red-500">{errors.expiryDate}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                type="password"
                value={formData.cvv}
                onChange={(e) => handleInputChange("cvv", e.target.value)}
                className={errors.cvv ? "border-red-500" : ""}
              />
              {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Adding Card...
                </>
              ) : (
                "Add Card"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

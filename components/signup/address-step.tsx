"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, AlertCircle } from "lucide-react"
//import type { SignupData } from "@/app/u/signup/page"
import type { SignupStepProps } from "@/types/SignupStepProps"



const US_STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
]

export default function AddressStep({ data, onNext, onPrev, isLoading }: SignupStepProps) {
  const [formData, setFormData] = useState({
    streetAddress: data.streetAddress || "",
    city: data.city || "",
    state: data.state || "",
    zipCode: data.zipCode || "",
    country: data.country || "US",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const formatZipCode = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 5) return numbers
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 9)}`
  }

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatZipCode(e.target.value)
    setFormData((prev) => ({ ...prev, zipCode: formatted }))
    if (errors.zipCode) {
      setErrors((prev) => ({ ...prev, zipCode: "" }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.state) newErrors.state = "State is required"

    if (!formData.zipCode) {
      newErrors.zipCode = "ZIP code is required"
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = "Please enter a valid ZIP code"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate()) {
      onNext(formData)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Address Information</h2>
        <p className="text-gray-600">Please provide your current residential address</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="streetAddress">Street Address *</Label>
          <Input
            id="streetAddress"
            value={formData.streetAddress}
            onChange={(e) => handleInputChange("streetAddress", e.target.value)}
            placeholder="123 Main Street"
            className={errors.streetAddress ? "border-red-500" : ""}
          />
          {errors.streetAddress && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.streetAddress}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="New York"
              className={errors.city ? "border-red-500" : ""}
            />
            {errors.city && (
              <p className="text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.city}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State *</Label>
            <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
              <SelectTrigger className={errors.state ? "border-red-500" : ""}>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {US_STATES.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.state && (
              <p className="text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.state}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP Code *</Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={handleZipCodeChange}
              placeholder="12345 or 12345-6789"
              maxLength={10}
              className={errors.zipCode ? "border-red-500" : ""}
            />
            {errors.zipCode && (
              <p className="text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.zipCode}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This address will be used for account verification and correspondence. Please ensure it
          matches your government-issued ID.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        {onPrev && (
          <Button variant="outline" onClick={onPrev}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
        )}
        <Button onClick={handleNext} className="ml-auto">
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

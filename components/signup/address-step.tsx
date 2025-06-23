"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, ArrowRight, AlertCircle } from "lucide-react"
import { Country, State } from "country-state-city"
import isPostalCode from "validator/lib/isPostalCode"
import type { SignupStepProps } from "@/types/SignupStepProps"

export default function AddressStep({ data, onNext, onPrev }: SignupStepProps) {
  const [countries, setCountries] = useState(Country.getAllCountries())
  const [states, setStates] = useState<Array<{ name: string; isoCode: string }>>([])

  const [formData, setFormData] = useState({
    streetAddress: data.streetAddress || "",
    city: data.city || "",
    state: data.state || "",
    zipCode: data.zipCode || "",
    country: data.country || "US",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const selectedCountry = countries.find((c) => c.isoCode === formData.country)
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry.isoCode))
    }
  }, [formData.country, countries])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.streetAddress.trim()) newErrors.streetAddress = "Street address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.state) newErrors.state = "State is required"

    if (!formData.zipCode) {
      newErrors.zipCode = "ZIP/postal code is required"
    } else {
      try {
        if (!isPostalCode(formData.zipCode, formData.country as any)) {
          newErrors.zipCode = "Invalid ZIP/postal code for selected country"
        }
      } catch {
        if (!/^[0-9A-Za-z -]{3,10}$/.test(formData.zipCode)) {
          newErrors.zipCode = "Invalid postal code format"
        }
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate()) {
      onNext(formData)
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
            <Label htmlFor="country">Country *</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleInputChange("country", value)}
            >
              <SelectTrigger className={errors.country ? "border-red-500" : ""}>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State/Province *</Label>
            <Select
              value={formData.state}
              onValueChange={(value) => handleInputChange("state", value)}
            >
              <SelectTrigger className={errors.state ? "border-red-500" : ""}>
                <SelectValue placeholder="Select state/province" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state.isoCode} value={state.name}>
                    {state.name}
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

        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
          <Input
            id="zipCode"
            value={formData.zipCode}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
            placeholder="e.g. 12345 or A1B 2C3"
            className={errors.zipCode ? "border-red-500" : ""}
          />
          {errors.zipCode && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.zipCode}
            </p>
          )}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-sm text-amber-600">
          <strong>Note:</strong> Please ensure this address matches your government-issued ID.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        {onPrev && (
          <Button variant="outline" onClick={onPrev}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
        )}
        <Button onClick={handleNext} className="ml-auto bg-amber-500">
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

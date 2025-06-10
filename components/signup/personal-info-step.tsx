"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, AlertCircle, Eye, EyeOff } from "lucide-react"
//import type { SignupData } from "@/app/u/signup/page"
import type { SignupStepProps } from "@/types/SignupStepProps"


export default function PersonalInfoStep({ data, onNext, onPrev, isLoading }: SignupStepProps) {
  const [formData, setFormData] = useState({
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    password: data.password || "",
    phoneNumber: data.phoneNumber || "",
    dateOfBirth: data.dateOfBirth || "",
    occupation: data.occupation || "",
    employmentStatus: data.employmentStatus || "",
    annualIncome: data.annualIncome || "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData((prev) => ({ ...prev, phoneNumber: formatted }))
    if (errors.phoneNumber) {
      setErrors((prev) => ({ ...prev, phoneNumber: "" }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d])/.test(formData.password)) {
      newErrors.password = "Password must contain letters, numbers, and special characters"
    }

    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.occupation.trim()) newErrors.occupation = "Occupation is required"
    if (!formData.employmentStatus) newErrors.employmentStatus = "Employment status is required"
    if (!formData.annualIncome) newErrors.annualIncome = "Annual income is required"

    // Age validation
    if (formData.dateOfBirth) {
      const today = new Date()
      const birthDate = new Date(formData.dateOfBirth)
      const age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        const actualAge = age - 1
        if (actualAge < 18) {
          newErrors.dateOfBirth = "You must be at least 18 years old to open an account"
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-600">Please provide your personal details to continue</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            placeholder="John"
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            placeholder="Doe"
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="john.doe@example.com"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="••••••••"
            className={errors.password ? "border-red-500" : ""}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
          </Button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.password}
          </p>
        )}
        <p className="text-xs text-gray-500">8+ characters with letters, numbers, and special characters</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number *</Label>
          <Input
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            placeholder="(555) 123-4567"
            maxLength={14}
            className={errors.phoneNumber ? "border-red-500" : ""}
          />
          {errors.phoneNumber && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.phoneNumber}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            className={errors.dateOfBirth ? "border-red-500" : ""}
          />
          {errors.dateOfBirth && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.dateOfBirth}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="occupation">Occupation *</Label>
        <Input
          id="occupation"
          value={formData.occupation}
          onChange={(e) => handleInputChange("occupation", e.target.value)}
          placeholder="Software Engineer"
          className={errors.occupation ? "border-red-500" : ""}
        />
        {errors.occupation && (
          <p className="text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.occupation}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="employmentStatus">Employment Status *</Label>
          <Select
            value={formData.employmentStatus}
            onValueChange={(value) => handleInputChange("employmentStatus", value)}
          >
            <SelectTrigger className={errors.employmentStatus ? "border-red-500" : ""}>
              <SelectValue placeholder="Select employment status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full_time">Full-time</SelectItem>
              <SelectItem value="part_time">Part-time</SelectItem>
              <SelectItem value="self_employed">Self-employed</SelectItem>
              <SelectItem value="unemployed">Unemployed</SelectItem>
              <SelectItem value="retired">Retired</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
          {errors.employmentStatus && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.employmentStatus}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="annualIncome">Annual Income *</Label>
          <Select value={formData.annualIncome} onValueChange={(value) => handleInputChange("annualIncome", value)}>
            <SelectTrigger className={errors.annualIncome ? "border-red-500" : ""}>
              <SelectValue placeholder="Select income range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under_25k">Under $25,000</SelectItem>
              <SelectItem value="25k_50k">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k_75k">$50,000 - $75,000</SelectItem>
              <SelectItem value="75k_100k">$75,000 - $100,000</SelectItem>
              <SelectItem value="100k_150k">$100,000 - $150,000</SelectItem>
              <SelectItem value="over_150k">Over $150,000</SelectItem>
            </SelectContent>
          </Select>
          {errors.annualIncome && (
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.annualIncome}
            </p>
          )}
        </div>
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

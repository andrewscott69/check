"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CheckCircle2, Loader2, AlertCircle, Edit } from "lucide-react"
//import type { SignupData } from "@/app/u/signup/page"
import type { SignupStepProps } from "@/types/SignupStepProps"
import { toast } from "sonner"



export default function ReviewStep({ data, onSubmit, onPrev, isLoading }: SignupStepProps) {
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async () => {
    if (!agreeToTerms) {
      setErrors({ terms: "You must agree to the terms and conditions" })
      return
    }

    if (onSubmit) {
      try {
        await onSubmit({ agreeToTerms })
        toast.success("Account created successfully!", {
          description: "Please check your email for verification instructions.",
        })
      } catch (error) {
        toast.error("Registration failed", {
          description: error instanceof Error ? error.message : "Something went wrong",
        })
      }
    }
  }

  const formatIncome = (income: string) => {
    const incomeMap: Record<string, string> = {
      under_25k: "Under $25,000",
      "25k_50k": "$25,000 - $50,000",
      "50k_75k": "$50,000 - $75,000",
      "75k_100k": "$75,000 - $100,000",
      "100k_150k": "$100,000 - $150,000",
      over_150k: "Over $150,000",
    }
    return incomeMap[income] || income
  }

  const formatEmploymentStatus = (status: string) => {
    const statusMap: Record<string, string> = {
      full_time: "Full-time",
      part_time: "Part-time",
      self_employed: "Self-employed",
      unemployed: "Unemployed",
      retired: "Retired",
      student: "Student",
    }
    return statusMap[status] || status
  }

  // const formatCitizenship = (citizenship: string) => {
  //   const citizenshipMap: Record<string, string> = {
  //     us_citizen: "U.S. Citizen",
  //     permanent_resident: "Permanent Resident",
  //     work_visa: "Work Visa Holder",
  //     student_visa: "Student Visa Holder",
  //     other: "Other",
  //   }
  //   return citizenshipMap[citizenship] || citizenship
  // }

  // const formatDocumentType = (docType: string) => {
  //   const docMap: Record<string, string> = {
  //     drivers_license: "Driver's License",
  //     state_id: "State ID Card",
  //     passport: "U.S. Passport",
  //     passport_card: "U.S. Passport Card",
  //   }
  //   return docMap[docType] || docType
  // }

  const InfoSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          {title}
          <Edit className="w-4 h-4 text-gray-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">{children}</CardContent>
    </Card>
  )

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between items-center py-1">
      <span className="text-sm text-gray-600">{label}:</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Information</h2>
        <p className="text-gray-600">Please review all information before submitting your application</p>
      </div>

      <div className="grid gap-4">
        <InfoSection title="Personal Information">
          <InfoRow label="Full Name" value={`${data.firstName} ${data.lastName}`} />
          <InfoRow label="Email" value={data.email || ""} />
          <InfoRow label="Phone" value={data.phoneNumber || ""} />
          <InfoRow label="Date of Birth" value={data.dateOfBirth || ""} />
          <InfoRow label="Occupation" value={data.occupation || ""} />
          <InfoRow label="Employment Status" value={formatEmploymentStatus(data.employmentStatus || "")} />
          <InfoRow label="Annual Income" value={formatIncome(data.annualIncome || "")} />
        </InfoSection>

        <InfoSection title="Account Information">
          <InfoRow label="Account Type" value={data.accountType || ""} />
          
        </InfoSection>

        <InfoSection title="Address">
          <InfoRow label="Street Address" value={data.streetAddress || ""} />
          <InfoRow label="City" value={data.city || ""} />
          <InfoRow label="State" value={data.state || ""} />
          <InfoRow label="ZIP Code" value={data.zipCode || ""} />
          <InfoRow label="Country" value={data.country || ""} />
        </InfoSection>

      
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium text-blue-900">Ready to Submit</p>
              <p className="text-sm text-blue-700">
                Your application is complete. After submission, you'll receive an email verification code to activate
                your account.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={agreeToTerms}
            onCheckedChange={(checked) => {
              setAgreeToTerms(checked === true)
              if (errors.terms) {
                setErrors((prev) => ({ ...prev, terms: "" }))
              }
            }}
            className={errors.terms ? "border-red-500" : ""}
          />
          <Label htmlFor="terms" className="text-sm leading-relaxed">
            I agree to the{" "}
            <a href="/terms" target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">
              Terms of Service
            </a>
            ,{" "}
            <a href="/privacy" target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">
              Privacy Policy
            </a>
            , and{" "}
            <a href="/account-agreement" target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">
              Account Agreement
            </a>
            . I understand that SecureBank will verify my identity and may contact me for additional information if
            needed.
          </Label>
        </div>
        {errors.terms && (
          <p className="text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.terms}
          </p>
        )}
      </div>

      <div className="flex justify-between pt-6">
        {onPrev && (
          <Button variant="outline" onClick={onPrev} disabled={isLoading}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
        )}
        <Button onClick={handleSubmit} disabled={!agreeToTerms || isLoading} className="ml-auto px-8" size="lg">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </div>
    </div>
  )
}

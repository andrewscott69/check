"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  UserPlus,
  IdCard,
  MapPin,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react"

import HomeStep from "@/components/signup/home-step"
import AccountTypeStep from "@/components/signup/account-type-step"
import AddressStep from "@/components/signup/address-step"
import PersonalInfoStep from "@/components/signup/personal-info-step"
import ReviewStep from "@/components/signup/review-step"


import { toast } from "sonner" 

export interface SignupData {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  phoneNumber?: string
  dateOfBirth?: string
  accountType?: string
  streetAddress?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
  occupation?: string
  employmentStatus?: string
  annualIncome?: string
  agreeToTerms?: boolean
}

const steps = [
  { id: "home", name: "HOME", icon: Home, component: HomeStep },
  { id: "account-type", name: "ACCOUNT TYPE", icon: UserPlus, component: AccountTypeStep },
  { id: "personal", name: "PERSONAL INFO", icon: IdCard, component: PersonalInfoStep },
  { id: "address", name: "ADDRESS & CONTACT", icon: MapPin, component: AddressStep },
  { id: "review", name: "REVIEW & SUBMIT", icon: ClipboardCheck, component: ReviewStep },
]

export default function SignupProcess() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [signupData, setSignupData] = useState<SignupData>({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const savedData = localStorage.getItem("signup-progress")
    const savedStep = localStorage.getItem("signup-current-step")
    if (savedData) setSignupData(JSON.parse(savedData))
    if (savedStep) setCurrentStep(Number.parseInt(savedStep))
  }, [])

  const saveProgress = useCallback(
    (data: SignupData, step?: number) => {
      const updatedData = { ...signupData, ...data }
      setSignupData(updatedData)

      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }
      saveTimeoutRef.current = setTimeout(() => {
        localStorage.setItem("signup-progress", JSON.stringify(updatedData))
        if (step !== undefined) {
          localStorage.setItem("signup-current-step", step.toString())
        }
      }, 300)
    },
    [signupData]
  )

  const nextStep = (data: SignupData) => {
    const next = currentStep + 1
    saveProgress(data, next)
    setCurrentStep(next)
  }

  const prevStep = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1
      setCurrentStep(prev)
      localStorage.setItem("signup-current-step", prev.toString())
    }
  }

  const goToStep = (stepIndex: number) => {
    if (stepIndex <= currentStep + 1) {
      setCurrentStep(stepIndex)
      localStorage.setItem("signup-current-step", stepIndex.toString())
    }
  }

  const submitSignup = async (finalData: SignupData) => {
    setIsLoading(true)
    setError(null)
    try {
      const completeData = { ...signupData, ...finalData }
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(completeData),
      })

      const result = await response.json()
      console.log("Register response:", result);
      if (!response.ok) throw new Error(result.error || "Failed to register")

      localStorage.removeItem("signup-progress")
      localStorage.removeItem("signup-current-step")
      sessionStorage.setItem("verificationEmail", completeData.email!)

      toast.success("Account created successfully! Please verify your email.") 

      router.push("/u/verify-otp")
    } catch (err: any) {
      console.error("Signup error:", err)
      const message = err.message || "Registration error"
      setError(message) 
      toast.error(message) 
    } finally {
      setIsLoading(false)
    }
  }

  const CurrentStepComponent = steps[currentStep].component
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Instant Account Opening</h1>
          <div className="flex justify-end">
            <div className="text-2xl font-bold text-blue-600">Silver Crest Bank</div>
          </div>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2 mb-4" />

          <div
            className="flex justify-between items-center overflow-x-auto gap-2"
            role="tablist"
            aria-label="Signup steps"
          >
            {steps.map((step, index) => {
              const isCompleted = index < currentStep
              const isCurrent = index === currentStep
              const isDisabled = index > currentStep + 1
              const Icon = step.icon

              return (
                <button
                  key={step.id}
                  onClick={() => goToStep(index)}
                  disabled={isDisabled}
                  role="tab"
                  aria-selected={isCurrent}
                  aria-disabled={isDisabled}
                  tabIndex={isCurrent ? 0 : -1}
                  className={`flex flex-col items-center p-2 rounded-lg transition-colors min-w-[3rem]
                    ${isCurrent
                      ? "text-blue-600 bg-blue-50"
                      : isCompleted
                      ? "text-green-600 hover:bg-green-50"
                      : "text-gray-400 cursor-not-allowed"}`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Icon className={`w-6 h-6 ${isCurrent ? "stroke-[2.5]" : ""}`} />
                  )}
                  <span className="hidden md:inline text-xs font-medium text-center">
                    {step.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            {error && (
              <div
                role="alert"
                className="mb-4 text-red-600 font-medium text-center"
              >
                {error}
              </div>
            )}
            <CurrentStepComponent
              data={signupData}
              onNext={nextStep}
              onPrev={currentStep > 0 ? prevStep : undefined}
              onSubmit={currentStep === steps.length - 1 ? submitSignup : undefined}
              isLoading={isLoading}
              notify={toast} 
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

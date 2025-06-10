"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle2, DollarSign, Loader2, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export default function VerifyOtpPage() {
  const router = useRouter()
  const [otp, setOtp] = useState(Array(6).fill(""))
  const [isLoading, setIsLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const [email, setEmail] = useState("")
  const [isVerified, setIsVerified] = useState(false)


  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("verificationEmail")
    if (!storedEmail) router.push("/u/signup")
    else setEmail(storedEmail)
  }, [router])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000)
      return () => clearTimeout(timer)
    }
    setCanResend(true)
  }, [timeLeft])

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

 
    if (value && index < 5) inputRefs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()
    if (/^\d{6}$/.test(pastedData)) {
      setOtp(pastedData.split(""))
      inputRefs.current[5]?.focus()
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpValue = otp.join("")
    if (otpValue.length !== 6) return toast.error("Please enter all 6 digits")
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otpValue }),
      })

      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Verification failed")
      setIsVerified(true)
      sessionStorage.removeItem("verificationEmail")
      setTimeout(() => router.push("/u/login"), 2000)
    } catch (error: any) {
      toast.error(error.message || "Something went wrong", { description: "Verification failed" })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendOtp = async () => {
    if (!canResend) return
    setCanResend(false)
    setTimeLeft(60)
    try {
      const response = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Failed to resend code")
      toast.success("Code resent", { description: "A new verification code has been sent to your email" })
    } catch (error: any) {
      toast.error("Failed to resend code", { description: error.message || "Something went wrong" })
      setCanResend(true)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white p-4 md:p-8">
      <Link href="/" className="mb-8 flex items-center gap-2 text-2xl font-bold text-slate-900">
        <DollarSign className="h-8 w-8 text-primary" />
        <span>BankApp</span>
      </Link>

      <Card className="mx-auto w-full max-w-md overflow-hidden border-none shadow-xl">
        {isVerified ? (
          <div className="flex flex-col items-center justify-center p-10 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Email Verified!</h2>
            <p className="mb-6 text-slate-500">
              Your account has been successfully verified. Redirecting you to login...
            </p>
            <Button asChild size="lg" className="w-full">
              <Link href="/u/login">Go to Login</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent"></div>
            <CardHeader className="space-y-4 pb-6 pt-8">
              <div className="flex items-center">
                <Button variant="ghost" size="icon" asChild className="mr-2 rounded-full">
                  <Link href="/u/signup">
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
                <CardTitle className="text-2xl font-bold text-slate-900">Verify your email</CardTitle>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Verification code sent to:</p>
                  <p className="text-sm text-slate-500">{email}</p>
                </div>
              </div>
              <CardDescription className="text-base">
                Enter the 6-digit code we sent to your email to verify your account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleVerify} className="space-y-6">
                <div className="flex justify-center gap-2 sm:gap-3">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : undefined}
                      className={cn(
                        "h-14 w-12 text-center text-lg font-semibold transition-all sm:h-16 sm:w-14",
                        digit ? "border-primary bg-primary/5" : "border-slate-200",
                      )}
                      autoFocus={index === 0}
                    />
                  ))}
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-base font-medium"
                  size="lg"
                  disabled={isLoading || otp.join("").length !== 6}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify Email"
                  )}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col items-center border-t bg-slate-50 p-6">
              <div className="mb-2 text-sm text-slate-500">Didn't receive the code?</div>
              <Button
                variant="ghost"
                type="button"
                onClick={handleResendOtp}
                disabled={!canResend}
                className={cn(
                  "h-auto text-sm font-medium",
                  canResend ? "text-primary hover:text-primary/90" : "text-slate-400",
                )}
              >
                {canResend ? (
                  "Resend Code"
                ) : (
                  <>
                    Resend code in <span className="font-semibold">{formatTime(timeLeft)}</span>
                  </>
                )}
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}

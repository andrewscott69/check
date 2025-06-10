"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import Image from "next/image"
import { Apple, ArrowRight, DollarSign, Eye, EyeOff, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

// Zod validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Login failed.")
      }

      toast.success("Login successful!")

      if (result.redirect) {
        router.push(result.redirect)
      } else {
        throw new Error("Invalid redirect URL.")
      }
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen grid lg:grid-cols-2 overflow-hidden">
      {/* Left Column - Form */}
      <div className="flex flex-col justify-center px-8 py-8 lg:px-16 overflow-hidden">
        <div className="mx-auto w-full max-w-md space-y-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <DollarSign className="h-8 w-8 text-primary" />
            <span>BankApp</span>
          </Link>

          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                  className={errors.password ? "border-red-500" : ""}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" checked={rememberMe} onCheckedChange={(checked) => setRememberMe(!!checked)} />
              <Label htmlFor="remember" className="text-sm font-medium">
                Remember me
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            
          </div>

         

          {/* Sign up link */}
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:block relative bg-blue-600 opacity-70">
        <Image
          src="/login-bg.jpg?height=1080&width=1920"
          alt="Banking application dashboard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <blockquote className="text-white">
            <p className="text-lg font-medium">
              "Silver Crest has revolutionized how I manage my finances. The interface is intuitive and the security features
              give me peace of mind."
            </p>
            <footer className="mt-4">
              <div className="font-medium">Ismael Rasaqi</div>
              <div className="text-sm text-white/80">Financial Advisor</div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

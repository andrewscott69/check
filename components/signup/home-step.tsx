"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Clock, Users } from "lucide-react"
import Image from "next/image"
// import type { SignupData } from "@/app/u/signup/page"
import type { SignupStepProps } from "@/types/SignupStepProps"



export default function HomeStep({ onNext, notify }: SignupStepProps) {
  const handleGetStarted = () => {
    notify?.success("Welcome!")
    onNext({})
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to SecureBank</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Open your new account in minutes with our streamlined digital process. Experience banking that puts your
          financial goals first.
        </p>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Bank-Level Security</h3>
                <p className="text-gray-600 text-sm">
                  Your data is protected with 256-bit encryption and multi-factor authentication
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Quick Setup</h3>
                <p className="text-gray-600 text-sm">
                  Complete your application in under 10 minutes with our guided process
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Trusted by Millions</h3>
                <p className="text-gray-600 text-sm">
                  Join over 5 million customers who trust SecureBank with their finances
                </p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Account Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• No monthly maintenance fees</li>
                <li>• Free online and mobile banking</li>
                <li>• 24/7 customer support</li>
                <li>• Competitive interest rates</li>
                <li>• Nationwide ATM access</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Image First on Mobile */}
        <div className="flex justify-center">
          <Image
            src="/signup-bg.jpg?height=400&width=400"
            alt="Secure banking illustration"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="text-center">
        <Button onClick={handleGetStarted} size="lg" className="px-8 py-4 text-lg">
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-xs text-gray-500 mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

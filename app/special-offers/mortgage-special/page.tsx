import Image from "next/image"
import { ChevronRight, Check, Clock, Calendar, Home, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function MortgageSpecialPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-yellow-600 to-yellow-400">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Mortgage Special Offer"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              LIMITED TIME OFFER
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage Rate Special</h1>
            <p className="text-xl mb-8">
              Get 0.25% off our already competitive mortgage rates when you set up automatic payments from your Horizon
              Banking checking account.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 font-medium">
                Apply Now <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="text-xl font-bold text-yellow-800">Limited Time Offer</h3>
                <p className="text-yellow-700">This special rate discount ends June 30, 2025</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-lg flex items-center justify-center font-bold text-2xl">
                  27
                </div>
                <div className="text-sm mt-1 text-yellow-800">Days</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-lg flex items-center justify-center font-bold text-2xl">
                  14
                </div>
                <div className="text-sm mt-1 text-yellow-800">Hours</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-lg flex items-center justify-center font-bold text-2xl">
                  36
                </div>
                <div className="text-sm mt-1 text-yellow-800">Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Special Offer Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">What You Get</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-lg">0.25% Rate Discount</span>
                      <p className="text-gray-600">
                        Get a quarter percent off our standard mortgage rates when you set up automatic payments.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-lg">$500 Closing Cost Credit</span>
                      <p className="text-gray-600">
                        Receive a $500 credit toward your closing costs when you apply during this promotional period.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-lg">Priority Processing</span>
                      <p className="text-gray-600">
                        Your application will be fast-tracked through our approval process to help you close faster.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-lg">Free Rate Lock</span>
                      <p className="text-gray-600">
                        Lock in your rate for up to 60 days at no additional cost (normally $375).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Eligibility Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Calendar className="h-6 w-6 text-yellow-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-lg">Apply by June 30, 2025</span>
                      <p className="text-gray-600">
                        Your completed application must be received by the end of the promotional period.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Home className="h-6 w-6 text-yellow-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-lg">Eligible Loan Types</span>
                      <p className="text-gray-600">
                        Applies to new purchase loans and refinances for primary residences only.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-yellow-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-lg">Credit Requirements</span>
                      <p className="text-gray-600">
                        Minimum credit score of 680 required to qualify for the special rate discount.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-yellow-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-lg">Automatic Payments</span>
                      <p className="text-gray-600">
                        Must set up automatic payments from a Horizon Banking checking account.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold mb-4">Example Savings</h3>
              <p className="mb-4">
                On a $300,000 30-year fixed-rate mortgage at 6.75% vs. 7.00%, you could save:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">$44</div>
                  <div className="text-sm text-gray-600">Monthly Savings</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">$528</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">$15,840</div>
                  <div className="text-sm text-gray-600">Lifetime Savings</div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                *Example is for illustrative purposes only. Your actual savings may vary based on loan amount, term, and
                interest rate.
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                Apply Now <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Express Interest Form</h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Fill out this form to express interest in our special mortgage offer, and a mortgage specialist will
              contact you within 24 hours.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
                <CardDescription>
                  Please provide your contact details and mortgage needs so we can help you get started.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Label>What type of mortgage are you interested in?</Label>
                    <RadioGroup defaultValue="purchase">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="purchase" id="purchase" />
                          <Label htmlFor="purchase">New Purchase</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="refinance" id="refinance" />
                          <Label htmlFor="refinance">Refinance</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Label>Are you an existing Horizon Banking customer?</Label>
                    <RadioGroup defaultValue="yes">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="customer-yes" />
                          <Label htmlFor="customer-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="customer-no" />
                          <Label htmlFor="customer-no">No</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="comments">Additional Comments</Label>
                    <Textarea
                      id="comments"
                      placeholder="Please share any additional information about your mortgage needs"
                      rows={4}
                    />
                  </div>
                </form>
              </CardContent>
              \

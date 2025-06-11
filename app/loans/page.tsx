import Image from "next/image"
import { ChevronRight, Check, Car, Home, CreditCard, Briefcase, Calculator, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoansPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Personal Loans"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Loans</h1>
            <p className="text-lg mb-8">
              Whether you're consolidating debt, making home improvements, or covering unexpected expenses, we have the
              loan solution for you.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Apply for a Loan <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Find the Right Loan for You</h2>

          <Tabs defaultValue="auto" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto mb-8">
              <TabsTrigger value="auto" className="py-3 text-base">
                Auto Loans
              </TabsTrigger>
              <TabsTrigger value="personal" className="py-3 text-base">
                Personal Loans
              </TabsTrigger>
              <TabsTrigger value="home" className="py-3 text-base">
                Home Equity
              </TabsTrigger>
              <TabsTrigger value="credit" className="py-3 text-base">
                Credit Cards
              </TabsTrigger>
            </TabsList>

            <TabsContent value="auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Car className="h-8 w-8 text-green-600" />
                      <CardTitle className="text-2xl">Auto Loans</CardTitle>
                    </div>
                    <CardDescription>Finance your new or used vehicle</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600">5.49%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>New and used vehicle financing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Terms up to 84 months</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>100% financing available</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Quick pre-approval process</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No prepayment penalties</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
                  </CardFooter>
                </Card>

                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Special Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Skip-a-payment option (after 12 on-time payments)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Gap insurance available</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Extended warranty options</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Refinancing available</span>
                      </li>
                    </ul>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Motorcycle & RV Loans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-3">
                        Finance your recreational vehicles with competitive rates and flexible terms.
                      </p>
                      <div className="text-2xl font-bold text-green-600">6.25%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="personal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="h-8 w-8 text-green-600" />
                      <CardTitle className="text-2xl">Personal Loans</CardTitle>
                    </div>
                    <CardDescription>Flexible financing for life's opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600">7.99%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Borrow up to $50,000</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Terms from 12 to 84 months</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Fixed interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No collateral required</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Quick approval and funding</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
                  </CardFooter>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Common Uses</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                          <span>Debt consolidation</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                          <span>Home improvements</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                          <span>Medical expenses</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                          <span>Wedding expenses</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                          <span>Education costs</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                          <span>Vacation financing</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Debt Consolidation Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                        <span>Simplify multiple payments into one</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                        <span>Potentially lower interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                        <span>Fixed payment schedule</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="home">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Home className="h-8 w-8 text-green-600" />
                      <CardTitle className="text-2xl">Home Equity Loans</CardTitle>
                    </div>
                    <CardDescription>Tap into your home's equity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600">6.75%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Borrow up to 90% of home value</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Fixed interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Terms up to 20 years</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Tax advantages may apply*</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No prepayment penalties</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <CreditCard className="h-8 w-8 text-green-600" />
                      <CardTitle className="text-2xl">Home Equity Line of Credit</CardTitle>
                    </div>
                    <CardDescription>Flexible access to your equity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600">Prime + 0.25%</div>
                      <div className="text-sm text-gray-500">Variable rate*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Access funds as needed</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Interest-only payments initially</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>10-year draw period</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Online access and checks</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Rate protection options</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="credit">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Rewards Credit Card</CardTitle>
                    <CardDescription>Earn on every purchase</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600">1.5%</div>
                      <div className="text-sm text-gray-500">Cash back on all purchases</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No annual fee</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>0% intro APR for 12 months</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No foreign transaction fees</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Low Rate Credit Card</CardTitle>
                    <CardDescription>Great for everyday use</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600">9.99%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No annual fee</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Low ongoing rate</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Free online banking</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Secured Credit Card</CardTitle>
                    <CardDescription>Build or rebuild credit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600">$200</div>
                      <div className="text-sm text-gray-500">Minimum deposit</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Reports to credit bureaus</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Graduate to unsecured</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Low annual fee</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Loan Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple Application Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Apply Online</h3>
              <p className="text-gray-600">Complete our secure online application in just a few minutes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Get Pre-Approved</h3>
              <p className="text-gray-600">
                Receive a preliminary decision within minutes of submitting your application.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Submit Documents</h3>
              <p className="text-gray-600">Upload required documents securely through our online portal.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Get Funded</h3>
              <p className="text-gray-600">Once approved, funds are typically available within 1-2 business days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Loan Tools & Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Calculator className="h-8 w-8 text-green-600" />
                  <CardTitle>Loan Calculator</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Calculate your monthly payments and see how different loan amounts and terms affect your budget.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Use Calculator
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-8 w-8 text-green-600" />
                  <CardTitle>Pre-Qualification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get pre-qualified to see what loan amounts and rates you may qualify for without affecting your
                  credit.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Get Pre-Qualified
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="h-8 w-8 text-green-600" />
                  <CardTitle>Credit Score</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Check your credit score for free and get tips on how to improve it for better loan terms.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Check Score
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply for Your Loan?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get started with our quick and easy online application process. Most applications are processed within 24
            hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Apply Now <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-green-900 hover:bg-gray-100 font-medium">
              Calculate Payments <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

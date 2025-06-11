import Image from "next/image"
import { ChevronRight, Check, Home, Calculator, Clock, Shield, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MortgagesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Home Mortgages"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Mortgages</h1>
            <p className="text-lg mb-8">
              Make your homeownership dreams a reality with competitive rates, flexible terms, and personalized service
              from our mortgage experts.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Get Pre-Approved <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mortgage Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Mortgage Type</h2>

          <Tabs defaultValue="conventional" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto mb-8">
              <TabsTrigger value="conventional" className="py-3 text-base">
                Conventional
              </TabsTrigger>
              <TabsTrigger value="fha" className="py-3 text-base">
                FHA Loans
              </TabsTrigger>
              <TabsTrigger value="va" className="py-3 text-base">
                VA Loans
              </TabsTrigger>
              <TabsTrigger value="jumbo" className="py-3 text-base">
                Jumbo Loans
              </TabsTrigger>
            </TabsList>

            <TabsContent value="conventional">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 border-green-400">
                  <CardHeader>
                    <CardTitle className="text-2xl">30-Year Fixed Rate</CardTitle>
                    <CardDescription>Stable payments for the life of your loan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600">6.75%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Fixed rate and payment for 30 years</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Down payment as low as 3%</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No prepayment penalties</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Loan amounts up to $766,550</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">15-Year Fixed Rate</CardTitle>
                    <CardDescription>Build equity faster with lower rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600">6.25%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Lower interest rate than 30-year</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Pay off your home in half the time</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Save thousands in interest</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Build equity faster</span>
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
                    <CardTitle className="text-2xl">Adjustable Rate Mortgage (ARM)</CardTitle>
                    <CardDescription>Lower initial rates with potential savings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600">5.95%</div>
                      <div className="text-sm text-gray-500">Initial APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Lower initial rate for first 5-7 years</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Rate caps protect against large increases</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Ideal for short-term homeowners</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Lower initial monthly payments</span>
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
                    <CardTitle className="text-2xl">Refinancing</CardTitle>
                    <CardDescription>Lower your rate or access your equity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600">6.50%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Lower your monthly payment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Cash-out refinancing available</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Switch from ARM to fixed rate</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Streamlined application process</span>
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

            <TabsContent value="fha">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 border-blue-400">
                  <CardHeader>
                    <CardTitle className="text-2xl">FHA Purchase Loans</CardTitle>
                    <CardDescription>Government-backed loans for first-time buyers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600">6.85%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Down payment as low as 3.5%</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Lower credit score requirements</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Gift funds allowed for down payment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Assumable loans</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">FHA Streamline Refinance</CardTitle>
                    <CardDescription>Quick refinancing for existing FHA borrowers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600">6.60%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No income verification required</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No appraisal in most cases</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Faster processing time</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Lower closing costs</span>
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

            <TabsContent value="va">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 border-red-400">
                  <CardHeader>
                    <CardTitle className="text-2xl">VA Purchase Loans</CardTitle>
                    <CardDescription>Exclusive benefits for military veterans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600">6.50%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No down payment required</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No private mortgage insurance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Competitive interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Reusable benefit</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Apply Now</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">VA Cash-Out Refinance</CardTitle>
                    <CardDescription>Access your home's equity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600">6.25%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Cash out up to 100% of home value</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>No mortgage insurance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Use funds for any purpose</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Lower rates than personal loans</span>
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

            <TabsContent value="jumbo">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 border-purple-400">
                  <CardHeader>
                    <CardTitle className="text-2xl">Jumbo Mortgages</CardTitle>
                    <CardDescription>For luxury homes above conforming limits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600">7.15%</div>
                      <div className="text-sm text-gray-500">APR as low as*</div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Loan amounts above $766,550</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Competitive rates for high-value homes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Fixed and adjustable rate options</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                        <span>Personalized service</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply Now</Button>
                  </CardFooter>
                </Card>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Jumbo Loan Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-purple-600 mr-2 shrink-0 mt-0.5" />
                      <span>Finance luxury properties and high-value homes</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-purple-600 mr-2 shrink-0 mt-0.5" />
                      <span>Dedicated jumbo loan specialists</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-purple-600 mr-2 shrink-0 mt-0.5" />
                      <span>Flexible underwriting guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-purple-600 mr-2 shrink-0 mt-0.5" />
                      <span>Portfolio lending options</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-purple-600 mr-2 shrink-0 mt-0.5" />
                      <span>Interest-only payment options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Mortgage Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Your Path to Homeownership</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Get Pre-Approved</h3>
              <p className="text-gray-600">
                Complete our online application and receive a pre-approval letter within 24 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Shop for Homes</h3>
              <p className="text-gray-600">
                Work with your real estate agent to find the perfect home within your budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Submit Full Application</h3>
              <p className="text-gray-600">
                Once you find your home, submit your complete loan application with required documents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Close on Your Home</h3>
              <p className="text-gray-600">
                Complete the final paperwork and receive the keys to your new home at closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Mortgage Tools & Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Calculator className="h-8 w-8 text-green-600" />
                  <CardTitle>Mortgage Calculator</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Calculate your monthly payments, see how much you can afford, and compare different loan scenarios.
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
                  <CardTitle>Pre-Approval</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get pre-approved to strengthen your offer and show sellers you're a serious buyer.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Get Pre-Approved
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Home className="h-8 w-8 text-green-600" />
                  <CardTitle>First-Time Buyer Guide</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Download our comprehensive guide with tips, checklists, and resources for first-time homebuyers.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download Guide
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Horizon Banking for Your Mortgage?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">We offer some of the most competitive mortgage rates in the market.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Our experienced loan officers guide you through every step of the process.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick turnaround times to help you close on your dream home faster.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of local markets and community-focused service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Home Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward homeownership with a mortgage pre-approval from Horizon Banking.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Get Pre-Approved <ChevronRight className="ml-1 h-4 w-4" />
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

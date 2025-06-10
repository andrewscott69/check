import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BusinessBankingPage() {
  return (
    <>
    <SiteHeader />
        <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Business Banking"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Banking Solutions</h1>
            <p className="text-lg mb-8">
              Comprehensive financial services to help your business grow, from startups to established enterprises.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Open a Business Account <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Business Solutions Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Business Solutions</h2>

          <Tabs defaultValue="accounts" className="w-full">
            <TabsList className="w-full grid grid-cols-1 md:grid-cols-4 h-auto mb-8">
              <TabsTrigger value="accounts" className="py-3 text-base">
                Business Accounts
              </TabsTrigger>
              <TabsTrigger value="lending" className="py-3 text-base">
                Business Lending
              </TabsTrigger>
              <TabsTrigger value="treasury" className="py-3 text-base">
                Treasury Management
              </TabsTrigger>
              <TabsTrigger value="merchant" className="py-3 text-base">
                Merchant Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="accounts">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Checking</CardTitle>
                    <CardDescription>For small to medium businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>500 free transactions per month</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>$10,000 cash processing per month</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Online and mobile banking included</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>$100 minimum opening deposit</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Premium Checking</CardTitle>
                    <CardDescription>For growing businesses with higher transaction volumes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>1,000 free transactions per month</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>$25,000 cash processing per month</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Two incoming wire transfers per month</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>$500 minimum opening deposit</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Savings</CardTitle>
                    <CardDescription>Earn interest on your business funds</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Competitive interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>$300 minimum opening deposit</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Online and mobile banking access</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>FDIC insured up to $250,000</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="lending">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Term Loans</CardTitle>
                    <CardDescription>Finance major purchases or expansion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Get the funding you need for equipment, real estate, or business expansion with competitive rates
                      and flexible terms.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Loan amounts from $25,000 to $5,000,000</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Terms up to 10 years</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Competitive fixed and variable rates</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Lines of Credit</CardTitle>
                    <CardDescription>Flexible access to working capital</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Access funds when you need them for inventory, seasonal cash flow needs, or unexpected expenses.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Credit lines from $10,000 to $500,000</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Pay interest only on what you use</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Revolving credit with flexible repayment options</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>SBA Loans</CardTitle>
                    <CardDescription>Government-backed financing solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Access SBA loan programs with lower down payments and longer repayment terms than conventional
                      loans.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>SBA 7(a), 504, and Express loans</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Loan amounts up to $5,000,000</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Terms up to 25 years</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Commercial Real Estate</CardTitle>
                    <CardDescription>Finance your business property</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Purchase, refinance, or construct commercial properties with our specialized real estate
                      financing.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Owner-occupied and investment properties</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Competitive rates and terms</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Local decision-making and processing</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="treasury">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Cash Management</CardTitle>
                    <CardDescription>Optimize your cash flow</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Streamline your cash flow with tools designed to help you collect payments faster and manage
                      disbursements efficiently.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Remote deposit capture</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>ACH processing</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Wire transfers</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Fraud Prevention</CardTitle>
                    <CardDescription>Protect your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Safeguard your accounts with advanced fraud prevention tools and services.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Positive pay</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>ACH blocks and filters</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Account reconciliation</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Online Banking</CardTitle>
                    <CardDescription>Manage accounts efficiently</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Access your accounts and perform transactions securely online, anytime and anywhere.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Account management</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Bill payment</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Mobile banking app</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="merchant">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Processing</CardTitle>
                    <CardDescription>Accept payments anywhere</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Process credit and debit card payments in-store, online, or on the go with our secure payment
                      solutions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>In-store terminals</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Mobile payment solutions</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Online payment gateways</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Contactless payment options</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get Started</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Point of Sale Systems</CardTitle>
                    <CardDescription>Complete business management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Integrate payments with inventory, reporting, and customer management in one comprehensive system.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Hardware and software solutions</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Inventory management</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Employee management</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <span>Customer loyalty programs</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get Started</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Business Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Business Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Business Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Access articles, guides, and tools to help you make informed business decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="#" className="text-green-600 hover:underline">
                      Cash Flow Management Tips
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="#" className="text-green-600 hover:underline">
                      Small Business Growth Strategies
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="#" className="text-green-600 hover:underline">
                      Tax Planning for Businesses
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Calculators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Use our calculators to estimate loan payments, assess investment returns, and plan your budget.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="#" className="text-green-600 hover:underline">
                      Loan Calculator
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="#" className="text-green-600 hover:underline">
                      Investment Calculator
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="#" className="text-green-600 hover:underline">
                      Budget Planner
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Download our comprehensive guides to learn about starting, managing, and growing your business.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="#" className="text-green-600 hover:underline">
                      Starting a Business Checklist
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="#" className="text-green-600 hover:underline">
                      Business Plan Template
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="#" className="text-green-600 hover:underline">
                      Financial Management Guide
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
    </>
  )
}

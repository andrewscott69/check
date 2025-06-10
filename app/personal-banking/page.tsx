import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"


export default function PersonalBankingPage() {
  return (
    <>
    <SiteHeader />
        <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Personal Banking"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Banking Solutions</h1>
            <p className="text-lg mb-8">
              Banking that fits your lifestyle with accounts, loans, and services designed to help you reach your
              financial goals.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Open an Account <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Accounts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Banking Accounts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Ultimate Growth Checking</CardTitle>
                <CardDescription>Our premium checking account with rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Earn up to $400 bonus when you open a new account</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>No monthly maintenance fees</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Free online and mobile banking</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Unlimited ATM fee rebates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>High-Yield Savings</CardTitle>
                <CardDescription>Competitive rates to grow your savings</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>3.60% APY on all balances</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>No minimum balance requirements</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>No monthly maintenance fees</span>
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

            <Card>
              <CardHeader>
                <CardTitle>Certificate Accounts</CardTitle>
                <CardDescription>Lock in great rates for guaranteed returns</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Rates up to 4.35% APY</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Terms from 3 months to 5 years</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>$1,000 minimum opening deposit</span>
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
        </div>
      </section>

      {/* Loans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Personal Loans</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Auto Loans</CardTitle>
                <CardDescription>Rates as low as 5.49% APR</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Finance your new or used vehicle with competitive rates and flexible terms.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Home Loans</CardTitle>
                <CardDescription>Find your perfect mortgage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From first-time homebuyers to refinancing, we have mortgage solutions for you.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Loans</CardTitle>
                <CardDescription>Borrow up to $50,000</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get the funds you need for debt consolidation, home improvements, or unexpected expenses.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Credit Cards</CardTitle>
                <CardDescription>Rewards for every purchase</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose from cards with cash back, travel rewards, or low introductory rates.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Banking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Digital Banking at Your Fingertips</h2>
              <p className="text-lg text-gray-600 mb-6">
                Bank anytime, anywhere with our secure online and mobile banking platforms. Manage your accounts,
                deposit checks, pay bills, and more.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>24/7 account access from your computer or mobile device</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Mobile check deposit</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Bill pay and person-to-person payments</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Account alerts and notifications</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-600 hover:bg-green-800">Enroll Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Digital Banking"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
    </>
  )
}

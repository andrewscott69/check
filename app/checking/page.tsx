import Image from "next/image"
import { ChevronRight, Check, DollarSign, CreditCard, Smartphone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Checking Accounts"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Checking Accounts</h1>
            <p className="text-lg mb-8">
              Find the perfect checking account for your lifestyle. From students to professionals, we have options that
              fit your needs.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Open Account <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Account Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Checking Account</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">Ultimate Growth Checking</CardTitle>
                <CardDescription>Our premium checking with rewards</CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">$0</div>
                <div className="text-sm text-gray-500">Monthly fee</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Earn up to $400 bonus*</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No monthly maintenance fees</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Unlimited ATM fee rebates nationwide</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Free checks and check images</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Free online and mobile banking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Mobile check deposit</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Open Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Essential Checking</CardTitle>
                <CardDescription>Simple, everyday banking</CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">$5</div>
                <div className="text-sm text-gray-500">Monthly fee</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>$0 with $500 minimum balance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Free online and mobile banking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Mobile check deposit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>First order of checks free</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Access to 55,000+ ATMs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Overdraft protection available</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Open Now
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Student Checking</CardTitle>
                <CardDescription>Perfect for students under 25</CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">$0</div>
                <div className="text-sm text-gray-500">Monthly fee</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No monthly fees for students</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No minimum balance required</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Free online and mobile banking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Free debit card</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Financial education resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Parent/guardian access option</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Open Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Checking Account Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Banking</h3>
              <p className="text-gray-600">
                Bank on the go with our award-winning mobile app. Check balances, transfer funds, and deposit checks.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Debit Card</h3>
              <p className="text-gray-600">
                Get instant access to your money with our secure debit card. Use it anywhere Visa is accepted.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fraud Protection</h3>
              <p className="text-gray-600">
                Advanced security features protect your account with real-time fraud monitoring and alerts.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Overdraft Protection</h3>
              <p className="text-gray-600">
                Avoid costly overdraft fees with our overdraft protection options, including transfers from savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Open Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How to Open Your Account</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Choose Your Account</h3>
                <p className="text-gray-600">Select the checking account that best fits your needs and lifestyle.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Apply Online or In-Branch</h3>
                <p className="text-gray-600">
                  Complete your application online in minutes or visit one of our convenient branch locations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Fund Your Account</h3>
                <p className="text-gray-600">
                  Make your initial deposit and start enjoying all the benefits of your new checking account.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-bold mb-4">What You'll Need to Open an Account</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Valid government-issued photo ID</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Social Security number</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Proof of address</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Minimum opening deposit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Contact information</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Employment information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Open Your Checking Account?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Horizon Banking for their everyday banking needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Open Account Online <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-green-900 hover:bg-gray-100 font-medium">
              Find a Branch <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

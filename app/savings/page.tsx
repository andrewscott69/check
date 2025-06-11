import Image from "next/image"
import { ChevronRight, Check, TrendingUp, Shield, Calculator, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SavingsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Savings Accounts"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Savings Accounts</h1>
            <p className="text-lg mb-8">
              Grow your money with competitive rates and flexible savings options designed to help you reach your
              financial goals.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Open Savings Account <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Savings Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Savings Account</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">HIGHEST RATE</span>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">High-Yield Savings</CardTitle>
                <CardDescription>Maximize your earnings</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">3.60%</div>
                <div className="text-sm text-gray-500">APY on all balances</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No minimum balance requirements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No monthly maintenance fees</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>FDIC insured up to $250,000</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Online and mobile banking access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Interest compounded daily</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Open Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Regular Savings</CardTitle>
                <CardDescription>Traditional savings with great benefits</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">2.25%</div>
                <div className="text-sm text-gray-500">APY with $300 minimum</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>$25 minimum opening deposit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No monthly fee with $300 balance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Free online and mobile banking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Quarterly statements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Overdraft protection for checking</span>
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
                <CardTitle className="text-2xl">Youth Savings</CardTitle>
                <CardDescription>Teaching kids to save</CardDescription>
                <div className="text-4xl font-bold text-green-600 mt-4">1.50%</div>
                <div className="text-sm text-gray-500">APY for ages 0-17</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>$5 minimum opening deposit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No monthly maintenance fees</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Financial education resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Parent/guardian oversight</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Goal-setting tools</span>
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

      {/* Certificate Accounts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Certificate Accounts</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Lock in competitive rates with our certificate accounts. Choose the term that works best for your savings
            goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>6 Month CD</CardTitle>
                <div className="text-3xl font-bold text-green-600 mt-2">3.75%</div>
                <div className="text-sm text-gray-500">APY</div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">$1,000 minimum deposit</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Open Now
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>12 Month CD</CardTitle>
                <div className="text-3xl font-bold text-green-600 mt-2">4.15%</div>
                <div className="text-sm text-gray-500">APY</div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">$1,000 minimum deposit</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Open Now
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-green-400">
              <CardHeader className="text-center">
                <CardTitle>24 Month CD</CardTitle>
                <div className="text-3xl font-bold text-green-600 mt-2">4.35%</div>
                <div className="text-sm text-gray-500">APY</div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">$1,000 minimum deposit</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Open Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>60 Month CD</CardTitle>
                <div className="text-3xl font-bold text-green-600 mt-2">4.25%</div>
                <div className="text-sm text-gray-500">APY</div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">$1,000 minimum deposit</p>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Savings Accounts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">
                Earn more with our high-yield savings accounts and competitive certificate rates.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">FDIC Insured</h3>
              <p className="text-gray-600">
                Your deposits are protected up to $250,000 by FDIC insurance for peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Savings Tools</h3>
              <p className="text-gray-600">
                Use our savings calculators and goal-setting tools to plan and track your progress.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Goal Setting</h3>
              <p className="text-gray-600">Set and track savings goals with our online and mobile banking platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Tips Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Smart Savings Tips</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Make the most of your savings with these proven strategies from our financial experts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Automate Your Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Set up automatic transfers from your checking to savings account. Even small amounts add up over time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Start with just $25 per week</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Time transfers with your payday</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Increase amounts gradually</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Build an Emergency Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Aim to save 3-6 months of expenses in a high-yield savings account for unexpected situations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Start with $500 as your first goal</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Keep it separate from other savings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Only use for true emergencies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Use Certificates for Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Lock in higher rates with certificates for specific savings goals with known timelines.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Match term to your goal timeline</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Consider laddering CDs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Reinvest at maturity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Growing Your Savings Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward your financial goals with a Horizon Banking savings account.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Open Savings Account <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-green-900 hover:bg-gray-100 font-medium">
              Calculate Savings Growth <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

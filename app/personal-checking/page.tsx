import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, DollarSign, CreditCard, Smartphone, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PersonalCheckingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Personal Checking"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Checking Accounts</h1>
            <p className="text-lg mb-8">
              Experience banking that fits your lifestyle with our range of checking accounts designed to meet your
              everyday banking needs.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium" asChild>
              <Link href="/u/signup">
                Open Account <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Account */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-400 relative overflow-hidden">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                  FEATURED ACCOUNT
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 pt-12">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ultimate Growth Checking</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our premium checking account that rewards your progress and grows with you. Earn up to $400 when you
                    open a new account.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">$0</div>
                      <div className="text-sm text-gray-600">Monthly Fee</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-3xl font-bold text-yellow-600">$400</div>
                      <div className="text-sm text-gray-600">Cash Bonus*</div>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <span>No monthly maintenance fees</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <span>Unlimited ATM fee rebates nationwide</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <span>Free checks and check images</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <span>Free online and mobile banking</span>
                    </li>
                  </ul>
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 w-full" asChild>
                    <Link href="/u/signup">
                      Open Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Ultimate Growth Checking"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Checking Accounts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">All Personal Checking Accounts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Ultimate Growth Checking</CardTitle>
                <CardDescription>Premium checking with maximum benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">$0</div>
                  <div className="text-sm text-gray-500">Monthly fee</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Earn up to $400 bonus*</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No monthly fees</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Unlimited ATM rebates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Free checks</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/u/signup">Open Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Essential Checking</CardTitle>
                <CardDescription>Simple, everyday banking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">$5</div>
                  <div className="text-sm text-gray-500">Monthly fee</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>$0 with $500 minimum balance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Free online banking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Mobile check deposit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>First order of checks free</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/u/signup">Open Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Student Checking</CardTitle>
                <CardDescription>Perfect for students under 25</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">$0</div>
                  <div className="text-sm text-gray-500">Monthly fee</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No monthly fees for students</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No minimum balance</span>
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
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/u/signup">Open Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Horizon Banking Checking?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">Transparent pricing with no surprise fees. What you see is what you get.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Award-Winning App</h3>
              <p className="text-gray-600">
                Manage your account with our top-rated mobile banking app, available 24/7.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
              <p className="text-gray-600">
                Your money and information are protected with bank-level security and fraud monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Service</h3>
              <p className="text-gray-600">
                Personal service from local bankers who know your community and understand your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Banking Features */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Digital Banking Made Simple</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access your checking account anytime, anywhere with our comprehensive digital banking tools.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Smartphone className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Mobile Check Deposit</span>
                    <p className="text-gray-600">Deposit checks instantly by taking a photo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CreditCard className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Bill Pay</span>
                    <p className="text-gray-600">Pay bills online and set up automatic payments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Account Alerts</span>
                    <p className="text-gray-600">Get notified of account activity via text or email</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <DollarSign className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Money Transfers</span>
                    <p className="text-gray-600">Transfer money between accounts or to friends</p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-700 hover:bg-green-800" asChild>
                  <Link href="/online-banking">Learn More</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/u/signup">Open Account</Link>
                </Button>
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

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Compare Checking Accounts</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-4 text-left">Features</th>
                  <th className="border border-gray-300 p-4 text-center">Ultimate Growth</th>
                  <th className="border border-gray-300 p-4 text-center">Essential</th>
                  <th className="border border-gray-300 p-4 text-center">Student</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Monthly Fee</td>
                  <td className="border border-gray-300 p-4 text-center">$0</td>
                  <td className="border border-gray-300 p-4 text-center">$5 ($0 with $500 balance)</td>
                  <td className="border border-gray-300 p-4 text-center">$0</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">Minimum Opening Deposit</td>
                  <td className="border border-gray-300 p-4 text-center">$25</td>
                  <td className="border border-gray-300 p-4 text-center">$25</td>
                  <td className="border border-gray-300 p-4 text-center">$25</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">ATM Fee Rebates</td>
                  <td className="border border-gray-300 p-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="border border-gray-300 p-4 text-center">Limited</td>
                  <td className="border border-gray-300 p-4 text-center">Limited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">Free Checks</td>
                  <td className="border border-gray-300 p-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="border border-gray-300 p-4 text-center">First order only</td>
                  <td className="border border-gray-300 p-4 text-center">First order only</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Mobile Banking</td>
                  <td className="border border-gray-300 p-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">Overdraft Protection</td>
                  <td className="border border-gray-300 p-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "I love the Ultimate Growth Checking account! No fees, great mobile app, and the ATM rebates save me
                  money every month. The $300 bonus was a nice welcome gift too."
                </p>
                <div>
                  <p className="font-medium">Maria Rodriguez</p>
                  <p className="text-sm text-gray-500">Ultimate Growth Checking Customer</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "As a college student, the Student Checking account has been perfect. No fees, great customer service,
                  and the financial education resources have helped me learn about money management."
                </p>
                <div>
                  <p className="font-medium">Alex Chen</p>
                  <p className="text-sm text-gray-500">Student Checking Customer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Open Your Checking Account?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Horizon Banking for their everyday banking needs. Open your
            account online in just minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium" asChild>
              <Link href="/u/signup">
                Open Account Online <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
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

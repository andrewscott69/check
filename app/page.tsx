import Image from "next/image"
import Link from "next/link"
import { Clock, ChevronRight, Shield, CreditCard, Home, Smartphone, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/happy-silvercouple.jpg"
            alt="Happy couple enjoying financial freedom"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Earn Up to $400 with our <span className="text-yellow-400">FREE</span> Ultimate Growth Checking Account*
            </h1>
            <p className="text-lg mb-8">
              This free account rewards progress & automatically grows with you. *Select "Learn More" for offer details.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium" asChild>
                <Link href="/u/signup">
                  GET STARTED<ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-green-900 hover:bg-gray-100 font-medium"
                asChild
              >
                <Link href="/u/login">
                  OPEN ACCOUNT <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-green-900 to-emerald-700 text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center py-4 px-6 border-r border-green-800">
              <div>
                <p className="text-sm font-medium">ROUTING #</p>
                <p className="font-bold">231380104</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 py-4 px-6">
              <Clock className="h-5 w-5" />
              <span className="font-medium">BRANCH HOURS</span>
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="rates" className="w-full">
            <TabsList className="w-full grid grid-cols-1 md:grid-cols-3 bg-transparent h-auto">
              <TabsTrigger
                value="rates"
                className="py-4 text-lg font-medium data-[state=active]:bg-green-700 data-[state=active]:text-white bg-green-600 text-white rounded-none"
              >
                RATES
              </TabsTrigger>
              <TabsTrigger
                value="locations"
                className="py-4 text-lg font-medium data-[state=active]:bg-green-700 data-[state=active]:text-white bg-green-600 text-white rounded-none"
              >
                LOCATIONS NEAR YOU
              </TabsTrigger>
              <TabsTrigger
                value="care"
                className="py-4 text-lg font-medium data-[state=active]:bg-green-700 data-[state=active]:text-white bg-green-600 text-white rounded-none"
              >
                MEMBER CARE
              </TabsTrigger>
            </TabsList>

            <TabsContent value="rates" className="bg-gray-100 p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mb-12">
                <div className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-full mb-2 w-16 h-16 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Featured" width={40} height={40} />
                    
                  </div>
                  <span className="font-medium text-sm">FEATURED</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-full mb-2 w-16 h-16 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Savings" width={40} height={40} />
                  </div>
                  <span className="font-medium text-sm">SAVINGS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-full mb-2 w-16 h-16 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Credit Cards" width={40} height={40} />
                  </div>
                  <span className="font-medium text-sm">CREDIT CARDS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-full mb-2 w-16 h-16 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Loans" width={40} height={40} />
                  </div>
                  <span className="font-medium text-sm">LOANS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-full mb-2 w-16 h-16 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-house-icon lucide-house"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                  </div>
                  <span className="font-medium text-sm">MORTGAGES</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-yellow-500">3.60%</span>
                    <span className="text-sm text-gray-500">APY</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">High-Yield Savings</h3>
                  <p className="text-gray-600 mb-4">Earn more with our competitive rates on savings accounts.</p>
                  <Button variant="link" className="text-green-700 p-0 font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-yellow-500">4.35%</span>
                    <span className="text-sm text-gray-500">APY</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Certificate Accounts</h3>
                  <p className="text-gray-600 mb-4">Lock in great rates with our certificate accounts.</p>
                  <Button variant="link" className="text-green-700 p-0 font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-sm text-gray-500">AS LOW AS</span>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-yellow-500">5.49%</span>
                    <span className="text-sm text-gray-500">APR</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Auto Loans</h3>
                  <p className="text-gray-600 mb-4">Drive away with competitive rates on auto loans.</p>
                  <Button variant="link" className="text-green-700 p-0 font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-sm text-gray-500">AS LOW AS</span>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-yellow-500">6.25%</span>
                    <span className="text-sm text-gray-500">APR</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Home Equity</h3>
                  <p className="text-gray-600 mb-4">Tap into your home's equity with competitive rates.</p>
                  <Button variant="link" className="text-green-700 p-0 font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-yellow-500">1.5%</span>
                    <span className="text-sm text-gray-500">Cash Back</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Rewards Credit Card</h3>
                  <p className="text-gray-600 mb-4">Earn cash back on every purchase with no annual fee.</p>
                  <Button variant="link" className="text-green-700 p-0 font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-sm text-gray-500">AS LOW AS</span>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-yellow-500">7.99%</span>
                    <span className="text-sm text-gray-500">APR</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Personal Loans</h3>
                  <p className="text-gray-600 mb-4">Flexible financing for life's opportunities.</p>
                  <Button variant="link" className="text-green-700 p-0 font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-sm text-gray-500">RATES FROM</span>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-yellow-500">6.75%</span>
                    <span className="text-sm text-gray-500">APR</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Mortgages</h3>
                  <p className="text-gray-600 mb-4">Find your perfect home loan with great rates.</p>
                  <Button variant="link" className="text-green-700 p-0 font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-yellow-500">$0</span>
                    <span className="text-sm text-gray-500">Monthly Fee</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Ultimate Growth Checking</h3>
                  <p className="text-gray-600 mb-4">Premium checking with rewards and no fees.</p>
                  <Button variant="link" className="text-green-700 p-0 font-medium">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="locations" className="bg-gray-100 p-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Find a Branch Near You</h3>
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Enter ZIP code or address"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <Button className="bg-green-700 hover:bg-green-800">Search Locations</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="care" className="bg-gray-100 p-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">How Can We Help You?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-md shadow-sm">
                    <h4 className="text-lg font-medium mb-2">Contact Us</h4>
                    <p className="text-gray-600 mb-4">Our team is available to assist you with any questions.</p>
                    <p className="font-medium">Phone: (800) 555-1234</p>
                    <p className="text-gray-600">Monday-Friday: 8am-8pm</p>
                    <p className="text-gray-600">Saturday: 9am-1pm</p>
                  </div>
                  <div className="bg-white p-6 rounded-md shadow-sm">
                    <h4 className="text-lg font-medium mb-2">Online Support</h4>
                    <p className="text-gray-600 mb-4">Get help with online and mobile banking.</p>
                    <Button className="bg-green-700 hover:bg-green-800 w-full">Chat With Us</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Financial Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-green-600 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Personal Banking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Personal Checking</h3>
                <p className="text-gray-600 mb-4">
                  Our checking accounts are designed to fit your lifestyle with no hidden fees and great benefits.
                </p>
                <Button variant="link" className="text-green-700 p-0 font-medium">
                  Explore Options <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-green-600 relative">
                <Image src="/placeholder.svg?height=200&width=400" alt="Home Loans" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Home Loans</h3>
                <p className="text-gray-600 mb-4">
                  Find the perfect mortgage solution with competitive rates and flexible terms.
                </p>
                <Button variant="link" className="text-green-700 p-0 font-medium">
                  Get Started <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-green-600 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Wealth Management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Wealth Management</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance to help you build, manage, and preserve your wealth for the future.
                </p>
                <Button variant="link" className="text-green-700 p-0 font-medium">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Banking Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image src="/placeholder.svg?height=400&width=600" alt="Online Banking" fill className="object-contain" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Bank Anywhere, Anytime</h2>
              <p className="text-lg text-gray-600 mb-6">
                Experience the convenience of our award-winning online and mobile banking platforms. Manage your
                accounts, transfer funds, deposit checks, and pay bills from anywhere.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Smartphone className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Mobile Banking App</span>
                    <p className="text-gray-600">Manage your accounts on the go with our top-rated mobile app.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Enhanced Security</span>
                    <p className="text-gray-600">
                      Advanced encryption and multi-factor authentication keep your information safe.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CreditCard className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Card Controls</span>
                    <p className="text-gray-600">Lock, unlock, and set alerts for your debit and credit cards.</p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-700 hover:bg-green-800">Enroll Now</Button>
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Special Offers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-yellow-400">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span>Limited Time Offer</span>
                </CardTitle>
                <CardDescription>Expires August 31, 2025</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">$300 Cash Bonus</h3>
                <p className="text-gray-600 mb-4">
                  Open a new Ultimate Growth Checking account and receive direct deposits totaling $2,000 or more within
                  90 days to earn a $300 cash bonus.
                </p>
                <ul className="space-y-2 mb-4">
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
                    <span>Unlimited ATM fee rebates nationwide</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-yellow-500 hover:bg-yellow-600 w-full">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-green-400">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-6 w-6 text-green-600" />
                  <span>Mortgage Special</span>
                </CardTitle>
                <CardDescription>For qualified borrowers</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">0.25% Rate Discount</h3>
                <p className="text-gray-600 mb-4">
                  Receive a 0.25% interest rate discount on new home loans when you set up automatic payments from your
                  Horizon Banking checking account.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Available for purchases and refinances</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Competitive rates and flexible terms</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Dedicated mortgage advisor</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 hover:bg-green-700 w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Horizon Banking has transformed how I manage my finances. Their mobile app is intuitive, and their
                customer service team is always ready to help. I've been a customer for over 5 years and couldn't be
                happier."
              </p>
              <div>
                <p className="font-medium">Sarah T.</p>
                <p className="text-sm text-gray-500">Personal Banking Customer</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "As a small business owner, I needed a bank that understood my unique challenges. Horizon Banking
                provided tailored solutions that helped my business grow. Their business advisors are knowledgeable and
                supportive."
              </p>
              <div>
                <p className="font-medium">Michael R.</p>
                <p className="text-sm text-gray-500">Business Banking Customer</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The wealth management team at Horizon Banking helped me create a comprehensive retirement plan. Their
                expertise and personalized approach gave me confidence in my financial future."
              </p>
              <div>
                <p className="font-medium">Jennifer L.</p>
                <p className="text-sm text-gray-500">Wealth Management Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Financial Education Resources</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Empower yourself with knowledge to make informed financial decisions. Explore our library of resources
            designed to help you achieve your financial goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Financial Calculators</CardTitle>
                <CardDescription>Plan your financial future</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Use our interactive calculators to estimate mortgage payments, plan for retirement, calculate loan
                  payments, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="/calculators/mortgage" className="text-green-700 hover:underline">
                      Mortgage Calculator
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="/calculators/retirement" className="text-green-700 hover:underline">
                      Retirement Planner
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="/calculators/savings" className="text-green-700 hover:underline">
                      Savings Growth Calculator
                    </Link>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Calculators
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Articles</CardTitle>
                <CardDescription>Insights and guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Browse our collection of articles covering personal finance, investing, homeownership, business
                  strategies, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="/articles/first-time-homebuyer" className="text-green-700 hover:underline">
                      First-Time Homebuyer Guide
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="/articles/investing-basics" className="text-green-700 hover:underline">
                      Investing Basics
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="/articles/debt-management" className="text-green-700 hover:underline">
                      Debt Management Strategies
                    </Link>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read More Articles
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Webinars & Workshops</CardTitle>
                <CardDescription>Learn from experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Participate in our educational webinars and in-person workshops led by financial experts on various
                  topics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="/events/retirement-planning" className="text-green-700 hover:underline">
                      Retirement Planning Essentials
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="/events/small-business" className="text-green-700 hover:underline">
                      Small Business Financial Management
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <Link href="/events/estate-planning" className="text-green-700 hover:underline">
                      Estate Planning 101
                    </Link>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Upcoming Events
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Community Commitment</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            At Horizon Banking, we're committed to making a positive impact in the communities we serve through
            volunteerism, financial education, and charitable giving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Community Involvement"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Making a Difference Together</h3>
              <p className="text-gray-600 mb-6">
                Our employees volunteered over 10,000 hours last year, supporting local schools, food banks, and housing
                initiatives. Through our Horizon Foundation, we've donated more than $2 million to nonprofit
                organizations focused on financial literacy, education, and economic development.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Financial Education Programs</span>
                    <p className="text-gray-600">Teaching financial literacy in schools and community centers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Home className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Affordable Housing Initiatives</span>
                    <p className="text-gray-600">Supporting programs that increase access to affordable housing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Small Business Support</span>
                    <p className="text-gray-600">Providing resources and mentorship to local entrepreneurs.</p>
                  </div>
                </li>
              </ul>
              <Button className="bg-green-700 hover:bg-green-800">Learn About Our Impact</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Open an account online in minutes or schedule an appointment with one of our financial advisors to discuss
            your unique needs and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Open an Account <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-green-800 font-medium"
            >
              Schedule Appointment <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
      <SiteFooter />
    </>
  )
}

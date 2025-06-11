import Image from "next/image"
import { ChevronRight, Check, Home, Calculator, Shield, Users, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomeLoansPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Home Loans"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Loans & Mortgages</h1>
            <p className="text-lg mb-8">
              Turn your homeownership dreams into reality with competitive rates, expert guidance, and personalized
              service from our mortgage specialists.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Get Pre-Approved <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Award className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="text-xl font-bold text-yellow-800">Special Mortgage Offer</h3>
                <p className="text-yellow-700">Get 0.25% rate discount with automatic payments</p>
              </div>
            </div>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Find Your Perfect Home Loan</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-green-400">
              <CardHeader>
                <CardTitle className="text-xl">Purchase Loans</CardTitle>
                <CardDescription>Buy your dream home</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-green-600">6.75%</div>
                  <div className="text-sm text-gray-500">APR as low as*</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Down payment as low as 3%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Fixed and adjustable rates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>First-time buyer programs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Refinancing</CardTitle>
                <CardDescription>Lower your rate or payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-green-600">6.50%</div>
                  <div className="text-sm text-gray-500">APR as low as*</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Lower your monthly payment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Cash-out refinancing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Streamlined process</span>
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
                <CardTitle className="text-xl">FHA Loans</CardTitle>
                <CardDescription>Government-backed financing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-green-600">6.85%</div>
                  <div className="text-sm text-gray-500">APR as low as*</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Down payment as low as 3.5%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Lower credit requirements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Gift funds allowed</span>
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
                <CardTitle className="text-xl">VA Loans</CardTitle>
                <CardDescription>For military veterans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-green-600">6.50%</div>
                  <div className="text-sm text-gray-500">APR as low as*</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No down payment required</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>No mortgage insurance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Reusable benefit</span>
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
        </div>
      </section>

      {/* First-Time Homebuyer Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">First-Time Homebuyer Programs</h2>
              <p className="text-lg text-gray-600 mb-6">
                We understand that buying your first home can feel overwhelming. Our first-time homebuyer programs are
                designed to make homeownership more accessible and affordable.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Home className="h-5 w-5 text-blue-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Down Payment Assistance</span>
                    <p className="text-gray-600">Programs to help with down payment and closing costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Homebuyer Education</span>
                    <p className="text-gray-600">Free classes to prepare you for homeownership</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calculator className="h-5 w-5 text-blue-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Flexible Underwriting</span>
                    <p className="text-gray-600">Alternative credit evaluation for unique situations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-3 shrink-0" />
                  <div>
                    <span className="font-medium">Dedicated Support</span>
                    <p className="text-gray-600">Personal guidance throughout the entire process</p>
                  </div>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="First-Time Homebuyer"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">The Mortgage Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Pre-Approval</h3>
              <p className="text-gray-600 text-sm">Get pre-approved to know your budget and strengthen your offer.</p>
            </div>

            <div className="text-center relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-green-200 -z-10"></div>
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">House Hunting</h3>
              <p className="text-gray-600 text-sm">Find your dream home with a real estate agent.</p>
            </div>

            <div className="text-center relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-green-200 -z-10"></div>
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Loan Application</h3>
              <p className="text-gray-600 text-sm">Complete your full mortgage application with documentation.</p>
            </div>

            <div className="text-center relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-green-200 -z-10"></div>
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Processing & Underwriting</h3>
              <p className="text-gray-600 text-sm">We review your application and order an appraisal.</p>
            </div>

            <div className="text-center relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-green-200 -z-10"></div>
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-bold mb-2">Closing</h3>
              <p className="text-gray-600 text-sm">Sign final paperwork and get the keys to your new home!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="py-16 bg-gray-50">
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
                  Estimate your monthly payments, see how much home you can afford, and understand the impact of
                  different rates and terms.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Calculate Now
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Home className="h-8 w-8 text-green-600" />
                  <CardTitle>Homebuying Guide</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Download our comprehensive guide with tips, checklists, and resources for navigating the homebuying
                  process.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download Guide
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <CardTitle>Rate Watch</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sign up for rate alerts and we'll notify you when mortgage rates drop to your target level.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Set Alert
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Our loan officer made the process so easy. As first-time homebuyers, we had a lot of questions, and
                  they were always patient and helpful. We got a great rate too!"
                </p>
                <div>
                  <p className="font-medium">James & Sarah Wilson</p>
                  <p className="text-sm text-gray-500">First-Time Homebuyers</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Refinancing with Horizon Banking saved us hundreds each month. The process was quick and the team
                  kept us informed every step of the way."
                </p>
                <div>
                  <p className="font-medium">Michael Johnson</p>
                  <p className="text-sm text-gray-500">Refinance Customer</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "As a veteran, I appreciated how knowledgeable they were about VA loans. They made sure I got all the
                  benefits I was entitled to and closed on time."
                </p>
                <div>
                  <p className="font-medium">Robert Garcia</p>
                  <p className="text-sm text-gray-500">VA Loan Customer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Mortgage Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Mortgage Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Jennifer Lee</h3>
              <p className="text-green-600 font-medium mb-2">Senior Loan Officer</p>
              <p className="text-gray-600 text-sm">NMLS# 123456</p>
              <p className="text-gray-600 text-sm">15+ years experience</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Mortgage Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">David Martinez</h3>
              <p className="text-green-600 font-medium mb-2">Mortgage Consultant</p>
              <p className="text-gray-600 text-sm">NMLS# 234567</p>
              <p className="text-gray-600 text-sm">10+ years experience</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Mortgage Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-green-600 font-medium mb-2">First-Time Buyer Specialist</p>
              <p className="text-gray-600 text-sm">NMLS# 345678</p>
              <p className="text-gray-600 text-sm">8+ years experience</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Mortgage Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Thompson</h3>
              <p className="text-green-600 font-medium mb-2">VA Loan Specialist</p>
              <p className="text-gray-600 text-sm">NMLS# 456789</p>
              <p className="text-gray-600 text-sm">12+ years experience</p>
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
              Contact a Loan Officer <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

import Image from "next/image"
import { Clock, Video, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
    <SiteHeader />
       <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/herobg.jpg?height=500&width=1920"
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
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
                OPEN NOW <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 font-medium">
                LEARN MORE <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-green-900 to-emerald-700 text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-center justify-center py-4 px-6 border-r border-green-800">
              <div>
                <p className="text-sm font-medium">ROUTING #</p>
                <p className="font-bold">231380104</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 py-4 px-6 border-r border-green-800">
              <Clock className="h-5 w-5" />
              <span className="font-medium">BRANCH HOURS</span>
              <ChevronRight className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-center gap-2 py-4 px-6">
              <Video className="h-5 w-5" />
              <span className="font-medium">VIDEO CONNECT</span>
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
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
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
                    <Image src="/placeholder.svg?height=40&width=40" alt="Mortgages" width={40} height={40} />
                  </div>
                  <span className="font-medium text-sm">MORTGAGES</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <div className="h-48 bg-blue-600 relative">
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
              <div className="h-48 bg-blue-600 relative">
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
              <div className="h-48 bg-blue-600 relative">
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
    </main>

    <SiteFooter />
    </>
   
  )
}

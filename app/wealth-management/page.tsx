import Image from "next/image"
import { ChevronRight, TrendingUp, Shield, Users, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function WealthManagementPage() {
  return (
    <>
    <SiteHeader />
          <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Wealth Management"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Wealth Management Services</h1>
            <p className="text-lg mb-8">
              Expert guidance and personalized strategies to help you build, preserve, and transfer your wealth across
              generations.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Schedule Consultation <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive Wealth Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Investment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customized investment portfolios designed to meet your specific goals and risk tolerance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Protect your wealth with comprehensive insurance and risk mitigation strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Estate Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ensure your legacy with strategic estate planning and wealth transfer solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Tax Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimize your tax efficiency with strategic planning and implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Investment Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Management</CardTitle>
                <CardDescription>Professional investment oversight</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Personalized investment strategies</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Regular portfolio reviews and rebalancing</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Access to institutional-quality investments</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Comprehensive performance reporting</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Retirement Planning</CardTitle>
                <CardDescription>Secure your financial future</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>401(k) and IRA management</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Social Security optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Income distribution strategies</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Healthcare cost planning</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trust Services</CardTitle>
                <CardDescription>Professional fiduciary management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Revocable and irrevocable trusts</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Corporate trustee services</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Estate administration</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                    <span>Charitable giving strategies</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Wealth Planning Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Wealth Planning Process</h2>
              <p className="text-lg text-gray-600 mb-8">
                We take a comprehensive approach to wealth management, working closely with you to understand your goals
                and create a personalized strategy.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Discovery & Assessment</h3>
                    <p className="text-gray-600">
                      We begin by understanding your current financial situation, goals, and risk tolerance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Strategy Development</h3>
                    <p className="text-gray-600">
                      Our team creates a customized wealth management strategy tailored to your unique needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Implementation</h3>
                    <p className="text-gray-600">
                      We execute your plan with precision, coordinating all aspects of your wealth management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ongoing Monitoring</h3>
                    <p className="text-gray-600">
                      Regular reviews and adjustments ensure your strategy remains aligned with your evolving goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Start Your Journey <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Wealth Planning Process"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Wealth Management Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Sarah Johnson"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle>Sarah Johnson, CFP®</CardTitle>
                <CardDescription>Senior Wealth Advisor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience, Sarah specializes in comprehensive financial planning and investment
                  management for high-net-worth individuals.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Credentials:</strong> CFP®, CFA
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Michael Chen"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle>Michael Chen, CPA</CardTitle>
                <CardDescription>Tax Planning Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Michael brings expertise in tax-efficient strategies and estate planning, helping clients minimize tax
                  burdens while maximizing wealth preservation.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Credentials:</strong> CPA, CFP®
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Emily Rodriguez"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle>Emily Rodriguez, CTFA</CardTitle>
                <CardDescription>Trust Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Emily manages trust administration and estate services, ensuring seamless wealth transfer and legacy
                  planning for our clients' families.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Credentials:</strong> CTFA, JD
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Wealth Strategy?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a complimentary consultation with our wealth management team to discuss your financial goals and
            explore how we can help you achieve them.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Schedule Consultation <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-green-900 hover:bg-gray-100 font-medium">
              Download Our Guide <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
    </>
  )
}

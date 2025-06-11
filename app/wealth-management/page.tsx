import Image from "next/image"
import { ChevronRight, Check, TrendingUp, BarChart, Shield, Users, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WealthManagementPage() {
  return (
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Wealth Management</h1>
            <p className="text-lg mb-8">
              Personalized financial strategies to help you build, preserve, and transfer wealth across generations.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Schedule a Consultation <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive Wealth Management Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Investment Management</h3>
              <p className="text-gray-600">
                Customized investment strategies aligned with your goals, risk tolerance, and time horizon.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Planning</h3>
              <p className="text-gray-600">
                Comprehensive planning for retirement, education, estate, and tax optimization strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trust & Estate Services</h3>
              <p className="text-gray-600">
                Preserve and transfer wealth to future generations with sophisticated trust solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Private Banking</h3>
              <p className="text-gray-600">
                Exclusive banking services and lending solutions tailored to high-net-worth individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Investment Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in a disciplined, research-driven approach to investing that focuses on long-term growth
                while managing risk. Our investment strategies are built on these core principles:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Diversification</span>
                    <p className="text-gray-600">Spreading investments across asset classes to manage risk</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Long-Term Focus</span>
                    <p className="text-gray-600">Building wealth through disciplined, patient investing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Tax Efficiency</span>
                    <p className="text-gray-600">Minimizing tax impact to maximize after-tax returns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Cost Management</span>
                    <p className="text-gray-600">Keeping investment costs low to enhance returns</p>
                  </div>
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700">Learn More</Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Investment Philosophy"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Solutions for Every Stage of Life</h2>

          <Tabs defaultValue="accumulation" className="w-full">
            <TabsList className="w-full grid grid-cols-1 md:grid-cols-3 h-auto mb-8">
              <TabsTrigger value="accumulation" className="py-3 text-base">
                Wealth Accumulation
              </TabsTrigger>
              <TabsTrigger value="preservation" className="py-3 text-base">
                Wealth Preservation
              </TabsTrigger>
              <TabsTrigger value="transfer" className="py-3 text-base">
                Wealth Transfer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="accumulation">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Wealth Accumulation"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Building Your Wealth</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    During your wealth accumulation years, we focus on growth-oriented strategies while helping you
                    balance competing financial priorities.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Investment Management</span>
                        <p className="text-gray-600">Growth-focused portfolios aligned with your risk tolerance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BarChart className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Retirement Planning</span>
                        <p className="text-gray-600">Maximizing contributions and investment growth</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Education Funding</span>
                        <p className="text-gray-600">529 plans and other tax-advantaged education strategies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Risk Management</span>
                        <p className="text-gray-600">Insurance solutions to protect your growing wealth</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-green-600 hover:bg-green-700">Schedule a Consultation</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preservation">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Preserving Your Wealth</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    As you approach retirement, our focus shifts to protecting your assets while generating sustainable
                    income to support your lifestyle.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Income Planning</span>
                        <p className="text-gray-600">Creating reliable income streams for retirement</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BarChart className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Tax-Efficient Withdrawals</span>
                        <p className="text-gray-600">Minimizing taxes on retirement distributions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Healthcare Planning</span>
                        <p className="text-gray-600">Strategies for managing healthcare costs in retirement</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Social Security Optimization</span>
                        <p className="text-gray-600">Maximizing your lifetime benefits</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-green-600 hover:bg-green-700">Schedule a Consultation</Button>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Wealth Preservation"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="transfer">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Wealth Transfer"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Transferring Your Legacy</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Our estate planning experts help you create a comprehensive strategy to transfer wealth efficiently
                    to future generations or charitable causes.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Estate Planning</span>
                        <p className="text-gray-600">Wills, trusts, and comprehensive estate strategies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Trust Services</span>
                        <p className="text-gray-600">Creating and managing trusts for efficient wealth transfer</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Charitable Giving</span>
                        <p className="text-gray-600">Tax-efficient philanthropy strategies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BarChart className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                      <div>
                        <span className="font-medium">Business Succession</span>
                        <p className="text-gray-600">Planning for the transition of family businesses</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-green-600 hover:bg-green-700">Schedule a Consultation</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Wealth Management Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=128&width=128" alt="Wealth Advisor" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Richard Thompson</h3>
              <p className="text-green-600 font-medium mb-2">Chief Investment Officer</p>
              <p className="text-gray-600 text-sm">CFA, MBA</p>
              <p className="text-gray-600 text-sm">25+ years experience</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=128&width=128" alt="Wealth Advisor" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Elizabeth Chen</h3>
              <p className="text-green-600 font-medium mb-2">Senior Wealth Advisor</p>
              <p className="text-gray-600 text-sm">CFP®, CIMA®</p>
              <p className="text-gray-600 text-sm">18+ years experience</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=128&width=128" alt="Wealth Advisor" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Marcus Johnson</h3>
              <p className="text-green-600 font-medium mb-2">Estate Planning Specialist</p>
              <p className="text-gray-600 text-sm">JD, LLM in Taxation</p>
              <p className="text-gray-600 text-sm">15+ years experience</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=128&width=128" alt="Wealth Advisor" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Sophia Rodriguez</h3>
              <p className="text-green-600 font-medium mb-2">Retirement Planning Specialist</p>
              <p className="text-gray-600 text-sm">CFP®, RICP®</p>
              <p className="text-gray-600 text-sm">12+ years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">The Horizon Wealth Management Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-green-600" />
                  <CardTitle>Personal Relationship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Work with a dedicated wealth advisor who understands your unique financial situation, goals, and
                  values.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Dedicated advisor</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Regular review meetings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Proactive communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BarChart className="h-8 w-8 text-green-600" />
                  <CardTitle>Customized Strategy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Receive a tailored financial plan and investment strategy designed specifically for your goals and
                  risk tolerance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Comprehensive assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Tailored recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Regular strategy reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-8 w-8 text-green-600" />
                  <CardTitle>Integrated Approach</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Benefit from a team of specialists who collaborate to address all aspects of your financial life.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Team of specialists</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Coordination with your advisors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Comprehensive solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  "Our wealth advisor helped us create a comprehensive retirement plan that gave us confidence in our
                  financial future. Their expertise in tax planning alone saved us thousands."
                </p>
                <div>
                  <p className="font-medium">Robert & Susan Anderson</p>
                  <p className="text-sm text-gray-500">Clients since 2010</p>
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
                  "The team at Horizon helped me navigate the complex process of selling my business and creating a
                  strategy for managing the proceeds. Their expertise was invaluable."
                </p>
                <div>
                  <p className="font-medium">James Wilson</p>
                  <p className="text-sm text-gray-500">Business Owner</p>
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
                  "I appreciate how my advisor takes the time to understand my philanthropic goals and has helped me
                  create a giving strategy that maximizes my impact while being tax-efficient."
                </p>
                <div>
                  <p className="font-medium">Patricia Martinez</p>
                  <p className="text-sm text-gray-500">Philanthropist</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Financial Legacy?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a complimentary consultation with one of our experienced wealth advisors to discuss your financial
            goals and how we can help you achieve them.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Schedule a Consultation <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-green-900 hover:bg-gray-100 font-medium">
              Download Our Brochure <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

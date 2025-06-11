import Image from "next/image"
import { ChevronRight, Check, Smartphone, Shield, CreditCard, Clock, Bell, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OnlineBankingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Online Banking"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Online & Mobile Banking</h1>
            <p className="text-lg mb-8">
              Bank anywhere, anytime with our award-winning digital banking platform. Manage your accounts, pay bills,
              and deposit checks from your computer or mobile device.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Enroll Now <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Everything You Need in One Place</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Check Deposit</h3>
              <p className="text-gray-600">Deposit checks instantly by taking a photo with your smartphone.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bill Pay</h3>
              <p className="text-gray-600">Pay bills online and set up automatic payments to never miss a due date.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Bell className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Account Alerts</h3>
              <p className="text-gray-600">
                Get real-time notifications about your account activity via text, email, or push notifications.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Transfers</h3>
              <p className="text-gray-600">
                Transfer money between accounts or send money to friends and family securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Banking Experience</h2>

          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="w-full grid grid-cols-1 md:grid-cols-3 h-auto mb-8">
              <TabsTrigger value="mobile" className="py-3 text-base">
                Mobile App
              </TabsTrigger>
              <TabsTrigger value="online" className="py-3 text-base">
                Online Banking
              </TabsTrigger>
              <TabsTrigger value="tablet" className="py-3 text-base">
                Tablet Banking
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mobile">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=300"
                    alt="Mobile Banking App"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Award-Winning Mobile App</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Rated #1 by customers for ease of use and functionality. Bank on the go with our feature-rich mobile
                    app.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Mobile Check Deposit</span>
                        <p className="text-gray-600">Deposit checks in seconds with your camera</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Touch ID & Face ID</span>
                        <p className="text-gray-600">Secure biometric login for quick access</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Card Controls</span>
                        <p className="text-gray-600">Lock, unlock, and manage your cards instantly</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Person-to-Person Payments</span>
                        <p className="text-gray-600">Send money to friends and family with just their phone number</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download for iOS
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download for Android
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="online">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Full-Featured Online Banking</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Access all your banking needs from your computer with our comprehensive online banking platform.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Account Management</span>
                        <p className="text-gray-600">View balances, transactions, and statements</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Bill Pay & Scheduling</span>
                        <p className="text-gray-600">Pay bills and set up recurring payments</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Wire Transfers</span>
                        <p className="text-gray-600">Send domestic and international wire transfers</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Document Center</span>
                        <p className="text-gray-600">Access statements, tax documents, and notices</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-green-600 hover:bg-green-700">Access Online Banking</Button>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Online Banking Dashboard"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tablet">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Tablet Banking"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Optimized for Tablets</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Enjoy the perfect balance of mobile convenience and desktop functionality on your tablet.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Large Screen Interface</span>
                        <p className="text-gray-600">Optimized layout for tablet screens</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Multi-Account View</span>
                        <p className="text-gray-600">See multiple accounts at once</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Enhanced Security</span>
                        <p className="text-gray-600">Biometric authentication and secure sessions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Offline Capabilities</span>
                        <p className="text-gray-600">View recent transactions even without internet</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-green-600 hover:bg-green-700">Download Tablet App</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Bank-Level Security</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Your security is our top priority. We use advanced encryption and multiple layers of protection to keep your
            information safe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-8 w-8 text-green-600" />
                  <CardTitle>Multi-Factor Authentication</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Multiple layers of verification including passwords, biometrics, and device recognition.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Touch ID and Face ID support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>SMS and email verification</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Device registration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-8 w-8 text-green-600" />
                  <CardTitle>Real-Time Monitoring</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  24/7 fraud monitoring and instant alerts for suspicious activity on your accounts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Transaction monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Instant fraud alerts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Account lockdown capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="h-8 w-8 text-green-600" />
                  <CardTitle>Advanced Encryption</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Industry-leading encryption technology protects your data during transmission and storage.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>256-bit SSL encryption</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Secure data centers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>Regular security audits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get Started with Online Banking</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Enroll Online</h3>
              <p className="text-gray-600">
                Sign up for online banking using your account number and personal information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Verify Your Identity</h3>
              <p className="text-gray-600">Complete the verification process to secure your account access.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Download the App</h3>
              <p className="text-gray-600">
                Get our mobile app from the App Store or Google Play for banking on the go.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Start Banking</h3>
              <p className="text-gray-600">
                Begin managing your accounts, paying bills, and depositing checks digitally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Need Help?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Online Banking Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get help with online banking features, troubleshooting, and account access.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Phone: (800) 555-1234</p>
                  <p className="text-gray-600">Available 24/7</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Call Support</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Chat with our support team for immediate assistance with your online banking questions.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Available 24/7</p>
                  <p className="text-gray-600">Average response time: 2 minutes</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Bank Digitally?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join millions of customers who enjoy the convenience and security of our digital banking platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
              Enroll in Online Banking <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-green-900 hover:bg-gray-100 font-medium">
              Download Mobile App <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

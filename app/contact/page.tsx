import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Contact Us"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-8">
              We're here to help you with all your banking needs. Find a branch near you or get in touch with our
              customer service team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Customer Service</CardTitle>
                <CardDescription>Available 7 days a week</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-green-700 mb-2">(800) 555-1234</p>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                  <p>Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: 9:00 AM - 5:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>We'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-medium text-green-700 mb-4">support@horizonbanking.com</p>
                <p className="text-gray-600">
                  For general inquiries, account questions, or technical support. Please include your account number for
                  faster service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Branch Locations</CardTitle>
                <CardDescription>Over 50 locations to serve you</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Find a branch or ATM near you using our branch locator tool.</p>
                <Button className="bg-green-700 hover:bg-green-800 w-full">Find Locations</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Branch Locations</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full grid grid-cols-1 md:grid-cols-4 h-auto mb-8">
              <TabsTrigger value="all" className="py-3 text-base">
                All Locations
              </TabsTrigger>
              <TabsTrigger value="downtown" className="py-3 text-base">
                Downtown
              </TabsTrigger>
              <TabsTrigger value="suburban" className="py-3 text-base">
                Suburban
              </TabsTrigger>
              <TabsTrigger value="atm" className="py-3 text-base">
                ATM Only
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Main Street Branch</CardTitle>
                    <CardDescription>Full-service branch with drive-thru</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">123 Main Street</p>
                          <p className="text-gray-600">Downtown, ST 12345</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>(555) 123-4567</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                          <p>Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Westside Branch</CardTitle>
                    <CardDescription>Full-service branch with business center</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">456 West Avenue</p>
                          <p className="text-gray-600">Westside, ST 12346</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>(555) 234-5678</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                          <p>Sat: 9:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Northgate Branch</CardTitle>
                    <CardDescription>Full-service branch with wealth management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">789 North Gate Blvd</p>
                          <p className="text-gray-600">Northgate, ST 12347</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>(555) 345-6789</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p>Mon-Fri: 8:30 AM - 5:30 PM</p>
                          <p>Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eastside Branch</CardTitle>
                    <CardDescription>Full-service branch with mortgage center</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">321 East Park Drive</p>
                          <p className="text-gray-600">Eastside, ST 12348</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>(555) 456-7890</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                          <p>Sat: 9:00 AM - 12:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Southpoint Branch</CardTitle>
                    <CardDescription>Full-service branch with safe deposit boxes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">654 South Point Way</p>
                          <p className="text-gray-600">Southpoint, ST 12349</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>(555) 567-8901</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                          <p>Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>University Branch</CardTitle>
                    <CardDescription>Student-focused services and extended hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">987 University Circle</p>
                          <p className="text-gray-600">University District, ST 12350</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>(555) 678-9012</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p>Mon-Thu: 9:00 AM - 7:00 PM</p>
                          <p>Fri: 9:00 AM - 6:00 PM</p>
                          <p>Sat: 10:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="downtown">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Main Street Branch</CardTitle>
                    <CardDescription>Full-service branch with drive-thru</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">123 Main Street</p>
                          <p className="text-gray-600">Downtown, ST 12345</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>(555) 123-4567</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                          <p>Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="suburban">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Westside Branch</CardTitle>
                    <CardDescription>Full-service branch with business center</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">456 West Avenue</p>
                          <p className="text-gray-600">Westside, ST 12346</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>(555) 234-5678</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                          <p>Sat: 9:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Northgate Branch</CardTitle>
                    <CardDescription>Full-service branch with wealth management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">789 North Gate Blvd</p>
                          <p className="text-gray-600">Northgate, ST 12347</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>(555) 345-6789</p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p>Mon-Fri: 8:30 AM - 5:30 PM</p>
                          <p>Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="atm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Shopping Center ATM</CardTitle>
                    <CardDescription>24/7 access with deposit capability</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">555 Shopping Plaza</p>
                          <p className="text-gray-600">Midtown, ST 12351</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>Available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Airport ATM</CardTitle>
                    <CardDescription>Convenient location for travelers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <div>
                          <p className="font-medium">Regional Airport Terminal</p>
                          <p className="text-gray-600">Airport District, ST 12352</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                        <p>Available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
            <p className="text-gray-600 mb-8 text-center">
              Have a question or need assistance? Fill out the form below and we'll get back to you within one business
              day.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select a subject</option>
                  <option value="account">Account Questions</option>
                  <option value="loans">Loans and Credit</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input type="checkbox" id="consent" name="consent" required className="mt-1 mr-2" />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to being contacted by Horizon Banking regarding my inquiry. *
                </label>
              </div>

              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                Send Message <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

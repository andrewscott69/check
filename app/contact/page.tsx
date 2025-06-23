import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const branches = [
  {
    title: "Swiss Private Office",
    description: "Prestige branch in the heart of Porrentruy",
    address: "Avenue de la Liberté 25",
    location: "2900 Porrentruy, Switzerland",
    phone: "+41 32 466 78 90",
    hours: ["Mon-Fri: 8:30 AM - 4:30 PM"],
    mapsQuery: "Avenue de la Liberté 25, 2900 Porrentruy, Switzerland",
  },
  {
    title: "Mediterranean Service Hub",
    description: "Full-service location in sunny Zabbar",
    address: "67, St. James Street",
    location: "Zabbar ZBR 1401, Malta",
    phone: "+356 21 234 567",
    hours: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat: 9:00 AM - 12:00 PM"],
    mapsQuery: "67, St. James Street, Zabbar ZBR 1401, Malta",
  },
  {
    title: "Gulf Corporate Branch",
    description: "Free zone access and private banking support",
    address: "Al Faseel, Fujairah Free Zone",
    location: "P.O. Box 4425, Fujairah, UAE",
    phone: "+971 9 222 3344",
    hours: ["Sun-Thu: 8:00 AM - 2:00 PM"],
    mapsQuery: "Al Faseel, Fujairah Free Zone, Fujairah, UAE",
  },
  {
    title: "UK Correspondence Office",
    description: "For mail handling and administrative inquiries",
    address: "P.O. Box 174",
    location: "Leeds LS1 1EL, United Kingdom",
    phone: "+44 113 123 4567",
    hours: ["Mon-Fri: 9:00 AM - 5:00 PM"],
    mapsQuery: "P.O. Box 174, Leeds LS1 1EL, United Kingdom",
  },
];

function BranchCard({ branch }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{branch.title}</CardTitle>
        <CardDescription>{branch.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <div>
              <p className="font-medium">{branch.address}</p>
              <p className="text-gray-600">{branch.location}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <p>{branch.phone}</p>
          </div>
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
            <div>
              {branch.hours.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapsQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="outline" className="w-full">
            Get Directions
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}


export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contactus.png"
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
                <p className="text-lg font-medium text-green-700 mb-4">support@silvercrest.com</p>
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
                <p className="text-gray-600 mb-4">Need to vist our physical location, choose the location nearest to you.</p>
{/*                 <Button className="bg-green-700 hover:bg-green-800 w-full">Find Locations</Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-gray-50" id="locations">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Branch Locations</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full grid grid-cols-1 md:grid-cols-5 h-auto mb-8">
            <TabsTrigger value="all" className="py-3 text-base">All Locations</TabsTrigger>
            <TabsTrigger value="switzerland" className="py-3 text-base">Switzerland 🇨🇭</TabsTrigger>
            <TabsTrigger value="malta" className="py-3 text-base">Malta 🇲🇹</TabsTrigger>
            <TabsTrigger value="uae" className="py-3 text-base">UAE 🇦🇪</TabsTrigger>
            <TabsTrigger value="uk" className="py-3 text-base">UK 🇬🇧</TabsTrigger>
          </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {branches.map((branch, idx) => <BranchCard key={idx} branch={branch} />)}
              </div>
            </TabsContent>

            <TabsContent value="malta">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {branches.filter(b => b.country === "malta").map((branch, idx) => (
        <BranchCard key={idx} branch={branch} />
      ))}
    </div>
  </TabsContent>

  {/* UAE */}
  <TabsContent value="uae">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {branches.filter(b => b.country === "uae").map((branch, idx) => (
        <BranchCard key={idx} branch={branch} />
      ))}
    </div>
  </TabsContent>

  {/* UK */}
  <TabsContent value="uk">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {branches.filter(b => b.country === "uk").map((branch, idx) => (
        <BranchCard key={idx} branch={branch} />
      ))}
    </div>
  </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white" id="sendmsg">
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

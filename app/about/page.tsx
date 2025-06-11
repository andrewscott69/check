import Image from "next/image"
import { ChevronRight, Award, Users, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="About Horizon Banking"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Horizon Banking</h1>
            <p className="text-lg mb-8">
              A trusted financial partner committed to helping individuals, families, and businesses achieve their
              financial goals since 1985.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1985, Horizon Banking began as a small community bank with a single branch and a vision to
                provide personalized financial services that put customers first. Over the decades, we've grown to serve
                communities across the region while maintaining our commitment to exceptional service and community
                involvement.
              </p>
              <p className="text-gray-600 mb-4">
                Today, Horizon Banking is a full-service financial institution offering a comprehensive range of
                banking, lending, and wealth management solutions for individuals and businesses. While we've embraced
                modern technology and innovative services, our core values remain unchanged: integrity, excellence, and
                a dedication to helping our customers achieve financial success.
              </p>
              <p className="text-gray-600 mb-8">
                With over $5 billion in assets and more than 50 branches, we combine the resources of a large bank with
                the personal touch and local decision-making of a community bank. Our team of experienced professionals
                is committed to understanding your unique needs and providing tailored solutions to help you reach your
                financial goals.
              </p>
              <Button className="bg-green-700 hover:bg-green-800">Our Leadership Team</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with the highest ethical standards, transparency, and accountability in all our
                interactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We put our customers at the center of everything we do, striving to exceed expectations and build
                lasting relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace change and continuously seek new ways to improve our services, processes, and technology to
                better serve our customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We are committed to making a positive impact in the communities we serve through volunteerism, financial
                education, and charitable giving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-40 h-40 bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                <Image src="/placeholder.svg?height=160&width=160" alt="CEO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Robert Johnson</h3>
              <p className="text-green-700 font-medium mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 mb-4">
                With over 25 years of experience in the financial industry, Robert has led Horizon Banking since 2015,
                focusing on strategic growth and digital transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-40 h-40 bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                <Image src="/placeholder.svg?height=160&width=160" alt="CFO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Maria Rodriguez</h3>
              <p className="text-green-700 font-medium mb-2">Chief Financial Officer</p>
              <p className="text-gray-600 mb-4">
                Maria brings extensive expertise in financial management and strategic planning, ensuring the bank's
                continued financial strength and stability.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-40 h-40 bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                <Image src="/placeholder.svg?height=160&width=160" alt="COO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">David Chen</h3>
              <p className="text-green-700 font-medium mb-2">Chief Operations Officer</p>
              <p className="text-gray-600 mb-4">
                David oversees the bank's day-to-day operations, focusing on operational excellence, efficiency, and
                enhancing the customer experience.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-40 h-40 bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                <Image src="/placeholder.svg?height=160&width=160" alt="CTO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Sarah Williams</h3>
              <p className="text-green-700 font-medium mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 mb-4">
                Sarah leads our digital innovation initiatives, ensuring that Horizon Banking remains at the forefront
                of financial technology.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-40 h-40 bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                <Image src="/placeholder.svg?height=160&width=160" alt="CCO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">James Thompson</h3>
              <p className="text-green-700 font-medium mb-2">Chief Credit Officer</p>
              <p className="text-gray-600 mb-4">
                James oversees our credit policies and lending practices, ensuring responsible growth while managing
                risk effectively.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-40 h-40 bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                <Image src="/placeholder.svg?height=160&width=160" alt="CMO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Lisa Patel</h3>
              <p className="text-green-700 font-medium mb-2">Chief Marketing Officer</p>
              <p className="text-gray-600 mb-4">
                Lisa directs our marketing and communications strategies, focusing on building strong relationships with
                customers and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Community Impact</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We believe in giving back to the communities we serve. Through the Horizon Foundation, we support
            initiatives focused on financial education, economic development, and community well-being.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Financial Education</h3>
              <p className="text-gray-600 mb-4">
                Our team members have provided financial literacy education to over 15,000 students in local schools,
                helping young people develop essential money management skills.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>School-based financial literacy programs</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Free financial workshops for adults</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Online educational resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Economic Development</h3>
              <p className="text-gray-600 mb-4">
                We support small businesses and entrepreneurs through specialized lending programs, mentorship, and
                partnerships with local economic development organizations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Small business incubator sponsorships</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Entrepreneurship grants</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Minority business development programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Community Well-being</h3>
              <p className="text-gray-600 mb-4">
                We contribute to initiatives that improve quality of life in our communities, from affordable housing to
                health and wellness programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Affordable housing initiatives</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Food security programs</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                  <span>Environmental sustainability projects</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-green-700 hover:bg-green-800">Learn More About Our Foundation</Button>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Awards & Recognition</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Best Regional Bank</h3>
              <p className="text-gray-600">Financial Services Excellence Awards, 2024</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Top Workplace</h3>
              <p className="text-gray-600">Regional Business Journal, 2023-2024</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Community Impact Award</h3>
              <p className="text-gray-600">Chamber of Commerce, 2023</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Banking Excellence</h3>
              <p className="text-gray-600">Banking Technology Awards, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're looking for talented individuals who share our values and passion for helping customers achieve their
            financial goals. Explore career opportunities at Horizon Banking.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
            View Career Opportunities <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}

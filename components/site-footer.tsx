import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/silverc.png"
              alt="Silver Crest Online Banking"
              width={360}
              height={100}
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-300 mb-4">Your trusted financial partner since 1985. FDIC Insured.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Personal Banking</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/checking" className="text-gray-300 hover:text-white">
                  Checking Accounts
                </Link>
              </li>
              <li>
                <Link href="/savings" className="text-gray-300 hover:text-white">
                  Savings Accounts
                </Link>
              </li>
              <li>
                <Link href="/credit-cards" className="text-gray-300 hover:text-white">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link href="/loans" className="text-gray-300 hover:text-white">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link href="/mortgages" className="text-gray-300 hover:text-white">
                  Mortgages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Business Banking</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/business-checking" className="text-gray-300 hover:text-white">
                  Business Checking
                </Link>
              </li>
              <li>
                <Link href="/business-savings" className="text-gray-300 hover:text-white">
                  Business Savings
                </Link>
              </li>
              <li>
                <Link href="/business-loans" className="text-gray-300 hover:text-white">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link href="/merchant-services" className="text-gray-300 hover:text-white">
                  Merchant Services
                </Link>
              </li>
              <li>
                <Link href="/treasury-management" className="text-gray-300 hover:text-white">
                  Treasury Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-white">
                  Branch Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-300 hover:text-white">
                  Security Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">© 2025 Silver Crest Online Banking. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-white">
                Accessibility
              </Link>
              <Link href="/disclosures" className="hover:text-white">
                Disclosures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

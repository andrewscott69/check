import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Copy, DollarSign, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNav } from "@/components/mobile-nav"
import { UserNav } from "@/components/user-nav"

export default function ReceiveMoneyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <DollarSign className="h-6 w-6" />
          <span>BankApp</span>
        </Link>
        <MobileNav />
        <div className="ml-auto flex items-center gap-4">
          <UserNav />
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto max-w-md space-y-6">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Receive Money</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Share your details to receive money from others.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="qr" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="qr">QR Code</TabsTrigger>
                  <TabsTrigger value="details">Account Details</TabsTrigger>
                </TabsList>
                <TabsContent value="qr" className="space-y-4 py-4">
                  <div className="flex justify-center">
                    <div className="relative h-64 w-64 overflow-hidden rounded-lg border p-2">
                      <Image
                        src="/placeholder.svg?height=250&width=250"
                        alt="QR Code"
                        width={250}
                        height={250}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <Copy className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="details" className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Account Name</Label>
                    <div className="flex">
                      <Input id="name" value="John Doe" readOnly className="rounded-r-none" />
                      <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy account name</span>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account">Account Number</Label>
                    <div className="flex">
                      <Input id="account" value="1234 5678 9012 3456" readOnly className="rounded-r-none" />
                      <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy account number</span>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="routing">Routing Number</Label>
                    <div className="flex">
                      <Input id="routing" value="087654321" readOnly className="rounded-r-none" />
                      <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy routing number</span>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/">Back to Dashboard</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}


import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET as string

export function middleware(request: NextRequest) {
  
  if (request.nextUrl.pathname.startsWith("/u/")) {
    const sessionCookie = request.cookies.get("session")

    if (!sessionCookie?.value) {
      
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }

    try {
      
      jwt.verify(sessionCookie.value, JWT_SECRET)
      
      return NextResponse.next()
    } catch (error) {
      
      const response = NextResponse.redirect(new URL("/auth/login", request.url))
      response.cookies.delete("session") 
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/u/:path*"], 
}

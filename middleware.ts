import { NextResponse, type NextRequest } from "next/server"
import themes from "@/themes/index.json"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if there is any supported theme in the pathname
  const pathname = request.nextUrl.pathname
  // Redirect if there is no theme
  if (pathname === "/") {
    console.log("Redirecting to default theme", pathname.split("/")[1])
    // // The new URL is now /default
    return NextResponse.redirect(new URL(`/default/`, request.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
}

import { NextResponse, type NextRequest } from "next/server"
import themes from "@/themes/index.json"

const availableThemes = themes.map((theme) => theme.name.toLowerCase())

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if there is any supported theme in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingTheme = availableThemes.every(
    (theme) => !pathname.startsWith(`/${theme}/`) && pathname !== `/${theme}`
  )

  // Redirect if there is no theme
  if (pathnameIsMissingTheme) {
    const theme = "default"

    // e.g. incoming request is /non-existing-theme
    // The new URL is now /default
    return NextResponse.redirect(new URL(`/${theme}/`, request.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}

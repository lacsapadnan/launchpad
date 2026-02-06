import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // TODO: Implement Supabase Auth check
  // TODO: Implement Team slug validation
  // TODO: Implement Subscription gating (past_due > 3 days)

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

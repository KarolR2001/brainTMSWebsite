import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Sprawdź, czy ścieżka zawiera duże litery
  if (pathname !== pathname.toLowerCase()) {
    const newUrl = new URL(request.url);
    newUrl.pathname = pathname.toLowerCase();
    return NextResponse.redirect(newUrl, 308); // Permanent Redirect
  }

  // Można tu dodać inne reguły middleware w przyszłości

  return NextResponse.next();
}

// Opcjonalnie: określ, dla których ścieżek middleware ma działać
// W tym przypadku chcemy, aby działało dla wszystkich ścieżek, aby zapewnić spójność
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}; 
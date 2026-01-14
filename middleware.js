import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  if (url.hostname === "www.modxcomputers.com") {
    url.hostname = "modxcomputers.com";
    return NextResponse.redirect(url, { status: 308 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};

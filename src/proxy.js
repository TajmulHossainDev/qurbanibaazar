import { NextResponse } from "next/server";
const privateRoutes = ["/my-profile", "/animals/"];
export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const isPrivate = privateRoutes.some((route) => pathname.startsWith(route));

  if (!isPrivate) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("better-auth.session_token");

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-profile/:path*", "/animals/:path+"],
};

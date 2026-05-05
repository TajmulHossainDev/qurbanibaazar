"use client";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-black text-white px-4 text-center overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-emerald-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10">
        <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-yellow-400 to-emerald-400 text-transparent bg-clip-text animate__animated animate__zoomIn">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 animate__animated animate__fadeInUp animate__delay-1s">
          Page Not Found
        </h2>
        <p className="text-gray-300 mt-3 max-w-md mx-auto animate__animated animate__fadeInUp animate__delay-2s">
          This page is no logner available Or your are looking for wrong URL.
        </p>
        <div className="flex gap-4 justify-center mt-6 flex-wrap animate__animated animate__fadeInUp animate__delay-3s">
          <Link
            href="/"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
          >
            Back Home
          </Link>
        </div>
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400 opacity-20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-emerald-400 opacity-20 rounded-full blur-2xl animate-bounce delay-200"></div>
      </div>
    </div>
  );
}

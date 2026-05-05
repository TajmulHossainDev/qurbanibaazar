"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="border-b px-2 bg-emerald-900">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center group-hover:scale-110 transition-transform">
            <Image
              src={logo}
              alt="logo"
              className=" h-20 w-auto rounded-xl"
            ></Image>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-bold text-lg leading-none">
              Digital Qurbani Baazar
            </h1>
            <p className="text-[#c9a84c] font-semibold text-xs">
              Your Trust Is Our Vision
            </p>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-3 sm:gap-4 md:gap-5 text-xs sm:text-sm whitespace-nowrap">
          <li>
            <Link href="/" className="text-white hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/animals" className="text-white hover:text-yellow-400">
              All Animals
            </Link>
          </li>
          <li>
            <Link
              href="/my-profile"
              className="text-white hover:text-yellow-400"
            >
              My-Profile
            </Link>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          {!user && (
            <>
              <Link
                href="/login"
                className="text-sm text-center bg-yellow-400 text-black px-4 py-1.5  rounded-full font-semibold   hover:bg-yellow-300"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm bg-yellow-400 text-black px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300"
              >
                Register
              </Link>
            </>
          )}
          {user && (
            <div className="flex gap-3 items-center">
              <Image
                src={user?.image || "/avatar.png"}
                alt={user?.name || "user"}
                width={50}
                height={50}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full object-cover"
              ></Image>
              <button
                onClick={handleSignOut}
                className="flex justify-center  text-sm bg-red-500 text-white px-3 py-1.5 rounded-full hover:bg-red-600 "
              >
                logout
              </button>
            </div>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-emerald-800 px-4 pb-4 flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm py-2 border-b border-emerald-700 hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            href="/animals"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm py-2 border-b border-emerald-700 hover:text-yellow-400"
          >
            All Animals
          </Link>
          <Link
            href="/my-profile"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm py-2 border-b border-emerald-700 hover:text-yellow-400"
          >
            My-Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

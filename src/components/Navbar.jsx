"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const user = null;

const Navbar = () => {
  return (
    <div className="border-b px-2 bg-emerald-900">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center group-hover:scale-110 transition-transform">
            <Image
              src={logo}
              height={100}
              width={150}
              alt="logo"
              className="rounded-xl"
            ></Image>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-bold text-lg leading-none">
              Digital Qurbani Haat
            </h1>
            <p className="text-[#c9a84c] font-semibold text-xs">
              Your Trust Is Our Vision
            </p>
          </div>
        </Link>

        <ul className="flex items-center gap-5 text-sm">
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
              My Profile
            </Link>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          <Link
            href="/login"
            className="text-sm bg-yellow-400 text-black px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm bg-yellow-400 text-black px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300"
          >
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import Link from "next/link";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../public/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                height={80}
                width={120}
                alt="logo"
                className="rounded-xl"
              ></Image>
              <h2 className="text-base font-semibold leading-tight">
                Digital Qurbani Baazar
              </h2>
            </div>
            <p className="text-sm text-emerald-300">Your Trust Is Our Vision</p>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 hover:scale-110"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 hover:scale-110"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 hover:scale-110"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-400 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/animals"
                  className="hover:text-white transition-colors"
                >
                  All Animals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">
              Account
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/login"
                  className="hover:text-white transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-white transition-colors"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">
              Contact
            </h3>
            <ul className=" space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <FaLocationDot className="mt-0.5 shrink-0" />{" "}
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-0.5 shrink-0" />{" "}
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-start gap-2">
                {" "}
                <MdEmail className="mt-0.5 shrink-0" />{" "}
                <span className="break-all">info@digitalqurbanibaazar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-white/30" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} All Right Reserved.Digital Qurbani
            Baazar.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

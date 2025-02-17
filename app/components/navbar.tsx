"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-t from-neutral-900  to-neutral-700 text-neutral-100 shadow p-4 sm:px-8 flex justify-between items-center">
      {/* Logo */}
      <Link href="\" className="flex items-center space-x-2">
        <Image src="/minam.png" width={50} height={40} className="rounded-full" alt="Minm logo" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-neutral-100 focus:outline-none hover:text-indigo-400 transition-colors"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`fixed inset-0 bg-neutral-800 bg-opacity-90 text-neutral-100 sm:bg-transparent sm:static sm:flex sm:space-x-6 transition-transform transform sm:transform-none ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:p-0 p-6 space-y-4 sm:space-y-0 text-center`}
      >
        <li>
          <Link
            href="about"
            className="text-base font-medium hover:text-indigo-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="contact"
            className="text-base font-medium hover:text-indigo-400 transition-colors"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="projects"
            className="text-base font-medium hover:text-indigo-400 transition-colors"
          >
            Projects
          </Link>
        </li>
       
      </ul>
    </nav>
  );
}

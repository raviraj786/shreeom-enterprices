"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

const logo = ''

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="bg-green-600 w-full h-7 text-red-800 text-center font-bold">

            Sesson 2025 * श्रीओम इंटरप्राइसेस 

        </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-28 items-center">
          
          <div className="flex-shrink-0">
            <Link href="/" className="text-5xl font-bold text-blue-600  ">
            <Image
                src="/logo.png" 
                alt="MyBrand Logo"
                width={120}
                height={120}
               
              />
            </Link>
          </div>


          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700  font-bold  hover:text-green-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700  font-bold    hover:text-green-600">
              About
            </Link>
            <Link href="/services" className="text-gray-700 font-bold   hover:text-green-600">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 font-bold  hover:text-green-600">
              Contact
            </Link>
          </nav>

        
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-1 bg-transparent shadow text-center ">
          <Link href="/" className="block text-gray-700  hover:text-green-600">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700  hover:text-green-600">
            About
          </Link>
          <Link href="/services" className="block text-gray-700  hover:text-green-600">
            Services
          </Link>
          <Link href="/contact" className="block text-gray-700  hover:text-green-600">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

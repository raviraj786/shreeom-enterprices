"use client";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="w-full mb-8">
          <Image
            src="/footer.png"
            alt="MyBrand Logo"
            width={1920}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

      

        <div className="border-t border-gray-700 my-6"></div>

       
        <div className="text-center text-sm">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

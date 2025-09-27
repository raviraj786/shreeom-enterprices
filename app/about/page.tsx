import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-green-700">About Us</h2>
        <p className="text-lg leading-relaxed mb-4">
          ShreeOm Enterprises is a trusted name in the field of modern
          irrigation and agricultural solutions. For years, we have been
          committed to providing farmers with innovative, cost-effective,
          and government-approved products that save water and increase crop
          productivity.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our product range includes drip irrigation systems, HDPE pipes,
          filters, valves, and high-quality fittings — all designed to ensure
          durability and efficiency in the toughest farming conditions.
        </p>
        <p className="text-lg leading-relaxed">
          With a dedicated team of experts, we not only supply premium products
          but also provide end-to-end services such as installation,
          maintenance, and subsidy consultation. At ShreeOm Enterprises,
          our mission is simple: to empower farmers with reliable solutions
          that conserve resources and ensure long-term growth.
        </p>
      </div>
      <div className="relative w-full h-[550px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/img9.jpeg"
          alt="About ShreeOm Enterprises"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}

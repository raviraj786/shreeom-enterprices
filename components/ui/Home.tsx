"use client";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/img1.jpeg"
            alt="Banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-6xl font-bold animate-bounce">
            Welcome to ShreeOm Enterprises
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Complete Irrigation & Agricultural Solutions
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:scale-105 transition"
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">About Us</h2>
          <p className="text-lg leading-relaxed">
            At ShreeOm Enterprises, we provide top-quality irrigation systems,
            drip pipes, filters, and fittings. With government-approved
            solutions, we help farmers grow smarter and save water effectively.
          </p>
        </div>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/img2.jpeg"
            alt="About"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="bg-green-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            Our Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Drip Irrigation",
                img: "/img2.jpeg",
              },
              {
                title: "HDPE Pipes",
                img: "/img4.jpeg",
              },
              {
                title: "Water Filters",
                img: "/img5.jpeg",
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-4 text-center"
              >
                <div className="relative w-full h-[200px] mb-4">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600 mt-2">
                  High quality {product.title} for long-lasting performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Installation",
              desc: "Expert setup of irrigation systems and fittings.",
            },
            {
              title: "Maintenance",
              desc: "Regular check-ups and repair services for reliability.",
            },
            {
              title: "Consulting",
              desc: "Guidance for government subsidy and farming needs.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-green-50 rounded-lg shadow-md p-6 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-2 text-lg">Call us at: +91 7020232863</p>
        <Link
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:scale-105 transition"
        >
          Contact Us
        </Link>
      </section>
      
    </div>
  );
}


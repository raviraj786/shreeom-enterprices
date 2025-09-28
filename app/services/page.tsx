import React from 'react'
import Image from "next/image";

export default function page() {
  return (
     <section className=" py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
                Our Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Drip Irrigation",
                    img: "/aa.jpeg",
                  },
                  {
                    title: "HDPE Pipes",
                    img: "/bb.jpeg",
                  },
                  {
                    title: "Water Filters",
                    img: "/h.jpeg",
                  },
                  {
                    title: "Water Filters",
                    img: "/dd.jpeg",
                  },
                  {
                    title: "Pipe",
                    img: "/ee.jpeg",
                  },
                  {
                    title: "Water pipe",
                    img: "/f.jpeg",
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
  )
}

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-green-700">About Us</h2>
        <p className="text-lg leading-relaxed mb-4">
          🌱 श्रीओम एंटरप्रायझेस 🌱 आधुनिक सिंचन व कृषी उपाययोजनांमध्ये
          विश्वासार्ह नाव
        </p>

        <p className="text-lg leading-relaxed mb-4">
          शेतकऱ्यांच्या प्रगतीसाठी आम्ही अनेक वर्षांपासून सातत्याने कार्यरत
          आहोत. नाविन्यपूर्ण, किफायतशीर आणि शासनमान्य उत्पादने देऊन पाणी बचत व
          उत्पादनक्षमता वाढवणे हेच आमचे ध्येय आहे.
        </p>
        <p className="text-lg leading-relaxed mb-4">आमची उत्पादने</p>

        <p className="text-lg leading-relaxed mb-4">✔️ ड्रिप इरिगेशन सिस्टीम</p>
        <p className="text-lg leading-relaxed mb-4">✔️ एचडीपीई पाईप्स</p>
        <p className="text-lg leading-relaxed mb-4">✔️ फिल्टर्स</p>
        <p className="text-lg leading-relaxed mb-4">✔️ वाल्व्ह</p>
        <p className="text-lg leading-relaxed mb-4">✔️ उच्च प्रतीची फिटिंग्ज</p>

        <p>सर्व उत्पादने – टिकाऊपणा आणि कार्यक्षमतेसाठी खास डिझाईन केलेली.</p>

        <p className="text-lg leading-relaxed">आमच्या सेवा</p>

        <p className="text-lg leading-relaxed">🔹 इंस्टॉलेशन</p>

        <p className="text-lg leading-relaxed">🔹 देखभाल</p>

        <p className="text-lg leading-relaxed">🔹 सबसिडी संदर्भातील सल्ला</p>

        <p className="text-lg leading-relaxed">
          श्रीओम एंटरप्रायझेस – शेतकऱ्यांचा विश्वास, शेतकऱ्यांची प्रगती.
        </p>
      </div>

      <div className="relative w-full h-[550px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/img9.jpeg"
          alt="About ShreeOm Enterprises"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}

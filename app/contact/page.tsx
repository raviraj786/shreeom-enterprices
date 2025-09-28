import React from 'react';

function ContactPage() {
  return (
    <section className="text-black py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

      <a
        href="tel:+917020232863"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
      >
        📞 Call Us: +91 7020232863
      </a>
    </section>
  );
}

export default ContactPage;

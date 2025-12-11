import React from "react";
import { motion } from "framer-motion";

export default function ABHomeRealty() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-black text-white p-6 text-center shadow-xl flex flex-col items-center gap-3">
        <img src="/mnt/data/1000046247.jpg" alt="AB Home Realty Logo" className="w-24 h-24 rounded-full shadow-lg" />
        <h1 className="text-4xl font-bold tracking-wide">AB Home Realty</h1>
        <p className="text-sm mt-1">Icon Tower, Bhumkar Chowk, Hinjawadi - Wakad, Pune</p>
      </header>

      {/* Hero Section */}
      <section className="h-[380px] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502005097973-6a7082348e28')" }}>
        Luxury Homes • Premium Living
      </section>

      {/* Services */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Flat Sell",
            "Flat Resale",
            "Flat Rent",
            "Plot Sell",
            "Plot Resale",
            "Mumbai–Pune Properties",
          ].map((service) => (
            <motion.div key={service} whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-lg font-medium">
              {service}
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          AB Home Realty अनेक वर्षांपासून Pune – PCMC – Mumbai परिसरात premium real estate सेवा देत आहे.
          आम्ही फक्त branded आणि top builders सोबतच काम करतो.
          आमची टीम तुमच्या budget नुसार योग्य location मध्ये 100% guarantee नी property शोधून देते.
          आम्ही अनेक top property listing platforms वर official registered आहोत.
        </p>
      </section>

      {/* Property Listings */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Available Properties</h2>
        <p className="text-gray-600 mb-6">(Future Admin Panel मधून properties auto-add होतील)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="h-40 bg-gray-300 rounded mb-4" />
            <h3 className="font-bold text-lg">Sample Property</h3>
            <p className="text-sm text-gray-500">Wakad, Pune</p>
            <p className="font-semibold mt-2">₹ 75,00,000</p>
          </div>
        </div>
      </section>

      {/* Admin Login */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Admin Login</h2>
        <p className="text-gray-600">(Feature Coming Soon – Secure dashboard for property uploads)</p>
        <button className="mt-4 px-6 py-3 bg-black text-white rounded-xl shadow-lg">Login</button>
      </section>

      {/* Contact */}
      <section className="p-10 text-center bg-gray-200">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-lg">📞 +91 92097 77061</p>
        <p className="text-lg">📧 abhomerealty96gmail.com</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://wa.me/919209777061" className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg">WhatsApp</a>
          <a href="https://www.instagram.com/abhome_realty" className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg">Instagram</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4 text-sm">
        © 2025 AB Home Realty • All Rights Reserved
      </footer>
    </div>
  );
}

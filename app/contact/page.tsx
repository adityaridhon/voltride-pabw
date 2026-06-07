import React from "react";
import Navbar from "@/components/usercomponents/Navbar";
import ContactHeroSection from "@/components/usercomponents/ContactHeroSection";
import ContactInfoCard from "@/components/usercomponents/ContactInfoCard";
import ContactFormCard from "@/components/usercomponents/ContactFormCard";
import Footer from "@/components/usercomponents/Footer";

export const metadata = {
  title: "Contact Us | VoltRide",
  description: "Get in touch with VoltRide elite concierge team.",
};

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white pb-24">
        {/* Batang Navigasi */}
        <Navbar />

        {/* Sesi Header Judul */}
        <ContactHeroSection />

        {/* Grid Tata Letak Utama (Kiri & Kanan) */}
        <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sisi Kiri (Info & Status Hub) - Memakan 5 Ruang dari total 12 Grid */}
          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>

          {/* Sisi Kanan (Form Transmisi) - Memakan 7 Ruang dari total 12 Grid */}
          <div className="lg:col-span-7">
            <ContactFormCard />
          </div>
        </section>
      </main>

      {/* Bagian Footer dipanggil di sini */}
      <Footer />
    </>
  );
}

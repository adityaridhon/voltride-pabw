// app/product/[id]/page.tsx
import React from "react";
import Navbar from "@/components/usercomponents/Navbar";
import Footer from "@/components/usercomponents/Footer";
import ProductHero from "@/components/usercomponents/ProductHero";
import ProductHighlights from "@/components/usercomponents/ProductHighlights";
import TechnicalSpecs from "@/components/usercomponents/TechnicalSpecs";
import BookingWidget from "@/components/usercomponents/BookingWidget";
import RelatedVehicles from "@/components/usercomponents/RelatedVehicles";

export const metadata = {
  title: "Etherea S9 | VoltRide",
  description:
    "Experience the silent revolution with the Etherea S9 performance sedan.",
};

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      {/* 1. Bagian Hero */}
      <ProductHero />

      {/* 2. Container Konten Utama */}
      <section className="px-6 lg:px-24 max-w-7xl mx-auto -mt-10 relative z-20 pb-24">
        {/* Highlight Cards (3 kotak atas) */}
        <ProductHighlights />

        {/* Layout Berdampingan: Kiri (Specs) & Kanan (Booking) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <TechnicalSpecs />

          <div className="lg:col-span-4 relative">
            <BookingWidget />
          </div>
        </div>

        {/* 3. Daftar Mobil Terkait */}
        <RelatedVehicles />
      </section>

      <Footer />
    </main>
  );
}

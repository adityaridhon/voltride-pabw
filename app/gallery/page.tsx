import React from "react";
import Navbar from "@/components/usercomponents/Navbar";
import Footer from "@/components/usercomponents/Footer";
import GalleryHeroSection from "@/components/usercomponents/GalleryHeroSection";
import GalleryGridSection from "@/components/usercomponents/GalleryGridSection";
import GalleryCtaSection from "@/components/usercomponents/GalleryCtaSection";

export const metadata = {
  title: "Gallery | VoltRide",
  description: "Explore the ethereal visual identity and fleet of VoltRide.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <GalleryHeroSection />
      <GalleryGridSection />
      <GalleryCtaSection />

      <Footer />
    </main>
  );
}

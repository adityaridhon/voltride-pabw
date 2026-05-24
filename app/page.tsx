import Navbar from "@/components/usercomponents/Navbar";
import HeroSection from "@/components/usercomponents/HeroSection";
import BrandLogos from "@/components/usercomponents/BrandLogos";
import FeaturesSection from "@/components/usercomponents/FeaturesSection";
import FleetSection from "@/components/usercomponents/FleetSection";
import Footer from "@/components/usercomponents/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      {/* Susunan halaman utama sesuai UI/UX Landing Page */}
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <FeaturesSection />
      <FleetSection />

      {/* Nanti di paling bawah tinggal ditambah Footer */}
      <Footer />
    </main>
  );
}

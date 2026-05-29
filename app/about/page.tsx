// Impor Navbar di bagian atas
import Navbar from "@/components/usercomponents/Navbar";
import AboutEthosSection from "@/components/usercomponents/AboutEthosSection";
import AboutJourneySection from "@/components/usercomponents/AboutJourneySection";
import AboutCtaSection from "@/components/usercomponents/AboutCtaSection";
import Footer from "@/components/usercomponents/Footer";

export default function AboutPage() {
  return (
    // Hapus pt-20/pt-24 jika kamu meletakkan Navbar di dalam sini agar tidak ada jarak kosong di atas Navbar
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Panggil Navbar di paling atas */}
      <Navbar />

      {/* Bagian 1: Our Ethos (Gambar Bertumpuk) */}
      <div className="pt-10 lg:pt-16">
        <AboutEthosSection />
      </div>

      {/* Bagian 2: The Journey (Timeline 2022-2024 & Mobil Biru) */}
      <AboutJourneySection />

      {/* Bagian 3: Call to Action (Background Hitam) */}
      <AboutCtaSection />

      {/* Footer Utama Website */}
      <Footer />
    </main>
  );
}

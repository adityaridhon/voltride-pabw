import Navbar from "@/components/usercomponents/Navbar";
import AboutEthosSection from "@/components/usercomponents/AboutEthosSection";
import AboutJourneySection from "@/components/usercomponents/AboutJourneySection";
import AboutCtaSection from "@/components/usercomponents/AboutCtaSection";
import Footer from "@/components/usercomponents/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      <div className="pt-10 lg:pt-16">
        <AboutEthosSection />
      </div>

      <AboutJourneySection />

      <AboutCtaSection />

      <Footer />
    </main>
  );
}

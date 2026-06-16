import Navbar from "@/components/usercomponents/Navbar";
import Footer from "@/components/usercomponents/Footer";

import ProductHero from "@/components/usercomponents/ProductHero";
import ProductHighlights from "@/components/usercomponents/ProductHighlights";
import TechnicalSpecs from "@/components/usercomponents/TechnicalSpecs";
import BookingWidget from "@/components/usercomponents/BookingWidget";

import { getMobilDetail } from "@/actions/mobil.actions";
import { notFound } from "next/navigation";


type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const result = await getMobilDetail(id);

  if (!result.success || !result.data) {
    return {
      title: "Mobil Tidak Ditemukan",
    };
  }

  return {
    title: `${result.data.name} | VoltRide`,
    description: result.data.brand ?? "VoltRide EV Rental",
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const result = await getMobilDetail(id);

  if (!result.success || !result.data) {
    notFound();
  }

  const mobil = result.data;

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <ProductHero mobil={mobil} />

      <section className="px-6 lg:px-24 max-w-7xl mx-auto -mt-10 relative z-30 pb-24">

        <ProductHighlights mobil={mobil} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">

          <TechnicalSpecs mobil={mobil} />

          <div className="lg:col-span-5 relative">
            <BookingWidget mobil={JSON.parse(JSON.stringify(mobil))} />
          </div>

        </div>
    

      </section>

      <Footer />
    </main>
  );
}
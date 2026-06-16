"use client";

import Image from "next/image";
import {Send} from "lucide-react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {MobilCard} from "@/app/product/product-catalog";
import type { CatalogMobil } from "@/app/product/product-catalog";  

const HeroSection = () => {
  const [message, setMessage] = useState("");
  const [aiMessage, setAiMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [responseText, setResponseText] = useState("");
  const router = useRouter();

  async function handleSubmit() {
  if (!message.trim()) return;
  
  setAiMessage("");
  setResults([]);

  setLoading(true);

  try {
    // fetsh ai
    const aiRes = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const aiData = await aiRes.json();

    if (!aiData.success && aiData.message) {
      setAiMessage(aiData.message);
      setResults([]);
      return;
    }

    // fetch tool
    const commandRes = await fetch("/api/command", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: aiData.action,
        params: aiData.params,
      }),
    });


    const commandData = await commandRes.json();
  
    setResults(commandData.data ?? []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    
  }

  const aiMobils: CatalogMobil[] = results.map((car) => ({
    id: car.id,
    name: car.name,
    brand: car.brand,
    model: car.model,
    color: car.color,
    plateNumber: car.plateNumber,
    pricePerDay: car.pricePerDay,
    status: car.status,
    imageUrl: car.imageUrl,
    mitraName: car.mitra?.companyName ?? "VoltRide Partner",
    mitraAddress: car.mitra?.address ?? "No address provided",
    bookings: [],
  }));
  return (

    <>
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 pt-28 pb-2 gap-10 max-w-7xl mx-auto w-full">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary">
          The Future of Travel
        </span>

        <h1 className="text-4xl lg:text-6xl font-heading font-extrabold text-neutral-900 leading-tight">
          Silent Luxury <br />
          <span className="text-secondary">Endless Energy</span>
        </h1>

        <p className="text-gray-500 max-w-md mx-auto lg:mx-0 text-sm lg:text-base leading-relaxed">
          Experience the raw precision of electric performance. High-end EV
          curated for those who seek sustainable elegance without compromise.
        </p>

        <div className="flex items-center bg-white p-2 rounded-3xl shadow-md border border-gray-100 max-w-md mx-auto lg:mx-0">
          <div className="flex items-center flex-1 px-3 gap-2">
           <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Cari mobil putih dibawah 300rb..."
              className="w-full bg-transparent outline-none text-sm text-gray-700"
            />
          </div>
          <Button size="lg" onClick={handleSubmit}>
            <Send className="w-4 h-4" />  
          </Button>
        </div>
        {aiMessage && (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-800">
              {aiMessage}
            </p>
          </div>
        )}
      </div>


      <div className="flex-1 relative w-full flex justify-center">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-lg aspect-[4/3] bg-neutral-800">
          <Image
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
            alt="VoltRide EV Car"
            fill
            unoptimized
            className="object-cover object-center opacity-90"
          />

          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20 max-w-[160px]">
            <div className="flex items-center gap-2 text-primary font-bold text-xs">
              <Zap className="w-4 h-4 fill-primary" />
              <span className="font-heading ">100% GREEN</span>
            </div>
            <p className="text-[10px] text-gray-500 mt-1 leading-tight">
              Powering your journey with renewable wind energy.
            </p>
          </div>
        </div>
      </div>
    </section>



    {aiMobils.length > 0 && (
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">
          AI Search Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiMobils.map((mobil) => (
            <MobilCard
              key={mobil.id}
              mobil={mobil}
              onViewDetails={() => {
                router.push(`/product`);
              }}
            />
          ))}
        </div>
      </section>
    )}
    </>
  );
};

export default HeroSection;

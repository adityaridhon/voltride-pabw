import React from "react";
import Image from "next/image";

const GalleryGridSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 md:row-span-2 relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80"
            alt="Lucid Air Sapphire"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
            <div>
              <h3 className="text-white font-heading font-bold text-2xl">
                Lucid Air Sapphire
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Clinical precision meeting soulful design.
              </p>
            </div>
            <div className="text-secondary"></div>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 relative h-[250px] rounded-2xl overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=800&q=80"
            alt="Model S Plaid"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-secondary text-[10px] font-bold tracking-widest uppercase">
              Performance
            </span>
            <h3 className="text-white font-heading font-bold text-lg mt-1">
              Model S Plaid
            </h3>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 relative h-[250px] rounded-2xl overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1669023030485-573b6a75ab64?auto=format&fit=crop&w=800&q=80"
            alt="Rivian R1T"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-secondary text-[10px] font-bold tracking-widest uppercase">
              Adventure
            </span>
            <h3 className="text-white font-heading font-bold text-lg mt-1">
              Rivian R1T
            </h3>
          </div>
        </div>

        <div className="md:col-span-1 relative h-[380px] rounded-2xl overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80"
            alt="Taycan GTS"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay Gradien untuk keterbacaan teks */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

          {/* Konten Teks di Dalam Gambar */}
          <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
            <div>
              <h3 className="text-white font-heading font-bold text-xl">
                Taycan GTS
              </h3>
              <p className="text-gray-300 text-xs mt-1 max-w-[200px]">
                The soul of a sports car, electrified.
              </p>
            </div>
            {/* Ikon Petir (dipertahankan dari desain asli) */}
            <div className="text-secondary text-xl pb-1">⚡</div>
          </div>
        </div>

        <div className="md:col-span-2 relative h-[380px] rounded-2xl overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
            alt="VoltRide Interior"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 w-full">
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">
              Cockpit Experience
            </span>
            <h3 className="text-white font-heading font-bold text-2xl mt-1">
              Intelligent Sanctuaries
            </h3>
            <p className="text-gray-300 text-sm mt-2 max-w-md">
              A seamless integration of sustainable materials and
              ultra-intuitive technology, designed for absolute driver serenity.
            </p>
          </div>
        </div>

        <div className="md:col-span-1 mt-6">
          <div className="relative h-[220px] rounded-2xl overflow-hidden mb-4">
            <Image
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80"
              alt="Charging"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-secondary text-[10px] font-bold tracking-widest uppercase">
            SUSTAINABILITY
          </span>
          <h3 className="text-neutral-900 font-heading font-bold text-base mt-1">
            Smart Charge Ecosystem
          </h3>
          <p className="text-gray-500 text-xs mt-2">
            Zero emission charging via our solar network.
          </p>
        </div>

        <div className="md:col-span-1 mt-6">
          <div className="relative h-[220px] rounded-2xl overflow-hidden mb-4">
            <Image
              src="https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&w=600&q=80"
              alt="Motor"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-secondary text-[10px] font-bold tracking-widest uppercase">
            PERFORMANCE
          </span>
          <h3 className="text-neutral-900 font-heading font-bold text-base mt-1">
            VoltRide Drive Core
          </h3>
          <p className="text-gray-500 text-xs mt-2">
            Dual-motor configuration for instant torque delivery.
          </p>
        </div>

        <div className="md:col-span-1 mt-6">
          <div className="relative h-[220px] rounded-2xl overflow-hidden mb-4">
            <Image
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80"
              alt="App"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-secondary text-[10px] font-bold tracking-widest uppercase">
            EXPERIENCE
          </span>
          <h3 className="text-neutral-900 font-heading font-bold text-base mt-1">
            Seamless Access
          </h3>
          <p className="text-gray-500 text-xs mt-2">
            Digital key integration with biometric security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryGridSection;

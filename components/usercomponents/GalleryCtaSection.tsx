import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GalleryCtaSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-20">
      <div className="bg-gray-50 rounded-[3rem] py-24 px-8 text-center border border-gray-100 shadow-sm">
        <span className="text-[#006A4B] font-heading font-bold text-xs tracking-widest uppercase">
          DRIVE THE FUTURE
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 mt-6 mb-10 leading-tight">
          Ready to experience <br className="hidden md:block" /> ethereal
          performance?
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/product">
            <Button
              size="lg"
            >
              View The Fleet
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryCtaSection;

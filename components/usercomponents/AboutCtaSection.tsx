import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutCtaSection = () => {
  return (
    <section className="bg-neutral-950 py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-5xl lg:text-5xl font-bold font-heading text-white leading-tight">
          Ready to drive the future? <br />
        </h2>

        <div className="pt-6">
          <Link href="/product">
            <Button
              size="lg"
              variant="gradient"
              className="px-10 py-6 text-lg rounded-md shadow-lg shadow-secondary/20"
            >
              View The Fleet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCtaSection;

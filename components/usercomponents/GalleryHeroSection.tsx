import React from "react";

const GalleryHeroSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-32 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <span className="text-primary font-heading font-bold text-xs tracking-widest uppercase">
            VISUAL IDENTITY
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold font-heading text-neutral-900 leading-tight">
            The Ethereal <br />
            <span className="font-heading text-secondary">
              Velocity.
            </span>
          </h1>
        </div>

        <div className="max-w-sm pb-3">
          <p className="text-gray-500 text-sm leading-relaxed font-heading">
            Witness the intersection of clinical precision and organic vitality.
            Our fleet represents the absolute pinnacle of sustainable
            performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeroSection;

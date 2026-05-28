import React from "react";
import Image from "next/image";

const timelineData = [
  {
    year: "2022",
    title: "The Prototype Phase",
    description:
      "i esting the feasibility of a grid-integrated Ep fleet with autonomous charging capabilities.",
  },
  {
    year: "2023",
    title: "Regional Expansion",
    description:
      "Launching In 12 major US hubs, powered exclusively by renewable energy agreements.",
  },
  {
    year: "2024",
    title: "KINETIC Ethereal Launch",
    description:
      "Bedefining luxury rental with our custom-designed app and premium conclerge service.",
  },
];

const AboutJourneySection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-20 flex flex-col-reverse lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2 space-y-10">
        <div>
          <span className="text-[#006949] font-heading font-bold text-xs tracking-widest uppercase">
            THE JOURNEY
          </span>

          <h1 className="text-5xl lg:text-5xl font-bold font-heading text-neutral-900 leading-tight">
            From a Garage in Palo Alto to Global <br />
            <span className="text-[#006949]">Ethereal Motion.</span>
          </h1>

          <p className="text-gray-600 font-heading text-sm leading-relaxed max-w-md">
            {
              "Founded by a collective of engineers and designers, KINETIC was built to prove that the highest tier of travel could be achieved without compromise."
            }
          </p>
        </div>

        <div className="space-y-8 mt-8">
          {timelineData.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="text-[#006949] font-heading font-bold text-lg w-12 shrink-0 pt-0.5">
                {item.year}
              </div>

              <div>
                <h3 className="text-lg font-bold text-neutral-900 font-heading">
                  {item.title}
                </h3>
                <p className="font-heading text-gray-500 mt-2 leading-relaxed max-w-sm text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative">
        <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
          <Image
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80"
            alt="VoltRide Blue EV"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-[#00C389]/30 rounded-3xl" />
      </div>
    </section>
  );
};

export default AboutJourneySection;

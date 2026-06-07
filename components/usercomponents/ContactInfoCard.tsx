import React from "react";
import { MapPin, Phone, AtSign } from "lucide-react";

const ContactInfoCard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 space-y-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#00C389]/10 text-[#006949] rounded-xl shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-neutral-900 font-heading font-bold text-base">
              Flagship Hub
            </h3>
            <p className="text-gray-500 font-heading text-sm mt-1 leading-relaxed">
              The Glass Tower, Level 42
              <br />
              Sustainable District, CA 90210
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#00C389]/10 text-[#006949] rounded-xl shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-neutral-900 font-heading font-bold text-base">
              Direct Line
            </h3>
            <p className="text-gray-500 font-heading text-sm mt-1 leading-relaxed">
              +1 (888) KINETIC
              <br />
              +1 (555) 012-3456
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#00C389]/10 text-[#006949] rounded-xl shrink-0">
            <AtSign className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-neutral-900 font-heading font-bold text-base">
              Digital Correspondence
            </h3>
            <p className="text-gray-500 font-heading text-sm mt-1 leading-relaxed break-all">
              concierge@kinetic.ethereal
              <br />
              fleet@kinetic.ethereal
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-64 w-full bg-neutral-200 rounded-3xl overflow-hidden border border-neutral-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19251.425830889584!2d116.6927660302975!3d-0.9687284027753552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6cf84eabacfc5%3A0x26245b39f2db91c6!2sLapangan%20Upacara%20Ibu%20Kota%20Republik%20Nusantara!5e1!3m2!1sen!2sid!4v1780484281203!5m2!1sen!2sid"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm flex items-center gap-2 border border-neutral-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006949] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006949]"></span>
          </span>
          <span className="text-[10px] font-heading font-bold text-neutral-800 tracking-wider uppercase">
            LIVE HUB STATUS: ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;

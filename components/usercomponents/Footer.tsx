import React from "react";

const Footer = () => {
  return (
    <footer className="w-full font-heading bg-[#F8F9FA] py-8 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-extrabold text-neutral-900 tracking-tight">
          Volt<span className="text-secondary">Ride</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-secondary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            Sustainability Report
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            Press Kit
          </a>
        </div>

        <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} VOLTRIDE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

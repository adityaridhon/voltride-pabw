"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Product", href: "#product" },
    { name: "Galery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="bg-white font-heading mx-10 h-18 z-50 px-10 py-5 flex justify-between items-center w-full mt-4 shadow-md">
        <h1 className="font-bold text-2xl">
          Volt<span className="text-primary">Ride</span>
        </h1>
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`inline-block px-4 py-2 cursor-pointer transition-colors ${
                isActive(link.href)
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <Button size="lg" variant="gradient">
          Get Started
        </Button>
      </nav>
    </>
  );
};

export default Navbar;

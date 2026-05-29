"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <>
      <nav className="bg-white font-heading z-50 px-6 md:px-12 lg:px-24 py-5 flex justify-between items-center w-full shadow-md sticky top-0">
        <Link href="/">
          <h1 className="font-bold text-2xl cursor-pointer">
            Volt<span className="text-primary">Ride</span>
          </h1>
        </Link>
        <ul>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <li
                className={`inline-block px-4 py-2 cursor-pointer transition-colors relative ${
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-primary rounded-full w-3/4"></div>
                )}
              </li>
            </Link>
          ))}
        </ul>
        <Button size="lg" variant="gradient">
          Login
        </Button>
      </nav>
    </>
  );
};

export default Navbar;

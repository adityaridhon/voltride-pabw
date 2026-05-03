import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white font-heading mx-10 h-18 z-50 px-10 py-5 flex justify-between items-center w-full mt-4 rounded-lg shadow-md">
        <h1 className="font-bold text-2xl">
          Volt<span className="text-primary">Ride</span>
        </h1>
        <ul>
          <li className="inline-block px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
            Home
          </li>
          <li className="inline-block px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
            About
          </li>
          <li className="inline-block px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
            Product
          </li>
          <li className="inline-block px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
            Galery
          </li>
          <li className="inline-block px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
            Contact
          </li>
        </ul>
        <Button size="lg">Get Started</Button>
      </nav>
    </>
  );
};

export default Navbar;

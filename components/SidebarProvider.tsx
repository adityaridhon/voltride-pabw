"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  setIsOpen: () => {},
  toggle: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Close sidebar on mobile screens by default
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }, []);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);

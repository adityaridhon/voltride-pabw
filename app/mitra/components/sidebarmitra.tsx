"use client";

import { LayoutDashboard, Car, DollarSign, HelpCircle, LogOut, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { useSidebar } from "@/components/SidebarProvider"

export default function SidebarMitra() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path
  const { isOpen, setIsOpen } = useSidebar()

  const linkClass = (path: string) => 
    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
      isActive(path)
        ? "bg-[#00C689] text-white shadow-md shadow-[#00C689]/20"
        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
    }`

  return (
    <>
      {/* Overlay on mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside className={`fixed inset-y-0 left-0 h-screen flex flex-col bg-white z-50 transition-all duration-300 lg:static ${
        isOpen 
          ? "translate-x-0 w-64 px-4 py-6 border-r" 
          : "-translate-x-full lg:translate-x-0 w-0 px-0 py-6 border-r-0 overflow-hidden"
      }`}>
        <div className="flex items-center justify-between mb-10 px-2 min-w-[224px]">
          <span className="text-2xl font-bold text-gray-900">
            Volt<span className="text-[#00C689]">Ride</span>
          </span>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>

      <nav className="flex-1 space-y-2 min-w-[224px]">
        <Link href="/mitra/dashboard" className={linkClass("/mitra/dashboard")}>
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link href="/mitra/fleet" className={linkClass("/mitra/fleet")}>
          <Car size={20} />
          Fleet Management
        </Link>
        <Link href="/mitra/earnings" className={linkClass("/mitra/earnings")}>
          <DollarSign size={20} />
          Earnings
        </Link>
      </nav>

      <div className="mt-auto min-w-[224px]">
        <h4 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Support</h4>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors">
          <HelpCircle size={20} />
          Help Center
        </Link>
        <button 
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
    </>
  )
}
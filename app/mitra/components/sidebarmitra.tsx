"use client";

import { LayoutDashboard, Car, DollarSign, HelpCircle, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"

export default function SidebarMitra() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  const linkClass = (path: string) => 
    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
      isActive(path)
        ? "bg-[#00C689] text-white shadow-md shadow-[#00C689]/20"
        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
    }`

  return (
    <aside className="w-64 border-r bg-white h-screen flex flex-col px-4 py-6">
      <div className="flex items-center gap-2 mb-10 px-2">
        <span className="text-2xl font-bold text-gray-900">
          Volt<span className="text-[#00C689]">Ride</span>
        </span>
      </div>

      <nav className="flex-1 space-y-2">
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

      <div className="mt-auto">
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
  )
}
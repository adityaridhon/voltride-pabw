"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { 
  LayoutDashboard, 
  Handshake, 
  Users, 
  HelpCircle, 
  LogOut,
  X
} from "lucide-react";
import { useSidebar } from "@/components/SidebarProvider";

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebar();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
      isActive(path) 
        ? "bg-[#00C689] text-white shadow-md shadow-[#00C689]/20" 
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    }`;

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
          ? "translate-x-0 w-64 px-4 py-6 border-r border-gray-100" 
          : "-translate-x-full lg:translate-x-0 w-0 px-0 py-6 border-r-0 overflow-hidden"
      }`}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 mt-4 mb-4 min-w-[224px]">
          <span className="text-2xl font-bold text-slate-800">
            Volt<span className="text-emerald-500">Ride</span>
          </span>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 px-4 space-y-1 min-w-[224px]">
          <Link href="/admin/dashboard" className={linkClass("/admin/dashboard")}>
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium text-sm">Dashboard</span>
          </Link>
          <Link href="/admin/partners" className={linkClass("/admin/partners")}>
            <Handshake className="w-5 h-5" />
            <span className="font-medium text-sm">Partner Management</span>
          </Link>
          <Link href="/admin/users" className={linkClass("/admin/users")}>
            <Users className="w-5 h-5" />
            <span className="font-medium text-sm">Users Management</span>
          </Link>
        </div>

        {/* Support Navigation */}
        <div className="px-4 pb-8 space-y-1 min-w-[224px]">
          <p className="px-4 text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Support</p>
          <Link 
            href="/help" 
            className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium text-sm">Help Center</span>
          </Link>
          <button 
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
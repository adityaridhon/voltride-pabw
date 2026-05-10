"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { 
  LayoutDashboard, 
  Handshake, 
  Users, 
  HelpCircle, 
  LogOut 
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
      isActive(path) 
        ? "bg-emerald-500 text-white shadow-md shadow-emerald-200" 
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    }`;

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 mt-4 mb-4">
        <span className="text-2xl font-bold text-slate-800">
          Volt<span className="text-emerald-500">Ride</span>
        </span>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-4 space-y-1">
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
      <div className="px-4 pb-8 space-y-1">
        <p className="px-4 text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Support</p>
        <Link 
          href="/help" 
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium text-sm">Help Center</span>
        </Link>
        <button 
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
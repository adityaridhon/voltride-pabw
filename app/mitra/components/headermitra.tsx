"use client";

import { Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSidebar } from "@/components/SidebarProvider"
import { useSession } from "next-auth/react"

export default function HeaderMitra({ title = "Dashboard Overview" }: { title?: string }) {
  const { toggle } = useSidebar()
  const { data: session } = useSession()

  const userName = session?.user?.name || "Mitra"
  const initials = userName.slice(0, 2).toUpperCase()

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white h-[72px] shrink-0">
      <div className="flex items-center gap-4">
        <button onClick={toggle} className="text-gray-500 hover:text-gray-900">
          <Menu size={20} />
        </button>
        <div className="h-5 w-px bg-gray-300"></div>
        <h1 className="text-sm font-semibold text-gray-800">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-900 leading-none">{userName}</p>
          <p className="text-xs text-gray-500 mt-1">Mitra</p>
        </div>
        <Avatar className="h-9 w-9">
          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${userName}`} alt={userName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
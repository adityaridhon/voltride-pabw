import { Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HeaderMitra({ title = "Dashboard Overview" }: { title?: string }) {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white h-[72px] shrink-0">
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-900">
          <Menu size={20} />
        </button>
        <div className="h-5 w-px bg-gray-300"></div>
        <h1 className="text-sm font-semibold text-gray-800">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-900 leading-none">Andre</p>
          <p className="text-xs text-gray-500 mt-1">Admin</p>
        </div>
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@andre" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeaderAdmin({ title = "Dashboard Admin" }: { title?: string }) {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-500">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-slate-800 border-l-2 border-slate-200 pl-4">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-800 leading-tight">Andre</p>
          <p className="text-xs text-slate-500">Admin</p>
        </div>
        <Avatar className="w-10 h-10 border border-slate-100">
          <AvatarImage src="https://github.com/shadcn.png" alt="@admin" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
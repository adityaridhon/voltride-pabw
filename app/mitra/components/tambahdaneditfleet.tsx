"use client";

import { ArrowLeft, Image as ImageIcon, Info, CalendarDays, BarChart3, Upload, ImagePlus, CheckCircle2, Wrench } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SidebarMitra from "@/app/mitra/components/sidebarmitra";
import HeaderMitra from "@/app/mitra/components/headermitra";

interface Props {
  mode: "add" | "edit";
}

export default function TambahDanEditFleet({ mode }: Props) {
  const isAdd = mode === "add";
  const title = isAdd ? "Add Fleet" : "Edit Fleet";
  const submitText = isAdd ? "Add Fleet" : "Save Changes";

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <SidebarMitra />
      
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <HeaderMitra title={title} />
        
        <main className="flex-1 overflow-y-auto p-10 pb-32">
          
          <div className="flex items-center gap-4 mb-8">
            <Link href="/mitra/fleet" className="text-slate-500 hover:text-slate-800 transition-colors bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">{title}</h1>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Left Column */}
        <div className="w-full lg:w-[400px] flex flex-col gap-6">
          
          {/* Fleet Image Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <ImagePlus className="text-emerald-700" size={20} />
              <h2 className="text-lg font-bold text-slate-800">Fleet Image</h2>
            </div>
            
            <div className="border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 flex flex-col items-center justify-center py-12 mb-4 hover:bg-slate-100 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-4 text-slate-500">
                <Upload size={20} />
              </div>
              <p className="font-bold text-slate-800">Click to Upload</p>
              <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                  <ImageIcon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Status & Price Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays className="text-emerald-700" size={20} />
              <h2 className="text-lg font-bold text-slate-800">Status & Price</h2>
            </div>

            <div className="mb-6">
              <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-3">Initial Status</label>
              <div className="grid grid-cols-2 gap-3">
                <div className="border-2 border-emerald-600 bg-emerald-50 text-slate-800 font-bold rounded-xl py-3 flex flex-col items-center justify-center gap-1 cursor-pointer">
                  <CheckCircle2 size={18} className="text-slate-600" />
                  <span className="text-sm">Available</span>
                </div>
                <div className="border border-slate-200 bg-slate-100 text-slate-800 font-bold rounded-xl py-3 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-slate-200 transition-colors">
                  <Wrench size={18} className="text-slate-600" />
                  <span className="text-sm">Maintenance</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Rental Price Per Day</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500 text-sm">IDR</span>
                <input 
                  type="text" 
                  defaultValue={isAdd ? "" : "1.500.000"} 
                  placeholder={isAdd ? "0" : ""}
                  className="w-full bg-slate-100 rounded-xl py-3.5 pl-12 pr-4 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Basic Information Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-8">
              <Info className="text-emerald-700" size={20} />
              <h2 className="text-lg font-bold text-slate-800">Basic Information</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Vehicle Name / Model</label>
                <input 
                  type="text" 
                  defaultValue={isAdd ? "" : "Ethereal GT-S"}
                  placeholder="Tesla, Wuling...." 
                  className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Vehicle Color</label>
                <input 
                  type="text" 
                  defaultValue={isAdd ? "" : "Blue"}
                  placeholder="Blue, Red.." 
                  className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Plate Number</label>
                  <input 
                    type="text" 
                    defaultValue={isAdd ? "" : "B 1234 ABC"}
                    placeholder="B 1234 ABC" 
                    className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Vehicle Type</label>
                  <div className="relative">
                    <select className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                      <option>SUV</option>
                      <option>Sedan</option>
                      <option>Hatchback</option>
                      <option>Minivan</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specs Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-8">
              <BarChart3 className="text-emerald-700" size={20} />
              <h2 className="text-lg font-bold text-slate-800">Technical Specs</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Battery Capacity (KWH)</label>
                <input 
                  type="text" 
                  defaultValue={isAdd ? "" : "75"}
                  placeholder="Contoh: 75" 
                  className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Range (Kilometers)</label>
                <input 
                  type="text" 
                  defaultValue={isAdd ? "" : "450"}
                  placeholder="Contoh: 450" 
                  className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Power / HP</label>
                <input 
                  type="text" 
                  defaultValue={isAdd ? "" : "320"}
                  placeholder="Contoh: 320" 
                  className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>
          </div>

        </div>

      </div>

        </main>

        {/* Floating Action Buttons */}
        <div className="absolute bottom-0 right-0 left-0 bg-white/80 backdrop-blur-sm border-t border-slate-100 p-4 flex justify-end gap-4 px-12 z-20">
          <Link href="/mitra/fleet">
            <Button variant="outline" className="px-8 py-6 rounded-xl font-bold border-slate-200 text-slate-700 hover:bg-slate-50">
              Cancel
            </Button>
          </Link>
          <Button className="px-8 py-6 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white">
            {submitText}
          </Button>
        </div>

      </div>
    </div>
  );
}

"use client";

import { ArrowLeft, Image as ImageIcon, Info, CalendarDays, BarChart3, Upload, ImagePlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SidebarMitra from "@/app/mitra/components/sidebarmitra";
import HeaderMitra from "@/app/mitra/components/headermitra";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createArmadaSchema } from "@/lib/validations/master";
import type { CreateArmadaInput } from "@/lib/validations/master";
import { createArmada, updateArmada, getArmadaById } from "@/actions/armada.actions";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {Input} from "@/components/ui/input";
import { uploadImage } from "@/actions/upload.actions";

interface Props {
  mode: "create" | "edit";
  carId?: string;
  mitraId: string;
}

export default function TambahDanEditFleet({ mode, carId, mitraId }: Props) {
  const isCreate = mode === "create";
  const title = isCreate ? "Add Fleet" : "Edit Fleet";
  const submitText = isCreate ? "Add Fleet" : "Save Changes";
  const router = useRouter();
  const [loadingCar, setLoadingCar] = useState(!isCreate);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>();
  
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImageFile(file);

    setPreviewUrl(
      URL.createObjectURL(file)
    );
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateArmadaInput>({
    resolver: zodResolver(createArmadaSchema) as any,
  defaultValues: {
    mitraId,
    namaKendaraan: "",
    merek: "",
    model: "",
    color: "",
    nomorPlat: "",
    hargaPerHari: 0,
    foto: "",
    statusKetersediaan: "AVAILABLE",
    range: 0,
    acceleration: 0,
    battery: 0,
    chargingTime: "",
    seat: 4,
  },
  });


  useEffect(() => {
    if (!isCreate && carId) {
      getArmadaById(carId).then((res) => {
        if (res && res.success && res.data) {
          const car = res.data;
         reset({
          mitraId: car.mitraId,
          namaKendaraan: car.name,
          merek: car.brand || "",
          model: car.model || "",
          color: car.color || "",
          nomorPlat: car.plateNumber,
          hargaPerHari: car.pricePerDay,
          foto: car.imageUrl || "",

          range: car.range || 0,
          acceleration: car.acceleration || 0,
          battery: car.battery || 0,
          chargingTime: car.chargingTime || "",
          seat: car.seat || 4,

          statusKetersediaan:
            car.status === "ACTIVE"
              ? "AVAILABLE"
              : car.status === "MAINTENANCE"
              ? "MAINTENANCE"
              : "INACTIVE",
        });
        }
        setLoadingCar(false);
      });
    }
  }, [isCreate, carId, reset]);

  const onSubmit = async (data: CreateArmadaInput) => {
    try {
      let imageUrl = data.foto;

      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);

        imageUrl = await uploadImage(formData);

      }

      if (isCreate) {
        const res = await createArmada({
          ...data,
          foto: imageUrl,
        });


        if (res && "error" in res) {
          throw new Error(res.error as string);
        }
      } else {
        const res = await updateArmada({
          id: carId!,
          namaKendaraan: data.namaKendaraan,
          merek: data.merek,
          model: data.model,
          color: data.color,
          nomorPlat: data.nomorPlat,
          hargaPerHari: data.hargaPerHari,
          statusKetersediaan: data.statusKetersediaan,
          foto: imageUrl,
        });

        console.log("UPDATE RESPONSE:", res);


        if (res && "error" in res) {
          throw new Error(res.error as string);
        }
      }
      router.replace("/mitra/fleet");
    } catch (err: any) {
      alert(err.message || "An error occurred while saving the fleet.");
    }
  };


  if (loadingCar) {
    return (
      <div className="flex h-screen bg-[#F8FAFC]">
        <SidebarMitra />
        <div className="flex-1 flex flex-col overflow-hidden">
          <HeaderMitra title={title} />
          <main className="flex-1 flex items-center justify-center">
            <p className="text-slate-500 font-medium">Loading fleet data...</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <SidebarMitra />
      
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <HeaderMitra title={title} />
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-10 pb-32">
          
          <div className="flex items-center gap-4 mb-8 justify-between w-full">
            <Link href="/mitra/fleet" className="text-slate-500 hover:text-slate-800 transition-colors bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">{title}</h1>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
            
            {/* Left Column */}
            <div className="w-full lg:w-100 flex flex-col gap-6">
              
              {/* Fleet Image Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <ImagePlus className="text-emerald-700" size={20} />
                  <h2 className="text-lg font-bold text-slate-800">Fleet Image</h2>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-1">Image URL</label>
                 <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];

                      if (!file) return;

                      setImageFile(file);
                    }}
                  />
                  {errors.foto && <p className="text-red-500 text-xs">{errors.foto.message}</p>}
                  
                  {previewUrl && (
                    <img
                      src={previewUrl}
                      alt=""
                      className="h-40 w-full rounded-lg object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Status & Price Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <CalendarDays className="text-emerald-700" size={20} />
                  <h2 className="text-lg font-bold text-slate-800">Status & Price</h2>
                </div>

                <div className="mb-6">
                  <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Status</label>
                  <div className="relative">
                    <select 
                      {...register("statusKetersediaan")} 
                      className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm"
                    >
                      <option value="AVAILABLE">Available</option>
                      <option value="INACTIVE">Inactive</option>
                      <option value="MAINTENANCE">Maintenance</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  {errors.statusKetersediaan && <p className="text-red-500 text-xs mt-1">{errors.statusKetersediaan.message}</p>}
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Rental Price Per Day</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500 text-sm">IDR</span>
                    <input 
                      type="number" 
                      {...register("hargaPerHari", { valueAsNumber: true })}
                      placeholder="0"
                      className="w-full bg-slate-100 rounded-xl py-3.5 pl-12 pr-4 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  {errors.hargaPerHari && <p className="text-red-500 text-xs mt-1">{errors.hargaPerHari.message}</p>}
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
                    <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Vehicle Name</label>
                    <input 
                      type="text" 
                      {...register("namaKendaraan")}
                      placeholder="Ethereal GT-S" 
                      className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                    {errors.namaKendaraan && <p className="text-red-500 text-xs mt-1">{errors.namaKendaraan.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Brand</label>
                      <input 
                        type="text" 
                        {...register("merek")}
                        placeholder="Tesla" 
                        className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                      {errors.merek && <p className="text-red-500 text-xs mt-1">{errors.merek.message}</p>}
                    </div>

                    <div>
                      <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Model</label>
                      <input 
                        type="text" 
                        {...register("model")}
                        placeholder="Model S" 
                        className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                      {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Plate Number</label>
                      <input 
                        type="text" 
                        {...register("nomorPlat")}
                        placeholder="B 1234 ABC" 
                        className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                      {errors.nomorPlat && <p className="text-red-500 text-xs mt-1">{errors.nomorPlat.message}</p>}
                    </div>
                    <div>
                      <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">Color</label>
                      <input 
                        type="text" 
                        {...register("color")}
                        placeholder="Red" 
                        className="w-full bg-slate-100 rounded-xl py-3.5 px-4 font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                      {errors.color && <p className="text-red-500 text-xs mt-1">{errors.color.message}</p>}
                    </div>

                  </div>
                </div>
              </div>

              {/* EV Technical */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-8">
                  <BarChart3 className="text-emerald-700" size={20} />
                  <h2 className="text-lg font-bold text-slate-800">
                    EV Specifications
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-6">

                  <div>
                    <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">
                      Battery (kWh)
                    </label>

                    <input
                      type="number"
                      step="0.1"
                      {...register("battery", {
                        valueAsNumber: true,
                      })}
                      placeholder="78"
                      className="w-full bg-slate-100 rounded-xl py-3.5 px-4"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">
                      Range (km)
                    </label>

                    <input
                      type="number"
                      {...register("range", {
                        valueAsNumber: true,
                      })}
                      placeholder="500"
                      className="w-full bg-slate-100 rounded-xl py-3.5 px-4"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">
                      Acceleration (0-100)
                    </label>

                    <input
                      type="number"
                      step="0.1"
                      {...register("acceleration", {
                        valueAsNumber: true,
                      })}
                      placeholder="5.2"
                      className="w-full bg-slate-100 rounded-xl py-3.5 px-4"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">
                      Charging Time
                    </label>

                    <input
                      type="text"
                      {...register("chargingTime")}
                      placeholder="120 Minutes"
                      className="w-full bg-slate-100 rounded-xl py-3.5 px-4"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block mb-2">
                      Seat Capacity
                    </label>

                    <input
                      type="number"
                      {...register("seat", {
                        valueAsNumber: true,
                      })}
                      placeholder="5"
                      className="w-full bg-slate-100 rounded-xl py-3.5 px-4"
                    />
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* Floating Action Buttons */}
          <div className="absolute bottom-0 right-0 left-0 bg-white/80 backdrop-blur-sm border-t border-slate-100 p-4 flex justify-end gap-4 px-12 z-20">
            <Link href="/mitra/fleet">
              <Button type="button" variant="outline" size="lg">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={isSubmitting} size="lg">
              {isSubmitting ? "Saving..." : submitText}
            </Button>
          </div>

        </form>

      </div>
    </div>
  );
}

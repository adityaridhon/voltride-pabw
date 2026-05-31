"use client";

import * as React from "react";
import Image from "next/image";
import {
  CalendarDays,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Search,
  Send,
  Zap,
  Gauge,
} from "lucide-react";
import { useActionState } from "react";
import { createBookingAction } from "@/actions/booking.actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";


type MobilStatus = "ACTIVE" | "INACTIVE" | "MAINTENANCE";

export type CatalogMobil = {
  id: string;
  name: string;
  brand: string | null;
  model: string | null;
  color: string | null;
  plateNumber: string;
  pricePerDay: number;
  totalUnit: number;
  availableUnit: number;
  status: MobilStatus;
  imageUrl: string | null;
  mitraName: string | null;
  mitraAddress: string | null;
  bookings: Array<{
    startDate: string;
    endDate: string;
    status: "PENDING" | "PAID" | "CANCELLED" | "COMPLETED" | "FAILED";
  }>;
};

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});


// --- Sidebar Filter ---
function Sidebar({
  query,
  setQuery,
  maxPrice,
  setMaxPrice,
  brands,
  selectedBrands,
  setSelectedBrands,
  colors,
  selectedColors,
  setSelectedColors,
}: {
  query: string;
  setQuery: (v: string) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  brands: string[];
  selectedBrands: string[];
  setSelectedBrands: (v: string[]) => void;
  colors: string[];
  selectedColors: string[];
  setSelectedColors: (v: string[]) => void;
}) {
  const MAX = 5000000;

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 gap-7 font-sans">
      {/* Search models... */}
      <label className="relative block">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari tipe, merek, model..."
          className="h-11 w-full rounded-2xl bg-zinc-100 pl-10 pr-4 text-[14px] text-zinc-800 placeholder-zinc-400 outline-none transition focus:bg-zinc-200/70"
        />
      </label>

      {/* PRICE RANGE divider */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-800 shrink-0">Price Range</span>
          <div className="h-px bg-zinc-100 w-full" />
        </div>
        <input
          type="range"
          min={0}
          max={MAX}
          step={50000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[#00b488] cursor-pointer mb-2"
        />
        <div className="flex items-center justify-between text-xs font-semibold text-zinc-600 mt-1">
          <span>Rp 0</span>
          <span>{formatter.format(maxPrice)}</span>
        </div>
      </div>

      {/* MEREK divider */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-800 shrink-0">Merek</span>
          <div className="h-px bg-zinc-100 w-full" />
        </div>
        {brands.length === 0 ? (
          <p className="text-xs text-zinc-400">Tidak ada merek tersedia</p>
        ) : (
          <ul className="space-y-3.5 text-sm text-zinc-700">
            {brands.map((brand) => {
              const isSelected = selectedBrands.includes(brand);
              return (
                <li
                  key={brand}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                    } else {
                      setSelectedBrands([...selectedBrands, brand]);
                    }
                  }}
                  className="flex items-center gap-3 cursor-pointer select-none group/item"
                >
                  <span className={cn(
                    "size-4.5 rounded-[5px] border inline-flex items-center justify-center transition-all duration-200",
                    isSelected
                      ? "border-[#00b488] bg-[#00b488] text-white shadow-sm"
                      : "border-zinc-300 bg-white group-hover/item:border-zinc-400"
                  )}>
                    <Check className={cn("size-3.5 transition-all duration-200 stroke-[3px]", isSelected ? "opacity-100 scale-100" : "opacity-0 scale-75")} />
                  </span>
                  <span className={cn(
                    "transition-colors duration-200 text-[14px]",
                    isSelected
                      ? "text-zinc-900 font-bold"
                      : "text-zinc-500 group-hover/item:text-zinc-800 font-medium"
                  )}>
                    {brand}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* WARNA divider */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-800 shrink-0">Warna</span>
          <div className="h-px bg-zinc-100 w-full" />
        </div>
        {colors.length === 0 ? (
          <p className="text-xs text-zinc-400">Tidak ada pilihan warna</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => {
              const isSelected = selectedColors.includes(color);
              return (
                <span
                  key={color}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedColors(selectedColors.filter((c) => c !== color));
                    } else {
                      setSelectedColors([...selectedColors, color]);
                    }
                  }}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 select-none cursor-pointer",
                    isSelected
                      ? "border-[#00b488] bg-[#00b488] text-white shadow-sm shadow-emerald-500/10"
                      : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:bg-zinc-50"
                  )}
                >
                  {color}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}

// --- Car Card ---
function MobilCard({
  mobil,
  onViewDetails,
}: {
  mobil: CatalogMobil;
  onViewDetails: () => void;
}) {
  const availability = getAvailabilityStatus(mobil);
  const isAvailable = availability === "AVAILABLE";

  return (
    <div className="group rounded-[32px] border border-zinc-100 bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[1.6] bg-zinc-50 overflow-hidden">
        {mobil.imageUrl ? (
          <Image
            src={mobil.imageUrl}
            alt={mobil.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-linear-to-br from-zinc-50 to-zinc-100/80 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] bg-size-[16px_16px] opacity-40" />
            <div className="relative flex flex-col items-center gap-2">
              <Car className="size-12 text-zinc-300/80 stroke-[1.5]" />
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">No Image Available</span>
            </div>
          </div>
        )}
        {/* Badge top-right */}
        <div className="absolute right-4 top-4">
          {isAvailable ? (
            <span className="rounded-full bg-white/95 backdrop-blur px-3.5 py-1.5 text-[11px] font-bold text-[#00b488] shadow-sm tracking-wide">
              Available Now
            </span>
          ) : (
            <span className="rounded-full bg-red-500 px-3.5 py-1.5 text-[11px] font-bold text-white shadow-sm tracking-wide">
              {availability === "MAINTENANCE" ? "Maintenance" : availability === "FULL" ? "Full" : "Inactive"}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Name + Brand + Price */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-[20px] font-bold text-zinc-900 tracking-tight leading-none mb-2">
              {mobil.name}
            </h3>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
              {mobil.brand ?? "VoltRide Partner"}
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-extrabold text-[#00b488]">
              {formatter.format(mobil.pricePerDay)}
            </span>
            <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">
              / HARI
            </p>
          </div>
        </div>

        {/* Availability Bar */}
        <div className="mb-5">
          <div className="flex items-center justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">
            <span>Ketersediaan Unit</span>
            <span className="text-xs font-bold text-zinc-700 normal-case tracking-normal">{mobil.availableUnit}/{mobil.totalUnit} unit</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-zinc-100">
            <div
              className="h-1.5 rounded-full bg-[#00b488] transition-all duration-500"
              style={{ width: `${(mobil.availableUnit / Math.max(mobil.totalUnit, 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Spec Badges Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Spec 1: Merek */}
          {mobil.brand && (
            <div className="flex items-center gap-2.5 rounded-2xl bg-zinc-50 px-3.5 py-2.5">
              <Car className="size-3.5 text-[#00b488] shrink-0" />
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider leading-none mb-0.5">Merek</p>
                <p className="text-[11px] font-bold text-zinc-800 leading-tight truncate">{mobil.brand}</p>
              </div>
            </div>
          )}
          {/* Spec 2: Model */}
          {mobil.model && (
            <div className="flex items-center gap-2.5 rounded-2xl bg-zinc-50 px-3.5 py-2.5">
              <Gauge className="size-3.5 text-[#00b488] shrink-0" />
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider leading-none mb-0.5">Model</p>
                <p className="text-[11px] font-bold text-zinc-800 leading-tight truncate">{mobil.model}</p>
              </div>
            </div>
          )}
          {/* Spec 3: Lokasi */}
          {mobil.mitraAddress && (
            <div className="col-span-2 flex items-center gap-2.5 rounded-2xl bg-zinc-50 px-3.5 py-2.5">
              <Zap className="size-3.5 text-[#00b488] shrink-0" />
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider leading-none mb-0.5">Lokasi</p>
                <p className="text-[11px] font-bold text-zinc-800 leading-tight truncate">{mobil.mitraAddress}</p>
              </div>
            </div>
          )}
        </div>

        {/* Booking Button */}
        <button
          onClick={onViewDetails}
          disabled={!isAvailable}
          className="w-full h-11 rounded-2xl bg-zinc-100 text-sm font-semibold text-zinc-700 hover:bg-[#e4e4e7] hover:text-zinc-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Booking Now
        </button>
      </div>
    </div>
  );
}


// --- Booking Modal ---
function BookingModal({
  mobil,
  onClose,
}: {
  mobil: CatalogMobil;
  onClose: () => void;
}) {
  const [month, setMonth] = React.useState(() => new Date());
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [state, formAction, isPending] = useActionState(createBookingAction, { ok: false, message: "" });
  const formRef = React.useRef<HTMLFormElement>(null);

  const bookedDates = React.useMemo(() => getBookedDateMap(mobil), [mobil]);
  const totalDays = startDate && endDate ? getTotalDays(startDate, endDate) : 0;
  const totalPrice = totalDays > 0 ? mobil.pricePerDay * totalDays : 0;

  const nextSectionRef = React.useRef<HTMLDivElement>(null);
  const messageRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    if (startDate && endDate) {
      const timer = setTimeout(() => {
        nextSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [startDate, endDate]);

  React.useEffect(() => {
    if (state.message) {
      const timer = setTimeout(() => {
        messageRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [state.message]);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary">
            <CalendarDays className="size-5" />
            <span className="text-sm font-medium">Kalender Booking</span>
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight">{mobil.name}</DialogTitle>
          <DialogDescription>
            Pilih rentang tanggal pemakaian.
          </DialogDescription>
        </DialogHeader>

        <CalendarGrid
          month={month}
          bookedDates={bookedDates}
          startDate={startDate}
          endDate={endDate}
          onPrevious={() => setMonth((v) => new Date(v.getFullYear(), v.getMonth() - 1, 1))}
          onNext={() => setMonth((v) => new Date(v.getFullYear(), v.getMonth() + 1, 1))}
          onDateClick={(dateKey) => {
            if (isDateBooked(dateKey, bookedDates)) return;
            if (!startDate || (startDate && endDate) || dateKey < startDate) {
              setStartDate(dateKey);
              setEndDate("");
              return;
            }

            if (rangeHasBookedDate(startDate, dateKey, bookedDates)) return;
            setEndDate(dateKey);
          }}
        />

        <div ref={nextSectionRef} className="grid gap-2 rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-sm">
          <InfoRow label="Tanggal mulai" value={startDate ? dateFormatter.format(parseDate(startDate)) : "Belum dipilih"} />
          <InfoRow label="Tanggal selesai" value={endDate ? dateFormatter.format(parseDate(endDate)) : "Belum dipilih"} />
          <InfoRow label="Durasi" value={totalDays > 0 ? `${totalDays} hari` : "-"} />
          <InfoRow label="Total" value={totalPrice > 0 ? formatter.format(totalPrice) : "-"} strong />
        </div>

        <form ref={formRef} action={formAction} className="space-y-3">
          <input type="hidden" name="mobilId" value={mobil.id} />
          <input type="hidden" name="startDate" value={startDate} />
          <input type="hidden" name="endDate" value={endDate} />
          <Button
            type="button"
            className="w-full"
            size="lg"
            disabled={!startDate || !endDate || isPending}
            onClick={() => setConfirmOpen(true)}
          >
            <Send className="size-4" />
            {isPending ? "Memproses..." : "Kirim Pemesanan"}
          </Button>
          {state.message && (
            <p
              ref={messageRef}
              className={cn("rounded-xl px-3 py-2 text-sm animate-in fade-in slide-in-from-top-1 duration-200", state.ok ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700")}
            >
              {state.message}
            </p>
          )}
        </form>

        <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
          <DialogContent className="max-w-sm" showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Yakin dengan pilihan anda?</DialogTitle>
              <DialogDescription>
                Saldo akan langsung dipotong sebesar {totalPrice > 0 ? formatter.format(totalPrice) : "-"} setelah Anda menekan OK.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setConfirmOpen(false)} disabled={isPending}>
                Batal
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setConfirmOpen(false);
                  formRef.current?.requestSubmit();
                }}
                disabled={isPending}
              >
                OK
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}

// --- Main Export ---
export default function ProductCatalog({ mobils }: { mobils: CatalogMobil[] }) {
  const [query, setQuery] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState(5000000);
  const [showAvailableOnly, setShowAvailableOnly] = React.useState(false);
  const [selectedMobil, setSelectedMobil] = React.useState<CatalogMobil | null>(null);
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [pagination, setPagination] = React.useState({ filterKey: "", visibleCount: 4 });
  const filterKey = [
    query,
    maxPrice,
    showAvailableOnly,
    selectedBrands.join("|"),
    selectedColors.join("|"),
  ].join("::");
  const visibleCount = pagination.filterKey === filterKey ? pagination.visibleCount : 4;

  const brands = React.useMemo(() => {
    return Array.from(new Set(mobils.map((m) => m.brand).filter(Boolean))) as string[];
  }, [mobils]);

  const colors = React.useMemo(() => {
    return Array.from(new Set(mobils.map((m) => m.color).filter(Boolean))) as string[];
  }, [mobils]);

  const filteredMobils = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return mobils.filter((m) => {
      const matchQuery = !q || [m.name, m.brand, m.model, m.color].filter(Boolean).join(" ").toLowerCase().includes(q);
      const matchPrice = m.pricePerDay <= maxPrice;
      const matchAvail = !showAvailableOnly || getAvailabilityStatus(m) === "AVAILABLE";

      const matchBrand = selectedBrands.length === 0 || (m.brand && selectedBrands.includes(m.brand));
      const matchColor = selectedColors.length === 0 || (m.color && selectedColors.includes(m.color));

      return matchQuery && matchPrice && matchAvail && matchBrand && matchColor;
    });
  }, [mobils, query, maxPrice, showAvailableOnly, selectedBrands, selectedColors]);

  const visibleMobils = React.useMemo(() => {
    return filteredMobils.slice(0, visibleCount);
  }, [filteredMobils, visibleCount]);

  return (
    <>
      {selectedMobil && (
        <BookingModal mobil={selectedMobil} onClose={() => setSelectedMobil(null)} />
      )}

      {/* Hero Header */}
      <div className="mb-8 font-sans">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#00b488] mb-3">
          PREMIUM EV RENTAL
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-zinc-900 leading-[1.1] tracking-tight shrink-0">
            The Future<br />is Volt<span className="text-[#00b488]">Ride</span>
          </h1>
          <div className="flex items-center gap-1 rounded-full bg-zinc-100 p-1 text-sm shadow-sm border border-zinc-200/20 w-full sm:w-fit sm:shrink-0">
            <button
              onClick={() => setShowAvailableOnly(false)}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold transition-all select-none cursor-pointer w-1/2 sm:w-auto text-center",
                !showAvailableOnly ? "bg-white text-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              All Cars
            </button>
            <button
              onClick={() => setShowAvailableOnly(true)}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold transition-all select-none cursor-pointer w-1/2 sm:w-auto text-center",
                showAvailableOnly ? "bg-white text-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              Available Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-8 pb-12 items-start">
        {/* Sidebar */}
        <Sidebar
          query={query}
          setQuery={setQuery}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          brands={brands}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          colors={colors}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile Search */}
          <label className="relative block mb-6 lg:hidden">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari tipe, merek, model..."
              className="h-11 w-full rounded-2xl bg-zinc-100 pl-10 pr-4 text-sm outline-none transition focus:bg-zinc-200/70"
            />
          </label>

          {/* Grid */}
          {filteredMobils.length === 0 ? (
            <div className="rounded-[32px] border border-zinc-100 bg-white p-16 text-center text-sm text-zinc-500 shadow-sm">
              Tidak ada mobil yang sesuai filter.
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {visibleMobils.map((mobil) => (
                  <MobilCard
                    key={mobil.id}
                    mobil={mobil}
                    onViewDetails={() => setSelectedMobil(mobil)}
                  />
                ))}
              </div>

              {filteredMobils.length > visibleCount && (
                <div className="flex justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => setPagination({ filterKey, visibleCount: visibleCount + 4 })}
                    className="rounded-2xl border border-zinc-200 bg-white px-8 py-3 text-sm font-bold text-zinc-700 shadow-sm hover:border-zinc-300 hover:bg-zinc-50 active:scale-95 transition-all cursor-pointer"
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// --- Calendar Grid (unchanged logic) ---
function CalendarGrid({
  month, bookedDates, startDate, endDate, onPrevious, onNext, onDateClick,
}: {
  month: Date; bookedDates: Map<string, number>;
  startDate: string; endDate: string;
  onPrevious: () => void; onNext: () => void; onDateClick: (dateKey: string) => void;
}) {
  const days = getCalendarDays(month);
  const todayKey = toDateKey(new Date());

  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 p-3">
      <div className="mb-3 flex items-center justify-between">
        <button type="button" onClick={onPrevious} className="rounded-lg p-1.5 hover:bg-zinc-100">
          <ChevronLeft className="size-4" />
        </button>
        <p className="text-sm font-semibold text-zinc-900">
          {new Intl.DateTimeFormat("id-ID", { month: "long", year: "numeric" }).format(month)}
        </p>
        <button type="button" onClick={onNext} className="rounded-lg p-1.5 hover:bg-zinc-100">
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-zinc-400 mb-1">
        {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((d) => <div key={d} className="py-1">{d}</div>)}
      </div>
      <div className="grid min-w-70 grid-cols-7 gap-1">
        {days.map((date, i) => {
          if (!date) return <div key={`e-${i}`} className="aspect-square" />;
          const dateKey = toDateKey(date);
          const booked = isDateBooked(dateKey, bookedDates);
          const disabled = dateKey < todayKey || booked;
          const selected = dateKey === startDate || dateKey === endDate;
          const inRange = startDate && endDate && dateKey > startDate && dateKey < endDate;
          return (
            <button
              key={dateKey} type="button" disabled={disabled} onClick={() => onDateClick(dateKey)}
              className={cn(
                "relative aspect-square rounded-lg border text-sm transition",
                selected && "border-primary bg-primary text-white",
                inRange && !selected && "border-primary/20 bg-primary/10 text-primary",
                !selected && !inRange && "border-transparent hover:bg-zinc-100",
                disabled && "cursor-not-allowed border-red-100 bg-red-50 text-red-400 opacity-80"
              )}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-zinc-400">
        <Legend color="bg-primary" label="Dipilih" />
        <Legend color="bg-red-400" label="Sudah dibooking" />
      </div>
    </div>
  );
}

function InfoRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-zinc-500">{label}</span>
      <span className={cn("text-right font-medium text-zinc-900", strong && "text-base font-semibold")}>{value}</span>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn("size-2 rounded-full", color)} />
      {label}
    </span>
  );
}

function getAvailabilityStatus(mobil: CatalogMobil) {
  if (mobil.status === "MAINTENANCE") return "MAINTENANCE";
  if (mobil.status === "INACTIVE") return "INACTIVE";
  if (mobil.availableUnit < 1) return "FULL";
  return "AVAILABLE";
}

function getBookedDateMap(mobil: CatalogMobil) {
  const map = new Map<string, number>();
  mobil.bookings.forEach((booking) => {
    getDateKeysBetween(booking.startDate, booking.endDate).forEach((dateKey) => {
      map.set(dateKey, (map.get(dateKey) ?? 0) + 1);
    });
  });
  return map;
}

function isDateBooked(dateKey: string, bookedDates: Map<string, number>) {
  return bookedDates.has(dateKey);
}

function rangeHasBookedDate(startDate: string, endDate: string, bookedDates: Map<string, number>) {
  return getDateKeysBetween(startDate, endDate).some((dateKey) =>
    isDateBooked(dateKey, bookedDates)
  );
}

function getCalendarDays(month: Date) {
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const days: Array<Date | null> = Array.from({ length: firstDay.getDay() }, () => null);
  for (let day = 1; day <= lastDay.getDate(); day++) {
    days.push(new Date(month.getFullYear(), month.getMonth(), day));
  }
  return days;
}

function getDateKeysBetween(startDate: string, endDate: string) {
  const dates: string[] = [];
  const current = parseDate(startDate);
  const end = parseDate(endDate);
  while (current <= end) {
    dates.push(toDateKey(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

function getTotalDays(startDate: string, endDate: string) {
  return Math.floor((parseDate(endDate).getTime() - parseDate(startDate).getTime()) / 86400000) + 1;
}

function parseDate(dateKey: string) {
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

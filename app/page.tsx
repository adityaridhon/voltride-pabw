import Navbar from "@/components/usercomponents/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Welcome Section */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Premium EV Rental
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl leading-tight max-w-3xl">
            Sewa Kendaraan Listrik Premium dengan <span className="text-primary">VoltRide</span>
          </h1>
          <p className="mt-6 text-base text-zinc-500 max-w-xl">
            Nikmati kemudahan berkendara masa depan dengan performa ramah lingkungan terbaik dari armada mobil listrik pilihan kami.
          </p>
          <div className="mt-10">
            <a href="/product">
              <button
                type="button"
                className="rounded-full bg-linear-to-r from-emerald-600 to-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:opacity-95 hover:shadow-xl active:scale-95 transition-all"
              >
                Mulai Booking Sekarang
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

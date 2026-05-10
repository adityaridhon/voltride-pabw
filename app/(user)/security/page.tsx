const devices = [
  { name: "iPhone 13 Pro", location: "Jakarta", status: "Aktif" },
  { name: "MacBook Air", location: "Bandung", status: "Aktif" },
  {
    name: "Chrome Windows",
    location: "Surabaya",
    status: "Terakhir aktif 3 hari lalu",
  },
];


// Insya allah YANG BISA DIBUAT
// HALAMAN SECURITY
// ========================================

// 1. Change PIN feature
// - Ganti PIN transaksi
// - Validasi PIN lama
// - Konfirmasi PIN baru

// 2. Change password feature
// - Input password lama
// - Password baru
// - Confirm password



// export default function SecurityPage() {
//   return (
//     <section className="space-y-6">
//       <header>
//         <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
//           Keamanan
//         </p>
//         <h1 className="mt-2 font-heading text-3xl font-semibold">
//           Kontrol keamanan akun
//         </h1>
//         <p className="mt-2 text-sm text-slate-400">
//           Atur PIN transaksi, kata sandi, dan perangkat yang terhubung.
//         </p>
//       </header>

//       <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
//         <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//           <h2 className="font-heading text-lg">Pengaturan PIN</h2>
//           <p className="mt-2 text-sm text-slate-400">
//             PIN diperlukan untuk transaksi dengan nominal besar.
//           </p>
//           <button className="mt-4 rounded-full bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
//             Atur ulang PIN
//           </button>

//           <div className="mt-6 rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4">
//             <h3 className="text-sm font-semibold text-slate-100">Kata sandi</h3>
//             <p className="mt-2 text-xs text-slate-400">
//               Terakhir diubah 4 bulan lalu.
//             </p>
//             <button className="mt-3 rounded-full border border-slate-700/80 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-500">
//               Ganti kata sandi
//             </button>
//           </div>
//         </div>

//         <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//           <h2 className="font-heading text-lg">Perangkat aktif</h2>
//           <div className="mt-4 space-y-3">
//             {devices.map((device) => (
//               <div
//                 key={device.name}
//                 className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4"
//               >
//                 <p className="text-sm font-semibold text-slate-100">
//                   {device.name}
//                 </p>
//                 <p className="mt-1 text-xs text-slate-400">{device.location}</p>
//                 <p className="mt-1 text-xs text-emerald-200">{device.status}</p>
//               </div>
//             ))}
//           </div>
//           <button className="mt-4 w-full rounded-full border border-slate-700/80 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
//             Kelola perangkat
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

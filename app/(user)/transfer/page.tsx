const recipients = [
  { name: "Dewa Putra", handle: "@dewatrans" },
  { name: "Ayu Nabila", handle: "@ayunabila" },
  { name: "Kurniawan", handle: "@kurniawan" },
];


// ========================================
// Insya allah YANG BISA DIBUAT
// ========================================

// 1. Validasi transfer
// - Cek saldo cukup atau tidak
// - Cek nominal minimum transfer
// - Cek user penerima valid

// 2. Function kirim saldo
// - Handle submit transfer
// - Simpan data transaksi
// - Update saldo pengirim & penerima

// 3. Modal konfirmasi
// - Tampilkan detail transfer
// - Konfirmasi sebelum kirim

// 4. Notifikasi sukses/gagal
// - Toast success
// - Error message

// 5. Riwayat transfer
// - Simpan ke transaction history
// - Status transaksi berhasil/gagal

// 6. Integrasi backend/API
// - POST /transfer
// - GET /users/search
// - GET /wallet/balance

// 7. Security tambahan
// - PIN transaksi
// - OTP verification
// - Limit transfer harian

// 8. UX improvement
// - Auto format rupiah
// - Loading state
// - Skeleton loading
// - Disable button saat loading
// */




// export default function TransferPage() {
//   return (
//     <section className="space-y-6">
//       <header>
//         <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
//           Transfer
//         </p>
//         <h1 className="mt-2 font-heading text-3xl font-semibold">
//           Kirim saldo ke user lain
//         </h1>
//         <p className="mt-2 text-sm text-slate-400">
//           Transfer antar user VoltRide tanpa biaya. Pilih penerima dan jumlah
//           dana.
//         </p>
//       </header>

//       <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
//         <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//           <h2 className="font-heading text-lg">Penerima favorit</h2>
//           <div className="mt-4 space-y-3">
//             {recipients.map((recipient) => (
//               <div
//                 key={recipient.handle}
//                 className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-4"
//               >
//                 <div>
//                   <p className="text-sm font-semibold text-slate-100">
//                     {recipient.name}
//                   </p>
//                   <p className="text-xs text-slate-400">{recipient.handle}</p>
//                 </div>
//                 <button className="rounded-full border border-slate-700/80 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-500">
//                   Pilih
//                 </button>
//               </div>
//             ))}
//           </div>
//           <div className="mt-5 rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4">
//             <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
//               Cari user
//             </label>
//             <input
//               type="text"
//               placeholder="Masukkan nama atau username"
//               className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
//             />
//           </div>
//         </div>

//         <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
//           <h2 className="font-heading text-lg">Detail transfer</h2>
//           <div className="mt-4 space-y-4">
//             <div>
//               <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
//                 Nominal
//               </label>
//               <input
//                 type="text"
//                 placeholder="Rp 250.000"
//                 className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
//               />
//             </div>
//             <div>
//               <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
//                 Catatan
//               </label>
//               <textarea
//                 rows={4}
//                 placeholder="Contoh: Untuk perjalanan besok"
//                 className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500"
//               />
//             </div>
//           </div>
//           <button className="mt-5 w-full rounded-full bg-emerald-400/90 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
//             Kirim saldo
//           </button>
//           <p className="mt-3 text-xs text-slate-400">
//             Saldo yang tersedia: Rp 2.450.000
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

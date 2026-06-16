export const mitraTools = [
  {
    name: "get_fleet_summary",
    description: "menampilkan ringkasan armada milik mitra",
    params: {},
  },

  {
    name: "list_my_cars",
    description: "menampilkan semua mobil milik mitra",
    params: {},
  },

  {
    name: "search_my_car",
    description: "mencari mobil milik mitra berdasarkan nama",
    params: {
      query: "string",
    },
  },
  {
    name: "get_booking_summary",
    description: "ringkasan booking aktif milik mitra",
    params: {},
  },
  {
    name: "get_monthly_revenue",
    description: "ringkasan pendapatan mitra per bulan",
    params: {},
  },
  {
    name: "cars_in_maintenance",
    description: "mobil yang sedang maintenance",
    params: {},
  },
  {
    name: "get_top_car",
    description: "mobil yang paling sering disewa",
    params: {},
  },
];
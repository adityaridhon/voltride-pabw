export const tools = [
  {
    name: "list_available_cars",
    description: "menampilkan mobil yang tersedia",
    params: {},
  },

  {
    name: "search_cars",
    description: "mencari mobil berdasarkan nama",
    params: {
      query: "string",
    },
  },

  {
    name: "filter_by_color",
    description: "mencari mobil berdasarkan warna",
    params: {
      color: "string",
    },
  },

  {
    name: "filter_by_price",
    description: "mencari mobil berdasarkan harga maksimum",
    params: {
      maxPrice: "number",
    },
  },

  {
    name: "recommend_car",
    description:
      "merekomendasikan mobil berdasarkan kebutuhan user",
    params: {
      purpose: "string",
    },
  },

  {
    name: "get_balance",
    description: "menampilkan saldo user",
    params: {},
  },

  {
    name: "get_transaction_history",
    description: "riwayat transaksi user",
    params: {},
  },
];
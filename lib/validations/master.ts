import { z } from "zod";

// ─── User Schemas ─────────────────────────────────────────────────────────────

export const createUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["ADMIN", "MITRA", "USER"]).optional().default("USER"),
  noHp: z.string().optional(),
});

export const updateUserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().min(2).max(100).optional(),
  email: z.string().email().optional(),
  role: z.enum(["ADMIN", "MITRA", "USER"]).optional(),
  noHp: z.string().optional(),
});

export const deleteUserSchema = z.object({
  id: z.string().cuid(),
});

// ─── Mitra Schemas ────────────────────────────────────────────────────────────

export const createMitraSchema = z.object({
  userId: z.string().cuid("User ID tidak valid"),
  namaMitra: z.string().min(2, "Nama mitra minimal 2 karakter").max(150),
  noHp: z.string().optional(),
  alamat: z.string().optional(),
});

export const updateMitraSchema = z.object({
  id: z.string().cuid(),
  namaMitra: z.string().min(2).max(150).optional(),
  noHp: z.string().optional(),
  alamat: z.string().optional(),
});

export const deleteMitraSchema = z.object({
  id: z.string().cuid(),
});

// ─── Armada Schemas ───────────────────────────────────────────────────────────

export const createArmadaSchema = z.object({
  mitraId: z.string().cuid("Mitra ID tidak valid"),
  namaKendaraan: z.string().min(2).max(150),
  merek: z.string().min(1).max(100),
  model: z.string().min(1).max(100),
  tahun: z
    .number()
    .int()
    .min(2000, "Tahun minimal 2000")
    .max(new Date().getFullYear() + 1),
  nomorPlat: z.string().min(4).max(20),
  hargaPerHari: z.number().positive("Harga harus lebih dari 0"),
  foto: z.string().url().optional(),
  deskripsi: z.string().max(1000).optional(),
  statusKetersediaan: z
    .enum(["TERSEDIA", "DISEWA", "PERAWATAN"])
    .optional()
    .default("TERSEDIA"),
});

export const updateArmadaSchema = z.object({
  id: z.string().cuid(),
  namaKendaraan: z.string().min(2).max(150).optional(),
  merek: z.string().min(1).max(100).optional(),
  model: z.string().min(1).max(100).optional(),
  tahun: z.number().int().min(2000).optional(),
  nomorPlat: z.string().min(4).max(20).optional(),
  hargaPerHari: z.number().positive().optional(),
  foto: z.string().url().optional(),
  deskripsi: z.string().max(1000).optional(),
  statusKetersediaan: z.enum(["TERSEDIA", "DISEWA", "PERAWATAN"]).optional(),
});

export const deleteArmadaSchema = z.object({
  id: z.string().cuid(),
});

// ─── Type Exports ─────────────────────────────────────────────────────────────

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type CreateMitraInput = z.infer<typeof createMitraSchema>;
export type UpdateMitraInput = z.infer<typeof updateMitraSchema>;
export type CreateArmadaInput = z.infer<typeof createArmadaSchema>;
export type UpdateArmadaInput = z.infer<typeof updateArmadaSchema>;

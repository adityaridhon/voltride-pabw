import { auth } from "@/auth";
import type { Role } from "@/src/generated/prisma";

/**
 * Tipe response standar untuk semua Server Actions.
 */
export type ActionResponse<T = unknown> =
  | { success: true; data: T; message?: string }
  | { success: false; error: string };

/**
 * Dapatkan session yang aktif.
 * Lempar error jika tidak ada session (belum login).
 */
export async function requireAuth() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("UNAUTHORIZED: Anda harus login terlebih dahulu.");
  }
  return session;
}

/**
 * Dapatkan session dan pastikan user memiliki role yang diizinkan.
 * @param allowedRoles - Array role yang diizinkan mengakses resource.
 */
export async function requireRole(allowedRoles: Role[]) {
  const session = await requireAuth();
  const userRole = session.user.role as Role;

  if (!allowedRoles.includes(userRole)) {
    throw new Error(
      `FORBIDDEN: Role '${userRole}' tidak diizinkan mengakses resource ini.`
    );
  }

  return session;
}

/**
 * Wrapper untuk menangkap error action secara konsisten.
 * Konversi thrown errors ke ActionResponse format.
 */
export async function withErrorHandling<T>(
  fn: () => Promise<T>
): Promise<ActionResponse<T>> {
  try {
    const data = await fn();
    return { success: true, data };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Terjadi kesalahan tidak terduga.";

    // Normalisasi pesan error
    if (message.startsWith("UNAUTHORIZED")) {
      return { success: false, error: "Silakan login terlebih dahulu." };
    }
    if (message.startsWith("FORBIDDEN")) {
      return { success: false, error: "Anda tidak memiliki izin untuk aksi ini." };
    }
    if (message.includes("Unique constraint")) {
      return { success: false, error: "Data sudah ada (duplikat)." };
    }

    console.error("[Action Error]", error);
    return { success: false, error: message };
  }
}

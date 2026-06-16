"use server";

import cloudinary from "@/lib/cloudinary";

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;

  if (!file) {
    throw new Error("File tidak ditemukan");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise<any>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "voltride",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      )
      .end(buffer);
  });

  return result.secure_url;
}
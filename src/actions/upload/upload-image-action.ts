"use server";

import { veryfyLoginSession } from "@/lib/login/manage-login";
import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData
): Promise<UploadImageActionResult> {
  const makeResult = ({ url = "", error = "" }) => ({ url, error });

  const isAuthenticated = await veryfyLoginSession();

  if (!isAuthenticated) {
    return makeResult({error: "Faça login novamente"})
  }

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "Dados inválidos" });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return makeResult({ error: "Arquivo inválidos" });
  }

  const uploadMaxSize =
    Number(process.env.NEXT_PUBLIC_IMAGE_UPLOADER_MAX_SIZE) || 921600;

  if (file.size > uploadMaxSize) {
    return makeResult({ error: "Arquivo muito grande" });
  }

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Imagem inválida" });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadDir = process.env.IMAGE_UPLOADER_DIRECTORY || "uploads";

  const uploadsFullPath = resolve(process.cwd(), "public", uploadDir);

  await mkdir(uploadsFullPath, { recursive: true });
  const fileArrayBuffer = file.arrayBuffer();
  const buffer = Buffer.from(await fileArrayBuffer);

  const fileFullPath = resolve(uploadsFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const imgServerUrl = process.env.IMAGE_SERVER_URL || "uploads";
  const url = `${imgServerUrl}/${uniqueImageName}`;

  return makeResult({ url });
}

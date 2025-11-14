"use server";

import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOADER_DIRECTORY,
  IMAGE_UPLOADER_MAX_SIZE,
} from "@/lib/constants";
import { asyncDelay } from "@/utils/async-delay";
import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData
): Promise<UploadImageActionResult> {
  // TODO: Verificar se o usuário está logado

  // TODO: remover o delay
  await asyncDelay(5000, true);

  const makeResult = ({ url = "", error = "" }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "Dados inválidos" });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return makeResult({ error: "Arquivo inválidos" });
  }

  if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
    return makeResult({ error: "Arquivo muito grande" });
  }

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Imagem inválida" });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadsFullPath = resolve(
    process.cwd(),
    "public",
    IMAGE_UPLOADER_DIRECTORY
  );

  await mkdir(uploadsFullPath, { recursive: true });
  const fileArrayBuffer = file.arrayBuffer();
  const buffer = Buffer.from(await fileArrayBuffer);

  const fileFullPath = resolve(uploadsFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

  return makeResult({ url });
}

"use server";

import { veryfyLoginSession } from "@/lib/login/manage-login";
import { postRepository } from "@/repositories/post";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  const isAuthenticated = await veryfyLoginSession();

  if (!isAuthenticated) {
    return {
      error: ["Faça login novamente em outra aba."],
    };
  }

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  let post;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        errors: e.message,
      };
    }
    return {
      errors: "Erro desconhecido",
    };
  }

  // TODO: revaliodadeTag ou revalidatePath
  revalidateTag("posts");
  revalidateTag(`post-${post.slug}`);

  return {
    error: "",
  };
}

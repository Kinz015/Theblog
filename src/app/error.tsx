"use client";
import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErroPageProps = {
  error: Error;
};

export default function RootErroPage({ error }: RootErroPageProps) {
  useEffect(() => {
    // console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      comentTitle="501"
      content="Ocorreu um erro do qual nossa aplicação não conseguiu ser recuperar. Tente novamente mais tarde"
    />
  );
}

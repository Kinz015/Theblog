import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog",
  description: "Este é um blog com Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR" className="darktaillwin">
      <body>{children}</body>
    </html>
  );
}

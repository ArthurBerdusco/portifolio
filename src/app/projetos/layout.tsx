import type { Metadata } from "next";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: "Meus projetos",
  description: "Portifólio de tecnologias e projetos Arthur Silva",
};

export default function ProjetosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {children}
    </section>
  );
}

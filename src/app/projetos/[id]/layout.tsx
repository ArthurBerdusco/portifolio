import type { Metadata } from "next";
import localFont from "next/font/local";
import '../../globals.css'

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portifólio - Arthur",
  description: "Portifólio de tecnologias e projetos Arthur Silva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </div>
    
  );
}

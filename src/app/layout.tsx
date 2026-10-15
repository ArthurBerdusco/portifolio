import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { getContent, SITE_URL } from "@/lib/content";

const body = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { profile } = await getContent();
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: profile.siteTitle, template: `%s · ${profile.name.split(" ").slice(0, 2).join(" ")}` },
    description: profile.siteDescription,
    authors: [{ name: profile.name }],
    openGraph: {
      type: "website",
      locale: "pt_BR",
      title: profile.siteTitle,
      description: profile.siteDescription,
      images: [{ url: profile.photo, alt: profile.name }],
    },
    twitter: { card: "summary_large_image", title: profile.siteTitle, description: profile.siteDescription },
  };
}

export const viewport: Viewport = { themeColor: "#10281F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={body.variable} style={{ ["--font-display" as string]: '"Bricolage Grotesque Variable"' }}>
      <body>{children}</body>
    </html>
  );
}

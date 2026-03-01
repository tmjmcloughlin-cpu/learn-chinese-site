import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const siteUrl = "https://learn-chinese-site-g73u.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Learn Chinese Daily Reader",
    template: "%s · Learn Chinese Daily",
  },
  description:
    "Daily HSK 1-3 hover-ready Mandarin readings with instant pinyin, visitor-friendly prompts, and live class partners.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Learn Chinese Daily Reader",
    description:
      "Daily Mandarin hover-reading feed with pinyin reveals, vocab highlights, and live class partners.",
    siteName: "Learn Chinese Daily",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Chinese Daily Reader",
    description:
      "Daily Mandarin hover-reading feed with pinyin reveals, vocab highlights, and live class partners.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${spaceMono.variable} antialiased bg-[#fff6f1]`}>
        {children}
      </body>
    </html>
  );
}

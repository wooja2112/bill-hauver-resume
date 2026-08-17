import type { Metadata } from "next";
import { Libre_Franklin, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bill Hauver — Senior IT Leader, DevOps, Cloud & AI",
  description:
    "Senior IT leader with 30+ years spanning DevOps, cloud infrastructure, software architecture, and QA — now applying AI-assisted development and agentic workflows. Proven record scaling technical teams and modernizing enterprise systems for Fortune 500 organizations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

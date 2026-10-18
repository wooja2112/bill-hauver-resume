import type { Metadata } from "next";
import { Libre_Franklin, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/lib/resume";
import { absoluteUrl, getSiteUrl } from "@/lib/site";
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

const siteUrl = getSiteUrl();
const title = "Bill Hauver — Senior IT Leader, DevOps, Cloud & AI";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description: profile.summary,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: profile.summary,
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    type: "profile",
    firstName: "Bill",
    lastName: "Hauver",
    username: "bhauver",
    images: [
      {
        url: absoluteUrl("/opengraph-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Bill Hauver, senior IT leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.summary,
    images: [absoluteUrl("/opengraph-image.jpg")],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    email: profile.email,
    telephone: profile.phoneHref.replace(/^tel:/, ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lutz",
      addressRegion: "FL",
      addressCountry: "US",
    },
    image: absoluteUrl("/bill-hauver.jpg"),
    url: siteUrl.href,
    sameAs: [profile.linkedinHref],
  };

  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}

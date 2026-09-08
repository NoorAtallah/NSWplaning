import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navBar";
import Footer from "./components/layout/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: confirm the live domain, then set metadataBase to it.
const SITE_URL = "https://nswpm.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "NSWPM Academy — NDIS, Aged Care & Community Services Training in Australia",
    template: "%s | NSWPM Academy",
  },
  description:
    "Nationally recognised training and Continuing Professional Development for the NDIS, disability, aged care and community services workforce. Flexible online courses for individuals and organisations.",
  keywords: [
    "NDIS training",
    "disability support training",
    "aged care courses",
    "CPD Australia",
    "community services training",
    "NSWPM Academy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "NSWPM Academy",
    title:
      "NSWPM Academy — NDIS, Aged Care & Community Services Training",
    description:
      "Nationally recognised training and CPD for the NDIS, disability, aged care and community services workforce.",
    // TODO: replace with a real 1200x630 share image in /public
    images: [{ url: "/4.png", width: 1200, height: 630, alt: "NSWPM Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NSWPM Academy — Training & CPD for the care sector",
    description:
      "Nationally recognised training and CPD for the NDIS, disability, aged care and community services workforce.",
    images: ["/4.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <Navbar />  {/* ✅ inside body, not html */}
        {children}
        <Footer />  {/* ✅ inside body, not html */}
      </body>
    </html>
  );
}

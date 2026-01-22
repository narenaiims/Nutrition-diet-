import React from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import ClientProviders from "../components/ClientProviders";
import { DOCTOR_INFO } from "../lib/constants";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta"
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
  variable: "--font-noto-devanagari"
});

export const metadata: Metadata = {
  title: "Dr. Narendra Rathore | Oncology Nutrition Udaipur",
  description: "Expert cancer nutrition and supportive care by Dr. Narendra Rathore. Evidence-based diet guidance for chemotherapy and radiation.",
  authors: [{ name: DOCTOR_INFO.name }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "NR Oncology"
  }
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover"
};

/**
 * Root Layout is a Server Component.
 * It strictly handles metadata, fonts, and the high-level HTML structure.
 * Interactivity is offloaded to the ClientProviders component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${notoDevanagari.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

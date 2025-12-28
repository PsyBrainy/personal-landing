import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://martincorrea.com.ar"), // TODO: Reemplazar con tu dominio real
  title: "Martín Correa - Desarrollador de Software",
  description:
    "Portfolio personal de Martín Correa, Desarrollador de Software Senior especializado en Arquitectura y Backend.",
  icons: {
    icon: [
      { url: "https://jcsxzblsolkrylrzqxbh.supabase.co/storage/v1/object/public/upload-media/platform/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "https://jcsxzblsolkrylrzqxbh.supabase.co/storage/v1/object/public/upload-media/platform/logo.svg",
  },
  openGraph: {
    title: "Martín Correa - Desarrollador de Software",
    description: "Portfolio personal de Martín Correa, Desarrollador de Software Senior especializado en Arquitectura y Backend.",
    url: "https://martincorrea.com.ar",
    siteName: "Martín Correa Portfolio",
    images: [
      {
        url: "https://jcsxzblsolkrylrzqxbh.supabase.co/storage/v1/object/public/upload-media/platform/logo.svg?v=WhatsAppReady",
        width: 1200,
        height: 630,
        alt: "Martín Correa Logo Wide",
      },
      {
        url: "https://jcsxzblsolkrylrzqxbh.supabase.co/storage/v1/object/public/upload-media/platform/logo.svg?v=WhatsAppReady",
        width: 300,
        height: 300,
        alt: "Martín Correa Logo Square",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martín Correa - Desarrollador de Software",
    description: "Portfolio personal de Martín Correa, Desarrollador de Software Senior especializado en Arquitectura y Backend.",
    images: ["https://jcsxzblsolkrylrzqxbh.supabase.co/storage/v1/object/public/upload-media/platform/logo.svg?v=WhatsAppReady"],
  },
  other: {
    "thumbnail": "https://jcsxzblsolkrylrzqxbh.supabase.co/storage/v1/object/public/upload-media/platform/logo.svg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppProviders>
          <Navbar />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}

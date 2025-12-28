import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martín Correa - Desarrollador de Software",
  description:
    "Portfolio personal de Martín Correa, Desarrollador de Software Senior especializado en Arquitectura y Backend.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Martín Correa - Desarrollador de Software",
    description: "Portfolio personal de Martín Correa, Desarrollador de Software Senior especializado en Arquitectura y Backend.",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Martín Correa Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martín Correa - Desarrollador de Software",
    description: "Portfolio personal de Martín Correa, Desarrollador de Software Senior especializado en Arquitectura y Backend.",
    images: ["/logo.svg"],
  },
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

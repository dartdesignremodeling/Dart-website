import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "D'art — Arquitectura, Remodelación y Diseño Interior",
  description:
    "D'art transforma espacios en experiencias únicas. Arquitectura de vanguardia, remodelación integral y diseño interior premium en Colombia.",
  keywords: [
    "arquitectura colombia",
    "diseño interior",
    "remodelación",
    "domótica",
    "iluminación arquitectónica",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=zodiak@400,400i,700,700i&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-background text-foreground antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

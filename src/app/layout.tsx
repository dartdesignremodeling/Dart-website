import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "D'ART | Estudio de Arquitectura, Iluminación y Diseño de Espacios en Bogotá",
  description:
    "Estudio de arquitectura e iluminación en Bogotá. Diseño de interiores, smart spaces, mobiliario a medida y remodelación integral. Creamos ambientes únicos para espacios residenciales y comerciales en Colombia.",
  keywords:
    "estudio arquitectura iluminación Bogotá, diseño espacios a medida Bogotá, remodelación integral Bogotá, smart spaces Colombia, diseño interiores lujo Bogotá, arquitectura residencial Colombia, iluminación arquitectónica residencial",
  openGraph: {
    title: "D'ART | Arquitectura · Iluminación · Smart Spaces · Bogotá",
    description:
      "Estudio integral de arquitectura, iluminación, mobiliario y smart spaces en Bogotá. Ambientes únicos diseñados a medida.",
    url: "https://dartestudio.co",
    siteName: "D'ART Estudio",
    locale: "es_CO",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://dartestudio.co" },
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "D'ART Estudio",
              description:
                "Estudio integral de arquitectura, iluminación arquitectónica, diseño de interiores, smart spaces y mobiliario a medida en Bogotá, Colombia.",
              url: "https://dartestudio.co",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle 94 #11a-42",
                addressLocality: "Bogotá",
                addressRegion: "Bogotá D.C.",
                addressCountry: "CO",
              },
              email: "dartdesignremodeling@gmail.com",
              areaServed: ["Bogotá", "Colombia"],
              serviceType: [
                "Arquitectura residencial",
                "Diseño de interiores",
                "Iluminación arquitectónica",
                "Smart Spaces",
                "Mobiliario a medida",
                "Remodelación integral",
              ],
              priceRange: "$$$$",
            }),
          }}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

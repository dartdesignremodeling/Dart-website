"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const services = [
  { label: "Smart Spaces", href: "/espacios-inteligentes" },
  { label: "Iluminación", href: "/iluminacion-arquitectonica" },
  { label: "Gran Escala", href: "/gran-escala" },
  { label: "Mobiliario", href: "#" },
  { label: "Remodelación", href: "#" },
];

const studio = [
  { label: "Nuestra Esencia", href: "#" },
  { label: "Proyectos", href: "#" },
  { label: "Proceso", href: "#" },
  { label: "Hablemos", href: "/hablemos" },
];

export function Footer() {
  return (
    <footer style={{ background: "#221c10", borderTop: "1px solid rgba(201,168,76,0.1)" }}>

      {/* Marquee */}
      <Marquee
        text="D'ART ·"
        fontSize="3xl"
        duration={25}
        strokeWidth="1px"
        repeat={6}
        className="py-4 -mt-[20px] md:mt-0 md:py-2"
      />

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(201,168,76,0.1)", margin: "0 3rem" }} />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Image
              src="/images/logo_blanco.PNG"
              alt="d'art logo"
              width={80}
              height={40}
              className="object-contain"
            />
            <p
              className="font-sans font-light text-sm leading-7"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              Creamos ambientes únicos a través de la arquitectura, la luz y el detalle. Cada proyecto es una conversación entre el espacio y quienes lo habitan.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-300"
                style={{ color: "rgba(201,168,76,0.45)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(201,168,76,0.45)")}
              >
                {/* Instagram */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-colors duration-300"
                style={{ color: "rgba(201,168,76,0.45)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(201,168,76,0.45)")}
              >
              {/* LinkedIn */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              </a>
            </div>
          </div>

          {/* Servicios column */}
          <div className="flex flex-col gap-5">
            <p
              className="font-sans text-[9px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              Servicios
            </p>
            <ul className="flex flex-col gap-3">
              {services.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-sans font-light text-sm transition-colors duration-300"
                    style={{ color: "rgba(245,240,232,0.45)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#f5f0e8")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Estudio column */}
          <div className="flex flex-col gap-5">
            <p
              className="font-sans text-[9px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              Estudio
            </p>
            <ul className="flex flex-col gap-3">
              {studio.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-sans font-light text-sm transition-colors duration-300"
                    style={{ color: "rgba(245,240,232,0.45)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#f5f0e8")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className="flex flex-col gap-5">
            <p
              className="font-sans text-[9px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              ¿Tienes un proyecto?
            </p>
            <p
              className="font-sans font-light text-sm leading-7"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              Cuéntanos tu visión y lo convertimos en espacio.
            </p>
            <a
              href="/hablemos"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 self-start"
              style={{
                color: "#eca413",
                border: "1px solid rgba(236,164,19,0.4)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#eca413";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(236,164,19,0.06)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(236,164,19,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              Hablemos →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="font-sans text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(245,240,232,0.2)" }}
          >
            © 2025 D&apos;ART. Arquitectura · Iluminación · Diseño de Espacios.
          </p>
          <a
            href="mailto:contacto@dart.co"
            className="font-sans text-[10px] tracking-[0.15em] transition-colors duration-300"
            style={{ color: "rgba(201,168,76,0.35)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(201,168,76,0.35)")}
          >
            contacto@dart.co
          </a>
        </div>
      </div>
    </footer>
  );
}

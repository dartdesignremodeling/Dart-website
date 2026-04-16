"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LIMELIGHT = "#D4A853";

const navLinks = [
  { label: "Nuestra Esencia", href: "/#nuestra-esencia" },
  { label: "Smart Spaces", href: "/espacios-inteligentes" },
  { label: "Iluminación", href: "/iluminacion-arquitectonica" },
  { label: "Gran Escala", href: "/gran-escala" },
  { label: "Blog", href: "/blog" },
  { label: "Hablemos", href: "/hablemos" },
];

function Limelight({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center"
      style={{
        opacity: active ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      {/* Bright bar at the very top */}
      <span
        className="block h-px w-10 rounded-full"
        style={{
          background: LIMELIGHT,
          boxShadow: `0 0 8px 2px ${LIMELIGHT}`,
        }}
      />
      {/* Cone beam */}
      <span
        className="block"
        style={{
          width: "4rem",
          height: "3.5rem",
          background: `conic-gradient(from 260deg at 50% 0%, transparent 0deg, ${LIMELIGHT} 30deg, ${LIMELIGHT} 50deg, transparent 80deg)`,
          opacity: 0.35,
          maskImage: "linear-gradient(to bottom, white 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, white 0%, transparent 100%)",
        }}
      />
    </span>
  );
}

export function Navigation() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveHref(href);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveHref(null), 1800);

    if (href.startsWith("/#")) {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1e1508]/95 backdrop-blur-sm border-b border-[#c9a84c]/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="shrink-0"
          aria-label="D'art — Home"
        >
          <Image
            src="/images/logo_blanco.PNG"
            alt="D'art"
            width={90}
            height={30}
            className="w-[60px] md:w-[90px] h-auto"
            style={{ objectFit: "contain" }}
            priority
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <Limelight active={activeHref === link.href} />
              <button
                onClick={() => handleNavClick(link.href)}
                className={`relative font-sans text-xs tracking-[0.18em] uppercase transition-colors duration-300 cursor-pointer ${
                  activeHref === link.href
                    ? "text-[#D4A853]"
                    : "text-cream/60 hover:text-gold"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-px bg-cream/70 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream/70 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream/70 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1e1508]/98 backdrop-blur-sm border-t border-[#c9a84c]/10 px-6 py-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-sans text-xs tracking-[0.18em] uppercase text-cream/70 hover:text-gold transition-colors duration-300 w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

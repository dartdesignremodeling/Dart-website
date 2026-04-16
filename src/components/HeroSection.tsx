"use client";

import { motion } from "framer-motion";

const line1 = ["El", "arte", "de", "crear"];
const line2 = ["Ambientes", "únicos"];

const wordVariant = (i: number) => ({
  initial: { opacity: 0, filter: "blur(20px)", y: 40 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
});

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* SVG filter definitions */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter id="amber-glow" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1.0 0.3 0   0 0.02
                      0.4 0.4 0   0 0
                      0   0   0.1 0 0
                      0   0   0   0.5 0"
              result="amber-blur"
            />
            <feMerge>
              <feMergeNode in="amber-blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/video_hero_compressed.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      />

      {/* Desktop overlays */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: "rgba(30, 21, 8, 0.4)" }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: "linear-gradient(to right, rgba(30,21,8,0.75) 0%, transparent 60%)" }}
      />
      {/* Mobile — very light veil so image shows, subtle gradient only at bottom for text */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "rgba(30, 21, 8, 0.18)" }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "linear-gradient(to top, rgba(30,21,8,0.78) 0%, rgba(30,21,8,0.1) 42%, transparent 65%)" }}
      />

      {/* Title + subtitle + CTA — bottom left */}
      <div className="absolute bottom-10 md:bottom-16 left-5 right-5 md:left-16 md:right-auto z-10 md:max-w-2xl">
        {/* Line 1 — cream, medium weight */}
        <h1
          className="leading-[1.0] md:leading-[1.05] not-italic md:italic text-[clamp(2.2rem,10vw,3.5rem)] md:text-[clamp(3rem,7vw,5rem)]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
          }}
        >
          <span className="block">
            {line1.map((word, i) => (
              <motion.span
                key={word}
                {...wordVariant(i)}
                className="inline-block mr-[0.22em]"
                style={{ color: "#f2ede4" }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Line 2 — gold, featherweight for jewelry contrast */}
        <h1
          className="hero-glow-text leading-[1.0] md:leading-[1.05] mt-0.5 not-italic md:italic text-[clamp(2.2rem,10vw,3.5rem)] md:text-[clamp(2.3rem,6vw,5rem)]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
          }}
        >
          <span className="block">
            {line2.map((word, i) => (
              <motion.span
                key={word}
                {...wordVariant(line1.length + i)}
                className="inline-block mr-[0.22em]"
                style={{ color: "#C9A96E" }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + (line1.length + line2.length) * 0.15 + 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-5 font-sans text-[10px] md:text-[11px] tracking-[0.12em] md:tracking-[0.28em] uppercase"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          Arquitectura · Iluminación · Mobiliario · Sonido · Remodelación
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + (line1.length + line2.length) * 0.15 + 0.6, duration: 0.8, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href="/hablemos"
            className="group inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 w-fit"
            style={{
              borderColor: "#ffffff",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
              (e.currentTarget as HTMLAnchorElement).style.color = "#1e1508";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            }}
          >
            Hablemos de tu proyecto →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

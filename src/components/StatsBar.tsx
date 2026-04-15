"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "30+", label: "Años de experiencia" },
  { number: "200+", label: "Proyectos completados" },
  { number: "3", label: "Ciudades en Colombia" },
  { number: "100%", label: "Proyectos a medida" },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full" style={{ background: "#261a08" }}>
      {/* Top gold rule */}
      <div className="h-px w-full bg-[#C9A96E]/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col items-center justify-center py-5 md:py-6 text-center"
            >
              {/* Vertical divider */}
              {i < stats.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-1/4 h-1/2 w-px bg-[#C9A96E]/20"
                />
              )}

              {/* Number */}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(3.2rem, 5vw, 5rem)",
                  color: "#C9A96E",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                {stat.number}
              </span>

              {/* Label */}
              <span
                className="mt-2 font-sans uppercase"
                style={{
                  fontSize: "9px",
                  color: "rgba(245,230,200,0.45)",
                  letterSpacing: "0.2em",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="h-px w-full bg-[#C9A96E]/10" />
    </div>
  );
}

"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: "30+", label: "Años de experiencia" },
  { number: "200+", label: "Proyectos completados" },
  { number: "3", label: "Ciudades en Colombia" },
  { number: "100%", label: "Proyectos a medida" },
];

function parseNumber(str: string): { value: number; suffix: string } {
  const match = str.match(/^(\d+)(.*)$/);
  if (!match) return { value: 0, suffix: str };
  return { value: parseInt(match[1], 10), suffix: match[2] };
}

function CountUp({ raw }: { raw: string }) {
  const { value, suffix } = parseNumber(raw);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return controls.stop;
  }, [inView, motionValue, value]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
    <div ref={ref} className="w-full" style={{ background: "#1e1508", marginBottom: 0, paddingTop: "80px" }}>
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
                  className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-[#C9A96E]/20"
                />
              )}

              {/* Number */}
              <span
                className="text-[clamp(2.4rem,10vw,3.8rem)] md:text-[clamp(3.2rem,5vw,5rem)]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "normal",
                  fontWeight: 300,
                  color: "#f5e6c8",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                <CountUp raw={stat.number} />
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

    </div>

    {/* Invisible spacer — matches page background, no border */}
    <div style={{ height: "60px", background: "#1e1508" }} />
    </>
  );
}

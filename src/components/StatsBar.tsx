"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 30, suffix: "+", label: "AÑOS DE EXPERIENCIA" },
  { value: 200, suffix: "+", label: "PROYECTOS COMPLETADOS" },
  { value: 3, suffix: "", label: "CIUDADES EN COLOMBIA" },
  { value: 100, suffix: "%", label: "PROYECTOS A MEDIDA" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <div ref={ref} className="w-full" style={{ background: "#1e1508", paddingTop: "80px" }}>
        {/* Top gold rule */}
        <div className="h-px w-full bg-[#C9A96E]/10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center justify-center py-5 md:py-6 text-center"
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 700,
                    color: "rgba(236, 164, 19, 0.65)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div
                  style={{
                    fontFamily: "inherit",
                    fontSize: "0.65rem",
                    fontWeight: 300,
                    color: "rgba(245, 240, 232, 0.5)",
                    letterSpacing: "0.2em",
                    marginTop: "12px",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: "60px", background: "#1e1508" }} />
    </>
  );
}

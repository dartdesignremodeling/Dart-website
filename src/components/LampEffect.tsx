"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const LAMP = "#D4A853";
const BG = "#221c10";

interface LampEffectProps {
  children?: React.ReactNode;
}

export function LampEffect({ children }: LampEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      ref={ref}
      className="lamp-effect-wrapper relative flex w-full flex-col items-center justify-center overflow-hidden"
      style={{ background: BG }}
    >
      {/* ── Beam stage ── */}
      <div
        className="relative flex w-full items-center justify-center isolate z-0"
        style={{
          height: isMobile ? "110px" : "24rem",
          transform: "scaleY(1.25)",
          transformOrigin: "center",
        }}
      >

        {/* Right beam — originates center-top, fans left */}
        <motion.div
          initial={{ opacity: 0.5, width: isMobile ? "5rem" : "10rem" }}
          animate={inView ? { opacity: 1, width: isMobile ? "11rem" : "28rem" } : {}}
          transition={{ delay: 0.25, duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-auto right-1/2 h-52 overflow-visible"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, ${LAMP}, transparent, transparent)`,
          }}
        >
          {/* Mask beam bottom */}
          <div
            className="absolute bottom-0 left-0 z-20 h-40 w-full"
            style={{
              background: BG,
              maskImage: "linear-gradient(to top, white, transparent)",
              WebkitMaskImage: "linear-gradient(to top, white, transparent)",
            }}
          />
          {/* Mask beam outer edge */}
          <div
            className="absolute left-0 top-0 z-20 h-full w-36"
            style={{
              background: BG,
              maskImage: "linear-gradient(to right, white, transparent)",
              WebkitMaskImage: "linear-gradient(to right, white, transparent)",
            }}
          />
        </motion.div>

        {/* Left beam — originates center-top, fans right */}
        <motion.div
          initial={{ opacity: 0.5, width: isMobile ? "5rem" : "10rem" }}
          animate={inView ? { opacity: 1, width: isMobile ? "11rem" : "28rem" } : {}}
          transition={{ delay: 0.25, duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-auto left-1/2 h-52 overflow-visible"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${LAMP})`,
          }}
        >
          {/* Mask beam outer edge */}
          <div
            className="absolute right-0 top-0 z-20 h-full w-36"
            style={{
              background: BG,
              maskImage: "linear-gradient(to left, white, transparent)",
              WebkitMaskImage: "linear-gradient(to left, white, transparent)",
            }}
          />
          {/* Mask beam bottom */}
          <div
            className="absolute bottom-0 right-0 z-20 h-40 w-full"
            style={{
              background: BG,
              maskImage: "linear-gradient(to top, white, transparent)",
              WebkitMaskImage: "linear-gradient(to top, white, transparent)",
            }}
          />
        </motion.div>

        {/* Blurred base — hides lower beam edges */}
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"
          style={{ background: BG }}
        />

        {/* Wide ambient glow pool — desktop only */}
        <div
          className="absolute inset-auto z-50 -translate-y-1/2 rounded-full"
          style={{
            height: isMobile ? "2rem" : "9rem",
            width: isMobile ? "6rem" : "30rem",
            background: LAMP,
            opacity: isMobile ? 0.15 : 0.3,
            filter: isMobile ? "blur(12px)" : "blur(64px)",
          }}
        />

        {/* Focused glow spot — animates with beam */}
        <motion.div
          initial={{ width: isMobile ? "3rem" : "6rem", opacity: isMobile ? 0.1 : 0.15 }}
          animate={inView ? { width: isMobile ? "7rem" : "16rem", opacity: isMobile ? 0.2 : 0.38 } : {}}
          transition={{ delay: 0.25, duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-auto z-30 rounded-full"
          style={{
            height: isMobile ? "1.5rem" : "8rem",
            transform: `translateY(${isMobile ? "-1.5rem" : "-6rem"})`,
            background: LAMP,
            filter: isMobile ? "blur(8px)" : "blur(24px)",
          }}
        />

        {/* Bright lamp bar — the fixture line */}
        <motion.div
          initial={{ width: isMobile ? "4rem" : "6rem", opacity: 0.6 }}
          animate={inView ? { width: isMobile ? "10rem" : "28rem", opacity: 1 } : {}}
          transition={{ delay: 0.25, duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-px"
          style={{
            transform: `translateY(${isMobile ? "-2rem" : "-7rem"})`,
            background: LAMP,
            boxShadow: `0 0 ${isMobile ? "6px 1px" : "12px 2px"} ${LAMP}`,
          }}
        />

        {/* Top clip — hides conic origin noise above the bar */}
        <div
          className="absolute inset-auto z-40 w-full"
          style={{
            height: isMobile ? "3rem" : "11rem",
            transform: `translateY(${isMobile ? "-3.5rem" : "-12rem"})`,
            background: BG,
          }}
        />
      </div>

      {/* ── Illuminated content ── pulled up into the light cone */}
      <div
        className="relative z-50 flex flex-col items-center w-full px-6 text-center"
        style={{ transform: `translateY(${isMobile ? "-2rem" : "-18rem"})` }}
      >
        {children}
      </div>
    </div>
  );
}

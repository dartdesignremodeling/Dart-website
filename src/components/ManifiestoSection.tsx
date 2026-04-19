"use client";

import { motion } from "framer-motion";

export function ManifiestoSection() {
  return (
    <>
      {/* Top rule */}
      <div style={{ backgroundColor: "#221c10" }}>
        <div style={{ height: "1px", backgroundColor: "rgba(201, 169, 110, 0.3)" }} />
      </div>

      <section
        className="relative w-full"
        style={{
          backgroundColor: "#221c10",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        {/* Vertical label */}
        <div
          className="absolute left-8 top-1/2 hidden md:flex items-center justify-center"
          style={{ transform: "translateY(-50%) rotate(-90deg)", transformOrigin: "center center" }}
        >
          <span
            className="tracking-[0.35em] text-[10px] font-normal"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontVariant: "small-caps",
              color: "#C9A96E",
              opacity: 0.7,
              letterSpacing: "0.35em",
              whiteSpace: "nowrap",
            }}
          >
            EL MANIFIESTO
          </span>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          {/* Quote */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="leading-[1.0] text-[#f5e6c8] text-center mb-16"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
            }}
          >
            &ldquo;La luz no es solo iluminación; es el{" "}
            <span style={{ color: "#C9A96E", fontStyle: "normal" }}>alma</span>{" "}
            de un espacio.&rdquo;
          </motion.h2>

          {/* Mobile: two stacked paragraphs, no dividers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden flex flex-col gap-6"
          >
            <p
              className="text-sm leading-[1.9] font-normal text-center"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#a89060" }}
            >
              Creemos que la oscuridad es el lienzo sobre el que se pinta la vida. En D&apos;art, no fabricamos ambientes, los cubramos de experiencias.
            </p>
            <p
              className="text-sm leading-[1.9] font-normal text-center"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#a89060" }}
            >
              Nacidos de la honestidad de los materiales: mármol, madera, acero, elevados por la precisión del diseño, nuestros espacios son refugios para quienes los habitan.
            </p>
          </motion.div>

          {/* Desktop: two-column body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:grid md:grid-cols-2 md:gap-16"
          >
            <p
              className="text-sm leading-[1.9] font-normal text-left"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#a89060" }}
            >
              Creemos que la oscuridad es el lienzo sobre el que se pinta la vida. En D&apos;art, no fabricamos ambientes — los cubramos de experiencias.
            </p>
            <p
              className="text-sm leading-[1.9] font-normal text-left"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#a89060" }}
            >
              Nacidos de la honestidad de los materiales — mármol, madera, acero — y elevados por la precisión del diseño, nuestros espacios son refugios para quienes los habitan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom rule */}
      <div style={{ backgroundColor: "#221c10" }}>
        <div style={{ height: "1px", backgroundColor: "rgba(201, 169, 110, 0.3)" }} />
      </div>
    </>
  );
}

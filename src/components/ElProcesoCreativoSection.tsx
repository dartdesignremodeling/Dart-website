"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const steps = [
  {
    number: "01",
    label: "ORIGEN",
    title: "El trazo inicial",
    body: "Todo comienza con una conversación honesta. Escuchamos la identidad de quienes habitarán el espacio — sus ritmos, sus silencios, sus aspiraciones — y los traducimos al primer trazo sobre papel.",
    src: "/images/boceto-1.jpg",
    alt: "Boceto de proyecto",
    imageLeft: true,
    caption: "Petaloa",
    year: "2012",
  },
  {
    number: "02",
    label: "TRANSFORMACIÓN",
    title: "La precisión del detalle",
    body: "Del boceto al plano técnico. Cada decisión de material, luz y proporción es deliberada. La arquitectura no improvisa — construye certezas sobre certezas hasta que el espacio cobra vida propia.",
    src: "/images/lampara_azul.jpg",
    alt: "Plano técnico",
    imageLeft: false,
  },
  {
    number: "03",
    label: "REALIZACIÓN",
    title: "El espacio que perdura",
    body: "La ejecución es donde la visión se vuelve tangible. Supervisamos cada etapa con la misma exigencia del primer trazo, porque un espacio bien realizado no envejece — se profundiza con el tiempo.",
    src: "/images/lampara_sala.jpg",
    alt: "Boceto de concepto",
    imageLeft: true,
  },
];

export function ElProcesoCreativoSection() {
  return (
    <section className="relative overflow-hidden proceso-creativo-section" style={{ background: "#221c10" }}>

      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,168,83,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.06) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <p
          className="font-sans text-[10px] tracking-[0.35em] uppercase mb-5"
          style={{ color: "#D4A853" }}
        >
          El Proceso Creativo
        </p>
        <h2
          className="leading-tight text-[#f5e6c8] text-[clamp(2rem,8vw,3rem)] md:text-[clamp(2.8rem,5vw,4.5rem)]"
          style={{ fontFamily: "'Urbanist', sans-serif", fontStyle: "italic", fontWeight: 300 }}
        >
          Donde todo<br />
          <span style={{ color: "#c9a84c" }}>comienza</span>
        </h2>
      </div>

      {/* Steps */}
      {steps.map((step, i) => (
        <div
          key={step.number}
          className="relative z-10"
          style={{ borderTop: i > 0 ? "1px solid rgba(212,168,83,0.12)" : undefined }}
        >
          {/* Desktop: 55/45 split */}
          <div
            className="hidden md:flex"
            style={{ height: "620px" }}
          >
            {/* Image column — 55% */}
            <motion.div
              initial={{ opacity: 0, x: step.imageLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease }}
              className="flex-shrink-0"
              style={{
                width: "55%",
                order: step.imageLeft ? 1 : 2,
                padding: "2rem",
                paddingLeft: step.imageLeft ? "8rem" : "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '75%', maxWidth: '400px' }}>
                <div
                  style={{
                    position: 'relative',
                    boxShadow: '0 0 40px rgba(236,164,19,0.1), 0 0 80px rgba(180,100,0,0.07), 0 30px 60px rgba(0,0,0,0.5)',
                    outline: '1px solid rgba(180,140,60,0.25)',
                    outlineOffset: '-1px',
                    filter: 'drop-shadow(0 0 30px rgba(236,164,19,0.12)) drop-shadow(0 0 60px rgba(200,120,0,0.08))',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={step.src}
                    alt={step.alt}
                    style={{
                      width: "100%",
                      height: "460px",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                </div>
                {step.caption && (
                  <div style={{ marginTop: '12px' }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: '#f5f0e8', fontSize: '1rem', margin: 0 }}>
                      {step.caption}
                    </p>
                    <p style={{ color: 'rgba(236,164,19,0.5)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '4px 0 0 0' }}>
                      {step.year}
                    </p>
                  </div>
                )}
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background: step.imageLeft
                    ? "linear-gradient(to right, transparent 60%, rgba(30,21,8,0.5) 100%)"
                    : "linear-gradient(to left, transparent 60%, rgba(30,21,8,0.5) 100%)",
                }}
              />
            </motion.div>

            {/* Text column — 45% */}
            <motion.div
              initial={{ opacity: 0, x: step.imageLeft ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease, delay: 0.2 }}
              style={{
                width: "45%",
                order: step.imageLeft ? 2 : 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: i === 1 ? "8rem" : undefined,
                paddingRight: i === 0 ? "6rem" : undefined,
              }}
            >
              <div className="px-8 py-12 max-w-md">
                <p
                  className="font-sans text-[10px] tracking-[0.4em] uppercase mb-6"
                  style={{ color: "#C9A96E" }}
                >
                  {step.number} · {step.label}
                </p>
                <h3
                  className="text-[#f5e6c8] leading-tight mb-6"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-sans text-sm leading-loose"
                  style={{ color: "#a89060" }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col">
            <div style={{ overflow: "visible", width: "100%", padding: "1rem 1.5rem 0.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '75%', maxWidth: '400px', margin: '0 auto' }}>
                <div
                  style={{
                    position: 'relative',
                    boxShadow: '0 0 40px rgba(236,164,19,0.1), 0 0 80px rgba(180,100,0,0.07), 0 30px 60px rgba(0,0,0,0.5)',
                    outline: '1px solid rgba(180,140,60,0.25)',
                    outlineOffset: '-1px',
                    filter: 'drop-shadow(0 0 30px rgba(236,164,19,0.12)) drop-shadow(0 0 60px rgba(200,120,0,0.08))',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={step.src}
                    alt={step.alt}
                    style={{
                      width: "100%",
                      height: "380px",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                </div>
                {step.caption && (
                  <div className="proceso-creativo-text" style={{ marginTop: '12px' }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: '#f5f0e8', fontSize: '1rem', margin: 0 }}>
                      {step.caption}
                    </p>
                    <p style={{ color: 'rgba(236,164,19,0.5)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '4px 0 0 0' }}>
                      {step.year}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div
              className="py-6 proceso-creativo-text"
              style={{
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                maxWidth: '100%',
                border: 'none',
                borderTop: 'none',
                borderBottom: 'none',
              }}
            >
              <p
                className="font-sans text-[10px] tracking-[0.4em] uppercase mb-4"
                style={{ color: "#C9A96E" }}
              >
                {step.number} · {step.label}
              </p>
              <h3
                className="text-[#f5e6c8] leading-tight mb-4"
                style={{ fontFamily: "'Urbanist', sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.5rem, 6vw, 2rem)" }}
              >
                {step.title}
              </h3>
              <p
                className="font-sans text-sm"
                style={{ color: "#a89060", lineHeight: '1.6' }}
              >
                {step.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

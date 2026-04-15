import { LampEffect } from "./LampEffect";
import { StatsBar } from "./StatsBar";

const pillars = [
  {
    num: "01",
    title: "Visión Artística",
    desc: "Cada decisión estética es deliberada, cada línea tiene propósito.",
  },
  {
    num: "02",
    title: "Maestría Técnica",
    desc: "Décadas de experiencia en arquitectura y construcción de primer nivel.",
  },
  {
    num: "03",
    title: "Materialidad Noble",
    desc: "Selección rigurosa de materiales que envejecen con dignidad y carácter.",
  },
];

export function OurEssenceSection() {
  return (
    <>
    <section id="nuestra-esencia" className="relative overflow-hidden">

      {/* Section top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A96E]/10" />

      {/* ── Lamp header ── */}
      <LampEffect />

      {/* ── Founder block — 2px gold left accent ── */}
      <div className="relative">
        {/* Left accent line */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-[#C9A96E]/30" />

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch">

          {/* Left — portrait image */}
          <div className="relative mx-5 md:mx-0 h-[360px] md:h-[650px] overflow-hidden rounded-lg md:rounded-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dise%C3%B1ador.jpg"
              alt="Juan Carlos Márquez — Fundador & Director Creativo"
              className="w-full h-full object-cover object-top block grayscale"
            />

            {/* Mobile overlay — gradient + name on photo */}
            <div className="md:hidden absolute inset-0 rounded-lg" style={{ background: "linear-gradient(to top, rgba(30,21,8,0.88) 0%, rgba(30,21,8,0.3) 45%, transparent 70%)" }} />
            <div className="md:hidden absolute bottom-0 left-0 right-0 p-5">
              <p
                className="font-sans text-[9px] tracking-[0.22em] uppercase mb-2"
                style={{ color: "#D4A853" }}
              >
                Fundador &amp; Director Creativo
              </p>
              <h3
                className="text-[#f5f0e8] leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                }}
              >
                Juan Carlos Márquez
              </h3>
            </div>
          </div>

          {/* Right — founder text */}
          <div className="px-5 py-10 md:py-16 md:px-12 md:pl-[60px] flex flex-col justify-center">
            {/* Label — desktop only */}
            <p
              className="hidden md:block font-sans text-[10px] tracking-[0.35em] uppercase mb-5"
              style={{ color: "#D4A853" }}
            >
              — Fundador &amp; Director Creativo
            </p>

            {/* Name — desktop only */}
            <h3
              className="hidden md:block text-[#f5f0e8] leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 400,
              }}
            >
              Juan Carlos Márquez
            </h3>

            {/* Bio */}
            <p
              className="font-sans font-light leading-7 text-[#f5e6c8]/55 mb-8 pl-4 border-l border-[#D4A853]/40 md:border-0 md:pl-0"
              style={{ fontSize: "clamp(0.78rem, 2.2vw, 0.875rem)" }}
            >
              Con más de 30 años transformando espacios, Juan Carlos Márquez ha
              convertido el diseño en un lenguaje propio. Diseñador industrial
              con profundo dominio del interiorismo, la remodelación y la
              iluminación arquitectónica, cada proyecto nace de una imaginación
              sin límites y una obsesión por la calidad.
            </p>

            {/* Quote — desktop */}
            <div className="hidden md:block">
              <div className="h-px w-12 bg-[#C9A96E]/40 mb-7" />
              <blockquote
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(1.8rem, 2.6vw, 2.5rem)",
                  lineHeight: 1.25,
                  color: "#C9A96E",
                }}
              >
                &ldquo;La luz no ilumina espacios.
                <br />
                Revela su alma.&rdquo;
              </blockquote>
            </div>

            {/* Quote — mobile */}
            <div className="md:hidden flex flex-col items-center text-center pt-2 pb-6">
              <div className="w-8 h-px bg-[#D4A853]/60 mb-6" />
              <blockquote
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "1.6rem",
                  lineHeight: 1.35,
                  color: "#D4A853",
                }}
              >
                &ldquo;La luz no ilumina espacios.
                <br />
                Revela su alma.&rdquo;
              </blockquote>
              <div className="w-8 h-px bg-[#D4A853]/60 mt-6" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Body content ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-[120px] pb-[120px]">

        {/* Thin divider */}
        <div className="h-px w-full bg-[#D4A853]/10 mb-16" />

        {/* Two-column philosophy + pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 items-start">

          {/* Left — philosophy text */}
          <div className="lg:pr-16">
            <p
              className="font-serif italic font-light leading-[1.4] text-[#f5e6c8]/75"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.4rem)" }}
            >
              D&apos;art nace de la convicción de que cada espacio tiene el
              potencial de ser una obra maestra. Fusionamos la sensibilidad
              artística con la precisión técnica para crear entornos que van
              más allá de lo funcional — espacios que emocionan, que perduran,
              que reflejan la identidad única de quienes los habitan.
            </p>
          </div>

          {/* Vertical gold divider */}
          <div className="hidden lg:block w-px self-stretch bg-[#D4A853]/20 mx-8" />

          {/* Right — 3 pillars */}
          <div className="flex flex-col divide-y divide-[#D4A853]/15 lg:pl-8">
            {pillars.map((item) => (
              <div key={item.title} className="group relative py-7 flex items-start gap-5 cursor-default overflow-hidden">

                {/* Watermark number */}
                <span
                  className="pointer-events-none select-none absolute bottom-0 right-0 font-serif leading-none z-0"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                    color: "#D4A853",
                    opacity: 0.045,
                    fontWeight: 700,
                  }}
                >
                  {item.num}
                </span>

                {/* Left border line — lights up on hover */}
                <div className="w-px self-stretch bg-[#D4A853]/25 group-hover:bg-[#D4A853] transition-colors duration-400 shrink-0" />

                {/* Text */}
                <div className="relative z-10 pl-2">
                  <p
                    className="font-serif italic text-[#f5e6c8] leading-snug mb-1.5 transition-transform duration-300 group-hover:translate-x-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)",
                    }}
                  >
                    {item.title}
                  </p>
                  <p className="font-sans font-light text-xs leading-6 text-[#f5e6c8]/45">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-12 right-12 h-px bg-[#D4A853]/8" />
    </section>

    {/* ── Stats bar — after founder ── */}
    <StatsBar />
    </>
  );
}

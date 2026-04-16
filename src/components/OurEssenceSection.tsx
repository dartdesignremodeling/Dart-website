export function OurEssenceSection() {
  return (
    <>
    <section id="nuestra-esencia" className="relative overflow-hidden" style={{ paddingTop: "60px" }}>

      {/* Section top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A96E]/10" />

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

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-12 right-12 h-px bg-[#D4A853]/8" />
    </section>

</>
  );
}

"use client";

const sketches = [
  {
    id: 1,
    src: "/images/boceto-1.jpg",
    alt: "Boceto de proyecto — perspectiva interior",
  },
  {
    id: 2,
    src: "/images/boceto-2.jpg",
    alt: "Plano técnico — detalle de iluminación",
  },
  {
    id: 3,
    src: "/images/boceto-3.jpg",
    alt: "Boceto de concepto — distribución espacial",
  },
];

const frameStyle = {
  background: "#f5f0e8",
  border: "1px solid rgba(212,168,83,0.35)",
  transition: "border-color 0.3s ease",
};

const frameHoverClass =
  "group overflow-hidden flex items-center justify-center";

export function ElProcesoCreativoSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#1e1508" }}
    >
      {/* Architectural grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,168,83,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,168,83,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Faint top rule */}
      <div className="absolute top-0 left-12 right-12 h-px bg-[#D4A853]/8" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36">

        {/* ── Header ── */}
        <div className="mb-14 md:mb-16">
          <div className="flex items-center gap-4 mb-5">
            <p
              className="font-sans text-[10px] tracking-[0.35em] uppercase shrink-0"
              style={{ color: "#D4A853" }}
            >
              El Proceso Creativo
            </p>
            <div className="h-px bg-[#D4A853]/25" style={{ width: "80px" }} />
          </div>

          <h2
            className="font-serif italic leading-[1.0] text-[#f5e6c8]"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            Donde todo
            <br />
            <span style={{ color: "#c9a84c" }}>comienza</span>
          </h2>
        </div>

        {/* ── Gallery — desktop: tall left + two stacked right ── */}
        <div className="hidden md:grid gap-4" style={{ gridTemplateColumns: "1.35fr 1fr" }}>

          {/* Left — tall frame */}
          <div
            className={frameHoverClass}
            style={{ ...frameStyle, height: "560px" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,168,83,0.75)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,168,83,0.35)")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sketches[0].src}
              alt={sketches[0].alt}
              className="w-full h-full"
              style={{ objectFit: "contain", filter: "sepia(0.3) brightness(0.85)" }}
            />
          </div>

          {/* Right — two stacked frames */}
          <div className="flex flex-col gap-4">
            {[sketches[1], sketches[2]].map((sketch) => (
              <div
                key={sketch.id}
                className={frameHoverClass}
                style={{ ...frameStyle, flex: "1", minHeight: "0" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,168,83,0.75)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,168,83,0.35)")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sketch.src}
                  alt={sketch.alt}
                  className="w-full h-full"
                  style={{ objectFit: "contain", filter: "sepia(0.3) brightness(0.85)" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Gallery — mobile: stacked full + two side by side ── */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Main tall frame */}
          <div
            className="flex items-center justify-center"
            style={{ ...frameStyle, height: "300px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sketches[0].src}
              alt={sketches[0].alt}
              className="w-full h-full"
              style={{ objectFit: "contain", filter: "sepia(0.3) brightness(0.85)" }}
            />
          </div>

          {/* Two smaller side by side */}
          <div className="grid grid-cols-2 gap-4">
            {[sketches[1], sketches[2]].map((sketch) => (
              <div
                key={sketch.id}
                className="flex items-center justify-center"
                style={{ ...frameStyle, height: "180px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sketch.src}
                  alt={sketch.alt}
                  className="w-full h-full"
                  style={{ objectFit: "contain", filter: "sepia(0.3) brightness(0.85)" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Caption ── */}
        <p
          className="mt-8 md:mt-10 font-serif italic text-center md:text-left"
          style={{
            fontSize: "clamp(0.78rem, 1.2vw, 0.9rem)",
            color: "rgba(245, 230, 200, 0.4)",
            lineHeight: 1.7,
          }}
        >
          Cada proyecto nace de un trazo. La precisión técnica de Juan Carlos Márquez,
          plasmada desde el primer boceto.
        </p>

      </div>

      {/* Faint bottom rule */}
      <div className="absolute bottom-0 left-12 right-12 h-px bg-[#D4A853]/8" />
    </section>
  );
}

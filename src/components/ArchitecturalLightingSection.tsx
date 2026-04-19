const lightingServices = [
  {
    title: "Iluminación de Acento",
    desc: "Proyectores y sistemas de riel que resaltan texturas, obras de arte y elementos arquitectónicos con precisión milimétrica.",
  },
  {
    title: "Iluminación Ambiental",
    desc: "Capas de luz suave y envolvente que definen la atmósfera de cada espacio y guían la experiencia sensorial.",
  },
  {
    title: "Luz Natural Integrada",
    desc: "Diseño estratégico de aberturas, espejos y superficies reflectantes para maximizar y esculpir la luz natural.",
  },
  {
    title: "Iluminación Exterior",
    desc: "Paisajismo lumínico que transforma fachadas, jardines y circulaciones en escenas nocturnas de gran impacto.",
  },
];

export function ArchitecturalLightingSection() {
  return (
    <section id="lighting" className="relative py-36 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#221c10]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 80% at 85% 50%, rgba(201, 168, 76, 0.06) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(180, 130, 40, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left — Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Atmospheric light sculpture */}
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Outer border */}
              <div className="absolute inset-0 border border-[#c9a84c]/15 rounded-sm" />

              {/* Main gradient panel */}
              <div
                className="absolute inset-4 rounded-sm overflow-hidden"
                style={{
                  background: `
                    radial-gradient(ellipse 60% 80% at 70% 30%, rgba(201, 168, 76, 0.18) 0%, transparent 60%),
                    radial-gradient(ellipse 40% 60% at 30% 70%, rgba(160, 100, 20, 0.12) 0%, transparent 55%),
                    linear-gradient(165deg, #2e2010 0%, #221c10 60%, #120d04 100%)
                  `,
                }}
              >
                {/* Light beam simulation */}
                <div
                  className="absolute top-0 right-12 w-px h-full opacity-20"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(201,168,76,0.8) 30%, rgba(201,168,76,0.4) 60%, transparent)",
                  }}
                />
                <div
                  className="absolute top-0 right-20 w-px h-3/4 opacity-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(201,168,76,0.6) 40%, transparent)",
                  }}
                />

                {/* Subtle architectural lines */}
                <div className="absolute bottom-12 left-8 right-8 h-px bg-[#c9a84c]/10" />
                <div className="absolute bottom-20 left-8 right-16 h-px bg-[#c9a84c]/06" />

                {/* Center glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 50% 30% at 65% 35%, rgba(201,168,76,0.08) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-px bg-[#c9a84c]/50" />
              <div className="absolute top-0 left-0 w-px h-6 bg-[#c9a84c]/50" />
              <div className="absolute bottom-0 right-0 w-6 h-px bg-[#c9a84c]/50" />
              <div className="absolute bottom-0 right-0 w-px h-6 bg-[#c9a84c]/50" />

              {/* Label */}
              <div className="absolute -bottom-6 left-4 flex items-center gap-3">
                <div className="w-4 h-px bg-[#c9a84c]/40" />
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]/40">
                  Diseño Lumínico
                </span>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-8 h-px bg-[#c9a84c]/40" />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]/60">
                03 — Iluminación Arquitectónica
              </span>
            </div>

            <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.0] text-[#f5e6c8] mb-8" style={{ fontFamily: "'Urbanist', sans-serif", fontStyle: "italic", fontWeight: 300 }}>
              La luz como
              <br />
              <span className="text-[#c9a84c]">material</span>
              <br />
              de diseño
            </h2>

            <p className="font-sans font-light text-base leading-8 text-[#f5e6c8]/55 mb-12 max-w-lg">
              La iluminación no es solo funcional — es el instrumento que define
              volúmenes, crea jerarquías visuales y dota a los espacios de su
              carácter único. En D&apos;art, el diseño lumínico es una disciplina
              autónoma dentro de cada proyecto.
            </p>

            {/* Services list */}
            <div className="space-y-0">
              {lightingServices.map((service, i) => (
                <div
                  key={service.title}
                  className={`py-7 flex gap-6 items-start group cursor-default ${
                    i < lightingServices.length - 1
                      ? "border-b border-[#c9a84c]/8"
                      : ""
                  }`}
                >
                  <div className="w-1 h-full shrink-0 pt-2">
                    <div className="w-px h-4 bg-[#c9a84c]/30 group-hover:bg-[#c9a84c]/70 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#f5e6c8]/90 mb-1.5 group-hover:text-[#e8c87a] transition-colors duration-300" style={{ fontFamily: "'Urbanist', sans-serif", fontStyle: "italic", fontWeight: 300 }}>
                      {service.title}
                    </h3>
                    <p className="font-sans font-light text-sm leading-6 text-[#f5e6c8]/40">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

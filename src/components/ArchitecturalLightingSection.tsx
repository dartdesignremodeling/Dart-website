const lightingServices = [
  {
    title: "Iluminación de Acento",
    desc: "Proyectores y sistemas de riel que resaltan texturas, obras de arte y elementos arquitectónicos con precisión milimétrica.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4 L10 12 L18 12 Z" stroke="#c9a84c" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
        <line x1="14" y1="12" x2="14" y2="22" stroke="#c9a84c" strokeWidth="1.2" strokeDasharray="2 2"/>
        <line x1="8" y1="24" x2="20" y2="24" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="14" cy="4" r="1.5" fill="#c9a84c"/>
      </svg>
    ),
  },
  {
    title: "Iluminación Ambiental",
    desc: "Capas de luz suave y envolvente que definen la atmósfera de cada espacio y guían la experiencia sensorial.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="13" r="4.5" stroke="#c9a84c" strokeWidth="1.2"/>
        <circle cx="14" cy="13" r="8" stroke="#c9a84c" strokeWidth="0.6" strokeDasharray="1.5 2.5" opacity="0.5"/>
        <circle cx="14" cy="13" r="11" stroke="#c9a84c" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.25"/>
        <circle cx="14" cy="13" r="2" fill="#c9a84c" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: "Luz Natural Integrada",
    desc: "Diseño estratégico de aberturas, espejos y superficies reflectantes para maximizar y esculpir la luz natural.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="4" stroke="#c9a84c" strokeWidth="1.2"/>
        <line x1="14" y1="3" x2="14" y2="6.5" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="14" y1="21.5" x2="14" y2="25" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="3" y1="14" x2="6.5" y2="14" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="21.5" y1="14" x2="25" y2="14" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="6.5" y1="6.5" x2="8.9" y2="8.9" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="19.1" y1="19.1" x2="21.5" y2="21.5" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="21.5" y1="6.5" x2="19.1" y2="8.9" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="8.9" y1="19.1" x2="6.5" y2="21.5" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Iluminación Exterior",
    desc: "Paisajismo lumínico que transforma fachadas, jardines y circulaciones en escenas nocturnas de gran impacto.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="14" y1="24" x2="14" y2="10" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M14 10 Q14 4 9 4 Q9 10 14 10" stroke="#c9a84c" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
        <ellipse cx="14" cy="24" rx="5" ry="1.5" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
        <line x1="9" y1="7" x2="6" y2="9" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
        <line x1="9" y1="5" x2="6" y2="5" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
        <line x1="9" y1="9" x2="7" y2="12" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

export function ArchitecturalLightingSection() {
  return (
    <section id="lighting" className="relative py-36 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#221c10]" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(180,140,60,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,140,60,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
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

          {/* Left — 2x2 service cards */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            {lightingServices.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden cursor-default"
                style={{
                  border: "1px solid rgba(201,168,76,0.15)",
                  minHeight: "200px",
                }}
              >
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-colors duration-500"
                  style={{ background: "rgba(0,0,0,0.65)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(0,0,0,0.45)" }}
                />

                {/* Content */}
                <div className="relative p-6 flex flex-col gap-4 h-full">
                  <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {service.icon}
                  </div>
                  <h3
                    className="font-serif italic font-light text-[#f5e6c8]/90 leading-snug group-hover:text-[#e8c87a] transition-colors duration-300"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {service.title}
                  </h3>
                  <p className="font-sans font-light leading-6 text-[#f5e6c8]/55" style={{ fontSize: "0.75rem" }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-8 h-px bg-[#c9a84c]/40" />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]/60">
                03 — Iluminación Arquitectónica
              </span>
            </div>

            <h2 className="font-serif italic font-light text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.0] text-[#f5e6c8] mb-8">
              La luz como
              <br />
              <span className="text-[#c9a84c]">material</span>
              <br />
              de diseño
            </h2>

            <p className="font-sans font-light text-base leading-8 text-[#f5e6c8]/55 max-w-lg">
              La iluminación no es solo funcional — es el instrumento que define
              volúmenes, crea jerarquías visuales y dota a los espacios de su
              carácter único. En D&apos;art, el diseño lumínico es una disciplina
              autónoma dentro de cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

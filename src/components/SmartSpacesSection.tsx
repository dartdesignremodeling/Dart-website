const services = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="0.8" />
        <line x1="20" y1="4" x2="20" y2="8" stroke="currentColor" strokeWidth="0.8" />
        <line x1="20" y1="32" x2="20" y2="36" stroke="currentColor" strokeWidth="0.8" />
        <line x1="4" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="0.8" />
        <line x1="32" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    label: "Control Centralizado",
    desc: "Gestión integral de todos los sistemas del hogar desde un único punto de control, adaptado a su estilo de vida.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="8" y="10" width="24" height="20" rx="1" stroke="currentColor" strokeWidth="0.8" />
        <line x1="14" y1="30" x2="14" y2="35" stroke="currentColor" strokeWidth="0.8" />
        <line x1="26" y1="30" x2="26" y2="35" stroke="currentColor" strokeWidth="0.8" />
        <line x1="10" y1="35" x2="30" y2="35" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    label: "Iluminación Inteligente",
    desc: "Escenas lumínicas programadas que se adaptan a cada momento del día y a cada estado emocional.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 6 L34 14 L34 26 L20 34 L6 26 L6 14 Z" stroke="currentColor" strokeWidth="0.8" />
        <path d="M20 12 L28 16.5 L28 25.5 L20 30 L12 25.5 L12 16.5 Z" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="20" cy="21" r="3" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    label: "Climatización Autónoma",
    desc: "Sistemas de clima que aprenden sus preferencias y optimizan el confort mientras reducen el consumo energético.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="12" y="6" width="16" height="28" rx="2" stroke="currentColor" strokeWidth="0.8" />
        <line x1="16" y1="11" x2="24" y2="11" stroke="currentColor" strokeWidth="0.8" />
        <line x1="16" y1="15" x2="24" y2="15" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="20" cy="29" r="1.5" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    label: "Seguridad Integrada",
    desc: "Monitoreo inteligente, acceso biométrico y protocolos de seguridad diseñados con discreción y elegancia.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M8 22 Q20 8 32 22" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M11 26 Q20 14 29 26" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="20" cy="30" r="2.5" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    label: "Conectividad Total",
    desc: "Infraestructura de red de alto rendimiento que soporta todos los dispositivos y sistemas del espacio.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="0.8" />
        <path d="M10 34 C10 27 30 27 30 34" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="33" y1="12" x2="37" y2="12" stroke="currentColor" strokeWidth="0.8" />
        <line x1="35" y1="10" x2="35" y2="14" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
    label: "Control por Voz",
    desc: "Integración de asistentes de voz y interfaces naturales para una experiencia de uso completamente intuitiva.",
  },
];

export function SmartSpacesSection() {
  return (
    <section id="smart-spaces" className="relative py-36 md:py-48 overflow-hidden">
      {/* Background treatment */}
      <div className="absolute inset-0 bg-[#251a08]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201, 168, 76, 0.04) 0%, transparent 70%)",
        }}
      />

      {/* Geometric grid hint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-8 h-px bg-[#c9a84c]/40" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9a84c]/60">
              02 — Smart Spaces
            </span>
            <div className="w-8 h-px bg-[#c9a84c]/40" />
          </div>

          <h2 className="font-serif italic text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.0] text-[#f5e6c8] mb-6">
            Espacios
            <br />
            <span className="text-[#c9a84c]">Inteligentes</span>
          </h2>
          <p className="font-sans font-light text-sm md:text-base leading-7 text-[#f5e6c8]/50 max-w-lg mx-auto">
            Integramos la domótica de última generación con la estética más
            refinada, creando hogares que anticipan sus necesidades y elevan
            cada momento cotidiano.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, i) => (
            <div
              key={service.label}
              className={`group p-10 border-[#c9a84c]/10 hover:bg-[#c9a84c]/[0.03] transition-all duration-500 ${
                i < 3 ? "border-b" : ""
              } ${i % 3 !== 2 ? "lg:border-r" : ""} ${
                i % 2 === 0 ? "md:border-r lg:border-r-0" : ""
              } ${i < 4 ? "md:border-b" : ""} ${
                i === 3 ? "md:border-r-0 lg:border-r" : ""
              }`}
            >
              {/* Icon */}
              <div className="text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-colors duration-300 mb-6">
                {service.icon}
              </div>

              {/* Thin line */}
              <div className="w-6 h-px bg-[#c9a84c]/30 mb-5 group-hover:w-10 transition-all duration-500" />

              <h3 className="font-serif italic text-xl text-[#f5e6c8] mb-3 group-hover:text-[#e8c87a] transition-colors duration-300">
                {service.label}
              </h3>
              <p className="font-sans font-light text-sm leading-6 text-[#f5e6c8]/45">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-24 flex items-center justify-center gap-8">
          <div className="h-px flex-1 max-w-[120px] bg-[#c9a84c]/15" />
          <p className="font-serif italic text-base text-[#c9a84c]/50 text-center">
            Tecnología invisible. Confort evidente.
          </p>
          <div className="h-px flex-1 max-w-[120px] bg-[#c9a84c]/15" />
        </div>
      </div>
    </section>
  );
}

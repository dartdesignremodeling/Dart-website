const projects = [
  {
    id: 1,
    name: "Penthouse Bogotá",
    tag: "Residencial",
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    style: { gridColumn: "1", gridRow: "1 / 3" },
  },
  {
    id: 2,
    name: "Suite Andina",
    tag: "Hotelería",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
    style: { gridColumn: "2", gridRow: "1" },
  },
  {
    id: 3,
    name: "Casa Medellín",
    tag: "Residencial",
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80",
    style: { gridColumn: "3", gridRow: "1" },
  },
  {
    id: 4,
    name: "Lobby Corporativo",
    tag: "Corporativo",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    style: { gridColumn: "2 / 4", gridRow: "2" },
  },
  {
    id: 5,
    name: "Residencia Las Palmas",
    tag: "Residencial",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    style: { gridColumn: "1 / 3", gridRow: "3" },
  },
  {
    id: 6,
    name: "Atelier Iluminación",
    tag: "Iluminación",
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=900&q=80",
    style: { gridColumn: "3", gridRow: "3" },
  },
];

export function NuestrasObrasSection() {
  return (
    <section
      id="nuestras-obras"
      className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden"
      style={{ background: "#1e1508" }}
    >
      {/* Subtle top rule */}
      <div className="absolute top-0 left-12 right-12 h-px bg-[#D4A853]/8" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <p
              className="font-sans text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ color: "#D4A853" }}
            >
              Serie 2023 — 2024
            </p>
            <h2 className="font-serif italic text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.0] text-[#f5e6c8] mb-8">
              Nuestras
              <br />
              <span style={{ color: "#c9a84c" }}>Obras</span>
            </h2>
          </div>
          <p
            className="font-sans font-light text-[#f5e6c8]/40 max-w-xs text-right hidden sm:block"
            style={{ fontSize: "0.8rem", lineHeight: 1.7 }}
          >
            Una selección de proyectos que definen
            <br />
            nuestra visión del espacio.
          </p>
        </div>

        {/* Masonry grid — desktop */}
        <div
          className="hidden md:grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "380px 280px 360px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden"
              style={project.style}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.src}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ filter: "brightness(0.82)" }}
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-[#1e1508]/0 group-hover:bg-[#1e1508]/55 transition-colors duration-500" />

              {/* Tag — always visible, top left */}
              <span
                className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.28em] uppercase"
                style={{ color: "#D4A853", opacity: 0.8 }}
              >
                {project.tag}
              </span>

              {/* Hover content — name + arrow */}
              <div className="absolute inset-0 flex flex-col justify-end p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="flex items-end justify-between">
                  <h3
                    className="text-[#f5f0e8] leading-tight"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                    }}
                  >
                    {project.name}
                  </h3>
                  <span
                    className="text-[#D4A853] text-lg ml-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    →
                  </span>
                </div>
                {/* Thin gold line below name */}
                <div className="mt-3 w-8 h-px bg-[#D4A853]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — simple 2-column stacked grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden aspect-[3/4]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.src}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.82)" }}
              />
              <div className="absolute inset-0 bg-[#1e1508]/0 group-hover:bg-[#1e1508]/55 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1e1508]/80 to-transparent">
                <p
                  className="text-[#f5f0e8] leading-tight"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                  }}
                >
                  {project.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 border border-[#f5f0e8]/60 text-[#f5f0e8]/80 transition-all duration-300 hover:border-[#D4A853] hover:text-[#D4A853]"
          >
            Ver Más Proyectos →
          </a>
        </div>

      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-12 right-12 h-px bg-[#D4A853]/8" />
    </section>
  );
}

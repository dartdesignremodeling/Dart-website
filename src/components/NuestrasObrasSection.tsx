const projects = [
  {
    id: 1,
    name: "Trípode Pie",
    tag: "ILUMINACIÓN",
    src: "/images/lampara_blanca.jpg",
    style: { gridColumn: "1", gridRow: "1 / 3" },
  },
  {
    id: 2,
    name: "Arrow",
    tag: "ILUMINACIÓN",
    src: "/images/lampara_pared.jpg",
    style: { gridColumn: "2", gridRow: "1" },
  },
  {
    id: 3,
    name: "Lámpara Negra",
    tag: "ILUMINACIÓN",
    src: "/images/lampara_negra.JPG",
    style: { gridColumn: "3", gridRow: "1" },
  },
  {
    id: 4,
    name: "Nicho de Luz",
    tag: "RESIDENCIAL",
    src: "/images/nicho_luz2.png",
    objectPosition: "center 60%",
    imageScale: 1.4,
    style: { gridColumn: "2 / 4", gridRow: "2" },
  },
  {
    id: 5,
    name: "Proyecto Escala",
    tag: "GRAN ESCALA",
    src: "/images/proyecto_escala.JPG",
    style: { gridColumn: "1 / 3", gridRow: "3" },
  },
  {
    id: 6,
    name: "Sala Cuero",
    tag: "RESIDENCIAL",
    src: "/images/sala_cuero.JPG",
    style: { gridColumn: "3", gridRow: "3" },
  },
];

export function NuestrasObrasSection() {
  return (
    <section
      id="nuestras-obras"
      className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden"
      style={{ background: "#221c10" }}
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
            <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.0] text-[#f5e6c8] mb-8" style={{ fontFamily: "'Urbanist', sans-serif", fontStyle: "italic", fontWeight: 300 }}>
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
                style={{ filter: "brightness(0.82)", objectPosition: project.objectPosition ?? "center center", transform: `scale(${project.imageScale ?? 1})`, transformOrigin: project.objectPosition ?? "center center" }}
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-[#221c10]/0 group-hover:bg-[#221c10]/55 transition-colors duration-500" />

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
                      fontFamily: "'Urbanist', sans-serif",
                      fontStyle: "normal",
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
              <div className="absolute inset-0 bg-[#221c10]/0 group-hover:bg-[#221c10]/55 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#221c10]/80 to-transparent">
                <p
                  className="text-[#f5f0e8] leading-tight"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontStyle: "normal",
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

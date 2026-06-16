const items = [
  "/images/gran-escala/iluminacion_gran_escala.jpg",
  "/images/gran-escala/lamp_mesa.jpg",
  "/images/gran-escala/16.jpg",
  "/images/gran-escala/luz_integrada.JPG",
  "/images/gran-escala/17.JPG",
  "/images/gran-escala/ambiental.JPG",
  "/images/gran-escala/18.JPG",
  "/images/gran-escala/19.JPG",
  "/images/20.JPG",
  "/images/21.jpg",
  "/images/22.JPG",
];

export function IluminacionCollage() {
  return (
    <section style={{ background: "#221c10", paddingBottom: "5rem", paddingLeft: "2rem", paddingRight: "2rem" }} className="md:px-16">
      <style>{`
        .ilum-collage {
          columns: 2;
          column-gap: 6px;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 6px;
        }
        @media (min-width: 768px) {
          .ilum-collage { columns: 3; }
        }
        .ilum-collage .cell {
          break-inside: avoid;
          margin-bottom: 6px;
        }
        .ilum-collage img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          filter: brightness(0.9);
          transition: filter 0.4s ease;
        }
        .ilum-collage img:hover { filter: brightness(1.1); }
      `}</style>

      {/* Label + heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-8 h-px bg-[#c9a84c]/40" />
          <span
            className="font-sans"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c9a84c",
              opacity: 0.7,
            }}
          >
            — Proyectos de Iluminación
          </span>
        </div>
        <h2
          className="font-serif italic font-light text-[#f5e6c8] leading-[1.0]"
          style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
        >
          La luz en cada espacio
        </h2>
      </div>

      <div className="ilum-collage">
        {items.map((src, i) => (
          <div key={i} className="cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

const lamparas = [
  {
    src: "/images/lampara_circulos.jpg",
    name: "Lunen",
    year: "2020",
  },
  {
    src: "/images/lampara_mesa%20de%20noche.jpg",
    name: "Sharlet",
    year: "2021",
  },
  {
    src: "/images/lampara_roja.jpg",
    name: "Inkla",
    year: "2006",
  },
];

export function ColeccionLamparasSection() {
  return (
    <section
      style={{
        background: "#221c10",
        padding: "80px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p
            className="font-sans text-[10px] tracking-[0.38em] uppercase mb-5"
            style={{ color: "#D4A853" }}
          >
            Iluminación
          </p>
          <h2
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              lineHeight: 1.0,
              color: "#f5e6c8",
              margin: 0,
            }}
          >
            La colección
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lamparas.map((lamp) => (
            <div key={lamp.name}>
              {/* Image */}
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lamp.src}
                  alt={lamp.name}
                  style={{
                    width: "100%",
                    aspectRatio: "3 / 4",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)";
                  }}
                />
              </div>

              {/* Name + year */}
              <p
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 300,
                  fontSize: "1.1rem",
                  color: "#f5f0e8",
                  marginTop: "16px",
                  letterSpacing: "0.04em",
                }}
              >
                {lamp.name}
              </p>
              <p
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.75rem",
                  color: "rgba(236,164,19,0.5)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                {lamp.year}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

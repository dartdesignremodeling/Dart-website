const images = [
  "/images/10.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/gran-escala/5.jpg",
  "/images/gran-escala/6.jpg",
  "/images/gran-escala/7.jpg",
];

const doubled = [...images, ...images];

export function IluminacionCarousel() {
  return (
    <div style={{ background: "#221c10", padding: "0 2rem" }} className="md:px-16">
      {/* Title above carousel */}
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
            — Diseño Lumínico
          </span>
        </div>
        <h2
          className="font-serif italic font-light text-[#f5e6c8] leading-[1.0]"
          style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
        >
          Diseño que ilumina
        </h2>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden">
        <style>{`
          @keyframes iluminacion-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .iluminacion-track {
            animation: iluminacion-scroll 30s linear infinite;
            will-change: transform;
          }
        `}</style>

        <div
          className="iluminacion-track"
          style={{
            display: "flex",
            gap: "8px",
            width: "max-content",
          }}
        >
          {doubled.map((src, i) => (
            <div key={i} style={{ flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                style={{ width: "auto", height: "500px", objectFit: "contain", display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

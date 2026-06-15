const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800",
  "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800",
];

const doubled = [...images, ...images];

export function IluminacionCarousel() {
  return (
    <div className="h-[40vh] md:h-[60vh] w-full overflow-hidden">
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
          height: "100%",
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{ flexShrink: 0, width: "clamp(280px, 38vw, 560px)", height: "100%" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

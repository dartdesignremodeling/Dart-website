export function PiezasDeAutorSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#1A1208", paddingTop: "5rem", paddingBottom: "5rem" }}>
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

      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left — Image contained so full lamp is visible */}
        <div
          className="order-1 flex flex-col items-center py-16 lg:py-24 px-8 lg:px-12"
          style={{ background: "#1A1208" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/obelisco-lampara.jpg"
            alt="Lámpara Obelisco"
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "70vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
          {/* Floor glow — sits below the lamp base */}
          <div
            style={{
              width: "100%",
              height: "100px",
              marginTop: "-20px",
              background: "radial-gradient(ellipse at center, rgba(255,200,50,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
              flexShrink: 0,
            }}
          />
        </div>

        {/* Right — Content */}
        <div
          className="relative order-2 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 lg:py-0"
        >
          {/* Label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-6 h-px bg-[#c9a84c]/50" />
            <span
              className="font-sans"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#c9a84c",
              }}
            >
              Pieza de Autor
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-serif italic font-light text-[#f5e6c8] leading-[1.0] mb-4"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            Lámpara Obelisco
          </h2>

          {/* Year */}
          <p
            className="font-sans"
            style={{
              fontSize: "1rem",
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: "2rem",
            }}
          >
            1989
          </p>

          {/* Paragraph */}
          <p
            className="font-sans font-light text-[#f5e6c8]/55 leading-8 max-w-md mb-12"
            style={{ fontSize: "0.95rem" }}
          >
            Todo comenzó con una obsesión por la forma. Inspirada en la silueta del
            Obelisco de Washington, la lámpara Obelisko nació como una escultura que
            también ilumina — diseñada y desarrollada bajo Hallmark, el estudio que
            fundamos para darle vida a esta visión.
            <br /><br />
            Un año después, fuimos invitados a ExpoDiseno 89. La Obelisko fue premiada
            como mejor diseño industrial de la exposición.
            <br /><br />
            Lo que vino después cambió todo: Artemide, una de las empresas de iluminación
            más prestigiosas del mundo, con sede en Italia, se comunicó con nosotros para
            producir y distribuir la lámpara a nivel mundial. Una pieza colombiana,
            reconocida por la industria global del diseño.
          </p>

          {/* Award badge */}
          <div className="flex flex-col gap-3">
            <div className="w-10 h-px bg-[#c9a84c]/40" />
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
              Expo Diseño 1989 · Premio al Diseño de Iluminación
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

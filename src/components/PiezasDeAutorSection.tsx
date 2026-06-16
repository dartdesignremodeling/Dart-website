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
            alt="Lámpara Obelisko"
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
            Lámpara Obelisko
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
            La idea surgió a partir de una lámpara inspirada en el icónico Obelisko de Washington. De esta inspiración nació la lámpara Obelisko. Paralelamente, se fundó Hallomark, una empresa dedicada al diseño y desarrollo de productos innovadores, donde se concibió y desarrolló este proyecto.
            <br /><br />
            Un año después, fuimos invitados a participar en Expodiseño 89, evento en el que la lámpara Obelisko recibió el reconocimiento al Mejor Diseño Industrial. Este importante logro despertó el interés internacional por el producto.
            <br /><br />
            Como resultado, Artemide, una de las empresas más prestigiosas e influyentes del mundo en el sector de la iluminación, se puso en contacto con nosotros con el propósito de convertirse en el fabricante de la lámpara y distribuirla a nivel mundial.
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

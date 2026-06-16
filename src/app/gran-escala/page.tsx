import { GrandScaleSection } from "@/components/GrandScaleSection";

export default function GranEscalaPage() {
  return (
    <main>
      {/* Hero */}
      <div style={{ position: "relative", height: "100vh", width: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/render.JPG"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        {/* Text */}
        <div style={{ position: "absolute", bottom: "3rem", left: "3rem" }}>
          <p
            className="font-sans"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1rem",
            }}
          >
            — 04 Gran Escala
          </p>
          <h1
            className="font-serif italic font-light text-white leading-[1.0]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Proyectos de gran<br />envergadura
          </h1>
        </div>
      </div>

      <GrandScaleSection />
    </main>
  );
}

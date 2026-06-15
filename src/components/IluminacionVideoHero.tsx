export function IluminacionVideoHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      >
        <source src="/images/obelisco.MP4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
        }}
      />

      {/* Bottom-left — project label + award */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "3rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <span
          className="font-sans"
          style={{
            fontSize: "3rem",
            fontWeight: 300,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          Lámpara Obelisco
        </span>
        <span
          className="font-sans"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#c9a84c",
          }}
        >
          Expo Diseño 1989 — Premio al Diseño de Iluminación
        </span>
      </div>

    </section>
  );
}

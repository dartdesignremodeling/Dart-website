export function LuzSection() {
  return (
    <section
      style={{
        height: '100vh',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        marginTop: 0,
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
      }}
    >
      {/* Central golden glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '45vw',
          height: '45vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,164,19,0.6) 0%, rgba(180,100,0,0.3) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Outer warm halo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,164,19,0.2) 0%, rgba(180,100,0,0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Text */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <h2 style={{ margin: 0, padding: 0 }}>
          <span
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
              color: "rgba(255,255,255,0.90)",
              lineHeight: 1.1,
              display: "block",
            }}
          >
            El susurro
          </span>
          <span
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
              color: "rgba(255,255,255,0.95)",
              lineHeight: 1.1,
              display: "block",
            }}
          >
            de la luz
          </span>
        </h2>
      </div>
    </section>
  );
}

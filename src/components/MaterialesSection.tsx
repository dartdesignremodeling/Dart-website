"use client"
import { useRef, useState } from "react"

const materiales = [
  { nombre: "Madera", url: "https://images.unsplash.com/photo-1558618047-f1a2e1d4b8b2?w=400&q=80" },
  { nombre: "Mármol", url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80" },
  { nombre: "Piedra", url: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=400&q=80" },
  { nombre: "Concreto", url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80" },
  { nombre: "Acero", url: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&q=80" },
  { nombre: "Lino", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { nombre: "Arena", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80" },
  { nombre: "Latón", url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80" },
]

export function MaterialesSection() {
  const stripRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  function onMouseDown(e: React.MouseEvent) {
    setDragging(true)
    setStartX(e.pageX - (stripRef.current?.offsetLeft ?? 0))
    setScrollLeft(stripRef.current?.scrollLeft ?? 0)
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!dragging || !stripRef.current) return;
    e.preventDefault()
    const x = e.pageX - (stripRef.current.offsetLeft ?? 0)
    const walk = (x - startX) * 1.2
    stripRef.current.scrollLeft = scrollLeft - walk
  }

  function stopDragging() {
    setDragging(false)
  }

  return (
    <section style={{ background: "#1a1508", paddingTop: "80px", paddingBottom: "80px" }}>
      {/* Header */}
      <div style={{ padding: "0 60px 40px" }}>
        <p
          className="font-sans text-[10px] tracking-[0.38em] uppercase mb-5"
          style={{ color: "#D4A853" }}
        >
          Materiales
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            lineHeight: 1.0,
            color: "#f5e6c8",
            margin: 0,
          }}
        >
          La materia
        </h2>
      </div>

      {/* Scrollable strip */}
      <div
        ref={stripRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        style={{
          display: "flex",
          gap: "2px",
          overflowX: "auto",
          cursor: dragging ? "grabbing" : "grab",
          userSelect: "none",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        {materiales.map((mat) => (
          <div
            key={mat.nombre}
            className="group"
            style={{
              position: "relative",
              width: "280px",
              height: "380px",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mat.url}
              alt={mat.nombre}
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s ease",
              }}
              className="group-hover:scale-105"
            />
            {/* Name overlay */}
            <div
              className="group-hover:opacity-100"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px",
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(245,240,232,0.95)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            >
              {mat.nombre}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

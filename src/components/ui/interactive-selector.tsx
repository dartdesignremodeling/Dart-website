"use client"
import React, { useState, useEffect } from 'react';

const options = [
  {
    title: "Arquitectura",
    description: "Espacios que definen quiénes somos",
    image: "/images/marmol.jpg",
    icon: "◻"
  },
  {
    title: "Iluminación",
    description: "La luz como elemento arquitectónico",
    image: "/images/madera.jpg",
    icon: "◎"
  },
  {
    title: "Smart Spaces",
    description: "Tecnología invisible al servicio del espacio",
    image: "/images/plantas.jpg",
    icon: "◈"
  },
  {
    title: "Mobiliario",
    description: "Piezas únicas diseñadas a medida",
    image: "/images/roca_blanca.jpg",
    icon: "▣"
  },
  {
    title: "Gran Escala",
    description: "Proyectos que transforman ciudades",
    image: "/images/arena.jpg",
    icon: "◬"
  },
]

export const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([])

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i])
      }, 180 * i)
      timers.push(timer)
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section style={{ background: '#1a1508', padding: '80px 0' }}>
      {/* Header */}
      <div style={{ padding: '0 60px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{
          color: 'rgba(236,164,19,0.7)',
          fontSize: '0.7rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '12px'
        }}>Texturas</p>
        <h2 style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: '#f5f0e8',
          margin: 0,
          lineHeight: 1.1
        }}>La materia</h2>
      </div>

      {/* Accordion strip */}
      <div className="accordion-strip" style={{
        display: 'flex',
        width: '100%',
        height: '520px',
        overflow: 'hidden',
        paddingLeft: '60px',
        paddingRight: '60px',
        gap: '3px',
        boxSizing: 'border-box'
      }}>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              position: 'relative',
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              transition: 'flex 0.7s ease, opacity 0.5s ease, transform 0.5s ease, background-size 0.7s ease',
              flex: activeIndex === index ? '4 1 0%' : '1 1 0%',
              minWidth: '60px',
              cursor: 'pointer',
              overflow: 'hidden',
              borderRadius: '4px',
            }}
          >
            {/* Dark overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: activeIndex === index
                ? 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)'
                : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
              transition: 'background 0.7s ease'
            }} />

          </div>
        ))}
      </div>
    </section>
  )
}

export default InteractiveSelector

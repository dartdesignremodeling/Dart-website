"use client"
import React, { useState, useEffect } from 'react';

const options = [
  {
    title: "Arquitectura",
    description: "Espacios que definen quiénes somos",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    icon: "◻"
  },
  {
    title: "Iluminación",
    description: "La luz como elemento arquitectónico",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    icon: "◎"
  },
  {
    title: "Smart Spaces",
    description: "Tecnología invisible al servicio del espacio",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: "◈"
  },
  {
    title: "Mobiliario",
    description: "Piezas únicas diseñadas a medida",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    icon: "▣"
  },
  {
    title: "Gran Escala",
    description: "Proyectos que transforman ciudades",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
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
        }}>Materiales</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: '#f5f0e8',
          margin: 0,
          lineHeight: 1.1
        }}>La materia</h2>
      </div>

      {/* Accordion strip */}
      <div style={{
        display: 'flex',
        width: '100%',
        height: '460px',
        overflow: 'hidden',
        paddingLeft: '60px',
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
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
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

            {/* Label */}
            <div style={{
              position: 'absolute', bottom: '24px', left: '20px', right: '20px',
              display: 'flex', alignItems: 'center', gap: '14px', zIndex: 2
            }}>
              {/* Icon circle */}
              <div style={{
                minWidth: '40px', height: '40px',
                borderRadius: '50%',
                background: 'rgba(236,164,19,0.15)',
                border: '1px solid rgba(236,164,19,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(236,164,19,0.9)',
                fontSize: '1rem',
                flexShrink: 0
              }}>
                {option.icon}
              </div>

              {/* Text */}
              <div>
                <div style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: '#f5f0e8',
                  opacity: activeIndex === index ? 1 : 0,
                  transform: activeIndex === index ? 'translateX(0)' : 'translateX(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  whiteSpace: 'nowrap'
                }}>
                  {option.title}
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'rgba(245,240,232,0.7)',
                  opacity: activeIndex === index ? 1 : 0,
                  transform: activeIndex === index ? 'translateX(0)' : 'translateX(20px)',
                  transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
                  whiteSpace: 'nowrap'
                }}>
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InteractiveSelector

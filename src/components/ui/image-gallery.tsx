"use client";

import { cn } from '@/lib/utils';

const sketches = [
  {
    id: 1,
    src: '/images/boceto-1.jpg',
    alt: 'Boceto · Perspectiva Interior',
    style: {
      top: '30px',
      left: '4%',
      width: '22%',
      rotation: '-3deg',
      zIndex: 2,
    },
  },
  {
    id: 2,
    src: '/images/boceto-2.jpg',
    alt: 'Boceto · Detalle de Iluminación',
    style: {
      top: '16px',
      right: '6%',
      width: '21%',
      rotation: '+2.5deg',
      zIndex: 3,
    },
  },
  {
    id: 3,
    src: '/images/boceto-3.jpg',
    alt: 'Boceto · Distribución Espacial',
    style: {
      top: '210px',
      left: '38%',
      width: '20%',
      rotation: '-1.5deg',
      zIndex: 4,
    },
  },
  {
    id: 4,
    src: '/images/boceto-4.jpg',
    alt: 'Boceto · Concepto Arquitectónico',
    style: {
      top: '370px',
      left: '10%',
      width: '23%',
      rotation: '+3.5deg',
      zIndex: 3,
    },
  },
  {
    id: 5,
    src: '/images/boceto-5.jpg',
    alt: 'Boceto · Estudio de Materiales',
    style: {
      top: '330px',
      right: '7%',
      width: '22%',
      rotation: '-2deg',
      zIndex: 2,
    },
  },
];

export default function ElProcesoCreativo() {
  return (
    <section
      className={cn('relative w-full overflow-hidden')}
      style={{ background: '#221c10' }}
    >
      {/* Architectural grid background */}
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,168,83,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,168,83,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
        }}
      />

      {/* Faint top rule */}
      <div className='absolute top-0 left-12 right-12 h-px bg-[#D4A853]/8' />

      <div className='relative max-w-7xl mx-auto px-6 md:px-12 pt-36 md:pt-52 pb-16 md:pb-36'>

        {/* ── Header ── */}
        <div className='mb-10 md:mb-0'>
          <div className='flex items-center gap-4 mb-5'>
            <p
              className='font-sans text-[10px] tracking-[0.35em] uppercase shrink-0'
              style={{ color: '#D4A853' }}
            >
              El Proceso Creativo
            </p>
            <div className='h-px bg-[#D4A853]/25' style={{ width: '80px' }} />
          </div>

          <h2
            className='font-serif italic text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.0] text-[#f5e6c8]'
          >
            Donde todo
            <br />
            <span style={{ color: '#c9a84c' }}>comienza</span>
          </h2>
        </div>

        {/* ── Desktop moodboard — scattered absolute layout ── */}
        <div
          className='hidden md:block relative w-full'
          style={{ height: '680px' }}
        >
          {sketches.map((sketch) => (
            <div
              key={sketch.id}
              className='absolute'
              style={{
                top: sketch.style.top,
                left: 'left' in sketch.style ? sketch.style.left : undefined,
                right: 'right' in sketch.style ? sketch.style.right : undefined,
                width: sketch.style.width,
                zIndex: sketch.style.zIndex,
                transform: `rotate(${sketch.style.rotation})`,
                boxShadow: '4px 6px 20px rgba(0,0,0,0.5)',
                border: '6px solid #f5f0e6',
                background: '#f5f0e6',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sketch.src}
                alt={sketch.alt}
                className='w-full h-auto block'
                style={{
                  objectFit: 'contain',
                  filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>

        {/* ── Mobile — simple 2-col grid ── */}
        <div className='md:hidden mt-8 grid grid-cols-2 gap-4'>
          {sketches.map((sketch) => (
            <div
              key={sketch.id}
              className='flex items-center justify-center'
              style={{
                background: '#f5f0e6',
                border: '4px solid #f5f0e6',
                boxShadow: '3px 4px 14px rgba(0,0,0,0.45)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sketch.src}
                alt={sketch.alt}
                className='w-full h-auto block'
                style={{
                  objectFit: 'contain',
                  filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                }}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Faint bottom rule */}
      <div className='absolute bottom-0 left-12 right-12 h-px bg-[#D4A853]/8' />
    </section>
  );
}

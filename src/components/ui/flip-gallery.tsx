'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FLIP_SPEED = 750;
const flipTiming = { duration: FLIP_SPEED, iterations: 1 };

const flipAnimationTop = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' }
];
const flipAnimationBottom = [
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(0)' }
];
const flipAnimationTopReverse = [
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(0)' }
];
const flipAnimationBottomReverse = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' }
];

export default function FlipGallery({ images }: { images: { title: string; url: string }[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniteRef = useRef<Element[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    uniteRef.current = Array.from(containerRef.current.querySelectorAll('.unite'));
    defineFirstImg();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defineFirstImg = () => {
    uniteRef.current.forEach(setActiveImage);
    setImageTitle();
  };

  const setActiveImage = (el: Element) => {
    (el as HTMLElement).style.backgroundImage = `url('${images[currentIndex].url}')`;
  };

  const setImageTitle = () => {
    const gallery = containerRef.current;
    if (!gallery) return;
    gallery.setAttribute('data-title', images[currentIndex].title);
    gallery.style.setProperty('--title-y', '0');
    gallery.style.setProperty('--title-opacity', '1');
  };

  const updateGallery = (nextIndex: number, isReverse = false) => {
    const gallery = containerRef.current;
    if (!gallery) return;
    const topAnim = isReverse ? flipAnimationTopReverse : flipAnimationTop;
    const bottomAnim = isReverse ? flipAnimationBottomReverse : flipAnimationBottom;
    gallery.querySelector('.overlay-top')?.animate(topAnim, flipTiming);
    gallery.querySelector('.overlay-bottom')?.animate(bottomAnim, flipTiming);
    gallery.style.setProperty('--title-y', '-1rem');
    gallery.style.setProperty('--title-opacity', '0');
    gallery.setAttribute('data-title', '');
    uniteRef.current.forEach((el, idx) => {
      const delay = (isReverse && (idx !== 1 && idx !== 2)) || (!isReverse && (idx === 1 || idx === 2)) ? FLIP_SPEED - 200 : 0;
      setTimeout(() => (el as HTMLElement).style.backgroundImage = `url('${images[nextIndex].url}')`, delay);
    });
    setTimeout(setImageTitle, FLIP_SPEED * 0.5);
  };

  const updateIndex = (increment: number) => {
    const newIndex = (currentIndex + increment + images.length) % images.length;
    setCurrentIndex(newIndex);
    updateGallery(newIndex, increment < 0);
  };

  return (
    <div className='flex items-center justify-center bg-transparent font-sans py-16'>
      <div className='relative bg-white/5 border border-white/10 p-2'>
        <div
          id='flip-gallery'
          ref={containerRef}
          className='relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] text-center'
          style={{ perspective: '800px' } as React.CSSProperties}
        >
          <div className='top unite bg-cover bg-no-repeat'></div>
          <div className='bottom unite bg-cover bg-no-repeat'></div>
          <div className='overlay-top unite bg-cover bg-no-repeat'></div>
          <div className='overlay-bottom unite bg-cover bg-no-repeat'></div>
        </div>
        <div className='absolute top-full right-0 mt-2 flex gap-2'>
          <button type='button' onClick={() => updateIndex(-1)} className='text-amber-400 opacity-75 hover:opacity-100 hover:scale-125 transition'>
            <ChevronLeft size={24} />
          </button>
          <button type='button' onClick={() => updateIndex(1)} className='text-amber-400 opacity-75 hover:opacity-100 hover:scale-125 transition'>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <style>{`
        #flip-gallery::after { content:''; position:absolute; background-color:#C9A84C; width:100%; height:2px; top:50%; left:0; transform:translateY(-50%); }
        #flip-gallery::before { content:attr(data-title); color:rgba(201,168,76,0.9); font-size:0.75rem; letter-spacing:0.15em; left:-0.5rem; position:absolute; top:calc(100% + 1rem); line-height:2; opacity:var(--title-opacity,0); transform:translateY(var(--title-y,0)); transition:opacity 500ms ease-in-out,transform 500ms ease-in-out; }
        #flip-gallery > * { position:absolute; width:100%; height:50%; overflow:hidden; background-size:300px 450px; }
        @media(min-width:768px){ #flip-gallery > * { background-size:400px 600px; } }
        .top,.overlay-top { top:0; transform-origin:bottom; background-position:top; }
        .bottom,.overlay-bottom { bottom:0; transform-origin:top; background-position:bottom; }
      `}</style>
    </div>
  );
}

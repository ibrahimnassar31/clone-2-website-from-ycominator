'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface HorizontalGalleryProps {
  children: React.ReactNode;
  speed?: number; 
}

export default function HorizontalGallery({ children, speed = 60 }: HorizontalGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const track = trackRef.current;
    if (!track || prefersReducedMotion) return;

    const cycleWidth = track.scrollWidth / 2;

    gsap.set(track, { x: 0 });

    const duration = cycleWidth / speed;

    const tween = gsap.to(track, {
      x: -cycleWidth,
      duration,
      ease: 'none',       
      repeat: -1,
      onRepeat() {
   
        gsap.set(track, { x: 0 });
      },
    });

    const vp = viewportRef.current;
    const pause = () => tween.pause();
    const resume = () => tween.resume();
    vp?.addEventListener('mouseenter', pause);
    vp?.addEventListener('mouseleave', resume);

    const onResize = () => {
      tween.pause();
      const newCycle = track.scrollWidth / 2;
      const newDuration = newCycle / speed;
      gsap.set(track, { x: 0 });
      tween.vars.x = -newCycle;
      tween.vars.duration = newDuration;
      tween.invalidate().restart();
    };
    window.addEventListener('resize', onResize);

    return () => {
      tween.kill();
      vp?.removeEventListener('mouseenter', pause);
      vp?.removeEventListener('mouseleave', resume);
      window.removeEventListener('resize', onResize);
    };
  }, [speed]);

  const items = React.Children.toArray(children);
  const infiniteItems = [...items, ...items];

  return (
    <div
      ref={sectionRef}
      style={{
        position: 'sticky',
        top: 0,
        height: 540,
        background: 'var(--background, #fff)',
        zIndex: 2,
      }}
    >
      <div
        ref={viewportRef}
        style={{ height: '100%', overflow: 'hidden' }}
        aria-label="Horizontal gallery (infinite loop)"
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '2rem',
            willChange: 'transform',
          }}
        >
          {infiniteItems.map((child, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 auto',
                width: 400,
                height: 540,
                display: 'flex',
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

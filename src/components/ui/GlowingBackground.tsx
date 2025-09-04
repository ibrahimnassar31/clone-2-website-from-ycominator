'use client'
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const GlowingBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 200, damping: 30 });

  const [color, setColor] = useState('rgba(0,255,255,0.5)');
  const prev = useRef<{x: number, y: number, t: number} | null>(null);
    useEffect(() => {
      if (typeof window !== 'undefined') {
        x.set(window.innerWidth / 2);
        y.set(window.innerHeight / 2);
      }
      const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        x.set(mouseX);
        y.set(mouseY);

        const now = performance.now();
        if (prev.current) {
          const dx = mouseX - prev.current.x;
          const dy = mouseY - prev.current.y;
          const dt = now - prev.current.t;
          const speed = Math.sqrt(dx*dx + dy*dy) / (dt || 1) * 10; // px/ms
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;

          const hue = ((angle + 360) % 360);
          const light = Math.min(80, 40 + speed * 2);
          setColor(`hsla(${hue}, 100%, ${light}%, 0.7)`);
        }
        prev.current = {x: mouseX, y: mouseY, t: now};
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          left: springX,
          top: springY,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${color} 0%, rgba(0,0,0,0) 80%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

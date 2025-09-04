import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const paragraphLines = [
  "Van apps tot webshops en klantportalen, wij combineren tech en",
  "strategie om samen met jou te innoveren. Tech builds jouw",
  "digitale transformatie."
];

export default function AnimatedParagraph() {
  const ref = React.useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  React.useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start(i => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' } }));
      } else {
        controls.start(i => ({ opacity: 0.5, y: 20, transition: { duration: 0.5, delay: 0 } }));
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div ref={ref}>
      {paragraphLines.map((line, i) => (
        <motion.div
          key={i}
          custom={i}
          initial={{ opacity: 0.5, y: 20 }}
          animate={controls}
          style={{ lineHeight: '1.7em' }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}

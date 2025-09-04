'use client'
import React, { useState, useEffect } from 'react';
import { GlowingBackground } from '../ui/GlowingBackground';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedWord = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ display: 'inline-block' }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
};

const ArrowIcon = () => (
  <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="m15.823 6.94-3.39-3.391a.52.52 0 0 1 0-.735.52.52 0 0 1 .736 0l4.243 4.243a.52.52 0 0 1 0 .735l-4.243 4.243a.52.52 0 0 1-.736 0 .52.52 0 0 1 0-.735l3.39-3.391H4.52a.52.52 0 0 1 0-1.04h11.303Z" clipRule="evenodd"></path>
  </svg>
);

const sectionVariants = {
  hidden: { y: '100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 80,
      damping: 18,
      mass: 0.7,
      delay: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const sliceVariants = {
  hidden: { y: 80, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    y: 0,
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      stiffness: 120,
      damping: 20,
      mass: 0.5,
      duration: 0.8,
    },
  },
};

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="relative overflow-hidden pt-20 lg:pt-[7.5rem] min-h-[calc(100vh_-_1px)] max-h-[1440px] flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <GlowingBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-[--color-gradient-start]/20 via-transparent from-[5%] via-[40%] to-background"></div>
      <div className="relative w-full mx-auto max-w-[1400px] px-5 lg:px-10 xl:px-20 text-center">
        <motion.h1
          className="font-display font-bold text-foreground leading-none text-balance text-[clamp(2.5rem,8vw,5.5rem)] lg:text-[clamp(4rem,9vw,8rem)]"
          variants={sliceVariants}
        >
          <motion.span variants={sliceVariants} style={{ display: 'block' }}>
            Tech <br className="lg:hidden" />
          </motion.span>
          <motion.span variants={sliceVariants} style={{ display: 'block' }}>
            builds. <br className="hidden lg:block" />
          </motion.span>
          <motion.span variants={sliceVariants} style={{ display: 'block' }}>
            <AnimatedWord words={["Value", "Business", "Scale"]} />
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl mt-6 max-w-xl mx-auto text-text-secondary opacity-70"
          variants={sliceVariants}
        >
          Wij transformeren jouw uitdaging in digitale impact met slimme, schaalbare software die werkt.
        </motion.p>
        <motion.div
          className="mt-10 flex gap-4 justify-center items-stretch flex-wrap"
          variants={sliceVariants}
        >
          <motion.button
            className="group/btn inline-flex cursor-pointer focus:outline-none disabled:opacity-70"
            variants={sliceVariants}
          >
            <span className="text-base flex items-center justify-center flex-1 font-medium rounded-full whitespace-nowrap transition-all group-focus-visible/btn:outline-2 group-focus-visible/btn:outline-offset-2 group-focus-visible/btn:outline-primary bg-primary text-neutral-900 px-6 h-14">
              Maak een afspraak
            </span>
            <span className="inline-flex items-center justify-center rounded-full relative group-focus-visible/btn:outline-2 group-focus-visible/btn:outline-offset-2 group-focus-visible/btn:outline-primary bg-primary text-neutral-900 size-14 transition-transform duration-800 ease-[cubic-bezier(0.8,0,0.2,1)] group-hover/btn:rotate-45 group-hover/btn:translate-x-1.5">
              <ArrowIcon />
            </span>
          </motion.button>
          <motion.a
            href="#m4u21dvl"
            className="group/btn inline-flex cursor-pointer focus:outline-none disabled:opacity-70"
            variants={sliceVariants}
          >
            <span className="text-base flex items-center justify-center flex-1 font-medium rounded-full whitespace-nowrap transition-all group-focus-visible/btn:outline-2 group-focus-visible/btn:outline-offset-2 group-focus-visible/btn:outline-primary ring-1 ring-inset ring-foreground text-foreground px-6 h-14 hover:bg-white/10">
              Software oplossingen
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
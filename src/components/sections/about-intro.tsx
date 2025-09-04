'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import AnimatedParagraph from '../ui/AnimatedParagraph';

const BackgroundShapes = () => (
  <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%]">
    <svg
      className="h-auto w-[60rem] text-primary/5"
      width="1359"
      height="545"
      viewBox="0 0 1359 545"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1099.99 322.09c86.42-30.82 52.82-146.12 25.56-218.42-27.26-72.3-118-124.96-194.42-108.46-76.43 16.5-127.13 88-121.32 165.7 5.81 77.7 75.54 135.2 153.25 141.28 77.71 6.08 152.05-32.22 236.93-80.1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M1105.81 334.39c89.37-22.38 88.08-142.3 64.93-214.39-23.15-72.09-106.63-138.64-188.07-134.42-81.44 4.22-146.42 66.57-152.68 145.42-6.25 78.85 41.52 147.24 122.95 163.67 81.44 16.44 167.87-11.45 252.87-60.28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M1111.41 346.99c92.1-14.36 122.31-135.79 103.74-209.12-18.57-73.33-91.56-150.36-179.35-159.08-87.79-8.72-164.21 44.25-181.79 123.86-17.58 79.61 18.23 158.4 100.03 184.86 81.8 26.46 174.57-1.12 257.37-40.52Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M1116.79 359.89c94.62-6.72 155.54-126.58 142.01-199.1-13.53-72.52-73.1-157.06-167.33-177.34-94.22-20.28-179.48 21.05-207.82 101.44-28.34 80.39-6.39 168.3 75.43 204.61 81.82 36.3 182.26 12.01 257.71-30.82Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M1121.94 373.09c96.93.53 187.77-114.67 179.74-184.34-8.03-69.67-51.52-158.74-152.05-189.2-100.53-30.46-192.42-0.8-230.77 80.3-38.35 81.1 12.56 176.71 97.2 222.92 84.64 46.21 191.07 33.6 257.82-29.68Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M1126.88 386.59c99.03 7.41 219-100.06 216.94-164.84-2.07-64.78-27.14-155.39-133.56-194.66-106.42-39.27-202.99 22.8-250.64 60.54-47.66 37.74 38.35 183.65 125.61 249.77 87.26 66.12 201.27 50.13 241.65-50.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      ></path>
    </svg>
  </div>
);

const AboutIntro = () => {
  const [imageRef, inView] = require('../../hooks/useInView').default({ threshold: 0.3 });
  const ThreeImageReveal = React.useMemo(() => dynamic(() => import('../ui/ThreeImageReveal'), { ssr: false }), []);
  return (
    <section className="relative overflow-hidden bg-secondary py-24 lg:py-40">
      <div className="absolute inset-0 bg-background/10"></div>
      <BackgroundShapes />
      <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:grid-cols-12 lg:gap-x-10 lg:px-10 xl:gap-x-20 xl:px-20">
        <div className="flex items-center justify-center md:col-span-12 lg:col-span-5">
          <div ref={imageRef} className="relative aspect-[1.125] w-full max-w-lg overflow-hidden rounded-3xl">
            <ThreeImageReveal startAnimation={inView} />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center text-balance md:col-span-12 lg:col-span-7">
          <h3 className="mb-5 font-medium leading-tight text-foreground text-[clamp(2rem,5vw,3.5rem)]">
            Al sinds 2011 gedreven door techniek
          </h3>
          <div className="text-base text-text-secondary">
            <AnimatedParagraph />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '../data/content.js';

const sceneCopy = {
  Weddings:
    'A private ceremony captured with editorial precision — warm, intimate, and quietly powerful.',
  Engagement:
    'A tender chapter of promises and light, rendered like a cinematic love letter in motion.',
  Editorial:
    'A refined portrait of emotion cast in texture, shadow, and luxurious stillness.',
};

const makeDescription = (item) => {
  return sceneCopy[item.category] || 'A cinematic chapter captured with luxurious tone and poetic detail.';
};

export default function HorizontalPortfolio() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const scrollThrottle = useRef(false);
  const pointerStartX = useRef(null);

  const scene = portfolioItems[index];
  const nextIndex = (index + 1) % portfolioItems.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const nextScene = new Image();
    nextScene.src = portfolioItems[nextIndex].image;
  }, [nextIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      }
      if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const changeIndex = (newIndex, navDirection) => {
    setDirection(navDirection);
    setIndex((newIndex + portfolioItems.length) % portfolioItems.length);
  };

  const handleNext = () => changeIndex(index + 1, 1);
  const handlePrev = () => changeIndex(index - 1, -1);

  const handleWheel = (event) => {
    event.preventDefault();
    if (scrollThrottle.current) return;
    scrollThrottle.current = true;
    window.setTimeout(() => {
      scrollThrottle.current = false;
    }, 600);

    if (event.deltaY > 0) {
      handleNext();
    } else if (event.deltaY < 0) {
      handlePrev();
    }
  };

  const handlePointerDown = (event) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (pointerStartX.current === null) return;
    const diff = event.clientX - pointerStartX.current;
    if (Math.abs(diff) > 80) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    pointerStartX.current = null;
  };

  const copyText = useMemo(() => makeDescription(scene), [scene]);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full overflow-hidden bg-[#090807] text-[#f5efe8]"
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={scene.image}
            src={scene.image}
            alt={scene.title}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.12 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-[#090807]/90 via-[#090807]/75 to-[#090807]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),transparent_25%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1 overflow-hidden rounded-[36px] border border-white/10 bg-black/20 shadow-[0_60px_160px_rgba(0,0,0,0.45)] backdrop-blur-xl ring-1 ring-white/5 lg:max-w-[58%]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`hero-${scene.image}`}
              className="relative h-[58vh] min-h-[420px] w-full overflow-hidden sm:h-[72vh] lg:h-[78vh]"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <img
                src={scene.image}
                alt={scene.title}
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.32em] text-[#b99a70]/80">{scene.category}</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {scene.title}
                </h2>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex-1 space-y-10 lg:mt-0 lg:pl-14 lg:max-w-[42%]">
          <div className="space-y-6">
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#b99a70]/70">Cinematic Portfolio</p>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={`copy-${scene.title}`}
                custom={direction}
                initial={{ opacity: 0, y: direction > 0 ? 28 : -28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction > 0 ? -28 : 28 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
              >
                <p className="text-4xl font-semibold leading-tight text-white sm:text-[3.5rem] lg:text-[4.25rem]">
                  {scene.title}
                </p>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
                  {copyText}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[#b99a70]/80">Scene detail</p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Each scene is designed as a chapter: immersive, quiet, and full-screen. Navigate gently and let the story unfold.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                {index + 1} / {portfolioItems.length}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                {scene.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#b99a70]/30 bg-[#b99a70]/10 px-6 text-sm uppercase tracking-[0.3em] text-[#f8edd8] transition hover:bg-[#b99a70]/20"
            >
              Next scene
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 w-1/2 cursor-pointer" onClick={handlePrev} aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-1/2 cursor-pointer" onClick={handleNext} aria-hidden="true" />
    </section>
  );
}

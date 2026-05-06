import { useState } from 'react';
import { testimonials } from '../data/content.js';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const slide = testimonials[index];

  function previous() {
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setIndex((current) => (current + 1) % testimonials.length);
  }

  return (
    <section
      id="testimonials"
      className="relative z-10 overflow-hidden bg-[#090807] px-6 py-24 sm:px-10 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(185,154,112,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),transparent_40%)] opacity-90" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div className="mb-12 text-center">
          <p className="text-[0.72rem] uppercase tracking-[0.30em] text-[#b99a70]/70">
            Testimonials
          </p>
          <h2 className="mt-4 text-fluid-subtitle font-medium tracking-[0.4px] text-[#f5efe8]">
            Couples speak about the experience.
          </h2>
        </div>

        <div className="mx-auto max-w-[980px] overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-xl sm:p-14 lg:p-16">
          <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(185,154,112,0.14),transparent_40%)]" />
          <div className="relative">
            <p className="mx-auto max-w-[76ch] text-center text-[clamp(1.25rem,2vw,2rem)] leading-[1.45] text-slate-100 sm:text-[clamp(1.35rem,2.2vw,2.25rem)]">
              “{slide.quote}”
            </p>
            <p className="mt-10 text-center text-sm uppercase tracking-[0.35em] text-[#f3e1c2]/80">
              — {slide.name}
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button
              type="button"
              onClick={previous}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <div className="hidden sm:flex items-center gap-3">
              {testimonials.map((item, dotIndex) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  className={`h-2.5 w-10 rounded-full transition ${dotIndex === index ? 'bg-[#b99a70]' : 'bg-white/20'}`}
                  aria-label={`Show testimonial ${dotIndex + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

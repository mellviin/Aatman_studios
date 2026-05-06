import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="px-6 py-28 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[0.72rem] uppercase tracking-[0.30em] text-[#b99a70]/70">
              Our philosophy
            </p>
            <h2 className="mt-5 text-fluid-subtitle font-medium tracking-[0.4px] text-[#f5efe8] max-w-xl">
              A beautiful wedding deserves a story told with care.
            </h2>
            <p className="mt-6 max-w-xl text-fluid-body text-slate-300">
              We specialize in capturing the light, intimacy, and cinematic energy that makes each celebration feel unique. Our approach is gentle, curated, and designed to make you feel seen.
            </p>
          </motion.div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-soft backdrop-blur-xl">
              <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[#f3e1c2]/75">
                A quiet luxury
              </p>
              <p className="mt-4 text-slate-300 leading-7">
                Each image is composed to feel effortless and rich, with deep tonal contrast and warm highlights.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-soft backdrop-blur-xl">
              <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[#f3e1c2]/75">
                Intentional presence
              </p>
              <p className="mt-4 text-slate-300 leading-7">
                We capture natural gestures and expressive moments so your gallery feels authentic rather than staged.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-soft backdrop-blur-xl">
              <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[#f3e1c2]/75">
                Cinematic direction
              </p>
              <p className="mt-4 text-slate-300 leading-7">
                From golden hour portraits to the reception glow, each frame is guided with cinematic precision.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-soft backdrop-blur-xl">
              <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[#f3e1c2]/75">
                Heirloom archives
              </p>
              <p className="mt-4 text-slate-300 leading-7">
                Your collection is delivered as a beautifully curated suite of images that feels timeless.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

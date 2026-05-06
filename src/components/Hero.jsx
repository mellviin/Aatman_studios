import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-24 sm:px-10 lg:pt-28 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(185,154,112,0.18),transparent_40%)] opacity-80" />
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80')`
          }}
        />
      </div>
      <div className="relative mx-auto flex max-w-[1100px] flex-col gap-16 py-20 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-6 inline-flex rounded-full border border-[#f5efe8]/10 bg-white/5 px-4 py-2 text-[0.70rem] font-medium uppercase tracking-[0.26em] text-[#b99a70]/85 shadow-soft"
          >
            Wedding photography studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-fluid-title font-light leading-[1.08] tracking-[0.5px] text-[#f5efe8]"
          >
            Capturing souls,
            <span className="block text-[#b99a70]">not just moments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-8 max-w-xl text-fluid-body text-slate-300"
          >
            Aatman Studios creates cinematic wedding narratives with intention, luxury styling, and a glowing, emotional palette.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-[#f5efe8]/15 bg-[#f5efe8]/5 px-7 py-3 text-sm font-medium uppercase tracking-[0.24em] text-[#f5efe8] transition hover:border-[#b99a70]/40 hover:bg-[#b99a70]/10">
              View portfolio
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#f5efe8]/10 bg-transparent px-7 py-3 text-sm font-medium uppercase tracking-[0.24em] text-[#f5efe8] transition hover:border-[#b99a70]/30 hover:text-[#f5efe8]">
              Let’s talk
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#020101]/90 shadow-soft lg:w-[48%]"
        >
          <img
            src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80"
            alt="Beautiful wedding photography"
            className="h-[420px] w-full object-cover grayscale-[.05] transition duration-700 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080707]/90 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-lg">
            <p className="text-sm uppercase tracking-[0.30em] text-[#f3e1c2]/75">Bespoke editorial imagery</p>
            <p className="mt-3 text-lg font-light text-white">A wedding portrait that reads like fine art.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

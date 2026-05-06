import { motion } from 'framer-motion';

const shutterDelays = [0, 0.08, 0.16, 0.24, 0.32];

export default function Loader() {
  return (
    <motion.section
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070606] text-slate-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
    >
      <div className="absolute inset-0 bg-black/95" />
      <div className="relative mx-6 w-full max-w-4xl overflow-hidden rounded-[36px] border border-white/10 bg-[#0f0d0c]/90 shadow-soft sm:h-[420px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-cover bg-center blur-sm opacity-60" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498579809087-ef1e558fd1a3?auto=format&fit=crop&w=1200&q=80)' }} />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex">
          {shutterDelays.map((delay, index) => (
            <motion.span
              key={index}
              initial={{ width: '20%' }}
              animate={{ width: 0 }}
              transition={{ duration: 1.8, delay, ease: 'easeInOut' }}
              className="h-full bg-[#090708]"
            />
          ))}
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9, ease: 'easeOut' }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#b99a70]/75">Aatman Studios</p>
            <h1 className="mt-6 text-5xl font-semibold uppercase tracking-[0.28em] text-white sm:text-6xl">
              Capturing Souls
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              A soft shutter opens on a tender story — elegant, cinematic, and crafted for the heart.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
            className="rounded-full border border-[#b99a70]/30 bg-[#000]/20 px-5 py-2 text-sm uppercase tracking-[0.28em] text-[#b99a70] backdrop-blur-sm"
          >
            Storytelling loading...
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

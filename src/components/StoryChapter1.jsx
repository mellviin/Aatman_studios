import { motion } from 'framer-motion';

export default function StoryChapter1() {
  return (
    <section className="relative py-32 px-6 sm:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b99a70]/5 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mx-auto max-w-[1100px] text-center"
      >
        <p className="text-[0.72rem] uppercase tracking-[0.30em] text-[#b99a70]/70 mb-8">
          Chapter 1: The Meeting
        </p>
        <h2 className="text-fluid-subtitle font-light tracking-[0.4px] text-[#f5efe8] mb-12">
          Every love story begins with a spark
        </h2>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-left"
          >
            <p className="text-fluid-body text-[#d7d0c6] leading-relaxed">
              In the quiet moments before the chaos of wedding planning, we capture the essence of connection.
              The first glance, the nervous laughter, the unspoken promises that bind two souls together.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
              alt="Couple meeting"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
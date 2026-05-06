import { motion } from 'framer-motion';

export default function StoryChapter2() {
  return (
    <section className="relative py-32 px-6 sm:px-10 bg-[#100f0e]/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mx-auto max-w-[1100px] text-center"
      >
        <p className="text-[0.72rem] uppercase tracking-[0.30em] text-[#b99a70]/70 mb-8">
          Chapter 2: The Journey
        </p>
        <h2 className="text-fluid-subtitle font-light tracking-[0.4px] text-[#f5efe8] mb-12">
          Love unfolds in quiet moments
        </h2>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
              alt="Love journey"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-left order-1 md:order-2"
          >
            <p className="text-fluid-body text-[#d7d0c6] leading-relaxed">
              From stolen glances to shared dreams, we document the evolution of your relationship.
              Each photograph tells a piece of your unique narrative, preserving the magic of your love story.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
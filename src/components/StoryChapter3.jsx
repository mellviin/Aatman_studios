import { motion } from 'framer-motion';

export default function StoryChapter3() {
  return (
    <section className="relative py-32 px-6 sm:px-10">
      <div className="absolute inset-0 bg-gradient-to-t from-[#b99a70]/5 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mx-auto max-w-[1100px] text-center"
      >
        <p className="text-[0.72rem] uppercase tracking-[0.30em] text-[#b99a70]/70 mb-8">
          Chapter 3: Forever Begins
        </p>
        <h2 className="text-fluid-subtitle font-light tracking-[0.4px] text-[#f5efe8] mb-12">
          The ceremony that seals your eternity
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80"
              alt="Ceremony moment"
              className="w-full h-64 object-cover rounded-2xl shadow-lg mb-4"
              loading="lazy"
            />
            <p className="text-fluid-small text-[#d7d0c6]">
              The vows that bind your souls
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
              alt="Reception joy"
              className="w-full h-64 object-cover rounded-2xl shadow-lg mb-4"
              loading="lazy"
            />
            <p className="text-fluid-small text-[#d7d0c6]">
              The celebration of your union
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              alt="First dance"
              className="w-full h-64 object-cover rounded-2xl shadow-lg mb-4"
              loading="lazy"
            />
            <p className="text-fluid-small text-[#d7d0c6]">
              The memories that last forever
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
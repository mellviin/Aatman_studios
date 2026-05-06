import { motion } from 'framer-motion';
import { services } from '../data/content.js';

export default function Services() {
  return (
    <section id="services" className="px-6 py-28 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 max-w-3xl">
          <p className="text-[0.72rem] uppercase tracking-[0.30em] text-[#b99a70]/70">Services</p>
          <h2 className="mt-4 text-fluid-subtitle font-medium tracking-[0.4px] text-[#f5efe8]">
            Bespoke offerings for unforgettable celebrations.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl"
            >
              <div className="inline-flex rounded-full bg-[#b99a70]/10 px-4 py-3 text-[#b99a70]">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="mt-6 text-xl font-medium text-white">{service.title}</h3>
              <p className="mt-4 text-slate-300 leading-7">{service.description}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-[#d5b571]">
                Learn more
                <span aria-hidden="true">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems } from '../data/content.js';

const categories = ['All', 'Weddings', 'Engagement', 'Editorial'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const closeButtonRef = useRef(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Scroll lock when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <section id="portfolio" className="px-6 py-28 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.30em] text-[#b99a70]/70">Portfolio</p>
            <h2 className="mt-4 text-fluid-subtitle font-medium tracking-[0.4px] text-[#f5efe8]">
              Wedding photography that feels like a story.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-[0.78rem] uppercase tracking-[0.24em] transition ${
                  category === activeCategory
                    ? 'border-[#b99a70]/35 bg-[#b99a70]/10 text-[#b99a70]'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-[#b99a70]/40 hover:text-[#b99a70]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-soft"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                className="relative block h-80 w-full overflow-hidden"
              >
                <img
                  src={`${item.image}`}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-[0.70rem] uppercase tracking-[0.35em] text-[#f3e1c2]/80">{item.category}</p>
                  <h3 className="mt-3 text-xl font-medium text-white">{item.title}</h3>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative mx-6 max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#080707]/95 shadow-soft"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
                aria-label="Close gallery"
              >
                ×
              </button>
              <div className="max-h-[90vh] overflow-y-auto">
                <img src={selectedImage.image} alt={selectedImage.title} className="w-full object-cover" />
                <div className="space-y-3 p-8 text-center text-white">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#b99a70]/80">{selectedImage.category}</p>
                  <h3 className="text-2xl font-medium">{selectedImage.title}</h3>
                  <p className="max-w-2xl mx-auto text-slate-300 text-fluid-body">
                    A refined portrait with delicate light and graceful composition, designed to feel luxurious and unforgettable.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

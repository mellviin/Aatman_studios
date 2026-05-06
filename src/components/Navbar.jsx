import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#080707]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" className="text-sm font-medium uppercase tracking-[0.24em] text-[#f5efe8]/90">
          Aatman Studios
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm capitalize tracking-[0.15em] text-slate-300 transition hover:text-[#d5b571]">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full border border-[#f5efe8]/10 bg-transparent px-5 py-3 text-sm font-medium uppercase tracking-[0.22em] text-[#f5efe8] transition hover:bg-[#b99a70]/10 hover:border-[#b99a70]/30 hover:text-[#f5efe8]">
            Book a session
          </a>
        </nav>

        <button
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation"
        >
          <span className="relative h-5 w-5">
            <span className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-white transition ${open ? 'rotate-45 top-2.5' : ''}`} />
            <span className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-white transition ${open ? '-rotate-45 top-2.5' : ''}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#090807]/95 px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-base capitalize tracking-[0.18em] text-slate-200 transition hover:text-[#d5b571]">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex w-full items-center justify-center rounded-full border border-[#f5efe8]/10 bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-[#f5efe8] transition hover:bg-[#b99a70]/10 hover:border-[#b99a70]/30">
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

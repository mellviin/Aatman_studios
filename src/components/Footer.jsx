export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060505] px-6 py-10 text-slate-400 sm:px-10">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-7 text-slate-400">
          © {new Date().getFullYear()} Aatman Studios. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 text-sm leading-7 text-slate-400">
          <a href="#portfolio" className="transition hover:text-[#f5efe8]">
            Portfolio
          </a>
          <a href="#services" className="transition hover:text-[#f5efe8]">
            Services
          </a>
          <a href="#contact" className="transition hover:text-[#f5efe8]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

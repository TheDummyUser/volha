import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { num: "01", label: "Work", href: "#work" },
    { num: "02", label: "Pricing", href: "#pricing" },
    { num: "03", label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="max-w-[1120px] mx-auto flex items-center justify-between px-7 py-4.5 font-mono text-[13px] tracking-wide relative">
        <div className="flex items-center gap-2.5 font-bold text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-copper shadow-[0_0_8px_var(--color-copper)]" />
          ABHIRAM
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex md:flex-row md:gap-7.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-dim hover:text-copper transition-colors"
            >
              <span className="text-[#5c564a] mr-1.5">{link.num}</span>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger / close toggle */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-50"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-5 bg-ink transition-all duration-200 ${
              open ? "rotate-45 translate-y-[6px] bg-copper" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-all duration-200 ${
              open ? "-rotate-45 -translate-y-[6px] bg-copper" : ""
            }`}
          />
        </button>

        {/* Mobile dropdown panel */}
        <div
          className={`md:hidden fixed top-[57px] left-0 right-0 bg-bg/95 backdrop-blur-md border-b border-line shadow-[0_16px_32px_rgba(0,0,0,0.5)]
            transition-all duration-200 ease-out origin-top
            ${open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
        >
          <div className="flex flex-col py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-ink-dim hover:text-copper hover:bg-[#100d09] transition-colors px-7 py-4 border-t border-line first:border-t-0 flex items-center gap-2.5"
              >
                <span className="text-[#5c564a]">{link.num}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

import useReveal from "../hooks/useReveal";
import useLocaleCurrency from "../hooks/useLocaleCurrency";

const PRICING = {
  USD: {
    symbol: "$",
    mobile: "3,500",
    web: "2,500",
    hourly: "35",
  },
  INR: {
    symbol: "₹",
    mobile: "45,000",
    web: "30,000",
    hourly: "900",
  },
};

export default function Pricing() {
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal();
  const [noteRef, noteIn] = useReveal();
  const { currency } = useLocaleCurrency();
  const p = PRICING[currency];

  return (
    <section id="pricing" className="py-28 border-t border-line">
      <div className="max-w-[1120px] mx-auto px-7">
        <div
          ref={headRef}
          className={`reveal ${headIn ? "in" : ""} flex items-baseline gap-4 mb-13`}
        >
          <span className="font-mono text-sm text-[#5c564a]">02</span>
          <h2 className="font-display uppercase tracking-wide text-[clamp(24px,3.5vw,32px)] font-semibold">
            Pricing
          </h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        <div
          ref={gridRef}
          className={`reveal ${gridIn ? "in" : ""} grid grid-cols-1 md:grid-cols-2 gap-6`}
        >
          {/* Mobile */}
          <div className="border border-line rounded-[var(--radius-brand)] p-8.5 flex flex-col">
            <div className="font-mono text-xs text-ink-dim tracking-wide">MOBILE APP</div>
            <h3 className="mt-2 font-display uppercase text-2xl">React Native Build</h3>
            <div className="mt-5 font-mono text-3xl text-copper">
              {p.symbol}{p.mobile} <small className="font-body text-sm text-ink-dim">/ project</small>
            </div>
            <ul className="mt-6 flex-1">
              {[
                "iOS + Android from one codebase",
                "Up to 6 core screens",
                "API integration & state management",
                "App Store / Play Store submission",
                "2 weeks of post-launch support",
              ].map((item) => (
                <li
                  key={item}
                  className="py-2.5 border-t border-line text-sm text-ink-dim flex gap-2.5"
                >
                  <span className="font-mono text-copper">›</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6.5 text-center font-mono text-[13px] px-6 py-3.5 rounded-[var(--radius-brand)] border border-line text-ink hover:border-copper hover:text-copper transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Web — featured */}
          <div className="border border-copper bg-[#100d09] rounded-[var(--radius-brand)] p-8.5 flex flex-col">
            <div className="font-mono text-xs text-ink-dim tracking-wide">WEB APP</div>
            <h3 className="mt-2 font-display uppercase text-2xl">React / Next.js Build</h3>
            <div className="mt-5 font-mono text-3xl text-copper">
              {p.symbol}{p.web} <small className="font-body text-sm text-ink-dim">/ project</small>
            </div>
            <ul className="mt-6 flex-1">
              {[
                "Responsive, production-ready build",
                "Up to 6 pages / views",
                "API integration & auth",
                "Deployment (Vercel / your host)",
                "2 weeks of post-launch support",
              ].map((item) => (
                <li
                  key={item}
                  className="py-2.5 border-t border-line text-sm text-ink-dim flex gap-2.5"
                >
                  <span className="font-mono text-copper">›</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6.5 text-center font-mono text-[13px] px-6 py-3.5 rounded-[var(--radius-brand)] bg-copper text-[#0a0805] font-bold border border-copper hover:bg-ember hover:border-ember transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>

        <div
          ref={noteRef}
          className={`reveal ${noteIn ? "in" : ""} mt-5.5 text-sm text-ink-dim font-mono`}
        >
          These are starting points — every project is scoped on a quick call
          first, so you get a quote that actually fits what you're building,
          not a generic number. Hourly rate also available: {p.symbol}{p.hourly}/hr.
        </div>
      </div>
    </section>
  );
}

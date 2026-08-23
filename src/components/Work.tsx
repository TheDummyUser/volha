import tiger from "../assets/tiger.png";
import useReveal from "../hooks/useReveal";

const PROJECTS = [
  {
    tag: "MOBILE · MARKETPLACE",
    title: "MedicalShare",
    blurb: "Mobile marketplace for medical equipment sharing with 1,000+ users — listing, browsing, and secure transactions via Cashfree.",
    stack: "React Native · Redux · Cashfree",
  },
  {
    tag: "WEB + MOBILE · PLATFORM",
    title: "Musidy",
    blurb: "Cross-platform music platform (Web + iOS + Android) supporting 4,000–5,000 concurrent users, with role-based access across 4 user types.",
    stack: "React Native · React · RBAC",
  },
  {
    tag: "MOBILE · APP",
    title: "Cosmos",
    blurb: "Personal Mastodon client with timeline viewing, posting, media uploads, and multi-account support.",
    stack: "React Native · TanStack Query",
  },
  {
    tag: "OPEN SOURCE · NPM",
    title: "rn-udpb",
    blurb: "High-performance native UDP broadcast relay & discovery module for React Native, built in C++ with JSI (Nitro Modules).",
    stack: "C++ · JSI · TypeScript",
  },
];

export default function Work() {
  const [headRef, headIn] = useReveal();
  const [gridRef, gridIn] = useReveal();

  return (
    <section id="work" className="py-28 border-t border-line">
      <div className="max-w-[1120px] mx-auto px-7">
        <div
          ref={headRef}
          className={`reveal ${headIn ? "in" : ""} flex items-end justify-between gap-10 flex-wrap mb-2`}
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-[#5c564a]">01</span>
            <h2 className="font-display uppercase tracking-wide text-[clamp(24px,3.5vw,32px)] font-semibold">
              Work
            </h2>
          </div>

          <div className="relative">
            <img
              src={tiger}
              alt="Illustrated tiger, a mark of precision and care in the work"
              className="w-[190px] drop-shadow-[0_14px_20px_rgba(0,0,0,0.6)]"
            />
            <div className="absolute -bottom-3.5 left-0 font-mono text-[10px] tracking-[0.1em] text-ink-dim whitespace-nowrap">
              BUILT WITH PRECISION
            </div>
          </div>
        </div>

        <div
          ref={gridRef}
          className={`reveal ${gridIn ? "in" : ""} grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line mt-14`}
        >
          {PROJECTS.map((p) => (
            <div key={p.title} className="bg-bg hover:bg-[#0e0c09] transition-colors p-8.5">
              <div className="font-mono text-[11px] text-ink-dim tracking-wide">{p.tag}</div>
              <h3 className="mt-2.5 font-display uppercase text-xl font-semibold">{p.title}</h3>
              <p className="mt-2.5 text-ink-dim text-sm">{p.blurb}</p>
              <div className="mt-5 flex justify-between items-center">
                <span className="font-mono text-[11px] text-copper">{p.stack}</span>
                <a href="#" className="font-mono text-xs text-ember">
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

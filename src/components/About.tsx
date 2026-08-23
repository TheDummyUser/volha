import useReveal from "../hooks/useReveal";

const STACK = [
  "React Native",
  "Expo",
  "TypeScript",
  "React",
  "Redux / RTK Query",
  "C++ (Native Modules)",
  "Go",
  "REST / GraphQL",
];

export default function About() {
  const [ref, inView] = useReveal();

  return (
    <section id="about" className="py-28 border-t border-line">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="flex items-baseline gap-4 mb-13">
          <span className="font-mono text-sm text-[#5c564a]">00</span>
          <h2 className="font-display uppercase tracking-wide text-[clamp(24px,3.5vw,32px)] font-semibold">
            About
          </h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        <div
          ref={ref}
          className={`reveal ${inView ? "in" : ""} grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-14`}
        >
          <div>
            <p className="text-ink-dim text-[15px] mb-3.5 max-w-[46ch]">
              Product-focused React Native developer with 2+ years building
              cross-platform mobile and web apps used by thousands of active
              users — from marketplace apps handling real payments to
              streaming platforms holding up under concurrent load. I care
              about performance, clean architecture, and going deep when a
              feature calls for it, including native module work in C++.
            </p>
            <p className="text-ink-dim text-[15px] mb-3.5 max-w-[46ch]">
              Currently full-time at Mindwave AI Solutions, taking on select
              freelance projects on the side.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] tracking-[0.1em] text-[#5c564a] uppercase mb-2.5">
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {STACK.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs text-copper border border-line px-2.5 py-1.5 rounded-[var(--radius-brand)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

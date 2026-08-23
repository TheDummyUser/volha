import statue from "../assets/statue.png";

export default function Hero() {
  return (
    <section className="min-h-svh grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] items-center pt-24 md:pt-28 pb-10 relative overflow-hidden">
      <div className="px-7 text-center md:text-left order-2 md:order-1 relative z-10">
        <div className="hero-rise hero-rise-1 font-mono text-xs tracking-[0.12em] text-copper">
          FULL-TIME REACT NATIVE DEV · FREELANCE ON THE SIDE
        </div>

        <h1 className="hero-rise hero-rise-2 mt-4.5 font-display font-bold uppercase leading-[0.98] text-[clamp(38px,6vw,68px)]">
          I forge
          <br />
          mobile &amp;
          <br />
          <span className="text-copper">web apps.</span>
        </h1>

        <p className="hero-rise hero-rise-3 mt-5.5 max-w-[440px] mx-auto md:mx-0 text-ink-dim text-[15.5px]">
          From first prototype to App Store / Play Store launch — I build
          cross-platform apps and web products for startups and small teams
          who need something shipped properly, not just quickly.
        </p>

        <div className="hero-rise hero-rise-4 mt-8 flex gap-3.5 flex-wrap justify-center md:justify-start">
          <a
            href="#work"
            className="font-mono text-[13px] px-6 py-3.5 rounded-[var(--radius-brand)] bg-copper text-[#0a0805] font-bold border border-copper hover:bg-ember hover:border-ember transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="font-mono text-[13px] px-6 py-3.5 rounded-[var(--radius-brand)] border border-line text-ink hover:border-copper hover:text-copper transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2 relative min-h-[340px] md:min-h-[420px] flex items-end justify-center">
        <div
          className="hero-glow absolute pointer-events-none left-1/2 top-[38%] w-[70%] aspect-square -translate-x-1/2 -translate-y-1/2 blur-[10px]"
          style={{
            background:
              "radial-gradient(circle, rgba(217,138,74,0.28), rgba(217,138,74,0) 70%)",
          }}
        />
        <img
          src={statue}
          alt="Sculpture of a figure striking with a hammer, representing craft and building things by hand"
          className="hero-figure-img relative z-10 max-h-[52vh] md:max-h-[82vh] w-auto mx-auto"
        />
      </div>
    </section>
  );
}

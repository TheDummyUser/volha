import hands from "../assets/hands.jpeg";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const [ref, inView] = useReveal();

  return (
    <section id="contact" className="py-28 border-t border-line">
      <div
        ref={ref}
        className={`reveal ${inView ? "in" : ""} max-w-[1120px] mx-auto px-7`}
      >
        <div className="w-full aspect-[799/200] overflow-hidden border border-line relative">
          <img
            src={hands}
            alt="Two hands reaching toward each other"
            className="w-full h-full object-cover grayscale-[15%] contrast-[1.05]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(6,6,5,0.15), rgba(6,6,5,0.75))",
            }}
          />
        </div>

        <div className="text-center mt-14">
          <div className="flex items-baseline gap-4 justify-center mb-5">
            <span className="font-mono text-sm text-[#5c564a]">03</span>
            <h2 className="font-display uppercase tracking-wide text-[clamp(26px,4vw,38px)] font-semibold">
              Let's build something
            </h2>
          </div>

          <p className="text-ink-dim mt-3.5 max-w-[440px] mx-auto">
            Have a project in mind? Send a short note about what you're
            building — I usually reply within a day or two.
          </p>

          <a
            href="mailto:abhiram.reddy122002@gmail.com"
            className="inline-block mt-8.5 font-mono text-[clamp(18px,3vw,24px)] text-copper border-b border-copper pb-1"
          >
            abhiram.reddy122002@gmail.com
          </a>

          <div className="mt-9.5 flex gap-6.5 justify-center font-mono text-[13px]">
            <a
              href="https://github.com/[github]"
              target="_blank"
              rel="noopener"
              className="text-ink-dim hover:text-copper transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/[linkedin]"
              target="_blank"
              rel="noopener"
              className="text-ink-dim hover:text-copper transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

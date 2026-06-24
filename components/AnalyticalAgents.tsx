import { ANALYTICAL_AGENTS, SIGNUP_URLS } from "./site-content";

export function AnalyticalAgents() {
  return (
    <section
      id="analytical-agents"
      className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div
        className="glow-orb-teal orb-breathe pointer-events-none absolute -bottom-48 -left-48 h-[600px] w-[600px]"
        aria-hidden
      />
      <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="scroll-reveal max-w-3xl">
          <span className="teal-pill mb-6 inline-flex">Analytical Agents</span>
          <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl lg:text-6xl">
            Turn business data<br />
            into <span className="text-teal">instant answers.</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-[#C8D2E2]">
            Ask questions in plain English and get charts, reports, and
            insights — without waiting on manual reporting.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {ANALYTICAL_AGENTS.map((agent, index) => {
            const delayClass =
              index % 3 === 1
                ? "scroll-reveal scroll-reveal-d1"
                : index % 3 === 2
                  ? "scroll-reveal scroll-reveal-d2"
                  : "scroll-reveal";
            return (
              <article key={agent.name} className={`${delayClass} glass-card card-lift rounded-xl p-6`}>
                <span className="text-gold mb-4 block text-3xl font-black opacity-50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-black text-[#F7F4EF]">
                  {agent.name}
                </h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-[#9AABC3]">
                  {agent.description}
                </p>
                <a
                  href={SIGNUP_URLS.analytical}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#C8A96E] transition-colors hover:text-[#E8C47A]"
                >
                  Get started →
                </a>
              </article>
            );
          })}
        </div>

        <div className="scroll-reveal mt-10">
          <a href={SIGNUP_URLS.analytical} className="btn-primary">
            Sign Up for Analytical Agent →
          </a>
        </div>
      </div>
    </section>
  );
}

import { ANALYTICAL_AGENTS, SIGNUP_URLS } from "./site-content";

export function AnalyticalAgents() {
  return (
    <section
      id="analytical-agents"
      className="border-y border-white/10 bg-[#111E33] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
            Analytical Agents
          </p>
          <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
            Turn business data into answers.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
            Ask questions in plain English and get instant charts, reports, and
            insights without waiting on manual reporting.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ANALYTICAL_AGENTS.map((agent, index) => (
            <article
              key={agent.name}
              className="rounded-lg border border-white/10 bg-[#0A1628] p-6"
            >
              <span className="flex size-11 items-center justify-center rounded bg-[#1A8FA0]/20 text-sm font-black text-[#7CE2EF]">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-black text-[#F7F4EF]">
                {agent.name}
              </h3>
              <p className="mt-3 min-h-24 text-sm leading-6 text-[#C8D2E2]">
                {agent.description}
              </p>
              <a
                href={SIGNUP_URLS.analytical}
                className="mt-6 inline-block text-sm font-bold text-[#C8A96E] transition-colors hover:text-[#DFC486]"
              >
                Learn More / Sign Up
              </a>
            </article>
          ))}
        </div>

        <a
          href={SIGNUP_URLS.analytical}
          className="mt-10 inline-block rounded bg-[#C8A96E] px-6 py-3 text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
        >
          Sign Up for Analytical Agent
        </a>
      </div>
    </section>
  );
}

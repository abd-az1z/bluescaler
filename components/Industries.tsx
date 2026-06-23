import { INDUSTRIES } from "./site-content";

export function Industries() {
  return (
    <section className="bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
            Use Cases
          </p>
          <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
            Built for businesses like yours.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.label}
              className="rounded-lg border border-white/10 bg-[#111E33] p-5"
            >
              <h3 className="text-lg font-black text-[#F7F4EF]">
                {industry.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#C8D2E2]">
                {industry.useCase}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

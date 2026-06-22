import { TRUST_PILLARS } from "./site-content";

export function TrustSection() {
  return (
    <section className="bg-[#111E33] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Why BlueScaler
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Local buying confidence, enterprise-grade foundation.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {TRUST_PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-lg border border-white/10 bg-[#0A1628] p-6"
              >
                <h3 className="text-lg font-black text-[#F7F4EF]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#C8D2E2]">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 rounded-lg border border-dashed border-[#6B7E9A]/45 p-5 sm:grid-cols-3">
          {[
            ["GCC-ready", "Designed for UAE, Saudi Arabia, Qatar, and Kuwait"],
            ["Onboarding", "Setup support included from day one"],
            ["Logos", "Customer logo strip reserved for launch assets"],
          ].map(([label, body]) => (
            <div key={label}>
              <p className="font-black text-[#F7F4EF]">{label}</p>
              <p className="mt-1 text-sm leading-6 text-[#9AABC3]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

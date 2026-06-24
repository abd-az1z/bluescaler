import { CheckCircle, Handshake, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { TRUST_PILLARS } from "./site-content";

const PILLAR_ICONS: LucideIcon[] = [Layers, CheckCircle, Handshake];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
      <div
        className="glow-orb-gold pointer-events-none absolute -right-48 -top-48 h-[550px] w-[550px] opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left */}
          <div className="scroll-reveal flex flex-col justify-center">
            <span className="brand-pill mb-6 self-start">Why BlueScaler</span>
            <h2 className="text-4xl font-black leading-tight text-[#F7F4EF] sm:text-5xl">
              Local buying confidence,{" "}
              <span className="text-gold">enterprise-grade</span> foundation.
            </h2>
            <p className="mt-6 text-lg leading-7 text-[#9AABC3]">
              Built by people who understand the GCC market — not a generic AI
              tool shipped from abroad.
            </p>
          </div>

          {/* Right — pillar cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {TRUST_PILLARS.map((pillar, i) => (
              <article
                key={pillar.title}
                className={`${i === 0 ? "scroll-reveal" : i === 1 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal scroll-reveal-d2"} glass-card card-lift rounded-xl p-6`}
              >
                {(() => { const Icon = PILLAR_ICONS[i]; return (
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#C8A96E]/10">
                    <Icon className="h-5 w-5 text-[#C8A96E]" />
                  </span>
                ); })()}
                <h3 className="font-black text-[#F7F4EF]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#9AABC3]">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* GCC region tags */}
        <div className="mt-14 flex flex-wrap items-center gap-3">
          <p className="mr-2 text-sm font-bold text-[#6B7E9A]">
            GCC coverage:
          </p>
          {["🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🇶🇦 Qatar", "🇰🇼 Kuwait"].map(
            (region) => (
              <span
                key={region}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-[#C8D2E2]"
              >
                {region}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

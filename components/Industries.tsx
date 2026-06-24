import { Hospital, Hotel, Package, ShoppingBag, UtensilsCrossed, Wrench, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { INDUSTRIES } from "./site-content";

const INDUSTRY_META: Record<string, { Icon: LucideIcon; color: string; iconColor: string }> = {
  "Restaurants & F&B":   { Icon: UtensilsCrossed, color: "bg-[#C8A96E]/10", iconColor: "text-[#C8A96E]" },
  "Retail":              { Icon: ShoppingBag,      color: "bg-[#C8A96E]/10", iconColor: "text-[#C8A96E]" },
  "Automotive Services": { Icon: Wrench,           color: "bg-[#1A8FA0]/10", iconColor: "text-[#7CE2EF]" },
  "Hospitality":         { Icon: Hotel,            color: "bg-[#1A8FA0]/10", iconColor: "text-[#7CE2EF]" },
  "Healthcare & Clinics":{ Icon: Hospital,         color: "bg-[#C8A96E]/10", iconColor: "text-[#C8A96E]" },
  "Logistics":           { Icon: Package,          color: "bg-[#1A8FA0]/10", iconColor: "text-[#7CE2EF]" },
};

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
      <div
        className="glow-orb-gold pointer-events-none absolute -bottom-48 -right-48 h-[520px] w-[520px] opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="scroll-reveal max-w-3xl">
          <span className="brand-pill mb-6 inline-flex">Use Cases</span>
          <h2 className="text-4xl font-black leading-tight text-[#F7F4EF] sm:text-5xl">
            Built for businesses<br />
            <span className="text-gold">like yours.</span>
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9AABC3]">
            Six GCC verticals. One AI platform. Deployed in days.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const { Icon, color, iconColor } = INDUSTRY_META[industry.label] ?? {
              Icon: Zap,
              color: "bg-white/5",
              iconColor: "text-[#9AABC3]",
            };
            const delayClass =
              i % 3 === 1
                ? "scroll-reveal scroll-reveal-d1"
                : i % 3 === 2
                  ? "scroll-reveal scroll-reveal-d2"
                  : "scroll-reveal";
            return (
              <article
                key={industry.label}
                className={`${delayClass} glass-card card-lift rounded-xl p-6`}
              >
                <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                  <Icon className={`h-5 w-5 ${iconColor}`} />
                </span>
                <h3 className="text-lg font-black text-[#F7F4EF]">
                  {industry.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#9AABC3]">
                  {industry.useCase}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

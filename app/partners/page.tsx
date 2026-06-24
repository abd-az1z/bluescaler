import type { Metadata } from "next";
import {
  Check,
  DollarSign,
  Globe,
  Megaphone,
  Minus,
  Rocket,
  TrendingUp,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PARTNER_EMAIL_URL, PARTNER_TYPES } from "@/components/site-content";

export const metadata: Metadata = {
  title: "Partners | BlueScaler",
  description:
    "Partner with BlueScaler to bring AI agents to clients across the Middle East.",
};

/* ── data ──────────────────────────────────────────────────────── */

const HERO_PIPELINE = [
  { label: "Restaurant group",    country: "UAE" },
  { label: "Retail chain",        country: "UAE" },
  { label: "Automotive service",  country: "KSA" },
];

const PARTNER_BENEFITS: { title: string; Icon: LucideIcon; body: string }[] = [
  {
    title: "Revenue Share",
    Icon: DollarSign,
    body: "Earn recurring commissions on every client you refer or manage — every month, for as long as they stay.",
  },
  {
    title: "Full Support",
    Icon: Wrench,
    body: "We handle onboarding, training, and technical support for your clients so you can focus on selling.",
  },
  {
    title: "Co-Marketing",
    Icon: Megaphone,
    body: "Joint campaigns, co-branded case studies, and presence at GCC regional events.",
  },
];

const REVENUE_BARS = [
  { period: "Month 1", pct: "40%",  note: "1 client onboarded" },
  { period: "Month 3", pct: "65%",  note: "3 clients active" },
  { period: "Month 6", pct: "90%",  note: "5 clients compounding" },
];

const ALL_BENEFIT_LIST = [
  "Revenue share",
  "Co-marketing",
  "Technical training",
  "Account manager",
  "Priority support",
];

const TYPE_INCLUSIONS: Record<string, string[]> = {
  "Reseller Partners":       ALL_BENEFIT_LIST,
  "Implementation Partners": ALL_BENEFIT_LIST,
  "Referral Partners":       ["Revenue share"],
};

const TYPE_META: Record<string, {
  bestFor: string;
  accentLine: string;
  dotColor: string;
  labelClass: string;
}> = {
  "Reseller Partners": {
    bestFor: "Agencies & distributors",
    accentLine: "from-[#C8A96E]/70",
    dotColor:   "bg-[#C8A96E]",
    labelClass: "text-[#C8A96E]",
  },
  "Implementation Partners": {
    bestFor: "System integrators & consultants",
    accentLine: "from-[#1A8FA0]/70",
    dotColor:   "bg-[#7CE2EF]",
    labelClass: "text-[#7CE2EF]",
  },
  "Referral Partners": {
    bestFor: "Advisors & introducers",
    accentLine: "from-white/25",
    dotColor:   "bg-[#6B7E9A]",
    labelClass: "text-[#9AABC3]",
  },
};

const APPLY_STEPS = [
  { num: "01", label: "Fill in the partner application", time: "5 min" },
  { num: "02", label: "We review and onboard you",       time: "5 days" },
  { num: "03", label: "Start selling and earning",       time: "Day 6+" },
];

/* ── page ──────────────────────────────────────────────────────── */

export default function PartnersPage() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#060C18] px-5 pb-24 pt-20 sm:px-8 lg:pb-32 lg:pt-28">
        <div className="glow-orb-teal orb-breathe pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px]" aria-hidden />
        <div className="glow-orb-gold orb-breathe-delayed pointer-events-none absolute -right-60 top-0 h-[500px] w-[500px]" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-in mb-8">
            <span className="brand-pill">Partners</span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h1 className="hero-in hero-in-d1 text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl lg:text-7xl">
                Build an AI agent<br />
                <span className="text-gold-shimmer">revenue line.</span>
              </h1>
              <p className="hero-in hero-in-d2 mt-6 max-w-xl text-xl leading-8 text-[#C8D2E2]">
                Join our partner network and bring AI agents to your clients
                across the Middle East. Resellers, agencies, and system
                integrators welcome.
              </p>
              <div className="hero-in hero-in-d3 mt-8 flex flex-wrap gap-4">
                <a href={PARTNER_EMAIL_URL} className="btn-primary">
                  Become a Partner →
                </a>
              </div>
            </div>

            {/* Revenue pipeline card */}
            <div className="hero-card-in glass-card gradient-border-gold rounded-2xl p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-black text-[#F7F4EF]">Revenue pipeline</p>
                <span className="teal-pill py-0.5! text-[10px]!">Recurring</span>
              </div>

              {/* Client rows */}
              <div className="space-y-2.5">
                {HERO_PIPELINE.map(({ label, country }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/3 px-4 py-3"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#1A8FA0]" />
                    <p className="flex-1 text-sm font-bold text-[#F7F4EF]">{label}</p>
                    <span className="text-xs font-bold text-[#6B7E9A]">{country}</span>
                    <span className="rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/8 px-2 py-0.5 text-[10px] font-bold text-[#C8A96E]">
                      Monthly ✓
                    </span>
                  </div>
                ))}
              </div>

              {/* Compound callout */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#1A8FA0]/25 bg-[#1A8FA0]/8 px-4 py-3">
                <TrendingUp className="h-4 w-4 shrink-0 text-[#7CE2EF]" />
                <p className="text-sm font-bold text-[#7CE2EF]">
                  Each client adds to your monthly recurring income
                </p>
              </div>

              {/* Stats row */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { stat: "3",      label: "Partner types" },
                  { stat: "5 days", label: "Onboarding"    },
                  { stat: "GCC",    label: "Region"         },
                ].map(({ stat, label }) => (
                  <div key={label} className="rounded-xl bg-white/3 py-3 text-center">
                    <p className="text-lg font-black text-[#F7F4EF]">{stat}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#6B7E9A]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER — BENTO ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-gold pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="teal-pill mb-6 inline-flex">Why partner with us</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              A practical AI offer<br />
              for your <span className="text-gold">clients.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PARTNER_BENEFITS.map((b, i) => {
              const isFeatured = i === 0;

              if (isFeatured) {
                return (
                  <article
                    key={b.title}
                    className="scroll-reveal glass-card card-lift group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2"
                  >
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#C8A96E]/70 to-transparent" />
                    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:p-8">

                      {/* Left: text */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A96E]/10">
                            <b.Icon className="h-5 w-5 text-[#C8A96E]" />
                          </span>
                          <h3 className="mt-5 text-2xl font-black text-[#F7F4EF]">{b.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-[#9AABC3]">{b.body}</p>
                        </div>
                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#C8A96E]">
                          Compounds with every client
                        </p>
                      </div>

                      {/* Right: revenue bars */}
                      <div className="flex flex-col justify-center rounded-xl border border-white/6 bg-black/20 p-5">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#6B7E9A]">
                          Recurring revenue growth
                        </p>
                        <div className="space-y-3.5">
                          {REVENUE_BARS.map(({ period, pct, note }) => (
                            <div key={period}>
                              <div className="mb-1.5 flex items-center justify-between">
                                <p className="text-xs font-bold text-[#9AABC3]">{period}</p>
                                <p className="text-[10px] text-[#6B7E9A]">{note}</p>
                              </div>
                              <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                                <div
                                  className="h-full rounded-full bg-linear-to-r from-[#C8A96E] to-[#DDB96C]"
                                  style={{ width: pct }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="mt-4 text-xs text-[#6B7E9A]">
                          Each referred client adds to your monthly income
                        </p>
                      </div>
                    </div>
                  </article>
                );
              }

              /* Regular benefit cards */
              const isSecond = i === 1;
              const accentFrom = isSecond ? "from-[#1A8FA0]/60" : "from-[#C8A96E]/40";
              const iconBg     = isSecond ? "bg-[#1A8FA0]/10"    : "bg-[#C8A96E]/10";
              const iconColor  = isSecond ? "text-[#7CE2EF]"      : "text-[#C8A96E]";
              const delayClass = isSecond ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal scroll-reveal-d2";

              return (
                <article
                  key={b.title}
                  className={`${delayClass} glass-card card-lift group relative overflow-hidden rounded-xl p-6`}
                >
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${accentFrom} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                  <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
                    <b.Icon className={`h-5 w-5 ${iconColor}`} />
                  </span>
                  <h3 className="text-2xl font-black text-[#F7F4EF]">{b.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#9AABC3]">{b.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNER TYPES + CHECKLIST ────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="brand-pill mb-6 inline-flex">Partner Types</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Choose the motion that fits<br />
              <span className="text-gold">your business.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PARTNER_TYPES.map((type, index) => {
              const meta       = TYPE_META[type.title];
              const included   = TYPE_INCLUSIONS[type.title] ?? [];
              const delayClass = index === 1 ? "scroll-reveal scroll-reveal-d1" : index === 2 ? "scroll-reveal scroll-reveal-d2" : "scroll-reveal";

              return (
                <article
                  key={type.title}
                  className={`${delayClass} glass-card card-lift group relative overflow-hidden rounded-xl p-6`}
                >
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${meta?.accentLine ?? "from-white/20"} to-transparent`} />

                  {/* Header */}
                  <div className="mb-5 flex items-start justify-between gap-2">
                    <div>
                      <p className={`text-[11px] font-bold uppercase tracking-[0.16em] ${meta?.labelClass ?? "text-[#9AABC3]"}`}>
                        {meta?.bestFor}
                      </p>
                      <h3 className="mt-1 text-xl font-black text-[#F7F4EF]">{type.title}</h3>
                    </div>
                    <span className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${meta?.dotColor ?? "bg-white/30"}`} />
                  </div>

                  <p className="text-sm leading-6 text-[#9AABC3]">{type.body}</p>

                  {/* Benefit checklist */}
                  <ul className="mt-5 space-y-2.5 border-t border-white/6 pt-5">
                    {ALL_BENEFIT_LIST.map((benefit) => {
                      const isIncluded = included.includes(benefit);
                      return (
                        <li key={benefit} className="flex items-center gap-2.5">
                          {isIncluded ? (
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1A8FA0]/15">
                              <Check className="h-3 w-3 text-[#7CE2EF]" />
                            </span>
                          ) : (
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/4">
                              <Minus className="h-3 w-3 text-[#3A4557]" />
                            </span>
                          )}
                          <p className={`text-sm font-semibold ${isIncluded ? "text-[#F7F4EF]" : "text-[#3A4557]"}`}>
                            {benefit}
                          </p>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA */}
                  <a
                    href={PARTNER_EMAIL_URL}
                    className="btn-ghost mt-6 block w-full text-center text-sm"
                    style={{ display: "flex", justifyContent: "center", width: "100%" }}
                  >
                    Apply as {type.title.split(" ")[0]} →
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW TO APPLY ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-gold pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-15" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mb-14 text-center">
            <span className="brand-pill mb-6 inline-flex">How to Apply</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Let us grow the GCC<br />
              <span className="text-gold">together.</span>
            </h2>
          </div>

          {/* Desktop: horizontal step flow */}
          <div className="relative hidden lg:block">
            {/* Connecting dashed line */}
            <div className="absolute inset-x-[calc(16.66%-1rem)] top-8 h-0 border-t-2 border-dashed border-[#C8A96E]/18" />

            <div className="grid grid-cols-3 gap-6">
              {APPLY_STEPS.map(({ num, label, time }) => (
                <div key={num} className="scroll-reveal flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C8A96E]/40 bg-[#0B1628]">
                    <p className="text-xl font-black text-[#C8A96E]">{num}</p>
                  </div>
                  <div className="mt-5 glass-card rounded-xl p-5">
                    <p className="font-black text-[#F7F4EF]">{label}</p>
                    <p className="mt-1.5 text-xs font-bold text-[#7CE2EF]">{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="space-y-4 lg:hidden">
            {APPLY_STEPS.map(({ num, label, time }, index) => {
              const delayClass = index === 1 ? "scroll-reveal scroll-reveal-d1" : index === 2 ? "scroll-reveal scroll-reveal-d2" : "scroll-reveal";
              return (
                <div key={num} className={`${delayClass} glass-card rounded-xl p-6`}>
                  <div className="flex items-start gap-5">
                    <p className="text-gold shrink-0 text-3xl font-black">{num}</p>
                    <div>
                      <p className="text-lg font-bold text-[#F7F4EF]">{label}</p>
                      <p className="mt-1 text-xs font-bold text-[#7CE2EF]">{time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a href={PARTNER_EMAIL_URL} className="btn-primary">
              Apply to Partner →
            </a>
            <p className="mt-4 text-sm text-[#6B7E9A]">
              We respond within 2 business days
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

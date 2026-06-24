import type { Metadata } from "next";
import {
  CUSTOMER_CASE_STUDIES,
  DEMO_BOOKING_URL,
  RESULTS_STATS,
  SIGNUP_URLS,
} from "@/components/site-content";

const PROOF_STEPS = [
  ["01", "Capture repetitive customer work"],
  ["02", "Automate response and follow-up"],
  ["03", "Measure bookings, response time, and savings"],
];

export const metadata: Metadata = {
  title: "Customers | BlueScaler",
  description:
    "Placeholder customer stories and GCC social proof structure for BlueScaler.",
};

export default function CustomersPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(200,169,110,0.12),transparent_38%),linear-gradient(rgba(247,244,239,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(247,244,239,0.045)_1px,transparent_1px)] bg-[size:auto,76px_76px,76px_76px]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Customers
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl">
              Proof for buyers who need to see it working.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C8D2E2]">
              A customer-story page built for Javed&apos;s review, ready for real
              GCC logos, quotes, and named outcomes when those assets arrive.
            </p>
            <a
              href={SIGNUP_URLS.conversational}
              className="mt-8 inline-block rounded bg-[#C8A96E] px-6 py-3 text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
            >
              Join Them
            </a>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#111E33] p-5 shadow-2xl shadow-black/30">
            <div className="border-b border-white/10 pb-4">
              <p className="text-sm font-black text-[#F7F4EF]">
                Customer impact pipeline
              </p>
              <p className="mt-1 text-xs text-[#9AABC3]">
                Replace placeholders with approved case data
              </p>
            </div>
            <div className="mt-5 grid gap-3">
              {PROOF_STEPS.map(([step, label]) => (
                <div
                  key={step}
                  className="grid grid-cols-[3.5rem_1fr] items-center gap-4 rounded border border-white/10 bg-[#0A1628] p-4"
                >
                  <p className="text-2xl font-black text-[#C8A96E]">{step}</p>
                  <p className="font-bold text-[#F7F4EF]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111E33] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
            Trusted by businesses across the GCC
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Customer logo", "Customer logo", "Customer logo", "Customer logo"].map(
              (label, index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-[#6B7E9A]/45 bg-[#0A1628] text-sm font-bold uppercase tracking-[0.16em] text-[#9AABC3]"
                >
                  Logos coming soon
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Case studies
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Review-ready placeholders for real outcomes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              These cards should be replaced with approved customer names,
              logos, quotes, and outcomes once Javed shares final assets.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {CUSTOMER_CASE_STUDIES.map((study) => (
              <article
                key={study.company}
                className="rounded-lg border border-white/10 bg-[#111E33] p-6 shadow-lg shadow-black/10"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C8A96E]">
                  {study.industry} - {study.country}
                </p>
                <h3 className="mt-4 text-2xl font-black text-[#F7F4EF]">
                  {study.company}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#9AABC3]">
                  Challenge: {study.challenge}
                </p>
                <p className="mt-4 border-l-2 border-[#C8A96E] pl-4 text-base font-bold leading-7 text-[#F7F4EF]">
                  {study.result}
                </p>
                <p className="mt-5 text-sm font-semibold text-[#7CE2EF]">
                  Agent used: {study.agent}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111E33] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              [
                "Operations lead",
                "BlueScaler gave our team instant coverage during peak hours without adding more staff.",
              ],
              [
                "Retail manager",
                "Customers now get answers in minutes, and our staff can focus on higher-value work.",
              ],
              [
                "Clinic owner",
                "The biggest change was fewer repetitive calls and a calmer front desk.",
              ],
            ].map(([role, quote]) => (
              <blockquote
                key={role}
                className="rounded-lg border border-white/10 bg-[#0A1628] p-6"
              >
                <p className="text-lg leading-8 text-[#F7F4EF]">
                  &quot;{quote}&quot;
                </p>
                <footer className="mt-5 text-sm font-bold text-[#C8A96E]">
                  {role}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS_STATS.map(([stat, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-[#0A1628] p-6"
              >
                <p className="text-4xl font-black text-[#F7F4EF]">{stat}</p>
                <p className="mt-2 text-sm font-semibold text-[#9AABC3]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-white/10 bg-[#0A1628] p-6 sm:p-8">
            <h2 className="text-3xl font-black text-[#F7F4EF]">
              Ready to become our next success story?
            </h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={DEMO_BOOKING_URL}
                className="rounded bg-[#C8A96E] px-6 py-3 text-center text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
              >
                Book a Demo
              </a>
              <a
                href={SIGNUP_URLS.conversational}
                className="rounded border border-[#6B7E9A]/50 px-6 py-3 text-center text-base font-bold text-[#F7F4EF] transition-colors hover:border-[#C8A96E] hover:text-[#C8A96E]"
              >
                Start Free
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

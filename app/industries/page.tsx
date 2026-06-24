import type { Metadata } from "next";
import Link from "next/link";
import { IndustryTabs } from "@/components/IndustryTabs";
import {
  DEMO_BOOKING_URL,
  INDUSTRY_IMPACT,
} from "@/components/site-content";

const MARKET_SIGNALS = [
  ["6", "GCC SMB verticals"],
  ["24/7", "Customer response"],
  ["1", "Shared agent platform"],
];

export const metadata: Metadata = {
  title: "Industries | BlueScaler",
  description:
    "BlueScaler AI agents for restaurants, retail, automotive services, hospitality, healthcare, and logistics.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(26,143,160,0.14),transparent_42%),linear-gradient(rgba(247,244,239,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(247,244,239,0.045)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Industries
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl">
              AI agents built for your industry.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C8D2E2]">
              From restaurants to retail, logistics to healthcare, BlueScaler
              agents plug into how your business already works.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/agents"
                className="rounded bg-[#C8A96E] px-6 py-3 text-center text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
              >
                See the Agents
              </Link>
              <a
                href={DEMO_BOOKING_URL}
                className="rounded border border-[#6B7E9A]/50 px-6 py-3 text-center text-base font-bold text-[#F7F4EF] transition-colors hover:border-[#C8A96E] hover:text-[#C8A96E]"
              >
                Book a Demo
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#111E33] p-5 shadow-2xl shadow-black/30">
            <div className="grid gap-3 sm:grid-cols-3">
              {MARKET_SIGNALS.map(([stat, label]) => (
                <div key={label} className="rounded bg-[#0A1628] p-4">
                  <p className="text-3xl font-black text-[#F7F4EF]">{stat}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#9AABC3]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3">
              {[
                ["Restaurants", "Bookings, menu questions, order status"],
                ["Retail", "Inventory, pricing, returns, product queries"],
                ["Logistics", "Shipment updates, delivery analytics, SLA risk"],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="grid gap-4 rounded border border-white/10 bg-[#0A1628] p-4 sm:grid-cols-[10rem_1fr]"
                >
                  <p className="font-black text-[#C8A96E]">{title}</p>
                  <p className="text-sm leading-6 text-[#C8D2E2]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndustryTabs />

      <section className="border-y border-white/10 bg-[#111E33] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Business impact
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              One platform, vertical-specific outcomes.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_IMPACT.map((row) => (
              <article
                key={row.industry}
                className="rounded-lg border border-white/10 bg-[#0A1628] p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C8A96E]">
                  {row.industry}
                </p>
                <h3 className="mt-4 text-xl font-black text-[#F7F4EF]">
                  {row.impact}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#C8D2E2]">
                  {row.capabilities}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#0A1628] text-[#F7F4EF]">
                <tr>
                  <th className="px-4 py-4 font-black">Industry</th>
                  <th className="px-4 py-4 font-black">Key capabilities</th>
                  <th className="px-4 py-4 font-black">Business impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-[#111E33] text-[#C8D2E2]">
                {INDUSTRY_IMPACT.map((row) => (
                  <tr key={row.industry}>
                    <td className="px-4 py-4 font-bold text-[#F7F4EF]">
                      {row.industry}
                    </td>
                    <td className="px-4 py-4">{row.capabilities}</td>
                    <td className="px-4 py-4">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 rounded-lg border border-white/10 bg-[#0A1628] p-6 sm:p-8">
            <h2 className="text-3xl font-black text-[#F7F4EF]">
              Ready to transform your industry?
            </h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={DEMO_BOOKING_URL}
                className="rounded bg-[#C8A96E] px-6 py-3 text-center text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
              >
                Book a Demo
              </a>
              <Link
                href="/agents"
                className="rounded border border-[#6B7E9A]/50 px-6 py-3 text-center text-base font-bold text-[#F7F4EF] transition-colors hover:border-[#C8A96E] hover:text-[#C8A96E]"
              >
                See the Agents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

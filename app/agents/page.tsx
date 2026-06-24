import type { Metadata } from "next";
import {
  AGENTS_PAGE_VIDEOS,
  ANALYTICAL_AGENTS,
  CONVERSATIONAL_AGENT_CARDS,
  DEMO_BOOKING_URL,
  RESULTS_STATS,
  SIGNUP_URLS,
} from "@/components/site-content";

const HERO_EVENTS = [
  ["WhatsApp lead", "Restaurant booking confirmed", "4 sec"],
  ["Inventory question", "Stock risk chart generated", "11 sec"],
  ["Service request", "Mechanic slot reserved", "8 sec"],
];

const AGENT_CATEGORIES = [
  ["Conversations", "Bookings, questions, orders, returns"],
  ["Analytics", "Revenue, inventory, pricing, compliance"],
  ["Builder", "Templates, no-code flows, fast launch"],
];

export const metadata: Metadata = {
  title: "Agents | BlueScaler",
  description:
    "Meet BlueScaler conversational and analytical AI agents for GCC SMBs.",
};

export default function AgentsPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(247,244,239,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(247,244,239,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Agents
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl">
              Meet your AI agents.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C8D2E2]">
              Ready-to-deploy agents for customer conversations and business
              analytics. Go live in days, not months.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SIGNUP_URLS.conversational}
                className="rounded bg-[#C8A96E] px-6 py-3 text-center text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
              >
                Sign Up
              </a>
              <a
                href={DEMO_BOOKING_URL}
                className="rounded border border-[#6B7E9A]/50 px-6 py-3 text-center text-base font-bold text-[#F7F4EF] transition-colors hover:border-[#C8A96E] hover:text-[#C8A96E]"
              >
                Book a Demo
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[#111E33] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-sm font-black text-[#F7F4EF]">
                    Live agent desk
                  </p>
                  <p className="mt-1 text-xs text-[#9AABC3]">
                    Website, WhatsApp, analytics
                  </p>
                </div>
                <span className="rounded bg-[#1A8FA0]/20 px-3 py-1 text-xs font-black text-[#7CE2EF]">
                  24/7 active
                </span>
              </div>
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="aspect-video bg-[#0A1628] lg:aspect-auto">
                  <iframe
                    src={AGENTS_PAGE_VIDEOS[0].embedUrl}
                    title={AGENTS_PAGE_VIDEOS[0].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full min-h-72 w-full"
                  />
                </div>
                <div className="grid content-center gap-3 p-5">
                  {HERO_EVENTS.map(([source, result, time]) => (
                    <div
                      key={result}
                      className="grid grid-cols-[1fr_auto] gap-4 rounded border border-white/10 bg-[#0A1628] p-4"
                    >
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8A96E]">
                          {source}
                        </p>
                        <p className="mt-2 text-sm font-bold text-[#F7F4EF]">
                          {result}
                        </p>
                      </div>
                      <p className="self-center text-lg font-black text-[#7CE2EF]">
                        {time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {AGENT_CATEGORIES.map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-[#111E33]/80 p-4"
                >
                  <p className="font-black text-[#F7F4EF]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#9AABC3]">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111E33] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Conversational Agents
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Aria handles your customer support.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              Aria handles customer queries 24/7 across your website, WhatsApp,
              and app so your team can focus on what matters.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {CONVERSATIONAL_AGENT_CARDS.map((agent) => (
              <article
                key={agent.name}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#0A1628] p-5 transition-colors hover:border-[#C8A96E]/70"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#C8A96E] opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="text-xl font-black text-[#F7F4EF]">
                  {agent.name}
                </h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-[#C8D2E2]">
                  {agent.tagline}
                </p>
                <div className="mt-5 grid gap-2">
                  <a
                    href={SIGNUP_URLS.conversational}
                    className="rounded bg-[#C8A96E] px-4 py-2 text-center text-sm font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
                  >
                    Sign Up Today
                  </a>
                  <a
                    href={DEMO_BOOKING_URL}
                    className="rounded border border-white/10 px-4 py-2 text-center text-sm font-bold text-[#C8D2E2] transition-colors hover:border-[#C8A96E] hover:text-[#C8A96E]"
                  >
                    Try Now
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {AGENTS_PAGE_VIDEOS.slice(1).map((video) => (
              <article key={video.title}>
                <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#0A1628]">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#F7F4EF]">
                  {video.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Analytical Agents
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Ask your business data questions.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              Get instant answers, charts, and recommendations from plain
              English questions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {ANALYTICAL_AGENTS.map((agent) => (
              <article
                key={agent.name}
                className="rounded-lg border border-white/10 bg-[#111E33] p-5 shadow-lg shadow-black/10"
              >
                <span className="mb-5 block h-1 w-12 rounded bg-[#1A8FA0]" />
                <h3 className="text-xl font-black text-[#F7F4EF]">
                  {agent.name}
                </h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-[#C8D2E2]">
                  {agent.description}
                </p>
                <a
                  href={SIGNUP_URLS.analytical}
                  className="mt-5 inline-block text-sm font-bold text-[#C8A96E] transition-colors hover:text-[#DFC486]"
                >
                  Sign Up
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111E33] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              No-code builder
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Build your own agent. No code needed.
            </h2>
            <a
              href={DEMO_BOOKING_URL}
              className="mt-8 inline-block rounded bg-[#C8A96E] px-6 py-3 text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
            >
              Book a Demo
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "No-code simplicity",
              "Plug into your systems",
              "Live in days",
              "Pre-built templates",
            ].map((pillar) => (
              <div
                key={pillar}
                className="rounded-lg border border-white/10 bg-[#0A1628] p-5"
              >
                <h3 className="text-lg font-black text-[#F7F4EF]">
                  {pillar}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#C8D2E2]">
                  Practical setup for SMB teams that need working agents, not a
                  long implementation project.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS_STATS.map(([stat, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-[#111E33] p-6"
              >
                <p className="text-4xl font-black text-[#F7F4EF]">{stat}</p>
                <p className="mt-2 text-sm font-semibold text-[#9AABC3]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-white/10 bg-[#111E33] p-6 sm:p-8">
            <h2 className="text-3xl font-black text-[#F7F4EF]">
              Ready to see the agents in action?
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

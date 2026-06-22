import { DEMO_BOOKING_URL } from "./site-content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#0A1628] px-5 pb-20 pt-20 sm:px-8 lg:pb-28 lg:pt-24"
    >
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#1A8FA0]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(247,244,239,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(247,244,239,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#C8A96E]">
            AI agents for GCC SMBs
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-[#F7F4EF] sm:text-6xl lg:text-7xl">
            AI Agents That Work While You Sleep
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#C8D2E2] sm:text-xl">
            Automate customer conversations, unlock business insights, and go
            live in minutes, not days. Built for SMBs across the Middle East.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={DEMO_BOOKING_URL}
              className="rounded bg-[#C8A96E] px-6 py-3 text-center text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
            >
              Book a Demo
            </a>
            <a
              href="#conversational-agents"
              className="rounded border border-[#6B7E9A]/50 px-6 py-3 text-center text-base font-bold text-[#F7F4EF] transition-colors hover:border-[#C8A96E] hover:text-[#C8A96E]"
            >
              See It in Action
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#111E33] p-5 shadow-2xl shadow-black/30">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-sm font-semibold text-[#F7F4EF]">
                Live agent coverage
              </p>
              <p className="text-xs text-[#9AABC3]">
                Conversations, orders, insights
              </p>
            </div>
            <span className="rounded bg-[#1A8FA0]/20 px-3 py-1 text-xs font-bold text-[#7CE2EF]">
              Online
            </span>
          </div>

          <div className="space-y-4">
            {[
              ["Customer asks on WhatsApp", "Answered in 4 seconds"],
              ["Restaurant order request", "Menu flow completed"],
              ["Sales report question", "Chart generated"],
            ].map(([event, status]) => (
              <div
                key={event}
                className="rounded-lg border border-white/10 bg-[#0A1628]/70 p-4"
              >
                <p className="text-sm font-semibold text-[#F7F4EF]">{event}</p>
                <p className="mt-1 text-sm text-[#C8A96E]">{status}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            {[
              ["24/7", "Coverage"],
              ["60%", "Cost cut"],
              ["5 min", "Setup"],
            ].map(([stat, label]) => (
              <div key={label} className="rounded bg-white/5 p-3">
                <p className="text-xl font-black text-[#F7F4EF]">{stat}</p>
                <p className="mt-1 text-xs text-[#9AABC3]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { INDUSTRY_TABS } from "./site-content";

export function IndustryTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = INDUSTRY_TABS[activeIndex];

  return (
    <section className="bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
            Industry playbooks
          </p>
          <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
            Pick your vertical and see the fit.
          </h2>
        </div>

        <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
          {INDUSTRY_TABS.map((industry, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={industry.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`min-h-11 shrink-0 rounded px-4 py-2 text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-[#C8A96E] text-[#0A1628]"
                    : "border border-white/10 bg-[#111E33] text-[#C8D2E2] hover:border-[#C8A96E]"
                }`}
              >
                {industry.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 rounded-lg border border-white/10 bg-[#111E33] p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
          <div>
            <h3 className="text-3xl font-black text-[#F7F4EF]">
              {active.label}
            </h3>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              {active.value}
            </p>
            {active.insight ? (
              <p className="mt-6 rounded border border-[#1A8FA0]/50 bg-[#1A8FA0]/10 p-4 text-sm font-semibold leading-6 text-[#7CE2EF]">
                {active.insight} - Capgemini
              </p>
            ) : null}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-[#0A1628] p-5">
              <h4 className="font-black text-[#F7F4EF]">Key challenges</h4>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#C8D2E2]">
                {active.challenges.map((challenge) => (
                  <li key={challenge}>- {challenge}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#0A1628] p-5">
              <h4 className="font-black text-[#F7F4EF]">
                BlueScaler in action
              </h4>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#C8D2E2]">
                {active.actions.map((action) => (
                  <li key={action}>- {action}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

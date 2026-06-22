import { CONVERSATIONAL_VIDEOS, SIGNUP_URLS } from "./site-content";

export function ConversationalAgents() {
  return (
    <section
      id="conversational-agents"
      className="bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Conversational Agents
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Customer conversations handled 24/7.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C8D2E2]">
              Deploy AI-powered chat agents that handle customer queries on
              your website, in your app, or anywhere your customers are.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "24/7 automated customer support",
              "Reduce support costs by up to 60%",
              "Deploy in minutes, no code required",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-lg border border-white/10 bg-[#111E33] p-4 text-sm font-semibold leading-6 text-[#F7F4EF]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CONVERSATIONAL_VIDEOS.map((video) => (
            <article key={video.title} className="group">
              <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#111E33]">
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

        <a
          href={SIGNUP_URLS.conversational}
          className="mt-10 inline-block rounded bg-[#C8A96E] px-6 py-3 text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
        >
          Sign Up for Conversational Agent
        </a>
      </div>
    </section>
  );
}

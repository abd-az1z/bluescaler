import { DEMO_BOOKING_URL, SIGNUP_URLS, WHATSAPP_URL } from "./site-content";

export function CTASection() {
  return (
    <section
      id="contact"
      className="bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-white/10 bg-[#111E33] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
            Ready to automate your business?
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
            Book a demo, start a signup flow, or send a quick note. BlueScaler
            is built for practical AI adoption across GCC SMB teams.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={DEMO_BOOKING_URL}
              className="rounded bg-[#C8A96E] px-6 py-3 text-center text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
            >
              Book a Demo
            </a>
            <a
              href={WHATSAPP_URL}
              className="rounded border border-[#1A8FA0] px-6 py-3 text-center text-base font-bold text-[#7CE2EF] transition-colors hover:bg-[#1A8FA0]/15"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <form
          action="mailto:sales@agentnomics.ai"
          method="post"
          encType="text/plain"
          className="grid gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
              Name
              <input
                name="name"
                type="text"
                required
                className="rounded border border-white/10 bg-[#0A1628] px-4 py-3 text-[#F7F4EF] outline-none transition-colors placeholder:text-[#6B7E9A] focus:border-[#C8A96E]"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
              Work email
              <input
                name="email"
                type="email"
                required
                className="rounded border border-white/10 bg-[#0A1628] px-4 py-3 text-[#F7F4EF] outline-none transition-colors placeholder:text-[#6B7E9A] focus:border-[#C8A96E]"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
            Company
            <input
              name="company"
              type="text"
              className="rounded border border-white/10 bg-[#0A1628] px-4 py-3 text-[#F7F4EF] outline-none transition-colors placeholder:text-[#6B7E9A] focus:border-[#C8A96E]"
              placeholder="Company name"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
            Message
            <textarea
              name="message"
              rows={4}
              className="resize-none rounded border border-white/10 bg-[#0A1628] px-4 py-3 text-[#F7F4EF] outline-none transition-colors placeholder:text-[#6B7E9A] focus:border-[#C8A96E]"
              placeholder="Tell us what you want to automate"
            />
          </label>
          <button
            type="submit"
            className="rounded bg-[#F7F4EF] px-6 py-3 text-base font-bold text-[#0A1628] transition-colors hover:bg-white"
          >
            Send Message
          </button>
        </form>

        <div className="lg:col-span-2">
          <div className="grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
            <a
              href={SIGNUP_URLS.conversational}
              className="rounded-lg border border-white/10 bg-[#0A1628] p-5 transition-colors hover:border-[#C8A96E]"
            >
              <p className="font-black text-[#F7F4EF]">
                Start conversational agent signup
              </p>
              <p className="mt-2 text-sm text-[#9AABC3]">
                Customer support, ordering, booking, and chat automation.
              </p>
            </a>
            <a
              href={SIGNUP_URLS.analytical}
              className="rounded-lg border border-white/10 bg-[#0A1628] p-5 transition-colors hover:border-[#C8A96E]"
            >
              <p className="font-black text-[#F7F4EF]">
                Start analytical agent signup
              </p>
              <p className="mt-2 text-sm text-[#9AABC3]">
                Data questions, reports, charts, and operational insights.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

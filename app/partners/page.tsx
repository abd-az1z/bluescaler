import type { Metadata } from "next";
import { PARTNER_EMAIL_URL, PARTNER_TYPES } from "@/components/site-content";

export const metadata: Metadata = {
  title: "Partners | BlueScaler",
  description:
    "Partner with BlueScaler to bring AI agents to clients across the Middle East.",
};

const BENEFIT_ROWS = [
  ["Revenue share", "Yes", "Yes", "Yes"],
  ["Co-marketing", "Yes", "Yes", "-"],
  ["Technical training", "Yes", "Yes", "-"],
  ["Dedicated account manager", "Yes", "Yes", "-"],
  ["Priority support", "Yes", "Yes", "-"],
];

export default function PartnersPage() {
  return (
    <main>
      <section className="bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
            Partners
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl">
            Partner with BlueScaler.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C8D2E2]">
            Join our partner network and bring AI agents to your clients across
            the Middle East. Resellers, agencies, and system integrators are
            welcome.
          </p>
          <a
            href={PARTNER_EMAIL_URL}
            className="mt-8 inline-block rounded bg-[#C8A96E] px-6 py-3 text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
          >
            Become a Partner
          </a>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111E33] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Why partner with us
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              A practical AI offer for your clients.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              [
                "Revenue Share",
                "Earn recurring commissions on every client you refer or manage.",
              ],
              [
                "Full Support",
                "We handle onboarding, training, and technical support for your clients.",
              ],
              [
                "Co-Marketing",
                "Joint campaigns, case studies, and regional event presence.",
              ],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-white/10 bg-[#0A1628] p-6"
              >
                <h3 className="text-2xl font-black text-[#F7F4EF]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#C8D2E2]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              Partner types
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Choose the motion that fits your business.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PARTNER_TYPES.map((type) => (
              <article
                key={type.title}
                className="rounded-lg border border-white/10 bg-[#111E33] p-6"
              >
                <h3 className="text-2xl font-black text-[#F7F4EF]">
                  {type.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#C8D2E2]">
                  {type.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#111E33] text-[#F7F4EF]">
                <tr>
                  <th className="px-4 py-4 font-black">Benefit</th>
                  <th className="px-4 py-4 font-black">Reseller</th>
                  <th className="px-4 py-4 font-black">Implementation</th>
                  <th className="px-4 py-4 font-black">Referral</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-[#0A1628] text-[#C8D2E2]">
                {BENEFIT_ROWS.map(([benefit, reseller, implementation, referral]) => (
                  <tr key={benefit}>
                    <td className="px-4 py-4 font-bold text-[#F7F4EF]">
                      {benefit}
                    </td>
                    <td className="px-4 py-4">{reseller}</td>
                    <td className="px-4 py-4">{implementation}</td>
                    <td className="px-4 py-4">{referral}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111E33] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A96E]">
              How to apply
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Let us grow the GCC together.
            </h2>
            <a
              href={PARTNER_EMAIL_URL}
              className="mt-8 inline-block rounded bg-[#C8A96E] px-6 py-3 text-base font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
            >
              Apply to Partner
            </a>
          </div>

          <div className="grid gap-4">
            {[
              "Fill in the partner application form.",
              "We review and onboard within 5 business days.",
              "Start selling and earning.",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-white/10 bg-[#0A1628] p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#C8A96E]">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-lg font-bold text-[#F7F4EF]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

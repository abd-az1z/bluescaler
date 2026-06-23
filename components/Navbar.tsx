import Image from "next/image";
import Link from "next/link";
import { DEMO_BOOKING_URL, NAV_LINKS, SIGNUP_URLS } from "./site-content";

const LOGO_SRC = "/agentnomics_logo.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A1628]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LOGO_SRC}
            alt="Agentnomics"
            width={48}
            height={48}
            className="size-12 object-contain"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold text-[#F7F4EF]">
              BlueScaler
            </span>
            <span className="block text-xs font-medium text-[#9AABC3]">
              powered by Agentnomics
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#C8D2E2] transition-colors hover:text-[#F7F4EF]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={DEMO_BOOKING_URL}
            className="text-sm font-medium text-[#C8D2E2] transition-colors hover:text-[#F7F4EF]"
          >
            Book a Demo
          </a>
        </div>

        <a
          href={SIGNUP_URLS.conversational}
          className="rounded bg-[#C8A96E] px-4 py-2 text-sm font-bold text-[#0A1628] transition-colors hover:bg-[#DFC486]"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL_URL, NAV_LINKS, SUPPORT_EMAIL_URL } from "./site-content";

const LOGO_SRC = "/agentnomics_logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07101F] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={LOGO_SRC}
              alt="Agentnomics"
              width={48}
              height={48}
              className="size-12 object-contain"
            />
            <div>
              <p className="text-lg font-black text-[#F7F4EF]">BlueScaler</p>
              <p className="mt-1 text-sm text-[#9AABC3]">
                Powered by Agentnomics
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#6B7E9A]">
            © 2026 Agentnomics. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#C8D2E2]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#C8A96E]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CONTACT_EMAIL_URL}
            className="transition-colors hover:text-[#C8A96E]"
          >
            Contact
          </a>
          <a
            href={SUPPORT_EMAIL_URL}
            className="transition-colors hover:text-[#C8A96E]"
          >
            Support
          </a>
          <a href="#" className="transition-colors hover:text-[#C8A96E]">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

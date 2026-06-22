import { WHATSAPP_URL } from "./site-content";

export function WhatsAppWidget() {
  return (
    <a
      href={WHATSAPP_URL}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-sm font-black text-[#06150B] shadow-xl shadow-black/30 transition-transform hover:scale-105"
      aria-label="Contact BlueScaler on WhatsApp"
    >
      WA
    </a>
  );
}

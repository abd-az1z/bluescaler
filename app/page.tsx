import { AnalyticalAgents } from "@/components/AnalyticalAgents";
import { ConversationalAgents } from "@/components/ConversationalAgents";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Navbar } from "@/components/Navbar";
import { TrustSection } from "@/components/TrustSection";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ConversationalAgents />
        <AnalyticalAgents />
        <Industries />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

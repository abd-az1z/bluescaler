import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BlueScaler — AI Agents for Middle East Businesses",
  description:
    "Deploy conversational and analytical AI agents for your SMB. Built for UAE, Saudi Arabia, Qatar and Kuwait. Powered by Agentnomics.",
  openGraph: {
    title: "BlueScaler — AI Agents for Middle East Businesses",
    description:
      "Automate customer support and unlock business insights with AI agents built for GCC SMBs.",
    url: "https://bluescaler.com",
    siteName: "BlueScaler",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0A1628] text-[#F7F4EF]">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}

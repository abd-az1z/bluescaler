export const SIGNUP_URLS = {
  conversational: "https://app.agentnomics.ai/signup/conversational-agent",
  analytical: "https://app.agentnomics.ai/signup/analytical-agent",
};

export const DEMO_BOOKING_URL =
  "mailto:sales@agentnomics.ai?subject=BlueScaler%20demo%20request";

export const CONTACT_EMAIL_URL = "mailto:sales@agentnomics.ai";

export const SUPPORT_EMAIL_URL = "mailto:support@agentnomics.ai";

const WHATSAPP_NUMBER = "";

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I'm%20interested%20in%20BlueScaler%20AI%20agents`
  : DEMO_BOOKING_URL;

export const NAV_LINKS = [
  { label: "Conversational Agents", href: "#conversational-agents" },
  { label: "Analytical Agents", href: "#analytical-agents" },
  { label: "Book a Demo", href: "#contact" },
];

export const CONVERSATIONAL_VIDEOS = [
  {
    title: "Customer Support Agent",
    embedUrl: "https://www.youtube.com/embed/nVrMT6VZD8I",
  },
  {
    title: "Starchandco wins with Agentnomics",
    embedUrl: "https://www.youtube.com/embed/ARB4oYAoxhk",
  },
];

export const ANALYTICAL_AGENTS = [
  {
    name: "Sales Analytics Agent",
    description:
      "Spot revenue trends, sales gaps, and product performance from plain-English questions.",
  },
  {
    name: "Inventory & Operations Agent",
    description:
      "Track stock, demand signals, and operational bottlenecks before they slow the business.",
  },
  {
    name: "Customer Insights Agent",
    description:
      "Understand customer behavior, repeat buying patterns, and service issues in minutes.",
  },
];

export const INDUSTRIES = [
  {
    label: "Restaurants",
    useCase: "Handle reservations, menu questions, and orders automatically.",
  },
  {
    label: "Retail",
    useCase: "Answer product queries and process returns 24/7.",
  },
  {
    label: "Automotive Services",
    useCase: "Book appointments and follow up with customers.",
  },
  {
    label: "Hospitality",
    useCase: "Automate guest queries across WhatsApp and your website.",
  },
  {
    label: "Logistics",
    useCase: "Give customers real-time shipment updates without extra staff.",
  },
];

export const TRUST_PILLARS = [
  {
    title: "Enterprise-grade infrastructure",
    body: "Powered by AWS, your data is secure and always available.",
  },
  {
    title: "Proven in the market",
    body: "Built for businesses across the Middle East that need practical AI now.",
  },
  {
    title: "Real support",
    body: "Onboarding help is included. We set it up with you and stay close.",
  },
];

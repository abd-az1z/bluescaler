export const SIGNUP_URLS = {
  conversational: "https://app.agentnomics.ai/signup/conversational-agent",
  analytical: "https://app.agentnomics.ai/signup/analytical-agent",
};

export const DEMO_BOOKING_URL =
  "mailto:sales@agentnomics.ai?subject=BlueScaler%20demo%20request";

export const CONTACT_EMAIL_URL = "mailto:sales@agentnomics.ai";

export const SUPPORT_EMAIL_URL = "mailto:support@agentnomics.ai";

export const PARTNER_EMAIL_URL =
  "mailto:partners@agentnomics.ai?subject=BlueScaler%20partner%20application";

const WHATSAPP_NUMBER = "";

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I'm%20interested%20in%20BlueScaler%20AI%20agents`
  : DEMO_BOOKING_URL;

export const NAV_LINKS = [
  { label: "Agents", href: "/agents" },
  { label: "Industries", href: "/industries" },
  { label: "Customers", href: "/customers" },
  { label: "Partners", href: "/partners" },
];

export const CONVERSATIONAL_VIDEOS = [
  {
    title: "Customer Support Agent",
    videoSrc: "/videos/AI%20Customer%20Support%20BOT.mp4",
  },
  {
    title: "Starchandco wins with Agentnomics",
    videoSrc: "/videos/starchandco%20wins%20with%20agentnomics.mp4",
  },
];

export const AGENTS_PAGE_VIDEOS = [
  {
    title: "Aria customer support agent",
    videoSrc: "/videos/aria-hero-silent.webm",
  },
  ...CONVERSATIONAL_VIDEOS,
];

export const CONVERSATIONAL_AGENT_CARDS = [
  {
    name: "Restaurant Bot",
    tagline: "Let customers book a table or browse your menu any time.",
  },
  {
    name: "Health Assistant",
    tagline: "Book appointments, check results, and message caregivers.",
  },
  {
    name: "Fairway Concierge",
    tagline: "Book tee times without the hold music.",
  },
  {
    name: "Retail Bot",
    tagline: "Answer product questions and process returns 24/7.",
  },
  {
    name: "Mechanic Bot",
    tagline: "Book service appointments and follow up automatically.",
  },
];

export const ANALYTICAL_AGENTS = [
  {
    name: "Sales Analytics Agent",
    description: "Track revenue, pipeline, and rep performance. Ask anything.",
  },
  {
    name: "Inventory Agent",
    description: "Monitor stock levels, forecast demand, and prevent shortages.",
  },
  {
    name: "Pricing Agent",
    description: "Optimise pricing in real time based on demand and competition.",
  },
  {
    name: "Compliance Agent",
    description: "Stay audit-ready with automated compliance monitoring.",
  },
  {
    name: "Warehouse Agent",
    description: "Improve fulfilment speed and reduce warehouse errors.",
  },
];

export const INDUSTRIES = [
  {
    label: "Restaurants & F&B",
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
    label: "Healthcare & Clinics",
    useCase: "Book appointments, follow up with patients, and track supplies.",
  },
  {
    label: "Logistics",
    useCase: "Give customers real-time shipment updates without extra staff.",
  },
];

export const INDUSTRY_TABS = [
  {
    label: "Restaurants & F&B",
    challenges: [
      "After-hours queries",
      "Table booking staff load",
      "Menu questions",
      "Order updates",
    ],
    actions: [
      "Restaurant Bot handles bookings, menu FAQs, and order status 24/7.",
      "Analytical Agent tracks covers, peak hours, and menu performance.",
    ],
    value:
      "Reduce front-of-house workload, never miss a booking, and serve guests faster.",
  },
  {
    label: "Retail",
    challenges: [
      "Stock availability questions",
      "Dynamic pricing pressure",
      "Customer queries across channels",
    ],
    actions: [
      "Dynamic Inventory & Replenishment Agent flags shortages before they hit sales.",
      "Retail Bot answers product queries and return questions around the clock.",
    ],
    value:
      "Improve fulfillment, protect margins, and respond faster across every channel.",
    insight: "82% of retailers plan to deploy AI Agents within three years.",
  },
  {
    label: "Automotive Services",
    challenges: [
      "Phone tag for bookings",
      "Manual service follow-ups",
      "Parts availability questions",
    ],
    actions: [
      "Mechanic Bot books appointments and sends automated follow-ups.",
      "Analytical Agent monitors turnaround and revenue per bay.",
    ],
    value: "Win more bookings, reduce admin, and keep customers informed.",
  },
  {
    label: "Hospitality & Hotels",
    challenges: [
      "Guest queries at all hours",
      "Reservation management",
      "Multilingual support needs",
    ],
    actions: [
      "Conversational Agent handles guest questions across WhatsApp and web.",
      "Analytical Agent tracks occupancy, reviews, and revenue per room.",
    ],
    value: "Deliver 24/7 guest service without adding headcount.",
  },
  {
    label: "Healthcare & Clinics",
    challenges: [
      "Appointment booking load",
      "Patient follow-ups",
      "Supply and compliance tracking",
    ],
    actions: [
      "Health Assistant Bot supports appointments, lab results, and caregiver messages.",
      "Compliance-driven agent helps teams monitor procurement and supplies.",
    ],
    value: "Improve patient experience and reduce admin burden.",
  },
  {
    label: "Logistics & Delivery",
    challenges: [
      "Shipment status queries",
      "Customer communication volume",
      "Delivery performance visibility",
    ],
    actions: [
      "Conversational Agent handles shipment queries on WhatsApp automatically.",
      "Analytical Agent monitors delivery performance and SLA compliance.",
    ],
    value: "Reduce inbound calls and improve on-time delivery visibility.",
  },
];

export const INDUSTRY_IMPACT = [
  {
    industry: "Restaurants & F&B",
    capabilities: "Booking automation, menu queries, analytics",
    impact: "Fewer missed bookings, reduced staff load",
  },
  {
    industry: "Retail",
    capabilities: "Inventory forecasting, pricing, product queries",
    impact: "Higher margins, faster fulfilment",
  },
  {
    industry: "Automotive",
    capabilities: "Appointment booking, follow-ups, parts queries",
    impact: "More bookings, less phone time",
  },
  {
    industry: "Hospitality",
    capabilities: "24/7 guest support, occupancy analytics",
    impact: "Better reviews, lower headcount cost",
  },
  {
    industry: "Healthcare",
    capabilities: "Appointment bots, compliance, supply tracking",
    impact: "Improved patient care, audit readiness",
  },
  {
    industry: "Logistics",
    capabilities: "Shipment queries, delivery analytics",
    impact: "Fewer inbound calls, better SLA tracking",
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

export const RESULTS_STATS = [
  ["60%", "More sales"],
  ["40", "Hours saved monthly per employee"],
  ["80%", "Routine queries automated"],
  ["Days", "Go live timeline"],
];

export const CUSTOMER_CASE_STUDIES = [
  {
    company: "Dubai restaurant",
    industry: "Restaurants & F&B",
    country: "UAE",
    challenge: "Manual booking reminders led to missed reservations and no-shows.",
    result: "Reduced no-shows by 40% with automated booking reminders.",
    agent: "Restaurant Bot",
  },
  {
    company: "UAE retail chain",
    industry: "Retail",
    country: "UAE",
    challenge: "Customers waited hours for stock and return answers.",
    result: "Cut response time from 4 hours to under 2 minutes.",
    agent: "Retail Bot",
  },
  {
    company: "KSA automotive service",
    industry: "Automotive",
    country: "Saudi Arabia",
    challenge: "Service bookings were lost to phone queues and slow follow-up.",
    result: "Booked 3x more appointments with zero extra staff.",
    agent: "Mechanic Bot",
  },
];

export const PARTNER_TYPES = [
  {
    title: "Agency Partners",
    body: "You bring the clients, we provide the AI platform. Add WhatsApp and web agents to your GCC client engagements without building anything from scratch.",
  },
  {
    title: "Systems Integrators",
    body: "Technical teams who deploy and configure BlueScaler agents into client infrastructure. We manage the platform — you own the integration layer.",
  },
  {
    title: "Consultants",
    body: "Business advisors who identify automation opportunities and bring BlueScaler as the platform of choice. From scoping to go-live, we support the delivery.",
  },
];

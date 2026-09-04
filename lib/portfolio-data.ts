/**
 * Central content configuration for the portfolio.
 * Edit values here to update the site.
 * Do NOT invent real performance numbers.
 */

export const profile = {
  name: "Mohammed Jabr",
  role: "Digital Marketing & Media Buying Specialist",
  avatar: "/profile.png",
  location: "Gaza, Palestine · Available remotely",
  email: "mohmed.jabr.2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-jabr-5aa83337a/",
  whatsapp: "https://wa.me/972595436274",
}

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

/* =========================================================
   HERO
========================================================= */

export const heroMetrics = [
  {
    label: "Meta Campaigns",
    value: "40+",
    hint: "Campaigns managed",
  },
  {
    label: "Accounts Reached",
    value: "400K+",
    hint: "Across Meta campaigns",
  },
  {
    label: "Views",
    value: "2M+",
    hint: "Content and campaign views",
  },
  {
    label: "Purchases",
    value: "300+",
    hint: "Campaign-attributed purchases",
  },
]

export const heroTrend = [
  22,
  34,
  30,
  46,
  52,
  61,
  58,
  74,
  82,
  79,
  92,
  100,
]

/* =========================================================
   ABOUT
========================================================= */

export const aboutHighlights = [
  {
    title: "Objective-first thinking",
    description:
      "I start with the business objective, then build the campaign strategy, targeting and metrics around it.",
  },
  {
    title: "Data-driven optimization",
    description:
      "I use campaign performance data to evaluate results, identify opportunities and continuously optimize.",
  },
  {
    title: "Disciplined execution",
    description:
      "My background in operations helps me manage campaigns, content and day-to-day marketing activities in a structured way.",
  },
]

/* =========================================================
   SERVICES
========================================================= */

export const services = [
  {
    title: "Meta Ads & Media Buying",
    description:
      "Campaign setup, audience targeting, budget management, optimization and performance analysis across Meta Ads.",
    icon: "trending-up",
  },
  {
    title: "Social Media Marketing & Growth",
    description:
      "Managing social media activities and growth strategies designed to strengthen digital presence and audience engagement.",
    icon: "megaphone",
  },
  {
    title: "Digital Content Management",
    description:
      "Planning, managing and coordinating digital content with a focus on audience engagement and marketing objectives.",
    icon: "pen-tool",
  },
  {
    title: "Educational Platform Operations",
    description:
      "Managing educational platform activities, content, customer support, team coordination and daily operations.",
    icon: "workflow",
  },
] as const

/* =========================================================
   EXPERIENCE
========================================================= */

export const experience = [
  {
    position: "Digital Marketing & Media Buying",
    company: "AlKanz Education Platform",
    date: "FEB 2026 – PRESENT",

    description:
      "Managing digital marketing activities, Meta Ads campaigns, social media, digital content and educational platform operations.",

    responsibilities: [
      "Manage Meta Ads campaigns from setup to performance analysis and evaluation",
      "Manage digital content and social media activities to support audience growth and engagement",
      "Plan and optimize campaigns across different objectives including Messages, Sales, Awareness and Reach",
      "Monitor campaign performance, analyze KPIs and make data-driven optimization decisions",
      "Support website, app and educational platform operations",
      "Coordinate content, customer support and operational activities",
    ],

    achievements: [
      "40+ Meta Ads campaigns managed across multiple campaign objectives",
      "400K+ accounts reached across Meta campaigns within the Palestinian market",
      "2M+ views generated through digital marketing and content activities",
      "300+ purchases generated through properly managed campaigns",
      "Best documented Messages campaign generated 700 messages at $0.17 per message",
      "Managed campaigns with a combined documented ad spend of approximately $1,200",
    ],
  },
]

/* =========================================================
   PROJECTS / CASE STUDIES
========================================================= */

export const projects = [
  {
    id: "01",
    title: "High-Performance Messages Campaign",
    category: "Meta Ads · Messages",
    image: "/campaign-01-messages.png",
    featured: true,

    objective:
      "Generate conversations through Meta Ads while maximizing message volume at an efficient cost.",

    role:
      "Campaign setup, audience targeting, budget management, performance monitoring and optimization.",

    results: [
      {
        label: "Messages",
        value: "700",
      },
      {
        label: "Cost / Message",
        value: "$0.17",
      },
      {
        label: "Ad Spend",
        value: "$118.30",
      },
    ],

    tags: ["Meta Ads", "Messages", "Media Buying"],
  },

  {
    id: "02",
    title: "Awareness Campaign",
    category: "Meta Ads · Awareness",
    image: "/campaign-02-awareness.png",
    featured: false,

    objective:
      "Increase campaign visibility and reach a large audience within the target market.",

    role:
      "Campaign setup, audience targeting, budget management and performance monitoring.",

    results: [
      {
        label: "Reach",
        value: "226,478",
      },
      {
        label: "Cost / Result",
        value: "$0.23",
      },
    ],

    tags: ["Meta Ads", "Awareness", "Reach"],
  },

  {
    id: "03",
    title: "Students 2008 Campaign",
    category: "Meta Ads · Messages",
    image: "/campaign-03-students-2008.png",
    featured: false,

    objective:
      "Generate targeted conversations from students through a focused Meta Ads campaign.",

    role:
      "Campaign structure, audience targeting, budget management and performance optimization.",

    results: [
      {
        label: "Messages",
        value: "333",
      },
      {
        label: "Cost / Message",
        value: "$0.41",
      },
      {
        label: "Ad Spend",
        value: "$138.13",
      },
    ],

    tags: ["Meta Ads", "Messages", "Education"],
  },

  {
    id: "04",
    title: "Nuseirat Targeting Campaign",
    category: "Meta Ads · Messages",
    image: "/campaign-04-nuseirat.png",
    featured: false,

    objective:
      "Reach and engage a geographically targeted audience through Meta Ads.",

    role:
      "Geographic targeting, campaign management, performance monitoring and optimization.",

    results: [
      {
        label: "Messages",
        value: "248",
      },
      {
        label: "Cost / Message",
        value: "$0.31",
      },
    ],

    tags: ["Meta Ads", "Messages", "Targeting"],
  },

  {
    id: "05",
    title: "Design-Based Campaign",
    category: "Meta Ads · Creative",
    image: "/campaign-05-design.png",
    featured: false,

    objective:
      "Use campaign creatives to generate conversations and evaluate advertising performance.",

    role:
      "Creative-based campaign management, audience targeting, performance monitoring and optimization.",

    results: [
      {
        label: "Messages",
        value: "82",
      },
      {
        label: "Cost / Message",
        value: "$0.48",
      },
      {
        label: "Ad Spend",
        value: "$39.08",
      },
    ],

    tags: ["Meta Ads", "Creative", "Messages"],
  },
]

/* =========================================================
   PROCESS
========================================================= */

export const processSteps = [
  {
    title: "Research",
    description:
      "Understand the audience, market and business objective before launching a campaign.",
  },
  {
    title: "Strategy",
    description:
      "Define targeting, campaign structure, positioning and the KPIs that matter.",
  },
  {
    title: "Creative",
    description:
      "Develop and test creative concepts and messaging aligned with the campaign objective.",
  },
  {
    title: "Launch",
    description:
      "Launch campaigns, monitor delivery and track performance continuously.",
  },
  {
    title: "Optimize",
    description:
      "Analyze the data, identify opportunities and optimize targeting, creative and budget allocation.",
  },
]

/* =========================================================
   PERFORMANCE
========================================================= */

export const performanceMetrics = [
  {
    key: "Campaigns",
    label: "Meta Ads Campaigns",
    value: "40+",
  },
  {
    key: "Reach",
    label: "Accounts Reached",
    value: "400K+",
  },
  {
    key: "Views",
    label: "Views",
    value: "2M+",
  },
  {
    key: "Purchases",
    label: "Purchases",
    value: "300+",
  },
  {
    key: "Messages",
    label: "Best Messages Result",
    value: "700",
  },
  {
    key: "Cost",
    label: "Best Cost / Message",
    value: "$0.17",
  },
  {
    key: "Spend",
    label: "Documented Ad Spend",
    value: "$1,200",
  },
  {
    key: "Experience",
    label: "Meta Ads Experience",
    value: "FEB 2026 – PRESENT",
  },
]

/* =========================================================
   TOOLS & SKILLS
========================================================= */

export const tools = [
  // Tools
  "Meta Ads Manager",
  "Meta Business Suite",
  "Google Sheets",
  "Canva",
  "Edits",

  // Skills
  "Media Buying",
  "Meta Ads Campaign Management",
  "Campaign Optimization",
  "Audience Targeting",
  "Customer Service",
  "Performance Analysis",
  "Social Media Management",
  "Administrative Skills",
  "Marketing Strategy",
  "KPI Tracking & Reporting",
]

/* =========================================================
   CREATIVE WORK
========================================================= */

export const creativeWork = [
  {
    src: "/creative/ad-creative-1.png",
    alt: "Digital marketing ad creative",
    span: "tall",
  },
  {
    src: "/creative/ad-creative-2.png",
    alt: "Social media carousel design",
    span: "square",
  },
  {
    src: "/creative/ad-creative-3.png",
    alt: "Digital advertising banner",
    span: "wide",
  },
  {
    src: "/creative/ad-creative-4.png",
    alt: "Social media story creative",
    span: "tall",
  },
  {
    src: "/creative/ad-creative-5.png",
    alt: "Digital brand content",
    span: "square",
  },
  {
    src: "/creative/ad-creative-6.png",
    alt: "Marketing performance visualization",
    span: "tall",
  },
] as const

/* =========================================================
   WHY WORK WITH ME
========================================================= */

export const whyWorkWithMe = [
  {
    title: "Data-driven",
    description:
      "I use campaign performance data to guide decisions and identify opportunities for improvement.",
  },
  {
    title: "Performance-focused",
    description:
      "I focus on measurable outcomes rather than vanity metrics alone.",
  },
  {
    title: "Execution-focused",
    description:
      "I turn campaign strategies into practical actions, testing and optimization.",
  },
  {
    title: "Organized & structured",
    description:
      "My operational background helps me manage marketing activities in a structured and reliable way.",
  },
]
// Factual content adapted from prior reference material. Nothing here is
// invented — statistics, client names, awards and case studies are
// intentionally left out because the source material does not provide any.
// Industry-specific content lives in ./industries.js

export const brand = {
  name: "AiVren",
  fullName: "AiVren Technologies",
  tagline: "POWERING BUSINESS WITH AI",
  email: "contact@aivrentech.com",
  phone: "+91 70668 52984",
  address:
    "62/4, Plot No. B6, Shrushti Park, K. N. Patil Nagar, Wadipir, Kolhapur, Maharashtra 416011",
  website: "aivrentech.com",
};

export const sectionIds = {
  top: "top",
  about: "about",
  solutions: "solutions",
  industries: "industries",
  aiInAction: "ai-in-action",
  agents: "agents",
  visibility: "visibility",
  process: "process",
  commercial: "commercial-model",
  contact: "contact",
};

export const nav = [
  { label: "About", href: `#${sectionIds.about}` },
  { label: "Solutions", href: `#${sectionIds.solutions}` },
  { label: "Industries", href: `#${sectionIds.industries}` },
  { label: "AI in Action", href: `#${sectionIds.aiInAction}` },
  { label: "Process", href: `#${sectionIds.process}` },
  { label: "Commercial Model", href: `#${sectionIds.commercial}` },
  { label: "Contact", href: `#${sectionIds.contact}` },
];

export const hero = {
  eyebrow: "AI-Powered Systems · Software · Automation",
  headlineTop: "AiVren",
  headlineBottom: "Technologies",
  tagline: "POWERING BUSINESS WITH AI",
  sub: "AiVren Technologies builds AI-powered systems, software and automation for manufacturing SMEs, foundries, machine shops and fabrication businesses — connecting production, quality, purchase, inventory, approvals and reporting around how a company actually works.",
  ctaPrimary: "Explore Solutions",
  ctaPrimaryHref: `#${sectionIds.solutions}`,
  ctaSecondary: "Book Consultation",
  ctaSecondaryHref: `#${sectionIds.contact}`,
};

export const about = {
  eyebrow: "About AiVren Technologies",
  headline: "Built around how your business actually runs.",
  sub: "AiVren Technologies builds AI-powered systems, software and automation around how a company already works — its departments, approvals, data and existing tools. Not a fixed product. Not a generic AI wrapper. Working systems, built around your process.",
  pillars: [
    {
      title: "AI-powered workflows",
      description:
        "Business rules, approvals and follow-ups run end-to-end across departments — production, quality, purchase, inventory, dispatch and sales — without manual re-entry or follow-up chasing.",
    },
    {
      title: "Custom-built software",
      description:
        "Dashboards, forms, reports and integrations configured per company — around each business's own process, approval hierarchy and operational requirements. Not a fixed package.",
    },
    {
      title: "Intelligent task execution",
      description:
        "AI agents do more than send notifications or create drafts. They understand the context of a task, take the required actions, and complete the workflow end-to-end with high efficiency.",
    },
    {
      title: "Connected business systems",
      description:
        "ERP, spreadsheets, email, WhatsApp and registers feed into one AI-powered operational view — so production, quality, purchase, stores and dispatch stop living in separate places.",
    },
  ],
};

export const problems = {
  eyebrow: "Why automation",
  headline: "Where operational work usually breaks down.",
  sub: "These are the recurring patterns that show up across manufacturing SMEs and professional services firms — the friction that a custom automation layer is designed to remove.",
  items: [
    {
      title: "Manual, repetitive processes",
      description:
        "Shift counts, production records, inspection checklists, GRN entries, follow-ups and approvals handled by hand, form by form, sheet by sheet.",
    },
    {
      title: "Disconnected information",
      description:
        "Production, quality, purchase, stores and dispatch each hold part of the picture — but nothing connects them into a single operational view.",
    },
    {
      title: "Approval delays",
      description:
        "Purchase orders, deviations, NCRs and stage sign-offs wait in inboxes or on paper — slowing the work behind them.",
    },
    {
      title: "Visibility gaps",
      description:
        "Management summaries, pending-work dashboards, downtime views and rejection analysis take hours to assemble, and are stale the moment they're ready.",
    },
  ],
};

export const solutions = {
  eyebrow: "Intelligent Business Solutions",
  headline: "AI-powered systems, software and automation. One operational view.",
  sub: "AiVren builds around a company's real departments, approvals and existing tools — not a fixed generic package. Each pillar below stands on its own, but they are designed to work as one.",
  pillars: [
    {
      id: "custom-ai-software",
      number: "01",
      name: "Custom AI Software",
      tagline: "Purpose-built software for complex business and engineering needs.",
      capabilities: [
        {
          title: "Intelligent Applications",
          description:
            "Custom applications built around your business processes and teams.",
        },
        {
          title: "Engineering & Technical Tools",
          description:
            "Software that can create, process and work with technical information, documents and visual data.",
        },
        {
          title: "Data & Reporting Platforms",
          description:
            "Systems that transform operational data into structured outputs, reports and actionable information.",
        },
        {
          title: "Business Process Software",
          description:
            "End-to-end applications designed around unique workflows, approvals and operational requirements.",
        },
      ],
    },
    {
      id: "ai-systems",
      number: "02",
      name: "AI Systems",
      tagline: "AI that understands, analyses and acts on business information.",
      capabilities: [
        {
          title: "AI Agents",
          description:
            "Intelligent agents that understand context, make decisions and execute approved actions.",
        },
        {
          title: "Document & Visual Intelligence",
          description:
            "AI systems that understand documents, images, drawings and other business information.",
        },
        {
          title: "Analysis & Decision Intelligence",
          description:
            "Systems that analyse complex information and support faster, informed decisions.",
        },
        {
          title: "Generative AI Systems",
          description:
            "AI that can generate structured content, documents, technical outputs and business information.",
        },
      ],
    },
    {
      id: "automation",
      number: "03",
      name: "Automation",
      tagline: "Connected systems that keep work moving automatically.",
      capabilities: [
        {
          title: "Workflow Automation",
          description: "Automate repetitive and multi-step business processes.",
        },
        {
          title: "System & Data Integration",
          description:
            "Connect software, machines, databases, APIs and existing business systems.",
        },
        {
          title: "Event-Driven Automation",
          description:
            "Automatically trigger actions when a business event, update or exception occurs.",
        },
        {
          title: "Monitoring & Automated Actions",
          description:
            "Continuously track processes and automatically generate alerts, updates, reports or next actions.",
        },
      ],
    },
  ],
};

export const agents = {
  eyebrow: "AI Agents",
  headline: "One AI agent. Configured around your company.",
  sub: "The agent is not a fixed product. It is trained on the company's approved rules, documents and history — and it works inside the same approval hierarchy the business already uses. It answers questions, raises actions and follows up, within the scope the company defines.",

  exchanges: [
    {
      question: "Which machines are running under target this shift?",
      answer:
        "Three machines are below target: MC-04 at 62%, MC-07 at 71% and MC-11 at 58%. MC-11 has an open breakdown logged 45 minutes ago and no maintenance task assigned yet.",
    },
    {
      question: "Raise an RFQ for the cutting tools below reorder level.",
      answer:
        "Drafted RFQ for 4 items across 3 approved suppliers. Quotation requests are ready for approval — pending your sign-off before dispatch.",
    },
    {
      question: "Show open NCRs older than 7 days.",
      answer:
        "6 NCRs are open beyond 7 days, oldest is 14 days. Corrective actions assigned to quality are pending closure for 3 of them.",
    },
    {
      question: "Summarise production for the week for management review.",
      answer:
        "Week summary prepared — output versus plan, machine utilisation, downtime hours, rejections by defect type, and pending dispatches. Ready to send to the review group.",
    },
  ],
};

export const visibility = {
  eyebrow: "Business Visibility & Reporting",
  headline: "The system keeps the picture current. You just open it.",
  sub: "Management summaries, pending-work views, alerts and operational dashboards are generated from the data the workflow already records — so nothing has to be assembled by hand before it can be looked at.",
  capabilities: {
    eyebrow: "What you can see",
    items: [
      {
        title: "Production reports",
        description:
          "Daily, weekly and monthly production summaries, target versus actual, and machine utilisation — as the work happens.",
      },
      {
        title: "Pending-work dashboards",
        description:
          "Live views of pending quotations, POs, dispatches, NCR closures, maintenance tasks and approvals.",
      },
      {
        title: "Quality & rejection views",
        description:
          "Machine-wise and operator-wise rejection analysis, defect-type trends and NCR status.",
      },
      {
        title: "Management summaries",
        description:
          "Open enquiries, orders, dispatches, payments and customer-wise status — in one view, ready for review.",
      },
    ],
  },
  preview: {
    label: "Illustrative preview",
    note: "Example of the shape of information the system exposes. Actual fields and views are configured per company.",
    panels: [
      {
        id: "production",
        title: "Production — this shift",
        rows: [
          { label: "Machines below target", value: "3", tone: "warn" },
          { label: "Live jobs running", value: "14", tone: "ok" },
          { label: "Backlog carried forward", value: "2 jobs", tone: "warn" },
          { label: "Delay alerts open", value: "1", tone: "warn" },
        ],
      },
      {
        id: "quality",
        title: "Quality — open items",
        rows: [
          { label: "NCRs open", value: "6", tone: "warn" },
          { label: "NCRs past 7 days", value: "3", tone: "warn" },
          { label: "Rejections this week", value: "by defect type", tone: "ok" },
          { label: "First-piece checks pending", value: "0", tone: "ok" },
        ],
      },
      {
        id: "purchase",
        title: "Purchase — pending",
        rows: [
          { label: "Open RFQs", value: "4", tone: "warn" },
          { label: "POs awaiting approval", value: "2", tone: "warn" },
          { label: "GRNs pending entry", value: "1", tone: "warn" },
          { label: "Supplier follow-ups sent", value: "this morning", tone: "ok" },
        ],
      },
      {
        id: "dispatch",
        title: "Dispatch & follow-up",
        rows: [
          { label: "Pending dispatches", value: "5", tone: "warn" },
          { label: "Customer updates sent", value: "yes", tone: "ok" },
          { label: "Quotation follow-ups due", value: "3", tone: "warn" },
          { label: "Payment reminders queued", value: "2", tone: "warn" },
        ],
      },
    ],
  },
};

export const implementation = {
  eyebrow: "Process",
  headline: "How we work with a business.",
  sub: "From first requirement to ongoing support — a clear, disciplined sequence that keeps the scope agreed and the work visible on both sides.",
  steps: [
    {
      id: "requirement",
      title: "Requirement",
      description:
        "Capture which process is consuming time, creating errors or limiting visibility.",
    },
    {
      id: "mapping",
      title: "Process Mapping",
      description:
        "Map the current workflow, approvals, data sources and existing tools.",
    },
    {
      id: "configuration",
      title: "Solution Configuration",
      description:
        "Configure the AI agents, rules, approvals and reports around the operation.",
    },
    {
      id: "integration",
      title: "Integration",
      description:
        "Connect with the systems the business already runs on — ERP, spreadsheets, email and registers.",
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "Pilot, verify against real workflows and get approval on the configured system.",
    },
    {
      id: "deployment",
      title: "Deployment",
      description:
        "Roll out to the departments involved, with training on the approved workflows.",
    },
    {
      id: "support",
      title: "Support",
      description:
        "Ongoing support — health checks, fixes and updates within the approved scope.",
    },
  ],
};

export const support = {
  eyebrow: "Commercial Model",
  headline: "One-time implementation. Annual subscription from Year 2.",
  sub: "The initial project is delivered against an agreed implementation scope and one-time implementation cost. From the second year, an annual subscription supports the deployed solution within its approved scope.",
  cards: [
    {
      id: "implementation-cost",
      tag: "One-Time",
      title: "Implementation Cost",
      description:
        "Covers the design, build and approved go-live of the initial automation scope.",
      tone: "light",
      items: [
        "Business-process study and solution design",
        "Workflow, AI agent and approval configuration",
        "Required integrations within the agreed scope",
        "Development, testing and client validation",
        "Deployment to the agreed infrastructure",
        "User training, handover and go-live assistance",
        "Correction of implementation-related issues identified during go-live",
      ],
    },
    {
      id: "annual-subscription",
      tag: "From Year 2",
      title: "Annual Subscription & Support",
      description:
        "Ongoing support for the deployed system starts from the second year.",
      tone: "dark",
      items: [
        "Workflow-health and integration-health support",
        "Bug and error diagnosis and resolution",
        "Compatible API and integration updates",
        "Minor adjustments within the existing approved scope",
        "Performance and reliability optimisation",
        "Backup and recovery guidance",
        "Scheduled support and user assistance",
      ],
      footnote:
        "Major new modules, new departments, substantial workflow changes or new integrations are treated as separate enhancement projects and quoted separately.",
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  headline: "Tell us what you want to automate.",
  sub: "Share the process, the pain point or the outcome you want. We'll map the requirement and identify what can be automated.",
  industriesLabel: "Industry",
  industries: [
    { value: "", label: "Select your industry" },
    { value: "machine-shops", label: "Machine Shops" },
    { value: "foundries", label: "Foundries" },
    { value: "fabrication-welding", label: "Fabrication & Welding" },
    { value: "chemical-process", label: "Chemical & Process Industries" },
    { value: "engineering-services", label: "Engineering Services" },
    {
      value: "accounting-professional-services",
      label: "Accounting & Professional Services",
    },
    {
      value: "industrial-equipment-manufacturers",
      label: "Industrial Equipment Manufacturers",
    },
    { value: "quality-consulting-firms", label: "Quality Consulting Firms" },
    { value: "other", label: "Other" },
  ],
  fields: {
    name: { label: "Name", placeholder: "Your full name" },
    company: { label: "Company", placeholder: "Company name" },
    email: { label: "Email", placeholder: "you@company.com" },
    phone: { label: "Phone", placeholder: "+91 …" },
    message: {
      label: "Message",
      placeholder:
        "Which process is consuming time, creating errors or limiting visibility?",
    },
  },
  requirement: {
    label: "Requirement",
    placeholder: "What do you want to automate?",
  },
  submit: "Book Consultation",
  success: {
    title: "Thank you — your message is ready to send.",
    body: "This form is not yet connected to a backend. To reach us immediately, use the direct email or phone below. Your details are kept in this browser only.",
  },
  validation: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    message: "Please describe what you want to automate.",
  },
  note: "Fields marked optional may be left blank. Your email app will open with the enquiry details ready to send.",
};

export const footerNav = {
  navigate: [
    { label: "About", href: `#${sectionIds.about}` },
    { label: "Solutions", href: `#${sectionIds.solutions}` },
    { label: "Industries", href: `#${sectionIds.industries}` },
    { label: "Process", href: `#${sectionIds.process}` },
    { label: "Commercial Model", href: `#${sectionIds.commercial}` },
    { label: "Contact", href: `#${sectionIds.contact}` },
  ],
  more: [
    { label: "Custom AI Software", href: "#solutions" },
    { label: "AI Systems", href: "#solutions" },
    { label: "Automation", href: "#solutions" },
    { label: "AI Agents", href: `#${sectionIds.agents}` },
    { label: "Visibility & Reporting", href: `#${sectionIds.visibility}` },
  ],
};

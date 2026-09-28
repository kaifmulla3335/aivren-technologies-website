// Industry workflows extracted from the AiVren Technologies Industry
// Workflows reference PDF. Every workflow line below is verbatim from the
// source (leading hyphens stripped, dash-joined fragments separated). No
// items are paraphrased, invented or merged. Industries and departments
// follow the same order as the source document.

export const industries = [
  {
    id: "machine-shops",
    name: "Machine Shops",
    short:
      "Connect production, machines, quality, purchase, inventory and customer follow-ups through one customised AI layer.",
    description:
      "Connect production, machines, quality, purchase, inventory and customer follow-ups through one customised AI layer.",
    departments: [
      {
        id: "production-planning-monitoring",
        name: "Production Planning & Monitoring",
        workflows: [
          "Shift-wise production count recording",
          "Machine-wise target versus actual tracking",
          "Part-wise and operation-wise production status",
          "Daily, weekly and monthly production reports",
          "Capacity planning using available machine hours",
          "Machine loading versus available capacity",
          "Machine and operator utilisation tracking",
          "Backlog identification and carry-forward planning",
          "Production delay alerts and escalation",
          "Live job status on phone or dashboard",
        ],
      },
      {
        id: "maintenance",
        name: "Maintenance",
        workflows: [
          "Preventive maintenance schedules",
          "Machine-hour-based maintenance triggers",
          "Upcoming maintenance reminders",
          "Breakdown complaint logging",
          "Maintenance task assignment and closure tracking",
          "Spare-parts consumption recording",
          "Pending maintenance activity dashboard",
          "Escalation of overdue tasks",
          "Maintenance history for every machine",
        ],
      },
      {
        id: "purchase-supplier-management",
        name: "Purchase & Supplier Management",
        workflows: [
          "Automatic RFQ generation at reorder level",
          "RFQs to approved suppliers with multiple parts grouped in one email",
          "Supplier quotation capture and comparison",
          "Digital approval workflow",
          "Purchase-order generation after approval",
          "Supplier delivery follow-up emails",
          "Pending quotation and PO tracking",
          "GRN recording after receipt",
          "PO, receipt and invoice reconciliation",
          "Supplier performance and rate history",
        ],
      },
      {
        id: "machine-performance-downtime",
        name: "Machine Performance & Downtime",
        workflows: [
          "OEE calculation using availability, performance and quality",
          "Machine running, idle and breakdown status",
          "Downtime start/end recording with reason classification",
          "Automatic alerts when downtime exceeds the allowed duration",
          "Daily and weekly downtime summaries",
          "Repeated breakdown analysis",
          "Machine utilisation comparison",
          "MTBF and MTTR tracking",
        ],
      },
      {
        id: "quality",
        name: "Quality",
        workflows: [
          "In-process and first-piece inspection checklists",
          "Rejection quantity, defect type and probable cause capture",
          "Machine-wise and operator-wise rejection analysis",
          "Digital NCR generation and corrective-action follow-up",
          "Customer complaint logging",
          "Part, batch, machine and operator traceability",
          "Inspection reports generated from approved recorded data",
        ],
      },
      {
        id: "inventory-stores",
        name: "Inventory & Stores",
        workflows: [
          "Real-time stock quantity for every material and item",
          "Minimum-stock and reorder-level alerts",
          "Material inward and outward recording",
          "Material issued against job, part or machine",
          "Cutting-tool and spare-parts consumption tracking",
          "Scrap and offcut recording",
          "Slow-moving stock identification",
          "Monthly material-consumption reports",
          "Approved stock transactions updated in ERP or agreed system",
        ],
      },
      {
        id: "sales-dispatch-payments",
        name: "Sales, Dispatch & Payments",
        workflows: [
          "Customer enquiry and quotation status tracking",
          "Automatic quotation follow-ups",
          "Order-confirmation tracking",
          "Customer-wise job-status reporting",
          "Dispatch planning and delivery alerts",
          "Pending dispatch dashboard",
          "Automatic customer updates",
          "Invoice and payment follow-up reminders",
          "Management view of open enquiries, orders and payments",
        ],
      },
    ],
  },

  {
    id: "foundries",
    name: "Foundries",
    short:
      "Build heat-to-casting traceability and automate production, quality, material, purchase and dispatch workflows.",
    description:
      "Build heat-to-casting traceability and automate production, quality, material, purchase and dispatch workflows.",
    departments: [
      {
        id: "melting-heat-management",
        name: "Melting & Heat Management",
        workflows: [
          "Heat-wise charge-composition recording",
          "Furnace-wise production tracking",
          "Pouring temperature, tap time and pouring time recording",
          "Heat number generation and tracking",
          "Heat-to-casting-batch traceability",
          "Furnace utilisation and energy-consumption recording",
          "Melt-loss calculation for each heat",
          "Raw-material consumption by heat",
        ],
      },
      {
        id: "production",
        name: "Production",
        workflows: [
          "Shift-wise casting-output recording",
          "Pattern-wise planning and capacity",
          "Moulding, pouring, shakeout and fettling status",
          "Stage-wise target versus actual",
          "Machine and equipment utilisation",
          "OEE tracking by production stage",
          "Downtime and delay recording",
          "Pending production dashboard",
          "Production trend reports",
        ],
      },
      {
        id: "quality-rejection-analysis",
        name: "Quality & Rejection Analysis",
        workflows: [
          "Casting rejection recording with defect type and location",
          "Pattern-wise and heat-wise rejection analysis",
          "Sand-test results including AFS, moisture and permeability",
          "Dimensional inspection records",
          "Laboratory result linkage",
          "Automatic NCR generation",
          "Corrective-action follow-up",
          "Customer complaint traced to heat and batch",
        ],
      },
      {
        id: "raw-material-stores",
        name: "Raw Material & Stores",
        workflows: [
          "Pig iron, scrap and ferro-alloy stock tracking",
          "Sand, binder and additive consumption",
          "Heat-wise material consumption",
          "Minimum-stock alerts",
          "Automatic supplier RFQs",
          "GRN recording and quality-certificate storage",
          "Lot-wise material traceability",
          "Monthly raw-material consumption reports",
        ],
      },
      {
        id: "dispatch-traceability",
        name: "Dispatch & Traceability",
        workflows: [
          "Heat number to casting to customer mapping",
          "Dispatch certificate generation from approved data",
          "Delivery-challan preparation",
          "Quality-document attachment",
          "Pending dispatch schedule",
          "Customer delivery updates",
          "Batch and heat traceability for complaint investigation",
        ],
      },
      {
        id: "purchase",
        name: "Purchase",
        workflows: [
          "Automatic purchase trigger for required material",
          "Supplier RFQ and quotation capture",
          "Vendor rate comparison",
          "Digital purchase approval",
          "PO generation",
          "Supplier delivery follow-ups",
          "Pending PO monitoring",
          "PO and GRN reconciliation",
          "Supplier-performance records",
        ],
      },
    ],
  },

  {
    id: "fabrication-welding",
    name: "Fabrication & Welding",
    short:
      "Track jobs stage by stage, maintain welding and inspection records, control material and automate supplier/customer communication.",
    description:
      "Track jobs stage by stage, maintain welding and inspection records, control material and automate supplier/customer communication.",
    departments: [
      {
        id: "job-production-tracking",
        name: "Job & Production Tracking",
        workflows: [
          "Job-card generation",
          "Project-wise and job-wise tracking",
          "Cutting, fit-up, welding, grinding, painting and assembly status",
          "Stage-wise completion recording",
          "Customer drawing and revision linkage",
          "Work allocation to operators and welders",
          "Machine, equipment and manpower utilisation",
          "Capacity planning using manpower and machine hours",
          "Job-delay alerts",
          "Customer delivery schedule dashboard",
        ],
      },
      {
        id: "welding-quality-inspection",
        name: "Welding & Quality Inspection",
        workflows: [
          "Welder ID linked to each activity",
          "Welding process and parameter recording",
          "Weld-inspection and fit-up checklists",
          "Dimensional inspection",
          "NDT-result recording",
          "Paint and surface-finish inspection",
          "Stage-wise sign-off",
          "Customer or third-party hold points",
          "Automatic NCR after failed inspection",
          "Corrective-action tracking",
          "Customer approval records",
        ],
      },
      {
        id: "material-inventory",
        name: "Material & Inventory",
        workflows: [
          "Plate, pipe, section and consumable stock tracking",
          "Material issued against each job",
          "Project or BOM-linked material requirement",
          "Reorder-level alerts",
          "Electrode and consumable usage",
          "Scrap and offcut tracking by job",
          "Material utilisation and wastage reports",
          "Material certificate and heat-number linkage",
          "Approved inventory updates to ERP",
        ],
      },
      {
        id: "purchase",
        name: "Purchase",
        workflows: [
          "Material shortage identification",
          "Automatic RFQ to suppliers",
          "RFQ email with specifications, quantity and drawings",
          "Supplier quotation capture and comparison",
          "Digital approval chain",
          "Purchase-order generation",
          "Supplier delivery follow-up",
          "Long-lead material tracking",
          "GRN and invoice matching",
        ],
      },
      {
        id: "sales-customer-communication",
        name: "Sales & Customer Communication",
        workflows: [
          "Customer enquiry recording",
          "Estimation and quotation status",
          "Automatic quotation follow-up",
          "Order-confirmation tracking",
          "Customer-wise job-status updates",
          "Inspection-call reminders",
          "Dispatch and delivery alerts",
          "Payment follow-up reminders",
          "Open-order and pending-payment dashboard",
        ],
      },
    ],
  },

  {
    id: "chemical-process",
    name: "Chemical & Process Industries",
    short:
      "Digitise batch records, quality approvals, SOP checks, lot-wise inventory and dispatch documentation while retaining human review.",
    description:
      "Digitise batch records, quality approvals, SOP checks, lot-wise inventory and dispatch documentation while retaining human review.",
    departments: [
      {
        id: "batch-production",
        name: "Batch Production",
        workflows: [
          "Digital batch manufacturing records",
          "Batch-number generation",
          "Recipe or formula reference",
          "Raw-material charging records",
          "Temperature, pressure, pH and time recording",
          "Operator and equipment identification",
          "Stage-wise batch status",
          "Batch yield and process-loss calculation",
          "Reactor and equipment utilisation",
          "Capacity planning",
          "Deviation recording",
          "Audit-ready batch-pack generation",
        ],
      },
      {
        id: "sop-safety-compliance",
        name: "SOP, Safety & Compliance Support",
        workflows: [
          "Pre-batch SOP verification",
          "Step-by-step operator checklist",
          "Safety-handling confirmation",
          "Digital sign-off for critical steps",
          "SOP version control",
          "Latest approved instruction for operators",
          "Critical-process audit trail",
          "Deviation and incident reporting",
          "Regulatory-document compilation support",
          "Pending compliance reminders",
        ],
      },
      {
        id: "dispatch-customer-management",
        name: "Dispatch & Customer Management",
        workflows: [
          "Batch-release confirmation before dispatch",
          "COA and approved documents prepared for dispatch",
          "MSDS attachment where applicable",
          "Order and dispatch schedule",
          "Customer delivery updates",
          "Complaint register",
          "Batch traceability for complaints",
          "Payment follow-up reminders",
          "Pending-order dashboard",
        ],
      },
      {
        id: "quality-laboratory",
        name: "Quality & Laboratory",
        workflows: [
          "Raw-material test results linked to material lot",
          "In-process and finished-product QC results",
          "Batch-release workflow",
          "Digital quality approval",
          "COA generation from approved test data",
          "Out-of-specification result recording",
          "Deviation and corrective-action tracking",
          "Customer complaint linked to batch",
          "Stability and shelf-life monitoring",
          "Laboratory pending-test dashboard",
        ],
      },
      {
        id: "inventory-raw-material",
        name: "Inventory & Raw Material",
        workflows: [
          "Lot-wise raw-material stock",
          "Batch-wise material consumption",
          "Expiry-date alerts",
          "Reorder-level alerts",
          "Automatic RFQ to approved vendors",
          "Material inward and GRN recording",
          "Supplier COA and document storage",
          "Material balance by batch",
          "Quarantine, approved and rejected stock status",
          "ERP inventory updates",
        ],
      },
    ],
  },

  {
    id: "engineering-services",
    name: "Engineering Services",
    short:
      "Connect projects, drawings, approvals, quality records, commercial follow-ups and reusable engineering knowledge.",
    description:
      "Connect projects, drawings, approvals, quality records, commercial follow-ups and reusable engineering knowledge.",
    departments: [
      {
        id: "project-milestone-tracking",
        name: "Project & Milestone Tracking",
        workflows: [
          "Project stage tracking from enquiry to delivery",
          "Design, review, approval, fabrication, testing and commissioning status",
          "Project-wise task assignment",
          "Engineer-wise workload",
          "Available versus committed man-hours",
          "Milestone tracking",
          "Pending-action dashboard",
          "Delay alerts and escalation",
          "Customer-wise project-status view",
          "Activity recording where required",
        ],
      },
      {
        id: "quality-project-compliance",
        name: "Quality & Project Compliance",
        workflows: [
          "Inspection and Test Plan tracking",
          "Stage-wise inspection checkpoints",
          "Customer hold-point notifications",
          "Witness-point sign-off",
          "NCR and corrective-action tracking",
          "Material-test-certificate records",
          "Final inspection checklist",
          "Testing and commissioning records",
          "Final documentation and dispatch checklist",
        ],
      },
      {
        id: "engineering-knowledge-base",
        name: "Engineering Knowledge Base",
        workflows: [
          "Past-project solutions stored and searchable",
          "Approved design templates",
          "Standard calculations and checklists",
          "Lessons learned",
          "Technical document search",
          "Vendor and subcontractor performance history",
          "AI assistant trained on approved company documents",
        ],
      },
      {
        id: "drawing-document-control",
        name: "Drawing & Document Control",
        workflows: [
          "Drawing register and revision history",
          "Latest approved revision availability",
          "Customer drawing-approval workflow",
          "Internal review and approval",
          "Change-request logging",
          "Document transmittal recording",
          "Automatic document dispatch",
          "Pending-approval reminders",
          "Obsolete-document control",
        ],
      },
      {
        id: "sales-commercial-follow-up",
        name: "Sales & Commercial Follow-up",
        workflows: [
          "Enquiry and proposal logging",
          "Automatic quotation follow-up",
          "Technical clarification tracking",
          "Order-confirmation tracking",
          "Advance-payment and milestone tracking",
          "Delivery and commissioning reminders",
          "Payment-milestone follow-up",
          "Customer communication history",
        ],
      },
    ],
  },

  {
    id: "accounting-professional-services",
    name: "Accounting & Professional Services",
    short:
      "Organise deadlines, documents, staff work and client communication while keeping authorised professional review in control.",
    description:
      "Organise deadlines, documents, staff work and client communication while keeping authorised professional review in control.",
    departments: [
      {
        id: "compliance-deadline-management",
        name: "Compliance & Deadline Management",
        workflows: [
          "Client-wise GST, TDS, ITR and ROC due-date tracking",
          "Monthly compliance calendar",
          "Automatic reminders before deadlines",
          "Pending, filed and acknowledged status",
          "Missed-deadline alerts",
          "Partner and manager dashboard",
          "Client-wise open-compliance list",
          "Staff-wise pending activity",
        ],
      },
      {
        id: "document-collection",
        name: "Document Collection",
        workflows: [
          "Client-wise document checklist",
          "Automatic reminders for pending documents",
          "Document-receipt confirmation",
          "Consolidated pending-document dashboard",
          "Escalation when documents are not received",
          "Client-wise document status",
          "Missing-information identification",
          "Staff notification after receipt",
        ],
      },
      {
        id: "work-allocation-tracking",
        name: "Work Allocation & Tracking",
        workflows: [
          "Staff-wise activity assignment",
          "Due-date and priority tracking",
          "Work-status updates with timestamps",
          "Overdue-task alerts",
          "Partner view of all client work",
          "Staff workload and utilisation",
          "Review and approval stages",
          "Task completion and issue reporting",
          "Daily and weekly pending-work summary",
        ],
      },
      {
        id: "client-communication",
        name: "Client Communication",
        workflows: [
          "Automatic acknowledgement of client messages",
          "AI assistant for approved status-related queries",
          "Filing-status communication",
          "Client onboarding checklist",
          "Fee-proposal follow-up",
          "Invoice and payment reminders",
          "Appointment and submission reminders",
          "Communication-history tracking",
        ],
      },
    ],
  },

  {
    id: "industrial-equipment-manufacturers",
    name: "Industrial Equipment Manufacturers",
    short:
      "Automate work orders, BOM-linked procurement, project inventory, testing, serial traceability and after-sales support.",
    description:
      "Automate work orders, BOM-linked procurement, project inventory, testing, serial traceability and after-sales support.",
    departments: [
      {
        id: "production-work-orders",
        name: "Production & Work Orders",
        workflows: [
          "Work-order creation",
          "BOM-linked project planning",
          "Fabrication, machining, assembly, testing and dispatch status",
          "Sub-assembly and final-assembly tracking",
          "Machine and manpower utilisation",
          "Available versus loaded capacity",
          "Delay and bottleneck alerts",
          "Delivery schedule versus actual progress",
          "Project and customer-wise dashboard",
        ],
      },
      {
        id: "purchase-procurement",
        name: "Purchase & Procurement",
        workflows: [
          "BOM-linked material requirement planning",
          "Shortage identification",
          "Automatic RFQ with specifications and drawings",
          "Supplier quotation capture",
          "Digital PO approval",
          "Purchase-order generation",
          "Long-lead-item alerts",
          "Supplier delivery follow-up",
          "Pending PO dashboard",
          "Vendor performance and rate history",
        ],
      },
      {
        id: "inventory-subcontracting",
        name: "Inventory & Subcontracting",
        workflows: [
          "Component and bought-out-item stock",
          "Reorder-level alerts",
          "Material issued against work order",
          "Project-wise stock reconciliation",
          "Material sent to subcontractor",
          "Subcontractor material balance",
          "Pending subcontract activity",
          "Slow-moving and excess-stock report",
          "Spare-parts inventory",
          "ERP stock updates",
        ],
      },
      {
        id: "quality-testing",
        name: "Quality & Testing",
        workflows: [
          "Incoming and stage-wise inspection",
          "Assembly inspection",
          "FAT and SAT test records",
          "Customer witness-point tracking",
          "NCR and corrective-action tracking",
          "Equipment test-certificate generation",
          "Serial-number-based traceability",
          "Final documentation checklist",
          "Dispatch-release approval",
        ],
      },
      {
        id: "sales-after-sales",
        name: "Sales & After-Sales",
        workflows: [
          "Enquiry and quotation tracking",
          "Automatic quotation follow-ups",
          "Order and advance-payment tracking",
          "Delivery and commissioning schedules",
          "Warranty-start and expiry records",
          "AMC renewal reminders",
          "Service-visit scheduling",
          "Service complaint and resolution tracking",
          "Spare-parts requirement tracking",
          "Payment-milestone follow-up",
        ],
      },
    ],
  },

  {
    id: "quality-consulting-firms",
    name: "Quality Consulting Firms",
    short:
      "Manage audits, controlled documents, client projects, CAPA closures and management reporting from one connected system.",
    description:
      "Manage audits, controlled documents, client projects, CAPA closures and management reporting from one connected system.",
    departments: [
      {
        id: "audit-compliance-management",
        name: "Audit & Compliance Management",
        workflows: [
          "Client-wise audit schedule",
          "Audit due-date reminders",
          "Digital audit checklist",
          "Real-time finding recording",
          "Non-conformance register",
          "Closure deadline tracking",
          "CAPA assignment and dashboard",
          "Overdue-action escalation",
          "Audit report draft from approved findings",
          "Certification and surveillance calendar",
        ],
      },
      {
        id: "client-project-tracking",
        name: "Client & Project Tracking",
        workflows: [
          "Consultant-wise client assignment",
          "Project milestone tracking",
          "Pending-client-action reminders",
          "Client document follow-up",
          "Partner dashboard across clients",
          "Billing-milestone reminders",
          "Invoice follow-up",
          "Project delay alerts",
          "Client communication history",
        ],
      },
      {
        id: "document-management",
        name: "Document Management",
        workflows: [
          "Client-wise SOP and procedure records",
          "Document version control",
          "Review and reappraisal reminders",
          "Controlled-document distribution",
          "Obsolete-document archiving",
          "Document-change-request workflow",
          "Approval-status tracking",
          "Master-document register",
          "Latest approved document availability",
        ],
      },
      {
        id: "reporting-analysis",
        name: "Reporting & Analysis",
        workflows: [
          "Client quality-performance reports",
          "Rejection and defect trend analysis",
          "CAPA effectiveness tracking",
          "Audit-status summaries",
          "Management-review presentation draft",
          "Open-NCR and overdue-action reports",
          "Consultant-wise project status",
          "Certification-calendar reports",
        ],
      },
    ],
  },
];

/**
 * Two global framing lines from the source PDF. Rendered once at the top of
 * the Industries section — not repeated per industry.
 */
export const industriesIntro = {
  pick:
    "Select an industry to explore department-wise workflows. These examples show possibilities; the final system is customised to your actual process and existing tools.",
  disclaimer:
    "These examples are not fixed software packages. The final AI agent is customised around the company's actual process, approval hierarchy, existing systems and operational requirements.",
};

/* Derived helpers used by the UI layer (Step 8) */

export const industryCount = industries.length;

export function getIndustryById(id) {
  return industries.find((ind) => ind.id === id) ?? industries[0];
}

export function getDepartmentCount(industry) {
  return industry?.departments?.length ?? 0;
}

export function getWorkflowCount(industry) {
  return (industry?.departments ?? []).reduce(
    (sum, dept) => sum + (dept.workflows?.length ?? 0),
    0
  );
}
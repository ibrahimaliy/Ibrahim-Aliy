import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "fila-yoruba",
    title: "Fila Yoruba E-Commerce Platform",
    shortTitle: "Fila Yoruba",
    kind: "personal",
    level: "flagship",
    role: "Frontend Developer / Product Builder",
    summary:
      "A full-featured e-commerce platform for a premium Yoruba Fila brand, combining a responsive customer-facing storefront with integrated admin and back-office store operations.",
    description:
      "Fila Yoruba is an independent flagship e-commerce application designed to bridge authentic Yoruba artisanal fashion with contemporary digital commerce. The platform evolved from a clean customer catalog into a dual-sided commerce system comprising a high-converting storefront and a comprehensive back-office operations suite.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack React Query",
      "React Hook Form",
      "Zod",
    ],
    contributions: [
      "Designed and implemented responsive product discovery, collection browsing, wishlist, cart drawer, and multi-step checkout experiences.",
      "Engineered back-office administrative modules for product catalog updates, inventory level tracking, customer records, and order fulfillment status.",
      "Architected clean separation of client UI state (Zustand) and asynchronous server state (TanStack React Query).",
      "Implemented strict input validation and type safety using Zod and React Hook Form across all customer and administrative touchpoints.",
    ],
    customerExperience: [
      {
        title: "Curated Collections & Product Browsing",
        description:
          "High-contrast editorial layouts showcasing traditional Yoruba fila styles (Gobi, Abeti Aja, Kente, Damask) with high-res galleries and fabric details.",
      },
      {
        title: "Instant Search & Faceted Filtering",
        description:
          "Fast, client-side filtering by style, traditional fabric, cap size, color palette, and real-time in-stock availability.",
      },
      {
        title: "Product Detail & Accurate Sizing",
        description:
          "Dedicated product pages featuring comprehensive head measurement guides, size selection, stock urgency counters, and styling recommendations.",
      },
      {
        title: "Slide-Over Cart & Wishlist",
        description:
          "Persistent client-side cart drawer with item quantity controls, instant subtotal calculation, free-shipping progress indicators, and wishlist save.",
      },
      {
        title: "Multi-Step Checkout & Payment Flow",
        description:
          "Frictionless checkout experience with address autocomplete, order summary breakdown, delivery method selection, and secure payment state handling.",
      },
      {
        title: "Responsive Navigation & Mobile First",
        description:
          "Fully optimized mobile browsing experience with thumb-friendly touch targets, sticky quick-action bars, and seamless sheet menus.",
      },
    ],
    adminExperience: [
      {
        title: "Product & Catalog Management",
        description:
          "Complete administrative interface for creating, editing, categorizing, and publishing fila items with image management and pricing.",
      },
      {
        title: "Inventory & Stock Tracking",
        description:
          "Granular SKU-level stock counters, low-stock visual alerts, and manual replenishment adjustments to eliminate overselling.",
      },
      {
        title: "Order Lifecycle & Fulfillment",
        description:
          "Real-time order tracking dashboard supporting status transitions (Pending, Paid, Processing, Shipped, Delivered) and tracking details.",
      },
      {
        title: "Customer Directory & Order History",
        description:
          "Unified customer profiles linking contact information, order histories, total spend metrics, and shipping addresses.",
      },
      {
        title: "Sales Operations & Store Metrics",
        description:
          "Daily operational summaries displaying active order counts, top-performing fila styles, revenue trends, and fulfillment queues.",
      },
      {
        title: "Administrative Workflow Controls",
        description:
          "Role-ready administrative controls for promotional discount codes, manual status overrides, and operational notes.",
      },
    ],
    systemDesign: [
      {
        title: "Inventory Integrity",
        subtitle: "Reservations vs Physical Stock",
        description:
          "Checkout reservations prevent stock overselling without prematurely mutating physical inventory before payment authorization.",
      },
      {
        title: "Payment Truth",
        subtitle: "Immutable Ledger Flow",
        description:
          "Payment records maintain immutable ledger state regardless of subsequent inventory adjustments, fulfillment changes, or order updates.",
      },
      {
        title: "Refund Separation",
        subtitle: "Accounting Accuracy",
        description:
          "Refund processes are modeled as independent financial transactions rather than simple order state cancellations to preserve audit integrity.",
      },
      {
        title: "Order Lifecycle",
        subtitle: "Finite State Machine",
        description:
          "Strict linear state transitions (Pending → Confirmed → Processing → Shipped → Delivered) avoid illegal status mutations.",
      },
      {
        title: "Concurrency Guardrails",
        subtitle: "Race Condition Defense",
        description:
          "Optimistic UI updates coupled with server-side validation protect against race conditions when multiple shoppers buy limited-run items.",
      },
      {
        title: "Customer Resolution",
        subtitle: "Guest to Auth Continuity",
        description:
          "Seamless continuity between guest shopping cart sessions and authenticated user profiles upon checkout or account registration.",
      },
    ],
    stages: [
      {
        number: "01",
        title: "Prototype & Storefront Foundation",
        description:
          "Explored the luxury Yoruba cultural aesthetic, established visual identity, typography, and built the core catalog browsing experience.",
      },
      {
        number: "02",
        title: "Product Systems & Cart Engine",
        description:
          "Built persistent cart state, wishlist storage, checkout workflows, and foundational back-office order and product data models.",
      },
      {
        number: "03",
        title: "Commerce Architecture & State Synchronization",
        description:
          "Implemented Zustand for client state, TanStack Query for server caching, and hardened stock reservation and payment state flows.",
      },
      {
        number: "04",
        title: "Production Readiness & Operations Suite",
        description:
          "Delivered full administrative back-office, comprehensive form validation, responsive polish, and performance optimizations.",
      },
    ],
    learnings: [
      "Designing e-commerce systems requires treating operational back-office tooling with the same UX rigor as customer storefronts.",
      "Clean separation of client cache (TanStack Query) and local interaction state (Zustand) prevents state synchronization drift.",
      "Defensive stock reservation patterns protect business integrity during peak traffic.",
    ],
    live: "https://filayoruba-theta.vercel.app/",
    liveNote:
      "The customer storefront is live. The admin dashboard is live in production, but login credentials are intentionally restricted because the platform is being prepared for commercial sale. A live walkthrough/demo is readily available upon request to showcase the dashboard and its full operational capabilities.",
    github: "https://github.com/ibrahimaliy",
    accent: "green",
    featured: true,
  },
  {
    slug: "attendance-management-system",
    title: "Attendance Management System",
    shortTitle: "Attendance System",
    kind: "personal",
    level: "featured",
    role: "Frontend Developer",
    summary:
      "A role-based academic attendance platform with dedicated administrator, lecturer and student experiences across responsive interfaces.",
    description:
      "Attendance Management System is a focused personal project addressing the friction and inefficiency of paper-based academic roll calls. The application provides dedicated, role-specific portals for institutional administrators, course lecturers, and enrolled students, providing clear attendance visibility and actionable reporting.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Component State"],
    contributions: [
      "Designed and built distinct role-based portals for administrators, lecturers, and students.",
      "Implemented responsive data tables, attendance roll call toggles, and session summaries.",
      "Structured reusable component architecture around academic schedules, course lists, and student rosters.",
      "Managed client-side application state for dynamic session creation, attendance recording, and threshold calculations.",
    ],
    features: [
      {
        title: "Administrator Portal",
        description:
          "Institutional oversight dashboard for managing departments, registering courses, assigning faculty lecturers, and reviewing campus-wide attendance statistics.",
      },
      {
        title: "Lecturer Session Console",
        description:
          "Streamlined check-in interface enabling lecturers to launch class sessions, mark attendance statuses (Present, Absent, Excused), and export session summaries.",
      },
      {
        title: "Student Progress Dashboard",
        description:
          "Personalized view allowing students to track per-course attendance percentages, view historical records, and receive low-attendance warnings.",
      },
      {
        title: "Responsive & Role-Aware Navigation",
        description:
          "Adaptive layout adjusting menus and actions dynamically depending on the active user role, fully optimized for both desktop and mobile use.",
      },
    ],
    learnings: [
      "Structuring multi-role UI architectures cleanly without duplicating layout and navigation primitives.",
      "Designing high-density data tables that remain readable and touch-friendly on mobile viewports.",
    ],
    live: "https://attendance-management-system-five-kappa.vercel.app",
    liveNote:
      "Access the live role-based portals by changing the final URL route: /student, /lecturer, or /admin.",
    portalRoutes: [
      {
        label: "Student Portal",
        path: "/student",
        url: "https://attendance-management-system-five-kappa.vercel.app/student",
      },
      {
        label: "Lecturer Console",
        path: "/lecturer",
        url: "https://attendance-management-system-five-kappa.vercel.app/lecturer",
      },
      {
        label: "Admin Portal",
        path: "/admin",
        url: "https://attendance-management-system-five-kappa.vercel.app/admin",
      },
    ],
    github: "https://github.com/ibrahimaliy",
    accent: "blue",
    featured: true,
  },
  {
    slug: "music-player",
    title: "Music Player",
    shortTitle: "Music Player",
    kind: "personal",
    level: "compact",
    role: "Frontend Developer",
    summary:
      "A React music experience demonstrating API integration, audio playback controls, song search, and recently played client-side state.",
    description:
      "An interactive web audio application that integrates external audio streams, custom playback controls (play/pause, seek, volume, shuffle), track search, and persistent recently-played history.",
    tech: ["React.js", "JavaScript", "HTML5 Audio API", "Tailwind CSS"],
    contributions: [
      "Integrated HTML5 Audio API with custom React controls for smooth playback, seeking, and volume management.",
      "Built live track search and playlist filtering with responsive layout.",
      "Implemented client-side recently played tracking with local storage persistence.",
    ],
    highlights: [
      "Custom audio playback controller and scrub bar",
      "Instant track search and query filtering",
      "Recently played state history",
      "Responsive album art and track metadata presentation",
    ],
    live: "https://music-player-five-liart.vercel.app/",
    github: "https://github.com/ibrahimaliy",
    accent: "violet",
  },
  {
    slug: "memory-card-game",
    title: "Memory Card Game",
    shortTitle: "Memory Game",
    kind: "personal",
    level: "compact",
    role: "Frontend Developer",
    summary:
      "An interactive matching card game focused on component state machines, card flip logic, timer tracking, and responsive grid interactions.",
    description:
      "A frontend browser game engineered to test and showcase React state coordination, card matching logic, move counters, timer intervals, and victory end-state modals.",
    tech: ["React.js", "JavaScript", "CSS Grid", "Component State"],
    contributions: [
      "Engineered game loop and matching algorithm handling two-card flip evaluations and pair matching.",
      "Implemented timer interval management, move counter, and score tracking with zero memory leaks.",
      "Built clean CSS 3D card flip transitions with responsive grid layouts.",
    ],
    highlights: [
      "Deterministic shuffle and match evaluation logic",
      "Interactive flip animations with accessible keyboard support",
      "Live timer and move counter",
      "Win modal with replay state reset",
    ],
    live: "https://memory-card-psi-two.vercel.app/",
    github: "https://github.com/ibrahimaliy",
    accent: "orange",
  },
  {
    slug: "notepad-app",
    title: "Notepad Application",
    shortTitle: "Notepad App",
    kind: "personal",
    level: "compact",
    role: "Frontend Developer",
    summary:
      "A lightweight notes application with note creation, markdown-ready editing, search, local storage persistence, trash, and restoration.",
    description:
      "A distraction-free notes application built with React featuring instant local storage synchronization, note categorization, search filtering, and soft-delete trash with restore functionality.",
    tech: ["React.js", "JavaScript", "LocalStorage API", "Tailwind CSS"],
    contributions: [
      "Implemented complete note CRUD (Create, Read, Update, Delete) workflows with instant auto-save.",
      "Built real-time search querying titles and body content.",
      "Designed two-stage deletion with a soft-delete Trash folder and one-click restoration.",
    ],
    highlights: [
      "Instant auto-save to browser LocalStorage",
      "Full-text search across note collection",
      "Trash bin with restore and permanent purge options",
      "Clean editorial reading and writing UI",
    ],
    live: "https://react-app-drab-one-37.vercel.app/",
    github: "https://github.com/ibrahimaliy",
    accent: "cyan",
  },
  {
    slug: "weather-app",
    title: "Weather Application",
    shortTitle: "Weather App",
    kind: "personal",
    level: "compact",
    role: "Frontend Developer",
    summary:
      "A responsive weather application built around external weather and geocoding APIs featuring real-time conditions and a five-day forecast.",
    description:
      "A clean weather dashboard consuming REST weather and geocoding endpoints to deliver real-time atmospheric conditions, city search, temperature toggle, and five-day meteorological forecasts.",
    tech: ["JavaScript", "REST APIs", "Geocoding", "Responsive UI"],
    contributions: [
      "Integrated asynchronous REST endpoints for reverse geocoding and multi-day meteorological forecasts.",
      "Engineered location search with query debouncing and error state handling for invalid cities.",
      "Built responsive weather cards displaying humidity, wind velocity, and condition-specific iconography.",
    ],
    highlights: [
      "Live location geocoding and global city search",
      "Five-day forecast cards with temperature range indicators",
      "Dynamic weather condition visuals and metrics",
      "Resilient error handling and offline/loading indicators",
    ],
    live: "https://weather-app-two-ruddy-23.vercel.app/",
    github: "https://github.com/ibrahimaliy",
    accent: "blue",
  },
  {
    slug: "omnichannel-support-lebara",
    title: "Omnichannel Support — Lebara",
    shortTitle: "Lebara Omnichannel",
    kind: "professional",
    level: "standard",
    organization: "Outcess Solutions",
    role: "Frontend Contributor",
    contributionLabel: "Team Project",
    summary:
      "Collaborative frontend work on an omnichannel customer-support admin interface used for enterprise operational workflows.",
    description:
      "An enterprise customer support platform built within Outcess Solutions for Lebara customer care operations. The application unifies customer communications across channels into an agent administration interface.",
    tech: ["React", "Admin UI", "Responsive UI", "Team Collaboration"],
    contributions: [
      "Worked on admin-page UI improvements in collaboration with another frontend developer.",
      "Improved layout clarity, spacing, responsive behaviour, and interface consistency across desktop and tablet consoles.",
      "Assisted in refining administrative forms, filter toolbars, and tabular data presentations.",
      "Contributed changes within an existing organization codebase following Git branch workflows and team reviews.",
    ],
    features: [
      {
        title: "Admin Console UI Refinements",
        description:
          "Collaborated on modernizing the agent interface layout to improve visual clarity during high-volume customer care sessions.",
      },
      {
        title: "Responsive Tablet & Desktop Optimization",
        description:
          "Adjusted breakpoint layouts to ensure support staff could comfortably operate across varying monitor sizes and tablet screens.",
      },
      {
        title: "Component Consistency",
        description:
          "Maintained alignment with internal design patterns, updating shared buttons, inputs, and status badges.",
      },
    ],
    learnings: [
      "Working inside a production enterprise codebase with pre-existing architecture and team coding standards.",
      "Coordinating closely with another frontend developer through code reviews and pair debugging.",
    ],
    github:
      "https://github.com/Outcess-Solutions-Nigeria-Limited/omnichannel-support-lebara",
    accent: "cyan",
  },
  {
    slug: "attendly-pro-mobile",
    title: "Attendly Pro Mobile",
    shortTitle: "Attendly Pro",
    kind: "professional",
    level: "standard",
    organization: "Outcess Solutions",
    role: "Frontend Contributor",
    contributionLabel: "Team Project",
    summary:
      "Collaborative mobile product work focused on mobile signup functionality, frontend behaviour, validation, and testing.",
    description:
      "A mobile enterprise attendance application developed at Outcess Solutions. Contributed to the mobile user onboarding experience, focusing on signup flows, input validations, and device testing.",
    tech: ["Mobile UI", "Frontend", "Testing", "Team Collaboration"],
    contributions: [
      "Worked on mobile signup functionality in collaboration with another frontend developer.",
      "Implemented responsive mobile input forms, validation messages, and onboarding touch interactions.",
      "Tested signup behavior across multiple screen viewports to identify and fix visual regressions.",
      "Contributed code within an existing organizational repository under senior developer supervision.",
    ],
    features: [
      {
        title: "Mobile Signup Flow",
        description:
          "Contributed to building touch-friendly registration screens with client-side field validation and clear error states.",
      },
      {
        title: "Mobile Viewport Testing",
        description:
          "Tested and surfaced UX issues on varied mobile dimensions to guarantee accessible touch targets.",
      },
      {
        title: "Teammate Collaboration",
        description:
          "Coordinated component contracts and form state handling with co-developers.",
      },
    ],
    learnings: [
      "Mobile-first frontend design constraints including virtual keyboard view resizing and touch target ergonomics.",
      "Cross-testing mobile user flows to ensure consistent onboarding across devices.",
    ],
    github:
      "https://github.com/Outcess-Solutions-Nigeria-Limited/attendly_pro_mobile",
    accent: "violet",
  },
  {
    slug: "ats-v2",
    title: "ATS v2",
    shortTitle: "ATS v2",
    kind: "professional",
    level: "standard",
    organization: "Outcess Solutions",
    role: "Frontend Contributor",
    contributionLabel: "Team Project",
    summary:
      "Contributed to frontend development within the Outcess Solutions engineering team across applicant tracking workflows.",
    description:
      "ATS v2 is Outcess Solutions' applicant tracking and recruitment platform designed to streamline hiring workflows, candidate pipeline tracking, and candidate evaluations.",
    tech: ["Frontend Development", "Team Collaboration", "Web UI"],
    contributions: [
      "Contributed to frontend development within the Outcess Solutions engineering team.",
      "Worked within shared organization repositories, feature branches, and pull request workflows.",
      "Collaborated with engineering teammates during sprint cycles to support application delivery.",
    ],
    features: [
      {
        title: "Engineering Team Contribution",
        description:
          "Participated as an active contributor within the Outcess Solutions frontend engineering team.",
      },
      {
        title: "Shared Codebase Workflows",
        description:
          "Exercised standard team development practices including branch management, pull requests, and peer reviews.",
      },
    ],
    learnings: [
      "Operating within an agile organizational team structure with shared sprint goals and version control discipline.",
    ],
    github: "https://github.com/Outcess-Solutions-Nigeria-Limited/ATS-v2",
    accent: "orange",
  },
  {
    slug: "outcess-web",
    title: "Outcess Web — Nigeria & US",
    shortTitle: "Outcess Web",
    kind: "professional",
    level: "standard",
    organization: "Outcess Solutions",
    role: "Frontend Developer Intern",
    contributionLabel: "Organization Website",
    summary:
      "Production frontend work across Outcess web properties, including website frontend development, page rebuilding, UI improvements, responsive enhancements, and QA bug fixes.",
    description:
      "The primary public web presence for Outcess Solutions, serving business clients across Nigeria and the United States. Contributed substantial frontend development work including rebuilding corporate service pages, refining UI presentation, and resolving QA defects.",
    tech: ["React", "JavaScript", "CSS", "Responsive UI", "QA"],
    contributions: [
      "Contributed to website frontend development and page rebuilding across multiple corporate service sections.",
      "Implemented responsive improvements ensuring clean, legible layouts across mobile, tablet, and widescreen monitors.",
      "Resolved QA-reported UI issues and functional bugs to maintain production quality.",
      "Implemented requested design updates and content changes to match evolving corporate branding.",
      "Worked across numerous corporate service pages delivering production-ready updates to the live site.",
    ],
    features: [
      {
        title: "Page Rebuilding & Modernization",
        description:
          "Rebuilt legacy service pages into modern, accessible, and visually cohesive layouts matching current brand standards.",
      },
      {
        title: "Responsive Quality Assurance",
        description:
          "Eliminated layout breaking points, horizontal overflow, and text wrapping issues on mobile and tablet viewports.",
      },
      {
        title: "QA Bug Resolution",
        description:
          "Systematically investigated and resolved ticketed UI defects identified during QA audits.",
      },
      {
        title: "Corporate Service Presentation",
        description:
          "Implemented clear visual hierarchies and structured content cards across Outcess solution offerings.",
      },
    ],
    learnings: [
      "Translating corporate marketing and design requirements into clean, production-ready frontend code.",
      "Working systematically through QA defect cycles to verify fixes across multiple browser environments.",
    ],
    live: "https://outcess.com",
    github: "https://github.com/Outcess-Solutions-Nigeria-Limited/outcess-web",
    accent: "green",
  },
];

export const flagshipProject = projects.find((project) => project.level === "flagship") || projects[0];
export const featuredProjects = projects.filter(
  (project) => project.level === "flagship" || project.level === "featured"
);
export const personalProjects = projects.filter((project) => project.kind === "personal");
export const compactPersonalProjects = projects.filter(
  (project) => project.kind === "personal" && project.level === "compact"
);
export const professionalProjects = projects.filter((project) => project.kind === "professional");

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/* Professional experience — from Aniket Pandey's CV, positioned design-first per
   03_CONTENT_STRATEGY.md. Reverse chronological: newest first. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  /* panel color — intentional, one vibrant per role (Experience deck) */
  color: string;
  fg: "light" | "dark";
  /* Company mark. `variant` follows what the supplied file actually IS:
     · "tile"  — the logo ships with its own background baked in (square
                 avatars), so it is shown as a rounded tile, uncropped
     · "plate" — transparent artwork that needs a light ground to read;
                 the plate's width follows the logo's true aspect ratio
     · absent  — no official file supplied yet → typographic fallback */
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    /* Placement adapts to how dense the panel's copy is — a logo is not
       forced into the same slot for every company.
       "right" — sits beside the content (default, when there is room)
       "below" — closes the panel underneath the content (dense copy) */
    placement?: "right" | "below";
  };
  /* French copy for the translatable fields (see lib/i18n.tsx → L()) */
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "Jain Neuromax Hospital",
    role: "Accountant",
    type: "Full-time",
    location: "Khajanchi Chowk, Gorakhpur, Uttar Pradesh",
    period: "Sep 2026 – Present",
    summary:
      "Managing daily hospital accounting operations, patient billing records and financial reconciliation.",
    achievements: [
      "Maintain daily accounting records including receipts, payments and patient billing entries",
      "Prepare and reconcile cash, bank and vendor statements",
      "Assist with invoicing, expense tracking and monthly financial reporting",
    ],
    outcome: "Maintained accurate hospital financial records and timely reconciliations across daily operations.",
    skills: [
      "Accounting",
      "Patient Billing",
      "Cash Reconciliation",
      "Bank Reconciliation",
      "Vendor Management",
    ],
    color: "#0072E3",
    fg: "light",
    /* transparent two-tone blue lockup, 1199×330 — needs a light ground.
       Composition has room, so it stays on the right. */
    logo: {
      src: "/images/companies/heeding.png",
      variant: "plate",
      aspect: 1199 / 330,
      placement: "right",
    },
    fr: {
      role: "Comptable",
      summary:
        "Gestion quotidienne des opérations comptables de l’hôpital, des dossiers de facturation des patients et de la conciliation financière.",
      outcome: "Tenue rigoureuse des comptes de l’hôpital et rapprochements financiers en temps voulu.",
      achievements: [
        "Tenue des écritures comptables quotidiennes, y compris les reçus, les paiements et les entrées de facturation des patients",
        "Préparation et rapprochement des états de trésorerie, banque et fournisseurs",
        "Aide à la facturation, au suivi des dépenses et au reporting mensuel",
      ],
    },
  },
  {
    company: "Protect Earth Solar Energy",
    role: "Business Development Executive (BDE)",
    type: "Full-time",
    location: "Ambedkar Chowk, Civil Lines, Gorakhpur, Uttar Pradesh 273001",
    period: "Aug 2026 – Sep 2026",
    summary:
      "Generated and managed business opportunities for residential and commercial solar energy solutions.",
    achievements: [
      "Identified and generated new business leads for residential and commercial solar solutions",
      "Met prospective clients to explain solar products, benefits and pricing plans",
      "Followed up with leads and maintained client relationships to support conversion and repeat business",
      "Coordinated with the technical team for smooth handoff from sales to installation",
    ],
    outcome:
      "Built a steady solar sales pipeline and supported conversion-ready client journeys from first meeting to installation handoff.",
    skills: ["Sales", "Lead Generation", "Client Management", "Solar Solutions", "Business Development"],
    color: "#6D3BF5",
    fg: "light",
    /* transparent violet wordmark, 685×226 — needs a light ground.
       This panel's copy is dense, so the mark closes the panel underneath
       the content instead of competing with it on the right. */
    logo: {
      src: "/images/companies/unbias.png",
      variant: "plate",
      aspect: 685 / 226,
      placement: "below",
    },
    fr: {
      role: "Chargé(e) du développement commercial",
      summary:
        "Génération et gestion d’opportunités commerciales pour des solutions solaires résidentielles et commerciales.",
      outcome: "Mise en place d’un pipeline commercial solaire stable et accompagnement des prospects jusqu’au raccordement technique.",
      achievements: [
        "Identification et génération de nouveaux leads pour des solutions solaires résidentielles et commerciales",
        "Rencontres avec les clients potentiels pour expliquer les produits, avantages et plans tarifaires",
        "Suivi des leads et entretien des relations clients pour soutenir la conversion et la fidélisation",
        "Coordination avec l’équipe technique pour une transition fluide de la vente à l’installation",
      ],
    },
  },
  {
    company: "Sai Infotech Computer Institute",
    role: "Computer Teacher",
    type: "Full-time",
    location: "Vijay Chowk, Gorakhpur",
    period: "Jan 2026 – Apr 2026",
    summary:
      "Taught computer fundamentals, MS Office applications and basic programming concepts through practical, hands-on learning.",
    achievements: [
      "Taught computer fundamentals, MS Office applications and basic programming concepts",
      "Prepared lesson plans and practice exercises to reinforce classroom learning",
      "Guided students through hands-on lab sessions and resolved technical issues",
      "Evaluated student performance through tests and assignments and provided feedback",
    ],
    outcome: "Helped students build practical computer skills through structured lessons and hands-on lab instruction.",
    skills: ["Computer Fundamentals", "MS Office", "Basic Programming", "Lesson Planning", "Student Assessment"],
    color: "#FFFFFF",
    fg: "dark",
  },
  {
    company: "Paytm",
role: "HR Intern",
type: "Internship",
location: "Remote",
period: "Jan 2024 – Mar 2024",
summary:
  "Supported recruitment operations, candidate coordination and HR documentation in a fast-paced environment.",
    achievements: [
  "Supported sourcing, screening and interview scheduling throughout the recruitment process",
  "Maintained applicant-tracking spreadsheets and updated candidate databases",
 "Communicated with shortlisted candidates and supported HR documentation",
  "Assisted with onboarding-related tasks and gained hands-on HR operations experience",
],
   outcome: "Supported end-to-end recruitment coordination and day-to-day HR operations",
    skills: [
  "Recruitment",
  "Candidate Screening",
  "Interview Scheduling",
  "HR Operations",
  "Documentation",
],
    color: "#FF2E0F",
    fg: "light",
    /* blue ring mark on its own blue ground, 100×100 */
    logo: { src: "/images/companies/oigetit.jpg", variant: "tile", aspect: 1 },
    fr: {
      role: "Analyste IA « human-in-the-loop »",
      summary:
        "Amélioration de la précision d’un filtre anti-désinformation et traduction de son moteur de vérification en explications destinées aux utilisateurs — l’UX de la confiance.",
      outcome: "Précision de classification de l’IA améliorée",
      achievements: [
        "Reconnaissance de motifs, validation des données et identification des cas limites dans le pipeline IA",
        "Contribution aux initiatives d’IA responsable ; rédaction d’explications simplifiées",
      ],
    },
  },
  {
company: "WMB Solutions Pvt. Ltd.",
role: "Business Consultant",
type: "Full-time",
location: "India",
period: "Mar 2023 – Oct 2023",
summary:
  "Managed sales operations and client consultation across a portfolio of financial products.",
    achievements: [
  "Managed sales operations across 50+ financial products including loans, credit cards and savings accounts",
  "Provided tailored product consultation based on client needs and financial profiles",
  "Met daily sales targets through client engagement and product pitching",
  "Participated in structured sales training programs to improve communication and performance",
],
    outcome: "Built practical experience across financial-product sales, consultation and client engagement",
    skills: [
  "Business Consulting",
  "Sales",
  "Financial Products",
  "Client Engagement",
  "Communication",
],
    color: "#FF6A00",
    fg: "light",
    fr: {
      role: "SEO & marketing digital",
      summary:
        "Audit et optimisation d’expériences web sur un portefeuille de clients B2B/B2C — des décisions de design guidées par la mesure.",
      outcome: "+35 % de trafic organique sur le portefeuille",
      achievements: [
        "SEO technique et on-page ; refonte de l’architecture des métadonnées et du maillage interne des gabarits les plus consultés",
        "Tableaux de bord de performance et recommandations de croissance pour les clients",
      ],
    },
  },
];
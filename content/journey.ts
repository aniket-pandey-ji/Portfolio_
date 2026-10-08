/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * ⚠ SOURCING: every fact here traces to Aniket Pandey's CV (mirrored in
 * content/experience.ts) — companies, dates, places, roles and outcomes.
 * The 2021 chapter carries only what he stated himself: the year and
 * Telangana. Nothing biographical is invented around it.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about, in his voice
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line)
 *
 * `fr` mirrors every translatable field (see lib/i18n.tsx -> L()). Company,
 * product and place names stay as they are. French runs ~15% longer than
 * English, so the copy is written to length, not translated literally. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "roots",
    year: "2023",
    title: "The First Professional Step",
    place: "WMB Solutions Pvt. Ltd. · India",
    story:
  "My professional journey began at WMB Solutions Pvt. Ltd., where I worked as a Business Consultant across 50+ financial products. I learned client consultation, sales, communication and how real business decisions are made.",
   bridge:
  "Business taught me how to understand people, solve practical problems and communicate with clarity.",
    fr: {
      title: "Racines",
      place: "Telangana, Inde",
      story:
        "Là où l’histoire commence. Le sud de l’Inde — le point fixe auquel tout se mesure ensuite : sept postes, deux pays, et un changement de métier assumé.",
      bridge: "Cela a commencé par un objectif de vente, pas par un brief de design.",
    },
  },
  {
    id: "customers",
    year: "2024",
    title: "Learning People & Process",
    place: "Paytm · Remote",
    story:
       "At Paytm, I worked as an HR Intern supporting sourcing, candidate screening, interview scheduling, applicant tracking and onboarding coordination. It taught me how structured processes and clear communication keep fast-moving teams working.",
    bridge:
       "Working with people and processes made me more curious about the systems behind the work.",
    fr: {
      title: "Les clients d’abord, les pixels bien plus tard",
      place: "Tutorac → Sage Finance · Telangana",
      story:
        "Développement commercial pour une plateforme d’e-learning par abonnement : comprendre pourquoi on renouvelle, pourquoi on part, ce qui fait vraiment bouger un portefeuille. Plus de 50 000 $ d’abonnements en un mois. En septembre, je rejoignais Sage Finance.",
      bridge:
        "Deux ans à interroger des clients avant d’ouvrir le moindre outil de design — c’est resté la partie de mon processus en laquelle j’ai le plus confiance.",
    },
  },
  {
    id: "playbook",
    year: "2025",
    title: "Building the Technical Foundation",
    place: "DDU Gorakhpur University · Gorakhpur, India",  
   story:
  "While pursuing my BCA, I started shifting my focus seriously toward technology. I began learning programming, DSA, databases and development tools while turning what I learned into practical projects.",
    bridge:
  "Learning technology changed the question from how systems work to how I could build them myself.",
    fr: {
      title: "Écrire le playbook",
      place: "Sage Finance · Telangana, Inde",
      story:
        "Une année entière à piloter la stratégie commerciale et l’acquisition client : analyse de marché, segmentation, pipeline face aux KPI suivis. J’ai écrit le playbook inbound-to-close adopté par toute l’équipe, et une semaine à plus de 20 000 $ est devenue une promotion au marketing.",
      bridge:
        "Ce playbook a été la première fois que je concevais un système au lieu de travailler dedans. Restait à apprendre à le faire vraiment.",
    },
  },
  {
    id: "france",
    year: "2026",
    title: "Teaching What I Learn",
    place: "Sai Infotech Computer Institute · Vijay Chowk, Gorakhpur",
    story:
      "As a Computer Teacher, I taught computer fundamentals, MS Office and basic programming to students with different skill levels. Teaching strengthened my own understanding by forcing me to explain technical concepts clearly and solve problems in real time.",
    bridge:
      "Teaching gave me a deeper understanding of technology by making me explain it clearly and help others learn it with confidence.",
    fr: {
      title: "Tout recommencer, en français",
      place: "Montpellier Business School · France",
      story:
        "Août a refermé le chapitre indien. Septembre a ouvert un MSc International Business à Montpellier Business School — nouveau pays, nouvelle langue, et la formation qui manquait à des intuitions déjà en marche.",
      bridge: "L’école m’a donné le vocabulaire. L’année suivante m’a donné le métier.",
    },
  },
  {
    id: "three-rooms",
    year: "2026",
title: "Learning Business from the Ground",
place: "Protect Earth Solar Energy · Civil Lines, Gorakhpur",
    story:
  "As a Business Development Executive, I worked on lead generation for residential and commercial solar solutions, met prospective clients, followed up on opportunities and coordinated with the technical team through the sales-to-installation handoff.",
   bridge:
  "Every customer conversation sharpened my ability to understand requirements, communicate value and move an idea toward execution.",
    fr: {
      title: "Trois terrains, une seule question",
      place: "Montpellier · Los Gatos (à distance) · Paris",
      story:
        "Trois postes en un an. SEO et CRO chez Site Web & Co — +35 % de trafic organique, gagnés en corrigeant les gabarits plutôt que les pages. IA « human-in-the-loop » chez Oigetit — apprendre à un moteur anti-désinformation à s’expliquer. Analyse de processus chez V Raise à Paris — +12 % d’efficacité sur les flux logistiques.",
      bridge:
        "Mesure, confiance, systèmes : trois terrains différents, une même question — comment rendre le complexe évident ? Cette question a un intitulé de poste.",
    },
  },
  {
    id: "systems",
    year: "2026",
    title: "Building Systems in the Real World",
    place: "Jain Neuromax Hospital · Khajanchi Chowk, Gorakhpur",
    story:
      "March: first place at the UNBIAS hackathon with LockAI, a privacy-first offline AI assistant — strategy, UX and three working prototypes in one sprint. May: Full Stack Developer at Heeding, designing the UX of a sustainable-fuel marketplace aimed at a billion tonnes of avoided CO₂.",
    bridge:
      "Selling taught me customers. Analysis taught me systems. Design is where the two finally do the same job.",
    fr: {
      title: "Le métier vers lequel tout allait",
      place: "Sophia Antipolis, France",
      story:
        "Mars : première place au hackathon UNBIAS avec LockAI, un assistant IA hors-ligne axé confidentialité — stratégie, UX et trois prototypes fonctionnels en un sprint. Mai : Full Stack Developer chez Heeding, l’UX d’une marketplace de carburants durables visant un milliard de tonnes de CO₂ évitées.",
      bridge:
        "La vente m’a appris les clients. L’analyse m’a appris les systèmes. Le design est l’endroit où les deux font enfin le même travail.",
    },
  },
];

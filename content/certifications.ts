/* Credentials — professional certification records.
 *
 * ⚠ SOURCING NOTE — read before editing.
 * Everything here comes from Aniket Pandey's CV. His LinkedIn certifications page
 * is login-walled and could not be read, so ISSUERS, YEARS and CREDENTIAL IDs
 * were NOT available for most entries. Those fields are deliberately left
 * null and render as "to confirm" rather than being guessed: printing
 * "Microsoft Certified" or an invented credential ID on a job-seeker's
 * portfolio is a false credential claim, not a design detail.
 *
 * To complete a panel, fill in: issuer, year, credentialId, credentialUrl.
 * `verified` should only become true when a credential URL exists.
 *
 * `fr` carries French copy for the human-readable fields. Issuers stay as
 * issued, and a programme title that is itself a product name (Power BI,
 * Power Virtual Agents) is not translated. */

export type Cert = {
  no: string; /* deck-style section number */
  /* the awarding organisation, exactly as it issued the credential */
  issuer: string | null;
  /* official issuer mark, supplied by Aniket Pandey. Always rendered on a light
     plate so brand colours stay true on dark and light panels alike.
     `aspect` is the file's real ratio — the mark is never distorted. */
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
 {
  no: "2.1",
  issuer: "Forage",
  title: "Walmart USA - Advanced Software Engineering Job Simulation",
  year: "2026",
  credentialId: "4GYccow2AhDcsniNv",
  credentialUrl:
    "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_gkCoqAocTqFgdNHLx_1777353588367_completion_certificate.pdf",
  verified: true,
  skills: [
    "Software Engineering",
    "Technical Problem Solving",
    "Development Workflow",
  ],
  metric: {
    value: "Apr 2026",
    label: "Issued",
  },
},
 {
  no: "2.2",
  issuer: "Forage",
  title: "Deloitte Australia - Cyber Job Simulation",
  year: "2026",
  credentialId: "yTggQRJv9p8qq3eTE",
  credentialUrl:
    "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_gkCoqAocTqFgdNHLx_1777404823599_completion_certificate.pdf",
  verified: true,
  skills: [
    "Cybersecurity",
    "Security Analysis",
    "Technical Problem Solving",
  ],
  metric: {
    value: "Apr 2026",
    label: "Issued",
  },
},
];
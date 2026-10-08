/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Aniket Pandey",
  jobTitle: "Full Stack Developer & AI Builder",
  email: "aniketpandeyvimla@gmail.com",
  location: "Gorakhpur, India",
  /* exact profile URLs as supplied — also consumed by JSON-LD */
  sameAs: [
    "https://www.linkedin.com/in/aniket-pandey-74b800297",
    "https://github.com/aniket-pandey-ji",
    "https://www.instagram.com/its_anik.dev",
    "https://wa.me/919648921187",
  ],
};

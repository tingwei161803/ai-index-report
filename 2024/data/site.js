/* =========================================================================
   AI Index Report 2024 · site.js — per-year configuration

   Loaded BEFORE assets/app.js on every page of this year. The shared engine
   is year-agnostic; everything specific to the 2024 edition lives here.

   The 2024 report has NINE chapters. Two of them exist in no other edition
   on this site: Diversity is its own chapter here (it disappears again from
   2025 onward), and Science and Medicine is still a single chapter, as in
   2025 — the 2026 edition is the one that splits them apart.
   ========================================================================= */

window.SITE_YEAR = "2024";
window.SITE_REPO = "tingwei161803/ai-index-report";

window.SITE_CHAPTERS = [
  { slug: "research",         file: "research.html",         num: 1, en: "Research & Development", zh: "研發" },
  { slug: "performance",      file: "performance.html",      num: 2, en: "Technical Performance",  zh: "技術表現" },
  { slug: "responsible-ai",   file: "responsible-ai.html",   num: 3, en: "Responsible AI",         zh: "負責任 AI" },
  { slug: "economy",          file: "economy.html",          num: 4, en: "Economy",                zh: "經濟" },
  { slug: "science-medicine", file: "science-medicine.html", num: 5, en: "Science & Medicine",     zh: "科學與醫療" },
  { slug: "education",        file: "education.html",        num: 6, en: "Education",              zh: "教育" },
  { slug: "policy",           file: "policy.html",           num: 7, en: "Policy & Governance",    zh: "政策與治理" },
  { slug: "diversity",        file: "diversity.html",        num: 8, en: "Diversity",              zh: "多元性" },
  { slug: "public-opinion",   file: "public-opinion.html",   num: 9, en: "Public Opinion",         zh: "民意" }
];

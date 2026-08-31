/* =========================================================================
   AI Index Report 2026 · site.js — per-year configuration

   Loaded BEFORE assets/app.js on every page of this year. The shared engine
   is year-agnostic; everything specific to the 2026 edition lives here.

   The 2026 report has NINE chapters — Science and Medicine are split into
   two separate chapters, unlike the 2025 edition.
   ========================================================================= */

window.SITE_YEAR = "2026";
window.SITE_REPO = "tingwei161803/ai-index-report";

window.SITE_CHAPTERS = [
  { slug: "research",       file: "research.html",       num: 1, en: "Research & Development", zh: "研發" },
  { slug: "performance",    file: "performance.html",    num: 2, en: "Technical Performance",  zh: "技術表現" },
  { slug: "responsible-ai", file: "responsible-ai.html", num: 3, en: "Responsible AI",         zh: "負責任 AI" },
  { slug: "economy",        file: "economy.html",        num: 4, en: "Economy",                zh: "經濟" },
  { slug: "science",        file: "science.html",        num: 5, en: "Science",                zh: "科學" },
  { slug: "medicine",       file: "medicine.html",       num: 6, en: "Medicine",               zh: "醫療" },
  { slug: "education",      file: "education.html",      num: 7, en: "Education",              zh: "教育" },
  { slug: "policy",         file: "policy.html",         num: 8, en: "Policy & Governance",    zh: "政策與治理" },
  { slug: "public-opinion", file: "public-opinion.html", num: 9, en: "Public Opinion",         zh: "民意" }
];

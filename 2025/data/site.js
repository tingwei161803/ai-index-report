/* =========================================================================
   AI Index Report 2025 · site.js — per-year configuration

   Loaded BEFORE assets/app.js on every page of this year. The shared engine
   is year-agnostic; everything specific to the 2025 edition lives here, so
   adding a future year means adding a folder + this one file, never editing
   the engine.

   The 2025 report has EIGHT chapters — note that Science and Medicine is a
   single chapter here, whereas the 2026 edition splits them into two.
   ========================================================================= */

window.SITE_YEAR = "2025";
window.SITE_REPO = "tingwei161803/ai-index-report";

window.SITE_CHAPTERS = [
  { slug: "research",         file: "research.html",         num: 1, en: "Research & Development", zh: "研發" },
  { slug: "performance",      file: "performance.html",      num: 2, en: "Technical Performance",  zh: "技術表現" },
  { slug: "responsible-ai",   file: "responsible-ai.html",   num: 3, en: "Responsible AI",         zh: "負責任 AI" },
  { slug: "economy",          file: "economy.html",          num: 4, en: "Economy",                zh: "經濟" },
  { slug: "science-medicine", file: "science-medicine.html", num: 5, en: "Science & Medicine",     zh: "科學與醫療" },
  { slug: "policy",           file: "policy.html",           num: 6, en: "Policy & Governance",    zh: "政策與治理" },
  { slug: "education",        file: "education.html",        num: 7, en: "Education",              zh: "教育" },
  { slug: "public-opinion",   file: "public-opinion.html",   num: 8, en: "Public Opinion",         zh: "民意" }
];

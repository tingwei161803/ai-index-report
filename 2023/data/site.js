/* =========================================================================
   AI Index Report 2023 · site.js — per-year configuration

   Loaded BEFORE assets/app.js on every page of this year. The shared engine
   is year-agnostic; everything specific to the 2023 edition lives here.

   The 2023 report has EIGHT chapters. Chapter 3 is called Technical AI
   Ethics here — the 2024 edition renames it Responsible AI, which is why
   its slug differs from the later years' "responsible-ai".
   ========================================================================= */

window.SITE_YEAR = "2023";
window.SITE_REPO = "tingwei161803/ai-index-report";

window.SITE_CHAPTERS = [
  { slug: "research",       file: "research.html",       num: 1, en: "Research & Development", zh: "研發" },
  { slug: "performance",    file: "performance.html",    num: 2, en: "Technical Performance",  zh: "技術表現" },
  { slug: "ethics",         file: "ethics.html",         num: 3, en: "Technical AI Ethics",    zh: "AI 技術倫理" },
  { slug: "economy",        file: "economy.html",        num: 4, en: "The Economy",            zh: "經濟" },
  { slug: "education",      file: "education.html",      num: 5, en: "Education",              zh: "教育" },
  { slug: "policy",         file: "policy.html",         num: 6, en: "Policy & Governance",    zh: "政策與治理" },
  { slug: "diversity",      file: "diversity.html",      num: 7, en: "Diversity",              zh: "多元性" },
  { slug: "public-opinion", file: "public-opinion.html", num: 8, en: "Public Opinion",         zh: "民意" }
];

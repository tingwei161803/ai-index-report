/* =========================================================================
   AI Index Report 2022 · site.js — per-year configuration

   Loaded BEFORE assets/app.js on every page of this year. The shared engine
   is year-agnostic; everything specific to the 2022 edition lives here.

   The 2022 report has FIVE chapters — the most compact structure of any
   edition on this site. The Economy and Education share a single chapter,
   and neither Diversity nor Public Opinion is a chapter yet; both appear
   from the 2023 edition onward.
   ========================================================================= */

window.SITE_YEAR = "2022";
window.SITE_REPO = "tingwei161803/ai-index-report";

window.SITE_CHAPTERS = [
  { slug: "research",          file: "research.html",          num: 1, en: "Research & Development",   zh: "研發" },
  { slug: "performance",       file: "performance.html",       num: 2, en: "Technical Performance",    zh: "技術表現" },
  { slug: "ethics",            file: "ethics.html",            num: 3, en: "Technical AI Ethics",      zh: "AI 技術倫理" },
  { slug: "economy-education", file: "economy-education.html", num: 4, en: "The Economy & Education",  zh: "經濟與教育" },
  { slug: "policy",            file: "policy.html",            num: 5, en: "AI Policy & Governance",   zh: "AI 政策與治理" }
];

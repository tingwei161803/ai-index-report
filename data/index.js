/* =========================================================================
   AI Index Report · index.js — the year index

   The top-level overview: what the AI Index is, one entry point per edition,
   and the handful of figures that are directly comparable across editions.

   Sources — every number below is taken from the reports themselves:
     · 2025 edition (8th, April 2025) — reports on calendar year 2024
       https://hai.stanford.edu/ai-index/2025-ai-index-report
     · 2026 edition (9th) — reports on calendar year 2025
       https://hai.stanford.edu/ai-index/2026-ai-index-report

   NOTE ON YEAR LABELS: an edition and the year it measures are one apart.
   The "2025 report" describes 2024; the "2026 report" describes 2025. Every
   label here says which of the two it means — mixing them silently would
   make each trend look a year off.

   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_META = {
  title:    { en: "AI Index Report", zh: "AI 指數報告" },
  subtitle: { en: "Stanford HAI's annual index, read as data — every edition in one place.",
              zh: "史丹佛 HAI 的年度指數，用資料讀懂 — 各版本收錄於一處。" }
};

window.SITE_SECTIONS = [

  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "Two editions, one trend line",
                zh: "兩個版本，一條趨勢線" },
    subtitle: { en: "The AI Index is an independent Stanford HAI initiative that has tracked artificial intelligence since 2017 — across research, technical performance, responsible AI, the economy, science and medicine, policy, education, and public opinion. Reading two editions side by side shows something no single edition can: the rate of change. These figures compare the 2026 edition (measuring 2025) against the 2025 edition (measuring 2024).",
                zh: "AI 指數是史丹佛 HAI 自 2017 年起的獨立計畫，橫跨研發、技術表現、負責任 AI、經濟、科學與醫療、政策、教育與民意。把兩個版本並排來看，會顯露出單一版本看不見的東西：變化的速度。以下數字是 2026 版(衡量 2025 年)與 2025 版(衡量 2024 年)的對照。" },
    stats: [
      { label: { en: "% growth in global corporate AI investment, 2024 → 2025", zh: "% 全球企業 AI 投資成長，2024 → 2025" }, value: 131 },
      { label: { en: "% of organizations using AI in 2025 (78% a year earlier)", zh: "% 2025 年使用 AI 的組織(一年前為 78%)" }, value: 88 },
      { label: { en: "AI incidents logged in 2025 (233 in 2024)", zh: "2025 年 AI 事故通報件數(2024 年為 233)" }, value: 362 },
      { label: { en: "US private AI investment in 2025 (US$ bn; 109.1 in 2024)", zh: "2025 年美國私人 AI 投資(十億美元；2024 年為 109.1)" }, value: 286 },
      { label: { en: "% of notable models coming from industry, both years", zh: "% 重要模型來自產業界，兩年皆然" }, value: 90 },
      { label: { en: "editions covered on this site", zh: "本站收錄的版本數" }, value: 2 }
    ]
  },

  /* -------------------------------------------------------- EDITION CARDS */
  {
    type: "navcards",
    id: "editions",
    title:    { en: "Pick an edition", zh: "選擇版本" },
    subtitle: { en: "Each edition is a complete site of its own — an overview page plus one deep dive per chapter, in English and Traditional Chinese.",
                zh: "每個版本都是一個完整的網站 — 一個總覽頁，加上每章一頁的詳解，中英文皆備。" },
    items: [
      {
        href: "2026/index.html",
        title:   { en: "2026 edition · 9th", zh: "2026 版 · 第 9 版" },
        summary: { en: "Reports on 2025. Nine chapters — Science and Medicine are split apart. Investment more than doubles, adoption reaches 88% of organizations, and the labor-market signal appears first in the youngest workers.",
                   zh: "衡量 2025 年。九大章節 — 科學與醫療分列為兩章。投資翻倍有餘，組織採用率達 88%，而勞動市場的訊號最先出現在最年輕的工作者身上。" },
        tags: ["2025 data", "9 chapters"],
        cta: { en: "Open the 2026 edition", zh: "開啟 2026 版" }
      },
      {
        href: "2025/index.html",
        title:   { en: "2025 edition · 8th", zh: "2025 版 · 第 8 版" },
        summary: { en: "Reports on 2024. Eight chapters, with Science and Medicine combined. Benchmarks fall fast, inference costs collapse more than 280-fold, and two Nobel Prizes go to AI-driven work.",
                   zh: "衡量 2024 年。八大章節，科學與醫療合併為一章。基準測試迅速被攻克，推論成本崩跌逾 280 倍，兩座諾貝爾獎頒給 AI 驅動的研究。" },
        tags: ["2024 data", "8 chapters"],
        cta: { en: "Open the 2025 edition", zh: "開啟 2025 版" }
      }
    ]
  },

  /* ------------------------------------------------------ MONEY TREND */
  {
    type: "bars",
    id: "investment",
    title:    { en: "The money roughly doubled in a single year",
                zh: "資金在一年內大致翻倍" },
    subtitle: { en: "Global corporate AI investment — the broadest measure, covering private investment, mergers and acquisitions, and public offerings. Figures in billions of US dollars, by the calendar year measured.",
                zh: "全球企業 AI 投資 — 最廣義的口徑，涵蓋私人投資、併購與公開發行。單位為十億美元，依所衡量的年份標示。" },
    series: [
      { label: { en: "2024", zh: "2024" }, value: 252.3 },
      { label: { en: "2025", zh: "2025" }, value: 582 }
    ]
  },

  /* ------------------------------------------------------ ADOPTION TREND */
  {
    type: "bars",
    id: "adoption",
    title:    { en: "Adoption kept climbing from an already high base",
                zh: "採用率在已經很高的基礎上繼續攀升" },
    subtitle: { en: "Share of surveyed organizations reporting AI use. The jump from 55% to 78% between 2023 and 2024 was the steepest; 2025 adds ten more points on top of it.",
                zh: "受訪組織回報已使用 AI 的比例。2023 至 2024 年由 55% 躍升至 78% 是最陡的一段；2025 年在此之上再加十個百分點。" },
    series: [
      { label: { en: "2023", zh: "2023" }, value: 55 },
      { label: { en: "2024", zh: "2024" }, value: 78 },
      { label: { en: "2025", zh: "2025" }, value: 88 }
    ]
  },

  /* ------------------------------------------------------ INCIDENTS TREND */
  {
    type: "bars",
    id: "incidents",
    title:    { en: "Reported incidents rose alongside deployment",
                zh: "通報的事故隨部署一同上升" },
    subtitle: { en: "AI-related incidents logged in the AI Incidents Database. Rising counts reflect both more real-world failures and better reporting — the database itself notes that coverage improves each year.",
                zh: "AI 事故資料庫(AI Incidents Database)登錄的 AI 相關事故件數。數字上升同時反映真實故障增加與通報改善 — 資料庫本身即指出其涵蓋率逐年提高。" },
    series: [
      { label: { en: "2024", zh: "2024" }, value: 233 },
      { label: { en: "2025", zh: "2025" }, value: 362 }
    ]
  },

  /* ---------------------------------------------------------------- PROSE */
  {
    type: "prose",
    id: "how-to-read",
    title:    { en: "How to read this site", zh: "怎麼讀這個站" },
    subtitle: { en: "A few things worth knowing before you dive into an edition.",
                zh: "在讀進某個版本之前，有幾件事值得先知道。" },
    blocks: [
      { type: "h3", text: { en: "An edition is named for the year it is published, not the year it measures",
                            zh: "版本以發行年命名，不是以衡量的年份命名" } },
      { type: "p",
        text: { en: "The 2025 edition reports on calendar year 2024; the 2026 edition reports on 2025. This trips people up constantly when comparing figures across sources, so every chart on this site labels the measured year rather than the edition.",
                zh: "2025 版衡量的是 2024 年；2026 版衡量的是 2025 年。跨來源比對數字時這一點極容易搞混，因此本站所有圖表標示的都是「被衡量的年份」，而非版本名稱。" } },
      { type: "h3", text: { en: "The chapter structure changed between editions",
                            zh: "章節結構在版本之間改變過" } },
      { type: "p",
        text: { en: "The 2025 edition has eight chapters, treating Science and Medicine as one. The 2026 edition splits them, giving nine. Chapter numbers therefore do not line up across editions — follow the chapter names, not the numbers.",
                zh: "2025 版為八章，將科學與醫療視為同一章；2026 版把它們拆開，成為九章。因此章節編號在版本之間並不對齊 — 請認章節名稱，不要認編號。" } },
      { type: "h3", text: { en: "This is a reformatting, not the report",
                            zh: "這是重新編排，不是報告本身" } },
      { type: "p",
        text: { en: "Everything here is drawn from the reports' own top takeaways and per-chapter highlights, restructured for reading on screen. Nothing is inferred, extrapolated, or supplemented from other sources. Where a figure matters, go to the original — each edition links straight to it.",
                zh: "本站內容全數取自報告自身的重點摘要與各章節 highlight，只是重新編排成適合螢幕閱讀的形式。沒有任何推論、外推或引自他處的補充。若某個數字對你很重要，請回到原始報告 — 每個版本都有直達連結。" } }
    ]
  },

  /* ------------------------------------------------------------------ CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the original reports", zh: "閱讀原始報告" },
    text:  { en: "The AI Index is published open access by the Stanford Institute for Human-Centered AI under CC BY-ND 4.0. Full PDFs, the underlying raw data, and the Global AI Vibrancy tool are all available there.",
             zh: "AI 指數由史丹佛以人為本人工智慧研究院(HAI)以 CC BY-ND 4.0 開放取用發行。完整 PDF、底層原始資料與 Global AI Vibrancy 工具皆可於該處取得。" },
    link: { url: "https://hai.stanford.edu/ai-index",
            label: { en: "Stanford HAI · AI Index", zh: "史丹佛 HAI · AI 指數" } }
  }
];

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
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "Five editions, five years, one trend line",
                zh: "五個版本、五年，一條趨勢線" },
    subtitle: { en: "The AI Index is an independent Stanford HAI initiative that has tracked artificial intelligence since 2017 — across research, technical performance, responsible AI, the economy, science and medicine, policy, education, and public opinion. This site holds five editions, covering calendar years 2021 through 2025. Reading them together shows two things no single edition can: the rate of change, and the places where the Index has since revised what it said. A few numbers that set the scene:",
                zh: "AI 指數是史丹佛 HAI 自 2017 年起的獨立計畫，橫跨研發、技術表現、負責任 AI、經濟、科學與醫療、政策、教育與民意。本站收錄五個版本，涵蓋 2021 至 2025 年。把它們放在一起看，會顯露出單一版本看不見的兩件事：變化的速度，以及指數後來改口的地方。先看幾個定錨的數字：" },
    stats: [
      { label: { en: "calendar years covered, 2021 through 2025", zh: "涵蓋的年份，2021 至 2025 年" }, value: 5 },
      { label: { en: "% of organizations using AI in 2025 (50% in 2022)", zh: "% 2025 年使用 AI 的組織(2022 年為 50%)" }, value: 88 },
      { label: { en: "% growth in global corporate AI investment, 2024 → 2025", zh: "% 全球企業 AI 投資成長，2024 → 2025" }, value: 129.9 },
      { label: { en: "AI incidents logged in 2025 (123 in 2023)", zh: "2025 年 AI 事故通報件數(2023 年為 123)" }, value: 362 },
      { label: { en: "US$ millions of compute to train Gemini Ultra in 2023; GPT-2 cost $50,000 in 2019", zh: "百萬美元 — 2023 年訓練 Gemini Ultra 的算力成本；2019 年 GPT-2 為 5 萬美元" }, value: 191 },
      { label: { en: "chapters across the five editions — the structure changes every year", zh: "五個版本的章節總數 — 結構每年都在變" }, value: 39 }
    ]
  },

  /* -------------------------------------------------------- EDITION CARDS */
  {
    type: "navcards",
    id: "editions",
    nav:      { en: "Editions", zh: "各年版本" },
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
        href: "2022/index.html",
        title:   { en: "2022 edition · 5th", zh: "2022 版 · 第 5 版" },
        summary: { en: "Reports on 2021. Five chapters — the most compact edition here, with the economy and education sharing one. Investment doubles while the number of companies receiving it falls for a third year, and robotic arms halve in price.",
                   zh: "衡量 2021 年。五大章節，是本站收錄中結構最精簡的一版，經濟與教育共用一章。投資翻倍，拿到錢的公司卻連續第三年變少，而機器手臂的價格腰斬。" },
        tags: ["2021 data", "5 chapters"],
        cta: { en: "Open the 2022 edition", zh: "開啟 2022 版" }
      },
      {
        href: "2023/index.html",
        title:   { en: "2023 edition · 6th", zh: "2023 版 · 第 6 版" },
        summary: { en: "Reports on 2022. Eight chapters, with Responsible AI still under its older name, Technical AI Ethics. DALL·E 2, Stable Diffusion and ChatGPT arrive, and private investment falls year over year for the first time in a decade.",
                   zh: "衡量 2022 年。八大章節，負責任 AI 在這一版仍叫「AI 技術倫理」。DALL·E 2、Stable Diffusion 與 ChatGPT 在這一年到來，而私人投資出現十年來首次的年度下滑。" },
        tags: ["2022 data", "8 chapters"],
        cta: { en: "Open the 2023 edition", zh: "開啟 2023 版" }
      },
      {
        href: "2024/index.html",
        title:   { en: "2024 edition · 7th", zh: "2024 版 · 第 7 版" },
        summary: { en: "Reports on 2023. Nine chapters, and the last edition to give Diversity one of its own. Overall private investment falls for a second year while generative AI funding nearly octuples, and the compute bill for a frontier model passes $100 million.",
                   zh: "衡量 2023 年。九大章節，也是最後一個把多元性獨立成章的版本。整體私人投資連續第二年下滑，生成式 AI 募資卻近乎成長八倍，而訓練一個前沿模型的算力帳單跨過一億美元。" },
        tags: ["2023 data", "9 chapters"],
        cta: { en: "Open the 2024 edition", zh: "開啟 2024 版" }
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
    nav:      { en: "Investment", zh: "投資" },
    title:    { en: "A peak, a two-year trough, then a doubling",
                zh: "一個高點、兩年低谷，然後翻倍" },
    subtitle: { en: "Global corporate AI investment in billions of US dollars — private investment, mergers and acquisitions, minority stakes and public offerings combined. Every bar is taken from the 2026 edition's own back-series, not from what each edition said at the time: the underlying dataset has been revised, and 2021 in particular is now reported at roughly double its original figure. See 'How to read this site' below.",
                zh: "全球企業 AI 投資，單位十億美元，涵蓋私人投資、併購、少數股權與公開發行。每一根長條都取自 2026 版自己的回溯序列，而不是各版當年報的數字：底層資料集被修訂過，其中 2021 年現在的數字約是原本的兩倍。詳見下方「怎麼讀這個站」。" },
    series: [
      { label: { en: "2021", zh: "2021" }, value: 360.73 },
      { label: { en: "2022", zh: "2022" }, value: 253.25 },
      { label: { en: "2023", zh: "2023" }, value: 201 },
      { label: { en: "2024", zh: "2024" }, value: 253.02 },
      { label: { en: "2025", zh: "2025" }, value: 581.69 }
    ]
  },

  /* ------------------------------------------------------ ADOPTION TREND */
  {
    type: "bars",
    id: "adoption",
    nav:      { en: "Adoption", zh: "企業採用" },
    title:    { en: "Flat for years, then a step change",
                zh: "平了好幾年，然後一階跳上去" },
    subtitle: { en: "Share of surveyed organizations reporting AI use. Adoption sat between 50% and 60% for years — the 2023 edition called it a plateau — and then jumped 23 points in 2024. Unlike the investment series, these figures need no restating: each edition's own back-reference matches the next edition's starting point.",
                zh: "受訪組織回報已使用 AI 的比例。採用率有好幾年停在 50% 至 60% 之間，2023 版當時稱之為「進入平原」，接著在 2024 年一口氣跳升 23 個百分點。與投資序列不同，這組數字不需要修訂：每一版自己回溯的數字，都與下一版的起點吻合。" },
    series: [
      { label: { en: "2022", zh: "2022" }, value: 50 },
      { label: { en: "2023", zh: "2023" }, value: 55 },
      { label: { en: "2024", zh: "2024" }, value: 78 },
      { label: { en: "2025", zh: "2025" }, value: 88 }
    ]
  },

  /* ------------------------------------------------------ INCIDENTS TREND */
  {
    type: "bars",
    id: "incidents",
    nav:      { en: "Incidents", zh: "風險事件" },
    title:    { en: "Reported incidents rose alongside deployment",
                zh: "通報的事故隨部署一同上升" },
    subtitle: { en: "AI-related incidents logged in the AI Incident Database. Rising counts reflect both more real-world failures and better reporting — the database itself notes that coverage improves each year. The line starts at 2023 on purpose: editions before 2024 counted incidents from a different database (AIAAIC), and the two are not comparable.",
                zh: "AI 事故資料庫(AI Incident Database)登錄的 AI 相關事故件數。數字上升同時反映真實故障增加與通報改善 — 資料庫本身即指出其涵蓋率逐年提高。這條線刻意從 2023 年開始：2024 版之前的版本用的是另一個資料庫(AIAAIC)，兩者不可比。" },
    series: [
      { label: { en: "2023", zh: "2023" }, value: 123 },
      { label: { en: "2024", zh: "2024" }, value: 233 },
      { label: { en: "2025", zh: "2025" }, value: 362 }
    ]
  },

  /* ---------------------------------------------------------------- PROSE */
  {
    type: "prose",
    id: "how-to-read",
    nav:      { en: "How to read", zh: "閱讀說明" },
    title:    { en: "How to read this site", zh: "怎麼讀這個站" },
    subtitle: { en: "A few things worth knowing before you dive into an edition.",
                zh: "在讀進某個版本之前，有幾件事值得先知道。" },
    blocks: [
      { type: "h3", text: { en: "An edition is named for the year it is published, not the year it measures",
                            zh: "版本以發行年命名，不是以衡量的年份命名" } },
      { type: "p",
        text: { en: "The 2025 edition reports on calendar year 2024; the 2026 edition reports on 2025. This trips people up constantly when comparing figures across sources, so every chart on this site labels the measured year rather than the edition.",
                zh: "2025 版衡量的是 2024 年；2026 版衡量的是 2025 年。跨來源比對數字時這一點極容易搞混，因此本站所有圖表標示的都是「被衡量的年份」，而非版本名稱。" } },
      { type: "h3", text: { en: "The chapter structure changes almost every year",
                            zh: "章節結構幾乎每年都在變" } },
      { type: "p",
        text: { en: "The five editions here have five, eight, nine, eight and nine chapters respectively. The 2022 edition puts the economy and education in one chapter and has no chapter for diversity or public opinion at all. Diversity becomes its own chapter in 2023 and 2024, then disappears. Chapter 3 is called Technical AI Ethics until 2024, when it is renamed Responsible AI. Science and Medicine share a chapter until 2026 splits them. Chapter numbers therefore do not line up across editions — follow the names, not the numbers.",
                zh: "本站的五個版本分別是五章、八章、九章、八章、九章。2022 版把經濟與教育放在同一章，而且完全沒有多元性與民意這兩章；多元性在 2023 與 2024 版獨立成章，之後又消失。第 3 章在 2024 版之前叫「AI 技術倫理」，該版起改名為「負責任 AI」。科學與醫療一直共用一章，到 2026 版才拆開。因此章節編號在版本之間並不對齊 — 請認名稱，不要認編號。" } },
      { type: "h3", text: { en: "The same year can have two different numbers",
                            zh: "同一年可能有兩個不同的數字" } },
      { type: "p",
        text: { en: "Two things break naive year-to-year comparison, and both are invisible if you only read one edition. First, the underlying datasets get revised: the 2022 edition put global corporate AI investment for 2021 at $176.5 billion, while the 2026 edition restates the same year at $360.7 billion — more than double. The investment chart above is therefore drawn entirely from the 2026 edition's back-series rather than from what each edition said at the time.",
                zh: "有兩件事會讓「直接把各年數字接起來」失效，而且只讀單一版本時都看不見。第一，底層資料集會被修訂：2022 版把 2021 年的全球企業 AI 投資記為 1,765 億美元，2026 版則把同一年改記為 3,607 億美元 — 兩倍有餘。因此上方的投資圖表整條線都取自 2026 版的回溯序列，而不是各版當年報的數字。" } },
      { type: "p",
        text: { en: "Second, a metric can change its source. Incident counts up to the 2023 edition come from the AIAAIC database; from the 2024 edition onward they come from the AI Incident Database. Chaining the two would draw a line that appears to fall from 260 incidents in 2021 to 123 in 2023, which is an artifact of the switch and not something that happened. The incidents chart above starts at 2023 for that reason.",
                zh: "第二，同一個指標可能換了來源。事故件數在 2023 版之前取自 AIAAIC 資料庫，2024 版起改用 AI Incident Database。把兩者接起來會畫出一條「從 2021 年的 260 件掉到 2023 年的 123 件」的線，那是換資料庫造成的假象，不是真的發生過的事。上方的事故圖表因此從 2023 年起算。" } },
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
    nav:      { en: "Source", zh: "原始報告" },
    title: { en: "Read the original reports", zh: "閱讀原始報告" },
    text:  { en: "The AI Index is published open access by the Stanford Institute for Human-Centered AI under CC BY-ND 4.0. Full PDFs, the underlying raw data, and the Global AI Vibrancy tool are all available there.",
             zh: "AI 指數由史丹佛以人為本人工智慧研究院(HAI)以 CC BY-ND 4.0 開放取用發行。完整 PDF、底層原始資料與 Global AI Vibrancy 工具皆可於該處取得。" },
    link: { url: "https://hai.stanford.edu/ai-index",
            label: { en: "Stanford HAI · AI Index", zh: "史丹佛 HAI · AI 指數" } }
  }
];

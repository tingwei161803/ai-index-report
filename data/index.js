/* =========================================================================
   AI Index Report · index.js — the year index

   The one page that is not about a single edition. Five editions sit under
   this site, covering calendar years 2021 through 2025, and everything here
   exists to compare them — which is harder than it sounds, because the Index
   revises its own history between editions and occasionally changes what it
   is counting.

   Sources — every number is taken from the reports themselves:
     · 2022 edition (5th) — reports on 2021
     · 2023 edition (6th) — reports on 2022
     · 2024 edition (7th) — reports on 2023
     · 2025 edition (8th) — reports on 2024
     · 2026 edition (9th) — reports on 2025
       https://hai.stanford.edu/ai-index

   RULE FOR EVERY MULTI-YEAR SERIES ON THIS PAGE
   ---------------------------------------------
   A line is drawn from ONE edition's own back-series, or from years where the
   overlapping editions agree. It is never assembled by taking each edition's
   figure for its own year — that produces a shape the data does not have. The
   `revisions` block below shows why.

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
    subtitle: { en: "The AI Index is an independent Stanford HAI initiative that has tracked artificial intelligence since 2017 — across research, technical performance, responsible AI, the economy, science and medicine, policy, education and public opinion. This site holds five editions, covering calendar years 2021 through 2025. Reading them together shows two things no single edition can: the rate of change, and the places where the Index has since revised what it said. A few numbers that set the scene:",
                zh: "AI 指數是史丹佛 HAI 自 2017 年起的獨立計畫，橫跨研發、技術表現、負責任 AI、經濟、科學與醫療、政策、教育與民意。本站收錄五個版本，涵蓋 2021 至 2025 年。把它們放在一起看，會顯露出單一版本看不見的兩件事：變化的速度，以及指數後來改口的地方。先看幾個定錨的數字：" },
    stats: [
      { label: { en: "calendar years covered, 2021 through 2025", zh: "涵蓋的年份，2021 至 2025 年" }, value: 5 },
      { label: { en: "% of organizations using AI in 2025 (50% in 2022)", zh: "% 2025 年使用 AI 的組織(2022 年為 50%)" }, value: 88 },
      { label: { en: "% growth in global corporate AI investment, 2024 → 2025", zh: "% 全球企業 AI 投資成長，2024 → 2025" }, value: 129.9 },
      { label: { en: "AI incidents logged in 2025 (149 in 2023)", zh: "2025 年 AI 事故通報件數(2023 年為 149)" }, value: 362 },
      { label: { en: "US$ millions to train Gemini Ultra in 2023 — the 2017 Transformer cost under $1,000", zh: "百萬美元 — 2023 年訓練 Gemini Ultra 的成本；2017 年的 Transformer 不到 1,000 美元" }, value: 191.4 },
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
        href: "2025/index.html",
        title:   { en: "2025 edition · 8th", zh: "2025 版 · 第 8 版" },
        summary: { en: "Reports on 2024. Eight chapters, with Science and Medicine combined. Benchmarks fall fast, inference costs collapse more than 280-fold, and two Nobel Prizes go to AI-driven work.",
                   zh: "衡量 2024 年。八大章節，科學與醫療合併為一章。基準測試迅速被攻克，推論成本崩跌逾 280 倍，兩座諾貝爾獎頒給 AI 驅動的研究。" },
        tags: ["2024 data", "8 chapters"],
        cta: { en: "Open the 2025 edition", zh: "開啟 2025 版" }
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
        href: "2023/index.html",
        title:   { en: "2023 edition · 6th", zh: "2023 版 · 第 6 版" },
        summary: { en: "Reports on 2022. Eight chapters, with Responsible AI still under its older name, Technical AI Ethics. DALL·E 2, Stable Diffusion and ChatGPT arrive, and private investment falls year over year for the first time in a decade.",
                   zh: "衡量 2022 年。八大章節，負責任 AI 在這一版仍叫「AI 技術倫理」。DALL·E 2、Stable Diffusion 與 ChatGPT 在這一年到來，而私人投資出現十年來首次的年度下滑。" },
        tags: ["2022 data", "8 chapters"],
        cta: { en: "Open the 2023 edition", zh: "開啟 2023 版" }
      },
      {
        href: "2022/index.html",
        title:   { en: "2022 edition · 5th", zh: "2022 版 · 第 5 版" },
        summary: { en: "Reports on 2021. Five chapters — the most compact edition here, with the economy and education sharing one. Investment doubles while the number of companies receiving it falls for a third year, and robotic arms halve in price.",
                   zh: "衡量 2021 年。五大章節，是本站收錄中結構最精簡的一版，經濟與教育共用一章。投資翻倍，拿到錢的公司卻連續第三年變少，而機器手臂的價格腰斬。" },
        tags: ["2021 data", "5 chapters"],
        cta: { en: "Open the 2022 edition", zh: "開啟 2022 版" }
      }
    ]
  },

  /* ------------------------------------------------- CHAPTER MATRIX */
  {
    type: "table",
    id: "chapters",
    nav:      { en: "Chapter map", zh: "章節對照" },
    title:    { en: "The same chapter has five different numbers",
                zh: "同一章，在五個版本裡有五個編號" },
    subtitle: { en: "Where each subject sits in each edition. Only the first four rows hold still; everything below them moves, appears or disappears. This is why a citation like 'Chapter 6' means nothing without the edition attached.",
                zh: "每個主題在各版本中的位置。只有前四列站得住，其餘每一列都在移動、出現或消失。這就是為什麼「第 6 章」這種引用，不附上版本等於沒說。" },
    corner: { en: "Subject", zh: "主題" },
    columns: [
      { label: { en: "2022", zh: "2022" }, num: true },
      { label: { en: "2023", zh: "2023" }, num: true },
      { label: { en: "2024", zh: "2024" }, num: true },
      { label: { en: "2025", zh: "2025" }, num: true },
      { label: { en: "2026", zh: "2026" }, num: true }
    ],
    rows: [
      { head: { en: "Research & Development", zh: "研發" },
        cells: [{ text: { en: "1", zh: "1" } }, { text: { en: "1", zh: "1" } }, { text: { en: "1", zh: "1" } }, { text: { en: "1", zh: "1" } }, { text: { en: "1", zh: "1" } }] },
      { head: { en: "Technical Performance", zh: "技術表現" },
        cells: [{ text: { en: "2", zh: "2" } }, { text: { en: "2", zh: "2" } }, { text: { en: "2", zh: "2" } }, { text: { en: "2", zh: "2" } }, { text: { en: "2", zh: "2" } }] },
      { head: { en: "AI Ethics → Responsible AI", zh: "AI 倫理 → 負責任 AI" },
        cells: [{ text: { en: "3", zh: "3" } }, { text: { en: "3", zh: "3" } }, { text: { en: "3", zh: "3" }, tone: "strong" }, { text: { en: "3", zh: "3" } }, { text: { en: "3", zh: "3" } }] },
      { head: { en: "Economy", zh: "經濟" },
        cells: [{ text: { en: "4", zh: "4" }, tone: "strong" }, { text: { en: "4", zh: "4" } }, { text: { en: "4", zh: "4" } }, { text: { en: "4", zh: "4" } }, { text: { en: "4", zh: "4" } }] },
      { head: { en: "Education", zh: "教育" },
        cells: [{ text: { en: "4", zh: "4" }, tone: "strong" }, { text: { en: "5", zh: "5" } }, { text: { en: "6", zh: "6" } }, { text: { en: "7", zh: "7" } }, { text: { en: "7", zh: "7" } }] },
      { head: { en: "Science & Medicine", zh: "科學與醫療" },
        cells: [{ text: { en: "—", zh: "—" }, sr: { en: "no such chapter in the 2022 edition", zh: "2022 版沒有這一章" }, tone: "absent" },
                { text: { en: "—", zh: "—" }, sr: { en: "no such chapter in the 2023 edition", zh: "2023 版沒有這一章" }, tone: "absent" },
                { text: { en: "5", zh: "5" } }, { text: { en: "5", zh: "5" } }, { text: { en: "5 + 6", zh: "5 + 6" }, tone: "strong" }] },
      { head: { en: "Policy & Governance", zh: "政策與治理" },
        cells: [{ text: { en: "5", zh: "5" } }, { text: { en: "6", zh: "6" } }, { text: { en: "7", zh: "7" } }, { text: { en: "6", zh: "6" } }, { text: { en: "8", zh: "8" } }] },
      { head: { en: "Diversity", zh: "多元性" },
        cells: [{ text: { en: "—", zh: "—" }, sr: { en: "no such chapter in the 2022 edition", zh: "2022 版沒有這一章" }, tone: "absent" },
                { text: { en: "7", zh: "7" } }, { text: { en: "8", zh: "8" } },
                { text: { en: "—", zh: "—" }, sr: { en: "dropped from the 2025 edition", zh: "2025 版起取消" }, tone: "absent" },
                { text: { en: "—", zh: "—" }, sr: { en: "dropped from the 2026 edition", zh: "2026 版也沒有" }, tone: "absent" }] },
      { head: { en: "Public Opinion", zh: "民意" },
        cells: [{ text: { en: "—", zh: "—" }, sr: { en: "no such chapter in the 2022 edition", zh: "2022 版沒有這一章" }, tone: "absent" },
                { text: { en: "8", zh: "8" } }, { text: { en: "9", zh: "9" } }, { text: { en: "8", zh: "8" } }, { text: { en: "9", zh: "9" } }] }
    ],
    foot: { en: "Highlighted cells mark the edition where something changed: the economy and education shared chapter 4 in 2022, chapter 3 was renamed from Technical AI Ethics to Responsible AI in 2024, and science and medicine split into two chapters in 2026.",
            zh: "標示的格子是發生變動的那一版：2022 年經濟與教育共用第 4 章，第 3 章在 2024 版由「AI 技術倫理」改名為「負責任 AI」，科學與醫療則在 2026 版拆成兩章。" }
  },

  /* ------------------------------------------------------- CHAPTER LINEAGE */
  {
    type: "mermaid",
    id: "lineage",
    nav:      { en: "Lineage", zh: "章節沿革" },
    title:    { en: "How the chapters split, merged and vanished",
                zh: "章節如何分裂、合併與消失" },
    subtitle: { en: "The table above shows where each subject landed. This shows how it got there — one chapter became two, two became one, one was renamed, and one was quietly dropped.",
                zh: "上面的表格說明每個主題落在哪裡，這張圖說明它是怎麼走到那裡的 — 一章變兩章、兩章併一章、一章改了名，還有一章悄悄被拿掉。" },
    height: 340,
    code: {
      en: "graph LR\n  EE[\"2022: Economy and Education\"] --> EC[\"2023-26: Economy\"]\n  EE --> ED[\"2023-26: Education\"]\n  ETH[\"2022-23: Technical AI Ethics\"] --> RAI[\"2024-26: Responsible AI\"]\n  SM[\"2024-25: Science and Medicine\"] --> SC[\"2026: Science\"]\n  SM --> MD[\"2026: Medicine\"]\n  DIV[\"2023-24: Diversity\"] --> GONE[\"dropped from 2025\"]",
      zh: "graph LR\n  EE[\"2022：經濟與教育\"] --> EC[\"2023-26：經濟\"]\n  EE --> ED[\"2023-26：教育\"]\n  ETH[\"2022-23：AI 技術倫理\"] --> RAI[\"2024-26：負責任 AI\"]\n  SM[\"2024-25：科學與醫療\"] --> SC[\"2026：科學\"]\n  SM --> MD[\"2026：醫療\"]\n  DIV[\"2023-24：多元性\"] --> GONE[\"2025 版起取消\"]"
    },
    alt: {
      en: "Four lines of descent. The 2022 edition's single chapter Economy and Education becomes two separate chapters, Economy and Education, from the 2023 edition onward. Technical AI Ethics, chapter 3 in the 2022 and 2023 editions, is renamed Responsible AI from the 2024 edition. Science and Medicine, one chapter in the 2024 and 2025 editions, splits into Science and Medicine as two chapters in 2026. Diversity, a chapter of its own in the 2023 and 2024 editions, is dropped from the 2025 edition and does not return.",
      zh: "四條沿革線。2022 版的單一章節「經濟與教育」，自 2023 版起拆成「經濟」與「教育」兩章。「AI 技術倫理」在 2022 與 2023 版是第 3 章，自 2024 版起改名為「負責任 AI」。「科學與醫療」在 2024 與 2025 版是同一章，2026 版拆成「科學」與「醫療」兩章。「多元性」在 2023 與 2024 版獨立成章，2025 版起被取消且未再出現。"
    },
    foot: { en: "The diagram is drawn in the browser from the text description above it, which is also what a reader without JavaScript sees.",
            zh: "這張圖是在瀏覽器裡依上方的文字敘述繪製的，而那段文字也正是關閉 JavaScript 的讀者看到的內容。" }
  },

  /* ---------------------------------------------------- INVESTMENT TREND */
  {
    type: "lines",
    id: "investment",
    nav:      { en: "Investment", zh: "投資" },
    title:    { en: "A peak, a two-year trough, then a doubling",
                zh: "一個高點、兩年低谷，然後翻倍" },
    subtitle: { en: "Global AI investment in billions of US dollars. Corporate investment is the broadest measure — private investment, mergers and acquisitions, minority stakes and public offerings together; private investment is the venture and private-equity slice inside it.",
                zh: "全球 AI 投資，單位十億美元。企業投資是最廣義的口徑，涵蓋私人投資、併購、少數股權與公開發行；私人投資則是其中的創投與私募那一塊。" },
    unit: { en: "US$ billions", zh: "十億美元" },
    x: ["2021", "2022", "2023", "2024", "2025"],
    series: [
      { label: { en: "Corporate (all four kinds)", zh: "企業投資(四類合計)" },
        values: [360.73, 253.25, 201, 253.02, 581.69] },
      { label: { en: "Private investment only", zh: "僅私人投資" },
        values: [145.4, 113.01, 104.34, 151.48, 344.66], dash: "6 4" }
    ],
    foot: { en: "Both lines are read from the 2026 edition's own back-series, not assembled from what each edition said at the time. The 2023 total is printed as a whole number in the source; every other year carries two decimals.",
            zh: "兩條線都取自 2026 版自己的回溯序列，而不是把各版當年的說法接起來。2023 年的總額在原文中就是印成整數，其餘每一年都有兩位小數。" }
  },

  /* ------------------------------------------------------ THE REVISIONS */
  {
    type: "compare",
    id: "revisions",
    nav:      { en: "Revisions", zh: "數字被改過" },
    title:    { en: "The same year, reported twice, years apart",
                zh: "同一年，前後兩次，說法不同" },
    subtitle: { en: "Global corporate AI investment, in billions of US dollars. Switch between what the edition of the day printed and what the 2026 edition now says about those same years. Both views share one scale, so the bars are directly comparable.",
                zh: "全球企業 AI 投資，單位十億美元。切換看「當年那一版印的數字」與「2026 版現在對同樣那幾年的說法」。兩個檢視共用同一個刻度，長條可以直接比較。" },
    switchLabel: { en: "Choose which reporting to show", zh: "選擇要顯示哪一種說法" },
    views: [
      { label: { en: "As first reported", zh: "當年那一版的說法" },
        note: { en: "Each bar is the figure printed by the earliest edition on this site that covered that year: 2019–2021 from the 2022 edition, 2022 from the 2023 edition, 2023 from the 2024 edition.",
                zh: "每一根長條都是本站收錄中最早涵蓋該年份的版本所印出的數字：2019–2021 出自 2022 版，2022 出自 2023 版，2023 出自 2024 版。" },
        series: [
          { label: { en: "2019", zh: "2019" }, value: 66.98 },
          { label: { en: "2020", zh: "2020" }, value: 119.54 },
          { label: { en: "2021", zh: "2021" }, value: 176.47 },
          { label: { en: "2022", zh: "2022" }, value: 189.59 },
          { label: { en: "2023", zh: "2023" }, value: 189.16 }
        ] },
      { label: { en: "As the 2026 edition restates it", zh: "2026 版修訂後" },
        note: { en: "The same five years as the 2026 edition now reports them. 2021 has been revised upward by 104%, 2020 by 86%. The revisions are not all upward: 2014, outside this window, went the other way — from $29.17bn to $19.04bn.",
                zh: "同樣的五年，2026 版現在的說法。2021 年被上修 104%，2020 年上修 86%。但修訂不是一律往上：不在這個區間內的 2014 年反而被下修，從 291.7 億降到 190.4 億美元。" },
        series: [
          { label: { en: "2019", zh: "2019" }, value: 103.27 },
          { label: { en: "2020", zh: "2020" }, value: 221.87 },
          { label: { en: "2021", zh: "2021" }, value: 360.73 },
          { label: { en: "2022", zh: "2022" }, value: 253.25 },
          { label: { en: "2023", zh: "2023" }, value: 201 }
        ] }
    ]
  },

  /* ------------------------------------------------ THE REVISIONS, IN FULL */
  {
    type: "table",
    id: "revision-matrix",
    nav:      { en: "Every restatement", zh: "完整修訂表" },
    title:    { en: "Every edition's figure for every year",
                zh: "每一版對每一年的說法" },
    subtitle: { en: "Global corporate AI investment, US$ billions. Read a row across and you are watching one year get rewritten. The data provider says why: it keeps widening the set of companies it tracks, so each edition looks further back with a bigger net.",
                zh: "全球企業 AI 投資，單位十億美元。橫著讀一列，就是在看同一年被改寫的過程。資料商自己說明了原因：它持續擴大追蹤的公司範圍，所以每一版都是用更大的網子回頭撈同樣的年份。" },
    corner: { en: "Year measured", zh: "衡量的年份" },
    columns: [
      { label: { en: "2022 ed.", zh: "2022 版" }, num: true },
      { label: { en: "2023 ed.", zh: "2023 版" }, num: true },
      { label: { en: "2024 ed.", zh: "2024 版" }, num: true },
      { label: { en: "2025 ed.", zh: "2025 版" }, num: true },
      { label: { en: "2026 ed.", zh: "2026 版" }, num: true }
    ],
    rows: [
      { head: { en: "2014", zh: "2014" },
        cells: [{ text: { en: "29.17", zh: "29.17" }, tone: "strong" }, { text: { en: "19.04", zh: "19.04" } }, { text: { en: "19.04", zh: "19.04" } }, { text: { en: "19.04", zh: "19.04" } }, { text: { en: "19.04", zh: "19.04" } }] },
      { head: { en: "2019", zh: "2019" },
        cells: [{ text: { en: "66.98", zh: "66.98" } }, { text: { en: "95.57", zh: "95.57" } }, { text: { en: "103.27", zh: "103.27" } }, { text: { en: "103.27", zh: "103.27" } }, { text: { en: "103.27", zh: "103.27" } }] },
      { head: { en: "2020", zh: "2020" },
        cells: [{ text: { en: "119.54", zh: "119.54" } }, { text: { en: "146.74", zh: "146.74" } }, { text: { en: "202.49", zh: "202.49" } }, { text: { en: "221.87", zh: "221.87" } }, { text: { en: "221.87", zh: "221.87" } }] },
      { head: { en: "2021", zh: "2021" },
        cells: [{ text: { en: "176.47", zh: "176.47" }, tone: "strong" }, { text: { en: "276.14", zh: "276.14" } }, { text: { en: "337.40", zh: "337.40" } }, { text: { en: "360.73", zh: "360.73" }, tone: "strong" }, { text: { en: "360.73", zh: "360.73" } }] },
      { head: { en: "2022", zh: "2022" },
        cells: [{ text: { en: "—", zh: "—" }, sr: { en: "the 2022 edition predates this year", zh: "2022 版早於這一年" }, tone: "absent" },
                { text: { en: "189.59", zh: "189.59" } }, { text: { en: "234.95", zh: "234.95" } }, { text: { en: "253.25", zh: "253.25" } }, { text: { en: "253.25", zh: "253.25" } }] },
      { head: { en: "2023", zh: "2023" },
        cells: [{ text: { en: "—", zh: "—" }, sr: { en: "not yet covered", zh: "尚未涵蓋" }, tone: "absent" },
                { text: { en: "—", zh: "—" }, sr: { en: "not yet covered", zh: "尚未涵蓋" }, tone: "absent" },
                { text: { en: "189.16", zh: "189.16" } }, { text: { en: "201", zh: "201" } }, { text: { en: "201", zh: "201" } }] },
      { head: { en: "2024", zh: "2024" },
        cells: [{ text: { en: "—", zh: "—" }, sr: { en: "not yet covered", zh: "尚未涵蓋" }, tone: "absent" },
                { text: { en: "—", zh: "—" }, sr: { en: "not yet covered", zh: "尚未涵蓋" }, tone: "absent" },
                { text: { en: "—", zh: "—" }, sr: { en: "not yet covered", zh: "尚未涵蓋" }, tone: "absent" },
                { text: { en: "252.33", zh: "252.33" } }, { text: { en: "253.02", zh: "253.02" } }] },
      { head: { en: "2025", zh: "2025" },
        cells: [{ text: { en: "—", zh: "—" }, sr: { en: "not yet covered", zh: "尚未涵蓋" }, tone: "absent" },
                { text: { en: "—", zh: "—" }, sr: { en: "not yet covered", zh: "尚未涵蓋" }, tone: "absent" },
                { text: { en: "—", zh: "—" }, sr: { en: "not yet covered", zh: "尚未涵蓋" }, tone: "absent" },
                { text: { en: "—", zh: "—" }, sr: { en: "not yet covered", zh: "尚未涵蓋" }, tone: "absent" },
                { text: { en: "581.69", zh: "581.69" } }] }
    ],
    foot: { en: "Newly funded AI companies were revised harder still: 2021 was 746 companies in the 2022 edition and 1,669 in the 2023 edition — 2.24 times as many. Figures settle once an edition or two has passed; everything from 2013 to 2023 is now identical in the 2025 and 2026 editions.",
            zh: "新獲資金的 AI 公司家數改得更兇：2021 年在 2022 版是 746 家，到 2023 版變成 1,669 家，是 2.24 倍。數字通常在一兩版之後就穩定下來 — 2013 到 2023 年在 2025 版與 2026 版已經完全相同。" }
  },

  /* ---------------------------------------------- ADOPTION AND SENTIMENT */
  {
    type: "lines",
    id: "adoption",
    nav:      { en: "Adoption & mood", zh: "採用與觀感" },
    title:    { en: "Organizations moved first; the public warmed slowly",
                zh: "組織先動了，大眾則是慢慢暖起來" },
    subtitle: { en: "Percentages. Organizational adoption sat flat for years and then stepped up 23 points in a single year, while the share of people saying AI's benefits outweigh its drawbacks crept up a few points at a time — and the American figure has never caught the global one.",
                zh: "單位為百分比。組織採用率平了好幾年，然後在一年內跳升 23 個百分點；而認為 AI 利大於弊的比例則是一次幾個百分點慢慢爬 — 美國的數字始終沒有追上全球平均。" },
    unit: { en: "% of respondents", zh: "% 受訪者" },
    x: ["2021", "2022", "2023", "2024", "2025"],
    series: [
      { label: { en: "Organizations using AI", zh: "已使用 AI 的組織" },
        values: [56, 50, 55, 78, 88] },
      { label: { en: "Benefits outweigh drawbacks — global", zh: "認為利大於弊 — 全球" },
        values: [null, 52, 54, 55, 59], dash: "6 4" },
      { label: { en: "Benefits outweigh drawbacks — US", zh: "認為利大於弊 — 美國" },
        values: [null, 35, 37, 39, 42], dash: "2 3" }
    ],
    foot: { en: "Every point is corroborated by at least two editions except the 2025 values, which only the 2026 edition has reported; the 2022 global figure of 52% appears identically in four separate editions. Two caveats the corroboration does not cover. The adoption question changed in the 2025 edition — from organizations that have “adopted” AI to those that “use” it, with the chapter retitled from Industry Adoption to Industry Usage — and the 23-point jump falls in exactly that year. And the 2025 US sentiment figure is derived: the 2026 edition prints only a point change against 2022, from which 42% follows.",
            zh: "這三條線上的每一個點，除了 2025 年只有 2026 版報過之外，都有至少兩個版本互相印證；2022 年的全球數字 52%，在四個不同版本裡一字不差。但有兩件事是「互相印證」保護不到的。採用率的問法在 2025 版改過 —— 從「已導入(adopted)AI 的組織」改成「有在使用(uses)AI 的組織」，章節標題也從 Industry Adoption 改為 Industry Usage —— 而那 23 個百分點的跳升，正好落在改動的那一年。另外，2025 年的美國民意數字是推算出來的：2026 版只印出相對 2022 年的變化幅度，42% 是由此得出。" }
  },

  /* --------------------------------------------- GOVERNANCE VS INCIDENTS */
  {
    type: "lines",
    id: "governance",
    nav:      { en: "Rules vs harms", zh: "規範與事故" },
    title:    { en: "Incidents kept climbing; US rulemaking levelled off",
                zh: "事故持續攀升，美國的立規卻停了下來" },
    subtitle: { en: "Counts. Both lines measure things that are counted rather than estimated, which makes them unusually comparable — but they are not the same kind of count, and the gap between them is the point.",
                zh: "單位為件數。兩條線量的都是「數出來的」而非「估出來的」東西，因此難得地可以並排 — 但它們不是同一種計數，而兩者之間的落差正是重點。" },
    unit: { en: "count", zh: "件" },
    x: ["2023", "2024", "2025"],
    series: [
      { label: { en: "AI incidents logged", zh: "登錄的 AI 事故" }, values: [149, 233, 362] },
      { label: { en: "New US federal AI regulations", zh: "美國新增聯邦 AI 法規" }, values: [25, 59, 58], dash: "6 4" }
    ],
    foot: { en: "Every value here is one the reports print. Incidents: 233 for 2024 appears in both the 2025 and 2026 editions, and that agreement is what licenses joining them; 149 for 2023 follows from the 2025 edition's own \u201c56.4% increase over 2023\u201d applied to that 233; 362 is the 2026 edition's. The line starts at 2023 rather than 2022 because the only source for 2022 is the 2024 edition \u2014 and that edition puts 2023 at 123, which the 2025 edition contradicts with 149. An edition that disagrees at the overlap cannot be chained here. The 2026 edition says as much itself: AIID totals are \u201ccontinually updated, including for previous years.\u201d Regulations: 25 and 59 are the 2025 edition's chart labels, 58 the 2026 edition's. Both editions describe the identical method \u2014 a keyword search for \u201cartificial intelligence\u201d on the Federal Register, over 436 agencies \u2014 which is why this is the one line here whose definition never moved.",
            zh: "這裡每一個數字都是報告印出來的。事故：2024 年的 233 件同時出現在 2025 版與 2026 版，正是這個一致讓兩版可以接起來；2023 年的 149 件由 2025 版自己寫的「較 2023 年成長 56.4%」回推那個 233 得出；362 件出自 2026 版。這條線從 2023 年而非 2022 年開始，是因為 2022 年唯一的來源是 2024 版 — 而該版把 2023 年記為 123 件，與 2025 版的 149 件相互矛盾。在重疊年份上對不起來的版本，就不能接到這條線上。2026 版自己也這麼說：AIID 的總數「會持續更新，包含過往年份」。法規：25 與 59 是 2025 版的圖表標值，58 出自 2026 版。兩版描述的方法完全相同 — 在聯邦公報對「artificial intelligence」做關鍵字檢索、涵蓋逾 436 個機關 — 這也是本頁唯一定義從未變動過的一條線。" }
  },

  /* -------------------------------------------------- COST OF THE FRONTIER */
  {
    type: "table",
    id: "training-cost",
    nav:      { en: "Cost curve", zh: "訓練成本" },
    title:    { en: "What it cost to train the model of the year",
                zh: "訓練當年那個模型，要花多少錢" },
    subtitle: { en: "AI Index estimates of the compute used to train notable models, in US dollars. Six years separate the Transformer from Gemini Ultra, the most expensive model here, and across them the bill grows by a factor of about 200,000. The last two rows are where the curve bends back.",
                zh: "AI 指數對訓練重要模型所用算力的估算，單位美元。從 Transformer 到本表最貴的 Gemini Ultra 相隔六年，帳單成長了大約 20 萬倍。而最後兩列，正是這條曲線折回來的地方。" },
    corner: { en: "Model", zh: "模型" },
    columns: [
      { label: { en: "Released", zh: "發表年" }, num: true },
      { label: { en: "Estimated compute cost", zh: "估計算力成本" }, num: true },
      { label: { en: "Estimated by", zh: "估算來源" } }
    ],
    rows: [
      { head: { en: "Transformer", zh: "Transformer" },
        cells: [{ text: { en: "2017", zh: "2017" } }, { text: { en: "$930", zh: "930 美元" } }, { text: { en: "2024 edition", zh: "2024 版" } }] },
      { head: { en: "RoBERTa Large", zh: "RoBERTa Large" },
        cells: [{ text: { en: "2019", zh: "2019" } }, { text: { en: "$160,018", zh: "160,018 美元" } }, { text: { en: "2024 edition", zh: "2024 版" } }] },
      { head: { en: "Chinchilla", zh: "Chinchilla" },
        cells: [{ text: { en: "2022", zh: "2022" } }, { text: { en: "$2.11m", zh: "211 萬美元" } }, { text: { en: "2023 edition", zh: "2023 版" } }] },
      { head: { en: "GPT-4", zh: "GPT-4" },
        cells: [{ text: { en: "2023", zh: "2023" } }, { text: { en: "$78.4m", zh: "7,835 萬美元" }, tone: "strong" }, { text: { en: "2024 edition", zh: "2024 版" } }] },
      { head: { en: "Gemini Ultra", zh: "Gemini Ultra" },
        cells: [{ text: { en: "2023", zh: "2023" } }, { text: { en: "$191.4m", zh: "1 億 9,140 萬美元" }, tone: "strong" }, { text: { en: "2024 edition", zh: "2024 版" } }] },
      { head: { en: "Llama 3.1-405B", zh: "Llama 3.1-405B" },
        cells: [{ text: { en: "2024", zh: "2024" } }, { text: { en: "$170m", zh: "1 億 7,000 萬美元" } }, { text: { en: "2025 edition", zh: "2025 版" } }] },
      { head: { en: "DeepSeek-V3", zh: "DeepSeek-V3" },
        cells: [{ text: { en: "2024", zh: "2024" } }, { text: { en: "$6m", zh: "600 萬美元" } }, { text: { en: "2025 edition, developer figure", zh: "2025 版，開發者自述" } }] }
    ],
    foot: { en: "The last row is the exception that makes the column worth reading: DeepSeek-V3's $6 million is the developer's own number rather than an Index estimate, and the 2025 edition flags it as disputed. Costs on this scale are estimates of compute alone — no salaries, no data acquisition, and none of the failed runs that came before. The estimates get revised like everything else here, and the estimator changed: the 2023 edition used the Index's own figures, the 2024 and 2025 editions use Epoch AI. GPT-3 went from $1.80m to $4.32m, PaLM 540B from $8.01m to $12.39m, Megatron-Turing NLG down from $11.35m to $6.41m, and the Transformer itself from $930 to $670. The 2026 edition stopped publishing dollar costs altogether, which is why this table ends where it does.",
            zh: "最後一列正是讓這個欄位值得細讀的例外：DeepSeek-V3 的 600 萬美元是開發者自己的說法而非指數的估算，2025 版特別註明此數字有爭議。這個量級的成本都只是算力的估算 — 不含薪資、不含資料取得，也不含在此之前失敗的訓練。而這些估算跟本頁其他東西一樣會被修訂，連估算者都換過：2023 版用的是指數自己的數字，2024 與 2025 版改用 Epoch AI。GPT-3 從 180 萬改成 432 萬、PaLM 540B 從 801 萬改成 1,239 萬、Megatron-Turing NLG 反而從 1,135 萬下修到 641 萬，而 Transformer 本身從 930 美元改成 670 美元。2026 版則完全不再公布金額 — 這也是這張表停在這裡的原因。" }
  },

  /* --------------------------------------------------------- MILESTONES */
  {
    type: "timeline",
    id: "milestones",
    nav:      { en: "Five years", zh: "五年大事" },
    title:    { en: "One line per edition", zh: "一版一句話" },
    subtitle: { en: "What each edition found when it looked at its year.",
                zh: "每一版在檢視它那一年時，看到的是什麼。" },
    events: [
      { date: { en: "2021 · 2022 edition", zh: "2021 年 · 2022 版" },
        title: { en: "The money doubled; the recipients did not", zh: "錢翻了一倍，拿到的人卻沒變多" },
        body:  { en: "Private AI investment reached about $93.5 billion, more than double 2020, while the count of newly funded AI companies fell for a third straight year and rounds of $500 million or more went from four to fifteen.",
                 zh: "AI 私人投資約達 935 億美元，是 2020 年的兩倍以上；新獲資金的 AI 公司家數卻連續第三年下滑，而 5 億美元以上的募資輪由 4 輪增至 15 輪。" } },
      { date: { en: "2022 · 2023 edition", zh: "2022 年 · 2023 版" },
        title: { en: "Generative AI arrived and investment fell", zh: "生成式 AI 到來，投資卻下滑" },
        body:  { en: "DALL·E 2, Stable Diffusion and ChatGPT put AI in front of everyone, and in the same year private investment fell year over year for the first time in a decade. Traditional benchmarks began saturating.",
                 zh: "DALL·E 2、Stable Diffusion 與 ChatGPT 把 AI 推到所有人面前，而同一年私人投資出現十年來首次的年度下滑。傳統基準測試也開始飽和。" } },
      { date: { en: "2023 · 2024 edition", zh: "2023 年 · 2024 版" },
        title: { en: "The frontier passed $100 million", zh: "前沿跨過一億美元" },
        body:  { en: "Overall private investment fell for a second year while generative AI funding nearly octupled to $25.2 billion. Gemini Ultra's training compute was estimated at $191 million. Responsible-AI evaluation was found to have no shared standard at all.",
                 zh: "整體私人投資連續第二年下滑，生成式 AI 募資卻近乎成長八倍至 252 億美元。Gemini Ultra 的訓練算力估計為 1 億 9,100 萬美元。而負責任 AI 的評估被發現根本沒有共通標準。" } },
      { date: { en: "2024 · 2025 edition", zh: "2024 年 · 2025 版" },
        title: { en: "Benchmarks stopped holding", zh: "基準測試再也擋不住" },
        body:  { en: "Benchmarks introduced barely a year earlier were largely solved, inference cost for GPT-3.5-level performance fell more than 280-fold in eighteen months, and organizational adoption jumped from 55% to 78%.",
                 zh: "一年前才推出的基準測試大致被攻克，達到 GPT-3.5 等級的推論成本在十八個月內下降逾 280 倍，組織採用率由 55% 躍升至 78%。" } },
      { date: { en: "2025 · 2026 edition", zh: "2025 年 · 2026 版" },
        title: { en: "Scaling outran everything around it", zh: "規模成長甩開了周圍的一切" },
        body:  { en: "Corporate investment more than doubled to $581.7 billion and adoption reached 88%, while documented incidents rose to 362 and the US–China gap at the technical frontier effectively closed.",
                 zh: "企業投資翻倍有餘至 5,817 億美元，採用率達 88%；同時登錄的事故上升到 362 件，而技術前沿上的美中差距實質消失。" } }
    ]
  },

  /* ---------------------------------------------------------------- PROSE */
  {
    type: "prose",
    id: "how-to-read",
    nav:      { en: "How to read", zh: "閱讀說明" },
    title:    { en: "How to read this site", zh: "怎麼讀這個站" },
    subtitle: { en: "Four things worth knowing before you compare anything across editions.",
                zh: "在跨版本比較任何東西之前，有四件事值得先知道。" },
    blocks: [
      { type: "h3", text: { en: "An edition is named for the year it is published, not the year it measures",
                            zh: "版本以發行年命名，不是以衡量的年份命名" } },
      { type: "p",
        text: { en: "The 2022 edition reports on calendar year 2021; the 2026 edition reports on 2025. This trips people up constantly when comparing figures across sources, so every chart on this site labels the measured year rather than the edition.",
                zh: "2022 版衡量的是 2021 年；2026 版衡量的是 2025 年。跨來源比對數字時這一點極容易搞混，因此本站所有圖表標示的都是「被衡量的年份」，而非版本名稱。" } },
      { type: "h3", text: { en: "The chapter structure changes almost every year",
                            zh: "章節結構幾乎每年都在變" } },
      { type: "p",
        text: { en: "The five editions here have five, eight, nine, eight and nine chapters respectively. The chapter map above shows where each subject sits in each edition, and the diagram below it shows how one chapter became two, two became one, one was renamed and one was dropped. Chapter numbers do not line up across editions — follow the names, not the numbers.",
                zh: "本站的五個版本分別是五章、八章、九章、八章、九章。上方的章節對照表列出每個主題在各版的位置，下面那張圖則說明一章如何變成兩章、兩章併成一章、一章改名、還有一章被拿掉。章節編號在版本之間並不對齊 — 請認名稱，不要認編號。" } },
      { type: "h3", text: { en: "The Index revises its own history",
                            zh: "指數會回頭改自己的歷史" } },
      { type: "p",
        text: { en: "This is the one that catches people out, because nothing in a single edition hints at it. Global corporate AI investment for 2021 was printed as $176.5 billion in the 2022 edition and is now stated as $360.7 billion — 104% higher for the same year. The data provider explains why: it keeps widening the set of companies it tracks, so each edition looks back at the same years with a bigger net. Revisions are not all upward — 2014 was cut from $29.2 billion to $19.0 billion — and they settle after an edition or two.",
                zh: "這一點最容易讓人踩到，因為單看任何一版都不會有任何跡象。2021 年的全球企業 AI 投資，在 2022 版印的是 1,765 億美元，現在則是 3,607 億美元 — 同一年高出 104%。資料商說明了原因：它持續擴大追蹤的公司範圍，所以每一版都是用更大的網子回頭看同樣那幾年。修訂並非一律往上 — 2014 年就被從 292 億下修到 190 億美元 — 而且通常一兩版之後就會穩定。" } },
      { type: "p",
        text: { en: "So every multi-year line on this page is drawn from one edition's own back-series, or from years where the overlapping editions agree. None of them is assembled by taking each edition's figure for its own year, which is the natural thing to do and produces a shape the data does not have.",
                zh: "因此本頁的每一條跨年度線，都取自單一版本自己的回溯序列，或取自「重疊版本說法一致」的年份。沒有任何一條是把各版對自己那一年的說法接起來的 — 那是最自然的做法，也會畫出資料裡並不存在的形狀。" } },
      { type: "h3", text: { en: "A metric can quietly change what it counts",
                            zh: "同一個指標可能悄悄換了計算對象" } },
      { type: "p",
        text: { en: "Incident counts up to the 2023 edition come from the AIAAIC database; from the 2024 edition onward they come from the AI Incident Database. Chaining the two would draw a line falling from 260 incidents in 2021 to 123 in 2023 — an artifact of the switch, not something that happened. Two more in the same family:",
                zh: "事故件數在 2023 版之前取自 AIAAIC 資料庫，2024 版起改用 AI Incident Database。把兩者接起來會畫出一條「從 2021 年的 260 件掉到 2023 年的 123 件」的線，那是換資料庫造成的假象，不是真的發生過的事。同一類的還有兩個：" },
      },
      { type: "ul",
        items: {
          en: [
            "Global AI laws passed: the country coverage changed in every single edition — 25 countries, then 127, then 128. The raw counts are not a time series at all.",
            "Legislative mentions of AI: coverage shrank from 81 countries to about 75, and the 2026 edition dropped the metric entirely, replacing it with a US-only proxy.",
            "US federal AI regulations: the one metric on this page whose definition never moved, which is why it is the one drawn beside incident counts above."
          ],
          zh: [
            "全球通過的 AI 法案數：涵蓋國家數每一版都不同 — 25 國、127 國、128 國。原始數字根本不構成一條時間序列。",
            "立法程序中提及 AI 的次數：涵蓋範圍從 81 國縮到約 75 國，而 2026 版乾脆把這個指標拿掉，改用一個只涵蓋美國的替代指標。",
            "美國聯邦 AI 法規數：本頁唯一定義從未變動過的指標 — 這也正是上面把它拿來與事故件數並排的原因。"
          ]
        } },
      { type: "h3", text: { en: "This is a reformatting, not the report",
                            zh: "這是重新編排，不是報告本身" } },
      { type: "p",
        text: { en: "Everything here is drawn from the reports' own top takeaways, per-chapter highlights and figures, restructured for reading on screen. Nothing is inferred, extrapolated or supplemented from other sources. Where a figure matters, go to the original — each edition links straight to it.",
                zh: "本站內容全數取自報告自身的重點摘要、各章 highlight 與圖表，只是重新編排成適合螢幕閱讀的形式。沒有任何推論、外推或引自他處的補充。若某個數字對你很重要，請回到原始報告 — 每個版本都有直達連結。" } }
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

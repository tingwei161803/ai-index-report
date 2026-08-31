/* =========================================================================
   AI Index Report 2025 · index.js — the edition overview

   Source: Stanford HAI — Artificial Intelligence Index Report 2025 (8th ed.)
   https://hai.stanford.edu/ai-index/2025-ai-index-report

   Built from the report's own "Top Takeaways" (12 items) and the per-chapter
   Report Highlights. The 2025 edition reports on calendar year 2024.
   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_META = {
  title:    { en: "AI Index Report 2025", zh: "AI 指數報告 2025" },
  subtitle: { en: "Stanford HAI's eighth edition, read as data — 12 takeaways, 8 chapters.",
              zh: "史丹佛 HAI 第八版,用資料讀懂 — 12 條重點、8 大章節。" }
};

window.SITE_SECTIONS = [

  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "2024: the year the benchmarks stopped holding",
                zh: "2024 年:基準測試再也擋不住的一年" },
    subtitle: { en: "The 2025 AI Index covers calendar year 2024 across eight chapters — research, technical performance, responsible AI, the economy, science and medicine, policy, education, and public opinion. Benchmarks introduced barely a year earlier were largely solved, costs collapsed, and investment reached a record. A few numbers that set the scene:",
                zh: "2025 年 AI 指數涵蓋 2024 年,分為八大章節:研發、技術表現、負責任 AI、經濟、科學與醫療、政策、教育與民意。一年前才推出的基準測試大致被攻克,成本崩跌,投資創下新高。先看幾個定錨的數字:" },
    stats: [
      { label: { en: "% of coding problems solved on SWE-bench (4.4% in 2023)", zh: "% SWE-bench 程式問題解決率(2023 年為 4.4%)" }, value: 71.7 },
      { label: { en: "global corporate AI investment (US$ bn)", zh: "全球企業 AI 投資(十億美元)" }, value: 252.3 },
      { label: { en: "% of organizations reporting AI use (55% in 2023)", zh: "% 回報使用 AI 的組織(2023 年為 55%)" }, value: 78 },
      { label: { en: "fold reduction in GPT-3.5-level inference cost in ~18 months", zh: "倍 — GPT-3.5 等級推論成本在約 18 個月內的降幅" }, value: 280 },
      { label: { en: "AI incident reports in 2024, a record high", zh: "2024 年 AI 事故通報件數,創下新高" }, value: 233 },
      { label: { en: "FDA-approved AI-enabled medical devices by 2023 (6 in 2015)", zh: "至 2023 年 FDA 核准的 AI 醫材件數(2015 年為 6 件)" }, value: 223 }
    ]
  },

  /* ----------------------------------------------------------- TAKEAWAYS */
  {
    type: "cards",
    id: "takeaways",
    title:    { en: "The 12 Top Takeaways", zh: "12 條重點摘要" },
    subtitle: { en: "The report's own summary of the year, in its own order. Click any card for the full text.",
                zh: "報告自身對這一年的總結,依其原本順序排列。點任一張卡片可看完整內容。" },
    items: [
      { slug: "benchmarks",
        title:   { en: "1 · Performance on demanding benchmarks keeps improving", zh: "1 · 高難度基準測試的表現持續進步" },
        summary: { en: "MMMU, GPQA and SWE-bench were introduced in 2023 to stretch the best systems. A year later scores rose 18.8, 48.9 and 67.3 percentage points respectively.",
                   zh: "MMMU、GPQA 與 SWE-bench 於 2023 年推出,用來測試最強系統的極限。一年後,分數分別上升 18.8、48.9 與 67.3 個百分點。" },
        tags: ["benchmarks"],
        overview: { en: "Beyond benchmarks, AI systems made major strides in generating high-quality video, and in some settings language model agents even outperformed humans in programming tasks with limited time budgets.",
                    zh: "除了基準測試之外,AI 系統在生成高品質影片上也有重大進展;在某些設定下,語言模型代理人在時間預算受限的程式任務中,表現甚至超越人類。" } },
      { slug: "everyday",
        title:   { en: "2 · AI is increasingly embedded in everyday life", zh: "2 · AI 日益融入日常生活" },
        summary: { en: "In 2023 the FDA approved 223 AI-enabled medical devices, up from just six in 2015. Waymo provides over 150,000 autonomous rides each week.",
                   zh: "2023 年 FDA 核准了 223 項 AI 醫療器材,而 2015 年僅有 6 項。Waymo 每週提供超過 15 萬趟自駕接送。" },
        tags: ["deployment"],
        overview: { en: "From healthcare to transportation, AI is rapidly moving from the lab to daily life. Baidu's affordable Apollo Go robotaxi fleet now serves numerous cities across China.",
                    zh: "從醫療到交通,AI 正快速從實驗室走進日常。百度價格親民的 Apollo Go 機器計程車車隊,如今已服務中國多個城市。" } },
      { slug: "business",
        title:   { en: "3 · Business is all in, fueling record investment", zh: "3 · 企業全力投入,推升投資創紀錄" },
        summary: { en: "US private AI investment reached $109.1 billion — nearly 12 times China's $9.3 billion and 24 times the UK's $4.5 billion. Organizational AI use jumped to 78% from 55%.",
                   zh: "美國私人 AI 投資達 1,091 億美元 — 近乎中國 93 億美元的 12 倍、英國 45 億美元的 24 倍。組織的 AI 使用率由 55% 躍升至 78%。" },
        tags: ["economy"],
        overview: { en: "Generative AI saw particularly strong momentum, attracting $33.9 billion globally in private investment — an 18.7% increase from 2023. A growing body of research confirms that AI boosts productivity and, in most cases, helps narrow skill gaps across the workforce.",
                    zh: "生成式 AI 的動能尤其強勁,全球吸引 339 億美元私人投資 — 較 2023 年成長 18.7%。越來越多研究證實 AI 能提升生產力,且多數情況下有助於縮小勞動力的技能落差。" } },
      { slug: "us-china",
        title:   { en: "4 · The US still leads on top models — China is closing in", zh: "4 · 美國仍領先頂尖模型 — 中國正在追上" },
        summary: { en: "US institutions produced 40 notable models in 2024, versus China's 15 and Europe's three. But performance gaps on MMLU and HumanEval shrank from double digits to near parity.",
                   zh: "2024 年美國機構產出 40 個重要模型,中國 15 個、歐洲 3 個。但在 MMLU 與 HumanEval 上的表現差距,已從兩位數收斂到幾乎持平。" },
        tags: ["geopolitics"],
        overview: { en: "China continues to lead in AI publications and patents. Model development is increasingly global, with notable launches from the Middle East, Latin America, and Southeast Asia.",
                    zh: "中國在 AI 論文與專利上持續領先。模型開發也日益全球化,中東、拉丁美洲與東南亞都有值得注意的發表。" } },
      { slug: "rai",
        title:   { en: "5 · The responsible AI ecosystem evolves — unevenly", zh: "5 · 負責任 AI 生態系在演進 — 但並不均勻" },
        summary: { en: "AI-related incidents are rising sharply, yet standardized responsible-AI evaluations remain rare among major industrial model developers.",
                   zh: "AI 相關事故急遽上升,但在主要的產業級模型開發者之間,標準化的負責任 AI 評估依然罕見。" },
        tags: ["responsible AI"],
        overview: { en: "New benchmarks like HELM Safety, AIR-Bench, and FACTS offer promising tools for assessing factuality and safety. Among companies, a gap persists between recognizing risks and taking meaningful action. Governments showed increased urgency: the OECD, EU, UN, and African Union all released frameworks in 2024.",
                    zh: "HELM Safety、AIR-Bench 與 FACTS 等新基準,為評估事實性與安全性提供了可期的工具。企業端,認知風險與實際行動之間仍有落差。政府端則明顯加快腳步:OECD、歐盟、聯合國與非洲聯盟在 2024 年皆發布了相關框架。" } },
      { slug: "optimism",
        title:   { en: "6 · Global optimism is rising — regional divides remain deep", zh: "6 · 全球樂觀情緒上升 — 但區域鴻溝依舊" },
        summary: { en: "Strong majorities see AI as more beneficial than harmful in China (83%), Indonesia (80%) and Thailand (77%) — but only a minority do in Canada (40%), the US (39%) and the Netherlands (36%).",
                   zh: "在中國(83%)、印尼(80%)與泰國(77%),多數人認為 AI 利大於弊 — 但在加拿大(40%)、美國(39%)與荷蘭(36%),抱持此看法的只是少數。" },
        tags: ["public opinion"],
        overview: { en: "Sentiment is shifting: since 2022, optimism has grown significantly in several previously skeptical countries, including Germany (+10%), France (+10%), Canada (+8%), Great Britain (+8%), and the United States (+4%).",
                    zh: "情緒正在改變:自 2022 年以來,幾個原本較為保留的國家樂觀度明顯上升,包括德國(+10%)、法國(+10%)、加拿大(+8%)、英國(+8%)與美國(+4%)。" } },
      { slug: "efficiency",
        title:   { en: "7 · AI becomes more efficient, affordable, and accessible", zh: "7 · AI 變得更高效、更便宜、更容易取得" },
        summary: { en: "The inference cost for GPT-3.5-level performance dropped over 280-fold between November 2022 and October 2024. Hardware costs fall 30% a year; energy efficiency improves 40%.",
                   zh: "達到 GPT-3.5 等級表現的推論成本,在 2022 年 11 月至 2024 年 10 月間下降逾 280 倍。硬體成本每年下降 30%,能源效率每年提升 40%。" },
        tags: ["cost"],
        overview: { en: "Open-weight models are closing the gap with closed models, reducing the performance difference from 8% to just 1.7% on some benchmarks in a single year. Together, these trends are rapidly lowering the barriers to advanced AI.",
                    zh: "開放權重模型正在追平閉源模型,某些基準上的表現差距在一年內由 8% 縮小到僅 1.7%。這些趨勢合起來,正快速降低取得先進 AI 的門檻。" } },
      { slug: "governments",
        title:   { en: "8 · Governments step up — with regulation and investment", zh: "8 · 政府積極介入 — 監管與投資雙管齊下" },
        summary: { en: "US federal agencies introduced 59 AI-related regulations in 2024 — more than double 2023 — issued by twice as many agencies. Legislative mentions rose 21.3% across 75 countries.",
                   zh: "2024 年美國聯邦機關推出 59 條 AI 相關法規 — 是 2023 年的兩倍有餘,且發布機關數也翻倍。75 個國家的立法提及次數成長 21.3%。" },
        tags: ["policy"],
        overview: { en: "Governments are investing at scale: Canada pledged $2.4 billion, China launched a $47.5 billion semiconductor fund, France committed €109 billion, India pledged $1.25 billion, and Saudi Arabia's Project Transcendence represents a $100 billion initiative.",
                    zh: "各國政府正大規模投資:加拿大承諾 24 億美元,中國啟動 475 億美元的半導體基金,法國投入 1,090 億歐元,印度承諾 12.5 億美元,沙烏地阿拉伯的 Project Transcendence 則是 1,000 億美元的計畫。" } },
      { slug: "education",
        title:   { en: "9 · AI and CS education expands — but access gaps persist", zh: "9 · AI 與資訊科學教育擴張 — 但取得落差仍在" },
        summary: { en: "Two-thirds of countries now offer or plan to offer K–12 computer science education — twice as many as in 2019. In the US, computing bachelor's degrees rose 22% over ten years.",
                   zh: "三分之二的國家已提供或計畫提供 K–12 資訊科學教育 — 是 2019 年的兩倍。美國的資訊類學士學位數,十年間成長 22%。" },
        tags: ["education"],
        overview: { en: "Africa and Latin America made the most progress, yet access remains limited in many African countries due to basic infrastructure gaps like electricity. In the US, 81% of K–12 CS teachers say AI should be part of foundational CS education, but less than half feel equipped to teach it.",
                    zh: "非洲與拉丁美洲進步最多,但許多非洲國家仍受限於電力等基礎設施不足。在美國,81% 的 K–12 資訊科學教師認為 AI 應納入基礎課程,但不到半數自認具備教學能力。" } },
      { slug: "frontier",
        title:   { en: "10 · Industry races ahead — but the frontier is tightening", zh: "10 · 產業界一路領先 — 但前沿正在收攏" },
        summary: { en: "Nearly 90% of notable models in 2024 came from industry, up from 60% in 2023. Yet the Elo gap between the top and 10th-ranked model fell from 11.9% to 5.4%.",
                   zh: "2024 年近 90% 的重要模型來自產業界,2023 年為 60%。但排名第一與第十的模型 Elo 差距,已從 11.9% 縮小至 5.4%。" },
        tags: ["frontier"],
        overview: { en: "Academia remains the top source of highly cited research. Model scale continues to grow rapidly — training compute doubles every five months, datasets every eight, and power use annually. The top two models are now separated by just 0.7%.",
                    zh: "學術界仍是高被引研究的最大來源。模型規模持續快速成長 — 訓練算力每五個月翻倍、資料集每八個月翻倍、用電量則每年翻倍。目前排名前兩名的模型只差 0.7%。" } },
      { slug: "science",
        title:   { en: "11 · AI earns top honors for its impact on science", zh: "11 · AI 因其對科學的影響獲得最高榮譽" },
        summary: { en: "Two Nobel Prizes recognized work that led to deep learning (physics) and to its application to protein folding (chemistry), while the Turing Award honored contributions to reinforcement learning.",
                   zh: "兩座諾貝爾獎分別表彰了促成深度學習(物理獎)以及將其應用於蛋白質摺疊(化學獎)的研究;圖靈獎則表彰了強化學習的貢獻。" },
        tags: ["science"],
        overview: { en: "AI's growing importance is reflected in major scientific awards — a recognition that the field's foundational work now sits alongside the most consequential science of the era.",
                    zh: "AI 日益提升的重要性反映在重大科學獎項上 — 這代表這個領域的奠基性研究,如今已與這個時代最具影響力的科學並列。" } },
      { slug: "reasoning",
        title:   { en: "12 · Complex reasoning remains a challenge", zh: "12 · 複雜推理仍是難題" },
        summary: { en: "Models excel at tasks like International Mathematical Olympiad problems but still struggle with reasoning benchmarks like PlanBench.",
                   zh: "模型在國際數學奧林匹亞這類題目上表現優異,卻仍在 PlanBench 這類推理基準上碰壁。" },
        tags: ["limitations"],
        overview: { en: "They often fail to reliably solve logic tasks even when provably correct solutions exist, limiting their effectiveness in high-stakes settings where precision is critical.",
                    zh: "即使存在可被證明為正確的解法,它們仍經常無法穩定解出邏輯任務 — 這限制了它們在高風險、要求精確的場景中的可用性。" } }
    ]
  },

  /* ------------------------------------------------------ INVESTMENT BARS */
  {
    type: "bars",
    id: "investment",
    title:    { en: "Private AI investment in 2024, by country",
                zh: "2024 年各國私人 AI 投資" },
    subtitle: { en: "The United States pulled further ahead: its private AI investment was nearly 12 times China's and 24 times the United Kingdom's. Figures in billions of US dollars.",
                zh: "美國進一步拉開差距:其私人 AI 投資近乎中國的 12 倍、英國的 24 倍。單位為十億美元。" },
    series: [
      { label: { en: "United States", zh: "美國" }, value: 109.1 },
      { label: { en: "China", zh: "中國" }, value: 9.3 },
      { label: { en: "United Kingdom", zh: "英國" }, value: 4.5 }
    ]
  },

  /* ------------------------------------------------------- BENCHMARK BARS */
  {
    type: "bars",
    id: "benchmarks",
    title:    { en: "One year of progress on benchmarks built to be hard",
                zh: "為了「夠難」而生的基準,一年之間的進展" },
    subtitle: { en: "Percentage-point gains during 2024 on the three benchmarks introduced in 2023 to stretch the most capable systems.",
                zh: "2023 年推出、用以測試最強系統極限的三項基準,在 2024 年的進步幅度(百分點)。" },
    series: [
      { label: { en: "SWE-bench", zh: "SWE-bench" }, value: 67.3 },
      { label: { en: "GPQA", zh: "GPQA" }, value: 48.9 },
      { label: { en: "MMMU", zh: "MMMU" }, value: 18.8 }
    ]
  },

  /* ------------------------------------------------------------ CHAPTERS */
  {
    type: "prose",
    id: "chapters",
    title:    { en: "The eight chapters", zh: "八大章節" },
    subtitle: { en: "Each chapter has its own page with the full set of highlights, charts and context. Use the Chapters menu in the top bar to jump straight in.",
                zh: "每一章都有專屬頁面,收錄完整的重點、圖表與脈絡。可用上方工具列的「章節」選單直接跳轉。" },
    blocks: [
      { type: "ul",
        items: {
          en: ["1 · Research & Development — publications, patents, notable models, training compute, inference cost, carbon emissions",
               "2 · Technical Performance — benchmarks, open vs closed weights, the US–China gap, test-time compute, AI agents",
               "3 · Responsible AI — incident reports, RAI benchmarks, the shrinking data commons, transparency, bias",
               "4 · Economy — investment, corporate adoption, business function impact, industrial robotics, productivity",
               "5 · Science & Medicine — protein models, clinical knowledge, FDA-approved devices, medical foundation models, Nobel Prizes",
               "6 · Policy & Governance — US state and federal legislation, national investment, AI safety institutes, deepfake rules",
               "7 · Education — K–12 computer science access, teacher readiness, degrees awarded, international comparisons",
               "8 · Public Opinion — global optimism, expectations of impact, trust in AI companies, regional differences"],
          zh: ["1 · 研發 — 論文、專利、重要模型、訓練算力、推論成本、碳排放",
               "2 · 技術表現 — 基準測試、開放與閉源權重、美中差距、測試時運算、AI 代理人",
               "3 · 負責任 AI — 事故通報、RAI 基準、萎縮中的資料共享、透明度、偏誤",
               "4 · 經濟 — 投資、企業採用、各業務職能的影響、工業機器人、生產力",
               "5 · 科學與醫療 — 蛋白質模型、臨床知識、FDA 核准器材、醫療基礎模型、諾貝爾獎",
               "6 · 政策與治理 — 美國州級與聯邦立法、各國投資、AI 安全機構、深偽規範",
               "7 · 教育 — K–12 資訊科學的可及性、師資準備度、學位數、國際比較",
               "8 · 民意 — 全球樂觀度、對影響的預期、對 AI 企業的信任、區域差異"]
        } }
    ]
  },

  /* ------------------------------------------------------------------ CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full 2025 report", zh: "閱讀 2025 年完整報告" },
    text:  { en: "457 pages, published open access by the Stanford Institute for Human-Centered AI under CC BY-ND 4.0. The raw data behind every chart is available there too.",
             zh: "全文 457 頁,由史丹佛以人為本人工智慧研究院以 CC BY-ND 4.0 開放取用發行。所有圖表背後的原始資料也可於該處取得。" },
    link: { url: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
            label: { en: "Stanford HAI · AI Index 2025", zh: "史丹佛 HAI · AI 指數 2025" } }
  }
];

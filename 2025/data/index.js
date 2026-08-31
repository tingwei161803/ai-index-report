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
    type: "accordion",
    id: "chapters",
    title:    { en: "Eight chapters, in brief", zh: "八大章節速覽" },
    subtitle: { en: "Each chapter's headline numbers. Expand one to read the summary, then follow the link for the full deep dive.",
                zh: "每一章的關鍵數字。展開可看摘要,再由連結進入完整章節。" },
    qa: [
      { q: { en: "1 · Research & Development", zh: "1 · 研發" },
        a: { en: "Nearly 90% of notable models came from industry, up from 60% in 2023, while academia still produces the most highly cited work. AI publications nearly tripled between 2013 and 2023, from about 102,000 to over 242,000. Patents ballooned from 3,833 in 2010 to 122,511 in 2023, with China holding 69.7% of grants. Training compute doubles every five months; training a model like Llama 3.1 405B emits 8,930 tons of carbon, against AlexNet's 0.01 tons in 2012.",
              zh: "近 90% 的重要模型出自產業界(2023 年為 60%),但高被引研究仍以學術界為主。AI 論文在 2013 至 2023 年間近乎三倍,由約 102,000 篇增至逾 242,000 篇。專利由 2010 年的 3,833 件暴增至 2023 年的 122,511 件,其中中國佔 69.7%。訓練算力每五個月翻倍;訓練 Llama 3.1 405B 這類模型排放 8,930 噸碳,而 2012 年的 AlexNet 僅 0.01 噸。" },
        link: { url: "research.html", label: { en: "Full deep dive: Research & Development", zh: "完整章節:研發" } } },
      { q: { en: "2 · Technical Performance", zh: "2 · 技術表現" },
        a: { en: "Benchmarks built in 2023 to be hard were largely solved within a year: SWE-bench went from 4.4% to 71.7%, with GPQA up 48.9 and MMMU up 18.8 percentage points. Open-weight models closed the gap with closed ones from 8.0% to 1.7%. Chinese and US models reached near parity on MMLU (0.3 points apart). Phi-3-mini matched with 3.8B parameters what PaLM needed 540B for two years earlier.",
              zh: "2023 年為了「夠難」而設計的基準,一年內大致被攻克:SWE-bench 由 4.4% 升至 71.7%,GPQA 進步 48.9、MMMU 進步 18.8 個百分點。開放權重模型與閉源的差距由 8.0% 收斂至 1.7%。中美模型在 MMLU 上幾乎持平(差距 0.3 個百分點)。Phi-3-mini 以 38 億參數,達到兩年前 PaLM 需要 5,400 億參數才能達到的水準。" },
        link: { url: "performance.html", label: { en: "Full deep dive: Technical Performance", zh: "完整章節:技術表現" } } },
      { q: { en: "3 · Responsible AI", zh: "3 · 負責任 AI" },
        a: { en: "Reported AI incidents hit a record 233 in 2024, up 56.4% on the year. The data commons is shrinking fast: restricted tokens in actively maintained C4 domains jumped from 5–7% to 20–33%. Foundation model transparency improved from 37% to 58%, but standardized responsible-AI evaluations remain rare among major developers. Models trained to be explicitly unbiased still show implicit bias.",
              zh: "2024 年 AI 事故通報達 233 件創新高,年增 56.4%。資料共享正在快速萎縮:C4 中仍在維護的網域,受限 token 比例由 5–7% 跳升至 20–33%。基礎模型透明度由 37% 升至 58%,但主要開發者之間,標準化的負責任 AI 評估仍然罕見。明確訓練為去偏誤的模型,依然表現出隱性偏誤。" },
        link: { url: "responsible-ai.html", label: { en: "Full deep dive: Responsible AI", zh: "完整章節:負責任 AI" } } },
      { q: { en: "4 · Economy", zh: "4 · 經濟" },
        a: { en: "Global corporate AI investment reached $252.3 billion, with private investment up 44.5%. US private AI investment of $109.1 billion was nearly 12 times China's $9.3 billion and 24 times the UK's $4.5 billion. Organizational AI use jumped to 78% from 55%. China installed 276,300 industrial robots in 2023 — 51.1% of the world total, six times Japan's.",
              zh: "全球企業 AI 投資達 2,523 億美元,其中私人投資成長 44.5%。美國私人 AI 投資 1,091 億美元,近乎中國 93 億美元的 12 倍、英國 45 億美元的 24 倍。組織的 AI 使用率由 55% 躍升至 78%。中國 2023 年安裝 276,300 台工業機器人 — 佔全球 51.1%,是日本的六倍。" },
        link: { url: "economy.html", label: { en: "Full deep dive: Economy", zh: "完整章節:經濟" } } },
      { q: { en: "5 · Science & Medicine", zh: "5 · 科學與醫療" },
        a: { en: "OpenAI's o1 set a new state of the art on MedQA at 96.0%. FDA-approved AI-enabled medical devices reached 223 by 2023, from just six in 2015. AlphaFold's database grew 585% since 2021. Medical AI ethics publications nearly quadrupled, from 288 in 2020 to 1,031 in 2024. Two Nobel Prizes went to AI-driven work — physics for neural networks, chemistry for protein folding.",
              zh: "OpenAI 的 o1 在 MedQA 創下 96.0% 的新標竿。FDA 核准的 AI 醫療器材至 2023 年達 223 件,2015 年僅 6 件。AlphaFold 資料庫自 2021 年起成長 585%。醫療 AI 倫理論文由 2020 年的 288 篇增至 2024 年的 1,031 篇,近乎四倍。兩座諾貝爾獎頒給 AI 相關研究 — 物理獎表彰神經網路,化學獎表彰蛋白質摺疊。" },
        link: { url: "science-medicine.html", label: { en: "Full deep dive: Science & Medicine", zh: "完整章節:科學與醫療" } } },
      { q: { en: "6 · Policy & Governance", zh: "6 · 政策與治理" },
        a: { en: "US state-level AI laws more than doubled, from 49 in 2023 to 131 in 2024. Federal agencies introduced 59 AI-related regulations, up from 25, issued by 42 agencies rather than 21. Across 75 countries, legislative mentions of AI rose 21.3% to 1,889 — a ninefold increase since 2016. Twenty-four states had passed deepfake regulations by 2024.",
              zh: "美國州級 AI 法案由 2023 年的 49 件增至 2024 年的 131 件,倍增有餘。聯邦機關推出 59 條 AI 相關法規(前一年 25 條),發布機關由 21 個增至 42 個。75 個國家的立法提及 AI 共 1,889 次,年增 21.3%,自 2016 年以來成長九倍。至 2024 年已有 24 州通過深偽相關規範。" },
        link: { url: "policy.html", label: { en: "Full deep dive: Policy & Governance", zh: "完整章節:政策與治理" } } },
      { q: { en: "7 · Education", zh: "7 · 教育" },
        a: { en: "Two-thirds of countries now offer or plan to offer K–12 computer science education, twice as many as in 2019, with Africa and Latin America progressing most. US computing bachelor's degrees rose 22% over ten years, and AI master's degrees nearly doubled between 2022 and 2023. But 81% of US CS teachers say AI belongs in foundational CS, while fewer than half feel equipped to teach it.",
              zh: "三分之二的國家已提供或計畫提供 K–12 資訊科學教育,是 2019 年的兩倍,其中非洲與拉丁美洲進步最多。美國資訊類學士學位十年成長 22%,AI 碩士學位在 2022 至 2023 年間近乎倍增。但 81% 的美國資訊科學教師認為 AI 應納入基礎課程,卻不到半數自認具備教學能力。" },
        link: { url: "education.html", label: { en: "Full deep dive: Education", zh: "完整章節:教育" } } },
      { q: { en: "8 · Public Opinion", zh: "8 · 民意" },
        a: { en: "Of the 26 nations surveyed in both 2022 and 2024, 18 grew more positive; globally the share seeing AI as more beneficial than harmful rose from 52% to 55%. Two-thirds now expect AI to significantly affect daily life within three to five years. But confidence that AI companies protect personal data fell from 50% to 47%, and regional divides persist — China 83% against the Netherlands 36%.",
              zh: "2022 與 2024 年皆受調查的 26 國中,有 18 國轉趨正面;全球認為 AI 利大於弊的比例由 52% 升至 55%。三分之二的人預期 AI 會在三到五年內顯著影響日常生活。但對 AI 企業會保護個資的信心由 50% 降至 47%,區域鴻溝也依舊 — 中國 83%,荷蘭僅 36%。" },
        link: { url: "public-opinion.html", label: { en: "Full deep dive: Public Opinion", zh: "完整章節:民意" } } }
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

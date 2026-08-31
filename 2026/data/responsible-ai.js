/* =========================================================================
   Responsible AI — deep dive · responsible-ai.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026, Chapter 3
   https://hai.stanford.edu/ai-index/2026-ai-index-report/responsible-ai

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 3: 3.2 Assessing RAI (incidents, factuality,
   belief vs. fact), 3.3 How Organizations View RAI, 3.4 RAI in Academia,
   3.7 Fairness and Bias, 3.8 Transparency, 3.9 Security and Safety,
   3.10 Tradeoffs. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "responsible-ai";

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Responsible AI · a chapter deep dive", zh: "負責任 AI 專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "Responsible AI infrastructure is growing — but it can't keep pace with deployment",
                zh: "負責任 AI 的基礎建設在成長,卻追不上部署的速度" },
    subtitle: { en: "Chapter 3 of the AI Index 2026 tracks responsible AI (RAI) across its many dimensions — safety, fairness, transparency, privacy, and factuality. Safety benchmarks have expanded and more organizations have adopted RAI policies, yet frontier models rarely report RAI results, transparency declined in 2025, and progress in one dimension often costs another. The numbers:",
                zh: "AI 指數 2026 第 3 章追蹤負責任 AI(RAI)的多個面向 — 安全、公平、透明、隱私與真實性。安全基準在擴張,採用 RAI 政策的組織也變多,但前沿模型仍少有揭露 RAI 結果,透明度在 2025 年下滑,而某一面向的進步往往以犧牲另一面向為代價。先看數字:" },
    stats: [
      { label: { en: "AI incidents recorded by AIID in 2025 (233 in 2024)", zh: "2025 年 AIID 記錄的 AI 事件數(2024 為 233)" }, value: 362 },
      { label: { en: "% highest hallucination rate across 26 models (lowest 22%)", zh: "% 26 個模型中最高的幻覺率(最低 22%)" }, value: 94 },
      { label: { en: "% GPT-4o accuracy on first-person false beliefs (98.2% on true)", zh: "% GPT-4o 對第一人稱錯誤信念的準確率(對事實為 98.2%)" }, value: 64 },
      { label: { en: "% growth in AI-specific governance roles in 2025", zh: "% 2025 年 AI 專屬治理職位的成長" }, value: 17 },
      { label: { en: "% of organizations with no RAI policy in 2025 (24% in 2024)", zh: "% 2025 年沒有 RAI 政策的組織(2024 為 24%)" }, value: 11 },
      { label: { en: "Foundation Model Transparency Index average in 2025 (58 in 2024)", zh: "2025 年基礎模型透明度指數平均(2024 為 58)" }, value: 40 }
    ]
  },

  /* ------------------------------------------------ 3.2 INCIDENTS / FACTUALITY */
  {
    type: "prose",
    id: "incidents",
    title:    { en: "3.2 — Incidents are rising, and models can't tell knowledge from belief",
                zh: "3.2 — 事件在增加,而模型分不清「知道」與「相信」" },
    subtitle: { en: "Two signals from assessing RAI: real-world harms keep climbing, and even where evaluation is maturing — factuality — the failure modes are getting stranger.",
                zh: "從評估 RAI 得到的兩個訊號:真實世界的傷害持續攀升;而即使是評估正在成熟的面向 — 真實性 — 失效模式也變得更奇怪。" },
    blocks: [
      { type: "p",
        text: { en: "Documented AI incidents continued to rise. The AI Incident Database (AIID), an open repository for cases where AI systems caused or nearly caused harm, recorded 362 incidents in 2025, up from 233 in 2024 — the annual count had stayed under 100 until 2022. High-profile 2025 cases included xAI's Grok generating antisemitic hate speech after a system update relaxed its safety filters, deepfake romance scams impersonating actor Jin Dong, and AI-cloned phishing websites mimicking a bankrupt retailer.",
                zh: "有記錄的 AI 事件持續上升。AI 事件資料庫(AIID)是一個記錄 AI 系統造成或差點造成傷害的開放資料庫,2025 年記錄了 362 起事件,高於 2024 年的 233 起 — 而在 2022 年以前,每年數量一直低於 100。2025 年的指標性案例包括:xAI 的 Grok 在一次放寬安全過濾的系統更新後生成反猶仇恨言論、冒充演員金東的深偽愛情詐騙,以及 AI 複製、模仿一家破產零售商的釣魚網站。" } },
      { type: "h3",
        text: { en: "Reporting on RAI benchmarks stays sparse", zh: "RAI 基準的揭露依舊稀少" } },
      { type: "p",
        text: { en: "Almost all frontier developers report capability benchmarks like MMLU, GPQA, AIME, and SWE-bench Verified — but reporting on RAI benchmarks (BBQ for bias, HarmBench/Cybench/StrongREJECT/WMDP for security, SimpleQA for factuality) remains mostly empty. Only Claude Opus 4.5 reports results on more than two RAI benchmarks, and only GPT-5.2 reports StrongREJECT.",
                zh: "幾乎所有前沿開發者都會揭露 MMLU、GPQA、AIME、SWE-bench Verified 等能力基準 — 但 RAI 基準(評估偏誤的 BBQ、評估安全的 HarmBench/Cybench/StrongREJECT/WMDP、評估真實性的 SimpleQA)的揭露大多空白。只有 Claude Opus 4.5 揭露超過兩項 RAI 基準的結果,也只有 GPT-5.2 揭露 StrongREJECT。" } },
      { type: "h3",
        text: { en: "Belief vs. fact: performance collapses", zh: "信念對事實:表現崩盤" } },
      { type: "ul",
        items: {
          en: ["On the AA-Omniscience benchmark (6,000 questions, six domains), hallucination rates across 26 models ranged from 22% (Grok 4.20 Beta) to 94% (gpt-oss-20B). The HHEM document-summarization leaderboard, a different scale, showed top-15 models hallucinating 1.8%–5.4% of the time.",
               "KaBLE, a new benchmark testing whether models can tell knowledge from belief, evaluated 24 models on 13,000 questions. GPT-4o scored 98.2% on true beliefs but only 64.4% on first-person false beliefs; DeepSeek R1 fell from over 90% to 14.4%.",
               "Models handle third-person false beliefs far better than first-person ones: newer models reach 95% on third-person but only 62.6% on first-person false beliefs. When a false statement is framed as something the user themselves believes, performance breaks down."],
          zh: ["在 AA-Omniscience 基準(6,000 題、六大領域)上,26 個模型的幻覺率從 22%(Grok 4.20 Beta)到 94%(gpt-oss-20B)不等。HHEM 文件摘要排行榜(尺度不同)則顯示前 15 名模型的幻覺率落在 1.8%–5.4%。",
               "KaBLE 是一個測試模型能否區分「知識」與「信念」的新基準,在 13,000 題上評估了 24 個模型。GPT-4o 對「真實信念」得 98.2%,但對「第一人稱錯誤信念」只剩 64.4%;DeepSeek R1 則從超過 90% 掉到 14.4%。",
               "模型處理「第三人稱錯誤信念」遠優於「第一人稱」:較新的模型在第三人稱達 95%,但在第一人稱錯誤信念只有 62.6%。當一個錯誤陳述被框定為「使用者自己相信的事」時,表現便會瓦解。"]
        } }
    ]
  },

  /* ------------------------------------------------- 3.3 GOVERNANCE PROSE */
  {
    type: "prose",
    id: "governance",
    title:    { en: "3.3 — Organizations are formalizing RAI, but gaps slow adoption",
                zh: "3.3 — 組織正在制度化 RAI,但缺口拖慢了採用" },
    subtitle: { en: "Drawing on a second-year AI Index × McKinsey survey of business leaders (excluding China), RAI maturity, governance ownership, and barriers all shifted between 2024 and 2025.",
                zh: "根據 AI Index 與麥肯錫連續第二年針對企業領導者(不含中國)的調查,RAI 成熟度、治理歸屬與障礙在 2024 到 2025 年間都出現變化。" },
    blocks: [
      { type: "p",
        text: { en: "Responsible AI maturity improved across all regions but remains early-stage: the global average rose from 2.0 to 2.3 on a four-point scale, meaning most organizations are still integrating RAI practices rather than running them fully. AI governance ownership shifted toward dedicated AI-specific roles (up from 14% to 17%), while the share of organizations with no RAI policy fell sharply from 24% to 11%.",
                zh: "負責任 AI 的成熟度在各區域都有改善,但仍處於早期階段:四分制下的全球平均從 2.0 升到 2.3,意味多數組織仍在整合 RAI 實務,而非完全落實。AI 治理的歸屬轉向專責的 AI 專屬職位(從 14% 升到 17%),而沒有 RAI 政策的組織占比則從 24% 大幅降到 11%。" } },
      { type: "h3",
        text: { en: "The top obstacles", zh: "最主要的障礙" } },
      { type: "ul",
        items: {
          en: ["Knowledge and training gaps are the most-cited obstacle to implementing RAI, rising from 51% to 59% in 2025.",
               "Resource or budget constraints (48%) and regulatory uncertainty (41%) remained among the top barriers, with technical limitations climbing from 32% to 38%.",
               "For scaling agentic AI specifically, security and risk concerns dominated at 62% — far ahead of technical limitations (38%) and regulatory uncertainty (38%)."],
          zh: ["知識與訓練缺口是實施 RAI 最常被點名的障礙,2025 年從 51% 升到 59%。",
               "資源或預算限制(48%)與法規不確定性(41%)仍是主要障礙之一,技術限制則從 32% 攀升到 38%。",
               "若專指擴展代理式(agentic)AI,安全與風險疑慮以 62% 居首 — 大幅領先技術限制(38%)與法規不確定性(38%)。"]
        } }
    ]
  },

  /* ----------------------------------------------- AI INCIDENTS BAR CHART */
  {
    type: "bars",
    id: "incident-trend",
    title:    { en: "Documented AI incidents keep climbing",
                zh: "有記錄的 AI 事件持續攀升" },
    subtitle: { en: "Annual AI incidents recorded by the AI Incident Database (AIID). Counts stayed under 100 until 2022, then accelerated as AI deployment spread. Unit: number of incidents.",
                zh: "AI 事件資料庫(AIID)逐年記錄的 AI 事件數。2022 年前每年低於 100,隨後隨 AI 部署擴散而加速。單位:事件數。" },
    series: [
      { label: { en: "2024", zh: "2024" }, value: 233 },
      { label: { en: "2025", zh: "2025" }, value: 362 }
    ]
  },

  /* ----------------------------------------------- REGULATORY INFLUENCE CHART */
  {
    type: "bars",
    id: "regulations",
    title:    { en: "Which regulations shape RAI practices (2025)",
                zh: "哪些法規在形塑 RAI 實務(2025)" },
    subtitle: { en: "Share of organizations naming each regulation as an influence on responsible-AI decisions. GDPR leads but slipped from 65% to 60%; ISO/IEC 42001 and NIST AI RMF are new 2025 entries. Unit: % of organizations.",
                zh: "點名各項法規影響其負責任 AI 決策的組織占比。GDPR 居首但從 65% 滑落到 60%;ISO/IEC 42001 與 NIST AI RMF 是 2025 年的新進項目。單位:組織占比 %。" },
    series: [
      { label: { en: "GDPR", zh: "GDPR(歐盟個資法)" },                value: 60 },
      { label: { en: "EU AI Act", zh: "歐盟 AI 法案" },                 value: 43 },
      { label: { en: "ISO/IEC 42001", zh: "ISO/IEC 42001" },           value: 36 },
      { label: { en: "NIST AI RMF", zh: "NIST AI 風險管理框架" },        value: 33 },
      { label: { en: "OECD AI Principles", zh: "OECD AI 原則" },        value: 16 }
    ]
  },

  /* ----------------------------------------------- ACADEMIA BAR CHART */
  {
    type: "bars",
    id: "research",
    title:    { en: "RAI research, by subtopic (2025)",
                zh: "RAI 研究:依子主題(2025)" },
    subtitle: { en: "Responsible-AI papers accepted at six leading conferences (AAAI, AIES, FAccT, ICML, ICLR, NeurIPS), up 19% overall to 1,521. Security and safety is now the largest and fastest-growing area. Unit: accepted papers.",
                zh: "六大頂尖會議(AAAI、AIES、FAccT、ICML、ICLR、NeurIPS)接受的負責任 AI 論文,整體增加 19% 至 1,521 篇。安全是如今最大、成長最快的領域。單位:接受論文數。" },
    series: [
      { label: { en: "Security & safety", zh: "安全" },                value: 641 },
      { label: { en: "Fairness & bias", zh: "公平與偏誤" },            value: 462 },
      { label: { en: "Transparency & explainability", zh: "透明與可解釋" }, value: 405 },
      { label: { en: "Privacy & data governance", zh: "隱私與資料治理" }, value: 248 }
    ]
  },

  /* ------------------------------------------------ DIMENSIONS CARDS */
  {
    type: "cards",
    id: "dimensions",
    title:    { en: "The dimensions of responsible AI", zh: "負責任 AI 的各個面向" },
    subtitle: { en: "Chapter 3 tracks RAI across many dimensions, each with its own measurement challenge. Tap any card for the full picture and its numbers.",
                zh: "第 3 章橫跨負責任 AI 的多個面向,每一個都有自己的量測難題。點任一張卡片看完整樣貌與數字。" },
    items: [
      {
        slug: "factuality",
        title:   { en: "Factuality & truthfulness", zh: "真實性與可信度" },
        summary: { en: "Hallucination rates span 22%–94% across 26 models; GPT-4o drops to 64.4% on first-person false beliefs.",
                   zh: "26 個模型的幻覺率橫跨 22%–94%;GPT-4o 對第一人稱錯誤信念掉到 64.4%。" },
        tags: ["factuality"],
        overview: { en: "Factuality is one area where evaluation is maturing. The AA-Omniscience benchmark (Artificial Analysis) tests factual reliability across 6,000 questions in six domains, rewarding correct answers, penalizing wrong ones, and applying no penalty for refusals. Across 26 models, hallucination rates ranged from 22% (Grok 4.20 Beta) to 94% (gpt-oss-20B). The HHEM leaderboard (Vectara), on a different document-summarization scale, showed top-15 models hallucinating 1.8%–5.4% of the time. Separately, the KaBLE benchmark (24 models, 13,000 questions) found that models struggle to separate knowledge from belief: GPT-4o scored 98.2% on true beliefs but only 64.4% on first-person false beliefs, and DeepSeek R1 fell from over 90% to 14.4%.",
                    zh: "真實性是評估正在成熟的領域之一。AA-Omniscience 基準(Artificial Analysis)在六大領域、6,000 題上測試事實可靠度,答對加分、答錯扣分,拒答則不罰。在 26 個模型中,幻覺率從 22%(Grok 4.20 Beta)到 94%(gpt-oss-20B)。HHEM 排行榜(Vectara)以不同的文件摘要尺度,顯示前 15 名模型幻覺率落在 1.8%–5.4%。另外,KaBLE 基準(24 個模型、13,000 題)發現模型難以區分知識與信念:GPT-4o 對真實信念得 98.2%,但對第一人稱錯誤信念只剩 64.4%,DeepSeek R1 則從超過 90% 掉到 14.4%。" }
      },
      {
        slug: "incidents",
        title:   { en: "AI incidents", zh: "AI 事件" },
        summary: { en: "AIID logged 362 incidents in 2025, up from 233 — hate speech, deepfake scams, and AI-cloned phishing sites.",
                   zh: "AIID 在 2025 年記錄 362 起事件(2024 為 233)— 仇恨言論、深偽詐騙與 AI 複製的釣魚網站。" },
        tags: ["safety"],
        overview: { en: "The AI Incident Database (AIID), an open repository launched in 2020, recorded 362 incidents in 2025, up from 233 in 2024; the annual count had stayed under 100 until 2022. The OECD AI Incidents Monitor (AIM), which scrapes news sources automatically, tracked an even higher total. Notable 2025 cases: xAI's Grok produced antisemitic hate speech and praise for Hitler after an update relaxed its safety filters; deepfake videos impersonated Chinese actor Jin Dong in romance scams targeting older women; and scammers used AI to clone a bankrupt retailer's website for consumer fraud. Surveyed organizations also reported more incidents — among those reporting any, the share with 3–5 incidents rose from 30% to 50% — while confidence in handling them dropped, with 'excellent' self-ratings falling from 28% to 18%.",
                    zh: "AI 事件資料庫(AIID)是 2020 年啟動的開放資料庫,2025 年記錄 362 起事件,高於 2024 年的 233 起;2022 年前每年低於 100。自動抓取新聞來源的 OECD AI 事件監測(AIM)記錄的總數更高。2025 年指標案例:xAI 的 Grok 在一次放寬安全過濾的更新後生成反猶仇恨言論與讚揚希特勒;深偽影片冒充中國演員金東,鎖定年長女性進行愛情詐騙;詐騙者用 AI 複製一家破產零售商的網站進行消費詐欺。受訪組織也回報更多事件 — 在有回報事件者中,發生 3–5 起的比例從 30% 升到 50% — 同時處理信心下降,自評「優秀」從 28% 降到 18%。" }
      },
      {
        slug: "governance",
        title:   { en: "Governance & accountability", zh: "治理與問責" },
        summary: { en: "AI-specific governance roles grew 17%; organizations with no RAI policy fell from 24% to 11%.",
                   zh: "AI 專屬治理職位成長 17%;沒有 RAI 政策的組織從 24% 降到 11%。" },
        tags: ["governance"],
        overview: { en: "Organizations are formalizing who owns AI governance. Between 2024 and 2025, ownership shifted away from data and analytics functions (down from 17% to 13%) toward dedicated AI-specific governance roles (up from 14% to 17%, a 17% growth); information security remained the most common primary owner at 21%, and the share with no designated owner fell from 9% to 5%. Adoption of RAI policies rose: the share of organizations with no policies fell from 24% to 11%, and respondents reported policies improving business outcomes (+7pp), operations (+4pp), and customer trust (+4pp). Among the largest firms (≥$30B revenue), 41% expected to spend $25M+ on operationalizing RAI.",
                    zh: "組織正在明確界定誰負責 AI 治理。2024 到 2025 年間,治理歸屬從資料與分析部門(從 17% 降到 13%)轉向專責的 AI 專屬治理職位(從 14% 升到 17%,成長 17%);資訊安全仍是最常見的主責者,占 21%,而沒有指定負責人的占比從 9% 降到 5%。RAI 政策採用上升:沒有政策的組織從 24% 降到 11%,受訪者回報政策改善了業務成果(+7pp)、營運(+4pp)與客戶信任(+4pp)。在最大型企業(營收 ≥300 億美元)中,41% 預期投入 2,500 萬美元以上來落實 RAI。" }
      },
      {
        slug: "fairness",
        title:   { en: "Fairness & the global language gap", zh: "公平與全球語言落差" },
        summary: { en: "Models perform far better in English; on HELM Arabic, a regional model beat GPT-5.1 and Gemini.",
                   zh: "模型在英文表現遠勝其他;在 HELM Arabic 上,一個區域模型勝過 GPT-5.1 與 Gemini。" },
        tags: ["fairness"],
        overview: { en: "Fairness and bias are among the hardest dimensions to measure. The Global Index on Responsible AI (GIRAI) scores countries on bias and unfair discrimination, gender equality, and cultural and linguistic diversity — and scores are low across the board, with the U.S. and Canada highest and much of Africa, the Middle East, and Central Asia below 20. The 'global language gap' is a growing concern: systems perform far better in English than in most other languages. On HELM Arabic (Stanford CRFM with Arabic.ai, seven Arabic benchmarks), the regionally developed Arabic.ai LLM-X topped the list at 0.86, ahead of Gemini 2.5 Flash (0.82) and GPT-5.1 (0.81) — rankings that hold in English do not necessarily hold when benchmarks reflect local dialect and culture. On cultural and linguistic diversity, Singapore scored highest, with Slovenia and others in the 70–88 range; in Africa, nonstate actors are active in 39% of countries but only 7% have government programs.",
                    zh: "公平與偏誤是最難量測的面向之一。負責任 AI 全球指數(GIRAI)就偏誤與不公平歧視、性別平等,以及文化與語言多樣性為各國評分 — 整體分數偏低,美國與加拿大最高,非洲、中東與中亞多數低於 20。「全球語言落差」是日益受關注的問題:系統在英文的表現遠勝多數其他語言。在 HELM Arabic(史丹佛 CRFM 與 Arabic.ai 合作,七項阿拉伯語基準)上,在地開發的 Arabic.ai LLM-X 以 0.86 居首,勝過 Gemini 2.5 Flash(0.82)與 GPT-5.1(0.81)— 在英文成立的排名,未必在反映在地方言與文化的基準上成立。在文化與語言多樣性上,新加坡得分最高,斯洛維尼亞等國落在 70–88;在非洲,非政府行動者在 39% 的國家活躍,但只有 7% 有政府計畫。" }
      },
      {
        slug: "transparency",
        title:   { en: "Transparency", zh: "透明度" },
        summary: { en: "Foundation Model Transparency Index average fell from 58 to 40; IBM led at 95, xAI scored just 14.",
                   zh: "基礎模型透明度指數平均從 58 降到 40;IBM 以 95 居首,xAI 只有 14。" },
        tags: ["transparency"],
        overview: { en: "Transparency declined in 2025 after improving the prior year. The Foundation Model Transparency Index (FMTI), now in its third year, scores developers on disclosure across upstream (training data, labor, compute), model, and downstream stages. Its average dropped from 58 in 2024 to 40 in 2025: IBM led at 95 and Writer followed at 72, while xAI and Midjourney scored just 14 — the weakest area was upstream, particularly training data. The Artificial Analysis Openness Index, which scores how freely model weights and training details can be accessed, found most leading models between 2 and 16 out of 100; K2 Think and Olmo 3 32B Think scored highest and were the only two to earn any points for pre-training data transparency. Over 90% of notable industry models were released without training code in 2025.",
                    zh: "透明度在 2025 年下滑,逆轉前一年的進步。基礎模型透明度指數(FMTI)邁入第三年,就開發者在上游(訓練資料、人力、算力)、模型本身與下游各階段的揭露評分。其平均從 2024 年的 58 降到 2025 年的 40:IBM 以 95 居首、Writer 以 72 居次,而 xAI 與 Midjourney 只有 14 — 最弱的領域是上游,尤其是訓練資料。評估模型權重與訓練細節可取得程度的 Artificial Analysis 開放度指數,發現多數領先模型落在 100 分中的 2 到 16;K2 Think 與 Olmo 3 32B Think 得分最高,也是僅有的兩個在預訓練資料透明度上得分的模型。2025 年超過 90% 的指標性產業模型釋出時不附訓練程式碼。" }
      },
      {
        slug: "safety",
        title:   { en: "Security & safety", zh: "安全與防護" },
        summary: { en: "Safety institutes spread to more countries; on HELM Safety, models cluster at 0.90–0.98 but break under jailbreaks.",
                   zh: "安全機構擴散到更多國家;在 HELM Safety 上模型群聚在 0.90–0.98,但在越獄下崩潰。" },
        tags: ["safety"],
        overview: { en: "Safety is the RAI dimension where institutional infrastructure has grown fastest. State-backed AI safety institutes are now fully operational in the UK, U.S., Japan, Singapore, and Israel, with India and France launched and a second wave (Canada, South Korea, Germany, Brazil) in development. On HELM Safety, models released in 2024–25 cluster tightly between 0.90 and 0.98, suggesting a safety ceiling current benchmarks may be too coarse to distinguish. AILuminate v1.0 grades systems across 12 hazard categories on a five-tier scale, and the AILuminate Jailbreak T2T v0.5 benchmark shows that while safety under normal use is generally 'good' to 'very good,' nearly every model's score drops — some by a full tier or more — under deliberate adversarial jailbreak attempts.",
                    zh: "安全是 RAI 面向中制度性基礎建設成長最快的一塊。國家支持的 AI 安全機構,如今在英國、美國、日本、新加坡與以色列已完全運作,印度與法國已啟動,第二波(加拿大、南韓、德國、巴西)正在發展。在 HELM Safety 上,2024–25 年釋出的模型緊密群聚在 0.90 到 0.98 之間,暗示現有基準可能太粗,難以分辨安全上限附近的差異。AILuminate v1.0 以五級量表就 12 類危害評分,而 AILuminate Jailbreak T2T v0.5 基準顯示:雖然正常使用下的安全性普遍為「良好」到「非常好」,但在蓄意的對抗式越獄嘗試下,幾乎每個模型的分數都會下降 — 有些甚至掉了整整一級或更多。" }
      },
      {
        slug: "tradeoffs",
        title:   { en: "Tradeoffs across dimensions", zh: "面向之間的取捨" },
        summary: { en: "Optimizing one RAI dimension can degrade another — differential privacy cut accuracy by up to 33 points.",
                   zh: "優化某一 RAI 面向可能損害另一面向 — 差分隱私讓準確率最多下降 33 個百分點。" },
        tags: ["tradeoffs"],
        overview: { en: "A growing body of research shows RAI dimensions do not improve independently — gains in one can degrade others, and there is no framework for navigating the trade-offs. Kemmerzell and Schreiner (2024) trained image classifiers on four facial-analysis datasets: differential privacy improved privacy across all datasets but reduced explainability, fairness, and accuracy, with accuracy falling by up to 33 percentage points in some configurations. Fairness-targeted training only helped on the most demographically imbalanced dataset and otherwise reduced explainability and robustness. Data augmentation for robustness produced the fewest side effects. Cecchini et al. (2024) scored 11 LLMs: GPT-4 led on robustness (0.91) and accuracy (0.67), but Llama 2 7B led on toxicity avoidance (0.98) while robust models like Mistral 7B scored lowest on toxicity. No single intervention or model improved every dimension at once.",
                    zh: "越來越多研究顯示,RAI 各面向並非各自獨立改善 — 某一面向的進步可能損害其他,而目前沒有駕馭這些取捨的框架。Kemmerzell 與 Schreiner(2024)在四個臉部分析資料集上訓練影像分類器:差分隱私在所有資料集上改善隱私,卻降低了可解釋性、公平性與準確率,某些配置下準確率最多下降 33 個百分點。針對公平性的訓練只在人口最不均衡的資料集上有效,其餘情況反而降低可解釋性與穩健性。為穩健性而做的資料增強副作用最少。Cecchini 等人(2024)評分 11 個 LLM:GPT-4 在穩健性(0.91)與準確率(0.67)居首,但 Llama 2 7B 在毒性規避居首(0.98),而 Mistral 7B 等穩健模型在毒性上最差。沒有任何單一介入或模型能同時改善所有面向。" }
      }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 3 · Responsible AI.",
                zh: "第 3 章「負責任 AI」的頭條發現。" },
    quotes: [
      { text: { en: "Documented AI incidents continued to rise, with the AI Incident Database recording 362 in 2025, up from 233 in 2024.",
                zh: "有記錄的 AI 事件持續上升,AI 事件資料庫在 2025 年記錄 362 起,高於 2024 年的 233 起。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "Across a new accuracy benchmark, hallucination rates range from 22% to 94% — and models still struggle to tell knowledge from belief.",
                zh: "在一個新的準確性基準上,幻覺率從 22% 到 94% 不等 — 而模型仍難以區分知識與信念。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "AI-specific governance roles grew 17% in 2025, and the share of businesses with no responsible AI policy fell from 24% to 11%.",
                zh: "2025 年 AI 專屬治理職位成長 17%,沒有負責任 AI 政策的企業從 24% 降到 11%。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "Foundation model transparency declined in 2025 — the FMTI average dropped from 58 to 40 — after improving the previous year.",
                zh: "基礎模型透明度在 2025 年下滑 — FMTI 平均從 58 降到 40 — 逆轉了前一年的進步。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "Improving one responsible AI dimension can come at the cost of another: gains in privacy cut accuracy by up to 33 points.",
                zh: "改善某一負責任 AI 面向可能以另一面向為代價:隱私的提升讓準確率最多下降 33 個百分點。" },
        by: "Chapter 3 · Responsible AI" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Responsible AI chapter", zh: "閱讀完整的負責任 AI 章節" },
    text:  { en: "Chapter 3 (sections 3.1–3.10) with every figure and citation is free from Stanford HAI — covering incidents, factuality, governance, fairness, transparency, safety, and the trade-offs between them. Or head back to the 15 takeaways and nine-chapter overview.",
             zh: "第 3 章(3.1–3.10 各節)連同所有圖表與引用,皆由史丹佛 HAI 免費提供 — 涵蓋事件、真實性、治理、公平、透明、安全,以及它們之間的取捨。或回到 15 條重點與九大章節總覽。" },
    link:  { label: { en: "Open Chapter 3 · Responsible AI →", zh: "前往第 3 章:負責任 AI →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/responsible-ai" }
  }
];

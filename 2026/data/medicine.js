/* =========================================================================
   AI in Medicine — deep dive · medicine.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026, Chapter 6
   https://hai.stanford.edu/ai-index/2026-ai-index-report/medicine

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 6: 6.1 The Central Dogma (molecular biology
   models), 6.2 Clinical Applications, 6.3 Patient Engagement, 6.4 Ethics.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "medicine";

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Medicine · a chapter deep dive", zh: "醫療專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "AI is rewriting medicine — but the evidence is still catching up",
                zh: "AI 正在改寫醫療,但證據還在追趕" },
    subtitle: { en: "Chapter 6 of the AI Index 2026 traces AI across four layers of medicine — from molecular biology models, through the clinic, to patients and ethics. Capability is racing ahead; rigorous validation is not. The numbers:",
                zh: "AI 指數 2026 第 6 章橫跨醫療的四個層次 — 從分子生物學模型、臨床現場,到病人與倫理。能力一路狂奔,嚴謹驗證卻沒跟上。先看數字:" },
    stats: [
      { label: { en: "FDA AI medical devices authorized in 2025", zh: "2025 年 FDA 核准的 AI 醫材數" }, value: 258 },
      { label: { en: "cumulative FDA AI/ML devices (passed 1,000 in 2024)", zh: "累計 FDA 核准 AI/ML 醫材(2024 破千)" }, value: 1357 },
      { label: { en: "% less note-writing time (Sharp HealthCare)", zh: "% 病歷書寫時間減少(Sharp 醫療系統)" }, value: 83 },
      { label: { en: "% growth in protein-AI research, 2024→2025", zh: "% 蛋白質 AI 研究成長(2024→2025)" }, value: 71 },
      { label: { en: "prospective imaging-AI trials in 2025 (417 in 2024)", zh: "2025 年影像 AI 前瞻試驗(2024 為 417)" }, value: 536 },
      { label: { en: "% of health searches triggering an AI Overview", zh: "% 健康搜尋觸發 Google AI 概覽" }, value: 92 }
    ]
  },

  /* ----------------------------------------------- 6.1 MOLECULAR BIOLOGY */
  {
    type: "prose",
    id: "dogma",
    title:    { en: "6.1 — Molecular biology: smaller models are winning",
                zh: "6.1 — 分子生物學:小模型正在贏" },
    subtitle: { en: "AI models for biology span the central dogma — gene sequence → protein structure → therapeutic design. In 2025 the field pivoted from scaling size to efficiency and specialization.",
                zh: "生物學的 AI 模型橫跨「中心法則」 — 基因序列 → 蛋白質結構 → 藥物設計。2025 年,這個領域從「把模型做大」轉向「做得更有效率、更專精」。" },
    blocks: [
      { type: "p",
        text: { en: "AI-driven protein research grew about 71% between 2024 and 2025. Protein–drug interactions led, rising from 49.9% to 54.4% of papers, while protein-structure prediction's share fell from 28.7% to 23.9%. The headline trend, though, is that smaller, specialized models are now beating much larger ones.",
                zh: "AI 驅動的蛋白質研究在 2024 到 2025 年間成長約 71%。蛋白質—藥物交互作用居首,佔比從 49.9% 升到 54.4%;蛋白質結構預測的佔比則從 28.7% 降到 23.9%。但真正的頭條趨勢是:更小、更專精的模型,如今正在打敗大得多的模型。" } },
      { type: "h3",
        text: { en: "Smaller beats bigger", zh: "小贏過大" } },
      { type: "ul",
        items: {
          en: ["MSAPairformer, a 111-million-parameter protein language model, surpassed previous state-of-the-art methods on the ProteinGym benchmark — at a fraction of the training and parameter budget. 2024's 98-billion-parameter ESM3 gave way to efficiency-first successors.",
               "GPN-Star, a 200-million-parameter genomics model, outperformed Evo 2 (40 billion parameters) on multiple variant-effect prediction tasks — a model nearly 200× larger.",
               "After AlphaFold 3, cofolding models converged on a similar parameter scale rather than continuing to grow. AlphaFold 3's FoldBench performance has yet to be significantly surpassed, even by larger models released since."],
          zh: ["MSAPairformer,一個 1.11 億參數的蛋白質語言模型,在 ProteinGym 基準上超越先前的最佳方法 — 而且只用了一小部分的訓練與參數預算。2024 年的 980 億參數 ESM3,讓位給以效率為先的後繼者。",
               "GPN-Star,一個 2 億參數的基因體模型,在多項變異效應預測任務上勝過 Evo 2(400 億參數)— 一個參數近 200 倍大的模型。",
               "在 AlphaFold 3 之後,共摺疊(cofolding)模型趨向相近的參數規模,而非繼續變大。AlphaFold 3 在 FoldBench 上的表現,至今仍未被顯著超越,即使後來釋出了更大的模型。"]
        } },
      { type: "h3",
        text: { en: "Virtual cells, and a data bottleneck", zh: "虛擬細胞,與資料瓶頸" } },
      { type: "ul",
        items: {
          en: ["Virtual-cell models emerged as a 2025 frontier: Evo 2 (Arc Institute), STATE, and DeepMind's AlphaGenome aim to predict cellular responses to drugs and genetic perturbations without wet-lab experiments — though current systems still require experimental validation.",
               "Development is now bottlenecked on data, not architecture. Training sets expanded from hundreds of thousands to tens of millions of entries via distilled AI-predicted structures and combined experimental sources; Meta's OMol25 alone holds 100M+ quantum-mechanical calculations.",
               "Biomni, a general-purpose biomedical AI agent from Stanford, mapped 25 subfields with 150 specialized tools, 105 software packages, and 59 databases — pairing digital reasoning with physical lab validation."],
          zh: ["虛擬細胞模型成為 2025 年的新前沿:Evo 2(Arc Institute)、STATE 與 DeepMind 的 AlphaGenome,目標是在不做濕實驗的情況下,預測細胞對藥物與基因擾動的反應 — 不過現行系統仍需實驗驗證。",
               "如今卡住開發的是資料,而非架構。訓練集透過蒸餾的 AI 預測結構與整合的實驗資料來源,從數十萬筆擴大到數千萬筆;光是 Meta 的 OMol25 就收錄超過 1 億筆量子力學計算。",
               "Biomni,史丹佛開發的通用生醫 AI 代理,橫跨 25 個子領域,整合 150 個專用工具、105 個軟體套件與 59 個資料庫 — 把數位推理與實體實驗室驗證結合起來。"]
        } }
    ]
  },

  /* ---------------------------------------------- multimodal pubs chart */
  {
    type: "bars",
    id: "multimodal",
    title:    { en: "Multimodal biomedical AI is exploding",
                zh: "多模態生醫 AI 正在爆發" },
    subtitle: { en: "Publications on multimodal foundation models for biomedical discovery, by year. Vision–language models (image + text) and vision–omics models (imaging + genomics) led the surge.",
                zh: "多模態生醫探索基礎模型的逐年發表數。視覺—語言模型(影像 + 文字)與視覺—體學模型(影像 + 基因/轉錄體)帶動這波成長。" },
    series: [
      { label: { en: "2021", zh: "2021" }, value: 2 },
      { label: { en: "2022", zh: "2022" }, value: 16 },
      { label: { en: "2023", zh: "2023" }, value: 171 },
      { label: { en: "2024", zh: "2024" }, value: 314 },
      { label: { en: "2025", zh: "2025" }, value: 462 }
    ]
  },

  /* ------------------------------------------------ 6.2 CLINICAL CARDS */
  {
    type: "cards",
    id: "clinical",
    title:    { en: "6.2 — Inside the clinic", zh: "6.2 — 走進臨床現場" },
    subtitle: { en: "Where molecular models meet patients. Tap any card for the full trend and its numbers.",
                zh: "分子模型在這裡遇上病人。點任一張卡片看完整趨勢與數字。" },
    items: [
      {
        slug: "imaging-data-gap",
        title:   { en: "The imaging data gap", zh: "影像 AI 的資料鴻溝" },
        summary: { en: "Medical-imaging training data is still ~100× smaller than nonmedical AI's.",
                   zh: "醫療影像的訓練資料量,仍比一般 AI 小約 100 倍。" },
        tags: ["imaging"],
        overview: { en: "Training data for medical-imaging AI remains roughly 100× smaller in raw sample count than for nonmedical AI. MAIRA-2 (radiology) trained on ~1.4 million chest radiographs, versus DINOv3 on 1.7 billion natural images; RadFM on ~16 million scans, versus OpenCLIP on LAION-5B (~5.85 billion image–text pairs). Vision–language models expanded beyond radiology into pathology, dermatology, ophthalmology, and cardiology. Merlin showed that a capable CT foundation model can be trained on a single 40GB GPU by leveraging radiology reports and ICD codes — making advanced medical AI accessible even in resource-constrained settings.",
                    zh: "醫療影像 AI 的訓練資料,以原始樣本數計算,仍比一般 AI 小約 100 倍。MAIRA-2(放射科)用約 140 萬張胸部 X 光訓練,而 DINOv3 用了 17 億張自然影像;RadFM 用約 1,600 萬張掃描,而 OpenCLIP 用 LAION-5B(約 58.5 億組影像—文字配對)。視覺—語言模型已從放射科擴展到病理、皮膚、眼科與心臟科。Merlin 證明,只要善用放射報告與 ICD 代碼,一個能力不錯的 CT 基礎模型可以在單張 40GB GPU 上訓練 — 讓先進醫療 AI 即使在資源受限的環境也能取得。" }
      },
      {
        slug: "llm-reasoning",
        title:   { en: "LLM clinical reasoning", zh: "LLM 的臨床推理" },
        summary: { en: "On management reasoning, o1-preview scored 86% vs. 34% for physicians using conventional resources.",
                   zh: "在處置推理上,o1-preview 得 86%,而用傳統資源的醫師只有 34%。" },
        tags: ["reasoning"],
        overview: { en: "On management-reasoning cases, o1-preview's median score was 86%, versus 42% for GPT-4 alone, 41% for physicians with GPT-4 access, and 34% for physicians with conventional resources. On NEJM clinicopathological conferences (n=143), the model included the correct diagnosis in its differential 78% of the time, with 52% top-1 accuracy. On NEJM Healer cases it achieved a perfect revised-IDEA score in 78 of 80, versus 47/80 for GPT-4, 28/80 for attending physicians, and 16/80 for residents. In 76 real emergency-department cases, o1 produced diagnoses rated 'exact/very close' in 67%–83% of cases, surpassing two attending physicians at each stage.",
                    zh: "在處置推理(management reasoning)案例上,o1-preview 的中位數得分為 86%,而僅用 GPT-4 為 42%、能用 GPT-4 的醫師為 41%、用傳統資源的醫師為 34%。在 NEJM 臨床病理討論會(n=143)上,模型有 78% 的時候把正確診斷列入鑑別診斷,首選正確率 52%。在 NEJM Healer 案例上,它在 80 題中有 78 題拿到完美的 revised-IDEA 分數,而 GPT-4 為 47/80、主治醫師 28/80、住院醫師 16/80。在 76 個真實急診案例中,o1 在 67%–83% 的案例給出「精準/非常接近」的診斷,且在每個階段都勝過兩位主治醫師。" }
      },
      {
        slug: "ai-agents",
        title:   { en: "AI agents enter the clinic", zh: "AI 代理進入臨床" },
        summary: { en: "Microsoft's Diagnostic Orchestrator + o3 hit 85.5% on hard cases vs. 20% for unaided physicians.",
                   zh: "微軟的診斷協調器搭配 o3,在困難案例上達 85.5%,未借助工具的醫師為 20%。" },
        tags: ["agents"],
        overview: { en: "Autonomous and semi-autonomous AI agents became a major development in clinical AI in 2025–26. Microsoft's AI Diagnostic Orchestrator, paired with OpenAI's o3, scored 85.5% on challenging case studies drawn from the medical literature — versus 20% for physicians working without their usual tools. Diagnostic-accuracy gains over single-agent baselines ranged from 7% to over 60%, depending on task complexity. A 2025 scoping review found 43 studies evaluating agentic AI in healthcare, 36 of them (84%) published in 2025. On MedAgentBench, which tests LLM agents across 300 clinically derived tasks in a virtual EHR, the best model reached a 69.7% task-success rate.",
                    zh: "自主與半自主 AI 代理,成為 2025–26 年臨床 AI 的重大發展。微軟的 AI 診斷協調器(Diagnostic Orchestrator)搭配 OpenAI 的 o3,在取自醫學文獻的困難案例上得 85.5% — 而未使用平常工具的醫師為 20%。相較於單一代理基準,診斷正確率的提升幅度在 7% 到超過 60% 之間,視任務複雜度而定。2025 年的一篇範圍綜述找到 43 項評估醫療代理 AI 的研究,其中 36 項(84%)發表於 2025 年。在 MedAgentBench(於虛擬電子病歷中橫跨 300 項臨床衍生任務)上,表現最佳的模型達到 69.7% 的任務成功率。" }
      },
      {
        slug: "fda-devices",
        title:   { en: "FDA device authorizations surge", zh: "FDA 醫材核准激增" },
        summary: { en: "258 AI devices authorized in 2025; cumulative passed 1,000 in 2024 — yet only 2.4% are backed by RCTs.",
                   zh: "2025 年核准 258 項 AI 醫材;累計於 2024 破千 — 但只有 2.4% 有隨機試驗支持。" },
        tags: ["regulation"],
        overview: { en: "The FDA authorized 258 AI medical devices in 2025. 510(k)-cleared AI/ML devices reached 246 in 2025, up from just 16 in 2016, and the cumulative total crossed the 1,000-device milestone in 2024 (1,357 total). Most enter via the 510(k) substantial-equivalence pathway, which requires showing a device is equivalent to one already on the market rather than running new trials. A peer-reviewed analysis of all 1,016 authorizations through December 2024 found only 2.4% of devices with clinical studies were supported by randomized-controlled-trial data. Predetermined Change Control Plans — allowing iterative post-market updates — were used in about 10% of 2025 clearances.",
                    zh: "FDA 在 2025 年核准了 258 項 AI 醫療器材。510(k) 核准的 AI/ML 醫材在 2025 年達 246 項,高於 2016 年的僅 16 項,累計總數更於 2024 年突破千件里程碑(共 1,357 件)。多數透過 510(k)「實質等同」途徑進入市場 — 只需證明新器材與已上市產品實質等同,而不必做新的臨床試驗。一篇同儕審查分析檢視截至 2024 年 12 月的全部 1,016 件核准,發現有臨床研究的器材中只有 2.4% 採用隨機對照試驗資料。允許上市後迭代更新的「預定變更控制計畫」,則用於約 10% 的 2025 年核准案。" }
      },
      {
        slug: "ambient-docs",
        title:   { en: "Ambient AI notes — the widest adoption", zh: "環境式 AI 病歷 — 採用最廣" },
        summary: { en: "The broadest-adopted clinical AI; Northwestern reported a 112% ROI and 11.3 more patients/month.",
                   zh: "採用最廣的臨床 AI;Northwestern 回報 112% 投報率、每月多看 11.3 名病人。" },
        tags: ["deployment"],
        overview: { en: "Ambient AI scribes — tools that auto-generate documentation from patient–clinician conversations — saw the broadest adoption of any clinical AI category in 2025. Abridge expanded from ~100 to over 150 health systems, including Kaiser Permanente across 40 hospitals and 600+ medical offices; adoption reached 63% among hospitals using Epic's EHR. Sharp HealthCare reported an 83% reduction in note-writing effort; University of Chicago Medicine a 47% reduction in cognitive load and 58% more undivided patient attention; Northwestern Medicine 11.3 additional patients per month, a 24% reduction in documentation time, and a 112% return on investment. A Stanford prospective study of 48 physicians (JAMIA, Feb 2025) found significant reductions in task load and burnout, with a median 20-minute time saving per half-day of clinic.",
                    zh: "環境式 AI 抄寫工具 — 能從醫病對話自動生成病歷 — 是 2025 年採用最廣的臨床 AI 類別。Abridge 從約 100 個擴展到超過 150 個醫療系統,包括 Kaiser Permanente 橫跨 40 家醫院與 600 多個診間;在使用 Epic 電子病歷的醫院中採用率達 63%。Sharp HealthCare 回報病歷書寫工作量減少 83%;芝加哥大學醫學中心回報認知負荷下降 47%、對病人不分心的關注增加 58%;Northwestern Medicine 則每月多看 11.3 名病人、書寫時間減少 24%、投資報酬率達 112%。史丹佛一項涵蓋 48 名醫師的前瞻研究(JAMIA,2025 年 2 月)發現工作負荷與職業倦怠顯著下降,每半天門診中位數省下 20 分鐘。" }
      },
      {
        slug: "sepsis",
        title:   { en: "AI sepsis alerts — deployment that saves lives", zh: "AI 敗血症預警 — 真的救命的部署" },
        summary: { en: "COMPOSER at UC San Diego cut sepsis mortality 17% across 6,217 admissions — an estimated 50 lives/year.",
                   zh: "UC San Diego 的 COMPOSER 在 6,217 例住院中讓敗血症死亡率降 17% — 估計每年救 50 條命。" },
        tags: ["deployment"],
        overview: { en: "AI-powered sepsis prediction moved into enterprise-scale deployment. COMPOSER, a deep-learning model at UC San Diego Health monitoring over 150 variables per patient, reported a 17% reduction in sepsis mortality (1.9% absolute) across 6,217 admissions, a 5% increase in sepsis-bundle compliance, and an estimated 50 lives saved annually. Other deployments reported an 18.7% relative reduction in sepsis mortality, a 1.85-hour reduction in median time to first antibiotic order, correct identification of 82% of sepsis cases, an 89% clinician adoption rate, and a 10% reduction in ICU utilization.",
                    zh: "AI 驅動的敗血症預測,已進入企業級規模的部署。UC San Diego Health 的深度學習模型 COMPOSER,每位病人監測超過 150 項變數,回報在 6,217 例住院中讓敗血症死亡率下降 17%(絕對值 1.9%)、敗血症處置流程遵從率提升 5%,估計每年挽救約 50 條人命。其他部署則回報敗血症死亡率相對下降 18.7%、首劑抗生素中位時間縮短 1.85 小時、正確辨識 82% 的敗血症案例、臨床採用率 89%,以及加護病房使用率下降 10%。" }
      },
      {
        slug: "evidence-gaps",
        title:   { en: "Evidence gaps and real risks", zh: "證據缺口與真實風險" },
        summary: { en: "A review of 500+ clinical AI studies found nearly half used exam-style questions, not real patient data.",
                   zh: "一項回顧 500+ 臨床 AI 研究的分析發現,近半數用考試式題目而非真實病患資料。" },
        tags: ["evidence"],
        overview: { en: "The inaugural State of Clinical AI Report (January 2026, Stanford-Harvard ARISE Network) reviewed over 500 clinical AI studies and found nearly half used exam-style questions rather than real patient data. The NOHARM benchmark found leading LLMs produced 11.8–14.6 severely harmful recommendations per 100 clinical cases, 76.6% of them errors of omission (e.g. failing to recommend a critical test). For digital twins, a scoping review of 149 studies (2017–2024) found only 12.1% met the National Academies' definition and only 19% were tested in real healthcare environments — though a diabetes RCT (n=150) of a 'whole-body digital twin' had 71% of participants reach an HbA1c below 6.5% within twelve months while safely reducing medication.",
                    zh: "首份《臨床 AI 現況報告》(2026 年 1 月,史丹佛—哈佛 ARISE Network)回顧超過 500 項臨床 AI 研究,發現近半數使用考試式題目而非真實病患資料。NOHARM 基準發現,領先的 LLM 每 100 個臨床案例會產生 11.8 到 14.6 條嚴重有害的建議,其中 76.6% 是「遺漏型」錯誤(例如未建議關鍵檢查)。在數位分身(digital twin)方面,一項回顧 149 項研究(2017–2024)的範圍綜述發現,只有 12.1% 符合美國國家科學院的定義,且只有 19% 在真實醫療環境中測試過 — 不過一項糖尿病隨機對照試驗(n=150)針對「全身數位分身」平台,有 71% 的參與者在十二個月內讓糖化血色素降到 6.5% 以下,同時安全地減藥。" }
      }
    ]
  },

  /* ---------------------------------------------- FDA by specialty chart */
  {
    type: "bars",
    id: "fda-specialty",
    title:    { en: "FDA-authorized AI devices, by specialty",
                zh: "FDA 核准的 AI 醫材:依專科(累計)" },
    subtitle: { en: "Cumulative authorized AI/ML devices. Radiology dominates at 1,039 of 1,357 (76.6%), but cardiology, neurology, and others have accelerated since 2020 — AI is spreading beyond imaging.",
                zh: "累計核准的 AI/ML 醫材。放射科以 1,357 件中的 1,039 件(76.6%)居絕對多數,但心臟、神經等專科自 2020 年起加速 — AI 正從影像往外擴散。" },
    series: [
      { label: { en: "Radiology", zh: "放射科" },        value: 1039 },
      { label: { en: "Cardiovascular", zh: "心血管" },    value: 130 },
      { label: { en: "Neurology", zh: "神經科" },         value: 61 }
    ]
  },

  /* -------------------------------------------------- imaging trials chart */
  {
    type: "bars",
    id: "trials",
    title:    { en: "Prospective imaging-AI trials are rising",
                zh: "影像 AI 前瞻臨床試驗正在增加" },
    subtitle: { en: "Prospective trials validating medical-imaging AI grew 28.5% year over year — a sign the field is starting to test in the real world, not just on benchmarks.",
                zh: "驗證醫療影像 AI 的前瞻試驗年增 28.5% — 顯示這個領域開始在真實世界、而不只在基準上做驗證。" },
    series: [
      { label: { en: "2024", zh: "2024" }, value: 417 },
      { label: { en: "2025", zh: "2025" }, value: 536 }
    ]
  },

  /* ------------------------------------------------ 6.3 PATIENT ENGAGEMENT */
  {
    type: "prose",
    id: "patients",
    title:    { en: "6.3 — What patients actually want", zh: "6.3 — 病人真正想要什麼" },
    subtitle: { en: "As AI reaches patients through clinics and consumer platforms, research on how they perceive it grew tenfold (9 → 102 papers, 2020–2025).",
                zh: "當 AI 透過診間與消費性平台觸及病人,研究他們如何看待 AI 的論文成長了十倍(9 → 102 篇,2020–2025)。" },
    blocks: [
      { type: "h3",
        text: { en: "AI Overviews already top health searches", zh: "AI 概覽已佔據健康搜尋的頂端" } },
      { type: "p",
        text: { en: "Google's AI-generated 'AI Overviews' now appear atop most health-related search results — on average 84%–92% of health queries triggered one across five query types. Symptom and common-health questions were the most likely to trigger an overview (92%), followed by treatment-related queries (90%) and condition-based ones (84%–88%).",
                zh: "Google 生成的「AI 概覽」如今出現在多數健康相關搜尋結果的頂端 — 五種查詢類型平均有 84%–92% 會觸發一則概覽。症狀與常見健康問題最容易觸發(92%),其次是治療相關查詢(90%)與疾病相關查詢(84%–88%)。" } },
      { type: "h3",
        text: { en: "Assistance, not autonomy", zh: "要的是輔助,不是自主" } },
      { type: "ul",
        items: {
          en: ["Patients endorse AI in assistive roles rather than autonomous decision-making, especially in high-stakes clinical contexts.",
               "Preserving the human relationship is a consistent theme — patients name the potential loss of empathic care as a primary concern.",
               "Provider endorsement is a key determinant of patient acceptance, and transparency and disclosure of AI use are prioritized across populations."],
          zh: ["病人支持 AI 扮演輔助角色,而非自主決策,尤其在高風險的臨床情境中。",
               "維繫人與人的關係是一個一致的主題 — 病人把「失去有同理心的照護」列為首要疑慮。",
               "醫療提供者的背書,是病人接受度的關鍵決定因素;而 AI 使用的透明與揭露,在各族群中都被優先重視。"]
        } }
    ]
  },

  /* --------------------------------------------------------- 6.4 ETHICS */
  {
    type: "prose",
    id: "ethics",
    title:    { en: "6.4 — The ethics conversation is growing, but lopsided",
                zh: "6.4 — 倫理討論在成長,但失衡" },
    subtitle: { en: "A bibliometric analysis of PubMed Central (Jan 2021 – Dec 2025) tracked ethical disclosure in medical-AI papers.",
                zh: "一項對 PubMed Central(2021 年 1 月至 2025 年 12 月)的文獻計量分析,追蹤了醫療 AI 論文中的倫理揭露。" },
    blocks: [
      { type: "p",
        text: { en: "Of all medical-AI publications in 2025, 43.4% discussed ethics topics — up from 37.1% in 2024 (medical-AI-and-ethics papers rose from 1,114 to 2,378). The volume is climbing, but the focus is uneven.",
                zh: "在 2025 年所有醫療 AI 論文中,43.4% 觸及倫理主題 — 高於 2024 年的 37.1%(醫療 AI 與倫理論文從 1,114 篇增至 2,378 篇)。數量在攀升,但焦點並不均衡。" } },
      { type: "h3",
        text: { en: "Governance-heavy, biosecurity-light", zh: "重治理,輕生物安全" } },
      { type: "p",
        text: { en: "Ethical discussion skews toward governance. In 2025, only 14 publications discussed biosecurity, with even fewer directly addressing the ethical implications of misuse or dual use — a notable blind spot as biological models grow more capable.",
                zh: "倫理討論明顯偏向治理。2025 年只有 14 篇論文談到生物安全,直接探討誤用或軍民兩用倫理意涵的更少 — 在生物模型能力日增之際,這是一個值得注意的盲點。" } },
      { type: "h3",
        text: { en: "Global health is the exception", zh: "全球健康是個例外" } },
      { type: "p",
        text: { en: "Global health departs from the governance-dominated pattern: among 2025 global-health publications, 51.8% (100 of 193) also mentioned ethics, and societal concerns — equity, justice, and accessibility — ranked highest, surpassing both governance and algorithmic concerns.",
                zh: "全球健康跳脫了由治理主導的模式:在 2025 年的全球健康論文中,51.8%(193 篇中的 100 篇)也提到倫理,而且社會性關懷 — 公平、正義與可近性 — 排名最高,超越了治理與演算法層面的關注。" } }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 6 · Medicine.",
                zh: "第 6 章「醫療」的頭條發現。" },
    quotes: [
      { text: { en: "In molecular biology, smaller models are outperforming larger ones.",
                zh: "在分子生物學,小模型正在勝過大模型。" },
        by: "Chapter 6 · Medicine" },
      { text: { en: "Ambient AI documentation saw the broadest adoption of any clinical AI category in 2025 — one health system reported a 112% return on investment.",
                zh: "環境式 AI 病歷是 2025 年採用最廣的臨床 AI 類別 — 某醫療系統回報 112% 的投資報酬率。" },
        by: "Chapter 6 · Medicine" },
      { text: { en: "The FDA authorized 258 AI medical devices in 2025 — yet only 2.4% of devices with clinical studies were backed by randomized-trial data.",
                zh: "FDA 在 2025 年核准 258 項 AI 醫材 — 但有臨床研究的器材中,只有 2.4% 有隨機試驗資料支持。" },
        by: "Chapter 6 · Medicine" },
      { text: { en: "A multi-agent AI system scored 85.5% on complex published cases, versus 20% for unaided physicians.",
                zh: "一套多代理 AI 系統在複雜的已發表病例上得 85.5%,而未借助工具的醫師為 20%。" },
        by: "Chapter 6 · Medicine" },
      { text: { en: "Nearly half of 500+ reviewed clinical AI studies used exam-style questions rather than real patient data.",
                zh: "在回顧的 500 多項臨床 AI 研究中,近半數使用考試式題目,而非真實病患資料。" },
        by: "Chapter 6 · Medicine" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Medicine chapter", zh: "閱讀完整的醫療章節" },
    text:  { en: "Chapter 6 (sections 6.1–6.4) with every figure and citation is free from Stanford HAI. Or head back to the 15 takeaways and nine-chapter overview.",
             zh: "第 6 章(6.1–6.4 各節)連同所有圖表與引用,皆由史丹佛 HAI 免費提供。或回到 15 條重點與九大章節總覽。" },
    link:  { label: { en: "Open Chapter 6 · Medicine →", zh: "前往第 6 章:醫療 →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/medicine" }
  }
];

/* =========================================================================
   AI in Science — deep dive · science.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026, Chapter 5
   https://hai.stanford.edu/ai-index/2026-ai-index-report/science

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 5: 5.1 AI for Science in 2025, 5.2 AI Across
   Scientific Domains (physics/astronomy/chemistry/materials, life sciences,
   Earth science, mathematics), and 5.3 AI Agents and Tools for Science
   Workflows. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "science";

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Science · a chapter deep dive", zh: "科學專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "AI is racing to replace whole scientific workflows — reliability is still the gap",
                zh: "AI 正衝刺取代整套科學工作流,可靠性仍是缺口" },
    subtitle: { en: "Chapter 5 of the AI Index 2026 traces AI across the sciences — from physics, chemistry, and astronomy to biology and Earth science, and into autonomous research agents. In 2025 AI moved beyond improving single pipeline steps toward replacing entire workflows, yet rigorous benchmarks still expose large gaps between plausible output and reliable science. The numbers:",
                zh: "AI 指數 2026 第 5 章橫跨各門科學 — 從物理、化學、天文,到生物與地球科學,再到自主研究代理。2025 年,AI 不再只是改善單一流程步驟,而是邁向取代整套工作流;但嚴謹的基準仍揭露「看似合理的產出」與「可靠的科學」之間的巨大落差。先看數字:" },
    stats: [
      { label: { en: "AI publications in the natural sciences in 2025", zh: "2025 年自然科學的 AI 論文數" }, value: 80150 },
      { label: { en: "% growth in AI-for-science publications, 2024→2025", zh: "% 科學 AI 論文成長(2024→2025)" }, value: 26 },
      { label: { en: "% ceiling for frontier models on astrophysics paper replication", zh: "% 前沿模型天文物理論文重現上限" }, value: 20 },
      { label: { en: "% best agent on PaperArena (PhD baseline 83.5%)", zh: "% PaperArena 最佳代理(博士基準 83.5%)" }, value: 39 },
      { label: { en: "million celestial objects training AION-1, astronomy's first foundation model", zh: "百萬天體訓練 AION-1(天文首個基礎模型)" }, value: 200 },
      { label: { en: "minutes for FourCastNet 3 to run a 60-day global forecast", zh: "分鐘:FourCastNet 3 跑完 60 天全球預報" }, value: 4 }
    ]
  },

  /* ----------------------------------------------- 5.1 AI FOR SCIENCE */
  {
    type: "prose",
    id: "publications",
    title:    { en: "5.1 — AI for science: from single steps to whole workflows",
                zh: "5.1 — 科學 AI:從單一步驟到整套工作流" },
    subtitle: { en: "AI's role in science falls into three coexisting layers — predictive models over data, assistants that help scientists work, and autonomous systems that generate discoveries. In 2025 the most visible action shifted to the second and third.",
                zh: "AI 在科學中的角色分為三個並存的層次 — 在資料上建模做預測、協助科學家工作的助手,以及能自主產生發現的系統。2025 年,最受矚目的進展轉向第二與第三層。" },
    blocks: [
      { type: "p",
        text: { en: "In the Web of Science database, AI-related publications in the natural sciences reached approximately 80,150 in 2025, up from 63,547 in 2024 — a one-year increase of roughly 26%. Physical sciences and life sciences followed similar trajectories, reaching about 33,000 and 29,000 publications respectively, each growing 27%–28% year over year, while Earth science — the smallest category at about 20,460 — grew roughly 23%.",
                zh: "在 Web of Science 資料庫中,自然科學的 AI 相關論文在 2025 年達到約 80,150 篇,高於 2024 年的 63,547 篇 — 一年成長約 26%。物理科學與生命科學走勢相近,分別達到約 33,000 與 29,000 篇,各年增 27%–28%;地球科學是最小的類別(約 20,460 篇),則成長約 23%。" } },
      { type: "h3",
        text: { en: "AI is becoming routine across disciplines", zh: "AI 正成為各學科的常規作法" } },
      { type: "ul",
        items: {
          en: ["As a share of total output, AI-related work remains a single-digit fraction of each field but is climbing fast. By 2025, Earth science had the highest AI penetration at 8.8%, followed by natural sciences overall at 6.8%, life sciences at 6.5%, and physical sciences at 5.8%. In 2010, all four categories sat below 1%.",
               "The clearest breakthroughs cluster in domains with strong existing data infrastructure — structural biology, physics, chemistry, and materials science — rather than in fields built on the most sophisticated mathematical or physics-based models.",
               "These developments do not automatically translate into scientific progress. Experimental validation remains expensive and slow: AI can propose novel candidate molecules at scale, but clinical trials to determine whether they work remain a costly, multiyear process. The gap between what AI can propose and what scientists can feasibly test recurs across every domain."],
          zh: ["以佔總產出的比例來看,AI 相關研究在各領域仍是個位數,但攀升迅速。到 2025 年,地球科學的 AI 滲透率最高,達 8.8%,其次是自然科學整體 6.8%、生命科學 6.5%、物理科學 5.8%。在 2010 年,這四個類別都還不到 1%。",
               "最明確的突破集中在既有資料基礎扎實的領域 — 結構生物學、物理、化學與材料科學 — 而不是那些建立在最精密數學或物理模型上的領域。",
               "這些發展並不會自動轉化為科學進展。實驗驗證仍然昂貴又緩慢:AI 能大規模提出新的候選分子,但要確認它們是否有效的臨床試驗,仍是耗時多年、所費不貲的過程。「AI 能提出什麼」與「科學家實際能驗證什麼」之間的落差,在每個領域反覆出現。"]
        } }
    ]
  },

  /* ----------------------------------------------- 5.1 publications chart */
  {
    type: "bars",
    id: "pubs-by-field",
    title:    { en: "AI publications in the natural sciences, 2025",
                zh: "自然科學的 AI 論文(2025 年)" },
    subtitle: { en: "AI-related publications by field in 2025 (a single paper can fall in more than one domain, so the natural-sciences total is de-duplicated and not the simple sum). Unit: publications.",
                zh: "2025 年各領域的 AI 相關論文數(一篇論文可同時歸入多個領域,故自然科學總數已去重,並非各領域簡單加總)。單位:篇。" },
    series: [
      { label: { en: "Natural sciences (total)", zh: "自然科學(總計)" }, value: 80150 },
      { label: { en: "Physical sciences", zh: "物理科學" },             value: 33050 },
      { label: { en: "Life sciences", zh: "生命科學" },                 value: 28910 },
      { label: { en: "Earth science", zh: "地球科學" },                 value: 20460 }
    ]
  },

  /* ----------------------------------------------- 5.2 FRONTIERS PROSE */
  {
    type: "prose",
    id: "frontiers",
    title:    { en: "5.2 — Across the domains: capable, but not yet reliable",
                zh: "5.2 — 跨越各領域:能力很強,卻還不可靠" },
    subtitle: { en: "Section 5.2 tracks the datasets, benchmarks, foundation models, and agents of three scientific groupings. A consistent finding: most scientific AI models come from academic and government institutions collaborating across countries — the opposite of the industry-dominated, general-purpose AI landscape.",
                zh: "5.2 節追蹤三大科學群組的資料集、基準、基礎模型與代理。一個一致的發現是:多數科學 AI 模型來自跨國合作的學術與政府機構 — 與由產業主導的通用 AI 版圖恰恰相反。" },
    blocks: [
      { type: "h3",
        text: { en: "Physics, astronomy, chemistry, materials — and a small-model surprise in biology",
                zh: "物理、天文、化學、材料 — 以及生物學裡的小模型驚喜" } },
      { type: "ul",
        items: {
          en: ["In molecular biology, smaller models are outperforming larger ones. MSAPairformer, a 111-million-parameter protein language model, surpassed previous leading methods on the ProteinGym benchmark; and GPN-Star, a 200-million-parameter genomics model, outperformed Evo 2, a model with 40 billion parameters.",
               "Virtual-cell models emerged as a new 2025 frontier: Evo 2 (Arc Institute), STATE, and DeepMind's AlphaGenome aim to predict cellular responses to drugs and genetic perturbations without wet-lab experiments — though current systems still require experimental validation. Evo 2 trained on OpenGenome2, a corpus of 9.3 trillion DNA base pairs from across all domains of life.",
               "Astronomy released its first foundation model, first visualization benchmark, and a 100TB training dataset in 2025. AION-1, trained on over 200 million celestial objects from five major surveys, is the field's first foundation model; AstroVisBench introduced the first benchmark for LLM scientific computing and visualization.",
               "An AI system ran a full weather-forecasting pipeline end-to-end for the first time in 2025: Aardvark Weather replaced the traditional numerical pipeline with a single ML system, and multiple AI weather models reached operational deployment. FourCastNet 3 generates a 60-day global forecast in under 4 minutes — 8 to 60 times faster than prior approaches."],
          zh: ["在分子生物學,小模型正在勝過大模型。MSAPairformer 是一個 1.11 億參數的蛋白質語言模型,在 ProteinGym 基準上超越先前的領先方法;GPN-Star 是一個 2 億參數的基因體模型,勝過了 400 億參數的 Evo 2。",
               "虛擬細胞模型成為 2025 年的新前沿:Evo 2(Arc Institute)、STATE 與 DeepMind 的 AlphaGenome,目標是在不做濕實驗的情況下預測細胞對藥物與基因擾動的反應 — 不過現行系統仍需實驗驗證。Evo 2 以 OpenGenome2 訓練,該語料涵蓋來自所有生命領域的 9.3 兆個 DNA 鹼基對。",
               "天文學在 2025 年釋出了第一個基礎模型、第一個視覺化基準,以及一個 100TB 的訓練資料集。AION-1 以來自五大巡天的超過 2 億個天體訓練,是該領域首個基礎模型;AstroVisBench 則推出首個評測 LLM 科學運算與視覺化的基準。",
               "2025 年,AI 系統首次端到端跑完整套天氣預報流程:Aardvark Weather 以單一機器學習系統取代傳統數值預報流程,多個 AI 天氣模型也進入實際運作部署。FourCastNet 3 能在 4 分鐘內產生 60 天全球預報 — 比先前方法快 8 到 60 倍。"]
        } },
      { type: "h3",
        text: { en: "Strong on subtasks, shaky on full research", zh: "子任務很強,整套研究很弱" } },
      { type: "p",
        text: { en: "Frontier models outperform human chemists on average but cannot reproduce published research. On ChemBench (2,700+ chemistry questions), the best models beat human-expert averages while still stumbling on basic tasks. On ReplicationBench, frontier models score below 20% on paper-scale replication in astrophysics. On UnivEarth, LLM agents answer Earth-observation questions with just 33% accuracy and their code fails 58% of the time, while on BixBench, frontier models reach only ~17% on real-world bioinformatics analysis.",
                zh: "前沿模型平均勝過人類化學家,卻無法重現已發表的研究。在 ChemBench(2,700 多題化學題)上,最佳模型擊敗人類專家平均,卻仍在基礎任務上絆倒。在 ReplicationBench 上,前沿模型在天文物理的論文級重現任務得分低於 20%。在 UnivEarth 上,LLM 代理回答地球觀測問題的正確率僅 33%,程式碼有 58% 的時候失敗;而在 BixBench 上,前沿模型在真實世界的生物資訊分析僅達約 17%。" } }
    ]
  },

  /* ----------------------------------------- frontier benchmark chart */
  {
    type: "bars",
    id: "benchmarks",
    title:    { en: "Frontier agents fall well short of expert-level science",
                zh: "前沿代理離專家級科學還很遠" },
    subtitle: { en: "Selected 2025 benchmark scores for frontier models and agents on full scientific tasks, versus the PhD-expert baseline on PaperArena. Unit: % accuracy.",
                zh: "2025 年前沿模型與代理在整套科學任務上的部分基準分數,並對照 PaperArena 上的博士專家基準。單位:% 正確率。" },
    series: [
      { label: { en: "PhD experts (PaperArena baseline)", zh: "博士專家(PaperArena 基準)" }, value: 83 },
      { label: { en: "Best agent · PaperArena", zh: "最佳代理 · PaperArena" },               value: 39 },
      { label: { en: "LLM agents · UnivEarth (Earth obs.)", zh: "LLM 代理 · UnivEarth(地球觀測)" }, value: 33 },
      { label: { en: "Frontier · ReplicationBench (astrophysics)", zh: "前沿 · ReplicationBench(天文物理)" }, value: 20 },
      { label: { en: "Frontier · BixBench (bioinformatics)", zh: "前沿 · BixBench(生物資訊)" }, value: 17 }
    ]
  },

  /* ----------------------------------------- AI penetration chart */
  {
    type: "bars",
    id: "penetration",
    title:    { en: "AI's share of scientific output is climbing fast",
                zh: "AI 在科學產出中的佔比正快速攀升" },
    subtitle: { en: "AI-related work as a share of total publications by field in 2025 (all four sat below 1% in 2010). Unit: % of total output (rounded).",
                zh: "2025 年各領域 AI 相關研究佔總論文數的比例(2010 年時四者都不到 1%)。單位:佔總產出 %(四捨五入)。" },
    series: [
      { label: { en: "Earth science", zh: "地球科學" },           value: 9 },
      { label: { en: "Natural sciences (overall)", zh: "自然科學(整體)" }, value: 7 },
      { label: { en: "Life sciences", zh: "生命科學" },           value: 6 },
      { label: { en: "Physical sciences", zh: "物理科學" },       value: 6 }
    ]
  },

  /* ------------------------------------------------ DOMAIN CARDS */
  {
    type: "cards",
    id: "fields",
    title:    { en: "Six fields, six frontiers", zh: "六個領域,六道前沿" },
    subtitle: { en: "How AI is reshaping each scientific domain in 2025. Tap any card for the full trend and its numbers.",
                zh: "2025 年 AI 如何重塑各個科學領域。點任一張卡片看完整趨勢與數字。" },
    items: [
      {
        slug: "physical-sciences",
        title:   { en: "Physics & materials: learned surrogates", zh: "物理與材料:學習式代理模型" },
        summary: { en: "Foundation models are replacing expensive first-principles simulations and inverse-designing new matter.",
                   zh: "基礎模型正取代昂貴的第一原理模擬,並以逆向設計創造新物質。" },
        tags: ["physics"],
        overview: { en: "AI is accelerating physics, chemistry, and materials science by replacing expensive first-principles simulations with learned surrogates and generating novel materials through inverse design. GPhyT, a General Physics Transformer trained on 1.8TB of simulation data, achieved up to 29 times better performance than specialized models and generalized to physics problems outside its training data without fine-tuning. MatterGen, a diffusion-based generative model, produced over twice as many novel and stable materials as existing methods, while MACE-MP-0 offers a general-purpose force field across nearly all materials. PhysiX (4.5B parameters) is the first large-scale physics simulation foundation model, transferring from natural videos to simulation. On the benchmarks, though, PHYBench saw Gemini 2.5 Pro reach only 36.9% versus 61.9% for human experts.",
                    zh: "AI 正以學習式代理模型取代昂貴的第一原理模擬,並透過逆向設計生成新材料,加速物理、化學與材料科學。GPhyT(General Physics Transformer)以 1.8TB 模擬資料訓練,效能比專用模型最高好上 29 倍,且不需微調就能泛化到訓練資料之外的物理問題。MatterGen 是擴散式生成模型,產出的新穎且穩定材料數量是既有方法的兩倍以上;MACE-MP-0 則提供橫跨幾乎所有材料的通用力場。PhysiX(45 億參數)是首個大規模物理模擬基礎模型,能從自然影片遷移到模擬。不過在基準上,PHYBench 中 Gemini 2.5 Pro 僅達 36.9%,而人類專家為 61.9%。" }
      },
      {
        slug: "astronomy",
        title:   { en: "Astronomy: its first foundation model", zh: "天文學:第一個基礎模型" },
        summary: { en: "AION-1, AstroVisBench, and a 100TB dataset mark a field-wide shift toward AI infrastructure.",
                   zh: "AION-1、AstroVisBench 與一個 100TB 資料集,標誌全領域轉向 AI 基礎設施。" },
        tags: ["astronomy"],
        overview: { en: "Astronomy released its first foundation model, first visualization benchmark, and a 100TB training dataset in 2025 — signaling a field-wide shift toward AI infrastructure. AION-1, with 300M–3.1B parameters and trained on over 200 million celestial objects from five major surveys, is the first astronomy foundation model, released openly. AstroVisBench introduced the first benchmark for LLM scientific computing and visualization in the field, and the Multimodal Universe dataset aggregates roughly 100TB of astronomical observations — multichannel images, spectra, and time series from hundreds of millions of objects. Agentic systems are appearing too: StarWhisper Telescope automates observation planning across 10 telescopes.",
                    zh: "天文學在 2025 年釋出了第一個基礎模型、第一個視覺化基準與一個 100TB 訓練資料集 — 標誌全領域轉向 AI 基礎設施。AION-1 擁有 3 億至 31 億參數,以來自五大巡天的超過 2 億個天體訓練,是首個天文基礎模型,並以開放方式釋出。AstroVisBench 推出該領域首個評測 LLM 科學運算與視覺化的基準;Multimodal Universe 資料集則彙整約 100TB 的天文觀測 — 涵蓋多通道影像、光譜與時間序列,來自數億個天體。代理系統也開始出現:StarWhisper Telescope 能跨 10 座望遠鏡自動規劃觀測。" }
      },
      {
        slug: "chemistry",
        title:   { en: "Chemistry: beats experts, fails replication", zh: "化學:勝過專家,卻無法重現" },
        summary: { en: "Frontier models top human chemists on ChemBench's 2,700+ questions — but stumble on full research.",
                   zh: "前沿模型在 ChemBench 的 2,700+ 題上勝過人類化學家 — 卻在整套研究上絆倒。" },
        tags: ["chemistry"],
        overview: { en: "On ChemBench, a chemistry evaluation with over 2,700 question–answer pairs, the best frontier models outperform the best human chemists on average, though they still struggle with basic tasks. The largest data releases scaled quantum chemistry dramatically: OMol25 (Meta FAIR) reports over 100 million high-accuracy DFT calculations spanning 83 elements and structures up to 350 atoms, and ChemPile offers 75 billion-plus tokens of curated chemical data. Agents began connecting to lab equipment: ChemAgents demonstrated autonomous synthesis and optimization on a robotic platform controlled by Llama-3.1-70B, and ChemToolAgent wired 137 external chemical tools into an LLM that surpasses GPT-4o on chemistry Q&A. Benchmark results, however, show these systems are not yet reliable at full, start-to-finish research tasks.",
                    zh: "在 ChemBench(2,700 多組問答)上,最佳前沿模型平均勝過最頂尖的人類化學家,但仍在基礎任務上掙扎。最大的資料釋出大幅擴展了量子化學:OMol25(Meta FAIR)收錄超過 1 億筆高精度 DFT 計算,涵蓋 83 種元素、結構最多達 350 個原子;ChemPile 則提供 750 億以上 token 的精選化學資料。代理開始連接實驗設備:ChemAgents 在由 Llama-3.1-70B 控制的機器人平台上展示自主合成與優化,ChemToolAgent 把 137 個外部化學工具接入一個在化學問答上超越 GPT-4o 的 LLM。不過基準結果顯示,這些系統在從頭到尾的完整研究任務上還不可靠。" }
      },
      {
        slug: "life-sciences",
        title:   { en: "Life sciences: small models, big data", zh: "生命科學:小模型,大資料" },
        summary: { en: "111M-parameter MSAPairformer and 200M GPN-Star beat far larger models; OpenGenome2 holds 9.3T base pairs.",
                   zh: "1.11 億參數的 MSAPairformer 與 2 億的 GPN-Star 擊敗更大模型;OpenGenome2 收 9.3 兆鹼基對。" },
        tags: ["biology"],
        overview: { en: "AI is reaching beyond biomedicine into genomics, neuroscience, ecology, and synthetic biology. In a defining 2025 trend, smaller models won: the 111-million-parameter MSAPairformer surpassed leading methods on ProteinGym, and the 200-million-parameter GPN-Star outperformed Evo 2, which has 40 billion parameters. Foundation models expanded from prediction into generative design — Evo 2 (40B parameters, 1M-token context) trained on OpenGenome2's 9.3 trillion DNA base pairs from all domains of life, and CellFM (800M parameters) modeled 100 million human cells. Yet the gap between abundant genomic sequence data and scarce functional perturbation data remains wide. Vision foundation models like BioCLIP 2 now classify across the tree of life, and connectome-scale computer vision assembled full fly and mouse brain maps.",
                    zh: "AI 正從生物醫學擴展到基因體學、神經科學、生態學與合成生物學。2025 年一個關鍵趨勢是小模型獲勝:1.11 億參數的 MSAPairformer 在 ProteinGym 上超越領先方法,2 億參數的 GPN-Star 勝過擁有 400 億參數的 Evo 2。基礎模型也從預測擴展到生成式設計 — Evo 2(400 億參數、100 萬 token 脈絡)以 OpenGenome2 訓練,後者收錄來自所有生命領域的 9.3 兆個 DNA 鹼基對;CellFM(8 億參數)則建模 1 億個人類細胞。然而,「豐富的基因序列資料」與「稀少的功能擾動資料」之間的落差依舊巨大。BioCLIP 2 等視覺基礎模型如今能跨整棵生命之樹分類,連接體規模的電腦視覺則拼出了完整的果蠅與小鼠腦圖譜。" }
      },
      {
        slug: "earth-science",
        title:   { en: "Earth science: weather AI goes operational", zh: "地球科學:天氣 AI 進入實戰" },
        summary: { en: "Aardvark Weather ran an end-to-end pipeline; FourCastNet 3 forecasts 60 days in under 4 minutes.",
                   zh: "Aardvark Weather 跑完端到端流程;FourCastNet 3 不到 4 分鐘預報 60 天。" },
        tags: ["earth"],
        overview: { en: "Earth science progress stays tied to observational infrastructure, and weather forecasting — backed by decades of reanalysis data like ERA5 — has advanced furthest. In 2025, an AI system ran a full forecasting pipeline end-to-end for the first time: Aardvark Weather replaced the traditional numerical pipeline with a single ML system. FourCastNet 3 generates a 60-day global forecast at 0.25-degree resolution in under 4 minutes on a single GPU, 8 to 60 times faster than prior approaches; WeatherNext 2 produces hundreds of outcomes in under a minute on a TPU. For Earth observation, TerraMind is the first any-to-any generative multimodal model across 9 geospatial modalities. Climate modeling lags, because decadal projections fall outside any existing training distribution. On UnivEarth, LLM agents answer Earth-observation questions with only 33% accuracy, and their code fails 58% of the time.",
                    zh: "地球科學的進展與觀測基礎設施緊密相連,而有著數十年 ERA5 等再分析資料支撐的天氣預報,進展最快。2025 年,AI 系統首次端到端跑完整套預報流程:Aardvark Weather 以單一機器學習系統取代傳統數值流程。FourCastNet 3 能在單張 GPU 上、不到 4 分鐘內以 0.25 度解析度產生 60 天全球預報,比先前方法快 8 到 60 倍;WeatherNext 2 則在 TPU 上不到一分鐘產出數百種結果。在地球觀測上,TerraMind 是首個橫跨 9 種地理空間模態的任意到任意生成式多模態模型。氣候建模則落後,因為十年尺度的推估落在任何既有訓練分布之外。在 UnivEarth 上,LLM 代理回答地球觀測問題的正確率僅 33%,程式碼有 58% 的時候失敗。" }
      },
      {
        slug: "mathematics",
        title:   { en: "Mathematics: gold medals, open problems intact", zh: "數學:奪金牌,難題仍未解" },
        summary: { en: "From silver to gold at the IMO in one year — but Erdős conjectures stay well beyond reach.",
                   zh: "一年內從 IMO 銀牌躍升金牌 — 但厄爾多斯猜想仍遙不可及。" },
        tags: ["math"],
        overview: { en: "Mathematical reasoning is an active testing ground for AI capabilities. Systems such as Goedel-Prover are moving toward automated formal proof generation in languages like Lean, and competition-level problem-solving plus formal verification of known results are advancing quickly — including a jump from silver to gold at the International Mathematical Olympiad in a single year, and rapid gains on FrontierMath and MathArena (covered in Chapter 2). But major open problems, such as long-standing Erdős conjectures, remain well beyond current capabilities. The pattern echoes the rest of the chapter: AI excels at bounded, well-specified problems while genuine open-ended discovery stays out of reach.",
                    zh: "數學推理是 AI 能力的活躍試煉場。Goedel-Prover 等系統正邁向以 Lean 等語言自動產生形式化證明;競賽級解題與對已知結果的形式化驗證進展迅速 — 包括在國際數學奧林匹亞一年內從銀牌躍升金牌,以及在 FrontierMath 與 MathArena 上的快速提升(見第 2 章)。但重大的開放問題,例如長期未解的厄爾多斯猜想,仍遠超出現有能力。這個模式呼應了本章其餘部分:AI 在有界、明確界定的問題上表現出色,真正開放式的發現卻依然遙不可及。" }
      },
      {
        slug: "research-agents",
        title:   { en: "5.3 — Research agents: half of expert level", zh: "5.3 — 研究代理:專家水準的一半" },
        summary: { en: "On PaperArena the best agent hits 38.8% vs. 83.5% for PhD experts; AstaBench's best scores ~0.53.",
                   zh: "PaperArena 上最佳代理 38.8%,博士專家 83.5%;AstaBench 最佳約 0.53。" },
        tags: ["agents"],
        overview: { en: "Two cross-domain benchmarks released in 2025 show that even the best agents fall well below expert level on end-to-end research. On PaperArena — which tests stitching evidence across multiple papers while orchestrating external tools — Gemini 2.5 Pro performs best at 38.8% average accuracy in a multiagent configuration, versus an 83.50% PhD-expert baseline; multiagent setups beat single-agent ones by a modest 2–4 points. On AstaBench (2,400+ problems, 57 agents across 22 classes), the best agent scored around 0.53 at roughly $3.40 per problem. The first fully AI-generated paper was accepted at a peer-reviewed ICLR workshop via Sakana's AI Scientist-v2, and Google's AI Co-scientist was validated in three biomedical areas. Yet experimentally confirmed AI discoveries stay rare — among them ProtAgents' designed proteins, the Virtual Lab's 92 SARS-CoV-2 antibody candidates (90%+ bound their target), and OriGene's two new cancer drug targets.",
                    zh: "2025 年釋出的兩個跨領域基準顯示,即使是最佳代理,在端到端研究上也遠低於專家水準。在 PaperArena(測試跨多篇論文串接證據並調度外部工具)上,Gemini 2.5 Pro 在多代理配置下以 38.8% 平均正確率最佳,而博士專家基準為 83.50%;多代理比單代理僅高出 2–4 個百分點。在 AstaBench(2,400 多題、22 類共 57 個代理)上,最佳代理約得 0.53 分,每題成本約 3.40 美元。首篇完全由 AI 生成的論文透過 Sakana 的 AI Scientist-v2 被同儕審查的 ICLR 工作坊接受,Google 的 AI Co-scientist 則在三個生物醫學領域獲得驗證。不過,經實驗確認的 AI 發現仍屬罕見 — 其中包括 ProtAgents 設計的蛋白質、Virtual Lab 的 92 個 SARS-CoV-2 抗體候選(逾 90% 成功結合標的),以及 OriGene 的兩個新癌症藥物標靶。" }
      }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 5 · Science.",
                zh: "第 5 章「科學」的頭條發現。" },
    quotes: [
      { text: { en: "In molecular biology, smaller models are outperforming larger ones — an 111-million-parameter model beat methods built on tens of billions.",
                zh: "在分子生物學,小模型正在勝過大模型 — 一個 1.11 億參數的模型擊敗了建立在數百億參數上的方法。" },
        by: "Chapter 5 · Science" },
      { text: { en: "AI publications in the natural sciences reached about 80,150 in 2025, up roughly 26% in a single year.",
                zh: "自然科學的 AI 論文在 2025 年達到約 80,150 篇,一年成長約 26%。" },
        by: "Chapter 5 · Science" },
      { text: { en: "Frontier models outperform human chemists on average — yet score below 20% on replicating published astrophysics papers.",
                zh: "前沿模型平均勝過人類化學家 — 卻在重現已發表的天文物理論文上得分低於 20%。" },
        by: "Chapter 5 · Science" },
      { text: { en: "Astronomy released its first foundation model in 2025: AION-1, trained on over 200 million celestial objects from five surveys.",
                zh: "天文學在 2025 年釋出第一個基礎模型 AION-1,以來自五大巡天的超過 2 億個天體訓練。" },
        by: "Chapter 5 · Science" },
      { text: { en: "On end-to-end research, the best AI agents score about half of PhD experts — 38.8% versus 83.5% on PaperArena.",
                zh: "在端到端研究上,最佳 AI 代理只達博士專家的一半 — PaperArena 上 38.8% 對 83.5%。" },
        by: "Chapter 5 · Science" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Science chapter", zh: "閱讀完整的科學章節" },
    text:  { en: "Chapter 5 (sections 5.1–5.3) with every figure and citation is free from Stanford HAI. Or head back to the 15 takeaways and nine-chapter overview.",
             zh: "第 5 章(5.1–5.3 各節)連同所有圖表與引用,皆由史丹佛 HAI 免費提供。或回到 15 條重點與九大章節總覽。" },
    link:  { label: { en: "Open Chapter 5 · Science →", zh: "前往第 5 章:科學 →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/science" }
  }
];

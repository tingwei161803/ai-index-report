/* =========================================================================
   Science & Medicine — deep dive · science-medicine.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2025, Chapter 5
   https://hai.stanford.edu/ai-index/2025-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 5: 5.1 Notable Medical and Biological AI
   Milestones, 5.2 The Central Dogma, 5.3 Clinical Care (Imaging), 5.4 Clinical
   Care (Non-Imaging), 5.5 Ethical Considerations, 5.6 AI Foundation Models in
   Science. The chapter was prepared by RAISE Health, a Stanford Medicine × HAI
   collaboration. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "science-medicine";

window.SITE_META = {
  title:    { en: "AI Index Report 2025", zh: "AI 指數報告 2025" },
  subtitle: { en: "Science & Medicine · a chapter deep dive", zh: "科學與醫學專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The year AI stopped being a lab curiosity in medicine",
                zh: "AI 在醫學裡不再只是實驗室好奇心的一年" },
    subtitle: { en: "Chapter 5 of the AI Index 2025 — written with RAISE Health, a Stanford Medicine and HAI collaboration — tracks AI moving from benchmark scores into hospitals, protein databases, and the Nobel Prize citations. Clinical knowledge benchmarks are nearing saturation, FDA authorizations have gone vertical, and the ethics literature is racing to keep up. The numbers:",
                zh: "AI 指數 2025 第 5 章由 RAISE Health(史丹佛醫學院與 HAI 的合作計畫)撰寫，追蹤 AI 如何從基準分數走進醫院、蛋白質資料庫，以及諾貝爾獎的得獎理由。臨床知識基準已接近飽和，FDA 核准數垂直起飛，倫理研究文獻則在後頭急起直追。先看數字：" },
    stats: [
      { label: { en: "FDA-authorized AI-enabled medical devices in 2023 (6 in 2015)", zh: "2023 年 FDA 核准的 AI 醫療器材件數(2015 年為 6 件)" }, value: 223 },
      { label: { en: "% — o1's new state of the art on the MedQA clinical benchmark", zh: "% — o1 在 MedQA 臨床基準的新最佳成績" }, value: 96 },
      { label: { en: "medical AI ethics publications in 2024 (288 in 2020)", zh: "2024 年醫學 AI 倫理論文數(2020 年為 288 篇)" }, value: 1031 },
      { label: { en: "clinical trials mentioning AI in 2024 (5 in 2014)", zh: "2024 年提及 AI 的臨床試驗數(2014 年為 5 件)" }, value: 537 },
      { label: { en: "billion parameters in ESM3, trained on 2.78 billion protein sequences", zh: "億參數的 ESM3(單位：十億)，以 27.8 億條蛋白質序列訓練" }, value: 98 },
      { label: { en: "Nobel Prizes awarded in 2024 for AI-driven breakthroughs", zh: "2024 年因 AI 驅動突破而頒發的諾貝爾獎座數" }, value: 2 }
    ]
  },

  /* ------------------------------------------------------ 5.1/5.2 BIOLOGY */
  {
    type: "prose",
    id: "breakthroughs",
    nav:      { en: "5.1 & 5.2 Biology", zh: "5.1 & 5.2 生物學" },
    title:    { en: "5.1 & 5.2 — Biology got a new instrument",
                zh: "5.1 與 5.2 — 生物學拿到了一件新儀器" },
    subtitle: { en: "2022 and 2023 were the early stages of AI-driven scientific breakthroughs. 2024 was the year the tools got big enough, and open enough, to change how protein science is actually done.",
                zh: "2022 與 2023 年是 AI 驅動科學突破的早期階段。2024 年，這些工具終於大到、也開放到足以改變蛋白質科學實際的做法。" },
    blocks: [
      { type: "p",
        text: { en: "The headline release was EvolutionaryScale's ESM3, trained on 2.78 billion protein sequences with 98 billion parameters. Its most striking result was esmGFP, a novel artificial green fluorescent protein that the company estimates would have taken nature roughly 500 million years of evolution to produce — generated through human-led chain-of-thought prompting. Larger ESM3 models solved twice as many atomic-coordination tasks as smaller ones, and the model was open-sourced.",
                zh: "最受矚目的發布是 EvolutionaryScale 的 ESM3，以 27.8 億條蛋白質序列訓練、擁有 980 億參數。它最驚人的成果是 esmGFP，一種全新的人工綠色螢光蛋白 — 該公司估計大自然要花上約 5 億年的演化才生得出來，而這是透過人類主導的思維鏈提示生成的。較大的 ESM3 模型能解決的原子配位任務數是小模型的兩倍，而且模型已開源。" } },
      { type: "h3",
        text: { en: "Models kept getting bigger", zh: "模型持續變大" } },
      { type: "p",
        text: { en: "The trend line is unambiguous. ProGen (2020) had 1.2 billion parameters and ProtBert 0.42 billion; ProGen2 and ProtT5 arrived in 2022 at 6.4 billion and 1.2 billion; ESM2 reached 15 billion in 2023; ESM3 hit 98 billion in 2024. Each jump in scale has come with better protein prediction accuracy — ESM C, released in 2024, posted improved structure-prediction results in the CASP15 challenge.",
                zh: "這條趨勢線毫不含糊。ProGen(2020)有 12 億參數、ProtBert 有 4.2 億；ProGen2 與 ProtT5 於 2022 年問世，分別為 64 億與 12 億；ESM2 在 2023 年達到 150 億；ESM3 則在 2024 年衝上 980 億。每一次規模躍升都伴隨蛋白質預測準確度的提升 — 2024 年發布的 ESM C，在 CASP15 結構預測挑戰中拿出更好的成績。" } },
      { type: "h3",
        text: { en: "Four results worth remembering", zh: "四個值得記住的成果" } },
      { type: "ul",
        items: {
          en: ["AlphaProteo (Google DeepMind) designed the first protein binders for several targets including VEGF-A, a protein linked to cancer and diabetes. Its binders hold together roughly 10 times more strongly than existing state-of-the-art designs, with some estimated to be up to 300 times more effective; for the viral protein BHRF1, 88% of its designed binders bound successfully in the wet lab.",
               "AlphaFold 3 extended the series beyond protein structures to interactions with DNA, RNA, ligands, and antibodies. On protein-ligand docking it reached 80.5% of predictions under 2 Å RMSD — and 93.2% when the binding pocket was specified in advance, against 59.7% for the Vina baseline.",
               "A Stanford virtual AI lab — a principal-investigator model, a scientific critic, and three specialist agents in immunology, computational biology, and machine learning — autonomously designed 92 nanobodies targeting SARS-CoV-2, with over 90% successfully binding in validation.",
               "Google's Connectomics team reconstructed one cubic millimeter of human brain at synaptic resolution: over 5,000 slices at 30 nanometers each, capturing around 57,000 cells and 150 million synapses."],
          zh: ["AlphaProteo(Google DeepMind)為包含 VEGF-A(一種與癌症和糖尿病相關的蛋白質)在內的多個標靶，設計出首批蛋白質結合物。它的結合物比現有最佳設計方法強約 10 倍，其中部分估計效力可達 300 倍；對病毒蛋白 BHRF1，其設計的結合物有 88% 在濕實驗室測試中成功結合。",
               "AlphaFold 3 把這個系列從蛋白質結構延伸到與 DNA、RNA、配體、抗體的交互作用。在蛋白質—配體對接上，它有 80.5% 的預測落在 2 Å RMSD 以內 — 若事先指定結合口袋則達 93.2%，相較之下 Vina 基準線只有 59.7%。",
               "史丹佛的虛擬 AI 實驗室 — 一個主持人模型、一個科學評論者，加上免疫學、計算生物學與機器學習三位專科代理人 — 自主設計出 92 個針對 SARS-CoV-2 的奈米抗體，其中超過 90% 在驗證中成功結合。",
               "Google 的 Connectomics 團隊以突觸解析度重建了一立方毫米的人腦：超過 5,000 片、每片 30 奈米的切片，捕捉到約 57,000 個細胞與 1.5 億個突觸。"]
        } },
      { type: "h3",
        text: { en: "The databases underneath", zh: "底下的資料庫" } },
      { type: "p",
        text: { en: "None of this works without public data. Since 2021 the major protein science databases have grown sharply: UniProt by 31%, the Protein Data Bank by 23%, and the AlphaFold Database by 585%. The infrastructure is old — PDB dates to 1971 and was the first open-access digital resource in the biological sciences, Pfam to 1995, STRING to 2000, UniProt to 2002 — but AI-generated entries are now what drives the growth. Within biological-sciences publishing in 2024, function prediction was the most researched AI-driven protein topic at 8.4% of papers, followed by structure prediction (7.6%), protein-drug interactions (3.0%), and synthetic protein design (0.7%).",
                zh: "沒有公開資料，這一切都不成立。自 2021 年以來，主要的蛋白質科學資料庫大幅成長：UniProt 增加 31%、蛋白質資料庫(PDB)增加 23%，AlphaFold 資料庫則暴增 585%。這些基礎設施都很老 — PDB 可追溯到 1971 年，是生物科學界第一個開放取用的數位資源，Pfam 是 1995 年、STRING 是 2000 年、UniProt 是 2002 年 — 但如今推動成長的是 AI 生成的條目。在 2024 年的生物科學發表中，功能預測是最熱門的 AI 蛋白質研究主題，佔論文的 8.4%，其次是結構預測(7.6%)、蛋白質—藥物交互作用(3.0%)，以及合成蛋白質設計(0.7%)。" } },
      { type: "p",
        text: { en: "Microscopy is following the same curve. Light-based microscopy foundation models doubled from four to eight in 2024, and while no electron or fluorescence microscopy foundation models were released in 2023, four of each appeared in 2024.",
                zh: "顯微鏡領域走的是同一條曲線。以光學為基礎的顯微鏡基礎模型在 2024 年從 4 個倍增到 8 個；電子與螢光顯微鏡的基礎模型在 2023 年掛零，2024 年則各有 4 個問世。" } }
    ]
  },

  /* -------------------------------------------- 5.6 SCIENCE MODELS TIMELINE */
  {
    type: "timeline",
    id: "science-models",
    nav:      { en: "5.6 Science models", zh: "5.6 科學模型" },
    title:    { en: "5.6 — Foundation models arrive in the rest of science",
                zh: "5.6 — 基礎模型進入其他科學領域" },
    subtitle: { en: "Dozens of scientific foundation models shipped in 2024, some fine-tuned language models, some trained from scratch on weather or atomistic data. A year of notable releases, in order.",
                zh: "2024 年有數十個科學基礎模型問世，有些是微調過的語言模型，有些則以氣象或原子尺度資料從頭訓練。以下是這一年重要發布的時序。" },
    events: [
      { date:  { en: "Feb 6, 2024", zh: "2024 年 2 月 6 日" },
        title: { en: "CrystalLLM — materials science", zh: "CrystalLLM — 材料科學" },
        body:  { en: "Researchers fine-tuned LLaMA-2 70B on text-encoded atomistic data to generate stable materials, achieving nearly double the metastability rate of a leading diffusion model (49% vs. 28%) while keeping the structures physically plausible. The approach supports unconditional generation, structure infilling, and text-guided design.",
                 zh: "研究者把 LLaMA-2 70B 在文字編碼的原子尺度資料上微調，用來生成穩定材料，達到領先擴散模型近兩倍的亞穩態率(49% 對 28%)，同時維持結構在物理上的合理性。這個做法支援無條件生成、結構補洞與文字引導設計。" } },
      { date:  { en: "Feb 14, 2024", zh: "2024 年 2 月 14 日" },
        title: { en: "LlaSMol — chemistry", zh: "LlaSMol — 化學" },
        body:  { en: "To fix LLMs' poor performance on chemistry, researchers built SMolInstruct, a dataset of over 3 million samples across 14 tasks, and fine-tuned a family of models on it. The Mistral-based LlaSMol beat GPT-4 and Claude 3 Opus by a wide margin while tuning just 0.58% of parameters.",
                 zh: "為了修補大型語言模型在化學任務上的糟糕表現，研究者建立了 SMolInstruct — 一個涵蓋 14 種任務、超過 300 萬筆樣本的資料集 — 並在上頭微調出一系列模型。以 Mistral 為底的 LlaSMol 大幅超越 GPT-4 與 Claude 3 Opus，而它只調整了 0.58% 的參數。" } },
      { date:  { en: "Apr 23, 2024", zh: "2024 年 4 月 23 日" },
        title: { en: "ORBIT — Earth science", zh: "ORBIT — 地球科學" },
        body:  { en: "Oak Ridge National Lab released ORBIT, a 113-billion-parameter vision transformer and the largest AI model ever built for climate science — 1,000 times larger than prior models. Trained with a novel parallelism technique and tested on the Frontier supercomputer, it sustained up to 1.6 exaFLOPS.",
                 zh: "橡樹嶺國家實驗室發布 ORBIT，一個 1,130 億參數的視覺 Transformer，是氣候科學史上最大的 AI 模型 — 比先前的模型大 1,000 倍。它以一種新的平行化技術訓練，在 Frontier 超級電腦上測試，持續運算效能達 1.6 exaFLOPS。" } },
      { date:  { en: "May 20, 2024", zh: "2024 年 5 月 20 日" },
        title: { en: "Aurora — Earth system forecasting", zh: "Aurora — 地球系統預報" },
        body:  { en: "Aurora is a large-scale foundation model trained on over a million hours of Earth system data, delivering state-of-the-art forecasts for air quality, ocean waves, cyclone tracks, and high-resolution weather. It outperforms traditional systems at a fraction of the computational cost and can be fine-tuned across domains with minimal resources.",
                 zh: "Aurora 是一個以超過一百萬小時地球系統資料訓練的大型基礎模型，在空氣品質、海浪、氣旋路徑與高解析度天氣預報上都達到最佳水準。它以傳統系統一小部分的運算成本勝過對方，而且只需極少資源就能跨領域微調。" } },
      { date:  { en: "Jul 22, 2024", zh: "2024 年 7 月 22 日" },
        title: { en: "NeuralGCM — weather and climate", zh: "NeuralGCM — 天氣與氣候" },
        body:  { en: "A hybrid model combining a differentiable, physics-based solver with machine learning components. It matches or exceeds leading ML and physics-based models on short- and medium-term forecasts, tracks climate metrics accurately over decades, and captures phenomena such as tropical cyclones — with massive computational savings.",
                 zh: "一個把可微分的物理求解器與機器學習元件結合的混合模型。它在短期與中期預報上追平或超越領先的機器學習與物理模型，能跨數十年準確追蹤氣候指標，也能捕捉熱帶氣旋這類現象 — 而且運算成本大幅降低。" } },
      { date:  { en: "Aug 18, 2024", zh: "2024 年 8 月 18 日" },
        title: { en: "PhysBERT — physics", zh: "PhysBERT — 物理學" },
        body:  { en: "Physics texts are notoriously hard for NLP because of specialized language and complex concepts. PhysBERT, the first physics-specific text-embedding model, was trained on 1.2 million arXiv papers and fine-tuned with supervised data, outperforming general-purpose models on physics tasks such as information retrieval.",
                 zh: "物理文獻對自然語言處理向來是硬骨頭，因為專業術語與複雜概念太多。PhysBERT 是第一個物理專用的文字嵌入模型，以 120 萬篇 arXiv 論文訓練並用監督式資料微調，在資訊檢索等物理任務上勝過通用模型。" } },
      { date:  { en: "Sep 16, 2024", zh: "2024 年 9 月 16 日" },
        title: { en: "FireSat — wildfire detection", zh: "FireSat — 野火偵測" },
        body:  { en: "Google's satellite-based wildfire detection system uses AI to identify fires as small as 5 by 5 meters within 20 minutes of ignition, by analyzing real-time imagery and environmental data. Developed with Earth Fire Alliance and Muon Space, it improves disaster response and advances global wildfire research.",
                 zh: "Google 這套衛星野火偵測系統以 AI 分析即時影像與環境資料，能在起火後 20 分鐘內辨識出小至 5 公尺見方的火勢。它與 Earth Fire Alliance 及 Muon Space 共同開發，既改善災害應變，也推進全球野火研究。" } },
      { date:  { en: "Oct 2024", zh: "2024 年 10 月" },
        title: { en: "Two Nobel Prizes for AI-driven research", zh: "兩座諾貝爾獎頒給 AI 驅動的研究" },
        body:  { en: "Google DeepMind's Demis Hassabis and John Jumper won the Nobel Prize in Chemistry for their pioneering work on protein folding with AlphaFold. John Hopfield and Geoffrey Hinton received the Nobel Prize in Physics for their foundational contributions to neural networks. It was the first year AI-related breakthroughs took top honors in two separate sciences.",
                 zh: "Google DeepMind 的 Demis Hassabis 與 John Jumper 以 AlphaFold 在蛋白質摺疊上的開創性研究獲頒諾貝爾化學獎。John Hopfield 與 Geoffrey Hinton 則以對神經網路的奠基性貢獻獲頒諾貝爾物理獎。這是 AI 相關突破首度在兩個不同的科學領域同時摘下最高榮譽。" } },
      { date:  { en: "Dec 4, 2024", zh: "2024 年 12 月 4 日" },
        title: { en: "GenCast — 15-day weather forecasts", zh: "GenCast — 15 天天氣預報" },
        body:  { en: "Google DeepMind's diffusion-based weather model delivers highly accurate 15-day forecasts, outperforming traditional systems such as the ENS on nearly all metrics, and generating forecasts in minutes rather than hours. Applications span disaster response, renewable energy, and agriculture.",
                 zh: "Google DeepMind 這個以擴散模型為基礎的天氣模型，能提供高準確度的 15 天預報，在幾乎所有指標上都勝過 ENS 等傳統系統，而且生成預報只要幾分鐘而非幾小時。應用範圍橫跨災害應變、再生能源與農業。" } },
      { date:  { en: "Dec 9, 2024", zh: "2024 年 12 月 9 日" },
        title: { en: "AlphaQubit and Willow — quantum computing", zh: "AlphaQubit 與 Willow — 量子運算" },
        body:  { en: "Google DeepMind and Google Quantum AI released AlphaQubit, an AI-based decoder with state-of-the-art quantum error detection. Soon after came Willow, the first quantum chip to achieve exponential error suppression below the surface code threshold. Willow completed a benchmark task in under five minutes that would take the fastest supercomputer over 10 septillion years — longer than the age of the known universe.",
                 zh: "Google DeepMind 與 Google Quantum AI 發布 AlphaQubit，一個具備最先進量子錯誤偵測能力的 AI 解碼器。緊接著推出的 Willow，是第一個在表面碼閾值以下達成指數級錯誤抑制的量子晶片。Willow 在不到五分鐘內完成一項基準任務，而最快的超級電腦要跑上超過 10 秭年 — 比已知宇宙的年齡還長。" } }
    ]
  },

  /* ---------------------------------------------------- FDA DEVICES CHART */
  {
    type: "bars",
    id: "fda",
    nav:      { en: "FDA devices", zh: "FDA 醫材" },
    title:    { en: "FDA-authorized AI-enabled medical devices, by year",
                zh: "FDA 核准的 AI 醫療器材件數，逐年" },
    subtitle: { en: "The FDA authorized its first AI-enabled medical device in 1995, and for two decades annual approvals stayed in the single digits. Then the curve went vertical: 6 in 2015, 223 in 2023.",
                zh: "FDA 於 1995 年核准第一件 AI 醫療器材，接下來二十年，年核准數都停在個位數。之後曲線垂直起飛：2015 年 6 件，2023 年 223 件。" },
    series: [
      { label: { en: "2015", zh: "2015" }, value: 6 },
      { label: { en: "2017", zh: "2017" }, value: 26 },
      { label: { en: "2019", zh: "2019" }, value: 80 },
      { label: { en: "2021", zh: "2021" }, value: 129 },
      { label: { en: "2022", zh: "2022" }, value: 160 },
      { label: { en: "2023", zh: "2023" }, value: 223 }
    ]
  },

  /* ------------------------------------------------------ 5.3/5.4 CLINICAL */
  {
    type: "prose",
    id: "clinical",
    nav:      { en: "5.3–5.5 Clinical AI", zh: "5.3–5.5 臨床應用" },
    title:    { en: "5.3–5.5 — Better than doctors, worse at teamwork",
                zh: "5.3–5.5 — 比醫師強，但不擅長團隊合作" },
    subtitle: { en: "On clinical knowledge benchmarks AI has essentially caught up. On the harder questions — whether handing a doctor an LLM makes the doctor better, and whether the data and ethics infrastructure can keep up — the 2024 evidence is uncomfortable.",
                zh: "在臨床知識基準上，AI 基本上已經追上。但在更難的問題上 — 把大型語言模型交給醫師，醫師會不會變強；資料與倫理的基礎建設跟不跟得上 — 2024 年的證據讓人不太自在。" },
    blocks: [
      { type: "p",
        text: { en: "MedQA, introduced in 2020, draws over 60,000 clinical questions from professional medical board exams. OpenAI's o1 set a new state of the art at 96.0%, a 5.8 percentage point gain over the best score posted in 2023 and 28.4 points above where the benchmark stood in late 2022. Like other general-knowledge benchmarks, MedQA now looks close to saturation — the report treats that as a signal to build harder evaluations, not as proof of clinical competence.",
                zh: "MedQA 於 2020 年推出，從專業醫師執照考試中取出超過 60,000 道臨床題目。OpenAI 的 o1 以 96.0% 創下新的最佳成績，比 2023 年最高分高出 5.8 個百分點，比 2022 年底的水準高出 28.4 個百分點。跟其他通識基準一樣，MedQA 現在看起來已接近飽和 — 報告把這視為該設計更難評測的訊號，而不是臨床能力的證明。" } },
      { type: "h3",
        text: { en: "Two randomized trials, one awkward finding", zh: "兩場隨機試驗，一個尷尬的發現" } },
      { type: "ul",
        items: {
          en: ["In a 2024 single-blind randomized trial with 50 US-licensed physicians working through complex clinical vignettes, doctors given GPT-4 alongside conventional resources scored 76% — barely above the 74% of doctors using conventional resources alone. GPT-4 by itself scored 92%, a 16-percentage-point margin over unassisted physicians, and there was no time saving in either direction.",
               "A 2024–25 randomized controlled trial with 92 physicians looked at management reasoning rather than diagnosis: treatment decisions, risk-benefit trade-offs, patient preferences. Here GPT-4-assisted physicians did beat the control group, by about 6.5 percentage points — but GPT-4 alone still performed on par with the assisted physicians, and the assisted doctors spent slightly longer per case.",
               "The pattern across both is the same: excellent standalone model performance does not automatically transfer to human-AI teams. Closing that gap is a workflow, training, and interface problem, not a model-capability one."],
          zh: ["在一場 2024 年的單盲隨機試驗中，50 位美國執照醫師處理複雜臨床案例，拿到 GPT-4 加傳統資源的醫師得分 76% — 僅略高於只用傳統資源的 74%。GPT-4 自己作答則得到 92%，比沒有輔助的醫師高出 16 個百分點，而且兩組在時間上都沒有省下什麼。",
               "一場 2024 至 2025 年、由 92 位醫師參與的隨機對照試驗，檢視的是「處置推理」而非診斷：治療決策、風險效益權衡、病人偏好。這次 GPT-4 輔助組確實贏過對照組約 6.5 個百分點 — 但 GPT-4 單獨作答仍與輔助組不相上下，而且被輔助的醫師每個案例花的時間還略長一些。",
               "兩場試驗指向同一件事：模型單獨表現優異，不會自動轉移到人機協作。要補上這道落差，是工作流程、訓練與介面設計的問題，不是模型能力的問題。"]
        } },
      { type: "h3",
        text: { en: "Where AI is actually deployed: paperwork", zh: "AI 真正被部署的地方：文書工作" } },
      { type: "p",
        text: { en: "The clearest real-world win of the year was ambient AI scribes — systems that listen to the physician-patient encounter and draft the note. Kaiser Permanente Northern California launched one in late 2023 and thousands of clinicians adopted it before the pilot ended. A Stanford study of a fully integrated, automated scribe found 55% average uptake among physicians, roughly 30 seconds saved per note and about 20 minutes less EHR time per day, with self-reported burden down 35% and burnout down 26%. Investment in ambient scribe technology reportedly reached almost $300 million in 2024.",
                zh: "這一年最明確的實戰勝利是「環境式 AI 抄寫員」 — 系統聆聽醫病對話並草擬病歷。北加州 Kaiser Permanente 在 2023 年底導入，試辦結束前已有數千名臨床人員採用。史丹佛針對一套完全整合、全自動抄寫系統的研究發現，醫師平均採用率 55%，每份病歷約省下 30 秒、每天減少約 20 分鐘的電子病歷時間，醫師自陳的負擔下降 35%、倦怠下降 26%。2024 年投入環境式抄寫技術的資金據報接近 3 億美元。" } },
      { type: "p",
        text: { en: "Stanford Health Care also fully implemented an AI peripheral arterial disease screening model under its FURM (Fair, Useful, Reliable, Measurable) framework. It is expected to reach roughly 1,400 patients a year and operates without external funding — one of only two of six evaluated use cases to make it all the way through.",
                zh: "史丹佛醫療體系也在其 FURM(公平、有用、可靠、可衡量)框架下，全面導入一套 AI 周邊動脈疾病篩檢模型。它預計每年觸及約 1,400 位病人，且無需外部經費即可運作 — 在六個受評估的使用案例中，只有兩個一路走完全程，這是其中之一。" } },
      { type: "h3",
        text: { en: "The data bottleneck nobody solved", zh: "沒人解決的資料瓶頸" } },
      { type: "p",
        text: { en: "More than 80% of FDA-cleared machine learning software targets medical image analysis, yet the training sets are small. The Cancer Genome Atlas — one of the most comprehensive public histopathology collections — holds 11,125 patient samples across 32 cancer types, and histopathology models are often trained on fewer than 1,000 samples when genomic or proteomic labels are required. The geography is narrow too: most US cohorts used to train clinical machine learning algorithms came from California (22), Massachusetts (15), and New York (14), with most states contributing none.",
                zh: "超過 80% 通過 FDA 認證的機器學習軟體是用來分析醫學影像的，但訓練資料集其實很小。癌症基因體圖譜(TCGA)是最完整的公開組織病理資料集之一，收錄 11,125 份病人樣本、涵蓋 32 種癌症；而當研究需要基因體或蛋白質體標註時，組織病理模型往往只能用不到 1,000 份樣本訓練。地理分布也很窄：用來訓練臨床機器學習演算法的美國世代研究，大多來自加州(22)、麻州(15)與紐約州(14)，多數州則掛零。" } },
      { type: "p",
        text: { en: "The scale gap against general-purpose AI is stark. GatorTron, a large clinical LLM built to extract patient information from unstructured records, was trained on 82 billion tokens; Llama 3 was trained on 15 trillion — nearly 182 times more. On the imaging side, RadImageNet contains 16 million image-equivalent tokens against roughly 6 billion for DALL-E, about 375 times more. MIMIC-CXR (377,000 images) and CheXpert Plus (around 226,000 radiographs) are important resources but still small beside ImageNet's roughly 14 million images.",
                zh: "跟通用 AI 相比，規模落差非常刺眼。GatorTron 是一個從非結構化病歷中擷取病人資訊的大型臨床語言模型，訓練用了 820 億個 token；Llama 3 則用了 15 兆個 — 將近 182 倍。影像端，RadImageNet 含有 1,600 萬個影像等值 token，DALL-E 約有 60 億個，約為 375 倍。MIMIC-CXR(377,000 張影像)與 CheXpert Plus(約 226,000 張 X 光片)都是重要資源，但跟 ImageNet 約 1,400 萬張影像相比仍然很小。" } },
      { type: "h3",
        text: { en: "5.5 — And then the ethics field got funded", zh: "5.5 — 接著，倫理研究拿到錢了" } },
      { type: "p",
        text: { en: "The AI Index meta-reviewed thousands of medical ethics studies for this chapter. NIH grants for medical AI ethics projects went from 25 in fiscal 2023 to 337 in fiscal 2024 — after just 2, 3, and 7 grants in the three preceding years. Total funding followed the same shape, jumping from $16.3 million in 2023 to $276 million in 2024, an almost 17-fold increase in a single year. Whatever else 2024 was, it was the year the ethics of medical AI stopped being an unfunded side conversation.",
                zh: "AI 指數團隊為這一章對數千篇醫學倫理研究做了統合回顧。美國國衛院(NIH)給醫學 AI 倫理計畫的補助案，從 2023 財年的 25 件跳到 2024 財年的 337 件 — 而前三年分別只有 2、3、7 件。總經費是同樣的形狀，從 2023 年的 1,630 萬美元躍升到 2024 年的 2.76 億美元，一年之內成長近 17 倍。無論 2024 年還發生了什麼，這一年醫學 AI 倫理不再是沒錢的旁支話題。" } },
      { type: "h3",
        text: { en: "What the literature is actually about", zh: "這些文獻實際在談什麼" } },
      { type: "ul",
        items: {
          en: ["Bias and privacy are the two dominant concerns in 2024, followed by equity, transparency, and trust. The ordering has flipped since 2020, when privacy was the more prominent topic and bias trailed it.",
               "Tool coverage is lopsided. OpenAI's GPT series was discussed in 86 medical AI ethics publications in 2024, up from 42 in 2023 — an order of magnitude more attention than Google, Meta, Anthropic, Mistral, Cohere, or xAI models combined received.",
               "Evaluation interest exploded alongside it. A PubMed search for 'large language model' returns 1,566 papers since 2019, of which 1,210 were published in 2024 alone against 353 in 2023. An early-2024 systematic review of NLP performance on healthcare tasks found over 500 papers, concentrated on medical knowledge (419) and diagnosis (178)."],
          zh: ["2024 年最主要的兩個疑慮是偏誤與隱私，其後是公平性、透明度與信任。這個順序自 2020 年以來已經翻轉 — 當時隱私是更突出的主題，偏誤排在後面。",
               "工具的關注度嚴重傾斜。OpenAI 的 GPT 系列在 2024 年被 86 篇醫學 AI 倫理論文討論，高於 2023 年的 42 篇 — 這個關注度比 Google、Meta、Anthropic、Mistral、Cohere、xAI 的模型加起來還高出一個數量級。",
               "評測的興趣同步爆發。PubMed 上搜尋「large language model」自 2019 年起共有 1,566 篇論文，其中光是 2024 年就有 1,210 篇，而 2023 年是 353 篇。2024 年初一份針對自然語言處理在醫療任務表現的系統性回顧收錄了逾 500 篇論文，集中在醫學知識(419 篇)與診斷(178 篇)。"]
        } },
      { type: "h3",
        text: { en: "Synthetic data as the privacy workaround", zh: "以合成資料繞開隱私問題" } },
      { type: "p",
        text: { en: "Because the real data is scarce and sensitive, 2024 research leaned hard on synthetic data. Studies validated it for privacy-preserving clinical risk prediction — modeling lung cancer risk in ever-smokers from the UK Biobank with ADSGAN, PATEGAN, and DPGAN, where the synthetic distributions closely matched the real ones. A Nature study used a generative image model to optimize drug formulation in silico, correctly predicting the percolation threshold of microcrystalline cellulose in oral tablets. And fine-tuned classifiers augmented with synthetic data outperformed ChatGPT-family models at extracting social determinants of health from clinical notes, while showing less sensitivity to race, ethnicity, and gender descriptors.",
                zh: "正因為真實資料稀少又敏感，2024 年的研究大量倚重合成資料。多項研究驗證它可用於保護隱私的臨床風險預測 — 以 ADSGAN、PATEGAN 與 DPGAN 對英國生物資料庫中的吸菸者建立肺癌風險模型，合成資料的分布與真實資料高度吻合。一篇《自然》研究用生成式影像模型在電腦中最佳化藥物配方，正確預測了口服錠劑中微晶纖維素的滲流閾值。而以合成資料增強、經過微調的分類器，在從病歷擷取健康的社會決定因素上勝過 ChatGPT 系列模型，同時對種族、族裔與性別描述詞的敏感度更低。" } },
      { type: "p",
        text: { en: "Deployment still runs through a handful of vendors. EHR adoption reached roughly 90% for any system and 80% for certified systems as of 2021, and a 2023 American Hospital Association survey found predictive-model use concentrated in Epic, Cerner, and Meditech networks — with Epic, Cerner, and CPSI hospitals mostly running vendor-developed models. Whether AI-enabled health IT reaches rural and underserved settings, which face broadband and infrastructure limits, remains an open question.",
                zh: "實際部署仍要走過少數幾家廠商。截至 2021 年，電子病歷的採用率約為 90%(任一系統)與 80%(認證系統)；2023 年美國醫院協會的調查發現，預測模型的使用集中在 Epic、Cerner 與 Meditech 的體系 — 其中 Epic、Cerner 與 CPSI 的醫院多半使用廠商自建的模型。AI 化的醫療資訊系統能否觸及受限於寬頻與基礎設施的偏鄉與弱勢地區，仍是未解的問題。" } }
    ]
  },

  /* ------------------------------------------------- ETHICS PUBS CHART */
  {
    type: "bars",
    id: "ethics-pubs",
    nav:      { en: "Ethics papers", zh: "倫理論文" },
    title:    { en: "Medical AI ethics publications, 2020–24",
                zh: "醫學 AI 倫理論文數，2020–24" },
    subtitle: { en: "Attention to ethical issues in medical AI has risen every year for five years, quadrupling from 288 publications in 2020 to 1,031 in 2024. In 2024 bias and privacy were the most cited concerns, followed by equity — a reversal from 2020, when privacy outranked bias.",
                zh: "醫學 AI 的倫理議題已連續五年逐年升溫，從 2020 年的 288 篇論文成長四倍到 2024 年的 1,031 篇。2024 年被引用最多的疑慮是偏誤與隱私，其次是公平性 — 這跟 2020 年隱私排在偏誤之前的順序恰好相反。" },
    series: [
      { label: { en: "2020", zh: "2020" }, value: 288 },
      { label: { en: "2021", zh: "2021" }, value: 397 },
      { label: { en: "2022", zh: "2022" }, value: 523 },
      { label: { en: "2023", zh: "2023" }, value: 674 },
      { label: { en: "2024", zh: "2024" }, value: 1031 }
    ]
  },

  /* ------------------------------------------------------------ ACCORDION */
  {
    type: "accordion",
    id: "questions",
    nav:      { en: "Questions", zh: "問答" },
    title:    { en: "Six questions the chapter answers",
                zh: "這一章回答的六個問題" },
    subtitle: { en: "The findings that are easy to misread, with the numbers attached.",
                zh: "容易被誤讀的幾項發現，附上數字。" },
    qa: [
      { q: { en: "Does an AI scoring 96% on a medical exam mean it can practice medicine?",
             zh: "AI 在醫學考試拿到 96%，代表它能行醫嗎？" },
        a: { en: "No. MedQA is built from professional medical board exam questions, and o1's 96.0% is a genuine record — up 28.4 points since late 2022. But the report explicitly flags the benchmark as approaching saturation, meaning it can no longer discriminate between good and excellent models. Researchers at UC Santa Cruz, Edinburgh, and the NIH argue that a single QA benchmark misses the complexity of real clinical work, and tested five models across 19 medical datasets covering concept recognition, summarization, decision support, and medical calculations instead. Hallucinations and inconsistent multilingual performance persist.",
             zh: "不代表。MedQA 的題目來自專業醫師執照考試，o1 的 96.0% 確實是新紀錄 — 自 2022 年底以來進步 28.4 個百分點。但報告明確指出這個基準已接近飽和，意思是它再也分不出「好」與「極好」的模型。加州大學聖塔克魯茲分校、愛丁堡大學與 NIH 的研究者認為，單一問答基準無法反映真實臨床工作的複雜度，因此改以 19 個醫學資料集測試五個模型，涵蓋概念辨識、摘要、決策支援與醫學計算。幻覺與多語言表現不穩定的問題依然存在。" } },
      { q: { en: "If GPT-4 beats doctors, why not just use it?",
             zh: "既然 GPT-4 贏過醫師，為什麼不直接用它就好？" },
        a: { en: "Because beating doctors on vignettes is not the same as working inside a clinic. In the 2024 diagnostic trial GPT-4 alone scored 92% against 74% for unassisted physicians — but physicians handed the same model only reached 76%, and case completion times did not change. The bottleneck is integration: workflow design, user training, and interface, not raw capability. The 2024–25 management-reasoning trial found a real 6.5-point gain from assistance, but the assisted doctors were slower, which the researchers attributed to deeper reflection rather than friction.",
             zh: "因為在紙上案例贏過醫師，跟在診間裡實際運作是兩回事。在 2024 年的診斷試驗中，GPT-4 單獨作答拿到 92%，沒有輔助的醫師是 74% — 但拿到同一個模型的醫師只達到 76%，而且完成案例的時間沒有改變。瓶頸在整合：工作流程設計、使用者訓練與介面，而不是模型本身的能力。2024 至 2025 年的處置推理試驗確實測到 6.5 個百分點的真實增益，但被輔助的醫師速度較慢，研究者認為那是更深入思考、而非卡頓所致。" } },
      { q: { en: "What does 'AI-enabled medical device' actually cover?",
             zh: "「AI 醫療器材」實際涵蓋什麼？" },
        a: { en: "Mostly imaging. More than 80% of FDA-cleared machine learning software targets the analysis of medical images, and the field is still dominated by two-dimensional data — chest X-rays, histopathology slides, fundus photography — where CNNs and transformers work well. Extension into 3D modalities like CT, MRI, and 3D histopathology is under way but limited by data: UK Biobank's roughly 100,000 MRI scans and TCIA's roughly 50,000 studies are among the largest public 3D sets, and no public 3D histopathology datasets exist at all.",
             zh: "大多是影像。超過 80% 通過 FDA 認證的機器學習軟體是用來分析醫學影像的，而且這個領域仍由二維資料主導 — 胸部 X 光、組織病理切片、眼底攝影 — 這些卷積神經網路與 Transformer 都處理得不錯。往電腦斷層、磁振造影與 3D 組織病理等三維模態延伸的工作正在進行，但受限於資料：英國生物資料庫約 10 萬筆磁振造影、TCIA 約 5 萬件研究，已是最大的公開 3D 資料集，而公開的 3D 組織病理資料集則完全不存在。" } },
      { q: { en: "Are medical foundation models real, or marketing?",
             zh: "醫學基礎模型是真有其事，還是行銷話術？" },
        a: { en: "They shipped, in volume, and they are specialized. 2024 brought general-purpose multimodal models like Med-Gemini alongside discipline-specific ones: EchoCLIP for echocardiology, VisionFM for ophthalmology, CheXagent and Merlin for radiology, and an unusually dense cluster in pathology — CHIEF, Prov-GigaPath, PathChat, TITAN, Virchow, and UNI all within the year. Whether they generalize outside their training institutions is the open question; domain generalization and cross-modal adaptability are listed as the standing challenges for every modeling approach in the chapter.",
             zh: "它們確實大量問世，而且相當專科化。2024 年推出了 Med-Gemini 這類通用多模態模型，也有專科模型：心臟超音波的 EchoCLIP、眼科的 VisionFM、放射科的 CheXagent 與 Merlin，病理科更是異常密集 — CHIEF、Prov-GigaPath、PathChat、TITAN、Virchow 與 UNI 全在同一年出現。它們能否推廣到訓練機構之外仍是未解問題；在本章列出的每一種建模路徑中，領域泛化與跨模態適應性都被列為長期挑戰。" } },
      { q: { en: "How much of medicine's AI research is happening outside the US?",
             zh: "醫學 AI 研究有多少發生在美國以外？" },
        a: { en: "A growing share. Clinical trials mentioning AI rose from 5 in 2014 to 537 in 2024, and in 2024 China led with 105 trials, ahead of the United States at 97 and Italy at 42. The trajectory since 2020 is steep across the board — 249 trials that year, 349 in 2021, 396 in 2022, 448 in 2023 — with the COVID-19 pandemic having accelerated adoption in triage, resource allocation, and outcome prediction before the field expanded into chronic disease management, procedural support, and medication safety.",
             zh: "比例正在上升。提及 AI 的臨床試驗從 2014 年的 5 件成長到 2024 年的 537 件，而 2024 年由中國以 105 件領先，美國 97 件、義大利 42 件緊追在後。2020 年以來整體都是陡升 — 該年 249 件、2021 年 349 件、2022 年 396 件、2023 年 448 件 — COVID-19 疫情先是加速了 AI 在檢傷、資源配置與預後預測上的採用，之後這個領域才擴展到慢性病管理、術中支援與用藥安全。" } },
      { q: { en: "What is the single biggest unsolved problem?",
             zh: "最大的未解問題是什麼？" },
        a: { en: "Data — its size, its diversity, and who it represents. Publicly available histopathology cohorts rarely exceed 10,000 patient samples; longitudinal imaging is badly underrepresented, with ADNI's roughly 2,000 participants over 15-plus years being an exemplar rather than a norm; and acquisition variability across instruments, staining techniques, and institutions introduces batch effects that small training sets amplify. The chapter's proposed remedies are privacy-preserving data sharing such as federated learning, synthetic data generation, and better annotation strategies — none of which is solved.",
             zh: "資料 — 它的規模、多樣性，以及它代表了誰。公開的組織病理世代資料很少超過 10,000 份病人樣本；縱貫性影像嚴重不足，ADNI 那約 2,000 位參與者、追蹤 15 年以上的規模是特例而非常態；而不同儀器、染色技術與機構之間的取像差異會帶來批次效應，小訓練集又會把它放大。本章提出的解方是保護隱私的資料共享(例如聯邦式學習)、合成資料生成，以及更好的標註策略 — 沒有一項已經解決。" } }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 5 · Science and Medicine.",
                zh: "第 5 章「科學與醫學」的頭條發現。" },
    quotes: [
      { text: { en: "The FDA authorized its first AI-enabled medical device in 1995. By 2015 only six had been approved; by 2023 the number had reached 223.",
                zh: "FDA 在 1995 年核准第一件 AI 醫療器材。到 2015 年只有 6 件通過；到 2023 年已達 223 件。" },
        by: "Chapter 5 · Science and Medicine" },
      { text: { en: "GPT-4 alone outperformed doctors — both with and without AI — in diagnosing complex clinical cases.",
                zh: "在診斷複雜臨床案例上，GPT-4 單獨作答的表現勝過醫師 — 無論醫師有沒有 AI 輔助。" },
        by: "Chapter 5 · Science and Medicine" },
      { text: { en: "o1 set a new state of the art of 96.0% on MedQA — 28.4 percentage points above where the benchmark stood in late 2022, and close enough to saturation to need replacing.",
                zh: "o1 在 MedQA 創下 96.0% 的新最佳成績 — 比 2022 年底高出 28.4 個百分點，已接近飽和到該換一個基準了。" },
        by: "Chapter 5 · Science and Medicine" },
      { text: { en: "Since 2021 the AlphaFold Database has grown 585%, UniProt 31%, and the Protein Data Bank 23%.",
                zh: "自 2021 年以來，AlphaFold 資料庫成長 585%、UniProt 成長 31%、蛋白質資料庫成長 23%。" },
        by: "Chapter 5 · Science and Medicine" },
      { text: { en: "In 2024 AI-driven research took two Nobel Prizes: Chemistry for AlphaFold's protein folding, Physics for the foundations of neural networks.",
                zh: "2024 年，AI 驅動的研究拿下兩座諾貝爾獎：化學獎頒給 AlphaFold 的蛋白質摺疊，物理獎頒給神經網路的奠基性貢獻。" },
        by: "Chapter 5 · Science and Medicine" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav: { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read the full Science and Medicine chapter", zh: "閱讀完整的科學與醫學章節" },
    text:  { en: "Chapter 5 (sections 5.1–5.6) with every figure and citation is free from Stanford HAI. Or head back to the report highlights and eight-chapter overview.",
             zh: "第 5 章(5.1–5.6 各節)連同所有圖表與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與八大章節總覽。" },
    link:  { label: { en: "Open the AI Index Report 2025 →", zh: "前往 AI 指數報告 2025 →" },
             url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" }
  }
];

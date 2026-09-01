/* =========================================================================
   Science and Medicine — deep dive · science-medicine.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2024, Chapter 5
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   Chapter 5 is new in the 2024 edition (the seventh), and every figure below
   describes 2023. Drawn from 5.1 Notable Scientific Milestones (AlphaDev,
   FlexiCubes, Synbot, GraphCast, GNoME, flood forecasting) and 5.2 AI in
   Medicine (notable medical systems, clinical knowledge, diagnosis,
   FDA-approved devices, administration and care).
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "science-medicine";

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Science & Medicine · a chapter deep dive", zh: "科學與醫療專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The year AI became an instrument scientists actually pick up",
                zh: "AI 成為科學家真的會拿起來用的儀器的那一年" },
    subtitle: { en: "Chapter 5 is new in the 2024 edition — the AI Index added it in recognition of AI’s growing role in scientific and medical discovery. Its subject is 2023: sorting routines discovered by reinforcement learning and merged into the C++ standard library, 2.2 million new crystal structures, 71 million genetic variants scored in a single pass, and a language model that cleared 90% on a medical board-exam benchmark. Meanwhile the FDA’s approval list kept lengthening — while still containing no generative AI at all.",
                zh: "第 5 章是 2024 年版新增的章節，AI 指數團隊設立它，是因為 AI 在科學與醫療發現中的角色愈來愈重。它談的是 2023 年：由強化學習發現、並被併入 C++ 標準函式庫的排序程式碼，220 萬個新晶體結構，一次評分完成的 7,100 萬個基因變異，還有一個在醫師執照考試基準上突破 90% 的語言模型。同時 FDA 的核准清單持續加長 — 但裡面仍然一件生成式 AI 都沒有。" },
    stats: [
      { label: { en: "AI-related medical devices approved by the FDA in 2022 (2021: 124)", zh: "2022 年 FDA 核准的 AI 相關醫療器材件數(2021 年為 124 件)" }, value: 139 },
      { label: { en: "% — GPT-4 Medprompt on MedQA, up 22.6 points on 2022’s best score", zh: "% — GPT-4 Medprompt 在 MedQA 的準確率，比 2022 年最佳成績高 22.6 個百分點" }, value: 90.2 },
      { label: { en: "million new crystal structures uncovered by GNoME", zh: "GNoME 找出的新晶體結構數(單位：百萬)" }, value: 2.2 },
      { label: { en: "million missense variants scored by AlphaMissense (89% classified)", zh: "AlphaMissense 評估的錯義變異數(單位：百萬，其中 89% 完成分類)" }, value: 71 },
      { label: { en: "% of observed SARS-CoV-2 mutations predicted by EVEscape (prior model: 24%)", zh: "% — EVEscape 預測到的實際 SARS-CoV-2 突變比例(前一代模型為 24%)" }, value: 50 },
      { label: { en: "day global weather forecasts from GraphCast, produced in under a minute", zh: "GraphCast 的全球天氣預報天數，一分鐘內就算完" }, value: 10 }
    ]
  },

  /* ------------------------------------------- 5.1 SCIENTIFIC MILESTONES */
  {
    type: "cards",
    id: "milestones",
    nav:      { en: "5.1 Milestones", zh: "5.1 里程碑" },
    title:    { en: "5.1 — Six results that changed what a lab can do in a week",
                zh: "5.1 — 六項成果，改寫了實驗室一週能做完的事" },
    subtitle: { en: "In 2022 AI began to advance scientific discovery. In 2023 it started shipping: algorithms into production libraries, materials into databases, forecasts into 80-plus countries. These are the six milestones picked by the AI Index Steering Committee.",
                zh: "2022 年 AI 開始推進科學發現，2023 年則進入交付階段：演算法進了正式函式庫，材料進了資料庫，預報進了 80 多個國家。以下是 AI 指數指導委員會選出的六項里程碑。" },
    items: [
      { slug: "alphadev",
        title:   { en: "AlphaDev — faster sorting, in the standard library", zh: "AlphaDev — 更快的排序，而且進了標準函式庫" },
        summary: { en: "A reinforcement learning system wrote sorting routines with fewer instructions than the human benchmarks — and they were merged into the LLVM standard C++ sort library.",
                   zh: "一個強化學習系統寫出比人類基準更短的排序程式碼 — 而且被併進了 LLVM 的 C++ 標準排序函式庫。" },
        tags: ["algorithms"],
        overview: { en: "AlphaDev improved on decades of work in algorithmic optimization, producing shorter instruction sequences than existing human benchmarks for fundamental short-sequence routines such as Sort 3, Sort 4 and Sort 5. On the shortest routines the margin is small (Sort 3: 17 instructions against 18; Sort 5: 42 against 46), but on variable-length sorting it is large (VarSort5: 63 against 115). Some of the discovered algorithms were incorporated into the LLVM standard C++ sort library — the first update to that part of the library in over 10 years, and the first addition designed using reinforcement learning.",
                   zh: "AlphaDev 在演算法最佳化這個累積了數十年的領域上取得進展，為 Sort 3、Sort 4、Sort 5 這類基礎短序列排序寫出比既有人類基準更短的指令序列。在最短的例程上差距不大(Sort 3 用 17 條指令、人類基準 18 條；Sort 5 是 42 對 46)，但在可變長度排序上差距很明顯(VarSort5 是 63 對 115)。其中部分演算法已被納入 LLVM 的 C++ 標準排序函式庫 — 這是該部分函式庫十多年來第一次更新，也是第一次收錄以強化學習設計出來的程式碼。" } },
      { slug: "flexicubes",
        title:   { en: "FlexiCubes — 3D meshes that match the ground truth", zh: "FlexiCubes — 更貼近真實形狀的 3D 網格" },
        summary: { en: "Nvidia’s gradient-based approach to isosurface extraction cut mesh reconstruction error to 34.87% on the IN>5° metric, against 48.66% for the best DMTet variant.",
                   zh: "Nvidia 以梯度為基礎的等值面萃取方法，把網格重建誤差(IN>5°)壓到 34.87%，最佳的 DMTet 版本則是 48.66%。" },
        tags: ["graphics"],
        overview: { en: "3D mesh generation underpins video games, animation, medical imaging and scientific visualization, but traditional isosurface extraction algorithms struggle with limited resolution, structural rigidity and numerical instabilities. FlexiCubes uses AI for gradient-based optimization with adaptable parameters, allowing precise localized mesh adjustments. Measured at 64³ resolution on the IN>5° error metric, where lower is better, FlexiCubes scored 34.87% against 48.66% for DMTet(80), 52.37% for marching cubes and 80.67% for MCSDF.",
                   zh: "3D 網格生成是電玩、動畫、醫學影像與科學視覺化的基礎，但傳統的等值面萃取演算法常受限於解析度不足、結構僵硬與數值不穩定。FlexiCubes 以 AI 進行梯度式最佳化並讓參數可調，能做到精準的局部網格調整。在 64³ 解析度下以 IN>5° 誤差指標評估(數值愈低愈好)，FlexiCubes 得到 34.87%，DMTet(80) 是 48.66%、Marching Cubes 是 52.37%、MCSDF 則是 80.67%。" } },
      { slug: "synbot",
        title:   { en: "Synbot — a robotic chemist that closes the loop", zh: "Synbot — 會自己收斂的機器人化學家" },
        summary: { en: "An AI planning layer, a robot control layer and a physical lab, wired into a feedback loop: Synbot hit 100% conversion yield on a target molecule where the human reference sat at 85%.",
                   zh: "AI 規劃層、機器人控制層與實體實驗室串成一個回饋迴路：Synbot 在一個目標分子上做到 100% 轉化率，人類參考值是 85%。" },
        tags: ["chemistry", "robotics"],
        overview: { en: "Synbot runs three layers — an AI software layer for synthesis planning, a robot software layer that translates commands, and a physical robot layer that runs the experiments — with a closed feedback loop between the AI and the hardware. Asked to synthesize M1 [4-(2,3-dimethoxyphenyl)-1H-pyrrolo[2,3-b]pyridine], it developed multiple synthetic formulas reaching 100% conversion yield, above the mid-80% reference range, and completed the synthesis in significantly less time. The report frames it as a template for pharmaceuticals and materials science.",
                   zh: "Synbot 由三層構成 — 負責合成規劃的 AI 軟體層、負責翻譯指令的機器人軟體層，以及實際做實驗的實體機器人層 — AI 與硬體之間形成封閉的回饋迴路。在合成 M1 [4-(2,3-dimethoxyphenyl)-1H-pyrrolo[2,3-b]pyridine] 的實驗中，它發展出多組合成配方，轉化率達到 100%，高於 80% 中段的參考範圍，而且花的時間明顯更短。報告把它視為製藥與材料科學的一種範本。" } },
      { slug: "graphcast",
        title:   { en: "GraphCast — 10-day forecasts in under a minute", zh: "GraphCast — 一分鐘算出十天天氣" },
        summary: { en: "A graph neural network that beats the industry state of the art, HRES, on root mean squared error for ten-day forecast skill.",
                   zh: "一個圖神經網路，在十日預報的技巧評估上，均方根誤差勝過業界最先進的 HRES 系統。" },
        tags: ["weather"],
        overview: { en: "GraphCast produces highly accurate 10-day weather predictions in under a minute, using graph neural networks over large datasets to forecast temperature, wind speed and atmospheric conditions. Compared against HRES — the High Resolution Forecast, the current industry state-of-the-art simulation system — GraphCast posts a lower root mean squared error, meaning its forecasts correspond more closely to observed weather. The chapter positions it as a tool for extreme-weather preparedness and climate research, not just daily forecasting.",
                   zh: "GraphCast 能在一分鐘內產出高準確度的十日天氣預報，用圖神經網路處理龐大資料集，預測氣溫、風速與大氣狀態。與目前業界最先進的模擬系統 HRES(高解析度預報)相比，GraphCast 的均方根誤差更低，代表它的預報與實際觀測更接近。本章把它定位為極端天氣整備與氣候研究的工具，而不只是每日預報。" } },
      { slug: "gnome",
        title:   { en: "GNoME — 2.2 million new crystal structures", zh: "GNoME — 220 萬個新晶體結構" },
        summary: { en: "Google’s graph network beat the Materials Project, a leading materials-discovery method, on stable crystal count — and surfaced structures human researchers had overlooked.",
                   zh: "Google 的圖網路在穩定晶體數量上勝過材料發現的領先方法 Materials Project，還找出人類研究者漏掉的結構。" },
        tags: ["materials"],
        overview: { en: "Finding new functional materials matters for fields from robotics to semiconductor manufacturing, but the discovery process is normally expensive and slow. GNoME showed that graph networks trained on large datasets can speed it up: it identified a significantly larger number of stable crystals than the Materials Project across structures with two to six unique elements, and unveiled 2.2 million new crystal structures in total, many of them overlooked by human researchers. The chapter reads it as evidence for the power of data and scaling in the sciences.",
                   zh: "找到新的功能性材料，對機器人到半導體製造等領域都很關鍵，但這個發現流程通常又貴又慢。GNoME 證明以大型資料集訓練的圖網路能加速它：在含有 2 到 6 種元素的結構上，它找到的穩定晶體數量明顯多於 Materials Project，總計揭露 220 萬個新晶體結構，其中不少是人類研究者忽略掉的。本章把這件事讀成資料與規模在科學領域確實有威力的證據。" } },
      { slug: "flood-forecasting",
        title:   { en: "Flood forecasting — five days of warning, in 80+ countries", zh: "洪水預報 — 提前五天示警，用於 80 多國" },
        summary: { en: "Google researchers built hydrological models that work on ungauged basins, matching or beating GloFAS on both precision and recall.",
                   zh: "Google 研究者做出能用在無測站流域的水文模型，在精確率與召回率上都追平或勝過 GloFAS。" },
        tags: ["climate"],
        overview: { en: "Floods are among the most common natural disasters and hit hardest in less developed countries, where prevention infrastructure is thin — and exactly where streamflow gauges are missing. The 2023 work produced highly accurate hydrological simulation models that also apply to ungauged basins, predicting certain extreme flood events up to five days in advance with accuracy matching or surpassing state-of-the-art systems such as GloFAS. Median precision and recall beat GloFAS across return periods of 1, 2, 5 and 10 years. The model is open source and already in use for flood prediction in over 80 countries.",
                   zh: "洪水是最常見的天災之一，對基礎建設不足的開發中國家傷害最重 — 而那裡往往正是缺少河川測站的地方。2023 年的研究做出高準確度的水文模擬模型，而且能套用在無測站流域，對特定極端洪災可提前最多五天預測，準確度追平或超越 GloFAS 等最先進系統。在 1、2、5、10 年重現期的事件上，它的精確率與召回率中位數都勝過 GloFAS。這個模型已開源，並實際用於 80 多個國家的洪水預測。" } }
    ]
  },

  /* --------------------------------------------- 5.2 NOTABLE MED SYSTEMS */
  {
    type: "prose",
    id: "med-systems",
    nav:      { en: "5.2 Medicine", zh: "5.2 醫療" },
    title:    { en: "5.2 — Medicine got five new instruments, and none of them is a chatbot",
                zh: "5.2 — 醫學拿到五件新工具，沒有一件是聊天機器人" },
    subtitle: { en: "The systems the AI Index Steering Committee picked out of 2023 all do the same kind of job: they take a measurement that was previously too noisy, too slow or too expensive to make, and make it routine.",
                zh: "AI 指數指導委員會從 2023 年挑出的醫療系統，做的其實是同一件事：把原本太雜訊、太慢或太貴而做不出來的量測，變成例行作業。" },
    blocks: [
      { type: "h3",
        text: { en: "Rescuing data that already exists", zh: "把已經存在的資料救回來" } },
      { type: "p",
        text: { en: "SynthSR converts ordinary clinical brain scans into high-resolution T1-weighted images, the format with the contrast and structural clarity that advanced research needs. That matters because scan quality varies enormously, and variability has kept a large share of existing clinical scans out of research entirely. Correlations between SynthSR output and ground-truth volumes ran from 0.89 to 0.99 at subject level (n=41) across white matter, cortical and subcortical gray matter, ventricles, hippocampus and amygdala; at scan level (n=435) they were lower and more uneven, from 0.60 to 0.99.",
                zh: "SynthSR 把一般的臨床腦部掃描轉成高解析度的 T1 加權影像 — 那是進階研究需要的格式，對比清楚、腦結構分明。這件事之所以重要，是因為掃描品質差異極大，而這種差異讓大量既有的臨床影像根本進不了研究。SynthSR 產出的影像與真實體積的相關係數，在受試者層級(n=41)於白質、皮質灰質、皮質下灰質、腦室、海馬迴與杏仁核之間落在 0.89 到 0.99；在單次掃描層級(n=435)則較低也較不平均，介於 0.60 到 0.99。" } },
      { type: "h3",
        text: { en: "Measuring what mass spectrometry cannot", zh: "量測質譜儀量不到的東西" } },
      { type: "p",
        text: { en: "Diagnosing Parkinson’s and Alzheimer’s depends on identifying biomarkers fast and precisely. Mass spectrometry and ELISA can quantify protein levels but cannot discern changes in structural state — which is where the disease signal often sits. The 2023 answer was ImmunoSEIRA: AI-coupled plasmonic infrared sensors using Surface-Enhanced Infrared Absorption spectroscopy together with an immunoassay technique. Across test samples spanning fibril concentrations from 0% to 100%, the deep neural network’s predicted percentages tracked the actual ones closely.",
                zh: "帕金森氏症與阿茲海默症的診斷，取決於能不能快速精準辨識生物標記。質譜儀與 ELISA 能定量蛋白質濃度，卻分辨不出結構狀態的變化 — 而疾病訊號往往就藏在那裡。2023 年的解法是 ImmunoSEIRA：把 AI 耦合的等離子體紅外線感測器(使用表面增強紅外吸收光譜)與免疫分析技術結合。在纖維化濃度從 0% 到 100% 的測試樣本中，深度神經網路預測的百分比與實際值高度吻合。" } },
      { type: "h3",
        text: { en: "Predicting a virus before it mutates", zh: "在病毒突變之前先預測它" } },
      { type: "p",
        text: { en: "Traditional methods for predicting viral escape rely on real-time strain and antibody data — exactly what is missing in the early stages of a pandemic, when the prediction is worth the most. EVEscape is trained instead on historical sequences plus biophysical and structural information, so it evaluates escape independently of current strain data. Working from prepandemic information only, it predicted 50.0% of observed SARS-CoV-2 mutations, against 46.2% and 32.3% for experimental scans that had pandemic antibody and sera data available, and 24% for a previous model.",
                zh: "預測病毒免疫逃逸的傳統做法，依賴即時的病毒株與抗體資料 — 而那正是疫情初期最缺、卻也最需要預測的時候。EVEscape 改以歷史序列加上生物物理與結構資訊訓練，因此不需要當下的病毒株資料就能評估逃逸。只用疫情前的資訊，它預測到 50.0% 實際發生的 SARS-CoV-2 突變；相較之下，握有疫情期間抗體與血清資料的實驗掃描是 46.2% 與 32.3%，前一代模型則只有 24%。" } },
      { type: "h3",
        text: { en: "Two jobs humans had barely started", zh: "兩件人類幾乎還沒開始做的工作" } },
      { type: "ul",
        items: {
          en: ["AlphaMissense, from Google DeepMind, predicted the pathogenicity of 71 million missense variants — the genetic alterations that impair protein function and can lead to diseases including cancer. It classified 89% of them: 57% likely benign, 32% likely pathogenic, 11% uncertain. For comparison, human annotators have confirmed the nature of just 0.1% of all missense mutations.",
               "The Human Pangenome Reference Consortium — 119 scientists from 60 institutions — used AI to build a more representative map of the human genome. The first draft was released in 2000 and updated in 2022, but the update omitted variations such as blood type and mapped diverse ancestry groups poorly, which makes disease detection unreliable in some populations. The new version annotated a median of 99.07% of protein-coding genes, 99.42% of protein-coding transcripts, 98.16% of noncoding genes and 98.96% of noncoding transcripts."],
          zh: ["Google DeepMind 的 AlphaMissense 預測了 7,100 萬個錯義變異的致病性 — 這類基因改變會損害蛋白質功能，可能導致包含癌症在內的多種疾病。它為其中 89% 完成分類：57% 可能良性、32% 可能致病、11% 無法確定。作為對照，人類標註者至今只確認過所有錯義突變中的 0.1%。",
               "人類泛基因體參考聯盟 — 來自 60 個機構的 119 位科學家 — 用 AI 建立了更具代表性的人類基因體圖譜。第一版草圖在 2000 年釋出、2022 年更新，但那次更新漏掉了血型之類的變異，對不同族裔祖源的涵蓋也不完整，導致某些族群的疾病偵測並不可靠。新版本標註的中位數達到蛋白質編碼基因 99.07%、蛋白質編碼轉錄本 99.42%、非編碼基因 98.16%、非編碼轉錄本 98.96%。"]
        } }
    ]
  },

  /* ------------------------------------------------------ EVESCAPE CHART */
  {
    type: "bars",
    id: "escape",
    nav:      { en: "Viral escape", zh: "病毒逃逸" },
    title:    { en: "Share of observed SARS-CoV-2 mutations predicted, by method",
                zh: "各方法預測到的實際 SARS-CoV-2 突變比例" },
    subtitle: { en: "EVEscape used only prepandemic sequence, biophysical and structural data, and still beat experimental scans that had pandemic antibody and sera data to work from. The previous model managed 24%.",
                zh: "EVEscape 只用了疫情前的序列、生物物理與結構資料，成績卻勝過握有疫情期間抗體與血清資料的實驗掃描。前一代模型只有 24%。" },
    series: [
      { label: { en: "EVEscape", zh: "EVEscape" }, value: 50 },
      { label: { en: "Later scans", zh: "後期實驗掃描" }, value: 46.2 },
      { label: { en: "Earlier scans", zh: "早期實驗掃描" }, value: 32.3 },
      { label: { en: "Previous model", zh: "前一代模型" }, value: 24 }
    ]
  },

  /* -------------------------------------------------- CLINICAL KNOWLEDGE */
  {
    type: "prose",
    id: "clinical",
    nav:      { en: "Clinical AI", zh: "臨床知識" },
    title:    { en: "Clinical knowledge — 90% on the board exams, without fine-tuning",
                zh: "臨床知識 — 執照考試 90 分，而且沒有微調" },
    subtitle: { en: "MedQA was supposed to be hard: over 60,000 questions taken from professional medical board exams and designed to challenge doctors. In 2023 a model crossed 90% on it — and the method that got it there was prompting, not training.",
                zh: "MedQA 本來應該是硬骨頭：超過 60,000 道取自專業醫師執照考試的題目，設計上就是要考倒醫師。2023 年有模型跨過 90% — 而讓它跨過去的方法是提示工程，不是訓練。" },
    blocks: [
      { type: "p",
        text: { en: "Introduced in 2020, MedQA is the standard test of AI clinical knowledge. Performance on it has improved remarkably: the leading system of 2023, GPT-4 Medprompt, reached 90.2% accuracy, an increase of 22.6 percentage points over the top score in 2022. Since the benchmark’s inception, AI capability on MedQA has nearly tripled.",
                zh: "MedQA 於 2020 年推出，是評估 AI 臨床知識的標準測驗。模型在上面的表現進步驚人：2023 年最領先的系統 GPT-4 Medprompt 達到 90.2% 準確率，比 2022 年的最高分高出 22.6 個百分點。自這個基準問世以來，AI 在 MedQA 上的能力幾乎成長為三倍。" } },
      { type: "h3",
        text: { en: "The assumption that broke", zh: "被推翻的那個假設" } },
      { type: "p",
        text: { en: "It was commonly assumed that a general-purpose LLM needs significant fine-tuning on domain-specific data before it can handle specialized medical questions. Research from Microsoft in late 2023 overturned that. GPT-4 Medprompt used prompt engineering alone to steer GPT-4 across MultiMedQA, a suite of four demanding medical benchmarks, and exceeded the top 2022 model Flan-PaLM 540B on the multiple-choice sections by 3.0 points on PubMedQA, 21.5 on MedMCQA and 16.2 on MMLU. It also beat the then state-of-the-art Med-PaLM 2, and it was the first system to pass 90% on MedQA. Prompt engineering, the chapter concludes, is a promising alternative to domain fine-tuning.",
                zh: "過去普遍認為，通用大型語言模型必須先用領域資料做大量微調，才有辦法處理專科醫學問題。微軟 2023 年底的研究推翻了這個假設。GPT-4 Medprompt 只靠提示工程引導 GPT-4 應付 MultiMedQA(由四個高難度醫學基準組成的測驗集)，在選擇題部分超越 2022 年最強的 Flan-PaLM 540B — PubMedQA 高出 3.0 個百分點、MedMCQA 高出 21.5、MMLU 高出 16.2。它同時勝過當時最先進的 Med-PaLM 2，也是第一個在 MedQA 突破 90% 的系統。本章的結論是：提示工程是領域微調之外一條有潛力的路。" } },
      { type: "h3",
        text: { en: "The open-source gap is 20 points", zh: "開源與閉源之間差了 20 分" } },
      { type: "p",
        text: { en: "GPT-4 Medprompt is closed: its weights are not available to the public. The strongest open medical model of 2023, MediTron-70B, scored 70.2% on MedQA — the highest yet achieved by an open-source model, a significant improvement over the previous open state of the art, and ahead of Llama 2 at 63.8%, but 20 points behind Medprompt and 16 behind Med-PaLM 2. The chapter’s point is not that the gap is embarrassing; it is that medical AI only reaches its potential if its capabilities are widely accessible, and right now the best clinical knowledge sits behind closed weights.",
                zh: "GPT-4 Medprompt 是閉源的，權重並未對外開放。2023 年最強的開源醫學模型 MediTron-70B 在 MedQA 拿到 70.2% — 這是開源模型至今的最高分，比先前的開源最佳成績大有進步，也贏過 Llama 2 的 63.8%，但仍落後 Medprompt 20 分、落後 Med-PaLM 2 16 分。本章想講的不是這個差距很難看，而是：醫療 AI 唯有在能力能被廣泛取得時才發揮得了潛力，而現在最強的臨床知識鎖在不公開的權重後面。" } }
    ]
  },

  /* ---------------------------------------------------------- MEDQA CHART */
  {
    type: "bars",
    id: "medqa",
    nav:      { en: "MedQA scores", zh: "MedQA" },
    title:    { en: "MedQA accuracy for selected models, %",
                zh: "選定模型在 MedQA 的準確率(%)" },
    subtitle: { en: "Five models, two release years, one visible split: the three closed models sit at the top, the open ones at the bottom. MediTron-70B and GPT-4 Medprompt were both released in November 2023.",
                zh: "五個模型、兩個發布年份，一道清楚的分界：三個閉源模型在上，開源的在下。MediTron-70B 與 GPT-4 Medprompt 都是 2023 年 11 月發布。" },
    series: [
      { label: { en: "Medprompt", zh: "Medprompt" }, value: 90.2 },
      { label: { en: "Med-PaLM 2", zh: "Med-PaLM 2" }, value: 86.2 },
      { label: { en: "MediTron-70B", zh: "MediTron-70B" }, value: 70.2 },
      { label: { en: "Med-PaLM", zh: "Med-PaLM" }, value: 67.2 },
      { label: { en: "Llama 2", zh: "Llama 2" }, value: 63.8 }
    ]
  },

  /* ------------------------------------------ DIAGNOSIS AND ADMIN (5.2) */
  {
    type: "prose",
    id: "diagnosis",
    nav:      { en: "Diagnosis", zh: "診斷應用" },
    title:    { en: "Diagnosis and paperwork — where the gains are actually measured",
                zh: "診斷與文書 — 真正量得出成效的地方" },
    subtitle: { en: "Away from the benchmarks, 2023’s clinical research asked a narrower question: not whether a model knows medicine, but whether adding it to an existing workflow changes an outcome a hospital can count.",
                zh: "離開基準測試之後，2023 年的臨床研究問的是更窄的問題：不是模型懂不懂醫學，而是把它接進既有流程之後，醫院數得出來的結果會不會改變。" },
    blocks: [
      { type: "h3",
        text: { en: "CoDoC — knowing when to defer", zh: "CoDoC — 知道什麼時候該讓路" } },
      { type: "p",
        text: { en: "AI imaging systems miss diagnoses clinicians catch, and clinicians miss diagnoses AI catches. CoDoC (Complementarity-Driven Deferral to Clinical Workflow) is built around that asymmetry: it decides when to rely on the AI and when to defer to the traditional clinical path. Across four medical datasets its sensitivity beat clinicians by an average of 4.5 percentage points and a standalone AI model by 6.5; its specificity beat clinicians by 2.7 points and the standalone model by 5.7. It also reduced clinical workflow by 66%.",
                zh: "AI 影像系統會漏掉臨床醫師抓得到的診斷，臨床醫師也會漏掉 AI 抓得到的。CoDoC(互補導向的臨床流程轉介)正是圍繞這個不對稱設計的：它判斷什麼時候該相信 AI、什麼時候該交回傳統臨床流程。在四個醫學資料集上，它的敏感度平均比臨床醫師高 4.5 個百分點、比單獨運作的 AI 模型高 6.5 個百分點；特異度則比臨床醫師高 2.7 個百分點、比單獨模型高 5.7 個百分點。它同時把臨床工作流程減少了 66%。" } },
      { type: "h3",
        text: { en: "PANDA — screening for a cancer that hides", zh: "PANDA — 篩檢一種擅長躲藏的癌症" } },
      { type: "p",
        text: { en: "Pancreatic ductal adenocarcinoma is usually found too late for surgery, and screening asymptomatic people is hard because prevalence is low and false positives are costly. A Chinese research team built PANDA to detect and classify pancreatic lesions. In multicenter validation on 6,239 patients it beat the mean radiologist by 34.1% in sensitivity and 6.3% in specificity. In a real-world, multi-scenario test covering 20,530 patients it reached 92.9% sensitivity and 99.9% specificity.",
                zh: "胰管腺癌通常被發現時已經無法手術，而對無症狀者做篩檢又很困難 — 盛行率低，偽陽性的代價卻很高。中國的研究團隊做出 PANDA 來偵測與分類胰臟病灶。在涵蓋 6,239 位病人的多中心驗證中，它的敏感度比放射科醫師平均值高 34.1%、特異度高 6.3%。在涵蓋 20,530 位病人的真實世界多情境測試中，它達到 92.9% 敏感度與 99.9% 特異度。" } },
      { type: "h3",
        text: { en: "Two more results from the same year", zh: "同一年的另外兩項結果" } },
      { type: "ul",
        items: {
          en: ["A meta-review of mammography-image-based AI algorithms found that predicting future breast cancer risk from mammography images alone achieves accuracy comparable to or better than traditional risk assessment tools.",
               "X-Raydar and X-Raydar-NLP, two open-source neural networks for classifying chest X-rays from images and free-text reports, performed at levels comparable to human experts and stayed robust when applied to external datasets."],
          zh: ["一份針對乳房攝影影像 AI 演算法的統合回顧發現，只用乳房攝影影像預測未來的乳癌風險，準確度已可媲美甚至優於傳統的風險評估工具。",
               "X-Raydar 與 X-Raydar-NLP 這兩個開源神經網路，分別以影像與自由文字報告分類胸部 X 光，表現達到與人類專家相當的水準，套用到外部資料集時也維持穩定。"]
        } },
      { type: "h3",
        text: { en: "MedAlign — the benchmark that measures the boring part", zh: "MedAlign — 衡量無聊那一半的基準" } },
      { type: "p",
        text: { en: "Knowledge benchmarks like MedQA and the USMLE do not capture what clinicians actually spend their hours on: information-intensive administrative work over electronic health records. MedAlign, introduced in 2023, is the first extensive EHR-focused benchmark — 983 questions and instructions with 303 clinician responses, drawn from seven medical specialties. Tested on it, the best system was a GPT-4 variant using multistep refinement, and its correctness rate was 65.0%. That is the honest number for administrative competence in 2023, and it sits far below the same family’s 90.2% on MedQA.",
                zh: "MedQA 與 USMLE 這類知識型基準，量不到臨床醫師實際把時間花在哪：圍繞電子病歷的、資訊密集的行政工作。2023 年推出的 MedAlign 是第一個大規模以電子病歷為核心的基準 — 983 道問題與指令、303 份臨床醫師回答，取自七個醫學專科。在它上面測試，表現最好的是採用多步驟精修的 GPT-4 版本，正確率為 65.0%。這是 2023 年行政能力的誠實數字，比同一家族在 MedQA 上拿到的 90.2% 低了一大截。" } }
    ]
  },

  /* ------------------------------------------------------ FDA DEVICES */
  {
    type: "bars",
    id: "fda",
    nav:      { en: "FDA devices", zh: "FDA 醫材" },
    title:    { en: "AI-related medical devices approved by the FDA, by year",
                zh: "FDA 核准的 AI 相關醫療器材件數，逐年" },
    subtitle: { en: "139 devices in 2022, a 12.1% increase on 2021 and more than a 45-fold increase since 2012. The AI Index stops at 2022 because the FDA last updated its list in October 2023, leaving that year incomplete.",
                zh: "2022 年 139 件，比 2021 年增加 12.1%，是 2012 年的 45 倍以上。AI 指數的資料停在 2022 年，因為 FDA 最後一次更新清單是 2023 年 10 月，該年度並不完整。" },
    series: [
      { label: { en: "2012", zh: "2012" }, value: 3 },
      { label: { en: "2016", zh: "2016" }, value: 18 },
      { label: { en: "2018", zh: "2018" }, value: 63 },
      { label: { en: "2020", zh: "2020" }, value: 107 },
      { label: { en: "2021", zh: "2021" }, value: 124 },
      { label: { en: "2022", zh: "2022" }, value: 139 }
    ]
  },

  /* ------------------------------------------------------------ ACCORDION */
  {
    type: "accordion",
    id: "questions",
    nav:      { en: "Questions", zh: "問答" },
    title:    { en: "Six questions this chapter answers",
                zh: "這一章回答的六個問題" },
    subtitle: { en: "The findings that are easiest to over-read, with the numbers attached.",
                zh: "最容易被過度解讀的幾項發現，附上數字。" },
    qa: [
      { q: { en: "Does a 90.2% on MedQA mean AI can practise medicine?",
             zh: "MedQA 拿到 90.2%，代表 AI 能行醫嗎？" },
        a: { en: "No, and the chapter supplies its own counterweight. MedQA is over 60,000 multiple-choice questions from professional medical board exams — real medical knowledge, but knowledge in the format of an exam. MedAlign was built precisely because benchmarks like MedQA and the USMLE do not capture the diverse, information-intensive tasks clinicians actually perform over electronic health records. On MedAlign the best system, a GPT-4 variant with multistep refinement, was correct 65.0% of the time.",
             zh: "不代表，而且本章自己就提供了配重。MedQA 是超過 60,000 道取自專業醫師執照考試的選擇題 — 那確實是醫學知識，但是考試格式的知識。MedAlign 之所以被做出來，正是因為 MedQA、USMLE 這類基準量不到臨床醫師實際在電子病歷上處理的那些多樣又資訊密集的工作。在 MedAlign 上，表現最好的是採用多步驟精修的 GPT-4 版本，正確率為 65.0%。" } },
      { q: { en: "Is any FDA-approved medical device running a large language model?",
             zh: "FDA 核准的醫材裡，有跑大型語言模型的嗎？" },
        a: { en: "No. As of October 2023, when the FDA last updated its list, it had not approved any device that uses generative AI or is powered by an LLM. What the 139 approvals of 2022 mostly are is imaging: 87.1% of them were radiology devices, and the next largest specialty, cardiovascular, accounted for 7.2%. The vertical growth curve and the generative AI boom are two separate stories that had not yet met.",
             zh: "沒有。截至 FDA 最後一次更新清單的 2023 年 10 月，它尚未核准任何使用生成式 AI 或以大型語言模型驅動的器材。2022 年那 139 件核准，主體是影像：其中 87.1% 是放射科器材，第二大的心血管科佔 7.2%。那條垂直上升的成長曲線與生成式 AI 熱潮，是兩個當時還沒交會的故事。" } },
      { q: { en: "Was 2023 really different from 2022 for AI in science?",
             zh: "在科學領域，2023 年真的和 2022 年不一樣嗎？" },
        a: { en: "The chapter’s framing is that 2022 was when AI began to advance scientific discovery, and 2023 was when significantly more consequential applications launched. The tell is deployment rather than publication: AlphaDev’s routines were merged into the LLVM standard C++ sort library — the first update to that part of the library in over 10 years — and the flood forecasting model is open source and already predicting floods in over 80 countries. GNoME’s 2.2 million crystal structures are a database other researchers can search.",
             zh: "本章的說法是：2022 年 AI 開始推進科學發現，2023 年則有更具份量的應用真正問世。判斷的依據是部署而不是發表 — AlphaDev 的程式碼被併入 LLVM 的 C++ 標準排序函式庫，那是該部分函式庫十多年來的第一次更新；洪水預報模型已開源，並實際用在 80 多個國家。GNoME 的 220 萬個晶體結構，則是其他研究者可以直接查詢的資料庫。" } },
      { q: { en: "How far behind are open-source medical models?",
             zh: "開源醫學模型落後多少？" },
        a: { en: "About 20 percentage points on MedQA at the end of 2023. MediTron-70B scored 70.2%, the highest yet by an open model, against 90.2% for GPT-4 Medprompt and 86.2% for Med-PaLM 2, both closed. Llama 2 was at 63.8%. Notably, Medprompt and MediTron-70B were released in the same month, November 2023, so this is a like-for-like snapshot rather than a lag.",
             zh: "在 2023 年底的 MedQA 上大約落後 20 個百分點。MediTron-70B 拿到 70.2%，是開源模型至今最高分；而閉源的 GPT-4 Medprompt 是 90.2%、Med-PaLM 2 是 86.2%。Llama 2 則是 63.8%。值得注意的是 Medprompt 與 MediTron-70B 同樣在 2023 年 11 月發布，所以這是同期比較，不是時間差造成的落後。" } },
      { q: { en: "Do these diagnostic systems replace radiologists?",
             zh: "這些診斷系統會取代放射科醫師嗎？" },
        a: { en: "The two flagship results point the other way. CoDoC exists specifically to decide when not to use the AI, and its gains come from combining the two: 4.5 points of sensitivity over clinicians and 6.5 over a standalone AI model, with clinical workflow cut by 66%. PANDA does beat the mean radiologist outright — 34.1% higher sensitivity in validation on 6,239 patients — but its role is screening a cancer that is currently not screened for at all, which is added coverage rather than substitution.",
             zh: "兩項旗艦成果指向相反的方向。CoDoC 存在的目的，就是判斷什麼時候「不要」用 AI，而它的增益正來自兩者的結合：敏感度比臨床醫師高 4.5 個百分點、比單獨運作的 AI 高 6.5 個百分點，同時把臨床流程減少 66%。PANDA 確實直接勝過放射科醫師平均值 — 在 6,239 位病人的驗證中敏感度高出 34.1% — 但它的角色是篩檢一種目前根本沒有在做篩檢的癌症，那是補上缺口，不是取代誰。" } },
      { q: { en: "What is AI doing for basic biology, as opposed to the clinic?",
             zh: "相對於臨床，AI 在基礎生物學上做了什麼？" },
        a: { en: "Closing coverage gaps that manual work could never close. AlphaMissense scored 71 million missense variants and classified 89% of them, against the 0.1% of all missense mutations that human annotators have managed to confirm. The Human Pangenome Reference Consortium — 119 scientists across 60 institutions — rebuilt the genome map so that groups underrepresented in the 2000 draft and its 2022 update are covered, annotating a median 99.07% of protein-coding genes and 98.16% of noncoding genes.",
             zh: "它在補上人工作業永遠補不完的覆蓋缺口。AlphaMissense 為 7,100 萬個錯義變異評分並分類了其中 89%，而人類標註者至今只確認過所有錯義突變的 0.1%。人類泛基因體參考聯盟 — 60 個機構的 119 位科學家 — 重建了基因體圖譜，讓 2000 年草圖與 2022 年更新中代表性不足的族群被納入，標註的中位數達到蛋白質編碼基因 99.07%、非編碼基因 98.16%。" } }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In its words", zh: "報告原文" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 5 · Science and Medicine.",
                zh: "第 5 章「科學與醫療」的頭條發現。" },
    quotes: [
      { text: { en: "In 2022, AI began to advance scientific discovery. 2023, however, saw the launch of even more significant science-related AI applications — from AlphaDev, which makes algorithmic sorting more efficient, to GNoME, which facilitates the process of materials discovery.",
                zh: "2022 年，AI 開始推進科學發現。但 2023 年出現了更具份量的科學 AI 應用 — 從讓演算法排序更有效率的 AlphaDev，到加速材料發現流程的 GNoME。" },
        by: "Chapter 5 · Science and Medicine" },
      { text: { en: "The standout model of 2023, GPT-4 Medprompt, reached an accuracy rate of 90.2%, marking a 22.6 percentage point increase from the highest score in 2022.",
                zh: "2023 年最突出的模型 GPT-4 Medprompt 達到 90.2% 的準確率，比 2022 年的最高分高出 22.6 個百分點。" },
        by: "Chapter 5 · Science and Medicine" },
      { text: { en: "In 2022, the FDA approved 139 AI-related medical devices, a 12.1% increase from 2021. Since 2012, the number of FDA-approved AI-related medical devices has increased by more than 45-fold.",
                zh: "2022 年 FDA 核准了 139 件 AI 相關醫療器材，比 2021 年增加 12.1%。自 2012 年以來，FDA 核准的 AI 相關醫材數量成長超過 45 倍。" },
        by: "Chapter 5 · Science and Medicine" },
      { text: { en: "As of October 2023, the FDA has not approved any devices that utilize generative AI or are powered by LLMs.",
                zh: "截至 2023 年 10 月，FDA 尚未核准任何使用生成式 AI 或以大型語言模型驅動的醫療器材。" },
        by: "Chapter 5 · Science and Medicine" },
      { text: { en: "Of the 71 million possible missense variants, AlphaMissense classified 89%. In contrast, human annotators have only been able to confirm the nature of 0.1% of all missense mutations.",
                zh: "在 7,100 萬個可能的錯義變異中，AlphaMissense 分類了 89%。相較之下，人類標註者至今只能確認所有錯義突變中 0.1% 的性質。" },
        by: "Chapter 5 · Science and Medicine" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "讀原文" },
    title: { en: "Read Chapter 5 in full", zh: "閱讀第 5 章原文" },
    text:  { en: "Sections 5.1 and 5.2, with every figure and citation, are free from Stanford HAI. Or head back to the report highlights and the nine-chapter overview.",
             zh: "5.1 與 5.2 兩節連同所有圖表與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與九大章節總覽。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

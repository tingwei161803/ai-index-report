/* =========================================================================
   Research and Development — deep dive · research.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2023, Chapter 1
   https://hai.stanford.edu/ai-index/2023-ai-index-report

   Sixth edition of the AI Index. Publication figures in this chapter run to
   2021 (metadata for a year is only complete around the middle of the next
   one); systems, models, conferences and open-source figures run to 2022.
   Drawn from 1.1 Publications, 1.2 Trends in Significant Machine Learning
   Systems, 1.3 AI Conferences and 1.4 Open-Source AI Software.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "research";

window.SITE_META = {
  title:    { en: "AI Index Report 2023", zh: "AI 指數報告 2023" },
  subtitle: { en: "Research & Development · a chapter deep dive", zh: "研發專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "In 2022, the frontier of AI research finished moving inside companies",
                zh: "2022 年，AI 研究的前沿徹底搬進了企業裡" },
    subtitle: { en: "Chapter 1 of the AI Index 2023 follows where AI knowledge is made: publications, significant machine learning systems, large language and multimodal models, conferences and open-source code. Output keeps rising — the world published almost 500,000 AI papers in 2021, more than twice the 2010 figure, and universities still write three-quarters of them. But of the systems that actually moved the frontier in 2022, industry released 32 and academia three. The numbers:",
                zh: "AI 指數 2023 第 1 章追蹤 AI 知識的產地：論文、重要機器學習系統、大型語言與多模態模型、研討會與開源程式碼。產出持續攀升 — 2021 年全球發表近 50 萬篇 AI 論文，是 2010 年的兩倍以上，其中四分之三仍出自大學。但 2022 年真正推動前沿的系統，產業界釋出 32 個，學術界只有 3 個。先看數字：" },
    stats: [
      { label: { en: "thousand AI publications worldwide in 2021 (about 200 thousand in 2010)",
                 zh: "2021 年全球 AI 論文數(千篇；2010 年約為 200)" }, value: 496.01 },
      { label: { en: "significant ML systems released by industry in 2022 (academia released 3)",
                 zh: "2022 年產業界釋出的重要機器學習系統數(學術界為 3)" }, value: 32 },
      { label: { en: "billion parameters in PaLM, about 360 times GPT-2’s 1.5 billion",
                 zh: "PaLM 的參數量(十億)；約為 GPT-2 15 億參數的 360 倍" }, value: 540 },
      { label: { en: "million USD estimated to train PaLM in 2022 (GPT-2 in 2019: about 0.05)",
                 zh: "2022 年訓練 PaLM 的估計成本(百萬美元；2019 年 GPT-2 約 0.05)" }, value: 8.01 },
      { label: { en: "% of large language and multimodal model authors based in the US in 2022",
                 zh: "2022 年大型語言與多模態模型作者出自美國機構的比例(%)" }, value: 54.2 },
      { label: { en: "GitHub AI projects in 2022, up from 1,536 in 2011",
                 zh: "2022 年 GitHub 上的 AI 專案數(2011 年為 1,536 個)" }, value: 347934 }
    ]
  },

  /* --------------------------------------------------- 1.1 PUBLICATIONS */
  {
    type: "prose",
    id: "publications",
    nav:      { en: "1.1 Publications", zh: "1.1 論文發表" },
    title:    { en: "1.1 — Twice as many AI papers as in 2010, and a different mix underneath",
                zh: "1.1 — AI 論文是 2010 年的兩倍，底下的組成也變了" },
    subtitle: { en: "Publication data in this edition stops at 2021, because a year’s papers are only fully captured around the middle of the next one. On that basis: the world produced 496,010 AI publications in 2021, up from roughly 200,000 in 2010. Over 12 years journal publications grew about threefold and preprint repositories 26.6-fold — while conference papers have been falling since 2019.",
                zh: "本版的論文資料停在 2021 年，因為一年的論文往往要到隔年年中才收得齊。以此為準：2021 年全球產出 496,010 篇 AI 論文，2010 年約為 200,000 篇。12 年之間，期刊論文成長約 3 倍、預印本平台成長 26.6 倍 — 研討會論文則自 2019 年起一路下滑。" },
    blocks: [
      { type: "p",
        text: { en: "In 2021, 60% of published AI documents were journal articles, 17% conference papers and 13% repository submissions; books, book chapters, theses and unknown types made up the remaining 10%. The shift toward journals and preprints is not cosmetic. Conference publications peaked in 2019, and the 85,094 papers of 2021 sat 20.4% below that peak — only marginally above the 75,592 recorded back in 2010.",
                zh: "2021 年，60% 的 AI 出版品是期刊論文，17% 是研討會論文，13% 是預印本平台的投稿；書籍、書籍章節、學位論文與未分類則佔剩下的 10%。這種往期刊與預印本傾斜的變化並不只是表面。研討會論文在 2019 年達到高峰，2021 年的 85,094 篇比高峰低了 20.4% — 只比 2010 年的 75,592 篇略多一些。" } },
      { type: "h3",
        text: { en: "What the papers are about, and who writes them", zh: "論文在寫什麼，又是誰在寫" } },
      { type: "ul",
        items: {
          en: ["Pattern recognition and machine learning grew fastest over the past half-decade: since 2015 pattern recognition papers roughly doubled and machine learning papers roughly quadrupled. The next most published fields in 2021 were computer vision (30,075 papers), algorithms (21,527) and data mining (19,181).",
               "Universities still do most of the writing. In 2021 the education sector accounted for 75.2% of AI publications, nonprofits 13.6%, industry 7.2% and government 3.7%. Industry participation is highest in the United States, then the European Union.",
               "But education’s share has been dropping in every region since 2010 — the research base is broadening outward rather than concentrating in universities.",
               "Cross-sector collaboration is where the growth sits: education and nonprofit institutions produced 32,551 joint publications in 2021, industry and education 12,856, and education and government 8,913.",
               "Industry–education collaborations have been among the fastest-growing categories of all, increasing 4.2 times since 2010."],
          zh: ["過去五年成長最快的是模式識別與機器學習：自 2015 年起，模式識別論文約增加一倍，機器學習論文約增加三倍。2021 年發表量次高的領域依序是電腦視覺(30,075 篇)、演算法(21,527 篇)與資料探勘(19,181 篇)。",
               "寫論文的主力仍是大學。2021 年教育部門佔 AI 論文的 75.2%，非營利組織 13.6%，產業界 7.2%，政府機構 3.7%。產業界參與度最高的是美國，其次是歐盟。",
               "不過教育部門的佔比自 2010 年起在每個區域都在下滑 — 研究基礎正在向外擴散，而不是往大學集中。",
               "成長真正發生在跨部門合作上：2021 年教育機構與非營利組織合著 32,551 篇，產業界與教育機構 12,856 篇，教育機構與政府 8,913 篇。",
               "其中產學合作是成長最快的類別之一，自 2010 年以來增加了 4.2 倍。"]
        } },
      { type: "h3",
        text: { en: "The US–China axis is still the biggest — and it just stopped growing",
                zh: "美中軸線仍然最大 — 而它剛剛停止成長" } },
      { type: "p",
        text: { en: "Between 2010 and 2021, no country pair collaborated on AI research more than the United States and China. Joint publications rose roughly fourfold over that period, reaching 10,470 in 2021, and were 2.5 times the total of the next nearest pair, the United Kingdom and China. But the curve has flattened: US–China collaborations grew only 2.1% from 2020 to 2021, the smallest year-over-year increase since 2010.",
                zh: "2010 至 2021 年間，沒有任何一組國家在 AI 研究上的合作多過美國與中國。這段期間雙方合著的論文成長約 4 倍，2021 年達到 10,470 篇，是第二名的英國與中國的 2.5 倍。但曲線已經走平：美中合作論文從 2020 到 2021 年只增加 2.1%，是 2010 年以來最小的年增幅。" } }
    ]
  },

  /* ------------------------------------------------ publications by type */
  {
    type: "bars",
    id: "pubs-type",
    nav:      { en: "Papers by type", zh: "論文型態" },
    title:    { en: "Journals carry the field, preprints are the fastest-growing venue",
                zh: "期刊撐起這個領域，預印本則是成長最快的發表管道" },
    subtitle: { en: "Number of AI publications by type in 2021 (thousands). Over the previous 12 years journal publications grew about threefold and repository submissions 26.6-fold, while conference papers have fallen every year since 2019.",
                zh: "2021 年各類型 AI 論文數量(千篇)。過去 12 年間，期刊論文成長約 3 倍、預印本投稿成長 26.6 倍，而研討會論文自 2019 年起逐年下滑。" },
    series: [
      { label: { en: "Journal", zh: "期刊" },           value: 293.48 },
      { label: { en: "Conference", zh: "研討會" },       value: 85.09 },
      { label: { en: "Repository", zh: "預印本" },       value: 65.21 },
      { label: { en: "Thesis", zh: "學位論文" },         value: 29.88 },
      { label: { en: "Book chapter", zh: "書籍章節" },   value: 13.77 }
    ]
  },

  /* -------------------------------------------- 1.1 GEOGRAPHY + CITATIONS */
  {
    type: "prose",
    id: "geography",
    nav:      { en: "Who publishes", zh: "誰在發表" },
    title:    { en: "China leads on volume, the United States still leads on attention",
                zh: "中國在數量上領先，美國則在被引用上仍然領先" },
    subtitle: { en: "China produced the largest share of the world’s AI journal publications (39.8%) and conference publications (26.2%) in 2021. The United States leads on repository publications (23.5%), conference citations (23.9%) and repository citations (29.2%) — but the report notes those leads are slowly eroding.",
                zh: "2021 年，中國在全球 AI 期刊論文(39.8%)與研討會論文(26.2%)上佔比最高。美國則在預印本論文(23.5%)、研討會引用(23.9%)與預印本引用(29.2%)上領先 — 但報告指出，這些領先正在緩慢流失。" },
    blocks: [
      { type: "h3",
        text: { en: "Journals, conferences, repositories: three different maps",
                zh: "期刊、研討會、預印本：三張不一樣的地圖" } },
      { type: "ul",
        items: {
          en: ["AI journal publications in 2021: China 39.8%, the European Union plus the United Kingdom 15.1%, the United States 10.0%, India 5.6% — India’s share has climbed steadily from 1.3% in 2010.",
               "AI journal citations in 2021: China 29.1%, the EU plus the UK 21.5%, the United States 15.1%. Those three together account for 65.7% of all AI journal citations in the world.",
               "AI conference publications in 2021: China 26.2% — it overtook the EU and the UK in 2017 — followed by the EU plus the UK at 20.3% and the United States at 17.2%. On conference citations the United States still leads with 23.9% against China’s 22.0%, and the gap is narrowing.",
               "AI repository publications in 2021: the United States 23.5%, the EU plus the UK 20.5%, China 11.9%. The United States also takes 29.2% of repository citations, ahead of the EU plus the UK (21.5%) and China (21.0%).",
               "By region, East Asia and the Pacific produced 47.1% of AI journal publications and 36.7% of conference publications in 2021. South Asia’s conference share more than doubled over 12 years, from 3.6% in 2010 to 8.5% in 2021."],
          zh: ["2021 年 AI 期刊論文：中國 39.8%，歐盟加英國 15.1%，美國 10.0%，印度 5.6% — 印度的佔比從 2010 年的 1.3% 一路穩定上升。",
               "2021 年 AI 期刊引用：中國 29.1%，歐盟加英國 21.5%，美國 15.1%。這三方合計拿下全球 AI 期刊引用的 65.7%。",
               "2021 年 AI 研討會論文：中國 26.2%，是在 2017 年超越歐盟加英國的；歐盟加英國以 20.3% 居次，美國 17.2%。但研討會引用仍由美國以 23.9% 領先中國的 22.0%，而且差距正在縮小。",
               "2021 年 AI 預印本論文：美國 23.5%，歐盟加英國 20.5%，中國 11.9%。美國同時拿下 29.2% 的預印本引用，高於歐盟加英國(21.5%)與中國(21.0%)。",
               "以區域來看，2021 年東亞與太平洋地區產出 47.1% 的 AI 期刊論文與 36.7% 的研討會論文。南亞在研討會論文的佔比 12 年間增加超過一倍，從 2010 年的 3.6% 升到 2021 年的 8.5%。"]
        } },
      { type: "h3",
        text: { en: "The ten institutions that publish the most", zh: "發表量最高的十所機構" } },
      { type: "p",
        text: { en: "Since 2010 the single largest producer of AI papers has been the Chinese Academy of Sciences, and the next four are all Chinese universities. In 2021 the Chinese Academy of Sciences published 5,099 AI papers, Tsinghua University 3,373, the University of Chinese Academy of Sciences 2,904, Shanghai Jiao Tong University 2,703 and Zhejiang University 2,590. MIT, with 1,745, was the only non-Chinese institution in the world’s top ten. The report attaches its own caveat: many Chinese research institutions are large, centralized organizations with thousands of researchers, so a raw publication count flatters them.",
                zh: "自 2010 年以來，產出最多 AI 論文的單一機構是中國科學院，緊接在後的四所也全是中國的大學。2021 年，中國科學院發表 5,099 篇 AI 論文，清華大學 3,373 篇，中國科學院大學 2,904 篇，上海交通大學 2,703 篇，浙江大學 2,590 篇。麻省理工學院以 1,745 篇成為全球前十名中唯一的非中國機構。報告自己也加了但書：許多中國研究機構規模龐大、組織集中，動輒數千名研究者，單看論文篇數自然對它們有利。" } }
    ]
  },

  /* ----------------------------------------- journal share by geographic area */
  {
    type: "bars",
    id: "pubs-geo",
    nav:      { en: "Journal share", zh: "期刊佔比" },
    title:    { en: "Four in ten of the world’s AI journal papers now carry a Chinese affiliation",
                zh: "全球每十篇 AI 期刊論文，就有四篇掛著中國的機構" },
    subtitle: { en: "Share of the world total of AI journal publications in 2021 (%). China’s lead here is far wider than in conference papers (26.2%) or repository submissions (11.9%), where the balance looks very different.",
                zh: "2021 年 AI 期刊論文佔世界總數的比例(%)。中國在這裡的領先幅度，遠大於研討會論文(26.2%)或預印本投稿(11.9%) — 那兩張圖的樣貌很不一樣。" },
    series: [
      { label: { en: "China", zh: "中國" },              value: 39.78 },
      { label: { en: "EU + UK", zh: "歐盟與英國" },       value: 15.05 },
      { label: { en: "United States", zh: "美國" },       value: 10.03 },
      { label: { en: "India", zh: "印度" },               value: 5.56 }
    ]
  },

  /* ---------------------------------- 1.2 SIGNIFICANT MACHINE LEARNING SYSTEMS */
  {
    type: "prose",
    id: "systems",
    nav:      { en: "1.2 ML systems", zh: "1.2 重要系統" },
    title:    { en: "1.2 — Thirty-two significant systems from industry, three from academia",
                zh: "1.2 — 產業界 32 個重要系統，學術界 3 個" },
    subtitle: { en: "Epoch AI counted 38 significant machine learning systems released in 2022. Until 2014, most such systems came from academia. In 2022 industry released 32, academia three, research collectives two, and one came out of an industry–academia collaboration. Nonprofits released none.",
                zh: "Epoch AI 統計 2022 年釋出的重要機器學習系統共 38 個。2014 年以前，這類系統多半出自學術界。2022 年產業界釋出 32 個，學術界 3 個，研究集體 2 個，還有 1 個是產學合作。非營利組織掛零。" },
    blocks: [
      { type: "p",
        text: { en: "The report’s explanation is blunt: producing state-of-the-art AI systems increasingly requires large amounts of data, computing power and money — resources that industry actors possess in greater amounts than nonprofits and academia. The compute used by significant systems has grown exponentially over the past half-decade, and since 2010 language models have consistently demanded the most of it. More compute-intensive models also carry greater environmental impact, and industrial players have easier access to those resources than universities do.",
                zh: "報告的解釋很直接：打造最先進的 AI 系統，愈來愈需要大量資料、運算力與金錢 — 而這些資源，產業界擁有的份量遠多於非營利組織與學術界。重要系統所使用的運算量在過去五年呈指數成長，而自 2010 年起，語言模型一直是吃掉最多運算資源的類別。愈耗運算的模型，環境衝擊也愈大，而產業界取得這些資源的難度遠低於大學。" } },
      { type: "h3",
        text: { en: "What got built, and by whom", zh: "造了什麼，又是誰造的" } },
      { type: "ul",
        items: {
          en: ["By domain, language was by far the most common class of system released in 2022, with 23 — roughly six times the next most common type, multimodal systems (4). Drawing accounted for three, and vision and speech for two each.",
               "By country, the United States produced the most significant systems in 2022 with 16, followed by the United Kingdom (8) and China (3); Canada and Germany contributed two each.",
               "Counting people rather than systems widens the gap. In 2022, 285 authors of significant systems were affiliated with US institutions, against 139 in the United Kingdom and 49 in China — more than double the UK and nearly six times China.",
               "The pattern is not new: since 2002 the United States has out-produced both the European Union plus the United Kingdom and China in cumulative significant machine learning systems."],
          zh: ["以領域來看，2022 年釋出最多的是語言系統，共 23 個 — 約為第二名多模態系統(4 個)的六倍。繪圖系統 3 個，視覺與語音各 2 個。",
               "以國家來看，2022 年產出最多重要系統的是美國(16 個)，其次是英國(8 個)與中國(3 個)；加拿大與德國各 2 個。",
               "改看人數而非系統數，差距更大。2022 年參與重要系統開發的作者中，285 位隸屬美國機構，英國 139 位，中國 49 位 — 是英國的兩倍多，將近中國的六倍。",
               "這不是新現象：自 2002 年以來，美國在累計的重要機器學習系統數上，一直領先歐盟加英國，也領先中國。"]
        } }
    ]
  },

  /* --------------------------------------- significant systems by sector, 2022 */
  {
    type: "bars",
    id: "sector-split",
    nav:      { en: "Who builds them", zh: "誰在造模型" },
    title:    { en: "Who released a significant machine learning system in 2022",
                zh: "2022 年，是誰釋出了重要的機器學習系統" },
    subtitle: { en: "Number of significant machine learning systems released in 2022, by sector. Nonprofits released none. Until 2014 academia led this count every single year.",
                zh: "2022 年各部門釋出的重要機器學習系統數量。非營利組織掛零。2014 年以前，這份統計每一年都由學術界領先。" },
    series: [
      { label: { en: "Industry", zh: "產業界" },          value: 32 },
      { label: { en: "Academia", zh: "學術界" },          value: 3 },
      { label: { en: "Collectives", zh: "研究集體" },      value: 2 },
      { label: { en: "Ind.–academia", zh: "產學合作" },    value: 1 }
    ]
  },

  /* ------------------------------------------ 1.2 LLM / MULTIMODAL TRAINING COST */
  {
    type: "cards",
    id: "model-costs",
    nav:      { en: "Model costs", zh: "模型成本" },
    title:    { en: "What it cost to train the flagship models of 2022",
                zh: "訓練 2022 年那些旗艦模型的價碼" },
    subtitle: { en: "New in this edition, the AI Index estimated training costs for large language and multimodal models from the hardware and training time their authors disclosed, tagging each figure as a mid, high or low estimate. The results confirm what the field had only speculated: these models now cost millions of dollars to train, and cost tracks size and compute closely.",
                zh: "本版新增的分析中，AI 指數依據各家揭露的硬體與訓練時間，估算了大型語言與多模態模型的訓練成本，並為每個數字標上中等、偏高或偏低的估計等級。結果證實了業界原本只能揣測的事：這些模型的訓練費用如今動輒數百萬美元，而成本與模型規模、運算量高度相關。" },
    items: [
      { slug: "gpt-2",
        title:   { en: "GPT-2 — the 50,000-dollar baseline", zh: "GPT-2 — 5 萬美元的起點" },
        summary: { en: "Released in February 2019 with 1.5 billion parameters, at an estimated training cost of about 0.05 million dollars.",
                   zh: "2019 年 2 月釋出，15 億個參數，估計訓練成本約 5 萬美元。" },
        tags: ["baseline"],
        overview:{ en: "Considered by many to be the first large language model, GPT-2 is the reference point for everything that followed. Three years later PaLM was around 360 times larger and cost roughly 160 times more to train. Compute tells the same story: Minerva (540B), released by Google in June 2022, used roughly 1,839 times the training compute of GPT-2, and about nine times that of GPT-3.",
                   zh: "許多人認為 GPT-2 是第一個大型語言模型，它也成了後續所有模型的參照點。三年後的 PaLM 規模約大 360 倍，訓練成本約高 160 倍。運算量的故事一樣：Google 於 2022 年 6 月釋出的 Minerva(540B)，訓練運算量約為 GPT-2 的 1,839 倍，也約為 GPT-3 的 9 倍。" } },
      { slug: "palm-540b",
        title:   { en: "PaLM (540B) — 8.01 million dollars", zh: "PaLM(540B) — 801 萬美元" },
        summary: { en: "Google’s 2022 flagship: 540 billion parameters, nearly 360 times GPT-2, at an estimated 8.01 million dollars to train.",
                   zh: "Google 的 2022 年旗艦：5,400 億個參數，將近 GPT-2 的 360 倍，估計訓練成本 801 萬美元。" },
        tags: ["flagship"],
        overview:{ en: "PaLM is the chapter’s headline example of scale compounding into cost. It carries 540 billion parameters against GPT-2’s 1.5 billion, and its estimated training cost is roughly 160 times what GPT-2 cost. The report’s conclusion is deliberately general rather than specific to Google: across the board, large language and multimodal models are becoming larger and pricier.",
                   zh: "PaLM 是這一章用來說明「規模複利成成本」的招牌例子。它有 5,400 億個參數，對比 GPT-2 的 15 億；估計的訓練成本約是 GPT-2 的 160 倍。報告下的結論刻意不只針對 Google：整體而言，大型語言與多模態模型正在變得更大也更貴。" } },
      { slug: "megatron-turing-nlg",
        title:   { en: "Megatron-Turing NLG 530B — 11.35 million", zh: "Megatron-Turing NLG 530B — 1,135 萬美元" },
        summary: { en: "The most expensive training run in the AI Index’s estimates, at about 11.35 million dollars.",
                   zh: "AI 指數所有估計值中最貴的一次訓練，約 1,135 萬美元。" },
        tags: ["cost"],
        overview:{ en: "Megatron-Turing NLG 530B tops the AI Index cost table, ahead of Gopher at an estimated 8.55 million dollars and PaLM at 8.01 million. Where training time was not disclosed by the authors, the AI Index team derived it from hardware speed, training compute and hardware utilization efficiency — which is why each figure carries a mid, high or low tag rather than being presented as precise.",
                   zh: "Megatron-Turing NLG 530B 高居 AI 指數成本表的第一名，超過估計 855 萬美元的 Gopher 與 801 萬美元的 PaLM。若作者沒有揭露訓練時間，AI 指數團隊就依硬體速度、訓練運算量與硬體使用效率反推 — 這也是每個數字都附上中等、偏高或偏低標記，而不是當成精確值的原因。" } },
      { slug: "chinchilla",
        title:   { en: "Chinchilla — 2.11 million dollars", zh: "Chinchilla — 211 萬美元" },
        summary: { en: "DeepMind’s May 2022 model, estimated at 2.11 million dollars — a sign that the million-dollar training run is now ordinary, not extreme.",
                   zh: "DeepMind 於 2022 年 5 月推出的模型，估計 211 萬美元 — 百萬美元級的訓練已經是常態，而不是極端值。" },
        tags: ["cost"],
        overview:{ en: "Chinchilla is the AI Index’s worked example that millions of dollars has become the ordinary price of a serious model rather than an outlier. For comparison, back in 2019 T5-11B was estimated at 1.97 million dollars and Meena at 1.47 million; by 2022 OPT-175B came in at 1.69 million and Minerva (540B) at 1.03 million. Cheap models still exist — Stable Diffusion is estimated at 0.60 million — but the flagship tier has moved a decimal place.",
                   zh: "AI 指數用 Chinchilla 說明：數百萬美元已經是認真做一個模型的常態價格，而不是離群值。作為對照，2019 年的 T5-11B 估計 197 萬美元、Meena 147 萬美元；到了 2022 年，OPT-175B 是 169 萬美元，Minerva(540B)103 萬美元。便宜的模型還是有 — Stable Diffusion 估計 60 萬美元 — 但旗艦這一層已經整個往上跳了一位數。" } },
      { slug: "bloom",
        title:   { en: "BLOOM — 2.29 million, and no single country", zh: "BLOOM — 229 萬美元，而且沒有國籍" },
        summary: { en: "Estimated at 2.29 million dollars and built by more than 1,000 international researchers, BLOOM was listed as indeterminate in national affiliation.",
                   zh: "估計成本 229 萬美元，由超過 1,000 位國際研究者共同完成，國籍歸屬被列為無法判定。" },
        tags: ["collaboration"],
        overview:{ en: "BLOOM, launched in late 2022, is the exception to the chapter’s country-by-country accounting. Because it was the result of a collaboration among more than 1,000 international researchers, the AI Index could not assign it to a single national affiliation and listed it as indeterminate. Its estimated training cost of 2.29 million dollars sits alongside Chinchilla’s 2.11 million — the open, distributed route to a frontier-scale model is not meaningfully cheaper.",
                   zh: "2022 年底推出的 BLOOM，是這一章逐國統計裡的例外。因為它是超過 1,000 位國際研究者合作的成果，AI 指數無法把它歸給任何單一國家，只能標為無法判定。它估計的訓練成本 229 萬美元，和 Chinchilla 的 211 萬相當 — 走開放、分散的路線去做一個前沿規模的模型，並沒有明顯比較便宜。" } },
      { slug: "glm-130b",
        title:   { en: "GLM-130B — China’s only entry in 2022", zh: "GLM-130B — 2022 年中國唯一的一個" },
        summary: { en: "The only Chinese large language or multimodal model released in 2022: a bilingual model from Tsinghua University, estimated at 0.16 million dollars to train.",
                   zh: "2022 年中國唯一釋出的大型語言或多模態模型：來自清華大學的雙語模型，估計訓練成本 16 萬美元。" },
        tags: ["china"],
        overview:{ en: "GLM-130B, an English–Chinese bilingual model built by researchers at Tsinghua University, was the single Chinese large language or multimodal model released in 2022. The contrast with the publication data is stark: China writes 39.8% of the world’s AI journal papers, but only 8.0% of the authors of large language and multimodal models in 2022 were affiliated with Chinese institutions, against 54.2% from the United States and 21.9% from the United Kingdom. 2022 was also the first year in which researchers from Canada, Germany and India contributed to models of this kind.",
                   zh: "GLM-130B 是清華大學研究者打造的中英雙語模型，也是 2022 年中國唯一釋出的大型語言或多模態模型。這和論文數據形成強烈對比：中國寫下全球 39.8% 的 AI 期刊論文，但 2022 年大型語言與多模態模型的作者中，只有 8.0% 隸屬中國機構，美國佔 54.2%，英國佔 21.9%。2022 年也是加拿大、德國與印度的研究者首次參與這類模型開發的一年。" } }
    ]
  },

  /* ------------------------------- 1.3 CONFERENCES + 1.4 OPEN SOURCE + ARGUMENTS */
  {
    type: "accordion",
    id: "questions",
    nav:      { en: "Questions", zh: "問答" },
    title:    { en: "Five questions the chapter answers about the wider ecosystem",
                zh: "這一章對整個生態系回答的五個問題" },
    subtitle: { en: "Conferences, open-source code, and the arguments sitting underneath the headline numbers.",
                zh: "研討會、開源程式碼，以及頭條數字底下的幾個爭論。" },
    qa: [
      { q: { en: "Are AI conferences shrinking?", zh: "AI 研討會在萎縮嗎？" },
        a: { en: "Attendance fell in 2021 and again in 2022, to 59,450 across the conferences the AI Index tracks — but the report puts the dip down to format rather than interest: many conferences returned to hybrid or in-person after being fully virtual in 2020 and 2021, and IJCAI and KR went strictly in-person. NeurIPS remained one of the largest at around 15,530 attendees, followed by CVPR at about 10,170 and ICML at about 7,730. The biggest single-year jump was ICRA, from 1,000 attendees in 2021 to 8,008 in 2022. The report also warns that attendance at virtual conferences is genuinely hard to measure, so the numbers deserve caution.",
             zh: "AI 指數追蹤的研討會總參與人數在 2021 年下滑，2022 年再次下滑至 59,450 人 — 但報告把原因歸給形式而非熱度：許多研討會在 2020、2021 年全面線上之後，2022 年改回混合或實體舉行，IJCAI 與 KR 更是完全實體。NeurIPS 仍是規模最大的其中之一，約 15,530 人，其次是 CVPR 約 10,170 人、ICML 約 7,730 人。單年增幅最大的是 ICRA，從 2021 年的 1,000 人跳到 2022 年的 8,008 人。報告也提醒，線上研討會的實際參與人數本來就很難精確測量，這些數字要保守看待。" } },
      { q: { en: "How big is open-source AI now?", zh: "開源 AI 現在有多大？" },
        a: { en: "GitHub AI projects grew from 1,536 in 2011 to 347,934 in 2022. The contributor map looks nothing like the publication map: as of 2022, developers in India accounted for 24.2% of GitHub AI projects, the European Union plus the United Kingdom 17.3%, the United States 14.0% and China 2.4%. The American share has been declining steadily since 2016. On stars — GitHub’s equivalent of a like — US projects still hold the largest cumulative total at 3.44 million, ahead of the EU plus the UK (2.34 million), China (1.53 million) and India (0.46 million), though new stars have levelled off in many areas.",
             zh: "GitHub 上的 AI 專案從 2011 年的 1,536 個成長到 2022 年的 347,934 個。但貢獻者的分布和論文的分布完全是兩回事：截至 2022 年，印度開發者貢獻了 24.2% 的 GitHub AI 專案，歐盟加英國 17.3%，美國 14.0%，中國 2.4%。美國的佔比自 2016 年起持續下滑。若看星數 — GitHub 上相當於按讚的動作 — 美國專案的累計星數仍以 344 萬居首，高於歐盟加英國(234 萬)、中國(153 萬)與印度(46 萬)，不過近幾年許多地區的新增星數都已趨於平緩。" } },
      { q: { en: "Why are conference papers falling?", zh: "研討會論文為什麼在減少？" },
        a: { en: "Conference publications peaked in 2019, and 2021’s 85,094 papers were 20.4% below that peak — barely above the 75,592 of 2010. Over the same 12 years journal publications grew about threefold and repository submissions 26.6-fold. The chapter does not name a single cause, but it does describe the mechanism: researchers increasingly post pre-peer-reviewed papers to repositories such as arXiv and SSRN to share findings before submitting them to journals and conferences, which accelerates the cycle of information discovery.",
             zh: "研討會論文在 2019 年見頂，2021 年的 85,094 篇比高峰低了 20.4% — 只比 2010 年的 75,592 篇略多。同樣 12 年間，期刊論文成長約 3 倍，預印本投稿成長 26.6 倍。這一章沒有指定單一原因，但描述了機制：研究者愈來愈習慣先把未經同儕審查的論文丟到 arXiv、SSRN 這類平台，在投期刊與研討會之前就先分享成果，藉此加快資訊流通的循環。" } },
      { q: { en: "Has academia actually been pushed out?", zh: "學術界真的被擠出去了嗎？" },
        a: { en: "Out of model building, not out of research. Academia released three significant machine learning systems in 2022 against industry’s 32, and the report is explicit that state-of-the-art systems now require data, computing power and money on a scale industry holds and universities do not. But the education sector still produced 75.2% of all AI publications in 2021, and nine of the world’s ten most prolific AI publishing institutions are universities or academies. The bridge between the two worlds is growing fastest of all: industry–education collaborations reached 12,856 joint publications in 2021, 4.2 times the 2010 figure.",
             zh: "被擠出去的是造模型，不是做研究。2022 年學術界釋出 3 個重要機器學習系統，產業界 32 個；報告也明講，最先進的系統如今需要的資料、運算力與金錢規模，是產業界握有而大學沒有的。但 2021 年教育部門仍產出全部 AI 論文的 75.2%，全球發表量前十名的機構中，有九所是大學或研究院。真正成長最快的是兩個世界之間的橋：產學合著在 2021 年達到 12,856 篇，是 2010 年的 4.2 倍。" } },
      { q: { en: "Is US–China research decoupling?", zh: "美中研究正在脫鉤嗎？" },
        a: { en: "The data shows a plateau, not a break. The United States and China remain by far the largest collaborating pair in AI publications, with 10,470 joint papers in 2021 — roughly four times the 2010 figure and 2.5 times the next pair, the United Kingdom and China. But growth from 2020 to 2021 was 2.1%, the smallest year-over-year increase since 2010. The chapter’s own framing is that although the United States and China continue to dominate AI R&D, research efforts are becoming increasingly geographically dispersed: India’s share of AI journal publications rose from 1.3% in 2010 to 5.6% in 2021, and South Asia’s share of conference papers from 3.6% to 8.5%.",
             zh: "資料顯示的是停滯，不是斷裂。美國與中國仍是 AI 論文合作規模最大的一組，2021 年合著 10,470 篇 — 約為 2010 年的 4 倍，也是第二名英國與中國的 2.5 倍。但 2020 到 2021 年只成長 2.1%，是 2010 年以來最小的年增幅。這一章自己的說法是：儘管美國與中國仍主導 AI 研發，研究活動正在愈來愈分散到更多地方 — 印度在 AI 期刊論文的佔比從 2010 年的 1.3% 升到 2021 年的 5.6%，南亞在研討會論文的佔比也從 3.6% 升到 8.5%。" } }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In Its Words", zh: "報告原文" },
    title:    { en: "The chapter in its own words", zh: "用報告自己的話說一次" },
    subtitle: { en: "Five lines from Chapter 1 that carry the year.",
                zh: "第 1 章裡撐起這一年的五句話。" },
    quotes: [
      { text: { en: "In 2022, there were 32 significant industry-produced machine learning models compared to just three produced by academia.",
                zh: "2022 年，產業界產出了 32 個重要的機器學習模型，學術界只有 3 個。" },
        by: "Chapter 1 · Chapter Highlights" },
      { text: { en: "Building state-of-the-art AI systems increasingly requires large amounts of data, computer power, and money — resources that industry actors inherently possess in greater amounts compared to nonprofits and academia.",
                zh: "打造最先進的 AI 系統，愈來愈需要大量的資料、運算力與金錢 — 而這些資源，產業界天生就比非營利組織和學術界擁有得更多。" },
        by: "Chapter 1 · Chapter Highlights" },
      { text: { en: "PaLM was around 360 times larger than GPT-2 and cost 160 times more. It’s not just PaLM: Across the board, large language and multimodal models are becoming larger and pricier.",
                zh: "PaLM 的規模約是 GPT-2 的 360 倍，成本高出 160 倍。而且不只 PaLM：整體而言，大型語言與多模態模型正在變得更大、也更貴。" },
        by: "Chapter 1 · Chapter Highlights" },
      { text: { en: "The total number of U.S.-China collaborations only increased by 2.1% from 2020 to 2021, the smallest year-over-year growth rate since 2010.",
                zh: "美中合作論文的總數從 2020 到 2021 年只增加了 2.1%，是 2010 年以來最小的年增幅。" },
        by: "Chapter 1 · 1.1 Publications" },
      { text: { en: "Although the United States and China continue to dominate AI R&D, research efforts are becoming increasingly geographically dispersed.",
                zh: "儘管美國與中國仍主導著 AI 研發，研究活動正在愈來愈分散到更多地方。" },
        by: "Chapter 1 · Overview" }
    ]
  },

  /* ------------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 1 in full", zh: "閱讀第 1 章原文" },
    text:  { en: "Chapter 1 (sections 1.1–1.4) — publications, significant machine learning systems, large language and multimodal models, conferences and open-source software — with every figure and citation is free from Stanford HAI.",
             zh: "第 1 章(1.1–1.4 各節) — 論文、重要機器學習系統、大型語言與多模態模型、研討會與開源軟體 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2023-ai-index-report",
             label: { en: "Open the AI Index 2023 →", zh: "開啟 AI 指數 2023 →" } }
  }
];

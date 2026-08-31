/* =========================================================================
   Research and Development — deep dive · research.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2025, Chapter 1
   https://hai.stanford.edu/ai-index/2025-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 1: 1.1 Publications, 1.2 Patents, 1.3 Notable
   AI Models, 1.4 Hardware, 1.5 AI Conferences, 1.6 Open-Source AI Software.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "research";

window.SITE_META = {
  title:    { en: "AI Index Report 2025", zh: "AI 指數報告 2025" },
  subtitle: { en: "Research and Development · a chapter deep dive", zh: "研發專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "In 2024, AI research got bigger, costlier — and almost entirely corporate",
                zh: "2024 年，AI 研究變得更龐大、更昂貴 — 而且幾乎全由企業主導" },
    subtitle: { en: "Chapter 1 of the AI Index 2025 follows where AI knowledge is made: papers, patents, notable models, the chips underneath them, and the energy they burn. The pattern is consistent — output keeps climbing, but the frontier is moving into a smaller number of very well-funded hands. The numbers:",
                zh: "AI 指數 2025 第 1 章追蹤 AI 知識的產地：論文、專利、重要模型、底下的晶片，以及它們燒掉的能源。模式相當一致 — 產出持續攀升，但前沿正在移往少數資金極其充裕的手上。先看數字：" },
    stats: [
      { label: { en: "% of notable AI models that came from industry in 2024 (60% in 2023)", zh: "% 2024 年出自產業界的重要 AI 模型(2023 年為 60%)" }, value: 90 },
      { label: { en: "notable AI models from US institutions in 2024 (China 15, Europe 3)", zh: "2024 年美國機構產出的重要 AI 模型數(中國 15、歐洲 3)" }, value: 40 },
      { label: { en: "thousand AI publications in computer science in 2023 (102 thousand in 2013)", zh: "2023 年電腦科學領域的 AI 論文(千篇；2013 年為 102 千篇)" }, value: 242 },
      { label: { en: "AI patents granted worldwide in 2023, up from 3,833 in 2010", zh: "2023 年全球核准的 AI 專利件數(2010 年為 3,833 件)" }, value: 122511 },
      { label: { en: "-fold drop in the cost of GPT-3.5-level inference in about 18 months", zh: "GPT-3.5 等級推論成本在約 18 個月內下降的倍數" }, value: 280 },
      { label: { en: "tons of CO₂ emitted to train Llama 3.1 405B (GPT-3 emitted 588)", zh: "訓練 Llama 3.1 405B 排放的二氧化碳公噸數(GPT-3 為 588)" }, value: 8930 }
    ]
  },

  /* --------------------------------------------------- 1.1 PUBLICATIONS */
  {
    type: "prose",
    id: "publications",
    nav:      { en: "1.1 Publications", zh: "1.1 論文發表" },
    title:    { en: "1.1 — More AI papers than ever, and China writes the most of them",
                zh: "1.1 — AI 論文比以往任何時候都多，而中國寫得最多" },
    subtitle: { en: "Between 2013 and 2023, AI publications in computer science venues more than doubled, from roughly 102,000 to over 242,000 — a 19.7% rise in the last year alone. AI now accounts for 41.8% of all computer science publications, up from 21.6% a decade earlier.",
                zh: "2013 至 2023 年間，電腦科學領域的 AI 論文增加一倍以上，從約 102,000 篇增至超過 242,000 篇 — 光是最近一年就成長 19.7%。AI 如今佔所有電腦科學論文的 41.8%，十年前僅 21.6%。" },
    blocks: [
      { type: "p",
        text: { en: "The growth is not just more AI researchers writing more AI papers. Fields across computer science — hardware, software engineering, human-computer interaction — are now contributing to AI, so the rise reflects a broader migration of the discipline toward AI methods. Journals carried the largest share of AI publications in 2023 (41.8%), followed by conferences (34.3%), while preprint repositories like arXiv keep gaining ground.",
                zh: "這股成長並不只是更多 AI 研究者寫了更多 AI 論文。電腦科學底下的各個領域 — 硬體、軟體工程、人機互動 — 如今都在為 AI 做出貢獻，因此這波上升反映的是整個學科朝 AI 方法遷移。2023 年，期刊承載了最大比例的 AI 論文(41.8%)，其次是研討會(34.3%)，而 arXiv 這類預印本平台的份額則持續攀升。" } },
      { type: "h3",
        text: { en: "Where the papers come from", zh: "論文從哪裡來" } },
      { type: "ul",
        items: {
          en: ["China led the world in AI article publications in 2023 with 23.2% of the total, ahead of Europe (15.2%) and India (9.2%). China also led on citations, taking 22.6% of all AI publication citations, ahead of Europe (20.9%) and the United States (13.0%).",
               "By region, East Asia and the Pacific produced 34.5% of AI publications and attracted 37.1% of citations — a share that has risen sharply since 2017, when it was roughly level with North America.",
               "Academic institutions remain the engine room, producing 84.9% of AI publications in 2023, versus 7.1% from industry, 4.9% from government and 1.7% from nonprofits.",
               "The mix differs sharply by country: 16.5% of US AI publications come from industry, against 8.0% in China, where 84.5% originate in the education sector.",
               "By topic, machine learning appeared in 75.7% of 2023 AI publications, followed by computer vision (47.2%), pattern recognition (25.9%) and natural language processing (17.1%), with a sharp jump in generative AI papers over the past year."],
          zh: ["2023 年中國以 23.2% 的佔比在 AI 論文發表量上領先全球，高於歐洲(15.2%)與印度(9.2%)。中國在被引用數上同樣領先，拿下所有 AI 論文引用的 22.6%，高於歐洲(20.9%)與美國(13.0%)。",
               "以區域來看，東亞與太平洋地區產出了 34.5% 的 AI 論文，並吸引 37.1% 的引用 — 這個比例自 2017 年以來急速上升，當時它與北美大致相當。",
               "學術機構仍是主要引擎，2023 年產出 84.9% 的 AI 論文，產業界佔 7.1%、政府機構 4.9%、非營利組織 1.7%。",
               "各國的組成差異顯著：美國有 16.5% 的 AI 論文來自產業界，中國僅 8.0%，而中國有 84.5% 出自教育部門。",
               "以主題來看，機器學習出現在 2023 年 75.7% 的 AI 論文中，其次是電腦視覺(47.2%)、模式識別(25.9%)與自然語言處理(17.1%)，過去一年生成式 AI 的論文則大幅激增。"]
        } },
      { type: "h3",
        text: { en: "The most-cited papers tell a different story", zh: "被引用最多的論文說著另一個故事" } },
      { type: "p",
        text: { en: "New this year, the AI Index also tracked the 100 most-cited AI publications of 2021, 2022 and 2023. The United States topped that list every year — 64 papers in 2021, 59 in 2022, 50 in 2023 — with China second each time, though the US share has been gradually declining. Academia produced the most top-cited work (42 papers in 2023), while industry's contribution collapsed from 17 in 2021 and 19 in 2022 to just 7 in 2023: as competition intensified, corporate labs began publishing less often and disclosing less when they do. Google led each year but tied with Tsinghua University in 2023, both contributing eight papers to the top 100.",
                zh: "今年新增的分析中，AI 指數也追蹤了 2021、2022 與 2023 年被引用最多的 100 篇 AI 論文。美國每年都居榜首 — 2021 年 64 篇、2022 年 59 篇、2023 年 50 篇 — 中國每年皆居第二，不過美國的佔比正逐步下滑。學術界產出了最多高被引研究(2023 年 42 篇)，產業界的貢獻則從 2021 年的 17 篇、2022 年的 19 篇，崩跌至 2023 年的僅 7 篇：隨著競爭加劇，企業實驗室發表得更少，發表時揭露的細節也更少。Google 每年領先，但 2023 年與清華大學並列，兩者各有八篇進入前 100。" } }
    ]
  },

  /* ------------------------------------------------ publications by region */
  {
    type: "bars",
    id: "pubs-region",
    nav:      { en: "Papers by region", zh: "各區域論文" },
    title:    { en: "East Asia and the Pacific now produce a third of the world's AI research",
                zh: "東亞與太平洋地區如今產出全球三分之一的 AI 研究" },
    subtitle: { en: "AI publications in computer science as a share of the world total, 2023 (%). East Asia and the Pacific also took 37.1% of all AI publication citations that year.",
                zh: "2023 年電腦科學領域 AI 論文佔世界總數的比例(%)。同年，東亞與太平洋地區也拿下所有 AI 論文引用的 37.1%。" },
    series: [
      { label: { en: "East Asia & Pacific", zh: "東亞與太平洋" },       value: 34.5 },
      { label: { en: "Europe & Central Asia", zh: "歐洲與中亞" },       value: 18.2 },
      { label: { en: "North America", zh: "北美" },                     value: 10.3 },
      { label: { en: "Middle East & N. Africa", zh: "中東與北非" },     value: 5.2 }
    ]
  },

  /* ------------------------------------- 1.2 PATENTS + 1.3 NOTABLE MODELS */
  {
    type: "prose",
    id: "patents-models",
    nav:      { en: "1.2 & 1.3 Patents", zh: "1.2 & 1.3 專利與模型" },
    title:    { en: "1.2 & 1.3 — China owns the patents, the US ships the models",
                zh: "1.2 與 1.3 — 中國掌握專利，美國推出模型" },
    subtitle: { en: "Two very different maps of AI capability. On granted patents, China holds 69.7% of the world total. On notable models — the systems that actually move the frontier — the United States produced 40 in 2024, against China's 15 and Europe's combined three.",
                zh: "兩張截然不同的 AI 實力地圖。在核准專利上，中國握有全球總數的 69.7%。在重要模型上 — 也就是真正推動前沿的那些系統 — 美國 2024 年產出 40 個，中國 15 個，歐洲合計 3 個。" },
    blocks: [
      { type: "h3",
        text: { en: "Patents: growth, and a widening geographic gap", zh: "專利：成長，以及持續拉開的地理差距" } },
      { type: "ul",
        items: {
          en: ["Granted AI patents worldwide grew from 3,833 in 2010 to 122,511 in 2023 — a 29.6% rise in the last year alone.",
               "As of 2023, 82.4% of the world's granted AI patents originated in East Asia and the Pacific, with North America the next largest contributor at 14.2%. The gap has widened steadily since 2010.",
               "By country, China accounts for 69.7% of grants and the United States for 14.2% — down from a US peak of 42.8% in 2015.",
               "Per capita, the picture changes: South Korea led in 2023 with 17.3 granted AI patents per 100,000 inhabitants, followed by Luxembourg (15.3) and China (6.1). Sweden recorded the greatest increase in AI patenting over the decade."],
          zh: ["全球核准的 AI 專利從 2010 年的 3,833 件成長到 2023 年的 122,511 件 — 光是最近一年就上升 29.6%。",
               "截至 2023 年，全球 82.4% 的核准 AI 專利來自東亞與太平洋地區，北美以 14.2% 居次。這道差距自 2010 年以來持續擴大。",
               "以國家來看，中國佔核准量的 69.7%，美國佔 14.2% — 低於美國 2015 年 42.8% 的高峰。",
               "換算成人均，情況就不同了：2023 年南韓以每 10 萬人 17.3 件核准 AI 專利領先，其次是盧森堡(15.3)與中國(6.1)。十年之間，瑞典的 AI 專利成長幅度最大。"]
        } },
      { type: "h3",
        text: { en: "Notable models: fewer of them, and almost none from universities", zh: "重要模型：數量變少，而且幾乎沒有一個來自大學" } },
      { type: "p",
        text: { en: "In 2024 the United States led with 40 notable AI models, followed by China with 15 and France with three. Every major geographic group released fewer notable models than the year before — plausibly a consequence of ever-larger training runs, growing technical complexity, and the difficulty of finding genuinely new modeling approaches. The sectoral split is starker still: Epoch AI counted 55 notable models from industry in 2024 and identified none at all from academia, pushing industry's share to 90.2%, up from about 60% in 2023.",
                zh: "2024 年美國以 40 個重要 AI 模型領先，其次是中國的 15 個與法國的 3 個。所有主要地理區塊釋出的重要模型數量都比前一年少 — 可能的原因包括訓練規模愈來愈大、技術複雜度上升，以及要找出真正新穎的建模方法愈來愈難。部門分布的落差更為劇烈：Epoch AI 統計 2024 年產業界產出 55 個重要模型，學術界則一個也沒有被認定，使產業界的佔比推升到 90.2%，而 2023 年約為 60%。" },
      },
      { type: "ul",
        items: {
          en: ["The top model producers in 2024 were Google (7), OpenAI (7) and Alibaba (6). Since 2014 the cumulative leaders are Google (187), Meta (82) and Microsoft (39).",
               "Among academic institutions since 2014, Carnegie Mellon (25), Stanford (25) and Tsinghua (22) have been the most prolific.",
               "API access was the most common release type in 2024, covering 20 of 61 models — 32.8% of releases, a share that has risen steadily since 2020.",
               "Openness stops short of code: 60.7% of notable models released in 2024 came without corresponding training code, even when weights were published.",
               "A count of zero academic models needs care: it means Epoch AI identified none as notable, not that universities stopped building models. Academic work also takes longer to be recognized."],
          zh: ["2024 年產出最多的是 Google(7 個)、OpenAI(7 個)與阿里巴巴(6 個)。自 2014 年起累計，領先者為 Google(187 個)、Meta(82 個)與 Microsoft(39 個)。",
               "學術機構方面，自 2014 年以來以卡內基美隆大學(25 個)、史丹佛大學(25 個)與清華大學(22 個)產量最高。",
               "2024 年最常見的釋出形式是 API 存取，佔 61 個模型中的 20 個 — 亦即 32.8%，這個比例自 2020 年起穩定上升。",
               "開放到程式碼就停住了：2024 年釋出的重要模型有 60.7% 沒有附上對應的訓練程式碼，即使權重已公開。",
               "學術模型掛零這件事要小心解讀：它的意思是 Epoch AI 沒有把任何一個認定為重要模型，而非大學停止造模型。學術成果也通常需要更久才會獲得認可。"]
        } }
    ]
  },

  /* ------------------------------------------ notable models by organization */
  {
    type: "bars",
    id: "model-orgs",
    nav:      { en: "Model builders", zh: "模型開發者" },
    title:    { en: "A decade of notable models, and who built them",
                zh: "十年的重要模型，以及誰造了它們" },
    subtitle: { en: "Cumulative number of notable AI models by organization, 2014–24. Google alone accounts for more than twice as many as the next contributor; the leading universities sit an order of magnitude behind.",
                zh: "2014 至 2024 年各組織累計產出的重要 AI 模型數。光是 Google 就比第二名多出一倍以上；領先的大學則落後一個數量級。" },
    series: [
      { label: { en: "Google", zh: "Google" },                  value: 187 },
      { label: { en: "Meta", zh: "Meta" },                      value: 82 },
      { label: { en: "Microsoft", zh: "Microsoft" },            value: 39 },
      { label: { en: "Carnegie Mellon", zh: "卡內基美隆" },      value: 25 },
      { label: { en: "Stanford", zh: "史丹佛" },                 value: 25 },
      { label: { en: "Tsinghua", zh: "清華大學" },               value: 22 }
    ]
  },

  /* --------------------------------------------------- SCALING TIMELINE */
  {
    type: "timeline",
    id: "scaling",
    nav:      { en: "Training costs", zh: "訓練成本" },
    title:    { en: "What a frontier model costs, from AlexNet to DeepSeek-V3",
                zh: "從 AlexNet 到 DeepSeek-V3，一個前沿模型要花多少" },
    subtitle: { en: "Training compute for notable models doubles roughly every five months, LLM dataset sizes every eight months, and training power annually. Here is what that compounding looks like in dollars, watts and carbon.",
                zh: "重要模型的訓練運算量約每五個月翻倍，LLM 訓練資料集規模每八個月翻倍，訓練所需電力則每年翻倍。以下是這種複利效應換算成金錢、瓦數與碳排的樣子。" },
    events: [
      { date:  { en: "2012 · AlexNet", zh: "2012 年 · AlexNet" },
        title: { en: "Five days of training, and negligible emissions",
                 zh: "五天的訓練，以及可忽略的排放" },
        body:  { en: "One of the first models to use GPUs for training, AlexNet finished in roughly five to six days on hardware that would look primitive today. Its estimated training emissions were about 0.01 tons of CO₂.",
                 zh: "AlexNet 是最早利用 GPU 訓練的模型之一，在今天看來相當原始的硬體上，大約五到六天就完成訓練。它的訓練排放估計約為 0.01 公噸二氧化碳。" } },
      { date:  { en: "2017 · Transformer", zh: "2017 年 · Transformer" },
        title: { en: "$670 to train the architecture behind every modern LLM",
                 zh: "670 美元，訓練出所有現代 LLM 背後的架構" },
        body:  { en: "The original Transformer was trained on roughly 2 billion tokens, required around 7,400 petaFLOP, drew an estimated 4,500 watts, and cost about $670 to train in inflation-adjusted terms.",
                 zh: "最初的 Transformer 以約 20 億個 token 訓練，需要約 7,400 petaFLOP，估計耗電 4,500 瓦，換算通膨後的訓練成本約 670 美元。" } },
      { date:  { en: "2019 · RoBERTa Large", zh: "2019 年 · RoBERTa Large" },
        title: { en: "Six figures, and state of the art on comprehension",
                 zh: "六位數金額，換來理解任務上的最佳成績" },
        body:  { en: "RoBERTa Large, which posted state-of-the-art results on canonical benchmarks such as SQuAD and GLUE, cost roughly $160,000 to train — a 240-fold jump over the Transformer in two years.",
                 zh: "RoBERTa Large 在 SQuAD、GLUE 等經典基準上取得當時最佳成績，訓練成本約 160,000 美元 — 兩年之間比 Transformer 增加了 240 倍。" } },
      { date:  { en: "2020 · GPT-3 175B", zh: "2020 年 · GPT-3 175B" },
        title: { en: "374 billion tokens, and 588 tons of carbon",
                 zh: "3,740 億個 token，以及 588 公噸的碳" },
        body:  { en: "One of the models underpinning the original ChatGPT was trained on an estimated 374 billion tokens and reportedly emitted around 588 tons of CO₂ during training — roughly 33 times what an average American emits in a year.",
                 zh: "支撐最初 ChatGPT 的模型之一，估計以 3,740 億個 token 訓練，訓練過程據報排放約 588 公噸二氧化碳 — 大約是一位美國人年均排放量的 33 倍。" } },
      { date:  { en: "2023 · GPT-4", zh: "2023 年 · GPT-4" },
        title: { en: "Around $79 million, and 5,184 tons of carbon",
                 zh: "約 7,900 萬美元，以及 5,184 公噸的碳" },
        body:  { en: "The AI Index estimates GPT-4's training cost at around $79 million based on cloud compute rental prices; OpenAI's Sam Altman has said training exceeded $100 million. Estimated training emissions were 5,184 tons of CO₂.",
                 zh: "AI 指數依據雲端運算租用價格，估計 GPT-4 的訓練成本約 7,900 萬美元；OpenAI 執行長 Sam Altman 則表示訓練費用超過 1 億美元。訓練排放估計為 5,184 公噸二氧化碳。" } },
      { date:  { en: "2024 · Llama 3.1 405B", zh: "2024 年 · Llama 3.1 405B" },
        title: { en: "90 days, 25.3 million watts, $170 million",
                 zh: "90 天、2,530 萬瓦、1.7 億美元" },
        body:  { en: "Meta's flagship took roughly 90 days to train — a typical window by today's standards — at an estimated $170 million and a power draw of 25.3 million watts, over 5,000 times the original Transformer. Its training emitted 8,930 tons of CO₂. Llama 3.3, released the same year, was trained on roughly 15 trillion tokens.",
                 zh: "Meta 的旗艦模型花了約 90 天訓練 — 以今天的標準算是常見的時間長度 — 估計成本 1.7 億美元，耗電 2,530 萬瓦，是最初 Transformer 的 5,000 倍以上。訓練排放 8,930 公噸二氧化碳。同年釋出的 Llama 3.3 則以約 15 兆個 token 訓練。" } },
      { date:  { en: "Dec 2024 · DeepSeek-V3", zh: "2024 年 12 月 · DeepSeek-V3" },
        title: { en: "High performance, reportedly for about $6 million",
                 zh: "高性能，據報只花約 600 萬美元" },
        body:  { en: "DeepSeek's V3 drew attention for achieving strong results with far fewer computational resources; its reported training cost was about $6 million, and its emissions are estimated to be comparable to GPT-3 five years earlier. Some reports dispute that figure once salaries, capex and research expenses are counted. Epoch AI finds China's top 10 models by training compute have scaled about 3× per year since late 2021, against roughly 5× per year elsewhere since 2018.",
                 zh: "DeepSeek 的 V3 之所以引人注目，是因為它用遠少於同儕的運算資源就取得強勁成績；據報訓練成本約 600 萬美元，排放估計與五年前的 GPT-3 相當。也有報導質疑這個數字，認為若把薪資、資本支出與研究費用算進去並不只如此。Epoch AI 發現，中國訓練運算量前十名的模型自 2021 年底以來每年約放大 3 倍，而世界其他地方自 2018 年以來每年約 5 倍。" } }
    ]
  },

  /* ------------------------------- 1.4 HARDWARE + 1.5/1.6 THE ECOSYSTEM */
  {
    type: "prose",
    id: "hardware",
    nav:      { en: "1.4–1.6 Hardware", zh: "1.4–1.6 硬體" },
    title:    { en: "1.4–1.6 — The chips get more efficient, the models eat the gains",
                zh: "1.4–1.6 — 晶片效率提升，模型卻把紅利全吃光" },
    subtitle: { en: "Machine learning hardware has improved on every axis that matters: 43% more performance a year, 30% cheaper a year, 40% more energy efficient a year. And yet the power required to train a frontier model is doubling annually.",
                zh: "機器學習硬體在每一個重要面向上都在進步：效能每年成長 43%、成本每年下降 30%、能源效率每年提升 40%。然而，訓練一個前沿模型所需的電力仍在每年翻倍。" },
    blocks: [
      { type: "h3",
        text: { en: "Faster, cheaper, more efficient", zh: "更快、更便宜、更省電" } },
      { type: "ul",
        items: {
          en: ["Measured in 16-bit floating-point operations, machine learning hardware performance grew about 43% annually from 2008 to 2024, doubling every 1.9 years — driven by transistor counts, semiconductor manufacturing, and AI-specific silicon.",
               "Price performance improves about 30% a year. Nvidia's H100, announced in March 2022, delivers 22 billion FLOP per second per dollar — roughly 1.7 times the A100 and 16.9 times the P100 of 2016.",
               "Energy efficiency improves about 40% a year. The B100, released in March 2024, reaches 2.5 trillion FLOP/s per watt, against 74 billion for the 2016 P100 — 33.8 times better.",
               "The A100 remains the most commonly reported training chip, used by 64 notable models, with the H100 climbing fast at 15 models by the end of 2024."],
          zh: ["以 16 位元浮點運算衡量，機器學習硬體效能在 2008 至 2024 年間每年約成長 43%，每 1.9 年翻倍 — 由電晶體數量、半導體製程與 AI 專用晶片共同推動。",
               "性價比每年約改善 30%。Nvidia 於 2022 年 3 月發表的 H100，每美元可提供每秒 220 億次浮點運算 — 約為 A100 的 1.7 倍、2016 年 P100 的 16.9 倍。",
               "能源效率每年約提升 40%。2024 年 3 月推出的 B100 達到每瓦每秒 2.5 兆次浮點運算，而 2016 年的 P100 為 740 億次 — 效率高出 33.8 倍。",
               "A100 仍是最常被回報使用的訓練晶片，共有 64 個重要模型採用；H100 則快速攀升，到 2024 年底已有 15 個模型使用。"]
        } },
      { type: "h3",
        text: { en: "And yet total power keeps doubling", zh: "然而總耗電量仍在翻倍" } },
      { type: "p",
        text: { en: "Efficiency gains have been swallowed whole by scale. The original Transformer drew an estimated 4,500 watts; PaLM, one of Google's first flagship LLMs, drew 2.6 million watts — almost 600 times as much. Llama 3.1 405B required 25.3 million watts, over 5,000 times the Transformer. Epoch AI finds the power needed to train frontier models is doubling every year, and carbon follows: AlexNet's emissions were negligible, GPT-3 emitted around 588 tons, GPT-4 around 5,184 tons, and Llama 3.1 405B around 8,930 tons. For scale, the average American emits 18.08 tons of carbon a year, and a single passenger flying New York to San Francisco and back accounts for 0.99 tons.",
                zh: "效率的進步被規模整個吞掉了。最初的 Transformer 估計耗電 4,500 瓦；Google 早期旗艦 LLM 之一的 PaLM 耗電 260 萬瓦 — 幾乎是前者的 600 倍。Llama 3.1 405B 需要 2,530 萬瓦，是 Transformer 的 5,000 倍以上。Epoch AI 發現，訓練前沿模型所需的電力每年翻倍，碳排也跟著走：AlexNet 的排放可以忽略，GPT-3 約 588 公噸，GPT-4 約 5,184 公噸，Llama 3.1 405B 約 8,930 公噸。作為對照，一位美國人年均排放 18.08 公噸碳，而一名乘客往返紐約與舊金山一趟則相當於 0.99 公噸。" } },
      { type: "h3",
        text: { en: "The community around the models", zh: "模型周圍的社群" } },
      { type: "ul",
        items: {
          en: ["AI conference attendance rose 21.7% from 2023 to 2024, and has grown by more than 60,000 attendees since 2014. NeurIPS remains the largest, drawing almost 20,000 participants in 2024.",
               "GitHub AI projects grew from 1,549 in 2011 to roughly 4.3 million in 2024 — a 40.3% rise in the last year alone.",
               "US-based developers accounted for 23.4% of GitHub AI projects in 2024, with India close behind at 19.9% and Europe at 19.5%. The US share has been declining since 2016 and appears to have stabilized.",
               "New GitHub stars for AI projects rose from 14.0 million in 2023 to 17.7 million in 2024, with US-based projects receiving 21.1 million stars in total."],
          zh: ["AI 研討會的參與人數在 2023 至 2024 年間成長 21.7%，自 2014 年以來增加超過 60,000 人次。NeurIPS 仍是規模最大的一場，2024 年吸引近 20,000 名參與者。",
               "GitHub 上的 AI 專案從 2011 年的 1,549 個成長到 2024 年的約 430 萬個 — 光是最近一年就上升 40.3%。",
               "2024 年，美國開發者貢獻了 23.4% 的 GitHub AI 專案，印度以 19.9% 緊追在後，歐洲則佔 19.5%。美國的佔比自 2016 年起下滑，近年似乎已趨於穩定。",
               "AI 專案獲得的新 GitHub 星數從 2023 年的 1,400 萬增至 2024 年的 1,770 萬，其中美國專案總計獲得 2,110 萬顆星。"]
        } }
    ]
  },

  /* ----------------------------------------------------------- ACCORDION */
  {
    type: "accordion",
    id: "questions",
    nav:      { en: "Questions", zh: "問答" },
    title:    { en: "Five questions the chapter actually answers", zh: "這一章真正回答的五個問題" },
    subtitle: { en: "The open arguments in AI research, with what the 2025 data says about each.",
                zh: "AI 研究中還在爭論的幾件事，以及 2025 年的數據怎麼說。" },
    qa: [
      { q: { en: "Is AI about to run out of training data?", zh: "AI 快要沒有訓練資料了嗎？" },
        a: { en: "Not immediately, but the window is visible. Epoch AI estimates Common Crawl holds a median of 130 trillion tokens, the indexed web roughly 510 trillion, and the entire web around 3,100 trillion; images add about 300 trillion and video about 1,350 trillion. With an 80% confidence interval, Epoch projects the current stock of training data will be fully utilized somewhere between 2026 and 2032. That is later than last year's forecast of high-quality text running out by 2024, because new research showed that filtered web data works better than curated corpora and that models can be trained on the same data multiple times. Overtraining — pushing past the point of diminishing returns to gain cheaper inference — depletes the stock faster.",
             zh: "不是馬上，但期限已經看得見。Epoch AI 估計 Common Crawl 的中位數為 130 兆個 token，已索引的網頁約 510 兆，整個網際網路約 3,100 兆；影像再加上約 300 兆，影片約 1,350 兆。在 80% 信賴區間下，Epoch 預測目前的訓練資料存量會在 2026 到 2032 年之間用盡。這比去年預估的「高品質文字 2024 年就會耗盡」來得晚，因為新研究顯示，經過篩選的網頁資料比精心整理的語料庫更有效，而且同一份資料可以重複訓練多次。過度訓練 — 也就是為了換取更便宜的推論而衝過報酬遞減點 — 會讓存量更快見底。" } },
      { q: { en: "Can synthetic data fill the gap?", zh: "合成資料能補上這個缺口嗎？" },
        a: { en: "Partly, and with caveats. Early research warned of model collapse: repeatedly training on synthetic data causes models to lose the tails of distributions and degrade output quality, observed across VAEs, Gaussian mixture models and LLMs. Newer work found that if synthetic data is layered on top of real data rather than replacing it, collapse does not occur — though accumulation does not necessarily improve performance either. A Slovenian team found most synthetic relational data is still systematically detectable and generally underperforms real data, with occasional exceptions. There are real wins in specific domains: synthetically augmented healthcare datasets raised F1 or AUROC scores by 5%–10% on minority classes, and Stanford and UNC Chapel Hill researchers used automated fact-checking to build FactTune-FS, which outperformed other RLHF and decoding-based methods on factuality.",
             zh: "部分可以，但有但書。早期研究警告過模型崩潰：反覆以合成資料訓練會讓模型失去分布的尾端、輸出品質下降，這在變分自編碼器、高斯混合模型與 LLM 上都被觀察到。較新的研究發現，若合成資料是疊加在真實資料之上而非取而代之，崩潰就不會發生 — 儘管單純累積也未必能提升表現。一支斯洛維尼亞團隊發現，多數合成關聯式資料仍可被系統性地辨識出來，整體表現通常不如真實資料，偶有例外。特定領域確實有實質收穫：經合成擴增的醫療資料集，讓少數類別的 F1 或 AUROC 分數提升 5%–10%；史丹佛與北卡羅來納大學教堂山分校的研究者則以自動事實查核打造 FactTune-FS，在事實性上勝過其他 RLHF 與解碼式方法。" } },
      { q: { en: "Why has using a model got so cheap?", zh: "為什麼用模型變得這麼便宜？" },
        a: { en: "Because smaller models keep catching up to yesterday's frontier. Holding performance fixed, the cost of querying a model scoring GPT-3.5's 64.8 on MMLU fell from $20.00 per million tokens in November 2022 to $0.07 by October 2024 with Gemini-1.5-Flash-8B — a more than 280-fold reduction in roughly 18 months. The same pattern shows up on harder tests: for models scoring above 50% on GPQA, inference fell from $15 per million tokens in May 2024 to $0.12 by December 2024 with Phi-4. Epoch AI estimates that, depending on the task, LLM inference prices have been falling anywhere from 9 to 900 times per year. State-of-the-art models remain priced at a premium — the point is that yesterday's state of the art becomes nearly free.",
             zh: "因為小模型不斷追上昨天的前沿。把效能固定住來看，一個在 MMLU 上達到 GPT-3.5 水準(64.8 分)的模型，查詢成本從 2022 年 11 月的每百萬 token 20.00 美元，降到 2024 年 10 月 Gemini-1.5-Flash-8B 的 0.07 美元 — 約 18 個月內下降超過 280 倍。更難的測試上也是同一個模式：在 GPQA 上得分超過 50% 的模型，推論成本從 2024 年 5 月的每百萬 token 15 美元，降到同年 12 月 Phi-4 的 0.12 美元。Epoch AI 估計，依任務不同，LLM 推論價格每年下降 9 到 900 倍不等。最新的頂尖模型依然賣得比較貴 — 重點在於，昨天的頂尖幾乎已經免費。" } },
      { q: { en: "Who actually builds the models now?", zh: "現在到底是誰在造模型？" },
        a: { en: "Industry, almost exclusively. Nearly 90% of notable models in 2024 came from industry, up from about 60% in 2023, and Epoch AI identified no notable academic models at all that year. Creating a cutting-edge model now demands data, compute and money at a scale universities do not have. But the picture inverts on influence rather than output: academia produced 42 of the 100 most-cited AI papers in 2023, while industry's share of that list fell from 19 papers in 2022 to just 7 in 2023 — corporate labs are publishing less, and disclosing less when they do.",
             zh: "幾乎全是產業界。2024 年將近 90% 的重要模型出自產業界，而 2023 年約為 60%，同年 Epoch AI 甚至沒有認定任何一個學術界的重要模型。打造尖端模型如今需要的資料、運算與金錢規模，已經不是大學負擔得起的。但如果看的是影響力而非產量，畫面就反過來了：2023 年被引用最多的 100 篇 AI 論文中，學術界佔 42 篇，產業界則從 2022 年的 19 篇跌到 2023 年的僅 7 篇 — 企業實驗室發表得更少，發表時揭露的也更少。" } },
      { q: { en: "How much does training cost the climate?", zh: "訓練對氣候的代價有多大？" },
        a: { en: "It is rising steadily, and the reference points are becoming uncomfortable. AlexNet's 2012 training run emitted about 0.01 tons of CO₂. GPT-3 in 2020 emitted around 588 tons, GPT-4 in 2023 around 5,184 tons, and Llama 3.1 405B in 2024 around 8,930 tons. The average American emits 18.08 tons of carbon per year, so Llama 3.1 405B's training run is roughly equivalent to 494 Americans' annual emissions. Notably, DeepSeek V3 — comparable in performance to OpenAI's o1 — is estimated to have emissions in the range of GPT-3, released five years earlier, which suggests efficiency is still available if it is prioritized.",
             zh: "代價持續上升，而參照點正變得令人不安。AlexNet 在 2012 年的訓練排放約 0.01 公噸二氧化碳。2020 年的 GPT-3 約 588 公噸，2023 年的 GPT-4 約 5,184 公噸，2024 年的 Llama 3.1 405B 約 8,930 公噸。一位美國人年均排放 18.08 公噸碳，因此 Llama 3.1 405B 的一次訓練約等於 494 位美國人一整年的排放。值得注意的是，效能與 OpenAI o1 相當的 DeepSeek V3，排放估計落在五年前 GPT-3 的區間 — 這表示只要把效率當一回事，它仍然做得到。" } }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav: { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read the full Research and Development chapter", zh: "閱讀完整的研發章節" },
    text:  { en: "Chapter 1 (sections 1.1–1.6) — publications, patents, notable models, hardware, conferences and open-source software — with every figure and citation is free from Stanford HAI.",
             zh: "第 1 章(1.1–1.6 各節) — 論文、專利、重要模型、硬體、研討會與開源軟體 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { label: { en: "Open the AI Index Report 2025 →", zh: "前往 AI 指數報告 2025 →" },
             url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" }
  }
];

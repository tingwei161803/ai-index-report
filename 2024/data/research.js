/* =========================================================================
   Research and Development — deep dive · research.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2024, Chapter 1
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   The seventh edition of the AI Index; the year under the microscope is 2023.
   Every figure on this page comes from Chapter 1: 1.1 Publications,
   1.2 Patents, 1.3 Frontier AI Research, 1.4 AI Conferences and
   1.5 Open-Source AI Software. Publication and patent data lag by a year in
   this edition, so those two sections describe 2022; models, conferences and
   GitHub run through 2023. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "research";

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Research & Development · a chapter deep dive", zh: "研發專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "2023 was the year foundation models doubled — and the frontier priced universities out",
                zh: "2023 年，基礎模型數量翻倍 — 而前沿研究的價碼把大學擋在門外" },
    subtitle: { en: "Chapter 1 of the AI Index 2024 traces where AI knowledge is made: papers, patents, notable models, foundation models, conferences and open-source code. Publication and patent data still run a year behind, so those sections describe 2022; the model data is current through 2023. The through-line is the same everywhere — output keeps rising, and the frontier keeps drifting toward whoever can pay for it. The numbers:",
                zh: "AI 指數 2024 第 1 章追蹤 AI 知識的產地：論文、專利、重要模型、基礎模型、研討會與開源程式碼。論文與專利資料仍落後一年，因此那兩節講的是 2022 年;模型資料則更新到 2023 年。每一節的主軸都一樣 — 產出持續上升，而前沿持續往付得起錢的人手上移動。先看數字：" },
    stats: [
      { label: { en: "foundation models released in 2023 (72 in 2022)", zh: "2023 年發布的基礎模型數(2022 年為 72)" }, value: 149 },
      { label: { en: "% of 2023 foundation models released open-source (44.4% in 2022)", zh: "% 2023 年以開源形式釋出的基礎模型比例(2022 年為 44.4%)" }, value: 65.7 },
      { label: { en: "notable ML models from US institutions in 2023 (EU 21, China 15)", zh: "2023 年出自美國機構的重要機器學習模型數(歐盟 21、中國 15)" }, value: 61 },
      { label: { en: "million dollars of compute to train Gemini Ultra (GPT-4: 78)", zh: "訓練 Gemini Ultra 的運算成本(百萬美元;GPT-4 為 78)" }, value: 191 },
      { label: { en: "% rise in granted AI patents worldwide from 2021 to 2022", zh: "% 2021 至 2022 年全球核准 AI 專利的成長率" }, value: 62.7 },
      { label: { en: "million GitHub stars for AI projects in 2023 (4.0 million in 2022)", zh: "2023 年 AI 專案獲得的 GitHub 星數(百萬顆;2022 年為 400 萬)" }, value: 12.2 }
    ]
  },

  /* --------------------------------------------------- 1.1 PUBLICATIONS */
  {
    type: "prose",
    id: "publications",
    nav:      { en: "1.1 Publications", zh: "1.1 論文" },
    title:    { en: "1.1 — AI publishing nearly tripled in a decade, then grew 1.1% in a year",
                zh: "1.1 — AI 論文十年間幾乎增為三倍，然後這一年只成長 1.1%" },
    subtitle: { en: "Between 2010 and 2022 the total number of AI publications nearly tripled, from roughly 88,000 to more than 240,000. But the increase over the last year of available data was a modest 1.1% — while conference papers alone jumped 30.2%.",
                zh: "2010 至 2022 年間，AI 論文總數幾乎增為三倍，從約 88,000 篇增至超過 240,000 篇。但在可取得資料的最後一年，成長率只有 1.1% — 而同一年研討會論文卻跳升 30.2%。" },
    blocks: [
      { type: "p",
        text: { en: "The headline number hides two very different curves. Journals carry the overwhelming bulk of AI research — roughly 232,700 journal articles in 2022 against about 41,200 conference papers — but conferences are the faster-moving half. Since 2015 conference publications have grown 2.6 times and journal publications 2.4 times, and in the last year conference output rose 30.2% against 4.5% for journals. Conference papers climbed from 22,727 in 2020 to 31,629 in 2021 and 41,174 in 2022, more than doubling since 2010.",
                zh: "總數這個數字藏了兩條走勢完全不同的曲線。期刊承載了絕大多數的 AI 研究 — 2022 年約有 232,700 篇期刊論文，研討會論文則約 41,200 篇 — 但研討會才是跑得比較快的那一半。自 2015 年起，研討會論文成長 2.6 倍，期刊論文成長 2.4 倍;而最近一年研討會產出上升 30.2%，期刊只有 4.5%。研討會論文從 2020 年的 22,727 篇增至 2021 年的 31,629 篇、2022 年的 41,174 篇，自 2010 年以來增加超過一倍。" } },
      { type: "h3",
        text: { en: "What the papers are about", zh: "論文都在寫什麼" } },
      { type: "ul",
        items: {
          en: ["Machine learning dominates the field mix, with roughly 72,200 publications in 2022 — an almost sevenfold increase since 2015.",
               "The next largest fields are far behind: computer vision (21,309 publications), pattern recognition (19,841) and process management (12,052).",
               "Below those sit computer networks, control theory, algorithms, linguistics and mathematical optimization, each between roughly 6,800 and 10,400 publications.",
               "This edition draws its publication data from CSET, whose methodology changed since the AI Index last used it, so the totals differ slightly from earlier editions."],
          zh: ["機器學習主宰了領域分布，2022 年約有 72,200 篇論文 — 自 2015 年以來成長將近七倍。",
               "後面的領域差距很大：電腦視覺(21,309 篇)、模式識別(19,841 篇)與流程管理(12,052 篇)。",
               "再往下是電腦網路、控制理論、演算法、語言學與數學最佳化，各約落在 6,800 到 10,400 篇之間。",
               "這一版的論文資料來自 CSET，而 CSET 的方法論自 AI 指數上次採用以來已有調整，因此總數與過去幾版略有出入。"]
        } },
      { type: "h3",
        text: { en: "Who writes them", zh: "誰在寫這些論文" } },
      { type: "ul",
        items: {
          en: ["The academic sector produced 81.1% of AI publications in 2022, keeping the position it has held across every region for the past decade.",
               "Industry accounted for 7.9%, government 7.0%, nonprofits 2.6% and everything else 1.5%.",
               "Industry involvement is highest in the United States, where 14.1% of AI publications come from companies, ahead of the European Union plus the United Kingdom (9.5%) and China (7.4%).",
               "China is the most academic of the three: 81.8% of its AI publications come from the education sector, against 75.5% in the United States and 75.6% in the EU plus the UK.",
               "Government-affiliated research runs the other way — 10.1% of Chinese AI publications and 9.3% of EU-plus-UK publications, against 5.6% in the United States."],
          zh: ["2022 年學術部門產出 81.1% 的 AI 論文，維持它過去十年在所有區域都居首的位置。",
               "產業界佔 7.9%、政府部門 7.0%、非營利組織 2.6%，其餘 1.5%。",
               "產業參與度最高的是美國，有 14.1% 的 AI 論文出自企業，高於歐盟加英國(9.5%)與中國(7.4%)。",
               "三者之中中國最學院派：81.8% 的 AI 論文來自教育部門，美國為 75.5%，歐盟加英國為 75.6%。",
               "政府部門的研究則反過來 — 中國有 10.1%、歐盟加英國有 9.3% 的 AI 論文出自政府單位，美國只有 5.6%。"]
        } }
    ]
  },

  /* -------------------------------------------------------- 1.2 PATENTS */
  {
    type: "prose",
    id: "patents",
    nav:      { en: "1.2 Patents", zh: "1.2 專利" },
    title:    { en: "1.2 — AI patents are exploding, and three in five of them are Chinese",
                zh: "1.2 — AI 專利正在爆炸性成長，而每五件就有三件來自中國" },
    subtitle: { en: "Granted AI patents worldwide rose 62.7% between 2021 and 2022 alone, reaching 62,264, and have grown more than 31-fold since 2010. China accounts for 61.1% of them; the US share has fallen from 54.1% in 2010 to 20.9%.",
                zh: "光是 2021 到 2022 年，全球核准的 AI 專利就成長 62.7%，達到 62,264 件，自 2010 年以來增加超過 31 倍。其中 61.1% 來自中國;美國的佔比則從 2010 年的 54.1% 掉到 20.9%。" },
      blocks: [
      { type: "h3",
        text: { en: "Growth, and a rising rejection rate", zh: "成長，以及愈來愈高的駁回率" } },
      { type: "ul",
        items: {
          en: ["Across the whole 2010–14 period, granted AI patents grew 56.1%. Between 2021 and 2022 alone they grew 62.7% — the entire early decade of growth, compressed into one year.",
               "Getting a patent granted has become much harder. In 2015, 42.2% of all filed AI patents were not granted; by 2022 that figure had risen to 67.4%.",
               "In 2022 there were 128,952 ungranted AI patents against 62,264 granted — more than double.",
               "The gap shows up in every major filing region. China recorded roughly 80,500 ungranted filings against 35,300 granted, the United States about 15,100 against 12,100, and the EU plus the UK about 2,170 against 1,170."],
          zh: ["整個 2010 至 2014 年間，核准的 AI 專利成長 56.1%。而光是 2021 到 2022 年就成長 62.7% — 等於把十年前的成長幅度壓縮進一年。",
               "拿到核准變得困難許多。2015 年有 42.2% 的 AI 專利申請沒有獲准;到 2022 年這個數字升到 67.4%。",
               "2022 年未獲准的 AI 專利有 128,952 件，獲准的只有 62,264 件 — 前者是後者的兩倍以上。",
               "這道落差在每個主要申請區域都看得到。中國約有 80,500 件未獲准、35,300 件獲准，美國約 15,100 件對 12,100 件，歐盟加英國約 2,170 件對 1,170 件。"]
        } },
      { type: "h3",
        text: { en: "Where the patents come from", zh: "專利從哪裡來" } },
      { type: "ul",
        items: {
          en: ["As of 2022, 75.2% of the world’s granted AI patents originated in East Asia and the Pacific, with North America next at 21.2% and Europe and Central Asia at 2.3%. Until 2011 North America led.",
               "By geographic area: China 61.1%, the United States 20.9%, the EU plus the UK 2.0%, India 0.2%, and 15.7% for the rest of the world.",
               "Per capita the ranking inverts. In 2022 South Korea led with 10.26 granted AI patents per 100,000 inhabitants, followed by Luxembourg (8.73) and the United States (4.23), with Japan (2.53) and China (2.51) close behind.",
               "Measured by growth from 2012 to 2022, Singapore moved fastest at +5,366%, then South Korea (+3,801%) and China (+3,569%). The United States grew 1,299% over the same decade."],
          zh: ["截至 2022 年，全球 75.2% 的核准 AI 專利來自東亞與太平洋地區，北美以 21.2% 居次，歐洲與中亞為 2.3%。2011 年之前領先的還是北美。",
               "以地理區域來看：中國 61.1%、美國 20.9%、歐盟加英國 2.0%、印度 0.2%，世界其餘地區合計 15.7%。",
               "換算成人均，排名就反過來了。2022 年南韓以每 10 萬人 10.26 件核准 AI 專利居首，其次是盧森堡(8.73)與美國(4.23)，日本(2.53)與中國(2.51)緊追在後。",
               "若看 2012 到 2022 年的成長幅度，新加坡最快，達 +5,366%，其次是南韓(+3,801%)與中國(+3,569%)。同一個十年間美國成長 1,299%。"]
        } }
    ]
  },

  /* ---------------------------------------------------- patents by origin */
  {
    type: "bars",
    id: "patent-origin",
    nav:      { en: "Patent origins", zh: "專利來源" },
    title:    { en: "Three in five granted AI patents in the world are Chinese",
                zh: "全球每五件核准的 AI 專利，就有三件來自中國" },
    subtitle: { en: "Granted AI patents as a share of the world total, 2022 (%). The US share peaked at 54.1% in 2010 and has fallen every year since.",
                zh: "2022 年核准 AI 專利佔全球總數的比例(%)。美國的佔比在 2010 年達到 54.1% 的高點，之後年年下滑。" },
    series: [
      { label: { en: "China", zh: "中國" },              value: 61.13 },
      { label: { en: "United States", zh: "美國" },      value: 20.90 },
      { label: { en: "Rest of world", zh: "其他地區" },   value: 15.71 },
      { label: { en: "EU & UK", zh: "歐盟與英國" },       value: 2.03 },
      { label: { en: "India", zh: "印度" },              value: 0.23 }
    ]
  },

  /* --------------------------------------------- 1.3 FRONTIER AI RESEARCH */
  {
    type: "prose",
    id: "frontier",
    nav:      { en: "1.3 Frontier", zh: "1.3 前沿" },
    title:    { en: "1.3 — Industry builds the frontier now, and 149 foundation models arrived in a single year",
                zh: "1.3 — 前沿如今由產業界打造，而一年之內就冒出 149 個基礎模型" },
    subtitle: { en: "Two counts tell the story. Epoch AI recorded 51 notable machine learning models from industry in 2023 against 15 from academia. Stanford’s Ecosystem Graphs recorded 149 foundation models — more than double the 72 of 2022, and nearly 38 times the count of 2019.",
                zh: "兩個數字就說完了整件事。Epoch AI 統計 2023 年產業界產出 51 個重要機器學習模型，學術界只有 15 個。史丹佛的 Ecosystem Graphs 則記錄到 149 個基礎模型 — 是 2022 年 72 個的兩倍以上，也接近 2019 年的 38 倍。" },
    blocks: [
      { type: "h3",
        text: { en: "Notable models: industry leads, collaboration hits a high", zh: "重要模型：產業界領先，產學合作創新高" } },
      { type: "ul",
        items: {
          en: ["Academia led model releases until 2014. In 2023 industry produced 51 notable machine learning models and academia 15 — but 21 came out of industry-academia collaborations, a new high, so the gap narrowed slightly on last year.",
               "Creating a cutting-edge model now demands data, compute and money on a scale universities do not have, which is why the split looks the way it does.",
               "By country, the United States produced 61 notable models in 2023, ahead of China (15), France (8), Germany (5), and Canada, Israel and the United Kingdom (4 each).",
               "Taken together, the European Union and the United Kingdom produced 25 — the first time since 2019 that they have collectively passed China.",
               "Compute explains the corporate tilt. AlexNet needed an estimated 470 petaFLOP to train in 2012, the original Transformer around 7,400 in 2017, and Gemini Ultra 50 billion in 2023."],
          zh: ["2014 年之前，模型釋出是學術界領先。2023 年產業界產出 51 個重要機器學習模型，學術界 15 個 — 但另有 21 個出自產學合作，創下新高，因此差距比前一年略為縮小。",
               "打造尖端模型如今需要的資料、算力與資金規模，已經不是大學能負擔的，這也是分布會長成這樣的原因。",
               "以國家來看，美國 2023 年產出 61 個重要模型，領先中國(15 個)、法國(8 個)、德國(5 個)，加拿大、以色列與英國則各 4 個。",
               "歐盟與英國合計產出 25 個 — 這是 2019 年以來，兩者加總首度超過中國。",
               "算力解釋了這種向企業傾斜的走勢。2012 年 AlexNet 訓練估計需要 470 petaFLOP，2017 年最初的 Transformer 約 7,400,2023 年的 Gemini Ultra 則要 500 億。"]
        } },
      { type: "h3",
        text: { en: "Foundation models: more of them, and more of them open", zh: "基礎模型：數量更多，而且更開放" } },
      { type: "ul",
        items: {
          en: ["Of the 149 foundation models released in 2023, 98 were open, 23 limited access and 28 no access. In share terms, 18.8% came with no access at all and 15.4% with limited access.",
               "The open share has risen fast: 33.3% in 2021, 44.4% in 2022, 65.7% in 2023.",
               "Industry produced 72.5% of 2023’s foundation models — 108 of them — against 28 from academia, 9 from industry-academia collaborations and 4 from government.",
               "Google released the most in 2023 (18), followed by Meta (11), Microsoft (9) and OpenAI (7). UC Berkeley, with three, was the most prolific academic institution.",
               "Cumulatively since 2019 the leaders are Google (40), OpenAI (20), Meta (19), Microsoft (18) and DeepMind (15). Tsinghua University (7) is the top non-Western institution and Stanford (5) the leading American academic one.",
               "By country in 2023: the United States 109, China 20, the United Kingdom 8, the United Arab Emirates 4. Cumulatively since 2019 the totals are 182, 30 and 21 for the US, China and the UK."],
          zh: ["2023 年釋出的 149 個基礎模型中，98 個為開放模型、23 個為受限存取、28 個完全不開放。換算比例，18.8% 完全不開放，15.4% 為受限存取。",
               "開放的比例上升得很快：2021 年 33.3%、2022 年 44.4%、2023 年 65.7%。",
               "2023 年有 72.5% 的基礎模型出自產業界 — 共 108 個 — 學術界 28 個、產學合作 9 個、政府部門 4 個。",
               "2023 年釋出最多的是 Google(18 個)，其次是 Meta(11 個)、Microsoft(9 個)與 OpenAI(7 個)。學術機構中以加州大學柏克萊分校最多，有 3 個。",
               "自 2019 年累計，領先者是 Google(40 個)、OpenAI(20 個)、Meta(19 個)、Microsoft(18 個)與 DeepMind(15 個)。清華大學(7 個)是產出最多的非西方機構，史丹佛(5 個)則是美國學術機構之冠。",
               "以 2023 年的國家分布來看：美國 109 個、中國 20 個、英國 8 個、阿拉伯聯合大公國 4 個。自 2019 年累計，美國、中國與英國分別為 182、30 與 21 個。"]
        } }
    ]
  },

  /* ------------------------------------------ notable models by country */
  {
    type: "bars",
    id: "model-origin",
    nav:      { en: "Model origins", zh: "模型來源" },
    title:    { en: "The United States produced four times as many notable models as China",
                zh: "美國產出的重要模型數是中國的四倍" },
    subtitle: { en: "Number of notable machine learning models in 2023, attributed to the countries of the researchers’ affiliated institutions. A model with authors in several countries can be counted more than once.",
                zh: "2023 年重要機器學習模型的數量，依作者所屬機構的所在國歸屬。作者橫跨多國的模型可能被重複計入。" },
    series: [
      { label: { en: "United States", zh: "美國" },   value: 61 },
      { label: { en: "China", zh: "中國" },           value: 15 },
      { label: { en: "France", zh: "法國" },          value: 8 },
      { label: { en: "Germany", zh: "德國" },         value: 5 },
      { label: { en: "Canada", zh: "加拿大" },        value: 4 }
    ]
  },

  /* --------------------------------------------------- TRAINING COSTS */
  {
    type: "timeline",
    id: "training-cost",
    nav:      { en: "Training costs", zh: "訓練成本" },
    title:    { en: "From $930 to $191 million in six years",
                zh: "六年之間，從 930 美元漲到 1.91 億美元" },
    subtitle: { en: "This edition is the first to work with Epoch AI on hard training-cost estimates, derived from training duration and the type, quantity and utilization of the hardware, priced at cloud compute rental rates and adjusted for inflation. Read down the list and it becomes obvious why universities have effectively dropped out of frontier model building.",
                zh: "這一版首度與 Epoch AI 合作，推出扎實的訓練成本估算：依據訓練時長，以及訓練硬體的類型、數量與使用率，再以雲端運算租用價格換算，並調整通膨。把下面這串看完，就會明白大學為什麼實質上已經退出前沿模型的競賽。" },
    events: [
      { date:  { en: "2012 · AlexNet", zh: "2012 年 · AlexNet" },
        title: { en: "470 petaFLOP, and the GPU era begins",
                 zh: "470 petaFLOP，GPU 時代就此開始" },
        body:  { en: "AlexNet, one of the papers that popularized the now standard practice of using GPUs to train AI models, required an estimated 470 petaFLOP. Gemini Ultra, eleven years later, required more than 100 million times that.",
                 zh: "AlexNet 是把「用 GPU 訓練 AI 模型」推成標準做法的論文之一，訓練估計需要 470 petaFLOP。十一年後的 Gemini Ultra，需要的算力是它的一億倍以上。" } },
      { date:  { en: "2017 · Transformer", zh: "2017 年 · Transformer" },
        title: { en: "$930 to train the architecture behind every modern LLM",
                 zh: "930 美元，訓練出所有現代 LLM 背後的架構" },
        body:  { en: "The original Transformer introduced the architecture that underpins virtually every modern LLM. It required around 7,400 petaFLOP and cost roughly $930 to train in inflation-adjusted terms — an amount a graduate student could put on a credit card.",
                 zh: "最初的 Transformer 提出了幾乎所有現代 LLM 都建立其上的架構。它需要約 7,400 petaFLOP，調整通膨後的訓練成本約 930 美元 — 一個研究生刷卡就付得起的金額。" } },
      { date:  { en: "2019 · RoBERTa Large", zh: "2019 年 · RoBERTa Large" },
        title: { en: "$160,018, and state of the art on comprehension",
                 zh: "160,018 美元，換來理解任務上的當時最佳" },
        body:  { en: "RoBERTa Large posted state-of-the-art results on canonical comprehension benchmarks such as SQuAD and GLUE. It cost around $160,000 to train — roughly 170 times the Transformer, two years later.",
                 zh: "RoBERTa Large 在 SQuAD、GLUE 等經典理解基準上取得當時最佳成績，訓練成本約 160,000 美元 — 兩年之後，已是 Transformer 的 170 倍左右。" } },
      { date:  { en: "2020 · GPT-3 175B", zh: "2020 年 · GPT-3 175B" },
        title: { en: "$4.3 million, and the first seven-figure model on the list",
                 zh: "430 萬美元，榜上第一個七位數的模型" },
        body:  { en: "GPT-3 175B (davinci) is estimated at $4,324,883 to train. It is the point on the curve where model training stops being a research budget line and starts being a capital decision.",
                 zh: "GPT-3 175B(davinci)的訓練成本估計為 4,324,883 美元。這是曲線上的轉折點：訓練模型從此不再是研究經費的一個項目，而是一項資本決策。" } },
      { date:  { en: "2021 · Megatron-Turing NLG", zh: "2021 年 · Megatron-Turing NLG" },
        title: { en: "$6.4 million for 530 billion parameters",
                 zh: "640 萬美元，換 5,300 億個參數" },
        body:  { en: "Megatron-Turing NLG 530B is estimated at $6,405,653. Costs were still climbing gradually at this stage — the steep part of the curve was one year away.",
                 zh: "Megatron-Turing NLG 530B 的訓練成本估計為 6,405,653 美元。這個階段成本還在緩步上升 — 陡峭的那一段，還要再一年才會出現。" } },
      { date:  { en: "2022 · PaLM (540B)", zh: "2022 年 · PaLM(540B)" },
        title: { en: "$12.4 million — and a tenfold spread inside one year",
                 zh: "1,240 萬美元 — 而同一年內部就差了十倍" },
        body:  { en: "PaLM (540B) is estimated at $12,389,056, while LaMDA, released the same year, comes in at $1,319,586. By 2022 the answer to what a model costs to train depended almost entirely on which model you meant.",
                 zh: "PaLM(540B)的訓練成本估計為 12,389,056 美元，而同年釋出的 LaMDA 只有 1,319,586 美元。到 2022 年，「訓練一個模型要多少錢」的答案，幾乎完全取決於你指的是哪一個模型。" } },
      { date:  { en: "2023 · GPT-4 and Gemini Ultra", zh: "2023 年 · GPT-4 與 Gemini Ultra" },
        title: { en: "$78 million and $191 million, in the same year",
                 zh: "同一年，7,800 萬美元與 1.91 億美元" },
        body:  { en: "AI Index estimates put GPT-4’s training compute at $78,352,034 and Gemini Ultra’s at $191,400,000; OpenAI CEO Sam Altman has said GPT-4’s training cost was over $100 million. Llama 2 70B, released the same year, is estimated at $3,931,897 — the frontier and the merely capable are now two different price brackets. The chapter notes that this escalation has effectively excluded universities from building leading-edge foundation models, and that policy responses such as the US National AI Research Resource exist specifically to hand nonindustry actors the compute they lack.",
                 zh: "AI 指數估計 GPT-4 的訓練運算成本為 78,352,034 美元，Gemini Ultra 為 191,400,000 美元;OpenAI 執行長 Sam Altman 則表示 GPT-4 的訓練費用超過 1 億美元。同年釋出的 Llama 2 70B 估計為 3,931,897 美元 — 前沿與「堪用」之間，如今已是兩個價格級距。本章指出，這樣的漲勢實質上把大學排除在尖端基礎模型的開發之外，而美國國家 AI 研究資源等政策，正是為了把非產業界缺少的算力補回去而設。" } }
    ]
  },

  /* ------------------------------------------------------- THE DATA WALL */
  {
    type: "cards",
    id: "data-wall",
    nav:      { en: "The data wall", zh: "資料上限" },
    title:    { en: "Running out of data — and why synthetic data is not a clean substitute",
                zh: "資料會不會用完 — 以及為什麼合成資料不是乾淨的替代品" },
    subtitle: { en: "A dedicated highlight inside section 1.3. Epoch AI projected when each stock of training data gets exhausted, using both historical growth in training set sizes and a compute-adjusted method; separate 2023 studies tested what happens when models are fed their own output instead. Tap a card for the detail.",
                zh: "1.3 節裡的專題。Epoch AI 用兩種方法推估各類訓練資料存量何時見底：一種依訓練資料集規模的歷史成長率，一種依算力可得性調整;另外兩份 2023 年的研究，則測試了改餵模型自己產出的資料會發生什麼事。點卡片看細節。" },
    items: [
      { slug: "high-quality-text",
        title:   { en: "High-quality language data: about now", zh: "高品質語言資料：大約就是現在" },
        summary: { en: "Epoch’s historical projection puts exhaustion at 2024.5, with a 90% confidence interval of 2023.5 to 2025.7.",
                   zh: "Epoch 的歷史推估把耗盡時點放在 2024.5 年，90% 信賴區間為 2023.5 到 2025.7 年。" },
        tags: ["data", "projections"],
        overview: { en: "This is the stock that matters most: the curated, well-written text that foundation models are trained on. Epoch’s historical projection, based on observed growth in the size of training datasets, puts depletion at 2024.5 (90% CI: 2023.5–2025.7). The compute-based projection, which adjusts that growth rate for projected compute availability, lands at almost the same place: 2024.1 (90% CI: 2023.2–2025.3). It is the one stock type where the two methods agree closely — and it is the one arriving first.",
                   zh: "這是最要緊的一類存量：基礎模型賴以訓練、經過整理且寫得好的文字。Epoch 依訓練資料集規模的歷史成長率推估，耗盡時點落在 2024.5 年(90% 信賴區間：2023.5 至 2025.7)。以算力可得性調整過的推估則幾乎落在同一點：2024.1 年(90% 信賴區間：2023.2 至 2025.3)。這是唯一一類兩種方法高度一致的存量 — 也是最早到期的那一類。" } },
      { slug: "low-quality-text",
        title:   { en: "Low-quality language data: the 2030s", zh: "低品質語言資料：2030 年代" },
        summary: { en: "Historical projection 2032.4; the compute-based projection pushes it out to 2040.5.",
                   zh: "歷史推估為 2032.4 年;以算力調整後則往後推到 2040.5 年。" },
        tags: ["data", "projections"],
        overview: { en: "The wider, messier pool of internet text has roughly two decades of headroom. Epoch’s historical projection puts exhaustion at 2032.4 (90% CI: 2028.4–2039.2) and the compute-based projection at 2040.5 (90% CI: 2034.6–2048.9). The eight-year gap between the two methods is itself informative: the further out a projection reaches, the less the two approaches agree.",
                   zh: "範圍更廣、也更雜亂的網路文字大約還有二十年的餘裕。Epoch 的歷史推估把耗盡時點放在 2032.4 年(90% 信賴區間：2028.4 至 2039.2)，以算力調整後則是 2040.5 年(90% 信賴區間：2034.6 至 2048.9)。兩種方法差了八年，這件事本身也有意義：推得愈遠，兩種方法就愈不一致。" } },
      { slug: "image-stock",
        title:   { en: "Image data: late 2030s to mid-2040s", zh: "影像資料：2030 年代末到 2040 年代中" },
        summary: { en: "Historical projection 2046; here it is the compute-based method that is the pessimistic one, at 2038.8.",
                   zh: "歷史推估為 2046 年;這一類反而是算力調整後的推估較悲觀，落在 2038.8 年。" },
        tags: ["data", "projections"],
        overview: { en: "Image data is the longest-dated stock in the table. Epoch’s historical projection puts exhaustion at 2046 (90% CI: 2037–2062.8), while the compute-based projection lands earlier at 2038.8 (90% CI: 2032–2049.8) — the reverse of the pattern in language data, and a reminder that the direction of the adjustment depends on which growth rate you start from.",
                   zh: "影像是這張表裡到期日最遠的一類存量。Epoch 的歷史推估把耗盡時點放在 2046 年(90% 信賴區間：2037 至 2062.8)，而算力調整後的推估反而更早，落在 2038.8 年(90% 信賴區間：2032 至 2049.8) — 和語言資料的模式剛好相反，也提醒我們調整的方向取決於你從哪一條成長率出發。" } },
      { slug: "model-collapse",
        title:   { en: "Model collapse: the tails vanish", zh: "模型崩潰：分布的尾端消失了" },
        summary: { en: "A team of British and Canadian researchers found that models trained predominantly on synthetic data lose the ability to remember the true data distribution.",
                   zh: "一支英國與加拿大的研究團隊發現，主要以合成資料訓練的模型，會失去記住真實資料分布的能力。" },
        tags: ["synthetic", "research"],
        overview: { en: "The study demonstrated model collapse in a variational autoencoder: with each successive generation trained mostly on its predecessor’s output, the tails of the distribution vanish and generation density shifts toward the mean, so later generations produce a narrower, less varied range of outputs. The authors showed the same phenomenon across Gaussian mixture models and LLMs, which is why the chapter treats human-generated data as still essential for training models that can produce diverse content.",
                   zh: "該研究在變分自編碼器上示範了模型崩潰：每一代都主要以上一代的產出來訓練，分布的尾端會逐漸消失，生成密度往平均值靠攏，於是後面幾代產出的內容愈來愈窄、愈來愈缺乏變化。作者在高斯混合模型與 LLM 上都觀察到同一個現象，這也是本章仍把人類產生的資料視為訓練多樣化模型所不可或缺的原因。" } },
      { slug: "mad",
        title:   { en: "Model Autophagy Disorder", zh: "模型自噬失調(MAD)" },
        summary: { en: "A 2023 imaging study named the same failure MAD, after mad cow disease, and measured it three ways.",
                   zh: "2023 年一份影像研究把同樣的失效命名為 MAD(取自狂牛症)，並用三種指標量了出來。" },
        tags: ["synthetic", "research"],
        overview: { en: "The researchers compared fully synthetic training loops, where models are trained exclusively on synthetic data, with synthetic augmentation loops that keep some real human data in the mix. As generations accumulate, both produce higher FID scores (less similar to real images), lower precision (reduced realism) and lower recall (decreased diversity); generated faces visibly degrade, picking up strange hash marks by the seventh and ninth steps. Keeping real data in the loop slows the decay but does not stop it — both methods show diminishing returns with further training.",
                   zh: "研究者比較了兩種訓練流程：完全合成迴圈，也就是模型只用合成資料訓練;以及合成擴增迴圈，也就是混入部分真實的人類資料。隨著世代累積，兩者的 FID 分數都上升(與真實影像愈不相似)、精確率下降(擬真度變差)、召回率下降(多樣性變差);生成的人臉會肉眼可見地劣化，到第七、第九步時開始出現奇怪的網格紋路。保留真實資料能減緩劣化，但擋不住 — 兩種做法在持續訓練下都出現報酬遞減。" } }
    ]
  },

  /* -------------------------------- 1.4 CONFERENCES + 1.5 OPEN SOURCE */
  {
    type: "prose",
    id: "community",
    nav:      { en: "1.4–1.5 Community", zh: "社群與開源" },
    title:    { en: "1.4–1.5 — Conferences filled back up, and open source went vertical",
                zh: "1.4 與 1.5 — 研討會的人潮回流，開源則直接垂直起飛" },
    subtitle: { en: "Attendance at the AI conferences the Index tracks rose 6.7% to roughly 63,300 in 2023, recovering after the return to in-person formats. On GitHub the change was of a different order: AI projects rose 59.3% in a single year, and the stars they collected more than tripled.",
                zh: "AI 指數追蹤的研討會，2023 年參與人數成長 6.7%，回到約 63,300 人，在活動全面實體化之後止跌回升。GitHub 上的變化則是另一個量級：AI 專案一年之內成長 59.3%，拿到的星數更是增加三倍以上。" },
    blocks: [
      { type: "h3",
        text: { en: "Conferences", zh: "研討會" } },
      { type: "ul",
        items: {
          en: ["Total attendance across the tracked conferences reached roughly 63,300 in 2023 — a 6.7% rise on the year, and about 50,000 more attendees than in 2015. Part of that growth is new conferences rather than bigger ones.",
               "NeurIPS remains the largest, drawing approximately 16,380 participants in 2023, followed by CVPR (about 8,340), ICML (7,920), ICCV (7,330) and ICRA (6,600).",
               "The direction was not uniform: NeurIPS, ICML, ICCV and AAAI each grew year over year, while CVPR, ICRA, ICLR and IROS each slipped slightly.",
               "Among the smaller venues, IJCAI drew about 1,990 attendees, AAMAS 970 and FAccT 830.",
               "These figures deserve caution — several of the recent years ran virtual or hybrid formats, and organizers report that counting virtual attendance accurately is difficult."],
          zh: ["受追蹤研討會的總參與人數在 2023 年達到約 63,300 人 — 較前一年成長 6.7%，也比 2015 年多出約 50,000 人。其中一部分成長來自新增的研討會，而不是既有活動變大。",
               "NeurIPS 仍是規模最大的一場，2023 年吸引約 16,380 名參與者，其次是 CVPR(約 8,340 人)、ICML(7,920 人)、ICCV(7,330 人)與 ICRA(6,600 人)。",
               "各場走勢並不一致：NeurIPS、ICML、ICCV 與 AAAI 都較前一年成長，CVPR、ICRA、ICLR 與 IROS 則都小幅下滑。",
               "規模較小的場次中，IJCAI 約 1,990 人、AAMAS 970 人、FAccT 830 人。",
               "這些數字要保守看待 — 近幾年有多場採線上或混合形式，主辦方也表示線上參與人數很難精確統計。"]
        } },
      { type: "h3",
        text: { en: "Open-source AI software", zh: "開源 AI 軟體" } },
      { type: "ul",
        items: {
          en: ["GitHub AI projects grew from 845 in 2011 to approximately 1.8 million in 2023, including a sharp 59.3% rise in the last year alone.",
               "US-based developers accounted for 22.9% of GitHub AI projects in 2023, with India second at 19.0% and the European Union plus the United Kingdom at 17.9%. China was at 3.0%, and the rest of the world at 37.1%.",
               "The US share has been declining steadily since 2016 — not because American output fell, but because everyone else’s rose faster.",
               "New stars awarded to AI projects more than tripled, from 4.0 million in 2022 to 12.2 million in 2023. The most starred repositories are libraries such as TensorFlow, OpenCV, Keras and PyTorch.",
               "Cumulatively, US-based projects hold about 10.45 million stars, ahead of the EU plus the UK (4.53 million), China (2.12 million) and India (1.92 million). Every major region sampled gained stars year over year."],
          zh: ["GitHub 上的 AI 專案從 2011 年的 845 個成長到 2023 年的約 180 萬個，光是最近一年就大幅上升 59.3%。",
               "2023 年，美國開發者貢獻了 22.9% 的 GitHub AI 專案，印度以 19.0% 居次，歐盟加英國為 17.9%。中國為 3.0%，世界其餘地區合計 37.1%。",
               "美國的佔比自 2016 年起穩定下滑 — 不是因為美國的產出減少，而是其他地方漲得更快。",
               "AI 專案獲得的新星數增加三倍以上，從 2022 年的 400 萬顆增至 2023 年的 1,220 萬顆。星數最高的多是 TensorFlow、OpenCV、Keras 與 PyTorch 這類函式庫。",
               "累計來看，美國專案握有約 1,045 萬顆星，領先歐盟加英國(453 萬)、中國(212 萬)與印度(192 萬)。所有被取樣的主要區域，星數都較前一年增加。"]
        } }
    ]
  },

  /* ----------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In its words", zh: "報告原文" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 1 · Research and Development.",
                zh: "第 1 章「研發」的頭條發現。" },
    quotes: [
      { text: { en: "In 2023, industry produced 51 notable machine learning models, while academia contributed only 15. There were also 21 notable models resulting from industry-academia collaborations in 2023, a new high.",
                zh: "2023 年，產業界產出 51 個重要機器學習模型，學術界只貢獻了 15 個。同年另有 21 個重要模型出自產學合作，創下新高。" },
        by: "Chapter 1 · Research and Development" },
      { text: { en: "In 2023, a total of 149 foundation models were released, more than double the amount released in 2022. Of these newly released models, 65.7% were open-source, compared to only 44.4% in 2022 and 33.3% in 2021.",
                zh: "2023 年共釋出 149 個基礎模型，是 2022 年的兩倍以上。這些新釋出的模型中有 65.7% 為開源，而 2022 年僅 44.4%、2021 年僅 33.3%。" },
        by: "Chapter 1 · Research and Development" },
      { text: { en: "OpenAI’s GPT-4 used an estimated $78 million worth of compute to train, while Google’s Gemini Ultra cost $191 million for compute.",
                zh: "OpenAI 的 GPT-4 訓練估計用掉價值 7,800 萬美元的運算資源，而 Google 的 Gemini Ultra 光是運算就花了 1.91 億美元。" },
        by: "Chapter 1 · Research and Development" },
      { text: { en: "In 2022, China led global AI patent origins with 61.1%, significantly outpacing the United States, which accounted for 20.9%. Since 2010, the U.S. share of AI patents has decreased from 54.1%.",
                zh: "2022 年，中國以 61.1% 在全球 AI 專利來源上居首，遠遠超過佔 20.9% 的美國。自 2010 年以來，美國的 AI 專利佔比已從 54.1% 一路下滑。" },
        by: "Chapter 1 · Research and Development" },
      { text: { en: "Since 2011, the number of AI-related projects on GitHub has seen a consistent increase, growing from 845 in 2011 to approximately 1.8 million in 2023, with a sharp 59.3% rise in the last year alone.",
                zh: "自 2011 年以來，GitHub 上的 AI 相關專案持續增加，從 2011 年的 845 個成長到 2023 年的約 180 萬個，光是最近一年就大幅上升 59.3%。" },
        by: "Chapter 1 · Research and Development" }
    ]
  },

  /* -------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 1 in full", zh: "閱讀第 1 章原文" },
    text:  { en: "Chapter 1 (sections 1.1–1.5) — publications, patents, frontier AI research, conferences and open-source software — with every figure, footnote and citation, is free from Stanford HAI.",
             zh: "第 1 章(1.1 至 1.5 各節) — 論文、專利、前沿 AI 研究、研討會與開源軟體 — 連同所有圖表、註腳與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

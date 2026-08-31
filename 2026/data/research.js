/* =========================================================================
   Research & Development — deep dive · research.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026, Chapter 1
   https://hai.stanford.edu/ai-index/2026-ai-index-report/research-and-development

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 1: 1.1 Notable AI Models, 1.2 Compute &
   Infrastructure, 1.3 Data Centers, 1.4 Energy & Environmental Impact,
   1.5 Open-Source AI Software, 1.6 Publications, 1.7 Patents,
   1.8 AI Authors and Inventors. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "research";

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Research & Development · a chapter deep dive", zh: "研發專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "The inputs to AI keep scaling — but they're concentrating in fewer hands",
                zh: "AI 的投入持續放大,卻越來越集中在少數人手中" },
    subtitle: { en: "Chapter 1 of the AI Index 2026 follows the R&D pipeline — from the models themselves through compute, data centers, energy, and open source, out to publications, patents, and talent. Resources are growing; transparency, geographic balance, and gender balance are not. The numbers:",
                zh: "AI 指數 2026 第 1 章追蹤研發的整條管線 — 從模型本身,到算力、資料中心、能源與開源,再延伸到論文、專利與人才。資源在成長,但透明度、地理均衡與性別均衡都沒跟上。先看數字:" },
    stats: [
      { label: { en: "U.S. notable AI models in 2025 (China 35)", zh: "2025 年美國發布的重要 AI 模型(中國 35)" }, value: 59 },
      { label: { en: "% of notable AI models now from industry", zh: "% 重要 AI 模型出自產業界" }, value: 91 },
      { label: { en: "million H100-equivalents of global AI compute", zh: "百萬張 H100 等效全球 AI 算力" }, value: 17 },
      { label: { en: "U.S. data centers — 10× any other country", zh: "美國資料中心數(超過任何國家 10 倍)" }, value: 5427 },
      { label: { en: "AI patents granted worldwide in 2024", zh: "2024 年全球核准的 AI 專利數" }, value: 131121 },
      { label: { en: "% drop in AI talent moving to the U.S. since 2017", zh: "% 移居美國的 AI 人才自 2017 年以來下滑" }, value: 89 }
    ]
  },

  /* ----------------------------------------------- 1.1 NOTABLE AI MODELS */
  {
    type: "prose",
    id: "models",
    title:    { en: "1.1 — Notable models: fewer, more closed, more concentrated",
                zh: "1.1 — 重要模型:更少、更封閉、更集中" },
    subtitle: { en: "Using Epoch AI's curated dataset, the chapter maps where frontier models come from. In 2025, fewer notable models were released than the year before — and the most capable ones are now the least transparent.",
                zh: "本章以 Epoch AI 精選的資料集,描繪前沿模型的來源。2025 年發布的重要模型比前一年更少 — 而最有能力的那些,如今也最不透明。" },
    blocks: [
      { type: "p",
        text: { en: "The United States led with 59 notable AI models in 2025, followed by China with 35 and South Korea with 8. New releases declined year over year across every major region. Production stays concentrated: industry now accounts for 91.2% of notable models, with just 2 of 2025's releases coming from academia versus 93 from industry. Within industry, the top contributors were OpenAI (20), Google (14), and Alibaba (11).",
                zh: "2025 年美國以 59 個重要 AI 模型領先,其次是中國的 35 個與南韓的 8 個。各主要地區的新發布量都較前一年下滑。產出高度集中:產業界如今佔重要模型的 91.2%,2025 年僅 2 個來自學界,產業界則有 93 個。產業界中,貢獻最多的是 OpenAI(20)、Google(14)與阿里巴巴(11)。" } },
      { type: "h3",
        text: { en: "The most capable models are the least transparent", zh: "最有能力的模型,最不透明" } },
      { type: "ul",
        items: {
          en: ["Training code, parameter counts, dataset sizes, and training duration are no longer disclosed for several of the most resource-intensive systems — including those from OpenAI, Anthropic, and Google.",
               "In 2025, 81 of 102 notable models were released without their training code, versus just 4 released as 'open source.' API access was the single most common release type, at 47 of 102 models.",
               "Reported parameter counts have stayed near 1 trillion for three years, even as frontier labs stop reporting. Training compute — which can be estimated independently — has kept rising."],
          zh: ["有幾個資源最密集的系統 — 包括 OpenAI、Anthropic 與 Google 的模型 — 已不再揭露訓練程式碼、參數量、資料集大小與訓練時長。",
               "2025 年,102 個重要模型中有 81 個未釋出訓練程式碼,僅 4 個以「開源」形式釋出。API 存取是最常見的釋出類型,佔 102 個中的 47 個。",
               "已揭露的參數量已連續三年維持在約 1 兆水準,即使前沿實驗室已停止揭露。可獨立估算的訓練算力,則持續上升。"]
        } },
      { type: "h3",
        text: { en: "Data quality is beating data scale", zh: "資料品質正在勝過資料規模" } },
      { type: "p",
        text: { en: "Synthetic data still isn't replacing real data in pre-training, but data-centric methods are showing promise. OLMo 3.1 Think 32B — with roughly 32 billion parameters, nearly 90× fewer than Grok 4's 3 trillion — reaches comparable results on benchmarks like AIME 2025 through pruning, deduplication, and curation alone. Meanwhile, Graphite estimates that since January 2025, over 50% (51.7%) of newly published online content has been AI-generated.",
                zh: "合成資料在預訓練階段仍未取代真實資料,但「以資料為中心」的方法展現了潛力。OLMo 3.1 Think 32B — 約 320 億參數,比 Grok 4 的 3 兆少了將近 90 倍 — 僅靠剪枝、去重與精選,就在 AIME 2025 等基準上達到相當的表現。同時,Graphite 估計自 2025 年 1 月起,新發布的線上內容已有超過五成(51.7%)由 AI 生成。" } }
    ]
  },

  /* ------------------------------------------- notable models by country */
  {
    type: "bars",
    id: "models-by-country",
    title:    { en: "Notable AI models in 2025, by country",
                zh: "2025 年重要 AI 模型:依國家" },
    subtitle: { en: "Number of notable AI models released in 2025. The U.S. leads model development while China leads in research output — but new releases fell year over year almost everywhere.",
                zh: "2025 年發布的重要 AI 模型數量。美國在模型開發領先,中國在研究產出領先 — 但新發布量幾乎在各地都較前一年下滑。" },
    series: [
      { label: { en: "United States", zh: "美國" },   value: 59 },
      { label: { en: "China", zh: "中國" },           value: 35 },
      { label: { en: "South Korea", zh: "南韓" },     value: 8 },
      { label: { en: "Canada", zh: "加拿大" },        value: 1 },
      { label: { en: "France", zh: "法國" },          value: 1 },
      { label: { en: "United Kingdom", zh: "英國" },  value: 1 }
    ]
  },

  /* ------------------------------------------ 1.2 COMPUTE & INFRASTRUCTURE */
  {
    type: "prose",
    id: "compute",
    title:    { en: "1.2 — Compute is up 3.3× a year — and it runs through one island",
                zh: "1.2 — 算力每年成長 3.3 倍 — 卻全靠一座島嶼" },
    subtitle: { en: "Training compute would be impossible without ever-faster hardware. Aggregate capacity is soaring, but the supply chain has become a single point of failure.",
                zh: "若沒有越來越快的硬體,訓練算力根本不可能成長。總算力正在飆升,但供應鏈卻成了單點故障。" },
    blocks: [
      { type: "p",
        text: { en: "Global AI compute capacity has grown roughly 3.3× per year since 2022, reaching about 17.1 million H100-equivalents by the end of 2025. Nvidia AI chips account for over 60% of total compute, with Google and Amazon supplying much of the rest and Huawei holding a small but growing share. The buildout is driven by hyperscaler data center expansion and sustained demand for frontier training and inference.",
                zh: "全球 AI 算力自 2022 年以來約以每年 3.3 倍成長,到 2025 年底達到約 1,710 萬張 H100 等效。Nvidia 的 AI 晶片佔總算力逾 60%,Google 與 Amazon 供應大部分其餘份額,華為則握有一小但成長中的比例。這波擴建由超大規模業者的資料中心擴張,以及前沿訓練與推論的持續需求所驅動。" } },
      { type: "h3",
        text: { en: "One foundry in Taiwan fabricates almost every leading AI chip", zh: "台灣一座晶圓廠,製造幾乎每一顆領先 AI 晶片" } },
      { type: "ul",
        items: {
          en: ["Companies like Nvidia and SK Hynix design chips but don't make them — fabrication is dominated by a single foundry, TSMC, which produces virtually every leading AI chip, including Nvidia's Blackwell GPUs and AMD's MI300X.",
               "That makes the global hardware supply chain dependent on one foundry in Taiwan, though a TSMC–U.S. expansion began operating in 2025.",
               "Beyond GPUs, the stack relies on high-bandwidth memory from SK Hynix, Samsung (South Korea), and Micron (USA), plus InfiniBand networking and assembly by firms like ASE Group (Taiwan) and Amkor (USA)."],
          zh: ["像 Nvidia 與 SK 海力士這樣的公司負責設計晶片,卻不自行製造 — 製造由單一晶圓代工廠台積電主導,它幾乎生產每一顆領先的 AI 晶片,包括 Nvidia 的 Blackwell GPU 與 AMD 的 MI300X。",
               "這使全球硬體供應鏈仰賴台灣的一座晶圓廠 — 不過台積電在美國的擴廠已於 2025 年開始投產。",
               "在 GPU 之外,整個技術堆疊還仰賴 SK 海力士、三星(南韓)與美光(美國)的高頻寬記憶體、InfiniBand 網路,以及日月光(台灣)、艾克爾(美國)等封測廠。"]
        } },
      { type: "p",
        text: { en: "The economics have moved the other way: since 2006, the cost of GPU computation has fallen by more than 99%, which is precisely what made today's scaling economically feasible.",
                zh: "成本則往反方向走:自 2006 年以來,GPU 運算成本下降超過 99%,而這正是讓今日的規模化在經濟上可行的關鍵。" } }
    ]
  },

  /* --------------------------------------------- global compute capacity */
  {
    type: "bars",
    id: "compute-capacity",
    title:    { en: "Global AI compute capacity is compounding",
                zh: "全球 AI 算力正在複利成長" },
    subtitle: { en: "Cumulative compute capacity from AI chips across major designers, in millions of H100-equivalents (year-end). Growth has averaged about 3.3× per year since 2022.",
                zh: "主要晶片設計商累積的 AI 算力,單位為百萬張 H100 等效(年底)。自 2022 年以來平均每年約成長 3.3 倍。" },
    series: [
      { label: { en: "2022", zh: "2022" }, value: 1 },
      { label: { en: "2023", zh: "2023" }, value: 2 },
      { label: { en: "2024", zh: "2024" }, value: 7 },
      { label: { en: "2025", zh: "2025" }, value: 17 }
    ]
  },

  /* --------------------------------------------- data centers by country */
  {
    type: "bars",
    id: "data-centers",
    title:    { en: "Data centers, by country (2025)",
                zh: "資料中心數量:依國家(2025)" },
    subtitle: { en: "Number of data centers in 2025. The U.S. leads with 5,427 — more than ten times any other country — though counts don't capture facility size or computing capacity.",
                zh: "2025 年的資料中心數量。美國以 5,427 座領先 — 超過任何國家 10 倍以上 — 但數量並未反映設施規模或運算容量。" },
    series: [
      { label: { en: "United States", zh: "美國" },     value: 5427 },
      { label: { en: "Germany", zh: "德國" },           value: 529 },
      { label: { en: "United Kingdom", zh: "英國" },    value: 523 },
      { label: { en: "China", zh: "中國" },             value: 449 },
      { label: { en: "Canada", zh: "加拿大" },          value: 337 },
      { label: { en: "France", zh: "法國" },            value: 322 }
    ]
  },

  /* ------------------------------------ 1.3–1.8 RESEARCH ECOSYSTEM CARDS */
  {
    type: "cards",
    id: "landscape",
    title:    { en: "The R&D landscape, in seven moves", zh: "研發版圖的七個切面" },
    subtitle: { en: "From energy and open source through publications, patents, and talent. Tap any card for the full trend and its numbers.",
                zh: "從能源、開源,到論文、專利與人才。點任一張卡片看完整趨勢與數字。" },
    items: [
      {
        slug: "environmental-footprint",
        title:   { en: "AI's environmental footprint", zh: "AI 的環境足跡" },
        summary: { en: "Grok 4's training emitted ~72,816 tons of CO₂e; AI data center power hit 29.6 GW.",
                   zh: "Grok 4 訓練排放約 72,816 噸二氧化碳當量;AI 資料中心電力達 29.6 GW。" },
        tags: ["energy"],
        overview: { en: "AI's footprint is rising across power, water, and emissions. Training AlexNet in 2012 produced an estimated 0.01 tons of CO₂ equivalent; training Grok 4 in 2025 produced about 72,816 tons — more than the lifetime emissions of an average car (63 tons). By Q4 2025, total AI data center power capacity reached roughly 29.6 GW, enough to power New York state at peak demand, with AI chips alone drawing about 11.8 GW. On inference, annual GPT-4o water use is estimated at 1.3–1.6 million kiloliters, which at the high end exceeds the annual drinking water needs of 1.2 million people.",
                    zh: "AI 的足跡在電力、水與排放各方面都在上升。2012 年訓練 AlexNet 約排放 0.01 噸二氧化碳當量;2025 年訓練 Grok 4 約排放 72,816 噸 — 超過一輛普通汽車一生的排放量(63 噸)。到 2025 年第四季,AI 資料中心總電力容量達約 29.6 GW,足以在尖峰時段供應整個紐約州,其中光是 AI 晶片就抽用約 11.8 GW。在推論方面,GPT-4o 每年用水估計為 130 萬至 160 萬公秉,高估值超過 120 萬人一年的飲用水需求。" }
      },
      {
        slug: "open-source-scale",
        title:   { en: "Open source keeps scaling", zh: "開源持續擴張" },
        summary: { en: "5.6M AI projects on GitHub; U.S. projects hold 30M cumulative stars.",
                   zh: "GitHub 上有 560 萬個 AI 專案;美國專案累積 3,000 萬顆星。" },
        tags: ["opensource"],
        overview: { en: "AI-related GitHub projects grew from 1,549 in 2011 to about 5.6 million in 2025, up 23.7% year over year; filtering for at least 10 stars leaves 206,880. The U.S. share of starred projects has fallen from nearly 80% in 2011 to 31.7% as Europe, India (5.2%), and the rest of the world grow — yet U.S. projects still hold the most engagement, with 30 million cumulative GitHub stars. On Hugging Face, model uploads more than tripled from 2023 to 2025 and dataset uploads grew fourfold.",
                    zh: "GitHub 上的 AI 相關專案從 2011 年的 1,549 個成長到 2025 年的約 560 萬個,年增 23.7%;若篩選至少 10 顆星,剩下 206,880 個。美國在有星專案中的佔比已從 2011 年的近 80% 降到 31.7%,歐洲、印度(5.2%)與世界其他地區持續成長 — 但美國專案仍最受關注,累積 3,000 萬顆 GitHub 星。在 Hugging Face 上,模型上傳量從 2023 到 2025 年增加超過三倍,資料集上傳量則成長四倍。" }
      },
      {
        slug: "publications-china",
        title:   { en: "China leads in publication volume", zh: "中國在論文產量領先" },
        summary: { en: "AI publications hit ~258,000 in 2024; China holds 17.8% of volume and 20.6% of citations.",
                   zh: "2024 年 AI 論文約 258,000 篇;中國佔產量 17.8%、引用 20.6%。" },
        tags: ["publications"],
        overview: { en: "Total AI publications more than doubled between 2013 and 2024, from roughly 102,000 to about 258,000, and now make up 40.9% of all computer science publications in OpenAlex. In 2024, China accounted for 17.8% of AI publications, ahead of Europe (11.1%) and India (7.6%), and led in citations at 20.6%, with Europe at 19.5% and the U.S. at 12.6%. Machine learning (37%) and computer vision (22.4%) remained the dominant topics. Journals were the largest venue at 47%, with conferences down to 23.5% from 36.6% in 2013.",
                    zh: "AI 論文總量在 2013 至 2024 年間增加超過一倍,從約 102,000 篇升到約 258,000 篇,如今佔 OpenAlex 中所有資訊科學論文的 40.9%。2024 年中國佔 AI 論文的 17.8%,領先歐洲(11.1%)與印度(7.6%),引用佔比也以 20.6% 居首,歐洲 19.5%、美國 12.6%。機器學習(37%)與電腦視覺(22.4%)仍是主導主題。期刊是最大的發表場域,佔 47%,研討會則從 2013 年的 36.6% 降到 23.5%。" }
      },
      {
        slug: "top-100-papers",
        title:   { en: "The top-100 gap is narrowing", zh: "百大論文的差距正在縮小" },
        summary: { en: "China's share of the top-100 most-cited AI papers rose from 33 in 2021 to 41 in 2024.",
                   zh: "中國在百大最被引用 AI 論文的佔比,從 2021 年的 33 篇升到 2024 年的 41 篇。" },
        tags: ["impact"],
        overview: { en: "Among the 100 most-cited AI publications, the U.S. still ranks highest each year, but its share fell from 64 in 2021 to 46 in 2024. China's share of the top 100 rose from 33 in 2021 to 41 in 2024 (up from 34 in 2023), and Australia climbed to 14 highly cited publications, up from 2 in 2023 and 6 in 2021. The trend mirrors the broader publication and citation data: a small number of countries account for a disproportionate share of the most influential work, but the lead is no longer one-sided.",
                    zh: "在百大最被引用的 AI 論文中,美國每年仍居首位,但佔比從 2021 年的 64 篇降到 2024 年的 46 篇。中國在百大中的佔比從 2021 年的 33 篇升到 2024 年的 41 篇(較 2023 年的 34 篇增加),澳洲則攀升至 14 篇高被引論文,高於 2023 年的 2 篇與 2021 年的 6 篇。這個趨勢呼應更廣的論文與引用資料:少數國家在最具影響力的研究中佔不成比例的份額,但領先已不再是單方面的。" }
      },
      {
        slug: "patents-leadership",
        title:   { en: "Patents: China's volume, U.S. influence", zh: "專利:中國拚量,美國拚影響力" },
        summary: { en: "131,121 AI patents granted in 2024; China holds 74.2%, but the U.S. earns over half of forward citations.",
                   zh: "2024 年核准 131,121 件 AI 專利;中國佔 74.2%,但美國拿下過半前向引用。" },
        tags: ["patents"],
        overview: { en: "Granted AI patents grew from 3,866 in 2010 to 131,121 in 2024, up 8.2% from 2023. China accounts for 74.2% of the global total, followed by the U.S. at 12.1% (15,290 patents), Europe (3%), and India (0.4%). But influence tells a different story: the U.S. earns over half of all AI patent forward citations despite its smaller volume, while South Korea leads on a per-capita basis at 14.3 patents per 100,000 inhabitants, ahead of Luxembourg (12.3) and China (7.0). Chinese patents are cited frequently in U.S. filings; U.S. patents appear far less often in Chinese ones.",
                    zh: "核准的 AI 專利從 2010 年的 3,866 件成長到 2024 年的 131,121 件,較 2023 年增加 8.2%。中國佔全球總量的 74.2%,其次是美國 12.1%(15,290 件)、歐洲(3%)與印度(0.4%)。但影響力訴說著另一個故事:儘管產量較少,美國拿下所有 AI 專利前向引用的過半;以人均計算,南韓以每 10 萬人 14.3 件領先,勝過盧森堡(12.3)與中國(7.0)。中國專利在美國申請中常被引用,美國專利在中國申請中卻少見得多。" }
      },
      {
        slug: "talent-migration",
        title:   { en: "Talent is no longer flowing to the U.S.", zh: "人才不再流向美國" },
        summary: { en: "AI talent moving to the U.S. has dropped 89% since 2017 — down 80% in the last year alone.",
                   zh: "移居美國的 AI 人才自 2017 年起下滑 89% — 光是過去一年就降 80%。" },
        tags: ["talent"],
        overview: { en: "The U.S. is still home to more AI talent than any other country — 220,520 identified authors and inventors in 2025, ahead of India (50,460) and Germany (48,520) — but it is attracting new talent at the lowest rate in over a decade. The number of AI researchers and developers moving to the U.S. has dropped 89% since 2017, and the decline is accelerating, down 80% in the last year alone. U.S. net inflow fell from a peak of 324.6 in 2022 to 26.0 in 2025. Per capita, Switzerland (110.5 per 100,000) and Singapore (109.5) lead the world.",
                    zh: "美國仍是 AI 人才最多的國家 — 2025 年辨識出 220,520 位作者與發明人,領先印度(50,460)與德國(48,520)— 但它吸引新人才的速度是十多年來最低。移居美國的 AI 研究員與開發者自 2017 年以來下滑 89%,且降幅還在加速,光是過去一年就降了 80%。美國的淨流入從 2022 年高峰的 324.6 降到 2025 年的 26.0。以人均計,瑞士(每 10 萬人 110.5 位)與新加坡(109.5)領先全球。" }
      },
      {
        slug: "gender-gap",
        title:   { en: "Gender gaps remain entrenched", zh: "性別落差依舊根深柢固" },
        summary: { en: "No country approaches parity; Saudi Arabia leads female share at 32.3%, with no real progress since 2010.",
                   zh: "沒有國家接近性別均等;沙烏地阿拉伯女性佔比最高 32.3%,2010 年以來幾無進展。" },
        tags: ["gender"],
        overview: { en: "The gender gap among AI authors and inventors is visible in every country, with men in the majority everywhere. Female representation is relatively higher in Saudi Arabia (32.3%), Australia (30.1%), Canada (29.6%), and Italy (29.5%), but no country comes close to parity. In Brazil, South Korea, and Japan, more than 80% of identified AI talent is male. Most strikingly, in almost every country the male-female ratio has stayed flat from 2010 to 2025 — even as overall AI talent grew, there has been no meaningful progress on gender balance.",
                    zh: "AI 作者與發明人之間的性別落差在每個國家都看得見,各地都由男性佔多數。女性佔比在沙烏地阿拉伯(32.3%)、澳洲(30.1%)、加拿大(29.6%)與義大利(29.5%)相對較高,但沒有國家接近均等。在巴西、南韓與日本,辨識出的 AI 人才超過 80% 為男性。最值得注意的是,幾乎每個國家的男女比例從 2010 到 2025 年都維持不變 — 即使整體 AI 人才在成長,性別均衡卻毫無實質進展。" }
      }
    ]
  },

  /* ---------------------------------------------- AI patents by geography */
  {
    type: "bars",
    id: "patents-share",
    title:    { en: "Granted AI patents, by geographic area (2024)",
                zh: "核准的 AI 專利:依地理區域(2024)" },
    subtitle: { en: "% of the world total of granted AI patents in 2024. China dominates volume at 74.2%, but the U.S. (12.1%) earns over half of all forward citations.",
                zh: "2024 年全球核准 AI 專利的佔比(%)。中國以 74.2% 主導數量,但美國(12.1%)拿下過半的前向引用。" },
    series: [
      { label: { en: "China", zh: "中國" },                 value: 74 },
      { label: { en: "United States", zh: "美國" },         value: 12 },
      { label: { en: "Rest of the world", zh: "世界其他" }, value: 10 },
      { label: { en: "Europe", zh: "歐洲" },                value: 3 }
    ]
  },

  /* -------------------------------------------- female representation chart */
  {
    type: "bars",
    id: "female-share",
    title:    { en: "Female share of AI authors & inventors (2025)",
                zh: "AI 作者與發明人中的女性佔比(2025)" },
    subtitle: { en: "% female among identified AI talent, leading countries. No country approaches parity, and the ratio has stayed flat since 2010.",
                zh: "辨識出的 AI 人才中女性佔比(%),以領先國家為例。沒有國家接近均等,且這比例自 2010 年起維持不變。" },
    series: [
      { label: { en: "Saudi Arabia", zh: "沙烏地阿拉伯" }, value: 32 },
      { label: { en: "Australia", zh: "澳洲" },            value: 30 },
      { label: { en: "Canada", zh: "加拿大" },             value: 30 },
      { label: { en: "Italy", zh: "義大利" },              value: 30 },
      { label: { en: "United States", zh: "美國" },        value: 28 },
      { label: { en: "South Korea", zh: "南韓" },          value: 19 }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 1 · Research & Development.",
                zh: "第 1 章「研發」的頭條發現。" },
    quotes: [
      { text: { en: "Industry produced over 90% of notable AI models in 2025 — but the most capable models are now the least transparent.",
                zh: "產業界在 2025 年生產了逾九成的重要 AI 模型 — 但最有能力的模型,如今也最不透明。" },
        by: "Chapter 1 · Research & Development" },
      { text: { en: "Global AI compute capacity has grown 3.3× per year since 2022, reaching 17.1 million H100-equivalents.",
                zh: "全球 AI 算力自 2022 年以來每年成長 3.3 倍,達到 1,710 萬張 H100 等效。" },
        by: "Chapter 1 · Research & Development" },
      { text: { en: "A single company, TSMC, fabricates almost every leading AI chip, making the global hardware supply chain dependent on one foundry in Taiwan.",
                zh: "單一一家公司台積電,製造了幾乎每一顆領先的 AI 晶片,使全球硬體供應鏈仰賴台灣的一座晶圓廠。" },
        by: "Chapter 1 · Research & Development" },
      { text: { en: "China leads in publication volume, citations, and patent grants, while the U.S. produced 59 notable models in 2025 to China's 35.",
                zh: "中國在論文產量、引用與專利核准領先,而美國在 2025 年產出 59 個重要模型,中國則為 35 個。" },
        by: "Chapter 1 · Research & Development" },
      { text: { en: "The number of AI researchers moving to the United States has dropped 89% since 2017, and gender gaps in AI talent have not improved since 2010.",
                zh: "移居美國的 AI 研究員自 2017 年以來下滑 89%,而 AI 人才的性別落差自 2010 年以來毫無改善。" },
        by: "Chapter 1 · Research & Development" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Research & Development chapter", zh: "閱讀完整的研發章節" },
    text:  { en: "Chapter 1 (sections 1.1–1.8) with every figure and citation is free from Stanford HAI. Or head back to the 15 takeaways and nine-chapter overview.",
             zh: "第 1 章(1.1–1.8 各節)連同所有圖表與引用,皆由史丹佛 HAI 免費提供。或回到 15 條重點與九大章節總覽。" },
    link:  { label: { en: "Open Chapter 1 · Research & Development →", zh: "前往第 1 章:研發 →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/research-and-development" }
  }
];

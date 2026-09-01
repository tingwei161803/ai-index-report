/* =========================================================================
   AI Index Report 2023 · index.js — the edition overview

   Source: Stanford HAI — Artificial Intelligence Index Report 2023 (6th ed.)
   https://hai.stanford.edu/ai-index/2023-ai-index-report

   Built from the report's own "Top Ten Takeaways" and the per-chapter Report
   Highlights. The 2023 edition reports on calendar year 2022 — the year
   generative AI reached the public, and the first year in a decade in which
   private AI investment fell.

   Eight chapters. Responsible AI is still called Technical AI Ethics here;
   it is renamed in the 2024 edition.
   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_META = {
  title:    { en: "AI Index Report 2023", zh: "AI 指數報告 2023" },
  subtitle: { en: "Stanford HAI's sixth edition, read as data — 10 takeaways, 8 chapters.",
              zh: "史丹佛 HAI 第六版，用資料讀懂 — 10 條重點、8 大章節。" }
};

window.SITE_SECTIONS = [

  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "2022: the public met generative AI, and the money walked out",
                zh: "2022 年：大眾遇上生成式 AI，而資金走出了房間" },
    subtitle: { en: "The 2023 AI Index covers calendar year 2022 across eight chapters — research, technical performance, technical AI ethics, the economy, education, policy, diversity and public opinion. It is the edition that recorded two opposite things at once: DALL·E 2, Stable Diffusion and ChatGPT put AI in front of everyone, while private investment fell year over year for the first time in a decade. A few numbers that set the scene:",
                zh: "2023 年 AI 指數涵蓋 2022 年，分為八大章節：研發、技術表現、AI 技術倫理、經濟、教育、政策、多元性與民意。這一版同時記錄了兩件相反的事：DALL·E 2、Stable Diffusion 與 ChatGPT 把 AI 推到所有人面前，而私人投資卻出現十年來首次的年度下滑。先看幾個定錨的數字：" },
    stats: [
      { label: { en: "significant ML models from industry in 2022 (academia: 3)", zh: "2022 年來自產業界的重要機器學習模型數(學術界：3)" }, value: 32 },
      { label: { en: "global private AI investment (US$ bn), down 26.7%", zh: "全球 AI 私人投資(十億美元)，下滑 26.7%" }, value: 91.9 },
      { label: { en: "fold rise in AI incidents and controversies since 2012", zh: "倍 — AI 事故與爭議自 2012 年以來的成長" }, value: 26 },
      { label: { en: "AI bills passed into law across 127 countries (one in 2016)", zh: "127 國通過的 AI 法案件數(2016 年僅 1 件)" }, value: 37 },
      { label: { en: "% of new AI PhDs going to industry (28.2% to academia)", zh: "% 新科 AI 博士進入產業界(28.2% 進入學術界)" }, value: 65.4 },
      { label: { en: "% of Americans saying AI benefits outweigh drawbacks (China: 78%)", zh: "% 美國人認為 AI 利大於弊(中國：78%)" }, value: 35 }
    ]
  },

  /* ----------------------------------------------------------- TAKEAWAYS */
  {
    type: "cards",
    id: "takeaways",
    nav:      { en: "10 Takeaways", zh: "10 條重點" },
    title:    { en: "The Top Ten Takeaways", zh: "10 條重點摘要" },
    subtitle: { en: "The report's own summary of the year, in its own order. Click any card for the full text.",
                zh: "報告自身對這一年的總結，依其原本順序排列。點任一張卡片可看完整內容。" },
    items: [
      { slug: "industry-races-ahead",
        title:   { en: "1 · Industry races ahead of academia", zh: "1 · 產業界一路超前學術界" },
        summary: { en: "In 2022 industry released 32 significant machine learning models against academia's three. Until 2014 most such models came from universities.",
                   zh: "2022 年產業界發布 32 個重要機器學習模型，學術界只有 3 個。2014 年以前，這類模型多半來自大學。" },
        tags: ["research"],
        overview: { en: "The reason is resources, not talent: building state-of-the-art systems increasingly requires large amounts of data, compute and money, which industry actors hold in far greater quantity than nonprofits or universities. Even so, 54% of the world's large language and multimodal models in 2022 came from American institutions.",
                    zh: "原因是資源而非人才：打造頂尖系統愈來愈需要大量資料、算力與資金，而這些正是產業界遠多於非營利組織與大學的東西。即便如此，2022 年全球大型語言與多模態模型仍有 54% 來自美國機構。" } },
      { slug: "saturation",
        title:   { en: "2 · Performance saturation on traditional benchmarks", zh: "2 · 傳統基準測試的表現趨於飽和" },
        summary: { en: "AI kept posting state-of-the-art results, but year-over-year improvement on many benchmarks stayed marginal — and the speed at which benchmarks saturate is increasing.",
                   zh: "AI 持續刷新最佳成績，但許多基準的年度進步幅度很小 — 而且基準達到飽和的速度正在加快。" },
        tags: ["benchmarks"],
        overview: { en: "The response was to build wider yardsticks rather than harder single tasks: BIG-bench and HELM were both released as more comprehensive benchmarking suites. A benchmark that everyone scores 95% on measures nothing, so saturation is a measurement crisis before it is a progress report.",
                    zh: "回應方式不是設計更難的單一任務，而是造出更寬的量尺：BIG-bench 與 HELM 都是更全面的評測套件。當所有人都拿 95 分，這個基準就量不出東西了 — 所以飽和首先是量測危機，其次才是進度報告。" } },
      { slug: "environment",
        title:   { en: "3 · AI is both helping and harming the environment", zh: "3 · AI 同時在幫助與傷害環境" },
        summary: { en: "BLOOM's training run emitted 25 times more carbon than one air passenger flying New York to San Francisco — while models like BCOOLER show AI optimizing energy use.",
                   zh: "BLOOM 的訓練排放，是一名乘客從紐約單程飛往舊金山的 25 倍碳排 — 但 BCOOLER 這類模型也顯示 AI 能用來最佳化能源使用。" },
        tags: ["environment"],
        overview: { en: "This is the first edition in which the AI Index treats energy as a first-class measurement rather than a footnote. Both directions are real, and the report does not net them against each other.",
                    zh: "這是 AI 指數首次把能源當成一級量測項目，而不是註腳。兩個方向都是真的，而報告並未把它們相互抵銷。" } },
      { slug: "science",
        title:   { en: "4 · The world's best new scientist … AI?", zh: "4 · 世界上最好的新科學家……是 AI？" },
        summary: { en: "In 2022 AI models were used to aid hydrogen fusion, improve the efficiency of matrix manipulation and generate new antibodies.",
                   zh: "2022 年，AI 模型被用來協助氫融合、提升矩陣運算效率，以及生成新的抗體。" },
        tags: ["science"],
        overview: { en: "These are the first entries in what becomes a recurring theme: by the 2024 edition the list has grown to AlphaDev and GNoME, and by 2025 the work behind them collects two Nobel Prizes.",
                    zh: "這是一個後來反覆出現的主題的開端：到 2024 版，清單已擴充到 AlphaDev 與 GNoME；到 2025 版，支撐它們的研究拿下兩座諾貝爾獎。" } },
      { slug: "incidents",
        title:   { en: "5 · The number of AI misuse incidents is rapidly rising", zh: "5 · AI 誤用事故的數量快速上升" },
        summary: { en: "The AIAAIC database records a 26-fold increase in AI incidents and controversies since 2012, including a deepfake video of President Zelenskyy surrendering.",
                   zh: "AIAAIC 資料庫記錄的 AI 事故與爭議，自 2012 年以來成長 26 倍，其中包括一支澤倫斯基總統宣布投降的深偽影片。" },
        tags: ["ethics"],
        overview: { en: "Growth in this number measures two things at once — more AI in use, and more awareness that misuse is possible — which is why it cannot be read as a pure safety signal. US prisons using call-monitoring technology on inmates was another 2022 entry.",
                    zh: "這個數字的成長同時量到兩件事 — AI 使用變多，以及對誤用可能性的意識提高 — 所以它不能被單純讀成安全指標。2022 年另一個案例是美國監獄對受刑人使用通話監控技術。" } },
      { slug: "skills-demand",
        title:   { en: "6 · Demand for AI skills is rising across nearly every US sector", zh: "6 · 幾乎每個美國產業對 AI 技能的需求都在上升" },
        summary: { en: "Across every US sector with data except agriculture, forestry, fishing and hunting, AI-related job postings rose on average from 1.7% in 2021 to 1.9% in 2022.",
                   zh: "在有資料的美國各產業中，除了農林漁牧之外，AI 相關職缺占比平均由 2021 年的 1.7% 升至 2022 年的 1.9%。" },
        tags: ["labor"],
        overview: { en: "The breadth matters more than the size of the move: this is not a tech-sector phenomenon, and the exception is the one sector where the work is least digitized.",
                    zh: "廣度比幅度更值得注意：這不是科技業獨有的現象，而唯一的例外正是工作數位化程度最低的那個產業。" } },
      { slug: "investment-falls",
        title:   { en: "7 · For the first time in a decade, private AI investment decreased", zh: "7 · 十年來首次，AI 私人投資出現下滑" },
        summary: { en: "Global private AI investment was $91.9 billion in 2022, a 26.7% decrease from 2021. Funding events and newly funded companies fell too.",
                   zh: "2022 年全球 AI 私人投資為 919 億美元，較 2021 年下滑 26.7%。募資事件數與新募資公司數同步減少。" },
        tags: ["economy"],
        overview: { en: "The decade-long picture is the opposite: 2022's total was still 18 times what it was in 2013. The United States led with $47.4 billion, roughly 3.5 times China's $13.4 billion and 11 times the United Kingdom's $4.4 billion.",
                    zh: "但拉長到十年來看是相反的：2022 年的總額仍是 2013 年的 18 倍。美國以 474 億美元居首，約為中國 134 億美元的 3.5 倍、英國 44 億美元的 11 倍。" } },
      { slug: "adoption-plateau",
        title:   { en: "8 · Adoption has plateaued, but adopters keep pulling ahead", zh: "8 · 採用率趨於平緩，但已採用者持續拉開差距" },
        summary: { en: "The share of companies adopting AI has more than doubled since 2017 but has sat between 50% and 60% in recent years — and those that adopted report real cost cuts and revenue gains.",
                   zh: "採用 AI 的企業比例自 2017 年以來翻倍有餘，但近年停在 50% 至 60% 之間 — 而已採用的企業回報了實際的成本下降與營收成長。" },
        tags: ["adoption"],
        overview: { en: "The most embedded capabilities were robotic process automation (39%), computer vision (34%), NL text understanding (33%) and virtual agents (33%). The most common use case was service operations optimization, at 24%.",
                    zh: "最常被導入的能力是機器人流程自動化(39%)、電腦視覺(34%)、自然語言文字理解(33%)與虛擬客服(33%)。最常見的應用場景是服務營運最佳化，占 24%。" } },
      { slug: "policymakers",
        title:   { en: "9 · Policymaker interest in AI is on the rise", zh: "9 · 政策制定者對 AI 的關注持續升高" },
        summary: { en: "Across 127 countries, bills containing 'artificial intelligence' passed into law grew from one in 2016 to 37 in 2022; mentions in parliamentary proceedings rose nearly 6.5-fold since 2016.",
                   zh: "在 127 個國家中，含「人工智慧」字樣並通過成為法律的法案，由 2016 年的 1 件增至 2022 年的 37 件；議會紀錄中的提及次數則自 2016 年成長近 6.5 倍。" },
        tags: ["policy"],
        overview: { en: "The US moved from talk to enactment: 2% of federal AI bills became law in 2021, rising to 10% in 2022, while 35% of state-level AI bills passed. There were also 110 AI-related legal cases in US courts in 2022, 6.5 times the 2016 figure.",
                    zh: "美國從討論走向立法：聯邦 AI 法案的通過率由 2021 年的 2% 升至 2022 年的 10%，州層級則有 35% 通過。2022 年美國法院也有 110 件 AI 相關訴訟，是 2016 年的 6.5 倍。" } },
      { slug: "china-vs-us-opinion",
        title:   { en: "10 · Chinese citizens feel most positively about AI; Americans do not", zh: "10 · 中國民眾對 AI 最正面，美國人則否" },
        summary: { en: "In a 2022 IPSOS survey, 78% of Chinese respondents agreed AI products have more benefits than drawbacks — against just 35% of Americans, among the lowest of all surveyed countries.",
                   zh: "在 2022 年 IPSOS 調查中，78% 的中國受訪者同意 AI 產品利大於弊 — 而美國僅 35%，是受訪國家中最低的幾個之一。" },
        tags: ["public opinion"],
        overview: { en: "Saudi Arabia (76%) and India (71%) followed China. The gap is not only national: men were more likely than women to say AI products make their lives easier, to trust companies using AI, and to expect AI to help rather than harm.",
                    zh: "沙烏地阿拉伯(76%)與印度(71%)僅次於中國。這個落差也不只存在於國家之間：男性比女性更傾向認為 AI 產品讓生活更輕鬆、更信任使用 AI 的企業，也更預期 AI 會帶來幫助而非傷害。" } }
    ]
  },

  /* -------------------------------------------------------------- CHARTS */
  {
    type: "bars",
    id: "investment",
    nav:      { en: "Investment", zh: "投資" },
    title:    { en: "Private AI investment in 2022, by country", zh: "2022 年各國的 AI 私人投資" },
    subtitle: { en: "US$ billions. The global total fell 26.7% to $91.9 billion — the first year-over-year decline in a decade — but the ranking held.",
                zh: "單位十億美元。全球總額下滑 26.7% 至 919 億美元，是十年來首次年度衰退，但排名並未改變。" },
    series: [
      { label: { en: "United States",  zh: "美國" }, value: 47.4 },
      { label: { en: "China",          zh: "中國" }, value: 13.4 },
      { label: { en: "United Kingdom", zh: "英國" }, value: 4.4 }
    ]
  },
  {
    type: "bars",
    id: "focus-areas",
    nav:      { en: "Focus Areas", zh: "投資領域" },
    title:    { en: "Where that money actually went", zh: "這些錢實際流向哪些領域" },
    subtitle: { en: "Top AI investment focus areas in 2022, US$ billions. Most focus areas took less money than in 2021 — this is the ranking within a shrinking pool.",
                zh: "2022 年 AI 投資金額最高的領域，單位十億美元。多數領域拿到的錢都比 2021 年少 — 這是在縮水的池子裡的排名。" },
    series: [
      { label: { en: "Medical/health", zh: "醫療健康" }, value: 6.1 },
      { label: { en: "Data & cloud",   zh: "資料與雲端" }, value: 5.9 },
      { label: { en: "Fintech",        zh: "金融科技" }, value: 5.5 }
    ]
  },

  /* ------------------------------------------------------------ CHAPTERS */
  {
    type: "accordion",
    id: "chapters",
    nav:      { en: "Chapters", zh: "各章重點" },
    title:    { en: "Eight chapters, in brief", zh: "八大章節速覽" },
    subtitle: { en: "Each chapter's headline highlights. Expand to read the key numbers.",
                zh: "各章的重點摘要。展開可看關鍵數字。" },
    qa: [
      { q: { en: "1 · Research & Development", zh: "1 · 研發" },
        a: { en: "Industry released 32 significant machine learning models in 2022 against academia's three. Large models kept growing and getting costlier: GPT-2 had 1.5 billion parameters and cost an estimated $50,000 to train in 2019; PaLM had 540 billion and cost an estimated $8 million — 360 times larger and 160 times more expensive. China continues to lead total AI journal, conference and repository publications, while the US still leads on conference and repository citations, and produced 54% of the world's large language and multimodal models.",
             zh: "2022 年產業界發布 32 個重要機器學習模型，學術界僅 3 個。大模型持續變大也變貴：2019 年的 GPT-2 有 15 億參數，訓練成本估計 5 萬美元；PaLM 有 5,400 億參數，估計 800 萬美元 — 規模大 360 倍、成本高 160 倍。中國在 AI 期刊、會議與 repo 論文總量持續領先，美國則仍在會議與 repo 引用數領先，並產出全球 54% 的大型語言與多模態模型。" },
        link: { url: "research.html", label: { en: "Full deep dive: Research & Development →", zh: "完整詳解：研發 →" } } },
      { q: { en: "2 · Technical Performance", zh: "2 · 技術表現" },
        a: { en: "Year-over-year gains on many benchmarks stayed marginal while saturation arrived faster, prompting broader suites like BIG-bench and HELM. Generative AI broke into public consciousness with DALL·E 2, Stable Diffusion, Make-A-Video and ChatGPT — all prone to hallucination. Systems became more flexible (BEiT-3, PaLI, Gato) but still struggled with complex planning. Nvidia used reinforcement learning to improve chip design, and Google used PaLM to suggest improvements to PaLM.",
             zh: "許多基準的年度進步幅度很小，飽和卻來得更快，促成 BIG-bench 與 HELM 這類更寬的評測套件。生成式 AI 隨 DALL·E 2、Stable Diffusion、Make-A-Video 與 ChatGPT 進入大眾視野 — 但都容易產生幻覺。系統變得更泛用(BEiT-3、PaLI、Gato)，在複雜規劃上仍然吃力。Nvidia 用強化學習改進晶片設計，Google 則用 PaLM 提出改進 PaLM 的方法。" },
        link: { url: "performance.html", label: { en: "Full deep dive: Technical Performance →", zh: "完整詳解：技術表現 →" } } },
      { q: { en: "3 · Technical AI Ethics", zh: "3 · AI 技術倫理" },
        a: { en: "AI incidents and controversies logged by the AIAAIC database rose 26-fold since 2012. Generative models arrived with their ethical problems attached — text-to-image generators are routinely biased along gender lines and chatbots can be tricked into harmful uses. Fairer is not always less biased: models scoring better on some fairness benchmarks tend to show worse gender bias. Accepted submissions to FAccT more than doubled since 2021 and grew tenfold since 2018.",
             zh: "AIAAIC 資料庫記錄的 AI 事故與爭議自 2012 年成長 26 倍。生成式模型帶著自己的倫理問題一起到來 — 文字轉圖像模型普遍存在性別偏誤，聊天機器人也可能被誘導用於有害目的。更公平不等於更少偏誤：在某些公平性基準上表現較好的模型，性別偏誤反而更嚴重。頂尖倫理會議 FAccT 的接受論文數較 2021 年翻倍有餘，較 2018 年成長十倍。" },
        link: { url: "ethics.html", label: { en: "Full deep dive: Technical AI Ethics →", zh: "完整詳解：AI 技術倫理 →" } } },
      { q: { en: "4 · The Economy", zh: "4 · 經濟" },
        a: { en: "Global private AI investment fell 26.7% to $91.9 billion — the first decline in a decade, though still 18 times the 2013 figure. The US led with $47.4 billion, about 3.5 times China's $13.4 billion. Medical and healthcare drew the most investment ($6.1B), then data and cloud ($5.9B) and fintech ($5.5B). Adoption plateaued between 50% and 60%. In a GitHub survey, 88% of Copilot users felt more productive. China installed more industrial robots in 2021 than the rest of the world combined.",
             zh: "全球 AI 私人投資下滑 26.7% 至 919 億美元 — 十年來首次衰退，但仍是 2013 年的 18 倍。美國以 474 億美元居首，約為中國 134 億美元的 3.5 倍。醫療健康吸引最多投資(61 億美元)，其次是資料與雲端(59 億美元)與金融科技(55 億美元)。企業採用率停在 50% 至 60% 之間。GitHub 調查中，88% 的 Copilot 使用者覺得更有生產力。2021 年中國安裝的工業機器人數量超過世界其他地區的總和。" },
        link: { url: "economy.html", label: { en: "Full deep dive: The Economy →", zh: "完整詳解：經濟 →" } } },
      { q: { en: "5 · Education", zh: "5 · 教育" },
        a: { en: "The share of new US computer science PhDs specializing in AI jumped to 19.1% in 2021, from 14.9% in 2020 and 10.2% in 2010. 65.4% of new AI PhDs took industry jobs against 28.2% entering academia — in 2011 the split was nearly even. North American CS, CE and information faculty hires stayed flat (710 in 2021 against 733 in 2012). The funding gap widened: median external research expenditure was $9.7 million at private US CS departments against $5.7 million at public ones. 181,040 AP CS exams were taken in 2021, ninefold the 2007 figure.",
             zh: "美國新科資訊科學博士中主修 AI 的比例，由 2010 年的 10.2%、2020 年的 14.9%，升至 2021 年的 19.1%。65.4% 的新科 AI 博士進入產業界，28.2% 進入學術界 — 2011 年兩者幾乎各半。北美資訊科學、電腦工程與資訊學門的新聘教職持平(2021 年 710 人，2012 年 733 人)。經費落差擴大：美國私立大學資訊科系的外部研究支出中位數為 970 萬美元，公立為 570 萬美元。2021 年共 181,040 人次應考 AP 資訊科學，是 2007 年的九倍。" },
        link: { url: "education.html", label: { en: "Full deep dive: Education →", zh: "完整詳解：教育 →" } } },
      { q: { en: "6 · Policy & Governance", zh: "6 · 政策與治理" },
        a: { en: "Across 127 countries, AI bills passed into law grew from one in 2016 to 37 in 2022, and mentions of AI in the parliamentary records of 81 countries rose nearly 6.5-fold since 2016. The US moved from talk to enactment: 2% of federal AI bills became law in 2021 against 10% in 2022, with 35% of state-level bills passing. US government AI-related contract spending has grown roughly 2.5 times since 2017. There were 110 AI-related legal cases in US courts in 2022, 6.5 times the 2016 figure.",
             zh: "127 個國家中，通過成為法律的 AI 法案由 2016 年的 1 件增至 2022 年的 37 件；81 個國家議會紀錄中提及 AI 的次數，自 2016 年成長近 6.5 倍。美國從討論走向立法：聯邦 AI 法案通過率由 2021 年的 2% 升至 2022 年的 10%，州層級則有 35% 通過。美國政府的 AI 相關合約支出自 2017 年成長約 2.5 倍。2022 年美國法院有 110 件 AI 相關訴訟，是 2016 年的 6.5 倍。" },
        link: { url: "policy.html", label: { en: "Full deep dive: Policy & Governance →", zh: "完整詳解：政策與治理 →" } } },
      { q: { en: "7 · Diversity", zh: "7 · 多元性" },
        a: { en: "North American CS students grew more ethnically diverse: white students were 71.9% of new resident CS bachelor's graduates in 2011 and 46.7% in 2021. New AI PhDs remained overwhelmingly male — 78.7% in 2021, with the female share up just 3.2 percentage points since 2011. The share of new female CS, CE and information faculty hires rose from 24.9% in 2017 to 30.2%, though 75.9% of such faculty are still male. The female share of AP CS exams rose from 16.8% in 2007 to 30.6% in 2021.",
             zh: "北美資訊科學學生的族裔組成更加多元：白人在新科本地資訊科學學士畢業生中的占比，由 2011 年的 71.9% 降至 2021 年的 46.7%。新科 AI 博士仍以男性為壓倒性多數 — 2021 年為 78.7%，女性占比自 2011 年僅上升 3.2 個百分點。新聘女性資訊科學、電腦工程與資訊學門教職的比例由 2017 年的 24.9% 升至 30.2%，但該領域教職仍有 75.9% 為男性。女性應考 AP 資訊科學的占比由 2007 年的 16.8% 升至 2021 年的 30.6%。" },
        link: { url: "diversity.html", label: { en: "Full deep dive: Diversity →", zh: "完整詳解：多元性 →" } } },
      { q: { en: "8 · Public Opinion", zh: "8 · 民意" },
        a: { en: "In a 2022 IPSOS survey, 78% of Chinese respondents said AI products have more benefits than drawbacks, followed by Saudi Arabia (76%) and India (71%); only 35% of Americans agreed. Men were consistently more positive than women. Self-driving cars remain unconvincing — only 27% globally would feel safe in one, and only 26% of Americans think driverless passenger vehicles are good for society. Among NLP researchers surveyed, 77% agreed private AI firms have too much influence and 73% expected AI to bring revolutionary societal change.",
             zh: "在 2022 年 IPSOS 調查中，78% 的中國受訪者認為 AI 產品利大於弊，其次是沙烏地阿拉伯(76%)與印度(71%)；美國僅 35% 同意。男性的態度一致比女性更正面。自駕車仍未說服大眾 — 全球只有 27% 的人覺得坐在自駕車裡是安全的，美國也只有 26% 認為無人載客車對社會有益。在受訪的自然語言處理研究者中，77% 認為私人 AI 公司影響力過大，73% 預期 AI 很快會帶來革命性的社會變化。" },
        link: { url: "public-opinion.html", label: { en: "Full deep dive: Public Opinion →", zh: "完整詳解：民意 →" } } }
    ]
  },

  /* -------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In Its Words", zh: "報告原文" },
    title:    { en: "In the report's own words", zh: "報告自己的說法" },
    subtitle: { en: "Lines that capture the year, from the Top Ten Takeaways and the chapter highlights.",
                zh: "取自 10 條重點與各章摘要，足以定義這一年的句子。" },
    quotes: [
      { text: { en: "Until 2014, most significant machine learning models were released by academia. Since then, industry has taken over.",
                zh: "2014 年以前，多數重要的機器學習模型由學術界發布。此後，產業界接手了。" },
        by: "Top Ten Takeaways" },
      { text: { en: "2022 saw the release of text-to-image models like DALL-E 2 and Stable Diffusion, text-to-video systems like Make-A-Video, and chatbots like ChatGPT.",
                zh: "2022 年出現了 DALL·E 2 與 Stable Diffusion 這類文字轉圖像模型、Make-A-Video 這類文字轉影片系統，以及 ChatGPT 這類聊天機器人。" },
        by: "Chapter 2 · Technical Performance" },
      { text: { en: "Global AI private investment was $91.9 billion in 2022, which represented a 26.7% decrease since 2021.",
                zh: "2022 年全球 AI 私人投資為 919 億美元，較 2021 年下滑 26.7%。" },
        by: "Top Ten Takeaways" },
      { text: { en: "Language models which perform better on certain fairness benchmarks tend to have worse gender bias.",
                zh: "在某些公平性基準上表現較好的語言模型，性別偏誤反而傾向更嚴重。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "Only 27% of respondents reported feeling safe in a self-driving car.",
                zh: "只有 27% 的受訪者表示，坐在自駕車裡會覺得安全。" },
        by: "Chapter 8 · Public Opinion" }
    ]
  },

  /* ----------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "報告原文" },
    title: { en: "Read the full report", zh: "閱讀完整報告" },
    text:  { en: "386 pages, eight chapters, hundreds of charts — free from Stanford HAI, with the underlying public data.",
             zh: "386 頁、八大章節、數百張圖表 — 史丹佛 HAI 免費提供，並附上原始公開資料。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2023-ai-index-report",
             label: { en: "Open the AI Index 2023 →", zh: "開啟 AI 指數 2023 →" } }
  }
];

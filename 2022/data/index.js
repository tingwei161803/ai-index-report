/* =========================================================================
   AI Index Report 2022 · index.js — the edition overview

   Source: Stanford HAI — Artificial Intelligence Index Report 2022 (5th ed.)
   https://hai.stanford.edu/ai-index/2022-ai-index-report

   Built from the report's own "Top Takeaways" and the per-chapter Report
   Highlights. The 2022 edition reports on calendar year 2021.

   Five chapters — the most compact structure of any edition on this site.
   The Economy and Education share a chapter here, and there is no separate
   Diversity or Public Opinion chapter; both appear again from 2023 onward.
   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_META = {
  title:    { en: "AI Index Report 2022", zh: "AI 指數報告 2022" },
  subtitle: { en: "Stanford HAI's fifth edition, read as data — 8 takeaways, 5 chapters.",
              zh: "史丹佛 HAI 第五版，用資料讀懂 — 8 條重點、5 大章節。" }
};

window.SITE_SECTIONS = [

  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "2021: investment doubled while it flowed to fewer companies",
                zh: "2021 年：投資翻倍，卻流向更少的公司" },
    subtitle: { en: "The 2022 AI Index covers calendar year 2021 across five chapters — research, technical performance, technical AI ethics, the economy and education together, and AI policy and governance. It is the leanest edition on this site, and the one that first records the shape of the decade to come: money concentrating, models getting cheaper to run and more biased to use, and legislatures beginning to write AI into law. A few numbers that set the scene:",
                zh: "2022 年 AI 指數涵蓋 2021 年，分為五大章節：研發、技術表現、AI 技術倫理、經濟與教育(合併成一章)，以及 AI 政策與治理。這是本站收錄中最精簡的一版，卻最早記錄下往後十年的形狀：資金集中、模型跑起來更便宜卻用起來更偏誤，而各國國會開始把 AI 寫進法律。先看幾個定錨的數字：" },
    stats: [
      { label: { en: "global private AI investment in 2021 (US$ bn), over 2× 2020", zh: "2021 年全球 AI 私人投資(十億美元)，為 2020 年的兩倍以上" }, value: 93.5 },
      { label: { en: "funding rounds worth $500m or more in 2021 (four in 2020)", zh: "2021 年 5 億美元以上的募資輪數(2020 年為 4 輪)" }, value: 15 },
      { label: { en: "newly funded AI companies in 2021, down from 1,051 in 2019", zh: "2021 年新募資的 AI 公司數，2019 年為 1,051 家" }, value: 746 },
      { label: { en: "% more elicited toxicity from a 280B model than a 2018 117M one", zh: "% 2,800 億參數模型比 2018 年 1.17 億參數模型多出的誘發毒性" }, value: 29 },
      { label: { en: "% fall in the cost to train an image classifier since 2018", zh: "% 訓練影像分類器的成本自 2018 年以來的降幅" }, value: 63.6 },
      { label: { en: "AI bills passed into law across 25 countries (one in 2016)", zh: "25 國通過的 AI 法案件數(2016 年僅 1 件)" }, value: 18 }
    ]
  },

  /* ----------------------------------------------------------- TAKEAWAYS */
  {
    type: "cards",
    id: "takeaways",
    nav:      { en: "8 Takeaways", zh: "8 條重點" },
    title:    { en: "The Top Takeaways", zh: "8 條重點摘要" },
    subtitle: { en: "The report's own summary of the year, in its own order. Click any card for the full text.",
                zh: "報告自身對這一年的總結，依其原本順序排列。點任一張卡片可看完整內容。" },
    items: [
      { slug: "investment-concentration",
        title:   { en: "1 · Private investment soared while concentration intensified", zh: "1 · 私人投資暴增，同時集中度也在加深" },
        summary: { en: "Private AI investment reached about $93.5 billion in 2021, more than double 2020 — while the number of newly funded AI companies kept falling, from 1,051 in 2019 to 746.",
                   zh: "2021 年 AI 私人投資約達 935 億美元，是 2020 年的兩倍以上 — 但新募資的 AI 公司數持續下滑，由 2019 年的 1,051 家減至 746 家。" },
        tags: ["economy"],
        overview: { en: "The concentration shows up most clearly in round size: there were four funding rounds worth $500 million or more in 2020, and fifteen in 2021. More money, fewer recipients, bigger cheques — the pattern that defines the rest of the decade starts here.",
                    zh: "集中最明顯的證據是輪次規模：2020 年有 4 輪 5 億美元以上的募資，2021 年有 15 輪。錢更多、拿到的人更少、單筆更大 — 定義往後十年的模式，從這裡開始。" } },
      { slug: "us-china-collab",
        title:   { en: "2 · The US and China dominated cross-country AI collaboration", zh: "2 · 美中主導了跨國 AI 合作" },
        summary: { en: "Despite rising geopolitical tension, US–China collaborations on AI publications grew fivefold since 2010 and produced 2.7 times more papers than the next pair, the UK and China.",
                   zh: "儘管地緣政治緊張升高，美中在 AI 論文上的合作自 2010 年成長五倍，產出的論文是次高的英中組合的 2.7 倍。" },
        tags: ["research"],
        overview: { en: "The finding sits awkwardly next to the policy chapter, and that is the point: research collaboration and strategic competition were running in opposite directions at the same time. By the 2023 edition the growth rate has slowed to 2.1% year over year, the smallest since 2010.",
                    zh: "這個發現和政策那一章放在一起顯得矛盾，而這正是重點：研究合作與戰略競爭當時正朝相反方向前進。到 2023 版，這個成長率已放緩到年增 2.1%，是 2010 年以來最低。" } },
      { slug: "bigger-more-biased",
        title:   { en: "3 · Language models are more capable than ever, but also more biased", zh: "3 · 語言模型能力空前，偏誤也空前" },
        summary: { en: "A 280-billion-parameter model built in 2021 showed a 29% increase in elicited toxicity over the 117-million-parameter model considered state of the art in 2018.",
                   zh: "2021 年建造的 2,800 億參數模型，誘發毒性比 2018 年被視為最佳的 1.17 億參數模型高出 29%。" },
        tags: ["ethics"],
        overview: { en: "Capability and bias grew together because both come from the same training data. The report's framing is deliberate: as systems become more capable, the potential severity of their biases rises with them rather than being diluted by scale.",
                    zh: "能力與偏誤一起成長，因為兩者來自同一批訓練資料。報告的措辭是刻意的：當系統能力愈強，其偏誤的潛在嚴重性也隨之上升，而不是被規模稀釋掉。" } },
      { slug: "ethics-everywhere",
        title:   { en: "4 · The rise of AI ethics everywhere", zh: "4 · AI 倫理全面崛起" },
        summary: { en: "Research on fairness and transparency has exploded since 2014, with a fivefold increase in publications at ethics-related conferences; industry-affiliated researchers contributed 71% more year over year.",
                   zh: "公平性與透明度的研究自 2014 年以來暴增，倫理相關會議的論文成長五倍；具產業背景的研究者論文數則年增 71%。" },
        tags: ["ethics"],
        overview: { en: "Algorithmic fairness and bias moved from being primarily an academic pursuit to a mainstream research topic. The industry share is the part worth watching — it means the companies building the models are also writing the papers that measure them.",
                    zh: "演算法公平性與偏誤，從以學術為主的題目變成主流研究領域。值得注意的是產業界的占比 — 這意味著打造模型的公司，同時也在寫量測這些模型的論文。" } },
      { slug: "cheaper-faster",
        title:   { en: "5 · AI becomes more affordable and higher performing", zh: "5 · AI 變得更便宜也更強" },
        summary: { en: "Since 2018 the cost to train an image classification system fell 63.6% while training times improved 94.4% — and the same pattern holds across other MLPerf categories.",
                   zh: "自 2018 年以來，訓練影像分類系統的成本下降 63.6%，訓練時間改善 94.4% — 其他 MLPerf 類別也呈現相同模式。" },
        tags: ["cost"],
        overview: { en: "Cheaper and faster at the same time is what makes commercial adoption possible: it changes AI from a research budget line into an operating cost. The trend continues in later editions, where inference cost rather than training cost becomes the headline.",
                    zh: "同時變便宜又變快，正是商業採用得以發生的原因：它把 AI 從研究預算變成營運成本。這個趨勢在後續版本延續，只是主角從訓練成本換成了推論成本。" } },
      { slug: "data-data-data",
        title:   { en: "6 · Data, data, data", zh: "6 · 資料、資料、還是資料" },
        summary: { en: "Nine of the ten benchmarks in this report had state-of-the-art systems trained with extra data — a trend that implicitly favors private-sector actors with vast datasets.",
                   zh: "本報告的十項基準中，有九項的最佳系統是用額外資料訓練出來的 — 這個趨勢實質上有利於握有龐大資料集的私人企業。" },
        tags: ["benchmarks"],
        overview: { en: "This is a structural observation dressed as a benchmark note. If the way to top a leaderboard is to bring more data, then leaderboards measure data access as much as they measure method, and the actors with the most data win by default.",
                    zh: "這是一個披著基準註解外衣的結構性觀察。如果登頂排行榜的方法是帶更多資料進來，那排行榜量到的就不只是方法，還有資料取得能力 — 而握有最多資料的一方預設就贏了。" } },
      { slug: "legislation",
        title:   { en: "7 · More global legislation on AI than ever", zh: "7 · 全球 AI 立法數量創下新高" },
        summary: { en: "Across 25 countries, bills containing 'artificial intelligence' passed into law grew from one in 2016 to 18 in 2021. Spain, the UK and the US each passed three.",
                   zh: "在 25 個國家中，含「人工智慧」字樣並通過成為法律的法案，由 2016 年的 1 件增至 2021 年的 18 件。西班牙、英國與美國各通過 3 件。" },
        tags: ["policy"],
        overview: { en: "The gap between proposing and passing was the real story in the US: the number of federal bills relating to AI rose sharply from 2015 to 2021, yet only 2% became law. At state level, one in every 50 proposed AI bills passed in 2021, from a proposal count that grew from two in 2012 to 131.",
                    zh: "在美國，真正的重點是提案與通過之間的落差：2015 至 2021 年聯邦提出的 AI 相關法案大幅增加，卻只有 2% 成為法律。州層級在 2021 年是每 50 件提案通過 1 件，而提案數已由 2012 年的 2 件增至 131 件。" } },
      { slug: "robotic-arms",
        title:   { en: "8 · Robotic arms are becoming cheaper", zh: "8 · 機器手臂正在變便宜" },
        summary: { en: "An AI Index survey found the median price of robotic arms fell 46.2% in five years — from $42,000 per arm in 2017 to $22,600 in 2021.",
                   zh: "AI 指數的調查發現，機器手臂的中位價格五年內下跌 46.2% — 由 2017 年每支 42,000 美元降至 2021 年的 22,600 美元。" },
        tags: ["robotics"],
        overview: { en: "Price is the access story for robotics the way inference cost is for language models: halving the entry price puts the hardware within reach of labs and small firms that could not previously run the experiments at all.",
                    zh: "價格對機器人領域的意義，就像推論成本之於語言模型：入門價腰斬，讓原本根本做不起實驗的實驗室與小公司也負擔得起這些硬體。" } }
    ]
  },

  /* -------------------------------------------------------------- CHARTS */
  {
    type: "bars",
    id: "startups",
    nav:      { en: "Startups", zh: "新創家數" },
    title:    { en: "More money, fewer companies", zh: "錢更多，公司更少" },
    subtitle: { en: "Newly funded AI companies worldwide, by year. Private investment more than doubled in 2021 while the count of companies receiving it kept falling — that divergence is the edition's central economic finding.",
                zh: "全球新募資的 AI 公司家數，依年份。2021 年私人投資翻倍有餘，拿到錢的公司家數卻持續下滑 — 這個背離正是這一版最核心的經濟發現。" },
    series: [
      { label: { en: "2019", zh: "2019" }, value: 1051 },
      { label: { en: "2020", zh: "2020" }, value: 762 },
      { label: { en: "2021", zh: "2021" }, value: 746 }
    ]
  },
  {
    type: "bars",
    id: "robot-price",
    nav:      { en: "Robot Price", zh: "機器手臂價格" },
    title:    { en: "The price of a robotic arm, halved in five years", zh: "機器手臂價格，五年腰斬" },
    subtitle: { en: "Median price per robotic arm, US dollars, from an AI Index survey. A 46.2% fall is what moved robotics research from well-funded labs to ordinary ones.",
                zh: "AI 指數調查中，機器手臂的中位價格，單位美元。46.2% 的跌幅，是機器人研究從資金充裕的實驗室走進一般實驗室的原因。" },
    series: [
      { label: { en: "2017", zh: "2017" }, value: 42000 },
      { label: { en: "2021", zh: "2021" }, value: 22600 }
    ]
  },

  /* ------------------------------------------------------------ CHAPTERS */
  {
    type: "accordion",
    id: "chapters",
    nav:      { en: "Chapters", zh: "各章重點" },
    title:    { en: "Five chapters, in brief", zh: "五大章節速覽" },
    subtitle: { en: "Each chapter's headline highlights. Expand to read the key numbers.",
                zh: "各章的重點摘要。展開可看關鍵數字。" },
    qa: [
      { q: { en: "1 · Research & Development", zh: "1 · 研發" },
        a: { en: "US–China cross-country collaboration on AI publications grew fivefold since 2010 and produced 2.7 times more papers than the UK–China pair. China led the world in journal, conference and repository publications combined — 63.2% higher than the United States — while the US held a dominant lead in conference and repository citations. Collaboration between educational and nonprofit organizations produced the most publications. AI patents filed in 2021 were more than 30 times the 2015 figure, a compound annual growth rate of 76.9%.",
             zh: "美中在 AI 論文上的跨國合作自 2010 年成長五倍，產出的論文是英中組合的 2.7 倍。中國在期刊、會議與 repo 論文合計上領先全球，較美國高出 63.2%；美國則在會議與 repo 引用數上維持明顯領先。教育機構與非營利組織之間的合作產出最多論文。2021 年申請的 AI 專利數是 2015 年的 30 倍以上，年複合成長率 76.9%。" },
        link: { url: "research.html", label: { en: "Full deep dive: Research & Development →", zh: "完整詳解：研發 →" } } },
      { q: { en: "2 · Technical Performance", zh: "2 · 技術表現" },
        a: { en: "Nine of the ten benchmarks in the report had top results from systems trained with extra data. AI already exceeded human performance on SuperGLUE and SQuAD by 1%–5%, while on abductive natural language inference the human lead shrank from nine percentage points in 2019 to one. General reinforcement learning improved 129% on Procgen in two years, and the top chess engine exceeded Magnus Carlsen's peak Elo by 24%. Training cost fell 63.6% since 2018 and training time improved 94.4%; median robotic arm prices fell 46.2% in five years.",
             zh: "報告中的十項基準有九項，其最佳成績來自使用額外資料訓練的系統。AI 在 SuperGLUE 與 SQuAD 上已超越人類 1% 至 5%；在溯因自然語言推論(aNLI)上，人類的領先幅度則由 2019 年的 9 個百分點縮小到 1 個。通用強化學習在 Procgen 上兩年進步 129%，頂尖西洋棋引擎的 Elo 超越 Magnus Carlsen 最高分 24%。訓練成本自 2018 年下降 63.6%、訓練時間改善 94.4%；機器手臂中位價格五年下跌 46.2%。" },
        link: { url: "performance.html", label: { en: "Full deep dive: Technical Performance →", zh: "完整詳解：技術表現 →" } } },
      { q: { en: "3 · Technical AI Ethics", zh: "3 · AI 技術倫理" },
        a: { en: "A 280-billion-parameter model built in 2021 showed 29% more elicited toxicity than the 117-million-parameter 2018 state of the art — capability and bias growing together. Research on fairness and transparency rose fivefold at ethics conferences since 2014, with industry-affiliated researchers contributing 71% more year over year. Multimodal models learned multimodal biases: experiments on CLIP showed images of Black people misclassified as nonhuman at over twice the rate of any other race.",
             zh: "2021 年的 2,800 億參數模型，誘發毒性比 2018 年最佳的 1.17 億參數模型高出 29% — 能力與偏誤一起成長。公平性與透明度研究在倫理會議上自 2014 年成長五倍，具產業背景的研究者論文數年增 71%。多模態模型學到了多模態偏誤：CLIP 的實驗顯示，黑人影像被誤分類為非人的比率，是其他任何族裔的兩倍以上。" },
        link: { url: "ethics.html", label: { en: "Full deep dive: Technical AI Ethics →", zh: "完整詳解：AI 技術倫理 →" } } },
      { q: { en: "4 · The Economy & Education", zh: "4 · 經濟與教育" },
        a: { en: "Private AI investment reached about $93.5 billion in 2021, more than double 2020, while newly funded companies fell to 746 from 1,051 in 2019 and rounds worth $500 million or more rose from four to fifteen. Data management, processing and cloud drew the most investment, 2.6 times the 2020 figure. New Zealand, Hong Kong, Ireland, Luxembourg and Sweden had the highest growth in AI hiring since 2016. A McKinsey survey found 29% and 41% of respondents recognize equity and explainability as risks, but only 19% and 27% act on them. In 2020, one in five CS PhD graduates specialized in AI or ML.",
             zh: "2021 年 AI 私人投資約達 935 億美元，是 2020 年的兩倍以上；新募資公司家數由 2019 年的 1,051 家降至 746 家，而 5 億美元以上的募資輪則由 4 輪增至 15 輪。「資料管理、處理與雲端」吸引最多投資，是 2020 年的 2.6 倍。自 2016 年以來 AI 招聘成長最快的是紐西蘭、香港、愛爾蘭、盧森堡與瑞典。McKinsey 調查顯示，29% 與 41% 的受訪者分別認知到公平性與可解釋性是風險，但只有 19% 與 27% 採取了行動。2020 年每 5 位資訊科學博士就有 1 位主修 AI 或機器學習。" },
        link: { url: "economy-education.html", label: { en: "Full deep dive: The Economy & Education →", zh: "完整詳解：經濟與教育 →" } } },
      { q: { en: "5 · AI Policy & Governance", zh: "5 · AI 政策與治理" },
        a: { en: "Across 25 countries, bills containing 'artificial intelligence' passed into law grew from one in 2016 to 18 in 2021, with Spain, the UK and the US each passing three. In the US the federal record shows a sharp rise in proposed AI bills from 2015 to 2021 while only 2% became law. State legislators passed one in every 50 proposed AI bills in 2021, from a proposal count that grew from two in 2012 to 131. The 117th Congress was on track for the most AI mentions since 2001 — 295 by the end of 2021, halfway through the session, against 506 for the whole previous session.",
             zh: "在 25 個國家中，含「人工智慧」字樣並通過成為法律的法案由 2016 年的 1 件增至 2021 年的 18 件，西班牙、英國與美國各通過 3 件。美國聯邦紀錄顯示，2015 至 2021 年提出的 AI 相關法案大幅增加，但只有 2% 成為法律。州議員在 2021 年是每 50 件 AI 提案通過 1 件，提案數則由 2012 年的 2 件增至 131 件。第 117 屆國會有望創下 2001 年以來提及 AI 最多的紀錄 — 截至 2021 年底(會期過半)已有 295 次，而前一屆整屆為 506 次。" },
        link: { url: "policy.html", label: { en: "Full deep dive: AI Policy & Governance →", zh: "完整詳解：AI 政策與治理 →" } } }
    ]
  },

  /* -------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In Its Words", zh: "報告原文" },
    title:    { en: "In the report's own words", zh: "報告自己的說法" },
    subtitle: { en: "Lines that capture the year, from the Top Takeaways and the chapter highlights.",
                zh: "取自 8 條重點與各章摘要，足以定義這一年的句子。" },
    quotes: [
      { text: { en: "The private investment in AI in 2021 totaled around $93.5 billion — more than double the total private investment in 2020, while the number of newly funded AI companies continues to drop.",
                zh: "2021 年 AI 私人投資總額約 935 億美元 — 是 2020 年的兩倍以上，但新募資的 AI 公司家數持續下滑。" },
        by: "Top Takeaways" },
      { text: { en: "Large language models are setting new records on technical benchmarks, but new data shows that larger models are also more capable of reflecting biases from their training data.",
                zh: "大型語言模型正在技術基準上刷新紀錄，但新資料顯示，更大的模型也更容易反映訓練資料中的偏誤。" },
        by: "Top Takeaways" },
      { text: { en: "Top results across technical benchmarks have increasingly relied on the use of extra training data. This trend implicitly favors private sector actors with access to vast datasets.",
                zh: "各項技術基準的最佳成績，愈來愈依賴額外的訓練資料。這個趨勢實質上有利於能取得龐大資料集的私人企業。" },
        by: "Chapter 2 · Technical Performance" },
      { text: { en: "Algorithmic fairness and bias has shifted from being primarily an academic pursuit to becoming firmly embedded as a mainstream research topic.",
                zh: "演算法公平性與偏誤，已從以學術為主的題目，轉變為紮實嵌入主流的研究領域。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "The federal legislative record in the United States shows a sharp increase in proposed bills that relate to AI from 2015 to 2021, while the number passed remains low, with only 2% ultimately becoming law.",
                zh: "美國聯邦立法紀錄顯示，2015 至 2021 年提出的 AI 相關法案急遽增加，但通過數仍低，最終只有 2% 成為法律。" },
        by: "Chapter 5 · AI Policy & Governance" }
    ]
  },

  /* ----------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "報告原文" },
    title: { en: "Read the full report", zh: "閱讀完整報告" },
    text:  { en: "230 pages, five chapters, hundreds of charts — free from Stanford HAI, with the underlying public data.",
             zh: "230 頁、五大章節、數百張圖表 — 史丹佛 HAI 免費提供，並附上原始公開資料。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2022-ai-index-report",
             label: { en: "Open the AI Index 2022 →", zh: "開啟 AI 指數 2022 →" } }
  }
];

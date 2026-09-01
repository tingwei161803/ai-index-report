/* =========================================================================
   The Economy and Education — deep dive · economy-education.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2022, Chapter 4
   https://hai.stanford.edu/ai-index/2022-ai-index-report

   The fifth edition folds the economy and education into a single chapter:
   4.1 Jobs, 4.2 Investment, 4.3 Corporate Activity, 4.4 AI Education.
   Economic figures describe 2021; the education figures come from the CRA
   Taulbee Survey collected in Fall 2020 and so describe 2020.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "economy-education";

window.SITE_META = {
  title:    { en: "AI Index Report 2022", zh: "AI 指數報告 2022" },
  subtitle: { en: "The Economy & Education · a chapter deep dive", zh: "經濟與教育專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The money doubled. The number of companies getting it did not.",
                zh: "錢翻了一倍，拿到錢的公司卻沒有變多" },
    subtitle: { en: "The fifth edition of the AI Index puts the economy and education inside one chapter — labor demand, corporate investment, industry adoption and the PhD pipeline read as a single supply-and-demand story. In 2021 private AI investment more than doubled to around $93.5 billion while the number of newly funded AI companies fell for a third straight year, and in 2020 one in every five new computer science PhDs graduated with an AI/ML specialty. The numbers:",
                zh: "AI 指數第五版把經濟與教育放進同一章 — 勞動需求、企業投資、產業採用與博士人才管線，被當成同一個供需故事來講。2021 年 AI 私人投資翻倍以上，來到約 935 億美元，新獲資金的 AI 公司數卻連續第三年下滑；而在 2020 年，每 5 位新科資工博士就有 1 位主修 AI/ML。先看數字：" },
    stats: [
      { label: { en: "global private AI investment in 2021 (US$ billions) — more than double 2020", zh: "2021 年全球 AI 私人投資(十億美元) — 是 2020 年的兩倍以上" }, value: 93.5 },
      { label: { en: "newly funded AI companies worldwide in 2021 (2019: 1,051; 2020: 762)", zh: "2021 年全球新獲資金的 AI 公司數(2019 年 1,051 家、2020 年 762 家)" }, value: 746 },
      { label: { en: "funding rounds worth $500 million or more in 2021 (2020: 4)", zh: "2021 年 5 億美元以上的募資輪數(2020 年為 4 輪)" }, value: 15 },
      { label: { en: "US private AI investment (US$ billions) — over 3× China’s 17.21", zh: "美國私人 AI 投資(十億美元) — 為中國 172.1 億美元的 3 倍以上" }, value: 52.88 },
      { label: { en: "% of organizations worldwide adopting AI in 2021 (2020: 50%)", zh: "% 2021 年全球採用 AI 的組織比例(2020 年為 50%)" }, value: 56 },
      { label: { en: "% of new US CS PhDs specializing in AI/ML in 2020", zh: "% 2020 年主修 AI/ML 的美國新科資工博士比例" }, value: 21 }
    ]
  },

  /* ------------------------------------------------------- 4.2 INVESTMENT */
  {
    type: "prose",
    id: "investment",
    nav:      { en: "4.2 Investment", zh: "4.2 投資" },
    title:    { en: "4.2 — Record money, funneled into fewer and much bigger rounds",
                zh: "4.2 — 破紀錄的資金，流進更少、更大的募資輪" },
    subtitle: { en: "Global corporate AI investment reached $176.47 billion in 2021, up from $119.54 billion in 2020. Private investment led at around $93.5 billion, followed by mergers and acquisitions (around $72 billion, 3.3 times the 2020 figure), public offerings (around $9.5 billion) and minority stakes (around $1.3 billion).",
                zh: "2021 年全球企業 AI 投資達 1,764.7 億美元，高於 2020 年的 1,195.4 億美元。其中私人投資最多，約 935 億美元，其次是併購(約 720 億美元，為 2020 年的 3.3 倍)、公開發行(約 95 億美元)與少數股權(約 13 億美元)。" },
    blocks: [
      { type: "p",
        text: { en: "The doubling of private investment — the biggest year-over-year jump since 2014 — happened while the pool of recipients kept shrinking. The number of newly funded AI companies fell from 1,051 in 2019 to 762 in 2020 and 746 in 2021, the third year of a decline that began in 2018. The average private investment deal in 2021 was 81.1% larger than in 2020. Money did not spread out; it concentrated.",
                zh: "私人投資翻倍 — 這是 2014 年以來最大的年增幅度 — 但收錢的池子卻持續縮小。新獲資金的 AI 公司從 2019 年的 1,051 家降到 2020 年的 762 家，2021 年再降到 746 家，是 2018 年開始的第三年下滑。2021 年平均每筆私人投資案的規模比 2020 年大 81.1%。錢沒有分散出去，而是更集中。" } },
      { type: "h3",
        text: { en: "Bigger rounds, not more of them", zh: "輪次變大，而不是變多" } },
      { type: "ul",
        items: {
          en: ["Rounds worth $500 million or more went from 4 in 2020 to 15 in 2021 — rounds over $1 billion rose from 3 to 5, and the $500 million to $1 billion band from 1 to 10.",
               "The $100 million to $500 million band more than doubled, from 93 rounds to 235, and the $50 million to $100 million band more than doubled as well, from 85 to 194.",
               "Rounds under $50 million barely moved: 2,102 in 2020, 2,120 in 2021. All the growth came from the top of the range.",
               "Across every band, disclosed and undisclosed, total funding rounds rose from 2,638 to 2,959.",
               "The largest private investments of 2021 went to two data management companies and two robotics and autonomous driving companies — Databricks in the United States, Beijing Horizon Robotics in China, Oxbotica in the United Kingdom and Celonis in Germany."],
          zh: ["5 億美元以上的募資輪從 2020 年的 4 輪增加到 2021 年的 15 輪 — 其中超過 10 億美元的從 3 輪增為 5 輪，5 億至 10 億美元級距則從 1 輪增為 10 輪。",
               "1 億至 5 億美元級距從 93 輪翻倍以上到 235 輪，5,000 萬至 1 億美元級距同樣翻倍以上，從 85 輪增為 194 輪。",
               "5,000 萬美元以下的輪次幾乎沒動：2020 年 2,102 輪、2021 年 2,120 輪。成長全部來自金字塔頂端。",
               "把所有級距與未揭露金額的案子加總，募資輪次從 2,638 輪增加到 2,959 輪。",
               "2021 年最大的幾筆私人投資，落在兩家資料管理公司與兩家機器人／自駕公司 — 美國的 Databricks、中國的地平線機器人、英國的 Oxbotica 與德國的 Celonis。"]
        } },
      { type: "h3",
        text: { en: "Data infrastructure overtakes healthcare", zh: "資料基礎設施超車醫療" } },
      { type: "ul",
        items: {
          en: ["“Data management, processing, and cloud” drew the most private AI investment in 2021 at around $12.2 billion — 2.6 times the roughly $4.69 billion it took in 2020.",
               "Medical and healthcare came second at $11.29 billion, followed by fintech ($10.26 billion), autonomous vehicles ($8.09 billion) and semiconductors ($6.0 billion).",
               "Over the five years from 2017 to 2021 the ranking is different: medical and healthcare leads with $28.92 billion, then data management, processing and cloud ($26.91 billion), fintech ($24.92 billion) and retail ($21.95 billion). The 2021 result is a change of direction, not a long-standing lead.",
               "The categories with a steady multiyear climb were autonomous vehicles, cybersecurity and data protection, fitness and wellness, medical and healthcare, and semiconductors."],
          zh: ["「資料管理、處理與雲端」是 2021 年吸金最多的領域，約 122 億美元 — 是 2020 年約 46.9 億美元的 2.6 倍。",
               "醫療與健康照護以 112.9 億美元居次，其後是金融科技(102.6 億美元)、自駕車(80.9 億美元)與半導體(60 億美元)。",
               "把 2017 到 2021 五年加總，排序就不一樣了：醫療與健康照護以 289.2 億美元居首，其次是資料管理、處理與雲端(269.1 億美元)、金融科技(249.2 億美元)與零售(219.5 億美元)。2021 年的結果是轉向，不是長期領先。",
               "多年來穩定爬升的類別包括自駕車、資安與資料保護、健身與健康、醫療與健康照護，以及半導體。"]
        } },
      { type: "h3",
        text: { en: "One country, three times over", zh: "一個國家，三倍領先" } },
      { type: "p",
        text: { en: "US private AI investment reached $52.88 billion in 2021 — more than three times China’s $17.21 billion and over eleven times the United Kingdom’s $4.65 billion, with Israel ($2.41 billion) and Germany ($1.98 billion) next. Measured against regions rather than countries, the US led China by 3.1 times and the European Union ($6.42 billion) by 8.2 times, and all three grew from 2020. Aggregated across 2013–2021 the ordering is unchanged: the United States $149.0 billion, China $61.9 billion, then the United Kingdom and India at $10.8 billion each and Israel at $6.1 billion. The largest acquisitions of the year sat mostly in health and security — Microsoft bought Nuance Communications for $19.8 billion, Siemens bought Varian Medical Systems for $17.2 billion, Thoma Bravo bought Proofpoint for $12.4 billion, and NortonLifeLock bought the Czech company Avast for $8.0 billion.",
                zh: "2021 年美國私人 AI 投資達 528.8 億美元 — 是中國 172.1 億美元的三倍以上、英國 46.5 億美元的十一倍以上，其後為以色列(24.1 億美元)與德國(19.8 億美元)。若以區域來看，美國領先中國 3.1 倍、領先歐盟(64.2 億美元)8.2 倍，而這三者相較 2020 年都在成長。把 2013 到 2021 年加總，排序不變：美國 1,490 億美元、中國 619 億美元，接著是英國與印度各 108 億美元、以色列 61 億美元。這一年最大的幾筆收購多半落在醫療與資安 — 微軟以 198 億美元買下 Nuance Communications、西門子以 172 億美元買下 Varian Medical Systems、Thoma Bravo 以 124 億美元買下 Proofpoint，NortonLifeLock 則以 80 億美元買下捷克的 Avast。" } },
      { type: "ul",
        items: {
          en: ["Startup counts follow the same map. In 2021 the United States produced 299 newly funded AI companies, against China’s 119, the United Kingdom’s 49 and Israel’s 28 — roughly two and a half times China on the year.",
               "Aggregated from 2013 to 2021 the gap is wider still: 3,234 newly funded US companies against 940 in China and 427 in the United Kingdom.",
               "The decline in newly funded companies is not a global-South story. It shows up in the United States after 2018 and in China after 2019 — the two largest markets are the ones thinning out."],
          zh: ["新創家數也照著同一張地圖走。2021 年美國有 299 家新獲資金的 AI 公司，中國 119 家、英國 49 家、以色列 28 家 — 當年約為中國的兩倍半。",
               "把 2013 到 2021 年加總，差距更大：美國 3,234 家，中國 940 家，英國 427 家。",
               "新獲資金公司數的下滑並不是新興市場的故事。它出現在 2018 年之後的美國，以及 2019 年之後的中國 — 變薄的正是兩個最大的市場。"]
        } }
    ]
  },

  /* ------------------------------------------ private investment by country */
  {
    type: "bars",
    id: "invest-geo",
    nav:      { en: "By country", zh: "各國投資" },
    title:    { en: "Private AI investment in 2021, by geographic area",
                zh: "2021 年各地區的 AI 私人投資" },
    subtitle: { en: "Total private AI investment in 2021, in US$ billions. The United States took more than three times China’s total, and more than the next fourteen countries on the list combined.",
                zh: "2021 年 AI 私人投資總額(十億美元)。美國的金額是中國的三倍以上，也超過榜上接下來十四個國家的總和。" },
    series: [
      { label: { en: "United States", zh: "美國" },   value: 52.88 },
      { label: { en: "China", zh: "中國" },           value: 17.21 },
      { label: { en: "United Kingdom", zh: "英國" },  value: 4.65 },
      { label: { en: "Israel", zh: "以色列" },        value: 2.41 },
      { label: { en: "Germany", zh: "德國" },         value: 1.98 }
    ]
  },

  /* --------------------------------------------- investment by focus area */
  {
    type: "bars",
    id: "focus-areas",
    nav:      { en: "Focus areas", zh: "投資領域" },
    title:    { en: "What the 2021 money was buying",
                zh: "2021 年的資金買了什麼" },
    subtitle: { en: "Private AI investment by focus area in 2021, in US$ billions. Data management, processing and cloud took the top spot at 2.6 times its 2020 total, pushing medical and healthcare — the five-year leader — into second place.",
                zh: "2021 年各領域的 AI 私人投資(十億美元)。資料管理、處理與雲端以 2020 年的 2.6 倍登頂，把五年來的領先者醫療與健康照護擠到第二。" },
    series: [
      { label: { en: "Data & cloud", zh: "資料與雲端" },  value: 12.17 },
      { label: { en: "Healthcare", zh: "醫療健康" },      value: 11.29 },
      { label: { en: "Fintech", zh: "金融科技" },         value: 10.26 },
      { label: { en: "AV", zh: "自駕車" },                value: 8.09 },
      { label: { en: "Semiconductor", zh: "半導體" },     value: 6.0 }
    ]
  },

  /* ------------------------------------------------------------- 4.1 JOBS */
  {
    type: "prose",
    id: "jobs",
    nav:      { en: "4.1 Jobs", zh: "4.1 就業" },
    title:    { en: "4.1 — Hiring grew fastest in small open economies, demand piled up in a few US states",
                zh: "4.1 — 招聘成長最快的是小而開放的經濟體，需求則堆在少數幾個美國州" },
    subtitle: { en: "LinkedIn’s relative AI hiring index measures AI hiring against a country’s overall hiring, indexed to the 2016 average. On that measure New Zealand grew fastest in 2021 at 2.42 times its 2016 rate, followed by Hong Kong (1.56), Ireland (1.28), Luxembourg (1.26) and Sweden (1.24).",
                zh: "LinkedIn 的相對 AI 招聘指數，是把 AI 招聘拿來對照該國整體招聘，並以 2016 年平均為基準。以此衡量，2021 年成長最快的是紐西蘭，達 2016 年的 2.42 倍，其後為香港(1.56)、愛爾蘭(1.28)、盧森堡(1.26)與瑞典(1.24)。" },
    blocks: [
      { type: "p",
        text: { en: "The more interesting detail is the second derivative. Most countries and regions in the index saw their AI hiring growth slow between 2020 and 2021 — the pace at which AI hiring outruns general hiring declined almost everywhere. Germany and Sweden were the exceptions.",
                zh: "更值得看的是二階變化。指數涵蓋的多數國家與地區，AI 招聘成長在 2020 到 2021 年間放緩 — AI 招聘超越整體招聘的速度，幾乎在各地都下降了。德國與瑞典是例外。" } },
      { type: "h3",
        text: { en: "Where the postings are", zh: "職缺在哪裡" } },
      { type: "ul",
        items: {
          en: ["As a share of all job postings in 2021, AI roles were most common in Singapore (2.33%), then the United States (0.90%), Canada (0.78%), the United Kingdom (0.74%), Australia (0.58%) and New Zealand (0.25%).",
               "That share rose in the United States, Canada, Australia and New Zealand from 2020 to 2021, and fell in Singapore and the United Kingdom.",
               "Inside the United States, machine learning is the largest skill cluster at 0.57% of all postings, followed by artificial intelligence (0.33%), neural networks (0.15%), natural language processing (0.13%), robotics (0.11%), visual image recognition (0.10%) and autonomous driving (0.06%).",
               "Machine learning postings stand at nearly three times their 2018 level and artificial intelligence postings at around 1.5 times, despite small dips in both from 2019 to 2020.",
               "By sector, 3.30% of US information-sector postings were AI-related, ahead of professional, scientific and technical services (2.59%), manufacturing (2.02%) and finance and insurance (1.81%)."],
          zh: ["以佔所有職缺的比例來看，2021 年 AI 職缺最密集的是新加坡(2.33%)，接著是美國(0.90%)、加拿大(0.78%)、英國(0.74%)、澳洲(0.58%)與紐西蘭(0.25%)。",
               "從 2020 到 2021 年，美國、加拿大、澳洲與紐西蘭的比例上升，新加坡與英國則下降。",
               "在美國國內，機器學習是最大的技能群，佔所有職缺的 0.57%，其後是人工智慧(0.33%)、神經網路(0.15%)、自然語言處理(0.13%)、機器人(0.11%)、視覺影像辨識(0.10%)與自動駕駛(0.06%)。",
               "儘管 2019 到 2020 年間兩者都小幅下滑，機器學習職缺仍接近 2018 年水準的三倍，人工智慧職缺約為 1.5 倍。",
               "以產業別來看，美國資訊業有 3.30% 的職缺與 AI 相關，領先專業、科學與技術服務業(2.59%)、製造業(2.02%)與金融保險業(1.81%)。"]
        } },
      { type: "h3",
        text: { en: "Four states, and one district", zh: "四個州，以及一個特區" } },
      { type: "p",
        text: { en: "California posted 80,238 AI jobs in 2021, over 2.35 times the 34,021 of Texas in second place, ahead of New York (24,494), Virginia (19,387), Washington (19,253) and Massachusetts (18,430). Raw counts favor big states, so the chapter also ranks AI postings against each state’s own total — and by that measure Washington, D.C. leads, followed by Virginia, Washington and Massachusetts. The capital’s 6,381 AI postings are a fraction of California’s, but they represent the densest AI labor demand in the country.",
                zh: "2021 年加州釋出 80,238 個 AI 職缺，是第二名德州 34,021 個的 2.35 倍以上，其後為紐約州(24,494)、維吉尼亞州(19,387)、華盛頓州(19,253)與麻薩諸塞州(18,430)。絕對數字對大州有利，所以這一章也把 AI 職缺拿來對照各州自身的職缺總量 — 以這個標準，華盛頓特區居首，其後是維吉尼亞州、華盛頓州與麻薩諸塞州。首都的 6,381 個 AI 職缺遠不及加州，卻是全美密度最高的 AI 勞動需求。" } },
      { type: "h3",
        text: { en: "Skills, not just openings", zh: "不只是職缺，還有技能" } },
      { type: "ul",
        items: {
          en: ["Aggregated over 2015–2021, India has the highest relative AI skill penetration at 3.09 times the global average across the same occupations, followed by the United States (2.24), Germany (1.70), China (1.56), Israel (1.52), Canada (1.41) and the United Kingdom (1.40).",
               "India and the United States lead across all five industries measured — software and IT services, hardware and networking, manufacturing, education and finance. Israel and Canada sit in the top seven of every one of them, and Singapore holds fourth place on the list.",
               "The education industry shows the widest spread of all: India reaches 3.96 against a global average of 1.00, with the United States at 2.20.",
               "On gender, among the 15 countries listed the AI skill penetration rate of women is higher than that of men in India, Canada, South Korea, Australia, Finland and Switzerland."],
          zh: ["把 2015 到 2021 年加總，相對 AI 技能滲透率最高的是印度，在同一組職業中達全球平均的 3.09 倍，其後是美國(2.24)、德國(1.70)、中國(1.56)、以色列(1.52)、加拿大(1.41)與英國(1.40)。",
               "在受測的五個產業 — 軟體與資訊服務、硬體與網路、製造、教育、金融 — 印度與美國全面領先。以色列與加拿大在每一個產業都排進前七，新加坡則位居榜上第四。",
               "教育業的落差最大：印度達 3.96，全球平均為 1.00，美國則是 2.20。",
               "以性別來看，在列出的 15 個國家中，女性 AI 技能滲透率高於男性的有印度、加拿大、南韓、澳洲、芬蘭與瑞士。"]
        } }
    ]
  },

  /* ---------------------------------------------------- US states chart */
  {
    type: "bars",
    id: "us-states",
    nav:      { en: "US states", zh: "美國各州" },
    title:    { en: "California posted more AI jobs than the next two states combined",
                zh: "加州的 AI 職缺比接下來兩州加起來還多" },
    subtitle: { en: "Number of AI job postings by US state in 2021. California’s total is over 2.35 times that of Texas — though proportionally, against each state’s own postings, Washington, D.C. ranks first.",
                zh: "2021 年美國各州的 AI 職缺數。加州的總量是德州的 2.35 倍以上 — 不過若以佔各州自身職缺的比例來看，第一名是華盛頓特區。" },
    series: [
      { label: { en: "California", zh: "加州" },     value: 80238 },
      { label: { en: "Texas", zh: "德州" },          value: 34021 },
      { label: { en: "New York", zh: "紐約州" },     value: 24494 },
      { label: { en: "Virginia", zh: "維吉尼亞" },   value: 19387 },
      { label: { en: "Washington", zh: "華盛頓州" }, value: 19253 }
    ]
  },

  /* ------------------------------------------------ 4.3 CORPORATE ACTIVITY */
  {
    type: "prose",
    id: "adoption",
    nav:      { en: "4.3 Adoption", zh: "4.3 採用" },
    title:    { en: "4.3 — Adoption crept up six points, and the ethics gap stayed open",
                zh: "4.3 — 採用率上升 6 個百分點，倫理落差原地不動" },
    subtitle: { en: "McKinsey’s “The State of AI in 2021,” a global online survey of 1,843 respondents, puts average AI adoption across all geographies at 56% in 2021, up from 50% in 2020. India led at 65%, followed by developed Asia-Pacific (64%), developing markets including China and MENA (57%), North America (55%), Europe (51%) and Latin America (47%).",
                zh: "麥肯錫「The State of AI in 2021」調查了全球 1,843 位受訪者，結果顯示 2021 年各地區平均 AI 採用率為 56%，高於 2020 年的 50%。印度以 65% 領先，其後是成熟亞太地區(64%)、含中國與中東北非的新興市場(57%)、北美(55%)、歐洲(51%)與拉丁美洲(47%)。" },
    blocks: [
      { type: "h3",
        text: { en: "Adoption is a function-level phenomenon", zh: "採用發生在職能層級" } },
      { type: "ul",
        items: {
          en: ["Across all industries, the functions most likely to have adopted AI in 2021 were service operations (25%), product and/or service development (23%) and marketing and sales (20%). Risk and supply-chain management sat at 13%, manufacturing at 12%, and human resources and strategy and corporate finance at 9% each.",
               "The heaviest single pockets are narrower than those averages suggest: product and service development inside high tech and telecommunications (45%), service operations in financial services (40%), service operations in high tech and telecommunications (34%) and the risk function in financial services (32%).",
               "By capability, robotic process automation is the most commonly embedded across all industries (26%), followed by natural language text understanding (24%), computer vision (23%), virtual agents (23%) and deep learning (19%).",
               "Again, industry concentrates it: natural language text understanding in high tech and telecommunications reaches 34%, robotic process automation reaches 33% in both financial services and automotive and assembly, and natural language text understanding reaches 32% in financial services."],
          zh: ["就所有產業平均而言，2021 年最可能導入 AI 的職能是服務營運(25%)、產品與／或服務開發(23%)與行銷業務(20%)。風險與供應鏈管理各 13%、製造 12%，人力資源與策略暨企業財務各 9%。",
               "最密集的區塊比平均值更集中：高科技與電信業的產品與服務開發達 45%、金融服務業的服務營運 40%、高科技與電信業的服務營運 34%、金融服務業的風險職能 32%。",
               "以技術能力來看，機器人流程自動化是所有產業中最常被嵌入標準流程的(26%)，其後是自然語言文本理解(24%)、電腦視覺(23%)、虛擬助理(23%)與深度學習(19%)。",
               "產業差異同樣明顯：高科技與電信業的自然語言文本理解達 34%，機器人流程自動化在金融服務業與汽車組裝業皆為 33%，金融服務業的自然語言文本理解則為 32%。"]
        } },
      { type: "h3",
        text: { en: "Naming a risk is not the same as acting on it", zh: "說得出風險，不等於動手處理" } },
      { type: "p",
        text: { en: "The chapter asks two questions in sequence — which AI risks does your organization consider relevant, and which are you taking steps to mitigate — and the distance between the answers is the finding. Cybersecurity was named relevant by 55% of respondents and mitigated by 47%. Regulatory compliance: 48% relevant, 36% mitigated, a 12-point gap. Personal and individual privacy: 41% and 28%, a 13-point gap. Explainability: 41% and 27%, a 14-point gap. Equity and fairness: 29% and 19%, a 10-point gap. The risks with the widest gaps are precisely the ones with no established engineering practice behind them.",
                zh: "這一章依序問了兩個問題 — 貴組織認為哪些 AI 風險相關、又針對哪些採取了行動 — 兩個答案之間的距離，就是這一節的發現。資安有 55% 的受訪者認為相關，47% 採取行動。法規遵循：48% 對 36%，落差 12 個百分點。個人隱私：41% 對 28%，落差 13 個百分點。可解釋性：41% 對 27%，落差 14 個百分點。公平性：29% 對 19%，落差 10 個百分點。落差最大的風險，恰好都是背後沒有成熟工程實務可循的那幾項。" } },
      { type: "ul",
        items: {
          en: ["Concern about cybersecurity actually fell, from just over 60% of respondents in 2020 to 55% in 2021, while concern about regulatory compliance stayed virtually unchanged.",
               "Further down the list the absolute numbers get small. Workforce and labor displacement was considered relevant by 26% and mitigated by 15%; national security 14% and 8%; political stability 9% and 4%.",
               "Organizational reputation — a risk organizations bear directly — sits at 35% relevant and 22% mitigated, still a 13-point gap."],
          zh: ["對資安的關注其實下降了，從 2020 年略高於 60% 的受訪者降到 2021 年的 55%，對法規遵循的關注則幾乎沒有變化。",
               "名單往下走，絕對數字就變小了。勞動力取代有 26% 認為相關、15% 採取行動；國家安全 14% 對 8%；政治穩定 9% 對 4%。",
               "組織聲譽是企業自己要承受的風險，也仍是 35% 對 22%，落差 13 個百分點。"]
        } }
    ]
  },

  /* ---------------------------------------------------- 4.4 AI EDUCATION */
  {
    type: "prose",
    id: "education",
    nav:      { en: "4.4 Education", zh: "4.4 教育" },
    title:    { en: "4.4 — One in five new CS PhDs is an AI PhD, and most of them go to industry",
                zh: "4.4 — 每 5 位新科資工博士就有 1 位主修 AI，而他們多半去了業界" },
    subtitle: { en: "The education section draws on the CRA Taulbee Survey, collected in Fall 2020 from over 200 PhD-granting departments in the United States and Canada and published in May 2021 — so these figures describe 2020, a year behind the economic data. More than 31,800 students completed CS undergraduate degrees at North American doctoral institutions in 2020, an 11.60% rise on 2019 and 3.5 times the 2010 figure.",
                zh: "教育這一節取自 CRA Taulbee 調查，於 2020 年秋季向美加超過 200 個博士授予單位蒐集，2021 年 5 月發布 — 因此這些數字描述的是 2020 年，比經濟數據晚一年。2020 年北美博士級院校有超過 31,800 名學生取得資工學士學位，較 2019 年成長 11.60%，是 2010 年的 3.5 倍。" },
    blocks: [
      { type: "h3",
        text: { en: "AI is the decade’s dominant specialty", zh: "AI 是這十年的主流專長" } },
      { type: "ul",
        items: {
          en: ["Artificial intelligence and machine learning accounted for 21.00% of new US CS PhDs in 2020 — the most popular of the survey’s 20 specialties, and the one with the most significant growth from 2010 to 2021 relative to the other 18.",
               "No other specialty comes close: software engineering is second at 7.30%, then security and information assurance (7.10%), theory and algorithms (7.00%), databases and information retrieval (6.50%) and robotics and vision (6.30%).",
               "Robotics and vision, the survey’s other explicitly AI-related specialty, gained 1.4 percentage points of share over the past eleven years.",
               "In absolute numbers, AI/ML PhD graduates grew 72.05% between 2010 and 2020 and robotics and vision graduates 50.91%. Both dipped slightly from 2019 to 2020, which the chapter attributes to the possible impact of the COVID-19 pandemic."],
          zh: ["2020 年美國新科資工博士中，人工智慧與機器學習佔 21.00% — 是調查涵蓋的 20 個專長中最熱門的一個，也是 2010 到 2021 年間相對於其他 18 個專長成長最顯著的一個。",
               "其他專長都差得很遠：軟體工程以 7.30% 居次，接著是資安與資訊保障(7.10%)、理論與演算法(7.00%)、資料庫與資訊檢索(6.50%)、機器人與視覺(6.30%)。",
               "機器人與視覺是調查中另一個明確與 AI 相關的專長，過去十一年佔比增加了 1.4 個百分點。",
               "以絕對人數計，AI/ML 博士畢業生在 2010 到 2020 年間成長 72.05%，機器人與視覺成長 50.91%。兩者在 2019 到 2020 年間都小幅下滑，這一章認為可能是 COVID-19 疫情的影響。"]
        } },
      { type: "h3",
        text: { en: "Where the graduates go", zh: "畢業生去了哪裡" } },
      { type: "ul",
        items: {
          en: ["In 2020, 60.24% of new North American AI PhDs went into industry, 24.02% into academia and 1.97% into government. Industry’s share is down from 65.7% in 2019, but the split has been lopsided for a decade.",
               "Part of the 2020 shift is that more graduates left the continent: the number going abroad on graduation grew from 19 in 2019 to 32 in 2020.",
               "International students made up 60.5% of new AI PhDs in North America in 2020, down slightly from 64.3% in 2019 — and lower than the 65.1% international share among computing PhDs as a whole.",
               "Of new international AI PhDs in the United States, 74.20% took jobs in the country and 14.0% took jobs outside it in 2020, up from 8.6% the previous year; the remaining 11.80% is unknown."],
          zh: ["2020 年北美新科 AI 博士有 60.24% 進入業界、24.02% 留在學界、1.97% 進入政府部門。業界佔比比 2019 年的 65.7% 下降，但這個失衡已經維持了十年。",
               "2020 年變化的一部分原因是更多畢業生離開了北美：畢業即赴海外的人數從 2019 年的 19 人增加到 2020 年的 32 人。",
               "2020 年北美新科 AI 博士有 60.5% 是國際學生，略低於 2019 年的 64.3% — 也低於整體計算領域博士的 65.1%。",
               "在美國的新科國際 AI 博士中，2020 年有 74.20% 留在美國工作、14.0% 到美國以外就業，高於前一年的 8.6%；其餘 11.80% 去向不明。"]
        } },
      { type: "h3",
        text: { en: "Who they are has barely changed", zh: "他們是誰，幾乎沒有改變" } },
      { type: "ul",
        items: {
          en: ["Women accounted for 20.20% of new AI PhDs and 19.90% of new CS PhDs in North America in 2020 — a share that has moved very little since 2010.",
               "Among new US-resident AI PhDs from 2010 to 2020, the largest groups on average were white non-Hispanic (65.2%) and Asian (18.8%). Black or African American non-Hispanic graduates averaged around 1.5% and Hispanic graduates 2.9% across those eleven years.",
               "The 2020 snapshot alone reads 50.86% white non-Hispanic, 30.17% Asian, 6.90% Hispanic and 1.72% Black or African American non-Hispanic.",
               "Computing PhDs overall show the same pattern: in 2020, 57.50% white non-Hispanic, 24.80% Asian, 4.20% Hispanic and 3.60% Black or African American non-Hispanic. The share of new white PhDs has changed little in eleven years, while Black and Hispanic shares remain significantly lower."],
          zh: ["2020 年北美新科 AI 博士中女性佔 20.20%，新科資工博士中佔 19.90% — 這個比例自 2010 年以來幾乎沒有移動。",
               "2010 到 2020 年間美國本地的新科 AI 博士，人數最多的族群平均為非西語裔白人(65.2%)與亞裔(18.8%)。這十一年間，非西語裔黑人平均約 1.5%、西語裔約 2.9%。",
               "單看 2020 年一年：非西語裔白人 50.86%、亞裔 30.17%、西語裔 6.90%、非西語裔黑人 1.72%。",
               "整體計算領域博士呈現同樣的形狀：2020 年非西語裔白人 57.50%、亞裔 24.80%、西語裔 4.20%、非西語裔黑人 3.60%。十一年來白人新科博士的佔比變化不大，黑人與西語裔的佔比則仍明顯偏低。"]
        } }
    ]
  },

  /* ------------------------------------------------------------- CARDS */
  {
    type: "cards",
    id: "threads",
    nav:      { en: "Five threads", zh: "五條線索" },
    title:    { en: "Five threads running through the chapter", zh: "貫穿這一章的五條線索" },
    subtitle: { en: "The things worth carrying away from Chapter 4 — including the one about the chapter itself.",
                zh: "第 4 章值得帶走的幾件事 — 包括關於這一章本身的那一件。" },
    items: [
      { slug: "one-chapter-two-worlds",
        title:   { en: "Economy and education, in one chapter", zh: "經濟與教育，合在同一章" },
        summary: { en: "The 2022 edition treats labor demand and the PhD pipeline as a single subject, and splits them apart only in later editions.",
                   zh: "2022 年版把勞動需求與博士人才管線當成同一個主題處理，之後的版本才把兩者拆開。" },
        tags: ["structure"],
        overview: { en: "Chapter 4 runs from AI hiring and job postings through corporate investment and industry adoption to CS undergraduates and PhD specialties, drawing on Emsi Burning Glass, NetBase Quid and LinkedIn for the economic half and the CRA Taulbee Survey for the education half. The framing question is explicit in the overview: how do businesses adapt to recruiting and retaining AI talent, and how is the education system keeping pace with the demand for AI labor? Reading them together makes the mismatch visible — the demand side is measured in 2021 and moving fast, the supply side is measured in 2020 and barely moving at all.",
                   zh: "第 4 章從 AI 招聘與職缺一路走到企業投資、產業採用，再到資工學士與博士專長；經濟半邊取自 Emsi Burning Glass、NetBase Quid 與 LinkedIn，教育半邊則取自 CRA Taulbee 調查。開篇的問題本身就說明了這樣安排的理由：企業如何適應 AI 人才的招募與留任？教育體系又是否跟得上 AI 勞動力的需求？把兩邊放在一起讀，落差就浮現了 — 需求端衡量的是 2021 年、跑得很快，供給端衡量的是 2020 年、幾乎沒動。" } },
      { slug: "funding-paradox",
        title:   { en: "More money, fewer companies", zh: "錢更多，公司更少" },
        summary: { en: "Private investment more than doubled to around $93.5 billion in 2021, while newly funded AI companies fell to 746 — a third straight annual decline.",
                   zh: "2021 年私人投資翻倍以上，來到約 935 億美元，新獲資金的 AI 公司卻降到 746 家 — 連續第三年下滑。" },
        tags: ["investment"],
        overview: { en: "This is the chapter’s sharpest single finding. The count of newly funded AI companies went 1,051 in 2019, 762 in 2020, 746 in 2021, while the money going into them more than doubled and the average deal grew 81.1% larger. Rounds of $500 million or more went from 4 to 15; rounds under $50 million went from 2,102 to 2,120. Whatever 2021 was, it was not a broadening of the field — it was a small number of companies raising a great deal more than anyone had raised before.",
                   zh: "這是全章最鋒利的一個發現。新獲資金的 AI 公司數從 2019 年的 1,051 家、2020 年的 762 家走到 2021 年的 746 家，投進去的錢卻翻倍以上，平均每筆交易還大了 81.1%。5 億美元以上的輪次從 4 輪變成 15 輪，5,000 萬美元以下的輪次則從 2,102 輪只變成 2,120 輪。2021 年不管是什麼，都不是這個領域的擴張 — 而是少數幾家公司，募到了前所未有的錢。" } },
      { slug: "data-over-health",
        title:   { en: "Infrastructure beat applications", zh: "基礎設施打敗了應用" },
        summary: { en: "Data management, processing and cloud took the most private AI investment in 2021 at around $12.2 billion, 2.6 times its 2020 total.",
                   zh: "2021 年吸金最多的是資料管理、處理與雲端，約 122 億美元，為 2020 年的 2.6 倍。" },
        tags: ["investment"],
        overview: { en: "For the previous five years the largest cumulative category was medical and healthcare, at $28.92 billion between 2017 and 2021. In 2021 alone, data management, processing and cloud passed it, taking around $12.2 billion against healthcare’s $11.29 billion — helped by the fact that two of the four largest private investments of the year went to data management companies. Fintech ($10.26 billion), autonomous vehicles ($8.09 billion) and semiconductors ($6.0 billion) followed. The pattern is investment moving one layer down the stack, toward the plumbing that AI applications run on.",
                   zh: "過去五年累計金額最大的類別一直是醫療與健康照護，2017 到 2021 年間達 289.2 億美元。但單看 2021 年，資料管理、處理與雲端就超過了它，以約 122 億美元對上醫療的 112.9 億美元 — 部分原因是當年四筆最大的私人投資裡有兩筆投給了資料管理公司。其後是金融科技(102.6 億美元)、自駕車(80.9 億美元)與半導體(60 億美元)。整體形狀是資金往技術堆疊的下一層移動，流向支撐 AI 應用運作的管線。" } },
      { slug: "ethics-gap",
        title:   { en: "The recognition-to-action gap", zh: "認知與行動之間的落差" },
        summary: { en: "41% of surveyed organizations called explainability a relevant risk; 27% were doing something about it. For equity and fairness the figures were 29% and 19%.",
                   zh: "41% 的受訪組織認為可解釋性是相關風險，實際採取行動的只有 27%。公平性則是 29% 對 19%。" },
        tags: ["ethics"],
        overview: { en: "McKinsey asked which AI risks organizations consider relevant and which they are actively mitigating, and every category came back with a gap: explainability 41% to 27%, personal privacy 41% to 28%, regulatory compliance 48% to 36%, equity and fairness 29% to 19%. Cybersecurity, the one risk with mature tooling and clear accountability, has the smallest gap at 55% to 47% — and it was also the only concern to fall year over year, from just over 60% in 2020. Efforts to address the ethical questions raised elsewhere in the report remain, in the chapter’s own word, limited.",
                   zh: "麥肯錫分別問了組織認為哪些 AI 風險相關、又實際針對哪些採取行動，每一個類別都出現落差：可解釋性 41% 對 27%、個人隱私 41% 對 28%、法規遵循 48% 對 36%、公平性 29% 對 19%。資安是唯一擁有成熟工具與明確究責機制的風險，落差最小(55% 對 47%)，也是唯一逐年下降的關注項目，從 2020 年略高於 60% 降下來。至於報告其他章節提出的倫理問題，這一章用的字是：企業的因應仍然有限。" } },
      { slug: "phd-outflow",
        title:   { en: "Where the AI PhDs went", zh: "AI 博士都去了哪裡" },
        summary: { en: "60.24% of new North American AI PhDs went to industry in 2020 and 1.97% to government, while the number leaving the continent rose from 19 to 32.",
                   zh: "2020 年北美新科 AI 博士有 60.24% 去了業界、1.97% 進入政府，離開北美的人數則從 19 人增加到 32 人。" },
        tags: ["education"],
        overview: { en: "Industry’s share dipped from 65.7% in 2019 to 60.24% in 2020, with academia at 24.02% and government at 1.97% — but the dip is not a return to the university. Part of it is graduates leaving North America entirely, a number that grew from 19 to 32, and the share of new international AI PhDs taking jobs outside the United States rose from 8.6% to 14.0%. Meanwhile the group producing these graduates has hardly changed: women were 20.20% of new AI PhDs in 2020, and among US residents the eleven-year averages were 65.2% white non-Hispanic and 18.8% Asian against around 1.5% Black or African American non-Hispanic.",
                   zh: "業界佔比從 2019 年的 65.7% 降到 2020 年的 60.24%，學界 24.02%、政府 1.97% — 但這個下降不是人才回流大學。原因之一是畢業生直接離開北美，人數從 19 人增加到 32 人；新科國際 AI 博士到美國以外就業的比例，也從 8.6% 升到 14.0%。與此同時，產出這些畢業生的族群幾乎沒變：2020 年女性佔新科 AI 博士的 20.20%；在美國本地畢業生中，十一年平均為非西語裔白人 65.2%、亞裔 18.8%，非西語裔黑人約 1.5%。" } }
    ]
  },

  /* ------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 4 · The Economy and Education.",
                zh: "第 4 章「經濟與教育」的頭條發現。" },
    quotes: [
      { text: { en: "Private investment in AI in 2021 totaled around $93.5 billion — more than double the total private investment in 2020 — while the number of newly funded AI companies continues to drop, from 1,051 companies in 2019 and 762 in 2020 to 746 in 2021.",
                zh: "2021 年 AI 私人投資總額約 935 億美元 — 是 2020 年私人投資總額的兩倍以上 — 但新獲資金的 AI 公司數持續下滑，從 2019 年的 1,051 家、2020 年的 762 家降到 2021 年的 746 家。" },
        by: "Chapter 4 · The Economy and Education" },
      { text: { en: "In 2020 there were 4 funding rounds worth $500 million or more; in 2021, there were 15.",
                zh: "2020 年有 4 輪募資金額達 5 億美元以上，2021 年則有 15 輪。" },
        by: "Chapter 4 · The Economy and Education" },
      { text: { en: "“Data management, processing, and cloud” received the greatest amount of private AI investment in 2021 — 2.6 times the investment in 2020 — followed by “medical and healthcare” and “fintech.”",
                zh: "「資料管理、處理與雲端」是 2021 年獲得最多 AI 私人投資的領域 — 為 2020 年的 2.6 倍 — 其後是「醫療與健康照護」與「金融科技」。" },
        by: "Chapter 4 · The Economy and Education" },
      { text: { en: "While 29% and 41% of respondents recognize “equity and fairness” and “explainability” as risks while adopting AI, only 19% and 27% are taking steps to mitigate those risks.",
                zh: "雖然分別有 29% 與 41% 的受訪者認為採用 AI 時的「公平性」與「可解釋性」是風險，實際採取行動去緩解的卻只有 19% 與 27%。" },
        by: "Chapter 4 · The Economy and Education" },
      { text: { en: "In 2020, 1 in every 5 CS students who graduated with PhD degrees specialized in artificial intelligence/machine learning, the most popular specialty in the past decade.",
                zh: "2020 年，每 5 位取得博士學位的資工學生就有 1 位主修人工智慧／機器學習，是過去十年最熱門的專長。" },
        by: "Chapter 4 · The Economy and Education" }
    ]
  },

  /* ---------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "報告原文" },
    title: { en: "Read Chapter 4 in full", zh: "閱讀第 4 章原文" },
    text:  { en: "Chapter 4 (sections 4.1–4.4) — jobs, investment, corporate activity and AI education — with every figure, table and citation is free from Stanford HAI.",
             zh: "第 4 章(4.1–4.4 各節) — 就業、投資、企業活動與 AI 教育 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2022-ai-index-report",
             label: { en: "Open the AI Index 2022 →", zh: "開啟 AI 指數 2022 →" } }
  }
];

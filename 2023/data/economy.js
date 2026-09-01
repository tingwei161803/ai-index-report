/* =========================================================================
   The Economy — deep dive · economy.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2023, Chapter 4
   https://hai.stanford.edu/ai-index/2023-ai-index-report

   The sixth edition of the AI Index; the year under the microscope is 2022.
   Every figure on this page comes from Chapter 4: 4.1 Jobs, 4.2 Investment,
   4.3 Corporate Activity and 4.4 Robot Installations. The IFR robot data
   lags by a year in this edition, so the robot sections describe 2021.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "economy";

window.SITE_META = {
  title:    { en: "AI Index Report 2023", zh: "AI 指數報告 2023" },
  subtitle: { en: "The Economy · a chapter deep dive", zh: "經濟專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The first year the money went down — and the first year adoption stopped climbing",
                zh: "資金十年來第一次下滑 — 企業採用率也第一次停下腳步" },
    subtitle: { en: "Chapter 4 of the AI Index 2023 covers 2022, the year the decade-long investment curve finally bent. Private investment fell 26.7%, fewer companies were funded, fewer deals were done, and the share of organizations using AI slipped rather than rose. What did not fall was employer demand for AI skills, the depth of use inside companies that had already adopted, or China’s appetite for industrial robots. The numbers:",
                zh: "AI 指數 2023 第 4 章講的是 2022 年 — 十年來一路向上的投資曲線，終於在這一年折彎。私人投資下降 26.7%，拿到錢的公司變少、交易件數變少，使用 AI 的組織比例不升反降。沒有下滑的是：雇主對 AI 技能的需求、已經導入 AI 的公司把它用得多深，以及中國對工業機器人的胃口。先看數字：" },
    stats: [
      { label: { en: "global AI private investment in 2022 (US$ billions, down 26.7%)", zh: "2022 年全球 AI 私人投資(十億美元，下降 26.7%)" }, value: 91.9 },
      { label: { en: "global corporate AI investment in 2022 (US$ billions, about a third below 2021)", zh: "2022 年全球企業 AI 投資(十億美元，比 2021 年低約三分之一)" }, value: 189.6 },
      { label: { en: "US private AI investment (US$ billions) — 3.5× China’s 13.4", zh: "美國私人 AI 投資(十億美元) — 為中國 13.4 的 3.5 倍" }, value: 47.4 },
      { label: { en: "% of organizations using AI in at least one function (56% in 2021, 20% in 2017)", zh: "% 至少在一項職能中採用 AI 的組織(2021 年為 56%、2017 年為 20%)" }, value: 50 },
      { label: { en: "newly funded AI companies worldwide in 2022 (1,669 in 2021)", zh: "2022 年全球新獲資金的 AI 公司數(2021 年為 1,669 家)" }, value: 1392 },
      { label: { en: "industrial robots installed by China in 2021 — 51.8% of the world total", zh: "2021 年中國安裝的工業機器人 — 佔全球總量的 51.8%" }, value: 268200 }
    ]
  },

  /* ------------------------------------------------------- 4.2 INVESTMENT */
  {
    type: "prose",
    id: "investment",
    nav:      { en: "4.2 Investment", zh: "4.2 投資" },
    title:    { en: "4.2 — The decade’s first down year, and it was a steep one",
                zh: "4.2 — 十年來第一個下跌年，而且跌得不輕" },
    subtitle: { en: "Global corporate AI investment fell to $189.6 billion in 2022, roughly a third below 2021, and private investment dropped 26.7% to $91.9 billion. Both remain far above where the decade started: corporate investment has grown thirteenfold since 2013, and private investment is still 18 times its 2013 level.",
                zh: "2022 年全球企業 AI 投資降到 1,896 億美元，約比 2021 年低三分之一；私人投資則下降 26.7%，來到 919 億美元。但兩者都仍遠高於十年前的起點：企業投資自 2013 年以來成長十三倍，私人投資也還是 2013 年的 18 倍。" },
    blocks: [
      { type: "h3",
        text: { en: "Fewer deals, fewer companies", zh: "更少的交易，更少的公司" } },
      { type: "ul",
        items: {
          en: ["There were 3,538 AI-related private investment events in 2022, a 12% drop from 2021 — but still a sixfold increase on 2013.",
               "The number of newly funded AI companies fell to 1,392 from 1,669 the year before. In 2013 the figure was 495.",
               "Every funding-size band shrank except the very top. Deals over $1 billion rose from 4 to 6, while the $500 million–$1 billion band collapsed from 13 to 5, $100–500 million fell from 277 to 164, and deals under $50 million fell from 2,851 to 2,585.",
               "The year’s largest private investment events were modest by the standards of the boom: $2.5 billion for GAC Aion New Energy Automobile, a Chinese electric-vehicle maker; a $1.5 billion Series E for Anduril Industries, a US defense products company; and $1.2 billion for Celonis, a business-data company based in Germany.",
               "The single biggest AI transaction of the year was an acquisition, not a funding round — Nuance Communications at $19.8 billion, followed by Citrix Systems ($17.18 billion) and Avast ($8.02 billion)."],
          zh: ["2022 年共有 3,538 件 AI 相關的私人投資案，較 2021 年減少 12% — 但仍是 2013 年的六倍。",
               "新獲資金的 AI 公司從前一年的 1,669 家減少到 1,392 家。2013 年這個數字是 495 家。",
               "除了最頂端的級距之外，每個募資規模級距都在萎縮。超過 10 億美元的交易從 4 件增為 6 件，5 億至 10 億美元的級距卻從 13 件崩到 5 件，1 億至 5 億美元從 277 件掉到 164 件，5,000 萬美元以下的交易也從 2,851 件減為 2,585 件。",
               "這一年最大的幾筆私人投資，以熱潮期的標準來看都算不上大：中國電動車廠廣汽埃安拿到 25 億美元；美國國防產品公司 Anduril Industries 的 E 輪募得 15 億美元；德國商業數據公司 Celonis 募得 12 億美元。",
               "全年單筆金額最高的 AI 交易不是募資，而是併購 — Nuance Communications 作價 198 億美元，其後是 Citrix Systems(171.8 億美元)與 Avast(80.2 億美元)。"]
        } },
      { type: "h3",
        text: { en: "The United States still leads — and still fell 35.5%", zh: "美國仍然領先 — 但也跌了 35.5%" } },
      { type: "p",
        text: { en: "The $47.4 billion of private AI investment in the United States was roughly 3.5 times the amount invested in China ($13.4 billion) and 11 times the amount invested in the United Kingdom ($4.4 billion). But leadership did not mean immunity: US private AI investment fell 35.5% year over year and China’s fell 41.3%. Aggregated across 2013–2022 the ranking is unchanged — the United States has attracted $248.9 billion, China $95.1 billion and the United Kingdom $18.2 billion, followed by Israel ($10.8 billion), Canada ($8.8 billion) and India ($7.7 billion).",
                zh: "美國 474 億美元的 AI 私人投資，約為中國(134 億美元)的 3.5 倍、英國(44 億美元)的 11 倍。但領先並不代表免疫：美國的 AI 私人投資年減 35.5%，中國更減少 41.3%。若把 2013 至 2022 年累加起來，排名沒有改變 — 美國吸引了 2,489 億美元、中國 951 億美元、英國 182 億美元，其後是以色列(108 億美元)、加拿大(88 億美元)與印度(77 億美元)。" } },
      { type: "ul",
        items: {
          en: ["Entrepreneurial activity follows the same map. In 2022 the United States produced 542 newly funded AI companies, against China’s 160 and the United Kingdom’s 99 — 1.9 times the European Union and United Kingdom combined, and 3.4 times China.",
               "Over the decade the gap is wider still: 4,643 newly funded US companies, about 3.5 times China’s 1,337 and 7.4 times the United Kingdom’s 630.",
               "By focus area, the most funded categories in 2022 were medical and healthcare ($6.1 billion), data management, processing and cloud ($5.9 billion), fintech ($5.5 billion), cybersecurity and data protection ($5.4 billion) and retail ($4.2 billion).",
               "Most focus areas took in less money than in 2021. The ones that grew were semiconductors, industrial automation and network, cybersecurity and data protection, drones, marketing and digital ads, HR tech, AR/VR and legal tech.",
               "Perspective matters: even after the drop, most focus areas attracted more private investment in 2022 than they did in 2017."],
          zh: ["創業活動跟著同一張地圖走。2022 年美國有 542 家新獲資金的 AI 公司，中國 160 家、英國 99 家 — 美國是歐盟加英國總和的 1.9 倍、中國的 3.4 倍。",
               "拉長到十年，差距更明顯：美國累計 4,643 家，約為中國 1,337 家的 3.5 倍、英國 630 家的 7.4 倍。",
               "以領域來看，2022 年獲得最多資金的是醫療與健康照護(61 億美元)、資料管理處理與雲端(59 億美元)、金融科技(55 億美元)、資安與資料保護(54 億美元)與零售(42 億美元)。",
               "多數領域拿到的錢都比 2021 年少。逆勢成長的是半導體、工業自動化與網路、資安與資料保護、無人機、行銷與數位廣告、人資科技、AR/VR 與法律科技。",
               "換個角度看：即使經歷這波下滑，大多數領域在 2022 年拿到的私人投資，仍多於 2017 年。"]
        } }
    ]
  },

  /* --------------------------------------------- private investment chart */
  {
    type: "bars",
    id: "invest-geo",
    nav:      { en: "By country", zh: "各國投資" },
    title:    { en: "Even in a down year, one country takes most of the money",
                zh: "就算在下跌的年份，錢還是集中在同一個國家" },
    subtitle: { en: "Total private AI investment in 2022, in US$ billions. The United States invested about 3.5 times as much as China and 11 times as much as the United Kingdom — after falling 35.5% itself.",
                zh: "2022 年私人 AI 投資總額(十億美元)。美國的投資額約為中國的 3.5 倍、英國的 11 倍 — 而且這還是它自己先跌了 35.5% 之後的數字。" },
    series: [
      { label: { en: "United States", zh: "美國" },   value: 47.36 },
      { label: { en: "China", zh: "中國" },           value: 13.41 },
      { label: { en: "United Kingdom", zh: "英國" },  value: 4.37 },
      { label: { en: "Israel", zh: "以色列" },        value: 3.24 },
      { label: { en: "India", zh: "印度" },           value: 3.24 }
    ]
  },

  /* ------------------------------------------------------------ 4.1 JOBS */
  {
    type: "prose",
    id: "jobs",
    nav:      { en: "4.1 Jobs", zh: "4.1 就業" },
    title:    { en: "4.1 — Investment fell; demand for AI skills did not",
                zh: "4.1 — 投資在跌，但對 AI 人才的需求沒有" },
    subtitle: { en: "Across virtually every US sector for which there is data, the share of job postings asking for AI skills rose from an average of 1.7% in 2021 to 1.9% in 2022. The single exception was agriculture, forestry, fishing and hunting. Employers were still hiring for AI while investors were pulling back.",
                zh: "在幾乎每一個有資料的美國產業裡，要求 AI 技能的職缺比例都從 2021 年平均的 1.7% 上升到 2022 年的 1.9%。唯一的例外是農林漁牧業。投資人在收手的同時，雇主仍在為 AI 招人。" },
    blocks: [
      { type: "ul",
        items: {
          en: ["Globally, the United States leads on the share of postings that require AI skills (2.05%), followed by Canada (1.45%), Spain (1.33%), Australia (1.23%) and Sweden (1.20%). Every country in the sample posted more AI jobs in 2022 than in 2014.",
               "By skill cluster, machine learning is the most requested (1.03% of all US postings), then artificial intelligence (0.61%), natural language processing (0.20%), neural networks (0.16%) and autonomous driving (0.15%). Every listed cluster is more in demand than it was ten years ago.",
               "Python is the specialized skill AI employers ask for most. It appeared in 296,662 US AI job postings in 2022, against 12,884 across 2010–2012, and its share of AI postings rose from 5.36% to 37.13% — a 592% increase.",
               "The fastest-growing skill shares belong to newer disciplines: Amazon Web Services (+4,763%) and data science (+3,767%), against +52% for Java."],
          zh: ["全球來看，美國要求 AI 技能的職缺比例最高(2.05%)，其後是加拿大(1.45%)、西班牙(1.33%)、澳洲(1.23%)與瑞典(1.20%)。樣本中每一個國家在 2022 年的 AI 職缺數都多於 2014 年。",
               "以技能群來看，機器學習的需求最高(佔全美職缺的 1.03%)，其次是人工智慧(0.61%)、自然語言處理(0.20%)、類神經網路(0.16%)與自動駕駛(0.15%)。所有列出的技能群，需求都高於十年前。",
               "Python 是 AI 雇主最常指名的專門技能。2022 年它出現在 296,662 則美國 AI 職缺中，2010 至 2012 年間只有 12,884 則；它在 AI 職缺中的佔比也從 5.36% 升到 37.13%，成長 592%。",
               "佔比成長最快的都是比較新的領域：Amazon Web Services(+4,763%)與資料科學(+3,767%)，相較之下 Java 只有 +52%。"]
        } },
      { type: "h3",
        text: { en: "The map of American AI jobs is spreading out", zh: "美國 AI 職缺的地圖正在攤開" } },
      { type: "p",
        text: { en: "California posted 142,154 AI jobs in 2022, ahead of Texas (66,624) and New York (43,899). Measured against a state’s own postings the leaders look different: the District of Columbia tops the list at 2.95%, followed by Delaware (2.66%), Washington (2.48%), Virginia (2.42%) and California (2.21%). The interesting movement is in concentration. California still holds 17.87% of all US AI job postings, ahead of Texas (8.37%), New York (5.52%) and Washington (3.93%) — but its share has fallen steadily since 2019, and it no longer commands a quarter of the country’s AI jobs. All four of those states saw significant increases in absolute postings from 2021 to 2022.",
                zh: "2022 年加州釋出 142,154 個 AI 職缺，領先德州(66,624 個)與紐約州(43,899 個)。但若以佔該州自身職缺的比例來看，領先者就換人了：華盛頓特區以 2.95% 居首，其後是德拉瓦州(2.66%)、華盛頓州(2.48%)、維吉尼亞州(2.42%)與加州(2.21%)。真正值得看的是集中度的變化。加州仍握有全美 17.87% 的 AI 職缺，領先德州(8.37%)、紐約州(5.52%)與華盛頓州(3.93%) — 但它的佔比自 2019 年起持續下滑，已不再擁有全國四分之一的 AI 工作。這四個州在 2021 至 2022 年間的職缺絕對數，則都明顯增加。" } },
      { type: "h3",
        text: { en: "Hiring, skills and the gender gap", zh: "招聘、技能，以及性別落差" } },
      { type: "ul",
        items: {
          en: ["On LinkedIn’s relative AI hiring index, Hong Kong posted the strongest AI hiring growth in 2022 at 1.37, followed by Spain (1.19), Italy (1.18), the United Kingdom (1.18), the United Arab Emirates (1.15) and South Africa (1.13).",
               "Most countries in the sample now hire more AI talent than they did in 2016, but for many the hiring rate peaked around 2020, dropped, and has since stabilized.",
               "On relative AI skill penetration over 2015–2022, India leads at 3.23, then the United States (2.23), Germany (1.72), Israel (1.65), and Canada and the United Kingdom (both 1.54). A rate of 3.23 means Indian members are 3.23 times more likely than the global average to list AI skills across the same occupations.",
               "In every country in the sample, men’s AI skill penetration exceeds women’s. The highest rates for women are in India (1.99), the United States (1.28) and Israel (0.87) — against 3.27, 2.36 and 2.05 for men in the same countries."],
          zh: ["以 LinkedIn 的相對 AI 招聘指數來看，2022 年香港的 AI 招聘成長最強，達 1.37，其後是西班牙(1.19)、義大利(1.18)、英國(1.18)、阿拉伯聯合大公國(1.15)與南非(1.13)。",
               "樣本中多數國家如今聘用的 AI 人才都比 2016 年多，但對許多國家而言，招聘率大約在 2020 年見頂、隨後下滑，之後趨於平穩。",
               "以 2015 至 2022 年的相對 AI 技能滲透率來看，印度以 3.23 居首，其後是美國(2.23)、德國(1.72)、以色列(1.65)，加拿大與英國並列(皆 1.54)。3.23 的意思是：在同一組職業中，印度會員列出 AI 技能的機率是全球平均的 3.23 倍。",
               "樣本中每一個國家，男性的 AI 技能滲透率都高於女性。女性滲透率最高的是印度(1.99)、美國(1.28)與以色列(0.87) — 同樣三國的男性則分別是 3.27、2.36 與 2.05。"]
        } }
    ]
  },

  /* ---------------------------------------------------- job postings chart */
  {
    type: "bars",
    id: "jobs-sector",
    nav:      { en: "By sector", zh: "各產業職缺" },
    title:    { en: "Which American industries are asking for AI skills",
                zh: "美國哪些產業在要 AI 技能" },
    subtitle: { en: "AI job postings as a percentage of all job postings in the United States in 2022, by sector. Agriculture, forestry, fishing and hunting is the only sector shown that did not rise from 2021.",
                zh: "2022 年美國各產業的 AI 職缺佔全部職缺的比例。圖中只有農林漁牧業沒有比 2021 年上升。" },
    series: [
      { label: { en: "Information", zh: "資訊業" },       value: 5.30 },
      { label: { en: "Prof. services", zh: "專業技術服務" }, value: 4.07 },
      { label: { en: "Finance", zh: "金融保險" },          value: 3.33 },
      { label: { en: "Manufacturing", zh: "製造業" },      value: 3.26 },
      { label: { en: "Agriculture", zh: "農林漁牧" },      value: 1.64 }
    ]
  },

  /* ------------------------------------------------ 4.3 CORPORATE ACTIVITY */
  {
    type: "prose",
    id: "adoption",
    nav:      { en: "4.3 Adoption", zh: "4.3 採用" },
    title:    { en: "4.3 — Adoption has plateaued; the companies already inside keep going deeper",
                zh: "4.3 — 採用率停在原地，已經進去的公司卻愈鑽愈深" },
    subtitle: { en: "50% of the 1,492 organizations McKinsey surveyed had adopted AI in at least one business unit or function in 2022 — down from 56% in 2021, but well above the 20% of 2017. Adoption has hovered between 50% and 60% for three years. What kept rising is how much AI the adopters use.",
                zh: "在麥肯錫調查的 1,492 個組織中，2022 年有 50% 已在至少一個事業單位或職能導入 AI — 低於 2021 年的 56%，但仍遠高於 2017 年的 20%。採用率已經在 50% 到 60% 之間停留了三年。持續上升的，是這些採用者把 AI 用得有多重。" },
    blocks: [
      { type: "p",
        text: { en: "The average number of AI capabilities an organization has embedded in at least one function doubled from 1.9 in 2018 to 3.8 in 2022. The most widely embedded capabilities are robotic process automation (39%), computer vision (34%), natural language text understanding (33%) and virtual agents (33%). The most commonly adopted use case is service operations optimization (24%), followed by the creation of new AI-based products (20%), customer segmentation (19%), customer service analytics (19%) and AI-based enhancement of existing products (19%). Read together, those two lists describe a business AI that is broad but unglamorous — automation and text, pointed at operations and customers.",
                zh: "一個組織在至少一項職能中嵌入的 AI 能力數量，平均值從 2018 年的 1.9 項倍增到 2022 年的 3.8 項。最普遍被嵌入的能力是機器人流程自動化(39%)、電腦視覺(34%)、自然語言文字理解(33%)與虛擬客服(33%)。最常見的應用情境是服務營運最佳化(24%)，其次是打造以 AI 為基礎的新產品(20%)、顧客分群(19%)、客服分析(19%)，以及用 AI 強化既有產品(19%)。把這兩份清單放在一起看，你會看到一種面很廣但不華麗的企業 AI：自動化與文字處理，對準的是營運與顧客。" } },
      { type: "h3",
        text: { en: "Where it pays, and where it is used", zh: "哪裡賺得到錢，哪裡真的在用" } },
      { type: "ul",
        items: {
          en: ["On the cost side, the functions where most respondents saw decreases from AI adoption were supply chain management (52%), service operations (45%), strategy and corporate finance (43%) and risk (43%).",
               "On the revenue side, the leaders were marketing and sales (70%), product and/or service development (70%) and strategy and corporate finance (65%).",
               "By region, North America leads adoption at 59%, followed by Asia-Pacific (55%) and Europe (48%). The global average of 50% is 6 points lower than 2021, and Greater China fell 20 percentage points to 41%.",
               "The highest single industry-function combinations are risk in high tech and telecom (38%), service operations in consumer goods and retail (31%), and product and service development in financial services (31%).",
               "Movement was not all in one direction: the biggest year-over-year rise was strategy and corporate finance in consumer goods and retail (25 percentage points), and the biggest fall was product and service development in high tech and telecom (38 percentage points)."],
          zh: ["在成本面，導入 AI 後最多受訪者看到下降的職能是供應鏈管理(52%)、服務營運(45%)、策略暨企業財務(43%)與風險(43%)。",
               "在營收面，領先的是行銷與業務(70%)、產品或服務開發(70%)，以及策略暨企業財務(65%)。",
               "以地區來看，北美的採用率以 59% 領先，其次是亞太(55%)與歐洲(48%)。全球平均 50%，比 2021 年低 6 個百分點；大中華區更下跌 20 個百分點到 41%。",
               "產業與職能交叉後最高的組合是：高科技與電信業的風險(38%)、消費品與零售業的服務營運(31%)，以及金融服務業的產品與服務開發(31%)。",
               "變化並非全都同一個方向：年增最多的是消費品與零售業的策略暨企業財務(25 個百分點)，跌最多的則是高科技與電信業的產品與服務開發(38 個百分點)。"]
        } },
      { type: "h3",
        text: { en: "What business leaders say is holding them back", zh: "企業領導者說是什麼卡住了他們" } },
      { type: "ul",
        items: {
          en: ["The risks organizations consider most relevant when adopting AI are cybersecurity (59%), regulatory compliance (45%), personal and individual privacy (40%) and explainability (37%). The least cited are national security (13%) and political stability (9%).",
               "Fewer organizations act than worry. Only 51% take steps to mitigate cybersecurity risk, 36% regulatory compliance and 28% personal privacy — gaps of 8, 9 and 12 percentage points against the share that call those risks relevant.",
               "In Deloitte’s survey of 2,620 business leaders, 94% called AI important to their organization’s overall success and 82% agreed that AI improves performance and job satisfaction.",
               "76% expected to increase AI investment in the next fiscal year — still a large majority, but 9 points below 2021 and 12 points below 2018.",
               "The top three challenges in starting AI projects are proving business value (37%), lack of executive commitment (34%) and choosing the right AI technologies (33%). The top barriers to scaling are managing AI-related risks (50%), obtaining more data to train a model (44%) and implementing the technology (42%).",
               "The outcomes leaders say they actually achieved: lower costs (37%), better collaboration across business functions (34%), valuable insights discovered (34%) and improved or customized products and programs (33%)."],
          zh: ["組織認為導入 AI 時最相關的風險是資安(59%)、法規遵循(45%)、個人隱私(40%)與可解釋性(37%)。最少被提到的是國家安全(13%)與政治穩定(9%)。",
               "擔心的人多，動手的人少。只有 51% 的組織針對資安採取了減緩措施，法規遵循 36%、個人隱私 28% — 與「認為此風險相關」的比例分別差了 8、9 與 12 個百分點。",
               "在勤業眾信針對 2,620 位企業領導者的調查中，94% 認為 AI 對組織的整體成功「重要」，82% 同意 AI 能提升績效與工作滿意度。",
               "76% 預期下一個會計年度會增加 AI 投資 — 仍是絕大多數，但比 2021 年低 9 個百分點、比 2018 年低 12 個百分點。",
               "啟動 AI 專案的三大挑戰是：證明商業價值(37%)、高層承諾不足(34%)與選對 AI 技術(33%)。擴大規模的主要障礙則是管理 AI 相關風險(50%)、取得更多訓練資料(44%)與實際導入技術(42%)。",
               "領導者說自己真正達成的成果是：降低成本(37%)、改善跨部門協作(34%)、發掘有價值的洞察(34%)，以及改良或客製化產品與方案(33%)。"]
        } }
    ]
  },

  /* --------------------------------------------- industrial robots chart */
  {
    type: "bars",
    id: "robots",
    nav:      { en: "Robots", zh: "機器人" },
    title:    { en: "2021 was the year China out-installed the entire rest of the world",
                zh: "2021 年，中國安裝的機器人超過全世界其餘國家總和" },
    subtitle: { en: "Industrial robots installed in 2021, in thousands. China’s 268,200 was 5.7 times Japan’s total and 7.7 times the United States’ — and edged past the 249,000 installed by every other country combined.",
                zh: "2021 年安裝的工業機器人(千台)。中國的 268,200 台是日本的 5.7 倍、美國的 7.7 倍 — 也剛好超過其餘所有國家加總的 249,000 台。" },
    series: [
      { label: { en: "China", zh: "中國" },         value: 268.2 },
      { label: { en: "Japan", zh: "日本" },         value: 47.2 },
      { label: { en: "United States", zh: "美國" }, value: 35.0 },
      { label: { en: "South Korea", zh: "南韓" },   value: 31.1 },
      { label: { en: "Germany", zh: "德國" },       value: 23.8 }
    ]
  },

  /* ---------------------------------------------------------------- CARDS */
  {
    type: "cards",
    id: "close-ups",
    nav:      { en: "Close-ups", zh: "特寫" },
    title:    { en: "Five close-ups from the chapter", zh: "章節裡的五個特寫" },
    subtitle: { en: "The details that do not fit into an aggregate — a controlled experiment on coding assistants, the year’s biggest transactions, what executives said out loud, and two shifts in what robots are for.",
                zh: "五件塞不進總體數字裡的事 — 一場關於程式助理的對照實驗、這一年最大的幾筆交易、高階主管公開說了什麼，以及機器人用途上的兩個轉變。" },
    items: [
      { slug: "copilot-experiment",
        title:   { en: "Copilot’s 71 minutes", zh: "Copilot 的 71 分鐘" },
        summary: { en: "GitHub randomly split 95 developers into two groups for a coding task. The ones using Copilot finished in 71 minutes; the ones without took 161.",
                   zh: "GitHub 把 95 名開發者隨機分成兩組做同一項程式任務。用 Copilot 的組別花 71 分鐘完成，沒用的組別花了 161 分鐘。" },
        tags: ["productivity"],
        overview: { en: "Alongside a survey of over 2,000 developers using the tool, GitHub ran a controlled experiment: 45 developers used Copilot on a coding task and 50 did not. The Copilot group reported a 78% completion rate against 70%, and took 71 minutes against 161 — 56% less time. In the survey, 88% said they felt more productive, 88% said they completed tasks more quickly, 96% said they were faster at repetitive tasks, 87% said those tasks took less mental effort, 77% spent less time searching, and 74% said they could focus on more satisfying work. This is one of the chapter’s few pieces of direct, measured evidence rather than self-reported adoption.",
                   zh: "除了針對 2,000 多名使用者的問卷，GitHub 還做了一場對照實驗：45 名開發者在程式任務中使用 Copilot，50 名沒有使用。使用組的完成率為 78%，對照組 70%；完成時間 71 分鐘對 161 分鐘，少了 56%。在問卷中，88% 覺得自己更有生產力、88% 認為任務完成得更快、96% 表示處理重複性工作更快、87% 覺得這類工作耗費的心力變少、77% 花在搜尋上的時間變少，74% 認為自己能專注在更有成就感的工作上。這是本章少數不是「自我回報的採用率」，而是實際量測出來的證據。" } },

      { slug: "biggest-deals",
        title:   { en: "The year’s four biggest tickets", zh: "這一年最大的四張支票" },
        summary: { en: "Nuance Communications at $19.8 billion was the largest single AI investment event of 2022 — and it was an acquisition, not a funding round.",
                   zh: "2022 年單筆金額最高的 AI 投資是 Nuance Communications 的 198 億美元 — 而且那是併購，不是募資。" },
        tags: ["investment"],
        overview: { en: "Each type of investment activity had its own headline deal. The largest merger or acquisition was Nuance Communications at $19.8 billion, ahead of Citrix Systems ($17.18 billion), Avast ($8.02 billion), AspenTech ($6.34 billion) and Vivint Smart Home ($5.54 billion). The largest minority stake was the British company Aveva Group at $4.7 billion. The largest private investment event was $2.5 billion for GAC Aion New Energy Automobile, a Chinese clean-energy and automotive company. The largest public offering was ASR Microelectronics, a Chinese semiconductor company, at $1.1 billion.",
                   zh: "每一類投資活動都有自己的頭條交易。最大的併購案是 Nuance Communications 的 198 億美元，其後是 Citrix Systems(171.8 億美元)、Avast(80.2 億美元)、AspenTech(63.4 億美元)與 Vivint Smart Home(55.4 億美元)。最大的少數股權投資是英國公司 Aveva Group 的 47 億美元。最大的單筆私人投資是中國清潔能源與汽車公司廣汽埃安的 25 億美元。最大的公開發行則是中國半導體公司翱捷科技的 11 億美元。" } },

      { slug: "earnings-calls",
        title:   { en: "What the Fortune 500 said out loud", zh: "財星 500 大在法說會上說了什麼" },
        summary: { en: "268 Fortune 500 earnings calls mentioned AI in fiscal 2022 — down from 306 the year before, but still above 2018’s 225.",
                   zh: "2022 會計年度有 268 場財星 500 大的法說會提到 AI — 少於前一年的 306 場，但仍高於 2018 年的 225 場。" },
        tags: ["earnings"],
        overview: { en: "NetBase Quid searched every 2022 Fortune 500 earnings call for mentions of artificial intelligence, AI, machine learning, ML and deep learning. The count fell to 268 from 306 in 2021, tracking the same cooling seen in investment, but remained above the 225 recorded in 2018. What executives talked about also shifted. The most cited themes in 2022 were business integration (9.96%), pricing and inventory management (8.8%) and advertising and marketing (8.8%). Compared with 2018, the themes that lost ground are the ones that used to define the field: deep learning (4.8%), autonomous vehicles (3.1%) and data storage and management (3.0%).",
                   zh: "NetBase Quid 掃過 2022 年所有財星 500 大的法說會逐字稿，尋找 artificial intelligence、AI、machine learning、ML 與 deep learning 的提及。次數從 2021 年的 306 場降到 268 場，和投資端的降溫同步，但仍高於 2018 年的 225 場。高階主管談論的主題也在位移：2022 年最常被提到的是商業整合(9.96%)、定價與庫存管理(8.8%)以及廣告與行銷(8.8%)。和 2018 年相比，退場的正是那些曾經定義這個領域的題目：深度學習(4.8%)、自駕車(3.1%)與資料儲存與管理(3.0%)。" } },

      { slug: "collaborative-robots",
        title:   { en: "Robots designed to stand next to you", zh: "設計來站在你旁邊的機器人" },
        summary: { en: "Collaborative robots — built to work with humans rather than for them — grew from 2.8% of new industrial installations in 2017 to 7.5% in 2021.",
                   zh: "協作型機器人 — 設計來與人一起工作，而不是替人工作 — 佔新安裝工業機器人的比例，從 2017 年的 2.8% 上升到 2021 年的 7.5%。" },
        tags: ["robots"],
        overview: { en: "The IFR distinguishes traditional industrial robots, which work for humans, from collaborative robots, which are designed to work alongside them — safer, more flexible, more scalable and capable of iterative learning. Of the 517,000 industrial robots installed worldwide in 2021, 39,000 were collaborative and 478,000 traditional. That is 7.5% of new installations, up from 2.8% in 2017. Traditional robots still dominate by a wide margin, but the collaborative share has grown every year of the comparison.",
                   zh: "國際機器人聯合會把工業機器人分成兩類：替人類工作的傳統機器人，以及設計來與人類並肩工作的協作型機器人 — 後者更安全、更靈活、更容易擴充，也具備迭代學習的能力。2021 年全球安裝的 517,000 台工業機器人中，39,000 台是協作型、478,000 台是傳統型。協作型佔新安裝量的 7.5%，高於 2017 年的 2.8%。傳統機器人仍大幅領先，但協作型的佔比在比較期間內逐年上升。" } },

      { slug: "service-robots",
        title:   { en: "The robots that are not in factories", zh: "不在工廠裡的那些機器人" },
        summary: { en: "Professional service robot installations rose across hospitality, medicine, cleaning and logistics — with transportation and logistics up 1.5 times in a year.",
                   zh: "專業服務型機器人的安裝量在旅宿、醫療、清潔與物流全面上升 — 其中運輸與物流一年成長 1.5 倍。" },
        tags: ["robots", "services"],
        overview: { en: "Service robots perform useful tasks for humans or equipment outside industrial automation. In 2021, transportation and logistics led with about 50,000 installations, 1.5 times the roughly 34,000 of 2020 and the fastest-growing category. Hospitality rose from about 11,000 to 20,000, medical robotics from 12,000 to 15,000, professional cleaning from 10,000 to 13,000, while agriculture held at about 8,000. As of 2022 the United States had the most professional service robot manufacturers — 225, roughly 2.16 times China’s 104 — followed by Germany (91), Japan (66) and France (54).",
                   zh: "服務型機器人指的是在工業自動化之外，為人類或設備執行有用任務的機器人。2021 年運輸與物流以約 50,000 台居首，是 2020 年約 34,000 台的 1.5 倍，也是成長最快的類別。旅宿業從約 11,000 台增至 20,000 台，醫療機器人從 12,000 台增至 15,000 台，專業清潔從 10,000 台增至 13,000 台，農業則維持在約 8,000 台。截至 2022 年，美國擁有最多專業服務型機器人製造商 — 225 家，約為中國 104 家的 2.16 倍 — 其後是德國(91 家)、日本(66 家)與法國(54 家)。" } }
    ]
  },

  /* ------------------------------------------------------------ ACCORDION */
  {
    type: "accordion",
    id: "questions",
    nav:      { en: "Questions", zh: "問答" },
    title:    { en: "Five questions about a year that turned", zh: "關於一個轉折年的五個問題" },
    subtitle: { en: "What the 2022 numbers do and do not say about AI’s place in the economy.",
                zh: "關於 AI 在經濟中的位置，2022 年的數字說了什麼、又沒說什麼。" },
    qa: [
      { q: { en: "Did AI investment really collapse in 2022?", zh: "2022 年的 AI 投資真的崩了嗎？" },
        a: { en: "It fell hard, from a very high base. Global AI private investment came to $91.9 billion, a 26.7% decrease from 2021 and the first year-over-year drop in the last decade. Total corporate AI investment — mergers and acquisitions, minority stakes, private investment and public offerings combined — was $189.6 billion, roughly a third below 2021. But the ten-year picture is unchanged: private investment in AI was still 18 times its 2013 level, and corporate investment has grown thirteenfold over the decade. The retreat was broad rather than deep in any one place. There were 3,538 private investment events, down 12%, and 1,392 newly funded AI companies against 1,669 in 2021. Every funding-size band shrank except deals over $1 billion, which rose from 4 to 6.",
             zh: "跌得很重，但是從一個非常高的基期跌下來。2022 年全球 AI 私人投資為 919 億美元，較 2021 年下降 26.7%，是過去十年來第一次年減。企業 AI 投資總額 — 併購、少數股權、私人投資與公開發行加總 — 為 1,896 億美元，約比 2021 年低三分之一。但十年尺度的圖像沒有改變：AI 私人投資仍是 2013 年的 18 倍，企業投資十年間成長了十三倍。這次的退潮是全面的，而不是集中在某一處：私人投資件數 3,538 件，減少 12%；新獲資金的 AI 公司 1,392 家，前一年是 1,669 家。除了超過 10 億美元的交易從 4 件增為 6 件之外，每個募資規模級距都在縮小。" } },

      { q: { en: "Which countries are still putting money in?", zh: "還有哪些國家在投錢？" },
        a: { en: "The same ones, only less. The United States invested $47.36 billion in 2022, about 3.5 times China’s $13.41 billion and 11 times the United Kingdom’s $4.37 billion, then Israel and India (both $3.24 billion) and South Korea ($3.10 billion). Both leaders fell sharply — US private AI investment dropped 35.5% and China’s 41.3%. Cumulatively since 2013 the order is identical: the United States $248.9 billion, China $95.1 billion, the United Kingdom $18.2 billion, Israel $10.8 billion, Canada $8.8 billion. New company formation follows the same map. The United States produced 542 newly funded AI companies in 2022 against China’s 160 and the United Kingdom’s 99 — 1.9 times the European Union and the United Kingdom combined, and 3.4 times China.",
             zh: "還是同一批，只是金額變少。2022 年美國投入 473.6 億美元，約為中國 134.1 億美元的 3.5 倍、英國 43.7 億美元的 11 倍，其後是以色列與印度(皆 32.4 億美元)與南韓(31.0 億美元)。兩個領先者都大幅下滑 — 美國的 AI 私人投資減少 35.5%，中國減少 41.3%。若從 2013 年累計，順序完全相同：美國 2,489 億美元、中國 951 億美元、英國 182 億美元、以色列 108 億美元、加拿大 88 億美元。新公司的誕生也跟著同一張地圖：2022 年美國有 542 家新獲資金的 AI 公司，中國 160 家、英國 99 家 — 美國是歐盟加英國總和的 1.9 倍、中國的 3.4 倍。" } },

      { q: { en: "If adoption has plateaued, is AI paying off for the companies that adopted it?", zh: "採用率既然停住了，那已經導入的公司有賺到嗎？" },
        a: { en: "By their own reporting, yes. 50% of surveyed organizations had adopted AI in at least one function in 2022, down from 56% in 2021 but more than double 2017’s 20% — a plateau between 50% and 60% rather than a decline. Inside those organizations, use keeps deepening: the average number of AI capabilities embedded doubled from 1.9 in 2018 to 3.8 in 2022. On costs, respondents most often reported decreases in supply chain management (52%), service operations (45%), and strategy and corporate finance and risk (both 43%). On revenue, the leaders were marketing and sales (70%), product and service development (70%) and strategy and corporate finance (65%). The pattern in the chapter is a widening gap: adoption has stopped spreading, but the organizations already inside keep pulling ahead.",
             zh: "就他們自己的回報來說，有。2022 年有 50% 的受訪組織在至少一項職能中導入了 AI，低於 2021 年的 56%，但仍是 2017 年 20% 的兩倍以上 — 那是停在 50% 到 60% 之間的高原，不是下坡。在這些組織內部，使用還在加深：平均嵌入的 AI 能力數從 2018 年的 1.9 項倍增到 2022 年的 3.8 項。在成本面，受訪者最常回報下降的是供應鏈管理(52%)、服務營運(45%)，以及策略暨企業財務與風險(皆 43%)。在營收面，領先的是行銷與業務(70%)、產品與服務開發(70%)與策略暨企業財務(65%)。本章描繪的是一道正在拉開的差距：採用不再往外擴散，但已經在裡面的組織持續往前走。" } },

      { q: { en: "How dominant is China in industrial robots?", zh: "中國在工業機器人上有多強勢？" },
        a: { en: "2021 was the first year in which China installed more industrial robots than the rest of the world combined — 268,200 against 249,000 for every other country. That was 5.7 times Japan’s 47,200 and 7.7 times the United States’ 35,000, with South Korea (31,100) and Germany (23,800) next. China overtook Japan in 2013, when it accounted for 20.8% of world installations; by 2021 that share was 51.8%. The global picture rebounded too: 517,000 industrial robots were installed worldwide in 2021, a 31.3% increase on 2020 and a 211.5% increase on 2011, while the operational stock rose 14.6% to 3,477,000 from 3,035,000. Virtually every country reported growth, led by Canada (66%), Italy (65%) and Mexico (61%); Singapore was the notable exception at -35%.",
             zh: "2021 年是中國安裝的工業機器人首次超過全世界其餘國家總和的一年 — 268,200 台對上其他所有國家的 249,000 台。這是日本 47,200 台的 5.7 倍、美國 35,000 台的 7.7 倍，其後為南韓(31,100 台)與德國(23,800 台)。中國在 2013 年超越日本，當時佔全球安裝量的 20.8%；到 2021 年，這個比例已是 51.8%。全球數字也在反彈：2021 年全球安裝 517,000 台工業機器人，較 2020 年成長 31.3%，較 2011 年成長 211.5%；運轉存量則從 3,035,000 台增加 14.6% 到 3,477,000 台。幾乎每個受調國家都成長，以加拿大(66%)、義大利(65%)與墨西哥(61%)居首；新加坡是明顯的例外，為 -35%。" } },

      { q: { en: "Where do the robots actually go, and what do they do?", zh: "這些機器人到底進了哪裡、在做什麼？" },
        a: { en: "Electronics first, cars second. Globally the sector installing the most industrial robots in 2021 was electrical and electronics (137,000), followed by automotive (119,000); every highlighted sector has installed more since 2019. By task, handling dominates — 230,000 robots were installed for handling in 2021, 2.4 times as many as for welding (96,000) and 3.7 times as many as for assembling (62,000), and every application category except dispensing and processing saw more installations in 2021 than in 2019. The two big economies differ in shape. In China the largest sectors are electrical and electronics (88,000), automotive (62,000) and metal and machinery (34,000), and every Chinese industrial sector installed more robots in 2021 than in 2019. In the United States automotive still leads at 9,800, but that sector fell year over year while food (3,400) and plastic and chemical products (3,500) rose.",
             zh: "先是電子，再來是汽車。2021 年全球安裝最多工業機器人的產業是電機電子(137,000 台)，其次是汽車(119,000 台)；圖中每個產業的安裝量都高於 2019 年。若以任務來分，搬運遙遙領先 — 2021 年有 230,000 台機器人被裝來做搬運，是焊接(96,000 台)的 2.4 倍、組裝(62,000 台)的 3.7 倍；除了噴塗與加工之外，每個應用類別在 2021 年的安裝量都多於 2019 年。兩大經濟體的形狀不同：中國最大的產業是電機電子(88,000 台)、汽車(62,000 台)與金屬與機械(34,000 台)，而且中國每一個工業部門在 2021 年的安裝量都高於 2019 年。美國則仍以汽車業的 9,800 台居首，但這個產業年減，同時食品(3,400 台)與塑膠及化學製品(3,500 台)上升。" } }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 4 · The Economy.",
                zh: "第 4 章「經濟」的頭條發現。" },
    quotes: [
      { text: { en: "For the first time in the last decade, year-over-year private investment in AI decreased. Global AI private investment was $91.9 billion in 2022, a 26.7% decrease since 2021 — still 18 times greater than in 2013.",
                zh: "十年來，AI 私人投資首次出現年減。2022 年全球 AI 私人投資為 919 億美元，較 2021 年下降 26.7% — 但仍是 2013 年的 18 倍。" },
        by: "Chapter 4 · The Economy" },
      { text: { en: "The demand for AI-related professional skills is increasing across virtually every American industrial sector — from 1.7% of job postings in 2021 to 1.9% in 2022.",
                zh: "幾乎每一個美國產業對 AI 專業技能的需求都在上升 — 從 2021 年佔職缺的 1.7%，上升到 2022 年的 1.9%。" },
        by: "Chapter 4 · The Economy" },
      { text: { en: "In 2022, the $47.4 billion invested in the U.S. was roughly 3.5 times the amount invested in the next highest country, China ($13.4 billion).",
                zh: "2022 年投入美國的 474 億美元，約為排名第二的中國(134 億美元)的 3.5 倍。" },
        by: "Chapter 4 · The Economy" },
      { text: { en: "The proportion of companies adopting AI has more than doubled since 2017, though it has plateaued in recent years between 50% and 60%. Organizations that have adopted AI report realizing meaningful cost decreases and revenue increases.",
                zh: "採用 AI 的公司比例自 2017 年以來成長超過一倍，但近年停在 50% 到 60% 之間。已導入 AI 的組織回報有實質的成本下降與營收成長。" },
        by: "Chapter 4 · The Economy" },
      { text: { en: "In 2021, China installed more industrial robots than the rest of the world combined.",
                zh: "2021 年，中國安裝的工業機器人比全世界其餘國家加起來還多。" },
        by: "Chapter 4 · The Economy" }
    ]
  },

  /* ------------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "報告原文" },
    title: { en: "Read Chapter 4 in full", zh: "閱讀第 4 章原文" },
    text:  { en: "Chapter 4 — 4.1 Jobs, 4.2 Investment, 4.3 Corporate Activity and 4.4 Robot Installations — with every figure, table and citation, is free from Stanford HAI.",
             zh: "第 4 章 — 4.1 就業、4.2 投資、4.3 企業活動與 4.4 機器人安裝 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2023-ai-index-report",
             label: { en: "Open the AI Index 2023 →", zh: "開啟 AI 指數 2023 →" } }
  }
];

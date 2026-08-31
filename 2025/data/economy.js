/* =========================================================================
   AI and the Economy — deep dive · economy.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2025, Chapter 4
   https://hai.stanford.edu/ai-index/2025-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 4: 4.1 What's New in 2024, 4.2 Jobs,
   4.3 Investment, 4.4 Corporate Activity, 4.5 Robot Deployments.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "economy";

window.SITE_META = {
  title:    { en: "AI Index Report 2025", zh: "AI 指數報告 2025" },
  subtitle: { en: "Economy · a chapter deep dive", zh: "經濟專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "Business went all in on AI — and, for the first time, started counting the returns",
                zh: "企業全面押注 AI — 而且第一次開始算起了回報" },
    subtitle: { en: "Chapter 4 of the AI Index 2025 follows the money: record investment concentrated in a handful of countries, the fastest jump in corporate adoption the survey has ever recorded, and the first large body of evidence that AI genuinely raises productivity. What it does not yet show is large-scale job loss. The numbers:",
                zh: "AI 指數 2025 第 4 章追著錢走：破紀錄的投資集中在少數國家、調查史上最陡的企業採用躍升，以及第一批大規模證據顯示 AI 確實提升生產力。它目前還沒顯示的，是大規模的失業。先看數字：" },
    stats: [
      { label: { en: "global corporate AI investment in 2024 (US$ billions, up 25.5%)", zh: "2024 年全球企業 AI 投資(十億美元，成長 25.5%)" }, value: 252 },
      { label: { en: "US private AI investment (US$ billions) — 11.7× China's 9.3", zh: "美國私人 AI 投資(十億美元) — 為中國 9.3 的 11.7 倍" }, value: 109 },
      { label: { en: "private investment in generative AI (US$ billions, up 18.7%)", zh: "生成式 AI 私人投資(十億美元，成長 18.7%)" }, value: 34 },
      { label: { en: "% of organizations using AI in at least one business function (55% in 2023)", zh: "% 至少在一項業務職能中使用 AI 的組織(2023 年為 55%)" }, value: 78 },
      { label: { en: "% regularly using generative AI in at least one function (33% in 2023)", zh: "% 在至少一項職能中固定使用生成式 AI 的組織(2023 年為 33%)" }, value: 71 },
      { label: { en: "industrial robots installed by China in 2023 — 51.1% of the world total", zh: "2023 年中國安裝的工業機器人 — 佔全球總量 51.1%" }, value: 276300 }
    ]
  },

  /* ------------------------------------------------------- 4.3 INVESTMENT */
  {
    type: "prose",
    id: "investment",
    nav:      { en: "4.3 Investment", zh: "4.3 投資" },
    title:    { en: "4.3 — Record money, and an ever-narrower map",
                zh: "4.3 — 破紀錄的資金，以及愈來愈窄的地圖" },
    subtitle: { en: "Global corporate AI investment reached $252.3 billion in 2024, up 25.5% on the year and more than thirteen times its 2014 level. Private investment climbed 44.5% — its first year-over-year growth since 2021 — while mergers and acquisitions rose 12.1%.",
                zh: "2024 年全球企業 AI 投資達 2,523 億美元，年增 25.5%，是 2014 年水準的十三倍以上。私人投資成長 44.5% — 這是自 2021 年以來首次年增 — 併購則上升 12.1%。" },
    blocks: [
      { type: "h3",
        text: { en: "Generative AI takes a fifth of everything", zh: "生成式 AI 拿走五分之一" } },
      { type: "ul",
        items: {
          en: ["Private investment in generative AI reached $33.9 billion in 2024, up 18.7% from 2023 and more than 8.5 times its 2022 level. The sector now represents more than a fifth of all AI-related private investment.",
               "The number of newly funded AI companies rose to 2,049, an 8.4% increase. Newly funded generative AI companies rose to 214, up from 179 in 2023 and just 31 in 2019.",
               "Deals got bigger rather than more numerous. The average private AI investment event grew from $31.6 million in 2023 to $45.4 million in 2024. Fifteen events exceeded $1 billion, and deals in the $500 million to $1 billion band more than doubled, from 9 to 20, while smaller categories flattened or shrank.",
               "By focus area, the most funded categories in 2024 were AI infrastructure, research and governance ($37.3 billion), data management and processing ($16.6 billion), and medical and healthcare ($11 billion) — a pattern that reflects large rounds for companies building AI itself, such as OpenAI, Anthropic and xAI.",
               "Not every category is rising. Investment in NLP and customer support peaked in 2021 and has declined since."],
          zh: ["2024 年生成式 AI 的私人投資達 339 億美元，較 2023 年成長 18.7%，是 2022 年水準的 8.5 倍以上。這個領域如今佔所有 AI 相關私人投資的五分之一以上。",
               "新獲資金的 AI 公司增加到 2,049 家，成長 8.4%。新獲資金的生成式 AI 公司增至 214 家，高於 2023 年的 179 家，以及 2019 年的僅 31 家。",
               "交易變得更大，而不是更多。平均每筆私人 AI 投資案從 2023 年的 3,160 萬美元增至 2024 年的 4,540 萬美元。有 15 筆交易超過 10 億美元，5 億至 10 億美元級距的交易更從 9 筆增至 20 筆、翻了一倍以上，較小的級距則持平或萎縮。",
               "以領域來看，2024 年獲得最多資金的類別是 AI 基礎設施、研究與治理(373 億美元)，資料管理與處理(166 億美元)，以及醫療與健康照護(110 億美元) — 這個模式反映出資金大量流向 OpenAI、Anthropic、xAI 這類建造 AI 本身的公司。",
               "並非每個類別都在上升。自然語言處理與客戶支援的投資在 2021 年見頂，之後持續下滑。"]
        } },
      { type: "h3",
        text: { en: "The United States pulls further ahead", zh: "美國持續拉開距離" } },
      { type: "p",
        text: { en: "US private AI investment hit $109.1 billion in 2024 — 11.7 times China's $9.3 billion and 24.1 times the United Kingdom's $4.5 billion. Sweden ($4.3 billion), Austria ($1.5 billion), the Netherlands ($1.1 billion) and Italy ($0.9 billion) rounded out the top 15. The gap is widening, not closing: US private AI investment rose 50.7% from 2023 and 78.3% from 2022, while China's fell 1.9% and Europe's grew 60% from a much lower base. In generative AI specifically, US investment exceeded the combined total of China, the European Union and the UK by $25.4 billion, up from a $21.8 billion gap in 2023.",
                zh: "2024 年美國私人 AI 投資達 1,091 億美元 — 是中國 93 億美元的 11.7 倍、英國 45 億美元的 24.1 倍。瑞典(43 億美元)、奧地利(15 億美元)、荷蘭(11 億美元)與義大利(9 億美元)則排進前 15 名。差距正在擴大而非縮小：美國私人 AI 投資較 2023 年成長 50.7%、較 2022 年成長 78.3%，中國下跌 1.9%，歐洲則從低得多的基期成長 60%。單就生成式 AI 而言，美國的投資額超過中國、歐盟與英國三者合計達 254 億美元，而 2023 年的差距為 218 億美元。" } },
      { type: "ul",
        items: {
          en: ["Aggregated since 2013, the rankings are the same: the United States has attracted $470.9 billion, China $119.3 billion and the United Kingdom $28.2 billion, followed by Israel ($15.0 billion), Singapore ($7.3 billion) and Sweden ($7.3 billion).",
               "Entrepreneurial activity follows the money. In 2024 the US produced 1,073 newly funded AI companies, against 116 in the UK and 98 in China. Over the past decade the US total is roughly 4.3 times China's and 7.9 times the UK's.",
               "China saw a second consecutive annual decline in newly funded AI companies, while the US and Europe both rose.",
               "The year's landmark deals: Synopsys agreed to acquire Ansys for $35 billion in January; OpenAI raised $6.6 billion at a $157 billion valuation in October; xAI announced a $6 billion round in December; Safe Superintelligence and Scale AI each raised $1 billion; Figure AI raised $675 million; and Nvidia acquired Run:ai for $700 million.",
               "Talent acquisition took unusual forms too — Microsoft hired most of Inflection AI's staff in March, and Google hired Character.AI's cofounders in August."],
          zh: ["自 2013 年累計，排名相同：美國吸引了 4,709 億美元、中國 1,193 億美元、英國 282 億美元，其後是以色列(150 億美元)、新加坡(73 億美元)與瑞典(73 億美元)。",
               "創業活動跟著資金走。2024 年美國有 1,073 家新獲資金的 AI 公司，英國 116 家、中國 98 家。過去十年，美國的總數約為中國的 4.3 倍、英國的 7.9 倍。",
               "中國新獲資金的 AI 公司數連續第二年下滑，美國與歐洲則同步上升。",
               "這一年的指標性交易：1 月 Synopsys 同意以 350 億美元收購 Ansys；10 月 OpenAI 以 1,570 億美元估值募得 66 億美元；12 月 xAI 宣布 60 億美元募資；Safe Superintelligence 與 Scale AI 各募得 10 億美元；Figure AI 募得 6.75 億美元；Nvidia 以 7 億美元收購 Run：ai。",
               "人才收購也出現了不尋常的形式 — 3 月微軟聘走了 Inflection AI 大部分的員工，8 月 Google 則延攬了 Character.AI 的共同創辦人。"]
        } }
    ]
  },

  /* --------------------------------------------- private investment chart */
  {
    type: "bars",
    id: "invest-geo",
    nav:      { en: "By country", zh: "各國投資" },
    title:    { en: "Private AI investment is concentrated in one country",
                zh: "私人 AI 投資集中在單一國家" },
    subtitle: { en: "Total private AI investment in 2024, in US$ billions. The United States invested 11.7 times more than China and 24.1 times more than the United Kingdom.",
                zh: "2024 年私人 AI 投資總額(十億美元)。美國的投資額是中國的 11.7 倍、英國的 24.1 倍。" },
    series: [
      { label: { en: "United States", zh: "美國" },      value: 109.1 },
      { label: { en: "China", zh: "中國" },              value: 9.3 },
      { label: { en: "United Kingdom", zh: "英國" },     value: 4.5 },
      { label: { en: "Sweden", zh: "瑞典" },             value: 4.3 },
      { label: { en: "Austria", zh: "奧地利" },          value: 1.5 }
    ]
  },

  /* ------------------------------------------------ 4.4 CORPORATE ADOPTION */
  {
    type: "prose",
    id: "adoption",
    nav:      { en: "4.4 Adoption", zh: "4.4 企業採用" },
    title:    { en: "4.4 — Adoption jumped 23 points in a year, and the value is real but small",
                zh: "4.4 — 採用率一年跳升 23 個百分點，而創造的價值真實但不大" },
    subtitle: { en: "After stagnating between 2017 and 2023, business use of AI moved sharply. 78% of surveyed organizations now use AI in at least one business function, up from 55% a year earlier, and generative AI use more than doubled to 71%.",
                zh: "在 2017 至 2023 年間停滯之後，企業對 AI 的使用出現急遽變化。如今有 78% 的受訪組織在至少一項業務職能中使用 AI，一年前為 55%；生成式 AI 的使用率更翻倍以上，達到 71%。" },
    blocks: [
      { type: "p",
        text: { en: "The most telling number is the shrinking distance between the two. In 2023 there was a 22-point gap between organizations using any AI and those using generative AI; by 2024 that gap had narrowed to 7 points. Generative AI is no longer a separate experiment running alongside the analytics stack — for most adopters it is simply what AI now means.",
                zh: "最能說明問題的數字，是兩者之間正在縮小的距離。2023 年，使用任何 AI 的組織與使用生成式 AI 的組織之間相差 22 個百分點；到 2024 年，這道差距縮小到 7 個百分點。生成式 AI 不再是分析架構旁邊獨立進行的實驗 — 對多數採用者而言，它就是「AI」現在的意思。" } },
      { type: "h3",
        text: { en: "Where adoption is growing fastest", zh: "採用成長最快的地方" } },
      { type: "ul",
        items: {
          en: ["North America still leads on overall AI use at 82%, but only narrowly. Europe reached 80% after a 23-point increase, and Greater China posted one of the fastest year-over-year growth rates anywhere, up 27 percentage points.",
               "On generative AI specifically, the three regions are effectively level: North America 74%, Europe 73%, Greater China 73%.",
               "By industry and function, the heaviest use is inside the technology sector itself — IT (48%), product and service development (47%) and marketing and sales (47%).",
               "The most common deployments are narrow: marketing strategy content support (27%), knowledge management (19%), personalization (19%) and design development (14%). Most of the leading use cases sit inside marketing and sales.",
               "A complementary survey of C-suite executives in developed markets found only 1% described their generative AI rollouts as mature. Most companies are still early in capturing value at scale."],
          zh: ["北美在整體 AI 使用率上仍以 82% 領先，但差距不大。歐洲在成長 23 個百分點後達到 80%，大中華區則以上升 27 個百分點，寫下全球最快的年增率之一。",
               "單就生成式 AI 而言，三個地區幾乎持平：北美 74%、歐洲 73%、大中華區 73%。",
               "以產業與職能來看，使用最密集的是科技業自己 — 資訊科技(48%)、產品與服務開發(47%)、行銷與業務(47%)。",
               "最常見的部署都很局部：行銷策略內容支援(27%)、知識管理(19%)、個人化(19%)與設計開發(14%)。領先的使用情境多半落在行銷與業務之內。",
               "另一份針對成熟市場高階主管的調查發現，只有 1% 形容自家的生成式 AI 導入已臻成熟。多數公司在規模化擷取價值上，仍處於早期階段。"]
        } },
      { type: "h3",
        text: { en: "Real money, in small amounts", zh: "確實有錢，但金額不大" } },
      { type: "p",
        text: { en: "Organizations report both cost reductions and revenue increases — but overwhelmingly at low levels. On cost, 49% of respondents whose organizations use AI in service operations report savings, followed by supply chain and inventory management (43%) and software engineering (41%); most of them report savings of less than 10%. On revenue, 71% using AI in marketing and sales report gains, along with 63% in supply chain, 57% in service operations, 56% in product or service development and 44% in software engineering; the most common level of increase is less than 5%. Generative AI shows the same shape with different leaders: cost savings are most often reported in supply chain and inventory management (61%), service operations (58%), and human resources and strategy and corporate finance (both 56%), while revenue gains are most often reported in strategy and corporate finance (70%), supply chain (67%) and marketing and sales (66%).",
                zh: "各組織同時回報了成本下降與營收上升 — 但幾乎都是小幅度。在成本面，使用 AI 於服務營運的受訪者有 49% 回報節省，其次是供應鏈與庫存管理(43%)與軟體工程(41%)；其中多數回報的節省幅度不到 10%。在營收面，把 AI 用於行銷與業務的受訪者有 71% 回報成長，供應鏈 63%、服務營運 57%、產品或服務開發 56%、軟體工程 44%；最常見的成長幅度低於 5%。生成式 AI 呈現同樣的形狀，只是領先者不同：回報成本節省最多的是供應鏈與庫存管理(61%)、服務營運(58%)，以及人力資源與策略暨企業財務(皆 56%)；回報營收成長最多的則是策略暨企業財務(70%)、供應鏈(67%)與行銷業務(66%)。" } }
    ]
  },

  /* --------------------------------------------- 4.2 JOBS + LABOR IMPACT */
  {
    type: "prose",
    id: "jobs",
    nav:      { en: "4.2 Jobs", zh: "4.2 就業" },
    title:    { en: "4.2 — The labor market is shifting, but not shrinking",
                zh: "4.2 — 勞動市場正在位移，但沒有萎縮" },
    subtitle: { en: "Demand for AI skills rose across almost every US sector, generative AI became the fastest-growing skill cluster on record, and a substantial body of research established that AI raises productivity — most of all for the workers who were furthest behind.",
                zh: "美國幾乎每個產業對 AI 技能的需求都在上升，生成式 AI 成為有紀錄以來成長最快的技能群，而大量研究確認 AI 能提升生產力 — 對原本落後最多的工作者提升最大。" },
    blocks: [
      { type: "h3",
        text: { en: "Who is hiring, and where", zh: "誰在招人，在哪裡招" } },
      { type: "ul",
        items: {
          en: ["AI-related roles accounted for 1.4% of all American job postings in 2023 and 1.8% in 2024. Globally, Singapore leads at 3.2% of postings, followed by Luxembourg (2%) and Hong Kong (1.9%). Most countries rose year over year.",
               "By skill cluster, artificial intelligence and machine learning each account for 0.9% of US postings, natural language processing 0.2%. Generative AI grew by nearly a factor of four — the largest increase of any cluster — while autonomous driving and robotics were the only clusters to lose ground. Postings citing generative AI skills more than tripled year over year.",
               "Almost every sector increased its share of AI postings, the exception being public administration. Professional, scientific and technical services lead at 5.25% of postings, up 31.2%; the steepest proportional rise was in mining, quarrying, and oil and gas extraction, up 67.8%.",
               "California posted 103,375 AI jobs in 2024 — 15.7% of the US total — followed by Texas at 57,785. As a share of a state's own postings, the District of Columbia leads at 4.44%, followed by Delaware (3.4%) and Washington (3.3%). All four leading states reversed multiyear declines in their share of AI postings.",
               "On LinkedIn, the fastest relative AI hiring growth in 2024 was in India (33.4%), Brazil (30.8%) and Saudi Arabia (28.7%)."],
          zh: ["AI 相關職缺在 2023 年佔全美職缺的 1.4%，2024 年為 1.8%。全球方面，新加坡以 3.2% 領先，其次是盧森堡(2%)與香港(1.9%)。多數國家的比例都較前一年上升。",
               "以技能群來看，人工智慧與機器學習各佔美國職缺的 0.9%，自然語言處理佔 0.2%。生成式 AI 成長近四倍 — 是所有技能群中增幅最大的 — 而自駕與機器人是唯二下滑的技能群。提及生成式 AI 技能的職缺較前一年增加超過三倍。",
               "幾乎每個產業的 AI 職缺佔比都上升，唯一的例外是公共行政。專業、科學與技術服務業以 5.25% 居首，成長 31.2%；比例增幅最陡的是採礦、採石與油氣開採，上升 67.8%。",
               "2024 年加州釋出 103,375 個 AI 職缺 — 佔全美 15.7% — 其次是德州的 57,785 個。若以佔該州自身職缺的比例來看，華盛頓特區以 4.44% 領先，其次是德拉瓦州(3.4%)與華盛頓州(3.3%)。四個領先州別的 AI 職缺佔比，都扭轉了多年的下滑走勢。",
               "在 LinkedIn 上，2024 年相對 AI 招聘成長最快的是印度(33.4%)、巴西(30.8%)與沙烏地阿拉伯(28.7%)。"]
        } },
      { type: "h3",
        text: { en: "Where the talent is, and who it is", zh: "人才在哪裡，又是誰" } },
      { type: "ul",
        items: {
          en: ["Over 2015–2024, the highest relative AI skill penetration rates were in the United States (2.6) and India (2.5), followed by the United Kingdom (1.4), Germany (1.3) and Brazil (1.3). A rate of 2.6 means US members are 2.6 times more likely than the global average to list AI skills across the same occupations.",
               "The highest concentrations of AI talent in 2024 were in Israel (2.0%), Singapore (1.6%) and Luxembourg (1.4%). India recorded one of the largest increases in AI talent concentration since 2016.",
               "Net AI talent migration per 10,000 LinkedIn members was highest in Luxembourg (8.9), Cyprus (4.7) and the United Arab Emirates (4.1). Israel, the Netherlands and Canada have seen declining net inflows in recent years.",
               "The gender gap has barely moved. LinkedIn estimates 69.5% of AI professionals on the platform are male and 30.5% female, a ratio that has remained remarkably stable over time. In every country except India and Saudi Arabia, AI talent concentration is higher among men; Israel reported the highest concentration of female AI talent at 1.6%."],
          zh: ["2015 至 2024 年間，相對 AI 技能滲透率最高的是美國(2.6)與印度(2.5)，其後是英國(1.4)、德國(1.3)與巴西(1.3)。2.6 的意思是，在同一組職業中，美國會員列出 AI 技能的機率是全球平均的 2.6 倍。",
               "2024 年 AI 人才濃度最高的是以色列(2.0%)、新加坡(1.6%)與盧森堡(1.4%)。印度則是自 2016 年以來 AI 人才濃度增幅最大的國家之一。",
               "以每 10,000 名 LinkedIn 會員計算，AI 人才淨遷入最高的是盧森堡(8.9)、賽普勒斯(4.7)與阿拉伯聯合大公國(4.1)。以色列、荷蘭與加拿大近年的淨流入則在下降。",
               "性別差距幾乎沒有動。LinkedIn 估計平台上 69.5% 的 AI 專業人士為男性、30.5% 為女性，這個比例長期以來相當穩定。除了印度與沙烏地阿拉伯之外，每個國家的 AI 人才濃度都是男性較高；以色列的女性 AI 人才濃度最高，為 1.6%。"]
        } },
      { type: "h3",
        text: { en: "The productivity evidence arrives", zh: "生產力證據登場" } },
      { type: "p",
        text: { en: "2024 produced the first large-scale empirical picture of AI's workplace effects, with productivity gains clustering between 10% and 45% and the strongest results in technical, customer support and creative tasks. Analyzing 5,179 customer support agents, Brynjolfsson, Li and Rock found that introducing a generative AI assistant increased issues resolved per hour by 14.2%, with gains emerging quickly and persisting. In software development, a field experiment with 4,867 developers found AI assistance increased task completion by 26.08%, while a natural experiment with 187,489 developers documented a 12.4% increase in core coding activity alongside a 24.9% decrease in time spent on project management. That second study also found AI increased exploration of new technologies by 21.8% and generated an average potential salary increase of $1,683 per developer annually — evidence that the tools enable skill development, not just throughput.",
                zh: "2024 年產出了第一幅關於 AI 職場效應的大規模實證圖像，生產力提升大致落在 10% 到 45% 之間，以技術、客戶支援與創意類任務的成效最強。Brynjolfsson、Li 與 Rock 分析 5,179 名客服人員後發現，導入生成式 AI 助理讓每小時解決的案件數增加 14.2%，效果很快浮現且持續。在軟體開發方面，一項涵蓋 4,867 名開發者的實地實驗發現，AI 協助讓任務完成率提升 26.08%；另一項涵蓋 187,489 名開發者的自然實驗則記錄到核心程式活動增加 12.4%，同時花在專案管理上的時間減少 24.9%。第二項研究也發現 AI 讓新技術的探索增加 21.8%，每位開發者每年平均可能增加 1,683 美元的潛在薪資 — 這說明工具帶來的不只是產出，還有技能成長。" } },
      { type: "h3",
        text: { en: "AI helps the people who need it most", zh: "AI 最幫得上原本最需要幫助的人" } },
      { type: "ul",
        items: {
          en: ["Customer support (Brynjolfsson et al., 2023): low-skill workers gained 34%, while the effect on high-skill workers was indistinguishable from zero.",
               "Consulting (Dell'Acqua et al., 2023): low-skill workers gained 42.96%, high-skill workers 16.5%.",
               "Software engineering (Cui et al., 2024): junior developers gained 21%–40%, senior developers 7%–16%.",
               "Software engineering (Hoffman et al., 2024): low-ability workers gained 12%–27%, high-ability workers 5%–10%.",
               "Integration matters as much as access: organizations with high AI integration showed a 72% probability of significant productivity improvement, against just 3.4% for those with minimal integration. Across the whole sample, 46.8% of respondents reported gains of 0%–20%, 26.2% saw 20%–40%, 18.4% achieved 40%–60%, 7.7% reported 60%–80% and 0.9% reported 80%–100%."],
          zh: ["客戶支援(Brynjolfsson 等人，2023)：低技能工作者提升 34%，對高技能工作者的效果則與零無異。",
               "顧問業(Dell'Acqua 等人，2023)：低技能工作者提升 42.96%，高技能工作者 16.5%。",
               "軟體工程(Cui 等人，2024)：資淺開發者提升 21%–40%，資深開發者 7%–16%。",
               "軟體工程(Hoffman 等人，2024)：低能力工作者提升 12%–27%，高能力工作者 5%–10%。",
               "整合程度和取得管道一樣重要：高度整合 AI 的組織有 72% 的機率出現顯著生產力提升，而低度整合的組織僅 3.4%。就整體樣本而言，46.8% 的受訪者回報 0%–20% 的提升，26.2% 為 20%–40%，18.4% 達 40%–60%，7.7% 回報 60%–80%，0.9% 回報 80%–100%。"]
        } }
    ]
  },

  /* --------------------------------------------- industrial robots chart */
  {
    type: "bars",
    id: "robots",
    nav:      { en: "Robots", zh: "機器人" },
    title:    { en: "China installs more industrial robots than the rest of the world combined",
                zh: "中國安裝的工業機器人多於全世界其餘國家總和" },
    subtitle: { en: "Industrial robots installed in 2023, in thousands. China's share of global installations reached 51.1%, up from 20.8% in 2013 — though the margin over the rest of the world narrowed slightly for the first time since 2021.",
                zh: "2023 年安裝的工業機器人(千台)。中國佔全球安裝量的比例達 51.1%，高於 2013 年的 20.8% — 不過它領先世界其餘國家的幅度，自 2021 年以來首次略為縮小。" },
    series: [
      { label: { en: "China", zh: "中國" },           value: 276.3 },
      { label: { en: "Japan", zh: "日本" },           value: 46.1 },
      { label: { en: "United States", zh: "美國" },   value: 37.6 },
      { label: { en: "South Korea", zh: "南韓" },     value: 31.4 },
      { label: { en: "Germany", zh: "德國" },         value: 28.4 }
    ]
  },

  /* ----------------------------------------------------------- ACCORDION */
  {
    type: "accordion",
    id: "questions",
    nav:      { en: "Questions", zh: "問答" },
    title:    { en: "Five questions the numbers answer", zh: "數字回答的五個問題" },
    subtitle: { en: "What the chapter can and cannot tell you about AI's economic effects.",
                zh: "關於 AI 的經濟效應，這一章能告訴你什麼、又不能告訴你什麼。" },
    qa: [
      { q: { en: "Is AI actually costing people their jobs?", zh: "AI 真的正在讓人失去工作嗎？" },
        a: { en: "Not yet, at least not in the aggregate data. A McKinsey survey of executives found 31% expect AI to reduce workforce size over the next three years, while 19% foresee an increase — and notably, the share predicting reductions has declined since last year, suggesting business leaders are becoming less convinced that AI will shrink organizations. A separate Romanian survey found 43% of organizations anticipating decreases, 30% expecting little change, 15% projecting increases and 12% uncertain. Software engineering is the interesting case: despite well-documented productivity gains, the number of software engineers is expected to increase, consistent with the Jevons Paradox — when a resource becomes cheaper to use, total consumption of it can rise rather than fall.",
             zh: "還沒有，至少在總體數據上沒有。麥肯錫針對高階主管的調查發現，31% 預期 AI 會在未來三年縮減人力規模，19% 預期會增加 — 值得注意的是，預測縮減的比例比去年下降，顯示企業領導者對「AI 會讓組織變小」的信心正在減弱。另一份羅馬尼亞的調查則發現，43% 的組織預期人力減少、30% 預期變化不大、15% 預期增加、12% 不確定。軟體工程是個有意思的案例：儘管生產力提升已有充分證據，軟體工程師的人數卻預期會增加，這符合傑文斯悖論 — 當一項資源的使用成本下降，它的總消耗量可能不減反增。" } },
      { q: { en: "Who is actually using AI at work?", zh: "工作上到底是誰在用 AI？" },
        a: { en: "An Anthropic study analyzed over 4 million real conversations with Claude, classifying them against the US Department of Labor's O*NET occupational framework. Computer and mathematical occupations dominate at 37.2% of all AI interactions, followed by arts, design, entertainment, sports and media at 10.3%, with educational instruction and library occupations also showing significant adoption. Usage peaks in the upper wage quartile and drops at both extremes; roles typically requiring a bachelor's degree show 50% higher usage than their share of the workforce would predict. About 36% of occupations use AI for at least a quarter of their associated tasks, but deep integration remains rare — only about 4% of occupations show AI usage across 75% or more of their tasks, which suggests wholesale automation of entire job categories is not yet occurring. The split between augmentation and automation is 57% to 43%, with cognitive skills like critical thinking and writing prominent and physical and managerial skills nearly absent.",
             zh: "Anthropic 的一項研究分析了超過 400 萬則與 Claude 的真實對話，並依美國勞工部的 O*NET 職業框架分類。電腦與數學類職業以 37.2% 的 AI 互動佔比居首，其次是藝術、設計、娛樂、體育與媒體的 10.3%，教育教學與圖書館類職業的採用也相當顯著。使用率在薪資的上四分位達到高峰，兩端則明顯下降；通常需要學士學位的職務，使用率比其在勞動力中的佔比高出 50%。約 36% 的職業把 AI 用在至少四分之一的相關任務上，但深度整合仍屬罕見 — 只有約 4% 的職業在 75% 以上的任務中使用 AI，這顯示整類工作被全面自動化的情況尚未發生。增強與自動化的比例是 57% 對 43%，批判思考、寫作等認知技能相當突出，體力與管理技能則幾乎不見蹤影。" } },
      { q: { en: "Where is the investment actually going?", zh: "投資實際上流向哪裡？" },
        a: { en: "Increasingly into AI itself rather than AI applications. The largest 2024 focus area was AI infrastructure, research and governance at $37.3 billion, reflecting very large rounds for companies building foundation models — OpenAI, Anthropic and xAI. Data management and processing took $16.6 billion and medical and healthcare $11 billion. The structure of the market matters as much as the total: private investment events grew in every size category above $100 million while smaller categories decreased or stayed flat, and the average deal rose 44% to $45.4 million. Fifteen rounds exceeded $1 billion. Meanwhile, categories that dominated the previous cycle have faded — investment in NLP and customer support peaked in 2021 and has been declining since.",
             zh: "愈來愈多流向 AI 本身，而非 AI 應用。2024 年最大的領域是 AI 基礎設施、研究與治理，達 373 億美元，反映的是 OpenAI、Anthropic、xAI 這些建造基礎模型的公司拿到極大筆的資金。資料管理與處理拿下 166 億美元，醫療與健康照護 110 億美元。市場的結構和總量一樣重要：超過 1 億美元的各級距私人投資件數全面成長，較小的級距則減少或持平，平均每筆交易上升 44% 至 4,540 萬美元，並有 15 筆超過 10 億美元。同時，主導上一輪循環的類別正在退場 — 自然語言處理與客戶支援的投資在 2021 年見頂，之後持續下滑。" } },
      { q: { en: "Are robots part of this story?", zh: "機器人算在這個故事裡嗎？" },
        a: { en: "Yes, and 2023 marked a turn. Global industrial robot installations fell slightly to 541,000 units, a 2.2% decrease from 2022 and the first year-over-year decline since 2019, even as the global operational stock grew to 4,282,000 from 3,904,000. China installed 276,300 industrial robots — six times Japan's 46,100 and 7.3 times the United States' 37,600, with South Korea (31,400) and Germany (28,400) next. Only seven countries reported annual growth, led by India (59%), the United Kingdom (51%) and Canada (37%); the steepest declines were Taiwan (-43%), France (-13%) and Japan and Italy (both -9%). The composition is shifting too: collaborative robots, designed to work alongside people rather than replace them, rose from 2.8% of new installations in 2017 to 10.5% in 2023, and service robot installations rose across every application category except medical robotics — with agricultural and hospitality deployments up 2.5 and 2.2 times respectively.",
             zh: "算，而且 2023 年出現了轉折。全球工業機器人安裝量略降至 541,000 台，較 2022 年減少 2.2%，是 2019 年以來首次年減，儘管全球運轉存量從 3,904,000 台增加到 4,282,000 台。中國安裝了 276,300 台 — 是日本 46,100 台的六倍、美國 37,600 台的 7.3 倍，其後為南韓(31,400 台)與德國(28,400 台)。只有七個國家回報年度成長，以印度(59%)、英國(51%)與加拿大(37%)居首；跌幅最深的是台灣(-43%)、法國(-13%)，以及日本與義大利(皆 -9%)。組成結構也在改變：設計來與人協作而非取代人的協作型機器人，佔新安裝量的比例從 2017 年的 2.8% 升到 2023 年的 10.5%；服務型機器人的安裝量在除了醫療機器人之外的每個應用類別都上升，其中農業與旅宿業的部署分別成長 2.5 倍與 2.2 倍。" } },
      { q: { en: "What is AI doing to the power grid?", zh: "AI 對電網做了什麼？" },
        a: { en: "It is reopening nuclear plants. In September 2024 Microsoft announced a $1.6 billion deal to revive the Three Mile Island nuclear reactor to power AI workloads. Google announced an agreement to purchase nuclear power in October, and Amazon announced a nuclear energy plan built on small modular reactors days later. These are not marginal procurement decisions — they represent AI demand reshaping energy sourcing for an entire industry, and they sit alongside the AI Index's finding in Chapter 1 that the power required to train frontier models is doubling annually.",
             zh: "它正在讓核電廠重新開機。2024 年 9 月，微軟宣布一筆 16 億美元的交易，要重啟三哩島核子反應爐來供應 AI 運算。Google 在 10 月宣布購買核電的協議，亞馬遜幾天後也公布以小型模組化反應爐為基礎的核能計畫。這些不是邊緣的採購決定 — 它們代表 AI 的需求正在重塑整個產業的能源來源，並與 AI 指數第 1 章的發現相互呼應：訓練前沿模型所需的電力每年翻倍。" } }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 4 · Economy.",
                zh: "第 4 章「經濟」的頭條發現。" },
    quotes: [
      { text: { en: "Global corporate AI investment reached $252.3 billion in 2024 — more than thirteen times its 2014 level — with private investment up 44.5%, its first growth since 2021.",
                zh: "2024 年全球企業 AI 投資達 2,523 億美元 — 是 2014 年水準的十三倍以上 — 其中私人投資成長 44.5%，是 2021 年以來首度回升。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "US private AI investment hit $109.1 billion, nearly 12 times China's $9.3 billion and 24 times the UK's $4.5 billion — and the gap widened rather than closed.",
                zh: "美國私人 AI 投資達 1,091 億美元，幾乎是中國 93 億美元的 12 倍、英國 45 億美元的 24 倍 — 而且這道差距是擴大而非縮小。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "78% of organizations now use AI in at least one business function, up from 55% in a single year, and generative AI use more than doubled from 33% to 71%.",
                zh: "如今有 78% 的組織在至少一項業務職能中使用 AI，一年之內從 55% 上升；生成式 AI 的使用率則從 33% 翻倍以上到 71%。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "AI raises productivity by 10% to 45% depending on the task — and consistently helps the least experienced workers most, closing rather than widening skill gaps.",
                zh: "AI 依任務不同可提升 10% 到 45% 的生產力 — 而且一貫地對經驗最少的工作者幫助最大，縮小而非擴大技能落差。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "China installed 276,300 industrial robots in 2023, six times Japan's total and 7.3 times the United States' — more than the rest of the world combined.",
                zh: "2023 年中國安裝了 276,300 台工業機器人，是日本的六倍、美國的 7.3 倍 — 比全世界其餘國家加起來還多。" },
        by: "Chapter 4 · Economy" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav: { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read the full Economy chapter", zh: "閱讀完整的經濟章節" },
    text:  { en: "Chapter 4 (sections 4.1–4.5) — the 2024 timeline, jobs, investment, corporate activity and robot deployments — with every figure and citation is free from Stanford HAI.",
             zh: "第 4 章(4.1–4.5 各節) — 2024 年大事紀、就業、投資、企業活動與機器人部署 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { label: { en: "Open the AI Index Report 2025 →", zh: "前往 AI 指數報告 2025 →" },
             url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" }
  }
];

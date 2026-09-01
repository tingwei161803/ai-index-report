/* =========================================================================
   Economy — deep dive · economy.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2024, Chapter 4
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   The 2024 edition reports on calendar year 2023. Chapter 4 follows AI
   through the economy: 4.2 Jobs, 4.3 Investment, 4.4 Corporate Activity and
   4.5 Robot Installations (whose IFR data still runs a year behind, ending
   in 2022). The year splits in two — overall AI investment fell for a second
   straight year while generative AI funding went vertical.
   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_CHAPTER = "economy";

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Economy · a chapter deep dive", zh: "經濟專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The money walked out. Generative AI didn’t get the memo.",
                zh: "資金退場了，生成式 AI 卻沒收到通知" },
    subtitle: { en: "Chapter 4 of the AI Index 2024 tracks AI through the economy in 2023, and almost every headline number points down: corporate investment fell for a second year, private investment fell with it, and AI’s share of American job postings shrank. Cutting straight across that trend is one line going vertical — generative AI funding — and a first real body of evidence that AI raises worker output. The numbers:",
                zh: "AI 指數 2024 第 4 章追蹤 2023 年的 AI 與經濟，幾乎每個頭條數字都朝下：企業投資連兩年下滑，私人投資跟著下滑，AI 職缺在全美職缺中的占比也縮水。橫切這個趨勢的，是一條垂直往上的線 — 生成式 AI 募資 — 以及第一批真正證明 AI 能提升工作產出的研究。先看數字：" },
    stats: [
      { label: { en: "private investment in generative AI in 2023 (US$ billions, ~9× 2022)", zh: "2023 年生成式 AI 私人投資(十億美元，約為 2022 年的 9 倍)" }, value: 25.2 },
      { label: { en: "US private AI investment (US$ billions) — 8.7× China’s 7.8", zh: "美國私人 AI 投資(十億美元) — 是中國 78 億的 8.7 倍" }, value: 67.2 },
      { label: { en: "global corporate AI investment (US$ billions, down ~20%)", zh: "全球企業 AI 投資總額(十億美元，下滑約 20%)" }, value: 189.2 },
      { label: { en: "newly funded AI companies worldwide in 2023, up 40.6%", zh: "2023 年全球新獲資金的 AI 公司數，成長 40.6%" }, value: 1812 },
      { label: { en: "% of organizations using AI in at least one function (2022: 50%)", zh: "% 至少在一項職能中導入 AI 的組織(2022 年為 50%)" }, value: 55 },
      { label: { en: "Fortune 500 earnings calls that mentioned AI (2022: 266)", zh: "提到 AI 的財星 500 大法說會場次(2022 年為 266)" }, value: 394 }
    ]
  },

  /* ------------------------------------------------------- 4.3 INVESTMENT */
  {
    type: "prose",
    id: "investment",
    nav:      { en: "4.3 Investment", zh: "4.3 投資" },
    title:    { en: "4.3 — Two years of decline, and one line going straight up",
                zh: "4.3 — 連續兩年下滑，以及一條筆直往上的線" },
    subtitle: { en: "Global corporate AI investment fell to $189.2 billion in 2023, roughly 20% below 2022, with mergers and acquisitions taking the worst of it at -31.2%. Private investment slipped 7.2% to $96.0 billion, its second consecutive annual decline. Generative AI went the other way entirely.",
                zh: "2023 年全球企業 AI 投資降至 1,892 億美元，約比 2022 年少兩成，其中併購跌得最重，減少 31.2%。私人投資下滑 7.2% 至 960 億美元，是連續第二年減少。生成式 AI 則完全走在反方向。" },
    blocks: [
      { type: "h3",
        text: { en: "Generative AI takes more than a quarter of everything", zh: "生成式 AI 吃下四分之一以上" } },
      { type: "p",
        text: { en: "Generative AI attracted $25.2 billion in private investment in 2023 — nearly nine times the 2022 total and about 30 times the 2019 figure. That one sector accounted for more than a quarter of all AI-related private investment for the year. The money went to the model builders: OpenAI, Anthropic, Hugging Face and Inflection all reported substantial rounds. The number of newly funded generative AI companies rose to 99, up from 56 in 2022 and 31 in 2019.",
                zh: "2023 年生成式 AI 吸引了 252 億美元的私人投資 — 接近 2022 年的九倍，約為 2019 年的 30 倍。光是這個領域，就占了全年所有 AI 相關私人投資的四分之一以上。錢流向的是造模型的人：OpenAI、Anthropic、Hugging Face 與 Inflection 都完成了可觀的募資輪。新獲資金的生成式 AI 公司增至 99 家，高於 2022 年的 56 家與 2019 年的 31 家。" } },
      { type: "h3",
        text: { en: "More companies, smaller cheques", zh: "更多公司，更小的支票" } },
      { type: "ul",
        items: {
          en: ["The count of newly funded AI companies worldwide jumped to 1,812, a 40.6% increase over the previous year — but the average private investment event barely moved, from $31.3 million in 2022 to $32.4 million in 2023.",
               "Deal counts fell in almost every size band. The only categories that grew were the biggest: rounds over $1 billion rose from 7 to 9, and rounds between $500 million and $1 billion from 6 to 7. Below that, $100–500 million fell from 187 to 120, $50–100 million from 260 to 182, and under $50 million from 2,840 to 2,641. Total events dropped from 3,994 to 3,639.",
               "By focus area, the leaders in 2023 were AI infrastructure, research and governance ($18.3 billion), NLP and customer support ($8.1 billion), and data management and processing ($5.5 billion). Infrastructure and data management were among the few areas that grew at all.",
               "Medical and healthcare and NLP/customer support both peaked in 2021 and have declined since — still substantial in absolute terms, but no longer where the new money goes.",
               "Zoom out and the picture reverses: over the past decade, AI-related corporate investment has grown thirteenfold."],
          zh: ["全球新獲資金的 AI 公司數躍升至 1,812 家，較前一年成長 40.6% — 但平均每筆私人投資案幾乎沒動，從 2022 年的 3,130 萬美元微增到 2023 年的 3,240 萬美元。",
               "交易件數在幾乎每個級距都減少，只有最大的兩個級距成長：超過 10 億美元的輪次從 7 筆增為 9 筆，5 億至 10 億美元從 6 筆增為 7 筆。往下看，1 億至 5 億美元從 187 筆掉到 120 筆，5,000 萬至 1 億美元從 260 筆掉到 182 筆，5,000 萬美元以下從 2,840 筆掉到 2,641 筆。總件數由 3,994 降至 3,639。",
               "以領域來看，2023 年拿到最多錢的是 AI 基礎設施、研究與治理(183 億美元)，自然語言處理與客戶支援(81 億美元)，以及資料管理與處理(55 億美元)。基礎設施與資料管理是少數仍在成長的領域。",
               "醫療與健康照護、自然語言處理與客戶支援都在 2021 年見頂，之後持續下滑 — 絕對金額依然可觀，但新錢已經不往那裡去了。",
               "把鏡頭拉遠，結論就反過來了：過去十年間，AI 相關的企業投資成長了十三倍。"]
        } },
      { type: "h3",
        text: { en: "The United States pulls further ahead", zh: "美國持續拉開距離" } },
      { type: "p",
        text: { en: "US private AI investment reached $67.2 billion in 2023, roughly 8.7 times the next highest country, China ($7.8 billion), and 17.8 times the United Kingdom ($3.8 billion). Germany ($1.91 billion) and Sweden ($1.89 billion) came next. The gap is widening rather than closing: since 2022, private AI investment fell 44.2% in China and 14.1% in the European Union plus the United Kingdom, while the United States rose 22.1%.",
                zh: "2023 年美國私人 AI 投資達 672 億美元，約為第二名中國(78 億美元)的 8.7 倍、英國(38 億美元)的 17.8 倍。其後是德國(19.1 億美元)與瑞典(18.9 億美元)。差距是在擴大而非縮小：自 2022 年以來，中國的私人 AI 投資減少 44.2%，歐盟加英國減少 14.1%，美國卻成長 22.1%。" } },
      { type: "ul",
        items: {
          en: ["Aggregated since 2013 the ranking is identical: the United States $335.2 billion, China $103.7 billion, the United Kingdom $22.3 billion, then Israel ($12.8 billion), Canada ($10.6 billion) and Germany ($10.4 billion).",
               "Company formation follows the same map. In 2023 the United States produced 897 newly funded AI companies, against China’s 122 and the United Kingdom’s 104.",
               "Over the decade the US total (5,509) is around 3.8 times China’s (1,446) and 7.6 times the United Kingdom’s (727)."],
          zh: ["自 2013 年累計，排名完全一樣：美國 3,352 億美元、中國 1,037 億美元、英國 223 億美元，其後是以色列(128 億美元)、加拿大(106 億美元)與德國(104 億美元)。",
               "公司的誕生也照著同一張地圖走。2023 年美國有 897 家新獲資金的 AI 公司，中國 122 家、英國 104 家。",
               "過去十年，美國的總數(5,509 家)約為中國(1,446 家)的 3.8 倍、英國(727 家)的 7.6 倍。"]
        } }
    ]
  },

  /* --------------------------------------------- private investment chart */
  {
    type: "bars",
    id: "invest-geo",
    nav:      { en: "By country", zh: "各國投資" },
    title:    { en: "Private AI investment in 2023 had essentially one destination",
                zh: "2023 年的私人 AI 投資基本上只有一個去處" },
    subtitle: { en: "Private investment in AI by geographic area in 2023, in US$ billions. The United States took roughly 8.7 times China’s total and 17.8 times the United Kingdom’s.",
                zh: "2023 年各地區的私人 AI 投資(十億美元)。美國的金額約為中國的 8.7 倍、英國的 17.8 倍。" },
    series: [
      { label: { en: "United States", zh: "美國" },   value: 67.22 },
      { label: { en: "China", zh: "中國" },           value: 7.76 },
      { label: { en: "United Kingdom", zh: "英國" },  value: 3.78 },
      { label: { en: "Germany", zh: "德國" },         value: 1.91 },
      { label: { en: "Sweden", zh: "瑞典" },          value: 1.89 }
    ]
  },

  /* ------------------------------------------------------------ 4.2 JOBS */
  {
    type: "prose",
    id: "jobs",
    nav:      { en: "4.2 Jobs", zh: "4.2 就業" },
    title:    { en: "4.2 — Fewer AI job postings, and one skill that appeared out of nowhere",
                zh: "4.2 — AI 職缺變少了，卻冒出一個憑空出現的技能" },
    subtitle: { en: "AI-related roles fell from 2.0% of all American job postings in 2022 to 1.6% in 2023. Lightcast reads that as a hiring pullback at a handful of large employers rather than as cooling interest in AI — and underneath the total, one skill cluster grew more than tenfold.",
                zh: "AI 相關職缺占全美職缺的比例，從 2022 年的 2.0% 降到 2023 年的 1.6%。Lightcast 認為這反映的是少數大型雇主整體縮手，而不是市場對 AI 失去興趣 — 而在總量底下，有一個技能群成長超過十倍。" },
    blocks: [
      { type: "h3",
        text: { en: "Who is posting, and where", zh: "誰在徵才，又徵在哪裡" } },
      { type: "ul",
        items: {
          en: ["By share of all postings, the United States led in 2023 at 1.62%, followed by Spain (1.35%) and Sweden (1.31%). Most countries fell year over year, even though over five years the count of AI postings has risen in many of them.",
               "Lightcast attributes the US drop to top AI employers — Amazon, Deloitte, Capital One, Randstad and Elevance Health among them — scaling back posting counts and shifting their occupational mix. Amazon in 2023 advertised a higher share of delivery driver, packager and mailroom roles, and a lower share of software developer and data scientist roles.",
               "By skill cluster, machine learning stayed the most in-demand at 0.7% of US postings, ahead of artificial intelligence (0.5%) and natural language processing (0.2%). Every cluster Lightcast tracks lost market share except generative AI, which grew by more than a factor of 10.",
               "In raw counts, 15,410 US postings named generative AI as a desired skill, 4,669 mentioned large language modeling and 2,841 named ChatGPT. Within generative AI postings the most cited skill was generative AI itself (60.0%), then large language modeling (18.2%) and ChatGPT (11.1%).",
               "Nearly every sector’s AI posting share fell. Public administration was the exception, up 88.8% to 1.49%, with educational services also rising 6.0%. The leading sectors were still information (4.63%), professional, scientific and technical services (3.33%) and finance and insurance (2.94%).",
               "California posted 70,630 AI jobs — 15.3% of the US total — ahead of Texas (36,413) and Virginia (24,417). As a share of a state’s own postings, the District of Columbia led at 2.7%, then Delaware (2.4%) and Maryland (2.1%)."],
          zh: ["以占全體職缺的比例來看，2023 年美國以 1.62% 居首，其次是西班牙(1.35%)與瑞典(1.31%)。多數國家較前一年下滑，儘管拉長到五年，不少國家的 AI 職缺數其實是增加的。",
               "Lightcast 把美國的下滑歸因於幾家主要 AI 雇主 — 包括 Amazon、Deloitte、Capital One、Randstad 與 Elevance Health — 整體縮減職缺數，並改變了職務組合。以 Amazon 為例，2023 年它張貼了更高比例的送貨、包裝與收發室職缺，軟體開發與資料科學職缺的比例則下降。",
               "以技能群來看，機器學習仍是最搶手的，占美國職缺的 0.7%，其後是人工智慧(0.5%)與自然語言處理(0.2%)。Lightcast 追蹤的每一個技能群市占率都下滑，唯一的例外是生成式 AI，成長超過十倍。",
               "換成絕對數字：15,410 則美國職缺明確把生成式 AI 列為需求技能，4,669 則提到大型語言模型，2,841 則點名 ChatGPT。在生成式 AI 職缺之中，被提及最多的技能就是生成式 AI 本身(60.0%)，接著是大型語言模型(18.2%)與 ChatGPT(11.1%)。",
               "幾乎每個產業的 AI 職缺占比都下降，例外是公共行政，成長 88.8% 至 1.49%，教育服務業也上升 6.0%。占比最高的產業依然是資訊業(4.63%)、專業科學與技術服務業(3.33%)與金融保險業(2.94%)。",
               "加州釋出 70,630 個 AI 職缺 — 占全美 15.3% — 領先德州(36,413 個)與維吉尼亞州(24,417 個)。若看占該州自身職缺的比例，華盛頓特區以 2.7% 居首，其次是德拉瓦州(2.4%)與馬里蘭州(2.1%)。"]
        } },
      { type: "h3",
        text: { en: "Hiring, skills, and where the talent sits", zh: "招聘、技能，以及人才在哪裡" } },
      { type: "ul",
        items: {
          en: ["Relative AI hiring grew fastest in Hong Kong (28.8%), Singapore (18.9%) and Luxembourg (18.9%) — meaning AI hiring rose that much faster than overall hiring in those markets.",
               "Across 2015–2023, the highest relative AI skill penetration was in India (2.8), the United States (2.2) and Germany (1.9). A rate of 2.2 means US LinkedIn members are 2.2 times as likely as the global average to list AI skills across the same set of occupations.",
               "AI talent concentration in 2023 was highest in Israel (1.1%), Singapore (0.9%) and South Korea (0.8%).",
               "Developer pay is a rough proxy for AI-adjacent compensation. In Stack Overflow’s survey of more than 90,000 developers, a cloud infrastructure engineer earned $105,000 globally and $185,000 in the United States. Senior executives topped the table in both, followed by engineering managers — and every surveyed role paid significantly more in the US than elsewhere."],
          zh: ["相對 AI 招聘成長最快的是香港(28.8%)、新加坡(18.9%)與盧森堡(18.9%) — 意思是在這些市場，AI 招聘的成長速度比整體招聘快上這麼多。",
               "2015 至 2023 年間，相對 AI 技能滲透率最高的是印度(2.8)、美國(2.2)與德國(1.9)。2.2 的意思是，在同一組職業中，美國 LinkedIn 會員列出 AI 技能的機率是全球平均的 2.2 倍。",
               "2023 年 AI 人才濃度最高的是以色列(1.1%)、新加坡(0.9%)與南韓(0.8%)。",
               "開發者薪資可以粗略代表 AI 周邊人才的行情。在 Stack Overflow 超過 90,000 名開發者的調查中，雲端基礎架構工程師的全球平均年薪為 105,000 美元，在美國則是 185,000 美元。全球與美國的薪資之冠都是高階主管，其次是工程經理 — 而受訪的每一種職務，在美國的薪資都明顯高於其他地區。"]
        } }
    ]
  },

  /* ------------------------------------------------------- job share chart */
  {
    type: "bars",
    id: "jobs-share",
    nav:      { en: "AI job postings", zh: "職缺占比" },
    title:    { en: "AI is a bigger slice of US hiring than anywhere else — and the slice got thinner",
                zh: "AI 在美國招募中的占比高過任何國家 — 而這塊占比正在變薄" },
    subtitle: { en: "AI job postings as a percentage of all job postings, 2023. The US figure is down from 2.0% a year earlier, and most tracked countries fell too.",
                zh: "2023 年 AI 職缺占全體職缺的百分比。美國的數字比一年前的 2.0% 下滑，多數受追蹤國家也同步下降。" },
    series: [
      { label: { en: "United States", zh: "美國" },   value: 1.62 },
      { label: { en: "Spain", zh: "西班牙" },         value: 1.35 },
      { label: { en: "Sweden", zh: "瑞典" },          value: 1.31 },
      { label: { en: "Belgium", zh: "比利時" },       value: 1.20 },
      { label: { en: "Netherlands", zh: "荷蘭" },     value: 1.12 }
    ]
  },

  /* ----------------------------------------------- 4.4 CORPORATE ACTIVITY */
  {
    type: "prose",
    id: "adoption",
    nav:      { en: "4.4 Adoption", zh: "4.4 企業採用" },
    title:    { en: "4.4 — Adoption crept up, the savings showed up, and every boardroom started saying it out loud",
                zh: "4.4 — 採用率緩步上升，省下的錢開始出現，而每間會議室都把它掛在嘴上" },
    subtitle: { en: "55% of organizations surveyed by McKinsey used AI in at least one business unit or function in 2023, up from 50% in 2022 and 20% in 2017. Generative AI, asked about for the first time, was already at 33%.",
                zh: "麥肯錫調查的組織中，有 55% 在 2023 年至少於一個業務單位或職能導入 AI，高於 2022 年的 50% 與 2017 年的 20%。首次納入調查的生成式 AI，採用率已經來到 33%。" },
    blocks: [
      { type: "p",
        text: { en: "Every surveyed region reported higher AI adoption than in 2022. Europe grew fastest at 9 percentage points, Greater China rose 7, and North America stayed the overall leader. On generative AI specifically, North America leads at 40% against 33% worldwide, with Europe and Greater China both at 31% and Asia-Pacific at 30%.",
                zh: "每個受訪地區的 AI 採用率都高於 2022 年。歐洲成長最快，增加 9 個百分點，大中華區成長 7 個百分點，北美仍是整體領先者。單看生成式 AI，北美以 40% 領先全球平均的 33%，歐洲與大中華區皆為 31%，亞太為 30%。" } },
      { type: "h3",
        text: { en: "What it is actually being used for", zh: "AI 實際上被拿來做什麼" } },
      { type: "ul",
        items: {
          en: ["By function, AI shows up most in product and/or service development (24% of respondents), marketing and sales (23%) and service operations (23%). Generative AI specifically clusters in marketing and sales (14%), product and service development (13%) and service operations (10%).",
               "The largest year-over-year gains were in marketing and sales (+18 percentage points), product and service development (+14) and service operations (+4). Strategy and corporate finance went the other way at -12 points, risk at -9 and human resources at -2.",
               "Across all industries, the most embedded AI capabilities were natural language text understanding (30%), robotic process automation (30%) and virtual agents (30%). Inside financial services, robotic process automation reached 46%.",
               "The single heaviest industry-and-function combination was product and/or service development in tech, media and telecom at 44%, followed by service operations (36%) and marketing and sales (36%) in the same sector.",
               "The most common generative AI use cases are narrow: drafting text documents (9%), personalized marketing (8%), summarizing text documents (8%) and creating images or video (8%). Most of the leading cases sit inside marketing and sales."],
          zh: ["以職能來看，AI 最常出現在產品與服務開發(24% 的受訪者)、行銷與業務(23%)與服務營運(23%)。生成式 AI 則集中在行銷與業務(14%)、產品與服務開發(13%)與服務營運(10%)。",
               "年增幅最大的是行銷與業務(+18 個百分點)、產品與服務開發(+14)與服務營運(+4)。反向走的是策略暨企業財務(-12 個百分點)、風險(-9)與人力資源(-2)。",
               "跨所有產業來看，最常被嵌入的 AI 能力是自然語言文字理解(30%)、機器人流程自動化(30%)與虛擬客服(30%)。在金融服務業內部，機器人流程自動化更達到 46%。",
               "單一產業加職能的最高組合，是科技、媒體與電信業的產品與服務開發，達 44%，其次是同產業的服務營運(36%)與行銷業務(36%)。",
               "最常見的生成式 AI 使用情境都很局部：草擬文件初稿(9%)、個人化行銷(8%)、摘要文件(8%)與生成圖像或影片(8%)。領先的情境多半落在行銷與業務之內。"]
        } },
      { type: "h3",
        text: { en: "The returns showed up in the survey", zh: "回報開始出現在調查裡" } },
      { type: "p",
        text: { en: "Averaged across all activities, 42% of respondents reported cost decreases from AI and 59% reported revenue increases — a 10-point rise in cost decreases and a 4-point fall in revenue increases against the previous year. Cost savings were reported most often in manufacturing (55%), service operations (54%) and risk (44%); revenue gains most often in manufacturing (66%), marketing and sales (65%) and risk (64%). The magnitudes stayed modest: most reported cost decreases were under 10%, and the most common revenue increase was 5% or less.",
                zh: "以所有活動平均計算，42% 的受訪者回報 AI 帶來成本下降，59% 回報營收上升 — 成本下降的比例比前一年多了 10 個百分點，營收上升的比例則少了 4 個百分點。回報成本節省最多的是製造(55%)、服務營運(54%)與風險(44%)；回報營收成長最多的是製造(66%)、行銷與業務(65%)與風險(64%)。幅度依然不大：多數回報的成本下降低於 10%，最常見的營收成長則在 5% 以內。" } },
      { type: "h3",
        text: { en: "Developers were already living in it", zh: "開發者早就住在裡面了" } },
      { type: "p",
        text: { en: "Stack Overflow surveyed more than 90,000 developers in May 2023. GitHub Copilot was the most used AI developer tool at 56.0%, far ahead of Tabnine (11.7%) and AWS CodeWhisperer (4.9%); ChatGPT was the most used AI search tool at 83.3%, ahead of Bing AI (18.8%) and WolframAlpha (11.2%). 82.6% of developers regularly used AI to write code, 48.9% for debugging and getting help, and 34.4% for documentation. Testing was the visible gap: only 23.9% used AI for it, while 55.2% said they wanted to. Asked what they got out of the tools, developers named increased productivity (32.8%), faster learning (25.2%) and greater efficiency (25.0%).",
                zh: "Stack Overflow 在 2023 年 5 月訪問了超過 90,000 名開發者。最多人用的 AI 開發工具是 GitHub Copilot，達 56.0%，遠高於 Tabnine(11.7%)與 AWS CodeWhisperer(4.9%)；最多人用的 AI 搜尋工具是 ChatGPT，達 83.3%，其次是 Bing AI(18.8%)與 WolframAlpha(11.2%)。82.6% 的開發者固定用 AI 寫程式，48.9% 用來除錯與求助，34.4% 用來寫文件。明顯的空缺是測試：只有 23.9% 目前拿 AI 做測試，卻有 55.2% 表示想這麼做。問到用這些工具得到什麼，開發者的答案是生產力提升(32.8%)、學得更快(25.2%)與效率更好(25.0%)。" } },
      { type: "h3",
        text: { en: "And the boardrooms started saying it out loud", zh: "而會議室開始把它說出口" } },
      { type: "p",
        text: { en: "Quid analyzed every 2023 Fortune 500 earnings call. AI was mentioned in 394 of them — nearly 80% of the Fortune 500 — up from 266 in 2022 and roughly double the 2018 level. The dominant theme was generative AI, appearing in 19.7% of all earnings calls, against 0.31% a year earlier. Next came investments in AI, expansion of AI capabilities and AI growth initiatives (15.2%), then company and brand AIs (7.6%).",
                zh: "Quid 分析了 2023 年所有財星 500 大企業的法說會。其中 394 場提到 AI — 接近財星 500 大的八成 — 高於 2022 年的 266 場，約為 2018 年的兩倍。最主要的主題是生成式 AI，出現在 19.7% 的法說會中，而前一年只有 0.31%。其次是 AI 投資、AI 能力擴張與 AI 成長計畫(15.2%)，再來是公司或品牌自有的 AI(7.6%)。" } }
    ]
  },

  /* ------------------------------------------------- productivity evidence */
  {
    type: "cards",
    id: "productivity",
    nav:      { en: "Productivity", zh: "生產力" },
    title:    { en: "The year the productivity question finally got answers",
                zh: "生產力這道題終於有答案的一年" },
    subtitle: { en: "For years the evidence on AI and worker output was thin, simply because so few people used AI at work. In 2023 several rigorous studies landed at once — and they largely agree, including on who benefits most and where the trap is.",
                zh: "多年來，AI 與工作產出之間的證據始終薄弱，原因很單純：職場上真正在用 AI 的人太少。2023 年幾項嚴謹研究同時落地 — 而它們大致互相印證，包括「誰受益最多」以及「陷阱在哪裡」。" },
    items: [
      { slug: "copilot-speed",
        title:   { en: "Copilot users finished tasks 26%–73% faster", zh: "Copilot 使用者的任務完成時間少了 26%–73%" },
        summary: { en: "A Microsoft meta-review of studies covering Microsoft Copilot and GitHub Copilot found users completed tasks in 26% to 73% less time than workers without AI access.",
                   zh: "微軟一份彙整 Microsoft Copilot 與 GitHub Copilot 相關研究的統合回顧發現，使用者完成任務所花的時間，比沒有 AI 的工作者少了 26% 到 73%。" },
        tags: ["productivity"],
        overview: { en: "The review (Cambon et al., 2023) pooled separate studies of two different tools: Microsoft Copilot, a general LLM-based productivity assistant, and GitHub Copilot, a code-writing assistant. The range is wide because the tasks are: a Copilot information-retrieval study sat at the top of the range at 73% and a Copilot-in-meetings study at the bottom at 26%, with a GitHub Copilot study at 44% and an LLM-based search study at 47%.",
                   zh: "這份回顧(Cambon 等人，2023)彙整了兩種不同工具的個別研究：Microsoft Copilot 是通用型的大型語言模型生產力助理，GitHub Copilot 則是寫程式的助手。區間之所以這麼寬，是因為任務本身差異很大：Copilot 資訊檢索研究落在區間頂端的 73%，Copilot 會議研究在底端的 26%，GitHub Copilot 研究為 44%，大型語言模型搜尋研究為 47%。" } },
      { slug: "consultants-gpt4",
        title:   { en: "Consultants with GPT-4 did better work, faster", zh: "用 GPT-4 的顧問做得更快，也做得更好" },
        summary: { en: "A Harvard Business School study found consultants with GPT-4 access beat a control group by 12.2% on productivity, 25.1% on speed and 40.0% on quality.",
                   zh: "哈佛商學院的研究發現，有 GPT-4 可用的顧問在生產力上勝過對照組 12.2%、速度快 25.1%、品質高 40.0%。" },
        tags: ["consulting"],
        overview: { en: "Dell’Acqua et al. (2023) gave one group of consultants GPT-4 access on a set of consulting tasks and compared them with a control group without it. Quality showed the largest effect of the three measures at 40.0% — which matters, because quality is exactly the dimension sceptics of AI assistance tend to question. Productivity rose 12.2% and speed 25.1%.",
                   zh: "Dell’Acqua 等人(2023)讓一組顧問在一系列顧問任務中使用 GPT-4，並與沒有 AI 的對照組比較。三項指標中效果最大的是品質，達 40.0% — 這一點很重要，因為品質正是質疑 AI 協助的人最常挑戰的面向。生產力提升 12.2%，速度提升 25.1%。" } },
      { slug: "call-center",
        title:   { en: "Support agents handled 14.2% more calls an hour", zh: "客服人員每小時多處理 14.2% 的案件" },
        summary: { en: "National Bureau of Economic Research work found call-center agents using AI handled 14.2% more calls per hour than agents without it.",
                   zh: "美國國家經濟研究局的研究發現，使用 AI 的客服中心人員，每小時處理的案件數比沒用 AI 的人多 14.2%。" },
        tags: ["support"],
        overview: { en: "Brynjolfsson et al. (2023) measured hourly chats per customer support agent: 2.97 for agents using AI against 2.60 for those not using it. It is one of the cleanest field measurements in the chapter, because the output is directly countable and the task repeats thousands of times a day.",
                   zh: "Brynjolfsson 等人(2023)量測的是每位客服人員每小時處理的對話數：使用 AI 者為 2.97 則，未使用者為 2.60 則。這是本章中最乾淨的實地量測之一，因為產出可以直接計數，而且任務一天要重複上千次。" } },
      { slug: "skill-gap",
        title:   { en: "The gains land hardest on the least experienced", zh: "獲益最大的，是經驗最少的人" },
        summary: { en: "In the same consulting experiment, bottom-half-skilled participants improved 43.0% with AI while top-half participants improved 16.5%. AI narrowed the distance between them.",
                   zh: "在同一項顧問實驗中，技能位於後半段的參與者靠 AI 提升了 43.0%，前半段的參與者提升 16.5%。AI 縮短了兩者之間的距離。" },
        tags: ["skills"],
        overview: { en: "Scores were measured on a 1–10 scale across a set of tasks. Lower-skilled participants rose from 4.05 to 5.79; higher-skilled participants from 5.20 to 6.06. Higher-skilled workers using AI still outperformed lower-skilled workers using AI — the ranking did not flip — but the gap between the two groups was markedly smaller with AI than without it.",
                   zh: "分數以 1 到 10 分的量表在一組任務上量測。技能後半段的參與者從 4.05 分升到 5.79 分，前半段的參與者從 5.20 分升到 6.06 分。使用 AI 的高技能工作者依然勝過使用 AI 的低技能工作者 — 排序沒有翻轉 — 但有 AI 時，兩組之間的差距明顯比沒有 AI 時小。" } },
      { slug: "overreliance",
        title:   { en: "Trusting the good AI too much made recruiters worse", zh: "太信任「好用的 AI」，反而讓招募人員變差" },
        summary: { en: "Recruiters given any AI assistance gained 0.6 accuracy points — but those given a high-performing AI scored 1.08 points below those given an AI known to make errors.",
                   zh: "拿到任何 AI 協助的招募人員，準確度提升 0.6 分 — 但拿到「高效能 AI」的人，分數比拿到「已知會出錯的 AI」的人低了 1.08 分。" },
        tags: ["risk"],
        overview: { en: "Dell’Acqua (2023) studied professional recruiters reviewing résumés. Receiving AI advice of any kind improved task accuracy by 0.6 points against no assistance. But recruiters told their AI was high-performing did worse than recruiters told theirs was capable yet error-prone, a difference of -1.08 points. The proposed explanation is complacency: the ‘good AI’ group became overly trusting and stopped scrutinizing the output, while the ‘bad AI’ group stayed vigilant.",
                   zh: "Dell’Acqua(2023)研究的是審閱履歷的專業招募人員。相較於完全沒有協助，得到任何形式的 AI 建議都讓任務準確度提升 0.6 分。但被告知手上 AI 高效能的招募人員，表現卻比被告知 AI 雖然能用卻容易出錯的人差，差距為 -1.08 分。研究提出的解釋是自滿：「好 AI」組過度信任、不再檢查輸出，「壞 AI」組則始終保持警覺。" } }
    ]
  },

  /* ---------------------------------------------------------- robot chart */
  {
    type: "bars",
    id: "robots",
    nav:      { en: "Robots", zh: "機器人" },
    title:    { en: "China installs more industrial robots than the rest of the world combined",
                zh: "中國安裝的工業機器人，比世界其餘國家加起來還多" },
    subtitle: { en: "Industrial robots installed in 2022, in thousands — the IFR data runs a year behind the rest of the chapter. Worldwide installations rose 5.1% to 553,000 units and the operational stock reached 3,904,000. China’s share of global installations was 52.4%, up from 20.8% in 2013.",
                zh: "2022 年安裝的工業機器人(千台) — IFR 的資料比本章其餘部分晚一年。全球安裝量成長 5.1% 至 553,000 台，運轉存量達 3,904,000 台。中國占全球安裝量的 52.4%，高於 2013 年的 20.8%。" },
    series: [
      { label: { en: "China", zh: "中國" },           value: 290.3 },
      { label: { en: "Japan", zh: "日本" },           value: 50.4 },
      { label: { en: "United States", zh: "美國" },   value: 39.5 },
      { label: { en: "South Korea", zh: "南韓" },     value: 31.7 },
      { label: { en: "Germany", zh: "德國" },         value: 25.6 }
    ]
  },

  /* ----------------------------------------------------------- ACCORDION */
  {
    type: "accordion",
    id: "questions",
    nav:      { en: "Questions", zh: "問答" },
    title:    { en: "Six questions the numbers answer", zh: "數字回答的六個問題" },
    subtitle: { en: "What Chapter 4 can and cannot tell you about AI and the economy in 2023.",
                zh: "關於 2023 年的 AI 與經濟，第 4 章能告訴你什麼、又不能告訴你什麼。" },
    qa: [
      { q: { en: "Did AI investment really fall in 2023?", zh: "2023 年的 AI 投資真的下滑了嗎？" },
        a: { en: "Yes, on two different lines — and it depends which one you read. Total global corporate AI investment fell to $189.2 billion, about 20% below 2022, with mergers and acquisitions down 31.2%. Private investment fell 7.2% to $96.0 billion, a second consecutive annual decline, though a shallower one than the drop from 2021 to 2022. But the number of newly funded AI companies rose 40.6% to 1,812, and generative AI alone took in $25.2 billion, more than a quarter of all AI-related private investment. Over the decade, AI-related corporate investment has still grown thirteenfold.",
             zh: "是的，兩條線都在跌 — 但看哪一條，結論會不太一樣。全球企業 AI 投資總額降至 1,892 億美元，約比 2022 年少兩成，其中併購減少 31.2%。私人投資下滑 7.2% 至 960 億美元，是連續第二年下降，不過跌幅小於 2021 到 2022 年那一次。但新獲資金的 AI 公司數成長 40.6% 至 1,812 家，光是生成式 AI 就吸走 252 億美元，占所有 AI 相關私人投資的四分之一以上。而拉長到十年來看，AI 相關的企業投資仍成長了十三倍。" } },
      { q: { en: "Why did AI job postings drop?", zh: "AI 職缺為什麼變少了？" },
        a: { en: "Not because employers stopped wanting AI. Lightcast attributes the fall from 2.0% to 1.6% of US postings to top AI employers — Amazon, Deloitte, Capital One, Randstad and Elevance Health among them — cutting their overall posting counts, and to a shift in what they posted. Amazon in 2023 advertised a higher share of sales delivery driver, packager and mailroom roles and a lower share of software developer and data scientist roles. Underneath the aggregate, generative AI was the only skill cluster Lightcast tracks that gained market share, growing by more than a factor of 10, with 15,410 US postings naming it explicitly. Nearly every sector fell; public administration was the exception, up 88.8%.",
             zh: "不是因為雇主不想要 AI 了。Lightcast 把美國職缺占比從 2.0% 掉到 1.6% 的原因，歸在幾家主要 AI 雇主 — 包括 Amazon、Deloitte、Capital One、Randstad 與 Elevance Health — 整體縮減職缺數，以及他們張貼的職務組合改變。Amazon 在 2023 年張貼了更高比例的送貨、包裝與收發室職務，軟體開發與資料科學職務則變少。在總量底下，生成式 AI 是 Lightcast 追蹤的技能群中唯一市占率上升的，成長超過十倍，有 15,410 則美國職缺明確點名它。幾乎每個產業都下滑，例外是公共行政，成長 88.8%。" } },
      { q: { en: "Is AI actually making workers more productive?", zh: "AI 真的讓工作者更有生產力嗎？" },
        a: { en: "2023 was the first year with enough rigorous studies to answer. Copilot users completed tasks in 26% to 73% less time. Consultants with GPT-4 gained 12.2% in productivity, 25.1% in speed and 40.0% in quality. Call-center agents using AI handled 14.2% more calls per hour, 2.97 hourly chats against 2.60. Law students with GPT-4 improved on both work quality and time efficiency across a range of legal tasks, contract drafting most of all — although the report notes that LLM hallucinations are reported as especially pervasive in legal work. The consistent finding across studies is that lower-skilled workers gain most: 43.0% against 16.5% in the consulting experiment. The consistent caveat is oversight.",
             zh: "2023 年是第一個有足夠嚴謹研究可以回答的年份。Copilot 使用者完成任務的時間少了 26% 到 73%。用 GPT-4 的顧問生產力提升 12.2%、速度提升 25.1%、品質提升 40.0%。使用 AI 的客服人員每小時多處理 14.2% 的案件，每小時 2.97 則對話，對照組為 2.60 則。使用 GPT-4 的法律系學生在多項法律任務上，工作品質與時間效率同時改善，尤以合約草擬最明顯 — 不過報告也提醒，大型語言模型的幻覺在法律任務中被回報得特別普遍。跨研究一致的發現是：低技能工作者受益最多，顧問實驗中是 43.0% 對 16.5%。而一致的但書，是必須有人盯著。" } },
      { q: { en: "What do the forecasts say?", zh: "各種預測怎麼說？" },
        a: { en: "McKinsey projected that generative AI could raise high-tech industry revenue by 4.8% to 9.3% — an extra $240 billion to $460 billion — with banking next at 2.8% to 4.7% ($200 billion to $340 billion), then pharmaceuticals and medical products, and education. Goldman Sachs projected global productivity growth of 1.0% to 1.5% over 10-year periods, with Hong Kong, Israel and Japan especially well-positioned. On headcount, executives expect the sharpest reductions in service operations (54% anticipate a decrease), supply chain management (45%) and human resources (41%). Asked about their own employee numbers, 30% of respondents expect little or no change, 25% expect a decrease of 3%–10%, and 12% expect an increase of 3% or more — while 38% expect to reskill more than a fifth of their workforce.",
             zh: "麥肯錫推估，生成式 AI 可讓高科技產業營收成長 4.8% 到 9.3% — 也就是多出 2,400 億至 4,600 億美元 — 其次是銀行業的 2.8% 到 4.7%(2,000 億至 3,400 億美元)，再來是製藥與醫療產品，以及教育。高盛則推估全球生產力在十年期間可成長 1.0% 到 1.5%，其中香港、以色列與日本的條件特別好。在人力方面，高階主管認為縮減最劇烈的職能是服務營運(54% 預期減少)、供應鏈管理(45%)與人力資源(41%)。問到自家員工數的變化，30% 的受訪者預期沒什麼改變，25% 預期減少 3%–10%，12% 預期增加 3% 以上 — 而有 38% 預期要為超過五分之一的員工進行技能重訓。" } },
      { q: { en: "What are companies telling investors?", zh: "企業對投資人說了什麼？" },
        a: { en: "A great deal more than a year earlier. AI came up in 394 Fortune 500 earnings calls in 2023 — nearly 80% of the list — up from 266 in 2022 and roughly double the 2018 count. The dominant theme was generative AI, mentioned in 19.7% of all calls against 0.31% the year before. Next came investments in AI, expansion of AI capabilities and growth initiatives (15.2%), then company and brand AIs (7.6%). The survey data suggests the operational reality is more modest: 42% of organizations reported cost decreases and 59% revenue increases, most of them under 10% and 5% respectively.",
             zh: "比一年前多得多。2023 年有 394 場財星 500 大法說會提到 AI — 接近整份榜單的八成 — 高於 2022 年的 266 場，約為 2018 年的兩倍。最主要的主題是生成式 AI，出現在 19.7% 的法說會中，前一年只有 0.31%。其次是 AI 投資、AI 能力擴張與成長計畫(15.2%)，再來是公司或品牌自有的 AI(7.6%)。調查數據顯示營運端的現實要平實得多：42% 的組織回報成本下降、59% 回報營收上升，而且多數分別低於 10% 與 5%。" } },
      { q: { en: "Are robots part of this story?", zh: "機器人算在這個故事裡嗎？" },
        a: { en: "Yes, though the robot data lags a year behind the rest of the chapter. In 2022, 553,000 industrial robots were installed worldwide, a 5.1% increase and more than triple the 2012 figure, while the operational stock grew to 3,904,000 from 3,479,000. China installed 290,300 of them — 52.4% of the global total, 5.8 times Japan’s 50,400 and 7.4 times the United States’ 39,500. The fastest growth was in Singapore (68%), Turkey (22%) and Mexico (13%); Canada (-24%), Taiwan (-21%) and Thailand (-18%) fell hardest. The mix is shifting too: collaborative robots, built to work next to people rather than instead of them, rose from 2.8% of new installations in 2017 to 9.9% in 2022, and service robot installations rose in every application category except medical robotics. By sector, electrical and electronics led with 157,000 installations and automotive followed with 136,000; by application, handling dominated at 266,000, 3.1 times welding and 4.4 times assembly.",
             zh: "算，只是機器人的資料比本章其餘部分晚一年。2022 年全球安裝了 553,000 台工業機器人，成長 5.1%，是 2012 年的三倍以上，運轉存量則從 3,479,000 台成長至 3,904,000 台。中國安裝了其中的 290,300 台 — 占全球 52.4%，是日本 50,400 台的 5.8 倍、美國 39,500 台的 7.4 倍。成長最快的是新加坡(68%)、土耳其(22%)與墨西哥(13%)；跌得最重的是加拿大(-24%)、台灣(-21%)與泰國(-18%)。組成也在變：設計來與人並肩工作、而非取代人的協作型機器人，占新安裝量的比例從 2017 年的 2.8% 升到 2022 年的 9.9%；服務型機器人的安裝量則在除了醫療機器人以外的每個應用類別都上升。以產業看，電機電子以 157,000 台居首，汽車以 136,000 台居次；以應用看，搬運以 266,000 台獨大，是焊接的 3.1 倍、組裝的 4.4 倍。" } }
    ]
  },

  /* -------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 4 · Economy.",
                zh: "第 4 章「經濟」的頭條發現。" },
    quotes: [
      { text: { en: "Despite a decline in overall AI private investment last year, funding for generative AI surged to reach $25.2 billion. Major players including OpenAI, Anthropic, Hugging Face and Inflection reported substantial fundraising rounds.",
                zh: "儘管去年整體 AI 私人投資下滑，生成式 AI 的募資卻大幅衝高，達到 252 億美元。包括 OpenAI、Anthropic、Hugging Face 與 Inflection 在內的主要業者，都完成了可觀的募資輪。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "In 2023, the United States saw AI investments reach $67.2 billion, nearly 8.7 times more than China, the next highest investor.",
                zh: "2023 年美國的 AI 投資達 672 億美元，幾乎是第二名中國的 8.7 倍。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "In 2022, AI-related positions made up 2.0% of all job postings in America, a figure that decreased to 1.6% in 2023.",
                zh: "2022 年 AI 相關職缺占全美職缺的 2.0%，這個數字在 2023 年降到 1.6%。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "Several studies assessed AI’s impact on labor, suggesting that AI enables workers to complete tasks more quickly and to improve the quality of their output. These studies also demonstrated AI’s potential to bridge the skill gap between low- and high-skilled workers.",
                zh: "多項研究評估了 AI 對勞動的影響，顯示 AI 讓工作者更快完成任務，並提升產出的品質。這些研究也證明 AI 有潛力弭平低技能與高技能工作者之間的落差。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "In 2013, China’s installations accounted for 20.8% of the global total, a share that rose to 52.4% by 2022.",
                zh: "2013 年中國的工業機器人安裝量占全球 20.8%，到 2022 年這個比例已升至 52.4%。" },
        by: "Chapter 4 · Economy" }
    ]
  },

  /* ----------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 4 in full", zh: "閱讀第 4 章原文" },
    text:  { en: "Chapter 4 (sections 4.1–4.5) — the 2023 timeline, jobs, investment, corporate activity and robot installations — with every figure and citation is free from Stanford HAI.",
             zh: "第 4 章(4.1–4.5 各節) — 2023 年大事紀、就業、投資、企業活動與機器人安裝 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

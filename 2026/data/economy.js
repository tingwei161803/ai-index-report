/* =========================================================================
   AI and the Economy — deep dive · economy.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026, Chapter 4
   https://hai.stanford.edu/ai-index/2026-ai-index-report/economy

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 4: 4.1 Year in Review, 4.2 Investment and
   Infrastructure, 4.3 Corporate AI Adoption, 4.4 Jobs, 4.5 Robot Deployments.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "economy";

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Economy · a chapter deep dive", zh: "經濟專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "In 2025, more money flowed into AI than ever before — and faster",
                zh: "2025 年,流入 AI 的資金前所未有地多 — 而且更快" },
    subtitle: { en: "Chapter 4 of the AI Index 2026 follows the money: record investment, the fastest mass-market adoption of any modern technology, and the first uneven ripples in the labor market. The AI economy is scaling quickly — how widely and how fairly that growth becomes real value is still an open question. The numbers:",
                zh: "AI 指數 2026 第 4 章追著錢走:破紀錄的投資、現代史上最快的大眾採用速度,以及勞動市場上第一波不均勻的漣漪。AI 經濟正在快速擴張 — 但這份成長能多廣、多公平地轉化為真實價值,仍是個未解之問。先看數字:" },
    stats: [
      { label: { en: "global corporate AI investment in 2025 (US$ billions, >2× of 2024)", zh: "2025 年全球企業 AI 投資(十億美元,為 2024 的 2 倍多)" }, value: 582 },
      { label: { en: "% growth in private AI investment — now 60% of the total", zh: "% 私人 AI 投資成長 — 如今佔總額 60%" }, value: 128 },
      { label: { en: "US private AI investment in 2025 (US$ billions; 23× China's)", zh: "2025 年美國私人 AI 投資(十億美元;為中國的 23 倍)" }, value: 286 },
      { label: { en: "US consumer surplus from generative AI (US$ billions, up from 112)", zh: "美國生成式 AI 消費者剩餘(十億美元,由 112 上升)" }, value: 172 },
      { label: { en: "% of organizations now using AI (up from prior years)", zh: "% 已使用 AI 的組織(較往年上升)" }, value: 88 },
      { label: { en: "% generative-AI adoption reached within three years", zh: "% 生成式 AI 在三年內達到的採用率" }, value: 53 }
    ]
  },

  /* ----------------------------------------------- 4.2 INVESTMENT (prose) */
  {
    type: "prose",
    id: "investment",
    title:    { en: "4.2 — Investment: bigger, faster, and more concentrated",
                zh: "4.2 — 投資:更大、更快、更集中" },
    subtitle: { en: "Global corporate AI investment more than doubled in 2025, to roughly $582 billion. But the surge is concentrated in a handful of countries, companies, and deals.",
                zh: "2025 年全球企業 AI 投資增加一倍以上,達約 5,820 億美元。但這波熱潮集中在少數國家、少數公司與少數筆交易上。" },
    blocks: [
      { type: "p",
        text: { en: "Private investment grew fastest, at 127.5%, and now accounts for 60% of the total. Generative AI led the surge — growing more than 200% and capturing nearly half of all private AI funding. The number of newly funded AI companies rose about 71%, and billion-dollar funding events nearly doubled, from 15 in 2024 to 28 in 2025.",
                zh: "私人投資成長最快,達 127.5%,如今佔總額的 60%。生成式 AI 帶動了這波熱潮 — 成長超過 200%,並囊括了所有私人 AI 資金的近一半。新獲資金的 AI 公司數量成長約 71%,而十億美元級別的募資案幾乎翻倍,從 2024 年的 15 件增至 2025 年的 28 件。" } },
      { type: "h3",
        text: { en: "A widening US–China gap", zh: "持續擴大的美中差距" } },
      { type: "ul",
        items: {
          en: ["The United States led with nearly $285.9 billion in private AI investment in 2025 — 23.1 times more than China ($12.4 billion) and 48.5 times the United Kingdom ($5.9 billion).",
               "The US also led on entrepreneurial activity, with 1,953 newly funded AI companies, versus 172 in the UK and 161 in China.",
               "Private figures likely understate China's true AI spending: government guidance funds deployed an estimated $184 billion into AI firms between 2000 and 2023.",
               "Infrastructure spending hit records too — major cloud providers accelerated capital expenditure, with Google reporting more than $150 billion in annual capex in 2025."],
          zh: ["美國以 2025 年近 2,859 億美元的私人 AI 投資居首 — 為中國(124 億美元)的 23.1 倍、英國(59 億美元)的 48.5 倍。",
               "美國在創業活動上也領先,共有 1,953 家新獲資金的 AI 公司,而英國為 172 家、中國為 161 家。",
               "私人數字很可能低估了中國真正的 AI 支出:政府引導基金在 2000 至 2023 年間,估計已投入 1,840 億美元到 AI 企業。",
               "基礎設施支出同樣創下紀錄 — 主要雲端供應商加速資本支出,Google 回報 2025 年年度資本支出超過 1,500 億美元。"]
        } }
    ]
  },

  /* --------------------------------------------- consumer surplus (prose) */
  {
    type: "prose",
    id: "value",
    title:    { en: "What is generative AI worth to the people using it?",
                zh: "生成式 AI 對使用它的人值多少?" },
    subtitle: { en: "Investment, revenue, and compute costs measure AI's value to the companies building it — not its value to users. Because most tools are free or nearly so, that value is easy to undercount.",
                zh: "投資、營收與運算成本衡量的是 AI 對建造它的公司的價值 — 而非它對使用者的價值。由於多數工具免費或近乎免費,這份價值很容易被低估。" },
    blocks: [
      { type: "p",
        text: { en: "The first longitudinal estimates put US consumer surplus from generative AI at $172 billion annually by early 2026, up from $112 billion a year earlier — a 54% jump. The share of US adults using these tools rose from 48% to 56%, and the value per user climbed: the median value tripled, from $3.40 to $11.40 per month. The figure dwarfs estimated US generative-AI revenue, suggesting the social returns far exceed what producers capture.",
                zh: "首批縱向估計顯示,到 2026 年初,美國生成式 AI 的消費者剩餘達到每年 1,720 億美元,高於一年前的 1,120 億美元 — 躍升 54%。使用這些工具的美國成年人比例從 48% 升到 56%,每位使用者的價值也攀升:中位數價值翻了三倍,從每月 3.40 美元增至 11.40 美元。這個數字遠超過美國生成式 AI 的營收估計,顯示其社會報酬遠大於生產者所擷取的部分。" } }
    ]
  },

  /* --------------------------------------------- 4.4 LABOR MARKET (prose) */
  {
    type: "prose",
    id: "labor",
    title:    { en: "4.4 — The labor signal is uneven, and youngest workers feel it first",
                zh: "4.4 — 勞動市場的訊號並不均勻,年輕工作者最先感受到" },
    subtitle: { en: "Demand for AI skills is rising across every sector, but large-scale job losses have not shown up in aggregate employment data. The early effects are concentrated in hiring pipelines and in the youngest workers in AI-exposed jobs.",
                zh: "對 AI 技能的需求在各產業全面上升,但大規模的失業尚未出現在總體就業數據中。早期的衝擊集中在招聘管道,以及 AI 高度暴露職業中最年輕的工作者身上。" },
    blocks: [
      { type: "ul",
        items: {
          en: ["Employment for software developers aged 22 to 25 has fallen nearly 20% from its 2024 level — even as overall developer employment held up.",
               "Productivity gains are largest in structured, measurable work: studies report 14%–15% gains in customer support, 26% in software development, and 50% in marketing output.",
               "Gains are smaller in tasks requiring deeper reasoning, and recent evidence raises concerns that heavy AI reliance may carry long-term learning penalties.",
               "One-third of surveyed organizations expect AI to reduce their workforce over the coming year; almost half expect little to no change. Anticipated cuts are highest in service operations, supply chain, and software engineering."],
          zh: ["22 到 25 歲的軟體開發者就業人數,較 2024 年水準下跌近 20% — 即便整體開發者就業仍維持穩定。",
               "生產力的提升在結構化、可量測的工作中最大:研究回報客服提升 14%–15%、軟體開發提升 26%、行銷產出提升 50%。",
               "在需要更深層推理的任務上,提升幅度較小;近期證據也引發疑慮:過度依賴 AI 可能帶來長期的學習代價。",
               "三分之一的受訪組織預期 AI 會在來年縮減其人力;近半數則預期幾乎不變。預期裁減幅度最高的是服務營運、供應鏈與軟體工程。"]
        } }
    ]
  },

  /* --------------------------------------------- US vs China invest chart */
  {
    type: "bars",
    id: "invest-geo",
    title:    { en: "Private AI investment is concentrated in a few countries",
                zh: "私人 AI 投資集中於少數國家" },
    subtitle: { en: "Total private AI investment in 2025, in US$ billions. The United States invested 23 times more than China and 48 times more than the United Kingdom.",
                zh: "2025 年私人 AI 投資總額(十億美元)。美國的投資額是中國的 23 倍、英國的 48 倍。" },
    series: [
      { label: { en: "United States", zh: "美國" },      value: 286 },
      { label: { en: "China", zh: "中國" },               value: 12 },
      { label: { en: "United Kingdom", zh: "英國" },      value: 6 },
      { label: { en: "France", zh: "法國" },              value: 4 },
      { label: { en: "Canada", zh: "加拿大" },            value: 4 }
    ]
  },

  /* --------------------------------------------- adoption by country chart */
  {
    type: "bars",
    id: "adoption-geo",
    title:    { en: "AI diffusion leaders — and where the US sits",
                zh: "AI 普及領先者 — 以及美國的位置" },
    subtitle: { en: "Population-level AI adoption rate, second half of 2025 (%). Some economies outpace what income predicts; despite leading on investment, the US ranks 24th.",
                zh: "人口層級的 AI 採用率,2025 下半年(%)。部分經濟體的採用率超越其所得所能預測的水準;美國雖在投資上領先,排名卻僅第 24 名。" },
    series: [
      { label: { en: "UAE", zh: "阿聯酋" },          value: 64 },
      { label: { en: "Singapore", zh: "新加坡" },     value: 61 },
      { label: { en: "Norway", zh: "挪威" },          value: 46 },
      { label: { en: "France", zh: "法國" },          value: 44 },
      { label: { en: "United States", zh: "美國" },   value: 28 }
    ]
  },

  /* --------------------------------------------- industrial robots chart */
  {
    type: "bars",
    id: "robots",
    title:    { en: "China installs more industrial robots than the rest of the world combined",
                zh: "中國安裝的工業機器人多於全世界其餘國家總和" },
    subtitle: { en: "Industrial robots installed in 2024, in thousands. China accounted for 54% of global installations (up from 51.1% in 2023); Taiwan recorded the highest year-over-year growth, at 33%.",
                zh: "2024 年安裝的工業機器人(千台)。中國佔全球安裝量的 54%(高於 2023 年的 51.1%);台灣以 33% 創下最高的年增率。" },
    series: [
      { label: { en: "China", zh: "中國" },          value: 295 },
      { label: { en: "Japan", zh: "日本" },          value: 45 },
      { label: { en: "United States", zh: "美國" },   value: 34 },
      { label: { en: "South Korea", zh: "南韓" },     value: 31 },
      { label: { en: "Germany", zh: "德國" },         value: 27 }
    ]
  },

  /* ------------------------------------------------- FORCES (cards) */
  {
    type: "cards",
    id: "forces",
    title:    { en: "Six forces shaping the AI economy", zh: "形塑 AI 經濟的六股力量" },
    subtitle: { en: "From record capital to robots on the factory floor. Tap any card for the full trend and its numbers.",
                zh: "從破紀錄的資本,到工廠地板上的機器人。點任一張卡片看完整趨勢與數字。" },
    items: [
      {
        slug: "investment-surge",
        title:   { en: "The investment surge", zh: "投資大爆發" },
        summary: { en: "Global corporate AI investment more than doubled in 2025; private investment grew 127.5%.",
                   zh: "2025 年全球企業 AI 投資增加一倍以上;私人投資成長 127.5%。" },
        tags: ["investment"],
        overview: { en: "Global corporate AI investment more than doubled in 2025, reaching roughly $582 billion. Private investment grew fastest — up 127.5% — and now accounts for 60% of the total. Generative AI led the surge, growing more than 200% and capturing nearly half of all private AI funding. The market is expanding in breadth but even more in concentration: the average private AI investment event rose 46% to $66.5 million, and 28 deals exceeded $1 billion (up from 15 in 2024), including OpenAI's $40 billion raise. The number of newly funded AI companies rose about 71%, yet capital is increasingly skewed toward a small number of very large rounds.",
                    zh: "2025 年全球企業 AI 投資增加一倍以上,達約 5,820 億美元。私人投資成長最快 — 達 127.5% — 如今佔總額的 60%。生成式 AI 帶動這波熱潮,成長超過 200%,並囊括所有私人 AI 資金的近一半。市場在廣度上擴張,但在集中度上更甚:平均每筆私人 AI 投資案成長 46% 至 6,650 萬美元,且有 28 筆交易超過 10 億美元(高於 2024 年的 15 筆),包括 OpenAI 的 400 億美元募資。新獲資金的 AI 公司數量成長約 71%,但資本愈來愈向少數極大型輪次傾斜。" }
      },
      {
        slug: "us-china-gap",
        title:   { en: "The US–China investment gap", zh: "美中投資差距" },
        summary: { en: "The US committed 23× more private AI investment than China — but China's spending is understated.",
                   zh: "美國的私人 AI 投資是中國的 23 倍 — 但中國的支出被低估了。" },
        tags: ["geography"],
        overview: { en: "Private AI investment remains highly concentrated. In 2025 the United States led with nearly $285.9 billion — 23.1 times more than China's $12.4 billion and 48.5 times the United Kingdom's $5.9 billion. The US also dominated entrepreneurial activity, with 1,953 newly funded AI companies versus 172 in the UK and 161 in China. In generative AI specifically, US investment ($163.6 billion) far exceeded the combined total of China and Europe ($4.7 billion). But private figures likely understate China's true AI spending: government guidance funds deployed an estimated $184 billion into AI firms between 2000 and 2023, a channel these private-market tallies do not capture.",
                    zh: "私人 AI 投資仍高度集中。2025 年,美國以近 2,859 億美元領先 — 為中國 124 億美元的 23.1 倍、英國 59 億美元的 48.5 倍。美國在創業活動上也居主導,共有 1,953 家新獲資金的 AI 公司,而英國 172 家、中國 161 家。單就生成式 AI 而言,美國投資(1,636 億美元)遠超中國與歐洲的合計(47 億美元)。但私人數字很可能低估了中國真正的 AI 支出:政府引導基金在 2000 至 2023 年間估計已投入 1,840 億美元到 AI 企業,而這條管道並未被私人市場的統計所涵蓋。" }
      },
      {
        slug: "consumer-surplus",
        title:   { en: "Value to users, not just builders", zh: "對使用者、而不只是建造者的價值" },
        summary: { en: "US consumer surplus from generative AI reached $172 billion a year, up from $112 billion.",
                   zh: "美國生成式 AI 消費者剩餘達每年 1,720 億美元,高於 1,120 億美元。" },
        tags: ["value"],
        overview: { en: "Because generative AI tools are free or nearly free for most people, their value to users is easy to undercount. The first longitudinal estimates put US consumer surplus at $172 billion annually by early 2026, up from $112 billion a year earlier — a 54% rise. This reflects both broader use (US adults using generative AI grew from 48% to 56%) and higher value per user: average surplus rose 27% from $98 to $125, and the median value per user tripled, from $3.40 to $11.40. The figure dwarfs estimated US generative-AI revenue, consistent with historical findings that innovators capture only about 3% of the total social returns from major technologies.",
                    zh: "由於生成式 AI 工具對多數人免費或近乎免費,它們對使用者的價值很容易被低估。首批縱向估計顯示,到 2026 年初,美國消費者剩餘達每年 1,720 億美元,高於一年前的 1,120 億美元 — 上升 54%。這同時反映了更廣泛的使用(使用生成式 AI 的美國成年人從 48% 增至 56%)與更高的每人價值:平均剩餘成長 27%,從 98 美元增至 125 美元,中位數每人價值更翻了三倍,從 3.40 美元增至 11.40 美元。這個數字遠超美國生成式 AI 的營收估計,呼應了一項歷史發現:創新者僅擷取重大技術總社會報酬的約 3%。" }
      },
      {
        slug: "org-adoption",
        title:   { en: "Organizations are in, agents are early", zh: "組織全面採用,代理仍在起步" },
        summary: { en: "88% of surveyed organizations use AI; 70% use generative AI in at least one function.",
                   zh: "88% 的受訪組織使用 AI;70% 在至少一項職能中使用生成式 AI。" },
        tags: ["adoption"],
        overview: { en: "Organizational AI adoption continued to rise in 2025, reaching 88% of surveyed organizations. Generative AI is now used in at least one business function at 70% of organizations, with China and Europe posting the highest year-over-year increases. Adoption varies sharply by industry and function: the highest reported usage was in knowledge management for professional services (58%) and in software engineering and IT within the technology sector (58% and 56%), followed by marketing and sales in consumer goods and retail (51%). Functions tied to strategy, corporate finance, and risk and compliance lag behind. AI agents remain early — deployment was in the single digits across nearly all business functions.",
                    zh: "組織的 AI 採用在 2025 年持續上升,達到受訪組織的 88%。如今有 70% 的組織在至少一項業務職能中使用生成式 AI,其中中國與歐洲的年增幅最高。採用率在產業與職能間差異顯著:最高的使用出現在專業服務業的知識管理(58%),以及科技業的軟體工程與 IT(分別為 58% 與 56%),其次是消費品與零售業的行銷與業務(51%)。與策略、企業財務、風險與合規相關的職能則落後。AI 代理仍在起步階段 — 在幾乎所有業務職能中,其部署率都僅為個位數。" }
      },
      {
        slug: "fastest-adoption",
        title:   { en: "The fastest adoption ever", zh: "史上最快的採用" },
        summary: { en: "Generative AI reached 53% adoption in three years — faster than the PC or the internet.",
                   zh: "生成式 AI 在三年內達到 53% 採用率 — 比個人電腦或網際網路都快。" },
        tags: ["diffusion"],
        overview: { en: "Measured from the release of each technology's first mass-market product, generative AI reached approximately 53% adoption within three years — well above the early trajectories of the personal computer (about 69%) and the internet (about 76%) over comparable time frames. Adoption varies widely across countries and correlates strongly with GDP per capita, though some economies outpace what income would predict — including Singapore at roughly 61% and the UAE near 64% population-level adoption in the second half of 2025. Despite its lead in AI investment and model development, the United States ranks 24th, at 28.3%, sitting in the lower half of the global adoption ranking.",
                    zh: "從每項技術的首個大眾市場產品問世起算,生成式 AI 在三年內達到約 53% 的採用率 — 在可比的時間範圍內,遠高於個人電腦(約 69%)與網際網路(約 76%)的早期軌跡。採用率在各國間差異甚大,並與人均 GDP 高度相關,不過部分經濟體超越其所得所能預測的水準 — 包括新加坡 2025 下半年約 61%、阿聯酋接近 64% 的人口層級採用率。儘管美國在 AI 投資與模型開發上領先,其排名卻僅第 24,為 28.3%,落在全球採用排名的後半段。" }
      },
      {
        slug: "robots",
        title:   { en: "Robots on the factory floor", zh: "工廠地板上的機器人" },
        summary: { en: "China installed 54% of the world's industrial robots in 2024; Taiwan led growth at +33%.",
                   zh: "2024 年中國安裝了全球 54% 的工業機器人;台灣以 +33% 領先成長。" },
        tags: ["robotics"],
        overview: { en: "Physical automation tells its own concentration story. In 2024, China led the world with 295,000 industrial robot installations — six times more than Japan's 44,500 and 8.6 times the United States' 34,200 — followed by South Korea (30,600) and Germany (27,000). China's share of global installations climbed to 54% (54.4%), up from 51.1% in 2023, continuing a rise from just 20.8% in 2013. Global year-over-year growth was essentially flat, and several major markets — including the United States, Germany, and Italy — saw declines. Taiwan was the exception, recording the highest year-over-year growth at 33%.",
                    zh: "實體自動化講述著它自己的集中故事。2024 年,中國以 295,000 台工業機器人安裝量領先全球 — 是日本 44,500 台的六倍、美國 34,200 台的 8.6 倍 — 其後是南韓(30,600 台)與德國(27,000 台)。中國佔全球安裝量的比例攀升至 54%(54.4%),高於 2023 年的 51.1%,延續自 2013 年僅 20.8% 以來的上升。全球年增率基本持平,包括美國、德國與義大利在內的數個主要市場出現衰退。台灣是個例外,以 33% 創下最高的年增率。" }
      }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 4 · Economy.",
                zh: "第 4 章「經濟」的頭條發現。" },
    quotes: [
      { text: { en: "Global corporate AI investment more than doubled in 2025; private investment grew 127.5% and now accounts for 60% of the total.",
                zh: "2025 年全球企業 AI 投資增加一倍以上;私人投資成長 127.5%,如今佔總額的 60%。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "The United States committed 23 times more private AI investment than China — yet China's government guidance funds deployed an estimated $184 billion into AI firms from 2000 to 2023.",
                zh: "美國的私人 AI 投資是中國的 23 倍 — 但中國的政府引導基金在 2000 至 2023 年間估計已投入 1,840 億美元到 AI 企業。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "The value consumers get from generative AI grew 54% in a year, reaching an estimated $172 billion in annual US consumer surplus — most of these tools remain free or close to it.",
                zh: "消費者從生成式 AI 得到的價值一年內成長 54%,達到約 1,720 億美元的美國年度消費者剩餘 — 而多數工具仍免費或近乎免費。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "Generative AI reached 53% adoption in three years, faster than the personal computer or the internet — yet the United States ranks just 24th at 28.3%.",
                zh: "生成式 AI 在三年內達到 53% 採用率,比個人電腦或網際網路都快 — 但美國的排名僅第 24 名,為 28.3%。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "AI's labor effects are uneven: employment for software developers aged 22 to 25 has fallen nearly 20% from 2024, even as overall job losses have not yet appeared.",
                zh: "AI 對勞動的影響並不均勻:22 到 25 歲軟體開發者的就業較 2024 年下跌近 20%,儘管整體失業尚未浮現。" },
        by: "Chapter 4 · Economy" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Economy chapter", zh: "閱讀完整的經濟章節" },
    text:  { en: "Chapter 4 (sections 4.1–4.5) — investment, adoption, jobs, and robots — with every figure and citation is free from Stanford HAI. Or head back to the 15 takeaways and nine-chapter overview.",
             zh: "第 4 章(4.1–4.5 各節) — 投資、採用、就業與機器人 — 連同所有圖表與引用,皆由史丹佛 HAI 免費提供。或回到 15 條重點與九大章節總覽。" },
    link:  { label: { en: "Open Chapter 4 · Economy →", zh: "前往第 4 章:經濟 →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy" }
  }
];

/* =========================================================================
   Policy & Governance — deep dive · policy.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2025, Chapter 6
   https://hai.stanford.edu/ai-index/2025-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 6: 6.1 Major Global AI Policy News in 2024,
   6.2 AI and Policymaking (global legislative records, US federal and state
   legislation, AI mentions, US regulations), 6.3 Public Investment in AI.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "policy";

window.SITE_META = {
  title:    { en: "AI Index Report 2025", zh: "AI 指數報告 2025" },
  subtitle: { en: "Policy & Governance · a chapter deep dive", zh: "政策與治理專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "Washington stalled. Everyone else legislated.",
                zh: "華府卡住了，其他所有人都在立法" },
    subtitle: { en: "Chapter 6 of the AI Index 2025 tracks a year in which US federal lawmaking barely moved while state legislatures, regulatory agencies, and governments worldwide accelerated. Legislative attention rose everywhere, spending rose everywhere, and the gap between proposing and passing a law got wider. The numbers:",
                zh: "AI 指數 2025 第 6 章記錄的這一年，美國聯邦立法幾乎原地踏步，而各州議會、監管機關與世界各國政府卻在加速。立法關注度全面上升、支出全面上升，而「提案」與「通過」之間的落差則愈拉愈大。先看數字：" },
    stats: [
      { label: { en: "AI-related laws enacted by US states in 2024 (49 in 2023, 1 in 2016)", zh: "2024 年美國各州通過的 AI 相關法律數(2023 年 49 件，2016 年 1 件)" }, value: 131 },
      { label: { en: "US federal AI-related regulations in 2024 (25 in 2023)", zh: "2024 年美國聯邦 AI 相關法規數(2023 年 25 項)" }, value: 59 },
      { label: { en: "AI mentions in legislative proceedings across 75 geographic areas, 2024", zh: "2024 年 75 個地理區立法程序中提及 AI 的次數" }, value: 1889 },
      { label: { en: "AI-related bills proposed in the US Congress in 2024 (only 4 passed)", zh: "2024 年美國國會提出的 AI 相關法案數(僅 4 件通過)" }, value: 221 },
      { label: { en: "unique US federal agencies issuing AI regulations in 2024 (21 in 2023)", zh: "2024 年發布 AI 法規的美國聯邦機關數(2023 年為 21 個)" }, value: 42 },
      { label: { en: "US$ billions — Saudi Arabia's Project Transcendence, announced November 2024", zh: "億美元 — 沙烏地阿拉伯 2024 年 11 月宣布的「超越計畫」(單位：十億)" }, value: 100 }
    ]
  },

  /* --------------------------------------------------- 6.1 POLICY TIMELINE */
  {
    type: "timeline",
    id: "year-in-policy",
    nav:      { en: "6.1 Year in policy", zh: "6.1 政策大事記" },
    title:    { en: "6.1 — The year in global AI policy",
                zh: "6.1 — 全球 AI 政策的這一年" },
    subtitle: { en: "The AI Index Steering Committee's selection of 2024's most consequential policy events. Money, law, and safety infrastructure, arriving roughly in that order.",
                zh: "AI 指數指導委員會選出的 2024 年最具影響力政策事件。錢、法律，以及安全基礎設施 — 大致就是這個順序抵達。" },
    events: [
      { date:  { en: "Feb 21, 2024", zh: "2024 年 2 月 21 日" },
        title: { en: "Singapore commits $1 billion to AI over five years", zh: "新加坡承諾五年投入 10 億美元於 AI" },
        body:  { en: "In his budget speech, Deputy Prime Minister and Finance Minister Lawrence Wong announced that the government will allocate over $1 billion over the next five years to support AI computation, talent development, and industry growth.",
                 zh: "副總理兼財政部長黃循財在預算演說中宣布，政府將在未來五年撥出超過 10 億美元，用於支持 AI 運算、人才培育與產業成長。" } },
      { date:  { en: "Mar 11, 2024", zh: "2024 年 3 月 11 日" },
        title: { en: "Abu Dhabi launches a $100 billion AI investment firm", zh: "阿布達比成立千億美元 AI 投資公司" },
        body:  { en: "Abu Dhabi established MGX Fund Management Limited, a state-owned investment firm specializing in AI technologies, with a target of managing $100 billion in assets — part of the UAE's push to position itself as a global leader in AI innovation.",
                 zh: "阿布達比成立 MGX Fund Management Limited，一家專攻 AI 技術的國有投資公司，目標管理 1,000 億美元資產 — 這是阿聯把自己推向全球 AI 創新領導地位的一環。" } },
      { date:  { en: "Mar 13, 2024", zh: "2024 年 3 月 13 日" },
        title: { en: "European Parliament passes the EU AI Act", zh: "歐洲議會通過歐盟 AI 法案" },
        body:  { en: "The landmark EU AI Act, the first of its kind, passed three months after a provisional agreement. It introduces transparency and reporting obligations, risk-based regulation, and bans on applications including social scoring, human manipulation, and biometric categorization using sensitive characteristics. Most provisions take effect in 2026 after a two-year implementation period.",
                 zh: "指標性的歐盟 AI 法案是同類法規中的第一部，在達成臨時協議三個月後通過。它引入透明度與通報義務、以風險為基礎的監管，並禁止社會評分、人類操縱，以及使用敏感特徵的生物特徵分類等應用。多數條文將在兩年實施期後於 2026 年生效。" } },
      { date:  { en: "Mar 17, 2024", zh: "2024 年 3 月 17 日" },
        title: { en: "India launches the IndiaAI Mission with $1.25 billion", zh: "印度啟動 12.5 億美元的 IndiaAI Mission" },
        body:  { en: "The initiative aims to build more than 10,000 GPUs through public-private partnerships, develop a national nonpersonal data platform, and support homegrown AI models and deep-tech startups. It also prioritizes ethical AI governance and expanding AI labs beyond major cities. Two days earlier, India had dropped a plan to require government approval before launching new AI models, switching to self-regulation after backlash from entrepreneurs and investors.",
                 zh: "這項計畫要透過公私合作建置超過 10,000 顆 GPU、打造國家級非個人資料平台，並支持本土 AI 模型與深科技新創。它同時把倫理 AI 治理與把 AI 實驗室推向大都市以外列為優先。兩天前，印度才剛在創業者與投資人反彈後撤回「新 AI 模型上市須經政府核准」的計畫，改採自律。" } },
      { date:  { en: "Mar 20, 2024", zh: "2024 年 3 月 20 日" },
        title: { en: "France fines Google €250 million over training data", zh: "法國因訓練資料對 Google 開罰 2.5 億歐元" },
        body:  { en: "France's competition watchdog, the Autorité de la Concurrence, fined Google €250 million for using French news content to train Bard, now Gemini, without notifying media companies — a breach of EU intellectual property rules that the regulator said prevented publishers from negotiating fair prices. Google accepted the settlement.",
                 zh: "法國競爭主管機關 Autorité de la Concurrence 對 Google 開罰 2.5 億歐元，理由是它未通知媒體公司就使用法國新聞內容訓練 Bard(現在的 Gemini) — 監管機關認為這違反歐盟智慧財產權規則，並讓出版商無法談到公平的價格。Google 接受了和解。" } },
      { date:  { en: "Mar 21, 2024", zh: "2024 年 3 月 21 日" },
        title: { en: "UN General Assembly adopts an AI resolution", zh: "聯合國大會通過 AI 決議" },
        body:  { en: "Backed by more than 120 member states including China and endorsed without a vote by all 193, the assembly adopted a US-led resolution promoting 'safe, secure, and trustworthy' AI. It is not legally binding, but it calls on stakeholders to keep AI systems compliant with human rights law and recognizes their role in accelerating the Sustainable Development Goals.",
                 zh: "在超過 120 個會員國(包含中國)背書、193 國無異議通過的情況下，聯合國大會採納了一項美國主導、推動「安全、可靠、值得信任」AI 的決議。它不具法律約束力，但呼籲各方確保 AI 系統符合人權法，並肯定 AI 在加速永續發展目標上的角色。" } },
      { date:  { en: "Apr 7, 2024", zh: "2024 年 4 月 7 日" },
        title: { en: "Canada pledges CA$2.4 billion", zh: "加拿大承諾 24 億加幣" },
        body:  { en: "Canada's 2024 federal budget featured a CA$2.4 billion package to 'secure Canada's AI advantage,' directed at research and developer infrastructure, AI startups, small-business productivity, support for workers affected by AI, and the creation of a new Canadian AI Safety Institute.",
                 zh: "加拿大 2024 年聯邦預算編列 24 億加幣，目標是「確保加拿大的 AI 優勢」，用於研究與開發者基礎設施、AI 新創、中小企業生產力、受 AI 衝擊勞工的支援，以及成立新的加拿大 AI 安全研究院。" } },
      { date:  { en: "May 21, 2024", zh: "2024 年 5 月 21 日" },
        title: { en: "The AI Seoul Summit builds a network of safety institutes", zh: "首爾 AI 高峰會建立安全研究院網絡" },
        body:  { en: "Cohosted by the UK and South Korea, attending countries reported the safety measures they had adopted under the previous year's Bletchley Declaration and signed a letter of intent to establish a collaborative network of AI safety institutes. Institutes were pledged in Japan, France, Germany, Italy, Singapore, South Korea, Australia, Canada, and the European Union — following the first two, in the US and UK, in November 2023. Ten days earlier the UK AI Safety Institute had released Inspect, the first government-backed AI safety testing platform published under an open-source license.",
                 zh: "由英國與南韓共同主辦，與會國報告了它們依前一年布萊切利宣言採取的安全措施，並簽署意向書，要建立 AI 安全研究院的合作網絡。日本、法國、德國、義大利、新加坡、南韓、澳洲、加拿大與歐盟都承諾設立研究院 — 而最早的兩所是 2023 年 11 月的美國與英國。十天前，英國 AI 安全研究院才剛發布 Inspect，這是第一個由政府支持、以開源授權釋出的 AI 安全測試平台。" } },
      { date:  { en: "May 27, 2024", zh: "2024 年 5 月 27 日" },
        title: { en: "China launches a $47.5 billion semiconductor fund", zh: "中國啟動 475 億美元的半導體基金" },
        body:  { en: "China created its largest-ever state-backed investment fund for chips — the third phase of the 'Big Fund' that has supported the industry since 2014, including investments in the country's two largest chip foundries. The launch came amid tightening US export controls on the semiconductors underpinning AI training hardware. The next day, the European Commission unveiled its AI Office, with over 140 staff across five units, to implement the AI Act and enforce standards for general-purpose models.",
                 zh: "中國成立史上最大的國家支持晶片投資基金 — 這是自 2014 年起支持該產業的「大基金」第三期，先前投資標的包括中國最大的兩家晶圓代工廠。啟動時機正逢美國收緊對 AI 訓練硬體所倚賴半導體的出口管制。隔天，歐盟執委會揭幕其 AI 辦公室，轄下五個單位、逾 140 名人員，負責實施 AI 法案並執行通用型模型的標準。" } },
      { date:  { en: "Aug 2, 2024", zh: "2024 年 8 月 2 日" },
        title: { en: "The UK withdraws £1.3 billion in promised funding", zh: "英國撤回承諾的 13 億英鎊經費" },
        body:  { en: "The incoming Labour government canceled £1.3 billion promised for technology and AI projects, saying the previous government's commitments had been 'underfunded.' The cuts included £500 million for the AI Research Resource, which funds computing power, and £800 million for the University of Edinburgh's exascale supercomputer.",
                 zh: "新上任的工黨政府取消了原本承諾給科技與 AI 專案的 13 億英鎊，理由是前政府的承諾「經費不足」。被砍掉的包括資助算力的 AI Research Resource 的 5 億英鎊，以及愛丁堡大學百億億級超級電腦的 8 億英鎊。" } },
      { date:  { en: "Sep 29, 2024", zh: "2024 年 9 月 29 日" },
        title: { en: "California's governor vetoes the state's frontier AI safety bill", zh: "加州州長否決該州的前沿 AI 安全法案" },
        body:  { en: "Governor Gavin Newsom vetoed a bill that would have mandated safety testing for frontier models before public release and let the state attorney general sue over AI-related harm. Given California's status as the world's fifth-largest economy and home to many leading AI companies, the bill could have set a national precedent — a Brussels effect in reverse. Newsom argued it imposed excessive standards; critics of the bill said it would stifle the open-weight ecosystem. Twelve days earlier he had signed three bills (AB 2655, AB 2839, AB 2355) targeting deepfake election content, one of which a federal judge temporarily enjoined on October 2 over a Kamala Harris deepfake case, citing vague definitions of 'harmful' depictions.",
                 zh: "州長紐松否決了一項法案，該法案原本要求前沿模型公開發布前須通過安全測試，並讓州檢察總長得以就 AI 相關傷害提告。加州是全球第五大經濟體、也是許多頂尖 AI 公司的所在地，這部法案本可能成為全國先例 — 一種反向的布魯塞爾效應。紐松認為它的標準過高；法案的批評者則說它會扼殺開放權重生態系。十二天前，他才簽署三部針對深偽選舉內容的法案(AB 2655、AB 2839、AB 2355)，其中一部在 10 月 2 日被聯邦法官因一起賀錦麗深偽案暫時禁止執行，理由是「有害」描繪的定義過於模糊。" } },
      { date:  { en: "Nov 8, 2024", zh: "2024 年 11 月 8 日" },
        title: { en: "Saudi Arabia announces Project Transcendence", zh: "沙烏地阿拉伯宣布「超越計畫」" },
        body:  { en: "A $100 billion AI initiative spearheaded by the Public Investment Fund, aimed at establishing the kingdom as a global tech hub. It includes a partnership with Alphabet worth between $5 billion and $10 billion to develop Arabic-language AI models, aligning with Vision 2030's goal of diversifying the economy beyond oil.",
                 zh: "這是一項由公共投資基金主導的 1,000 億美元 AI 計畫，目標是把沙烏地打造成全球科技樞紐。內容包含與 Alphabet 價值 50 億至 100 億美元的合作，開發阿拉伯語 AI 模型，呼應「2030 願景」把經濟從石油分散出去的目標。" } },
      { date:  { en: "Nov 25, 2024", zh: "2024 年 11 月 25 日" },
        title: { en: "The International Network of AI Safety Institutes convenes", zh: "國際 AI 安全研究院網絡首次召開" },
        body:  { en: "The US Departments of Commerce and State cohosted the inaugural meeting in San Francisco, focused on managing synthetic content risks, testing foundation models, and risk assessments for advanced systems. The US serves as inaugural chair; initial members are Australia, Canada, the European Union, France, Japan, Kenya, the Republic of Korea, Singapore, and the United Kingdom. The network secured over $11 million in global research funding commitments. Eleven days earlier the EU AI Office had published the first of four drafts of its General-Purpose AI Code of Practice.",
                 zh: "美國商務部與國務院在舊金山共同主辦首次會議，聚焦於管理合成內容風險、測試基礎模型，以及先進系統的風險評估。美國擔任首任主席；創始成員包括澳洲、加拿大、歐盟、法國、日本、肯亞、大韓民國、新加坡與英國。這個網絡取得超過 1,100 萬美元的全球研究經費承諾。十一天前，歐盟 AI 辦公室才發布通用型 AI 實務守則四份草案中的第一份。" } },
      { date:  { en: "Dec 2, 2024", zh: "2024 年 12 月 2 日" },
        title: { en: "The US tightens semiconductor export controls again", zh: "美國再度收緊半導體出口管制" },
        body:  { en: "The Commerce Department's Bureau of Industry and Security announced new restrictions covering 24 types of semiconductor manufacturing equipment, three types of software tools, and further limitations, further curbing China's ability to produce advanced chips. Seventeen days later the UN Security Council convened on AI in military contexts, with Secretary-General António Guterres warning that AI's evolution is outpacing governance frameworks and calling for 'international guardrails' — against a backdrop of widespread autonomous drone and robot use in Ukraine.",
                 zh: "美國商務部工業與安全局宣布新的限制，涵蓋 24 類半導體製造設備、3 類軟體工具，以及其他限制，進一步壓縮中國生產先進晶片的能力。17 天後，聯合國安理會就 AI 在軍事場域的應用召開會議，秘書長古特瑞斯警告 AI 的演進速度已超過治理框架，並呼籲建立「國際護欄」 — 背景是烏克蘭戰場上自主無人機與機器人的大量使用。" } }
    ]
  },

  /* --------------------------------------------------- 6.2 LEGISLATION PROSE */
  {
    type: "prose",
    id: "legislation",
    nav:      { en: "6.2 Legislation", zh: "6.2 立法" },
    title:    { en: "6.2 — Proposing is easy. Passing is not.",
                zh: "6.2 — 提案很容易，通過很難" },
    subtitle: { en: "The AI Index tracked legislation containing the term 'artificial intelligence' across 114 countries from 2016 to 2024. The picture is one of enormous legislative attention converting into a modest number of actual laws — except in US state capitols.",
                zh: "AI 指數追蹤了 114 個國家自 2016 至 2024 年間含有「人工智慧」一詞的立法。整體圖像是：巨量的立法關注，只轉化成不多的實際法律 — 只有美國各州議會是例外。" },
    blocks: [
      { type: "p",
        text: { en: "Of the 114 countries analyzed, just 39 have enacted at least one AI-related law, for a global total of 204 laws since 2016. Annual output rose from 30 laws in 2023 to 40 in 2024, making it the second-highest year on record after 2022 — and up from a single law in 2016. Russia led 2024 with seven laws, followed by Belgium and Portugal with five each and the United States with four. Cumulatively since 2016 the United States leads with 27, then Portugal and Russia at 20 apiece, Belgium at 18, and South Korea at 13.",
                zh: "在分析的 114 個國家中，只有 39 個至少通過一部 AI 相關法律，自 2016 年起全球共 204 部。年產出從 2023 年的 30 部升至 2024 年的 40 部，是有紀錄以來第二高的一年，僅次於 2022 年 — 而 2016 年只有 1 部。2024 年由俄羅斯以 7 部領先，比利時與葡萄牙各 5 部、美國 4 部次之。從 2016 年累計來看，美國以 27 部居首，葡萄牙與俄羅斯各 20 部，比利時 18 部，南韓 13 部。" } },
      { type: "h3",
        text: { en: "The federal bottleneck", zh: "聯邦的瓶頸" } },
      { type: "p",
        text: { en: "In the US Congress, proposed AI-related bills climbed from 171 in 2023 to 221 in 2024 — nearly tripling since 2022. Four passed. That ratio is the single clearest fact in the chapter: legislative interest is real, and legislative output is not. Attention is measurable elsewhere too. AI mentions in US congressional committee reports hit 136 in the 118th session (2023–24), the highest count since tracking began in 2001 and up 83.8% from the 117th.",
                zh: "在美國國會，提出的 AI 相關法案從 2023 年的 171 件攀升到 2024 年的 221 件 — 自 2022 年以來將近三倍。通過的有 4 件。這個比例是全章最清楚的一項事實：立法興趣是真的，立法產出不是。關注度在別處也量得到。美國國會委員會報告中提及 AI 的次數，在第 118 屆會期(2023–24)達到 136 次，是 2001 年開始追蹤以來的最高值，比第 117 屆高出 83.8%。" } },
      { type: "h3",
        text: { en: "The states did not wait", zh: "各州沒有等" } },
      { type: "p",
        text: { en: "State legislatures produced 131 AI-related laws in 2024, more than double the 49 of 2023 and a long way from the single law of 2016. California led 2024 with 22, followed by Utah (12), Maryland (8), and Virginia (6). Cumulatively from 2016 to 2024, California has passed 42 — more than twice any other state — ahead of Maryland, Virginia, and Utah at 17 each, and Illinois, Massachusetts, and Washington at 11 each. The substance varies widely: California's AI Transparency Act requires large providers to offer free AI detection tools and permanent disclosures on AI-generated content with a $5,000 fine per violation; Colorado's AI Act builds consumer protections around high-risk systems, requiring transparency, appeal rights, and regular impact assessments; Massachusetts allocated $1.26 billion to IT modernization including $25 million to integrate AI into state government operations.",
                zh: "各州議會在 2024 年產出 131 部 AI 相關法律，是 2023 年 49 部的兩倍多，離 2016 年的僅僅 1 部已經很遠。2024 年由加州以 22 部領先，猶他(12)、馬里蘭(8)、維吉尼亞(6)次之。2016 至 2024 累計，加州通過 42 部 — 是任何其他州的兩倍以上 — 馬里蘭、維吉尼亞與猶他各 17 部，伊利諾、麻州與華盛頓州各 11 部。內容差異很大：加州的《AI 透明法》要求大型供應商提供免費的 AI 偵測工具，並在 AI 生成內容上加上永久揭露，違反一次罰 5,000 美元；科羅拉多的《AI 法》環繞高風險系統建立消費者保護，要求透明度、申訴權與定期影響評估；麻州編列 12.6 億美元進行資訊科技現代化，其中 2,500 萬美元用於把 AI 整合進州政府運作。" } },
      { type: "h3",
        text: { en: "Deepfakes: the one thing everyone agrees on", zh: "深偽：唯一大家有共識的事" } },
      { type: "ul",
        items: {
          en: ["Before 2024, five states — California, Washington, Texas, Michigan, and Minnesota — had laws regulating AI deepfakes in elections. In 2024, 12 more states including Oregon, New Mexico, and New York introduced similar regulations, bringing the cumulative total of state-level election deepfake laws to 20.",
               "Laws against intimate-image deepfakes are far more widespread: 36 state-level laws have been enacted, with 25 states covering all individuals and five covering minors only. Wyoming and Ohio are the only states with no intimate deepfake regulation of any kind.",
               "The two curves separated sharply after 2022 — election deepfakes went from a niche concern to a legislative priority in a single election cycle, while intimate-imagery laws had a head start and kept climbing."],
          zh: ["2024 年之前，有五個州 — 加州、華盛頓州、德州、密西根州與明尼蘇達州 — 已立法規範選舉中的 AI 深偽。2024 年又有 12 個州(包括奧勒岡、新墨西哥與紐約)提出類似規範，使州級選舉深偽法律累計達到 20 部。",
               "針對私密影像深偽的法律普及得多：全美已通過 36 部州級法律，其中 25 個州涵蓋所有人，5 個州只涵蓋未成年人。懷俄明與俄亥俄是唯二沒有任何私密深偽規範的州。",
               "這兩條曲線在 2022 年後急速分岔 — 選舉深偽在一個選舉週期內就從邊緣議題變成立法優先事項，而私密影像法律起步較早、也持續上升。"]
        } },
      { type: "h3",
        text: { en: "Regulators moved faster than legislators", zh: "監管機關動得比立法者快" } },
      { type: "p",
        text: { en: "Regulations — the detailed directives executive agencies craft to enforce legislation — are where US federal action actually happened. The AI Index searched the Federal Register, which covers more than 436 agencies, and found 59 AI-related regulations in 2024, more than double the 25 of 2023. They came from a record 42 unique departments, up from 21 in 2023 and 17 in 2022. The Department of Health and Human Services issued the most (14), followed by the Centers for Medicare and Medicaid Services and the Commerce Department with seven each. Their content ranges from an executive order restricting bulk sensitive personal data transactions with countries of concern, to a CFPB circular limiting algorithmic scoring in hiring and promotion decisions, to export controls on semiconductor manufacturing equipment.",
                zh: "法規 — 行政機關為執行立法而擬定的細部指令 — 才是美國聯邦真正在動的地方。AI 指數搜尋了涵蓋逾 436 個機關的《聯邦公報》，找到 2024 年有 59 項 AI 相關法規，是 2023 年 25 項的兩倍多。它們來自破紀錄的 42 個不同部門，高於 2023 年的 21 個與 2022 年的 17 個。衛生及公共服務部發布最多(14 項)，聯邦醫療保險與醫療補助服務中心和商務部各 7 項次之。內容從一道限制與「受關注國家」進行大宗敏感個資交易的行政命令，到消費者金融保護局限制招聘與升遷中演算法評分的通函，再到半導體製造設備的出口管制，涵蓋範圍很廣。" } }
    ]
  },

  /* --------------------------------------------------- US STATE LAWS CHART */
  {
    type: "bars",
    id: "state-laws",
    nav:      { en: "US state laws", zh: "美國州級法規" },
    title:    { en: "AI laws enacted by US state, 2016–24",
                zh: "美國各州通過的 AI 法律數，2016–24" },
    subtitle: { en: "Cumulative AI-related bills passed into law by state. California's 42 is more than double the next state — and its 22 in 2024 alone exceed most states' entire nine-year total.",
                zh: "各州累計通過成為法律的 AI 相關法案數。加州的 42 部是排名第二者的兩倍以上 — 而它光是 2024 年的 22 部，就超過多數州九年的總和。" },
    series: [
      { label: { en: "California", zh: "加州" },     value: 42 },
      { label: { en: "Maryland", zh: "馬里蘭" },     value: 17 },
      { label: { en: "Virginia", zh: "維吉尼亞" },   value: 17 },
      { label: { en: "Utah", zh: "猶他" },           value: 17 },
      { label: { en: "Illinois", zh: "伊利諾" },     value: 11 },
      { label: { en: "Washington", zh: "華盛頓州" }, value: 11 }
    ]
  },

  /* ------------------------------------------------ GLOBAL AI LAWS CHART */
  {
    type: "bars",
    id: "country-laws",
    nav:      { en: "Laws by country", zh: "各國立法" },
    title:    { en: "AI-related laws passed by country, 2016–24",
                zh: "各國通過的 AI 相關法律數，2016–24" },
    subtitle: { en: "Of 114 countries analyzed, only 39 have enacted a single AI-related law. These six account for well over half of the global total of 204.",
                zh: "在分析的 114 個國家中，只有 39 個通過過任何一部 AI 相關法律。這六個國家就佔了全球 204 部總數的一半以上。" },
    series: [
      { label: { en: "United States", zh: "美國" },   value: 27 },
      { label: { en: "Portugal", zh: "葡萄牙" },      value: 20 },
      { label: { en: "Russia", zh: "俄羅斯" },        value: 20 },
      { label: { en: "Belgium", zh: "比利時" },       value: 18 },
      { label: { en: "South Korea", zh: "南韓" },     value: 13 },
      { label: { en: "Spain", zh: "西班牙" },         value: 11 }
    ]
  },

  /* --------------------------------------------------- 6.3 PUBLIC MONEY */
  {
    type: "prose",
    id: "investment",
    nav:      { en: "6.3 Public money", zh: "6.3 公共投資" },
    title:    { en: "6.3 — Where public AI money actually goes",
                zh: "6.3 — AI 公共資金實際流向哪裡" },
    subtitle: { en: "The AI Index used NLP to identify AI-related government contracts and grants. What emerges is not a spending race so much as two entirely different theories of what public AI money is for.",
                zh: "AI 指數用自然語言處理辨識出 AI 相關的政府契約與補助。浮現的與其說是一場支出競賽，不如說是兩套對「公共 AI 資金該做什麼」完全不同的想法。" },
    blocks: [
      { type: "p",
        text: { en: "From 2013 to 2023 the United States led with roughly $5.2 billion spread across 2,678 unique AI contracts. The United Kingdom followed at $568 million over 555 contracts, then Germany ($278 million, 409 contracts), France ($190 million), and Spain ($100 million). The UK, Germany, and France together account for 56% of European public AI investment. Per capita the ordering shifts: the US spent $1.58 million per 100,000 inhabitants over the decade, with Finland ($1.29 million) and Denmark ($1.27 million) close behind and the UK at $0.84 million.",
                zh: "2013 至 2023 年間，美國以約 52 億美元、橫跨 2,678 份 AI 契約領先。英國以 5.68 億美元、555 份契約次之，接著是德國(2.78 億美元、409 份契約)、法國(1.90 億美元)與西班牙(1.00 億美元)。英國、德國與法國三者合計佔歐洲 AI 公共投資的 56%。若換算成人均，排序就變了：這十年美國每 10 萬人花費 158 萬美元，芬蘭(129 萬)與丹麥(127 萬)緊追在後，英國則是 84 萬。" } },
      { type: "h3",
        text: { en: "Two theories of AI, side by side", zh: "兩套 AI 觀，並排放著" } },
      { type: "p",
        text: { en: "The composition of that spending is the real finding. In the United States, the Department of Defense took 75.0% of AI contract value in 2023, followed by Veterans Affairs (6.8%) and the Treasury (5.3%). In Europe, defense accounted for 0.84%. European AI tenders went instead to general public services (64.1%), education (12.3%), and health (7.4%) — together about 84% of the total. Same technology, opposite institutional gravity.",
                zh: "這些支出的組成才是真正的發現。在美國，國防部在 2023 年拿走 AI 契約金額的 75.0%，退伍軍人事務部(6.8%)與財政部(5.3%)次之。在歐洲，國防只佔 0.84%。歐洲的 AI 標案流向的是一般公共服務(64.1%)、教育(12.3%)與衛生(7.4%) — 三者合計約 84%。同一種技術，截然相反的制度重心。" } },
      { type: "h3",
        text: { en: "Europe is closing the gap", zh: "歐洲正在追上來" } },
      { type: "ul",
        items: {
          en: ["Europe's 2023 AI public investment was roughly 67 times its 2013 level, against a fifteenfold increase for the United States. Europe saw a 400% year-over-year jump in 2017 and another 200% spike in 2019 — the same year national AI strategy releases peaked worldwide.",
               "In 2023 the United States spent $831.0 million on AI contracts against Europe's $581.4 million, leaving a gap of $249.6 million. That disparity widened until 2020 and has narrowed every year since.",
               "The composition within Europe shifted too. In 2023 countries that historically ranked lower — Romania, Greece, Hungary, Poland — broke into the top 10, alongside the UK ($262.6 million), Spain ($49.6 million), and Germany ($49.6 million)."],
          zh: ["歐洲 2023 年的 AI 公共投資約為 2013 年的 67 倍，美國則是 15 倍。歐洲在 2017 年出現 400% 的年增率，2019 年又有一次 200% 的暴衝 — 同一年全球國家 AI 戰略的發布量也達到高峰。",
               "2023 年美國在 AI 契約上花了 8.31 億美元，歐洲是 5.81 億美元，差距 2.50 億美元。這個落差一路擴大到 2020 年，之後每年都在縮小。",
               "歐洲內部的組成也變了。2023 年一些歷來排名較後的國家 — 羅馬尼亞、希臘、匈牙利、波蘭 — 都擠進前十，與英國(2.63 億美元)、西班牙(4,960 萬美元)和德國(4,955 萬美元)並列。"]
        } },
      { type: "h3",
        text: { en: "Contracts are the small half", zh: "契約只是比較小的那一半" } },
      { type: "p",
        text: { en: "Contracts undercount public AI spending badly. In 2023 the US government awarded about $830 million in AI-related public tenders — and $4.5 billion in AI-related grants. Across 2013 to 2023 the US disbursed roughly $19.7 billion through 18,399 AI grants, at a median of $247,530 and an average of $1.07 million each. Grant funding grew nearly nineteenfold over the decade, from $230 million in 2013 to $4.5 billion in 2023, with an average annual growth rate of 40% from 2014 to 2020. The AI Index cautions explicitly against country-to-country comparisons on this data: grant-level figures exist only for the United States, and comparable data from the EU and China could not be collected.",
                zh: "契約嚴重低估了公共 AI 支出。2023 年美國政府發出的 AI 相關公開標案約 8.3 億美元 — 而 AI 相關補助則有 45 億美元。2013 至 2023 年間，美國透過 18,399 筆 AI 補助撥出約 197 億美元，中位數為 247,530 美元、平均每筆 107 萬美元。這十年間補助金額成長近 19 倍，從 2013 年的 2.3 億美元到 2023 年的 45 億美元，2014 至 2020 年的年均成長率為 40%。AI 指數明確提醒不要拿這份資料做國與國之間的比較：補助層級的數字只有美國有，歐盟與中國的可比資料無法取得。" } }
    ]
  },

  /* ---------------------------------------------- 2023 SPENDING CHART */
  {
    type: "bars",
    id: "spending-2023",
    nav:      { en: "Contract spending", zh: "採購支出" },
    title:    { en: "Public spending on AI-related contracts, 2023",
                zh: "AI 相關契約的公共支出，2023 年" },
    subtitle: { en: "In millions of US dollars. The US leads at $831 million, but the notable movement is lower down the table — Greece and Romania outspending France and Italy marks a real redistribution of European AI funding.",
                zh: "單位：百萬美元。美國以 8.31 億美元領先，但值得注意的變化在表格下半 — 希臘與羅馬尼亞的支出超過法國與義大利，代表歐洲 AI 經費出現了實質的重新分配。" },
    series: [
      { label: { en: "United States", zh: "美國" },   value: 831 },
      { label: { en: "United Kingdom", zh: "英國" },  value: 263 },
      { label: { en: "Spain", zh: "西班牙" },         value: 50 },
      { label: { en: "Germany", zh: "德國" },         value: 50 },
      { label: { en: "Greece", zh: "希臘" },          value: 37 },
      { label: { en: "Romania", zh: "羅馬尼亞" },     value: 31 }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 6 · Policy and Governance.",
                zh: "第 6 章「政策與治理」的頭條發現。" },
    quotes: [
      { text: { en: "US states are leading the way on AI legislation amid slow progress at the federal level: one state law in 2016, 49 in 2023, 131 in 2024.",
                zh: "在聯邦進展緩慢之際，美國各州在 AI 立法上一路領先：2016 年 1 部州法、2023 年 49 部、2024 年 131 部。" },
        by: "Chapter 6 · Policy and Governance" },
      { text: { en: "Across 75 geographic areas, AI mentions in legislative proceedings rose 21.3% in 2024 to 1,889 — more than ninefold growth since 2016.",
                zh: "在 75 個地理區中，立法程序提及 AI 的次數在 2024 年成長 21.3% 至 1,889 次 — 自 2016 年以來成長超過九倍。" },
        by: "Chapter 6 · Policy and Governance" },
      { text: { en: "In 2024, 59 US AI-related federal regulations were introduced — more than double 2023's 25 — from a record 42 unique agencies.",
                zh: "2024 年美國推出 59 項 AI 相關聯邦法規 — 是 2023 年 25 項的兩倍多 — 來自破紀錄的 42 個不同機關。" },
        by: "Chapter 6 · Policy and Governance" },
      { text: { en: "Canada announced CA$2.4 billion, China launched a $47.5 billion semiconductor fund, France committed €109 billion, India pledged $1.25 billion, and Saudi Arabia's Project Transcendence represents a $100 billion initiative.",
                zh: "加拿大宣布 24 億加幣，中國啟動 475 億美元半導體基金，法國承諾 1,090 億歐元，印度投入 12.5 億美元，沙烏地阿拉伯的「超越計畫」則代表一項 1,000 億美元的倡議。" },
        by: "Chapter 6 · Policy and Governance" },
      { text: { en: "In 2023 the US Department of Defense took 75% of American AI contract spending. In Europe, defense took 0.84%.",
                zh: "2023 年，美國國防部拿走美國 AI 契約支出的 75%。在歐洲，國防只拿到 0.84%。" },
        by: "Chapter 6 · Policy and Governance" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav: { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read the full Policy and Governance chapter", zh: "閱讀完整的政策與治理章節" },
    text:  { en: "Chapter 6 (sections 6.1–6.3) with every figure and citation is free from Stanford HAI. Or head back to the report highlights and eight-chapter overview.",
             zh: "第 6 章(6.1–6.3 各節)連同所有圖表與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與八大章節總覽。" },
    link:  { label: { en: "Open the AI Index Report 2025 →", zh: "前往 AI 指數報告 2025 →" },
             url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" }
  }
];

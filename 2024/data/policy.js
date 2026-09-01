/* =========================================================================
   Policy and Governance — deep dive · policy.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2024, Chapter 7
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   A composite deep-dive page (same engine + styles as the rest of the site).
   The 2024 edition reports on calendar year 2023 — the first full year after
   ChatGPT, when lawmakers everywhere started talking about AI and executive
   agencies started writing the actual rules. Every figure below comes from
   Chapter 7: 7.1 Overview of AI Policy in 2023, 7.2 AI and Policymaking,
   7.3 National AI Strategies, 7.4 AI Regulation, and 7.5 U.S. Public
   Investment in AI. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "policy";

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Policy & Governance · a chapter deep dive", zh: "政策與治理專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "Everyone talked about AI. Regulators are the ones who wrote the rules.",
                zh: "所有人都在談 AI，真正把規則寫下來的是監管機關" },
    subtitle: { en: "Chapter 7 of the AI Index 2024 covers 2023, the year AI policy discourse went global. Legislative attention roughly doubled worldwide, the US Congress proposed 181 AI-related bills and passed one, and the work that actually landed came from executive agencies — 25 federal regulations, up 56.3% in a single year. The numbers:",
                zh: "AI 指數 2024 第 7 章講的是 2023 年 — AI 政策討論真正全球化的一年。全球立法關注度大約翻倍，美國國會提出 181 件 AI 相關法案、通過 1 件，而真正落地的是行政機關的動作 — 25 項聯邦法規，一年之內成長 56.3%。先看數字：" },
    stats: [
      { label: { en: "AI-related bills proposed in the US Congress in 2023 (88 in 2022); one passed", zh: "2023 年美國國會提出的 AI 相關法案數(2022 年為 88 件)，通過 1 件" }, value: 181 },
      { label: { en: "AI-related regulations enacted by US federal agencies in 2023 (just 1 in 2016)", zh: "2023 年美國聯邦機關發布的 AI 相關法規數(2016 年僅 1 項)" }, value: 25 },
      { label: { en: "percent growth in US AI-related regulations over the past year", zh: "美國 AI 相關法規在這一年的成長率(%)" }, value: 56.3 },
      { label: { en: "AI mentions in legislative proceedings across 80 countries in 2023 (1,247 in 2022)", zh: "2023 年 80 個國家立法程序中提及 AI 的次數(2022 年為 1,247 次)" }, value: 2175 },
      { label: { en: "US regulatory agencies that issued an AI regulation in 2023 (17 in 2022)", zh: "2023 年發布 AI 法規的美國監管機關數(2022 年為 17 個)" }, value: 21 },
      { label: { en: "national AI strategies released worldwide as of January 2024 (8 new in 2023)", zh: "截至 2024 年 1 月全球發布的國家 AI 戰略數(2023 年新增 8 份)" }, value: 75 }
    ]
  },

  /* --------------------------------------------------- 7.1 POLICY TIMELINE */
  {
    type: "timeline",
    id: "year-in-policy",
    nav:      { en: "7.1 Year in policy", zh: "7.1 政策大事記" },
    title:    { en: "7.1 — The year AI policy became a global conversation",
                zh: "7.1 — AI 政策變成全球話題的這一年" },
    subtitle: { en: "The AI Index Steering Committee’s selection of the most significant AI-related policy events of 2023. China regulated first, the US Senate drafted, the White House ordered, Britain convened, and Brussels closed the year with a deal.",
                zh: "AI 指數指導委員會選出的 2023 年最重要 AI 政策事件。中國最早出手監管，美國參議院忙著擬案，白宮下了行政命令，英國辦了高峰會，而布魯塞爾在年底談成了協議。" },
    events: [
      { date:  { en: "Jan 10, 2023", zh: "2023 年 1 月 10 日" },
        title: { en: "China regulates “deep synthesis” of the internet", zh: "中國規範網路「深度合成」" },
        body:  { en: "China introduces regulations aimed at deep synthesis technology to tackle security issues around realistic virtual entities and multimodal media, including deepfakes. They apply to both providers and users across media types and mandate preventing illegal content, verifying user identities, securing consent for biometric editing, safeguarding data security, and enforcing content moderation.",
                 zh: "中國推出針對「深度合成」技術的規範，處理擬真虛擬人物與多模態媒體(包含深偽)帶來的安全問題。規範同時適用於提供者與使用者、橫跨各類媒體，要求防止違法內容、驗證使用者身分、生物特徵編輯須取得同意、保障資料安全，並落實內容審核。" } },
      { date:  { en: "Mar 22, 2023", zh: "2023 年 3 月 22 日" },
        title: { en: "US legislators propose the AI for National Security Act", zh: "美國議員提出《國家安全 AI 法案》" },
        body:  { en: "The bipartisan bill clarifies and solidifies the Department of Defense’s authority to acquire AI-based endpoint security tools so it can automatically detect and mitigate threats to its networks and digital infrastructure, and adopt commercial technology fast enough to match adversaries.",
                 zh: "這項跨黨派法案釐清並確立國防部採購 AI 端點安全工具的權限，使其能自動偵測並緩解對網路與數位基礎設施的威脅，也讓國防部採用商用技術的速度足以跟上對手。" } },
      { date:  { en: "Jun 20, 2023", zh: "2023 年 6 月 20 日" },
        title: { en: "US policymakers propose a National AI Commission", zh: "美國議員提案設立國家 AI 委員會" },
        body:  { en: "The National AI Commission Act calls for a commission tasked with crafting a comprehensive AI regulatory framework. The bipartisan initiative stresses expert input given AI’s speed and complexity, and focuses on mitigating risks while preserving US leadership in AI research and development.",
                 zh: "《國家 AI 委員會法案》要求成立一個委員會，負責擬定完整的 AI 監管框架。這項跨黨派提案強調 AI 的變化速度與複雜度需要專家意見，重點在降低風險，同時維持美國在 AI 研發上的領先。" } },
      { date:  { en: "Jul 21, 2023", zh: "2023 年 7 月 21 日" },
        title: { en: "Seven AI firms sign voluntary White House commitments", zh: "七家 AI 公司簽署白宮自願承諾" },
        body:  { en: "The Biden-Harris administration obtains voluntary pledges from Google, Microsoft, Meta, Amazon, OpenAI, Anthropic, and Inflection. The commitments cover internal and external security assessments before launch, sharing information on identified risks, enabling public reporting of issues, and disclosing when content is AI-generated.",
                 zh: "拜登-賀錦麗政府取得 Google、Microsoft、Meta、Amazon、OpenAI、Anthropic 與 Inflection 七家公司的自願承諾。內容包括模型上線前的內外部安全評估、分享已辨識的風險資訊、開放外界通報問題，以及揭露內容是否由 AI 生成。" } },
      { date:  { en: "Jul 27, 2023", zh: "2023 年 7 月 27 日" },
        title: { en: "The US Senate proposes the CREATE AI Act", zh: "美國參議院提出《CREATE AI 法案》" },
        body:  { en: "The act would establish the National Artificial Intelligence Research Resource (NAIRR), a national infrastructure giving researchers and students access to compute, curated datasets, educational tools, and AI testbeds — aimed at strengthening the country’s ability to test and evaluate AI systems.",
                 zh: "這項法案要設立「國家 AI 研究資源」(NAIRR)，一套讓研究者與學生能取得算力、整理過的資料集、教學工具與 AI 測試平台的國家級基礎設施，目標是強化美國測試與評估 AI 系統的能力。" } },
      { date:  { en: "Aug 15, 2023", zh: "2023 年 8 月 15 日" },
        title: { en: "China softens its generative AI measures", zh: "中國放軟生成式 AI 管理辦法" },
        body:  { en: "The updated policy takes a more targeted approach, regulating applications with public implications rather than everything. The language shifts from directives like “ensure the truth, accuracy, objectivity, and diversity of the data” to “employ effective measures to enhance the quality of training data,” and the revised rules encourage generative AI development instead of leading with punishment.",
                 zh: "更新後的政策改採更有針對性的做法，管的是有公共影響的應用，而不是一律全管。用語也從「確保資料的真實性、準確性、客觀性、多樣性」改成「採取有效措施提高訓練資料品質」，修訂後的規定轉為鼓勵生成式 AI 發展，而非以懲罰為主軸。" } },
      { date:  { en: "Sep 12, 2023", zh: "2023 年 9 月 12 日" },
        title: { en: "US Senate bill targets deceptive AI in elections", zh: "美國參議院法案鎖定選舉中的欺騙性 AI" },
        body:  { en: "The bipartisan Protect Elections from Deceptive AI Act seeks to prohibit using AI to create materially deceptive content that falsely represents federal candidates in political advertisements, banning distribution of deceptive AI-generated audio or visual material about candidates for federal office.",
                 zh: "跨黨派的《保護選舉免於欺騙性 AI 法案》要禁止以 AI 製作在政治廣告中不實呈現聯邦候選人的實質欺騙性內容，並禁止散布關於聯邦公職候選人的欺騙性 AI 生成影音素材。" } },
      { date:  { en: "Sep 18, 2023", zh: "2023 年 9 月 18 日" },
        title: { en: "The UK proposes principles for competitive AI markets", zh: "英國提出 AI 市場競爭原則" },
        body:  { en: "The Competition and Markets Authority proposes principles to keep AI markets competitive while protecting consumers: accountability for AI outputs, continuous access to essential inputs, a diversity of business models, choice for businesses, flexibility to switch between models, and fair practices to prevent anticompetitive behavior.",
                 zh: "英國競爭與市場管理局提出一套原則，要維持 AI 市場的競爭並保護消費者：對 AI 輸出負責、持續取得關鍵投入要素、商業模式多元、企業有選擇權、可彈性在不同模型之間切換，以及以公平做法防止反競爭行為。" } },
      { date:  { en: "Oct 30, 2023", zh: "2023 年 10 月 30 日" },
        title: { en: "President Biden issues the Executive Order on Safe, Secure, and Trustworthy AI", zh: "拜登總統簽署安全、可靠、值得信任 AI 行政命令" },
        body:  { en: "The order sets new benchmarks for AI safety and security, privacy protection, equity and civil rights, competition and innovation. It mandates a national security memorandum on military and intelligence use of AI, tasks the Department of Education with AI’s safe use in education, encourages the FCC to assess AI’s impact on telecommunications, and instructs NIST to formulate guidelines and best practices for developing and deploying secure, reliable, ethical AI.",
                 zh: "這道命令為 AI 安全與資安、隱私保護、平權與公民權利、競爭與創新訂出新標準。它要求提出一份國安備忘錄，規範 AI 在軍事與情報上的使用；責成教育部處理 AI 在教育中的安全使用；鼓勵聯邦通訊委員會評估 AI 對電信的影響；並指示 NIST 制定開發與部署安全、可靠、合乎倫理 AI 的指引與最佳實務。" } },
      { date:  { en: "Oct 30, 2023", zh: "2023 年 10 月 30 日" },
        title: { en: "The UK Frontier AI taskforce publishes its second progress report", zh: "英國前沿 AI 任務小組發布第二份進度報告" },
        body:  { en: "The taskforce forms new alliances with leading AI organizations and advances the UK’s AI Research Resource, to be known as Isambard-AI, a supercomputer built for compute-intensive safety research. The report also describes partnerships giving the taskforce early access to leading companies’ models.",
                 zh: "任務小組與主要 AI 組織建立新的合作關係，並推進英國的 AI 研究資源建置 — 名為 Isambard-AI 的超級電腦，專為運算密集的安全研究而設。報告也說明它與領先企業的合作，讓小組能提早取用對方的模型。" } },
      { date:  { en: "Nov 1, 2023", zh: "2023 年 11 月 1 日" },
        title: { en: "The UK hosts the AI Safety Summit at Bletchley Park", zh: "英國在布萊切利園主辦 AI 安全高峰會" },
        body:  { en: "The summit produces the Bletchley Declaration, endorsed by 28 countries including China and the United States — a significant global agreement on AI safety. The UK also unveils the world’s first AI Safety Institute. Reactions are mixed, with some experts calling for more ambitious measures.",
                 zh: "高峰會促成《布萊切利宣言》，由包含中國與美國在內的 28 個國家背書，是 AI 安全上一次重要的全球共識。英國同時揭幕全球第一所 AI 安全研究院。外界反應不一，部分專家認為政策力道還可以更大。" } },
      { date:  { en: "Nov 2, 2023", zh: "2023 年 11 月 2 日" },
        title: { en: "The UK announces its AI Safety Institute", zh: "英國宣布成立 AI 安全研究院" },
        body:  { en: "The first government-supported entity dedicated to advancing AI safety in the public interest aims to build the sociotechnical framework needed to understand and govern the risks of advanced AI, conduct fundamental safety research, and create the technical tools required for effective AI governance — positioning the UK as a global center for safety research.",
                 zh: "這是第一個由政府支持、以公共利益推進 AI 安全的機構，目標是建立理解與治理先進 AI 風險所需的社會技術框架、進行基礎安全研究，並打造有效 AI 治理所需的技術工具，把英國推成全球安全研究的重鎮。" } },
      { date:  { en: "Dec 9, 2023", zh: "2023 年 12 月 9 日" },
        title: { en: "Europeans reach a deal on the EU AI Act", zh: "歐洲就歐盟 AI 法案達成協議" },
        body:  { en: "European lawmakers reach a tentative deal on the AI Act, which establishes a risk-based regulatory framework: systems with unacceptable risks such as behavioral manipulators are prohibited, high-risk systems are classified into product-based and critical sectors, generative AI must meet transparency standards, and low-risk AI including deepfake technology carries basic transparency obligations. The act was enacted in 2024.",
                 zh: "歐洲立法者就 AI 法案達成臨時協議，建立以風險為基礎的監管框架：行為操縱等不可接受風險的系統遭禁止，高風險系統再分為產品類與關鍵領域類，生成式 AI 必須符合透明度標準，深偽等低風險 AI 則負基本透明義務。這部法案在 2024 年正式通過。" } }
    ]
  },

  /* ------------------------------------------------- 7.2 LEGISLATION PROSE */
  {
    type: "prose",
    id: "legislation",
    nav:      { en: "7.2 Legislation", zh: "7.2 立法" },
    title:    { en: "7.2 — 181 bills proposed in Congress. One passed.",
                zh: "7.2 — 國會提出 181 件法案，通過 1 件" },
    subtitle: { en: "The AI Index tracked legislation containing the term “artificial intelligence” in 128 countries from 2016 to 2023. Attention rose almost everywhere; enacted law did not follow at the same speed — least of all in Washington.",
                zh: "AI 指數追蹤了 128 個國家在 2016 至 2023 年間含有「人工智慧」一詞的立法。關注度幾乎在各地都上升，但真正成為法律的部分沒有跟上同樣的速度 — 華府尤其如此。" },
    blocks: [
      { type: "p",
        text: { en: "Of the 128 countries analyzed, only 32 have enacted at least one AI-related bill, for a global total of 148 laws since 2016. The annual figure actually fell in 2023, to 28 from 39 the year before, though it remains far above the single bill of 2016. Belgium led 2023 with five laws; France, South Korea, and the United Kingdom passed three each. Cumulatively the United States leads with 23, followed by Portugal (15) and Belgium (12). And most of this legislation is not really about AI: of the 28 bills passed in 2023, just two were coded as highly relevant to AI and 18 as medium relevance.",
                zh: "在分析的 128 個國家中，只有 32 個至少通過一部 AI 相關法律，自 2016 年起全球共 148 部。2023 年的年產出其實還下滑了，從前一年的 39 部降到 28 部，但仍遠高於 2016 年的僅僅 1 部。2023 年由比利時以 5 部領先，法國、南韓與英國各 3 部。累計來看，美國以 23 部居首，葡萄牙(15)與比利時(12)次之。而這些立法多數其實不是在談 AI：2023 年通過的 28 部法案裡，只有 2 部被歸為與 AI 高度相關，18 部為中度相關。" } },
      { type: "h3",
        text: { en: "The federal bottleneck", zh: "聯邦的瓶頸" } },
      { type: "p",
        text: { en: "In the US Congress, proposed AI-related bills more than doubled, from 88 in 2022 to 181 in 2023. One passed. Interest is easier to see in committee reports: AI was mentioned 48 times in the 118th session by the end of 2023, and because that session was only about halfway through — it ran to January 2025 — the AI Index judged it on pace to surpass every session since tracking began in 2001. Appropriations and Science, Space, and Technology led the House with seven mentions each; Senate Appropriations led with nine.",
                zh: "在美國國會，提出的 AI 相關法案從 2022 年的 88 件翻倍成長到 2023 年的 181 件。通過的有 1 件。興趣在委員會報告裡更看得出來：到 2023 年底為止，第 118 屆會期已提及 AI 48 次，而這屆會期當時才走了一半左右(會期到 2025 年 1 月)，AI 指數因此判斷它有機會超越 2001 年開始追蹤以來的所有會期。眾議院以撥款委員會與科學、太空與技術委員會各 7 次領先；參議院則是撥款委員會的 9 次最多。" } },
      { type: "h3",
        text: { en: "The states did not wait", zh: "各州沒有等" } },
      { type: "p",
        text: { en: "State legislatures proposed 150 AI-related bills in 2023, up from 61 in 2022, and enacted 38 of them — a far higher hit rate than the federal level. California led with seven new laws, followed by Virginia (five) and Maryland (three). Across 2016 to 2023 California has passed 13 in total, ahead of Maryland (10) and Washington (7), which means more than half of California’s eight-year output arrived in 2023 alone.",
                zh: "各州議會在 2023 年提出 150 件 AI 相關法案，高於 2022 年的 61 件，其中 38 件成為法律 — 通過比例遠高於聯邦層級。加州以 7 部新法領先，維吉尼亞(5)與馬里蘭(3)次之。2016 至 2023 年累計，加州共通過 13 部，領先馬里蘭(10)與華盛頓州(7) — 也就是說，加州八年產出的一半以上是在 2023 這一年出現的。" } },
      { type: "h3",
        text: { en: "Attention is easier to measure than law", zh: "關注度比法律好量" } },
      { type: "ul",
        items: {
          en: ["Mentions of AI in legislative proceedings nearly doubled, from 1,247 in 2022 to 2,175 in 2023 across the 80 countries analyzed — almost tenfold growth since 2016. Forty-eight of those 80 countries mentioned AI at least once, and at least one country on every continent discussed it.",
               "The United Kingdom led 2023 with 405 mentions, ahead of the United States (240) and Australia (227). Aggregated from 2016 to 2023 the order is similar: the UK first with 1,490, then Spain (886) and the United States (868).",
               "The subject matter of enacted AI law broadened sharply. Historically it clustered in economics and public finance, because AI provisions ride inside appropriations bills; in 2023 two bills passed in each of six different categories — armed forces and national security; civil rights and liberties; commerce; education; labor and employment; and science, technology, and communications."],
          zh: ["立法程序中提及 AI 的次數在分析的 80 個國家中幾乎翻倍，從 2022 年的 1,247 次來到 2023 年的 2,175 次 — 自 2016 年以來成長近十倍。這 80 國中有 48 國至少提到 AI 一次，而且每個大洲都至少有一個國家討論過 AI。",
               "2023 年由英國以 405 次領先，美國(240)與澳洲(227)次之。若把 2016 至 2023 年加總，排序也差不多：英國以 1,490 次居首，西班牙(886)與美國(868)在後。",
               "已通過 AI 法律涵蓋的主題明顯變廣。過去它集中在經濟與公共財政，因為 AI 條文常搭著撥款法案一起走；2023 年則在六個不同類別各通過 2 部 — 武裝部隊與國家安全、公民權利與自由、商業、教育、勞動與就業，以及科學、技術與傳播。"]
        } }
    ]
  },

  /* ----------------------------------------------------- US STATE LAWS CHART */
  {
    type: "bars",
    id: "state-laws",
    nav:      { en: "US state laws", zh: "美國州級法規" },
    title:    { en: "AI laws enacted by US state, 2016–23",
                zh: "美國各州通過的 AI 法律數，2016–23" },
    subtitle: { en: "Cumulative AI-related bills passed into law by state. California’s 13 include the seven it passed in 2023 alone — while 25 states had still enacted nothing at all by the end of that year.",
                zh: "各州累計通過成為法律的 AI 相關法案數。加州的 13 部裡有 7 部是 2023 一年之內通過的 — 而到那一年年底，全美仍有 25 個州一部都沒有。" },
    series: [
      { label: { en: "California", zh: "加州" },       value: 13 },
      { label: { en: "Maryland", zh: "馬里蘭" },       value: 10 },
      { label: { en: "Washington", zh: "華盛頓州" },   value: 7 },
      { label: { en: "Virginia", zh: "維吉尼亞" },     value: 6 },
      { label: { en: "Massachusetts", zh: "麻州" },    value: 6 },
      { label: { en: "Vermont", zh: "佛蒙特" },        value: 4 }
    ]
  },

  /* -------------------------------------------------- GLOBAL AI LAWS CHART */
  {
    type: "bars",
    id: "country-laws",
    nav:      { en: "Laws by country", zh: "各國立法" },
    title:    { en: "AI-related laws passed by country, 2016–23",
                zh: "各國通過的 AI 相關法律數，2016–23" },
    subtitle: { en: "Of the 128 countries analyzed, only 32 have ever enacted an AI-related law. These six account for more than half of the global total of 148.",
                zh: "在分析的 128 個國家中，只有 32 個曾通過任何一部 AI 相關法律。這六個國家就佔了全球 148 部總數的一半以上。" },
    series: [
      { label: { en: "United States", zh: "美國" },   value: 23 },
      { label: { en: "Portugal", zh: "葡萄牙" },      value: 15 },
      { label: { en: "Belgium", zh: "比利時" },       value: 12 },
      { label: { en: "Spain", zh: "西班牙" },         value: 11 },
      { label: { en: "South Korea", zh: "南韓" },     value: 11 },
      { label: { en: "Italy", zh: "義大利" },         value: 10 }
    ]
  },

  /* --------------------------------------------------- 7.4 AI REGULATION */
  {
    type: "prose",
    id: "regulation",
    nav:      { en: "7.4 Regulation", zh: "7.4 監管" },
    title:    { en: "7.4 — Regulations are where US policy actually happened",
                zh: "7.4 — 美國政策真正在動的地方是法規" },
    subtitle: { en: "Regulations are the detailed directives executive agencies craft to enforce legislation. Congress passed one AI bill in 2023; agencies issued 25 AI-related regulations, and they leaned restrictive.",
                zh: "法規是行政機關為執行立法而擬定的細部指令。2023 年美國國會只通過 1 件 AI 法案，行政機關卻發布了 25 項 AI 相關法規，而且明顯偏向限制。" },
    blocks: [
      { type: "p",
        text: { en: "The AI Index searched the Federal Register — a repository covering more than 436 agencies — for “artificial intelligence” and found 25 AI-related regulations in 2023, against just one in 2016. The past year alone accounted for 56.3% growth. They came from 21 different agencies, up from 17 in 2022, and the newcomers say something about how far AI has spread: the Department of Transportation, the Department of Energy, and the Occupational Safety and Health Administration all issued their first AI-related regulation in 2023. The Executive Office of the President and the Commerce Department led with five each, followed by the Department of Health and Human Services and the Bureau of Industry and Security with four each.",
                zh: "AI 指數在涵蓋逾 436 個機關的《聯邦公報》上搜尋「人工智慧」，找到 2023 年有 25 項 AI 相關法規，相對於 2016 年的僅僅 1 項，光是這一年就成長了 56.3%。它們來自 21 個不同機關，高於 2022 年的 17 個，而新加入者本身就說明了 AI 擴散得多廣：運輸部、能源部與職業安全衛生署都在 2023 年發布了各自的第一項 AI 相關法規。總統行政辦公室與商務部各以 5 項最多，衛生及公共服務部與工業暨安全局各 4 項次之。" } },
      { type: "h3",
        text: { en: "Restrictive, and increasingly so", zh: "偏向限制，而且愈來愈明顯" } },
      { type: "p",
        text: { en: "In 2023 there were 10 restrictive AI regulations against just three expansive ones — an inversion of 2020, when four were expansive and one restrictive. The regulations are also getting closer to their subject: four of the 25 were coded as highly relevant to AI, the most since tracking began in 2016. A high-relevance example is the Copyright Office and Library of Congress’ registration guidance for works containing AI-generated material; a medium-relevance one is the SEC’s cybersecurity risk management and incident disclosure rule. By subject matter, foreign trade and international finance came first with three, followed by health, commerce, and science, technology and communications with two each.",
                zh: "2023 年有 10 項限制型 AI 法規，擴張型只有 3 項 — 與 2020 年恰好相反，那年是 4 項擴張、1 項限制。法規也愈來愈貼近 AI 本身：25 項中有 4 項被歸為與 AI 高度相關，是 2016 年開始追蹤以來最多的一年。高度相關的例子是著作權局與國會圖書館針對含 AI 生成素材作品的登記指引；中度相關的例子則是證券交易委員會的網路安全風險管理與事件揭露規則。以主題來看，對外貿易與國際金融以 3 項居首，健康、商業與科學技術傳播各 2 項次之。" } },
      { type: "h3",
        text: { en: "Brussels: more regulations, less AI inside them", zh: "布魯塞爾：法規變多，含 AI 量卻更低" } },
      { type: "ul",
        items: {
          en: ["EU AI-related regulations rose from 22 in 2022 to 32 in 2023, still short of the 2021 peak of 46. The AI Index searched EUR-Lex and counted only documents with binding regulatory authority.",
               "Of the 32 passed in 2023, two had high relevance to AI, 13 medium, and 17 low — a lower share of substantive AI content than the US mix in the same year.",
               "The Council of the European Union (13) and the European Parliament (9) were the main originators. The most common subjects were science, technology and communications (five) and government operations and politics (three) — the latter including a recommendation on inclusive and resilient electoral processes that explicitly addresses AI-generated political misinformation."],
          zh: ["歐盟的 AI 相關法規從 2022 年的 22 項增加到 2023 年的 32 項，仍未回到 2021 年 46 項的高峰。AI 指數在 EUR-Lex 上搜尋，只計入具有拘束力的法規文件。",
               "2023 年通過的 32 項中，2 項與 AI 高度相關、13 項中度、17 項低度 — 實質 AI 含量的比例比同一年的美國低。",
               "主要來源是歐盟理事會(13 項)與歐洲議會(9 項)。最常見的主題是科學、技術與傳播(5 項)以及政府運作與政治(3 項)，後者包括一份關於包容且韌性選舉程序的建議，明確處理 AI 生成的政治不實資訊。"]
        } }
    ]
  },

  /* ------------------------------------------------ LANDMARK POLICY CARDS */
  {
    type: "cards",
    id: "landmarks",
    nav:      { en: "Landmarks", zh: "指標政策" },
    title:    { en: "Six moves that defined 2023",
                zh: "定義 2023 年的六個動作" },
    subtitle: { en: "The instruments policymakers reached for during the year — an act, an executive order, a summit, a set of pledges, two Chinese rulebooks, and 75 national strategies. Tap a card for the detail.",
                zh: "這一年政策制定者用上的工具 — 一部法案、一道行政命令、一場高峰會、一組承諾、兩份中國規範，以及 75 份國家戰略。點開卡片看細節。" },
    items: [
      { slug: "eu-ai-act",
        title:   { en: "The EU AI Act deal", zh: "歐盟 AI 法案協議" },
        summary: { en: "On December 9, 2023 European lawmakers reached a tentative deal on the world’s first comprehensive AI law, enacted the following year.",
                   zh: "2023 年 12 月 9 日，歐洲立法者就全球第一部全面性 AI 法律達成臨時協議，隔年正式通過。" },
        tags: ["eu", "regulation"],
        overview: { en: "The act sets up a risk-based framework. Systems with unacceptable risks, such as behavioral manipulators, are prohibited. High-risk systems are classified into product-based and critical-sector categories. Generative AI must meet transparency standards, and low-risk AI including deepfake technology carries fundamental transparency obligations.",
                    zh: "這部法案建立以風險為基礎的框架。不可接受風險的系統(例如行為操縱工具)一律禁止；高風險系統再分為產品類與關鍵領域類；生成式 AI 必須符合透明度標準，包含深偽技術在內的低風險 AI 則負基本透明義務。" } },
      { slug: "biden-executive-order",
        title:   { en: "Biden’s Executive Order on AI", zh: "拜登的 AI 行政命令" },
        summary: { en: "Signed October 30, 2023, the most notable US AI policy initiative of the year — and the reason so many agencies started writing AI rules.",
                   zh: "2023 年 10 月 30 日簽署，是該年美國最受矚目的 AI 政策動作，也是眾多機關開始訂 AI 規則的原因。" },
        tags: ["us", "regulation"],
        overview: { en: "The order establishes benchmarks for AI safety and security, privacy protection, equity and civil rights, competition and innovation. It mandates a national security memorandum covering military and intelligence use of AI, tasks the Department of Education with the safe and responsible use of AI in education, encourages the FCC to assess AI’s impact on telecommunications, and instructs NIST to formulate guidelines and best practices for developing and deploying secure, reliable, and ethical AI.",
                    zh: "這道命令為 AI 安全與資安、隱私保護、平權與公民權利、競爭與創新訂出基準。它要求提出涵蓋軍事與情報用途的國安備忘錄，責成教育部處理 AI 在教育中的安全與負責任使用，鼓勵聯邦通訊委員會評估 AI 對電信的衝擊，並指示 NIST 制定開發與部署安全、可靠且合乎倫理 AI 的指引與最佳實務。" } },
      { slug: "bletchley-declaration",
        title:   { en: "Bletchley Park and the first safety institute", zh: "布萊切利園與第一所安全研究院" },
        summary: { en: "The UK AI Safety Summit on November 1 produced a declaration endorsed by 28 countries, including China and the United States.",
                   zh: "11 月 1 日的英國 AI 安全高峰會促成一份由 28 國背書的宣言，中國與美國都在其中。" },
        tags: ["safety", "uk"],
        overview: { en: "The summit sought to tackle AI risks and promote global cooperation, culminating in the Bletchley Declaration — a significant global agreement on AI safety. The UK also unveiled the world’s first AI Safety Institute, a government-supported body dedicated to safety assessments and research, with the goal of building the sociotechnical framework needed to understand and govern the risks of advanced AI. Reactions were mixed: some experts argued for more comprehensive and ambitious measures.",
                    zh: "高峰會的目標是處理 AI 風險並推動全球合作，最終形成《布萊切利宣言》 — AI 安全上一次重要的全球共識。英國同時揭幕全球第一所 AI 安全研究院，這是由政府支持、專責安全評估與研究的機構，目標是建立理解與治理先進 AI 風險所需的社會技術框架。外界反應不一，部分專家認為政策應該更全面、更有企圖心。" } },
      { slug: "voluntary-commitments",
        title:   { en: "Seven companies, one voluntary pledge", zh: "七家公司，一份自願承諾" },
        summary: { en: "On July 21 the Biden-Harris administration obtained voluntary commitments from seven major AI firms — five months before the EU closed its deal.",
                   zh: "7 月 21 日，拜登-賀錦麗政府取得七家主要 AI 公司的自願承諾 — 比歐盟達成協議早了五個月。" },
        tags: ["us", "voluntary"],
        overview: { en: "Google, Microsoft, Meta, Amazon, OpenAI, Anthropic, and Inflection pledged to promote AI that is safe, secure, and reliable. The commitments involve conducting internal and external security assessments of AI systems prior to launch, sharing information on identified risks, enabling public reporting of issues, and disclosing when content is AI-generated. They are pledges, not law — which is why the AI Index files them under policy events rather than legislation.",
                    zh: "Google、Microsoft、Meta、Amazon、OpenAI、Anthropic 與 Inflection 承諾推動安全、可靠的 AI 發展。內容包括在系統上線前進行內外部安全評估、分享已辨識的風險資訊、開放外界通報問題，以及揭露內容是否由 AI 生成。這些是承諾而非法律 — 所以 AI 指數把它們歸在政策事件，而不是立法。" } },
      { slug: "china-rulebooks",
        title:   { en: "China regulated twice, and softened once", zh: "中國兩度出手，其中一次放軟" },
        summary: { en: "Deep synthesis rules in January, then an August revision of the generative AI measures that traded blanket control for a targeted approach.",
                   zh: "1 月的深度合成規範，接著是 8 月修訂的生成式 AI 辦法 — 從全面管制改為針對性管理。" },
        tags: ["china", "regulation"],
        overview: { en: "The January rules target deep synthesis technology and the security issues around realistic virtual entities, multimodal media, and deepfakes; they apply to providers and users alike and mandate preventing illegal content, verifying identities, obtaining consent for biometric editing, and enforcing content moderation. The August update narrowed the scope to applications with public implications, softened directives such as “ensure the truth, accuracy, objectivity, and diversity of the data” into “employ effective measures to enhance the quality of training data,” and shifted the emphasis from punishment toward encouraging development.",
                    zh: "1 月的規範針對深度合成技術，以及擬真虛擬人物、多模態媒體與深偽帶來的安全問題；它同時適用於提供者與使用者，要求防止違法內容、驗證身分、生物特徵編輯須取得同意，並落實內容審核。8 月的更新則把範圍收斂到有公共影響的應用，把「確保資料的真實性、準確性、客觀性、多樣性」這類指令放軟為「採取有效措施提高訓練資料品質」，重心也從懲罰轉向鼓勵發展。" } },
      { slug: "national-strategies",
        title:   { en: "75 national AI strategies and counting", zh: "75 份國家 AI 戰略，還在增加" },
        summary: { en: "Canada published the first in March 2017. By January 2024 the count stood at 75, with eight added during 2023.",
                   zh: "加拿大在 2017 年 3 月發布第一份。到 2024 年 1 月共有 75 份，其中 8 份是 2023 年新增的。" },
        tags: ["strategy"],
        overview: { en: "The peak year was 2019, when 24 strategies were released. The eight added in 2023 — Azerbaijan, Bahrain, Benin, the Dominican Republic, Ethiopia, Iraq, Israel, and Rwanda — came from the Middle East, Africa, and the Caribbean, showing where AI policymaking is still spreading. Seven more countries began developing a strategy in 2023: Antigua and Barbuda, Barbados, Belarus, Costa Rica, Jamaica, Pakistan, and Senegal.",
                    zh: "高峰是 2019 年，那年一口氣發布了 24 份。2023 年新增的 8 份 — 亞塞拜然、巴林、貝南、多明尼加、衣索比亞、伊拉克、以色列與盧安達 — 來自中東、非洲與加勒比海地區，顯示 AI 政策還在往哪裡擴散。另有 7 個國家在 2023 年開始擬定戰略：安地卡及巴布達、巴貝多、白俄羅斯、哥斯大黎加、牙買加、巴基斯坦與塞內加爾。" } }
    ]
  },

  /* ---------------------------------------------- 7.5 US PUBLIC INVESTMENT */
  {
    type: "prose",
    id: "investment",
    nav:      { en: "7.5 Public money", zh: "7.5 公共投資" },
    title:    { en: "7.5 — AI budgets crept. Chip budgets jumped.",
                zh: "7.5 — AI 預算緩步前進，晶片預算暴衝" },
    subtitle: { en: "US federal AI R&D funding and AI contract spending both moved only slightly in 2023. Spending on the microelectronics underneath AI rose by more than half in a single year.",
                zh: "2023 年美國聯邦的 AI 研發經費與 AI 契約支出都只微幅移動，但支撐 AI 的微電子支出，一年之內成長超過五成。" },
    blocks: [
      { type: "p",
        text: { en: "The National Science and Technology Council reports the public-sector AI R&D budget across the agencies in the NITRD Program and the National AI Initiative. In fiscal year 2023, US government agencies allocated $1.8 billion to AI research and development, a figure that has risen every year since FY 2018 and more than tripled from the $0.56 billion of that year. For FY 2024 the request was $1.9 billion. Among agency requests for FY 2024, the National Science Foundation was highest at $531 million, followed by DARPA at $322.1 million and the National Institutes of Health at $284.5 million. These reports exclude classified AI R&D, so they are a floor rather than a total.",
                zh: "國家科學與技術委員會每年公布 NITRD 計畫與國家 AI 倡議底下各機關的公部門 AI 研發預算。2023 會計年度，美國政府機關撥給 AI 研發的總額是 18 億美元，這個數字從 2018 會計年度起逐年上升，相較當年的 5.6 億美元已經增為三倍以上。2024 會計年度的請求則是 19 億美元。就 2024 會計年度的各機關請求金額來看，國家科學基金會以 5.31 億美元最高，DARPA 的 3.221 億美元與國家衛生研究院的 2.845 億美元次之。這些報告不含機密 AI 研發，所以只能當成下限，不是全貌。" } },
      { type: "h3",
        text: { en: "The Pentagon’s own line", zh: "五角大廈自己那條預算" } },
      { type: "p",
        text: { en: "The Department of Defense separately publishes what it requests for nonclassified, AI-specific research, development, test, and evaluation. For FY 2024 it asked for $1.8 billion, a significant increase on the $1.1 billion requested for FY 2023 — a single department requesting about as much as the entire NITRD AI R&D budget.",
                zh: "國防部另外會公布它為非機密、AI 專用的研究、開發、測試與評估所請求的金額。2024 會計年度它要求 18 億美元，比 2023 會計年度的 11 億美元大幅增加 — 單一個部會請求的金額，就大約等於整個 NITRD 的 AI 研發預算。" } },
      { type: "h3",
        text: { en: "Contracts, grants, and where the growth went", zh: "契約、補助，以及成長跑到哪去了" } },
      { type: "ul",
        items: {
          en: ["Total US government spending on AI and autonomy, tracked by Govini, rose only marginally from $3.2 billion in 2022 to $3.3 billion in 2023 — though that is nearly 2.4 times the 2018 level.",
               "The mix moved more than the total. Machine learning took $1.5 billion, up 72% year over year, and computer vision $1.0 billion, up 17%, while autonomy fell 56% to $0.55 billion and natural language processing rose 28% to $0.23 billion.",
               "In FY 2023 prime contracts made up 50.6% of the total awarded and grants 47.6% — $1.68 billion against $1.58 billion, with $0.06 billion in other transaction authority awards. Over the year the contract share fell while the grant share rose.",
               "Microelectronics spending, which the AI Index tracks because GPUs underpin recent AI progress, jumped to $3.9 billion in 2023 from $2.5 billion in 2022 — more than the entire AI and autonomy line, and overwhelmingly awarded as contracts ($3.33 billion of it)."],
          zh: ["Govini 追蹤的美國政府 AI 與自主系統總支出只微幅上升，從 2022 年的 32 億美元到 2023 年的 33 億美元 — 不過這已經接近 2018 年水準的 2.4 倍。",
               "變動比較大的是組成而不是總額。機器學習拿到 15 億美元、年增 72%，電腦視覺 10 億美元、年增 17%；自主系統則下滑 56% 至 5.5 億美元，自然語言處理成長 28% 至 2.3 億美元。",
               "2023 會計年度，主約契約佔撥出總額的 50.6%、補助佔 47.6% — 16.8 億美元對 15.8 億美元，另有 0.6 億美元屬於其他交易授權(OTA)。這一年契約的佔比下降，補助的佔比上升。",
               "AI 指數也追蹤微電子支出，因為近年 AI 進展仰賴 GPU；這筆錢從 2022 年的 25 億美元跳到 2023 年的 39 億美元 — 比整條 AI 與自主系統的預算還多，而且絕大多數(33.3 億美元)是以契約形式發出。"]
        } }
    ]
  },

  /* ------------------------------------------------- AI SPENDING BY SEGMENT */
  {
    type: "bars",
    id: "spending-segments",
    nav:      { en: "AI spending", zh: "採購支出" },
    title:    { en: "US government AI spending by segment, FY 2023",
                zh: "美國政府 AI 支出的分項組成，2023 會計年度" },
    subtitle: { en: "In millions of US dollars. ML = machine learning (+72% year over year), CV = computer vision (+17%), NLP = natural language processing (+28%); autonomy fell 56%.",
                zh: "單位：百萬美元。ML 為機器學習(年增 72%)、CV 為電腦視覺(年增 17%)、NLP 為自然語言處理(年增 28%)；自主系統則下滑 56%。" },
    series: [
      { label: { en: "ML", zh: "機器學習" },       value: 1510 },
      { label: { en: "CV", zh: "電腦視覺" },       value: 1040 },
      { label: { en: "Autonomy", zh: "自主系統" }, value: 550 },
      { label: { en: "NLP", zh: "自然語言" },      value: 230 }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 7 · Policy and Governance.",
                zh: "第 7 章「政策與治理」的頭條發現。" },
    quotes: [
      { text: { en: "In 2023, there were 25 AI-related regulations in the United States, up from just one in 2016. Last year alone, the total number of AI-related regulations grew by 56.3%.",
                zh: "2023 年美國有 25 項 AI 相關法規，2016 年只有 1 項。光是這一年，AI 相關法規總數就成長了 56.3%。" },
        by: "Chapter 7 · Policy and Governance" },
      { text: { en: "The year 2023 witnessed a remarkable increase in AI-related legislation at the federal level, with 181 bills proposed, more than double the 88 proposed in 2022.",
                zh: "2023 年美國聯邦層級的 AI 相關立法大幅增加，提出 181 件法案，是 2022 年 88 件的兩倍以上。" },
        by: "Chapter 7 · Policy and Governance" },
      { text: { en: "Mentions of AI in legislative proceedings across the globe have nearly doubled, rising from 1,247 in 2022 to 2,175 in 2023.",
                zh: "全球立法程序中提及 AI 的次數幾乎翻倍，從 2022 年的 1,247 次上升到 2023 年的 2,175 次。" },
        by: "Chapter 7 · Policy and Governance" },
      { text: { en: "The number of US regulatory agencies issuing AI regulations increased to 21 in 2023 from 17 in 2022, indicating a growing concern over AI regulation among a broader array of American regulatory bodies.",
                zh: "發布 AI 法規的美國監管機關從 2022 年的 17 個增加到 2023 年的 21 個，顯示更廣泛的美國監管單位開始關切 AI 監管問題。" },
        by: "Chapter 7 · Policy and Governance" },
      { text: { en: "The European Union reached a deal on the terms of the AI Act, a landmark piece of legislation enacted in 2024. Meanwhile, President Biden signed an Executive Order on AI, the most notable AI policy initiative in the United States that year.",
                zh: "歐盟就 AI 法案的條款達成協議，這部指標性法律在 2024 年正式通過。同時，拜登總統簽署了 AI 行政命令，是該年美國最受矚目的 AI 政策動作。" },
        by: "Chapter 7 · Policy and Governance" }
    ]
  },

  /* -------------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 7 in full", zh: "閱讀第 7 章原文" },
    text:  { en: "Chapter 7 (sections 7.1–7.5) with every figure and citation is free from Stanford HAI. Or head back to the report highlights and the nine-chapter overview.",
             zh: "第 7 章(7.1–7.5 各節)連同所有圖表與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與九大章節總覽。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

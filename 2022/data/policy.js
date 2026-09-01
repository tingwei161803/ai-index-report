/* =========================================================================
   AI Policy and Governance — deep dive · policy.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2022, Chapter 5
   https://hai.stanford.edu/ai-index/2022-ai-index-report

   The fifth edition's policy chapter, reporting on calendar year 2021. Every
   figure is drawn from Chapter 5: 5.1 AI and Policymaking (global legislation
   records, US federal and state-level bills, AI mentions in legislative
   records, US AI policy papers) and 5.2 U.S. Public Investment in AI
   (nondefense AI R&D budget, DOD budget requests, contract spending).
   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_CHAPTER = "policy";

window.SITE_META = {
  title:    { en: "AI Index Report 2022", zh: "AI 指數報告 2022" },
  subtitle: { en: "AI Policy & Governance · a chapter deep dive", zh: "AI 政策與治理專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "Legislatures learned to talk about AI. They have not learned to pass laws about it.",
                zh: "議會學會了談 AI，還沒學會為它立法" },
    subtitle: { en: "Chapter 5 of the AI Index 2022 reads the legislative record of 25 countries, every US state, and the US Congress for the year 2021. Mentions of AI are multiplying everywhere. Bills are multiplying almost as fast. Laws are not — 130 AI-related bills were proposed in Congress and three passed. The second half of the chapter follows the money instead, and finds that American public AI spending is, overwhelmingly, defense spending. The numbers:",
                zh: "AI 指數 2022 第 5 章翻閱了 25 個國家、美國各州與美國國會在 2021 年的立法紀錄。各地提及 AI 的次數都在倍增，法案數量幾乎同步倍增，通過的法律卻沒有 — 國會提出 130 件 AI 相關法案，只有 3 件通過。本章後半改為追蹤資金，結果發現美國的 AI 公共支出壓倒性地就是國防支出。先看數字：" },
    stats: [
      { label: { en: "AI-related bills passed into law across 25 countries in 2021 (1 in 2016)", zh: "2021 年 25 個國家通過的 AI 相關法案數(2016 年僅 1 件)" }, value: 18 },
      { label: { en: "% of US federal AI-related bills that became law in 2021 (130 proposed, 3 passed)", zh: "% 2021 年美國聯邦 AI 相關法案的通過比例(提案 130 件、通過 3 件)" }, value: 2 },
      { label: { en: "AI-related bills proposed in US state legislatures in 2021 (2 in 2012); 26 passed", zh: "2021 年美國各州議會提出的 AI 相關法案數(2012 年為 2 件)，其中 26 件通過" }, value: 131 },
      { label: { en: "AI mentions in the legislative proceedings of 25 countries in 2021, 7.7× the 2016 level", zh: "2021 年 25 個國家立法程序中提及 AI 的次數，為 2016 年的 7.7 倍" }, value: 1323 },
      { label: { en: "US$ billions the US Department of Defense allocated to AI R&D in FY2021, across 500 programs", zh: "十億美元 — 美國國防部 FY2021 的 AI 研發預算，橫跨 500 項計畫" }, value: 9.26 },
      { label: { en: "US$ billions of US federal AI-related contract spending in 2021 (2020 peak: 1.97)", zh: "十億美元 — 2021 年美國聯邦 AI 相關契約支出(2020 年高點為 1.97)" }, value: 1.79 }
    ]
  },

  /* ------------------------------------------- 5.1 GLOBAL LEGISLATION PROSE */
  {
    type: "prose",
    id: "global-laws",
    nav:      { en: "5.1 Global laws", zh: "5.1 全球立法" },
    title:    { en: "5.1 — Six years, 25 countries, 55 laws",
                zh: "5.1 — 六年、25 個國家、55 部法律" },
    subtitle: { en: "The AI Index searched the legislative records of 25 countries for bills containing the words “artificial intelligence,” in various languages, from 2016 to 2021. The entire six-year harvest is 55 laws — and close to a third of them arrived in the final year.",
                zh: "AI 指數以各種語言的「人工智慧」一詞，搜尋了 25 個國家 2016 至 2021 年的立法紀錄。六年下來的全部收成是 55 部法律，其中將近三分之一集中在最後一年。" },
    blocks: [
      { type: "p",
        text: { en: "The annual count rose from just 1 law in 2016 to 18 in 2021. No country dominates. Spain, the United Kingdom, and the United States each passed three in 2021 — the joint highest — followed by Belgium and Russia with two each, and France, Germany, Italy, Japan, and South Korea with one each. The 2021 chart lists ten countries in total, which means the other 15 in the sample passed nothing that year.",
                zh: "年產出從 2016 年的 1 部升到 2021 年的 18 部。沒有哪一國稱得上主導。2021 年西班牙、英國與美國各通過 3 部並列最高，比利時與俄羅斯各 2 部次之，法國、德國、義大利、日本與南韓各 1 部。2021 年的圖表總共只列出十個國家 — 也就是說，樣本中其餘 15 國那一年一部都沒有。" } },
      { type: "h3",
        text: { en: "The cumulative picture is thinner than the headlines", zh: "累計起來，比新聞標題給人的印象更薄" } },
      { type: "p",
        text: { en: "Summed across 2016–21, the United States leads with 13 laws, its first coming in 2017. Russia follows with six; Belgium, Spain, and the United Kingdom have five each; France, Italy, and South Korea four each; Japan three; China two; and Brazil, Canada, Germany, and India one apiece. That is the whole list. Fourteen countries out of 25 have passed at least one AI-related law in six years.",
                zh: "把 2016 至 2021 年加總，美國以 13 部居首，第一部出現在 2017 年。俄羅斯 6 部次之；比利時、西班牙與英國各 5 部；法國、義大利與南韓各 4 部；日本 3 部；中國 2 部；巴西、加拿大、德國與印度各 1 部。這就是全部名單 — 六年來，25 國中有 14 國至少通過一部 AI 相關法律。" } },
      { type: "h3",
        text: { en: "Two caveats worth carrying forward", zh: "兩點要記得的但書" } },
      { type: "ul",
        items: {
          en: ["The count includes only laws passed by national legislative bodies — congresses and parliaments — with “artificial intelligence” in the title or body of the bill text. Regulations, executive orders, and subnational law fall outside it entirely.",
               "The 25 countries are Australia, Belgium, Brazil, Canada, China, Denmark, Finland, France, Germany, India, Ireland, Italy, Japan, the Netherlands, New Zealand, Norway, Russia, Singapore, South Africa, South Korea, Spain, Sweden, Switzerland, the United Kingdom, and the United States.",
               "Passing a law is not the same as regulating AI. Several of the 55 are appropriations acts that happen to fund an AI program — Canada’s Budget Implementation Act 2017, which authorized a $125 million payment to the Canadian Institute for Advanced Research for a pan-Canadian AI strategy, is one of them."],
          zh: ["統計只納入由國家層級立法機關(國會、議會)通過、且法案標題或內文含有「人工智慧」的法律。行政法規、行政命令與地方層級法律完全不在其中。",
               "這 25 個國家是：澳洲、比利時、巴西、加拿大、中國、丹麥、芬蘭、法國、德國、印度、愛爾蘭、義大利、日本、荷蘭、紐西蘭、挪威、俄羅斯、新加坡、南非、南韓、西班牙、瑞典、瑞士、英國與美國。",
               "通過一部法律，不等於在監管 AI。這 55 部裡有好幾部其實是剛好編列了 AI 經費的預算法案 — 加拿大 2017 年的《預算實施法》授權撥付 1.25 億美元給加拿大高等研究院，用於發展全國性 AI 策略，就是一例。"]
        } }
    ]
  },

  /* --------------------------------------------------- LAWS BY COUNTRY BARS */
  {
    type: "bars",
    id: "laws-by-country",
    nav:      { en: "Laws by country", zh: "各國立法" },
    title:    { en: "AI-related bills passed into law by country, 2016–21",
                zh: "各國通過的 AI 相關法案數，2016–21" },
    subtitle: { en: "Cumulative over six years, across the 25 countries analyzed. The global total is 55 laws; these five account for 34 of them.",
                zh: "25 個受分析國家六年的累計數。全球總數是 55 部，光這五國就佔了 34 部。" },
    series: [
      { label: { en: "United States", zh: "美國" },  value: 13 },
      { label: { en: "Russia", zh: "俄羅斯" },       value: 6 },
      { label: { en: "Belgium", zh: "比利時" },      value: 5 },
      { label: { en: "Spain", zh: "西班牙" },        value: 5 },
      { label: { en: "United Kingdom", zh: "英國" }, value: 5 }
    ]
  },

  /* ------------------------------------------------------- LAWS UP CLOSE */
  {
    type: "cards",
    id: "inside-the-laws",
    nav:      { en: "Inside the laws", zh: "法律內容" },
    title:    { en: "What an “AI law” actually says",
                zh: "所謂的「AI 法律」到底寫了什麼" },
    subtitle: { en: "Seven of the 55, singled out by the AI Index and spanning 2017 to 2021. Read together they show how little the category holds in common: a research grant, a health-data mandate, a regulatory sandbox, an exam-marking pilot, a deepfake research program, an ethics committee, and an environmental monitor.",
                zh: "AI 指數從 55 部中挑出的七部，橫跨 2017 至 2021 年。放在一起看，就知道這個分類內部有多不一致：一筆研究補助、一項醫療資料授權、一個監理沙盒、一個閱卷試辦、一項深偽研究計畫、一個倫理委員會，還有一套環境監測機制。" },
    items: [
      { slug: "canada-2017-cifar",
        title:   { en: "Canada, 2017 — Budget Implementation Act", zh: "加拿大，2017 — 預算實施法" },
        summary: { en: "An AI law that is really a line in a budget: $125 million to a research institute.",
                   zh: "一部其實是預算條文的 AI 法律：1.25 億美元撥給一所研究機構。" },
        tags: ["funding"],
        overview: { en: "A provision of the Budget Implementation Act 2017, No. 1 authorized the Canadian government to make a payment of $125 million to the Canadian Institute for Advanced Research, to support the development of a pan-Canadian artificial intelligence strategy. It is the earliest entry in the AI Index’s selection and sets the tone for much of what follows: the state funding AI capacity rather than constraining it.",
                    zh: "《2017 年預算實施法(第 1 號)》中的一項條文，授權加拿大政府撥付 1.25 億美元給加拿大高等研究院，用以支持發展全國性的人工智慧策略。這是 AI 指數挑選名單中最早的一項，也定下了後續多數法律的基調：國家出錢建 AI 能量，而不是限制它。" } },
      { slug: "china-2019-health",
        title:   { en: "China, 2019 — Basic Medical and Health Care Law", zh: "中國，2019 — 基本醫療衛生與健康促進法" },
        summary: { en: "AI written into health policy: promote its use, and build the data standards it needs.",
                   zh: "把 AI 寫進衛生政策：推動應用，並建立它所需的資料標準。" },
        tags: ["health"],
        overview: { en: "A provision of the Law of the People’s Republic of China on Basic Medical and Health Care and the Promotion of Health aims to promote the application and development of big data and artificial intelligence in the health and medical field. It pairs that with accelerating the construction of medical and healthcare information infrastructure and developing technical standards for the collection, storage, analysis, and application of medical and health data.",
                    zh: "《中華人民共和國基本醫療衛生與健康促進法》中的一項條文，旨在推動大數據與人工智慧在衛生與醫療領域的應用與發展。同時搭配加快醫療衛生資訊基礎設施建設，並制定醫療與健康資料在蒐集、儲存、分析與應用上的技術標準。" } },
      { slug: "russia-2020-moscow",
        title:   { en: "Russia, 2020 — Federal Law 123-FZ", zh: "俄羅斯，2020 — 聯邦法 123-FZ" },
        summary: { en: "A five-year AI regulatory experiment confined to one city, starting July 2020.",
                   zh: "一場限定在單一城市、為期五年的 AI 監理實驗，2020 年 7 月啟動。" },
        tags: ["regulation"],
        overview: { en: "The Federal Law of 24 April 2020 No. 123-FZ established an experimental framework for developing and implementing AI as a five-year experiment beginning in Moscow on July 1, 2020. It includes allowing AI systems to process anonymized personal data for governmental and certain commercial business activities, and it amends articles 6 and 10 of the Federal Law on Personal Data to make that possible.",
                    zh: "《2020 年 4 月 24 日第 123-FZ 號聯邦法》建立了一套 AI 開發與實施的實驗性框架，自 2020 年 7 月 1 日起在莫斯科進行為期五年的實驗。內容包括允許 AI 系統為政府與特定商業活動處理去識別化個人資料，並為此修改《個人資料聯邦法》第 6 條與第 10 條。" } },
      { slug: "uk-2020-ofqual",
        title:   { en: "United Kingdom, 2020 — Supply and Appropriation Act", zh: "英國，2020 — 撥款法" },
        summary: { en: "Authorizing the exams regulator to explore AI for marking high-stakes qualifications.",
                   zh: "授權考試主管機關探索用 AI 批改高風險考試。" },
        tags: ["education"],
        overview: { en: "A provision of the Supply and Appropriation (Main Estimates) Act 2020, c.13 authorized the Office of Qualifications and Examinations Regulation to explore opportunities for using artificial intelligence to improve the marking and administration of high-stakes qualifications. Like the Canadian entry, it is an appropriations act — AI enters the statute book as a spending authorization rather than a rule.",
                    zh: "《2020 年撥款法(主要預算)第 13 章》中的一項條文，授權英國資格與考試監理辦公室探索運用人工智慧改善高風險資格考試的閱卷與行政作業。與加拿大那一部一樣，這是一部撥款法 — AI 是以支出授權而非規則的形式進入法典。" } },
      { slug: "us-2020-iogan",
        title:   { en: "United States, 2020 — IOGAN Act", zh: "美國，2020 — IOGAN 法" },
        summary: { en: "Directing the National Science Foundation to fund research into deepfake outputs.",
                   zh: "指示國家科學基金會資助深偽產出物的研究。" },
        tags: ["deepfakes"],
        overview: { en: "The Identifying Outputs of Generative Adversarial Networks Act directed the National Science Foundation to support research dedicated to studying the outputs of generative adversarial networks — deepfakes — and other comparable technologies. It is one of the few entries in the selection aimed squarely at a specific technical risk, and it responds to that risk with research funding rather than prohibition.",
                    zh: "《辨識生成對抗網路產出物法》指示國家科學基金會支持研究生成對抗網路的產出物(也就是深偽)以及其他類似技術。這是挑選名單中少數直接針對特定技術風險的法律，而它回應風險的方式是提供研究經費，不是禁止。" } },
      { slug: "belgium-2021-ethics",
        title:   { en: "Belgium, 2021 — Decree on support for job seekers", zh: "比利時，2021 — 求職者輔導法令" },
        summary: { en: "If AI tools are used in digitization, an Ethics Committee must advise first.",
                   zh: "數位化作業若要用 AI 工具，須先由倫理委員會提出意見。" },
        tags: ["ethics"],
        overview: { en: "A provision of the Decree on coaching and solution-oriented support for job seekers (N. 327) directs the government to create an advisory group called the Ethics Committee, responsible for submitting advice if artificial intelligence tools are to be used for digitization activities. It is a procedural safeguard attached to an employment-services law — governance arriving through the back door of ordinary administration.",
                    zh: "《關於求職者輔導與解決導向支援的法令(第 327 號)》中的一項條文，要求政府設立一個名為「倫理委員會」的諮詢小組，負責在數位化作業擬使用人工智慧工具時提出意見。這是附掛在就業服務法上的程序性防線 — 治理從一般行政的後門進場。" } },
      { slug: "france-2021-footprint",
        title:   { en: "France, 2021 — Law 2021-1485", zh: "法國，2021 — 2021-1485 號法" },
        summary: { en: "A monitoring system for the environmental impact of emerging digital technology, AI named explicitly.",
                   zh: "為新興數位技術的環境衝擊建立監測機制，並明文點名 AI。" },
        tags: ["environment"],
        overview: { en: "Law N:2021-1485 of November 15, 2021, aimed at reducing the environmental footprint of digital technology in France, sets up a monitoring system to evaluate the environmental impacts of newly emerging digital technologies — artificial intelligence named in particular. It is the only law in the AI Index’s selection that treats AI primarily as an environmental question.",
                    zh: "《2021 年 11 月 15 日第 2021-1485 號法》以降低法國數位技術的環境足跡為目標，建立一套監測機制以評估新興數位技術的環境衝擊，並特別點名人工智慧。這是 AI 指數挑選名單中唯一把 AI 主要當成環境議題處理的法律。" } }
    ]
  },

  /* ----------------------------------------------- US FEDERAL VS STATE PROSE */
  {
    type: "prose",
    id: "us-legislation",
    nav:      { en: "5.1 US bills", zh: "5.1 美國法案" },
    title:    { en: "5.1 — In Washington, 2%. In the state capitols, 20%.",
                zh: "5.1 — 在華府是 2%，在各州議會是 20%" },
    subtitle: { en: "The distance between proposing an AI bill and passing one is the cleanest number in the chapter. It is ten times wider at the federal level than at the state level, and the states are where nearly all the actual lawmaking happens.",
                zh: "「提出 AI 法案」與「通過 AI 法案」之間的距離，是全章最乾淨的一個數字。聯邦層級的落差是州層級的十倍，而幾乎所有真正的立法都發生在各州。" },
    blocks: [
      { type: "p",
        text: { en: "In 2015 exactly one AI-related bill was proposed in the US Congress. In 2021 there were 130. Three passed. That is 2% of the year’s federal AI bills becoming law, and it describes the whole period: proposals climb steeply, enactments barely move. The gap was at its widest in 2021, the year the proposals peaked.",
                zh: "2015 年，美國國會只有 1 件 AI 相關法案被提出；2021 年有 130 件，通過 3 件。也就是說，當年聯邦 AI 法案只有 2% 成為法律 — 而這句話適用於整段期間：提案數陡升，通過數幾乎不動。落差最大的一年正是提案數達到高峰的 2021 年。" } },
      { type: "h3",
        text: { en: "The states pass a fifth of what they propose", zh: "各州提五件、過一件" } },
      { type: "p",
        text: { en: "Bloomberg Government has tracked state-level bills containing AI keywords — artificial intelligence, machine learning, algorithmic bias — since 2012. That year there were two, both from New Jersey assembly member Annette Quijano, directing the state Motor Vehicle Commission to establish driver’s license endorsements for autonomous vehicles. In 2021 there were 131, of which 26 became law: 20%, or one in five, against one in fifty federally.",
                zh: "彭博政府部門自 2012 年起追蹤含有 AI 關鍵字(人工智慧、機器學習、演算法偏誤)的州級法案。那一年只有 2 件，都出自紐澤西州眾議員 Annette Quijano，內容是要求該州機動車輛委員會為自駕車設立駕照加註。2021 年則有 131 件，其中 26 件成為法律：20%，也就是每五件過一件 — 聯邦層級是每五十件過一件。" } },
      { type: "h3",
        text: { en: "Where the bills come from", zh: "法案從哪裡來" } },
      { type: "ul",
        items: {
          en: ["As of 2021, 41 of the 50 states had proposed at least one AI-related bill. Massachusetts leads the decade with 40 since 2012, ahead of Hawaii (35), New Jersey (32), New York (31), California (29), and Illinois (28).",
               "In 2021 alone the order changes completely: Massachusetts 20, Illinois 15, Alabama 12. Volume in any single year says more about one legislature’s session than about a state’s long-run posture.",
               "AI lawmaking has a partisan slope. In 2018 Democratic state legislators sponsored just two more AI bills than Republicans; in 2021 they sponsored 39 more — 79 against 40."],
          zh: ["截至 2021 年，50 州中有 41 州至少提出過一件 AI 相關法案。麻州以 2012 年以來的 40 件領先十年榜，夏威夷(35)、紐澤西(32)、紐約州(31)、加州(29)與伊利諾(28)次之。",
               "只看 2021 年，順序完全變了：麻州 20 件、伊利諾 15 件、阿拉巴馬 12 件。單一年度的數量，說明的多半是某個議會那一會期的狀況，而不是該州長期的立場。",
               "AI 立法有明顯的黨派傾斜。2018 年民主黨州議員提出的 AI 法案只比共和黨多 2 件；2021 年多了 39 件 — 79 件對 40 件。"]
        } }
    ]
  },

  /* -------------------------------------------------- STATE BILLS BAR CHART */
  {
    type: "bars",
    id: "bills-by-state",
    nav:      { en: "Bills by state", zh: "各州提案" },
    title:    { en: "State-level AI-related bills proposed, 2012–21",
                zh: "各州提出的 AI 相關法案數，2012–21" },
    subtitle: { en: "Cumulative proposals, not passages, over ten years. Massachusetts accounts for 40 — and exactly half of those were filed in 2021 alone.",
                zh: "十年累計的提案數(不是通過數)。麻州共 40 件，其中恰好有一半是 2021 年單一年度提出的。" },
    series: [
      { label: { en: "Massachusetts", zh: "麻州" },  value: 40 },
      { label: { en: "Hawaii", zh: "夏威夷" },       value: 35 },
      { label: { en: "New Jersey", zh: "紐澤西" },   value: 32 },
      { label: { en: "New York", zh: "紐約州" },     value: 31 },
      { label: { en: "California", zh: "加州" },     value: 29 }
    ]
  },

  /* ----------------------------------------------------- MENTIONS + PAPERS */
  {
    type: "prose",
    id: "attention",
    nav:      { en: "Attention", zh: "關注度" },
    title:    { en: "5.1 — Talk is the fastest-growing indicator",
                zh: "5.1 — 成長最快的指標是「講」" },
    subtitle: { en: "If laws are the lagging measure of political interest in AI, mentions are the leading one. Every mention series in the chapter grows faster than the legislation that accompanies it — and so does the output of the organizations advising the legislators.",
                zh: "如果法律是政治關注 AI 的落後指標，那「提及」就是領先指標。本章每一組提及次數的成長，都快過同期的立法 — 而替立法者寫政策報告的那些機構，產量也一樣。" },
    blocks: [
      { type: "p",
        text: { en: "Bloomberg Government counts AI keyword mentions in US congressional records, split across legislation, committee reports, and Congressional Research Service reports. The 116th session (2019–20) logged 506 mentions — nearly 3.4 times the 115th session’s 149 (2017–18), and about 30 times the 114th session’s 17 (2015–16). The 117th had already recorded 295 by the end of 2021, halfway through its term, putting it on course for the highest count since tracking began in 2001.",
                zh: "彭博政府部門統計美國國會紀錄中的 AI 關鍵字提及次數，分為立法、委員會報告與國會研究處報告三類。第 116 屆會期(2019–20)共 506 次，將近第 115 屆(2017–18)149 次的 3.4 倍，約為第 114 屆(2015–16)17 次的 30 倍。第 117 屆到 2021 年底、也就是會期過了一半時就已累積 295 次，有望成為 2001 年開始追蹤以來的最高值。" } },
      { type: "h3",
        text: { en: "Parliaments elsewhere are louder still", zh: "其他國家的議會更吵" } },
      { type: "p",
        text: { en: "Across the same 25 countries, AI mentions in legislative proceedings reached 1,323 in 2021 — 7.7 times the 2016 level. Spain led the year with 269, ahead of the United Kingdom (185), the United States (132), Australia (122), and Japan (95). Over the full six years the ordering is different: the United Kingdom dominates with 939 mentions, followed by Spain (559), Japan (466), the United States (422), Australia (410), and Singapore (282).",
                zh: "在同樣這 25 個國家，立法程序提及 AI 的次數在 2021 年達到 1,323 次，是 2016 年的 7.7 倍。當年由西班牙以 269 次領先，英國(185)、美國(132)、澳洲(122)與日本(95)次之。若看六年總和，排序又不一樣：英國以 939 次遙遙領先，西班牙(559)、日本(466)、美國(422)、澳洲(410)與新加坡(282)在後。" } },
      { type: "h3",
        text: { en: "And the people advising them", zh: "還有替他們寫報告的人" } },
      { type: "ul",
        items: {
          en: ["The AI Index tracks 55 US-based organizations that published AI policy papers over the past four years: 19 think tanks and policy institutes, 14 university institutes and research programs, nine civil society organizations and consortiums, nine industry and consultancy organizations, and four government agencies.",
               "Their combined output tripled between 2018 and 2020, peaking at 273 papers, then eased slightly to 210 in 2021.",
               "The 2021 agenda was led by privacy, safety, and security (62 papers as a primary topic), innovation and technology (62), and ethics (59). Democracy was the primary topic of only two papers, but a secondary topic of 29. Energy and the environment, the humanities, the physical sciences, and the social and behavioral sciences drew almost no attention at all."],
          zh: ["AI 指數追蹤 55 個過去四年發表過 AI 政策報告的美國機構：智庫與政策研究所 19 個、大學研究機構與研究計畫 14 個、公民社會組織與聯盟 9 個、產業與顧問機構 9 個，以及政府機關 4 個。",
               "它們的總產量在 2018 至 2020 年間成長為三倍，2020 年以 273 篇達到高峰，2021 年略降至 210 篇。",
               "2021 年的議題排序由「隱私、安全與資安」(主要議題 62 篇)、「創新與技術」(62 篇)與「倫理」(59 篇)領頭。「民主」只有 2 篇以它為主要議題，卻有 29 篇以它為次要議題。能源與環境、人文、物理科學，以及社會與行為科學則幾乎乏人問津。"]
        } }
    ]
  },

  /* ---------------------------------------------- 5.2 US PUBLIC INVESTMENT */
  {
    type: "accordion",
    id: "public-money",
    nav:      { en: "5.2 Public money", zh: "5.2 公共投資" },
    title:    { en: "5.2 — Where American public AI money actually goes",
                zh: "5.2 — 美國的 AI 公共資金實際流向哪裡" },
    subtitle: { en: "The chapter’s second half narrows to one country: the United States, one of the world’s largest public-sector investors in AI. Six questions, and a running theme — almost every dollar has a defense label on it.",
                zh: "本章後半只看一個國家：美國，全球最大的 AI 公部門投資者之一。六個問題，以及一個貫穿其中的主軸 — 幾乎每一塊錢上面都貼著國防的標籤。" },
    qa: [
      { q: { en: "How much does the US spend on nondefense AI R&D?",
             zh: "美國在非國防的 AI 研發上花多少？" },
        a: { en: "In fiscal year 2021, nondefense federal agencies allocated $1.53 billion to AI R&D — roughly 2.7 times the $0.56 billion of FY2018, with $1.11 billion in FY2019 and $1.43 billion in FY2020 in between. The FY2022 request rises 8.8% to $1.67 billion. The figures come from a December 2021 National Science and Technology Council report covering agencies in the NITRD program and the National AI Initiative, and they exclude classified AI R&D by the defense and intelligence agencies.",
             zh: "2021 會計年度，非國防的聯邦機關共編列 15.3 億美元於 AI 研發，約為 2018 會計年度 5.6 億美元的 2.7 倍；中間的 2019 年度是 11.1 億美元、2020 年度是 14.3 億美元。2022 年度的請求金額成長 8.8% 至 16.7 億美元。這些數字出自 2021 年 12 月國家科學與技術委員會的報告，涵蓋參與 NITRD 計畫與國家 AI 倡議的機關，並不包含國防與情報機關的機密 AI 研發。" } },
      { q: { en: "And with defense included?",
             zh: "把國防算進來呢？" },
        a: { en: "The scale changes entirely. For FY2021 the Department of Defense allocated $9.26 billion across 500 AI-related R&D programs, 6.68% above the $8.68 billion of FY2020, and it has requested $10.00 billion for FY2022 — a figure likely to grow once further requests and congressional appropriations are counted. Within the department the Navy was the top spender in FY2021 and asks for the most again in FY2022 ($1.86 billion), ahead of the Army ($1.77 billion), the Office of the Secretary of Defense ($1.1 billion), and the Air Force ($883 million).",
             zh: "尺度完全不同。2021 會計年度，國防部橫跨 500 項 AI 相關研發計畫編列 92.6 億美元，較 2020 年度的 86.8 億美元成長 6.68%，2022 年度已請求 100.0 億美元 — 這個數字在後續追加請求與國會撥款納入後很可能再往上。部內方面，海軍是 2021 年度支出最高的單位，2022 年度也請求最多(18.6 億美元)，陸軍(17.7 億美元)、國防部長辦公室(11 億美元)與空軍(8.83 億美元)次之。" } },
      { q: { en: "Can that $10 billion be trusted?",
             zh: "那個 100 億美元可信嗎？" },
        a: { en: "The chapter flags it as a caveat rather than a finding. Bloomberg Government’s keyword search of DOD budget lines produces $10.0 billion for FY2022 AI-specific R&D; the DOD’s own measurement of the same year produces $874 million. The discrepancy is definitional: a research project that uses AI for cyber defense may count its people, hardware, and operations costs inside an AI-related budget request even though the AI software component is much smaller.",
             zh: "本章把它標記成但書，而不是發現。彭博政府部門用關鍵字搜尋國防部預算條目，得出 2022 年度 AI 專用研發 100.0 億美元；國防部自己對同一年的統計則是 8.74 億美元。差距來自定義：一項把 AI 用於網路防禦的研究計畫，可能把人力、硬體與作業成本全都算進 AI 相關的預算請求裡，即使其中的 AI 軟體部分小得多。" } },
      { q: { en: "What about contracts, rather than budget requests?",
             zh: "那契約呢，不看預算請求的話？" },
        a: { en: "In 2021 federal departments and agencies spent $1.79 billion on AI-related contracts — nearly double the roughly $920 million of 2018, but a slight decrease from the 2020 peak of $1.97 billion. The dip arrived while every legislative indicator in the chapter was still climbing. Bloomberg Government classifies a contract as AI-related by adding up transactions whose titles or descriptions contain any of more than 100 AI-specific keywords, so some projects counted here have a relatively small AI component.",
             zh: "2021 年，聯邦各部會與機關在 AI 相關契約上支出 17.9 億美元，將近 2018 年約 9.2 億美元的兩倍，但比 2020 年的高點 19.7 億美元略微下滑。這個回落發生在本章所有立法指標都還在往上爬的時候。彭博政府部門判定契約是否與 AI 有關的方式，是把標題或描述含有 100 多個 AI 專用關鍵字的交易加總起來，因此其中有些案子的 AI 成分其實相當小。" } },
      { q: { en: "Which departments get the contract money?",
             zh: "契約的錢流向哪些部會？" },
        a: { en: "One, mostly. The Department of Defense spent $1.14 billion on AI contracts in 2021, roughly five times the next department, Health and Human Services ($234 million), followed by NASA ($159 million), Homeland Security ($81 million), and Commerce ($49 million). Cumulatively from 2000 to 2021 the DOD has spent $5.20 billion, against NASA’s $1.41 billion, HHS’s $0.70 billion, Homeland Security’s $0.45 billion, and the Treasury’s $0.32 billion.",
             zh: "基本上就一個。2021 年國防部在 AI 契約上支出 11.4 億美元，約為排名第二的衛生及公共服務部(2.34 億美元)的五倍，接著是 NASA(1.59 億美元)、國土安全部(8,100 萬美元)與商務部(4,900 萬美元)。從 2000 到 2021 年累計，國防部支出 52.0 億美元，NASA 為 14.1 億美元，衛生及公共服務部 7.0 億美元，國土安全部 4.5 億美元，財政部 3.2 億美元。" } },
      { q: { en: "What do those contracts actually buy?",
             zh: "這些契約實際買到了什麼？" },
        a: { en: "The largest AI-related contract signed in 2021 by each of the five top-spending departments: $70 million (DOD) for prototypes in automotive cybersecurity, vehicle safety technologies, autonomous vehicles and intelligent systems; $37 million (Homeland Security) for towers capable of autonomous surveillance; $20 million (HHS, through BARDA) for optical imaging devices and machine learning algorithms to help classify and heal wounds and burns; $14 million (NASA) for lunar robots able to navigate the moon’s south pole; and $13 million (Commerce) for an AI prototype to improve patent search.",
             zh: "五個支出最高的部會在 2021 年各自簽下的最大一筆 AI 相關契約：國防部 7,000 萬美元，用於汽車資安、車輛安全技術、自駕車與智慧系統的原型；國土安全部 3,700 萬美元，建造具自主監視能力的塔台；衛生及公共服務部 2,000 萬美元(透過 BARDA)，開發光學影像裝置與機器學習演算法，協助傷口與燒燙傷的分類與癒合；NASA 1,400 萬美元，開發能在月球南極導航的月面機器人；商務部 1,300 萬美元，開發改善專利檢索的 AI 原型。" } }
    ]
  },

  /* --------------------------------------------- CONTRACT SPENDING CHART */
  {
    type: "bars",
    id: "contract-spending",
    nav:      { en: "Contract spending", zh: "採購支出" },
    title:    { en: "US federal AI contract spending by department, 2021",
                zh: "美國聯邦各部會的 AI 契約支出，2021 年" },
    subtitle: { en: "In millions of US dollars. The Department of Defense spent roughly five times the next department on the list — and the shape of the chart barely changes from year to year.",
                zh: "單位：百萬美元。國防部的支出約為榜上第二名的五倍，而這張圖的形狀年復一年幾乎沒變。" },
    series: [
      { label: { en: "Defense (DOD)", zh: "國防部" },  value: 1138 },
      { label: { en: "HHS", zh: "衛生部" },            value: 234 },
      { label: { en: "NASA", zh: "NASA" },             value: 159 },
      { label: { en: "Homeland Sec.", zh: "國土安全部" }, value: 81 },
      { label: { en: "Commerce", zh: "商務部" },       value: 49 }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In Its Words", zh: "報告原文" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 5 · AI Policy and Governance, reporting on 2021.",
                zh: "第 5 章「AI 政策與治理」的頭條發現，涵蓋的是 2021 年。" },
    quotes: [
      { text: { en: "An AI Index analysis of legislative records on AI in 25 countries shows that the number of bills containing “artificial intelligence” that were passed into law grew from just 1 in 2016 to 18 in 2021.",
                zh: "AI 指數對 25 個國家 AI 立法紀錄的分析顯示，含有「人工智慧」一詞並通過成為法律的法案，從 2016 年的僅僅 1 件成長到 2021 年的 18 件。" },
        by: "Chapter 5 · AI Policy and Governance" },
      { text: { en: "The federal legislative record in the United States shows a sharp increase in the total number of proposed bills that relate to AI from 2015 to 2021, while the number of bills passed remains low, with only 2% ultimately becoming law.",
                zh: "美國聯邦立法紀錄顯示，2015 至 2021 年間與 AI 相關的提案總數急遽增加，但通過的法案數依然很少，最終只有 2% 成為法律。" },
        by: "Chapter 5 · AI Policy and Governance" },
      { text: { en: "In 2021, of the 131 proposed state bills, 26 were passed into law — 1 out of 5 proposed bills, significantly higher than the federal level, where 1 out of every 50 proposed bills became law.",
                zh: "2021 年，各州提出的 131 件法案中有 26 件通過成為法律 — 每 5 件過 1 件，遠高於聯邦層級的每 50 件過 1 件。" },
        by: "Chapter 5 · AI Policy and Governance" },
      { text: { en: "The current congressional session, the 117th, is on track to record the greatest number of AI-related mentions since 2001, with 295 mentions by the end of 2021, halfway through the session, compared to 506 in the previous, 116th session.",
                zh: "本屆國會會期(第 117 屆)有望創下 2001 年以來 AI 相關提及次數的新高：到 2021 年底、會期才過一半時就有 295 次，而前一屆(第 116 屆)整屆為 506 次。" },
        by: "Chapter 5 · AI Policy and Governance" },
      { text: { en: "Bloomberg Government’s analysis shows the department is requesting $10.0 billion for AI-specific R&D in FY 2022. However, DOD’s own measurement produces a smaller number of $874 million.",
                zh: "彭博政府部門的分析顯示，國防部在 2022 會計年度為 AI 專用研發請求 100.0 億美元。然而，國防部自己的統計得出的數字小得多，只有 8.74 億美元。" },
        by: "Chapter 5 · AI Policy and Governance" }
    ]
  },

  /* ------------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "讀原始章節" },
    title: { en: "Read Chapter 5 in full", zh: "閱讀第 5 章原文" },
    text:  { en: "Chapter 5 (sections 5.1–5.2) with every figure, table, and methodological note is free from Stanford HAI. Or head back to the report highlights and the full chapter overview.",
             zh: "第 5 章(5.1–5.2 各節)連同所有圖表、表格與方法說明，皆由史丹佛 HAI 免費提供。或回到報告重點與完整的章節總覽。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2022-ai-index-report",
             label: { en: "Open the AI Index 2022 →", zh: "開啟 AI 指數 2022 →" } }
  }
];

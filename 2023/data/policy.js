/* =========================================================================
   Policy and Governance — deep dive · policy.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2023, Chapter 6
   https://hai.stanford.edu/ai-index/2023-ai-index-report

   The sixth edition of the AI Index, covering calendar year 2022. Every figure
   on this page comes from Chapter 6: 6.1 AI and Policymaking (global
   legislative records, US federal and state legislation, global AI mentions,
   US committee mentions, US policy papers), 6.2 National AI Strategies,
   6.3 U.S. Public Investment in AI, and 6.4 U.S. AI-Related Legal Cases.
   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_CHAPTER = "policy";

window.SITE_META = {
  title:    { en: "AI Index Report 2023", zh: "AI 指數報告 2023" },
  subtitle: { en: "Policy & Governance · a chapter deep dive", zh: "政策與治理專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "2022 was the year AI talk started turning into law",
                zh: "2022 年，關於 AI 的討論開始變成法律" },
    subtitle: { en: "Chapter 6 of the AI Index 2023 measures how governments actually behave around AI — not what they say they will do. It reads the legislative records of 127 countries, the parliamentary minutes of 81, every US federal and state AI bill, national AI strategies, US public spending, and American court dockets. The story of 2022 is a conversion rate: after years in which legislative attention vastly outran legislative output, the share of AI bills that actually became law jumped sharply. The numbers:",
                zh: "AI 指數 2023 第 6 章量的不是政府說要做什麼，而是政府實際做了什麼。它讀了 127 國的立法紀錄、81 國的議會會議紀錄、美國聯邦與各州每一件 AI 法案、各國國家 AI 戰略、美國公共支出，以及美國法院的案件。2022 年的故事是一個轉換率：在關注度遠遠跑贏產出好幾年之後，真正變成法律的 AI 法案比例突然拉高了。先看數字：" },
    stats: [
      { label: { en: "AI-related bills passed into law worldwide in 2022 (2016: 1)", zh: "2022 年全球通過成為法律的 AI 相關法案數(2016 年為 1 件)" }, value: 37 },
      { label: { en: "AI bills passed by the US Congress in 2022 (3 in each of the four prior years)", zh: "2022 年美國國會通過的 AI 法案數(前四年每年都是 3 件)" }, value: 9 },
      { label: { en: "AI bills passed by US states in 2022, out of 60 proposed", zh: "2022 年美國各州通過的 AI 法案數(提案共 60 件)" }, value: 21 },
      { label: { en: "AI mentions in the legislative proceedings of 81 countries, 2022 (2021: 1,547)", zh: "2022 年 81 國立法程序中提及 AI 的次數(2021 年為 1,547 次)" }, value: 1340 },
      { label: { en: "national AI strategies released worldwide since Canada’s first in March 2017", zh: "自加拿大 2017 年 3 月率先發布以來，全球已推出的國家 AI 戰略數" }, value: 62 },
      { label: { en: "AI-related legal cases in US federal and state courts in 2022 — 6.5× 2016", zh: "2022 年美國聯邦與州法院的 AI 相關訴訟案件數 — 是 2016 年的 6.5 倍" }, value: 110 }
    ]
  },

  /* ------------------------------------------------- 6.1 GLOBAL LEGISLATION */
  {
    type: "prose",
    id: "global-legislation",
    nav:      { en: "6.1 Global laws", zh: "6.1 全球" },
    title:    { en: "6.1 — Thirty-seven laws, thirty-one countries, one very uneven map",
                zh: "6.1 — 37 部法律、31 個國家，以及一張極不平均的地圖" },
    subtitle: { en: "The AI Index read every law containing the words “artificial intelligence” passed by the legislatures of 127 countries between 2016 and 2022. Growth is real and steep — but it is concentrated in a small number of places.",
                zh: "AI 指數讀過了 127 個國家的立法機關在 2016 至 2022 年間通過、內容含有「人工智慧」字樣的每一部法律。成長是真的，而且很陡 — 但集中在少數幾個地方。" },
    blocks: [
      { type: "p",
        text: { en: "Of the 127 countries analyzed, only 31 have passed a single AI-related bill since 2016, and between them they account for 123 laws in total. Annual output climbed from just one law in 2016 to 37 in 2022. In 2022 the United States led with 9 laws, followed by Spain (5) and the Philippines (4); Andorra, Belgium, Italy, Portugal, Russia and the United Kingdom passed 2 each. Measured cumulatively across 2016–22 the ordering changes: the United States leads with 22, then Portugal (13), Spain (10), Italy and Russia (9 each).",
                zh: "在分析的 127 個國家中，自 2016 年起只有 31 個通過過任何一部 AI 相關法案，這 31 國加起來共 123 部。年產出從 2016 年的僅僅 1 部，爬升到 2022 年的 37 部。2022 年由美國以 9 部領先，西班牙(5 部)與菲律賓(4 部)次之；安道爾、比利時、義大利、葡萄牙、俄羅斯與英國則各 2 部。換成 2016–22 的累計數字，排序就不一樣了：美國以 22 部居首，接著是葡萄牙(13)、西班牙(10)，以及義大利與俄羅斯(各 9)。" } },
      { type: "h3",
        text: { en: "What an “AI law” actually looks like", zh: "所謂「AI 法律」實際上長什麼樣" } },
      { type: "p",
        text: { en: "Almost none of these are AI acts in the sense the phrase now implies. The AI Index sampled five of 2022’s laws and found the words “artificial intelligence” buried inside statutes about creative industries, national security, schools, anti-discrimination and civil-service training:",
                zh: "這裡面幾乎沒有一部是今天講到「AI 法」時所想像的那種法律。AI 指數抽樣了 2022 年五部法律，發現「人工智慧」這幾個字是埋在關於創意產業、國家安全、學校、反歧視與公務人力訓練的法條裡：" } },
      { type: "ul",
        items: {
          en: ["Kyrgyz Republic — About the Creative Industries Park: sets the legal status, management and operating procedures of a park created to accelerate creative industries, artificial intelligence among them.",
               "Latvia — Amendments to the National Security Law: places restrictions on commercial companies, associations and foundations important to national security, including any commercial company that develops artificial intelligence.",
               "Philippines — Second Congressional Commission on Education (EDCOM II) Act: creates a commission to review and reform education in the face of the Fourth Industrial Revolution, characterized in part by the rapid development of artificial intelligence.",
               "Spain — Right to equal treatment and non-discrimination: requires that AI algorithms involved in public administrations’ decision-making take bias-minimization criteria, transparency and accountability into account whenever technically feasible.",
               "United States — AI Training Act: directs the Office of Management and Budget to provide an AI training program for the acquisition workforce of executive agencies, so that buyers understand AI’s capabilities and risks."],
          zh: ["吉爾吉斯 —《關於創意產業園區》：規定為加速創意產業(其中包含人工智慧)而設立的園區的法律地位、管理與營運程序。",
               "拉脫維亞 —《國家安全法修正案》：對攸關國家安全的商業公司、協會與基金會設下限制，其中明列開發人工智慧的商業公司。",
               "菲律賓 —《第二屆國會教育委員會(EDCOM II)法》：成立一個委員會，面對以人工智慧快速發展為特徵之一的第四次工業革命，檢討並改革教育。",
               "西班牙 —《平等對待與不歧視權法》：要求公共行政決策所涉及的 AI 演算法，在技術可行的前提下必須納入降低偏誤的標準、透明度與問責。",
               "美國 —《AI 訓練法》：要求管理及預算局為行政機關的採購人力提供 AI 訓練課程，讓採購方了解 AI 的能力與風險。"]
        } },
      { type: "h3",
        text: { en: "A caveat the chapter puts in a footnote", zh: "本章放在註腳裡的但書" } },
      { type: "p",
        text: { en: "The AI Index warns that this count probably undercounts real activity, because a single large bill can contain multiple AI-related sub-bills — the CHIPS and Science Act, passed by the United States in 2022, is the example it gives. Coverage is also incomplete: publicly accessible legislative databases simply do not exist for some countries.",
                zh: "AI 指數提醒，這個計數很可能低估了實際情況，因為一部大法案裡可能包著好幾條 AI 相關的子法案 — 它舉的例子是美國 2022 年通過的《晶片與科學法》。涵蓋範圍也不完整：有些國家根本沒有可公開取得的立法資料庫。" } }
    ]
  },

  /* ---------------------------------------------------- LAWS BY COUNTRY */
  {
    type: "bars",
    id: "country-laws",
    nav:      { en: "Laws by country", zh: "各國排名" },
    title:    { en: "AI-related bills passed into law by country, 2016–22",
                zh: "各國通過成為法律的 AI 相關法案數，2016–22" },
    subtitle: { en: "Cumulative totals. Five countries account for 63 of the 123 laws passed worldwide since 2016 — and 96 of the 127 countries analyzed have passed none at all.",
                zh: "累計數字。自 2016 年以來全球通過的 123 部法律中，這五個國家就佔了 63 部 — 而分析的 127 國裡有 96 國一部都沒有。" },
    series: [
      { label: { en: "United States", zh: "美國" },  value: 22 },
      { label: { en: "Portugal", zh: "葡萄牙" },     value: 13 },
      { label: { en: "Spain", zh: "西班牙" },        value: 10 },
      { label: { en: "Italy", zh: "義大利" },        value: 9 },
      { label: { en: "Russia", zh: "俄羅斯" },       value: 9 }
    ]
  },

  /* --------------------------------------------------- 6.1 US LEGISLATION */
  {
    type: "prose",
    id: "us-legislation",
    nav:      { en: "6.1 US bills", zh: "6.1 美國" },
    title:    { en: "6.1 — Washington proposed less and passed more",
                zh: "6.1 — 華府提案變少，通過變多" },
    subtitle: { en: "The most interesting number in the US legislative record for 2022 is not a total, it is a ratio. Fewer AI bills were introduced than the year before, yet three times as many made it into law.",
                zh: "2022 年美國立法紀錄裡最值得看的數字不是總量，是比例。提出的 AI 法案比前一年少，但真正變成法律的卻是三倍。" },
    blocks: [
      { type: "p",
        text: { en: "In 2015 exactly one AI-related federal bill was proposed. By 2021 that had reached 134, falling back to 88 in 2022. Over the same stretch the number of bills actually passed sat unmoved at 3 a year for four consecutive years — and then went to 9 in 2022. As a proportion, 2% of federal AI bills became law in 2021; 10% did in 2022.",
                zh: "2015 年，聯邦層級只有 1 件 AI 相關法案被提出。到 2021 年這個數字來到 134 件，2022 年回落到 88 件。同一段期間，真正通過的法案連續四年都停在每年 3 件 — 然後在 2022 年跳到 9 件。換成比例：2021 年只有 2% 的聯邦 AI 法案變成法律，2022 年是 10%。" } },
      { type: "h3",
        text: { en: "The states convert at three times the federal rate", zh: "各州的轉換率是聯邦的三倍" } },
      { type: "p",
        text: { en: "State legislatures show the same pattern, further along. Proposals rose from 5 in 2015 to 60 in 2022; passage rose from 1 bill (16% of that year’s proposals) to 21 (35%). California led 2022 with 5 laws, then Maryland (3), and Colorado, New Jersey and Washington with 2 each. Cumulatively from 2016 to 2022, Maryland leads with 7, ahead of California (6), Massachusetts and Washington (5 each), and Illinois, Utah and Vermont (3 each). Roughly half the states have still never passed one.",
                zh: "各州議會呈現同樣的模式，而且走得更前面。提案數從 2015 年的 5 件增加到 2022 年的 60 件；通過數則從 1 件(佔當年提案的 16%)增加到 21 件(35%)。2022 年由加州以 5 部領先，馬里蘭(3 部)次之，科羅拉多、紐澤西與華盛頓州各 2 部。2016 至 2022 累計，馬里蘭以 7 部居首，加州(6)、麻州與華盛頓州(各 5)、伊利諾、猶他與佛蒙特(各 3)緊接在後。全美仍有大約一半的州從未通過任何一部。" } },
      { type: "h3",
        text: { en: "Five state laws, five completely different ideas of what AI policy is",
                zh: "五部州法，五種完全不同的「AI 政策」想像" } },
      { type: "ul",
        items: {
          en: ["Alabama — Artificial Intelligence, Limit the Use of Facial Recognition, to Ensure Match Results Is Not the Only Basis for Arrest: bars state and local law enforcement from using a facial recognition match as the sole basis for an arrest or for establishing probable cause in a criminal investigation.",
               "California — Budget Act of 2022: an appropriations provision allocating $1,300,000 to California State University, Sacramento to improve its campus childcare center, including the development of an artificial intelligence mixed-reality classroom.",
               "Maryland — Conservation Finance Act: directs the Department of Natural Resources to study whether digital tools including AI and machine learning can contribute to Chesapeake Bay restoration and climate solutions.",
               "New Jersey — 21st Century Integrated Digital Experience Act: requires the chief technology officer to evaluate annually whether state agencies could use AI and machine learning to deliver public services.",
               "Vermont — An Act Relating to the Use and Oversight of Artificial Intelligence in State Government: creates a Division of Artificial Intelligence inside the Agency of Digital Services to review every AI system the state develops, employs or procures, and to propose a state code of ethics."],
          zh: ["阿拉巴馬 —《人工智慧：限制人臉辨識使用，確保比對結果不得作為逮捕的唯一依據》：禁止州與地方執法機關把人臉辨識的比對結果當成逮捕或認定相當理由的唯一根據。",
               "加州 —《2022 年預算法》：一項撥款條文，撥給沙加緬度加州州立大學 1,300,000 美元改善校園托育中心，其中包含開發一間 AI 混合實境教室。",
               "馬里蘭 —《保育財務法》：要求自然資源部研究並評估包含 AI 與機器學習在內的數位工具，能否為切薩皮克灣復育與氣候解方帶來貢獻。",
               "紐澤西 —《21 世紀整合數位體驗法》：要求技術長每年評估州政府機關以 AI 與機器學習提供公共服務的可行性。",
               "佛蒙特 —《關於州政府使用與監督人工智慧法》：在數位服務局底下設立人工智慧處，檢視州政府開發、使用或採購的每一套 AI 系統，並提出州政府 AI 使用的倫理準則。"]
        } }
    ]
  },

  /* ------------------------------------------------------ US STATE LAWS */
  {
    type: "bars",
    id: "state-laws",
    nav:      { en: "US state laws", zh: "各州立法" },
    title:    { en: "AI-related bills passed into law by US state, 2016–22",
                zh: "美國各州通過成為法律的 AI 相關法案數，2016–22" },
    subtitle: { en: "Cumulative totals. No state has reached double digits — Maryland tops the seven-year table with 7, fewer laws than Portugal passed on its own.",
                zh: "累計數字。沒有任何一州達到兩位數 — 馬里蘭以 7 部居七年榜首，比葡萄牙一國通過的還少。" },
    series: [
      { label: { en: "Maryland", zh: "馬里蘭" },       value: 7 },
      { label: { en: "California", zh: "加州" },       value: 6 },
      { label: { en: "Massachusetts", zh: "麻州" },    value: 5 },
      { label: { en: "Washington", zh: "華盛頓州" },   value: 5 },
      { label: { en: "Illinois", zh: "伊利諾" },       value: 3 },
      { label: { en: "Utah", zh: "猶他" },             value: 3 }
    ]
  },

  /* -------------------------------------------------------- 6.1 ATTENTION */
  {
    type: "prose",
    id: "attention",
    nav:      { en: "6.1 Attention", zh: "6.1 關注度" },
    title:    { en: "6.1 — Global chatter dipped. American chatter did the opposite.",
                zh: "6.1 — 全球議場的討論降溫，美國國會卻相反" },
    subtitle: { en: "Beyond bills, the AI Index counts how often the phrase “artificial intelligence” shows up in the minutes of legislatures, in US congressional committee reports, and in policy papers from think tanks and universities. Three different barometers, three different readings.",
                zh: "除了法案，AI 指數還數了「人工智慧」這個詞在各國議會會議紀錄、美國國會委員會報告，以及智庫與大學政策報告裡出現的頻率。三個不同的溫度計，三種不同的讀數。" },
    blocks: [
      { type: "p",
        text: { en: "Across the parliamentary and governmental proceedings of 81 countries, AI mentions registered a small decrease in 2022 — from 1,547 to 1,340 — in a run that has still grown nearly 6.5 times since 2016. Only 46 of the 81 countries recorded a single mention all year. Spain topped 2022 with 273 mentions, followed by Canada (211), the United Kingdom (146) and the United States (138). Over the full 2016–22 period the United Kingdom dominates with 1,092 mentions, ahead of Spain (832), the United States (626), Japan (511) and Hong Kong (478); 62 of the 81 countries have at least one.",
                zh: "在 81 個國家的議會與政府會議紀錄中，2022 年提及 AI 的次數其實小幅下滑 — 從 1,547 次降到 1,340 次 — 儘管這條曲線自 2016 年以來仍成長了近 6.5 倍。81 國中，整年連一次提及都沒有的有 35 國。2022 年由西班牙以 273 次居首，加拿大(211)、英國(146)與美國(138)次之。若看 2016–22 的全期累計，英國以 1,092 次遙遙領先，西班牙(832)、美國(626)、日本(511)與香港(478)在後；81 國中有 62 國至少被記錄到一次。" } },
      { type: "h3",
        text: { en: "What legislators actually argue about", zh: "議員實際上在吵什麼" } },
      { type: "p",
        text: { en: "The chapter samples the debates themselves, and the range is the point — the same two words are doing very different work in different chambers:",
                zh: "本章直接抽樣了那些辯論，而重點就在落差 — 同樣兩個字，在不同議場裡做的是很不一樣的事：" } },
      { type: "ul",
        items: {
          en: ["United Kingdom — Dame Angela Eagle asked the Commons, during the Financial Services and Markets Bill, how open regulators would be about the way AI is applied and whether it might evolve so as to embed discrimination that excludes certain people.",
               "Japan — Kohei Otsuka told the House of Councillors’ Commission on the Constitution that as AI and internet technology fuse, human rights guarantees need updating to cover individual scoring, discrimination, and online advertising that unfairly influences how citizens vote.",
               "Zambia — Minister Collins Nzovu told the National Assembly that, with UN financial support, the government is turning to AI to improve the quality and accuracy of weather forecasting.",
               "Australia — Industry and Science Minister Ed Husic, speaking to the National Reconstruction Fund Corporation Bill 2022, argued the country should build on its “undeniable expertise” in quantum technologies, robotics and artificial intelligence.",
               "Brazil — Congressman Gustavo Fruet invoked The Fourth Industrial Revolution in a debate on granting telework to parents of young children, on which professions 5G, the Internet of Things and AI would make extinct and which would demand more qualifications."],
          zh: ["英國 — Dame Angela Eagle 在《金融服務與市場法案》的審查中質問下議院：監管機關對於 AI 的實際應用方式能有多透明？它會不會演變成把歧視內建進系統，讓某些人被排除在外？",
               "日本 — 大塚耕平在參議院憲法審查會指出，隨著 AI 與網路技術融合，人權保障必須更新，才能處理個人評分、歧視，以及不當影響公民投票行為的網路廣告等問題。",
               "尚比亞 — 部長 Collins Nzovu 在國民議會表示，政府在聯合國經費支持下，正運用 AI 提升天氣預報的品質與準確度。",
               "澳洲 — 工業與科學部長 Ed Husic 在《2022 年國家重建基金公司法案》的二讀中主張，澳洲應該把量子技術、機器人與人工智慧這些「無可否認的專長」再往上推。",
               "巴西 — 眾議員 Gustavo Fruet 在一場關於讓幼兒家長遠距工作的法案辯論中援引《第四次工業革命》一書，談 5G、物聯網與 AI 會讓哪些職業消失、又會讓哪些職業要求更高的資格。"]
        } },
      { type: "h3",
        text: { en: "Inside the US Congress: committee reports and policy papers",
                zh: "美國國會內部：委員會報告與政策報告" } },
      { type: "p",
        text: { en: "Mentions of AI in the committee reports of the House and Senate rose sharply from the 115th session onward and reached 73 in the 117th (2021–22), the highest in a series that begins in 2001. Appropriations led the House with 20 mentions, ahead of Science, Space, and Technology (9) and Rules (5); in the Senate, Homeland Security and Governmental Affairs led with 8, ahead of Appropriations (3). Outside government, the AI Index tracked 55 US-based organizations — 19 think tanks and policy institutes, 14 university institutes and research programs, 9 civil society bodies, 9 industry and consultancy organizations and 4 government agencies — which published 284 AI policy papers in 2022, 3.2 times the 2018 figure. The leading primary topics were industry and regulation (107), innovation and technology (90) and government and public administration (82). Privacy, safety, and security, the single most reported topic in 2021, slipped to fourth (59).",
                zh: "AI 在參眾兩院委員會報告中被提及的次數，從第 115 屆會期起大幅攀升，到第 117 屆(2021–22)達到 73 次，是這條 2001 年起算的序列中的最高點。眾議院由撥款委員會以 20 次領先，科學、太空與技術委員會(9 次)與規則委員會(5 次)次之；參議院則由國土安全與政府事務委員會以 8 次居首，撥款委員會(3 次)在後。政府之外，AI 指數追蹤了 55 個美國組織 — 19 個智庫與政策研究所、14 個大學研究機構與研究計畫、9 個公民社會組織、9 個產業與顧問機構，以及 4 個政府機關 — 它們在 2022 年發表了 284 份 AI 政策報告，是 2018 年的 3.2 倍。最主要的題目是產業與監管(107 份)、創新與技術(90 份)，以及政府與公共行政(82 份)。2021 年報告量第一的隱私、安全與資安，則掉到第四(59 份)。" } }
    ]
  },

  /* ------------------------------------------------------- AI MENTIONS */
  {
    type: "bars",
    id: "mentions",
    nav:      { en: "AI mentions", zh: "議會提及" },
    title:    { en: "Mentions of AI in legislative proceedings, 2022",
                zh: "2022 年立法程序中提及 AI 的次數" },
    subtitle: { en: "Of the 81 countries whose minutes the AI Index searched, only 46 mentioned AI at all in 2022. These four account for roughly half of the 1,340 mentions recorded.",
                zh: "AI 指數搜尋了 81 國的會議紀錄，2022 年只有 46 國提到過 AI。這四個國家就佔了全年 1,340 次提及的大約一半。" },
    series: [
      { label: { en: "Spain", zh: "西班牙" },         value: 273 },
      { label: { en: "Canada", zh: "加拿大" },        value: 211 },
      { label: { en: "United Kingdom", zh: "英國" },  value: 146 },
      { label: { en: "United States", zh: "美國" },   value: 138 }
    ]
  },

  /* ------------------------------------------- 6.2 + 6.3 STRATEGY AND MONEY */
  {
    type: "prose",
    id: "public-money",
    nav:      { en: "6.2–6.3 Money", zh: "戰略與投資" },
    title:    { en: "6.2–6.3 — Strategy writing peaked in 2019. Spending did not.",
                zh: "6.2–6.3 — 寫戰略的高峰在 2019 年，花錢的高峰不是" },
    subtitle: { en: "National AI strategies were the policy instrument of the late 2010s; by 2022 the wave had almost finished. US public money, tracked separately through R&D budgets and procurement, kept climbing.",
                zh: "國家 AI 戰略是 2010 年代後期的政策工具；到了 2022 年，這一波幾乎已經結束。而美國的公共資金 — 分別從研發預算與政府採購兩邊追蹤 — 還在往上走。" },
    blocks: [
      { type: "p",
        text: { en: "Canada launched the world’s first national AI strategy in March 2017, alongside China and Finland that year. Since then 62 strategies have been released in total, with the peak arriving in 2019, when 26 countries published one — Argentina, Denmark, Estonia, Japan, Kenya, Qatar, Singapore, the United Arab Emirates and the United States among them. Fourteen followed in 2020 and ten in 2021. By 2022 only two countries released a new national AI strategy: Italy and Thailand. A further seven pledged to develop one in 2021 (Armenia, Bahrain, Cuba, Iceland, Morocco, New Zealand, Oman) and seven more in 2022 (Azerbaijan, Belgium, Benin, Israel, Jordan, Nigeria, Uzbekistan).",
                zh: "加拿大在 2017 年 3 月推出全球第一份國家 AI 戰略，同年的還有中國與芬蘭。此後全球共發布 62 份戰略，高峰落在 2019 年 — 那一年有 26 國發表，包括阿根廷、丹麥、愛沙尼亞、日本、肯亞、卡達、新加坡、阿聯與美國。2020 年再有 14 國，2021 年 10 國。到 2022 年，只剩兩個國家發布新的國家 AI 戰略：義大利與泰國。另有 7 國在 2021 年承諾要制定(亞美尼亞、巴林、古巴、冰島、摩洛哥、紐西蘭、阿曼)，2022 年又有 7 國(亞塞拜然、比利時、貝南、以色列、約旦、奈及利亞、烏茲別克)。" } },
      { type: "h3",
        text: { en: "Two federal budget lines, moving in opposite directions",
                zh: "兩條聯邦預算線，方向相反" } },
      { type: "p",
        text: { en: "Nondefense US government agencies allocated $1.7 billion to AI R&D in fiscal year 2022 — a slight decline from FY21’s $1.75 billion, but a 208.9% increase on the $0.56 billion of FY18. A larger $1.84 billion was requested for FY23. The Department of Defense line went the other way and then reversed: its request for nonclassified AI-specific research, development, test and evaluation slid from $1.00 billion in FY20 to $0.93 billion in FY21 and $0.87 billion in FY22, before jumping to $1.10 billion for FY23 — a 26.4% increase. Neither figure includes classified AI R&D by defense and intelligence agencies, which the underlying report does not cover.",
                zh: "2022 會計年度，美國非國防部門的政府機關編列了 17 億美元用於 AI 研發 — 比 FY21 的 17.5 億略減，但比 FY18 的 5.6 億成長了 208.9%。FY23 則請求了更高的 18.4 億美元。國防部這條線走的是相反方向，然後又轉了回來：它針對非機密 AI 專項研究、開發、測試與評估的預算請求，從 FY20 的 10.0 億美元滑落到 FY21 的 9.3 億與 FY22 的 8.7 億，再在 FY23 跳到 11.0 億美元 — 增加 26.4%。這兩個數字都不包含國防與情報機關的機密 AI 研發，原始報告沒有涵蓋那一塊。" } },
      { type: "h3",
        text: { en: "Procurement is where the growth is", zh: "真正在成長的是政府採購" } },
      { type: "ul",
        items: {
          en: ["Total US government spending on AI rose from $2.7 billion in 2021 to $3.3 billion in 2022, and has grown roughly 2.5 times since 2017, when it stood at $1.29 billion.",
               "By segment in 2022: decision science took $1.19 billion (up 18% year over year) and computer vision $0.82 billion (up 55%), while autonomy reached $0.69 billion (up 33%). Machine learning slipped 5% to $0.41 billion and natural language processing fell 19% to $0.17 billion.",
               "By award type in FY22, prime contracts made up 62.5% of the value, grants 34.9% and other transaction authority awards 2.6% — $2.05 billion, $1.15 billion and $0.09 billion respectively. Against FY21 the contract share held steady while the grant share rose."],
          zh: ["美國政府在 AI 上的總支出從 2021 年的 27 億美元增加到 2022 年的 33 億美元，比 2017 年的 12.9 億成長了大約 2.5 倍。",
               "2022 年分類別看：決策科學拿到 11.9 億美元(年增 18%)、電腦視覺 8.2 億美元(年增 55%)、自主系統 6.9 億美元(年增 33%)。機器學習則減少 5% 至 4.1 億美元，自然語言處理減少 19% 至 1.7 億美元。",
               "FY22 依撥付形式區分：主契約佔金額的 62.5%、補助 34.9%、其他交易授權(OTA)2.6% — 分別是 20.5 億、11.5 億與 0.9 億美元。與 FY21 相比，契約的佔比大致持平，補助的佔比則上升。"]
        } }
    ]
  },

  /* --------------------------------------------------------- 6.4 COURTS */
  {
    type: "cards",
    id: "courts",
    nav:      { en: "6.4 Courts", zh: "6.4 法院" },
    title:    { en: "6.4 — The legal system starts writing AI policy by accident",
                zh: "6.4 — 司法系統在無意間開始寫 AI 政策" },
    subtitle: { en: "The AI Index worked with AI-law scholar Elif Kiesow Cortez to track US federal and state cases from 2000 to 2022 containing AI-related keywords. There were 110 in 2022, 6.5 times the 2016 count. Tap any card for the detail.",
                zh: "AI 指數與 AI 法律學者 Elif Kiesow Cortez 合作，追蹤 2000 至 2022 年間含有 AI 相關關鍵字的美國聯邦與州法院案件。2022 年共 110 件，是 2016 年的 6.5 倍。點卡片看細節。" },
    items: [
      { slug: "where-cases-file",
        title:   { en: "Where the cases are filed", zh: "案件從哪裡來" },
        summary: { en: "California (23), Illinois (17) and New York (11) produced most of 2022’s cases. Illinois is there because of one 2008 statute.",
                   zh: "2022 年的案件多數來自加州(23 件)、伊利諾(17 件)與紐約(11 件)。伊利諾會上榜，是因為一部 2008 年的法律。" },
        tags: ["courts", "states"],
        overview: { en: "In 2022 California led with 23 cases, followed by Illinois (17), New York (11), and Delaware and Florida (7 each). The cumulative 2000–22 distribution is similar but more lopsided: California 127, New York 66, Illinois 36, Texas 26, then Delaware and Massachusetts at 19 each. California and New York are unsurprising — both host large businesses that have integrated AI. Illinois is the interesting one: the AI Index attributes its rise to the state’s Biometric Information Privacy Act, which imposes rules on how companies doing business in Illinois collect and store biometric information.",
                   zh: "2022 年加州以 23 件領先，伊利諾(17)、紐約(11)，德拉瓦與佛羅里達(各 7)次之。2000–22 的累計分布類似但更懸殊：加州 127 件、紐約 66 件、伊利諾 36 件、德州 26 件，接著是德拉瓦與麻州各 19 件。加州與紐約上榜並不意外，兩地都有大量已導入 AI 的大型企業。真正有意思的是伊利諾：AI 指數把它的竄升歸因於該州的《生物特徵資訊隱私法》(BIPA)，這部法律規範了在伊利諾營業的公司如何蒐集與儲存生物特徵資訊。" } },
      { slug: "which-law",
        title:   { en: "Which law, which industry", zh: "哪一種法、哪一個產業" },
        summary: { en: "Civil law (29%), intellectual property (19%) and contract law (13.6%) dominate. Financial and professional services is the sector most often at issue.",
                   zh: "民事(29%)、智慧財產(19%)與契約(13.6%)佔了最大宗。最常涉入的產業是金融與專業服務。" },
        tags: ["courts", "law"],
        overview: { en: "Of the 2022 cases, civil law accounted for the largest share at 32 cases (29%), followed by intellectual property with 21 (19%) and contract with 15 (13.6%); competition (11), constitutional (8) and employment and labor (6) come next, with tort at the bottom with a single case. Grouped by economic sector, financial services and professional services dominated with 48 cases, ahead of media, culture and graphical (18) and public service (14); education and health services drew 6 each.",
                   zh: "2022 年的案件中，民事以 32 件(29%)佔比最高，智慧財產 21 件(19%)與契約 15 件(13.6%)次之；再往下是競爭法(11)、憲法(8)與勞動與就業(6)，侵權則墊底，只有 1 件。若依經濟部門分類，金融服務與專業服務以 48 件遙遙領先，媒體、文化與圖像(18)與公共服務(14)在後，教育與醫療服務則各 6 件。" } },
      { slug: "duerr-bradley",
        title:   { en: "Duerr v. Bradley University (2022)", zh: "Duerr 訴布萊德利大學(2022)" },
        summary: { en: "Students sued over an AI proctoring tool under Illinois’ biometric privacy law — and lost on a definition of “financial institution”.",
                   zh: "學生依伊利諾生物特徵隱私法控告 AI 監考工具，卻敗在「金融機構」這個定義上。" },
        tags: ["courts", "privacy"],
        overview: { en: "Decided by the US Court of Appeals for the Seventh Circuit on 10 March 2022. Undergraduates at a private university in Peoria, Illinois were required during the fall 2020 semester to use a third-party proctoring tool, Respondus Monitor, for remote online exams. The tool used AI. The plaintiffs argued the university had failed to follow the Biometric Information Privacy Act’s rules on collecting biometric information. BIPA does not apply to financial institutions — and the court ruled that under the Gramm-Leach-Bliley Act the university counted as one, by virtue of the lending functions it performed. The case was dismissed.",
                   zh: "美國第七巡迴上訴法院於 2022 年 3 月 10 日判決。伊利諾州皮奧里亞一所私立大學的大學部學生，在 2020 年秋季學期被要求使用第三方監考工具 Respondus Monitor 進行遠距線上考試，該工具使用 AI 技術。原告主張校方未遵守《生物特徵資訊隱私法》(BIPA)關於蒐集生物特徵資訊的規範。但 BIPA 不適用於金融機構 — 法院認定，依《葛蘭姆-李奇-布萊利法》，該校因從事貸款業務而屬於金融機構。全案遭到駁回。" } },
      { slug: "flores-stanford",
        title:   { en: "Flores v. Stanford (2021)", zh: "Flores 訴 Stanford(2021)" },
        summary: { en: "A parole board used COMPAS to assess risk. The court ordered the algorithm’s confidential material disclosed to the plaintiffs’ expert.",
                   zh: "假釋委員會用 COMPAS 做風險評估。法院裁定，該演算法的機密資料必須交給原告的專家證人。" },
        tags: ["courts", "transparency"],
        overview: { en: "Decided by the US Court of Appeals for the Second Circuit on 28 September 2021. Offenders denied parole sued the New York State Board of Parole over being refused access to the information the board used in reviewing their cases. Northpointe, Inc. petitioned the court as a non-party, because its Correctional Offender Management Profiling for Alternative Sanctions (COMPAS) — an AI-powered risk assessment tool — had been used in those determinations, and it wanted to prevent AI trade secrets from reaching one of the plaintiffs’ expert witnesses. The court found the confidential material relevant to the plaintiffs’ case and posing little risk of competitive injury, and ordered it released under a supplemental protective order.",
                   zh: "美國第二巡迴上訴法院於 2021 年 9 月 28 日判決。被拒絕假釋的受刑人控告紐約州假釋委員會，理由是無法取得委員會審查其案件時所使用的資訊。Northpointe 公司以非當事人身分聲請參與訴訟，因為委員會的裁決使用了該公司的 COMPAS(替代性制裁的矯正機構受刑人管理剖析工具)這套 AI 風險評估工具，它想阻止 AI 營業秘密流向原告的專家證人。法院認定該機密資料與原告案件有關，且造成競爭損害的風險不高，裁定在補充保護令下釋出。" } },
      { slug: "dyroff-ultimate",
        title:   { en: "Dyroff v. Ultimate Software (2017)", zh: "Dyroff 訴 Ultimate Software(2017)" },
        summary: { en: "A recommendation algorithm surfaced a drug-related group to a user who later died. The court held the platform immune.",
                   zh: "推薦演算法把毒品相關社群推給一名後來身故的使用者。法院認定平台享有免責。" },
        tags: ["courts", "platforms"],
        overview: { en: "Decided by the US Court of Appeals for the Ninth Circuit on 26 November 2017. Kristanalea Dyroff sued Ultimate Software after her 29-year-old son died from an overdose of heroin laced with fentanyl, allegedly bought from a dealer he met on the company’s social network. She brought seven claims including negligence, wrongful death and civil conspiracy, all resting on the argument that Ultimate Software mined user data and deployed it alongside an algorithm to recommend drug-related discussion groups to her son. The court held that the company was immune under the Communications Decency Act, and that its use of algorithms did not amount to creating novel content.",
                   zh: "美國第九巡迴上訴法院於 2017 年 11 月 26 日判決。Kristanalea Dyroff 在 29 歲的兒子因服用摻有芬太尼的海洛因過量身故後，控告 Ultimate Software；毒品據稱來自她兒子在該公司社群網站上認識的毒販。她提出過失、不法致死與民事共謀等七項請求，核心主張是 Ultimate Software 挖掘使用者資料，並搭配演算法把毒品相關的討論社群推薦給她兒子。法院認定該公司受《通訊端正法》保護而免責，且使用演算法並不構成創造新內容。" } }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In its words", zh: "報告原文" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 6 · Policy and Governance, AI Index Report 2023.",
                zh: "AI 指數報告 2023 第 6 章「政策與治理」的頭條發現。" },
    quotes: [
      { text: { en: "An AI Index analysis of the legislative records of 127 countries shows that the number of bills containing “artificial intelligence” that were passed into law grew from just 1 in 2016 to 37 in 2022.",
                zh: "AI 指數分析了 127 個國家的立法紀錄，含有「人工智慧」字樣並通過成為法律的法案，從 2016 年的僅僅 1 件成長到 2022 年的 37 件。" },
        by: "Chapter 6 · Chapter Highlights" },
      { text: { en: "In 2021, only 2% of all federal AI bills in the United States were passed into law. This number jumped to 10% in 2022. Similarly, last year 35% of all state-level AI bills were passed into law.",
                zh: "2021 年，美國所有聯邦 AI 法案中只有 2% 通過成為法律。這個數字在 2022 年跳到 10%。同樣地，去年州級 AI 法案有 35% 通過成為法律。" },
        by: "Chapter 6 · Chapter Highlights" },
      { text: { en: "A qualitative analysis of the parliamentary proceedings of a diverse group of nations reveals that policymakers think about AI from a wide range of perspectives.",
                zh: "對一組多元國家的議會紀錄所做的質性分析顯示，政策制定者是從非常多不同的角度在思考 AI。" },
        by: "Chapter 6 · Chapter Highlights" },
      { text: { en: "Since 2017, the amount of U.S. government AI-related contract spending has increased roughly 2.5 times.",
                zh: "自 2017 年以來，美國政府 AI 相關的契約支出大約增加了 2.5 倍。" },
        by: "Chapter 6 · Chapter Highlights" },
      { text: { en: "In 2022, there were a total of 110 AI-related cases in U.S. federal and state courts, 6.5 times more than in 2016.",
                zh: "2022 年，美國聯邦與州法院共有 110 件 AI 相關案件，是 2016 年的 6.5 倍。" },
        by: "Chapter 6 · 6.4 U.S. AI-Related Legal Cases" }
    ]
  },

  /* ------------------------------------------------------------------ CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "讀原始章節" },
    title: { en: "Read Chapter 6 in full", zh: "閱讀第 6 章原文" },
    text:  { en: "Chapter 6 (sections 6.1–6.4) with every figure, table and footnote is free from Stanford HAI. Or head back to the report highlights and the full eight-chapter overview.",
             zh: "第 6 章(6.1–6.4 各節)連同所有圖表、表格與註腳，皆由史丹佛 HAI 免費提供。或回到報告重點與八大章節總覽。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2023-ai-index-report",
             label: { en: "Open the AI Index 2023 →", zh: "開啟 AI 指數 2023 →" } }
  }
];

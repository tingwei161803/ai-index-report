/* =========================================================================
   Education — deep dive · education.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2025, Chapter 7
   https://hai.stanford.edu/ai-index/2025-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 7: 7.1 Background, 7.2 K–12 CS and AI
   Education (United States and global), 7.3 Postsecondary CS and AI
   Education, 7.4 Looking Ahead. The chapter was prepared with the Kapor
   Foundation, CSTA, and PIT-UN. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "education";

window.SITE_META = {
  title:    { en: "AI Index Report 2025", zh: "AI 指數報告 2025" },
  subtitle: { en: "Education · a chapter deep dive", zh: "教育專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "Teachers want to teach AI. Almost nobody trained them.",
                zh: "老師想教 AI，但幾乎沒人訓練過他們" },
    subtitle: { en: "Chapter 7 of the AI Index 2025 — prepared with the Kapor Foundation, CSTA, and PIT-UN — looks at who actually gets to learn how AI works. Access to computer science has widened, master's degrees in AI have surged, and the gaps that have always defined computing education have not closed. The numbers:",
                zh: "AI 指數 2025 第 7 章由 Kapor Foundation、CSTA 與 PIT-UN 共同撰寫，檢視的是「誰真的有機會學會 AI 怎麼運作」。資訊科學的接觸面變寬了、AI 碩士學位暴增，而一直以來定義著計算教育的那些落差，並沒有縮小。先看數字：" },
    stats: [
      { label: { en: "% of US public high schools offering foundational CS in 2023–24 (35% in 2017–18)", zh: "% 2023–24 學年提供基礎資訊科學課的美國公立高中(2017–18 為 35%)" }, value: 60 },
      { label: { en: "% of US CS teachers who say AI belongs in foundational CS", zh: "% 認為 AI 應納入基礎資訊科學的美國資訊科學教師" }, value: 81 },
      { label: { en: "% of US high school CS teachers who feel equipped to teach AI (34% in elementary)", zh: "% 覺得自己有能力教 AI 的美國高中資訊科學教師(小學為 34%)" }, value: 46 },
      { label: { en: "thousand AP computer science exams taken in 2023 (19,390 in 2007)", zh: "千份 2023 年應考的 AP 資訊科學考卷(2007 年為 19,390 份)" }, value: 243 },
      { label: { en: "AI master's degrees awarded in the US in 2023 (104 bachelor's)", zh: "2023 年美國授予的 AI 碩士學位數(學士為 104 個)" }, value: 935 },
      { label: { en: "% of primary schools in sub-Saharan Africa with electricity in 2023", zh: "% 2023 年撒哈拉以南非洲有電力的小學" }, value: 34 }
    ]
  },

  /* --------------------------------------------------------- 7.2 US K–12 */
  {
    type: "prose",
    id: "k12-us",
    title:    { en: "7.2 — Access is up. Enrollment barely moved.",
                zh: "7.2 — 課開出來了，但選課的人幾乎沒變多" },
    subtitle: { en: "Since 'Computer Science for All' launched in 2016, the share of US high schools offering computer science has risen from about a third to three in five. The share of students actually taking it is 6.4%.",
                zh: "自 2016 年「Computer Science for All」啟動以來，提供資訊科學課的美國高中比例從約三分之一升到五分之三。而實際修課的學生比例是 6.4%。" },
    blocks: [
      { type: "p",
        text: { en: "In the 2017–18 academic year, 35% of US high schools offered computer science. By 2023–24 that had reached 60%. But the national average hides how differently states prioritize it: 100% of high schools in Arkansas and Maryland offer CS, against 31% in Montana. Participation tells a flatter story — across 41 states with data, 5.1% of high school students took a CS course in 2020–21 and 6.4% did in 2023–24. South Carolina reaches 26%; Florida, Arizona, and Idaho sit at 2%.",
                zh: "2017–18 學年，35% 的美國高中有開資訊科學課。到 2023–24 學年，這個數字達到 60%。但全國平均掩蓋了各州優先順序的巨大差異：阿肯色與馬里蘭有 100% 的高中開課，蒙大拿只有 31%。選課率的故事就平淡多了 — 在有資料的 41 個州裡，2020–21 學年有 5.1% 的高中生修過資訊科學課，2023–24 學年是 6.4%。南卡羅來納達到 26%；佛羅里達、亞利桑那與愛達荷則停在 2%。" } },
      { type: "h3",
        text: { en: "Who gets offered the course", zh: "誰被開課" } },
      { type: "ul",
        items: {
          en: ["School size is the sharpest divide: 91.2% of large schools offer foundational CS, against 76.4% of medium and just 43.1% of small ones.",
               "Income matters too. Schools where fewer than 25% of students qualify for free or reduced-price lunch offer CS at 65.0%; where more than 75% qualify, the rate falls to 50.0%.",
               "Geography cuts both ways — suburban schools lead at 70.1%, with urban (58.2%) and rural (56.1%) close together at the bottom.",
               "By race and ethnicity, Asian students have the highest access at 91.6%, followed by Native Hawaiian (83.3%), students of two or more races (83.0%), white (82.5%), Hispanic/Latino (80.4%), and Black students (79.7%). Native American students are last at 66.3%."],
          zh: ["學校規模是最劇烈的分野：91.2% 的大型學校開設基礎資訊科學課，中型 76.4%，小型只有 43.1%。",
               "所得也有影響。免費或減免午餐學生比例低於 25% 的學校，開課率是 65.0%；比例超過 75% 的學校，只剩 50.0%。",
               "地理位置的影響是兩面的 — 郊區學校以 70.1% 領先，市區(58.2%)與偏鄉(56.1%)一起落在後段。",
               "依種族族裔來看，亞裔學生的接觸率最高，達 91.6%，其次是夏威夷原住民(83.3%)、兩個以上種族(83.0%)、白人(82.5%)、西語裔(80.4%)與黑人學生(79.7%)。美洲原住民學生墊底，只有 66.3%。"]
        } },
      { type: "h3",
        text: { en: "Who actually enrolls", zh: "誰真的去修" } },
      { type: "p",
        text: { en: "Comparing CS enrollment against each group's share of the student population produces a ratio where 1.00 means proportional. Asian students sit at 2.60 — more than two and a half times their share. Black students (1.13), Native American/Alaskan students (1.00), and white students (1.00) are at or above parity nationally, though data gaps in nine states warrant caution. Hispanic/Latino students (0.69), Native Hawaiian/Pacific Islander students (0.75), and students of two or more races (0.80) remain underrepresented. So do girls (0.65), English language learners (0.64), students with IEPs (0.67), and economically disadvantaged students (0.72). Students with 504 plans are the one subgroup that is overrepresented, at 1.33.",
                zh: "把資訊科學選課率跟各族群佔學生總數的比例相除，得到一個以 1.00 代表「比例相當」的比值。亞裔學生是 2.60 — 超過他們人口佔比的兩倍半。黑人學生(1.13)、美洲原住民與阿拉斯加原住民學生(1.00)以及白人學生(1.00)在全國層級達到或超過平衡，不過九個州的資料缺口讓這個結論需要保留。西語裔學生(0.69)、夏威夷原住民與太平洋島民學生(0.75)以及兩個以上種族的學生(0.80)仍然偏低。女生(0.65)、英語學習者(0.64)、有個別化教育計畫的學生(0.67)與經濟弱勢學生(0.72)也是。唯一比例偏高的次族群是持有 504 計畫的學生，達 1.33。" } },
      { type: "h3",
        text: { en: "Advanced coursework grew twelvefold", zh: "進階課程成長了十二倍" } },
      { type: "p",
        text: { en: "AP computer science exams went from 19,390 in 2007 to 243,180 in 2023. AP CS Principles, designed to attract a broader class of students, covers some AI content areas even though AP CS A does not. But the growth has not evened out participation: in 2023, 91,216 exams were taken by white students and 69,695 by Asian students, against 43,083 Hispanic/Latino, 16,351 Black, 11,238 multiracial, 801 Native American, and 321 Native Hawaiian/Pacific Islander. Asian students, white boys, and multiracial students are overrepresented among AP CS test-takers; every other group is underrepresented.",
                zh: "AP 資訊科學考卷從 2007 年的 19,390 份增加到 2023 年的 243,180 份。AP CS Principles 的設計是為了吸引更廣泛的學生群體，即使 AP CS A 沒有涵蓋 AI，它仍觸及部分 AI 內容領域。但成長並沒有讓參與變得平均：2023 年，白人學生應考 91,216 份、亞裔 69,695 份，而西語裔 43,083 份、黑人 16,351 份、多種族 11,238 份、美洲原住民 801 份、夏威夷原住民與太平洋島民 321 份。在 AP 資訊科學考生中，亞裔學生、白人男生與多種族學生佔比偏高；其餘每一個群體都偏低。" } }
    ]
  },

  /* ------------------------------------------------------- AP EXAMS CHART */
  {
    type: "bars",
    id: "ap-exams",
    title:    { en: "AP computer science exams taken, 2007–23",
                zh: "AP 資訊科學考卷應考數，2007–23" },
    subtitle: { en: "In thousands. The count grew more than twelvefold in sixteen years, with the steepest climb between 2016 and 2019 — the years AP CS Principles scaled up.",
                zh: "單位：千份。十六年間成長超過十二倍，最陡的攀升出現在 2016 到 2019 年之間 — 那正是 AP CS Principles 規模擴大的幾年。" },
    series: [
      { label: { en: "2007", zh: "2007" }, value: 19.39 },
      { label: { en: "2013", zh: "2013" }, value: 29.55 },
      { label: { en: "2017", zh: "2017" }, value: 99.87 },
      { label: { en: "2020", zh: "2020" }, value: 179.19 },
      { label: { en: "2022", zh: "2022" }, value: 201.61 },
      { label: { en: "2023", zh: "2023" }, value: 243.18 }
    ]
  },

  /* ------------------------------------------------- TEACHERS + STANDARDS */
  {
    type: "prose",
    id: "teachers",
    title:    { en: "The willingness is there. The preparation is not.",
                zh: "意願有了，準備沒有" },
    subtitle: { en: "The Computer Science Teacher Landscape Survey collected data from 2,901 pre-K through 12 CS teachers nationally. It found a workforce that has already started teaching AI without being trained to.",
                zh: "資訊科學教師地景調查在全美收集了 2,901 位學前至 12 年級資訊科學教師的資料。結果顯示，這是一群還沒受過訓練、就已經開始教 AI 的教師。" },
    blocks: [
      { type: "p",
        text: { en: "81% of CS teachers believe that using AI and learning about AI should be part of a foundational CS learning experience. Fewer than half feel equipped to teach it — 46% in high school, 44% in middle school, and just 34% in elementary school. The gap widens as students get younger, which is the opposite of what an equitable pipeline would need.",
                zh: "81% 的資訊科學教師認為，使用 AI 與認識 AI 應該是基礎資訊科學學習經驗的一部分。但覺得自己有能力教的不到一半 — 高中 46%、國中 44%，小學只有 34%。學生年紀愈小、落差愈大，這正好跟一條公平的人才管道所需要的相反。" } },
      { type: "h3",
        text: { en: "They teach it anyway", zh: "他們還是照教" } },
      { type: "ul",
        items: {
          en: ["Over two-thirds of middle and high school CS teachers say they cover AI specifically, despite the lack of an explicit definition in CS standards; 65% of elementary teachers do the same.",
               "Of the 2,245 teachers who did spend class time on AI, most spent fewer than five hours per course. Elementary teachers spent the least — 70% spent only one to two hours.",
               "In a separate 2024 survey of 364 CS teachers, 88% identified a need for more resources for AI-related professional development. Asked what specifically, they named AI literacy: how AI works, how to use it, and its ethical impacts.",
               "Teachers named their greatest benefits as improved productivity, differentiating student learning, better academic support, and preparing students for the future. Their greatest concerns were misuse tied to academic integrity, AI limiting student learning or engagement, overreliance, misinformation and replicated bias, and student privacy."],
          zh: ["超過三分之二的國中與高中資訊科學教師表示他們明確教到 AI，儘管資訊科學課綱裡並沒有清楚定義；小學教師的比例是 65%。",
               "在 2,245 位確實花課堂時間教 AI 的教師中，多數每門課花不到五小時。小學教師花得最少 — 70% 只花了一到兩小時。",
               "另一份 2024 年、涵蓋 364 位資訊科學教師的調查中，88% 指出需要更多 AI 相關的專業發展資源。問到具體是什麼，他們說的是 AI 素養：AI 怎麼運作、怎麼使用，以及它的倫理影響。",
               "教師列出的最大好處是提升自己的生產力、做差異化教學、提供更好的學業支援，以及為學生的未來做準備。最大的疑慮則是與學術誠信有關的濫用、AI 限縮學生的學習或投入、過度依賴、錯誤資訊與偏誤的複製，以及學生隱私。"]
        } },
      { type: "h3",
        text: { en: "The standards have not caught up", zh: "課綱還沒跟上" } },
      { type: "p",
        text: { en: "The CSTA K–12 standards were last published in 2017 and contain only two standards, both at the advanced high school level, that specifically require AI knowledge. State-adopted K–12 CS standards average 97% coverage of the same subconcepts as the CSTA standards, indicating strong national coherence — but coherence around a framework that predates the generative AI era. Of the 44 states that have adopted K–12 CS standards, 33 have AI-specific standards, generally minimal and focused on high school grades. Four states have adopted more substantial AI-specific standards spanning K–12: Colorado (2024), Florida (2024), Ohio (2022), and Virginia (2024). Arkansas has defined standards for a high school AI and machine learning course.",
                zh: "CSTA 的 K–12 課綱最後一次發布是 2017 年，其中只有兩條標準明確要求 AI 知識，而且都在高中進階層級。各州採用的 K–12 資訊科學課綱，平均涵蓋了 CSTA 課綱 97% 的相同子概念，顯示全國一致性很高 — 但一致的是一套早於生成式 AI 時代的框架。在 44 個採用 K–12 資訊科學課綱的州中，有 33 個訂有 AI 專屬標準，內容通常很精簡，並集中在高中階段。有四個州採用了跨 K–12、份量較重的 AI 專屬標準：科羅拉多(2024)、佛羅里達(2024)、俄亥俄(2022)與維吉尼亞(2024)。阿肯色則訂出了高中 AI 與機器學習課程的標準。" } },
      { type: "p",
        text: { en: "Federal guidance so far has been about AI in education rather than AI education — the distinction the chapter opens with. The Department of Education's Office of Educational Technology released a series of reports in 2023 and 2024, the most recent in October 2024 offering guidance on safe and effective implementation of AI in K–12 schools. As of January 2025, 26 states have issued guidance on AI in education.",
                zh: "聯邦層級的指引至今談的都是「教育中的 AI」，而不是「AI 教育」 — 這正是本章開頭區分的兩件事。教育部教育科技辦公室在 2023 與 2024 年發布了一系列報告，最新的一份在 2024 年 10 月，提供在 K–12 學校安全有效導入 AI 的指引。截至 2025 年 1 月，有 26 個州發布了教育中 AI 的指引。" } }
    ]
  },

  /* -------------------------------------------------- GLOBAL CS ACCESS */
  {
    type: "bars",
    id: "cs-global",
    title:    { en: "Share of countries offering CS education, by continent, 2024",
                zh: "各洲提供資訊科學教育的國家比例，2024" },
    subtitle: { en: "Every region gained ground since 2019, when the figures were Europe 63.5%, Latin America and the Caribbean 29.5%, Asia 24.5%, and Africa 9.4%. Latin America added the most (+40.9 points), Africa close behind (+39.7).",
                zh: "自 2019 年以來每個區域都有進展，當年的數字是歐洲 63.5%、拉美與加勒比海 29.5%、亞洲 24.5%、非洲 9.4%。拉美增加最多(+40.9 個百分點)，非洲緊追在後(+39.7)。" },
    series: [
      { label: { en: "Europe", zh: "歐洲" },                    value: 88.88 },
      { label: { en: "Latin America & Caribbean", zh: "拉美與加勒比海" }, value: 70.45 },
      { label: { en: "Asia", zh: "亞洲" },                      value: 57.89 },
      { label: { en: "Africa", zh: "非洲" },                    value: 49.05 }
    ]
  },

  /* ---------------------------------------------------- 7.3 POSTSECONDARY */
  {
    type: "prose",
    id: "postsecondary",
    title:    { en: "7.3 — The master's degree is where AI showed up first",
                zh: "7.3 — AI 最先出現在碩士學位上" },
    subtitle: { en: "Bachelor's degrees move on a four-year cycle, so they lag. Master's degrees respond within a year — and between 2022 and 2023 the number of AI master's graduates in the US nearly doubled.",
                zh: "學士學位以四年為週期，所以反應遲緩。碩士學位一年內就會反應 — 而在 2022 到 2023 年間，美國 AI 碩士畢業生人數幾乎翻倍。" },
    blocks: [
      { type: "p",
        text: { en: "In 2023 US institutions produced 87,435 new computing bachelor's graduates, 52,107 master's, 20,725 associate degrees, and 2,540 PhDs. Bachelor's degrees in computing have grown 22% over the past decade; master's degrees grew 26% between 2022 and 2023 alone, and 83% over the decade. AI-specific programs, tracked under the CIP code created for them in 2016, are much smaller but moving faster: 935 AI master's degrees and 104 AI bachelor's degrees were awarded in 2023. The number of US institutions offering an AI-specific bachelor's degree nearly doubled between 2022 and 2023 to 19; 45 institutions offered an AI master's.",
                zh: "2023 年，美國院校產出 87,435 位計算領域學士、52,107 位碩士、20,725 位副學士與 2,540 位博士。計算領域的學士學位在過去十年成長 22%；碩士學位光是 2022 到 2023 年就成長 26%，十年成長 83%。以 2016 年為它們設立的 CIP 代碼追蹤的 AI 專屬學程規模小得多，但動得更快：2023 年授予 935 個 AI 碩士與 104 個 AI 學士學位。提供 AI 專屬學士學程的美國院校數在 2022 到 2023 年間幾乎倍增到 19 所；提供 AI 碩士的則有 45 所。" } },
      { type: "h3",
        text: { en: "Carnegie Mellon and everyone else", zh: "卡內基美隆，以及其他所有人" } },
      { type: "p",
        text: { en: "Until recently Carnegie Mellon was one of the only universities offering dedicated AI programs, and it still graduates more AI majors than anyone: 32 bachelor's, 178 master's, and 28 PhDs in 2023, having doubled its bachelor's output. The next AI master's producers are the University of Pennsylvania (98), the University of North Texas (76), Northeastern (55), and San Jose State (52). At the PhD level the entire national list is Carnegie Mellon (28), Capitol Technology University (4), and the University of Pittsburgh (1). Penn State graduated its first AI class in 2022.",
                zh: "直到不久前，卡內基美隆還是少數幾所有專門 AI 學程的大學，而它至今仍培養出最多 AI 主修生：2023 年 32 位學士、178 位碩士、28 位博士，其中學士產出翻倍。AI 碩士產出次多的是賓州大學(98)、北德州大學(76)、東北大學(55)與聖荷西州立大學(52)。博士層級的全國名單就這三所：卡內基美隆(28)、Capitol Technology University(4)與匹茲堡大學(1)。賓州州立大學則在 2022 年送出第一屆 AI 畢業生。" } },
      { type: "h3",
        text: { en: "Who is in the classroom", zh: "教室裡坐的是誰" } },
      { type: "ul",
        items: {
          en: ["Women earned 22% of computing bachelor's degrees, 23% of associate degrees, 24% of PhDs, and 32% of master's degrees in 2023 — even though women graduate from college at higher rates than men overall.",
               "Black students earned 8% of computing bachelor's and master's degrees and 7% of PhDs. Hispanic students earned 13% of bachelor's, 8% of master's, and 4% of PhDs. White students earned 46% of bachelor's and 52% of PhDs; Asian students 23% of bachelor's, 28% of master's, and 17% of PhDs.",
               "Graduate computing programs in the US run on international students. In 2023 nonresidents accounted for 67% of master's graduates and 60% of PhD graduates. International CS master's students more than doubled between 2022 and 2023, from 15,811 to 34,850.",
               "Two countries dominate that flow. Among international CS master's students in US universities in 2022, India sent 72,020 and China 13,190; among PhD students, China sent 5,130 and India 2,760."],
          zh: ["2023 年，女性拿到計算領域 22% 的學士學位、23% 的副學士、24% 的博士與 32% 的碩士 — 儘管整體而言女性的大學畢業率高於男性。",
               "黑人學生拿到計算領域 8% 的學士與碩士、7% 的博士。西語裔學生拿到 13% 的學士、8% 的碩士、4% 的博士。白人學生拿到 46% 的學士與 52% 的博士；亞裔學生拿到 23% 的學士、28% 的碩士與 17% 的博士。",
               "美國的計算研究所靠國際學生撐著。2023 年，非本國居民佔碩士畢業生的 67%、博士畢業生的 60%。國際資訊科學碩士生在 2022 到 2023 年間增加超過一倍，從 15,811 人到 34,850 人。",
               "這股流量由兩個國家主導。2022 年美國大學的國際資訊科學碩士生中，印度來了 72,020 人、中國 13,190 人；博士生則是中國 5,130 人、印度 2,760 人。"]
        } },
      { type: "h3",
        text: { en: "Globally, the US leads and Turkey is the outlier", zh: "全球來看，美國領先，土耳其是異數" } },
      { type: "p",
        text: { en: "Using OECD data on ICT graduates — informatics, communication technologies, and computer science — the United States produces more graduates than any other country at every level, and more than twice as many at the associate, master's, and PhD levels as the next country. In 2022 it awarded 116,401 ICT bachelor's degrees against Brazil's 61,760 and Mexico's 32,738; 55,706 master's against the UK's 21,688; and 2,759 PhDs against the UK's 1,156 and Germany's 1,008. On gender parity the ordering inverts. Women average roughly a quarter of ICT graduates at the associate, bachelor's, and PhD levels and closer to a third at master's level — in the US, 24% of bachelor's, 35% of master's, and 26% of PhDs. Turkey is the exception, where women make up at least half of ICT graduates at all four levels.",
                zh: "根據經濟合作暨發展組織(OECD)關於資通訊(ICT — 資訊學、通訊科技與資訊科學)畢業生的資料，美國在每一個學位層級的畢業生數都居冠，而且在副學士、碩士與博士三個層級都是第二名國家的兩倍以上。2022 年它授予 116,401 個 ICT 學士學位，巴西 61,760、墨西哥 32,738；碩士 55,706 個，英國 21,688；博士 2,759 個，英國 1,156、德國 1,008。但講到性別平衡，排序就翻轉了。女性平均約佔 ICT 副學士、學士與博士畢業生的四分之一，碩士層級接近三分之一 — 在美國是學士 24%、碩士 35%、博士 26%。土耳其是例外，女性在四個層級都至少佔 ICT 畢業生的一半。" } }
    ]
  },

  /* ------------------------------------------------------------ ACCORDION */
  {
    type: "accordion",
    id: "questions",
    title:    { en: "Six questions about AI in the classroom",
                zh: "關於 AI 進教室的六個問題" },
    subtitle: { en: "What the chapter distinguishes, measures, and admits it cannot measure.",
                zh: "這一章區分了什麼、量到了什麼，以及承認自己量不到什麼。" },
    qa: [
      { q: { en: "What is the difference between AI in education and AI education?",
             zh: "「教育中的 AI」跟「AI 教育」差在哪？" },
        a: { en: "AI in education is the use of AI tools in teaching and learning. AI literacy is a foundational understanding of AI — how it works, how to use it, and the risks of using it. AI education is AI literacy plus the technical skills to build AI: the data analysis underneath the technology, identifying and mitigating data bias, and so on. This chapter's data covers AI education. The distinction matters because policy has overwhelmingly gone to the first category: federal guidance, state guidance, and most university policy is about how students and teachers may use AI tools, not about teaching students to build them.",
             zh: "「教育中的 AI」是在教與學的過程裡使用 AI 工具。「AI 素養」是對 AI 的基礎理解 — 它怎麼運作、怎麼使用、使用有什麼風險。「AI 教育」則是 AI 素養加上打造 AI 所需的技術能力：技術底層的資料分析、辨識與緩解資料偏誤等等。本章的資料談的是 AI 教育。這個區分很重要，因為政策幾乎全部落在第一類：聯邦指引、州指引與多數大學政策，談的都是學生與教師可以怎麼使用 AI 工具，而不是怎麼教學生打造它。" } },
      { q: { en: "Why does the chapter use computer science data as a proxy for AI?",
             zh: "為什麼這一章用資訊科學的資料當 AI 的替代指標？" },
        a: { en: "Because AI has historically been studied under computer science, and AI-specific data mostly does not exist yet. Globally the situation is worse: AI education has usually been subsumed under CS or ICT education, so CS and ICT tracking serves as the proxy. The chapter warns that even this is unreliable — CS and ICT education are sometimes conflated with digital or computer literacy, which are different things, and the lack of standardized data collection, language barriers, and infrequent implementation updates make cross-country tracking hard.",
             zh: "因為 AI 在歷史上一直被歸在資訊科學底下研究，而 AI 專屬的資料大多還不存在。在全球層級情況更糟：AI 教育通常被涵蓋在資訊科學或資通訊教育之下，所以只能拿資訊科學與資通訊的追蹤當替代。本章也警告，連這個都不太可靠 — 資訊科學與資通訊教育有時會跟數位素養或電腦素養混為一談，而這是不同的東西；加上缺乏標準化的資料收集、語言隔閡，以及實施進度更新不頻繁，跨國追蹤非常困難。" } },
      { q: { en: "How many countries actually teach computer science?",
             zh: "實際上有多少國家在教資訊科學？" },
        a: { en: "About two-thirds offered or planned to offer CS education in 2024, double the share in 2019. It is mandatory in primary and/or secondary schools in 30% of countries, with Europe holding the highest concentration of those. Very few countries — Ghana, South Korea, and the Netherlands among them — include AI education explicitly in their curricula; most flag its importance in national education strategy conversations without a detailed implementation plan.",
             zh: "2024 年約有三分之二的國家提供或計畫提供資訊科學教育，是 2019 年比例的兩倍。有 30% 的國家把它列為小學和/或中學的必修，其中歐洲的密度最高。真正把 AI 教育明確寫進課綱的國家非常少 — 迦納、南韓與荷蘭是其中幾個 — 多數國家只是在國家教育戰略的討論裡標記它的重要性，沒有詳細的實施計畫。" } },
      { q: { en: "What is holding African countries back?",
             zh: "非洲國家卡在哪裡？" },
        a: { en: "Electricity. Africa made the second-largest gain of any continent between 2019 and 2024, going from 9.4% to 49.1% of countries offering CS education. But students in African countries remain the least likely to have access, and the chapter attributes this to infrastructure: in 2023 only 34% of primary schools in sub-Saharan Africa had access to electricity. Without power there is no computer literacy, let alone CS or AI education.",
             zh: "電力。非洲在 2019 到 2024 年間的進步幅度是各洲第二大，提供資訊科學教育的國家比例從 9.4% 升到 49.1%。但非洲國家的學生仍是最不可能接觸到的一群，本章把原因歸在基礎設施：2023 年，撒哈拉以南非洲只有 34% 的小學有電。沒有電就沒有電腦素養，更別說資訊科學或 AI 教育。" } },
      { q: { en: "Are universities ready?",
             zh: "大學準備好了嗎？" },
        a: { en: "Usage has outrun policy. 86% of students use AI in their studies and 61% of faculty use AI in their teaching, but as of early 2025 only 39% of institutions have an AI-related acceptable use policy — up 16 percentage points from 2024, so the direction is right and the base is low. Larger universities with more than 10,000 students are more likely to have one than institutions under 5,000. Guidance on AI education itself, as opposed to AI usage, is mostly relegated to the department level and mostly to computing departments.",
             zh: "使用跑在政策前面。86% 的學生在學習中使用 AI，61% 的教師在教學中使用 AI，但截至 2025 年初，只有 39% 的院校訂有 AI 相關的可接受使用政策 — 比 2024 年增加 16 個百分點，方向對了，但基期很低。學生數超過 10,000 人的大型大學，比不到 5,000 人的院校更可能有這種政策。至於「AI 教育」本身(相對於「AI 使用」)的指引，則多半下放到系所層級，而且多半是計算相關系所。" } },
      { q: { en: "Is there a curriculum framework anyone can use?",
             zh: "有沒有現成的課程框架可以用？" },
        a: { en: "Several, and they are converging. AI4K12 released K–12 AI education standards organized around 'Five Big Ideas in AI.' UNESCO published AI competency frameworks for both students and teachers; the student framework has four core competencies — a human-centered mindset, ethics of AI, AI techniques and applications, and AI system design — with students progressing from understanding to applying to creating. In the EU many countries rely on DigComp 2.2, which now includes recommended knowledge, skills, and attitudes for interacting with AI, though not for building AI systems. As of November 2024, 10 countries had issued guidance on AI in education: Australia, Belgium, Canada, Japan, New Zealand, South Korea, Ukraine, the United Kingdom, the United States, and Uruguay.",
             zh: "有好幾套，而且正在收斂。AI4K12 發布了以「AI 的五大概念」組織的 K–12 AI 教育標準。UNESCO 為學生與教師各出版了一套 AI 能力框架；學生版有四項核心能力 — 以人為本的心態、AI 倫理、AI 技術與應用、AI 系統設計 — 學生從理解、應用一路走到創造。在歐盟，許多國家依賴 DigComp 2.2，它現在納入了與 AI 互動所需的知識、技能與態度建議，但沒有涵蓋如何打造 AI 系統。截至 2024 年 11 月，有 10 個國家發布了教育中 AI 的指引：澳洲、比利時、加拿大、日本、紐西蘭、南韓、烏克蘭、英國、美國與烏拉圭。" } }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 7 · Education.",
                zh: "第 7 章「教育」的頭條發現。" },
    quotes: [
      { text: { en: "81% of CS teachers agree AI should be part of foundational computer science. Fewer than half of high school CS teachers feel equipped to teach it.",
                zh: "81% 的資訊科學教師同意 AI 應該是基礎資訊科學的一部分。而覺得自己有能力教的高中資訊科學教師不到一半。" },
        by: "Chapter 7 · Education" },
      { text: { en: "Two-thirds of countries worldwide offer or plan to offer K–12 computer science education — double the share in 2019.",
                zh: "全球有三分之二的國家提供或計畫提供 K–12 資訊科學教育 — 是 2019 年比例的兩倍。" },
        by: "Chapter 7 · Education" },
      { text: { en: "In 2023 only 34% of primary schools in sub-Saharan Africa had access to electricity — before computer literacy, let alone AI education, is even possible.",
                zh: "2023 年，撒哈拉以南非洲只有 34% 的小學有電 — 這是電腦素養、更別說 AI 教育能開始之前的前提。" },
        by: "Chapter 7 · Education" },
      { text: { en: "AI master's graduates in the US nearly doubled between 2022 and 2023, to 935 — against 104 bachelor's degrees.",
                zh: "美國的 AI 碩士畢業生在 2022 到 2023 年間幾乎翻倍，達到 935 人 — 相對之下學士只有 104 人。" },
        by: "Chapter 7 · Education" },
      { text: { en: "91.2% of large US high schools offer foundational computer science. Only 43.1% of small ones do.",
                zh: "美國有 91.2% 的大型高中提供基礎資訊科學課。小型高中只有 43.1%。" },
        by: "Chapter 7 · Education" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Education chapter", zh: "閱讀完整的教育章節" },
    text:  { en: "Chapter 7 (sections 7.1–7.4) with every figure and citation is free from Stanford HAI. Or head back to the report highlights and eight-chapter overview.",
             zh: "第 7 章(7.1–7.4 各節)連同所有圖表與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與八大章節總覽。" },
    link:  { label: { en: "Open the AI Index Report 2025 →", zh: "前往 AI 指數報告 2025 →" },
             url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" }
  }
];

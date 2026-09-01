/* =========================================================================
   Diversity — deep dive · diversity.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2023, Chapter 7
   https://hai.stanford.edu/ai-index/2023-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 7: the Overview and Chapter Highlights,
   7.1 AI Conferences (the WiML workshop at NeurIPS, 2022 data), 7.2 AI
   Postsecondary Education (CRA Taulbee Survey, 2021 data), and 7.3 K–12
   Education (AP computer science via Code.org, 2021 data).
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "diversity";

window.SITE_META = {
  title:    { en: "AI Index Report 2023", zh: "AI 指數報告 2023" },
  subtitle: { en: "Diversity · a chapter deep dive", zh: "多元性專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "Ethnicity is moving. Gender is standing still.",
                zh: "族裔組成在動，性別比例沒有" },
    subtitle: { en: "Chapter 7 is the only chapter in the report whose subject is people rather than models. It draws on three sources: the Women in Machine Learning workshop at NeurIPS (2022), the CRA Taulbee Survey of North American computing departments (2021), and Code.org’s AP computer science data (2021). Read across all three, the same pattern repeats — the ethnic mix of computing classrooms has shifted substantially in a decade, and the gender split has barely moved at any level.",
                zh: "第 7 章是整份報告裡唯一以「人」而不是「模型」為主題的一章。資料來自三個地方：NeurIPS 的 Women in Machine Learning 工作坊(2022 年)、CRA Taulbee 調查涵蓋的北美計算相關系所(2021 年)，以及 Code.org 的 AP 資訊科學考試資料(2021 年)。三份資料放在一起看，重複的是同一個樣式 — 計算教室的族裔組成十年來變化很大，而性別比例在任何一層都幾乎沒有動。" },
    stats: [
      { label: { en: "% of new AI PhDs in North America who were female in 2021 (up 3.2 points from 2011)", zh: "% 2021 年北美新科 AI 博士中的女性比例(比 2011 年增加 3.2 個百分點)" }, value: 21.3 },
      { label: { en: "% of new CS bachelor’s graduates who were female in 2021", zh: "% 2021 年新科資訊科學學士中的女性比例" }, value: 22.3 },
      { label: { en: "% of new CS PhD graduates who were female in 2021 (up from 19.9%)", zh: "% 2021 年新科資訊科學博士中的女性比例(前一年為 19.9%)" }, value: 23.3 },
      { label: { en: "% of new CS, CE, and information faculty hires who were female in 2021 (2017: 24.9%)", zh: "% 2021 年資訊科學、電腦工程與資訊學系新聘教職中的女性(2017 年為 24.9%)" }, value: 30.2 },
      { label: { en: "% of new resident CS bachelor’s graduates who were white in 2021 (2011: 71.9%)", zh: "% 2021 年本國新科資訊科學學士中的白人比例(2011 年為 71.9%)" }, value: 46.7 },
      { label: { en: "% of AP computer science exams taken by female students in 2021 (2007: 16.8%)", zh: "% 2021 年由女學生應考的 AP 資訊科學考卷(2007 年為 16.8%)" }, value: 30.6 }
    ]
  },

  /* ------------------------------------------------------ 7.1 CONFERENCES */
  {
    type: "prose",
    id: "wiml",
    nav:      { en: "7.1 WiML", zh: "7.1 研討會" },
    title:    { en: "7.1 — The one room in AI where women are the largest group",
                zh: "7.1 — AI 圈裡唯一一個女性佔最多數的房間" },
    subtitle: { en: "Women in Machine Learning, founded in 2006, runs an annual technical workshop at NeurIPS. In 2022 it drew 1,157 participants — 13 times the 2010 count, but down from 1,486 the year before.",
                zh: "Women in Machine Learning 成立於 2006 年，每年在 NeurIPS 舉辦一場技術工作坊。2022 年有 1,157 人參加 — 是 2010 年的 13 倍，但比前一年的 1,486 人少。" },
    blocks: [
      { type: "p",
        text: { en: "The decade-long trend is a steady climb: from 2010 to 2022 attendance at the WiML workshop multiplied thirteenfold. The 2021-to-2022 dip is the first real break in that line, and the chapter attributes it to the same drop in overall NeurIPS attendance that followed the conference moving away from a purely virtual format. Since 2020 WiML has also run an Un-Workshop at ICML, built around collaboration between participants from different backgrounds rather than paper presentations.",
                zh: "十年的趨勢是穩定上升：2010 到 2022 年間，WiML 工作坊的參加人數成長了十三倍。2021 到 2022 年的下滑是這條線第一次真正中斷，本章把原因歸給 NeurIPS 整體參加人數的下降 — 而那又跟研討會不再採用純線上形式有關。2020 年起 WiML 也在 ICML 辦 Un-Workshop，重點放在不同背景的參與者之間的協作，而不是論文發表。" } },
      { type: "h3",
        text: { en: "Who was in the room in 2022", zh: "2022 年房間裡的人" } },
      { type: "ul",
        items: {
          en: ["On gender, 37.0% of respondents identified as female and 25.8% as male — with 36.3% preferring not to say, plus 0.5% nonbinary, 0.2% gender fluid, and 0.2% gender non-conforming.",
               "Half the room was still in training: PhD students made up 49.4% of participants, ahead of research scientists and data scientists (20.8%), software and data engineers (8.4%), and faculty (4.4%).",
               "By continent of residence, North America led at 41.5%, followed by Europe (34.2%), Asia (17.1%), Africa (3.4%), South America (1.6%), and Australia/Oceania (1.4%). One respondent was temporarily residing in Antarctica.",
               "Submissions clustered around practice rather than theory: applications (32.5%), algorithms (23.4%), and deep learning (14.8%) led, while optimization and theory took 1.0% each."],
          zh: ["性別方面，37.0% 的回覆者認同為女性、25.8% 為男性 — 另有 36.3% 選擇不透露，加上 0.5% 非二元、0.2% 性別流動與 0.2% 性別不順從。",
               "房間裡有一半的人還在受訓階段：博士生佔參與者的 49.4%，其次是研究科學家與資料科學家(20.8%)、軟體與資料工程師(8.4%)以及教職(4.4%)。",
               "依居住洲別，北美以 41.5% 居首，其次是歐洲(34.2%)、亞洲(17.1%)、非洲(3.4%)、南美(1.6%)與大洋洲(1.4%)。有一位回覆者當時暫居南極洲。",
               "投稿主題集中在應用而不是理論：應用(32.5%)、演算法(23.4%)與深度學習(14.8%)領先，最佳化與理論則各只有 1.0%。"]
        } }
    ]
  },

  /* ------------------------------------------------------- WIML CONTINENT */
  {
    type: "bars",
    id: "wiml-where",
    nav:      { en: "Where they live", zh: "參與者分布" },
    title:    { en: "Continent of residence, 2022 WiML workshop participants",
                zh: "2022 年 WiML 工作坊參與者的居住洲別" },
    subtitle: { en: "Percent of survey respondents. Two-thirds of the room lives in North America or Europe. Compared with the previous year, 2022 saw greater representation from Europe, Asia, and South America.",
                zh: "單位：回覆者百分比。房間裡有三分之二住在北美或歐洲。與前一年相比，2022 年來自歐洲、亞洲與南美的比例都提高了。" },
    series: [
      { label: { en: "North America", zh: "北美" },   value: 41.5 },
      { label: { en: "Europe", zh: "歐洲" },          value: 34.2 },
      { label: { en: "Asia", zh: "亞洲" },            value: 17.1 },
      { label: { en: "Africa", zh: "非洲" },          value: 3.4 },
      { label: { en: "South America", zh: "南美" },   value: 1.6 }
    ]
  },

  /* --------------------------------------------------- 7.2 POSTSECONDARY */
  {
    type: "prose",
    id: "higher-ed",
    nav:      { en: "7.2 Higher ed", zh: "7.2 高教" },
    title:    { en: "7.2 — Every level of computing is about three-quarters male",
                zh: "7.2 — 計算領域的每一層，約四分之三是男性" },
    subtitle: { en: "The CRA Taulbee Survey tracks North American computing departments. On the 2021 numbers, the female share is 22.3% of new CS bachelor’s graduates, 27.8% of master’s, and 23.3% of PhDs — and 21.3% of the AI PhDs specifically.",
                zh: "CRA Taulbee 調查追蹤北美的計算相關系所。以 2021 年的數字看，女性佔新科資訊科學學士的 22.3%、碩士的 27.8%、博士的 23.3% — 而在專攻 AI 的博士中是 21.3%。" },
    blocks: [
      { type: "p",
        text: { en: "Bachelor’s degrees moved the most, and not by much: 22.30% of new CS bachelor’s graduates in 2021 were female, up from the year before and in line with a decade-long climb, against 77.66% male and 0.04% nonbinary or other. Master’s degrees are the least male of the three levels at 27.83% female and 0.90% nonbinary — but the chapter is blunt that this has not substantially increased over time, moving only from 24.6% in 2011 to 27.8% in 2021. PhDs rose to 23.30% female from 19.9%, with 0.12% nonbinary; 76.58% of new CS PhDs were male.",
                zh: "學士是動得最多的一層，而幅度也不大：2021 年新科資訊科學學士有 22.30% 是女性，比前一年高，也符合十年來的緩升趨勢，男性則是 77.66%，非二元或其他 0.04%。碩士是三個層級中男性比例最低的，女性 27.83%、非二元 0.90% — 但本章講得很直接：這個數字長期並沒有明顯上升，2011 年是 24.6%，2021 年也只到 27.8%。博士從 19.9% 升到 23.30% 為女性，非二元 0.12%；新科資訊科學博士有 76.58% 是男性。" } },
      { type: "h3",
        text: { en: "The AI PhD is the flattest line in the chapter", zh: "AI 博士是全章最平的一條線" } },
      { type: "p",
        text: { en: "Among new PhDs whose focus is artificial intelligence, 78.7% were male and 21.3% female in 2021. That is a 3.2 percentage point gain on 2011 — spread over a decade in which AI itself went from academic subfield to the center of the industry. The report’s own reading is that the number rose marginally from 2020 to 2021 and that there are no meaningful trends in the last decade relating to the gender of new AI PhDs.",
                zh: "在專攻人工智慧的新科博士中，2021 年有 78.7% 是男性、21.3% 是女性。相對 2011 年增加了 3.2 個百分點 — 而這十年正是 AI 從學術子領域變成整個產業核心的十年。報告自己的判讀是：2020 到 2021 年只有微幅上升，過去十年在新科 AI 博士的性別上看不到有意義的趨勢。" } },
      { type: "h3",
        text: { en: "Faculty hiring is the one place with real movement", zh: "唯一真的在動的是教職聘任" } },
      { type: "p",
        text: { en: "As of 2021, CS, CE, and information faculty in North America were 75.94% male, 23.94% female, and 0.12% nonbinary — the female share up about 5 percentage points since 2011. New hires look different from the standing body: 30.17% of new faculty hires in 2021 were female, up from 24.9% in 2017 and about nine points above 2015, with 0.57% nonbinary. Because faculty turnover is slow, a hiring rate above the standing rate is what the incumbent numbers will follow, eventually.",
                zh: "截至 2021 年，北美資訊科學、電腦工程與資訊學系的教職成員有 75.94% 是男性、23.94% 是女性、0.12% 是非二元 — 女性比例比 2011 年增加約 5 個百分點。新聘的樣貌跟在職者不同：2021 年的新聘教職有 30.17% 是女性，高於 2017 年的 24.9%，也比 2015 年高出約九個百分點，非二元佔 0.57%。因為教職汰換很慢，新聘比例高於在職比例，正是在職數字未來會跟上的方向。" } },
      { type: "h3",
        text: { en: "One thing the survey asked for the first time", zh: "調查第一次問到的一件事" } },
      { type: "p",
        text: { en: "The 2021 edition of the Taulbee Survey was the first to ask departments how many students received disability accommodations in the past year. The counts are small: 4.1% of bachelor’s students, 1.0% of PhD students, and 0.8% of master’s students. The chapter presents these as a first baseline rather than a finding — and notes elsewhere that publicly available demographic data on AI diversity is sparse enough that whole dimensions, sexual orientation among them, are not covered at all.",
                zh: "2021 年版的 Taulbee 調查第一次詢問各系所，過去一年有多少學生接受身心障礙相關的協助措施。人數都很少：學士 4.1%、博士 1.0%、碩士 0.8%。本章把這組數字當成第一個基準線而不是結論 — 並在別處指出，公開可得的 AI 多元性人口資料稀少到有些面向完全無法涵蓋，性傾向就是其中之一。" } }
    ]
  },

  /* ------------------------------------------------------- WOMEN BY STAGE */
  {
    type: "bars",
    id: "women-share",
    nav:      { en: "Women’s share", zh: "女性比例" },
    title:    { en: "Female share at each stage of the computing pipeline, 2021",
                zh: "2021 年計算人才管道各階段的女性比例" },
    subtitle: { en: "Percent of the total at each stage. The pipeline does not narrow smoothly — it starts at 30.6% in the AP exam room and ends at 21.3% among new AI PhDs. Faculty sit at 23.9%, new faculty hires at 30.2%.",
                zh: "單位：各階段佔比百分比。這條管道不是平順地收窄 — 起點是 AP 考場的 30.6%，終點是新科 AI 博士的 21.3%。在職教職是 23.9%，新聘教職則是 30.2%。" },
    series: [
      { label: { en: "AP CS exams", zh: "AP 考卷" },   value: 30.58 },
      { label: { en: "CS bachelor’s", zh: "資訊學士" }, value: 22.30 },
      { label: { en: "CS master’s", zh: "資訊碩士" },  value: 27.83 },
      { label: { en: "CS PhD", zh: "資訊博士" },       value: 23.30 },
      { label: { en: "AI PhD", zh: "AI 博士" },        value: 21.30 }
    ]
  },

  /* ------------------------------------------------------------ ETHNICITY */
  {
    type: "prose",
    id: "ethnicity",
    nav:      { en: "Ethnicity", zh: "族裔組成" },
    title:    { en: "The white share fell at every level. Asian and Hispanic students took up most of the slack.",
                zh: "白人比例在每一層都下降，補上的主要是亞裔與西語裔學生" },
    subtitle: { en: "In 2011, 71.9% of new resident CS bachelor’s graduates in North America were white. By 2021 that was 46.7% — the single largest shift anywhere in this chapter.",
                zh: "2011 年，北美新科本國資訊科學學士有 71.9% 是白人。到 2021 年剩 46.7% — 這是本章各項數字裡變動最大的一個。" },
    blocks: [
      { type: "p",
        text: { en: "Among new resident CS bachelor’s graduates in 2021, 46.69% were white, 33.99% Asian, 10.91% Hispanic of any race, 4.10% multiracial, 3.85% Black or African American, 0.24% Native Hawaiian or Pacific Islander, and 0.22% American Indian or Alaska Native. The Asian, Hispanic, and multiracial shares all rose steadily over the decade. These figures cover domestic students only — a real limit, because 16.3% of new CS bachelor’s graduates that year were nonresident aliens, and the survey does not report their ethnicity.",
                zh: "2021 年新科本國資訊科學學士中，46.69% 是白人、33.99% 是亞裔、10.91% 是西語裔(不分種族)、4.10% 是多種族、3.85% 是黑人或非裔美國人、0.24% 是夏威夷原住民或太平洋島民、0.22% 是美洲原住民或阿拉斯加原住民。亞裔、西語裔與多種族的比例在這十年間都穩定上升。這組數字只涵蓋本國學生 — 這是個實質限制，因為當年有 16.3% 的新科資訊科學學士是非本國居民，而調查並未回報他們的族裔。" } },
      { type: "p",
        text: { en: "The same direction shows at the graduate levels, from a higher starting point. Master’s: 50.28% white, 34.83% Asian, 7.25% Hispanic, 3.82% Black, 3.45% multiracial. PhD: 58.64% white, 29.00% Asian, 5.12% Hispanic, 4.05% Black, 2.13% multiracial — with the white share down 9.4 percentage points since 2011. Graduate computing in North America runs heavily on international students, who are outside these percentages entirely: 65.2% of new CS master’s graduates and 68.6% of new CS PhDs in 2021 were nonresident aliens.",
                zh: "研究所層級的方向一樣，只是起點更高。碩士：白人 50.28%、亞裔 34.83%、西語裔 7.25%、黑人 3.82%、多種族 3.45%。博士：白人 58.64%、亞裔 29.00%、西語裔 5.12%、黑人 4.05%、多種族 2.13% — 白人比例比 2011 年下降 9.4 個百分點。北美的計算研究所高度倚賴國際學生，而他們完全不在上面這些百分比裡：2021 年新科資訊科學碩士有 65.2%、博士有 68.6% 是非本國居民。" } },
      { type: "h3",
        text: { en: "Faculty is the slowest layer to change", zh: "教職是變得最慢的一層" } },
      { type: "p",
        text: { en: "Resident CS, CE, and information faculty in 2021 were 58.08% white and 29.70% Asian, with 5.82% unknown, 2.80% Hispanic, 2.54% Black or African American, 0.67% multiracial, 0.25% American Indian or Alaska Native, and 0.13% Native Hawaiian or Pacific Islander. The gap between white faculty and the next largest group is closing, from 46.1 percentage points in 2011 to 28.4 in 2021, but it is closing from one direction only. Black representation is the number that moves least anywhere in the chapter: 3.85% of bachelor’s graduates, 3.82% of master’s, 4.05% of PhDs, and 2.54% of faculty.",
                zh: "2021 年的本國資訊科學、電腦工程與資訊學系教職中，58.08% 是白人、29.70% 是亞裔，另有 5.82% 未知、2.80% 西語裔、2.54% 黑人或非裔美國人、0.67% 多種族、0.25% 美洲原住民或阿拉斯加原住民、0.13% 夏威夷原住民或太平洋島民。白人教職與次大族群之間的差距正在縮小，從 2011 年的 46.1 個百分點降到 2021 年的 28.4 個百分點，但縮小的方向只有一個。全章變動最小的數字是黑人的代表性：學士 3.85%、碩士 3.82%、博士 4.05%、教職 2.54%。" } }
    ]
  },

  /* ---------------------------------------------------------- 7.3 K–12 */
  {
    type: "prose",
    id: "k12",
    nav:      { en: "7.3 K–12", zh: "7.3 中小學" },
    title:    { en: "7.3 — The AP exam room is the most balanced stage, and it is still 69% male",
                zh: "7.3 — AP 考場是管道裡最平衡的一站，而它仍有 69% 是男生" },
    subtitle: { en: "Code.org tracks who sits the AP computer science exams in the United States. In 2021 the female share was 30.58% — almost double the 16.8% of 2007, and still the high-water mark of the whole pipeline.",
                zh: "Code.org 追蹤美國 AP 資訊科學考試的應考者。2021 年女性佔 30.58% — 幾乎是 2007 年 16.8% 的兩倍，也仍然是整條人才管道的最高點。" },
    blocks: [
      { type: "p",
        text: { en: "Of AP computer science exams taken in 2021, 69.16% were taken by male students, 30.58% by female students, and 0.26% by students who identified as neither. Male students still take more AP computer science exams than any other gender, but the female proportion has almost doubled in the last decade — the fastest gender shift the chapter records at any level.",
                zh: "2021 年的 AP 資訊科學考卷中，69.16% 由男學生應考、30.58% 由女學生應考、0.26% 由不認同為男性或女性的學生應考。男學生的應考數仍多於任何其他性別，但女性比例在過去十年幾乎翻倍 — 這是本章在所有層級裡記錄到最快的性別變化。" } },
      { type: "p",
        text: { en: "The state spread is wide and does not track where the industry is. The highest female shares were in Alabama (36%) and Washington, D.C. (36%), followed by Nevada, Louisiana, Tennessee, Maryland, and New York at 35% each. The states with the most CS and AI activity sit around the national average — Washington 32%, California 31%, Texas 30%. At the bottom are Kansas and South Dakota (15% each), North Dakota (16%), and Alaska (20%).",
                zh: "各州的差距很大，而且跟產業聚集的地方沒有關係。女性比例最高的是阿拉巴馬(36%)與華盛頓特區(36%)，其次是內華達、路易斯安那、田納西、馬里蘭與紐約，各 35%。資訊科學與 AI 活動最密集的幾個州反而落在全國平均附近 — 華盛頓州 32%、加州 31%、德州 30%。墊底的是堪薩斯與南達科他(各 15%)、北達科他(16%)與阿拉斯加(20%)。" } },
      { type: "h3",
        text: { en: "Ethnicity moves the same way it does in university", zh: "族裔的變化方向跟大學一樣" } },
      { type: "p",
        text: { en: "White students took the greatest proportion of 2021 exams at 42.74%, followed by Asian students (28.78%), Hispanic/Latino/Latina students (16.48%), Black/African American students (6.32%), students of two or more races (4.92%), Native American/Alaskan students (0.62%), and Native Hawaiian/Pacific Islander students (0.15%). As in postsecondary computer science, the test-taking pool has become more ethnically diverse year over year, with the Asian, Hispanic/Latino/Latina, and Black/African American shares all rising.",
                zh: "2021 年考卷中白人學生佔比最高，達 42.74%，其次是亞裔(28.78%)、西語裔(16.48%)、黑人或非裔美國人(6.32%)、兩個以上種族(4.92%)、美洲原住民或阿拉斯加原住民(0.62%)與夏威夷原住民或太平洋島民(0.15%)。跟大學端的資訊科學一樣，應考族群逐年變得更多元，亞裔、西語裔與黑人學生的比例都在上升。" } }
    ]
  },

  /* --------------------------------------------------------- AP ETHNICITY */
  {
    type: "bars",
    id: "ap-ethnicity",
    nav:      { en: "AP by ethnicity", zh: "AP 族裔" },
    title:    { en: "AP computer science exams taken by race and ethnicity, 2021",
                zh: "2021 年 AP 資訊科學考卷的種族與族裔分布" },
    subtitle: { en: "Percent of total responding students. Two groups take seven exams in ten. Native American/Alaskan students account for 0.62% and Native Hawaiian/Pacific Islander students for 0.15%, too small to show here.",
                zh: "單位：有回報族裔的學生佔比。兩個群體就拿走十份考卷中的七份。美洲原住民或阿拉斯加原住民佔 0.62%、夏威夷原住民或太平洋島民佔 0.15%，數字太小無法呈現在圖上。" },
    series: [
      { label: { en: "White", zh: "白人" },        value: 42.74 },
      { label: { en: "Asian", zh: "亞裔" },        value: 28.78 },
      { label: { en: "Hispanic", zh: "西語裔" },   value: 16.48 },
      { label: { en: "Black", zh: "黑人" },        value: 6.32 },
      { label: { en: "Two+ races", zh: "多種族" }, value: 4.92 }
    ]
  },

  /* -------------------------------------------------------------- CARDS */
  {
    type: "cards",
    id: "pipeline",
    nav:      { en: "Stage by stage", zh: "逐段拆解" },
    title:    { en: "Six stages of the pipeline, six sets of numbers",
                zh: "人才管道的六個階段，六組數字" },
    subtitle: { en: "The same two questions asked at every stage from the AP exam to the faculty meeting: who is in the room, and who is not.",
                zh: "從 AP 考場到系務會議，每一站都問同樣兩個問題：房間裡有誰、沒有誰。" },
    items: [
      { slug: "ap-computer-science",
        title:   { en: "AP computer science", zh: "AP 資訊科學" },
        summary: { en: "The most gender-balanced and most ethnically mixed stage in the chapter — 30.58% female in 2021, up from 16.8% in 2007.",
                   zh: "全章性別最平衡、族裔也最混合的一站 — 2021 年女性佔 30.58%，2007 年是 16.8%。" },
        tags: ["k12", "code.org"],
        overview: { en: "In 2021, 69.16% of AP computer science exams were taken by male students, 30.58% by female students, and 0.26% by students identifying as neither. By ethnicity: white 42.74%, Asian 28.78%, Hispanic/Latino/Latina 16.48%, Black/African American 6.32%, two or more races 4.92%. State-level female shares run from 36% in Alabama and Washington, D.C. down to 15% in Kansas and South Dakota. Everything downstream of this stage is less balanced than this stage.",
                   zh: "2021 年的 AP 資訊科學考卷中，69.16% 由男學生應考、30.58% 由女學生應考、0.26% 由不認同為男性或女性的學生應考。族裔分布為白人 42.74%、亞裔 28.78%、西語裔 16.48%、黑人或非裔美國人 6.32%、兩個以上種族 4.92%。各州的女性比例從阿拉巴馬與華盛頓特區的 36% 一路到堪薩斯與南達科他的 15%。這一站之後的每一站，都比這一站更不平衡。" } },
      { slug: "cs-bachelors",
        title:   { en: "CS bachelor’s graduates", zh: "資訊科學學士" },
        summary: { en: "22.30% female in 2021. The white share dropped from 71.9% in 2011 to 46.69% — the biggest single change in the chapter.",
                   zh: "2021 年女性佔 22.30%。白人比例從 2011 年的 71.9% 掉到 46.69% — 全章變動最大的一個數字。" },
        tags: ["undergraduate", "cra"],
        overview: { en: "New CS bachelor’s graduates in North America in 2021 were 77.66% male, 22.30% female, and 0.04% nonbinary or other. Among resident graduates the ethnic mix was 46.69% white, 33.99% Asian, 10.91% Hispanic, 4.10% multiracial, and 3.85% Black or African American, with the Asian, Hispanic, and multiracial shares climbing steadily through the decade. A further 16.3% of new CS bachelor’s graduates were nonresident aliens, whose ethnicity the survey does not report.",
                   zh: "2021 年北美的新科資訊科學學士有 77.66% 是男性、22.30% 是女性、0.04% 是非二元或其他。在本國畢業生中，族裔組成是白人 46.69%、亞裔 33.99%、西語裔 10.91%、多種族 4.10%、黑人或非裔美國人 3.85%，其中亞裔、西語裔與多種族的比例在這十年間穩定上升。另外有 16.3% 的新科資訊科學學士是非本國居民，調查沒有回報他們的族裔。" } },
      { slug: "cs-masters",
        title:   { en: "CS master’s graduates", zh: "資訊科學碩士" },
        summary: { en: "27.83% female — the highest of the three degree levels, and the one the chapter says has not substantially increased over time.",
                   zh: "女性 27.83% — 三個學位層級中最高，也是本章直言「長期沒有明顯上升」的那一個。" },
        tags: ["graduate", "cra"],
        overview: { en: "New CS master’s graduates in 2021 were 71.27% male, 27.83% female, and 0.90% nonbinary or other. The female share moved from 24.6% in 2011 to 27.8% in 2021 — three points in ten years. Resident graduates were 50.28% white, 34.83% Asian, 7.25% Hispanic, 3.82% Black or African American, and 3.45% multiracial. This is also the most international stage of the pipeline: 65.2% of new CS master’s graduates were nonresident aliens.",
                   zh: "2021 年的新科資訊科學碩士有 71.27% 是男性、27.83% 是女性、0.90% 是非二元或其他。女性比例從 2011 年的 24.6% 到 2021 年的 27.8% — 十年三個百分點。本國畢業生中白人 50.28%、亞裔 34.83%、西語裔 7.25%、黑人或非裔美國人 3.82%、多種族 3.45%。這也是整條管道國際化程度最高的一站：65.2% 的新科資訊科學碩士是非本國居民。" } },
      { slug: "cs-phd",
        title:   { en: "CS PhD graduates", zh: "資訊科學博士" },
        summary: { en: "23.30% female in 2021, up from 19.9%. Also the whitest student stage at 58.64% — though that is 9.4 points lower than in 2011.",
                   zh: "2021 年女性 23.30%，前一年 19.9%。也是學生端白人比例最高的一站(58.64%) — 但比 2011 年低了 9.4 個百分點。" },
        tags: ["doctorate", "cra"],
        overview: { en: "New CS PhD graduates in 2021 were 76.58% male, 23.30% female, and 0.12% nonbinary or other; the female share rose from 19.9%. Resident graduates were 58.64% white, 29.00% Asian, 5.12% Hispanic, 4.05% Black or African American, 2.13% multiracial, 0.64% American Indian or Alaska Native, and 0.43% Native Hawaiian or Pacific Islander. 68.6% of new CS PhDs were nonresident aliens — the highest share of any level.",
                   zh: "2021 年的新科資訊科學博士有 76.58% 是男性、23.30% 是女性、0.12% 是非二元或其他；女性比例從 19.9% 上升。本國畢業生中白人 58.64%、亞裔 29.00%、西語裔 5.12%、黑人或非裔美國人 4.05%、多種族 2.13%、美洲原住民或阿拉斯加原住民 0.64%、夏威夷原住民或太平洋島民 0.43%。68.6% 的新科資訊科學博士是非本國居民 — 是所有層級中最高的。" } },
      { slug: "ai-phd",
        title:   { en: "New AI PhDs", zh: "新科 AI 博士" },
        summary: { en: "78.7% male, 21.3% female — a 3.2 point gain on 2011, and the chapter finds no meaningful trend across the decade.",
                   zh: "78.7% 男性、21.3% 女性 — 比 2011 年多 3.2 個百分點，本章判定這十年看不到有意義的趨勢。" },
        tags: ["doctorate", "gender"],
        overview: { en: "The subset of new PhDs whose focus is artificial intelligence is the least gender-balanced student stage in the chapter: 78.7% male and 21.3% female in 2021. The female share is 3.2 percentage points higher than in 2011 and rose marginally from 2020, but the chapter states directly that there are no meaningful trends in the last decade relating to the gender of new AI PhDs. This is the group that goes on to build the systems the rest of the report measures.",
                   zh: "在新科博士中專攻人工智慧的這一群，是本章學生端性別最不平衡的一站：2021 年 78.7% 男性、21.3% 女性。女性比例比 2011 年高 3.2 個百分點，從 2020 年也只有微幅上升，但本章直接寫明：過去十年在新科 AI 博士的性別上看不到有意義的趨勢。而這群人正是接下來要去打造整份報告在量測的那些系統的人。" } },
      { slug: "faculty",
        title:   { en: "CS, CE, and information faculty", zh: "資訊相關系所教職" },
        summary: { en: "23.94% female overall, but 30.17% of new hires — the one number in the chapter with a clearly better leading edge.",
                   zh: "在職女性 23.94%，新聘則是 30.17% — 全章唯一一個「新的比舊的明顯好」的數字。" },
        tags: ["faculty", "hiring"],
        overview: { en: "As of 2021, North American CS, CE, and information faculty were 75.94% male, 23.94% female, and 0.12% nonbinary — the female share up about 5 percentage points since 2011. New hires in the same year were 30.17% female, 69.26% male, and 0.57% nonbinary, up from 24.9% female in 2017 and about nine points above 2015. By ethnicity, resident faculty were 58.08% white and 29.70% Asian, with 2.80% Hispanic and 2.54% Black or African American; the gap between white faculty and the next largest group narrowed from 46.1 points in 2011 to 28.4 in 2021.",
                   zh: "截至 2021 年，北美資訊科學、電腦工程與資訊學系的教職有 75.94% 是男性、23.94% 是女性、0.12% 是非二元 — 女性比例比 2011 年增加約 5 個百分點。同一年的新聘教職則是女性 30.17%、男性 69.26%、非二元 0.57%，高於 2017 年女性的 24.9%，也比 2015 年高出約九個百分點。族裔方面，本國教職有 58.08% 是白人、29.70% 是亞裔，西語裔 2.80%、黑人或非裔美國人 2.54%；白人教職與次大族群之間的差距從 2011 年的 46.1 個百分點縮小到 2021 年的 28.4 個百分點。" } }
    ]
  },

  /* --------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 7 · Diversity.",
                zh: "第 7 章「多元性」的頭條發現。" },
    quotes: [
      { text: { en: "North American AI researchers and practitioners in both industry and academia are predominantly white and male. This lack of diversity can lead to harms, among them the reinforcement of existing societal inequalities and bias.",
                zh: "北美產業界與學術界的 AI 研究者與從業者，以白人男性為主。這種多元性的欠缺可能造成傷害，其中包括既有社會不平等與偏誤被進一步強化。" },
        by: "Chapter 7 · Diversity" },
      { text: { en: "In 2021, 78.7% of new AI PhDs were male. Only 21.3% were female, a 3.2 percentage point increase from 2011.",
                zh: "2021 年，78.7% 的新科 AI 博士是男性。只有 21.3% 是女性，比 2011 年增加 3.2 個百分點。" },
        by: "Chapter 7 · Diversity" },
      { text: { en: "In 2011, 71.9% of new resident CS bachelor’s graduates were white. In 2021, that number dropped to 46.7%.",
                zh: "2011 年，本國新科資訊科學學士有 71.9% 是白人。2021 年，這個數字降到 46.7%。" },
        by: "Chapter 7 · Diversity" },
      { text: { en: "Since 2017, the proportion of new female CS, CE, and information faculty hires has increased from 24.9% to 30.2%. Still, most faculty in North American universities are male (75.9%).",
                zh: "自 2017 年以來，資訊科學、電腦工程與資訊學系新聘教職中的女性比例從 24.9% 上升到 30.2%。但北美大學裡的教職仍以男性為主(75.9%)。" },
        by: "Chapter 7 · Diversity" },
      { text: { en: "The share of AP computer science exams taken by female students increased from 16.8% in 2007 to 30.6% in 2021.",
                zh: "由女學生應考的 AP 資訊科學考卷比例，從 2007 年的 16.8% 上升到 2021 年的 30.6%。" },
        by: "Chapter 7 · Diversity" }
    ]
  },

  /* ------------------------------------------------------------------ CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 7 in full", zh: "閱讀第 7 章原文" },
    text:  { en: "Chapter 7 (sections 7.1–7.3) with every figure and citation is free from Stanford HAI. The chapter notes its own limits: the data is neither comprehensive nor conclusive, and publicly available demographic data on AI diversity remains sparse.",
             zh: "第 7 章(7.1–7.3 各節)連同所有圖表與引用，皆由史丹佛 HAI 免費提供。本章也標明了自己的限制：這些資料既不完整也不具結論性，而公開可得的 AI 多元性人口資料仍然稀少。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2023-ai-index-report",
             label: { en: "Open the AI Index 2023 →", zh: "開啟 AI 指數 2023 →" } }
  }
];

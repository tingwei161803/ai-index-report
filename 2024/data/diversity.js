/* =========================================================================
   Diversity — deep dive · diversity.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2024, Chapter 8
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 8: 8.1 AI Postsecondary Education (North
   America, via the CRA Taulbee Survey; Europe, via Informatics Europe),
   8.2 AI Conferences (the WiML workshop at NeurIPS), and 8.3 K–12 Education
   (AP computer science, via Code.org). Unless noted, the data year is 2022.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "diversity";

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Diversity · a chapter deep dive", zh: "多元性專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "A decade on, computing is still about three-quarters male at every level",
                zh: "十年過去，計算領域的每一層仍有約四分之三是男性" },
    subtitle: { en: "Chapter 8 is the one place in the report where the subject is people rather than models: who studies computer science, who teaches it, who shows up at NeurIPS, who sits the AP exam. The report’s own framing is that AI developers do not look like AI users, and that the gap can carry bias into the systems. Read across the 2022 data, ethnicity is moving and gender is not.",
                zh: "第 8 章是整份報告裡唯一以「人」而不是「模型」為主體的一章：誰在念資訊科學、誰在教它、誰出現在 NeurIPS、誰去考 AP。報告自己的說法是，打造 AI 的人和使用 AI 的人長得不一樣，而這個落差會把偏誤帶進系統裡。把 2022 年的資料橫著看：族裔組成在動，性別沒有。" },
    stats: [
      { label: { en: "% of new US/Canada CS bachelor’s graduates in 2022 who were women", zh: "% 2022 年美加新科資訊科學學士中的女性比例" }, value: 22.2 },
      { label: { en: "% of new CS PhD graduates who were women (master’s: 26.3%)", zh: "% 新科資訊科學博士中的女性比例(碩士為 26.3%)" }, value: 22.1 },
      { label: { en: "% of CS, CE, and information faculty who were women (new hires: 28.0%)", zh: "% 資訊科學、電腦工程與資訊學系教職員中的女性(新聘為 28.0%)" }, value: 24.3 },
      { label: { en: "% of resident CS PhD graduates in 2022 who were not white", zh: "% 2022 年本國資訊科學博士畢業生中非白人的比例" }, value: 41.1 },
      { label: { en: "% of AP computer science exams taken by female students in 2022 (2007: 16.8%)", zh: "% 2022 年由女學生應考的 AP 資訊科學考卷(2007 年為 16.8%)" }, value: 30.5 },
      { label: { en: "attendees at the 2023 NeurIPS WiML workshop (89 in 2010)", zh: "2023 年 NeurIPS WiML 工作坊的參加人數(2010 年為 89 人)" }, value: 714 }
    ]
  },

  /* -------------------------------------------------- 8.1 NORTH AMERICA */
  {
    type: "prose",
    id: "north-america",
    nav:      { en: "8.1 Gender", zh: "8.1 性別" },
    title:    { en: "8.1 — The gender line barely moved in a decade",
                zh: "8.1 — 十年下來，性別那條線幾乎沒動" },
    subtitle: { en: "The Computing Research Association’s annual Taulbee Survey tracks new CS graduates and faculty across the United States and Canada. Four different measures, taken a decade apart, all land in the same narrow band.",
                zh: "電腦研究協會(CRA)每年的 Taulbee 調查追蹤美國與加拿大新科資訊科學畢業生與教職員。四個不同的指標，隔了十年，全部落在同一個很窄的區間裡。" },
    blocks: [
      { type: "p",
        text: { en: "Women were 22.2% of new CS bachelor’s graduates in 2022, the top of a decade-long climb; another 0.1% identified as nonbinary or other. Master’s programs are the least lopsided of the three degrees at 26.3% women — but that is up from 24.6% in 2011, which is 1.7 percentage points in eleven years. At PhD level the share slipped to 22.1% in 2022, and the report is explicit that the long-term trend is unchanged. In other words, the pipeline does not narrow for women as it goes up; it was already narrow at the bottom.",
                zh: "2022 年，女性佔新科資訊科學學士的 22.2%，是十年攀升的高點；另有 0.1% 認同為非二元或其他。碩士班是三個學位裡最不失衡的，女性佔 26.3% — 但這是從 2011 年的 24.6% 一路走上來的，十一年只增加 1.7 個百分點。博士層級在 2022 年反而略降到 22.1%，報告直說長期趨勢並沒有改變。換句話說，這條管道並不是往上走才變窄，它在最底層就已經很窄了。" } },
      { type: "h3",
        text: { en: "Faculty are the one place the number is rising", zh: "教職是唯一在往上走的地方" } },
      { type: "p",
        text: { en: "As of 2022 faculty in CS, computer engineering, and information fields were 75.6% male, 24.3% female, and 0.1% nonbinary — up since 2011, but by a small amount. New hires are the exception worth watching: 28.0% of new faculty hires in 2022 were women, against 71.7% men, a share the report notes sits well above the proportion of new female PhDs. Whatever is happening in hiring is running ahead of what the doctoral pipeline is producing.",
                zh: "截至 2022 年，資訊科學、電腦工程與資訊學系的教職員有 75.6% 是男性、24.3% 是女性、0.1% 是非二元 — 比 2011 年高，但幅度很小。真正值得盯的例外是新聘：2022 年新聘教職員有 28.0% 是女性、71.7% 是男性，報告特別點出這個比例明顯高於新科女性博士的佔比。招聘端發生的事，跑在博士班產出的前面。" } },
      { type: "h3",
        text: { en: "One number that is not about gender or race", zh: "一個與性別、族裔都無關的數字" } },
      { type: "p",
        text: { en: "For the second year running the CRA asked departments how many students received disability accommodations. The answers were low and flat: 4.1% of bachelor’s students, 1.5% of master’s students, and 1.1% of PhD students in 2022, against 4.1%, 0.8%, and 1.0% the year before. The chapter says only that the proportion has remained consistent year over year — it does not claim the figure measures how many students have a disability.",
                zh: "CRA 連續第二年請各系所回報有多少學生取得身心障礙的學習調整。答案既低且平：2022 年學士 4.1%、碩士 1.5%、博士 1.1%，前一年分別是 4.1%、0.8% 與 1.0%。這一章只說這個比例逐年維持穩定 — 並沒有主張這個數字等於身心障礙學生的實際比例。" } }
    ]
  },

  /* ---------------------------------------------------- WOMEN BY LEVEL */
  {
    type: "bars",
    id: "women-by-level",
    nav:      { en: "Women by level", zh: "女性占比" },
    title:    { en: "Women as a share of CS graduates and faculty, US and Canada, 2022",
                zh: "女性在美加資訊科學畢業生與教職員中的比例，2022" },
    subtitle: { en: "Per cent. Five separate measures, none of them above 28%, and the highest is the one that describes who was hired last year rather than who graduated.",
                zh: "單位：%。五個各自獨立的指標，沒有一個超過 28%，而最高的那個講的是去年聘了誰，不是誰畢業了。" },
    series: [
      { label: { en: "Bachelor’s", zh: "學士" },   value: 22.20 },
      { label: { en: "Master’s", zh: "碩士" },     value: 26.26 },
      { label: { en: "PhD", zh: "博士" },          value: 22.10 },
      { label: { en: "All faculty", zh: "全體教職" }, value: 24.27 },
      { label: { en: "New hires", zh: "新聘教職" }, value: 28.00 }
    ]
  },

  /* ------------------------------------------------- 8.1 ETHNICITY (NA) */
  {
    type: "prose",
    id: "ethnicity",
    nav:      { en: "8.1 Ethnicity", zh: "8.1 族裔" },
    title:    { en: "The classes are getting less white — and the effect shrinks the higher you go",
                zh: "教室裡的白人比例在下降 — 但愈往上走，這個效果愈小" },
    subtitle: { en: "This is the part of the chapter that actually moved. Since 2011 the Asian share of CS bachelor’s graduates has risen 19.8 percentage points and the Hispanic share 5.2 points; in raw numbers, Hispanic graduates grew 4.7 times over the decade and Black or African American graduates 2.5 times.",
                zh: "這是本章真正有變化的部分。自 2011 年以來，亞裔在資訊科學學士畢業生中的比例增加 19.8 個百分點、西語裔增加 5.2 個百分點；以絕對人數看，十年間西語裔畢業生成長 4.7 倍，黑人或非裔美國人畢業生成長 2.5 倍。" },
    blocks: [
      { type: "p",
        text: { en: "Among resident CS bachelor’s graduates in 2022, white students were 44.6% and Asian students 35.7% — the two groups are now nine points apart, where a decade ago the gap was far wider. Hispanic students of any race were 11.0%, multiracial students 4.4%, and Black or African American students 4.1%. The head counts behind those shares: 10,970 white, 8,795 Asian, 2,708 Hispanic, 1,072 multiracial, 1,004 Black or African American, 33 American Indian or Alaska Native, and 28 Native Hawaiian or Pacific Islander.",
                zh: "2022 年的本國資訊科學學士畢業生中，白人佔 44.6%、亞裔佔 35.7% — 兩者現在只差九個百分點，十年前的差距遠比這個大。任何種族的西語裔佔 11.0%、多種族佔 4.4%、黑人或非裔美國人佔 4.1%。這些比例背後的人數是：白人 10,970 人、亞裔 8,795 人、西語裔 2,708 人、多種族 1,072 人、黑人或非裔美國人 1,004 人、美洲原住民或阿拉斯加原住民 33 人、夏威夷原住民或太平洋島民 28 人。" } },
      { type: "h3",
        text: { en: "Higher up, the numbers get very small", zh: "愈往上，人數就愈少" } },
      { type: "ul",
        items: {
          en: ["Master’s graduates in 2022 were 47.9% white, 35.8% Asian, 8.2% Hispanic, 4.2% Black or African American, and 3.5% multiracial — 3,050, 2,278, 522, 269, and 222 people respectively.",
               "PhD graduates were 58.9% white and 29.6% Asian, with 5.1% Black or African American and 4.7% Hispanic. Taken together, 41.1% of resident CS PhD graduates in 2022 were not white, a considerable rise on 2011.",
               "But at PhD level the counts are tiny enough to read one by one: 327 white, 164 Asian, 28 Black or African American, 26 Hispanic, 7 multiracial, 2 American Indian or Alaska Native, and 1 Native Hawaiian or Pacific Islander.",
               "Faculty are the oldest layer and look it: 57.3% white and 30.1% Asian, then 3.0% Hispanic and 2.5% Black or African American. The gap between white faculty and the next largest group was 46.1 points in 2011 and 27.2 points by 2021 — closing, but from a long way out."],
          zh: ["2022 年的碩士畢業生中，白人佔 47.9%、亞裔 35.8%、西語裔 8.2%、黑人或非裔美國人 4.2%、多種族 3.5% — 人數分別是 3,050、2,278、522、269 與 222 人。",
               "博士畢業生中白人佔 58.9%、亞裔 29.6%，黑人或非裔美國人 5.1%、西語裔 4.7%。合計起來，2022 年有 41.1% 的本國資訊科學博士畢業生不是白人，比 2011 年大幅上升。",
               "但博士層級的人數少到可以一個一個數：白人 327 人、亞裔 164 人、黑人或非裔美國人 28 人、西語裔 26 人、多種族 7 人、美洲原住民或阿拉斯加原住民 2 人、夏威夷原住民或太平洋島民 1 人。",
               "教職員是最年長的一層，看起來也就是那樣：白人 57.3%、亞裔 30.1%，接著是西語裔 3.0% 與黑人或非裔美國人 2.5%。白人教職員與次大族群的差距在 2011 年是 46.1 個百分點，到 2021 年縮小到 27.2 個百分點 — 有在收斂，但起點很遠。"]
        } },
      { type: "h3",
        text: { en: "What the survey does not see", zh: "這份調查看不到的東西" } },
      { type: "p",
        text: { en: "Every ethnicity figure above covers domestic or resident students and faculty only. The CRA reports how many nonresident aliens there are at each level, but not their ethnicity, so a large share of the people in these classrooms is simply outside the chart. The survey is also partial: of the 297 PhD-granting departments targeted, 182 responded, a 61% response rate. And the AI Index warns against per capita comparisons between this North American data and the European figures that follow, because the European numbers come from national statistical offices and cover far more ground.",
                zh: "上面每一個族裔數字都只涵蓋本國或具居留身分的學生與教職員。CRA 會回報各層級有多少非本國籍人士，卻不包含他們的族裔，所以這些教室裡有相當一部分人根本不在圖表上。這份調查本身也是不完整的：在 297 個被調查的博士授予系所中，有 182 個回覆，回覆率 61%。而 AI 指數也提醒，不要把這份北美資料和接下來的歐洲數字拿去做人均比較，因為歐洲的數字來自各國統計機關，涵蓋範圍大得多。" } }
    ]
  },

  /* ------------------------------------------------------- 8.1 EUROPE */
  {
    type: "prose",
    id: "europe",
    nav:      { en: "8.1 Europe", zh: "8.1 歐洲" },
    title:    { en: "Europe: every surveyed country, every level, more men than women",
                zh: "歐洲：每一個受調查國家、每一個層級，男性都多於女性" },
    subtitle: { en: "New to this year’s chapter is data from Informatics Europe covering informatics, CS, computer engineering, and IT graduates. The finding is unanimous and it is one of the chapter’s three headline points.",
                zh: "今年這一章新增了 Informatics Europe 的資料，涵蓋資訊學、資訊科學、電腦工程與資訊科技的畢業生。結論是一面倒的，也是本章三個頭條發現之一。" },
    blocks: [
      { type: "p",
        text: { en: "At bachelor’s level men dominate in the majority of surveyed nations, and the gap has narrowed only slightly since 2011. France (14.8%), the United Kingdom (17.8%), and Germany (21.5%) report some of the lowest female shares on the list — three of the largest computing economies in Europe sitting at or near the bottom. Bulgaria has the highest share of female graduates at 35.2%.",
                zh: "學士層級在多數受調查國家由男性主導，而且自 2011 年以來差距只稍微縮小。法國(14.8%)、英國(17.8%)與德國(21.5%)是名單上女性比例最低的幾個 — 歐洲三個最大的計算經濟體，位置就在底部或接近底部。女性畢業生比例最高的是保加利亞，35.2%。" } },
      { type: "p",
        text: { en: "Master’s degrees show the same shape with a wider spread. Estonia (42.0%), Romania (41.9%), and Bulgaria (40.4%) come closest to parity; Belgium (13.7%), Italy (14.1%), and Switzerland (15.8%) are furthest from it. The ordering is worth sitting with: the three countries closest to parity all sit on the eastern side of the continent, the three furthest from it in the west, and the two ends are about threefold apart.",
                zh: "碩士學位是同一個形狀，但落差更大。愛沙尼亞(42.0%)、羅馬尼亞(41.9%)與保加利亞(40.4%)最接近平衡；比利時(13.7%)、義大利(14.1%)與瑞士(15.8%)離平衡最遠。這個排序值得多看一眼：最接近平衡的三個國家都在歐陸東側，離平衡最遠的三個都在西側，而兩端之間大約差三倍。" } },
      { type: "p",
        text: { en: "PhD graduates are predominantly male in every surveyed country without exception. The United Kingdom, Germany, and Switzerland have narrowed their gaps over the last decade, with women taking a growing share; Finland and Spain have seen theirs widen slightly. Read those movements carefully, though — where the cohorts are small, a single year swings the percentage. Bulgaria produced 24 PhDs in total in 2022, Estonia 26, and Latvia 12. One label note: a year here means the year an academic year ended, so 2022 covers the 2021/2022 intake.",
                zh: "博士畢業生在每一個受調查國家都是男性居多，沒有例外。英國、德國與瑞士的差距在過去十年縮小，女性佔比逐漸提高；芬蘭與西班牙則略為擴大。不過這些變動要小心讀 — 群體一小，一年就能把百分比甩來甩去。2022 年保加利亞總共產出 24 位博士、愛沙尼亞 26 位、拉脫維亞 12 位。還有一個標示上的細節：這裡的年份指的是學年結束的那一年，所以 2022 年對應的是 2021/2022 學年。" } }
    ]
  },

  /* ----------------------------------------------- EUROPE MASTER'S BARS */
  {
    type: "bars",
    id: "europe-masters",
    nav:      { en: "Europe master’s", zh: "歐洲碩士" },
    title:    { en: "Women as a share of informatics, CS, CE, and IT master’s graduates, 2022",
                zh: "女性在資訊學、資訊科學、電腦工程與資訊科技碩士畢業生中的比例，2022" },
    subtitle: { en: "Per cent, the three highest and the two lowest of the surveyed European countries. Nobody reaches parity, and the spread between the ends is roughly threefold.",
                zh: "單位：%，取受調查歐洲國家中最高的三個與最低的兩個。沒有人達到平衡，而兩端之間的差距大約是三倍。" },
    series: [
      { label: { en: "Estonia", zh: "愛沙尼亞" },  value: 42.0 },
      { label: { en: "Romania", zh: "羅馬尼亞" },  value: 41.9 },
      { label: { en: "Bulgaria", zh: "保加利亞" }, value: 40.4 },
      { label: { en: "Italy", zh: "義大利" },      value: 14.1 },
      { label: { en: "Belgium", zh: "比利時" },    value: 13.7 }
    ]
  },

  /* -------------------------------------------------- 8.2 CONFERENCES */
  {
    type: "cards",
    id: "conferences",
    nav:      { en: "8.2 WiML", zh: "8.2 研討會" },
    title:    { en: "8.2 — What the WiML workshop at NeurIPS looked like in 2023",
                zh: "8.2 — 2023 年 NeurIPS 的 WiML 工作坊長什麼樣" },
    subtitle: { en: "Women in Machine Learning, founded in 2006, runs an annual technical workshop at NeurIPS. It is the chapter’s only window onto the conference side of the field — four measures, each with the caveat that goes with it.",
                zh: "Women in Machine Learning 成立於 2006 年，每年在 NeurIPS 舉辦技術工作坊。這是本章唯一一扇看向研討會端的窗 — 四個指標，每一個都附帶它自己的但書。" },
    items: [
      { slug: "wiml-attendance",
        title:   { en: "714 attendees, down two years running", zh: "714 人參加，連兩年下滑" },
        summary: { en: "The 2023 workshop drew 714 people — nearly eight times the 89 who attended in 2010, but lower than each of the two preceding years.",
                   zh: "2023 年的工作坊有 714 人參加 — 幾乎是 2010 年 89 人的八倍，但比前兩年都低。" },
        tags: ["neurips"],
        overview: { en: "The long arc is unambiguous: from 89 attendees in 2010 to 714 in 2023 is close to an eightfold rise. The recent decline is harder to read. The chapter links it to the overall drop in NeurIPS attendance, which it in turn attributes to the shift away from a purely virtual format — some conference years in this series count both in-person and virtual attendance, so the comparison is not like for like.",
                   zh: "長期曲線很清楚：從 2010 年的 89 人到 2023 年的 714 人，接近八倍。近期的下滑就比較難讀。本章把它連結到 NeurIPS 整體參加人數的下降，而這又被歸因於會議不再是純線上形式 — 這個系列裡有些年度的數字同時包含實體與線上參加者，所以不是完全對等的比較。" } },
      { slug: "wiml-share",
        title:   { en: "4.4% of the conference", zh: "佔整場會議的 4.4%" },
        summary: { en: "As a share of total NeurIPS attendance, the 2023 WiML workshop accounted for 4.4% of attendees.",
                   zh: "以 NeurIPS 總參加人數計，2023 年的 WiML 工作坊佔 4.4%。" },
        tags: ["attendance"],
        overview: { en: "Absolute attendance and share of the conference are two different stories, and the chapter charts both from 2010 onward. The share is the closest thing here to a measure of how much room this community occupies inside the field’s largest annual meeting — and it is a low single-digit number. The same caveat applies as to the headcount: some conference years in the series count in-person and virtual attendance together.",
                   zh: "絕對人數與佔會議的比例是兩件不同的事，本章從 2010 年起兩個都畫。比例是這裡最接近「這個社群在該領域最大年度會議裡佔多少空間」的量測 — 而它是個位數的低檔數字。人數那邊的但書在這裡一樣成立：這個系列有些年度把實體與線上參加者合併計算。" } },
      { slug: "wiml-geography",
        title:   { en: "More than half live in North America", zh: "超過一半住在北美" },
        summary: { en: "Of participants who answered, 56.4% live in North America, 21.8% in Europe, 11.4% in Asia, and 8.9% in Africa.",
                   zh: "在填答的參加者中，56.4% 住在北美、21.8% 在歐洲、11.4% 在亞洲、8.9% 在非洲。" },
        tags: ["geography"],
        overview: { en: "The mix tilted sharply towards North America between the two survey years: 56.4% against 41.5% a year earlier, while Europe fell from 34.2% to 21.8% and Asia from 17.1% to 11.4%. Africa moved the other way, from 3.4% to 8.9%. Australia and Oceania (1.1%) and South America (0.4%) round out the list. Given the workshop is attached to a conference held in North America, a return to in-person attendance plausibly explains much of the swing.",
                   zh: "兩個調查年度之間，組成明顯往北美傾斜：56.4% 對上前一年的 41.5%，同時歐洲從 34.2% 掉到 21.8%、亞洲從 17.1% 掉到 11.4%。非洲則往反方向走，從 3.4% 升到 8.9%。澳洲與大洋洲(1.1%)與南美洲(0.4%)墊底。考慮到這個工作坊附屬於一場在北美舉行的會議，回歸實體參加大概能解釋這個擺盪的大部分。" } },
      { slug: "wiml-gender",
        title:   { en: "84.2% female-identifying", zh: "84.2% 認同為女性" },
        summary: { en: "Among participants who answered the survey, 84.2% identified as female, 10.0% as male, and 3.2% as nonbinary.",
                   zh: "在填答調查的參加者中，84.2% 認同為女性、10.0% 為男性、3.2% 為非二元。" },
        tags: ["gender"],
        overview: { en: "The figures come from a survey completed only by participants who agreed to have their information aggregated, so they describe respondents rather than the room. Year-over-year comparison is unreliable for a specific reason: in the other survey year on the chart, 36.3% of respondents preferred not to state a gender, against 1.4% here. A large shift in who answers the question can look exactly like a shift in who is present.",
                   zh: "這些數字來自一份只有同意讓資料被彙整的參加者才填的調查，所以它描述的是填答者，不是整個現場。跨年度比較不可靠，原因很具體：圖表上的另一個調查年度有 36.3% 的填答者選擇不表明性別，而這一年是 1.4%。願意回答這個問題的人大幅改變，看起來會跟現場的人大幅改變一模一樣。" } }
    ]
  },

  /* --------------------------------------------------- 8.3 K–12 (AP CS) */
  {
    type: "prose",
    id: "k12",
    nav:      { en: "8.3 AP CS", zh: "8.3 中小學" },
    title:    { en: "8.3 — The girls’ share of AP CS exams nearly doubled. It is still under a third.",
                zh: "8.3 — AP 資訊科學考卷中女生的比例幾乎翻倍。但仍不到三分之一。" },
    subtitle: { en: "Code.org’s data on AP computer science is the chapter’s view of the school-age end of the pipeline. Both exams — Computer Science A and Computer Science Principles — are counted together.",
                zh: "Code.org 關於 AP 資訊科學的資料，是本章看向學齡端管道的視角。兩種考試 — Computer Science A 與 Computer Science Principles — 是合併計算的。" },
    blocks: [
      { type: "p",
        text: { en: "In 2022, male students took 68.9% of AP CS exams, female students 30.5%, and students identifying as neither 0.7%. The female share was 16.8% in 2007, so it has nearly doubled in fifteen years — the fastest-moving gender number anywhere in this chapter, and still the minority position by better than two to one.",
                zh: "2022 年，男學生應考 68.9% 的 AP 資訊科學考卷，女學生 30.5%，認同為兩者皆非的學生 0.7%。女性比例在 2007 年是 16.8%，十五年來幾乎翻倍 — 這是本章裡跑得最快的性別數字，而它仍然以超過二比一的差距處在少數。" } },
      { type: "h3",
        text: { en: "The state map does not run the way you would guess", zh: "各州地圖不照你想的那樣跑" } },
      { type: "p",
        text: { en: "The states with the highest female share of AP CS test-takers in 2022 were Mississippi (41%), Alabama (37%), and Washington, D.C. (37%). California, Texas, and Washington — the states usually named for CS and AI activity — each land at about 31%, respectable but well behind. At the other end sit Kansas (16%), North Dakota (18%), and Iowa (18%). Whatever produces a balanced exam cohort, it is not proximity to the industry.",
                zh: "2022 年 AP 資訊科學考生中女性比例最高的州是密西西比(41%)、阿拉巴馬(37%)與華盛頓特區(37%)。加州、德州與華盛頓州 — 通常被拿來當資訊科學與 AI 重鎮的那幾個 — 各自落在約 31%，不差，但差得遠。另一端則是堪薩斯(16%)、北達科他(18%)與愛荷華(18%)。不管是什麼造就了一個性別平衡的考生群體，那都不是離產業近。" } },
      { type: "h3",
        text: { en: "Ethnicity is moving here too", zh: "族裔在這裡也在動" } },
      { type: "p",
        text: { en: "White students remain the largest group of AP CS test-takers at 38.2%, followed by Asian students at 27.8% and Hispanic/Latino/Latina students at 17.6%; Black or African American students were 6.7% and students of two or more races 4.6%. Native American/Alaskan students were 0.6% and Native Hawaiian/Pacific Islander students 0.15%. In exam counts that is 77,070 white, 56,098 Asian, 35,528 Hispanic/Latino/Latina, 13,577 Black/African American, 9,293 two or more races, 1,285 Native American/Alaskan, and 295 Native Hawaiian/Pacific Islander. Participation from Asian, Hispanic/Latino/Latina, and Black/African American students has risen year over year — the same direction as the postsecondary numbers, which is the chapter’s third headline finding.",
                zh: "白人學生仍是 AP 資訊科學考生中最大的一群，佔 38.2%，其次是亞裔 27.8% 與西語裔 17.6%；黑人或非裔美國人學生 6.7%，兩種以上族裔的學生 4.6%。美洲原住民與阿拉斯加原住民學生 0.6%，夏威夷原住民與太平洋島民學生 0.15%。換成考卷數是：白人 77,070 份、亞裔 56,098 份、西語裔 35,528 份、黑人或非裔美國人 13,577 份、兩種以上族裔 9,293 份、美洲原住民與阿拉斯加原住民 1,285 份、夏威夷原住民與太平洋島民 295 份。亞裔、西語裔與黑人或非裔美國人學生的參與逐年上升 — 方向和高等教育的數字一致，這也是本章第三個頭條發現。" } }
    ]
  },

  /* ------------------------------------------------- AP ETHNICITY BARS */
  {
    type: "bars",
    id: "ap-ethnicity",
    nav:      { en: "AP by ethnicity", zh: "AP 族裔" },
    title:    { en: "AP computer science exams taken by race and ethnicity, 2022",
                zh: "AP 資訊科學考卷的種族與族裔組成，2022" },
    subtitle: { en: "Per cent of total responding students. Two groups take two-thirds of the exams; the next three together take under 30%.",
                zh: "單位：% 佔填答學生總數。兩個群體拿走三分之二的考卷；接下來三個加起來不到 30%。" },
    series: [
      { label: { en: "White", zh: "白人" },       value: 38.23 },
      { label: { en: "Asian", zh: "亞裔" },       value: 27.82 },
      { label: { en: "Hispanic", zh: "西語裔" },  value: 17.62 },
      { label: { en: "Black", zh: "黑人" },       value: 6.73 },
      { label: { en: "Two or more", zh: "多族裔" }, value: 4.61 }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In four lines", zh: "四句話" },
    title:    { en: "The chapter in four lines", zh: "用四句話看這一章" },
    subtitle: { en: "The three chapter highlights, and the admission the overview closes on.",
                zh: "三個章節重點，加上概述最後承認的那件事。" },
    quotes: [
      { text: { en: "US and Canadian bachelor’s, master’s, and PhD CS students continue to grow more ethnically diverse. Since 2011 the proportion of Asian CS bachelor’s graduates has increased by 19.8 percentage points, and the proportion of Hispanic CS bachelor’s graduates by 5.2 percentage points.",
                zh: "美加的資訊科學學士、碩士與博士學生持續變得更具族裔多元性。自 2011 年以來，亞裔資訊科學學士畢業生的比例增加 19.8 個百分點，西語裔則增加 5.2 個百分點。" },
        by: "Chapter 8 · Diversity" },
      { text: { en: "Every surveyed European country reported more male than female graduates in bachelor’s, master’s, and PhD programs for informatics, CS, CE, and IT. While the gender gaps have narrowed in most countries over the last decade, the rate of this narrowing has been slow.",
                zh: "每一個受調查的歐洲國家，在資訊學、資訊科學、電腦工程與資訊科技的學士、碩士與博士學程中，男性畢業生都多於女性。雖然多數國家的性別差距在過去十年有縮小，但縮小的速度很慢。" },
        by: "Chapter 8 · Diversity" },
      { text: { en: "The proportion of AP CS exams taken by female students rose from 16.8% in 2007 to 30.5% in 2022.",
                zh: "由女學生應考的 AP 資訊科學考卷比例，從 2007 年的 16.8% 上升到 2022 年的 30.5%。" },
        by: "Chapter 8 · Diversity" },
      { text: { en: "Demographic data regarding AI trends, particularly in areas such as sexual orientation, remains scarce. The AI Index urges other stakeholders in the AI domain to intensify their endeavors to track diversity trends associated with AI.",
                zh: "關於 AI 趨勢的人口統計資料，尤其在性傾向這類面向上，仍然稀少。AI 指數呼籲 AI 領域的其他利害關係人加大力度，追蹤與 AI 相關的多元性趨勢。" },
        by: "Chapter 8 · Diversity" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 8 in full", zh: "閱讀第 8 章原文" },
    text:  { en: "Chapter 8 (sections 8.1–8.3) with every figure, footnote, and citation is free from Stanford HAI. Or head back to the report highlights and nine-chapter overview.",
             zh: "第 8 章(8.1–8.3 各節)連同所有圖表、註腳與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與九大章節總覽。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

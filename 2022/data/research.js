/* =========================================================================
   Research and Development — deep dive · research.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2022, Chapter 1
   https://hai.stanford.edu/ai-index/2022-ai-index-report

   The fifth edition of the AI Index; the year under the microscope is 2021.
   Every figure on this page comes from Chapter 1: 1.1 Publications (including
   journal, conference and repository papers, cross-country and cross-sector
   collaboration, and AI patents), 1.2 Conferences, and 1.3 AI Open-Source
   Software Libraries. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "research";

window.SITE_META = {
  title:    { en: "AI Index Report 2022", zh: "AI 指數報告 2022" },
  subtitle: { en: "Research & Development · a chapter deep dive", zh: "研發專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "AI research doubled in a decade — and in 2021 China published the most of it",
                zh: "十年之間 AI 研究翻倍 — 而 2021 年發表最多的是中國" },
    subtitle: { en: "Chapter 1 of the AI Index 2022 maps where AI knowledge came from in 2021: journal articles, conference papers, preprint repositories, patents, conferences and open-source libraries. Two things stand out. Output kept compounding — total AI publications doubled between 2010 and 2021, and patent filings grew far faster than that. And the map of who produces it split in two: China leads on volume, the United States leads on the citations. The numbers:",
                zh: "AI 指數 2022 第 1 章描繪 2021 年 AI 知識的產地：期刊論文、研討會論文、預印本、專利、研討會與開源程式庫。有兩件事特別明顯。產出持續複利成長 — AI 論文總數在 2010 至 2021 年間翻倍，專利申請的成長還遠比這更快。而「誰在產出」這張地圖裂成了兩半：中國贏在數量，美國贏在引用。先看數字：" },
    stats: [
      { label: { en: "AI publications worldwide in 2021 (162,444 in 2010)", zh: "2021 年全球 AI 論文總數(2010 年為 162,444 篇)" }, value: 334497 },
      { label: { en: "% by which China’s journal, conference and repository papers combined exceeded the US in 2021", zh: "% 2021 年中國期刊、研討會與預印本論文合計超出美國的幅度" }, value: 63.2 },
      { label: { en: "% compound annual growth rate of AI patent filings, 2015–21", zh: "% 2015 至 2021 年 AI 專利申請的年均複合成長率" }, value: 76.9 },
      { label: { en: "US–China co-authored AI publications in 2021, five times the 2010 level", zh: "2021 年美中共同發表的 AI 論文篇數(為 2010 年的五倍)" }, value: 9660 },
      { label: { en: "attendees across 16 tracked AI conferences in 2021, level with 2020", zh: "2021 年 16 場受追蹤 AI 研討會的參與人數(與 2020 年持平)" }, value: 88760 },
      { label: { en: "cumulative GitHub stars for TensorFlow in 2021, about three times OpenCV", zh: "2021 年 TensorFlow 累計的 GitHub 星數(約為 OpenCV 的三倍)" }, value: 160700 }
    ]
  },

  /* ------------------------------------------------------ 1.1 PUBLICATIONS */
  {
    type: "prose",
    id: "publications",
    nav:      { en: "1.1 Publications", zh: "1.1 論文" },
    title:    { en: "1.1 — The journal quietly became AI’s main publishing venue",
                zh: "1.1 — 期刊悄悄成了 AI 最主要的發表場域" },
    subtitle: { en: "Total AI publications doubled from 162,444 in 2010 to 334,497 in 2021. But the mix shifted underneath that growth: journal articles took 51.5% of everything published in 2021, conference papers 21.5% and preprint repositories 17.0% — and conference papers have been falling since 2018.",
                zh: "AI 論文總數從 2010 年的 162,444 篇翻倍到 2021 年的 334,497 篇。但這波成長底下的組成變了：2021 年期刊論文佔全部發表的 51.5%，研討會論文佔 21.5%，預印本佔 17.0% — 而研討會論文自 2018 年起就一直在減少。" },
    blocks: [
      { type: "p",
        text: { en: "Over the past 12 years journal publications grew about 2.5 times and repository publications about 30 times, while conference papers peaked in 2019 and finished 2021 roughly 19.4% below that peak. Books, book chapters, theses and unknown document types made up the remaining 10.1%. The share statistics tell the same story from the other side: AI reached 2.5% of all journal publications in 2021 (1.5% in 2010), 17.8% of all conference publications, and 15.3% of everything posted to preprint repositories.",
                zh: "過去 12 年間，期刊論文成長約 2.5 倍、預印本成長約 30 倍；研討會論文則在 2019 年見頂，2021 年比高峰低了約 19.4%。書籍、書籍章節、學位論文與無法分類的文件合計佔剩下的 10.1%。從佔比來看是同一個故事的另一面：2021 年 AI 論文佔所有期刊論文的 2.5%(2010 年為 1.5%)、佔所有研討會論文的 17.8%，並佔所有預印本的 15.3%。" } },
      { type: "h3",
        text: { en: "What the field is actually working on", zh: "這個領域實際在做什麼" } },
      { type: "ul",
        items: {
          en: ["Pattern recognition was the single largest field of study in 2021 with 51,690 publications, followed by machine learning with 39,930. Both have more than doubled since 2015.",
               "Computer vision (24,800), algorithms (18,300), data mining (15,270) and natural language processing (13,430) all grew more slowly, despite being the areas most visibly reshaped by deep learning.",
               "Human–computer interaction (9,700), control theory (8,450) and linguistics (5,780) trail the pack.",
               "The counts exclude a large residual category of other AI work, so they describe the shape of the field rather than its full size."],
          zh: ["2021 年最大的單一研究領域是模式識別，共 51,690 篇，其次是機器學習的 39,930 篇。兩者自 2015 年以來都成長超過一倍。",
               "電腦視覺(24,800 篇)、演算法(18,300 篇)、資料探勘(15,270 篇)與自然語言處理(13,430 篇)的成長幅度都比較小，儘管它們才是被深度學習改造得最明顯的領域。",
               "人機互動(9,700 篇)、控制理論(8,450 篇)與語言學(5,780 篇)則落在後段。",
               "這份統計不含「其他 AI」這個很大的殘餘類別，因此它描述的是這個領域的形狀，而不是它的完整規模。"]
        } },
      { type: "h3",
        text: { en: "Universities still do most of the work", zh: "做事的主要還是大學" } },
      { type: "p",
        text: { en: "Worldwide, 59.6% of AI publications in 2021 came from the education sector, against 11.3% from nonprofits, 5.2% from companies and 3.2% from government; a further 20.8% could not be classified at all. Company participation is highest in the United States at 9.8%, then the European Union plus the United Kingdom at 5.7%, and lowest in China at 3.9%. China is also the only area where the education share is still rising — it reached 60.2% in 2021, above the United States at 57.6% and the EU plus UK at 54.8%.",
                zh: "以全球來看，2021 年有 59.6% 的 AI 論文出自教育部門，非營利組織佔 11.3%、企業佔 5.2%、政府佔 3.2%；另有 20.8% 完全無法歸類。企業參與度最高的是美國，佔 9.8%，其次是歐盟加英國的 5.7%，中國最低，只有 3.9%。中國也是唯一教育部門佔比還在上升的地區 — 2021 年達到 60.2%，高於美國的 57.6% 與歐盟加英國的 54.8%。" } }
    ]
  },

  /* ------------------------------------------------- PUBLICATIONS BY TYPE */
  {
    type: "bars",
    id: "pub-types",
    nav:      { en: "By type", zh: "論文類型" },
    title:    { en: "Half of all AI publishing now happens in journals",
                zh: "如今有一半的 AI 發表發生在期刊上" },
    subtitle: { en: "Number of AI publications by document type in 2021 (thousands). Journal articles have grown about 2.5 times over 12 years and repositories about 30 times; conference papers have been declining since 2018.",
                zh: "2021 年 AI 論文依文件類型的數量(千篇)。12 年來期刊論文成長約 2.5 倍、預印本約 30 倍；研討會論文則自 2018 年起持續下滑。" },
    series: [
      { label: { en: "Journal", zh: "期刊" },           value: 172.11 },
      { label: { en: "Conference", zh: "研討會" },       value: 71.92 },
      { label: { en: "Repository", zh: "預印本" },       value: 56.73 },
      { label: { en: "Book chapter", zh: "書籍章節" },    value: 20.60 },
      { label: { en: "Unknown", zh: "未分類" },          value: 10.84 }
    ]
  },

  /* ------------------------------------------------ VOLUME VERSUS CITATION */
  {
    type: "prose",
    id: "geography",
    nav:      { en: "Who leads", zh: "誰在領先" },
    title:    { en: "China wins on volume, the United States wins on citations",
                zh: "中國贏在數量，美國贏在引用" },
    subtitle: { en: "In 2021 China led the world in journal, conference and repository publications combined — 63.2% ahead of the United States. But on the papers people actually cite, the ranking flips in two of those three venues.",
                zh: "2021 年，中國在期刊、研討會與預印本論文合計數量上領先全球，比美國高出 63.2%。但如果看的是真正被人引用的論文，三個場域裡有兩個排名整個翻了過來。" },
    blocks: [
      { type: "h3",
        text: { en: "Journals: China’s strongest suit", zh: "期刊：中國最強的一塊" } },
      { type: "ul",
        items: {
          en: ["China produced 31.0% of the world’s AI journal publications in 2021, ahead of the European Union plus the United Kingdom at 19.1% and the United States at 13.7%.",
               "China leads journal citations too, with 27.8%, ahead of the EU plus UK at 21.1% and the United States at 17.5%. Those three areas together account for more than 66% of all AI journal citations in the world.",
               "By region, East Asia and the Pacific took 42.9% of journal publications, Europe and Central Asia 22.7% and North America 15.6%. South Asia and the Middle East and North Africa grew fastest, around 12 and 7 times respectively over the 12 years."],
          zh: ["2021 年中國產出全球 31.0% 的 AI 期刊論文，高於歐盟加英國的 19.1% 與美國的 13.7%。",
               "中國在期刊引用上同樣領先，拿下 27.8%，高於歐盟加英國的 21.1% 與美國的 17.5%。這三個地區合計佔了全球 AI 期刊引用的 66% 以上。",
               "以區域來看，東亞與太平洋地區拿下 42.9% 的期刊論文，歐洲與中亞佔 22.7%，北美佔 15.6%。成長最快的是南亞與中東北非，12 年間分別成長約 12 倍與 7 倍。"]
        } },
      { type: "h3",
        text: { en: "Conferences and repositories: the ranking inverts", zh: "研討會與預印本：排名倒過來" } },
      { type: "ul",
        items: {
          en: ["China produced 27.6% of AI conference publications in 2021, ahead of the EU plus UK at 19.0% and the United States at 16.9% — but the United States took 29.5% of conference citations, against 23.3% for the EU plus UK and 15.3% for China.",
               "On preprint repositories the United States leads outright: 32.5% of publications and 38.6% of citations, against 23.9% and 20.1% for the EU plus UK, and 16.6% and 16.4% for China.",
               "By region, North America still holds 35.9% of repository publications, ahead of Europe and Central Asia at 27.3% and East Asia and the Pacific at 26.4% — the one publication type where North America has kept the lead since 2014.",
               "South Asia is the fastest-moving region at conferences: its share of AI conference publications rose from 4.0% in 2010 to 10.4% in 2021."],
          zh: ["2021 年中國產出 27.6% 的 AI 研討會論文，高於歐盟加英國的 19.0% 與美國的 16.9% — 但研討會引用有 29.5% 屬於美國，歐盟加英國佔 23.3%，中國只有 15.3%。",
               "預印本則是美國全面領先：論文佔 32.5%、引用佔 38.6%，歐盟加英國分別為 23.9% 與 20.1%，中國分別為 16.6% 與 16.4%。",
               "以區域來看，北美仍握有 35.9% 的預印本論文，高於歐洲與中亞的 27.3% 與東亞太平洋的 26.4% — 這是北美自 2014 年以來唯一還保住領先的論文類型。",
               "研討會上動得最快的區域是南亞：它在 AI 研討會論文的佔比從 2010 年的 4.0% 上升到 2021 年的 10.4%。"]
        } }
    ]
  },

  /* ------------------------------------------------------- COLLABORATION */
  {
    type: "cards",
    id: "collaboration",
    nav:      { en: "Collaboration", zh: "跨界合作" },
    title:    { en: "Geopolitics rose, and so did US–China co-authorship",
                zh: "地緣政治升溫，美中共同掛名的論文也在升溫" },
    subtitle: { en: "CSET counts a cross-country collaboration as a distinct pair of countries across the authors of one publication — four US and four Chinese authors on a single paper count once. From 2010 to 2021 the biggest pairing by a distance was the United States and China, and the biggest cross-sector pairing was not company and university. Tap a card for the detail.",
                zh: "CSET 把跨國合作定義成同一篇論文作者所屬國家的不重複配對 — 一篇論文上有四位美國作者與四位中國作者，只算一次。2010 至 2021 年間，規模遙遙領先的組合是美國與中國；而跨部門合作裡最大的一組，並不是企業與大學。點卡片看細節。" },
    items: [
      { slug: "us-china",
        title:   { en: "The United States and China, five times over", zh: "美國與中國，十年五倍" },
        summary: { en: "9,660 co-authored AI publications in 2021 — five times the 2010 figure, and 2.7 times the next pairing on the list.",
                   zh: "2021 年共同發表 9,660 篇 AI 論文 — 是 2010 年的五倍，也是名單上第二名的 2.7 倍。" },
        tags: ["collaboration", "geopolitics"],
        overview: { en: "Despite rising geopolitical tensions, the United States and China recorded the greatest number of cross-country AI collaborations of any pair between 2010 and 2021, and the count has increased five times since 2010. In 2021 the two countries co-produced 9,660 AI publications, 2.7 times more than the United Kingdom and China, which sits second. Nothing else in the chapter comes close: the entire rest of the top-eight list, taken pair by pair, runs between 1,420 and 3,560 publications a year.",
                   zh: "儘管地緣政治緊張升高，2010 至 2021 年間跨國 AI 合作最多的組合仍是美國與中國，而且數量自 2010 年以來成長了五倍。2021 年兩國共同產出 9,660 篇 AI 論文，是排名第二的英國與中國的 2.7 倍。這一章裡沒有別的組合接近這個量級：前八名裡其餘每一組，每年都落在 1,420 到 3,560 篇之間。" } },
      { slug: "everyone-else",
        title:   { en: "The rest of the world’s pairings", zh: "世界其他地方的組合" },
        summary: { en: "Once the US–China pair is set aside, the United Kingdom sits in the middle of everything: UK–China 3,560 and US–UK 3,340 in 2021.",
                   zh: "把美中那一組拿掉之後，英國就站在所有事情的中間：2021 年英中 3,560 篇、美英 3,340 篇。" },
        tags: ["collaboration"],
        overview: { en: "Excluding the United States and China, the largest 2021 pairings were the United Kingdom and China (3,560 publications), the United States and the United Kingdom (3,340), China and Australia (2,630), the United States and Germany (2,440), the United States and Canada (2,370), the United States and Australia (2,160) and the United States and France (1,420). The chapter notes that the UK’s collaborations with both the United States and China have grown more than three times since 2010.",
                   zh: "把美國與中國排除後，2021 年最大的幾組是英國與中國(3,560 篇)、美國與英國(3,340 篇)、中國與澳洲(2,630 篇)、美國與德國(2,440 篇)、美國與加拿大(2,370 篇)、美國與澳洲(2,160 篇)，以及美國與法國(1,420 篇)。報告指出，英國和美國、中國兩邊的合作自 2010 年以來都成長超過三倍。" } },
      { slug: "edu-nonprofit",
        title:   { en: "Universities and nonprofits, not universities and companies", zh: "大學配非營利，而不是大學配企業" },
        summary: { en: "29,839 education–nonprofit collaborations in 2021 — 2.5 times as many as between education and companies.",
                   zh: "2021 年教育與非營利組織合作 29,839 次，是教育與企業合作的 2.5 倍。" },
        tags: ["collaboration", "sectors"],
        overview: { en: "From 2010 to 2021 the collaboration between educational and nonprofit organizations produced the highest number of AI publications of any sector pairing. In 2021 it reached 29,839, followed by companies and educational institutions (11,576) and governments and educational institutions (8,087) — 2.5 times as many education–nonprofit collaborations as education–company ones. One thing worth knowing before reading too much into that gap: under this classification healthcare organizations, including hospitals and facilities, are counted as nonprofits.",
                   zh: "2010 至 2021 年間，所有部門配對中發表最多 AI 論文的是教育機構與非營利組織。2021 年達到 29,839 次，其次是企業與教育機構(11,576 次)以及政府與教育機構(8,087 次) — 教育與非營利的合作次數是教育與企業的 2.5 倍。不過在過度解讀這道差距之前有件事要知道：在這套分類裡，醫療機構(包含醫院與相關設施)是被算進非營利的。" } },
      { slug: "small-pairings",
        title:   { en: "The pairings that barely happen", zh: "幾乎不發生的組合" },
        summary: { en: "Companies and governments co-produced 660 AI publications in 2021, the smallest pairing the chapter tracks.",
                   zh: "2021 年企業與政府只共同產出 660 篇 AI 論文，是這一章追蹤的組合裡最小的一組。" },
        tags: ["collaboration", "sectors"],
        overview: { en: "Below the three large pairings, cross-sector collaboration thins out fast: governments and nonprofits produced 2,480 AI publications in 2021, companies and nonprofits 1,830, and companies and governments just 660. Every company pairing other than company–education sits at the bottom of the chart, which is a reasonable proxy for how rarely corporate AI research is published jointly with the public and nonprofit sectors.",
                   zh: "在三組大的合作底下，跨部門合作很快就變得稀薄：2021 年政府與非營利組織共同產出 2,480 篇 AI 論文，企業與非營利組織 1,830 篇，企業與政府只有 660 篇。除了企業與教育之外，每一組有企業參與的組合都躺在圖表最下面 — 這大致可以看成一個指標：企業的 AI 研究，很少和公部門或非營利部門一起發表。" } }
    ]
  },

  /* --------------------------------------------------------- AI PATENTS */
  {
    type: "prose",
    id: "patents",
    nav:      { en: "AI patents", zh: "AI 專利" },
    title:    { en: "Filings grew more than 30-fold in six years — and China was granted almost none of them",
                zh: "專利申請六年成長 30 倍以上 — 而中國幾乎一件也沒拿到" },
    subtitle: { en: "141,240 AI patents were filed in 2021, more than 30 times the 2015 figure, a compound annual growth rate of 76.9%. China filed 51.7% of them. China was granted 5.9% of the world’s AI patents.",
                zh: "2021 年共有 141,240 件 AI 專利申請，是 2015 年的 30 倍以上，年均複合成長率 76.9%。其中 51.7% 來自中國。而中國拿到的，是全球 5.9% 的核准專利。" },
    blocks: [
      { type: "h3",
        text: { en: "Filings: East Asia took off in 2014", zh: "申請：東亞在 2014 年起飛" } },
      { type: "ul",
        items: {
          en: ["East Asia and the Pacific accounted for 62.1% of all AI patent applications in 2021, ahead of North America at 17.1% and Europe and Central Asia at 4.2%.",
               "By geographic area, China filed 51.7% of the world’s AI patents in 2021, the United States 16.9% and the European Union plus the United Kingdom 3.9%.",
               "The United States files almost all of North America’s AI patents — and does so at one-third the rate of China."],
          zh: ["2021 年東亞與太平洋地區佔了全部 AI 專利申請的 62.1%，高於北美的 17.1% 與歐洲中亞的 4.2%。",
               "以地理區塊來看，2021 年中國提出全球 51.7% 的 AI 專利申請，美國 16.9%，歐盟加英國 3.9%。",
               "北美的 AI 專利申請幾乎全部來自美國 — 而美國的申請速度只有中國的三分之一。"]
        } },
      { type: "h3",
        text: { en: "Grants: the map reverses", zh: "核准：地圖翻轉" } },
      { type: "ul",
        items: {
          en: ["On granted patents North America leads with 57.0%, ahead of East Asia and the Pacific at 31.1% and Europe and Central Asia at 11.3%. Every other region combined accounts for roughly 1% of the world’s granted AI patents.",
               "By geographic area the United States holds 39.6% of grants, the EU plus UK 7.6% and China 5.9%.",
               "The raw counts make the gap concrete. In 2021 China filed 87,343 AI patent applications and was granted 1,407. The United States filed 19,610 and was granted 9,450; the EU plus UK filed 4,880 and was granted 1,810."],
          zh: ["核准專利上由北美領先，佔 57.0%，高於東亞太平洋的 31.1% 與歐洲中亞的 11.3%。其餘所有區域加起來，大約只佔全球核准 AI 專利的 1%。",
               "以地理區塊來看，美國握有 39.6% 的核准量，歐盟加英國 7.6%，中國 5.9%。",
               "原始數字讓這道落差變得具體。2021 年中國提出 87,343 件 AI 專利申請，獲准 1,407 件；美國提出 19,610 件、獲准 9,450 件；歐盟加英國提出 4,880 件、獲准 1,810 件。"]
        } },
      { type: "p",
        text: { en: "The chapter reports the two series side by side without reconciling them, and it is worth keeping them apart when reading any AI-patent league table. Counted by filings, China holds more than half the world. Counted by grants, it holds less than the European Union plus the United Kingdom. The same underlying dataset supports two opposite headlines.",
                zh: "報告把申請與核准兩條線並排呈現，並沒有把它們湊成一個數字；讀任何 AI 專利排行榜時，也值得把這兩件事分開看。用申請量算，中國掌握了世界的一半以上；用核准量算，中國比歐盟加英國還少。同一份資料可以支撐兩個完全相反的標題。" } }
    ]
  },

  /* ------------------------------------------------- PATENTS FILED VS GRANTED */
  {
    type: "bars",
    id: "patent-gap",
    nav:      { en: "Filed vs granted", zh: "申請與核准" },
    title:    { en: "China files the most AI patents and is granted the fewest",
                zh: "中國申請最多 AI 專利，核准卻最少" },
    subtitle: { en: "AI patent applications and grants in 2021 (thousands), for the three major AI geographic areas. The European Union plus the United Kingdom was granted 1,810 AI patents that year — more than China’s 1,407, on a quarter of China’s application volume.",
                zh: "2021 年三大 AI 地理區塊的 AI 專利申請與核准件數(千件)。歐盟加英國該年獲准 1,810 件，比中國的 1,407 件還多，而申請量只有中國的四分之一。" },
    series: [
      { label: { en: "China filed", zh: "中國申請" },       value: 87.34 },
      { label: { en: "US filed", zh: "美國申請" },          value: 19.61 },
      { label: { en: "US granted", zh: "美國核准" },        value: 9.45 },
      { label: { en: "EU+UK filed", zh: "歐盟英國申請" },    value: 4.88 },
      { label: { en: "China granted", zh: "中國核准" },     value: 1.41 }
    ]
  },

  /* -------------------------------------------------------- 1.2 CONFERENCES */
  {
    type: "bars",
    id: "conf-size",
    nav:      { en: "Conferences", zh: "研討會" },
    title:    { en: "A second virtual year, and 88,760 people still turned up",
                zh: "第二個線上舉辦的年度，仍有 88,760 人參加" },
    subtitle: { en: "Attendance at the largest AI conferences in 2021 (thousands). Total attendance across the 16 conferences the Index tracks was roughly level with 2020. ICML counted session visitors rather than registrations, which is why its figure sits so high.",
                zh: "2021 年規模最大的幾場 AI 研討會的參與人數(千人)。指數追蹤的 16 場研討會加總後，與 2020 年大致持平。ICML 統計的是議程造訪人次而非註冊人數，這也是它的數字特別高的原因。" },
    series: [
      { label: { en: "ICML", zh: "ICML" },       value: 29.54 },
      { label: { en: "NeurIPS", zh: "NeurIPS" }, value: 17.09 },
      { label: { en: "CVPR", zh: "CVPR" },       value: 8.24 },
      { label: { en: "ICLR", zh: "ICLR" },       value: 6.31 },
      { label: { en: "ICCV", zh: "ICCV" },       value: 5.01 }
    ]
  },

  /* ------------------------------------------------------------ ACCORDION */
  {
    type: "accordion",
    id: "questions",
    nav:      { en: "Questions", zh: "問答" },
    title:    { en: "Five things the chapter answers about 2021",
                zh: "這一章對 2021 年回答的五件事" },
    subtitle: { en: "Conferences, the Women in Machine Learning workshop, open-source libraries, and what the publication numbers do and do not prove.",
                zh: "研討會、Women in Machine Learning 工作坊、開源程式庫，以及論文數字證明了什麼、又沒有證明什麼。" },
    qa: [
      { q: { en: "Did a second virtual year change who shows up?", zh: "第二年線上舉辦，改變了誰會出席嗎？" },
        a: { en: "Attendance at top AI conferences in 2021 was relatively consistent with 2020, at more than 88,000 participants across the 16 conferences the Index tracks — more conferences than any previous edition covered. Almost all were virtual; only ICRA and EMNLP ran in a hybrid format. Organizers told the AI Index that measuring exact attendance at a virtual conference is difficult, and that virtual formats allow far higher attendance from researchers around the world. The individual counts come with footnotes: ICML used session visitors as a proxy for attendees, which explains its 29,540; IROS let users watch events for up to three months in 2020; and AAMAS reported on-site users in 2020 but total registrants in 2021. Among the smaller conferences, UAI drew 2,100, IJCAI 1,900, FAccT 1,350, AAMAS 1,080 and ICRA 1,000.",
             zh: "2021 年頂尖 AI 研討會的參與人數與 2020 年大致持平，指數追蹤的 16 場研討會合計超過 88,000 人 — 這也是歷來涵蓋最多場次的一版。幾乎全部改為線上舉行，只有 ICRA 與 EMNLP 採混合形式。主辦單位告訴 AI 指數團隊，線上會議很難精確計算出席人數，而線上形式也讓世界各地的研究者能大量參與。個別數字都帶著註腳：ICML 用議程造訪人次代替出席人數，這就是它 29,540 這個數字的來源；IROS 在 2020 年開放使用者最長三個月內回看；AAMAS 2020 年報的是現場使用者數，2021 年報的則是總報名人數。規模較小的場次裡，UAI 有 2,100 人、IJCAI 1,900 人、FAccT 1,350 人、AAMAS 1,080 人、ICRA 1,000 人。" } },
      { q: { en: "How large is the Women in Machine Learning workshop?", zh: "Women in Machine Learning 工作坊有多大？" },
        a: { en: "The 2021 WiML workshop colocated with NeurIPS drew an estimated 1,486 attendees, counted as the number of unique individuals who accessed the virtual platform at neurips.cc. The figure has risen steadily since the workshop was first held in 2006. It ran as multiple sessions over three days, a change of format from 2020, and was again held virtually because of the pandemic. Among survey respondents who consented to have their information aggregated, 53.4% lived in North America, 19.9% in Europe, 16.2% in Asia and 7.3% in Africa. PhD students made up 49.4%, MSc students 16.5%, research scientists and engineers 14.2%, and undergraduates 10.2%, while university faculty accounted for around 1.2%.",
             zh: "2021 年與 NeurIPS 併同舉辦的 WiML 工作坊，估計有 1,486 人參加，計算方式是登入 neurips.cc 線上平台的不重複人數。自 2006 年首度舉辦以來，這個數字一路穩定成長。2021 年改成三天多場次的形式(和 2020 年不同)，並因疫情再次以線上進行。在同意彙整資料的問卷填答者中，53.4% 住在北美、19.9% 在歐洲、16.2% 在亞洲、7.3% 在非洲。博士生佔 49.4%、碩士生 16.5%、研究科學家或工程師 14.2%、大學部學生 10.2%，而大學教職員只佔約 1.2%。" } },
      { q: { en: "Which open-source AI libraries do developers actually use?", zh: "開發者實際上在用哪些開源 AI 程式庫？" },
        a: { en: "Measured by cumulative GitHub stars in 2021, TensorFlow is still far ahead with around 160,700 — about three times the next library, OpenCV at 58,600, and only a slight increase over its own 2020 figure. Keras (53,200), PyTorch (52,700) and Scikit-learn (48,000) sit close together behind it, then DeepLearning-500-questions (46,700) and TensorFlow-Examples (41,500). Below 40,000 stars the list is not really about libraries at all: faceswap leads with 39,880, followed by 100-Days-Of-ML-Code (33,580), AiLearning (32,270), BVLC/caffe (32,140), Real-Time-Voice-Cloning (32,020), deeplearningbook-chinese (32,000), Deep Learning Papers Reading Roadmap (31,280) and DeepFaceLab (30,260) — mostly tutorials, reading lists and face-manipulation projects.",
             zh: "以 2021 年累計 GitHub 星數來看，TensorFlow 仍遙遙領先，約有 160,700 顆 — 大約是第二名 OpenCV(58,600 顆)的三倍，而且比它自己 2020 年的數字只增加一點點。Keras(53,200)、PyTorch(52,700)與 Scikit-learn(48,000)彼此相當接近地跟在後面，再來是 DeepLearning-500-questions(46,700)與 TensorFlow-Examples(41,500)。星數 4 萬以下的榜單其實已經不太是程式庫的榜單：faceswap 以 39,880 顆居首，接著是 100-Days-Of-ML-Code(33,580)、AiLearning(32,270)、BVLC/caffe(32,140)、Real-Time-Voice-Cloning(32,020)、deeplearningbook-chinese(32,000)、Deep Learning Papers Reading Roadmap(31,280)與 DeepFaceLab(30,260) — 多半是教學、書單與換臉專案。" } },
      { q: { en: "Does leading on publications mean leading on AI?", zh: "論文領先等於 AI 領先嗎？" },
        a: { en: "The chapter’s own numbers argue against reading it that way. China led the world in 2021 on journal, conference and repository publications combined, 63.2% ahead of the United States, and led journal citations with 27.8%. But the United States held a dominant lead in conference citations at 29.5% against China’s 15.3%, and in repository citations at 38.6% against 16.4% — and it produced 32.5% of the world’s repository publications against China’s 16.6%. Volume and influence point in different directions depending on which venue you look at, and the chapter reports both rather than resolving them.",
             zh: "這一章自己的數字就不支持這種讀法。2021 年中國在期刊、研討會與預印本論文合計數量上領先全球，比美國高 63.2%，期刊引用也以 27.8% 居首。但美國在研討會引用上以 29.5% 對中國的 15.3% 取得壓倒性領先，預印本引用是 38.6% 對 16.4%，而且預印本論文佔比是 32.5% 對中國的 16.6%。看的場域不同，數量和影響力就指向不同方向；報告選擇把兩邊都呈現出來，而不是替讀者做結論。" } },
      { q: { en: "How reliable are these publication counts?", zh: "這些論文數字有多可靠？" },
        a: { en: "The chapter is explicit about its limits. Publication data comes from CSET’s merged corpus of scholarly literature — Dimensions, Web of Science, Microsoft Academic Graph, China National Knowledge Infrastructure, arXiv and Papers with Code — with a classifier applied to identify English-language publications related to the development or application of AI and ML since 2010. Non-English work is therefore out of scope. The 2021 count may also be lower than the true figure because of lag in how those databases collect publication metadata. And because this edition changed both data provider and classification method, the trend is not directly comparable with earlier AI Index reports. Even inside the data, 20.8% of 2021 publications could not be assigned to a sector at all.",
             zh: "報告對自己的限制講得很清楚。論文資料來自 CSET 整併的學術文獻庫 — 包含 Dimensions、Web of Science、Microsoft Academic Graph、中國知網、arXiv 與 Papers with Code — 再用分類器挑出 2010 年以來與 AI 及機器學習開發或應用相關的英文論文。也就是說，非英文的研究不在範圍內。2021 年的數字也可能低於實際值，因為這些資料庫收集論文中繼資料本身有時間落差。此外，這一版換了資料來源與分類方法，因此趨勢無法直接和過去幾版的 AI 指數報告對照。就算在資料之內，2021 年也有 20.8% 的論文根本無法歸到任何部門。" } }
    ]
  },

  /* --------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In its words", zh: "報告原文" },
    title:    { en: "The chapter in four lines", zh: "用四句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 1 · Research and Development.",
                zh: "第 1 章「研發」的頭條發現。" },
    quotes: [
      { text: { en: "Despite rising geopolitical tensions, the United States and China had the greatest number of cross-country collaborations in AI publications from 2010 to 2021, increasing five times since 2010. The collaboration between the two countries produced 2.7 times more publications than between the United Kingdom and China — the second highest on the list.",
                zh: "儘管地緣政治緊張升高，2010 至 2021 年間跨國 AI 論文合作最多的仍是美國與中國，自 2010 年以來成長五倍。兩國合作產出的論文，是名單上第二名的英國與中國的 2.7 倍。" },
        by: "Chapter 1 · Research and Development" },
      { text: { en: "In 2021, China continued to lead the world in the number of AI journal, conference, and repository publications — 63.2% higher than the United States with all three publication types combined. In the meantime, the United States held a dominant lead among major AI powers in the number of AI conference and repository citations.",
                zh: "2021 年，中國在 AI 期刊、研討會與預印本論文的數量上繼續領先全球 — 三種類型合計比美國高 63.2%。與此同時，美國在 AI 研討會與預印本的引用數上，於主要 AI 強權中取得壓倒性領先。" },
        by: "Chapter 1 · Research and Development" },
      { text: { en: "From 2010 to 2021, the collaboration between educational and nonprofit organizations produced the highest number of AI publications, followed by the collaboration between private companies and educational institutions and between educational and government institutions.",
                zh: "2010 至 2021 年間，發表最多 AI 論文的是教育機構與非營利組織之間的合作，其次是民間企業與教育機構之間、以及教育機構與政府機構之間的合作。" },
        by: "Chapter 1 · Research and Development" },
      { text: { en: "The number of AI patents filed in 2021 is more than 30 times higher than in 2015, showing a compound annual growth rate of 76.9%.",
                zh: "2021 年提出的 AI 專利申請件數是 2015 年的 30 倍以上，年均複合成長率達 76.9%。" },
        by: "Chapter 1 · Research and Development" }
    ]
  },

  /* ------------------------------------------------------------------ CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 1 in full", zh: "閱讀第 1 章原文" },
    text:  { en: "Chapter 1 (sections 1.1–1.3) — publications, patents, conferences and open-source software libraries — with every figure, footnote and citation, is free from Stanford HAI.",
             zh: "第 1 章(1.1 至 1.3 各節) — 論文、專利、研討會與開源軟體程式庫 — 連同所有圖表、註腳與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2022-ai-index-report",
             label: { en: "Open the AI Index 2022 →", zh: "開啟 AI 指數 2022 →" } }
  }
];

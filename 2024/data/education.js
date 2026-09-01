/* =========================================================================
   Education — deep dive · education.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2024, Chapter 6
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 6: 6.1 Postsecondary CS and AI Education
   (United States and Canada via the CRA Taulbee Survey, Europe via
   Informatics Europe, AI-related study programs via Studyportals) and
   6.2 K–12 CS and AI Education (Code.org, plus the Impact Research survey
   on ChatGPT). Degree and faculty data describe the 2022 graduating year;
   study-program and K–12 data describe 2023. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "education";

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Education · a chapter deep dive", zh: "教育專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "More people than ever are studying computer science. Fewer and fewer of them stay to teach it.",
                zh: "念資訊科學的人前所未有地多，留下來教書的卻愈來愈少" },
    subtitle: { en: "Chapter 6 of the AI Index 2024 asks who is learning AI, where, and how that has shifted. Undergraduate computer science in North America hit a record in 2022. Graduate computer science stopped growing. And the flow of talent now runs almost entirely one way — out of the university and into industry. The numbers:",
                zh: "AI 指數 2024 第 6 章問的是：誰在學 AI、在哪裡學、這件事怎麼變化。2022 年北美的大學部資訊科學創下新高，研究所卻停止成長。而人才的流向，現在幾乎是單向的 — 從大學流向產業界。先看數字：" },
    stats: [
      { label: { en: "new CS bachelor’s graduates in the US and Canada in 2022 (2010: 9,008)", zh: "2022 年美國與加拿大的新科資訊科學學士(2010 年為 9,008)" }, value: 35666 },
      { label: { en: "new CS PhD graduates in 2022 — the highest count since 2010", zh: "2022 年新科資訊科學博士 — 2010 年以來最高" }, value: 2105 },
      { label: { en: "% of new AI PhDs who took industry jobs in 2022 (2011: 40.9%)", zh: "% 2022 年進入產業界的新科 AI 博士(2011 年為 40.9%)" }, value: 70.7 },
      { label: { en: "% of new CS, CE, and information faculty hired out of industry in 2022 (2019: 13%)", zh: "% 2022 年從產業界聘來的新任資訊科學、電腦工程與資訊學門教師(2019 年為 13%)" }, value: 7 },
      { label: { en: "English-language AI study programs worldwide in 2023 (2017: 880)", zh: "2023 年全球英語授課的 AI 學程數(2017 年為 880)" }, value: 2520 },
      { label: { en: "% of US K–12 teachers who had used ChatGPT by July 2023 (March: 51%)", zh: "% 截至 2023 年 7 月用過 ChatGPT 的美國 K–12 教師(3 月為 51%)" }, value: 63 }
    ]
  },

  /* ------------------------------------------- 6.1 NORTH AMERICAN DEGREES */
  {
    type: "prose",
    id: "degrees",
    nav:      { en: "6.1 Degrees", zh: "6.1 學位" },
    title:    { en: "6.1 — Undergraduate CS keeps climbing. Graduate CS stopped in 2018.",
                zh: "6.1 — 大學部一路往上，研究所停在 2018 年" },
    subtitle: { en: "The CRA Taulbee Survey targets 297 PhD-granting CS departments in the United States and Canada; 182 responded, a 61% response rate. It shows a bachelor’s pipeline that has more than tripled in a decade and a graduate pipeline that has been flat for five years.",
                zh: "CRA Taulbee 調查涵蓋美國與加拿大 297 個可授予博士學位的資訊科學系所，其中 182 個回覆，回覆率 61%。它呈現的是一條十年內成長超過三倍的學士管道，以及一條停滯了五年的研究所管道。" },
    blocks: [
      { type: "p",
        text: { en: "New CS bachelor’s graduates in North America reached 35,666 in 2022, a 7.9% rise over 2021 and more than three times the 9,008 of 2010. Master’s degrees tell a different story: the total more than doubled over the decade, but it has levelled out since 2018 and slipped 2.5% last year to 14,696. PhDs moved for the first time in a decade — 2,105 new CS doctorates in 2022, the highest count since 2010, after eleven years hovering between roughly 1,770 and 2,000.",
                zh: "2022 年北美新科資訊科學學士達到 35,666 人，比 2021 年成長 7.9%，是 2010 年 9,008 人的三倍以上。碩士的故事不一樣：十年間總數翻了一倍有餘，但從 2018 年起就持平，去年還下滑 2.5% 到 14,696 人。博士則出現十年來的第一次移動 — 2022 年有 2,105 位新科資訊科學博士，是 2010 年以來最高，在此之前的十一年都在約 1,770 到 2,000 人之間徘徊。" } },
      { type: "h3",
        text: { en: "The international share fell at every level", zh: "國際學生比例在每一個層級都下滑" } },
      { type: "ul",
        items: {
          en: ["Bachelor’s: the international share fell from 16.3% in 2021 to 15.2% in 2022 — the first decline in almost eight years. The chapter attributes it partly to study-visa difficulties from the early Trump administration only now showing up in the data, and partly to pandemic travel restrictions.",
               "Master’s: the sharpest move in the chapter. The international share dropped 14.8 percentage points in a single year, to 50.40%. International and domestic CS master’s graduates are now split roughly evenly.",
               "PhD: down from 68.6% in 2021 to 65.9% in 2022, a slight dip against a decade in which the international share had been rising.",
               "This matters because the flat master’s line and the falling international line are the same line. The chapter reads the graduate plateau as a direct reflection of the decline in international master’s students."],
          zh: ["學士：國際學生比例從 2021 年的 16.3% 降到 2022 年的 15.2% — 這是近八年來第一次下滑。本章把原因部分歸給川普政府初期的留學簽證困難、現在才反映在資料上，部分歸給疫情期間的旅行限制。",
               "碩士：整章幅度最大的變化。國際學生比例一年內掉了 14.8 個百分點，來到 50.40%。國際生與本地生的資訊科學碩士畢業人數，現在大致各半。",
               "博士：從 2021 年的 68.6% 降到 2022 年的 65.9%，在國際生比例持續攀升的十年裡出現小幅回落。",
               "這件事之所以重要，是因為碩士的持平曲線和國際生的下滑曲線其實是同一條。本章把研究所的停滯直接解讀為國際碩士生減少的結果。"]
        } },
      { type: "h3",
        text: { en: "Where the new AI PhDs went", zh: "新科 AI 博士去了哪裡" } },
      { type: "p",
        text: { en: "In 2011 industry (40.9%) and academia (41.6%) hired new AI doctorates at almost exactly the same rate. By 2022 industry took 70.7% and academia 20.0%. The industry share rose 5.3 percentage points over the past year alone, which the chapter describes as an intensifying brain drain from universities into industry. Government has stayed low and steady at around 0.7% for five years. The three shares do not add to 100 because new AI PhDs who become self-employed, unemployed, or report an “other” status are excluded from the chart.",
                zh: "2011 年，產業界(40.9%)與學術界(41.6%)吸收新科 AI 博士的比例幾乎一模一樣。到了 2022 年，產業界拿走 70.7%，學術界只剩 20.0%。光是過去一年，產業界的比例就上升 5.3 個百分點，本章形容這是大學對產業界持續加劇的人才流失。政府部門則五年來都維持在 0.7% 上下的低檔。這三個比例加起來不到 100%，因為自僱、待業或回報「其他」狀態的新科 AI 博士沒有被計入圖中。" } }
    ]
  },

  /* ------------------------------------------------- AI PHD DESTINATIONS */
  {
    type: "bars",
    id: "phd-jobs",
    nav:      { en: "AI PhD jobs", zh: "博士出路" },
    title:    { en: "Where new AI PhDs went in 2022",
                zh: "2022 年新科 AI 博士的去向" },
    subtitle: { en: "Share of new AI PhD graduates in the United States and Canada, by sector. Eleven years earlier the first two bars were within a single point of each other, at 40.9% and 41.6%.",
                zh: "美國與加拿大新科 AI 博士畢業生的部門分布。十一年前，前兩根長條的差距不到一個百分點 — 40.9% 對 41.6%。" },
    series: [
      { label: { en: "Industry", zh: "產業界" },   value: 70.71 },
      { label: { en: "Academia", zh: "學術界" },   value: 19.95 },
      { label: { en: "Government", zh: "政府" },   value: 0.76 }
    ]
  },

  /* --------------------------------------------------------- 6.1 FACULTY */
  {
    type: "prose",
    id: "faculty",
    nav:      { en: "Faculty", zh: "師資" },
    title:    { en: "Departments are hiring at a decade high — mostly from each other",
                zh: "系所的聘任創十年新高 — 但多半是彼此挖角" },
    subtitle: { en: "North American CS, CE, and information departments held 8,738 faculty in 2022, up 7.2% in a year and 42.4% since 2011. They made 915 new hires, the most in a decade. Almost none of them came from industry.",
                zh: "2022 年北美資訊科學、電腦工程與資訊學門系所共有 8,738 位教師，一年成長 7.2%，比 2011 年增加 42.4%。他們聘了 915 位新教師，是十年來最多的一次。而其中幾乎沒有人是從產業界來的。" },
    blocks: [
      { type: "p",
        text: { en: "In the United States alone there were 7,084 CS faculty members in 2022, 65.7% of them on the tenure track. That total is 4.4% higher than 2021 and 45.0% higher than 2011. Across the United States and Canada, 915 new faculty were hired in CS, CE, and information disciplines last year, a decade high, and 455 of those positions were tenure track.",
                zh: "光是美國，2022 年就有 7,084 位資訊科學教師，其中 65.7% 在終身職軌上。這個總數比 2021 年高 4.4%，比 2011 年高 45.0%。整個美國與加拿大去年在資訊科學、電腦工程與資訊學門聘了 915 位新教師，是十年新高，其中 455 個職位屬於終身職軌。" } },
      { type: "h3",
        text: { en: "Churn, not inflow", zh: "是流動，不是流入" } },
      { type: "ul",
        items: {
          en: ["43% of 2022’s new faculty appointments came from other academic positions. Because those people vacated posts elsewhere, the vacancy simply moves — the chapter calls it churn within the academic workforce.",
               "The share arriving from industry fell to 7%, down from 11% in 2021 and 13% in 2019. The traffic between industry and academia has become close to one-directional.",
               "Departures rose sharply, to 405 in 2022 from 303 in 2021. Of those losses, 38.5% left for another academic position and 16.3% for a nonacademic role.",
               "International hires among new tenure-track faculty jumped to 19.3% from 13.2% the previous year — the second-highest share of the past decade, behind only 2013."],
          zh: ["2022 年有 43% 的新任教師是從其他學術職位轉來的。因為這些人騰出了別處的職缺，空缺只是換了個地方 — 本章稱之為學術人力內部的流動。",
               "從產業界來的比例降到 7%，前一年是 11%，2019 年是 13%。產業界與學術界之間的人流，已經接近單向。",
               "離職人數大幅上升，從 2021 年的 303 人增加到 2022 年的 405 人。其中 38.5% 是轉往其他學術職位，16.3% 轉往非學術工作。",
               "新聘終身職軌教師中的國際人士比例，從前一年的 13.2% 跳到 19.3% — 是過去十年第二高，僅次於 2013 年。"]
        } },
      { type: "h3",
        text: { en: "Failed searches look different than they used to", zh: "招不到人的原因，跟以前不一樣了" } },
      { type: "p",
        text: { en: "In 2011, 37% of failed faculty searches ended with no offer being made and 34% with the offer declined. In 2022 only 15% ended with no offer, while 55% involved offers that were turned down. Departments are finding candidates they want and losing them. Pay is part of the backdrop: the median nine-month salary for a full professor in the United States reached 181,610 dollars in 2022, 3.2% above 2021 — below that year’s 7% inflation rate — and 16.4% above 2015, against a 19% rise in prices over the same period.",
                zh: "2011 年，招不到人的教師職缺有 37% 是根本沒發出聘書、34% 是聘書被拒絕。到了 2022 年，只有 15% 是沒發聘書，卻有 55% 是聘書被回絕。系所找得到想要的人，然後留不住。薪資是背景之一：2022 年美國正教授的九個月薪資中位數是 181,610 美元，比 2021 年高 3.2% — 低於當年 7% 的通膨率 — 比 2015 年高 16.4%，而同期物價上漲了 19%。" } }
    ]
  },

  /* ---------------------------------------------------------- 6.1 EUROPE */
  {
    type: "prose",
    id: "europe",
    nav:      { en: "6.1 Europe", zh: "6.1 歐洲" },
    title:    { en: "6.1 — Britain and Germany produce the most graduates. The Nordics produce the most per person.",
                zh: "6.1 — 英國與德國產出最多畢業生，北歐產出最多人均" },
    subtitle: { en: "Informatics Europe collects graduate counts from national statistical offices across informatics, CS, CE, computing, and IT. Rank the countries by headcount and you get one league table; rank them per 100,000 inhabitants and you get a different one.",
                zh: "Informatics Europe 從各國統計機構收集資訊學、資訊科學、電腦工程、計算與資訊科技的畢業生數。用總人數排名是一張榜單，用每 10 萬人口排名，又是另一張。" },
    blocks: [
      { type: "p",
        text: { en: "At bachelor’s level in 2022, the United Kingdom led with roughly 25,040 new graduates, followed by Germany (19,920) and Turkey (13,826), then Poland (9,241) and Italy (8,508). Per 100,000 inhabitants the ordering inverts entirely: Finland leads at 53.38, then Norway (42.63), the Netherlands (38.61), Ireland (38.41), and the United Kingdom (37.36). Growth over the decade was widespread but not universal — Norway added 153%, Turkey 118%, and Switzerland 117%, while Poland, Spain, and the Czech Republic all produced fewer bachelor’s graduates than ten years earlier.",
                zh: "2022 年的學士層級，英國以約 25,040 位新畢業生領先，其次是德國(19,920)與土耳其(13,826)，再來是波蘭(9,241)與義大利(8,508)。換成每 10 萬人口，排序完全翻轉：芬蘭以 53.38 居首，接著是挪威(42.63)、荷蘭(38.61)、愛爾蘭(38.41)與英國(37.36)。十年間的成長很普遍但並非全面 — 挪威增加 153%、土耳其 118%、瑞士 117%，而波蘭、西班牙與捷克的學士畢業生都比十年前少。" } },
      { type: "ul",
        items: {
          en: ["Master’s: the United Kingdom again leads with roughly 19,965 graduates, then Germany (11,092), Poland (4,271), and Italy (3,883). Over the decade Germany grew fastest (+259%), then Turkey (+197%) and Spain (+194%).",
               "Master’s per capita: Ireland tops the table at 31.19 per 100,000 inhabitants, ahead of the United Kingdom (29.79), Estonia (27.38), and Finland (26.20).",
               "PhD: the United Kingdom (1,060) and Germany (910) produced the most, followed by Italy (581) and Spain (479). Turkey saw the sharpest decade growth at +173%.",
               "PhD per capita: Finland leads with 2.05 doctorates per 100,000 inhabitants, then Estonia (1.90) and the United Kingdom (1.58). On this measure the past decade went backwards in Germany (-4%), Latvia (-8%), and Ireland (-15%)."],
          zh: ["碩士：英國同樣以約 19,965 位畢業生領先，其次是德國(11,092)、波蘭(4,271)與義大利(3,883)。十年間德國成長最快(+259%)，接著是土耳其(+197%)與西班牙(+194%)。",
               "人均碩士：愛爾蘭以每 10 萬人 31.19 位居冠，領先英國(29.79)、愛沙尼亞(27.38)與芬蘭(26.20)。",
               "博士：英國(1,060)與德國(910)產出最多，其後是義大利(581)與西班牙(479)。土耳其的十年成長幅度最大，達 +173%。",
               "人均博士：芬蘭以每 10 萬人 2.05 位領先，接著是愛沙尼亞(1.90)與英國(1.58)。以這個指標看，過去十年在德國(-4%)、拉脫維亞(-8%)與愛爾蘭(-15%)是倒退的。"]
        } },
      { type: "p",
        text: { en: "One caution the chapter raises about all of this: there is no single term for computer science education across Europe. The same field appears as informatics, CS, CE, computing, IT, ICT, or information science and technology depending on the country, and the European data comes from national statistical offices with broader coverage than the North American survey — so the two datasets should not be compared per capita against each other.",
                zh: "本章對這些數字提出的一個提醒：歐洲並沒有統一的「資訊科學教育」用語。同一個領域在不同國家會叫做資訊學、資訊科學、電腦工程、計算、資訊科技、資通訊或資訊科學與技術；而歐洲的資料來自各國統計機構，涵蓋範圍比北美的問卷調查更廣 — 所以這兩份資料不應該拿來互相做人均比較。" } }
    ]
  },

  /* ------------------------------------------------- AI STUDY PROGRAMS */
  {
    type: "bars",
    id: "ai-programs",
    nav:      { en: "AI programs", zh: "AI 學程" },
    title:    { en: "English-language AI study programs worldwide, 2017–23",
                zh: "全球英語授課的 AI 學程數，2017–23" },
    subtitle: { en: "Studyportals tracks over 200,000 courses at more than 3,750 institutions across 110 countries. The AI count has tripled in six years and rose in every one of them. In 2023 the United Kingdom hosted the most (744), ahead of the United States (667) and Canada (89).",
                zh: "Studyportals 追蹤 110 個國家、超過 3,750 所院校的 20 萬門以上課程。AI 學程數六年間成長為三倍，而且每一年都在增加。2023 年英國擁有最多(744)，其次是美國(667)與加拿大(89)。" },
    series: [
      { label: { en: "2017", zh: "2017" }, value: 880 },
      { label: { en: "2019", zh: "2019" }, value: 1450 },
      { label: { en: "2021", zh: "2021" }, value: 2160 },
      { label: { en: "2022", zh: "2022" }, value: 2320 },
      { label: { en: "2023", zh: "2023" }, value: 2520 }
    ]
  },

  /* ---------------------------------------------------------- 6.2 K–12 US */
  {
    type: "prose",
    id: "k12",
    nav:      { en: "6.2 US K–12", zh: "6.2 美國中小學" },
    title:    { en: "6.2 — Whether an American teenager can take CS still depends on which building they walk into",
                zh: "6.2 — 美國青少年能不能修資訊科學，還是取決於他走進哪一棟校舍" },
    subtitle: { en: "Code.org data on US high schools. The chapter uses it, explicitly, as a representation of K–12 AI education — there is no separate national count of who learns AI before college.",
                zh: "Code.org 關於美國高中的資料。本章明白表示，這是拿來代表 K–12 的 AI 教育 — 在美國，並沒有一份單獨統計「大學以前有多少人學過 AI」的全國數字。" },
    blocks: [
      { type: "p",
        text: { en: "In 2023, 30 American states required that all high schools offer a foundational course in computer science. Tracked over time, the same Code.org data shows how recent that is: in 2017 only a handful of states supported high school CS at all, and by 2023 36 states allocate funding for it, 30 have adopted a state plan, and 29 require a CS course — roughly two-thirds of states on each measure.",
                zh: "2023 年，有 30 個美國州要求所有高中都必須開設一門基礎資訊科學課。從時間軸看同一份 Code.org 資料，會發現這件事有多新：2017 年只有寥寥幾州支持高中資訊科學課程；到 2023 年，有 36 州為它編列經費、30 州通過了州級計畫、29 州把資訊科學課列為必開 — 每一項都大約是三分之二的州。" } },
      { type: "p",
        text: { en: "Requiring it and having it are different things. The share of public high schools actually teaching foundational CS ranges from 99% in Maryland and Arkansas and 96% in Nevada down to 28% in Minnesota, 34% in Montana, and 35% in Louisiana. Maryland has more than three times Minnesota’s share of high schools teaching the subject.",
                zh: "「規定要開」跟「真的開了」是兩回事。實際教授基礎資訊科學的公立高中比例，從馬里蘭與阿肯色的 99%、內華達的 96%，一路降到明尼蘇達的 28%、蒙大拿的 34% 與路易斯安那的 35%。馬里蘭有開課的高中比例，是明尼蘇達的三倍以上。" } },
      { type: "h3",
        text: { en: "AP computer science, tenfold in fifteen years", zh: "AP 資訊科學，十五年成長十倍" } },
      { type: "p",
        text: { en: "Approximately 201,000 AP computer science exams were administered in 2022, an 11.1% increase over 2021 and more than a tenfold increase since 2007, when the figure was 19,390. The count covers both AP CS A and AP CS Principles; the latter was first offered in 2017, and the steepest part of the curve starts right around it. Geography again decides the picture: California (33,262), Texas (20,901), and Florida (16,248) led the states, while Montana (39), South Dakota (40), and North Dakota (100) sat at the bottom. Adjusted for population the ranking changes hands entirely — Maryland (126.5 exams per 100,000 inhabitants), New Jersey (112.7), and Massachusetts (92.7) come out on top.",
                zh: "2022 年約有 201,000 份 AP 資訊科學考卷應考，比 2021 年增加 11.1%，比 2007 年的 19,390 份成長超過十倍。這個數字同時包含 AP CS A 與 AP CS Principles 兩種考試；後者在 2017 年首度開辦，而曲線最陡的那一段就從那前後開始。地理再一次決定了畫面：加州(33,262)、德州(20,901)與佛州(16,248)是應考數最多的州，蒙大拿(39)、南達科他(40)與北達科他(100)則墊底。但只要換成人口調整後的數字，排名就整個換人 — 馬里蘭(每 10 萬人 126.5 份)、紐澤西(112.7)與麻州(92.7)躍居前三。" } }
    ]
  },

  /* ------------------------------------------------------- AP EXAMS CHART */
  {
    type: "bars",
    id: "ap-exams",
    nav:      { en: "AP CS exams", zh: "AP 資訊考試" },
    title:    { en: "AP computer science exams taken, 2007–22",
                zh: "AP 資訊科學考卷應考數，2007–22" },
    subtitle: { en: "In thousands. The count barely moved for the first five years — 19.39 in 2007 and 19.39 again in 2010 — then rose every single year after 2011.",
                zh: "單位：千份。頭五年幾乎沒動 — 2007 年 19.39，2010 年還是 19.39 — 但 2011 年之後，每一年都在成長。" },
    series: [
      { label: { en: "2007", zh: "2007" }, value: 19.39 },
      { label: { en: "2013", zh: "2013" }, value: 37.33 },
      { label: { en: "2017", zh: "2017" }, value: 99.87 },
      { label: { en: "2020", zh: "2020" }, value: 179.19 },
      { label: { en: "2022", zh: "2022" }, value: 201.61 }
    ]
  },

  /* ------------------------------------------------------ HIGHLIGHT CARDS */
  {
    type: "cards",
    id: "highlights",
    nav:      { en: "Access & tools", zh: "落差與工具" },
    title:    { en: "Five things section 6.2 stops to look at",
                zh: "6.2 節特地停下來看的五件事" },
    subtitle: { en: "Two highlight boxes sit inside the K–12 section — one on who can reach a computer science classroom at all, one on what American teachers actually started doing with ChatGPT in 2023.",
                zh: "K–12 這一節裡放了兩個重點方塊 — 一個談誰才走得進資訊科學教室，一個談 2023 年美國教師實際上拿 ChatGPT 做了什麼。" },
    items: [
      { slug: "school-size",
        title:   { en: "Big schools, small schools", zh: "大校與小校" },
        summary: { en: "90% of large US high schools offer foundational computer science. 41% of small ones do.",
                   zh: "90% 的美國大型高中開設基礎資訊科學課。小型高中是 41%。" },
        tags: ["k12", "access"],
        overview: { en: "Code.org’s 2023 data puts large schools — over 1,200 students — 15 percentage points ahead of medium-sized schools of 500 to 1,200 students, which sit at 75%. The gap then widens sharply against small schools under 500 students, where only 41% offer a foundational CS course. School size, not curriculum policy, is the single sharpest divider in the chapter’s US access data.",
                   zh: "Code.org 的 2023 年資料顯示，學生數超過 1,200 人的大型學校，比 500 到 1,200 人的中型學校(75%)高出 15 個百分點。而對上學生數不到 500 人的小型學校，落差急遽拉大 — 只有 41% 開設基礎資訊科學課。在本章的美國接觸率資料裡，學校規模而不是課綱政策，才是最劇烈的分野。" } },
      { slug: "where-you-live",
        title:   { en: "Suburban schools, and everyone else", zh: "郊區學校，與其他所有人" },
        summary: { en: "67.21% of suburban schools offer foundational CS, against 54.73% urban and 54.62% rural.",
                   zh: "67.21% 的郊區學校開設基礎資訊科學課，市區 54.73%、偏鄉 54.62%。" },
        tags: ["k12", "access"],
        overview: { en: "The urban and rural figures are 0.11 percentage points apart and both sit about 12.5 points behind suburban districts. The usual city-versus-country framing does not describe this gap at all — on computer science access, urban schools and rural schools are in the same position, and suburban schools are somewhere else.",
                   zh: "市區與偏鄉的數字只差 0.11 個百分點，兩者都落後郊區學區約 12.5 個百分點。一般「城市對鄉村」的說法完全描述不了這個落差 — 在資訊科學的接觸率上，市區學校與偏鄉學校處境相同，郊區學校則在另一個位置。" } },
      { slug: "ap-map",
        title:   { en: "From 33,262 exams down to 39", zh: "從 33,262 份到 39 份" },
        summary: { en: "California administered 33,262 AP CS exams in 2022. Montana administered 39.",
                   zh: "2022 年加州有 33,262 份 AP 資訊科學考卷。蒙大拿有 39 份。" },
        tags: ["k12", "exams"],
        overview: { en: "California (33,262), Texas (20,901), and Florida (16,248) led the country in AP computer science exams taken in 2022; Montana (39), South Dakota (40), and North Dakota (100) took the fewest. Population reshuffles the whole board: per 100,000 inhabitants, Maryland (126.5), New Jersey (112.7), and Massachusetts (92.7) rank highest, and none of the three raw-count leaders appears at the top.",
                   zh: "2022 年 AP 資訊科學應考數，加州(33,262)、德州(20,901)與佛州(16,248)居全國之冠；蒙大拿(39)、南達科他(40)與北達科他(100)最少。人口一納入計算，整張榜就重排：以每 10 萬人計，馬里蘭(126.5)、紐澤西(112.7)與麻州(92.7)最高，而總量前三名一個都沒進前段。" } },
      { slug: "chatgpt-teachers",
        title:   { en: "Teachers picked it up in months", zh: "教師在幾個月內就上手了" },
        summary: { en: "51% of US K–12 teachers had used ChatGPT by March 2023. By July it was 63%.",
                   zh: "2023 年 3 月，51% 的美國 K–12 教師用過 ChatGPT。到 7 月是 63%。" },
        tags: ["chatgpt", "teachers"],
        overview: { en: "Impact Research, funded by the Walton Family Foundation, surveyed American teachers and educators twice during 2023. Adoption moved 12 percentage points in four months. Among teachers who reported using it, 30% used it for lesson planning, another 30% for generating new creative class ideas, and 27% for building their own background knowledge — all three uses are the teacher preparing, not the student learning.",
                   zh: "由 Walton 家族基金會資助的 Impact Research，在 2023 年對美國教師與教育工作者做了兩次調查。四個月內採用率移動了 12 個百分點。在有使用的教師中，30% 用來備課、另外 30% 用來發想有創意的課堂點子、27% 用來充實自己的背景知識 — 這三種用途都是老師在做準備，而不是學生在學習。" } },
      { slug: "chatgpt-attitudes",
        title:   { en: "And they liked it more than students did", zh: "而且他們比學生更喜歡它" },
        summary: { en: "88% of teachers said ChatGPT has had a positive impact. 79% of students agreed.",
                   zh: "88% 的教師認為 ChatGPT 帶來正面影響。學生是 79%。" },
        tags: ["chatgpt", "opinion"],
        overview: { en: "In the March 2023 survey, 88% of teachers and 79% of students agreed that ChatGPT has had a positive impact, and 76% of teachers against 65% of students agreed it is important to incorporate into the educational process. On both statements the adults in the room were the more enthusiastic group — a reversal of how the debate over plagiarism and misuse was usually framed that year.",
                   zh: "在 2023 年 3 月的調查裡，88% 的教師與 79% 的學生同意 ChatGPT 帶來正面影響；認為應該把它納入教育過程的，教師有 76%、學生 65%。在這兩個問題上，教室裡的大人都是比較熱情的那一方 — 這跟當年關於抄襲與濫用的討論方式，正好相反。" } }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 6 · Education.",
                zh: "第 6 章「教育」的頭條發現。" },
    quotes: [
      { text: { en: "In 2011 roughly equal shares of new AI PhDs took jobs in industry (40.9%) and academia (41.6%). By 2022, 70.7% joined industry against 20.0% entering academia.",
                zh: "2011 年，新科 AI 博士進入產業界(40.9%)與學術界(41.6%)的比例大致相當。到 2022 年，70.7% 進了產業界，只有 20.0% 進入學術界。" },
        by: "Chapter 6 · Education" },
      { text: { en: "The proportion of new faculty transitioning from industry fell to 7% in 2022, from 11% in 2021 and 13% in 2019 — a progressively lower migration of high-level AI talent back into academia.",
                zh: "從產業界轉任的新聘教師比例在 2022 年降到 7%，2021 年是 11%、2019 年是 13% — 高階 AI 人才回流學術界的比例正一路走低。" },
        by: "Chapter 6 · Education" },
      { text: { en: "Proportionally fewer international CS bachelor’s, master’s, and PhD students graduated in 2022 than in 2021. The drop in the master’s category was especially pronounced, at 14.8 percentage points.",
                zh: "2022 年畢業的國際資訊科學學士、碩士與博士生比例都比 2021 年低。碩士的降幅特別劇烈，達 14.8 個百分點。" },
        by: "Chapter 6 · Education" },
      { text: { en: "In 2022, 201,000 AP CS exams were administered. Since 2007 the number of students taking these exams has increased more than tenfold.",
                zh: "2022 年有 201,000 份 AP 資訊科學考卷應考。自 2007 年以來，應考人數成長超過十倍。" },
        by: "Chapter 6 · Education" },
      { text: { en: "The number of English-language, AI-related postsecondary degree programs has tripled since 2017, showing a steady annual increase over the past five years.",
                zh: "英語授課的 AI 相關高等教育學程數自 2017 年以來成長為三倍，過去五年每年穩定增加。" },
        by: "Chapter 6 · Education" }
    ]
  },

  /* ------------------------------------------------------------------ CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "報告原文" },
    title: { en: "Read Chapter 6 in full", zh: "閱讀第 6 章原文" },
    text:  { en: "Chapter 6 (sections 6.1–6.2) with every figure, state map, and citation is free from Stanford HAI. Or head back to the report highlights and the full chapter overview.",
             zh: "第 6 章(6.1–6.2 兩節)連同所有圖表、各州地圖與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與完整章節總覽。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

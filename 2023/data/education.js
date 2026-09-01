/* =========================================================================
   Education — deep dive · education.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2023, Chapter 5
   https://hai.stanford.edu/ai-index/2023-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure comes from Chapter 5: 5.1 Postsecondary AI Education (CRA Taulbee
   Survey data through 2021, including the narrative highlight on who funds
   US CS departments) and 5.2 K–12 AI Education (Code.org state data for
   2022, AP exam data for 2021, and the UNESCO narrative highlight on
   international K–12 AI curricula). All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "education";

window.SITE_META = {
  title:    { en: "AI Index Report 2023", zh: "AI 指數報告 2023" },
  subtitle: { en: "Education · a chapter deep dive", zh: "教育專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "Universities are training the AI PhDs. Industry is taking them.",
                zh: "大學培養出 AI 博士，產業界把他們接走" },
    subtitle: { en: "Chapter 5 of the AI Index 2023 asks who is learning AI and who is left to teach it. The postsecondary numbers come from the CRA Taulbee Survey and run through 2021; the K–12 numbers come from Code.org and from a UNESCO survey of 193 member states. The shape of it: a record share of computer science doctorates now specialize in AI, two-thirds of them go straight to industry, and the faculty hiring line has been shrinking for a decade.",
                zh: "AI 指數 2023 第 5 章問的是：誰在學 AI，以及還剩下誰能教 AI。高等教育的數字來自 CRA Taulbee 調查，涵蓋到 2021 年；K–12 的數字來自 Code.org 與 UNESCO 對 193 個會員國的調查。整體樣貌是：專攻 AI 的資訊科學博士比例創下新高，其中三分之二畢業後直接進產業界，而教職的新聘人數已經萎縮十年。" },
    stats: [
      { label: { en: "% of new CS PhD students in North America specializing in AI in 2021 (14.9% in 2020)", zh: "% 2021 年北美專攻 AI 的資訊科學新科博士生比例(2020 年為 14.9%)" }, value: 19.1 },
      { label: { en: "% of new AI PhDs who took industry jobs in 2021 (28.2% went to academia)", zh: "% 2021 年進入產業界的新科 AI 博士(進入學術界的是 28.2%)" }, value: 65.4 },
      { label: { en: "% of new North American CS PhD graduates who were international in 2021 (45.8% in 2010)", zh: "% 2021 年北美資訊科學新科博士中的國際學生比例(2010 年為 45.8%)" }, value: 68.6 },
      { label: { en: "new CS, CE, and information faculty hires in North America in 2021 (733 in 2012)", zh: "2021 年北美資訊科學、計算機工程與資訊學系新聘教職數(2012 年為 733)" }, value: 710 },
      { label: { en: "AP computer science exams taken in the US in 2021, up 1.0% year over year", zh: "2021 年美國 AP 資訊科學應考卷數，較前一年增加 1.0%" }, value: 181040 },
      { label: { en: "countries that had endorsed and implemented a K–12 AI curriculum as of 2021", zh: "截至 2021 年已正式認可並實施 K–12 AI 課綱的國家數" }, value: 11 }
    ]
  },

  /* --------------------------------------------------- 5.1 DEGREE PIPELINE */
  {
    type: "prose",
    id: "degrees",
    nav:      { en: "5.1 Degrees", zh: "5.1 學位" },
    title:    { en: "5.1 — The undergraduate boom stops dead at the doctorate",
                zh: "5.1 — 大學部的熱潮，到博士就停住了" },
    subtitle: { en: "New CS bachelor’s graduates in North America have almost quadrupled since 2012. Master’s degrees doubled and then flattened. PhDs never moved at all — there were fewer of them in 2021 than in 2012.",
                zh: "北美資訊科學新科學士自 2012 年以來成長了將近四倍。碩士翻倍之後就走平。博士根本沒動過 — 2021 年的人數甚至比 2012 年還少。" },
    blocks: [
      { type: "p",
        text: { en: "In 2021 North American universities produced 33,059 new CS bachelor’s graduates, nearly four times the 2012 figure. Master’s graduates roughly doubled over the same stretch to 15,068, but the growth stopped in 2018: the count has drifted down from 15,532 that year. At the doctoral level there was no boom to speak of. North America graduated 1,893 new CS PhDs in 2021 — fewer than the 1,997 of 2020, and fewer than the 1,929 of 2012.",
                zh: "2021 年，北美大學培養出 33,059 位資訊科學新科學士，接近 2012 年的四倍。碩士畢業生在同一段期間大約翻倍，來到 15,068 人，但成長在 2018 年就停了：從當年的 15,532 人一路微幅下滑。博士層級則談不上什麼熱潮。2021 年北美只產出 1,893 位資訊科學新科博士 — 比 2020 年的 1,997 位少，也比 2012 年的 1,929 位少。" } },
      { type: "h3",
        text: { en: "Graduate school runs on international students", zh: "研究所是靠國際學生撐起來的" } },
      { type: "ul",
        items: {
          en: ["16.3% of new CS bachelor’s graduates in North America were international students in 2021, a rise of 9.5 percentage points since 2012.",
               "At master’s level the majority are international: 65.2% in 2021. That share has actually been sliding since 2016, and the total number of master’s graduates has been flat since 2018.",
               "At PhD level the international share is still climbing — 45.8% in 2010, 68.6% in 2021.",
               "Then it inverts. Only 13.2% of new CS, CE, and information tenure-track faculty hires in North America in 2021 were international."],
          zh: ["2021 年，北美資訊科學新科學士中有 16.3% 是國際學生，比 2012 年增加 9.5 個百分點。",
               "碩士層級的多數是國際學生：2021 年為 65.2%。這個比例其實從 2016 年就開始下滑，而碩士畢業總人數自 2018 年起也走平。",
               "博士層級的國際學生比例還在往上爬 — 2010 年 45.8%，2021 年 68.6%。",
               "接著就反轉了。2021 年北美資訊科學、計算機工程與資訊學系的終身職軌新聘中，只有 13.2% 是國際人士。"]
        } },
      { type: "h3",
        text: { en: "AI is quietly taking over the doctorate", zh: "AI 正在悄悄吃下博士班" } },
      { type: "p",
        text: { en: "19.1% of new CS PhD students in North America specialized in AI in 2021 — up 4.2 percentage points in a single year from 14.9% in 2020, and up 8.6 points since 2012. In 2010 the figure was 10.2%. Close to one in five computer science doctorates is now an AI doctorate, inside a cohort whose total size has not grown in a decade.",
                zh: "2021 年，北美專攻 AI 的資訊科學新科博士生佔 19.1% — 一年之內就從 2020 年的 14.9% 增加 4.2 個百分點，比 2012 年高出 8.6 個百分點。2010 年這個數字是 10.2%。現在每五個資訊科學博士就有將近一個是 AI 博士，而這個群體的總人數十年來並沒有變大。" } }
    ]
  },

  /* --------------------------------------------------- INTERNATIONAL SHARE */
  {
    type: "bars",
    id: "intl-share",
    nav:      { en: "Intl students", zh: "國際學生" },
    title:    { en: "International share of North American CS pipeline, 2021",
                zh: "北美資訊科學人才管道中的國際比例，2021" },
    subtitle: { en: "Percent of each level who are international. The higher the degree, the more the pipeline depends on students from abroad — and then the dependence disappears at the point where departments hire.",
                zh: "各層級中國際人士的百分比。學位愈高，這條管道就愈依賴來自國外的學生 — 而到了系所實際聘人的那一關，這份依賴就不見了。" },
    series: [
      { label: { en: "Bachelor’s", zh: "學士" },      value: 16.3 },
      { label: { en: "Master’s", zh: "碩士" },        value: 65.2 },
      { label: { en: "PhD", zh: "博士" },             value: 68.6 },
      { label: { en: "Faculty hires", zh: "新聘教職" }, value: 13.2 }
    ]
  },

  /* ------------------------------------------------------- AI PhD DESTINY */
  {
    type: "bars",
    id: "phd-jobs",
    nav:      { en: "AI PhD jobs", zh: "AI 博士出路" },
    title:    { en: "Where new AI PhDs in North America went, 2011 vs 2021",
                zh: "北美新科 AI 博士的去向，2011 對 2021" },
    subtitle: { en: "Percent of new AI PhD graduates by sector. A decade ago industry and academia were evenly matched. By 2021 industry was taking more than twice as many. Government took 0.7%, a share that has barely moved in five years.",
                zh: "新科 AI 博士依部門別的百分比。十年前產業界與學術界勢均力敵。到了 2021 年，產業界拿走的人數是學術界的兩倍以上。政府部門拿到 0.7%，這個比例五年來幾乎沒變。" },
    series: [
      { label: { en: "Industry 2011", zh: "2011 產業" }, value: 40.9 },
      { label: { en: "Academia 2011", zh: "2011 學術" }, value: 41.6 },
      { label: { en: "Industry 2021", zh: "2021 產業" }, value: 65.4 },
      { label: { en: "Academia 2021", zh: "2021 學術" }, value: 28.2 }
    ]
  },

  /* --------------------------------------------------------- 5.1 FACULTY */
  {
    type: "prose",
    id: "faculty",
    nav:      { en: "Faculty", zh: "教職" },
    title:    { en: "The people who would teach AI are not being hired",
                zh: "能教 AI 的那些人，並沒有被聘進來" },
    subtitle: { en: "Total CS faculty headcount keeps creeping up. New hiring has been shrinking for a decade, and its tenure-track core has fallen by nearly a quarter since 2019.",
                zh: "資訊科學教師的總人數還在緩慢往上爬。但新聘人數已經萎縮十年，其中終身職軌的核心自 2019 年以來掉了將近四分之一。" },
    blocks: [
      { type: "p",
        text: { en: "North America counted 8,149 CS, CE, and information faculty in 2021 — 2.2% more than the year before and 32.8% more than in 2011. In the United States alone the number was 6,789, up 2.0% in a year and 39.0% over the decade. Hiring tells the opposite story. There were 710 new faculty hires in North America in 2021 against 733 in 2012, and tenure-track hires peaked at 422 in 2019 before dropping to 324 in 2021.",
                zh: "2021 年北美有 8,149 位資訊科學、計算機工程與資訊學系的教師 — 比前一年多 2.2%，比 2011 年多 32.8%。光看美國是 6,789 位，一年增加 2.0%，十年增加 39.0%。但新聘的故事完全相反。2021 年北美新聘教職 710 人，2012 年是 733 人；終身職軌新聘在 2019 年達到 422 人的高點，到 2021 年掉到 324 人。" } },
      { type: "h3",
        text: { en: "Where the new faculty come from", zh: "新教師從哪裡來" } },
      { type: "ul",
        items: {
          en: ["40% of new CS, CE, and information faculty hires in 2021 came straight out of a PhD, 34% from another academic position, and 15% from a postdoc.",
               "Just 11% came from industry — down from 13% in both 2018 and 2019, at exactly the moment industry was absorbing 65.4% of new AI PhDs.",
               "89.3% of new faculty positions were filled in 2021, up from 82.7% in 2011. Departments are not failing to fill posts; they are opening fewer of them.",
               "When a post did stay open, 53% of the time the reason was that the offer had been turned down. 22% of the time hiring was still in progress, and 14% of the time no candidate met the department’s hiring goals.",
               "36.3% of faculty losses in 2021 were people moving to an academic position elsewhere. 15.2% left for nonacademic positions — almost exactly the 15.9% of a decade earlier."],
          zh: ["2021 年，40% 的資訊科學、計算機工程與資訊學系新聘教師是剛拿到博士學位，34% 來自其他學術職位，15% 來自博士後。",
               "只有 11% 來自產業界 — 低於 2018 與 2019 年的 13%，而這正是產業界吸走 65.4% 新科 AI 博士的同一個時間點。",
               "2021 年有 89.3% 的新開教職職缺被填滿，高於 2011 年的 82.7%。系所並不是招不到人，而是開的缺變少了。",
               "職缺真的留白時，53% 的情況是對方拒絕了聘書。22% 是還在招聘流程中，14% 是沒有找到符合系所聘任目標的人選。",
               "2021 年的教職流失裡，36.3% 是轉到別的學術機構。15.2% 是離開學界去非學術職位 — 幾乎跟十年前的 15.9% 一模一樣。"]
        } },
      { type: "h3",
        text: { en: "Pay is rising, slowly, before inflation", zh: "薪水在漲，很慢，而且沒扣通膨" } },
      { type: "p",
        text: { en: "The median nine-month salary of a full professor of computer science in the United States reached $176,010 in 2021 — 3.2% above 2020 and 12.8% above 2015. Associate professors took a median of $127,470 and assistant professors $114,070. The chapter notes that none of these figures are adjusted for inflation, which in 2021 was doing most of the work in the other direction.",
                zh: "2021 年，美國資訊科學正教授的九個月薪資中位數達到 176,010 美元 — 比 2020 年高 3.2%，比 2015 年高 12.8%。副教授的中位數是 127,470 美元，助理教授是 114,070 美元。本章特別註明，這些數字都沒有經過通膨調整，而 2021 年的通膨正在往反方向出力。" } }
    ]
  },

  /* -------------------------------------------------------- WHO FUNDS CS */
  {
    type: "cards",
    id: "funding",
    nav:      { en: "Who funds CS", zh: "誰出錢" },
    title:    { en: "Who actually pays for computer science research in America",
                zh: "美國的資訊科學研究，實際上是誰在付錢" },
    subtitle: { en: "The CRA tracks the external funding sources of US CS departments. Federal money still dominates, but its composition is shifting — and the gap between private and public departments keeps widening.",
                zh: "CRA 追蹤美國資訊科學系所的外部經費來源。聯邦資金仍然是主力，但組成正在改變 — 而私立與公立系所之間的差距持續拉大。" },
    items: [
      { slug: "nsf",
        title:   { en: "The NSF still writes the biggest check", zh: "NSF 仍然開出最大的那張支票" },
        summary: { en: "The National Science Foundation accounted for 34.9% of external funds to US CS departments in 2021 — the largest single source, and a shrinking one.",
                   zh: "2021 年，美國國家科學基金會(NSF)佔美國資訊科學系所外部經費的 34.9% — 是最大的單一來源，而且比重在縮小。" },
        tags: ["funding"],
        overview: { en: "The NSF share has been falling since 2003. The chapter reports that the diminishing share of NSF funds over time has been partially offset by increasing money from industry and from the National Institutes of Health, which reached 12.1% and 6.8% respectively in 2021.",
                    zh: "NSF 的比重從 2003 年就一路下滑。本章指出，NSF 佔比隨時間縮減的部分，有一些被產業界與美國國家衛生研究院(NIH)增加的經費補上，兩者在 2021 年分別達到 12.1% 與 6.8%。" } },
      { slug: "defense",
        title:   { en: "Defense is the second-largest funder", zh: "國防是第二大金主" },
        summary: { en: "Defense agencies outside DARPA — the Army Research Office, the Office of Naval Research, and the Air Force Research Laboratory — supplied 20.3% of external funds in 2021.",
                   zh: "DARPA 以外的國防機構 — 陸軍研究辦公室、海軍研究辦公室與空軍研究實驗室 — 在 2021 年提供了 20.3% 的外部經費。" },
        tags: ["funding", "defense"],
        overview: { en: "DARPA adds a further 8.8% on top of that 20.3%. Together with other federal sources (3.6%), the Department of Energy (2.3%), and the NIH (6.8%), the federal government remains the backbone of academic computing research in the United States. State agencies contributed 1.5%.",
                    zh: "在那 20.3% 之上，DARPA 再加上 8.8%。連同其他聯邦來源(3.6%)、能源部(2.3%)與 NIH(6.8%)，聯邦政府仍然是美國學術計算研究的骨幹。州政府機構則貢獻 1.5%。" } },
      { slug: "industry-money",
        title:   { en: "Industry money is growing", zh: "產業界的錢正在變多" },
        summary: { en: "Industrial sources supplied 12.1% of external funds to US CS departments in 2021, ahead of DARPA (8.8%) and the NIH (6.8%).",
                   zh: "2021 年，產業界來源提供了美國資訊科學系所 12.1% 的外部經費，高於 DARPA(8.8%)與 NIH(6.8%)。" },
        tags: ["funding", "industry"],
        overview: { en: "Industry is one of the two sources the chapter names as offsetting the NSF’s decline. Below it sit private foundations at 4.9%, other sources at 4.6%, other federal money at 3.6%, the Department of Energy at 2.3%, and state agencies at 1.5%. The same industry that hired 65.4% of new AI PhDs is also, increasingly, paying for the departments that trained them.",
                    zh: "產業界是本章點名用來抵銷 NSF 下滑的兩個來源之一。排在它下面的是私人基金會 4.9%、其他來源 4.6%、其他聯邦經費 3.6%、能源部 2.3%，以及州政府機構 1.5%。聘走 65.4% 新科 AI 博士的同一批產業界，也愈來愈是在替培養他們的系所付錢。" } },
      { slug: "private-public-gap",
        title:   { en: "Private departments now outspend public ones", zh: "私立系所的支出已經超過公立" },
        summary: { en: "In 2021 the median US private CS department spent $9.71 million of external research money. The median public department spent $5.69 million.",
                   zh: "2021 年，美國私立資訊科學系所的外部研究經費支出中位數是 971 萬美元，公立系所是 569 萬美元。" },
        tags: ["funding"],
        overview: { en: "In 2011 the two were roughly the same. Median total expenditure has risen since then for both private and public CS departments, but private universities have pulled decisively away. The AI Index singles out this widening gap as one of the five headline findings of the chapter.",
                    zh: "2011 年時兩者大致相當。從那之後，私立與公立資訊科學系所的支出中位數都在成長，但私立大學已經明顯拉開距離。AI 指數把這個持續擴大的差距列為本章五項頭條發現之一。" } }
    ]
  },

  /* --------------------------------------------------------- 5.2 US K–12 */
  {
    type: "prose",
    id: "k12-us",
    nav:      { en: "5.2 US K–12", zh: "5.2 美國中小學" },
    title:    { en: "5.2 — Whether you can take computer science depends on your state",
                zh: "5.2 — 你能不能修到資訊科學課，取決於你在哪一州" },
    subtitle: { en: "27 states required every high school to offer a computer science course in 2022. The share of public high schools actually teaching it runs from 98% in Maryland to 21% in Minnesota.",
                zh: "2022 年有 27 個州規定所有高中都必須開設資訊科學課。而實際有在教的公立高中比例，從馬里蘭的 98% 一路橫跨到明尼蘇達的 21%。" },
      blocks: [
      { type: "p",
        text: { en: "Code.org’s 2022 data shows 27 states requiring that all high schools offer a computer science course. The requirement does not map neatly onto what gets taught. Maryland leads on the share of public high schools teaching CS at 98%, followed by South Carolina (93%) and Arkansas (92%). At the other end sit Minnesota at 21%, Louisiana at 32%, and Arizona and Montana at 36% each. California — the largest state, and the one taking the most AP CS exams in absolute terms — is at 40%.",
                zh: "Code.org 的 2022 年資料顯示，有 27 個州規定所有高中都要開設資訊科學課。但規定跟實際教什麼並不完全對得上。以有在教資訊科學的公立高中比例來看，馬里蘭以 98% 居首，其次是南卡羅來納(93%)與阿肯色(92%)。另一端則是明尼蘇達 21%、路易斯安那 32%，亞利桑那與蒙大拿各 36%。加州 — 人口最多、AP 資訊科學考卷絕對數量也最多的州 — 只有 40%。" } },
      { type: "h3",
        text: { en: "AP exams: ninefold growth, then a pause", zh: "AP 考試：九倍成長，然後停下來" } },
      { type: "p",
        text: { en: "American students took 181,040 AP computer science exams in 2021, a 1.0% increase on the previous year after several years of large gains. The AI Index attributes the leveling off to the pandemic. Measured against 2007, the number of AP CS exams has grown more than ninefold. The count covers both AP Computer Science A and AP Computer Science Principles, the latter first offered in 2017.",
                zh: "2021 年美國學生一共應考 181,040 份 AP 資訊科學考卷，在連續幾年大幅成長之後，這一年只增加 1.0%。AI 指數把這個走平歸因於疫情。若拿 2007 年當基準，AP 資訊科學考卷數已經成長超過九倍。這個數字同時涵蓋 AP Computer Science A 與 AP Computer Science Principles，後者是 2017 年才首度開考。" } },
      { type: "h3",
        text: { en: "Volume and density are two different maps", zh: "數量與密度是兩張不同的地圖" } },
      { type: "p",
        text: { en: "California recorded the most AP CS exams in 2021 with 31,189, ahead of Texas (17,307), Florida (14,864), New York (13,304), and New Jersey (9,391). Normalize by population and the ranking rearranges itself: Maryland leads with 124.1 exams per 100,000 inhabitants, then New Jersey (101.3), Connecticut (89.7), California (79.7), and Massachusetts (78.0). At the bottom of the raw count, Alaska took 100 exams for the whole year and Montana 42.",
                zh: "2021 年 AP 資訊科學考卷數最多的是加州，共 31,189 份，其次是德州(17,307)、佛羅里達(14,864)、紐約(13,304)與紐澤西(9,391)。改用人口做標準化，排名就整個重排：馬里蘭以每十萬人 124.1 份居首，接著是紐澤西(101.3)、康乃狄克(89.7)、加州(79.7)與麻州(78.0)。絕對數量的另一端，阿拉斯加全年只考了 100 份，蒙大拿 42 份。" } }
    ]
  },

  /* ------------------------------------------------------ AP PER 100,000 */
  {
    type: "bars",
    id: "ap-states",
    nav:      { en: "AP per capita", zh: "AP 人均" },
    title:    { en: "AP computer science exams per 100,000 inhabitants, 2021",
                zh: "每十萬人的 AP 資訊科學應考卷數，2021" },
    subtitle: { en: "The five densest states. Maryland takes more than one and a half times as many AP CS exams per head as California, which leads the raw count with 31,189 exams.",
                zh: "密度最高的五個州。馬里蘭每人平均應考的 AP 資訊科學卷數，是加州的一倍半以上；而加州在絕對數量上以 31,189 份居冠。" },
    series: [
      { label: { en: "Maryland", zh: "馬里蘭" },      value: 124.09 },
      { label: { en: "New Jersey", zh: "紐澤西" },    value: 101.33 },
      { label: { en: "Connecticut", zh: "康乃狄克" }, value: 89.72 },
      { label: { en: "California", zh: "加州" },      value: 79.68 },
      { label: { en: "Massachusetts", zh: "麻州" },   value: 77.99 }
    ]
  },

  /* ------------------------------------------------------- GLOBAL K–12 QA */
  {
    type: "accordion",
    id: "global-k12",
    nav:      { en: "Worldwide", zh: "全球課綱" },
    title:    { en: "What a national AI curriculum actually contains",
                zh: "一份國家級 AI 課綱裡到底裝了什麼" },
    subtitle: { en: "UNESCO surveyed representatives of 193 member states plus over 10,000 private- and third-sector actors on the state of government-endorsed K–12 AI curricula. Five questions from what came back.",
                zh: "UNESCO 針對政府認可的 K–12 AI 課綱現況，調查了 193 個會員國的代表，以及超過 10,000 個私部門與第三部門單位。以下是回收結果帶出的五個問題。" },
    qa: [
      { q: { en: "How many countries have an AI curriculum in place?",
             zh: "有多少國家已經有 AI 課綱？" },
        a: { en: "Eleven had endorsed and implemented a K–12 AI curriculum as of 2021: Armenia, Austria, Belgium, China, India, Kuwait, Portugal, Qatar, Serbia, South Korea, and the United Arab Emirates. Five more were developing one — Bulgaria, Germany, Jordan, Saudi Arabia, and Serbia, which appears on both lists because it is developing further curricula on top of what it has already implemented.",
             zh: "截至 2021 年，有 11 個國家已經正式認可並實施 K–12 AI 課綱：亞美尼亞、奧地利、比利時、中國、印度、科威特、葡萄牙、卡達、塞爾維亞、南韓與阿拉伯聯合大公國。另有 5 個國家還在開發中 — 保加利亞、德國、約旦、沙烏地阿拉伯與塞爾維亞；塞爾維亞同時出現在兩份名單上，是因為它在已實施的內容之外，還在繼續開發新的課綱。" } },
      { q: { en: "Which school levels do those curricula cover?",
             zh: "這些課綱涵蓋哪些學習階段？" },
        a: { en: "Coverage thins out at the youngest ages. China, Portugal, Qatar, and the United Arab Emirates run endorsed and implemented AI curricula across primary, middle, and high school. Armenia, India, and Serbia cover middle and high school. Austria, Belgium, and South Korea reach high school only. Kuwait is the one country in the implemented group that covers primary and middle school but not high school. Among the countries still developing, Bulgaria, Germany, and Saudi Arabia are each building for all three levels at once.",
             zh: "年紀愈小，涵蓋得愈少。中國、葡萄牙、卡達與阿拉伯聯合大公國的已實施 AI 課綱橫跨小學、國中與高中三個階段。亞美尼亞、印度與塞爾維亞涵蓋國中與高中。奧地利、比利時與南韓只到高中。科威特是已實施名單中唯一涵蓋小學與國中、卻不含高中的國家。在仍在開發的國家裡，保加利亞、德國與沙烏地阿拉伯都是三個階段一起做。" } },
      { q: { en: "What do students actually spend the time on?",
             zh: "學生實際上把時間花在什麼上？" },
        a: { en: "Algorithms and programming take the largest slice of time in the K–12 AI curricula UNESCO profiled, at 18%. AI technologies follow at 14%, then data literacy and the application of AI to other domains at 12% each, contextual problem-solving at 11%, developing AI technologies at 9%, ethics of AI at 7%, social implications of AI at 5%, and AI techniques at 2%. A further 10% of the time is unspecified.",
             zh: "在 UNESCO 收錄的 K–12 AI 課綱裡，佔用時間最多的是演算法與程式設計，達 18%。接著是 AI 技術 14%，資料素養與「AI 在其他領域的應用」各 12%，情境式問題解決 11%，開發 AI 技術 9%，AI 倫理 7%，AI 的社會影響 5%，AI 技法 2%。另有 10% 的時間沒有被歸類。" } },
      { q: { en: "So is this ethics education or engineering education?",
             zh: "所以這是倫理教育還是工程教育？" },
        a: { en: "Overwhelmingly engineering. Ethics of AI (7%) and social implications of AI (5%) together take 12% of curriculum time — less than algorithms and programming take on their own (18%). The three categories UNESCO groups under understanding, using, and developing AI — AI technologies (14%), developing AI technologies (9%), and AI techniques (2%) — account for 25% between them.",
             zh: "壓倒性地偏向工程。AI 倫理(7%)與 AI 的社會影響(5%)加起來佔課程時間的 12% — 比演算法與程式設計自己一項的 18% 還少。UNESCO 歸類在「理解、使用與開發 AI」底下的三項 — AI 技術(14%)、開發 AI 技術(9%)與 AI 技法(2%) — 合計佔 25%。" } },
      { q: { en: "What does one of these curricula look like up close?",
             zh: "近距離看一份這樣的課綱，長什麼樣？" },
        a: { en: "The UNESCO report documents the Austrian Data Science and Artificial Intelligence curriculum in detail. It opens with digital basics — using an operating system to store and print files, designing presentations, spreadsheets and word processing — then moves to types of digital media, social issues in digital media, and safe use. High school students take on programming languages, algorithms, and simulations, and learn the basic principles of data literacy: collecting data, structuring a spreadsheet, running analyses and visualizations, and applying criteria to judge whether a data source or a piece of digital content is credible. Students are expected to know about careers in ICT and AI, to create digital media, and to understand the cloud and how computers are networked. It closes on civics: understanding the ethical dilemmas attached to these technologies, becoming active participants in social discourse about them, and using technology to make public statements.",
             zh: "UNESCO 報告詳細記錄了奧地利的「資料科學與人工智慧」課綱。課程從數位基礎開始 — 用作業系統儲存與列印檔案、設計簡報、使用試算表與文書處理軟體 — 接著談數位媒體的類型、數位媒體中的社會議題，以及安全使用。高中階段學生會接觸程式語言、演算法與模擬，並學習資料素養的基本原則：收集資料、建立試算表結構、進行分析與視覺化，以及用一套標準判斷資料來源與數位內容是否可信。課綱期待學生了解資通訊與 AI 領域的職涯、能自己創作數位媒體，並理解雲端與電腦如何連網。最後收在公民素養：理解這些技術伴隨的倫理兩難、成為相關社會討論的積極參與者，並運用科技表達公共意見。" } }
    ]
  },

  /* --------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In Its Words", zh: "報告原文" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "The headline findings of Chapter 5 · Education, in the report’s own terms.",
                zh: "第 5 章「教育」的頭條發現，用報告自己的說法。" },
    quotes: [
      { text: { en: "The proportion of new computer science PhD graduates from U.S. universities who specialized in AI jumped to 19.1% in 2021, from 14.9% in 2020 and 10.2% in 2010.",
                zh: "美國大學資訊科學新科博士中專攻 AI 的比例，從 2010 年的 10.2%、2020 年的 14.9%，跳升到 2021 年的 19.1%。" },
        by: "Chapter 5 · Education" },
      { text: { en: "In 2011, roughly the same proportion of new AI PhD graduates took jobs in industry (40.9%) as opposed to academia (41.6%). In 2021, 65.4% of AI PhDs took jobs in industry, more than double the 28.2% who took jobs in academia.",
                zh: "2011 年，新科 AI 博士進入產業界(40.9%)與進入學術界(41.6%)的比例大致相當。到了 2021 年，65.4% 的 AI 博士進了產業界，是進入學術界的 28.2% 的兩倍以上。" },
        by: "Chapter 5 · Education" },
      { text: { en: "In the last decade, the total number of new North American computer science, computer engineering, and information faculty hires has decreased: There were 710 total hires in 2021 compared to 733 in 2012.",
                zh: "過去十年，北美資訊科學、計算機工程與資訊學系的新聘教職總數是減少的：2021 年共 710 人，2012 年是 733 人。" },
        by: "Chapter 5 · Education" },
      { text: { en: "In 2021, the median expenditure for private universities was $9.7 million, compared to $5.7 million for public universities.",
                zh: "2021 年，私立大學的支出中位數是 970 萬美元，公立大學是 570 萬美元。" },
        by: "Chapter 5 · Education" },
      { text: { en: "In 2021, a total of 181,040 AP computer science exams were taken by American students, a 1.0% increase from the previous year. Since 2007, the number of AP computer science exams has increased ninefold.",
                zh: "2021 年美國學生共應考 181,040 份 AP 資訊科學考卷，比前一年增加 1.0%。自 2007 年以來，AP 資訊科學考卷數已經成長九倍。" },
        by: "Chapter 5 · Education" }
    ]
  },

  /* ------------------------------------------------------------------ CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "讀原文" },
    title: { en: "Read Chapter 5 in full", zh: "閱讀第 5 章原文" },
    text:  { en: "Chapter 5 (sections 5.1 and 5.2) with every figure, state map, and citation is free from Stanford HAI. Or head back to the report highlights and the eight-chapter overview.",
             zh: "第 5 章(5.1 與 5.2 兩節)連同所有圖表、各州地圖與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與八大章節總覽。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2023-ai-index-report",
             label: { en: "Open the AI Index 2023 →", zh: "開啟 AI 指數 2023 →" } }
  }
];

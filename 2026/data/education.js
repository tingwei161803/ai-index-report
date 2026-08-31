/* =========================================================================
   AI in Education — deep dive · education.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026, Chapter 7
   https://hai.stanford.edu/ai-index/2026-ai-index-report/education

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 7: 7.1 Background, 7.2 Postsecondary CS & AI
   Education, 7.3 K–12 CS & AI Education, 7.4 AI Skill Acquisition.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "education";

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Education · a chapter deep dive", zh: "教育專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "Demand for AI education is racing ahead of the systems meant to deliver it",
                zh: "對 AI 教育的需求,正跑在能傳遞它的體系前面" },
    subtitle: { en: "Chapter 7 of the AI Index 2026 surveys AI and computer-science education from PhD to kindergarten, and into the workforce. Students are already using AI in large numbers; coursework, teacher training, and policy are still catching up. The numbers:",
                zh: "AI 指數 2026 第 7 章,橫掃從博士到幼兒園、再到職場的 AI 與資訊科學教育。學生早已大量使用 AI,但課程、師資培訓與政策都還在追趕。先看數字:" },
    stats: [
      { label: { en: "% change in U.S. CS undergrad enrollment, 2024→2025 (a decline)", zh: "% 美國四年制大學資訊科學主修招生變化(2024→2025,下降)" }, value: 11 },
      { label: { en: "% rise in U.S. AI-software master's graduates, 2023→2024", zh: "% 美國 AI 軟體類碩士畢業生成長(2023→2024)" }, value: 17 },
      { label: { en: "% of U.S. high-school & college students using AI for schoolwork (4 in 5)", zh: "% 美國高中與大學生用 AI 做課業(五分之四)" }, value: 80 },
      { label: { en: "% of teachers who say their school's AI policy is clear", zh: "% 教師認為學校 AI 政策清楚" }, value: 6 },
      { label: { en: "% of countries that taught computer science in 2025", zh: "% 在 2025 年教資訊科學的國家" }, value: 93 },
      { label: { en: "% rise in new AI PhDs (U.S. & Canada), 2022→2024", zh: "% 新 AI 博士成長(美加,2022→2024)" }, value: 22 }
    ]
  },

  /* ----------------------------------------- 7.2 POSTSECONDARY / STUDENTS */
  {
    type: "prose",
    id: "students",
    title:    { en: "7.2 — College: CS enrollment cools, AI specialization heats up",
                zh: "7.2 — 大學:資訊科學招生轉冷,AI 專精轉熱" },
    subtitle: { en: "Generative AI and a softer entry-level coding market are reshaping the value of a CS degree — even as AI-specific majors and PhDs keep growing.",
                zh: "生成式 AI 與走弱的入門程式設計就業市場,正在重塑資訊科學學位的價值 — 但 AI 專屬主修與博士仍持續成長。" },
    blocks: [
      { type: "p",
        text: { en: "Between 2024 and 2025, enrollment in CS as an undergraduate major at U.S. four-year universities declined 11%, mirroring a labor market where employment among the youngest software developers has fallen since 2024. But because degree completion lags enrollment by several years, the full effect will take time to surface. Meanwhile, AI-relevant majors keep gaining: AI-software master's graduates rose 17% from 2023 to 2024 (and 82% since 2022).",
                zh: "2024 到 2025 年間,美國四年制大學資訊科學主修的招生下降 11%,呼應一個自 2024 年起最年輕軟體開發者就業已下滑的勞動市場。但由於學位完成落後招生數年,完整效應仍需時間浮現。同時,AI 相關主修持續成長:AI 軟體類碩士畢業生在 2023 到 2024 年間增加 17%(自 2022 年起增加 82%)。" } },
      { type: "h3",
        text: { en: "PhDs: all the growth went to academia", zh: "博士:所有成長都流向學界" } },
      { type: "ul",
        items: {
          en: ["New AI PhDs in the U.S. and Canada rose 22% from 2022 to 2024, but the share entering industry stayed flat — all of the growth went to academia, challenging the 'brain drain' narrative.",
               "Industry still takes the majority: about 65% of AI PhD graduates went into industry, down from a 77% peak in 2022, while the academic share has nearly doubled since 2022.",
               "Most AI-related graduate students are non-residents: 67% of AI-software master's graduates are nonresidents — a share now at risk from tighter U.S. student-visa policy."],
          zh: ["美加新 AI 博士在 2022 到 2024 年間成長 22%,但進入產業的比例持平 — 所有成長都流向學界,挑戰了「人才外流」的說法。",
               "產業仍佔多數:約 65% 的 AI 博士畢業生進入產業,低於 2022 年 77% 的高峰;而學界的比例自 2022 年起幾乎翻倍。",
               "多數 AI 相關研究生為非本國居民:AI 軟體類碩士畢業生中有 67% 是非居民 — 這個比例如今因美國更緊縮的學生簽證政策而面臨風險。"]
        } },
      { type: "h3",
        text: { en: "Four in five students already use AI", zh: "五分之四的學生已在使用 AI" } },
      { type: "ul",
        items: {
          en: ["In Chegg's 2025 survey of university students across 15 countries, 80% said they had used generative AI for their studies — double the 40% reported in 2023. Usage ranges from 95% in Indonesia to 67% in the U.S. and U.K.",
               "Students lean on AI for higher-order work: understanding a concept (56%) is their top use, followed by researching (52%) and generating first drafts (46%). Anthropic found students use Claude mostly for creating (39.8%) and analyzing (30.2%).",
               "Of students who use AI for school, 56% input a question at least once a day; among non-users, the top deterrents are fear of misconduct accusations (45%), accuracy concerns (38%), and restrictive school policies (33%)."],
          zh: ["在 Chegg 2025 年橫跨 15 國的大學生調查中,80% 表示曾用生成式 AI 協助學習 — 是 2023 年 40% 的兩倍。使用率從印尼的 95% 到美國與英國的 67% 不等。",
               "學生把 AI 用於高階工作:理解概念(56%)是最常見用途,其次是查資料(52%)與生成初稿(46%)。Anthropic 發現學生使用 Claude 多半用於創造(39.8%)與分析(30.2%)。",
               "在用 AI 做課業的學生中,56% 每天至少輸入一個問題;在不使用者中,最大的卻步原因是怕被指控學術不端(45%)、擔心內容正確性(38%),以及學校政策限制(33%)。"]
        } }
    ]
  },

  /* ---------------------------------------------- AI PhD academia chart */
  {
    type: "bars",
    id: "phds",
    title:    { en: "New AI PhDs flowing into academia",
                zh: "流向學界的新 AI 博士" },
    subtitle: { en: "New AI PhD graduates in the U.S. and Canada who took academic jobs, by year. After a long dip, the academic track has rebounded — absorbing all of the recent growth in new AI doctorates.",
                zh: "美加進入學界的新 AI 博士畢業生逐年數。在長期低迷之後,學術路徑回升 — 吸收了近年新 AI 博士的全部成長。" },
    series: [
      { label: { en: "2019", zh: "2019" }, value: 65 },
      { label: { en: "2020", zh: "2020" }, value: 61 },
      { label: { en: "2021", zh: "2021" }, value: 84 },
      { label: { en: "2022", zh: "2022" }, value: 79 },
      { label: { en: "2023", zh: "2023" }, value: 103 }
    ]
  },

  /* ------------------------------------------------ univ GenAI use chart */
  {
    type: "bars",
    id: "genai-use",
    title:    { en: "University GenAI use has doubled",
                zh: "大學生使用生成式 AI 翻倍" },
    subtitle: { en: "% of university students who have used generative AI to support their studies. Globally the share doubled from 2023 to 2025; adoption is highest in Indonesia and lowest in the U.S. and U.K.",
                zh: "曾用生成式 AI 協助學習的大學生比例(%)。全球比例在 2023 到 2025 年間翻倍;印尼採用率最高,美國與英國最低。" },
    series: [
      { label: { en: "Global avg. 2023", zh: "全球平均 2023" }, value: 40 },
      { label: { en: "Global avg. 2025", zh: "全球平均 2025" }, value: 80 },
      { label: { en: "Indonesia 2025", zh: "印尼 2025" },      value: 95 },
      { label: { en: "U.S. / U.K. 2025", zh: "美國／英國 2025" }, value: 67 }
    ]
  },

  /* --------------------------------------------------- 7.3 K-12 PROSE */
  {
    type: "prose",
    id: "schools",
    title:    { en: "7.3 — K–12: students adopt AI faster than schools can govern it",
                zh: "7.3 — K–12:學生採用 AI 的速度,快過學校能治理它" },
    subtitle: { en: "Foundational CS access has more than doubled since 2017, but AI-specific instruction, standards, and teacher support lag well behind student demand.",
                zh: "基礎資訊科學的可近性自 2017 年起增加超過一倍,但 AI 專屬教學、標準與師資支援,遠遠落後學生需求。" },
    blocks: [
      { type: "p",
        text: { en: "The share of U.S. public high schools offering foundational CS rose from 35% in 2017–18 to 60% in 2023–24, holding at 60% in 2024–25. Access is deeply uneven by school size — 91% of large high schools offer CS versus just 44% of small ones — and only 6.1% of students were enrolled in CS in 2024–25.",
                zh: "提供基礎資訊科學的美國公立高中比例,從 2017–18 學年的 35% 升到 2023–24 學年的 60%,並在 2024–25 學年維持 60%。可近性因學校規模而高度不均 — 91% 的大型高中提供資訊科學,小型高中只有 44% — 而 2024–25 學年僅 6.1% 的學生實際修讀資訊科學。" } },
      { type: "h3",
        text: { en: "The implementation gap", zh: "落地的缺口" } },
      { type: "ul",
        items: {
          en: ["An estimated 50%–84% of middle- and high-school students now use AI for school tasks, yet only about half of middle and high schools have an AI policy — and just 6% of teachers say those policies are clear.",
               "Standards are thin on AI: of 45 states with K–12 CS standards, 29 include AI only minimally and 10 not at all; just six states have standards with significant AI-specific content (plus two in draft).",
               "AP Computer Science — a primary pathway to advanced CS — still contains no AI-specific content, and there are no state-level standards or funding for AI teacher training. Policy, curriculum, and training all have gaps."],
          zh: ["估計有 50%–84% 的國中與高中生現在用 AI 做課業,但只有約半數中學訂有 AI 政策 — 而只有 6% 的教師認為這些政策清楚。",
               "標準在 AI 上很單薄:在 45 個有 K–12 資訊科學標準的州中,29 個只極小幅納入 AI、10 個完全沒有;只有六個州的標準含有實質 AI 專屬內容(另有兩個為草案)。",
               "AP 資訊科學 — 通往進階資訊科學的主要途徑 — 仍不含 AI 專屬內容,且沒有州級的 AI 師資培訓標準或經費。政策、課程與培訓都有缺口。"]
        } },
      { type: "h3",
        text: { en: "Going global", zh: "走向全球" } },
      { type: "ul",
        items: {
          en: ["In 2025, about 93% of the world's countries taught CS, and more than 90% offer it to primary or secondary students — yet only 30% mandate it.",
               "Two countries moved decisively on AI itself: China (Beijing, Guangdong, Hangzhou) and the United Arab Emirates both mandated AI education starting with the 2025–26 school year, with grade-progressed curricula from literacy to system design.",
               "Others integrated AI into teaching rather than teaching about it — South Korea launched then reversed primary-school AI textbooks, while Estonia's AI Leap 2025 is piloting AI tools with 20,000 students and 3,000 teachers."],
          zh: ["2025 年約有 93% 的國家教資訊科學,逾 90% 對中小學生開設 — 但只有 30% 將其列為必修。",
               "兩個國家在 AI 本身上果斷邁進:中國(北京、廣東、杭州)與阿拉伯聯合大公國,都自 2025–26 學年起將 AI 教育列為必修,並採用從素養到系統設計、逐年級進階的課程。",
               "其他國家則把 AI 整合進教學,而非教授 AI 本身 — 南韓推出又撤回了小學 AI 教科書,而愛沙尼亞的 AI Leap 2025 正以 2 萬名學生與 3 千名教師試行 AI 工具。"]
        } }
    ]
  },

  /* --------------------------------------------- foundational CS chart */
  {
    type: "bars",
    id: "cs-access",
    title:    { en: "U.S. high schools teaching foundational CS",
                zh: "教基礎資訊科學的美國高中" },
    subtitle: { en: "% of U.S. public high schools offering foundational computer science. Access climbed from 35% in 2017–18 to 60%, where it has now plateaued for two straight years.",
                zh: "提供基礎資訊科學的美國公立高中比例(%)。可近性從 2017–18 學年的 35% 攀升至 60%,如今已連續兩年停滯。" },
    series: [
      { label: { en: "2017–18", zh: "2017–18" }, value: 35 },
      { label: { en: "2019–20", zh: "2019–20" }, value: 47 },
      { label: { en: "2021–22", zh: "2021–22" }, value: 53 },
      { label: { en: "2023–24", zh: "2023–24" }, value: 60 },
      { label: { en: "2024–25", zh: "2024–25" }, value: 60 }
    ]
  },

  /* --------------------------------------------------- 7.4 AI SKILLS */
  {
    type: "prose",
    id: "skills",
    title:    { en: "7.4 — Most AI skills are now learned outside the classroom",
                zh: "7.4 — 多數 AI 技能如今在教室之外習得" },
    subtitle: { en: "As AI reshapes jobs, upskilling and reskilling have moved to the center of lifelong learning — through certificates, online courses, and on-the-job experience.",
                zh: "當 AI 重塑各行各業,進修與再培訓已成為終身學習的核心 — 透過證書、線上課程與在職經驗。" },
    blocks: [
      { type: "p",
        text: { en: "LinkedIn's relative AI skill-penetration rate measures how prominently AI skills appear in a country's member profiles versus the global average. India leads at 3.0 — almost three times the global average — followed by the U.S. at 2.0 and Germany at 1.8. A persistent gender gap shows up everywhere: in India, men list AI skills at 3.1 versus 1.9 for women.",
                zh: "LinkedIn 的相對 AI 技能滲透率,衡量 AI 技能在一國會員檔案中相對於全球平均的顯著程度。印度以 3.0 領先 — 幾乎是全球平均的三倍 — 其次是美國的 2.0 與德國的 1.8。各地都存在持續的性別落差:在印度,男性列出 AI 技能的比率為 3.1,女性為 1.9。" } },
      { type: "h3",
        text: { en: "Literacy is outpacing engineering — with exceptions", zh: "素養正勝過工程 — 但有例外" } },
      { type: "p",
        text: { en: "LinkedIn's new AI Skills Diffusion Index separates AI literacy (familiarity with AI tools) from AI engineering (building and deploying systems). In most countries, including India and the U.S., literacy skills are growing faster than engineering skills. The exceptions are the United Arab Emirates, Chile, and South Africa, where engineering-oriented AI skills show steeper growth since 2022. In the U.S., the fastest-growing literacy skills were AI prompting and Microsoft Copilot Studio; the fastest-growing engineering skills were AI agents, AI productivity, and AI strategy.",
                zh: "LinkedIn 全新的 AI 技能擴散指數,將 AI 素養(熟悉 AI 工具)與 AI 工程(建構與部署系統)分開。在多數國家(包括印度與美國),素養技能成長快過工程技能。例外是阿拉伯聯合大公國、智利與南非,當地以工程為導向的 AI 技能自 2022 年起成長更陡。在美國,成長最快的素養技能是 AI 提示與 Microsoft Copilot Studio;成長最快的工程技能則是 AI 代理、AI 生產力與 AI 策略。" } }
    ]
  },

  /* -------------------------------------------------- skill pen. chart */
  {
    type: "bars",
    id: "skill-penetration",
    title:    { en: "Relative AI skill penetration, by country",
                zh: "相對 AI 技能滲透率:依國家" },
    subtitle: { en: "How prominently AI skills feature in LinkedIn member profiles versus the global average (1.0 = global average). India leads at nearly 3×, ahead of the U.S. and Germany.",
                zh: "AI 技能在 LinkedIn 會員檔案中相對於全球平均的顯著程度(1.0 = 全球平均)。印度以近 3 倍領先,領先美國與德國。" },
    series: [
      { label: { en: "India", zh: "印度" },          value: 295 },
      { label: { en: "United States", zh: "美國" },   value: 202 },
      { label: { en: "Germany", zh: "德國" },         value: 183 },
      { label: { en: "United Kingdom", zh: "英國" },  value: 155 },
      { label: { en: "Canada", zh: "加拿大" },        value: 154 }
    ]
  },

  /* ------------------------------------------------------ SHIFT CARDS */
  {
    type: "cards",
    id: "shifts",
    title:    { en: "Six shifts defining AI education in 2025–26",
                zh: "定義 2025–26 年 AI 教育的六個轉變" },
    subtitle: { en: "From the lecture hall to the workforce. Tap any card for the full trend and its numbers.",
                zh: "從講堂到職場。點任一張卡片看完整趨勢與數字。" },
    items: [
      {
        slug: "cs-cooldown",
        title:   { en: "The CS enrollment cooldown", zh: "資訊科學招生轉冷" },
        summary: { en: "U.S. undergrad CS enrollment fell 11% in a year, tracking a softening entry-level coding market.",
                   zh: "美國大學資訊科學招生一年內下滑 11%,呼應走弱的入門程式設計市場。" },
        tags: ["enrollment"],
        overview: { en: "Between 2024 and 2025, enrollment in CS as an undergraduate major at U.S. four-year universities declined 11% — the declines measured for CS specifically, not the broader Computer and Information Sciences category. The drop mirrors the labor market documented in Chapter 4 (Economy), where employment among the youngest software developers has fallen since 2024 even as overall AI hiring grows. Generative AI's automation of coding tasks appears to be slowing the entry-level CS job market, and students are responding to that signal. Because degree completion lags enrollment by several years, the full downstream effect on graduate counts will take time to appear in the data.",
                    zh: "2024 到 2025 年間,美國四年制大學資訊科學主修的招生下降 11% — 此降幅是針對資訊科學本身,而非更廣的「電腦與資訊科學」類別。這個下滑呼應第 4 章(經濟)所記錄的勞動市場:儘管整體 AI 招聘成長,最年輕軟體開發者的就業自 2024 年起已下滑。生成式 AI 對程式設計任務的自動化,似乎正在拖慢入門資訊科學就業市場,而學生正在回應這個訊號。由於學位完成落後招生數年,對畢業人數的完整下游效應仍需時間才會顯現在資料中。" }
      },
      {
        slug: "ai-majors-rise",
        title:   { en: "AI majors rise as CS cools", zh: "AI 主修在資訊科學轉冷時崛起" },
        summary: { en: "AI-software master's graduates rose 17% in a year and 82% since 2022.",
                   zh: "AI 軟體類碩士畢業生一年內增加 17%,自 2022 年起增加 82%。" },
        tags: ["graduates"],
        overview: { en: "Even as CS enrollment cools, AI-relevant majors are gaining. Following the January 2025 White House AI Talent Report, the AI Index split AI-relevant majors into AI software (e.g. Artificial Intelligence, Computer Programming, Computational and Applied Mathematics) and AI hardware (e.g. Electrical Engineering, Materials Physics). AI-software degrees have grown steadily for a decade, with the largest gains at the master's level — up 82% between 2022 and 2024 and 17% between 2023 and 2024. AI-hardware degrees, by contrast, have stayed flat or declined, with bachelor's degrees down 13% since their 2020 peak. The dedicated CIP code for 'Artificial Intelligence and Robotics' (11.0102) has existed since 2016 but is rarely used, so AI graduates are often undercounted within general CS.",
                    zh: "即使資訊科學招生轉冷,AI 相關主修仍在成長。在 2025 年 1 月白宮 AI 人才報告之後,AI 指數把 AI 相關主修拆成 AI 軟體(如人工智慧、電腦程式設計、計算與應用數學)與 AI 硬體(如電機工程、材料物理)。AI 軟體類學位已穩定成長十年,以碩士層級增幅最大 — 2022 到 2024 年間增加 82%,2023 到 2024 年間增加 17%。相對地,AI 硬體類學位則持平或下降,學士學位自 2020 年高峰起下降 13%。專屬的「人工智慧與機器人」CIP 代碼(11.0102)自 2016 年起存在,但鮮少被使用,因此 AI 畢業生常被歸進一般資訊科學而被低估。" }
      },
      {
        slug: "phd-to-academia",
        title:   { en: "AI PhDs return to academia", zh: "AI 博士回流學界" },
        summary: { en: "New AI PhDs rose 22% (2022–24); all the growth went to academia, not industry.",
                   zh: "新 AI 博士增加 22%(2022–24);所有成長流向學界,而非產業。" },
        tags: ["phd"],
        overview: { en: "The number of new AI PhDs in the United States and Canada increased 22% from 2022 to 2024, but the share entering industry stayed flat — meaning all of the growth went to academia. This reverses a decade-long trend of new AI PhDs flowing primarily into industry and challenges the popular 'brain drain' narrative about academia losing its experts. Industry still hires the majority: roughly 65% of AI PhD graduates went into industry in 2024, down from a 77% peak in 2022, while the academic share has nearly doubled since 2022. The share entering government roles has gradually risen to about 2%, up from a low of 0.7% in 2021.",
                    zh: "美國與加拿大的新 AI 博士數在 2022 到 2024 年間增加 22%,但進入產業的比例持平 — 意味著所有成長都流向學界。這扭轉了長達十年、新 AI 博士主要流向產業的趨勢,也挑戰了「學界正流失專家」這個流行的「人才外流」說法。產業仍聘用多數人:2024 年約 65% 的 AI 博士畢業生進入產業,低於 2022 年 77% 的高峰;而學界比例自 2022 年起幾乎翻倍。進入政府職位的比例則逐步升至約 2%,高於 2021 年 0.7% 的低點。" }
      },
      {
        slug: "students-use-ai",
        title:   { en: "Four in five students use AI", zh: "五分之四的學生使用 AI" },
        summary: { en: "80% of university students now use GenAI for study — double the 2023 share.",
                   zh: "80% 的大學生現在用生成式 AI 學習 — 是 2023 年的兩倍。" },
        tags: ["adoption"],
        overview: { en: "In Chegg's 2025 survey of university students across 15 countries, 80% said they had used generative AI to support their learning — double the 40% reported in 2023. Usage varies widely by country, from 95% in Indonesia to 67% in the U.S. and U.K. Likewise, four out of five U.S. high-school and college students now use AI for schoolwork. Students lean on AI for higher-order tasks: understanding a concept is the top use (56%), ahead of researching (52%), generating first drafts (46%), and editing essays (41%). Anthropic's analysis of Claude found students use it mostly for creating (39.8%) and analyzing (30.2%) rather than applying (10.9%) or understanding (10.0%) — raising the question of whether students are outsourcing cognitive skills rather than building them.",
                    zh: "在 Chegg 2025 年橫跨 15 國的大學生調查中,80% 表示曾用生成式 AI 協助學習 — 是 2023 年 40% 的兩倍。各國差異很大,從印尼的 95% 到美國與英國的 67%。同樣地,五分之四的美國高中與大學生現在用 AI 做課業。學生把 AI 用於高階任務:理解概念是最常見用途(56%),領先於查資料(52%)、生成初稿(46%)與修改文章(41%)。Anthropic 對 Claude 的分析發現,學生多半用於創造(39.8%)與分析(30.2%),而非應用(10.9%)或理解(10.0%)— 引出一個問題:學生是在外包認知技能,還是在培養它們?" }
      },
      {
        slug: "policy-gap",
        title:   { en: "The K–12 policy gap", zh: "K–12 政策缺口" },
        summary: { en: "Only half of schools have an AI policy, and just 6% of teachers call those policies clear.",
                   zh: "只有半數學校有 AI 政策,且只有 6% 的教師認為政策清楚。" },
        tags: ["policy"],
        overview: { en: "Student adoption has outrun governance. An estimated 50%–84% of middle- and high-school students use AI for school tasks, yet only about half of middle and high schools have an AI policy, and just 6% of teachers say those policies are clear. ECEP research found state-level AI guidance is largely nonbinding and decentralized: most states lean on existing federal laws (COPPA, FERPA) rather than AI-specific mandates, pushing tool vetting and implementation down to local education agencies whose capacity varies widely. As of January 2026, 30 states had issued guidance on AI in education, but of 45 states with K–12 CS standards, 29 include AI only minimally and 10 not at all. AP Computer Science still contains no AI-specific content, and there are no state-level standards or funding for AI teacher training — leaving gaps across policy, curriculum, and training simultaneously.",
                    zh: "學生採用已跑贏治理。估計 50%–84% 的國中與高中生用 AI 做課業,但只有約半數中學訂有 AI 政策,而只有 6% 的教師認為這些政策清楚。ECEP 研究發現,州級 AI 指引大多不具約束力且分散:多數州依賴既有聯邦法(COPPA、FERPA),而非 AI 專屬規範,把工具審核與落地責任下放給能力參差不齊的地方教育機構。截至 2026 年 1 月,30 個州已發布 AI 教育指引,但在 45 個有 K–12 資訊科學標準的州中,29 個只極小幅納入 AI、10 個完全沒有。AP 資訊科學仍不含 AI 專屬內容,且沒有州級的 AI 師資培訓標準或經費 — 讓政策、課程與培訓同時存在缺口。" }
      },
      {
        slug: "global-mandates",
        title:   { en: "China and the UAE mandate AI", zh: "中國與阿聯酋將 AI 列為必修" },
        summary: { en: "China and the UAE both mandated AI education from the 2025–26 school year.",
                   zh: "中國與阿聯酋都自 2025–26 學年起將 AI 教育列為必修。" },
        tags: ["global"],
        overview: { en: "More than 90% of countries now offer computer science to primary or secondary students, and about 93% taught CS in 2025 — but only 30% mandate it. AI education itself has been slower to take hold; in 2025, most countries integrated AI technology into teaching rather than teaching about AI. Two countries moved decisively. In China, Beijing, Guangdong, and Hangzhou began requiring AI education in the 2025–26 school year, following national guides released in May 2025, with minimum instructional hours and a grade-progressed curriculum running from AI literacy in elementary school to designing AI systems in high school. The United Arab Emirates similarly mandated AI education for all grade levels from 2025–26, covering foundational concepts, data and algorithms, software use, project design, and ethical awareness. By contrast, South Korea launched primary-school AI textbooks in March 2025 then reversed course after pushback, and Estonia's AI Leap 2025 is piloting AI tools with 20,000 students and 3,000 teachers.",
                    zh: "逾 90% 的國家現在對中小學生開設資訊科學,約 93% 在 2025 年教資訊科學 — 但只有 30% 列為必修。AI 教育本身則更慢扎根;2025 年多數國家把 AI 技術整合進教學,而非教授 AI 本身。兩個國家果斷邁進。在中國,北京、廣東與杭州自 2025–26 學年起要求 AI 教育,依循 2025 年 5 月發布的國家級指南,設有最低教學時數與逐年級進階的課程,從小學的 AI 素養一路到高中的 AI 系統設計。阿拉伯聯合大公國同樣自 2025–26 學年起將所有年級的 AI 教育列為必修,涵蓋基礎概念、資料與演算法、軟體使用、專案設計與倫理意識。相對地,南韓在 2025 年 3 月推出小學 AI 教科書,卻在反彈後撤回;而愛沙尼亞的 AI Leap 2025 正以 2 萬名學生與 3 千名教師試行 AI 工具。" }
      },
      {
        slug: "skills-outside",
        title:   { en: "Skills learned outside school", zh: "在校外習得的技能" },
        summary: { en: "AI literacy is outpacing engineering skills — except in the UAE, Chile, and South Africa.",
                   zh: "AI 素養正勝過工程技能 — 但阿聯酋、智利與南非例外。" },
        tags: ["skills"],
        overview: { en: "As AI reshapes jobs, people increasingly build AI skills through certificates, online courses, and on-the-job experience — pathways that can broaden access for learners without deep CS or math backgrounds. LinkedIn's relative AI skill-penetration rate puts India first at 3.0 (nearly 3× the global average), ahead of the U.S. (2.0) and Germany (1.8), with a persistent gender gap everywhere (in India, 3.1 for men vs. 1.9 for women). LinkedIn's new AI Skills Diffusion Index separates AI literacy from AI engineering and finds literacy growing faster than engineering in most countries, including India and the U.S. The exceptions are the United Arab Emirates, Chile, and South Africa, where engineering-oriented AI skills show steeper growth since 2022. In the U.S., the fastest-growing literacy skills were AI prompting and Microsoft Copilot Studio, while the fastest-growing engineering skills were AI agents, AI productivity, and AI strategy.",
                    zh: "當 AI 重塑各行各業,人們愈來愈透過證書、線上課程與在職經驗建立 AI 技能 — 這些途徑能為沒有深厚資訊科學或數學背景的學習者拓寬入口。LinkedIn 的相對 AI 技能滲透率把印度排第一,為 3.0(近全球平均的 3 倍),領先美國(2.0)與德國(1.8),且各地都有持續的性別落差(在印度,男性 3.1、女性 1.9)。LinkedIn 全新的 AI 技能擴散指數,把 AI 素養與 AI 工程分開,發現在多數國家(包括印度與美國)素養成長快過工程。例外是阿拉伯聯合大公國、智利與南非,當地以工程為導向的 AI 技能自 2022 年起成長更陡。在美國,成長最快的素養技能是 AI 提示與 Microsoft Copilot Studio,成長最快的工程技能則是 AI 代理、AI 生產力與 AI 策略。" }
      }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 7 · Education.",
                zh: "第 7 章「教育」的頭條發現。" },
    quotes: [
      { text: { en: "CS enrollment fell 11% at U.S. four-year universities between 2024 and 2025, even as AI-software master's graduates rose 17%.",
                zh: "資訊科學招生在 2024 到 2025 年間於美國四年制大學下降 11%,而同時 AI 軟體類碩士畢業生增加 17%。" },
        by: "Chapter 7 · Education" },
      { text: { en: "Four out of five U.S. high-school and college students now use AI for schoolwork, but school policies have not kept pace.",
                zh: "五分之四的美國高中與大學生現在用 AI 做課業,但學校政策沒有跟上。" },
        by: "Chapter 7 · Education" },
      { text: { en: "Only half of middle and high schools have AI policies, and just 6% of teachers say those policies are clear.",
                zh: "只有半數中學訂有 AI 政策,而只有 6% 的教師認為這些政策清楚。" },
        by: "Chapter 7 · Education" },
      { text: { en: "More than 90% of countries now offer computer science to students, and China and the UAE mandated AI education starting in 2025–26.",
                zh: "逾 90% 的國家現在對學生開設資訊科學,中國與阿聯酋自 2025–26 學年起將 AI 教育列為必修。" },
        by: "Chapter 7 · Education" },
      { text: { en: "New AI PhDs in the U.S. and Canada rose 22% from 2022 to 2024 — and all of that growth went to academia.",
                zh: "美加新 AI 博士在 2022 到 2024 年間增加 22% — 而所有成長都流向學界。" },
        by: "Chapter 7 · Education" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Education chapter", zh: "閱讀完整的教育章節" },
    text:  { en: "Chapter 7 (sections 7.1–7.4) with every figure and citation is free from Stanford HAI. Or head back to the 15 takeaways and nine-chapter overview.",
             zh: "第 7 章(7.1–7.4 各節)連同所有圖表與引用,皆由史丹佛 HAI 免費提供。或回到 15 條重點與九大章節總覽。" },
    link:  { label: { en: "Open Chapter 7 · Education →", zh: "前往第 7 章:教育 →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/education" }
  }
];

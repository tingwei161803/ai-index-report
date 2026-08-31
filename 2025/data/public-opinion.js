/* =========================================================================
   Public Opinion — deep dive · public-opinion.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2025, Chapter 8
   https://hai.stanford.edu/ai-index/2025-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 8: 8.1 Public Opinion (global sentiment on AI
   products and services, AI and jobs, AI and livelihood, self-driving cars)
   and 8.2 US Policymaker Opinion. Text and analysis by Emily Capstick; data
   from Ipsos, AAA, and Hatz et al. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "public-opinion";

window.SITE_META = {
  title:    { en: "AI Index Report 2025", zh: "AI 指數報告 2025" },
  subtitle: { en: "Public Opinion · a chapter deep dive", zh: "民意專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "Warmer on AI. Colder on the companies building it.",
                zh: "對 AI 變熱情，對做 AI 的公司變冷淡" },
    subtitle: { en: "Chapter 8 of the AI Index 2025 draws on Ipsos surveys of 23,685 adults across 32 countries, AAA's annual self-driving survey, and the first comprehensive study of local US policymakers' views. The headline is a split: optimism about the technology is rising, trust in the institutions delivering it is falling. The numbers:",
                zh: "AI 指數 2025 第 8 章取材自 Ipsos 對 32 國、23,685 位成年人的調查、AAA 的年度自駕車調查，以及首份針對美國地方決策者觀點的完整研究。核心發現是一道分裂：對這項技術的樂觀在上升，對交付它的機構的信任卻在下降。先看數字：" },
    stats: [
      { label: { en: "% who say AI products and services have more benefits than drawbacks (52% in 2022)", zh: "% 認為 AI 產品與服務利大於弊的人(2022 年為 52%)" }, value: 55 },
      { label: { en: "% who expect AI to profoundly change their daily life within 3–5 years (60% in 2022)", zh: "% 預期 AI 將在 3 到 5 年內深刻改變日常生活的人(2022 年為 60%)" }, value: 66 },
      { label: { en: "% who trust companies using AI to protect their personal data (50% in 2023)", zh: "% 信任使用 AI 的公司會保護個資的人(2023 年為 50%)" }, value: 47 },
      { label: { en: "% who expect AI to change how they do their job within five years", zh: "% 預期 AI 將在五年內改變自己工作方式的人" }, value: 60 },
      { label: { en: "% of Americans afraid of self-driving cars (only 13% trust them)", zh: "% 害怕自駕車的美國人(只有 13% 信任它們)" }, value: 61 },
      { label: { en: "% of local US policymakers who agreed in 2023 that AI should be regulated (55.7% in 2022)", zh: "% 2023 年同意 AI 應受監管的美國地方決策者(2022 年為 55.7%)" }, value: 73.7 }
    ]
  },

  /* --------------------------------------------------- 8.1 GLOBAL SENTIMENT */
  {
    type: "prose",
    id: "global-sentiment",
    title:    { en: "8.1 — The world warmed up, and got more nervous at the same time",
                zh: "8.1 — 世界變熱情了，同時也更緊張了" },
    subtitle: { en: "Ipsos ran the same questions in 2022, 2023, and 2024. Awareness plateaued, optimism edged up, and every question about trust moved the wrong way.",
                zh: "Ipsos 在 2022、2023 與 2024 年問了同一組問題。認知度停滯、樂觀度微幅上升，而每一個關於信任的問題都往錯的方向走。" },
    blocks: [
      { type: "p",
        text: { en: "In 2024, 67% of respondents said they had a good understanding of what AI is — the same as 2023, up from 64% in 2022. But only 52% said they know which products and services actually use AI, a number that has barely moved in three years. The share who see AI products and services as more beneficial than harmful rose from 52% in 2022 to 54% in 2023 to 55% in 2024. Modest gains, spread very unevenly.",
                zh: "2024 年，67% 的受訪者說自己對 AI 是什麼有不錯的理解 — 跟 2023 年相同，高於 2022 年的 64%。但只有 52% 說得出哪些產品與服務實際上用了 AI，這個數字三年來幾乎沒動。認為 AI 產品與服務利大於弊的比例，從 2022 年的 52% 升到 2023 年的 54%、2024 年的 55%。微幅的成長，而且分布極不平均。" } },
      { type: "p",
        text: { en: "The most revealing pair of numbers sits inside that survey. Asked whether AI products and services have profoundly changed their daily life over the past three to five years, 50% agreed — a figure that has moved one point since 2022. Asked whether AI will profoundly change their daily life over the next three to five years, 66% agreed, up from 60% in 2022. The public consistently reports that the transformation has not happened to them yet and is about to. That gap has widened, not closed, across three years of surveys.",
                zh: "整份調查裡最能說明問題的，是一組成對的數字。問到 AI 產品與服務是否已在過去三到五年深刻改變自己的日常生活，50% 的人同意 — 這個數字自 2022 年以來只移動了一個百分點。問到 AI 是否將在未來三到五年深刻改變日常生活，66% 同意，高於 2022 年的 60%。大眾一貫的回答是：這場轉變還沒發生在我身上，但快了。而這道落差在三年的調查中是拉大，不是縮小。" } },
      { type: "h3",
        text: { en: "Trust fell on every measure that has one", zh: "每一個可測的信任指標都掉了" } },
      { type: "ul",
        items: {
          en: ["Trust that companies using AI will protect personal data fell from 50% in 2023 to 47% in 2024 — a three-point drop.",
               "Trust that AI will not discriminate or show bias toward any group fell from 56% to 54%. Notably, respondents trust AI on this more than they trust people: only 45% said they trust people not to discriminate.",
               "Across all questions the average positive response fell 0.6% year over year, driven almost entirely by those two trust measures.",
               "The share saying AI products and services make them nervous stands at 50%, down slightly from 52% in 2023 but up sharply from 39% in 2022."],
          zh: ["信任使用 AI 的公司會保護個資的比例，從 2023 年的 50% 降到 2024 年的 47% — 掉了三個百分點。",
               "信任 AI 不會歧視或對特定群體展現偏見的比例，從 56% 降到 54%。值得注意的是，受訪者在這件事上更信任 AI 而非人類：只有 45% 說他們信任人不會歧視。",
               "所有問題的正面回應平均年減 0.6%，而幾乎全部來自那兩個信任指標。",
               "說 AI 產品與服務讓自己緊張的比例是 50%，略低於 2023 年的 52%，但遠高於 2022 年的 39%。"]
        } },
      { type: "h3",
        text: { en: "Where you live still decides how you feel", zh: "住在哪裡，仍然決定了你的感受" } },
      { type: "p",
        text: { en: "The regional split first reported in the 2023 AI Index has not closed. In Asia and Latin America a large majority sees AI as net beneficial: 83% in China, 80% in Indonesia, 77% in Thailand, 70% in Mexico, 62% in India. In Europe and the Anglosphere only a minority agrees: 46% in Great Britain, 44% in Australia, 40% in Canada, 39% in the United States, 36% in the Netherlands. China leads on nearly every positive measure — 81% know which products use AI, 80% are excited by them, 76% trust AI not to discriminate, and 86% expect AI to profoundly change their daily life in the next three to five years. The equivalent American figures are 58% expecting profound change and 34% reporting excitement.",
                zh: "2023 年 AI 指數首度提出的區域分裂並沒有收窄。在亞洲與拉丁美洲，絕大多數人認為 AI 淨效益為正：中國 83%、印尼 80%、泰國 77%、墨西哥 70%、印度 62%。在歐洲與英語圈，只有少數人同意：英國 46%、澳洲 44%、加拿大 40%、美國 39%、荷蘭 36%。中國在幾乎每一項正面指標上都領先 — 81% 知道哪些產品用了 AI、80% 對它們感到興奮、76% 信任 AI 不會歧視，86% 預期 AI 會在未來三到五年深刻改變日常生活。美國的對應數字是 58% 預期會有深刻改變、34% 表示興奮。" } },
      { type: "h3",
        text: { en: "The skeptics moved the most", zh: "最懷疑的人動得最多" } },
      { type: "p",
        text: { en: "Among the 26 nations surveyed in both 2022 and 2024, 18 saw an increase in the share believing AI offers more benefits than drawbacks — and the biggest gains came from the countries that started lowest. In 2022 the least optimistic were France (31%), Canada (32%), the United States (35%), Germany (37%), Australia (37%), and Great Britain (38%). By 2024 optimism had grown in France by 10 points, Germany by 10, Great Britain by 8, Canada by 8, and the United States by 4. Belief that AI will profoundly change daily life rose 6 points globally, with every country except India, Malaysia, and Poland increasing — the largest jumps in Canada (17 points) and Germany (15).",
                zh: "在 2022 與 2024 年都受訪的 26 國中，有 18 國認為 AI 利大於弊的比例上升 — 而增幅最大的，正是起點最低的那些國家。2022 年最不樂觀的是法國(31%)、加拿大(32%)、美國(35%)、德國(37%)、澳洲(37%)與英國(38%)。到 2024 年，法國的樂觀度增加 10 個百分點、德國 10、英國 8、加拿大 8、美國 4。認為 AI 將深刻改變日常生活的比例在全球升高 6 個百分點，除了印度、馬來西亞與波蘭以外，每一國都上升 — 增幅最大的是加拿大(17 個百分點)與德國(15)。" } },
      { type: "p",
        text: { en: "Two countries moved backward. Brazil and Malaysia saw the sharpest average declines in awareness, trust, and excitement, both led by falling trust that AI companies will protect personal data. South Africa and Ireland moved the other way; Ireland's gain appears driven by lived experience, since it reported the largest increase of any country in respondents saying their daily lives have been profoundly changed by AI products and services. Anxiety maps onto the same geography: the UK, US, Canada, Australia, and New Zealand report the highest nervousness and lowest excitement, while China, South Korea, and Indonesia report the reverse — with Japan the standing exception among Asian countries.",
                zh: "有兩個國家往回走。巴西與馬來西亞在認知度、信任與興奮度上的平均降幅最大，兩者都由「信任 AI 公司會保護個資」的下滑帶動。南非與愛爾蘭則走向相反；愛爾蘭的成長看來來自實際經驗，因為它是所有國家中「日常生活已被 AI 產品與服務深刻改變」增幅最高的一國。焦慮的分布跟這張地圖重疊：英國、美國、加拿大、澳洲與紐西蘭的緊張度最高、興奮度最低，而中國、南韓與印尼恰恰相反 — 日本則是亞洲國家中一貫的例外。" } }
    ]
  },

  /* ---------------------------------------------------- OPTIMISM BY COUNTRY */
  {
    type: "bars",
    id: "optimism",
    title:    { en: "Do AI products and services have more benefits than drawbacks?",
                zh: "AI 產品與服務是利大於弊嗎？" },
    subtitle: { en: "% of respondents who agree, 2024. The 47-point spread between China and the Netherlands is the single widest gap in the chapter — and it has barely narrowed since the 2023 AI Index first reported it.",
                zh: "同意的受訪者比例，2024 年。中國與荷蘭之間 47 個百分點的差距，是全章最大的一道落差 — 而且自 2023 年 AI 指數首度提出以來幾乎沒有縮小。" },
    series: [
      { label: { en: "China", zh: "中國" },        value: 83 },
      { label: { en: "Indonesia", zh: "印尼" },     value: 80 },
      { label: { en: "Mexico", zh: "墨西哥" },      value: 70 },
      { label: { en: "Canada", zh: "加拿大" },      value: 40 },
      { label: { en: "United States", zh: "美國" }, value: 39 },
      { label: { en: "Netherlands", zh: "荷蘭" },   value: 36 }
    ]
  },

  /* ------------------------------------------------- JOBS AND LIVELIHOOD */
  {
    type: "prose",
    id: "jobs-and-life",
    title:    { en: "People expect AI to change their work, not take it",
                zh: "人們預期 AI 會改變工作，而不是奪走工作" },
    subtitle: { en: "60% think AI will change how they do their job in the next five years. 36% think it will replace their job. The gap between those two numbers is the shape of public expectation right now.",
                zh: "60% 的人認為 AI 會在未來五年改變自己的工作方式。36% 認為它會取代自己的工作。這兩個數字之間的落差，就是此刻民意的形狀。" },
    blocks: [
      { type: "p",
        text: { en: "Broken out, 21% think it very likely and 39% somewhat likely that AI will change how they work; for job replacement the figures are 11% very likely and 25% somewhat likely, with 56% saying it is not very or not at all likely. Compared against 2023 — when 57% expected their work to change and 36% expected replacement — sentiment is essentially flat. The fear of being replaced did not grow at all in a year when the technology visibly did.",
                zh: "拆開來看，認為 AI 改變自己工作方式「非常可能」的有 21%、「有點可能」39%；至於被取代，「非常可能」11%、「有點可能」25%，而有 56% 說不太可能或完全不可能。跟 2023 年相比 — 當時 57% 預期工作會改變、36% 預期被取代 — 情緒基本上持平。在技術明顯進步的一年裡，被取代的恐懼一點也沒有增加。" } },
      { type: "p",
        text: { en: "Year-over-year comparison on this question needs a caveat: the 2023 survey did not separate 'very likely' from 'somewhat likely,' so the 2024 categories have to be aggregated to compare. Done that way, the picture is stable rather than escalating. What the breakdown does show is how soft the majority is — most of the 60% who expect their work to change sit in the 'somewhat likely' band, and on replacement the largest single response is 'not very likely' at 33%, with another 23% saying not at all likely.",
                zh: "這一題的年度比較需要一個但書：2023 年的調查沒有把「非常可能」與「有點可能」分開，所以要比較就得把 2024 年的類別合併。這樣算下來，情況是穩定，而不是升溫。而拆解真正顯示的，是這個多數有多鬆軟 — 預期工作會改變的那 60% 裡，多數落在「有點可能」這一格；至於被取代，佔比最高的單一回答是「不太可能」的 33%，另外還有 23% 說完全不可能。" } },
      { type: "h3",
        text: { en: "Every generation moved, none flipped", zh: "每一個世代都動了，但沒有一個翻盤" } },
      { type: "p",
        text: { en: "Gen Z remains most convinced their work will change (67% in 2024, up from 66%), followed by millennials (64%, up from 61%), Gen X (55%, up from 53%), and baby boomers (49%, up from 46%). The 18-point spread between Gen Z and boomers is large, but the direction is uniform: every generation is more convinced than it was a year ago, and the largest single-year gains came from millennials and boomers — a sign of awareness spreading across, rather than concentrating in, age cohorts.",
                zh: "Z 世代仍是最確信自己工作會改變的一群(2024 年 67%，前一年 66%)，接著是千禧世代(64%，前一年 61%)、X 世代(55%，前一年 53%)與嬰兒潮世代(49%，前一年 46%)。Z 世代與嬰兒潮之間 18 個百分點的差距很大，但方向是一致的：每個世代都比一年前更確信，而單年增幅最大的是千禧世代與嬰兒潮世代 — 這個訊號顯示認知正在跨世代擴散，而不是集中在某個年齡層。" } },
      { type: "h3",
        text: { en: "Convenience yes, prosperity no", zh: "便利可以，繁榮不行" } },
      { type: "ul",
        items: {
          en: ["55% believe AI will reduce the time it takes to get things done, and 51% expect better entertainment options. Those are the only two majorities in the whole set.",
               "Confidence drops on everything that touches livelihood: 38% think AI will improve health, 37% their own job, 36% their national economy, and just 31% the job market.",
               "The economic split is regional again. 72% in China and 54% in Indonesia expect AI to improve their economy; fewer than 25% do in the Netherlands, the United States, Belgium, Sweden, and Canada.",
               "On health, Mexico is the most optimistic at 56% against a global average of 38%; Japan is the least, at 19%.",
               "The answers correlate tightly. Countries expecting AI to help the job market also expect it to help their own jobs — Poland at 17% and 21% respectively, China at 44% and 62%. Countries that expect AI to save them time expect it to improve their individual jobs too."],
          zh: ["55% 相信 AI 會縮短做完事情所需的時間，51% 期待更好的娛樂選項。這是整組問題中僅有的兩個過半數。",
               "只要碰到生計，信心就掉下來：38% 認為 AI 會改善健康、37% 認為會改善自己的工作、36% 認為會改善本國經濟，而只有 31% 看好就業市場。",
               "經濟上的分歧又是區域性的。中國有 72%、印尼有 54% 預期 AI 會改善本國經濟；而荷蘭、美國、比利時、瑞典與加拿大都不到 25%。",
               "健康方面，墨西哥最樂觀，達 56%，全球平均為 38%；日本最低，只有 19%。",
               "各題的答案高度相關。預期 AI 有助於就業市場的國家，也預期它有助於自己的工作 — 波蘭分別是 17% 與 21%，中國是 44% 與 62%。預期 AI 會替自己省時間的國家，同樣預期它會改善自己的工作。"]
        } }
    ]
  },

  /* ------------------------------------------------ SELF-DRIVING CARS CHART */
  {
    type: "bars",
    id: "self-driving",
    title:    { en: "% of US drivers afraid of self-driving vehicles",
                zh: "% 害怕自駕車的美國駕駛" },
    subtitle: { en: "AAA's annual survey, most recently conducted in January 2025 and designed to represent about 97% of US households. Fear spiked in 2023 and has eased since, but it remains above its 2021 level. Trust tells the same story from the other side: 14% in 2021, 15% in 2022, then a collapse to 9% in 2023 and 2024, recovering only to 13% in 2025 — after years of visible Waymo and Zoox deployment.",
                zh: "AAA 的年度調查，最新一次於 2025 年 1 月進行，設計上代表約 97% 的美國家戶。恐懼在 2023 年飆高後已經回落，但仍高於 2021 年的水準。信任度從另一端說著同一個故事：2021 年 14%、2022 年 15%，接著在 2023 與 2024 年崩到 9%，2025 年也只回到 13% — 而這幾年 Waymo 與 Zoox 的實際上路是看得見的。" },
    series: [
      { label: { en: "2021", zh: "2021" }, value: 54 },
      { label: { en: "2022", zh: "2022" }, value: 55 },
      { label: { en: "2023", zh: "2023" }, value: 68 },
      { label: { en: "2024", zh: "2024" }, value: 66 },
      { label: { en: "2025", zh: "2025" }, value: 61 }
    ]
  },

  /* -------------------------------------------- 8.2 US POLICYMAKER OPINION */
  {
    type: "prose",
    id: "policymakers",
    title:    { en: "8.2 — Local officials want regulation and feel unqualified to write it",
                zh: "8.2 — 地方官員想要監管，卻覺得自己沒資格來寫" },
    subtitle: { en: "Researchers from Uppsala, Oxford, Harvard, and Syracuse surveyed roughly 1,000 township, municipal, and county policymakers in two waves — 2022 and 2023 — bracketing the launch of ChatGPT.",
                zh: "來自烏普薩拉、牛津、哈佛與雪城大學的研究者，分兩波調查了約 1,000 位鄉鎮、市與郡層級的決策者 — 2022 與 2023 各一波 — 正好夾住 ChatGPT 的問世。" },
    blocks: [
      { type: "p",
        text: { en: "Support for government regulation of AI jumped from 55.7% in 2022 to 73.7% in 2023. The partisan gap is real but the movement is bipartisan: Democratic support went from 74.6% to 84.4%, Republican support from 42.7% to 67.9% — a 25-point swing, the largest single shift in the study. Across both waves combined, 79.2% of Democrats and 55.5% of Republicans agreed AI should be regulated.",
                zh: "支持政府監管 AI 的比例從 2022 年的 55.7% 跳到 2023 年的 73.7%。黨派差距確實存在，但變化是跨黨派的：民主黨籍的支持度從 74.6% 升到 84.4%，共和黨籍從 42.7% 升到 67.9% — 25 個百分點的擺盪，是整份研究中最大的單一變化。兩波合計，79.2% 的民主黨籍與 55.5% 的共和黨籍決策者同意 AI 應該受到監管。" } },
      { type: "p",
        text: { en: "The two-wave design is what makes this study useful. Wave one ran in 2022, before ChatGPT; wave two in 2023, after. Because the same population was asked the same questions on either side of that release, the study isolates what a single consumer product did to the regulatory instincts of officials who had mostly never thought about AI. The answer is 18 percentage points of movement on whether it should be regulated at all, concentrated among the group that started most opposed.",
                zh: "這份研究之所以有用，關鍵在兩波設計。第一波在 2022 年、ChatGPT 之前；第二波在 2023 年、之後。因為是同一群人在那次發布的前後被問同樣的問題，這份研究能單獨切出：一個消費性產品，對一群原本幾乎沒想過 AI 的官員，在監管直覺上造成了什麼。答案是「該不該監管」這件事整整移動了 18 個百分點，而且集中在原本最反對的那一群。" } },
      { type: "h3",
        text: { en: "Regulate, retrain — but do not redistribute", zh: "監管、再訓練 — 但不要重分配" } },
      { type: "p",
        text: { en: "Asked which specific policies would be beneficial for 2025 to 2050, local officials converged on rules and training and split sharply on money. Stricter data privacy regulation drew 80.4% support, retraining programs for the unemployed 76.2%, and AI deployment regulations 72.5%. Below that the coalition thins: stronger antitrust 57.7%, parole and sentencing AI regulations 54.7%, bias audits for hiring and promotion AI 51.7%, a stronger social safety net 46.4%, semiconductor and AI hardware subsidies 44.4%, a robot tax 42.4%, immigration reform for AI developers 39.1%. At the bottom sit a law enforcement facial recognition ban (34.2%), wage subsidies to offset wage declines (33.9%), and universal basic income — supported by 24.6% and opposed outright by 58.3%.",
                zh: "問到 2025 至 2050 年間哪些具體政策有益，地方官員在規則與訓練上有共識，在錢的問題上則嚴重分裂。更嚴格的資料隱私規範獲得 80.4% 支持、失業者再訓練方案 76.2%、AI 部署規範 72.5%。再往下，聯盟就變薄了：強化反壟斷 57.7%、假釋與量刑 AI 規範 54.7%、招聘與升遷 AI 的偏誤稽核 51.7%、強化社會安全網 46.4%、半導體與 AI 硬體補貼 44.4%、機器人稅 42.4%、AI 開發者的移民改革 39.1%。墊底的是禁止執法機關使用臉部辨識(34.2%)、彌補薪資下滑的工資補貼(33.9%)，以及無條件基本收入 — 支持率 24.6%，而 58.3% 明確反對。" } },
      { type: "h3",
        text: { en: "Nobody thinks it is their problem yet", zh: "沒有人覺得這已經是自己的問題" } },
      { type: "ul",
        items: {
          en: ["Only 34.3% of local officials believe they will need to make AI policy decisions within the next few years; 56.5% think they will not. The share expecting to act rose from 32.2% in 2022 to 36.6% in 2023, with Democrats in 2023 highest at 40.5%.",
               "Only 29.8% feel adequately informed to make AI policy decisions, against 52.3% who do not. Confidence rose only marginally between waves, from 28.5% to 31.3%.",
               "The combination is the finding: strong and rising demand for AI regulation, a clear list of preferred policies, near-consensus that action is not imminent, and a majority who do not feel equipped to decide. Republicans are slightly more likely than Democrats to feel informed (31.5% vs. 26.8%) while being far less likely to want regulation."],
          zh: ["只有 34.3% 的地方官員認為自己在未來幾年內需要做 AI 政策決定；56.5% 認為不需要。預期要採取行動的比例從 2022 年的 32.2% 升到 2023 年的 36.6%，其中 2023 年的民主黨籍最高，達 40.5%。",
               "只有 29.8% 覺得自己有足夠資訊做 AI 政策決定，52.3% 覺得沒有。兩波之間信心只增加了一點，從 28.5% 到 31.3%。",
               "這個組合本身就是發現：對 AI 監管的需求強烈且上升、偏好的政策清單清楚、幾乎一致認為行動時機還沒到，而多數人不覺得自己有能力決定。共和黨籍略比民主黨籍更覺得自己資訊足夠(31.5% 對 26.8%)，但想要監管的意願低得多。"]
        } }
    ]
  },

  /* ------------------------------------------------- POLICY SUPPORT CHART */
  {
    type: "bars",
    id: "policy-support",
    title:    { en: "What local US policymakers actually support",
                zh: "美國地方決策者實際支持什麼" },
    subtitle: { en: "% agreeing each policy would be beneficial for 2025–50. Rules and retraining clear 70%; every redistributive measure falls below 35%.",
                zh: "認為各項政策對 2025–50 有益的比例。規則與再訓練都過 70%；每一項重分配措施都掉到 35% 以下。" },
    series: [
      { label: { en: "Data privacy", zh: "資料隱私" },       value: 80.4 },
      { label: { en: "Retraining", zh: "再訓練" },           value: 76.2 },
      { label: { en: "Deployment rules", zh: "部署規範" },   value: 72.5 },
      { label: { en: "Antitrust", zh: "反壟斷" },            value: 57.7 },
      { label: { en: "Face-rec ban", zh: "禁臉部辨識" },     value: 34.2 },
      { label: { en: "Basic income", zh: "基本收入" },       value: 24.6 }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 8 · Public Opinion.",
                zh: "第 8 章「民意」的頭條發現。" },
    quotes: [
      { text: { en: "The share of people worldwide who see AI products and services as more beneficial than harmful rose from 52% in 2022 to 55% in 2024.",
                zh: "全球認為 AI 產品與服務利大於弊的比例，從 2022 年的 52% 升到 2024 年的 55%。" },
        by: "Chapter 8 · Public Opinion" },
      { text: { en: "83% in China say AI has more benefits than drawbacks. In the Netherlands it is 36%, in the United States 39%.",
                zh: "中國有 83% 的人認為 AI 利大於弊。荷蘭是 36%，美國是 39%。" },
        by: "Chapter 8 · Public Opinion" },
      { text: { en: "Confidence that AI companies protect personal data fell from 50% in 2023 to 47% in 2024 — and only 45% say they trust people not to discriminate, against 54% who trust AI.",
                zh: "相信 AI 公司會保護個資的比例，從 2023 年的 50% 降到 2024 年的 47% — 而只有 45% 說自己信任人不會歧視，信任 AI 的則有 54%。" },
        by: "Chapter 8 · Public Opinion" },
      { text: { en: "60% of people expect AI to change how they do their job in the next five years. Only 36% expect it to replace their job.",
                zh: "60% 的人預期 AI 會在未來五年改變自己的工作方式。只有 36% 預期它會取代自己的工作。" },
        by: "Chapter 8 · Public Opinion" },
      { text: { en: "73.7% of local US policymakers agreed in 2023 that AI should be regulated, up from 55.7% in 2022 — yet only 29.8% feel adequately informed to make AI policy decisions.",
                zh: "2023 年有 73.7% 的美國地方決策者同意 AI 應受監管，高於 2022 年的 55.7% — 但只有 29.8% 覺得自己有足夠資訊做 AI 政策決定。" },
        by: "Chapter 8 · Public Opinion" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Public Opinion chapter", zh: "閱讀完整的民意章節" },
    text:  { en: "Chapter 8 (sections 8.1–8.2) with every figure and citation is free from Stanford HAI. Or head back to the report highlights and eight-chapter overview.",
             zh: "第 8 章(8.1–8.2 各節)連同所有圖表與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與八大章節總覽。" },
    link:  { label: { en: "Open the AI Index Report 2025 →", zh: "前往 AI 指數報告 2025 →" },
             url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" }
  }
];

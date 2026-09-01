/* =========================================================================
   Public Opinion — deep dive · public-opinion.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2024, Chapter 9
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   The 2024 edition (7th) reports on calendar year 2023. Every figure here is
   drawn from Chapter 9: 9.1 Survey Data (Ipsos global attitudes, GPO-AI's
   ChatGPT and concerns questions from the University of Toronto, and Pew's
   US tracking) and 9.2 Social Media Data (Quid's read of AI conversation).
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "public-opinion";

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Public Opinion · a chapter deep dive", zh: "民意專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The year the world noticed AI — and started worrying about it",
                zh: "世界看見 AI 的那一年 — 也開始為它擔心" },
    subtitle: { en: "Chapter 9 of the AI Index 2024 reads public opinion in 2023 through four instruments: Ipsos's 31-country survey of 22,816 adults, the University of Toronto's 21-country GPO-AI study, Pew's 11,000-response US survey, and Quid's analysis of over 7 million social media posts. They disagree about very little. Awareness rose everywhere, and anxiety rose faster. The numbers:",
                zh: "AI 指數 2024 第 9 章用四套工具讀 2023 年的民意：Ipsos 涵蓋 31 國、22,816 位成年人的調查、多倫多大學 21 國的 GPO-AI 研究、Pew 收到 11,000 份回覆的美國調查，以及 Quid 對超過 700 萬則社群貼文的分析。四份資料幾乎沒有分歧：認知度到處都在上升，而不安上升得更快。先看數字：" },
    stats: [
      { label: { en: "% who expect AI to profoundly change their daily life within 3–5 years (60% in 2022)", zh: "% 預期 AI 會在 3 到 5 年內深刻改變日常生活的人(2022 年為 60%)" }, value: 66 },
      { label: { en: "% who say AI products and services have more benefits than drawbacks (52% in 2022)", zh: "% 認為 AI 產品與服務利大於弊的人(2022 年為 52%)" }, value: 54 },
      { label: { en: "percentage-point rise since 2022 in those who say AI makes them nervous (39% → 52%)", zh: "說 AI 讓自己緊張的比例自 2022 年上升的百分點(39% → 52%)" }, value: 13 },
      { label: { en: "% of Americans more concerned than excited about AI (37% in 2021, 38% in 2022)", zh: "% 對 AI 擔憂多於興奮的美國人(2021 年 37%、2022 年 38%)" }, value: 52 },
      { label: { en: "% who think AI will improve the job market — lowest of six livelihood questions", zh: "% 認為 AI 會改善就業市場的人 — 六個生計問題中最低的一項" }, value: 32 },
      { label: { en: "% worldwide aware of ChatGPT; about half of them use it weekly or more", zh: "% 全球知道 ChatGPT 的人；其中約半數每週使用一次以上" }, value: 63 }
    ]
  },

  /* ------------------------------------------------- 9.1 GLOBAL SENTIMENT */
  {
    type: "prose",
    id: "global-mood",
    nav:      { en: "9.1 Global mood", zh: "9.1 全球情緒" },
    title:    { en: "9.1 — Awareness went up. Nervousness went up more than twice as fast.",
                zh: "9.1 — 認知度上升了，而緊張感上升得快一倍以上" },
    subtitle: { en: "Ipsos interviewed 22,816 adults aged 16 to 74 across 31 countries in May and June 2023 — the first full survey year after ChatGPT. Almost every reading moved up. The one that moved most was fear.",
                zh: "Ipsos 於 2023 年 5 至 6 月訪問了 31 國、22,816 位 16 至 74 歲的成年人 — 這是 ChatGPT 問世後第一個完整的調查年度。幾乎每個指標都往上走，而漲得最兇的是恐懼。" },
    blocks: [
      { type: "p",
        text: { en: "In 2023, 67% of respondents said they had a good understanding of what AI is, up from 64% a year earlier. 66% expected AI products and services to profoundly change their daily life in the next three to five years, up from 60%. 54% said those products have more benefits than drawbacks, up from 52%. And 52% said AI products and services make them nervous — up from 39%. That 13-point jump is more than twice the size of any other movement in the survey.",
                zh: "2023 年有 67% 的受訪者說自己對 AI 是什麼有不錯的理解，前一年是 64%。66% 預期 AI 產品與服務會在未來三到五年深刻改變自己的日常生活，前一年是 60%。54% 認為這些產品利大於弊，前一年是 52%。而 52% 說 AI 產品與服務讓自己緊張 — 從 39% 跳上來。13 個百分點的漲幅，是整份調查中其他任何變化的兩倍以上。" } },
      { type: "p",
        text: { en: "The most revealing pair of numbers is the one about time. 49% said AI products and services have already profoundly changed their daily life over the past three to five years — exactly the figure recorded in 2022 — against the 66% who expect that change in the next three to five. Nothing changed in the answer about the past; everything changed in the answer about the future. Only 51% say they know which products and services actually use AI, one point up on the year. Trust sat flat: 52% trust companies that use AI as much as they trust other companies (50% in 2022), 56% trust AI not to discriminate or show bias toward any group, and 50% trust that companies using AI will protect their personal data.",
                zh: "最能說明問題的，是一組關於時間的數字。49% 說 AI 產品與服務在過去三到五年已經深刻改變自己的日常生活 — 跟 2022 年一模一樣 — 而預期它會在未來三到五年這麼做的人有 66%。關於過去的答案完全沒動，關於未來的答案全動了。只有 51% 說得出哪些產品與服務真的用了 AI，一年只多一個百分點。信任面則是持平：52% 對使用 AI 的公司與其他公司一樣信任(2022 年為 50%)，56% 信任 AI 不會歧視或對特定群體展現偏見，50% 相信使用 AI 的公司會保護自己的個資。" } },
      { type: "h3",
        text: { en: "Nervousness rose in every single country", zh: "每一個國家的緊張感都上升了" } },
      { type: "p",
        text: { en: "Of the 24 countries surveyed in both 2022 and 2023, every one reported an increase in the share saying AI products make them nervous — not one exception. The sharpest rises were Italy (24 points), France (19), Chile (18) and Australia (18); the mildest were South Africa (1), Japan (3) and Spain (3). Belief that AI will significantly change daily life within three to five years rose almost as broadly, with South Africa the only country to fall (down 2 points) and gains of 12 points each in Japan, Great Britain, Germany and Australia.",
                zh: "在 2022 與 2023 年都受訪的 24 國中，每一國說 AI 產品讓自己緊張的比例都上升了 — 沒有任何例外。漲幅最大的是義大利(24 個百分點)、法國(19)、智利(18)與澳洲(18)；最溫和的是南非(1)、日本(3)與西班牙(3)。認為 AI 會在三到五年內顯著改變日常生活的比例也幾乎全面上升，南非是唯一下滑的國家(掉 2 個百分點)，而日本、英國、德國與澳洲各增加 12 個百分點，並列最高。" } },
      { type: "h3",
        text: { en: "Where sentiment was lowest, it improved the most", zh: "情緒最低的地方，改善得最多" } },
      { type: "p",
        text: { en: "In 2022 a cluster of developed Western nations — Germany, the Netherlands, Australia, Belgium, Canada and the United States — sat among the least positive about AI products and services. By 2023 every one of them had risen, and the Netherlands moved furthest: 43% of Dutch respondents saw AI as net beneficial, up from 33% a year earlier. Japan matched that 10-point gain to reach 52%. The direction was not universal, though. Chile fell 4 points, Peru and Spain 3 each, and Hungary, Poland and Sweden 1 each.",
                zh: "2022 年，一群已開發西方國家 — 德國、荷蘭、澳洲、比利時、加拿大與美國 — 對 AI 產品與服務的評價落在最低的一群。到 2023 年，它們每一國都上升了，其中荷蘭走得最遠：43% 的荷蘭受訪者認為 AI 淨效益為正，前一年只有 33%。日本同樣增加 10 個百分點，來到 52%。但方向並非一面倒：智利掉了 4 個百分點，秘魯與西班牙各掉 3，匈牙利、波蘭與瑞典各掉 1。" } },
      { type: "h3",
        text: { en: "Two countries mark the ends of the range", zh: "有兩個國家標出了光譜的兩端" } },
      { type: "p",
        text: { en: "Indonesia is the outlier at the optimistic end: 84% claim a solid understanding of AI, 79% expect it to significantly change their lives within three to five years, 78% see more benefits than drawbacks, and 75% say AI products make them excited. Japan is the outlier in the other direction and in an unexpected way — it reports the lowest understanding of AI of any country surveyed (43%) and, at the same time, by far the lowest nervousness (23%), against 63% in the United States. Thai respondents showed the highest trust in AI's impartiality, with 83% believing it will not discriminate or show bias toward any group. Among the 31 countries, the United States and France were the most skeptical about AI's benefits, both at 37%.",
                zh: "樂觀那一端的異數是印尼：84% 說自己對 AI 有紮實的理解、79% 預期它會在三到五年內顯著改變自己的生活、78% 認為利大於弊、75% 說 AI 產品讓自己興奮。另一端的異數是日本，而且方式出人意料 — 它是所有受訪國中對 AI 理解度最低的(43%)，同時緊張度也遠低於其他國家(23%)，對照美國是 63%。泰國受訪者對 AI 公正性的信任最高，83% 相信它不會歧視或對特定群體展現偏見。在 31 國之中，對 AI 好處最懷疑的是美國與法國，雙雙落在 37%。" } }
    ]
  },

  /* -------------------------------------------------- OPTIMISM BY COUNTRY */
  {
    type: "bars",
    id: "optimism",
    nav:      { en: "Optimism", zh: "樂觀程度" },
    title:    { en: "Do AI products and services have more benefits than drawbacks?",
                zh: "AI 產品與服務是利大於弊嗎？" },
    subtitle: { en: "% who agree, 2023, from the Ipsos survey of 31 countries. The 41-point spread between Indonesia and the two most skeptical countries is the widest gap in the chapter — and it maps almost exactly onto how rich the country is.",
                zh: "同意的比例，2023 年，取自 Ipsos 對 31 國的調查。印尼與兩個最懷疑的國家之間有 41 個百分點的落差，是本章最大的一道差距 — 而且幾乎完全對應到國家的富裕程度。" },
    series: [
      { label: { en: "Indonesia", zh: "印尼" },     value: 78 },
      { label: { en: "Thailand", zh: "泰國" },      value: 74 },
      { label: { en: "Mexico", zh: "墨西哥" },      value: 73 },
      { label: { en: "Netherlands", zh: "荷蘭" },   value: 43 },
      { label: { en: "United States", zh: "美國" }, value: 37 },
      { label: { en: "France", zh: "法國" },        value: 37 }
    ]
  },

  /* --------------------------------------------- AI AND JOBS / LIVELIHOOD */
  {
    type: "prose",
    id: "jobs-and-life",
    nav:      { en: "Jobs and life", zh: "工作與生活" },
    title:    { en: "People expect AI to reshape their work, and to do nothing for their wallet",
                zh: "人們預期 AI 會重塑工作，卻幫不上荷包的忙" },
    subtitle: { en: "57% think AI will change how they do their current job within five years. Only 32% think it will improve the job market. On anything that touches money, the global public is a pessimist.",
                zh: "57% 認為 AI 會在五年內改變自己現在的工作方式。只有 32% 認為它會改善就業市場。凡是碰到錢的問題，全球大眾都是悲觀的。" },
    blocks: [
      { type: "p",
        text: { en: "The 2023 Ipsos survey added questions about work. 57% said it is likely that AI will change how they perform their current job within the next five years, against 35% who said it is not likely and 8% who did not know. On outright replacement the answer inverts: 36% said it is likely AI will replace their current job in the same window, 56% said it is not, and 8% did not know. The public expects to keep the job and do it differently.",
                zh: "2023 年的 Ipsos 調查新增了關於工作的題目。57% 認為 AI 有可能在未來五年改變自己執行現職的方式，35% 認為不太可能，8% 不知道。問到直接被取代，答案就翻轉了：36% 認為 AI 有可能在同一期間取代自己現在的工作，56% 認為不會，8% 不知道。大眾預期的是保住這份工作，然後換個方式做。" } },
      { type: "p",
        text: { en: "Who expects the change depends heavily on who you ask. 66% of Gen Z respondents agreed AI will likely affect how they do their current job, against 61% of millennials, 53% of Gen X and 46% of baby boomers — a 20-point generational spread. The other splits point the same way: 68% of those in decision-making roles agreed against 51% of those who are not, 61% of the highest-educated group against 52% of the lowest, and 60% of upper-income respondents against 56% of both middle- and lower-income respondents. Gender barely registers, at 58% for men and 55% for women.",
                zh: "誰預期會改變，取決於你問誰。66% 的 Z 世代同意 AI 有可能影響自己執行現職的方式，千禧世代 61%、X 世代 53%、嬰兒潮世代 46% — 世代之間拉開 20 個百分點。其他分野指向同一件事：擔任決策角色的有 68% 同意，非決策角色只有 51%；學歷最高的一群 61%，最低的一群 52%；高收入族群 60%，中低收入族群都是 56%。性別幾乎不構成差異，男性 58%、女性 55%。" } },
      { type: "h3",
        text: { en: "Convenience, yes. Prosperity, no.", zh: "便利可以，繁榮不行" } },
      { type: "ul",
        items: {
          en: ["54% of global respondents agree AI will reduce the time it takes to get things done, and 51% expect better entertainment options — television, video, music and books. Those are the only two majorities in the whole set.",
               "Every question that touches livelihood falls below half: 39% think AI will improve their health, 37% their own job, 34% their national economy, and 32% the job market.",
               "The country pattern from the products-and-services questions repeats almost exactly. Japanese, Swedish and American respondents are consistently pessimistic about AI improving their lives; Brazilians, Indonesians and Mexicans are consistently optimistic.",
               "On health, Mexico leads at 61% against a global average of 39%, while Japan comes last at 16%. On whether AI will improve their own job, Thailand tops the table at 66% and Japan again sits at the bottom, at 19%.",
               "The job market draws the bleakest readings anywhere in the survey: 17% in South Korea, 18% in Belgium and 19% in Canada, against 54% in Mexico and Peru.",
               "Optimism tracks age, income and education together. 59% of Gen Z believe AI will improve their entertainment options against 40% of baby boomers, and on all six questions Gen Z, higher earners and the more educated score highest while boomers, lower earners and the less educated score lowest."],
          zh: ["54% 的全球受訪者同意 AI 會縮短做完事情所需的時間，51% 期待更好的娛樂選項 — 電視、影音、音樂與書籍。這是整組問題中僅有的兩個過半數。",
               "只要碰到生計，每一題都掉到半數以下：39% 認為 AI 會改善健康、37% 認為會改善自己的工作、34% 認為會提振本國經濟、32% 看好就業市場。",
               "產品與服務那幾題的國家分布，在這裡幾乎原樣重演。日本、瑞典與美國的受訪者一致地悲觀，巴西、印尼與墨西哥的受訪者一致地樂觀。",
               "健康方面，墨西哥以 61% 居首，全球平均是 39%，日本則以 16% 墊底。問到 AI 會不會改善自己的工作，泰國以 66% 居冠，日本又是最低的 19%。",
               "就業市場是整份調查中最灰暗的一題：南韓 17%、比利時 18%、加拿大 19%，而墨西哥與秘魯都有 54%。",
               "樂觀度跟年齡、收入與學歷同步移動。59% 的 Z 世代相信 AI 會改善自己的娛樂選項，嬰兒潮世代只有 40%；六個題目全部都是 Z 世代、高收入者與高學歷者最高，嬰兒潮世代、低收入者與低學歷者最低。"]
        } }
    ]
  },

  /* ------------------------------------------------------ LIVELIHOOD CHART */
  {
    type: "bars",
    id: "livelihood",
    nav:      { en: "Livelihood", zh: "生活面向" },
    title:    { en: "Will AI improve this part of your life?",
                zh: "AI 會改善你生活的這個部分嗎？" },
    subtitle: { en: "% of global respondents who agree, Ipsos 2023. Only the two questions that cost nobody anything clear 50%. Every question about earning a living sits in the thirties.",
                zh: "全球受訪者同意的比例，Ipsos 2023 年。只有兩個不必付出代價的問題過半，每一個關於謀生的問題都停在三十幾趴。" },
    series: [
      { label: { en: "Time saved", zh: "節省時間" },   value: 54 },
      { label: { en: "Entertainment", zh: "娛樂選項" }, value: 51 },
      { label: { en: "Health", zh: "健康" },           value: 39 },
      { label: { en: "My job", zh: "自己的工作" },      value: 37 },
      { label: { en: "Economy", zh: "本國經濟" },       value: 34 },
      { label: { en: "Job market", zh: "就業市場" },    value: 32 }
    ]
  },

  /* -------------------------------------------- GPO-AI: CHATGPT + CONCERNS */
  {
    type: "cards",
    id: "chatgpt",
    nav:      { en: "ChatGPT", zh: "認知與擔憂" },
    title:    { en: "ChatGPT is the front door — and privacy is what people find behind it",
                zh: "ChatGPT 是那道前門 — 而人們在門後看見的是隱私" },
    subtitle: { en: "The Schwartz Reisman Institute and the PEARL lab at the University of Toronto surveyed 21 countries in October and November 2023 for the Global Public Opinion on Artificial Intelligence report. It asked two things Ipsos did not: does the public actually know ChatGPT, and what exactly are they afraid of?",
                zh: "多倫多大學的 Schwartz Reisman 研究所與 PEARL 實驗室於 2023 年 10 至 11 月調查了 21 個國家，完成《全球 AI 民意》(GPO-AI)報告。它問了 Ipsos 沒問的兩件事：大眾到底認不認識 ChatGPT？他們具體在怕什麼？" },
    items: [
      { slug: "chatgpt-awareness",
        title:   { en: "63% have heard of ChatGPT", zh: "63% 的人聽過 ChatGPT" },
        summary: { en: "Awareness roughly one year after launch, across 21 countries. India leads at 82%, Poland trails at 43%, and the United States sits below the global average at 55%.",
                   zh: "上線約一年後的認知度，涵蓋 21 國。印度以 82% 居首，波蘭以 43% 墊底，美國則以 55% 低於全球平均。" },
        tags: ["chatgpt", "awareness"],
        overview: { en: "Kenya (81%), Indonesia (76%) and Pakistan (76%) follow India at the top. The ranking does not track national wealth: South Africa (69%) and Argentina (67%) beat Australia, France and Germany (all 60%) and the United States (55%). Chile and Italy tie at 52%. Poland is the only country under half, at 43%, with a further 16% unsure.",
                    zh: "排在印度之後的是肯亞(81%)、印尼(76%)與巴基斯坦(76%)。這個排名跟國家富裕程度無關：南非(69%)與阿根廷(67%)都高於澳洲、法國與德國(同為 60%)以及美國(55%)。智利與義大利同為 52%。波蘭是唯一低於半數的國家，只有 43%，另有 16% 不確定。" } },
      { slug: "chatgpt-usage",
        title:   { en: "Half of those who know it use it weekly", zh: "認識它的人有一半每週使用" },
        summary: { en: "Among respondents familiar with ChatGPT, 17% use it daily and 36% weekly. Another 16% use it monthly, and 30% say they rarely use it at all.",
                   zh: "在熟悉 ChatGPT 的受訪者中，17% 每天使用、36% 每週使用。另有 16% 每月使用，30% 說自己很少使用。" },
        tags: ["chatgpt", "usage"],
        overview: { en: "Daily use is highest in India (36%), Pakistan (28%) and Kenya (27%) — the same three countries near the top of the awareness table. China reports 24% daily use and 49% weekly, the highest weekly figure in the survey. Awareness and habit move together: the places most likely to have heard of the tool are also the places that have already folded it into a working week.",
                    zh: "每日使用率最高的是印度(36%)、巴基斯坦(28%)與肯亞(27%) — 正是認知度榜上排前面的那三國。中國有 24% 每天使用、49% 每週使用，是調查中每週使用率最高的。認知與習慣是連動的：最可能聽過這項工具的地方，也已經把它放進一週的工作裡。" } },
      { slug: "top-fears",
        title:   { en: "Misuse and jobs top the worry list", zh: "最擔心的是濫用與工作" },
        summary: { en: "Asked about 11 possible impacts of AI over the next few years, respondents most often named misuse for nefarious purposes (49%) and the impact on jobs (49%), followed by violation of citizens' privacy (45%).",
                   zh: "問到未來幾年 AI 可能造成的 11 種影響，受訪者最常點名的是被惡意濫用(49%)與對工作的衝擊(49%)，接著是侵犯公民隱私(45%)。" },
        tags: ["concerns"],
        overview: { en: "Dehumanization of services follows at 41%, then lack of transparency in decision-making (34%), the impact on education (33%), ethical implications (30%) and the accuracy of results and analysis (28%). The top of the list is strikingly concrete — crime, employment and surveillance are harms people can picture happening to them personally.",
                    zh: "接下來是服務去人性化(41%)、決策缺乏透明度(34%)、對教育的衝擊(33%)、倫理問題(30%)，以及結果與分析的準確度(28%)。清單最上面那幾項都非常具體 — 犯罪、就業與監控，都是人們想像得出會發生在自己身上的傷害。" } },
      { slug: "fairness-last",
        title:   { en: "Fairness ranks last", zh: "公平性排在最後" },
        summary: { en: "The concerns the AI research community writes most about sit at the bottom of the public's list: uneven access to AI (26%), potential for bias and discrimination (24%), and one's own ability to use AI (22%).",
                   zh: "AI 研究社群寫得最多的那些議題，在大眾的清單上排在最後：AI 取得不均(26%)、可能的偏見與歧視(24%)，以及自己會不會用 AI(22%)。" },
        tags: ["concerns", "bias"],
        overview: { en: "The gap is not marginal — misuse for nefarious purposes worries roughly twice as many people as bias and discrimination does. It lines up with the Ipsos reading from the same year, in which 56% said they trust AI not to discriminate or show bias toward any group. On the evidence of both surveys, the public is not treating algorithmic fairness as an urgent personal risk.",
                    zh: "這個落差不小 — 擔心被惡意濫用的人，大約是擔心偏見與歧視的兩倍。這也對得上同一年的 Ipsos 數字：56% 的受訪者說自己信任 AI 不會歧視或對特定群體展現偏見。從兩份調查看來，大眾並沒有把演算法公平性當成迫切的個人風險。" } },
      { slug: "fear-geography",
        title:   { en: "The same fears, very different intensities", zh: "一樣的恐懼，強度差很多" },
        summary: { en: "68% in South Africa worry about AI's impact on jobs against 36% in Japan. 66% in Indonesia worry about misuse against 31% in Pakistan.",
                   zh: "南非有 68% 擔心 AI 對工作的衝擊，日本只有 36%。印尼有 66% 擔心濫用，巴基斯坦只有 31%。" },
        tags: ["concerns"],
        overview: { en: "The countries most enthusiastic about using ChatGPT are among the least worried about AI being misused: Pakistan (31%), India (34%) and Kenya (34%) sit at the bottom of that question, while Indonesia (66%), Argentina (63%) and Portugal (62%) sit at the top. On privacy, Chile and Portugal lead at 57% against 31% in Pakistan and 33% in Japan. Familiarity, in this data, does not breed fear.",
                    zh: "最熱衷使用 ChatGPT 的那些國家，反而最不擔心 AI 被濫用：巴基斯坦(31%)、印度(34%)與肯亞(34%)在這一題敬陪末座，而印尼(66%)、阿根廷(63%)與葡萄牙(62%)排在最前面。隱私方面，智利與葡萄牙同以 57% 領先，巴基斯坦只有 31%、日本 33%。在這份資料裡，熟悉並不會養出恐懼。" } }
    ]
  },

  /* --------------------------------------------------- 9.1 US PUBLIC OPINION */
  {
    type: "prose",
    id: "america",
    nav:      { en: "9.1 America", zh: "9.1 美國" },
    title:    { en: "In the United States, concern became the majority position",
                zh: "在美國，擔憂變成了多數意見" },
    subtitle: { en: "Pew Research Center has tracked American sentiment toward AI since 2021 and collected 11,000 responses for its 2023 survey. In one year the share more concerned than excited went from roughly a third to a clear majority.",
                zh: "Pew 研究中心自 2021 年起追蹤美國人對 AI 的態度，2023 年的調查收到 11,000 份回覆。一年之內，擔憂多於興奮的比例從約三分之一變成明確的過半數。" },
    blocks: [
      { type: "p",
        text: { en: "In 2021, 37% of Americans said they felt more concerned than excited about the increased use of AI in daily life. In 2022, 38%. By 2023, 52%. The move did not come out of the enthusiastic camp, which was already small and shrinking: those more excited than concerned fell from 18% to 15% to 10%. It came out of the middle. The share reporting themselves equally concerned and excited held at 45% and 46% before dropping to 36% in a single year.",
                zh: "2021 年，37% 的美國人說自己對 AI 在日常生活中的普及擔憂多於興奮。2022 年是 38%。到 2023 年，變成 52%。這個位移不是來自熱情的那一群 — 那一群本來就小、而且還在縮：興奮多於擔憂的比例從 18% 掉到 15%、再掉到 10%。位移來自中間。回答「同樣擔憂也同樣興奮」的比例先是 45%、46%，接著在一年之內掉到 36%。" } },
      { type: "h3",
        text: { en: "Americans separate what AI does from what it knows about them", zh: "美國人分得清 AI 做什麼，和它知道你什麼" } },
      { type: "p",
        text: { en: "Pew also asked whether AI helps or hurts in eight specific settings. Only one drew a clear positive: helping people find products and services they are interested in online, at 49% helps against 15% hurts. Doctors providing quality care to patients and companies making safe cars and trucks both drew 37% helps. Two settings came out negative — companies providing quality customer service (28% helps against 34% hurts) and police maintaining public safety (24% against 26%). And one was not close at all: on people keeping their personal information private, 53% said AI hurts more than it helps against just 10% who said it helps. Uncertainty runs through the whole set, with 35% to 49% answering 'not sure' on every question.",
                zh: "Pew 也問了 AI 在八個具體情境中是幫忙還是幫倒忙。只有一項明顯正面：幫人們在網路上找到自己有興趣的產品與服務，49% 認為有幫助、15% 認為有害。醫師提供優質照護、企業製造安全的汽車與卡車，兩項都是 37% 認為有幫助。有兩項是負面的 — 企業提供優質客服(28% 有幫助對 34% 有害)與警察維護公共安全(24% 對 26%)。而有一項差距懸殊：在保護個人資訊隱私這件事上，53% 認為 AI 幫倒忙，只有 10% 認為有幫助。整組題目都瀰漫著不確定，每一題回答「不確定」的比例都落在 35% 到 49% 之間。" } },
      { type: "h3",
        text: { en: "Education changes the answer more than anything else", zh: "學歷比什麼都更能改變答案" } },
      { type: "ul",
        items: {
          en: ["On AI helping people find products and services online, 60% of Americans with a college degree or more said it helps, against 44% of those with some college or less.",
               "On doctors providing quality care, 46% of college graduates said AI helps against 32% of the less-educated group; on companies making safe cars and trucks, 45% against 33%; on people taking care of their health, 41% against 29%.",
               "The gap holds on customer service (34% against 25%) and on finding accurate information online (36% against 31%).",
               "It nearly disappears on policing. 27% of college graduates say AI helps police maintain public safety against 23% of everyone else — and 49% of both groups answer 'not sure'.",
               "Privacy is the exception that runs the other way: the more educated group is more negative, not less. 59% of college graduates said AI hurts people keeping their personal information private, against 50% of those with some college or less."],
          zh: ["在「AI 幫人們在網路上找到產品與服務」這一題，擁有大學以上學歷的美國人有 60% 認為有幫助，學歷在大學肄業以下的只有 44%。",
               "醫師提供優質照護：大學以上 46% 認為有幫助，學歷較低的一群 32%；企業製造安全的汽車與卡車：45% 對 33%；人們照顧自己的健康：41% 對 29%。",
               "這個落差在客服(34% 對 25%)與網路上找到正確資訊(36% 對 31%)同樣成立。",
               "但在警政這題幾乎消失。大學以上學歷有 27% 認為 AI 有助於警察維護公共安全，其他人是 23% — 而兩群人回答「不確定」的比例都是 49%。",
               "隱私是唯一反向的例外：學歷較高的一群更負面，而不是更正面。59% 的大學以上學歷者認為 AI 在保護個人資訊隱私上幫倒忙，學歷較低的一群是 50%。"]
        } }
    ]
  },

  /* ---------------------------------------------------------- US MOOD CHART */
  {
    type: "bars",
    id: "us-mood",
    nav:      { en: "US mood", zh: "美國情緒" },
    title:    { en: "% of Americans more concerned than excited about AI in daily life",
                zh: "% 對日常生活中的 AI 擔憂多於興奮的美國人" },
    subtitle: { en: "Pew Research Center, 2021–23. The line was flat for a year, then moved 14 points in the twelve months that took generative AI into the mainstream.",
                zh: "Pew 研究中心，2021 至 2023 年。這條線先平了一年，接著在生成式 AI 走進主流的那十二個月裡移動了 14 個百分點。" },
    series: [
      { label: { en: "2021", zh: "2021" }, value: 37 },
      { label: { en: "2022", zh: "2022" }, value: 38 },
      { label: { en: "2023", zh: "2023" }, value: 52 }
    ]
  },

  /* ------------------------------------------------- 9.2 SOCIAL MEDIA DATA */
  {
    type: "prose",
    id: "social-media",
    nav:      { en: "9.2 Social media", zh: "9.2 社群聲量" },
    title:    { en: "9.2 — One model owned the conversation for the entire year",
                zh: "9.2 — 一個模型獨占了整年的話題" },
    subtitle: { en: "Quid read more than 7 million social media posts published between January and December 2023, scoring each model's net sentiment from -100 (all negative) to +100 (all positive) and measuring its share of all AI-related conversation.",
                zh: "Quid 讀了 2023 年 1 至 12 月超過 700 萬則社群貼文，為每個模型打出 -100(全負面)到 +100(全正面)的淨情緒分數，並計算它在所有 AI 相關討論中的占比。" },
    blocks: [
      { type: "p",
        text: { en: "GPT-4 took 53% of all AI-related social media conversation in the first quarter of 2023, 71% in the second after its March 14 launch, 62% in the third and 45% in the fourth. That last figure is the striking one. Q4 2023 brought Gemini, Grok, GPT-4 Turbo, Claude 2.1, Whisper V3, GraphCast, Orca 2, Inflection-2, Midjourney v6 and Stable Video Diffusion — and nearly half of everything said about AI online was still about a model released in March. Of the models that launched in that quarter, only Grok (16%) and Gemini (11%) registered at all; every other one came in at 2% or below.",
                zh: "2023 年第一季，GPT-4 拿下所有 AI 相關社群討論的 53%；3 月 14 日發布後的第二季是 71%、第三季 62%、第四季 45%。最值得注意的是最後那個數字。2023 年第四季推出了 Gemini、Grok、GPT-4 Turbo、Claude 2.1、Whisper V3、GraphCast、Orca 2、Inflection-2、Midjourney v6 與 Stable Video Diffusion — 而網路上關於 AI 的所有討論，仍有將近一半是在講一個 3 月發布的模型。當季推出的模型中，只有 Grok(16%)與 Gemini(11%)真的形成聲量，其餘全部落在 2% 以下。" } },
      { type: "p",
        text: { en: "Stable Diffusion is the only other model that ever held a large share, and its arc runs the other way: 46% of conversation in Q1, then 21%, 24% and 12%. Copilot never exceeded 1% of AI conversation in any quarter of the year.",
                zh: "另一個曾經拿下大量聲量的模型是 Stable Diffusion，而它的曲線走向相反：第一季 46%，接著是 21%、24%、12%。Copilot 則整年沒有任何一季超過 AI 討論的 1%。" } },
      { type: "h3",
        text: { en: "The best-liked models were the ones nobody was arguing about", zh: "評價最好的，是沒人在吵的那些模型" } },
      { type: "p",
        text: { en: "Attention and approval moved in opposite directions all year. The highest net sentiment score of 2023 went to GraphCast, DeepMind's weather forecasting system, at 94 in Q4 — with a rounded 0% share of conversation. Claude 2.1 scored 87 on a 2% share; Whisper V3 and Orca 2 both scored 83, Inflection-2 81. GPT-4, the model everyone was talking about, never scored above 51 and dipped to 42 in Q1 and 44 in Q4. Gemini, launched into the most crowded quarter of the year, scored 36 — the lowest net sentiment on the chart.",
                zh: "整年下來，注意力與好感度是往相反方向走的。2023 年最高的淨情緒分數屬於 DeepMind 的天氣預報系統 GraphCast，第四季拿到 94 分 — 而它的討論占比四捨五入後是 0%。Claude 2.1 在 2% 的占比下拿到 87 分；Whisper V3 與 Orca 2 都是 83 分，Inflection-2 是 81 分。而所有人都在談的 GPT-4，全年沒有一季超過 51 分，第一季 42 分、第四季 44 分。在全年最擁擠的一季推出的 Gemini 拿到 36 分，是整張圖裡最低的淨情緒分數。" } },
      { type: "h3",
        text: { en: "What people actually argued about", zh: "人們實際上在吵什麼" } },
      { type: "ul",
        items: {
          en: ["GPT-4's positive sentiment came from faster processing, better accuracy, and productivity gains in coding, corporate collaboration and content creation. The negative side came from ChatGPT outages and from the open letter led by Elon Musk and supported by more than 1,300 AI experts urging labs to pause training of powerful systems — a letter that was itself widely disputed, including by Andrew Ng.",
               "GPT-4 Turbo drew praise in Q4 for longer conversations, improved contextual understanding and image generation, and complaints about its April 2023 knowledge cutoff and slower loading than GPT-4.",
               "Stable Diffusion discussion concentrated in the first half of the year, and posts mentioned the XL models around 16 times more often than Stable Diffusion 2.0. Enthusiasm ran to creativity, resolution and accuracy; the negative half was copyright, ownership of AI-generated work, and the displacement of human artists.",
               "Gemini's Q4 conversation praised its accuracy, multilingual ability and potential inside Google Search and Ads, while criticism centred on inaccurate results, the delayed release, and skepticism toward the launch demo."],
          zh: ["GPT-4 的正面情緒來自更快的處理速度、更好的準確度，以及在程式撰寫、企業協作與內容創作上的生產力提升。負面情緒則來自 ChatGPT 網站當機，以及由馬斯克發起、超過 1,300 位 AI 專家連署、呼籲實驗室暫停訓練強大系統的公開信 — 而這封信本身也引發大量爭論，吳恩達就是反對者之一。",
               "GPT-4 Turbo 在第四季獲得的好評，集中在更長的對話、更好的脈絡理解與影像生成能力；抱怨則集中在它 2023 年 4 月的知識截止時間，以及比 GPT-4 更慢的載入速度。",
               "Stable Diffusion 的討論集中在上半年，而貼文提到 XL 系列的次數約為 Stable Diffusion 2.0 的 16 倍。正面聲量圍繞創造力、解析度與準確度；負面那一半則是著作權、AI 生成作品的所有權，以及人類藝術家被取代。",
               "Gemini 在第四季獲得的好評，集中在準確度、多語言能力，以及它在 Google 搜尋與廣告中的潛力；批評則集中在結果不準確、發布延宕，以及對發表會展示的質疑。"]
        } }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 9 · Public Opinion.",
                zh: "第 9 章「民意」的頭條發現。" },
    quotes: [
      { text: { en: "Over the last year, the proportion of those who think AI will dramatically affect their lives in the next three to five years has increased from 60% to 66%.",
                zh: "過去一年間，認為 AI 會在未來三到五年大幅影響自身生活的比例，已從 60% 上升到 66%。" },
        by: "Chapter 9 · Public Opinion" },
      { text: { en: "52% express nervousness toward AI products and services, marking a 13 percentage point rise from 2022.",
                zh: "52% 的受訪者對 AI 產品與服務感到緊張，較 2022 年上升 13 個百分點。" },
        by: "Chapter 9 · Public Opinion" },
      { text: { en: "In 2022, several developed Western nations were among the least positive about AI products and services. Since then, each of these countries has seen a rise in the proportion of respondents acknowledging the benefits of AI, with the Netherlands experiencing the most significant shift.",
                zh: "2022 年，好幾個已開發西方國家對 AI 產品與服務的評價落在最低的一群。自那之後，這些國家承認 AI 好處的受訪者比例都上升了，其中荷蘭的變化最為顯著。" },
        by: "Chapter 9 · Public Opinion" },
      { text: { en: "Only 37% of respondents feel AI will improve their job. Only 34% anticipate AI will boost the economy, and 32% believe it will enhance the job market.",
                zh: "只有 37% 的受訪者認為 AI 會改善自己的工作。只有 34% 預期 AI 會提振經濟，32% 相信它會改善就業市場。" },
        by: "Chapter 9 · Public Opinion" },
      { text: { en: "63% of respondents are aware of ChatGPT. Of those aware, around half report using ChatGPT at least once weekly.",
                zh: "63% 的受訪者知道 ChatGPT。在知道的人當中，約有半數表示至少每週使用一次。" },
        by: "Chapter 9 · Public Opinion" }
    ]
  },

  /* ------------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 9 in full", zh: "閱讀第 9 章原文" },
    text:  { en: "Chapter 9 (9.1 Survey Data and 9.2 Social Media Data), with every figure and the full survey methodology, is free from Stanford HAI. Or head back to the 2024 report overview and its nine chapters.",
             zh: "第 9 章(9.1 調查資料、9.2 社群媒體資料)連同所有圖表與完整的調查方法說明，皆由史丹佛 HAI 免費提供。或回到 2024 年報告總覽與九大章節。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

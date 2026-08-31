/* =========================================================================
   Public Opinion — deep dive · public-opinion.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026, Chapter 9
   https://hai.stanford.edu/ai-index/2026-ai-index-report/public-opinion

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 9: 9.1 Global Sentiment Toward AI, 9.2 US
   Public and Expert Views on AI's Societal Impact, 9.3 Perceptions on AI
   Trust, Transparency, and Regulation. Survey sources include Ipsos AI
   Monitor (30 countries, 23,216 adults), University of Melbourne & KPMG
   (47 countries, 48,340 people), Pew Research Center, and the Forecasting
   Research Institute's LEAP panel. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "public-opinion";

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Public Opinion · a chapter deep dive", zh: "民意專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "Optimism is rising — and so is anxiety",
                zh: "樂觀正在上升,焦慮也是" },
    subtitle: { en: "Chapter 9 of the AI Index 2026 reads the public mood across three layers — global sentiment, the expert-versus-public divide in the US, and trust in who should regulate AI. People increasingly see the benefits, yet nervousness keeps climbing and experts live in a very different world from everyone else. The numbers:",
                zh: "AI 指數 2026 第 9 章解讀三個層次的民意 — 全球情緒、美國「專家 vs 大眾」的鴻溝,以及對「誰該監管 AI」的信任。人們越來越看見好處,但緊張感持續攀升,而專家活在一個與一般人很不一樣的世界。先看數字:" },
    stats: [
      { label: { en: "% globally say AI's benefits outweigh drawbacks (up from 55% in 2024)", zh: "% 全球認為 AI 利大於弊(2024 為 55%)" }, value: 59 },
      { label: { en: "% say AI products make them nervous (2025)", zh: "% 表示 AI 產品讓他們緊張(2025)" }, value: 52 },
      { label: { en: "% of employees globally using AI at work regularly", zh: "% 全球員工經常在工作中使用 AI" }, value: 58 },
      { label: { en: "point gap: experts (73%) vs public (23%) on AI helping jobs", zh: "個百分點差距:專家(73%)vs 大眾(23%)對 AI 改善工作" }, value: 50 },
      { label: { en: "% of Americans expect AI to mean fewer jobs in 20 years", zh: "% 美國人預期 20 年內 AI 帶來更少工作" }, value: 64 },
      { label: { en: "% US trust in own government to regulate AI — lowest surveyed (global avg 54%)", zh: "% 美國對自家政府監管 AI 的信任 — 全球最低(全球平均 54%)" }, value: 31 }
    ]
  },

  /* ------------------------------------------ 9.1 GLOBAL SENTIMENT (prose) */
  {
    type: "prose",
    id: "sentiment",
    title:    { en: "9.1 — Global sentiment: warmer and warier at once",
                zh: "9.1 — 全球情緒:同時更溫暖,也更警戒" },
    subtitle: { en: "Since 2022, Ipsos's annual AI Monitor has tracked attitudes worldwide. The 2025 wave covered 30 countries and 23,216 adults — and found optimism and anxiety rising together.",
                zh: "自 2022 年起,Ipsos 每年的 AI Monitor 追蹤全球態度。2025 年這一波涵蓋 30 個國家、23,216 名成人 — 發現樂觀與焦慮同步上升。" },
    blocks: [
      { type: "p",
        text: { en: "The share of respondents who say AI products and services offer more benefits than drawbacks rose from 55% in 2024 to 59% in 2025 — even as the share saying these products make them nervous ticked up to 52%. Across all 30 countries, 79% agreed that companies using AI should be required to disclose that use, and 56% globally believed AI would reduce the time it takes to get things done (78% in China).",
                zh: "認為 AI 產品與服務「利大於弊」的受訪者比例,從 2024 年的 55% 升到 2025 年的 59% — 但同時,表示這些產品讓他們緊張的比例,也升到 52%。在全部 30 個國家中,79% 同意「使用 AI 的公司應被要求揭露其使用」,而全球 56% 相信 AI 能減少把事情做完所需的時間(中國為 78%)。" } },
      { type: "h3",
        text: { en: "Southeast Asia leads the optimism", zh: "東南亞領跑樂觀" } },
      { type: "ul",
        items: {
          en: ["In Malaysia, Thailand, Indonesia, and Singapore, more than 80% of respondents expect AI to profoundly change their lives over the next 3–5 years — consistently the world's most optimistic countries, with Malaysia posting the largest increase from 2024 (+9).",
               "Several European countries grew more optimistic between 2022 and 2025 — Germany (+12 points), France (+10), China (+9), Great Britain (+5) — though their overall sentiment stayed below much of Asia and Latin America.",
               "India saw the sharpest rise in AI nervousness of any country surveyed: concern jumped +14 percentage points between 2024 and 2025, with only a modest +2 increase in excitement. Globally, nervousness rose +3 and excitement slipped −1 year over year."],
          zh: ["在馬來西亞、泰國、印尼與新加坡,超過 80% 的受訪者預期 AI 會在未來 3–5 年深刻改變他們的生活 — 這些國家一向是全球最樂觀的,其中馬來西亞自 2024 年起增幅最大(+9)。",
               "數個歐洲國家在 2022 到 2025 年間變得更樂觀 — 德國(+12 個百分點)、法國(+10)、中國(+9)、英國(+5)— 不過整體情緒仍低於亞洲與拉丁美洲多數地區。",
               "印度的 AI 緊張感增幅是所有受訪國家中最大的:2024 到 2025 年間,憂慮躍升 +14 個百分點,而興奮只小幅增加 +2。全球而言,緊張感年增 +3、興奮年減 −1。"]
        } },
      { type: "h3",
        text: { en: "The workplace is where emerging economies pull ahead", zh: "在職場上,新興經濟體反而領先" } },
      { type: "p",
        text: { en: "A University of Melbourne and KPMG survey of 48,340 people across 47 countries found that in 2025, 58% of employees globally reported using AI at work on a semiregular or regular basis, and 53% said they trust AI for work. But in India, China, Nigeria, the United Arab Emirates, and Saudi Arabia, that usage exceeded 80% — flipping the usual rich-country lead. Personal optimism about AI's benefits appears to coexist with real concern about its effects on labor markets.",
                zh: "墨爾本大學與 KPMG 對 47 個國家、48,340 人的調查發現,2025 年全球 58% 的員工表示在工作中半規律或規律地使用 AI,53% 表示在工作上信任 AI。但在印度、中國、奈及利亞、阿拉伯聯合大公國與沙烏地阿拉伯,使用率超過 80% — 翻轉了通常由富裕國家領先的格局。對 AI 個人好處的樂觀,似乎與對其衝擊勞動市場的真實憂慮並存。" } }
    ]
  },

  /* ----------------------------------- 9.1.1 sentiment-over-time chart */
  {
    type: "bars",
    id: "global-sentiment-trend",
    title:    { en: "Global sentiment toward AI, 2024 → 2025",
                zh: "全球對 AI 的情緒,2024 → 2025" },
    subtitle: { en: "Share of respondents who 'agree', Ipsos AI Monitor, 30 countries. Optimism is up four points; nervousness is up two. Unit: % of respondents.",
                zh: "回答「同意」的受訪者比例,Ipsos AI Monitor,30 國。樂觀升 4 點,緊張升 2 點。單位:受訪者百分比。" },
    series: [
      { label: { en: "Benefits outweigh drawbacks (2025)", zh: "利大於弊(2025)" }, value: 59 },
      { label: { en: "Benefits outweigh drawbacks (2024)", zh: "利大於弊(2024)" }, value: 55 },
      { label: { en: "AI products make me nervous (2025)", zh: "AI 產品讓我緊張(2025)" }, value: 52 },
      { label: { en: "Companies should disclose AI use", zh: "公司應揭露 AI 使用" }, value: 79 }
    ]
  },

  /* -------------------------------------- 9.2 EXPERT vs PUBLIC (prose) */
  {
    type: "prose",
    id: "expert-gap",
    title:    { en: "9.2 — Experts and the public barely agree",
                zh: "9.2 — 專家與大眾幾乎談不攏" },
    subtitle: { en: "Drawing on Pew Research Center's surveys of US adults and AI experts, plus expert-forecasting panels, Chapter 9 maps one of the report's widest divides — between those who build AI and everyone else.",
                zh: "依據 Pew 研究中心對美國成人與 AI 專家的調查,以及專家預測小組,第 9 章描繪出全報告最大的鴻溝之一 — 在打造 AI 的人與其他所有人之間。" },
    blocks: [
      { type: "p",
        text: { en: "Across nearly every topic, AI experts are far more optimistic than the US public. The largest gaps cluster around the future of work: 73% of experts expect AI to have a positive impact on how people do their jobs, versus just 23% of the public — a 50-point gap. Similar divides appear for the economy (69% vs. 21%), K–12 education (61% vs. 24%), and medical care (84% vs. 44%). Both groups, though, stay pessimistic about domains tied to trust and social connection — elections, news, and personal relationships.",
                zh: "在幾乎每一個主題上,AI 專家都比美國大眾樂觀得多。差距最大的集中在工作的未來:73% 的專家預期 AI 會對「人們如何工作」帶來正面影響,而大眾只有 23% — 相差 50 個百分點。經濟(69% vs. 21%)、K–12 教育(61% vs. 24%)與醫療照護(84% vs. 44%)也出現類似的分歧。不過,在與信任和社會連結相關的領域 — 選舉、新聞與人際關係 — 兩個群體都同樣悲觀。" } },
      { type: "h3",
        text: { en: "Jobs: pessimistic public, faster-moving experts", zh: "工作:悲觀的大眾,行動更快的專家" } },
      { type: "ul",
        items: {
          en: ["Nearly two-thirds of Americans (64%) expect AI to lead to fewer jobs over the next 20 years, while only 5% expect more.",
               "Experts are less pessimistic on the net effect (39% expect fewer jobs, 19% more) — but forecast far faster adoption, expecting generative AI to assist 18% of US work hours by 2030 versus the public's estimate of 10%.",
               "The pattern is consistent: experts and the public diverge most on capability and speed, and converge only where AI touches trust, democracy, and human relationships."],
          zh: ["近三分之二的美國人(64%)預期未來 20 年 AI 會帶來更少工作,只有 5% 預期更多。",
               "專家對淨效果沒那麼悲觀(39% 預期更少工作,19% 預期更多)— 但預測採用速度快得多,預期到 2030 年生成式 AI 會協助 18% 的美國工時,而大眾估計只有 10%。",
               "模式一致:專家與大眾在「能力與速度」上分歧最大,只有在 AI 觸及信任、民主與人際關係時才趨於一致。"]
        } }
    ]
  },

  /* --------------------------------- 9.2.1 expert vs public chart */
  {
    type: "bars",
    id: "expert-vs-public",
    title:    { en: "Who's optimistic? Experts vs the US public",
                zh: "誰更樂觀?專家 vs 美國大眾" },
    subtitle: { en: "Share expecting a positive impact, by domain. Experts (left of each pair) outpace the public across work, economy, and medicine. Unit: % expecting positive impact.",
                zh: "預期帶來正面影響的比例,依領域。在工作、經濟與醫療上,專家(每組左側)都遠勝大眾。單位:預期正面影響的百分比。" },
    series: [
      { label: { en: "Jobs — experts", zh: "工作 — 專家" }, value: 73 },
      { label: { en: "Jobs — public", zh: "工作 — 大眾" }, value: 23 },
      { label: { en: "Economy — experts", zh: "經濟 — 專家" }, value: 69 },
      { label: { en: "Economy — public", zh: "經濟 — 大眾" }, value: 21 },
      { label: { en: "Medical care — experts", zh: "醫療 — 專家" }, value: 84 },
      { label: { en: "Medical care — public", zh: "醫療 — 大眾" }, value: 44 }
    ]
  },

  /* ------------------------------------------ 9.3 TRUST & REGULATION (prose) */
  {
    type: "prose",
    id: "trust",
    title:    { en: "9.3 — Trust, transparency, and who should regulate",
                zh: "9.3 — 信任、透明,與「誰該監管」" },
    subtitle: { en: "As AI embeds in daily life, the mechanisms of trust become more visible. Chapter 9 closes on who people trust to govern AI — and the answer rarely points to one's own government.",
                zh: "當 AI 嵌入日常,信任的機制變得更顯眼。第 9 章以「人們信任誰來治理 AI」作結 — 而答案很少指向自己的政府。" },
    blocks: [
      { type: "p",
        text: { en: "Just over half of respondents worldwide (54%) said they trust their government to regulate AI responsibly. The United States reported the lowest trust on this measure of any country surveyed, at 31%. Southeast Asian countries again led — Singapore (81%), Indonesia (76%), Malaysia (73%), and Thailand (70%). Globally, the EU is trusted more than the US or China: across 25 countries in Pew's 2025 survey, a median of 53% said they trust the EU to regulate AI effectively, versus 37% for the United States and 27% for China.",
                zh: "全球略過半數的受訪者(54%)表示信任自家政府能負責任地監管 AI。在這項指標上,美國是所有受訪國家中信任度最低的,僅 31%。東南亞國家再次領先 — 新加坡(81%)、印尼(76%)、馬來西亞(73%)、泰國(70%)。在全球層面,歐盟比美國或中國更受信任:在 Pew 2025 年涵蓋 25 國的調查中,中位數 53% 表示信任歐盟能有效監管 AI,而美國為 37%、中國為 27%。" } },
      { type: "h3",
        text: { en: "In the US, the worry is too little, not too much", zh: "在美國,擔心的是「太少」,而非「太多」" } },
      { type: "p",
        text: { en: "Across all 50 US states, concern about too little AI regulation outweighs concern about too much. Nationally, 41% of respondents said federal AI regulation will not go far enough, compared with 27% who said it will go too far — though more than one-third remain unsure. The appetite for guardrails is broad; confidence that one's own institutions will provide them is not.",
                zh: "在全部 50 個美國州別中,擔心「AI 監管太少」的人都多於擔心「太多」的人。全國而言,41% 的受訪者認為聯邦 AI 監管「做得不夠」,相對於 27% 認為「管太多」— 不過仍有超過三分之一表示「不確定」。對護欄的需求很普遍;但對自家機構能提供護欄的信心卻不然。" } }
    ]
  },

  /* --------------------------------- 9.3.1 trust by country chart */
  {
    type: "bars",
    id: "trust-by-country",
    title:    { en: "Trust in your own government to regulate AI, 2025",
                zh: "對自家政府監管 AI 的信任,2025" },
    subtitle: { en: "Southeast Asia trusts its governments most; the US trusts least, well below the global average. Ipsos AI Monitor. Unit: % who trust their government to regulate AI responsibly.",
                zh: "東南亞最信任自家政府;美國最不信任,遠低於全球平均。Ipsos AI Monitor。單位:信任政府能負責任監管 AI 的百分比。" },
    series: [
      { label: { en: "Singapore", zh: "新加坡" },     value: 81 },
      { label: { en: "Indonesia", zh: "印尼" },        value: 76 },
      { label: { en: "Malaysia", zh: "馬來西亞" },     value: 73 },
      { label: { en: "Thailand", zh: "泰國" },         value: 70 },
      { label: { en: "Global average", zh: "全球平均" }, value: 54 },
      { label: { en: "United States", zh: "美國" },     value: 31 }
    ]
  },

  /* ----------------------------------------------- DIVIDES (cards) */
  {
    type: "cards",
    id: "divides",
    title:    { en: "The divides beneath the mood", zh: "情緒底下的分歧" },
    subtitle: { en: "Public opinion on AI isn't one number — it splits by region, expertise, age, and topic. Tap any card for the full trend and its numbers.",
                zh: "對 AI 的民意不是單一數字 — 它依地區、專業、年齡與主題而分裂。點任一張卡片看完整趨勢與數字。" },
    items: [
      {
        slug: "optimism-vs-anxiety",
        title:   { en: "Optimism and anxiety, rising together", zh: "樂觀與焦慮,一起上升" },
        summary: { en: "Benefits-outweigh-drawbacks hit 59% — but nervousness also climbed to 52%.",
                   zh: "「利大於弊」達 59% — 但緊張感也升到 52%。" },
        tags: ["sentiment"],
        overview: { en: "The headline of Chapter 9 is that warmth and wariness are growing in tandem. The share of Ipsos respondents who say AI products and services offer more benefits than drawbacks rose from 55% in 2024 to 59% in 2025, while the share saying these products make them nervous rose to 52%. Year over year, global nervousness increased by 3 percentage points and excitement slipped by 1. Self-reported AI literacy stayed steady, with over half of respondents saying they understand what AI is and which products use it. People are warming to AI's benefits even as they grow more anxious about it — the two are not mutually exclusive.",
                    zh: "第 9 章的頭條,是溫暖與警戒同步成長。在 Ipsos 調查中,認為 AI 產品與服務「利大於弊」的比例,從 2024 年的 55% 升到 2025 年的 59%,而表示這些產品讓他們緊張的比例升到 52%。年增來看,全球緊張感增加 3 個百分點,興奮減少 1 個。自評的 AI 素養維持穩定,超過半數受訪者表示理解 AI 是什麼、以及哪些產品使用 AI。人們對 AI 的好處越來越有好感,同時也越來越焦慮 — 兩者並不互斥。" }
      },
      {
        slug: "southeast-asia-optimism",
        title:   { en: "Southeast Asia, the optimism belt", zh: "東南亞:樂觀帶" },
        summary: { en: "Over 80% in Malaysia, Thailand, Indonesia, and Singapore expect AI to change their lives.",
                   zh: "馬來西亞、泰國、印尼、新加坡逾 80% 預期 AI 會改變生活。" },
        tags: ["region"],
        overview: { en: "Southeast Asian countries remain among the world's most optimistic about AI. In Malaysia, Thailand, Indonesia, and Singapore, more than 80% of respondents expect AI to profoundly change their lives over the next 3–5 years, and they report higher excitement than nervousness about AI-enabled products. These countries have consistently topped global optimism in recent years, and sentiment edged up further since 2024, with Malaysia posting the largest increase (+9). The same belt also reports the highest trust in government to regulate AI — Singapore 81%, Indonesia 76%, Malaysia 73%, Thailand 70% — suggesting optimism and institutional trust reinforce each other.",
                    zh: "東南亞國家仍是全球對 AI 最樂觀的地區之一。在馬來西亞、泰國、印尼與新加坡,超過 80% 的受訪者預期 AI 會在未來 3–5 年深刻改變他們的生活,而且他們對 AI 產品的興奮高於緊張。這些國家近年一向居全球樂觀之首,情緒自 2024 年起又再上揚,其中馬來西亞增幅最大(+9)。同一個樂觀帶,對政府監管 AI 的信任也最高 — 新加坡 81%、印尼 76%、馬來西亞 73%、泰國 70% — 顯示樂觀與制度信任彼此強化。" }
      },
      {
        slug: "india-nervousness",
        title:   { en: "India's sharp turn to nervousness", zh: "印度急轉的緊張感" },
        summary: { en: "Concern jumped +14 points in a year — the steepest rise of any country surveyed.",
                   zh: "一年內憂慮躍升 +14 點 — 所有受訪國最陡。" },
        tags: ["region"],
        overview: { en: "Between 2024 and 2025, India registered the sharpest rise in concern around AI usage of any country surveyed — a +14 percentage-point jump — with only a modest +2 increase in excitement. This is striking given that India is simultaneously one of the world's heaviest workplace AI adopters, with over 80% of employees reporting regular AI use at work. The combination suggests that rapid, hands-on exposure to AI does not automatically reduce anxiety; in some fast-adopting economies, growing familiarity arrives alongside growing unease about where the technology is heading.",
                    zh: "在 2024 到 2025 年間,印度的 AI 使用憂慮增幅,是所有受訪國家中最陡的 — 躍升 +14 個百分點 — 而興奮只小幅增加 +2。考量到印度同時是全球職場 AI 採用最密集的國家之一(逾 80% 員工表示在工作中規律使用 AI),這一點格外引人注目。這組合顯示,快速且實際接觸 AI 並不會自動降低焦慮;在某些快速採用的經濟體,熟悉感的增長,伴隨著對這項技術走向的不安一同到來。" }
      },
      {
        slug: "workplace-adoption",
        title:   { en: "Workplace AI: the global South leads", zh: "職場 AI:由全球南方領先" },
        summary: { en: "58% globally use AI at work; over 80% in India, China, Nigeria, UAE, and Saudi Arabia.",
                   zh: "全球 58% 在工作用 AI;印度、中國、奈及利亞、阿聯酋、沙烏地逾 80%。" },
        tags: ["workplace"],
        overview: { en: "A University of Melbourne and KPMG survey of 48,340 people across 47 countries found that in 2025, 58% of employees globally reported using AI at work on a semiregular or regular basis, and 53% said they trust AI for work purposes. Emerging economies are the most active: in India, China, Nigeria, the United Arab Emirates, and Saudi Arabia, over 80% of respondents said they regularly use AI at work, with similarly high trust. By contrast, in most North American and European countries about half of employees use AI tools regularly, with trust several points lower (40%–48%). This inverts the population-level diffusion pattern, where AI adoption correlates strongly with GDP per capita.",
                    zh: "墨爾本大學與 KPMG 對 47 個國家、48,340 人的調查發現,2025 年全球 58% 的員工表示在工作中半規律或規律地使用 AI,53% 表示在工作上信任 AI。新興經濟體最為活躍:在印度、中國、奈及利亞、阿拉伯聯合大公國與沙烏地阿拉伯,逾 80% 受訪者表示在工作中規律使用 AI,信任度也同樣高。相對地,北美與歐洲多數國家約半數員工規律使用 AI 工具,信任度則低數個百分點(40%–48%)。這翻轉了人口層級的擴散模式 — 在後者中,AI 採用與人均 GDP 強烈相關。" }
      },
      {
        slug: "expert-public-gap",
        title:   { en: "The 50-point expert–public gap", zh: "50 點的「專家—大眾」鴻溝" },
        summary: { en: "On jobs, 73% of experts vs 23% of the public expect a positive impact.",
                   zh: "在工作上,73% 專家 vs 23% 大眾預期正面影響。" },
        tags: ["expert-gap"],
        overview: { en: "Across nearly every topic, AI experts are far more optimistic than the US public. The widest gap is on the future of work: 73% of experts expect a positive impact on how people do their jobs, versus 23% of the public — a 50-point gap. Similar divides appear for the economy (69% vs. 21%), K–12 education (61% vs. 24%), and medical care (84% vs. 44%). The exceptions are domains tied to trust and social connection — elections, the news, and personal relationships — where both groups are pessimistic and nearly aligned. The chapter's framing: experts and the public disagree most about capability and benefit, and agree most about social risk.",
                    zh: "在幾乎每一個主題上,AI 專家都比美國大眾樂觀得多。最大的鴻溝在工作的未來:73% 的專家預期 AI 對「人們如何工作」帶來正面影響,而大眾只有 23% — 相差 50 個百分點。經濟(69% vs. 21%)、K–12 教育(61% vs. 24%)與醫療(84% vs. 44%)也出現類似分歧。例外是與信任和社會連結相關的領域 — 選舉、新聞與人際關係 — 在這些領域,兩個群體都悲觀且幾乎一致。本章的定調是:專家與大眾在「能力與好處」上最分歧,在「社會風險」上最一致。" }
      },
      {
        slug: "jobs-forecast",
        title:   { en: "Jobs: public dread, expert speed", zh: "工作:大眾恐懼,專家看速度" },
        summary: { en: "64% of Americans expect fewer jobs; experts forecast AI assisting 18% of work hours by 2030.",
                   zh: "64% 美國人預期更少工作;專家預測 2030 年 AI 協助 18% 工時。" },
        tags: ["jobs"],
        overview: { en: "Nearly two-thirds of Americans (64%) expect AI to lead to fewer jobs over the next 20 years, while only 5% expect more. Experts are less pessimistic on the net effect — 39% expect fewer jobs and 19% expect more — but they forecast far faster adoption, expecting generative AI to assist 18% of US work hours by 2030, nearly double the public's estimate of 10%. The mismatch matters: the public fears the destination (fewer jobs) while experts emphasize the velocity (rapid integration). Both can be true, and the gap shapes how each group weighs the urgency of policy and reskilling.",
                    zh: "近三分之二的美國人(64%)預期未來 20 年 AI 會帶來更少工作,只有 5% 預期更多。專家對淨效果沒那麼悲觀 — 39% 預期更少、19% 預期更多 — 但預測採用速度快得多,預期到 2030 年生成式 AI 會協助 18% 的美國工時,幾乎是大眾估計(10%)的兩倍。這種落差很重要:大眾害怕的是終點(更少工作),專家強調的是速度(快速整合)。兩者可能都成立,而這道鴻溝形塑了各群體如何衡量政策與再培訓的迫切性。" }
      },
      {
        slug: "ai-companionship",
        title:   { en: "AI companionship, still niche", zh: "AI 陪伴,仍是小眾" },
        summary: { en: "52% globally feel some excitement vs 42% in the US; experts foresee 30% of US adults daily by 2040.",
                   zh: "全球 52% 有些興奮 vs 美國 42%;專家預估 2040 年美國 30% 成人每日使用。" },
        tags: ["companions"],
        overview: { en: "AI companionship — systems built to prioritize relationship-building over task completion, like Replika or Character.ai — remains niche, with global views varying widely. More than half of respondents worldwide (52%) reported some excitement about using AI for companionship, compared with just 42% in the United States. Experts forecast rapid growth: 10% of US adults using an AI companion daily by 2027, rising to 30% by 2040. The technology carries both benefits (emotional support, accessibility) and risks (dependency, displacement of human relationships), and the wide cross-country spread suggests cultural norms shape acceptance as much as the technology itself.",
                    zh: "AI 陪伴 — 為「建立關係」而非「完成任務」而設計的系統,如 Replika 或 Character.ai — 仍是小眾,各國看法差異甚大。全球超過半數受訪者(52%)對用 AI 作陪伴有些興奮,而美國只有 42%。專家預測會快速成長:2027 年 10% 的美國成人每日使用 AI 陪伴,2040 年升至 30%。這項技術兼具好處(情緒支持、可近性)與風險(依賴、取代人際關係),而跨國的巨大差異顯示,文化規範對接受度的影響不亞於技術本身。" }
      }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 9 · Public Opinion.",
                zh: "第 9 章「民意」的頭條發現。" },
    quotes: [
      { text: { en: "AI optimism is rising, but so is anxiety: benefits-outweigh-drawbacks rose from 55% to 59% as nervousness climbed to 52%.",
                zh: "AI 樂觀在上升,焦慮也是:「利大於弊」從 55% 升到 59%,而緊張感攀升至 52%。" },
        by: "Chapter 9 · Public Opinion" },
      { text: { en: "In Malaysia, Thailand, Indonesia, and Singapore, more than 80% of respondents say AI will profoundly change their lives in the next 3–5 years.",
                zh: "在馬來西亞、泰國、印尼與新加坡,逾 80% 受訪者表示 AI 會在未來 3–5 年深刻改變他們的生活。" },
        by: "Chapter 9 · Public Opinion" },
      { text: { en: "On how people do their jobs, 73% of experts expect a positive impact, compared to just 23% of the public — a 50-point gap.",
                zh: "在「人們如何工作」上,73% 的專家預期正面影響,而大眾只有 23% — 相差 50 個百分點。" },
        by: "Chapter 9 · Public Opinion" },
      { text: { en: "Nearly two-thirds of Americans (64%) expect AI to lead to fewer jobs over the next 20 years, while only 5% expect more.",
                zh: "近三分之二的美國人(64%)預期未來 20 年 AI 帶來更少工作,只有 5% 預期更多。" },
        by: "Chapter 9 · Public Opinion" },
      { text: { en: "The United States reported the lowest trust in its own government to regulate AI of any country surveyed, at 31% — versus a global average of 54%.",
                zh: "在所有受訪國家中,美國對自家政府監管 AI 的信任最低,僅 31% — 而全球平均為 54%。" },
        by: "Chapter 9 · Public Opinion" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Public Opinion chapter", zh: "閱讀完整的民意章節" },
    text:  { en: "Chapter 9 (sections 9.1–9.3) with every figure and citation is free from Stanford HAI. Or head back to the 15 takeaways and nine-chapter overview.",
             zh: "第 9 章(9.1–9.3 各節)連同所有圖表與引用,皆由史丹佛 HAI 免費提供。或回到 15 條重點與九大章節總覽。" },
    link:  { label: { en: "Open Chapter 9 · Public Opinion →", zh: "前往第 9 章:民意 →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/public-opinion" }
  }
];

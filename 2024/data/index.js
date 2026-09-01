/* =========================================================================
   AI Index Report 2024 · index.js — the edition overview

   Source: Stanford HAI — Artificial Intelligence Index Report 2024 (7th ed.)
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   Built from the report's own "Top 10 Takeaways" and the per-chapter Report
   Highlights. The 2024 edition reports on calendar year 2023.

   Nine chapters — this is the last edition in which Diversity stands as a
   chapter of its own.
   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Stanford HAI's seventh edition, read as data — 10 takeaways, 9 chapters.",
              zh: "史丹佛 HAI 第七版,用資料讀懂 — 10 條重點、9 大章節。" }
};

window.SITE_SECTIONS = [

  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "2023: money left the room, and generative AI took it anyway",
                zh: "2023 年:錢退場了,生成式 AI 還是把場子接了下來" },
    subtitle: { en: "The 2024 AI Index covers calendar year 2023 across nine chapters — research, technical performance, responsible AI, the economy, science and medicine, education, policy, diversity, and public opinion. Overall private AI investment fell for a second straight year, yet generative AI funding nearly octupled, models got dramatically more expensive to train, and the public grew markedly more nervous. A few numbers that set the scene:",
                zh: "2024 年 AI 指數涵蓋 2023 年,分為九大章節:研發、技術表現、負責任 AI、經濟、科學與醫療、教育、政策、多元性與民意。整體 AI 私人投資連續第二年下滑,但生成式 AI 募資近乎成長八倍;模型訓練成本大幅飆升,而大眾的不安也明顯上升。先看幾個定錨的數字:" },
    stats: [
      { label: { en: "foundation models released in 2023, over double 2022", zh: "2023 年發布的基礎模型數,是 2022 年的兩倍有餘" }, value: 149 },
      { label: { en: "generative AI private investment (US$ bn), ~8× 2022", zh: "生成式 AI 私人投資(十億美元),約為 2022 年的 8 倍" }, value: 25.2 },
      { label: { en: "notable AI models from US institutions (EU 21, China 15)", zh: "來自美國機構的重要 AI 模型數(歐盟 21、中國 15)" }, value: 61 },
      { label: { en: "US$ millions of compute to train Gemini Ultra", zh: "百萬美元 — 訓練 Gemini Ultra 的算力成本" }, value: 191 },
      { label: { en: "AI incidents reported in 2023, up 32.3%", zh: "2023 年 AI 事故通報件數,成長 32.3%" }, value: 123 },
      { label: { en: "AI-related US regulations in 2023 (one in 2016)", zh: "2023 年美國 AI 相關法規數(2016 年僅 1 條)" }, value: 25 }
    ]
  },

  /* ----------------------------------------------------------- TAKEAWAYS */
  {
    type: "cards",
    id: "takeaways",
    nav:      { en: "10 Takeaways", zh: "10 條重點" },
    title:    { en: "The 10 Top Takeaways", zh: "10 條重點摘要" },
    subtitle: { en: "The report's own summary of the year, in its own order. Click any card for the full text.",
                zh: "報告自身對這一年的總結,依其原本順序排列。點任一張卡片可看完整內容。" },
    items: [
      { slug: "beats-humans",
        title:   { en: "1 · AI beats humans on some tasks, but not on all", zh: "1 · AI 在部分任務上勝過人類,但不是全部" },
        summary: { en: "AI has passed human baselines on image classification, visual reasoning and English understanding — and still trails on competition mathematics, visual commonsense reasoning and planning.",
                   zh: "AI 已在影像分類、視覺推理與英文理解上超越人類基線 — 但在競賽級數學、視覺常識推理與規劃上仍然落後。" },
        tags: ["benchmarks"],
        overview: { en: "The pattern matters more than any single score: the tasks AI has cleared are ones with a fixed answer and abundant training data, while the ones it has not require holding a plan together over many steps. Saturation on ImageNet, SQuAD and SuperGLUE is what pushed researchers to build harder benchmarks in 2023.",
                    zh: "比任何單一分數更重要的是那個模式:AI 攻克的任務都有固定答案與充足訓練資料,尚未攻克的則需要在多個步驟間維持一致的計畫。ImageNet、SQuAD 與 SuperGLUE 的分數飽和,正是研究者在 2023 年建立更難基準的原因。" } },
      { slug: "industry-dominates",
        title:   { en: "2 · Industry continues to dominate frontier AI research", zh: "2 · 產業界持續主導前沿 AI 研究" },
        summary: { en: "In 2023 industry produced 51 notable machine learning models to academia's 15, plus 21 from industry–academia collaborations — a new high.",
                   zh: "2023 年產業界產出 51 個重要機器學習模型,學術界僅 15 個;另有 21 個來自產學合作,創下新高。" },
        tags: ["research"],
        overview: { en: "The collaboration figure is the one to watch: 21 models is the highest ever recorded, suggesting academia's route to the frontier now runs through industry compute rather than around it.",
                    zh: "值得注意的是合作數字:21 個是歷來最高,顯示學術界通往前沿的路徑,如今是穿過產業界的算力,而不是繞過它。" } },
      { slug: "expensive",
        title:   { en: "3 · Frontier models get way more expensive", zh: "3 · 前沿模型的訓練成本大幅飆升" },
        summary: { en: "By AI Index estimates, OpenAI's GPT-4 used about $78 million of compute to train; Google's Gemini Ultra cost roughly $191 million.",
                   zh: "依 AI 指數估算,OpenAI 的 GPT-4 訓練用掉約 7,800 萬美元的算力,Google 的 Gemini Ultra 則約 1 億 9,100 萬美元。" },
        tags: ["cost"],
        overview: { en: "These are compute costs alone — not salaries, not data acquisition, not the failed runs that preceded them. Training costs at this level are what put the frontier out of reach for almost every actor outside a handful of firms.",
                    zh: "這些只是算力成本 — 不含薪資、不含資料取得,也不含在此之前失敗的訓練。這個量級的訓練成本,正是讓少數幾家公司之外幾乎所有人都摸不到前沿的原因。" } },
      { slug: "us-leads",
        title:   { en: "4 · The US leads China, the EU and the UK on top models", zh: "4 · 美國在頂尖模型上領先中國、歐盟與英國" },
        summary: { en: "61 notable AI models originated from US-based institutions in 2023, far outpacing the European Union's 21 and China's 15.",
                   zh: "2023 年有 61 個重要 AI 模型來自美國機構,遠超歐盟的 21 個與中國的 15 個。" },
        tags: ["geopolitics"],
        overview: { en: "Model count is not the same as model quality, and China leads decisively on a different measure: it accounted for 61.1% of global AI patent origins in 2022, against the United States' 20.9%.",
                    zh: "模型數量不等於模型品質,而中國在另一個指標上明顯領先:2022 年全球 AI 專利來源中,中國占 61.1%,美國占 20.9%。" } },
      { slug: "rai-standards",
        title:   { en: "5 · Standardized evaluations for LLM responsibility are seriously lacking", zh: "5 · 大型語言模型的責任評估嚴重缺乏標準" },
        summary: { en: "OpenAI, Google and Anthropic each test their models against largely different responsible-AI benchmarks, which makes their risks impossible to compare systematically.",
                   zh: "OpenAI、Google 與 Anthropic 各自使用大不相同的負責任 AI 基準來測試模型,使得它們的風險無法被系統性比較。" },
        tags: ["responsible AI"],
        overview: { en: "This is new AI Index research, and it is a measurement problem before it is a safety problem: without a shared yardstick, a developer's own report of its model's safety cannot be checked against anyone else's. The Foundation Model Transparency Index, introduced the same year, found disclosure especially thin on training data and methodology.",
                    zh: "這是 AI 指數的新研究,而它首先是一個量測問題,其次才是安全問題:沒有共同的量尺,開發者對自家模型安全性的說法就無從與他人對照。同年推出的基礎模型透明度指數也發現,訓練資料與方法論的揭露尤其稀薄。" } },
      { slug: "genai-investment",
        title:   { en: "6 · Generative AI investment skyrockets", zh: "6 · 生成式 AI 投資暴衝" },
        summary: { en: "Despite a decline in overall AI private investment, generative AI funding nearly octupled from 2022 to reach $25.2 billion.",
                   zh: "儘管整體 AI 私人投資下滑,生成式 AI 募資仍較 2022 年成長近八倍,達到 252 億美元。" },
        tags: ["economy"],
        overview: { en: "OpenAI, Anthropic, Hugging Face and Inflection all reported substantial rounds. The two directions are the story: global private AI investment fell for a second consecutive year while one category inside it grew eightfold.",
                    zh: "OpenAI、Anthropic、Hugging Face 與 Inflection 都完成了可觀的募資。兩個相反的方向才是重點:全球 AI 私人投資連續第二年下滑,而其中一個類別卻成長了八倍。" } },
      { slug: "productivity",
        title:   { en: "7 · The data is in: AI makes workers more productive", zh: "7 · 資料出爐:AI 讓工作者更有生產力" },
        summary: { en: "Several 2023 studies found AI helps workers finish tasks faster and produce better output, and can narrow the gap between low- and high-skilled workers.",
                   zh: "2023 年的多項研究發現,AI 讓工作者更快完成任務、產出品質更好,並能縮小低技能與高技能工作者之間的落差。" },
        tags: ["labor"],
        overview: { en: "The caveat travels with the finding: other studies show that using AI without proper oversight can make performance worse, not better. The productivity gain is conditional on knowing when to override the model.",
                    zh: "但這個發現有個附帶條件:其他研究顯示,在缺乏適當監督下使用 AI 反而會讓表現下滑。生產力的提升,取決於使用者知道何時該推翻模型。" } },
      { slug: "science",
        title:   { en: "8 · Scientific progress accelerates even further, thanks to AI", zh: "8 · AI 讓科學進展再度加速" },
        summary: { en: "2023 brought AlphaDev, which makes algorithmic sorting more efficient, and GNoME, which accelerates materials discovery — a step up from 2022's first applications.",
                   zh: "2023 年出現了讓排序演算法更有效率的 AlphaDev,以及加速材料發現的 GNoME — 比 2022 年的初步應用更進一步。" },
        tags: ["science"],
        overview: { en: "Medicine moved with it: EVEscape improves pandemic prediction, AlphaMissense assists mutation classification, and GPT-4 Medprompt reached 90.2% on MedQA — 22.6 percentage points above the best 2022 score.",
                    zh: "醫療端同步推進:EVEscape 改善大流行預測,AlphaMissense 協助突變分類,而 GPT-4 Medprompt 在 MedQA 上達到 90.2%,較 2022 年最佳成績高出 22.6 個百分點。" } },
      { slug: "regulations",
        title:   { en: "9 · The number of AI regulations in the United States sharply increases", zh: "9 · 美國的 AI 法規數量急遽增加" },
        summary: { en: "There were 25 AI-related US regulations in 2023, up from just one in 2016 — a 56.3% increase in a single year.",
                   zh: "2023 年美國有 25 條 AI 相關法規,2016 年只有 1 條 — 單一年度就成長 56.3%。" },
        tags: ["policy"],
        overview: { en: "The number of agencies issuing them rose too, from 17 to 21, with the Department of Transportation, the Department of Energy and OSHA regulating AI for the first time. The EU reached its deal on the AI Act the same year, and President Biden signed an Executive Order on AI.",
                    zh: "發布法規的機關數也從 17 個增至 21 個,運輸部、能源部與職業安全衛生署都是首度對 AI 立規。同年歐盟就 AI 法案達成協議,拜登總統也簽署了 AI 行政命令。" } },
      { slug: "nervous",
        title:   { en: "10 · People are more cognizant of AI's impact — and more nervous", zh: "10 · 人們更意識到 AI 的影響 — 也更緊張" },
        summary: { en: "Ipsos finds those expecting AI to dramatically affect their lives within three to five years rose from 60% to 66%, while 52% now express nervousness — up 13 points from 2022.",
                   zh: "Ipsos 調查顯示,預期 AI 會在三到五年內大幅影響自身生活的比例由 60% 升至 66%;同時 52% 表示感到緊張,較 2022 年上升 13 個百分點。" },
        tags: ["public opinion"],
        overview: { en: "In the United States, Pew data shows 52% of Americans feel more concerned than excited about AI, up from 38% in 2022. Awareness and anxiety rose together — the same survey year in which only 37% expected AI to improve their own job.",
                    zh: "在美國,Pew 資料顯示 52% 的人對 AI 感到擔憂多於興奮,2022 年為 38%。認知與焦慮同步上升 — 同一份調查中,只有 37% 的人預期 AI 會改善自己的工作。" } }
    ]
  },

  /* -------------------------------------------------------------- CHARTS */
  {
    type: "bars",
    id: "investment",
    nav:      { en: "Investment", zh: "投資" },
    title:    { en: "Where the private money went in 2023", zh: "2023 年私人資金流向何處" },
    subtitle: { en: "Private AI investment by geographic area, US$ billions. US investment rose 22.1% while China fell 44.2% and the EU-plus-UK fell 14.1%.",
                zh: "各地區私人 AI 投資,單位十億美元。美國成長 22.1%,中國下滑 44.2%,歐盟加英國下滑 14.1%。" },
    series: [
      { label: { en: "United States", zh: "美國" }, value: 67.2 },
      { label: { en: "China",         zh: "中國" }, value: 7.8 },
      { label: { en: "United Kingdom", zh: "英國" }, value: 3.8 }
    ]
  },
  {
    type: "bars",
    id: "models",
    nav:      { en: "Top Models", zh: "頂尖模型" },
    title:    { en: "Who built the notable models of 2023", zh: "2023 年的重要模型出自何處" },
    subtitle: { en: "Notable AI models by originating region. The US lead here sits alongside China's 61.1% share of global AI patent origins — two different measures of the same race.",
                zh: "重要 AI 模型的來源地區。美國在此領先,但中國在全球 AI 專利來源中占 61.1% — 這是同一場競賽的兩種量法。" },
    series: [
      { label: { en: "United States",  zh: "美國" }, value: 61 },
      { label: { en: "European Union", zh: "歐盟" }, value: 21 },
      { label: { en: "China",          zh: "中國" }, value: 15 }
    ]
  },

  /* ------------------------------------------------------------ CHAPTERS */
  {
    type: "accordion",
    id: "chapters",
    nav:      { en: "Chapters", zh: "各章重點" },
    title:    { en: "Nine chapters, in brief", zh: "九大章節速覽" },
    subtitle: { en: "Each chapter's headline highlights. Expand to read the key numbers.",
                zh: "各章的重點摘要。展開可看關鍵數字。" },
    qa: [
      { q: { en: "1 · Research & Development", zh: "1 · 研發" },
        a: { en: "Industry produced 51 notable models against academia's 15, with a record 21 from collaborations. 149 foundation models were released, 65.7% of them open-source, up from 44.4% in 2022. Training costs reached an estimated $78M for GPT-4 and $191M for Gemini Ultra. The US led on notable models (61 vs the EU's 21 and China's 15), while China led AI patent origins at 61.1%. GitHub AI projects reached roughly 1.8 million.",
             zh: "產業界產出 51 個重要模型,學術界 15 個,產學合作 21 個創下新高。共發布 149 個基礎模型,其中 65.7% 為開源,2022 年僅 44.4%。訓練成本方面,GPT-4 估計 7,800 萬美元、Gemini Ultra 1 億 9,100 萬美元。美國以 61 個重要模型領先歐盟 21 個與中國 15 個,而中國在 AI 專利來源占 61.1%。GitHub 上的 AI 專案約達 180 萬個。" },
        link: { url: "research.html", label: { en: "Full deep dive: Research & Development →", zh: "完整詳解:研發 →" } } },
      { q: { en: "2 · Technical Performance", zh: "2 · 技術表現" },
        a: { en: "AI passed human baselines on image classification, visual reasoning and English understanding but not on competition mathematics, visual commonsense reasoning or planning. Saturation on ImageNet, SQuAD and SuperGLUE prompted harder benchmarks — SWE-bench, HEIM, MMMU, MoCa, AgentBench and HaluEval all launched in 2023. Closed models beat open ones by a median 24.2% across ten benchmarks.",
             zh: "AI 在影像分類、視覺推理與英文理解上超越人類基線,但在競賽級數學、視覺常識推理與規劃上尚未達標。ImageNet、SQuAD 與 SuperGLUE 分數飽和,促成更難的基準誕生 — SWE-bench、HEIM、MMMU、MoCa、AgentBench 與 HaluEval 都在 2023 年推出。在十項基準上,閉源模型的中位數表現領先開源模型 24.2%。" },
        link: { url: "performance.html", label: { en: "Full deep dive: Technical Performance →", zh: "完整詳解:技術表現 →" } } },
      { q: { en: "3 · Responsible AI", zh: "3 · 負責任 AI" },
        a: { en: "The headline finding is a measurement gap: leading developers each test against different responsible-AI benchmarks, so their risks cannot be compared. AI incidents rose to 123 in 2023, up 32.3 percentage points and more than twentyfold since 2013. Political deepfakes proved easy to make and hard to detect, LLMs were shown to output copyrighted material, and the new Foundation Model Transparency Index found disclosure especially thin on training data.",
             zh: "最主要的發現是一個量測落差:主要開發者各自使用不同的負責任 AI 基準,導致風險無法互相比較。2023 年 AI 事故上升至 123 件,增加 32.3 個百分點,較 2013 年成長逾二十倍。政治深偽被證實容易製作、難以偵測;大型語言模型會輸出受著作權保護的內容;新推出的基礎模型透明度指數則發現訓練資料的揭露尤其稀薄。" },
        link: { url: "responsible-ai.html", label: { en: "Full deep dive: Responsible AI →", zh: "完整詳解:負責任 AI →" } } },
      { q: { en: "4 · Economy", zh: "4 · 經濟" },
        a: { en: "Global private AI investment fell for a second year to $189.2 billion, yet generative AI funding nearly octupled to $25.2 billion. US investment reached $67.2 billion, about 8.7× China's. AI job postings in the US fell from 2.0% to 1.6% of all listings. 55% of organizations now use AI, up from 50%. China installed 52.4% of the world's industrial robots. AI was mentioned on 394 Fortune 500 earnings calls.",
             zh: "全球 AI 私人投資連續第二年下滑至 1,892 億美元,但生成式 AI 募資近乎成長八倍至 252 億美元。美國投資達 672 億美元,約為中國的 8.7 倍。美國 AI 職缺占比由 2.0% 降至 1.6%。55% 的組織已使用 AI,前一年為 50%。中國安裝了全球 52.4% 的工業機器人。財星 500 大企業中有 394 場法說會提及 AI。" },
        link: { url: "economy.html", label: { en: "Full deep dive: Economy →", zh: "完整詳解:經濟 →" } } },
      { q: { en: "5 · Science & Medicine", zh: "5 · 科學與醫療" },
        a: { en: "AlphaDev improved algorithmic sorting and GNoME accelerated materials discovery; EVEscape improved pandemic prediction and AlphaMissense assisted mutation classification. GPT-4 Medprompt scored 90.2% on MedQA, 22.6 points above the best 2022 result, roughly tripling performance since the benchmark launched in 2019. The FDA approved 139 AI-related medical devices in 2022, up 12.1% and more than 45-fold since 2012.",
             zh: "AlphaDev 改進了排序演算法,GNoME 加速材料發現;EVEscape 改善大流行預測,AlphaMissense 協助突變分類。GPT-4 Medprompt 在 MedQA 上取得 90.2%,較 2022 年最佳成績高 22.6 個百分點,自 2019 年基準推出以來表現約成長三倍。FDA 在 2022 年核准 139 項 AI 相關醫材,年增 12.1%,較 2012 年成長逾 45 倍。" },
        link: { url: "science-medicine.html", label: { en: "Full deep dive: Science & Medicine →", zh: "完整詳解:科學與醫療 →" } } },
      { q: { en: "6 · Education", zh: "6 · 教育" },
        a: { en: "US and Canadian CS bachelor's graduates kept rising while master's and PhD numbers flattened. The migration of new AI PhDs into industry accelerated: 70.7% went to industry in 2022 against 20.0% to academia, from a near-even split in 2011. Movement the other way thinned — new AI faculty coming from industry fell from 13% in 2019 to 7% in 2022. 201,000 AP CS exams were taken in 2022, more than ten times the 2007 figure.",
             zh: "美加的資訊科學學士畢業人數持續上升,碩博士則趨於平緩。新科 AI 博士流入產業界的速度加快:2022 年有 70.7% 進入產業界、20.0% 進入學術界,而 2011 年兩者幾乎各半。反向流動則變薄 — 來自產業界的新任 AI 教職由 2019 年的 13% 降至 2022 年的 7%。2022 年有 20 萬 1,000 人次應考 AP 資訊科學,是 2007 年的十倍以上。" },
        link: { url: "education.html", label: { en: "Full deep dive: Education →", zh: "完整詳解:教育 →" } } },
      { q: { en: "7 · Policy & Governance", zh: "7 · 政策與治理" },
        a: { en: "US AI-related regulations reached 25 in 2023, up from one in 2016 and growing 56.3% in a year, issued by 21 agencies rather than 17. Federal AI bills proposed more than doubled, from 88 to 181. Globally, mentions of AI in legislative proceedings nearly doubled from 1,247 to 2,175, across 49 countries and every continent. The EU agreed the terms of the AI Act and President Biden signed an Executive Order on AI.",
             zh: "美國 AI 相關法規在 2023 年達 25 條,2016 年僅 1 條,單年成長 56.3%,發布機關由 17 個增至 21 個。聯邦層級提出的 AI 法案由 88 件倍增至 181 件。全球立法程序中提及 AI 的次數由 1,247 次近乎倍增至 2,175 次,涵蓋 49 個國家、橫跨各大洲。歐盟就 AI 法案條文達成協議,拜登總統簽署 AI 行政命令。" },
        link: { url: "policy.html", label: { en: "Full deep dive: Policy & Governance →", zh: "完整詳解:政策與治理 →" } } },
      { q: { en: "8 · Diversity", zh: "8 · 多元性" },
        a: { en: "US and Canadian CS students grew more ethnically diverse at all three degree levels — the Asian share of CS bachelor's graduates rose 19.8 percentage points since 2011 and the Hispanic share 5.2 points. Every surveyed European country still produced more male than female informatics and CS graduates at every level, narrowing only slowly. In US K–12, the female share of AP CS exams rose from 16.8% in 2007 to 30.5% in 2022.",
             zh: "美加的資訊科學學生在三個學位層級都更加族裔多元 — 亞裔在資訊科學學士畢業生中的占比自 2011 年上升 19.8 個百分點,西語裔上升 5.2 個百分點。受調查的歐洲國家在各學位層級仍是男性畢業生多於女性,差距縮小的速度緩慢。在美國 K–12,女性應考 AP 資訊科學的占比由 2007 年的 16.8% 升至 2022 年的 30.5%。" },
        link: { url: "diversity.html", label: { en: "Full deep dive: Diversity →", zh: "完整詳解:多元性 →" } } },
      { q: { en: "9 · Public Opinion", zh: "9 · 民意" },
        a: { en: "Ipsos found the share expecting AI to dramatically affect their lives within three to five years rose from 60% to 66%, and 52% now express nervousness, up 13 points. In the US, Pew found 52% more concerned than excited, up from 38%. The public is pessimistic about the economics: only 37% think AI will improve their job, 34% the economy and 32% the job market. 63% are aware of ChatGPT, and about half of those use it weekly.",
             zh: "Ipsos 發現,預期 AI 會在三到五年內大幅影響生活的比例由 60% 升至 66%,52% 感到緊張,上升 13 個百分點。在美國,Pew 發現 52% 的人擔憂多於興奮,前次為 38%。大眾對經濟面偏悲觀:只有 37% 認為 AI 會改善自己的工作、34% 認為會提振經濟、32% 認為會改善就業市場。63% 的人知道 ChatGPT,其中約半數每週使用。" },
        link: { url: "public-opinion.html", label: { en: "Full deep dive: Public Opinion →", zh: "完整詳解:民意 →" } } }
    ]
  },

  /* -------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In Its Words", zh: "報告原文" },
    title:    { en: "In the report's own words", zh: "報告自己的說法" },
    subtitle: { en: "Lines that capture the year, from the Top 10 Takeaways and the chapter highlights.",
                zh: "取自 10 條重點與各章摘要,足以定義這一年的句子。" },
    quotes: [
      { text: { en: "AI has surpassed human performance on several benchmarks, including some in image classification, visual reasoning and English understanding. Yet it trails behind on more complex tasks.",
                zh: "AI 已在數項基準上超越人類表現,包括部分影像分類、視覺推理與英文理解;但在更複雜的任務上仍然落後。" },
        by: "Top 10 Takeaways" },
      { text: { en: "Despite a decline in overall AI private investment last year, funding for generative AI surged, nearly octupling from 2022 to reach $25.2 billion.",
                zh: "儘管去年整體 AI 私人投資下滑,生成式 AI 的募資仍逆勢暴增,較 2022 年成長近八倍至 252 億美元。" },
        by: "Top 10 Takeaways" },
      { text: { en: "Leading developers primarily test their models against different responsible AI benchmarks. This practice complicates efforts to systematically compare the risks and limitations of top AI models.",
                zh: "主要開發者多半使用各自不同的負責任 AI 基準來測試模型,這使得系統性比較頂尖模型的風險與限制變得困難。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "In 2011, roughly equal percentages of new AI PhDs took jobs in industry and academia. By 2022, 70.7% joined industry compared with 20.0% entering academia.",
                zh: "2011 年,新科 AI 博士進入產業界與學術界的比例大致相當。到 2022 年,70.7% 進入產業界,僅 20.0% 進入學術界。" },
        by: "Chapter 6 · Education" },
      { text: { en: "52% express nervousness toward AI products and services, marking a 13 percentage point rise from 2022.",
                zh: "52% 的受訪者對 AI 產品與服務感到緊張,較 2022 年上升 13 個百分點。" },
        by: "Chapter 9 · Public Opinion" }
    ]
  },

  /* ----------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "報告原文" },
    title: { en: "Read the full report", zh: "閱讀完整報告" },
    text:  { en: "502 pages, nine chapters, hundreds of charts — free from Stanford HAI, with the underlying public data.",
             zh: "502 頁、九大章節、數百張圖表 — 史丹佛 HAI 免費提供,並附上原始公開資料。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

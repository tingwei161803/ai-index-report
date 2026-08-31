/* =========================================================================
   AI Index Report 2026 · data.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026 (9th ed.)
   https://hai.stanford.edu/ai-index/2026-ai-index-report

   Non-official, educational reformatting of the report's public findings into
   an interactive page. Every figure here is drawn from the report's Top
   Takeaways and per-chapter highlights. All strings are bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Stanford HAI's ninth edition, read as data — 15 takeaways, 9 chapters.",
              zh: "史丹佛 HAI 第九版,用資料讀懂 — 15 條重點、9 大章節。" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "AI scaled faster than the systems around it could adapt",
                zh: "AI 擴張的速度,快過周遭體系能調適的速度" },
    subtitle: { en: "The 2026 AI Index — an independent Stanford HAI initiative — tracks AI across research, performance, responsibility, economy, science, medicine, education, policy, and public opinion. A few numbers that set the scene:",
                zh: "2026 年 AI 指數是史丹佛 HAI 的獨立計畫,橫跨研發、技術表現、負責任 AI、經濟、科學、醫療、教育、政策與民意。先看幾個定錨的數字:" },
    stats: [
      { label: { en: "% organizational AI adoption", zh: "% 組織採用 AI" }, value: 88 },
      { label: { en: "% GenAI population adoption in 3 yrs", zh: "% 生成式 AI 三年內人口採用率" }, value: 53 },
      { label: { en: "US private AI investment (US$ bn, 2025)", zh: "美國民間 AI 投資(十億美元,2025)" }, value: 286 },
      { label: { en: "US data centers — 10× any other country", zh: "美國資料中心數 — 是任一他國的 10 倍" }, value: 5427 },
      { label: { en: "AI incidents logged in 2025 (was 233)", zh: "2025 年 AI 事故通報(2024 為 233)" }, value: 362 },
      { label: { en: "% of notable frontier models from industry", zh: "% 重要前沿模型來自產業界" }, value: 90 }
    ]
  },

  /* -------------------------------------------------------- TAKEAWAYS */
  {
    type: "cards",
    id: "takeaways",
    title:    { en: "The 15 Top Takeaways", zh: "15 條重點摘要" },
    subtitle: { en: "The report's own headline findings. Tap any card for the full finding and its numbers.",
                zh: "報告自己挑出的頭條發現。點任一張卡片看完整結論與數字。" },
    items: [
      {
        slug: "capability-accelerating",
        title:   { en: "AI capability is not plateauing — it is accelerating",
                   zh: "AI 能力沒有停滯 — 而是在加速" },
        summary: { en: "Models now meet or beat human baselines on PhD science, multimodal reasoning, and competition math.",
                   zh: "模型在博士級科學、多模態推理與競賽數學上,已達到或超越人類基準。" },
        tags: ["capability"],
        overview: { en: "Industry produced over 90% of notable frontier models in 2025, and several now meet or exceed human baselines on PhD-level science questions, multimodal reasoning, and competition mathematics. On SWE-bench Verified, a key coding benchmark, performance rose from 60% to near 100% of the human baseline in a single year. Organizational adoption reached 88%, and 4 in 5 university students now use generative AI.",
                    zh: "2025 年,產業界產出超過 90% 的重要前沿模型,其中數個在博士級科學問題、多模態推理與競賽數學上已達到或超越人類基準。在關鍵程式設計基準 SWE-bench Verified 上,表現一年內從人類基準的 60% 上升到接近 100%。組織採用率達 88%,且每 5 名大學生就有 4 名使用生成式 AI。" }
      },
      {
        slug: "us-china-gap-closed",
        title:   { en: "The U.S.–China model performance gap has effectively closed",
                   zh: "美中模型效能差距實質上已消失" },
        summary: { en: "The two have traded the lead repeatedly; as of March 2026 the top U.S. model leads by just 2.7%.",
                   zh: "兩國多次互換領先;截至 2026 年 3 月,頂尖美國模型僅領先 2.7%。" },
        tags: ["geopolitics"],
        overview: { en: "U.S. and Chinese models have traded the lead multiple times since early 2025. In February 2025, DeepSeek-R1 briefly matched the top U.S. model; as of March 2026 Anthropic's top model leads by just 2.7%. The U.S. still produces more top-tier models (59 vs. China's 35 in 2025) and higher-impact patents, while China leads in publication volume, citations, patent grants, and industrial robot installations. South Korea leads the world in AI patents per capita.",
                    zh: "自 2025 年初以來,美國與中國的模型多次互換領先。2025 年 2 月,DeepSeek-R1 一度追平頂尖美國模型;截至 2026 年 3 月,Anthropic 的頂尖模型僅領先 2.7%。美國仍產出較多頂級模型(2025 年 59 個 vs. 中國 35 個)與影響力更高的專利,而中國在發表量、被引用數、專利核准與工業機器人安裝量上領先。南韓的人均 AI 專利數位居全球第一。" }
      },
      {
        slug: "data-centers-tsmc",
        title:   { en: "The U.S. hosts the most data centers; one Taiwan foundry makes the chips",
                   zh: "美國擁有最多資料中心;晶片幾乎全由一家台灣晶圓廠製造" },
        summary: { en: "5,427 U.S. data centers — 10× any other country — and almost every leading AI chip comes from TSMC.",
                   zh: "美國有 5,427 座資料中心 — 是任一他國的 10 倍 — 而幾乎每顆頂尖 AI 晶片都來自台積電。" },
        tags: ["infrastructure"],
        overview: { en: "The United States hosts 5,427 data centers, more than ten times any other country, and consumes more energy than any other region. A single company, TSMC, fabricates almost every leading AI chip, making the global AI hardware supply chain dependent on one foundry in Taiwan — though a TSMC-U.S. expansion began operations in 2025. Global AI compute capacity has grown about 3.3× per year since 2022, reaching 17.1 million H100-equivalents.",
                    zh: "美國擁有 5,427 座資料中心,超過任一他國的十倍,耗能也居各區之冠。單一公司台積電幾乎製造了每一顆頂尖 AI 晶片,使全球 AI 硬體供應鏈仰賴台灣這一家晶圓廠 — 不過台積電在美國的擴廠已於 2025 年投產。自 2022 年以來,全球 AI 運算量每年約成長 3.3 倍,達到 1,710 萬個 H100 等效算力。" }
      },
      {
        slug: "jagged-frontier",
        title:   { en: "A gold medal at the IMO, but it cannot reliably tell time",
                   zh: "能拿數學奧林匹亞金牌,卻看不準時鐘" },
        summary: { en: "The 'jagged frontier': Gemini Deep Think won IMO gold, yet the top model reads analog clocks just 50.1% of the time.",
                   zh: "「鋸齒狀前沿」:Gemini Deep Think 奪得 IMO 金牌,頂尖模型卻只有 50.1% 能讀對類比時鐘。" },
        tags: ["capability"],
        overview: { en: "Gemini Deep Think earned a gold medal at the International Mathematical Olympiad, yet the top model reads analog clocks correctly just 50.1% of the time — an example of what researchers call the jagged frontier of AI. AI agents made a leap from 12% to about 66% task success on OSWorld, which tests agents on real computer tasks across operating systems, though they still fail roughly 1 in 3 attempts on structured benchmarks.",
                    zh: "Gemini Deep Think 在國際數學奧林匹亞奪得金牌,但頂尖模型只有 50.1% 能正確判讀類比時鐘 — 這正是研究者所稱的「AI 鋸齒狀前沿」。在橫跨作業系統、測試真實電腦操作的 OSWorld 上,AI 代理的任務成功率從 12% 躍升至約 66%,但在結構化基準上仍約有三分之一的嘗試失敗。" }
      },
      {
        slug: "robots-household",
        title:   { en: "Robots still fail at most household tasks",
                   zh: "機器人仍然搞不定多數家務" },
        summary: { en: "Just 12% success on household tasks, even as software simulations reach 89.4% on RLBench.",
                   zh: "家務成功率僅 12%,儘管在 RLBench 軟體模擬中可達 89.4%。" },
        tags: ["robotics"],
        overview: { en: "Robots succeed in only 12% of household tasks, highlighting how far AI is from mastering the physical world. On RLBench, robotic manipulation in software-based simulations has reached 89.4% success, but the gap between predictable lab settings and unpredictable household environments is wide. Autonomous vehicles are a notable exception, having reached mass-scale deployment with promising early safety records.",
                    zh: "機器人在家務任務上的成功率只有 12%,凸顯 AI 距離駕馭實體世界還很遠。在 RLBench 上,軟體模擬中的機器人操作成功率已達 89.4%,但可預測的實驗室環境與難以預測的居家環境之間落差仍大。自駕車是顯著的例外,已達成大規模部署且早期安全紀錄看好。" }
      },
      {
        slug: "responsible-ai-lagging",
        title:   { en: "Responsible AI is not keeping pace with capability",
                   zh: "負責任 AI 沒有跟上能力的腳步" },
        summary: { en: "Safety benchmarks lag and incidents rose sharply — 362 documented in 2025, up from 233.",
                   zh: "安全基準落後、事故劇增 — 2025 年通報 362 起,2024 年為 233 起。" },
        tags: ["responsible-ai"],
        overview: { en: "Almost all leading frontier developers report results on capability benchmarks, but reporting on responsible AI benchmarks remains spotty. Documented AI incidents rose to 362 in 2025, up from 233 in 2024. Adding to the challenge, recent research found that improving one responsible-AI dimension — such as safety — can degrade another, such as accuracy. In a new accuracy benchmark, hallucination rates across 26 top models ranged from 22% to 94%.",
                    zh: "幾乎所有頂尖前沿開發者都會公布能力基準的結果,但負責任 AI 基準的揭露仍零星稀疏。2025 年通報的 AI 事故升至 362 起,高於 2024 年的 233 起。更棘手的是,近期研究發現改善某個負責任 AI 面向(如安全),可能會犧牲另一面向(如正確性)。在一項新的正確性基準中,26 個頂尖模型的幻覺率落在 22% 到 94% 之間。" }
      },
      {
        slug: "investment-talent",
        title:   { en: "The U.S. leads investment, but its pull on global talent is fading",
                   zh: "美國投資領先,但吸引全球人才的能力正在衰退" },
        summary: { en: "$285.9B private investment — 23× China — yet researchers moving to the U.S. fell 89% since 2017.",
                   zh: "民間投資 2,859 億美元 — 是中國的 23 倍 — 但移居美國的研究者自 2017 年來下降 89%。" },
        tags: ["investment"],
        overview: { en: "U.S. private AI investment reached $285.9 billion in 2025, more than 23 times the $12.4 billion invested in China — though those figures likely understate China's total spending given its government guidance funds. The U.S. also led entrepreneurial activity with 1,953 newly funded AI companies, more than 10 times the next country. However, the number of AI researchers and developers moving to the U.S. has dropped 89% since 2017, with an 80% decline in the last year alone.",
                    zh: "2025 年美國民間 AI 投資達 2,859 億美元,超過中國 124 億美元的 23 倍 — 不過考量中國的政府引導基金,這些數字很可能低估其總支出。美國的創業活動也領先,新獲資 AI 公司達 1,953 家,是次名國家的 10 倍以上。然而,移居美國的 AI 研究者與開發者自 2017 年以來下降了 89%,僅過去一年就減少 80%。" }
      },
      {
        slug: "adoption-consumer-value",
        title:   { en: "Adoption is spreading at historic speed — value often delivered for free",
                   zh: "採用以歷史性速度擴散 — 而且常以免費形式創造價值" },
        summary: { en: "53% population adoption in 3 years (faster than PC or internet); U.S. consumer value hit $172B/yr.",
                   zh: "三年達 53% 人口採用率(快過 PC 與網際網路);美國消費者價值達每年 1,720 億美元。" },
        tags: ["adoption"],
        overview: { en: "Generative AI reached 53% population adoption within three years, faster than the PC or the internet, though the pace varies by country and correlates strongly with GDP per capita. Some outpace what income predicts — Singapore (61%) and the UAE (54%) — while the U.S. ranks 24th at 28.3%. The estimated value of generative AI tools to U.S. consumers reached $172 billion annually by early 2026 (up from $112 billion a year earlier), with the median value per user tripling between 2025 and 2026. Most tools remain free or close to it.",
                    zh: "生成式 AI 在三年內達到 53% 的人口採用率,快過個人電腦或網際網路,但各國速度不一,且與人均 GDP 高度相關。有些國家超越所得所能預測 — 新加坡(61%)與阿聯(54%)— 而美國以 28.3% 排名第 24。截至 2026 年初,生成式 AI 工具對美國消費者的估計價值達每年 1,720 億美元(高於一年前的 1,120 億美元),每位使用者的中位數價值在 2025 至 2026 年間成長為三倍。多數工具仍免費或近乎免費。" }
      },
      {
        slug: "productivity-jobs",
        title:   { en: "Productivity gains appear where entry-level jobs are starting to shrink",
                   zh: "生產力提升出現的領域,正是入門職缺開始萎縮之處" },
        summary: { en: "14–26% gains in support and software dev; U.S. developers aged 22–25 saw employment fall nearly 20%.",
                   zh: "客服與軟體開發提升 14–26%;22–25 歲美國開發者就業下降近 20%。" },
        tags: ["labor"],
        overview: { en: "Studies show productivity gains of 14% to 26% in customer support and software development, with weaker or negative effects in tasks requiring more judgment. AI agent deployment remains in single digits across nearly all business functions. In software development — where measured productivity gains are clearest — U.S. developers ages 22 to 25 saw employment fall nearly 20% from 2024, even as headcount for older developers continued to grow. Some evidence suggests heavy AI reliance may carry long-term learning penalties.",
                    zh: "研究顯示客服與軟體開發的生產力提升 14% 到 26%,而需要較多判斷的任務效果較弱甚至為負。AI 代理在幾乎所有業務職能的部署比例仍是個位數。在生產力提升最明確的軟體開發領域,22 至 25 歲的美國開發者就業自 2024 年起下降近 20%,而年長開發者的人數仍持續成長。部分證據顯示,過度依賴 AI 可能帶來長期的學習代價。" }
      },
      {
        slug: "environmental-footprint",
        title:   { en: "AI's environmental footprint is expanding alongside its capabilities",
                   zh: "AI 的環境足跡隨能力一起擴大" },
        summary: { en: "Grok 4 training ≈72,816 tons CO₂e; data-center power hit 29.6 GW — comparable to New York at peak.",
                   zh: "Grok 4 訓練約 72,816 噸 CO₂e;資料中心電力達 29.6 GW — 相當於紐約州尖峰用電。" },
        tags: ["environment"],
        overview: { en: "Grok 4's estimated training emissions reached 72,816 tons of CO₂ equivalent. AI data center power capacity rose to 29.6 GW, comparable to New York state at peak demand, and annual GPT-4o inference water use alone may exceed the drinking water needs of 1.2 million people. AI's footprint is increasing across power, water, and emissions as systems scale.",
                    zh: "Grok 4 的訓練排放估計達 72,816 噸二氧化碳當量。AI 資料中心電力容量升至 29.6 GW,相當於紐約州尖峰需求;而光是 GPT-4o 一年的推論用水,就可能超過 120 萬人的飲用水需求。隨著系統規模擴大,AI 在電力、用水與排放上的足跡都在增加。" }
      },
      {
        slug: "science-models",
        title:   { en: "AI for science can outperform humans — but bigger isn't always better",
                   zh: "科學用 AI 能勝過人類 — 但模型越大不一定越好" },
        summary: { en: "Frontier models beat human chemists on ChemBench, yet score below 20% on astrophysics replication.",
                   zh: "前沿模型在 ChemBench 上勝過人類化學家,卻在天文物理複現上低於 20%。" },
        tags: ["science"],
        overview: { en: "Frontier models outperform human chemists on average on ChemBench, yet they score below 20% on replication in astrophysics and 33% on Earth-observation questions. A 111-million-parameter protein language model, MSAPairformer, beat previous leading methods on ProteinGym, and a 200-million-parameter genomics model, GPN-Star, outperformed a model nearly 200× larger. Most AI foundation models for science come from cross-sector collaborations, unlike the industry-dominated landscape of general-purpose AI.",
                    zh: "在 ChemBench 上,前沿模型平均勝過人類化學家,卻在天文物理的複現任務上低於 20%、在地球觀測問題上僅 33%。一個 1.11 億參數的蛋白質語言模型 MSAPairformer 在 ProteinGym 上勝過先前的領先方法;一個 2 億參數的基因體模型 GPN-Star 則勝過參數近 200 倍大的模型。多數科學用 AI 基礎模型來自跨部門合作,與通用 AI 由產業主導的格局不同。" }
      },
      {
        slug: "medicine-clinical",
        title:   { en: "AI is transforming clinical care, but rigorous evidence stays thin",
                   zh: "AI 正在改變臨床照護,但嚴謹證據仍然不足" },
        summary: { en: "Note-writing tools cut documentation time up to 83%, yet only 5% of clinical AI studies use real patient data.",
                   zh: "病歷生成工具減少多達 83% 的書寫時間,但只有 5% 的臨床 AI 研究使用真實病患資料。" },
        tags: ["medicine"],
        overview: { en: "AI tools that automatically generate clinical notes from patient visits saw substantial adoption in 2025. Across multiple hospital systems, physicians reported up to 83% less time spent writing notes and significant reductions in burnout, with one system reporting a 112% return on investment. Beyond such tools, however, the evidence base remains thin: a review of more than 500 clinical AI studies found nearly half relied on exam-style questions rather than real patient data, with only 5% using real clinical data. The FDA authorized 258 AI medical devices in 2025, mostly via pathways not requiring new clinical trials.",
                    zh: "能自動從看診內容生成病歷的 AI 工具在 2025 年獲得大量採用。在多個醫院系統中,醫師回報書寫病歷的時間減少多達 83%,職業倦怠也明顯下降,某醫院系統更回報 112% 的投資報酬率。然而除了這類工具之外,證據基礎仍薄弱:一項回顧 500 多項臨床 AI 研究的分析發現,近半數依賴考試式題目而非真實病患資料,只有 5% 使用真實臨床資料。FDA 在 2025 年核准了 258 項 AI 醫療器材,多數透過不需新臨床試驗的途徑。" }
      },
      {
        slug: "education-lagging",
        title:   { en: "Formal education lags AI, but people learn AI at every stage of life",
                   zh: "正規教育落後於 AI,但人們在人生各階段都在學 AI" },
        summary: { en: "Over 80% of U.S. students use AI for school, yet just 6% of teachers say their school's AI policy is clear.",
                   zh: "逾 80% 美國學生用 AI 做功課,但只有 6% 的老師認為校內 AI 政策清楚。" },
        tags: ["education"],
        overview: { en: "Over 80% of U.S. high school and college students now use AI for school-related tasks, but only half of middle and high schools have AI policies in place, and just 6% of teachers say those policies are clear. Outside the classroom, AI engineering skills are accelerating fastest in the United Arab Emirates, Chile, and South Africa. The number of new AI PhDs in the U.S. and Canada increased 22% from 2022 to 2024 — and that growth went to academia, not industry, reversing a decade-long trend.",
                    zh: "目前逾 80% 的美國高中與大學生會用 AI 做課業相關任務,但只有半數國高中訂有 AI 政策,且僅 6% 的老師認為這些政策清楚。在課堂之外,AI 工程技能成長最快的是阿聯、智利與南非。美國與加拿大的新科 AI 博士在 2022 至 2024 年增加 22%,而這些增長流向學界而非業界,逆轉了長達十年的趨勢。" }
      },
      {
        slug: "ai-sovereignty",
        title:   { en: "AI sovereignty is becoming a defining feature of national policy",
                   zh: "AI 主權正成為國家政策的決定性特徵" },
        summary: { en: "National strategies are expanding fastest among developing economies; open source is redistributing who participates.",
                   zh: "國家策略在開發中經濟體擴張最快;開源正在重新分配誰能參與。" },
        tags: ["policy"],
        overview: { en: "National AI strategies are expanding, particularly among developing economies, and state-backed investments in AI supercomputing are rising in parallel — a sign of growing ambitions for domestic control over AI ecosystems. Between 2018 and 2025, Europe and Central Asia expanded state-backed AI supercomputing clusters from 3 to 44. Yet model production remains concentrated in the U.S. and China. Open-source development is starting to redistribute participation, with contributions from the rest of the world now outpacing Europe and approaching the U.S. on GitHub.",
                    zh: "國家 AI 策略持續擴張,尤其在開發中經濟體;國家支持的 AI 超級運算投資也同步上升 — 這顯示各國對掌控本國 AI 生態系的企圖日益增強。2018 至 2025 年間,歐洲與中亞的國家支持 AI 超算叢集從 3 個擴增到 44 個。然而模型生產仍集中於美國與中國。開源開發開始重新分配參與度,世界其他地區在 GitHub 上的貢獻如今已超越歐洲、逼近美國。" }
      },
      {
        slug: "experts-vs-public",
        title:   { en: "Experts and the public see very different AI futures",
                   zh: "專家與大眾對 AI 的未來看法南轅北轍" },
        summary: { en: "On jobs, 73% of experts expect a positive impact vs. just 23% of the public — a 50-point gap.",
                   zh: "在工作上,73% 的專家預期正面影響,大眾僅 23% — 落差 50 個百分點。" },
        tags: ["public-opinion"],
        overview: { en: "When it comes to how people do their jobs, 73% of experts expect a positive impact, compared with just 23% of the public — a 50-point gap. Similar divides appear for AI's impact on the economy and medical care. Globally, trust in governments to regulate AI varies: among surveyed countries, the U.S. reported the lowest trust in its own government to regulate AI, at 31% (global average 54%). Globally, the EU is trusted more than the U.S. or China to regulate AI effectively.",
                    zh: "談到人們如何工作,73% 的專家預期正面影響,大眾卻僅 23% — 落差達 50 個百分點。在 AI 對經濟與醫療照護的影響上也出現類似分歧。在全球,對政府監管 AI 的信任度各異:受調查國家中,美國對自家政府監管 AI 的信任最低,僅 31%(全球平均 54%)。整體而言,歐盟在有效監管 AI 上,比美國或中國更受信任。" }
      }
    ]
  },

  /* ---------------------------------------------------------- CHAPTERS */
  {
    type: "accordion",
    id: "chapters",
    title:    { en: "Nine chapters, in brief", zh: "九大章節速覽" },
    subtitle: { en: "Each chapter's headline highlights. Expand to read the key numbers.",
                zh: "每一章的重點亮點。展開可看關鍵數字。" },
    qa: [
      { q: { en: "1 · Research & Development", zh: "1 · 研發" },
        a: { en: "Industry now accounts for over 90% of notable models, and the most capable systems are the least transparent — training code, parameter counts, and dataset sizes are increasingly withheld. Compute has grown ~3.3× per year since 2022 to 17.1M H100-equivalents, with Nvidia supplying over 60%. China leads in publication volume, citations, and patent grants; the U.S. led notable model development (59 vs. 35). Gender gaps in AI talent remain entrenched, with no meaningful progress since 2010.",
             zh: "產業界如今佔重要模型的 90% 以上,而最強大的系統卻最不透明 — 訓練程式碼、參數量與資料集規模越來越不公開。運算量自 2022 年以來每年約成長 3.3 倍,達 1,710 萬個 H100 等效算力,其中 Nvidia 供應超過 60%。中國在發表量、被引用數與專利核准上領先;美國則在重要模型開發上領先(59 vs. 35)。AI 人才的性別落差依舊根深蒂固,自 2010 年以來毫無實質進展。" },
        link: { label: { en: "Full deep dive: Research & Development →", zh: "完整詳解:研發 →" }, url: "research.html" } },
      { q: { en: "2 · Technical Performance", zh: "2 · 技術表現" },
        a: { en: "Benchmark scores rose across language, reasoning, coding, and math — but evaluations are being outpaced by the progress they measure, and benchmarks are saturating. The gap between top models is shrinking, and the U.S.–China distance has closed almost completely. AI agents still fail roughly 1 in 3 attempts. Robots struggle in unstructured environments, while autonomous vehicles reached mass-scale deployment with promising safety records.",
             zh: "語言、推理、程式與數學的基準分數全面上升 — 但評測的速度跟不上它要衡量的進展,基準也逐漸飽和。頂尖模型之間的差距正在縮小,美中之間幾乎已完全拉平。AI 代理仍約有三分之一的嘗試失敗。機器人在非結構化環境中吃力,而自駕車已達成大規模部署且安全紀錄看好。" },
        link: { label: { en: "Full deep dive: Technical Performance →", zh: "完整詳解:技術表現 →" }, url: "performance.html" } },
      { q: { en: "3 · Responsible AI", zh: "3 · 負責任 AI" },
        a: { en: "RAI benchmarking is increasing but not keeping up with deployment. Documented incidents rose to 362 in 2025 (from 233). Models struggle to separate knowledge from belief — hallucination rates span 22%–94%. Organizations are formalizing RAI: the share with no RAI policy fell from 24% to 11%, while top obstacles are knowledge gaps (59%), budget (48%), and regulatory uncertainty (41%). AI works best in English, and the gap is wider than global benchmarks suggest.",
             zh: "負責任 AI 的基準測試在增加,卻跟不上部署的腳步。2025 年通報事故升至 362 起(原為 233)。模型難以區分「知識」與「信念」 — 幻覺率介於 22% 到 94%。組織正將負責任 AI 制度化:沒有 RAI 政策的比例從 24% 降到 11%,而主要障礙是知識落差(59%)、預算(48%)與法規不確定性(41%)。AI 在英文表現最佳,且這道落差比全球基準所顯示的更大。" },
        link: { label: { en: "Full deep dive: Responsible AI →", zh: "完整詳解:負責任 AI →" }, url: "responsible-ai.html" } },
      { q: { en: "4 · Economy", zh: "4 · 經濟" },
        a: { en: "Global corporate AI investment more than doubled in 2025; private investment grew 127.5%, with generative AI capturing nearly half of all private AI funding. The U.S. committed 23× more private investment than China. Organizational adoption rose to 88%, and consumer surplus from GenAI reached $172B annually. Productivity gains are largest in structured work (14–50%). China installed 54% of the world's industrial robots.",
             zh: "2025 年全球企業 AI 投資增加超過一倍;民間投資成長 127.5%,其中生成式 AI 拿下近半的民間 AI 資金。美國的民間投資是中國的 23 倍。組織採用率升至 88%,生成式 AI 帶來的消費者剩餘達每年 1,720 億美元。生產力提升在結構化工作中最大(14–50%)。中國安裝了全球 54% 的工業機器人。" },
        link: { label: { en: "Full deep dive: Economy →", zh: "完整詳解:經濟 →" }, url: "economy.html" } },
      { q: { en: "5 · Science", zh: "5 · 科學" },
        a: { en: "AI scientific publications in the natural sciences reached ~80,150 in 2025 (+26%), now 5.8–8.8% of output (up from below 1% in 2010). Frontier models beat human chemists on ChemBench but score below 20% on astrophysics replication. Astronomy released its first foundation model (AION-1). An AI system (Aardvark Weather) ran a full weather-forecasting pipeline end-to-end for the first time. On end-to-end research tasks, the best agents score about half of PhD experts.",
             zh: "自然科學領域的 AI 科學發表在 2025 年達約 80,150 篇(+26%),如今佔產出的 5.8–8.8%(2010 年時不到 1%)。前沿模型在 ChemBench 上勝過人類化學家,卻在天文物理複現上低於 20%。天文學發布了首個基礎模型(AION-1)。一套 AI 系統(Aardvark Weather)首次端到端跑完整個天氣預報流程。在端到端研究任務上,最佳代理的得分約為博士級專家的一半。" },
        link: { label: { en: "Full deep dive: Science →", zh: "完整詳解:科學 →" }, url: "science.html" } },
      { q: { en: "6 · Medicine", zh: "6 · 醫療" },
        a: { en: "Clinical note-writing tools saw broad adoption — physicians reported up to 83% less time on notes and one system a 112% ROI. The FDA authorized 258 AI medical devices in 2025, mostly via modification pathways; only 2.4% of devices with clinical studies used randomized-trial data. A multi-agent system scored 85.5% on complex published cases vs. 20% for unaided physicians. AI-generated summaries now top 84%–92% of health-related Google searches.",
             zh: "臨床病歷生成工具獲得廣泛採用 — 醫師回報書寫時間減少多達 83%,某系統的投報率達 112%。FDA 在 2025 年核准 258 項 AI 醫療器材,多數透過器材修改途徑;有臨床研究的器材中,只有 2.4% 採用隨機試驗資料。一套多代理系統在複雜的已發表病例上得分 85.5%,而未借助工具的醫師為 20%。AI 生成摘要如今出現在 84%–92% 健康相關 Google 搜尋的頂端。" },
        link: { label: { en: "Full deep dive: AI in medicine trends →", zh: "完整詳解:AI 醫療趨勢 →" }, url: "medicine.html" } },
      { q: { en: "7 · Education", zh: "7 · 教育" },
        a: { en: "CS enrollment fell 11% at U.S. four-year universities (2024–25), but AI master's graduates rose 17%. Four in five U.S. high-school and college students use AI for schoolwork, yet only half of schools have AI policies and just 6% of teachers call them clear. Over 90% of countries now offer CS in schools; China and the UAE mandated AI education from 2025–26. New AI PhDs in the U.S./Canada rose 22%, all of it going to academia.",
             zh: "美國四年制大學的資工註冊人數下降 11%(2024–25),但 AI 碩士畢業生增加 17%。每 5 名美國高中與大學生就有 4 名用 AI 做功課,卻只有半數學校訂有 AI 政策,僅 6% 的老師認為清楚。逾 90% 的國家已在學校開設資工課;中國與阿聯自 2025–26 學年起將 AI 教育列為必修。美國與加拿大的新科 AI 博士增加 22%,且全數流向學界。" },
        link: { label: { en: "Full deep dive: Education →", zh: "完整詳解:教育 →" }, url: "education.html" } },
      { q: { en: "8 · Policy & Governance", zh: "8 · 政策與治理" },
        a: { en: "National AI strategies are expanding fastest among countries that had none five years ago; over half of 2024's new strategies came from emerging economies. AI sovereignty is becoming a central principle, but infrastructure is uneven — Europe and Central Asia grew state-backed supercomputing clusters from 3 to 44 (2018–2025). AI-related witnesses in U.S. congressional hearings grew twentyfold since 2017 (5 → 102). U.S. public AI investment (~$20.4B over 2013–24) is dwarfed by $285.9B private in 2025 alone.",
             zh: "國家 AI 策略在五年前還沒有任何策略的國家中擴張最快;2024 年新策略有過半來自新興經濟體。AI 主權正成為核心原則,但基礎設施分布不均 — 歐洲與中亞的國家支持超算叢集從 3 個增至 44 個(2018–2025)。美國國會聽證會的 AI 相關證人自 2017 年以來增加二十倍(5 → 102)。美國公共 AI 投資(2013–24 約 204 億美元)相形見絀於光是 2025 年就達 2,859 億美元的民間投資。" },
        link: { label: { en: "Full deep dive: Policy & Governance →", zh: "完整詳解:政策與治理 →" }, url: "policy.html" } },
      { q: { en: "9 · Public Opinion", zh: "9 · 民意" },
        a: { en: "AI optimism is rising (benefits > drawbacks: 55% → 59%), but so is anxiety (52% feel nervous). Southeast Asia is most optimistic — over 80% in Malaysia, Thailand, Indonesia, and Singapore expect AI to change their lives. Experts and the U.S. public diverge sharply: on jobs, 73% vs. 23%. Nearly two-thirds of Americans (64%) expect fewer jobs over 20 years. The U.S. reported the lowest trust in its own government to regulate AI, at 31%.",
             zh: "對 AI 的樂觀在上升(益處大於弊端:55% → 59%),但焦慮也在增加(52% 感到緊張)。東南亞最為樂觀 — 馬來西亞、泰國、印尼與新加坡逾 80% 預期 AI 將改變他們的生活。專家與美國大眾分歧明顯:在工作上是 73% 對 23%。近三分之二的美國人(64%)預期未來 20 年工作會變少。美國對自家政府監管 AI 的信任最低,僅 31%。" },
        link: { label: { en: "Full deep dive: Public Opinion →", zh: "完整詳解:民意 →" }, url: "public-opinion.html" } }
    ]
  },

  /* --------------------------------------------------------- US-CHINA */
  {
    type: "bars",
    id: "us-china",
    title:    { en: "U.S. vs. China — the investment gap, in one chart",
                zh: "美中對比 — 一張圖看投資落差" },
    subtitle: { en: "2025 private AI investment, US$ billions. The capability gap has effectively closed (top U.S. model leads by 2.7%), yet the investment gap remains ~23×. Note: China's figure likely understates state guidance funds.",
                zh: "2025 年民間 AI 投資(十億美元)。能力差距已實質消失(頂尖美國模型僅領先 2.7%),但投資差距仍約 23 倍。註:中國數字很可能低估其政府引導基金。" },
    series: [
      { label: { en: "United States", zh: "美國" }, value: 286 },
      { label: { en: "China", zh: "中國" },         value: 12 }
    ]
  },

  /* --------------------------------------------------------- ADOPTION */
  {
    type: "bars",
    id: "adoption",
    title:    { en: "Who's actually using generative AI",
                zh: "誰真的在用生成式 AI" },
    subtitle: { en: "Generative-AI population adoption rate (%). Adoption correlates with GDP per capita — but some countries outpace what income predicts, while the U.S., despite leading investment, ranks 24th.",
                zh: "生成式 AI 的人口採用率(%)。採用率與人均 GDP 相關 — 但有些國家超越所得所能預測,而美國儘管投資領先,卻只排第 24 名。" },
    series: [
      { label: { en: "Singapore", zh: "新加坡" },   value: 61 },
      { label: { en: "UAE", zh: "阿聯" },           value: 54 },
      { label: { en: "Global avg", zh: "全球平均" }, value: 53 },
      { label: { en: "United States", zh: "美國" }, value: 28 }
    ]
  },

  /* ------------------------------------------------------- INCIDENTS */
  {
    type: "bars",
    id: "incidents",
    title:    { en: "The safety gap is widening",
                zh: "安全落差正在擴大" },
    subtitle: { en: "Documented AI incidents logged by the AI Incident Database, by year. Capability reporting is near-universal; responsible-AI reporting stays spotty.",
                zh: "AI 事故資料庫逐年通報的 AI 事故數。能力的揭露近乎普遍,負責任 AI 的揭露卻仍零星。" },
    series: [
      { label: { en: "2024", zh: "2024" }, value: 233 },
      { label: { en: "2025", zh: "2025" }, value: 362 }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "In the report's own words", zh: "報告的原話" },
    subtitle: { en: "Lines that capture the year, from the co-chairs' message and the top takeaways.",
                zh: "幾句概括這一年的話,來自共同主席的訊息與重點摘要。" },
    quotes: [
      { text: { en: "The data does not point in a single direction. It reveals a field that is scaling faster than the systems around it can adapt.",
                zh: "資料並未指向單一方向。它揭示的是一個擴張速度快過周遭體系所能調適的領域。" },
        by: "Message from the Co-chairs" },
      { text: { en: "At the technical frontier, leading models are now nearly indistinguishable from one another. Open-weight models are more competitive than ever.",
                zh: "在技術前沿,領先模型如今彼此幾乎難以區分。開放權重模型比以往任何時候都更具競爭力。" },
        by: "Message from the Co-chairs" },
      { text: { en: "AI can win a gold medal at the International Mathematical Olympiad but cannot reliably tell time — the jagged frontier of AI.",
                zh: "AI 能在國際數學奧林匹亞奪金,卻看不準時鐘 — 這就是 AI 的鋸齒狀前沿。" },
        by: "Top Takeaways" },
      { text: { en: "Generative AI reached 53% population adoption within three years — faster than the personal computer or the internet.",
                zh: "生成式 AI 在三年內達到 53% 的人口採用率 — 快過個人電腦或網際網路。" },
        by: "Chapter 4 · Economy" },
      { text: { en: "On how people do their jobs, 73% of experts expect a positive impact, compared with just 23% of the public — a 50-point gap.",
                zh: "在人們如何工作這件事上,73% 的專家預期正面影響,大眾卻僅 23% — 落差 50 個百分點。" },
        by: "Chapter 9 · Public Opinion" }
    ]
  },

  /* ----------------------------------------------------------- ABOUT */
  {
    type: "prose",
    id: "about",
    title:    { en: "About this page", zh: "關於這個頁面" },
    subtitle: { en: "What it is, where the numbers come from, and how to read them.",
                zh: "這是什麼、數字從哪來、該怎麼讀。" },
    blocks: [
      { type: "p",
        text: { en: "This is a non-official, educational reformatting of the Stanford HAI Artificial Intelligence Index Report 2026 — the ninth edition of an independent initiative at the Stanford Institute for Human-Centered AI. Every figure on this page is drawn directly from the report's Top Takeaways and per-chapter highlights.",
                zh: "這是史丹佛 HAI《人工智慧指數報告 2026》的非官方教育性重新整理 — 該報告是史丹佛以人為本 AI 研究院旗下獨立計畫的第九版。本頁的每個數字皆直接取自報告的重點摘要與各章亮點。" } },
      { type: "h3",
        text: { en: "How to read the numbers", zh: "如何解讀這些數字" } },
      { type: "ul",
        items: {
          en: ["Benchmarks are saturating and frontier labs disclose less — the report cautions that independent testing does not always confirm what developers report.",
               "Many figures are estimates (e.g. compute, emissions, consumer surplus) and carry meaningful uncertainty.",
               "Hero counters round to whole numbers; exact figures (e.g. US$285.9B, 28.3%) appear in the cards and charts.",
               "'Notable models', 'frontier', and similar terms follow the report's own definitions."],
          zh: ["基準正在飽和,前沿實驗室揭露變少 — 報告提醒,獨立測試不一定能證實開發者所宣稱的結果。",
               "許多數字是估計值(如運算量、排放、消費者剩餘),帶有相當的不確定性。",
               "首頁計數器四捨五入為整數;精確數字(如 2,859 億美元、28.3%)呈現在卡片與圖表中。",
               "「重要模型」「前沿」等用語沿用報告本身的定義。"]
        } },
      { type: "p",
        text: { en: "Design inspiration was drawn from editorial data-journalism (The Pudding) and clean chart aesthetics (Datawrapper); the layout and code are original. The report itself is licensed CC BY-ND 4.0 by Stanford University.",
                zh: "視覺靈感取自編輯式資料新聞(The Pudding)與簡潔的圖表美學(Datawrapper);版面與程式碼為原創。報告本身由史丹佛大學以 CC BY-ND 4.0 授權。" } }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full report", zh: "閱讀完整報告" },
    text:  { en: "425 pages, nine chapters, hundreds of charts — all free from Stanford HAI, with raw data and an interactive Global AI Vibrancy tool.",
             zh: "425 頁、九大章節、數百張圖表 — 全部由史丹佛 HAI 免費提供,並附原始資料與互動式全球 AI 活力工具。" },
    link:  { label: { en: "Open the AI Index 2026 →", zh: "前往 AI 指數 2026 →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report" }
  }
];

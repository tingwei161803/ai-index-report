/* =========================================================================
   Technical Performance — deep dive · performance.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026, Chapter 2
   https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 2: 2.1 Overall Performance Trends, 2.2 Language,
   2.3 Image & Video, 2.4 Reasoning, 2.5 Specific Domains, 2.6 AI Agents,
   2.7 Robotics and Autonomous Motion. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "performance";

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Technical Performance · a chapter deep dive", zh: "技術表現專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "AI capability is outpacing the benchmarks built to measure it",
                zh: "AI 能力正在跑贏用來衡量它的基準" },
    subtitle: { en: "Chapter 2 of the AI Index 2026 tracks AI across language, reasoning, coding, math, agents, and robotics. Scores are rising fast, the gap between top models is shrinking, and evaluations are saturating in months. The numbers:",
                zh: "AI 指數 2026 第 2 章橫跨語言、推理、程式、數學、代理與機器人。分數一路狂飆,頂尖模型之間的差距正在縮小,而基準測試在幾個月內就被刷爆。先看數字:" },
    stats: [
      { label: { en: "% of human baseline reached on SWE-bench Verified (from ~60% in 2024)", zh: "% SWE-bench Verified 達到的人類基準(2024 約 60%)" }, value: 100 },
      { label: { en: "% accuracy on OSWorld computer-use agents (from ~12%)", zh: "% OSWorld 電腦操作代理準確率(原約 12%)" }, value: 66 },
      { label: { en: "percentage-point jump on Humanity's Last Exam in one year", zh: "Humanity's Last Exam 一年內躍升的百分點" }, value: 30 },
      { label: { en: "Elo points now separate the top four Arena models", zh: "Arena 前四名模型如今相差的 Elo 分數" }, value: 25 },
      { label: { en: "% robotic-manipulation success on RLBench in simulation", zh: "% RLBench 模擬中的機器人操作成功率" }, value: 89 },
      { label: { en: "% success on real household robot tasks (BEHAVIOR-1K)", zh: "% 真實居家機器人任務成功率(BEHAVIOR-1K)" }, value: 12 }
    ]
  },

  /* ----------------------------------------------- 2.1 OVERALL TRENDS */
  {
    type: "prose",
    id: "trends",
    title:    { en: "2.1 — The gap between top models is closing",
                zh: "2.1 — 頂尖模型之間的差距正在收斂" },
    subtitle: { en: "AI improved rapidly in 2025 across language, reasoning, coding, and math — but progress is outpacing the evaluations built to measure it, and a clear pattern emerges: the frontier is converging.",
                zh: "2025 年 AI 在語言、推理、程式與數學上快速進步 — 但進展正在超越用來衡量它的評測,而且浮現一個清楚的模式:前沿正在收斂。" },
    blocks: [
      { type: "p",
        text: { en: "Frontier systems now meet or exceed established human baselines on long-running benchmarks like ImageNet, SuperGLUE, and MMLU, and have reached or approached human levels on harder reasoning tests — PhD-level science (GPQA Diamond), multimodal reasoning (MMMU), and competition math (AIME). On SWE-bench Verified, performance rose from roughly 60% in 2024 to close to 100% of the human baseline in 2025.",
                zh: "前沿系統如今在 ImageNet、SuperGLUE、MMLU 等長期基準上達到或超越既定的人類基準,並在更難的推理測試上接近人類水準 — 博士級科學(GPQA Diamond)、多模態推理(MMMU)與競賽數學(AIME)。在 SWE-bench Verified 上,表現從 2024 年約 60% 上升到 2025 年接近人類基準的 100%。" } },
      { type: "h3",
        text: { en: "The frontier is converging — even across countries", zh: "前沿正在收斂 — 連跨國差距也是" } },
      { type: "ul",
        items: {
          en: ["The top four Arena models are now separated by fewer than 25 Elo points, down from roughly 97 a year earlier. Anthropic (1,503), xAI (1,495), Google (1,494), and OpenAI (1,481) cluster at the top, with Alibaba (1,449) and DeepSeek (1,424) trailing only modestly.",
               "The U.S.–China gap has effectively closed. In February 2025 DeepSeek-R1 trailed the top U.S. model by just 5 Arena points (0.4%); as of March 2026 the top U.S. model leads the top Chinese model by 2.7%, fluctuating in the single digits all year.",
               "The open-weight gap reopened after briefly closing. The top closed model now leads the top open model by about 3.3%–3.4%, up from 0.5% in August 2024 — though open models are far more competitive than a few years ago."],
          zh: ["Arena 前四名模型如今相差不到 25 個 Elo 分數,一年前約為 97。Anthropic(1,503)、xAI(1,495)、Google(1,494)與 OpenAI(1,481)群聚在頂端,Alibaba(1,449)與 DeepSeek(1,424)僅小幅落後。",
               "美中差距已實質消失。2025 年 2 月 DeepSeek-R1 僅落後頂尖美國模型 5 個 Arena 分數(0.4%);截至 2026 年 3 月,頂尖美國模型領先頂尖中國模型 2.7%,全年都在個位數區間波動。",
               "開放權重的差距在短暫收斂後再度拉開。頂尖封閉模型如今領先頂尖開放模型約 3.3%–3.4%,高於 2024 年 8 月的 0.5% — 但開放模型已遠比幾年前更具競爭力。"]
        } },
      { type: "h3",
        text: { en: "Benchmarks are saturating — and facing reliability concerns", zh: "基準正在飽和 — 並面臨可靠性疑慮" } },
      { type: "p",
        text: { en: "Evaluations meant to be hard for years are now saturated in months. A Stanford review of nine widely used benchmarks found invalid-question rates ranging from 2% on MMLU Math to 42% on GSM8K, and separate research suggests Arena leaderboard standing may partly reflect adaptation to the platform rather than general capability. With capability no longer a clear differentiator, competition is shifting toward cost, reliability, and real-world usefulness.",
                zh: "原本設計要難住 AI 好幾年的評測,如今幾個月內就被刷爆。史丹佛對九個廣泛使用的基準所做的審查發現,無效題目比率從 MMLU Math 的 2% 到 GSM8K 的 42% 不等;另有研究指出,Arena 排行榜的名次可能部分反映對平台的適應,而非通用能力。當能力不再是明顯的區隔,競爭正轉向成本、可靠性與真實世界的實用性。" } }
    ]
  },

  /* -------------------------------------------- benchmark scores chart */
  {
    type: "bars",
    id: "reasoning-scores",
    title:    { en: "Reasoning benchmarks are clearing the human bar",
                zh: "推理基準正在跨過人類門檻" },
    subtitle: { en: "Top model accuracy on frontier reasoning benchmarks (%), early 2026. MMMU and GPQA Diamond now meet or beat expert humans; ARC-AGI-2 and Humanity's Last Exam stay deliberately hard.",
                zh: "前沿推理基準的頂尖模型準確率(%),2026 年初。MMMU 與 GPQA Diamond 已達到或超越專家;ARC-AGI-2 與 Humanity's Last Exam 則刻意維持高難度。" },
    series: [
      { label: { en: "GPQA Diamond (mean)", zh: "GPQA Diamond(平均)" }, value: 93 },
      { label: { en: "MMMU (top)", zh: "MMMU(最佳)" },               value: 88 },
      { label: { en: "ARC-AGI-2 (top)", zh: "ARC-AGI-2(最佳)" },     value: 85 },
      { label: { en: "Humanity's Last Exam", zh: "Humanity's Last Exam" }, value: 38 }
    ]
  },

  /* ----------------------------------------------------- 2.4 REASONING */
  {
    type: "prose",
    id: "reasoning",
    title:    { en: "2.4 — Gold medals, but it still can't tell time",
                zh: "2.4 — 拿得到金牌,卻還看不懂時鐘" },
    subtitle: { en: "Reasoning surged across science, math, and abstraction — yet the same models stumble on tasks most humans find trivial. Researchers call it jagged intelligence.",
                zh: "推理在科學、數學與抽象上大幅躍進 — 但同一批模型卻在多數人覺得理所當然的任務上栽跟頭。研究者稱之為「鋸齒狀智慧」。" },
    blocks: [
      { type: "p",
        text: { en: "Frontier models gained 30 percentage points in a single year on Humanity's Last Exam — a benchmark built to be hard for AI and favorable to human experts — climbing from under 10% to 38.3%. On GPQA Diamond, mean accuracy reached 93%, 12 points above the expert validator baseline of 81.2%. On MMMU, Gemini 3.1 Pro Preview scored 88.2%, within 0.4 points of the best human expert.",
                zh: "前沿模型在 Humanity's Last Exam(一個專為難住 AI、有利於人類專家而設計的基準)上單年躍升 30 個百分點,從不到 10% 攀升到 38.3%。在 GPQA Diamond 上,平均準確率達 93%,高出專家驗證者 81.2% 的基準 12 個百分點。在 MMMU 上,Gemini 3.1 Pro Preview 得 88.2%,與最強人類專家僅差 0.4 個百分點。" } },
      { type: "h3",
        text: { en: "Jagged intelligence: IMO gold vs. analog clocks", zh: "鋸齒狀智慧:IMO 金牌對上類比時鐘" } },
      { type: "ul",
        items: {
          en: ["Gemini Deep Think scored 35 points to win gold at the 2025 International Mathematical Olympiad, working end to end in natural language within the 4.5-hour limit — up from the 28-point silver achieved in 2024.",
               "Yet on ClockBench, the top model read analog clocks correctly only 50.6% of the time, versus 90.1% for humans. When models read the time wrong, their median error was about one to three hours, compared with three minutes for people.",
               "On FrontierMath Tier 4, accuracy rose from near 0% to 31.3% since 2024 — but the best models still fail roughly two of every three problems at the hardest tier. On MathArena, answer-based accuracy hit 97% while rigorous proof-writing lagged far behind."],
          zh: ["Gemini Deep Think 在 2025 年國際數學奧林匹亞(IMO)上拿到 35 分奪金,全程在 4.5 小時時限內以自然語言端到端作答 — 高於 2024 年 28 分的銀牌。",
               "然而在 ClockBench 上,頂尖模型只有 50.6% 的時候能正確讀出類比時鐘,而人類為 90.1%。當模型看錯時間時,中位誤差約一到三小時,人類則僅三分鐘。",
               "在 FrontierMath Tier 4 上,準確率自 2024 年以來從近 0% 升到 31.3% — 但最強模型在最難等級仍約每三題答錯兩題。在 MathArena 上,答案型準確率達 97%,但嚴謹的證明書寫仍遠遠落後。"]
        } }
    ]
  },

  /* -------------------------------------------- agent benchmarks chart */
  {
    type: "bars",
    id: "agents-bench",
    title:    { en: "AI agents went from answering to doing",
                zh: "AI 代理從「回答」走向「完成任務」" },
    subtitle: { en: "Top agent success rate (%) on real-task benchmarks, early 2026 vs. their 2024–25 starting points. Agents improved fast but still fail roughly one in three attempts.",
                zh: "真實任務基準的頂尖代理成功率(%),2026 年初對比 2024–25 起點。代理進步飛快,但仍約每三次嘗試失敗一次。" },
    series: [
      { label: { en: "Cybench (unguided)", zh: "Cybench(無引導)" }, value: 93 },
      { label: { en: "Terminal-Bench 2.0", zh: "Terminal-Bench 2.0" }, value: 77 },
      { label: { en: "GAIA", zh: "GAIA" },                            value: 75 },
      { label: { en: "WebArena", zh: "WebArena" },                    value: 74 },
      { label: { en: "OSWorld", zh: "OSWorld" },                      value: 66 },
      { label: { en: "MLE-bench", zh: "MLE-bench" },                  value: 64 }
    ]
  },

  /* ------------------------------------------- 2.6/2.7 AGENTS & ROBOTS */
  {
    type: "prose",
    id: "agents-robots",
    title:    { en: "2.6 & 2.7 — Agents rising, robots stuck at the front door",
                zh: "2.6 與 2.7 — 代理崛起,機器人卻卡在家門口" },
    subtitle: { en: "Software agents are closing in on humans on structured tasks. Physical robots still falter outside the lab — with autonomous vehicles as the standout exception.",
                zh: "軟體代理在結構化任務上正逼近人類。實體機器人一離開實驗室就失靈 — 自駕車則是最突出的例外。" },
    blocks: [
      { type: "p",
        text: { en: "AI agents advanced from answering questions to completing multistep tasks in 2025, though they still fail roughly one in three attempts on structured benchmarks. On OSWorld, accuracy rose from about 12% to 66.3%, within 6 points of human performance; on WebArena it reached 74.3%, within 4 points of the 78.2% human baseline; on Cybench the unguided solve rate hit 93%, up from 15% in 2024.",
                zh: "AI 代理在 2025 年從回答問題進展到完成多步驟任務,但在結構化基準上仍約每三次嘗試失敗一次。在 OSWorld 上,準確率從約 12% 升到 66.3%,距人類僅 6 個百分點;在 WebArena 上達 74.3%,距 78.2% 的人類基準僅 4 個百分點;在 Cybench 上,無引導解題率達 93%,高於 2024 年的 15%。" } },
      { type: "h3",
        text: { en: "Lab triumph, household failure", zh: "實驗室大勝,居家慘敗" } },
      { type: "ul",
        items: {
          en: ["In controlled simulation, robotic manipulation on RLBench reached an 89.4% success rate (EquAct), up from about 48% in 2022. But in the 2025 BEHAVIOR-1K household challenge, the top team completed just 12.4% of real tasks — a stark measure of how far AI is from the unstructured physical world.",
               "On ResponsibleRobotBench, even the best model (GPT-4o, safe score 0.64) completed under a third of tasks safely when real hazards were present.",
               "Humanoid hardware proliferated: Figure AI's Figure 02 logged over 1,250 hours at a BMW plant, loading 90,000+ parts across 30,000+ vehicles. Yet most milestones remain framed as future ambitions rather than verified operations."],
          zh: ["在受控模擬中,RLBench 上的機器人操作成功率達 89.4%(EquAct),高於 2022 年的約 48%。但在 2025 年 BEHAVIOR-1K 居家挑戰中,最佳隊伍只完成 12.4% 的真實任務 — 鮮明地量出 AI 距離無結構的實體世界還有多遠。",
               "在 ResponsibleRobotBench 上,當環境存在真實危險時,即使是最佳模型(GPT-4o,安全分數 0.64)也只能安全完成不到三分之一的任務。",
               "人形硬體大量湧現:Figure AI 的 Figure 02 在一家 BMW 工廠累積超過 1,250 小時,跨越 30,000 多輛車裝載逾 90,000 個零件。但多數里程碑仍以未來企圖、而非已驗證的營運來陳述。"]
        } },
      { type: "h3",
        text: { en: "Autonomous vehicles: the deployment exception", zh: "自駕車:已落地部署的例外" } },
      { type: "p",
        text: { en: "Self-driving cars reached mass-scale deployment in 2025. Waymo operated roughly 2,500 robotaxis across five U.S. cities, recording around 450,000 weekly trips. In China, Baidu's Apollo Go provided approximately 11 million fully driverless rides — a 175% year-over-year increase, up from 1.5 million in 2022. Deployments so far concentrate in favorable-weather areas with off-site humans available to take over.",
                zh: "自駕車在 2025 年達到大規模部署。Waymo 在五個美國城市營運約 2,500 輛無人計程車,每週約 45 萬趟。在中國,百度的 Apollo Go 提供約 1,100 萬趟全無人駕駛載客 — 年增 175%,高於 2022 年的 150 萬趟。目前的部署集中在天候良好的地區,並有場外人員待命於必要時接手。" } }
    ]
  },

  /* ----------------------------------------- domain performance cards */
  {
    type: "cards",
    id: "domains",
    title:    { en: "2.5 — Inside the professional domains", zh: "2.5 — 走進專業領域" },
    subtitle: { en: "Where AI is being pushed into expert work — coding, math, video, time, and country-level competition. Tap any card for the full trend and its numbers.",
                zh: "AI 被推進專家工作的地方 — 程式、數學、影片、時間,以及國家層級的競賽。點任一張卡片看完整趨勢與數字。" },
    items: [
      {
        slug: "swe-bench",
        title:   { en: "SWE-bench: from 60% to near-100%", zh: "SWE-bench:從 60% 到接近 100%" },
        summary: { en: "Autonomous software engineering rose from ~60% in 2024 to close to 100% of the human baseline.",
                   zh: "自主軟體工程從 2024 年約 60% 升到接近人類基準的 100%。" },
        tags: ["coding"],
        overview: { en: "SWE-bench gives a model a real GitHub codebase and an issue, and asks it to produce a working patch; SWE-bench Verified uses human-validated issues for consistent grading. On SWE-bench Verified, performance rose from approximately 60% in 2024 to close to 100% of the human baseline in 2025. As of February 2026, top models cluster tightly in the mid-70s — Claude 4.5 Opus (high reasoning) led at about 76.8%, with KimiK2.5, GPT-5.2, and Gemini 3 Flash grouped between 70% and 76%. Related coding agents advanced too: Terminal-Bench 2.0 climbed from 20% in February 2025 to 77.3% in early 2026, while Vibe Code Bench — testing whether models can build complete web apps from scratch — topped out at just 56.5% (Claude Opus 4.6 Nonthinking), with a ~46-point spread across models.",
                    zh: "SWE-bench 給模型一個真實的 GitHub 程式庫與一個 issue,要它產出可運作的修補;SWE-bench Verified 使用經人工驗證的 issue 以確保評分一致。在 SWE-bench Verified 上,表現從 2024 年約 60% 升到 2025 年接近人類基準的 100%。截至 2026 年 2 月,頂尖模型緊密群聚在 70 多分 — Claude 4.5 Opus(高推理)以約 76.8% 領先,KimiK2.5、GPT-5.2 與 Gemini 3 Flash 群聚在 70% 到 76% 之間。相關的程式代理也有進展:Terminal-Bench 2.0 從 2025 年 2 月的 20% 攀升到 2026 年初的 77.3%;而測試模型能否從零打造完整網頁應用的 Vibe Code Bench,最高僅 56.5%(Claude Opus 4.6 非思考),各模型間落差約 46 個百分點。" }
      },
      {
        slug: "math-proofs",
        title:   { en: "Math: right answers, shaky proofs", zh: "數學:答案對了,證明還虛" },
        summary: { en: "MathArena answer accuracy hit 97%, but rigorous proof-writing still lags far behind humans.",
                   zh: "MathArena 答案準確率達 97%,但嚴謹的證明書寫仍遠落後人類。" },
        tags: ["mathematics"],
        overview: { en: "Mathematics has become a key testing ground for model reasoning. On MathArena — which runs models on freshly released contests to limit contamination — accuracy rose from about 83% in November 2025 to 97% in December 2025. On answer-based problems, leading models reach or surpass top human contestants; on proof-based tasks they fall well below. FrontierMath Tier 4 climbed from near 0% to 31.3% since 2024, yet the best models still fail roughly two of three problems at the hardest tier. Theorem proving remains one of the hardest tasks: Gemini Deep Think's 2025 IMO gold (35 points, five of six problems, in natural language) jumped from 2024's silver. On IMO-ProofBench, scores span about 85 points — Aletheia leads at 91.9% while GPT-5.1 falls to 7.1% — and automated grading tracked human experts with a Pearson correlation of 0.96 on basic problems.",
                    zh: "數學已成為衡量模型推理的關鍵試驗場。在 MathArena 上(以剛釋出的競賽測試模型以降低污染),準確率從 2025 年 11 月約 83% 升到 12 月的 97%。在答案型問題上,領先模型達到或超越頂尖人類選手;在證明型任務上則遠遠落後。FrontierMath Tier 4 自 2024 年以來從近 0% 升到 31.3%,但最強模型在最難等級仍約每三題答錯兩題。定理證明仍是最難的任務之一:Gemini Deep Think 2025 年 IMO 金牌(35 分、六題解出五題、以自然語言)較 2024 年銀牌大躍進。在 IMO-ProofBench 上,分數橫跨約 85 個百分點 — Aletheia 以 91.9% 居首,而 GPT-5.1 落到 7.1% — 自動評分與人類專家在基礎題上的 Pearson 相關係數達 0.96。" }
      },
      {
        slug: "us-china",
        title:   { en: "The U.S.–China gap has closed", zh: "美中差距已實質消失" },
        summary: { en: "DeepSeek-R1 briefly matched the top U.S. model in Feb 2025; the lead is now just 2.7%.",
                   zh: "DeepSeek-R1 在 2025 年 2 月曾短暫追平頂尖美國模型;如今差距僅 2.7%。" },
        tags: ["competition"],
        overview: { en: "The U.S.–China AI model performance gap has effectively closed, with the two trading places at the top of the rankings multiple times since early 2025. In February 2025, DeepSeek-R1 (1,400) trailed the leading U.S. model (o1-2024-12-17, 1,405) by just 5 Arena points (0.4%). DeepSeek-R1 also introduced GRPO, a reinforcement-learning method that trains reasoning without labeled data or a separate critic; following its release, major U.S. tech stocks temporarily shed over one trillion dollars in market value. As of March 2026, the top U.S. model (Claude Opus 4.6, 1,503) led the top Chinese model (Dola-Seed-2.0 Preview, 1,464) by 39 points (2.7%), with the gap fluctuating between near parity and low single digits all year.",
                    zh: "美中 AI 模型的表現差距已實質消失,兩者自 2025 年初以來在排行榜頂端多次互換位置。2025 年 2 月,DeepSeek-R1(1,400)僅落後領先的美國模型(o1-2024-12-17,1,405)5 個 Arena 分數(0.4%)。DeepSeek-R1 也提出 GRPO,一種不需標註資料或獨立評論模型即可訓練推理能力的強化學習方法;發布後,主要美國科技股市值一度蒸發逾一兆美元。截至 2026 年 3 月,頂尖美國模型(Claude Opus 4.6,1,503)領先頂尖中國模型(Dola-Seed-2.0 Preview,1,464)39 個百分點(2.7%),全年差距在接近持平與個位數之間波動。" }
      },
      {
        slug: "video-physics",
        title:   { en: "Video models start to learn physics", zh: "影片模型開始學會物理" },
        summary: { en: "Veo 3, tested on 18,000+ videos, simulated buoyancy and solved mazes it was never trained on.",
                   zh: "Veo 3 在 18,000+ 部影片測試中,展現出未受訓練的浮力模擬與迷宮求解。" },
        tags: ["video"],
        overview: { en: "Video generation models are starting to capture how the physical world behaves. A 2025 Google DeepMind study tested Veo 3 across 62 qualitative tasks and seven quantitative evaluations covering more than 18,000 generated videos, finding zero-shot abilities it was never trained for: perception tasks like edge detection and segmentation, physical modeling like buoyancy and rigid-body dynamics, and even early visual reasoning such as maze solving and visual analogy — which the authors call 'chain of frames,' a parallel to chain-of-thought. On the VBench-2.0 faithfulness benchmark, no model in early 2026 surpassed a 67% total score; Veo 3 led at 66.7%, about 4 points above Vidu Q1 (62.7%). Specialized models still outperform on most individual tasks, but the breadth of zero-shot capability hints that video models may follow LLMs toward general-purpose vision.",
                    zh: "影片生成模型開始捕捉實體世界的運作方式。2025 年一項 Google DeepMind 研究在 62 項定性任務與 7 項定量評估(涵蓋超過 18,000 部生成影片)上測試 Veo 3,發現它具備未受訓練的零樣本能力:邊緣偵測與分割等感知任務、浮力與剛體動力學等物理建模,甚至迷宮求解與視覺類比等早期視覺推理 — 作者稱之為「frame 鏈」,與「思路鏈」相呼應。在 VBench-2.0 忠實度基準上,2026 年初沒有模型超過 67% 總分;Veo 3 以 66.7% 領先,高出 Vidu Q1(62.7%)約 4 個百分點。專用模型在多數個別任務上仍勝出,但零樣本能力的廣度暗示影片模型可能循 LLM 的路徑走向通用視覺。" }
      },
      {
        slug: "clock-blindspot",
        title:   { en: "It can't reliably tell time", zh: "它還無法穩定讀懂時間" },
        summary: { en: "On ClockBench, the top model read analog clocks correctly 50.6% of the time vs. 90.1% for humans.",
                   zh: "在 ClockBench 上,頂尖模型只有 50.6% 能正確讀類比時鐘,人類為 90.1%。" },
        tags: ["reasoning"],
        overview: { en: "Despite clearing expert-level reasoning benchmarks, many multimodal models still struggle to read an analog clock — a task combining visual perception with simple arithmetic, where one mis-step cascades. ClockBench (Safar, 2025) scaled the test to 180 clock designs and 720 questions: humans read correctly formatted clocks correctly 90.1% of the time, while the top model (GPT-5.4 High) reached only 50.6% as of March 2026 — a roughly 40-point gap. When models told the time wrong, their median error ranged from about one to three hours, versus three minutes for humans. A follow-up study found that fine-tuning on 5,000 synthetic clock images improved familiar styles but failed to generalize to real photos or unusual dials, suggesting the difficulty lies in how models piece together multiple visual cues rather than in the training data.",
                    zh: "儘管跨過了專家級推理基準,許多多模態模型仍難以讀懂類比時鐘 — 這項任務結合視覺感知與簡單算術,一步出錯就會連鎖。ClockBench(Safar, 2025)將測試擴大到 180 種時鐘設計與 720 題:人類有 90.1% 能正確讀出格式正確的時鐘,而截至 2026 年 3 月頂尖模型(GPT-5.4 High)只有 50.6% — 落差約 40 個百分點。當模型看錯時間時,中位誤差約一到三小時,人類則僅三分鐘。後續研究發現,以 5,000 張合成時鐘影像微調雖能改善熟悉樣式,卻無法推廣到真實照片或不尋常的錶盤,顯示困難在於模型如何拼湊多個視覺線索,而非訓練資料本身。" }
      },
      {
        slug: "av-deployment",
        title:   { en: "Autonomous vehicles go mass-scale", zh: "自駕車進入大規模量產部署" },
        summary: { en: "Waymo hit ~450,000 weekly trips; Apollo Go logged ~11M driverless rides, up 175% YoY.",
                   zh: "Waymo 每週約 45 萬趟;Apollo Go 約 1,100 萬趟無人駕駛,年增 175%。" },
        tags: ["deployment"],
        overview: { en: "Self-driving cars moved past the research stage in 2025, with commercial services operating at scale. By late 2025, Waymo ran roughly 2,500 fully autonomous robotaxis across major U.S. cities — Phoenix, San Francisco, Los Angeles, Austin, and Atlanta — recording around 450,000 weekly trips; in California alone, weekly paid trips climbed from near zero in mid-2023 to approximately 283,880 by late 2025. In China, Baidu's Apollo Go provided approximately 11 million fully driverless rides in 2025, a 175% year-over-year increase, up from 1.5 million in 2022. The technical landscape is shifting toward vision–language–action models (e.g., Alpamayo 1) and larger multisensor datasets (Nvidia's PhysicalAI-AV at ~1,600 hours). Deployments so far concentrate in favorable-weather areas with off-site humans available to take over when needed.",
                    zh: "自駕車在 2025 年走出研究階段,商業服務已規模化營運。截至 2025 年底,Waymo 在鳳凰城、舊金山、洛杉磯、奧斯汀與亞特蘭大等主要美國城市營運約 2,500 輛全自駕無人計程車,每週約 45 萬趟;光是加州,每週付費載客就從 2023 年中的近乎零,升到 2025 年底約 283,880 趟。在中國,百度的 Apollo Go 在 2025 年提供約 1,100 萬趟全無人駕駛載客,年增 175%,高於 2022 年的 150 萬趟。技術版圖正轉向視覺—語言—行動模型(如 Alpamayo 1)與更大的多感測器資料集(Nvidia 的 PhysicalAI-AV 約 1,600 小時)。目前的部署集中在天候良好的地區,並有場外人員待命於必要時接手。" }
      }
    ]
  },

  /* ------------------------------------------------ SWE-bench trend chart */
  {
    type: "bars",
    id: "agent-leaps",
    title:    { en: "From near-zero to near-human in two years",
                zh: "兩年間從近乎零到接近人類" },
    subtitle: { en: "Best success rate (%) at each benchmark's earlier start vs. early 2026 — the pace of improvement on once-hard tasks.",
                zh: "各基準較早起點對比 2026 年初的最佳成功率(%) — 看曾經困難的任務進步有多快。" },
    series: [
      { label: { en: "OSWorld · ~2024", zh: "OSWorld · 約 2024" },     value: 12 },
      { label: { en: "OSWorld · 2026", zh: "OSWorld · 2026" },         value: 66 },
      { label: { en: "Cybench · 2024", zh: "Cybench · 2024" },         value: 15 },
      { label: { en: "Cybench · 2026", zh: "Cybench · 2026" },         value: 93 },
      { label: { en: "MLE-bench · 2024", zh: "MLE-bench · 2024" },     value: 17 },
      { label: { en: "MLE-bench · 2026", zh: "MLE-bench · 2026" },     value: 64 }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 2 · Technical Performance.",
                zh: "第 2 章「技術表現」的頭條發現。" },
    quotes: [
      { text: { en: "Frontier models gained 30 percentage points in a single year on Humanity's Last Exam — a benchmark built to be hard for AI and favorable to human experts.",
                zh: "前沿模型在 Humanity's Last Exam(一個專為難住 AI、有利於人類專家而設計的基準)上單年躍升 30 個百分點。" },
        by: "Chapter 2 · Technical Performance" },
      { text: { en: "The U.S.–China AI model performance gap has effectively closed; as of March 2026 the top U.S. model leads by just 2.7%.",
                zh: "美中 AI 模型的表現差距已實質消失;截至 2026 年 3 月,頂尖美國模型僅領先 2.7%。" },
        by: "Chapter 2 · Technical Performance" },
      { text: { en: "AI can win a gold medal at the International Mathematical Olympiad but still reads analog clocks correctly only 50.6% of the time, versus 90.1% for humans.",
                zh: "AI 拿得到國際數學奧林匹亞金牌,卻只有 50.6% 能正確讀類比時鐘,人類為 90.1%。" },
        by: "Chapter 2 · Technical Performance" },
      { text: { en: "AI agents advanced from answering questions to completing tasks — yet still fail roughly one in three attempts on structured benchmarks.",
                zh: "AI 代理從回答問題進展到完成任務 — 但在結構化基準上仍約每三次嘗試失敗一次。" },
        by: "Chapter 2 · Technical Performance" },
      { text: { en: "Robots succeed in only 12% of real household tasks even as they reach 89.4% in controlled simulation, while autonomous vehicles hit mass-scale deployment.",
                zh: "機器人在受控模擬中達 89.4%,真實居家任務卻只有 12% 成功,而自駕車已達大規模部署。" },
        by: "Chapter 2 · Technical Performance" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Technical Performance chapter", zh: "閱讀完整的技術表現章節" },
    text:  { en: "Chapter 2 (sections 2.1–2.7) with every benchmark, figure, and citation is free from Stanford HAI. Or head back to the 15 takeaways and nine-chapter overview.",
             zh: "第 2 章(2.1–2.7 各節)連同所有基準、圖表與引用,皆由史丹佛 HAI 免費提供。或回到 15 條重點與九大章節總覽。" },
    link:  { label: { en: "Open Chapter 2 · Technical Performance →", zh: "前往第 2 章:技術表現 →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance" }
  }
];

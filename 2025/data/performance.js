/* =========================================================================
   Technical Performance — deep dive · performance.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2025, Chapter 2
   https://hai.stanford.edu/ai-index/2025-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 2: 2.1 Overview of AI in 2024, 2.2 Language,
   2.3 Image and Video, 2.4 Speech, 2.5 Coding, 2.6 Mathematics,
   2.7 Reasoning, 2.8 Agents, 2.9 Robotics and Autonomous Vehicles.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "performance";

window.SITE_META = {
  title:    { en: "AI Index Report 2025", zh: "AI 指數報告 2025" },
  subtitle: { en: "Technical Performance · a chapter deep dive", zh: "技術表現專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "AI cleared the benchmarks built to stop it — in a single year",
                zh: "AI 一年之內，就跨過了為攔住它而設的基準" },
    subtitle: { en: "Chapter 2 of the AI Index 2025 tracks language, coding, math, reasoning, vision, speech, agents and robotics. Benchmarks designed in 2023 to be hard for years were largely solved by the end of 2024, the open-weight gap nearly vanished, and Chinese models drew almost level with American ones. The numbers:",
                zh: "AI 指數 2025 第 2 章橫跨語言、程式、數學、推理、視覺、語音、代理與機器人。2023 年設計來撐好幾年的高難度基準，到 2024 年底大致已被攻克；開放權重模型的差距幾乎消失，中國模型也幾乎追平美國模型。先看數字：" },
    stats: [
      { label: { en: "% of SWE-bench Verified coding problems solved in early 2025 (4.4% in 2023)", zh: "% 2025 年初解出的 SWE-bench Verified 程式問題(2023 年為 4.4%)" }, value: 71.7 },
      { label: { en: "percentage-point jump on GPQA Diamond in a single year", zh: "GPQA Diamond 一年內躍升的百分點" }, value: 48.9 },
      { label: { en: "% gap left between the best closed and open-weight models (8.0% in Jan 2024)", zh: "% 最佳封閉與開放權重模型之間剩下的差距(2024 年 1 月為 8.0%)" }, value: 1.7 },
      { label: { en: "-fold shrink in the smallest model clearing 60% on MMLU (540B → 3.8B params)", zh: "跨過 MMLU 60% 門檻的最小模型縮小的倍數(5,400 億 → 38 億參數)" }, value: 142 },
      { label: { en: "% top score on Humanity's Last Exam, the hardest new academic benchmark", zh: "% 最難的新學術基準 Humanity's Last Exam 的最高分" }, value: 8.8 },
      { label: { en: "paid Waymo robotaxi rides a week across four US cities", zh: "Waymo 每週在四座美國城市提供的付費自駕計程車趟次" }, value: 150000 }
    ]
  },

  /* -------------------------------------------------- 2.1 YEAR IN REVIEW */
  {
    type: "prose",
    id: "year-in-review",
    title:    { en: "2.1 — Four gaps closed at once",
                zh: "2.1 — 四道差距同時被填平" },
    subtitle: { en: "The story of 2024 is convergence. The gap between AI and human baselines, between closed and open weights, between American and Chinese models, and between the first- and tenth-ranked systems all narrowed sharply in twelve months.",
                zh: "2024 年的故事是收斂。AI 與人類基準之間、封閉與開放權重之間、美國與中國模型之間，以及排名第一與第十的系統之間 — 四道差距在十二個月內全部急遽縮小。" },
    blocks: [
      { type: "h3",
        text: { en: "AI versus humans", zh: "AI 對上人類" } },
      { type: "p",
        text: { en: "There are very few task categories left where human ability clearly surpasses AI, and in those that remain the gap is shrinking fast. On MATH, a competition-level mathematics benchmark, state-of-the-art systems now sit 7.9 percentage points ahead of human performance. On MMMU — a multidisciplinary, expert-level test — the best 2024 model, o1, scored 78.2%, just 4.4 points below the human benchmark of 82.6%; at the end of 2023 Google Gemini managed 59.4%. On GPQA Diamond, o3's 87.7% was the first score to exceed the 81.3% accuracy of expert human validators.",
                zh: "人類能力明顯勝過 AI 的任務類別已所剩無幾，而在僅存的幾項上，差距也在快速縮小。在競賽等級的數學基準 MATH 上，最先進的系統如今領先人類表現 7.9 個百分點。在跨學科、專家等級的 MMMU 上，2024 年最佳模型 o1 拿下 78.2%，僅比人類基準 82.6% 低 4.4 分；而 2023 年底 Google Gemini 只有 59.4%。在 GPQA Diamond 上，o3 的 87.7% 是史上第一個超越專家人類驗證者 81.3% 準確率的分數。" } },
      { type: "h3",
        text: { en: "Closed versus open weights", zh: "封閉權重對上開放權重" } },
      { type: "ul",
        items: {
          en: ["In early January 2024 the leading closed-weight model outperformed the top open-weight model by 8.0% on the Chatbot Arena Leaderboard. By February 2025 that gap had narrowed to 1.7%.",
               "The same collapse shows up on static benchmarks. In late 2023 closed models led open ones on MMLU by 15.9 points; by the end of 2024 the difference was 0.1 percentage point.",
               "The catch-up was driven largely by Meta's summer release of Llama 3.1, followed by other strong open-weight models including DeepSeek's V3.",
               "Openness remains contested: advocates point to reduced market concentration, better security scrutiny and transparency; critics warn about disinformation and bioweapon risks. Note too that open weights is not open source — training code and data are usually withheld."],
          zh: ["2024 年 1 月初，領先的封閉權重模型在 Chatbot Arena 排行榜上勝過最強的開放權重模型 8.0%。到 2025 年 2 月，這道差距已縮小到 1.7%。",
               "同樣的崩塌也出現在靜態基準上。2023 年底，封閉模型在 MMLU 上領先開放模型 15.9 分；到 2024 年底，差距只剩 0.1 個百分點。",
               "這波追趕主要由 Meta 夏天釋出的 Llama 3.1 帶動，其後還有 DeepSeek V3 等表現優異的開放權重模型。",
               "開放與否仍有爭議：支持者指出它能降低市場集中度、強化資安檢視與透明度；批評者則警告造假資訊與生物武器風險。也要注意，開放權重不等於開源 — 訓練程式碼與資料通常仍未公開。"]
        } },
      { type: "h3",
        text: { en: "The United States versus China", zh: "美國對上中國" } },
      { type: "p",
        text: { en: "In January 2024 the top US model outperformed the best Chinese model by 9.3% on the LMSYS Chatbot Arena. By February 2025 that lead was 1.7%. On static benchmarks the shift is starker: at the end of 2023 the gaps on MMLU, MMMU, MATH and HumanEval were 17.5, 13.5, 24.3 and 31.6 percentage points; by the end of 2024 they were 0.3, 8.1, 1.6 and 3.7. DeepSeek's R1 launch drew attention for a second reason — the company reported achieving its results with a fraction of the hardware normally required, which moved US stock markets and raised questions about the effectiveness of semiconductor export controls.",
                zh: "2024 年 1 月，最強的美國模型在 LMSYS Chatbot Arena 上勝過最強的中國模型 9.3%。到 2025 年 2 月，這個領先只剩 1.7%。在靜態基準上落差更為明顯：2023 年底，MMLU、MMMU、MATH 與 HumanEval 的差距分別是 17.5、13.5、24.3 與 31.6 個百分點；到 2024 年底，只剩 0.3、8.1、1.6 與 3.7。DeepSeek 的 R1 之所以受矚目還有第二個理由 — 該公司表示只用了通常所需硬體的一小部分就取得這些成績，不但撼動美股，也引發外界質疑半導體出口管制的效果。" } },
      { type: "h3",
        text: { en: "The frontier versus itself", zh: "前沿對上自己" } },
      { type: "ul",
        items: {
          en: ["The Elo gap between the top and tenth-ranked model on the Chatbot Arena Leaderboard fell from 11.9% to 5.4% in a year, and the difference between the top two models shrank from 4.9% in 2023 to 0.7% in 2024.",
               "2024 was a breakthrough year for small models. In 2022 the smallest model scoring above 60% on MMLU was PaLM at 540 billion parameters; by 2024 Microsoft's Phi-3 Mini did it with 3.8 billion — a 142-fold reduction in two years.",
               "New reasoning paradigms arrived: OpenAI's o1 and o3 iterate over their own outputs at inference time. o1 scored 74.4% on an International Mathematical Olympiad qualifying exam, against GPT-4o's 9.3%.",
               "That reasoning is not free. o1 costs $15 per million input tokens and $60 per million output tokens, versus $2.50 and $10 for GPT-4o, and takes roughly 40 times longer to produce its first token (29.7 seconds against 0.72)."],
          zh: ["Chatbot Arena 排行榜上第一名與第十名之間的 Elo 差距，一年內從 11.9% 降到 5.4%；前兩名之間的差距則從 2023 年的 4.9% 縮小到 2024 年的 0.7%。",
               "2024 年是小模型的突破年。2022 年，MMLU 得分超過 60% 的最小模型是 5,400 億參數的 PaLM；到 2024 年，微軟的 Phi-3 Mini 只用 38 億參數就達標 — 兩年縮小 142 倍。",
               "新的推理典範登場：OpenAI 的 o1 與 o3 會在推論階段反覆檢視自己的輸出。o1 在國際數學奧林匹亞資格考上拿下 74.4%，GPT-4o 只有 9.3%。",
               "這種推理並不便宜。o1 每百萬輸入 token 收費 15 美元、每百萬輸出 token 60 美元，GPT-4o 則是 2.50 與 10 美元；而且產出第一個 token 的時間約慢 40 倍(29.7 秒對上 0.72 秒)。"]
        } }
    ]
  },

  /* --------------------------------------------- hardest benchmarks chart */
  {
    type: "bars",
    id: "hard-benchmarks",
    title:    { en: "Where AI actually stands on the hardest tests",
                zh: "在最難的測驗上，AI 到底站在哪裡" },
    subtitle: { en: "Best reported score on each benchmark as of early 2025 (%). The 2023-vintage tests are largely solved; the 2024-vintage ones are not — the top system answers 8.8% of Humanity's Last Exam and 2% of FrontierMath.",
                zh: "截至 2025 年初各基準的最佳回報分數(%)。2023 年出生的測驗大致已被攻克，2024 年出生的還沒 — 最強的系統只答對 Humanity's Last Exam 的 8.8%，以及 FrontierMath 的 2%。" },
    series: [
      { label: { en: "GPQA Diamond", zh: "GPQA Diamond" },          value: 87.7 },
      { label: { en: "MMMU", zh: "MMMU" },                          value: 78.2 },
      { label: { en: "SWE-bench Verified", zh: "SWE-bench Verified" }, value: 71.7 },
      { label: { en: "BigCodeBench (hard)", zh: "BigCodeBench(難)" }, value: 35.5 },
      { label: { en: "Humanity's Last Exam", zh: "Humanity's Last Exam" }, value: 8.8 },
      { label: { en: "FrontierMath", zh: "FrontierMath" },          value: 2 }
    ]
  },

  /* ------------------------------------------------------- 2024 TIMELINE */
  {
    type: "timeline",
    id: "releases",
    title:    { en: "The year in launches", zh: "這一年的發表大事記" },
    subtitle: { en: "A selection of the model and capability releases that shaped 2024, drawn from the chapter's own timeline.",
                zh: "從本章時間軸中挑出的幾個模型與能力發表，它們形塑了 2024 年。" },
    events: [
      { date:  { en: "Feb 15, 2024", zh: "2024 年 2 月 15 日" },
        title: { en: "Gemini 1.5 Pro · Google", zh: "Gemini 1.5 Pro · Google" },
        body:  { en: "Google's new flagship LLM. By early 2025 the Chatbot Arena had gathered over a million votes, and users ranked one of Google's Gemini models as the community's most preferred system.",
                 zh: "Google 的新旗艦 LLM。到 2025 年初，Chatbot Arena 已累積超過一百萬張投票，而使用者把 Google 的 Gemini 系列之一評為社群最偏好的系統。" } },
      { date:  { en: "Mar 4, 2024", zh: "2024 年 3 月 4 日" },
        title: { en: "Claude 3 · Anthropic", zh: "Claude 3 · Anthropic" },
        body:  { en: "Anthropic's new LLM family. Its successor, Claude 3.5 Sonnet, would go on to post a perfect 100% on HumanEval under HPT prompting, 97.72% on GSM8K, and the highest mean safety score on Stanford's HELM Safety suite at 0.977.",
                 zh: "Anthropic 的新 LLM 系列。它的後繼者 Claude 3.5 Sonnet 後來在 HPT 提示策略下於 HumanEval 拿到滿分 100%、GSM8K 97.72%，並在史丹佛 HELM Safety 測試組中以 0.977 拿下最高的平均安全分數。" } },
      { date:  { en: "May 13, 2024", zh: "2024 年 5 月 13 日" },
        title: { en: "GPT-4o · OpenAI", zh: "GPT-4o · OpenAI" },
        body:  { en: "A natively multimodal model reasoning across text, audio and images, priced at $2.50 per million input tokens and $10 per million output tokens, with a 0.72-second time to first token.",
                 zh: "原生多模態模型，可跨文字、音訊與影像推理，定價為每百萬輸入 token 2.50 美元、每百萬輸出 token 10 美元，首個 token 的產出時間為 0.72 秒。" } },
      { date:  { en: "Jul 23, 2024", zh: "2024 年 7 月 23 日" },
        title: { en: "Llama 3.1 405B · Meta", zh: "Llama 3.1 405B · Meta" },
        body:  { en: "Meta's largest model to date, and the single biggest reason the open-weight gap collapsed. Training took roughly 90 days, drew 25.3 million watts, and cost an estimated $170 million.",
                 zh: "Meta 迄今最大的模型，也是開放權重差距崩塌最主要的單一原因。訓練約耗時 90 天、耗電 2,530 萬瓦，成本估計 1.7 億美元。" } },
      { date:  { en: "Sep 12, 2024", zh: "2024 年 9 月 12 日" },
        title: { en: "o1-preview · OpenAI", zh: "o1-preview · OpenAI" },
        body:  { en: "The first model in the o series, designed to reason step by step rather than answer autoregressively. The full o1 followed on December 5, alongside ChatGPT Pro at $200 a month. Against GPT-4o, o1 gained 2.8 points on MMLU, 34.5 on MATH, 26.7 on GPQA Diamond and 65.1 on AIME 2024.",
                 zh: "o 系列的第一個模型，設計成一步步推理而非單純自迴歸作答。完整版 o1 於 12 月 5 日推出，同時上線的還有每月 200 美元的 ChatGPT Pro。相較於 GPT-4o，o1 在 MMLU 上多 2.8 分、MATH 多 34.5 分、GPQA Diamond 多 26.7 分、AIME 2024 多 65.1 分。" } },
      { date:  { en: "Oct 22, 2024", zh: "2024 年 10 月 22 日" },
        title: { en: "Computer Use · Anthropic", zh: "Computer Use · Anthropic" },
        body:  { en: "A computer control capability that lets a model operate a desktop directly — one of the year's clearest steps from chatbot toward agent.",
                 zh: "一項讓模型直接操作桌面電腦的能力 — 這是這一年從聊天機器人邁向代理最明確的一步。" } },
      { date:  { en: "Dec 12, 2024", zh: "2024 年 12 月 12 日" },
        title: { en: "Sora · OpenAI", zh: "Sora · OpenAI" },
        body:  { en: "Previewed in February and publicly accessible in December, Sora generates 20-second videos at resolutions up to 1080p. It arrived in a crowded year: Stable Video 3D in March, Meta's Movie Gen in October (16-second 1080p clips with sound), and Google's Veo 2, whose output was consistently preferred over Movie Gen, Kling v1.5 and Sora Turbo in user comparisons.",
                 zh: "2 月先行預覽、12 月正式開放，Sora 可生成長達 20 秒、解析度最高 1080p 的影片。它出現在一個相當擁擠的年份：3 月有 Stable Video 3D，10 月有 Meta 的 Movie Gen(16 秒、1080p、含聲音)，還有 Google 的 Veo 2 — 在使用者比較中，Veo 2 的產出一貫勝過 Movie Gen、Kling v1.5 與 Sora Turbo。" } },
      { date:  { en: "Dec 20 & 27, 2024", zh: "2024 年 12 月 20 日與 27 日" },
        title: { en: "o3 (beta) · OpenAI, then DeepSeek-V3", zh: "o3(beta) · OpenAI，接著是 DeepSeek-V3" },
        body:  { en: "o3 posted 75.7% on ARC-AGI — 87.5% when given a compute budget above the benchmark's $10,000 limit — plus 87.7% on GPQA Diamond and 71.7% on SWE-bench Verified. A week later DeepSeek released V3, an open-source model whose performance rivaled the frontier at a reported fraction of the training cost.",
                 zh: "o3 在 ARC-AGI 上拿下 75.7% — 若給予超過該基準 10,000 美元上限的運算預算則可達 87.5% — 另有 GPQA Diamond 87.7%、SWE-bench Verified 71.7%。一週後 DeepSeek 釋出開源的 V3，效能直逼前沿，而據報訓練成本只是一小部分。" } }
    ]
  },

  /* ------------------------------------------ 2.5–2.7 CODE, MATH, REASON */
  {
    type: "prose",
    id: "code-math-reason",
    title:    { en: "2.5–2.7 — Code and math fell first, reasoning is following",
                zh: "2.5–2.7 — 程式與數學先被攻克，推理正在跟上" },
    subtitle: { en: "The benchmarks that defined AI coding and mathematics two years ago are now saturated or solved. The harder replacements built in 2024 show how much room is left.",
                zh: "兩年前定義 AI 程式與數學能力的那些基準，如今不是飽和就是被解掉了。2024 年打造的更難替代品，則顯示還剩下多少空間。" },
    blocks: [
      { type: "h3",
        text: { en: "Coding", zh: "程式" } },
      { type: "ul",
        items: {
          en: ["HumanEval, introduced by OpenAI researchers in 2021 with 164 handwritten problems, is finished: Claude 3.5 Sonnet under HPT prompting scores 100%.",
               "SWE-bench, built from real GitHub issues in Python repositories, was meant to be much harder — it requires coordinating changes across files. The best model at the end of 2023 solved 4.4% of problems. By early 2025, o3 solved 71.7% of the Verified set.",
               "BigCodeBench, released in 2024, is the current hard case: 1,140 tasks requiring calls across 139 libraries and seven domains. The best model, o1, averages 35.5 on the hard subset — well below the human standard of 97%.",
               "In the Chatbot Arena coding filter, Gemini-Exp-1206 leads with an arena score of 1,369, just ahead of o1 at 1,361. DeepSeek-V3 leads Chinese models at 1,317, trailing the top by 3.8%."],
          zh: ["OpenAI 研究者於 2021 年推出、含 164 道手寫題目的 HumanEval 已經結束了：Claude 3.5 Sonnet 在 HPT 提示下拿到 100%。",
               "SWE-bench 取材自 Python 專案的真實 GitHub issue，原本應該困難得多 — 它要求跨檔案協調修改。2023 年底最強的模型只解出 4.4% 的問題。到 2025 年初，o3 解出了 Verified 子集的 71.7%。",
               "2024 年推出的 BigCodeBench 是目前的難題：1,140 項任務，需跨 139 個函式庫、七個領域呼叫函式。最強的 o1 在困難子集上平均 35.5 分 — 遠低於人類水準的 97%。",
               "在 Chatbot Arena 的程式篩選中，Gemini-Exp-1206 以 1,369 的競技場分數領先，o1 以 1,361 緊追在後。中國模型中 DeepSeek-V3 以 1,317 居首，落後榜首 3.8%。"]
        } },
      { type: "h3",
        text: { en: "Mathematics", zh: "數學" } },
      { type: "ul",
        items: {
          en: ["GSM8K is nearing saturation: Claude 3.5 Sonnet with HPT prompting scores 97.72%, up from a 91.00% high in 2023, and several Mistral, Meta and Qwen models cluster around 96%. On MATH, the best system solves 97.9% of problems.",
               "FrontierMath, introduced by Epoch AI, is the answer to that saturation — original problems vetted by expert mathematicians that can take hours, days or collaborative effort to solve. At release, the best of six leading LLMs, Gemini 1.5 Pro, solved just 2.0%.",
               "DeepMind's AlphaProof and AlphaGeometry 2 solved four of six problems at the 2024 International Mathematical Olympiad, a silver-medal-equivalent performance. On IMO-AG-30 geometry problems the systems solved 25, against an IMO silver medalist's average of 22.9.",
               "In the Chatbot Arena math filter — over 181 models and more than 340,000 public votes — the top model is an OpenAI o1 variant released in December 2024, breaking the Gemini lead seen in the general and coding arenas."],
          zh: ["GSM8K 已接近飽和：Claude 3.5 Sonnet 搭配 HPT 提示拿到 97.72%，高於 2023 年 91.00% 的最高分，而 Mistral、Meta 與 Qwen 的數個模型都聚集在 96% 附近。在 MATH 上，最強的系統解出 97.9% 的題目。",
               "Epoch AI 推出的 FrontierMath 就是對這種飽和的回應 — 由專業數學家審核的原創題目，往往需要數小時、數天，甚至協作研究才解得出來。發布當時，六個領先 LLM 中表現最好的 Gemini 1.5 Pro 只解出 2.0%。",
               "DeepMind 的 AlphaProof 與 AlphaGeometry 2 在 2024 年國際數學奧林匹亞解出六題中的四題，相當於銀牌水準。在 IMO-AG-30 幾何題上，這些系統解出 25 題，而 IMO 銀牌得主平均為 22.9 題。",
               "在 Chatbot Arena 的數學篩選中 — 涵蓋超過 181 個模型與逾 340,000 張公開投票 — 榜首是 2024 年 12 月釋出的 OpenAI o1 變體，打破了 Gemini 在一般與程式競技場中的領先。"]
        } },
      { type: "h3",
        text: { en: "Reasoning", zh: "推理" } },
      { type: "p",
        text: { en: "MMMU, launched in 2023 with about 11,500 college-level questions across six disciplines, went from a 59.4% state of the art to o1's 78.2% in a year. GPQA Diamond — 448 expert-written questions that cannot be answered by web search — went from GPT-4's 38.8% to o3's 87.7%, a 48.9-point jump and the first score above the 81.3% expert human baseline. ARC-AGI, designed to resist memorization, is the most dramatic case: 20% when first run in 2020, still only 33% four years later, then 75.7% from o3 — and 87.5% when given a compute budget beyond the benchmark's $10,000 limit. Researchers attribute the earlier stagnation to an overemphasis on scaling, which improved task-specific skill without improving generalization.",
                zh: "MMMU 於 2023 年推出，涵蓋六大學科約 11,500 道大學程度題目，一年之內從 59.4% 的最佳成績躍升到 o1 的 78.2%。GPQA Diamond 由專家撰寫、無法靠網路搜尋作答的 448 道題目，則從 GPT-4 的 38.8% 升到 o3 的 87.7%，躍升 48.9 分，也是第一個超越 81.3% 專家人類基準的分數。設計來抵抗記憶的 ARC-AGI 是最戲劇性的案例：2020 年首次舉辦時只有 20%，四年後仍只有 33%，接著 o3 拿下 75.7% — 若給予超過該基準 10,000 美元上限的運算預算，更達 87.5%。研究者認為先前的停滯源於過度偏重規模擴張，那只提升了特定任務的技巧，卻沒有提升泛化能力。" } }
    ]
  },

  /* ----------------------------------------------- US–China gap 2024 chart */
  {
    type: "bars",
    id: "us-china",
    title:    { en: "The US–China performance gap at the end of 2024",
                zh: "2024 年底的美中效能差距" },
    subtitle: { en: "Percentage-point lead of the top US model over the top Chinese model. A year earlier the same four gaps were 17.5, 13.5, 24.3 and 31.6 points — multimodal reasoning is the only one still meaningfully open.",
                zh: "最強的美國模型領先最強的中國模型的百分點數。一年前這四道差距分別是 17.5、13.5、24.3 與 31.6 分 — 如今只剩多模態推理還有實質空間。" },
    series: [
      { label: { en: "MMMU", zh: "MMMU" },           value: 8.1 },
      { label: { en: "HumanEval", zh: "HumanEval" }, value: 3.7 },
      { label: { en: "MATH", zh: "MATH" },           value: 1.6 },
      { label: { en: "MMLU", zh: "MMLU" },           value: 0.3 }
    ]
  },

  /* ------------------------------------------------ 2.9 ROBOTS & DRIVING */
  {
    type: "prose",
    id: "physical",
    title:    { en: "2.9 — Out of the browser and onto the road",
                zh: "2.9 — 走出瀏覽器，開上馬路" },
    subtitle: { en: "New this year, the chapter expands its coverage of robotics and self-driving cars. Autonomous taxis are now a commercial service in four US cities and sixteen Chinese ones, with safety data that is starting to look convincing.",
                zh: "本章今年新增並擴充了機器人與自駕車的分析。自駕計程車如今已在四座美國城市與十六座中國城市成為商業服務，而安全數據開始看起來具有說服力。" },
    blocks: [
      { type: "h3",
        text: { en: "Robotaxis at commercial scale", zh: "商業規模的自駕計程車" } },
      { type: "ul",
        items: {
          en: ["As of January 2025, Waymo operates in Phoenix, San Francisco, Los Angeles and Austin, providing about 150,000 paid rides a week and covering over a million miles. Rider-only miles through September 2024 were 20.823 million in Phoenix, 10.209 million in San Francisco, 1.947 million in Los Angeles and 124,000 in Austin. The company plans to test in ten more cities, deliberately including snowy locations such as upstate New York and Truckee, California.",
               "Baidu's Apollo Go reported 988,000 rides across China in Q3 2024, a 20% year-over-year increase, operating 400 robotaxis in October 2024 with plans for 1,000 by the end of 2025. Its RT6 robotaxi, with a battery-swapping system, costs about $30,000.",
               "Pony.AI has pledged to grow its fleet from 200 to at least 1,000 vehicles, with 2,000 to 3,000 expected by the end of 2026. China is testing more driverless cars than any other country, rolling them out across 16 cities, and has prioritized national regulations to govern deployment.",
               "Tesla unveiled the Cybercab in October 2024 — a two-passenger vehicle with no steering wheel or pedals, slated for 2026 production at under $30,000 — alongside the 20-passenger Robovan. Cruise, by contrast, had its license suspended in 2023 after a series of safety incidents."],
          zh: ["截至 2025 年 1 月，Waymo 在鳳凰城、舊金山、洛杉磯與奧斯汀營運，每週提供約 150,000 趟付費載客，行駛超過一百萬英里。截至 2024 年 9 月的純載客里程為：鳳凰城 2,082.3 萬英里、舊金山 1,020.9 萬英里、洛杉磯 194.7 萬英里、奧斯汀 12.4 萬英里。該公司計畫再到十座城市測試，並刻意納入紐約州北部與加州特拉基等會下雪的地點。",
               "百度的 Apollo Go 回報 2024 年第三季在中國完成 988,000 趟載客，年增 20%；2024 年 10 月營運 400 台自駕計程車，並計畫在 2025 年底前擴增到 1,000 台。其配備換電系統的 RT6 車型售價約 30,000 美元。",
               "小馬智行承諾把車隊從 200 台擴大到至少 1,000 台，預期 2026 年底可達 2,000 至 3,000 台。中國測試中的無人車數量居全球之冠，已在 16 座城市推展，並優先建立管理部署的全國性法規。",
               "特斯拉在 2024 年 10 月發表 Cybercab — 一款沒有方向盤與踏板的雙人座車輛，預定 2026 年量產、售價低於 30,000 美元 — 同時發表可載 20 人的 Robovan。相對地，Cruise 在 2023 年因一連串安全事件被吊銷執照。"]
        } },
      { type: "h3",
        text: { en: "Are they safer than us?", zh: "它們比我們安全嗎？" } },
      { type: "p",
        text: { en: "The emerging evidence says yes. Compared with the estimated rate for human drivers over the same distance, Waymo vehicles recorded 1.42 fewer airbag deployments, 3.16 fewer crashes with reported injuries and 3.65 fewer police-reported crashes per million miles. A separate study with the reinsurer Swiss Re — benchmarked against a dataset of over 500,000 claims and 200 billion miles of driving — found an 88% reduction in property damage claims and a 92% reduction in bodily injury claims. In absolute terms, across 25.3 million miles Waymo vehicles drew nine property damage claims and two bodily injury claims, where human drivers would have been expected to incur 78 and 26. Waymo also outperformed the latest-generation human-driven vehicles fitted with modern safety features.",
                zh: "浮現中的證據說是的。與人類駕駛在同樣里程下的估計值相比，Waymo 車輛每百萬英里少了 1.42 次安全氣囊啟動、3.16 次有傷亡通報的碰撞，以及 3.65 次警方紀錄的碰撞。另一項與再保險公司瑞士再保合作的研究 — 對照的是超過 500,000 筆理賠與 2,000 億英里行駛資料 — 發現財物損害理賠減少 88%、人身傷害理賠減少 92%。以絕對數字來看，在 2,530 萬英里中，Waymo 車輛只產生 9 件財物損害理賠與 2 件人身傷害理賠，而人類駕駛在同樣距離下預期會是 78 件與 26 件。Waymo 的表現也勝過配備現代安全功能的最新一代人類駕駛車輛。" } },
      { type: "h3",
        text: { en: "Robots that learn", zh: "會學習的機器人" } },
      { type: "ul",
        items: {
          en: ["2024 was a notable year for humanoids. Figure AI's Figure 02 handles a 44-pound payload, runs for up to five hours on a charge, and is integrated with OpenAI for speech-to-speech reasoning — it can explain what it is doing. Tesla's Optimus and Boston Dynamics' Atlas continued to develop alongside it.",
               "DeepMind's AutoRT autonomously generates training data for robots and has produced a dataset of 77,000 robotic trials spanning 6,650 unique tasks. SARA-RT improves the efficiency of transformer-based robotic models; ALOHA and DemoStart tackle dexterous manipulation with far less data.",
               "Foundation models arrived in robotics: Nvidia's GROOT development suite pairs humanoid models with simulation frameworks and the Thor robotics computer, following RT-2, PaLM-E and Open-X Embodiment.",
               "New benchmarks matched the ambition. nuPlan offers 1,282 hours of driving scenarios with closed-loop evaluation; Bench2Drive provides over 2 million annotated frames from more than 10,000 clips plus 220 evaluation routes; OpenAD is the first real-world open-world benchmark for 3D object detection in driving."],
          zh: ["2024 年是人形機器人值得記上一筆的一年。Figure AI 的 Figure 02 可搬運 44 磅負載、單次充電運作長達五小時，並與 OpenAI 整合而具備語音到語音的推理能力 — 它能解釋自己正在做什麼。特斯拉的 Optimus 與波士頓動力的 Atlas 也持續發展。",
               "DeepMind 的 AutoRT 可自主生成機器人訓練資料，迄今產出涵蓋 6,650 種獨特任務的 77,000 次機器人試驗資料集。SARA-RT 提升以 transformer 為基礎的機器人模型效率；ALOHA 與 DemoStart 則用少得多的資料處理靈巧操作。",
               "基礎模型也進入機器人領域：Nvidia 的 GROOT 開發套件把人形機器人模型與模擬框架、Thor 機器人電腦組合在一起，承接 RT-2、PaLM-E 與 Open-X Embodiment 的路線。",
               "新基準跟上了這份野心。nuPlan 提供 1,282 小時的行駛情境與閉環評估；Bench2Drive 提供來自超過 10,000 段影片的 200 萬幀以上標註畫面，外加 220 條評估路線；OpenAD 則是第一個針對駕駛 3D 物件偵測的真實開放世界基準。"]
        } }
    ]
  },

  /* ----------------------------------------------------------- ACCORDION */
  {
    type: "accordion",
    id: "limits",
    title:    { en: "What AI still gets wrong", zh: "AI 仍然做不好的事" },
    subtitle: { en: "The chapter is candid about the limits — and about how much we can trust the scores in the first place.",
                zh: "本章對限制相當坦率 — 也對這些分數本身有多可信，說得很直白。" },
    qa: [
      { q: { en: "Can these models actually plan?", zh: "這些模型真的會規劃嗎？" },
        a: { en: "Better than before, but not reliably. On PlanBench — 600 block-stacking problems from the automated planning community — o1 scored 97.8% on the Blocksworld zero-shot evaluation, far ahead of Llama 3.1 405B (62.6%) and GPT-4o (35.5%). But on Mystery Blocksworld, where answers are syntactically obfuscated, o1 managed 52.8% against Llama 3.1 405B's 0.8% and GPT-4's 0%. And on instances requiring at least 20 steps, o1 solves just 23.6%. These systems still cannot reliably solve problems for which provably correct answers exist through logical reasoning — a real limit on their suitability for high-stakes settings where precision matters.",
             zh: "比以前好，但不可靠。在 PlanBench 上 — 取自自動規劃社群的 600 道堆積木問題 — o1 在 Blocksworld 零樣本評估中拿下 97.8%，遠勝 Llama 3.1 405B(62.6%)與 GPT-4o(35.5%)。但在答案經過語法混淆的 Mystery Blocksworld 上，o1 只有 52.8%，Llama 3.1 405B 為 0.8%，GPT-4 則是 0%。而在需要至少 20 步的題目上，o1 只解出 23.6%。這些系統依然無法可靠地解決那些用邏輯推理就能得出可證明正確答案的問題 — 這對它們是否適合用於精確性攸關成敗的高風險場域，構成了實質限制。" } },
      { q: { en: "Are AI agents ready to be deployed?", zh: "AI 代理已經可以上線了嗎？" },
        a: { en: "Not yet, but the shape of their advantage is becoming clear. On VisualAgentBench, which tests embodied, GUI and visual design agents, the best model — GPT-4o — reaches an overall success rate of just 36.2%, and most proprietary models average around 20%; the authors conclude current models are far from ready for direct deployment. RE-Bench found the trade-off is about time: with a two-hour budget the best AI systems score four times higher than human experts, at eight hours humans slightly pull ahead, and at 32 hours humans outscore AI two to one. In specific tasks agents already match human expertise — they can write custom Triton kernels faster than any human expert, and at lower cost. On Meta's GAIA benchmark the top system reached 65.1%, roughly 30 percentage points above the previous best.",
             zh: "還沒有，但它們的優勢輪廓已經逐漸清楚。在測試具身、GUI 與視覺設計代理的 VisualAgentBench 上，最佳模型 GPT-4o 的整體成功率只有 36.2%，多數專有模型平均約 20%；作者的結論是，現有模型離直接部署還很遠。RE-Bench 發現關鍵在時間：兩小時預算下，最強的 AI 系統得分是人類專家的四倍；八小時時人類略為超前；到 32 小時，人類以二比一勝出。在特定任務上，代理已具備與人類相當的專業能力 — 它們寫客製化 Triton kernel 比任何人類專家都快，成本也更低。在 Meta 的 GAIA 基準上，最強系統達到 65.1%，約比先前最高分高出 30 個百分點。" } },
      { q: { en: "Can we trust the benchmark scores at all?", zh: "這些基準分數到底可不可信？" },
        a: { en: "Treat them carefully. BetterBench researchers systematically analyzed 24 prominent benchmarks and found systemic deficiencies: 14 failed to report statistical significance, 17 lacked scripts for replicating results, and most had inadequate documentation. MMLU adhered poorly to quality standards, while GPQA performed significantly better. Contamination is a second problem — a Scale study found significant contamination in many LLMs' GSM8K performance, prompting periodically updated benchmarks like LiveBench. Third, developers report their own scores, sometimes using nonstandard prompting: Google reported an MMLU score for Gemini Ultra using a chain-of-thought technique other developers did not use, and third-party researchers have found publicly reported scores differing from independent evaluations by as much as five percentage points.",
             zh: "請小心對待。BetterBench 的研究者系統性分析了 24 個知名基準，發現結構性缺陷：14 個沒有報告統計顯著性、17 個沒有提供重現結果的腳本，多數的文件也不足。MMLU 對品質標準的遵循程度很差，GPQA 則明顯好得多。汙染是第二個問題 — Scale 的一項研究發現許多 LLM 在 GSM8K 上的表現有明顯汙染，因而催生了 LiveBench 這類定期更新的基準。第三，分數是由開發者自己回報的，有時還使用非標準的提示方式：Google 回報 Gemini Ultra 的 MMLU 分數時，用的是其他開發者沒有採用的思維鏈技巧；第三方研究者也發現，公開回報的分數與獨立評測的結果可能相差多達五個百分點。" } },
      { q: { en: "Has AI passed the Turing test?", zh: "AI 通過圖靈測試了嗎？" },
        a: { en: "Effectively, and the more interesting point is that the question has stopped mattering. Recent evidence suggests LLMs have advanced far enough that people struggle to distinguish the best-performing models from a human in text conversation. The AI Index frames this less as a milestone reached than as a milestone that lost its meaning: the test remains a historical and cultural landmark, but its diminishing relevance is itself the measure of progress. Attention has moved to benchmarks the systems cannot yet touch.",
             zh: "實質上已經通過了，而更有意思的一點是，這個問題本身已經不重要了。近期證據顯示，LLM 進步到讓人們難以在文字對話中分辨最強的模型與真人。AI 指數的說法，與其說是達成了一個里程碑，不如說是一個里程碑失去了意義：這項測試仍是重要的歷史與文化地標，但它相關性的下降，本身就是進展的量尺。注意力已經轉向那些系統還碰不到的基準。" } },
      { q: { en: "What is left that AI cannot do?", zh: "還剩下什麼是 AI 做不到的？" },
        a: { en: "The 2024-vintage benchmarks. Humanity's Last Exam — 2,700 multimodal questions written by leading professors and graduate reviewers, each pre-tested against state-of-the-art LLMs and rejected if a model could already answer it — is answered correctly just 8.8% of the time by o1, though its creators speculate performance could exceed 50% by the end of 2025. FrontierMath sits at 2%. BigCodeBench's hard subset sits at 35.5%, against a human standard of 97%. And SimpleQA, OpenAI's own factuality test, is answered correctly only 42.7% of the time by o1-preview, its best performer.",
             zh: "2024 年這一批新基準。Humanity's Last Exam 由頂尖教授與研究所層級的審稿者撰寫，共 2,700 道多模態題目，每一題在收錄前都先對最先進的 LLM 測試過，只要現有模型答得出來就淘汰 — o1 只答對其中 8.8%，不過設計者推測到 2025 年底表現可能超過 50%。FrontierMath 停在 2%。BigCodeBench 的困難子集停在 35.5%，而人類水準是 97%。至於 OpenAI 自家的事實性測驗 SimpleQA，表現最好的 o1-preview 也只答對 42.7%。" } }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Technical Performance chapter", zh: "閱讀完整的技術表現章節" },
    text:  { en: "Chapter 2 (sections 2.1–2.9) — language, image and video, speech, coding, math, reasoning, agents, robotics and autonomous vehicles — with every figure and citation is free from Stanford HAI.",
             zh: "第 2 章(2.1–2.9 各節) — 語言、影像與影片、語音、程式、數學、推理、代理、機器人與自駕車 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { label: { en: "Open the AI Index Report 2025 →", zh: "前往 AI 指數報告 2025 →" },
             url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" }
  }
];

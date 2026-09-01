/* =========================================================================
   Technical Performance — deep dive · performance.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2024, Chapter 2
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure describes calendar year 2023 and is drawn from Chapter 2: 2.1
   Overview of AI in 2023, 2.2 Language, 2.3 Coding, 2.4 Image Computer
   Vision, 2.5 Video, 2.6 Reasoning, 2.8 Agents, 2.9 Robotics, 2.11
   Properties of LLMs, 2.13 Environmental Impact of AI Systems.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "performance";

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Technical Performance · a chapter deep dive", zh: "技術表現專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "AI finished the tests we had — so 2023 went and built harder ones",
                zh: "AI 把現成的測驗都考完了 — 於是 2023 年造了更難的" },
    subtitle: { en: "Chapter 2 of the AI Index 2024 measures where AI stood at the end of 2023. On the old benchmarks the story is saturation: ImageNet, SuperGLUE and VQA improved so little that this edition drops them. On the new ones built in 2023 — coding, expert reasoning, agents, hallucination — the scores are low enough to leave years of headroom. The numbers:",
                zh: "AI 指數 2024 第 2 章量的是 2023 年底 AI 站在哪裡。舊基準的故事是飽和：ImageNet、SuperGLUE 與 VQA 進步太少，這一版索性把它們拿掉。而 2023 年新造的那批基準 — 程式、專家推理、代理、幻覺 — 分數低到還留著好幾年的空間。先看數字：" },
    stats: [
      { label: { en: "% top MMLU score in 2023 (Gemini Ultra), the first above the 89.8% human baseline", zh: "% 2023 年 MMLU 最高分(Gemini Ultra)，首度越過 89.8% 的人類基準" }, value: 90.04 },
      { label: { en: "% of competition-level MATH problems solved, against a 90% human baseline", zh: "% 競賽等級 MATH 題目的解題率，人類基準為 90%" }, value: 84.3 },
      { label: { en: "% best score on MMMU, the new expert-level multimodal reasoning test", zh: "% 專家等級多模態推理測驗 MMMU 的最高分" }, value: 59.4 },
      { label: { en: "% best score on GPQA, where PhD experts in the domain reach 65%", zh: "% GPQA 最高分，該領域博士專家可達 65%" }, value: 41 },
      { label: { en: "% of SWE-bench real GitHub issues solved by the best model, Claude 2", zh: "% 最強模型 Claude 2 解出的 SWE-bench 真實 GitHub 問題" }, value: 4.8 },
      { label: { en: "% median performance advantage of closed models over open ones", zh: "% 封閉模型領先開放模型的效能中位數差距" }, value: 24.2 }
    ]
  },

  /* -------------------------------------------------- 2.1 YEAR IN REVIEW */
  {
    type: "prose",
    id: "year-in-review",
    nav:      { en: "2.1 Year in 2023", zh: "2.1 年度回顧" },
    title:    { en: "2.1 — The measuring stick broke before the models did",
                zh: "2.1 — 壞掉的不是模型，是量尺" },
    subtitle: { en: "AI cleared the human baseline on one benchmark after another, until the benchmarks stopped saying anything. The defining move of 2023 was not a single model but a wholesale replacement of the tests.",
                zh: "AI 一個接一個越過人類基準，直到這些基準再也說不出什麼。2023 年真正的關鍵動作不是某一個模型，而是把整套測驗換掉。" },
    blocks: [
      { type: "h3",
        text: { en: "Where AI has passed us, and where it has not", zh: "AI 超過我們的地方，以及還沒超過的地方" } },
      { type: "p",
        text: { en: "The chapter tracks nine benchmarks against human baselines. AI crossed the human line on image classification in 2015, on basic-level reading comprehension in 2017, on visual reasoning in 2020 and on natural language inference in 2021. As of 2023 the categories where AI still fails to exceed human ability are the more complex cognitive ones: visual commonsense reasoning and advanced, competition-level mathematical problem-solving. Planning belongs on that list too.",
                zh: "本章拿九個基準對照人類基準。AI 在 2015 年於影像分類越線、2017 年於基礎閱讀理解越線、2020 年於視覺推理越線、2021 年於自然語言推論越線。到 2023 年，AI 仍無法勝過人類的，是更複雜的認知任務：視覺常識推理，以及競賽等級的高階數學解題。規劃也應該算在這份名單裡。" } },
      { type: "h3",
        text: { en: "The benchmarks are wearing out", zh: "基準正在磨損" } },
      { type: "ul",
        items: {
          en: ["Fifteen benchmarks that appeared in the 2023 AI Index are dropped from this edition, among them ImageNet, SuperGLUE, VQA, aNLI, SST-5, STL-10, VoxCeleb and the Kinetics family.",
               "Their improvement since 2022 explains why. ImageNet moved 1.54%, Kvasir-SEG 1.90%, the Cityscapes Challenge 0.23%. For the other eleven, the report records no improvement at all.",
               "In their place the 2024 edition tracks 18 benchmarks, 13 of which were introduced in 2023 — deliberately weighted toward coding, advanced reasoning and agentic behavior, areas underrepresented in previous editions.",
               "The 2023 cohort: SWE-bench for coding, HEIM for image generation, MMMU and GPQA for general reasoning, MoCa for moral reasoning, BigToM for causal reasoning, PlanBench for planning, AgentBench and MLAgentBench for agents, HaluEval for hallucinations, EditVal for image editing, VisIT-Bench for image instruction-following, and the Chatbot Arena Leaderboard for human preference."],
          zh: ["2023 年版 AI 指數用過的 15 個基準，這一版直接拿掉，包括 ImageNet、SuperGLUE、VQA、aNLI、SST-5、STL-10、VoxCeleb 與 Kinetics 系列。",
               "看它們自 2022 年以來的進步就懂了。ImageNet 只動了 1.54%、Kvasir-SEG 1.90%、Cityscapes Challenge 0.23%。其餘 11 個，報告記錄的是完全沒有進步。",
               "取而代之，2024 年版追蹤 18 個基準，其中 13 個是 2023 年才出現的 — 刻意偏向程式、高階推理與代理行為，這些正是先前版本著墨太少的領域。",
               "2023 年這一批是：程式的 SWE-bench、影像生成的 HEIM、通用推理的 MMMU 與 GPQA、道德推理的 MoCa、因果推理的 BigToM、規劃的 PlanBench、代理的 AgentBench 與 MLAgentBench、幻覺的 HaluEval、影像編輯的 EditVal、影像指令遵循的 VisIT-Bench，以及量測人類偏好的 Chatbot Arena 排行榜。"]
        } },
      { type: "h3",
        text: { en: "Multimodal stopped being a special case", zh: "多模態不再是特例" } },
      { type: "p",
        text: { en: "AI systems used to be narrow — language models that read text well and handled images badly, or the reverse. In 2023 that split closed: Google’s Gemini and OpenAI’s GPT-4 handle images and text together, and in some cases audio as well. The steering committee’s pick of the year’s notable releases reads like a map of that shift — Claude and GPT-4 on the same day in March, Stable Diffusion v2 and Segment Anything in the spring, Llama 2 in July, DALL-E 3 and SynthID in August, Mistral 7B in September, Ernie 4.0 in October, then a November crowd of GPT-4 Turbo with a 128K context window, Whisper v3 and Claude 2.1 with 200K, and finally Gemini on December 6 and Midjourney v6 on December 21.",
                zh: "過去的 AI 系統範圍很窄 — 語言模型讀文字在行、處理影像不行，反過來也一樣。2023 年這道分界合起來了：Google 的 Gemini 與 OpenAI 的 GPT-4 能同時處理影像與文字，有些情況下連音訊也行。指導委員會挑出的年度重要發表，幾乎就是這個轉變的地圖 — 3 月同一天的 Claude 與 GPT-4、春天的 Stable Diffusion v2 與 Segment Anything、7 月的 Llama 2、8 月的 DALL-E 3 與 SynthID、9 月的 Mistral 7B、10 月的 Ernie 4.0，接著是 11 月一擁而上的 GPT-4 Turbo(128K 脈絡窗)、Whisper v3 與 200K 脈絡窗的 Claude 2.1，最後是 12 月 6 日的 Gemini 與 12 月 21 日的 Midjourney v6。" } }
    ]
  },

  /* -------------------------------------------------------- SCOREBOARD */
  {
    type: "bars",
    id: "scoreboard",
    nav:      { en: "Scoreboard", zh: "成績單" },
    title:    { en: "The scoreboard at the end of 2023",
                zh: "2023 年底的成績單" },
    subtitle: { en: "Best reported score on each benchmark (%). MMLU is finished — 90.04% is past its 89.8% human baseline. MATH is close to its 90% baseline. The two benchmarks written in 2023 sit far lower, and SWE-bench barely registers.",
                zh: "各基準的最佳回報分數(%)。MMLU 已經結束了 — 90.04% 越過了 89.8% 的人類基準。MATH 也逼近 90% 的基準。2023 年才寫出來的兩個基準分數低得多，SWE-bench 幾乎還沒起步。" },
    series: [
      { label: { en: "MMLU", zh: "MMLU" },           value: 90.04 },
      { label: { en: "MATH", zh: "MATH" },           value: 84.3 },
      { label: { en: "MMMU", zh: "MMMU" },           value: 59.4 },
      { label: { en: "GPQA", zh: "GPQA" },           value: 41 },
      { label: { en: "SWE-bench", zh: "SWE-bench" }, value: 4.8 }
    ]
  },

  /* ------------------------------------------------------- 2.2 LANGUAGE */
  {
    type: "prose",
    id: "language",
    nav:      { en: "2.2 Language", zh: "2.2 語言" },
    title:    { en: "2.2 — Fluent, preferred, and still making things up",
                zh: "2.2 — 流暢、受歡迎，而且還在編故事" },
    subtitle: { en: "Language is where AI looks most finished and is least trustworthy. The comprehension benchmarks are topping out, human voting has become a serious measure, and the factuality numbers are the ones worth staring at.",
                zh: "語言是 AI 看起來最完成、卻最不可信的地方。理解類基準逼近天花板，人類投票成了認真的量尺，而真正該盯著看的是事實性那組數字。" },
    blocks: [
      { type: "h3",
        text: { en: "Understanding", zh: "理解" } },
      { type: "ul",
        items: {
          en: ["Stanford’s HELM scores models across ten scenarios and reports a mean win rate. As of January 2024 GPT-4 leads the aggregate leaderboard at 0.96, ahead of GPT-4 Turbo at 0.83 and Palmyra X V3 (72B) at 0.82.",
               "No single model owns every task, though. Yi (34B) tops NarrativeQA at 0.78, Llama 2 (70B) tops closed-book NaturalQuestions at 0.46, PaLM-2 (Bison) tops the open-book version at 0.81, and Palmyra X V3 (72B) tops WMT 2014 translation at 0.26.",
               "MMLU covers 57 subjects across the humanities, STEM and the social sciences. Gemini Ultra holds the top score at 90.0% as of January 2024 — a 14.8 percentage-point improvement since 2022 and 57.6 points since MMLU was created in 2019, and the first score to pass the benchmark’s 89.8% human baseline."],
          zh: ["史丹佛的 HELM 在十種情境下評分，回報的是平均勝率。截至 2024 年 1 月，GPT-4 以 0.96 領先總榜，其後是 0.83 的 GPT-4 Turbo 與 0.82 的 Palmyra X V3(72B)。",
               "但沒有哪個模型包辦所有任務。NarrativeQA 由 Yi(34B)以 0.78 居首、閉書式 NaturalQuestions 由 Llama 2(70B)以 0.46 居首、開書版由 PaLM-2(Bison)以 0.81 居首，WMT 2014 翻譯則是 Palmyra X V3(72B)以 0.26 居首。",
               "MMLU 涵蓋人文、STEM 與社會科學共 57 個學科。截至 2024 年 1 月，Gemini Ultra 以 90.0% 居首 — 比 2022 年高出 14.8 個百分點，比 2019 年 MMLU 誕生時高出 57.6 個百分點，也是第一個越過該基準 89.8% 人類基準的分數。"]
        } },
      { type: "h3",
        text: { en: "Human preference became a metric", zh: "人類偏好變成了指標" } },
      { type: "p",
        text: { en: "Launched in 2023, the Chatbot Arena Leaderboard lets anyone query two anonymous models and vote for the better answer. By early 2024 it had gathered over 200,000 votes, and users ranked OpenAI’s GPT-4 Turbo as the most preferred model, with an Elo rating of 1,252 for the best closed model against 1,149 for the best open one. The AI Index frames this as a shift in kind: with generative models producing high-quality text and images, benchmarking is moving away from computerized rankings such as ImageNet or SQuAD and toward human evaluation. Public feeling about AI is becoming part of how progress gets measured.",
                zh: "2023 年上線的 Chatbot Arena 排行榜，讓任何人向兩個匿名模型提問，再投票給比較好的答案。到 2024 年初已累積超過 200,000 張投票，使用者把 OpenAI 的 GPT-4 Turbo 評為最受偏好的模型;最佳封閉模型的 Elo 為 1,252，最佳開放模型為 1,149。AI 指數認為這是評測性質的轉向：當生成式模型能產出高品質的文字與影像，評測就從 ImageNet 或 SQuAD 這類電腦化排名，轉向人類評估。大眾對 AI 的感受，正在成為衡量進展的一部分。" } },
      { type: "h3",
        text: { en: "Factuality and hallucination", zh: "事實性與幻覺" } },
      { type: "ul",
        items: {
          en: ["TruthfulQA asks roughly 800 questions across 38 categories, many written around misconceptions that humans get wrong too. GPT-4 (RLHF) posts the highest score so far at 0.6, nearly three times the score of a GPT-2-based model tested in 2021.",
               "HaluEval, new in 2023, holds over 35,000 hallucinated and normal samples. Its headline finding: ChatGPT fabricates unverifiable information in roughly 19.5% of its responses, across topics from language to climate to technology.",
               "Spotting a hallucination is its own hard problem. On HaluEval’s classification task ChatGPT reaches 62.59% on question answering and 58.53% on summarization; Claude 2 manages 69.78% on question answering but 57.75% on summarization; Llama 2 falls to 43.99% on dialogue and 20.46% on the general category.",
               "The report is blunt about why this matters — LLMs are being deployed in law and medicine, and real hallucinations have already surfaced in court cases."],
          zh: ["TruthfulQA 有約 800 道題目、橫跨 38 個類別，許多題目刻意環繞人類自己也會答錯的常見迷思。GPT-4(RLHF)拿下目前最高的 0.6 分，幾乎是 2021 年受測的 GPT-2 系模型的三倍。",
               "2023 年新推出的 HaluEval 收錄超過 35,000 筆幻覺與正常樣本。它最醒目的發現是：ChatGPT 約有 19.5% 的回應會捏造無法查證的資訊，主題從語言、氣候到科技都有。",
               "而看穿幻覺本身就是另一道難題。在 HaluEval 的分類任務上，ChatGPT 問答類達 62.59%、摘要類 58.53%;Claude 2 問答類 69.78%，摘要類卻只有 57.75%;Llama 2 在對話類掉到 43.99%，一般類更只有 20.46%。",
               "報告直說了為什麼這件事要緊 — LLM 正被放進法律與醫療現場，而幻覺已經真的出現在法庭案件裡。"]
        } }
    ]
  },

  /* ------------------------------------------------------ 2.6 REASONING */
  {
    type: "prose",
    id: "reasoning",
    nav:      { en: "2.6 Reasoning", zh: "2.6 推理" },
    title:    { en: "2.6 — The gap that did not close",
                zh: "2.6 — 沒有合攏的那道差距" },
    subtitle: { en: "Reasoning is where the 2023 numbers are honest. On expert multimodal questions, on graduate-level science, on planning and on visual commonsense, the best systems are still short of people — sometimes by a lot.",
                zh: "推理是 2023 年數字最誠實的地方。在專家級多模態題目、研究所程度的科學題、規劃與視覺常識上，最強的系統都還輸給人 — 有時候輸很多。" },
    blocks: [
      { type: "h3",
        text: { en: "General reasoning: MMMU and GPQA", zh: "通用推理：MMMU 與 GPQA" } },
      { type: "p",
        text: { en: "MMMU, built in 2023 by researchers in the United States and Canada, asks about 11,500 college-level questions across six disciplines, with charts, maps, tables and chemical structures in the question formats. As of January 2024 Gemini Ultra leads every subject category with an overall 59.4%, and the subject-level table shows how far that still is from a medium-level human expert: humanities and social sciences 78.3 against 85, health and medicine 67.3 against 78.8, business 59.3 against 86, science 54.7 against 84.7, art and design 51.4 against 84.2, technology and engineering 47.1 against 79.1. GPQA is harsher still — 448 multiple-choice questions written by subject-matter experts in biology, physics and chemistry, deliberately designed so that Google searching does not help. PhD-level experts score 65% inside their own domains and nonexperts around 34%. The best model, GPT-4, reaches 41.0% on the main set.",
                zh: "MMMU 由美國與加拿大的研究者在 2023 年建立，涵蓋六大學科約 11,500 道大學程度題目，題型包含圖表、地圖、表格與化學結構式。截至 2024 年 1 月，Gemini Ultra 在每個學科類別都居首，總分 59.4%;而學科層級的表格顯示它離中等程度的人類專家還有多遠：人文與社會科學 78.3 對 85、健康與醫療 67.3 對 78.8、商業 59.3 對 86、科學 54.7 對 84.7、藝術與設計 51.4 對 84.2、科技與工程 47.1 對 79.1。GPQA 更狠 — 448 道由生物、物理、化學領域專家撰寫的選擇題，刻意設計成 Google 搜尋幫不上忙。博士等級專家在自己領域得分 65%，非專家約 34%。最強的模型 GPT-4 在主測試集只拿到 41.0%。" } },
      { type: "h3",
        text: { en: "Mathematics", zh: "數學" } },
      { type: "ul",
        items: {
          en: ["GSM8K holds roughly 8,000 grade-school word problems that require multistep arithmetic. A GPT-4 variant, GPT-4 Code Interpreter, scores 97% — a 4.4% improvement on the previous year’s state of the art and 30.4% above 2022, when the benchmark was first introduced.",
               "MATH is the harder cousin: 12,500 competition-level problems released by UC Berkeley researchers in 2021, on which systems solved just 6.9% at launch. In 2023 a GPT-4-based model solved 84.3%. Impressive, and still under the 90% human baseline — which is why competition-level mathematics stays on the list of things people do better.",
               "HELM’s own sub-leaderboard puts GPT-4 Turbo (1106 preview) on top for MATH with a chain-of-thought equivalence score of 0.86, and GPT-4 (0613) on top for GSM8K at 0.93."],
          zh: ["GSM8K 收錄約 8,000 道需要多步算術的小學程度應用題。GPT-4 的變體 GPT-4 Code Interpreter 拿到 97% — 比前一年的最佳成績高 4.4%，比基準初推出的 2022 年高 30.4%。",
               "MATH 是更難的那一位：加州大學柏克萊分校研究者 2021 年釋出的 12,500 道競賽等級題目，剛推出時系統只解得出 6.9%。2023 年，一個以 GPT-4 為基礎的模型解出了 84.3%。很漂亮，但仍在 90% 的人類基準之下 — 這也是為什麼競賽等級數學還留在人類做得比較好的名單上。",
               "HELM 自己的子榜單上，MATH 由 GPT-4 Turbo(1106 preview)以 0.86 的思維鏈等價分數居首，GSM8K 則由 GPT-4(0613)以 0.93 居首。"]
        } },
      { type: "h3",
        text: { en: "Planning, vision and moral judgment", zh: "規劃、視覺與道德判斷" } },
      { type: "ul",
        items: {
          en: ["PlanBench, from Arizona State University, tested GPT-4 and I-GPT-3 on 600 Blocksworld problems with one-shot learning. GPT-4 generated correct plans 34.3% of the time and cost-optimal plans 33%; I-GPT-3 managed 6.8% and 5.8%. Checking a plan is easier than making one — GPT-4 verified plans correctly 58.6% of the time, I-GPT-3 12%.",
               "On Visual Commonsense Reasoning, where a system must both answer a question about an image and pick the right rationale, the top Q->AR score reached 81.60 in 2023 against a human baseline of 85. AI performance rose 7.93% between 2022 and 2023 without closing the gap.",
               "MoCa, a Stanford dataset of human stories with moral elements, found no model perfectly matching human moral systems, but newer and larger models like GPT-4 and Claude aligning more closely than smaller ones such as GPT-3. GPT-4 showed the greatest agreement of all models surveyed.",
               "BigToM tests theory of mind with 25 controls and 5,000 model-generated evaluations. GPT-4 came out on top, closely matching human accuracy on forward belief and backward belief and slightly surpassing humans on forward action — nearing, but not surpassing, human levels overall."],
          zh: ["亞利桑那州立大學提出的 PlanBench，以單樣本學習測試 GPT-4 與 I-GPT-3 在 600 道 Blocksworld 題目上的表現。GPT-4 有 34.3% 的機率生成正確計畫、33% 生成成本最佳計畫;I-GPT-3 分別只有 6.8% 與 5.8%。檢查計畫比生成計畫容易 — GPT-4 的計畫驗證正確率 58.6%，I-GPT-3 則是 12%。",
               "在視覺常識推理上，系統既要回答關於影像的問題，也要挑出正確的理由。2023 年最高的 Q->AR 分數是 81.60，人類基準為 85。AI 表現在 2022 到 2023 年間提升了 7.93%，差距仍未補上。",
               "史丹佛建立的 MoCa 資料集由含道德元素的人類故事組成。結果是沒有任何模型完全吻合人類的道德體系，但 GPT-4、Claude 這類較新較大的模型，比 GPT-3 這類較小的模型更貼近人類。在所有受測模型中，GPT-4 與人類道德判斷的吻合度最高。",
               "BigToM 以 25 個對照組與 5,000 筆模型生成評估來測試心智理論。GPT-4 表現最好，在前向信念與後向信念上非常接近人類準確度，在前向行動上甚至略勝人類 — 整體而言逼近但尚未超越人類水準。"]
        } }
    ]
  },

  /* ------------------------------------------------- 2023 NEW BENCHMARKS */
  {
    type: "cards",
    id: "new-benchmarks",
    nav:      { en: "New benchmarks", zh: "新基準" },
    title:    { en: "The class of 2023",
                zh: "2023 年出生的那一批基準" },
    subtitle: { en: "Thirteen of the eighteen benchmarks tracked in this edition were introduced in 2023. Here are six of them, and the scores that show how much room they leave.",
                zh: "這一版追蹤的 18 個基準中，有 13 個是 2023 年才出現的。以下挑出六個，以及它們留下多少空間的分數。" },
    items: [
      { slug: "swe-bench",
        title:   { en: "SWE-bench · coding", zh: "SWE-bench · 程式" },
        summary: { en: "2,294 software engineering problems taken from real GitHub issues in popular Python repositories. The best model solves 4.8%.",
                   zh: "取自熱門 Python 專案真實 GitHub issue 的 2,294 道軟體工程問題。最強的模型解出 4.8%。" },
        tags: ["coding"],
        overview: { en: "Introduced in October 2023, SWE-bench is a much tougher test of coding proficiency than solving isolated puzzles: it demands that a system coordinate changes across multiple functions, interact with execution environments and perform complex reasoning. Claude 2, the best-performing model, solved only 4.8% of the dataset’s problems. The top 2023 model beat the best 2022 model by 4.3 percentage points — real progress, from almost nothing to almost nothing.",
                   zh: "2023 年 10 月推出的 SWE-bench，比解孤立謎題難得多：它要求系統跨多個函式協調修改、與執行環境互動，並進行複雜推理。表現最好的 Claude 2 只解出資料集中 4.8% 的問題。2023 年的榜首比 2022 年的最佳模型高出 4.3 個百分點 — 確實是進步，只是從幾乎為零進步到幾乎為零。" } },
      { slug: "mmmu",
        title:   { en: "MMMU · general reasoning", zh: "MMMU · 通用推理" },
        summary: { en: "About 11,500 college-level questions across six disciplines, with charts, maps and chemical structures. Gemini Ultra leads at 59.4%.",
                   zh: "涵蓋六大學科約 11,500 道大學程度題目，題型含圖表、地圖與化學結構式。Gemini Ultra 以 59.4% 居首。" },
        tags: ["reasoning"],
        overview: { en: "MMMU was built because SQuAD and VQA had saturated and there was nothing left to measure with. It covers art and design, business, science, health and medicine, humanities and social science, and technology and engineering, and the AI Index calls it one of the most demanding tests of perception, knowledge and reasoning in AI to date. Gemini Ultra leads every subject category with an overall 59.4%, and on most individual categories the top models still trail medium-level human experts. The report reads that low score as evidence the benchmark is working.",
                   zh: "MMMU 之所以被造出來，是因為 SQuAD 與 VQA 都飽和了，沒有東西可以量。它涵蓋藝術與設計、商業、科學、健康與醫療、人文與社會科學、科技與工程六大領域，AI 指數稱它是目前對感知、知識與推理最嚴苛的測驗之一。Gemini Ultra 在每個學科類別都居首，總分 59.4%，而在多數個別類別上，頂尖模型仍落後中等程度的人類專家。報告把這個偏低的分數，讀成這個基準有效的證據。" } },
      { slug: "gpqa",
        title:   { en: "GPQA · Google-proof questions", zh: "GPQA · 搜尋不到答案的題目" },
        summary: { en: "448 graduate-level questions in biology, physics and chemistry that cannot be answered by searching. GPT-4 reaches 41.0%.",
                   zh: "448 道生物、物理、化學的研究所程度題目，搜尋找不到答案。GPT-4 拿到 41.0%。" },
        tags: ["reasoning"],
        overview: { en: "Researchers from NYU, Anthropic and Meta wrote GPQA to test multisubject reasoning that survives a web search. The calibration is the interesting part: PhD-level experts answer 65% correctly inside their own domains, and nonexpert humans about 34%. GPT-4 lands at 41.0% on the main test set — above a motivated nonexpert with internet access, well below someone who actually knows the field.",
                   zh: "紐約大學、Anthropic 與 Meta 的研究者設計 GPQA，是為了測試那種撐得過網路搜尋的跨學科推理。有意思的是它的校準：博士等級專家在自己領域答對 65%，非專家人類約 34%。GPT-4 在主測試集是 41.0% — 高於一個有網路可用、也肯查的非專家，但遠低於真正懂這一行的人。" } },
      { slug: "halueval",
        title:   { en: "HaluEval · hallucination", zh: "HaluEval · 幻覺" },
        summary: { en: "Over 35,000 hallucinated and normal samples. ChatGPT fabricates unverifiable information in roughly 19.5% of its responses.",
                   zh: "超過 35,000 筆幻覺與正常樣本。ChatGPT 約 19.5% 的回應會捏造無法查證的資訊。" },
        tags: ["factuality"],
        overview: { en: "Most hallucination research has asked why models hallucinate; HaluEval asks how often, and where. Its answer for ChatGPT is roughly 19.5% of responses containing fabricated, unverifiable information, spanning topics from language to climate to technology. It then turns the question around and asks whether LLMs can recognize hallucinations in text — and finds that many struggle, with scores ranging from Claude 2’s 69.78% on question answering down to Llama 2’s 20.46% on the general category.",
                   zh: "多數幻覺研究問的是模型為什麼會產生幻覺;HaluEval 問的是多常發生、發生在哪裡。對 ChatGPT 的答案是約 19.5% 的回應含有捏造、無法查證的資訊，主題橫跨語言、氣候與科技。接著它把問題反過來，測 LLM 能不能認出文本中的幻覺 — 結果是許多模型都很吃力，分數從 Claude 2 問答類的 69.78% 一路掉到 Llama 2 一般類的 20.46%。" } },
      { slug: "agentbench",
        title:   { en: "AgentBench · agent behavior", zh: "AgentBench · 代理行為" },
        summary: { en: "Eight interactive settings including web browsing, online shopping, household management and card games. GPT-4 scores 4.01 overall.",
                   zh: "八種互動環境，包含網頁瀏覽、線上購物、家務管理與紙牌遊戲。GPT-4 總分 4.01。" },
        tags: ["agents"],
        overview: { en: "AgentBench evaluates LLM-based agents rather than LLM answers. GPT-4 comes out on top with an overall score of 4.01, well ahead of Claude 2 at 2.49, and models released in 2023 outperform earlier ones in agentic settings. The gap to open models is the widest anywhere in this chapter: the best open model scores 0.96 against the best closed model’s 4.01. The AgentBench team attributes the failures to limited long-term reasoning, decision-making and instruction-following.",
                   zh: "AgentBench 評的不是 LLM 的答案，而是以 LLM 為核心的代理。GPT-4 以總分 4.01 居首，遠勝 Claude 2 的 2.49;2023 年釋出的模型在代理情境下也勝過更早的版本。這裡的封閉對開放差距是全章最大的：最佳開放模型 0.96，最佳封閉模型 4.01。AgentBench 團隊把失敗歸因於長期推理、決策與指令遵循能力不足。" } },
      { slug: "heim",
        title:   { en: "HEIM · image generation", zh: "HEIM · 影像生成" },
        summary: { en: "Twelve aspects of text-to-image models, rated by human evaluators. No single model excels on all of them.",
                   zh: "以人類評分者評估文字轉影像模型的十二個面向。沒有任何一個模型全面勝出。" },
        tags: ["image"],
        overview: { en: "Stanford researchers built HEIM because automated metrics struggle to judge images, so human evaluators rate models across twelve aspects that matter for real deployment — alignment, quality, aesthetics, originality, reasoning, knowledge, bias, toxicity, fairness and more. DALL-E 2 (3.5B) wins image-text alignment at 0.94, while the Stable Diffusion-based Dreamlike Photoreal v2.0 (1B) takes quality at 0.92, aesthetics at 0.87 and originality at 0.98. The headline finding is that the leaderboard has no leader.",
                   zh: "史丹佛研究者之所以打造 HEIM，是因為自動化指標很難評判影像，於是改用人類評分者，對實際部署真正重要的十二個面向評分 — 對齊、品質、美感、原創性、推理、知識、偏見、毒性、公平性等等。DALL-E 2(3.5B)在影像文字對齊以 0.94 奪冠，而以 Stable Diffusion 為基礎的 Dreamlike Photoreal v2.0(1B)拿下品質 0.92、美感 0.87、原創性 0.98。最重要的發現是：這張排行榜沒有榜首。" } }
    ]
  },

  /* ------------------------------------------------- 2.11 OPEN VS CLOSED */
  {
    type: "bars",
    id: "open-vs-closed",
    nav:      { en: "Open vs closed", zh: "開放與封閉" },
    title:    { en: "In this edition, closed models win everything",
                zh: "在這一版裡，封閉模型全部贏" },
    subtitle: { en: "Percentage score difference between the best closed and best open model, collected in early January 2024. Across ten benchmarks the median advantage is 24.2%, and the widest gap is off this chart entirely: AgentBench, at 317.7%.",
                zh: "最佳封閉模型與最佳開放模型之間的分數百分比差距，資料收集於 2024 年 1 月初。十個基準的中位數差距是 24.2%，而最大的一道差距根本畫不進這張圖：AgentBench，317.7%。" },
    series: [
      { label: { en: "HumanEval", zh: "HumanEval" }, value: 54.82 },
      { label: { en: "MATH", zh: "MATH" },           value: 39.57 },
      { label: { en: "MMLU", zh: "MMLU" },           value: 27.54 },
      { label: { en: "SWE-bench", zh: "SWE-bench" }, value: 20.91 },
      { label: { en: "GSM8K", zh: "GSM8K" },         value: 3.97 }
    ]
  },

  /* ------------------------------- 2.3–2.5, 2.8, 2.9 BEYOND TEXT */
  {
    type: "prose",
    id: "beyond-text",
    nav:      { en: "Beyond text", zh: "文字之外" },
    title:    { en: "2.3–2.9 — Code, pixels, agents and bodies",
                zh: "2.3–2.9 — 程式、畫素、代理與身體" },
    subtitle: { en: "Away from the language leaderboards, 2023 looks less like saturation and more like a field still finding its footing — with one exception, where the numbers went vertical.",
                zh: "離開語言排行榜，2023 年看起來比較不像飽和，更像一個還在站穩腳步的領域 — 只有一個例外，那裡的數字直接垂直上升。" },
    blocks: [
      { type: "h3",
        text: { en: "Coding: solved, then unsolved again", zh: "程式：先被解決，然後又沒有了" } },
      { type: "p",
        text: { en: "HumanEval was introduced by OpenAI researchers in 2021 with 164 handwritten programming problems. A GPT-4 variant, AgentCoder, now leads it at 96.3% — an 11.2 percentage-point increase over the 2022 high, and 64.1 points of improvement since 2021. That is the vertical line. Then SWE-bench arrived in October 2023 with 2,294 problems drawn from real GitHub issues, requiring changes coordinated across a codebase rather than inside a single function, and the best model in the world managed 4.8%. Same year, same models, two orders of magnitude apart — which is roughly the distance between finishing an exercise and doing the job.",
                zh: "HumanEval 由 OpenAI 研究者在 2021 年推出，含 164 道手寫程式題。GPT-4 的變體 AgentCoder 目前以 96.3% 居首 — 比 2022 年的最高分高 11.2 個百分點，自 2021 年以來共進步 64.1 個百分點。那條垂直線就是它。接著 2023 年 10 月出現的 SWE-bench，收錄 2,294 道取自真實 GitHub issue 的問題，要求的是跨程式庫協調修改而不是改一個函式，而全世界最強的模型只做到 4.8%。同一年、同一批模型，差了兩個數量級 — 這大概就是「寫完練習題」與「做完這份工作」之間的距離。" } },
      { type: "h3",
        text: { en: "Images and video", zh: "影像與影片" } },
      { type: "ul",
        items: {
          en: ["On HEIM’s human-rated image-text alignment, DALL-E 2 (3.5B) leads at 0.94. On quality, aesthetics and originality the Stable Diffusion-based Dreamlike Photoreal v2.0 (1B) leads at 0.92, 0.87 and 0.98 — a one-billion-parameter model beating far larger ones on the aspects people actually look at.",
               "VisIT-Bench measures whether a vision-language model can follow a written instruction about an image, across 592 instructions in about 70 categories such as plot analysis, art knowledge and location understanding. As of January 2024 GPT-4V leads with an Elo of 1,349, marginally above the benchmark’s human reference score of 1,338.",
               "Meta’s Segment Anything outperforms leading segmentation methods such as RITM on 16 of 23 datasets, and was then used alongside human annotators to build SA-1B: over 1 billion segmentation masks across 11 million images. Better models make better data, which makes better models.",
               "Video generation is measured on UCF101, an action-recognition dataset of 101 categories. The year’s top model, W.A.L.T-XL, posted an FVD16 score of 36 — more than halving the previous year’s state of the art, where lower is better."],
          zh: ["在 HEIM 由人類評分的影像文字對齊上，DALL-E 2(3.5B)以 0.94 領先。而品質、美感與原創性三項，由以 Stable Diffusion 為基礎的 Dreamlike Photoreal v2.0(1B)以 0.92、0.87、0.98 拿下 — 一個十億參數的模型，在人們真正會看的面向上贏過大得多的模型。",
               "VisIT-Bench 量的是視覺語言模型能不能照著文字指令處理影像，共 592 條指令、約 70 個類別，像是劇情分析、藝術知識與地點辨識。截至 2024 年 1 月，GPT-4V 以 1,349 的 Elo 居首，些微超過該基準 1,338 的人類參考分數。",
               "Meta 的 Segment Anything 在 23 個資料集中的 16 個勝過 RITM 等領先的分割方法，接著又與人類標註者合作建出 SA-1B：1,100 萬張影像、超過 10 億個分割遮罩。更好的模型做出更好的資料，更好的資料再做出更好的模型。",
               "影片生成用 UCF101 這個含 101 種動作類別的資料集來量。年度最佳模型 W.A.L.T-XL 拿下 FVD16 分數 36 — 這個分數愈低愈好，而它比前一年的最佳成績還少了一半以上。"]
        } },
      { type: "h3",
        text: { en: "Agents", zh: "代理" } },
      { type: "ul",
        items: {
          en: ["Voyager, a GPT-4-based Minecraft agent from Nvidia, Caltech, UT Austin, Stanford and UW Madison, collects 3.3 times more unique items than prior systems, travels 2.3 times further, and reaches key tech-tree milestones 15.3 times faster. It matters because it keeps learning in an open-ended world, which AlphaZero-style systems never had to do.",
               "MLAgentBench asks whether agents can run scientific experiments — acting as computer science research assistants. Performance splits violently by task: some agents clear 80% on ogbn-arxiv, improving a baseline paper classification model, while every agent tested scored 0% on BabyLM, training a small language model. GPT-4 was consistently the best of them.",
               "On AgentBench’s eight environments, GPT-4’s overall 4.01 is the ceiling, and the team attributes the failures to limited long-term reasoning, decision-making and instruction-following — not to a missing tool."],
          zh: ["由 Nvidia、加州理工、德州大學奧斯汀分校、史丹佛與威斯康辛大學麥迪遜分校打造的 Voyager，是以 GPT-4 為核心的 Minecraft 代理：它蒐集到的獨特物品是先前系統的 3.3 倍、移動距離 2.3 倍、抵達關鍵科技樹里程碑的速度快 15.3 倍。它之所以重要，是因為它能在開放世界中持續學習，而 AlphaZero 那類系統從來不必面對這件事。",
               "MLAgentBench 問的是代理能不能跑科學實驗 — 也就是當一名資訊科學研究助理。結果依任務劇烈分裂：在改良既有論文分類模型的 ogbn-arxiv 上，有些代理超過 80%;而在訓練小型語言模型的 BabyLM 上，受測代理全數掛零。GPT-4 在其中一貫表現最好。",
               "在 AgentBench 的八種環境裡，GPT-4 的總分 4.01 就是天花板;研究團隊把失敗歸因於長期推理、決策與指令遵循能力有限 — 而不是少了哪個工具。"]
        } },
      { type: "h3",
        text: { en: "Robots that can be talked to", zh: "可以對話的機器人" } },
      { type: "p",
        text: { en: "The chapter’s most quietly consequential finding is that language modeling improved robotics. Google’s PaLM-E, scaled up to 562 billion parameters and trained on visual language alongside robotics data, beats earlier methods such as SayCan and PaLI on embodied visual question answering and planning, and detects its own failures far more reliably — 0.91 for PaLM-E-12B against CLIP-FT’s 0.65 and zero-shot PaLI’s 0.73, which is what closed-loop planning depends on. DeepMind’s RT-2 trains on tokenized robot trajectories plus visual-language data: on tasks involving objects it has never seen, an RT-2/PaLM-E variant hits an 80% success rate against MOO’s 53%, and beats the previous year’s RT-1 by 43 percentage points. Beyond doing more, these systems can ask questions — a real step toward robots that interact with the world rather than execute in it.",
                zh: "本章最安靜但最有後果的發現是：語言建模改善了機器人。Google 的 PaLM-E 最大規模達 5,620 億參數，以視覺語言資料與機器人資料一同訓練，在具身視覺問答與規劃上勝過 SayCan、PaLI 等既有方法，而且更可靠地偵測自己的失敗 — PaLM-E-12B 的失敗偵測為 0.91，CLIP-FT 為 0.65，零樣本 PaLI 為 0.73，而閉環規劃正是靠這個。DeepMind 的 RT-2 則以代幣化的機器人軌跡資料加上視覺語言資料訓練：在面對從未見過的物體時，RT-2/PaLM-E 變體的成功率達 80%，MOO 是 53%，並比前一年的 RT-1 高出 43 個百分點。除了做得更多，這些系統還能提問 — 這是邁向「與世界互動」而不只是「在世界裡執行」的機器人的實質一步。" } }
    ]
  },

  /* ----------------------------------------------------------- ACCORDION */
  {
    type: "accordion",
    id: "limits",
    nav:      { en: "Limits", zh: "侷限" },
    title:    { en: "Five things the scores do not tell you",
                zh: "分數沒有告訴你的五件事" },
    subtitle: { en: "Section 2.11 turns the microscope on the models themselves, and 2.13 on what running them costs. Both are less flattering than the leaderboards.",
                zh: "2.11 節把顯微鏡轉向模型本身，2.13 節則轉向跑這些模型的代價。兩者都沒有排行榜好看。" },
    qa: [
      { q: { en: "Can these models actually plan?", zh: "這些模型真的會規劃嗎?" },
        a: { en: "Not reliably. PlanBench, proposed by a group at Arizona State University, uses problems from the automated planning community, including those from the International Planning Competition. On 600 problems in the Blocksworld domain — a hand stacking blocks, one at a time, onto the table or onto a clear block — GPT-4 generated correct plans 34.3% of the time and cost-optimal plans 33% of the time under one-shot learning. I-GPT-3 managed 6.8% and 5.8%. Verifying a plan is easier than producing one: GPT-4 got plan verification right 58.6% of the time, I-GPT-3 12%. Planning sits alongside competition-level mathematics and visual commonsense reasoning on the short list of things humans still do better.",
             zh: "不可靠。亞利桑那州立大學團隊提出的 PlanBench，取材自自動規劃社群的題目，包含國際規劃競賽用題。在 600 道 Blocksworld 題目上 — 一隻手一次只能移動一塊積木，放到桌上或放到另一塊淨空的積木上 — 單樣本學習下的 GPT-4 有 34.3% 的機率生成正確計畫、33% 的機率生成成本最佳計畫，I-GPT-3 則是 6.8% 與 5.8%。驗證計畫比生成計畫容易：GPT-4 的計畫驗證正確率 58.6%，I-GPT-3 為 12%。規劃與競賽等級數學、視覺常識推理並列在人類仍舊做得比較好的那份短名單上。" } },
      { q: { en: "Do models get better when they check their own work?", zh: "模型自己檢查一遍，會變好嗎?" },
        a: { en: "They get worse. Self-correction sounds like the obvious answer to hallucination and faulty reasoning, and intrinsic self-correction — where the model fixes itself without external guidance — is the appealing version. Researchers from DeepMind and the University of Illinois at Urbana-Champaign tested GPT-4 on three reasoning benchmarks and found performance declined across all of them. On GSM8K, standard prompting scored 95.50%, one round of self-correction 91.50%, two rounds 89.00%. On CommonSenseQA: 82.00%, then 79.50%, then 80.00%. On HotpotQA: 49.00%, then 49.00%, then 43.00%. Each round also costs more calls — three, then five, instead of one.",
             zh: "會變差。自我修正聽起來是幻覺與推理瑕疵的當然解法，而內在自我修正 — 模型不靠外部指引就自行修正 — 是其中最誘人的版本。DeepMind 與伊利諾大學厄巴納香檳分校的研究者在三個推理基準上測試 GPT-4，發現表現全數下滑。GSM8K 上，標準提示是 95.50%，自我修正第一輪 91.50%，第二輪 89.00%。CommonSenseQA 是 82.00%、79.50%、80.00%。HotpotQA 是 49.00%、49.00%、43.00%。而且每多一輪就多花呼叫次數 — 從一次變成三次，再變成五次。" } },
      { q: { en: "Are emergent abilities real?", zh: "湧現能力是真的嗎?" },
        a: { en: "Often they are an artifact of how you measure. Many papers have argued that LLMs unpredictably display new capabilities at larger scales, which raised the worry that bigger models might develop surprising and uncontrollable abilities. Stanford researchers argue the emergence is frequently a property of the benchmark rather than the model: with nonlinear or discontinuous metrics such as multiple-choice grading, emergent abilities look obvious, and with linear or continuous metrics they largely vanish. Across BIG-bench, they observed emergent abilities on only five of 39 benchmarks. That is a direct challenge to a prevailing belief in AI safety and alignment research.",
             zh: "很多時候那是量測方式造成的假象。許多論文主張 LLM 會在更大規模時不可預測地突然展現新能力，這也帶來一種擔憂：更大的模型可能長出令人意外、甚至無法控制的能力。史丹佛研究者主張，這種湧現往往是基準的性質而非模型的性質：用多選題評分這類非線性或不連續的指標時，湧現看起來很明顯;換成線性或連續的指標，這些能力大致就消失了。在 BIG-bench 的 39 個基準中，他們只在其中 5 個觀察到湧現能力。這直接挑戰了 AI 安全與對齊研究中相當流行的一種信念。" } },
      { q: { en: "Does a model stay the same after it ships?", zh: "模型上線之後還是同一個模型嗎?" },
        a: { en: "No, and it can go backwards. Closed models such as GPT-4, Claude 2 and Gemini are updated by their developers in response to new data and user feedback, and there is little public research on what that does to them. A study from Stanford and Berkeley compared the March 2023 and June 2023 versions of GPT-3.5 and GPT-4 and found the June GPT-4 was 42 percentage points worse at generating code, 16 points worse at answering sensitive questions and 33 points worse on certain mathematical tasks. Its ability to follow instructions had also diminished, which the researchers suggest may explain the broader declines. Every leaderboard number in this chapter is a snapshot of a moving object.",
             zh: "不是，而且可能倒退。GPT-4、Claude 2、Gemini 這類封閉模型會被開發者依新資料與使用者回饋持續更新，而外界幾乎沒有研究在追蹤這對模型做了什麼。史丹佛與柏克萊的一項研究比較 GPT-3.5 與 GPT-4 的 2023 年 3 月版與 6 月版，發現 6 月版的 GPT-4 在產生程式碼上差了 42 個百分點、回答敏感問題差了 16 個百分點、某些數學任務差了 33 個百分點。它遵循指令的能力也下降了，研究者認為這或許能解釋更廣泛的退步。本章每一個排行榜數字，都是對一個移動中物體拍下的快照。" } },
      { q: { en: "What does training one of these cost the planet?", zh: "訓練一個這樣的模型，要付出多少環境代價?" },
        a: { en: "More than most developers will say. Training GPT-3 (175B) released a reported 502 tonnes of CO2 equivalent and consumed 1,287 MWh; Gopher (280B) 352 tonnes and 1,066 MWh; Meta’s Llama 2 70B about 291 tonnes on 400 MWh — nearly 291 times the emissions of one traveler on a round-trip flight from New York to San Francisco, and roughly 16 times an average American’s annual footprint. Smaller models cost far less: Starcoder (15.5B) 16.68 tonnes, Luminous Base (13B) 3.17. The bigger problem is silence. OpenAI, Google, Anthropic and Mistral do not report training emissions, though Meta does, and inference is barely reported at all — even though per-query emissions are small, total inference impact can surpass training once a model is queried millions of times a day.",
             zh: "比多數開發者願意講的更多。訓練 GPT-3(175B)據報排放 502 公噸二氧化碳當量、耗電 1,287 MWh;Gopher(280B)是 352 公噸與 1,066 MWh;Meta 的 Llama 2 70B 約 291 公噸、耗電 400 MWh — 幾乎是一名旅客紐約到舊金山來回航班排放量的 291 倍，約等於一個美國人年排放量的 16 倍。較小的模型便宜得多：Starcoder(15.5B)16.68 公噸，Luminous Base(13B)3.17 公噸。更大的問題是沉默。OpenAI、Google、Anthropic 與 Mistral 都不揭露訓練排放，Meta 則有;推論階段幾乎完全沒人報告 — 即使單次查詢的排放很低，一旦模型每天被查詢數百萬次，推論的總影響仍可能超過訓練。" } }
    ]
  },

  /* -------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In Its Words", zh: "報告原文" },
    title:    { en: "The chapter, in its own words", zh: "本章自己的說法" },
    subtitle: { en: "Five lines from Chapter 2 that carry the year’s argument.",
                zh: "第 2 章裡承載這一年論點的五句話。" },
    quotes: [
      { text: { en: "AI has surpassed human performance on several benchmarks, including some in image classification, visual reasoning, and English understanding. Yet it trails behind on more complex tasks like competition-level mathematics, visual commonsense reasoning and planning.",
                zh: "AI 已在數個基準上超越人類表現，包括影像分類、視覺推理與英文理解中的一部分。但在競賽等級數學、視覺常識推理與規劃這類更複雜的任務上，它仍然落後。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "AI models have reached performance saturation on established benchmarks such as ImageNet, SQuAD, and SuperGLUE, prompting researchers to develop more challenging ones.",
                zh: "AI 模型在 ImageNet、SQuAD、SuperGLUE 等既有基準上已達到效能飽和，促使研究者開發更具挑戰性的基準。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "With generative models producing high-quality text, images, and more, benchmarking has slowly started shifting toward incorporating human evaluations like the Chatbot Arena Leaderboard rather than computerized rankings like ImageNet or SQuAD.",
                zh: "隨著生成式模型能產出高品質的文字、影像與更多內容，評測正緩慢轉向納入 Chatbot Arena 排行榜這類人類評估，而非 ImageNet 或 SQuAD 這類電腦化排名。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "On 10 select AI benchmarks, closed models outperformed open ones, with a median performance advantage of 24.2%. Differences in the performance of closed and open models carry important implications for AI policy debates.",
                zh: "在 10 個選定的 AI 基準上，封閉模型全面勝過開放模型，效能優勢中位數為 24.2%。封閉與開放模型的表現差異，對 AI 政策辯論有重要意涵。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "With AI models growing in size and becoming more widely used, it has never been more critical for the AI research community to diligently monitor and mitigate the environmental effects of AI systems.",
                zh: "隨著 AI 模型規模愈來愈大、使用愈來愈廣，AI 研究社群認真監測並減緩 AI 系統的環境影響，從未如此重要。" },
        by: "Chapter 2 · 2.13 Environmental Impact of AI Systems" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "讀原始章節" },
    title: { en: "Read Chapter 2 in full", zh: "閱讀第 2 章原文" },
    text:  { en: "Chapter 2 (sections 2.1–2.13) — language, coding, image and video, reasoning, audio, agents, robotics, reinforcement learning, properties of LLMs, techniques for improvement and environmental impact — with every figure and citation is free from Stanford HAI.",
             zh: "第 2 章(2.1–2.13 各節) — 語言、程式、影像與影片、推理、音訊、代理、機器人、強化學習、LLM 的性質、改進技術與環境影響 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

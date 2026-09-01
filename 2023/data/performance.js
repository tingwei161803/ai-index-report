/* =========================================================================
   Technical Performance — deep dive · performance.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2023, Chapter 2
   https://hai.stanford.edu/ai-index/2023-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure describes AI progress during 2022 and is drawn from Chapter 2:
   2.1 What’s New in 2022 (timeline), 2.2 Computer Vision—Image,
   2.3 Computer Vision—Video, 2.4 Language, 2.5 Speech,
   2.6 Reinforcement Learning, 2.7 Hardware, 2.8 Environment,
   2.9 AI for Science. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "performance";

window.SITE_META = {
  title:    { en: "AI Index Report 2023", zh: "AI 指數報告 2023" },
  subtitle: { en: "Technical Performance · a chapter deep dive", zh: "技術表現專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The scoreboards stopped moving — so 2022 built new ones",
                zh: "計分板不動了 — 於是 2022 年重新造了幾塊" },
    subtitle: { en: "Chapter 2 of the AI Index 2023 measures technical progress during 2022 across vision, language, speech, reinforcement learning and hardware. The headline is not a leap but a plateau: state-of-the-art results kept arriving, yet on most benchmarks they arrived by a hair. What did leap was generative AI — and the cost of training it. The numbers:",
                zh: "AI 指數 2023 第 2 章衡量 2022 年在視覺、語言、語音、強化學習與硬體上的技術進展。重點不是躍進而是高原：最先進成績仍持續出現，但在多數基準上只多贏了一點點。真正躍進的是生成式 AI — 以及訓練它的代價。先看數字：" },
    stats: [
      { label: { en: "% median year-over-year gain across the benchmarks the AI Index tracks", zh: "% AI 指數追蹤的各項基準，年度進步幅度中位數" }, value: 4 },
      { label: { en: "tracked benchmarks that improved by 5% or more in the year — all the rest gained less", zh: "全年進步達 5% 以上的基準數量 — 其餘全都低於此" }, value: 7 },
      { label: { en: "tasks in BIG-bench, launched in June 2022 by 442 authors across 132 institutions", zh: "BIG-bench 的任務數，2022 年 6 月由 132 個機構的 442 位作者共同推出" }, value: 204 },
      { label: { en: "% ImageNet top-1 accuracy in 2022 — a gain of just 0.1 point on the year", zh: "% 2022 年 ImageNet top-1 準確率 — 全年只進步 0.1 個百分點" }, value: 91 },
      { label: { en: "% MMLU score of Flan-PaLM, the year’s best multitask language result", zh: "% Flan-PaLM 的 MMLU 分數，當年最佳的多任務語言成績" }, value: 75.2 },
      { label: { en: "tonnes of CO₂ equivalent emitted by GPT-3’s training run (BLOOM’s: 25)", zh: "GPT-3 訓練排放的二氧化碳當量噸數(BLOOM 為 25 噸)" }, value: 502 }
    ]
  },

  /* ------------------------------------------------- BENCHMARK SATURATION */
  {
    type: "prose",
    id: "saturation",
    nav:      { en: "Saturation", zh: "基準飽和" },
    title:    { en: "2.6 — The benchmarks ran out of room before the models did",
                zh: "2.6 — 是基準先沒空間了，不是模型" },
    subtitle: { en: "The theme running through the whole chapter is saturation. AI kept setting records in 2022, but on most of the tests the AI Index tracks the record was barely better than last year’s — and the speed at which benchmarks reach that ceiling is still increasing.",
                zh: "貫穿整章的主題是飽和。2022 年 AI 仍不斷刷新紀錄，但在 AI 指數追蹤的多數測驗上，新紀錄只比去年好一點點 — 而且基準觸頂的速度還在加快。" },
    blocks: [
      { type: "p",
        text: { en: "Measured as relative change since each benchmark launched, the median improvement is 42.4%. Measured over the last year alone, the median is 4%. For all but seven of the benchmarks in this chapter, the year’s improvement came in under 5%. The AI Index also dropped two long-standing favourites, SQuAD1.1 and SQuAD2.0, from this edition entirely — no new state-of-the-art results had been posted on either.",
                zh: "若以各基準推出以來的相對變化來衡量，進步幅度中位數是 42.4%；若只看過去一年，中位數是 4%。本章涵蓋的基準裡，除了七個以外，全年進步都不到 5%。AI 指數這一版還把兩個長年常客 SQuAD1.1 與 SQuAD2.0 整個拿掉 — 因為兩者都沒有新的最先進成績出現。" } },
      { type: "h3",
        text: { en: "What a plateau looks like, benchmark by benchmark", zh: "高原長什麼樣子，一個基準一個基準看" } },
      { type: "ul",
        items: {
          en: ["ImageNet: the best image classifier reached 91.0% top-1 accuracy. That is 27.7 percentage points better than a decade ago — and 0.1 point better than last year.",
               "MPII human pose estimation: ViTPose correctly placed 94.3% of keypoints, a 0.2 percentage point increase on a record set back in 2020.",
               "Cityscapes semantic segmentation: 86.46% mIoU, up 23.4 points since the challenge launched in 2014, but flat for the last few years.",
               "COCO object detection: EVA, from a Chinese academic collaboration, reached 81.9% mAP50 — detectors have gained 26 points since 2015.",
               "Kvasir-SEG medical image segmentation: 94.11% mean Dice. Celeb-DF deepfake detection: an AUC of 78. Procgen reinforcement learning: a mean normalised score of 0.57.",
               "Face recognition is effectively finished. On every NIST FRVT dataset except WILD Photos the top model now errs less than 1% of the time, and on VISA Photos the error rate is 0.06%."],
          zh: ["ImageNet：最強的影像分類器達到 91.0% 的 top-1 準確率。這比十年前高了 27.7 個百分點 — 但只比去年高 0.1 個百分點。",
               "MPII 人體姿態估計：ViTPose 正確標出 94.3% 的關節點，比 2020 年創下的紀錄只多 0.2 個百分點。",
               "Cityscapes 語意分割：mIoU 86.46%，自 2014 年競賽開辦以來累積進步 23.4 個百分點，但近幾年已經打平。",
               "COCO 物件偵測：來自中國學術合作團隊的 EVA 達到 81.9% mAP50 — 偵測器自 2015 年以來累積進步 26 個百分點。",
               "Kvasir-SEG 醫學影像分割：平均 Dice 94.11%。Celeb-DF 深偽偵測：AUC 78。Procgen 強化學習：最小最大正規化平均分數 0.57。",
               "人臉辨識實質上已經結束。在 NIST FRVT 的每一組資料上，除了 WILD Photos 之外，最佳模型的錯誤率都已低於 1%，而在 VISA Photos 上只有 0.06%。"]
        } },
      { type: "h3",
        text: { en: "The response: bigger, broader test suites", zh: "應對方式：更大、更全面的測驗套組" } },
      { type: "p",
        text: { en: "Researchers answered saturation by building evaluations that are harder to finish. In June 2022, 442 authors across 132 institutions launched BIG-bench (Beyond the Imitation Game), a suite of 204 tasks spanning linguistics, childhood development, math, common-sense reasoning, biology, physics, social bias and software development. In November, Stanford researchers released HELM (Holistic Evaluation of Language Models), an attempt to judge language models against unified standards rather than one score at a time. Google’s Imagen team shipped DrawBench alongside the model itself, precisely because the existing text-to-image benchmark was no longer discriminating.",
                zh: "研究者對飽和的回應，是打造更難跑完的評測。2022 年 6 月，132 個機構的 442 位作者推出 BIG-bench(Beyond the Imitation Game)，共 204 項任務，橫跨語言學、兒童發展、數學、常識推理、生物、物理、社會偏見與軟體開發。同年 11 月，史丹佛研究者釋出 HELM(Holistic Evaluation of Language Models)，試圖用統一標準評判語言模型，而不是一次只看一個分數。Google 的 Imagen 團隊則在發表模型的同時推出 DrawBench，正是因為既有的文字轉圖像基準已經分不出高下。" } }
    ]
  },

  /* ------------------------------------------------- AI VS HUMAN BASELINE */
  {
    type: "bars",
    id: "human-baseline",
    nav:      { en: "AI vs humans", zh: "對上人類" },
    title:    { en: "Where AI stood against the human baselines in 2022",
                zh: "2022 年 AI 站在人類基準的哪一邊" },
    subtitle: { en: "2022 state-of-the-art score (%) on four benchmarks that carry a human baseline. AI is now above the line on aNLI (human 92.90), SuperGLUE (89.80) and VQA v2 (80.78) — and still below it on Visual Commonsense Reasoning, whose human baseline is 85.00.",
                zh: "四項附有人類基準的測驗，2022 年最先進分數(%)。AI 在 aNLI(人類 92.90)、SuperGLUE(89.80)與 VQA v2(80.78)上都已越線，唯獨視覺常識推理仍在人類基準 85.00 之下。" },
    series: [
      { label: { en: "aNLI", zh: "aNLI" },           value: 93.65 },
      { label: { en: "SuperGLUE", zh: "SuperGLUE" }, value: 91.3 },
      { label: { en: "VQA v2", zh: "VQA v2" },       value: 84.3 },
      { label: { en: "VCR", zh: "VCR" },             value: 75.6 }
    ]
  },

  /* ------------------------------------------------------- 2.1 TIMELINE */
  {
    type: "timeline",
    id: "timeline-2022",
    nav:      { en: "2022 timeline", zh: "年度大事記" },
    title:    { en: "2.1 — The year generative AI arrived in public",
                zh: "2.1 — 生成式 AI 走進大眾視野的那一年" },
    subtitle: { en: "A selection from the chapter’s own timeline of the most significant AI developments of 2022, as chosen by the AI Index Steering Committee.",
                zh: "從本章時間軸中挑出的幾則 2022 年重大 AI 進展，這份名單由 AI 指數指導委員會選定。" },
    events: [
      { date:  { en: "Feb 2, 2022", zh: "2022 年 2 月 2 日" },
        title: { en: "AlphaCode · DeepMind", zh: "AlphaCode · DeepMind" },
        body:  { en: "An AI system that writes computer programs at a competitive level, ranking within the top 54% of participants in a human programming competition — progress on exactly the kind of complex problem-solving AI had traditionally struggled with.",
                 zh: "一套能以競賽水準撰寫電腦程式的 AI 系統，在人類程式競賽中擠進前 54% 的參賽者之列 — 而複雜問題求解正是 AI 一向不擅長的領域。" } },
      { date:  { en: "Apr 5, 2022", zh: "2022 年 4 月 5 日" },
        title: { en: "PaLM · Google", zh: "PaLM · Google" },
        body:  { en: "One of the world’s largest language models at 540 billion parameters. PaLM reinforced the prevailing belief of the moment: that performance improves by simply training on more data.",
                 zh: "全球規模最大的語言模型之一，共 5,400 億參數。PaLM 強化了當時的主流信念 — 只要餵更多資料訓練，效能就會變好。" } },
      { date:  { en: "Apr 13, 2022", zh: "2022 年 4 月 13 日" },
        title: { en: "DALL·E 2 · OpenAI", zh: "DALL·E 2 · OpenAI" },
        body:  { en: "A text-to-image system that creates realistic art and images from written descriptions. Its public release is the moment the AI Index marks as igniting the generative AI craze.",
                 zh: "能依文字描述生成寫實藝術與影像的文字轉圖像系統。AI 指數把它的公開釋出，標記為點燃生成式 AI 熱潮的那一刻。" } },
      { date:  { en: "May 12, 2022", zh: "2022 年 5 月 12 日" },
        title: { en: "Gato · DeepMind", zh: "Gato · DeepMind" },
        body:  { en: "A reinforcement learning agent capable of robotic manipulation, game playing, image captioning and natural language generation in one system — evidence that AI was getting better at generalisation.",
                 zh: "一個能同時做機器手臂操作、玩遊戲、影像描述與自然語言生成的強化學習代理 — 顯示 AI 的泛化能力正在提升。" } },
      { date:  { en: "Jun 9, 2022", zh: "2022 年 6 月 9 日" },
        title: { en: "BIG-bench · 442 authors", zh: "BIG-bench · 442 位作者" },
        body:  { en: "To better challenge increasingly capable large language models, 442 authors across 132 institutions launched the Beyond the Imitation Game benchmark: 204 tasks from linguistics and childhood development to physics and software development.",
                 zh: "為了更有效地挑戰日益強大的大型語言模型，132 個機構的 442 位作者推出 Beyond the Imitation Game 基準：204 項任務，從語言學、兒童發展一路到物理與軟體開發。" } },
      { date:  { en: "Jun 21, 2022", zh: "2022 年 6 月 21 日" },
        title: { en: "Copilot goes on sale · GitHub", zh: "Copilot 開賣 · GitHub" },
        body:  { en: "GitHub made Copilot available as a subscription service for individual developers. It turns natural language prompts into coding suggestions across multiple languages; surveys suggest it makes coders more productive and less frustrated. Similar systems include OpenAI’s Codex and Salesforce’s CodeGen.",
                 zh: "GitHub 把 Copilot 以訂閱制開放給個別開發者。它能把自然語言提示轉成多種語言的程式碼建議；調查顯示它讓工程師更有生產力、也更少受挫。同類系統還有 OpenAI 的 Codex 與 Salesforce 的 CodeGen。" } },
      { date:  { en: "Aug 22, 2022", zh: "2022 年 8 月 22 日" },
        title: { en: "Stable Diffusion · Stability AI", zh: "Stable Diffusion · Stability AI" },
        body:  { en: "An open-source text-to-image diffusion model whose weights anyone can use freely. It is trained on existing human-made images and gives no credit or acknowledgment, leaving open questions about the ethical use of image generators.",
                 zh: "一個開源的文字轉圖像擴散模型，任何人都能自由取用其權重。它以既有的人類創作影像訓練，卻不註明來源或給予署名，留下了影像生成器倫理使用的疑問。" } },
      { date:  { en: "Sep 21, 2022", zh: "2022 年 9 月 21 日" },
        title: { en: "Whisper · OpenAI", zh: "Whisper · OpenAI" },
        body:  { en: "A large-scale speech recognition system trained on roughly 700,000 hours of audio. It needed neither supervised pre-training nor unsupervised training with fine-tuning, yet performed strongly — further validation of simply scaling up training data.",
                 zh: "以約 700,000 小時音訊訓練的大規模語音辨識系統。它既不需要監督式預訓練，也不需要非監督訓練加微調，卻表現優異 — 再一次驗證了單純擴大訓練資料的做法。" } },
      { date:  { en: "Nov 16, 2022", zh: "2022 年 11 月 16 日" },
        title: { en: "HELM · Stanford", zh: "HELM · 史丹佛" },
        body:  { en: "Holistic Evaluation of Language Models, a new benchmarking approach that judges language models against more unified standards — evidence of the field’s attempt to build transparency around increasingly powerful systems.",
                 zh: "Holistic Evaluation of Language Models 是一套新的評測方法，改以更統一的標準評判語言模型 — 顯示這個領域正試圖為愈來愈強大的系統建立透明度。" } },
      { date:  { en: "Nov 30, 2022", zh: "2022 年 11 月 30 日" },
        title: { en: "ChatGPT · OpenAI", zh: "ChatGPT · OpenAI" },
        body:  { en: "A publicly usable chatbot capable of writing university-level essays. Months after launch it reached 100 million monthly active users, making it the fastest-growing consumer application in history — and capping a year in which generative AI became part of the zeitgeist.",
                 zh: "一個人人可用、能寫出大學程度文章的聊天機器人。上線幾個月後就達到一億月活躍使用者，成為史上成長最快的消費性應用 — 也為生成式 AI 進入時代精神的這一年畫下句點。" } }
    ]
  },

  /* ---------------------------------------------------- GENERATIVE MODELS */
  {
    type: "prose",
    id: "generative",
    nav:      { en: "Generative AI", zh: "生成式 AI" },
    title:    { en: "2.2–2.5 — Text in, pictures out: the year generation went mainstream",
                zh: "2.2–2.5 — 輸入文字、輸出圖像：生成技術成為主流的一年" },
    subtitle: { en: "While the classification benchmarks flatlined, generation did not. Text-to-image, text-to-video and speech all shipped systems in 2022 that ordinary users could actually touch.",
                zh: "分類基準一路平坦的同時，生成並沒有停下來。2022 年，文字轉圖像、文字轉影片與語音都推出了一般使用者真的碰得到的系統。" },
    blocks: [
      { type: "h3",
        text: { en: "Text to image", zh: "文字轉圖像" } },
      { type: "p",
        text: { en: "DALL·E 2, Stable Diffusion, Midjourney, Meta’s Make-A-Scene and Google’s Imagen all arrived within months of each other. The AI Index put the same prompt — “a panda playing a piano on a warm evening in Paris” — to DALL·E 2, Stable Diffusion and Midjourney to compare them side by side. On the MS-COCO 256×256 FID-30K benchmark, where a lower Fréchet Inception Distance is better, Imagen leads at 7.27, ahead of Make-A-Scene at 7.55 and DALL·E 2 at 10.39; for scale, AttnGAN scored 35.49 back in 2017. Google shipped the harder DrawBench benchmark alongside Imagen, because text-to-image models had outgrown the old test.",
                zh: "DALL·E 2、Stable Diffusion、Midjourney、Meta 的 Make-A-Scene 與 Google 的 Imagen 在短短數月內接連登場。AI 指數用同一句提示 —「a panda playing a piano on a warm evening in Paris」— 分別餵給 DALL·E 2、Stable Diffusion 與 Midjourney 並排比較。在 MS-COCO 256×256 FID-30K 基準上(Fréchet Inception Distance 愈低愈好)，Imagen 以 7.27 領先，其次是 Make-A-Scene 的 7.55 與 DALL·E 2 的 10.39；作為對照，2017 年的 AttnGAN 是 35.49。Google 在發表 Imagen 的同時推出更難的 DrawBench，因為文字轉圖像模型已經長得比舊測驗還大。" } },
      { type: "h3",
        text: { en: "Text to video", zh: "文字轉影片" } },
      { type: "ul",
        items: {
          en: ["In May, Tsinghua University and the Beijing Academy of Artificial Intelligence released CogVideo, which posted the then-highest inception score on the UCF-101 text-to-video benchmark at 50.46.",
               "In September, Meta’s Make-A-Video overtook it decisively with an inception score of 82.55 — 63.6% better than CogVideo on UCF-101.",
               "In October, Google released Phenaki, though it was not benchmarked on UCF-101.",
               "The caveat the chapter attaches: impressive as these models are, they can so far only generate videos a few seconds long."],
          zh: ["5 月，清華大學與北京智源人工智慧研究院釋出 CogVideo，以 50.46 的 inception score 拿下當時 UCF-101 文字轉影片基準的最高分。",
               "9 月，Meta 的 Make-A-Video 以 82.55 的 inception score 大幅超越 — 在 UCF-101 上比 CogVideo 好 63.6%。",
               "10 月，Google 釋出 Phenaki，不過這個模型並未在 UCF-101 上評測。",
               "本章加註的但書是：這些模型雖然驚人，但目前都只能生成幾秒鐘長的影片。"]
        } },
      { type: "h3",
        text: { en: "One model, many skills", zh: "一個模型，多種技能" } },
      { type: "p",
        text: { en: "AI has traditionally been strong at narrow tasks and weak at crossing between them. In 2022 that started to break down. Microsoft’s BEiT-3 posted state-of-the-art results across four vision skills and five vision-language skills at once — on NLVR visual reasoning it reached 92.60 against a previous best of 87.00, a 6.44% improvement, the largest of the nine. Google’s PaLI took the top spot on VQA v2 at 84.30%, above the 80.78% human baseline. Both are single systems doing what used to require several.",
                zh: "AI 傳統上擅長狹窄任務，卻不擅長在任務之間切換。2022 年這個界線開始鬆動。微軟的 BEiT-3 一口氣在四項視覺技能與五項視覺語言技能上都拿下最先進成績 — 在 NLVR 視覺推理上達到 92.60，超越先前最佳的 87.00，進步 6.44%，是九項中幅度最大的。Google 的 PaLI 則以 84.30% 登上 VQA v2 榜首，高於 80.78% 的人類基準。這兩個都是單一系統，做的是過去得動用好幾個系統才做得到的事。" } },
      { type: "h3",
        text: { en: "Speech", zh: "語音" } },
      { type: "p",
        text: { en: "The scaling recipe reached speech in 2022. Whisper, trained in a weakly supervised way on 700,000 hours of audio, beat wav2vec 2.0 Large across a wide range of English speech recognition benchmarks and outperformed leading translation models on the X→EN subset of CoVoST 2, scoring 29.1 BLEU against MAESTRO’s 25.2. On Kincaid46 its median word error rate of 8.81% beat every commercial ASR service tested. It was not best at everything: on FLEURS language identification, zero-shot Whisper managed 64.5% against mSLAM-CTC’s 77.7%. Meanwhile on the original VoxCeleb speaker recognition dataset, American researchers posted an equal error rate of 0.1%, a 0.28 percentage point improvement on the previous year’s state of the art.",
                zh: "2022 年，規模擴張的做法也來到了語音領域。以 700,000 小時音訊、弱監督方式訓練的 Whisper，在一系列英語語音辨識基準上勝過 wav2vec 2.0 Large，並在 CoVoST 2 的 X→EN 子集上以 29.1 BLEU 勝過 MAESTRO 的 25.2，超越多個頂尖翻譯模型。在 Kincaid46 上，它 8.81% 的中位字錯誤率贏過所有受測的商用語音辨識服務。但它並非樣樣最好：在 FLEURS 語言辨識上，零樣本的 Whisper 只有 64.5%，而 mSLAM-CTC 有 77.7%。另一方面，在原始的 VoxCeleb 語者辨識資料集上，美國研究者寫下 0.1% 的等錯誤率，比前一年的最先進成績再降 0.28 個百分點。" } }
    ]
  },

  /* ------------------------------------------------------- 2.9 AI SCIENCE */
  {
    type: "cards",
    id: "ai-for-science",
    nav:      { en: "AI for science", zh: "AI 做科學" },
    title:    { en: "2.9 — The world’s best new scientist … AI?",
                zh: "2.9 — 全世界最好的新科學家 …… 是 AI？" },
    subtitle: { en: "2022 was the year AI stopped only being the subject of research and started doing some. Six cases from the chapter — including two where AI was used to improve AI. Tap any card for the detail.",
                zh: "2022 年，AI 不再只是被研究的對象，而是開始動手做研究。以下是本章的六個案例 — 其中兩個是拿 AI 來改進 AI。點任一張卡片看細節。" },
    items: [
      {
        slug: "fusion-plasma-control",
        title:   { en: "Learned plasma control for fusion", zh: "用學習控制核融合電漿" },
        summary: { en: "DeepMind trained a reinforcement learning agent to find optimal tokamak management procedures for containing hydrogen plasma.",
                   zh: "DeepMind 訓練強化學習代理，找出約束氫電漿的最佳托卡馬克操控程序。" },
        tags: ["science"],
        overview: { en: "Nuclear fusion could generate clean energy by fusing hydrogen, and a common route to it is the tokamak — a machine that controls and contains heated hydrogen plasma. The problem is that these plasmas are unstable and need constant monitoring, and experimental data is scarce. In 2022 DeepMind researchers developed a reinforcement learning algorithm that discovers optimal tokamak management procedures, demonstrated on the Variable Configuration Tokamak at EPFL. The AI Index dates the work to February 16, 2022 in its timeline of the year.",
                   zh: "核融合能藉由讓氫融合而產生乾淨能源，常見的路徑是托卡馬克 — 一種控制並約束高溫氫電漿的機器。難處在於這些電漿並不穩定，需要持續監控，而實驗資料又相當稀少。2022 年，DeepMind 的研究者開發出能找出最佳托卡馬克操控程序的強化學習演算法，並在洛桑聯邦理工學院的可變構型托卡馬克上驗證。AI 指數在年度時間軸上把這項成果標在 2022 年 2 月 16 日。" }
      },
      {
        slug: "alphatensor",
        title:   { en: "AlphaTensor rewrites matrix multiplication", zh: "AlphaTensor 改寫矩陣乘法" },
        summary: { en: "A reinforcement learning system that discovered faster algorithms for multiplying matrices — a problem researchers had been chipping at for 50 years.",
                   zh: "以強化學習找出更快的矩陣乘法演算法 — 這個問題研究者已經啃了 50 年。" },
        tags: ["algorithms"],
        overview: { en: "Multiplying two 2×2 matrices takes 2³ = 8 multiplications by the classic algorithm. Fifty years ago Strassen showed how to do it in 7, and more generally how to multiply two n×n matrices in O(n^log(7)) operations. Released on October 5, 2022, DeepMind’s AlphaTensor uses reinforcement learning to improve on the state of the art for many matrix sizes, including 4×4 matrices over the integers [0,1], and matches it on several others. It works by searching through vast numbers of candidate algorithms and evaluating them on real computer architectures — matrix multiplication being essential to neural networks and scientific computing alike.",
                   zh: "用傳統演算法相乘兩個 2×2 矩陣需要 2³ = 8 次乘法。五十年前 Strassen 證明可以壓到 7 次，並推廣為以 O(n^log(7)) 次運算相乘兩個 n×n 矩陣。2022 年 10 月 5 日發表的 DeepMind AlphaTensor，以強化學習在多種矩陣尺寸上超越當時最佳解，包括整數 [0,1] 上的 4×4 矩陣，另有數種尺寸打平。它的做法是在龐大的候選演算法空間中搜尋，並在真實電腦架構上實測評估 — 而矩陣乘法無論對神經網路或科學計算都是基礎運算。" }
      },
      {
        slug: "prefixrl-chips",
        title:   { en: "AI-designed circuits inside Nvidia’s GPUs", zh: "Nvidia GPU 裡的 AI 設計電路" },
        summary: { en: "Nvidia’s PrefixRL agent designs chip circuits smaller and faster than the EDA tools that used to do the job.",
                   zh: "Nvidia 的 PrefixRL 代理設計出比傳統 EDA 工具更小更快的晶片電路。" },
        tags: ["hardware"],
        overview: { en: "A team at Nvidia trained a reinforcement learning agent to design chip circuits that are smaller, faster and more efficient than those produced by electronic design automation tools. The chapter shows a 64-bit adder circuit designed by the PrefixRL agent that is 25% smaller while being just as fast and functional as the EDA-designed equivalent. This is not a demo: one of Nvidia’s latest chip families, the Hopper GPU architecture, contains over 13,000 instances of AI-designed circuits. Since GPUs are what AI trains on, this is AI improving the substrate it runs on.",
                   zh: "Nvidia 團隊訓練強化學習代理來設計晶片電路，成果比電子設計自動化工具產出的更小、更快、更有效率。本章展示了一個由 PrefixRL 代理設計的 64 位元加法器電路，體積小 25%，速度與功能卻與 EDA 工具設計的版本相當。這不只是展示品：Nvidia 最新的晶片家族之一 Hopper GPU 架構，裡面就有超過 13,000 個 AI 設計的電路實例。既然 AI 是在 GPU 上訓練的，這等於是 AI 在改良自己賴以運行的底層。" }
      },
      {
        slug: "de-novo-antibodies",
        title:   { en: "Antibodies designed from scratch", zh: "從零設計出來的抗體" },
        summary: { en: "Generative models produced novel antibodies zero-shot — one round of generation, no further optimisation.",
                   zh: "生成模型以零樣本方式產出全新抗體 — 只生成一輪，不再優化。" },
        tags: ["biology"],
        overview: { en: "De novo antibody discovery normally consumes enormous time and resources, and traditional methods offer little control over the output, so proposed antibodies are often suboptimal. A research team turned instead to generative AI models, creating antibodies in a zero-shot fashion: one round of model generation with no further optimisation. The AI-generated antibodies proved robust. The chapter’s conclusion is that generative AI being able to create new antibodies has the potential to accelerate drug discovery.",
                   zh: "從零開始的抗體探索(de novo)通常極為耗時耗資源，而傳統方法對輸出的掌控又很有限，提出的抗體往往不夠理想。有研究團隊改用生成式 AI 模型，以零樣本的方式產生抗體：只經過一輪模型生成，不再進一步優化。這些 AI 生成的抗體被證實相當穩健。本章的結論是，生成式 AI 能創造新抗體，具有加速藥物開發的潛力。" }
      },
      {
        slug: "bcooler-energy",
        title:   { en: "BCOOLER cools Google’s data centres", zh: "BCOOLER 幫 Google 機房降溫" },
        summary: { en: "A reinforcement learning agent cut cooling energy by about 12.7% over a three-month experiment.",
                   zh: "強化學習代理在三個月的實驗中，把冷卻用電降低約 12.7%。" },
        tags: ["energy"],
        overview: { en: "Training AI is energy intensive, but AI can also be pointed at the energy problem. In 2022 DeepMind published the results of a 2021 experiment in which it trained a reinforcement learning agent called BCOOLER — BVE-based COnstrained Optimization Learner with Ensemble Regularization — to optimise cooling procedures for Google’s data centres. By the end of the three-month experiment BCOOLER had achieved roughly 12.7% cumulative energy savings, and it did so while maintaining the cooling comfort levels the building managers preferred.",
                   zh: "訓練 AI 非常耗能，但 AI 也可以反過來對付能源問題。2022 年 DeepMind 公布了一項 2021 年實驗的結果：他們訓練一個叫 BCOOLER(BVE-based COnstrained Optimization Learner with Ensemble Regularization)的強化學習代理，來優化 Google 資料中心的冷卻程序。三個月的實驗結束時，BCOOLER 累積節省約 12.7% 的能源，而且是在維持大樓管理者要求的冷卻舒適度前提下做到的。" }
      },
      {
        slug: "palm-improves-palm",
        title:   { en: "PaLM improves PaLM", zh: "PaLM 改進 PaLM" },
        summary: { en: "Google researchers used one of their language models to improve the reasoning of that very same model.",
                   zh: "Google 研究者用自家的語言模型，去改進同一個模型的推理能力。" },
        tags: ["self-improvement"],
        overview: { en: "On October 20, 2022, Google researchers used one of their existing language models, PaLM, to improve the reasoning of PaLM itself. Together with Nvidia’s use of a reinforcement learning agent to design better AI chips, the AI Index treats this as the start of a distinct pattern: AI systems using their own knowledge to improve, which the chapter argues will accelerate AI progress overall.",
                   zh: "2022 年 10 月 20 日，Google 研究者用自家既有的語言模型 PaLM，去改進 PaLM 自己的推理能力。加上 Nvidia 用強化學習代理設計更好的 AI 晶片，AI 指數把這些視為一種新模式的開端：AI 系統運用自身的知識來自我改進 — 本章認為這將整體加速 AI 的進展。" }
      }
    ]
  },

  /* ------------------------------------------------ 2.7 + 2.8 THE SUBSTRATE */
  {
    type: "prose",
    id: "chips-carbon",
    nav:      { en: "Chips & carbon", zh: "硬體與碳排" },
    title:    { en: "2.7–2.8 — The hardware got cheaper and faster; the bill arrived anyway",
                zh: "2.7–2.8 — 硬體變快也變便宜，帳單還是寄來了" },
    subtitle: { en: "Two sections that belong together. Training keeps getting faster per dollar, which is exactly why models keep getting bigger — and why this edition is the first to put a carbon figure on them.",
                zh: "這兩節其實該擺在一起看。每一塊錢買到的訓練速度不斷提升，正因如此模型才愈做愈大 — 也正因如此，這一版第一次替它們算出碳排數字。" },
    blocks: [
      { type: "h3",
        text: { en: "Hardware", zh: "硬體" } },
      { type: "ul",
        items: {
          en: ["In MLPerf training, the top systems in image classification and object detection now train roughly 32 times faster than in 2018, when the competition launched. Record lows were set in 2022 across object detection, speech recognition, image segmentation, recommendation, image classification and language processing — the fastest, language processing, takes 0.18 minutes.",
               "Better hardware is doing much of that work. The maximum number of accelerators used by an MLPerf entrant reached 4,216; the systems that post top results average 1,859; the mean across all entrants is 211. That gap has widened every year of the competition.",
               "On MLPerf Inference, the number of offline samples generated by the top image classifiers and language processors has more than doubled since 2020, while recommendation throughput is up roughly 23%.",
               "GPU performance keeps climbing: median FP32 performance has nearly tripled since 2021 and is up roughly 7,000 times since 2003.",
               "Price–performance is the number that matters for scaling. Median FLOP/s per US dollar in 2022 is 1.4 times greater than in 2021 and 5,600 times greater than in 2003 — a doubling every 1.5 years."],
          zh: ["在 MLPerf 訓練競賽中，影像分類與物件偵測的頂尖系統，如今訓練速度約是 2018 年開賽時的 32 倍。2022 年在物件偵測、語音辨識、影像分割、推薦、影像分類與語言處理上全都創下新低，其中最快的語言處理只要 0.18 分鐘。",
               "這裡面有很大一部分是硬體堆出來的。MLPerf 參賽者使用的加速器數量最高達到 4,216 個；能拿下最佳成績的系統平均用了 1,859 個；而所有參賽者的平均只有 211 個。這道差距在競賽的每一年都在擴大。",
               "在 MLPerf 推論競賽上，頂尖影像分類器與語言處理器產出的離線樣本數，自 2020 年以來已經翻倍以上，推薦系統的吞吐量也成長約 23%。",
               "GPU 效能持續往上：FP32 效能中位數自 2021 年以來將近三倍，自 2003 年以來則提升約 7,000 倍。",
               "真正決定規模擴張的是性價比。2022 年每美元的 FLOP/s 中位數是 2021 年的 1.4 倍、2003 年的 5,600 倍 — 相當於每 1.5 年翻一倍。"]
        } },
      { type: "h3",
        text: { en: "Carbon", zh: "碳排" } },
      { type: "p",
        text: { en: "Drawing on Luccioni et al., 2022, the chapter compares four large language models on parameters, data centre power usage effectiveness, grid carbon intensity, power consumption and emissions. GPT-3 (175B parameters, 1,287 MWh, PUE 1.10, grid intensity 429 gCO₂eq/kWh) released the most carbon at 502 tonnes: 1.4 times more than Gopher, 7.2 times more than OPT and 20.1 times more than BLOOM. The comparison is imperfect — accounting methodologies for reporting carbon emissions are not standardised — but the relativities are stark. BLOOM, the cleanest of the four at 25 tonnes, still emitted 25 times as much as flying one passenger round trip from New York to San Francisco, 1.4 times what the average American emits in a year, and consumed enough energy to power the average American home for 41 years.",
                zh: "本章引用 Luccioni 等人 2022 年的研究，從參數量、資料中心能源使用效率(PUE)、電網碳強度、耗電量到排放量，比較四個大型語言模型。GPT-3(1,750 億參數、1,287 MWh、PUE 1.10、電網碳強度 429 gCO₂eq/kWh)排放最多，達 502 噸：是 Gopher 的 1.4 倍、OPT 的 7.2 倍、BLOOM 的 20.1 倍。這種比較並不完美 — 碳排放的計算方法至今沒有統一標準 — 但相對關係已經很清楚。四者中最乾淨的 BLOOM 只有 25 噸，卻仍相當於一名乘客紐約往返舊金山飛行排放量的 25 倍、一個美國人一年排放量的 1.4 倍，而它訓練所耗的電力足以供應一個美國家庭用 41 年。" } }
    ]
  },

  /* ------------------------------------------------------- CARBON CHART */
  {
    type: "bars",
    id: "carbon-cost",
    nav:      { en: "Carbon cost", zh: "訓練碳排" },
    title:    { en: "What one training run costs, in tonnes of CO₂",
                zh: "一次訓練要付多少噸二氧化碳" },
    subtitle: { en: "CO₂ equivalent emissions in tonnes, from Luccioni et al., 2022 and Strubell et al., 2019. Two of the four language models out-emit a car over its entire lifetime including fuel; all four out-emit a person’s annual footprint.",
                zh: "以噸為單位的二氧化碳當量排放，資料出自 Luccioni 等人(2022)與 Strubell 等人(2019)。四個語言模型中有兩個的排放量，超過一輛車含燃料的一生；四個全都超過一個人一年的碳足跡。" },
    series: [
      { label: { en: "GPT-3 (175B)", zh: "GPT-3" },      value: 502 },
      { label: { en: "Gopher (280B)", zh: "Gopher" },    value: 352 },
      { label: { en: "OPT (175B)", zh: "OPT" },          value: 70 },
      { label: { en: "Car, lifetime", zh: "一輛車一生" }, value: 63 },
      { label: { en: "BLOOM (176B)", zh: "BLOOM" },      value: 25 },
      { label: { en: "US life, 1 yr", zh: "美國人一年" }, value: 18.08 }
    ]
  },

  /* ----------------------------------------------------------- ACCORDION */
  {
    type: "accordion",
    id: "limits",
    nav:      { en: "Limits", zh: "侷限" },
    title:    { en: "What 2022’s systems still could not do", zh: "2022 年的系統還做不到什麼" },
    subtitle: { en: "The chapter is unusually blunt about the gap between impressive demos and reliable capability — and about how much the scores themselves are worth.",
                zh: "對於「令人驚豔的展示」與「可靠的能力」之間的落差，以及這些分數本身值多少，本章講得異常直白。" },
    qa: [
      { q: { en: "Can large language models plan and reason?", zh: "大型語言模型會規劃與推理嗎？" },
        a: { en: "Not really — and 2022 produced the test that showed it. Valmeekam et al. built a planning benchmark of seven assignments (plan generation, cost-optimal planning, reasoning about plan execution, robustness to goal reformulation, plan reuse, replanning and plan generalisation) and ran GPT-3, Instruct-GPT3 and BLOOM on it in a Blocksworld domain, where an agent must arrange coloured blocks into a given order. The results are brutal: on plan generation the three scored 0.6%, 5.0% and 0.5%; on optimal planning 0.2%, 3.2% and 0%; on plan reuse 0%, 14.4% and 0%. They did far better at reformulating goals — up to 77.4% on one variant of robustness to goal reformulation — but compared to humans the models performed much worse overall, which the authors read as evidence that capability is not the same thing as human-like reasoning.",
             zh: "並不真的會 — 而 2022 年正好出現了證明這件事的測驗。Valmeekam 等人建立了一套包含七項作業的規劃基準(計畫生成、成本最佳規劃、對計畫執行的推理、目標改述的穩健性、計畫重用、重新規劃、計畫泛化)，並在 Blocksworld 環境中測試 GPT-3、Instruct-GPT3 與 BLOOM — 在這個環境裡，代理必須把不同顏色的積木排成指定順序。結果相當難看：計畫生成上三者分別是 0.6%、5.0% 與 0.5%；最佳規劃是 0.2%、3.2% 與 0%；計畫重用是 0%、14.4% 與 0%。它們在改述目標上好得多，某一項目標改述穩健性測試甚至達到 77.4%，但整體與人類相比仍差得很遠 — 作者認為這說明「有能力」跟「具備人類式推理」並不是同一件事。" } },
      { q: { en: "How much better did language models actually get?", zh: "語言模型到底進步了多少？" },
        a: { en: "The AI Index ran its own small experiment: it gave the same prompt — “Explain to me the major accomplishments of Theodore Roosevelt’s presidency” — to GPT-2 (2019), GPT-3 (2020) and ChatGPT (2022). GPT-2’s answer is mostly gibberish; it produces grammatical sentences that never address the question. GPT-3 responds to the question but gets the facts wrong, crediting Theodore Roosevelt with leading the US out of the Great Depression and into World War II (that was Franklin Delano Roosevelt) and with creating the National Park Service and the National Wildlife Federation (created in 1916 and 1936, after his presidency). ChatGPT’s answer is the strongest: all but one of its facts are correct, and it is more thorough and more concise than either predecessor.",
             zh: "AI 指數自己做了一個小實驗：把同一句提示 —「Explain to me the major accomplishments of Theodore Roosevelt’s presidency」— 分別給 GPT-2(2019)、GPT-3(2020)與 ChatGPT(2022)。GPT-2 的回答大部分是胡言亂語，句子合乎文法，卻從頭到尾沒回答問題。GPT-3 有回應問題，但事實錯誤：把帶領美國走出大蕭條、投入二戰的功勞算到老羅斯福頭上(那是小羅斯福)，也說他創立了國家公園管理局與國家野生動物聯盟(這兩者分別成立於 1916 與 1936 年，都在他任期之後)。ChatGPT 的答案最強：除了一項之外事實全對，而且比前兩者更完整也更精簡。" } },
      { q: { en: "Are these systems safe to rely on?", zh: "這些系統可以放心倚賴嗎？" },
        a: { en: "The chapter’s own highlights say no, in plain terms. 2022 saw text-to-image models like DALL·E 2 and Stable Diffusion, text-to-video systems like Make-A-Video and chatbots like ChatGPT — “Still, these systems can be prone to hallucination, confidently outputting incoherent or untrue responses, making it hard to rely on them for critical applications.” The confidence is the problem: the failure mode is not a visible error but a plausible-sounding wrong answer.",
             zh: "本章的重點摘要說得很直白：不行。2022 年出現了 DALL·E 2、Stable Diffusion 這類文字轉圖像模型，Make-A-Video 這類文字轉影片系統，以及 ChatGPT 這類聊天機器人 —「然而，這些系統仍容易產生幻覺，會信心十足地輸出不連貫或不真實的回應，使人難以在關鍵應用中倚賴它們。」問題正出在那份自信：它的失效方式不是顯而易見的錯誤，而是一個聽起來很有道理的錯答案。" } },
      { q: { en: "Is any vision benchmark still genuinely open?", zh: "還有哪個視覺基準真的還沒被攻克？" },
        a: { en: "A few. Visual Commonsense Reasoning is one of the very few visual benchmarks in this report on which AI has yet to pass humans: the 2022 top Q→AR score is 75.60 against a human baseline of 85.00. VCR is harder than VQA because a system must both pick the right answer and pick the right reasoning behind it. In video, the gap between Kinetics-600 (91.80%) and Kinetics-700 (84.00%) is 7.8 percentage points, which the chapter reads as a sign that the 700-category dataset is still a meaningful challenge. And in face recognition, WILD Photos is the one FRVT dataset where the error rate is still above 1%, at 2.97%.",
             zh: "還有幾個。視覺常識推理(VCR)是本報告中極少數 AI 尚未超越人類的視覺基準：2022 年最高的 Q→AR 分數是 75.60，人類基準則是 85.00。VCR 比 VQA 難，因為系統不只要選對答案，還要選對答案背後的推理。在影片方面，Kinetics-600(91.80%)與 Kinetics-700(84.00%)相差 7.8 個百分點，本章認為這代表 700 類別的資料集仍是個有意義的挑戰。而在人臉辨識上，WILD Photos 是 FRVT 中唯一錯誤率仍高於 1% 的資料集，為 2.97%。" } },
      { q: { en: "Can we compare these improvement numbers to each other?", zh: "這些進步幅度可以互相比較嗎？" },
        a: { en: "No, and the chapter says so in a footnote. The improvements in the saturation analysis are reported as relative change, and each benchmark has different parameters — so the chart should not be used to compare improvements across benchmarks. The same caution applies more widely in this chapter: MLPerf ranks on absolute wall clock time, FID scores are better when lower, VoxCeleb is scored on equal error rate, Procgen on a min-max normalised score. Reading any one of them as “how much better AI got” is a category error.",
             zh: "不行，本章在註腳裡就講明了。飽和分析中的進步幅度是以相對變化呈現，而每個基準的參數各不相同 — 所以那張圖不應拿來跨基準比較進步幅度。同樣的提醒在本章其他地方也適用：MLPerf 比的是絕對牆鐘時間，FID 分數愈低愈好，VoxCeleb 用等錯誤率計分，Procgen 用最小最大正規化分數。把其中任何一個直接讀成「AI 進步了多少」，都是搞錯了範疇。" } }
    ]
  },

  /* -------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In Its Words", zh: "報告原文" },
    title:    { en: "The chapter in its own words", zh: "用本章自己的話說" },
    subtitle: { en: "Five lines from the Chapter Highlights and the section text of Chapter 2 · Technical Performance.",
                zh: "五句話，取自第 2 章「技術表現」的重點摘要與內文。" },
    quotes: [
      { text: { en: "AI continued to post state-of-the-art results, but year-over-year improvement on many benchmarks continues to be marginal. Moreover, the speed at which benchmark saturation is being reached is increasing.",
                zh: "AI 持續刷新最先進成績，但許多基準的年度進步幅度依然微小。而且，基準達到飽和的速度還在加快。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "2022 saw the release of text-to-image models like DALL-E 2 and Stable Diffusion, text-to-video systems like Make-A-Video, and chatbots like ChatGPT. Still, these systems can be prone to hallucination, confidently outputting incoherent or untrue responses, making it hard to rely on them for critical applications.",
                zh: "2022 年出現了 DALL-E 2、Stable Diffusion 這類文字轉圖像模型，Make-A-Video 這類文字轉影片系統，以及 ChatGPT 這類聊天機器人。然而，這些系統仍容易產生幻覺，會信心十足地輸出不連貫或不真實的回應，使人難以在關鍵應用中倚賴它們。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "Compared to humans, the large language models performed much worse, suggesting that while they are capable, they lack human reasoning capabilities.",
                zh: "與人類相比，這些大型語言模型表現差得多，顯示它們雖然有能力，卻不具備人類的推理能力。" },
        by: "Chapter 2 · 2.4 Language" },
      { text: { en: "AI models are starting to rapidly accelerate scientific progress and in 2022 were used to aid hydrogen fusion, improve the efficiency of matrix manipulation, and generate new antibodies.",
                zh: "AI 模型正開始快速加速科學進展，2022 年就被用來協助氫融合、提升矩陣運算效率，以及生成新的抗體。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "Nvidia used an AI reinforcement learning agent to improve the design of the chips that power AI systems. Similarly, Google recently used one of its language models, PaLM, to suggest ways to improve the very same model. Self-improving AI learning will accelerate AI progress.",
                zh: "Nvidia 用 AI 強化學習代理改良了驅動 AI 系統的晶片設計。同樣地，Google 近期也用自家的語言模型 PaLM，來提出改進同一個模型的方法。會自我改進的 AI 學習，將加速 AI 的進展。" },
        by: "Chapter 2 · Chapter Highlights" }
    ]
  },

  /* ----------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 2 in full", zh: "閱讀第 2 章原文" },
    text:  { en: "Chapter 2 (sections 2.1–2.9) — the 2022 timeline, computer vision for images and video, language, speech, reinforcement learning, hardware, environment and AI for science — with every figure and citation is free from Stanford HAI.",
             zh: "第 2 章(2.1–2.9 各節) — 2022 年時間軸、影像與影片電腦視覺、語言、語音、強化學習、硬體、環境與 AI 做科學 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2023-ai-index-report",
             label: { en: "Open the AI Index 2023 →", zh: "開啟 AI 指數 2023 →" } }
  }
];

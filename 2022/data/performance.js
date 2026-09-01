/* =========================================================================
   Technical Performance — deep dive · performance.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2022, Chapter 2
   https://hai.stanford.edu/ai-index/2022-ai-index-report

   The fifth edition of the AI Index; the year under the microscope is 2021.
   Every figure on this page comes from Chapter 2: 2.1 Computer Vision—Image,
   2.2 Computer Vision—Video, 2.3 Language, 2.4 Speech, 2.5 Recommendation,
   2.6 Reinforcement Learning, 2.7 Hardware and 2.8 Robotics, plus the
   chapter highlights. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "performance";

window.SITE_META = {
  title:    { en: "AI Index Report 2022", zh: "AI 指數報告 2022" },
  subtitle: { en: "Technical Performance · a chapter deep dive", zh: "技術表現專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The best scores of 2021 all came with the same asterisk — extra training data",
                zh: "2021 年最好的成績都帶著同一個星號：額外的訓練資料" },
    subtitle: { en: "Chapter 2 of the AI Index 2022 measures technical progress across vision, language, speech, recommendation, reinforcement learning, hardware and robotics. The story of the year is not one breakthrough but a pattern: 9 of the 10 benchmarks tracked here had a 2021 state of the art that was pretrained on extra data, which quietly hands the advantage to whoever owns the largest datasets. Meanwhile training got radically cheaper and reinforcement learning started to generalize. The numbers:",
                zh: "AI 指數 2022 第 2 章橫跨視覺、語言、語音、推薦、強化學習、硬體與機器人，量的是 2021 年的技術進展。這一年的重點不是某個突破，而是一個模式：本章追蹤的 10 個基準裡，有 9 個的 2021 年最佳系統都靠額外資料預訓練 — 這等於把優勢悄悄交給手握最大資料集的人。同時，訓練成本大幅下降，強化學習也開始走向泛化。先看數字：" },
    stats: [
      { label: { en: "of the 10 benchmarks in this chapter whose 2021 state of the art used extra training data", zh: "本章 10 個基準中，2021 年最佳系統使用額外訓練資料的個數" }, value: 9 },
      { label: { en: "percentage points humans still lead AI by on aNLI (9 points in 2019)", zh: "人類在 aNLI 上仍領先 AI 的百分點(2019 年為 9 分)" }, value: 1 },
      { label: { en: "% improvement on Procgen, a general reinforcement learning benchmark, over its 2019 baseline", zh: "% 通用強化學習基準 Procgen 相對 2019 年基準線的進步幅度" }, value: 128.6 },
      { label: { en: "% by which the top chess engine now exceeds Magnus Carlsen’s peak 2,882 Elo", zh: "% 最強西洋棋引擎超越 Magnus Carlsen 生涯最高 2,882 Elo 的幅度" }, value: 24.3 },
      { label: { en: "dollars to train an ImageNet classifier to 93% accuracy in 2021 ($1,112.6 in 2017)", zh: "2021 年把 ImageNet 分類器訓練到 93% 準確率的成本(美元；2017 年為 1,112.6)" }, value: 4.59 },
      { label: { en: "dollar median price of a robotic arm in 2021 ($42,000 in 2017)", zh: "2021 年機器手臂的中位價格(美元；2017 年為 42,000)" }, value: 22600 }
    ]
  },

  /* ------------------------------------------------ HIGHLIGHT: EXTRA DATA */
  {
    type: "prose",
    id: "extra-data",
    nav:      { en: "Extra data", zh: "額外訓練資料" },
    title:    { en: "Data, data, data — nine of ten leaderboards now run on it",
                zh: "資料、資料、資料 — 十個排行榜裡有九個靠它" },
    subtitle: { en: "The chapter’s own first highlight is one word repeated three times. Across the ten benchmarks tracked here, nine of the 2021 state-of-the-art systems were pretrained on data beyond the benchmark’s own training set — a trend the AI Index says implicitly favors private sector actors with access to vast datasets.",
                zh: "本章第一條重點，是同一個詞連講三次。在這裡追蹤的十個基準中，2021 年有九個的最佳系統都在基準本身的訓練集之外額外預訓練過 — AI 指數直言，這個趨勢等於偏袒握有龐大資料集的私部門。" },
    blocks: [
      { type: "p",
        text: { en: "That matters because it changes what a leaderboard measures. A score that depends on pretraining is partly a measurement of who could assemble the pretraining corpus, not only of who designed the better architecture. The chapter makes the point mostly by showing the two lines side by side: on almost every benchmark it plots, there is now a “with extra training data” curve sitting above a “without extra training data” one.",
                zh: "這件事之所以重要，是因為它改變了排行榜量的東西。一個依賴預訓練的分數，有一部分量的是誰湊得出那批預訓練語料，而不只是誰的架構設計得好。本章多半用兩條線並排來說明：在它畫出的幾乎每一個基準上，「有額外訓練資料」的曲線都壓在「沒有額外訓練資料」的曲線上面。" } },
      { type: "h3",
        text: { en: "What the extra data buys", zh: "額外資料買到了什麼" } },
      { type: "ul",
        items: {
          en: ["ImageNet top-1 accuracy: 90.88% with extra training data against 87.80% without.",
               "COCO object detection: 79.50% mean average precision with extra data against 77.10% without.",
               "Cityscapes pixel-level semantic labeling: 86.20% mean IoU with extra data against 84.30% without.",
               "WMT 2014 translation: 46.40 BLEU on English-French and 35.14 on English-German with extra data, against 43.95 and 31.26 without.",
               "LibriSpeech Test Clean: a 1.4% word error rate with extra data against 1.7% without — for every 100 words heard, the top model transcribes 99 correctly."],
          zh: ["ImageNet top-1 準確率：有額外訓練資料 90.88%，沒有則是 87.80%。",
               "COCO 物件偵測：有額外資料的平均精度為 79.50%，沒有則是 77.10%。",
               "Cityscapes 像素級語意標註：有額外資料的平均 IoU 為 86.20%，沒有則是 84.30%。",
               "WMT 2014 翻譯：有額外資料時英法 46.40 BLEU、英德 35.14，沒有則分別是 43.95 與 31.26。",
               "LibriSpeech Test Clean：有額外資料的字錯率為 1.4%，沒有則是 1.7% — 每聽 100 個字，最強的模型可以正確轉寫 99 個。"]
        } },
      { type: "h3",
        text: { en: "The one place it does not help", zh: "唯一沒幫上忙的地方" } },
      { type: "p",
        text: { en: "Text summarization on arXiv is the exception in the chapter: the leading ROUGE-1 score without extra training data, 47.15, sits slightly above the 46.74 achieved with it. Over the five years since benchmarking on arXiv began, summarization models have improved 47.1% — and the curve is visibly flattening. PubMed tells the same story from the other side: 48.25 with extra data against 47.81 without, a 34.6% improvement since 2017 whose pace has slowed. The 2021 leader there was HAT, a hierarchical attention transformer from Birch AI and the University of Washington.",
                zh: "arXiv 文本摘要是本章的例外：沒有額外訓練資料的最佳 ROUGE-1 為 47.15，反而略高於有額外資料的 46.74。自 arXiv 開始被當作基準以來的五年間，摘要模型進步了 47.1% — 而曲線已經明顯趨緩。PubMed 從另一側講同一件事：有額外資料 48.25、沒有 47.81，自 2017 年以來進步 34.6%，但速度同樣放慢了。2021 年的榜首是 HAT，一個由 Birch AI 與華盛頓大學提出的階層式注意力 transformer。" } }
    ]
  },

  /* --------------------------------------------------- AI VS HUMAN CHART */
  {
    type: "bars",
    id: "human-gap",
    nav:      { en: "Vs human baselines", zh: "對上人類" },
    title:    { en: "2021’s best scores, on the five benchmarks that publish a human baseline",
                zh: "五個有公布人類基準的測驗上，2021 年的最佳分數" },
    subtitle: { en: "Top score reported in 2021. The human baselines, in the same order, are 89.8, 91.2, 92.9, 80.8 and 85.0 — AI is 1 to 5 points clear on straightforward reading comprehension, and still behind everywhere the task also demands abduction or commonsense reasoning.",
                zh: "2021 年回報的最高分。人類基準依同樣順序為 89.8、91.2、92.9、80.8 與 85.0 — 在單純的閱讀理解上 AI 領先 1 到 5 分，但只要任務同時要求溯因或常識推理，AI 依然落後。" },
    series: [
      { label: { en: "SuperGLUE", zh: "SuperGLUE" }, value: 91 },
      { label: { en: "SQuAD 1.1", zh: "SQuAD 1.1" }, value: 95.72 },
      { label: { en: "aNLI", zh: "aNLI" },           value: 91.87 },
      { label: { en: "VQA", zh: "VQA" },             value: 79.78 },
      { label: { en: "VCR", zh: "VCR" },             value: 72 }
    ]
  },

  /* -------------------------------------------- 2.3 LANGUAGE / 2.4 SPEECH */
  {
    type: "prose",
    id: "language",
    nav:      { en: "2.3–2.4 Language", zh: "語言與語音" },
    title:    { en: "2.3–2.4 — Reading comprehension is finished; reasoning about what was read is not",
                zh: "2.3–2.4 — 閱讀理解已經結束，對讀到的東西進行推理還沒" },
    subtitle: { en: "AI now beats the human baseline on SuperGLUE and both SQuAD sets by 1% to 5%. Put a logical or abductive step in front of the same passage and the ranking flips back.",
                zh: "AI 在 SuperGLUE 與兩組 SQuAD 上都已超越人類基準 1% 到 5%。但只要在同一段文字前面加上一道邏輯或溯因的步驟，排序就會反轉回來。" },
    blocks: [
      { type: "h3",
        text: { en: "English language understanding", zh: "英語理解" } },
      { type: "ul",
        items: {
          en: ["SuperGLUE was released in May 2019 because systems had begun saturating GLUE. It is already topped out: the SS-MoE model scores 91.0 against the 89.8 human score set by the benchmark’s own developers. The chapter’s reading is that a harder suite is needed again, and needed soon.",
               "SQuAD — 107,785 question-and-answer pairs drawn from 536 Wikipedia articles — stands at 95.72 F1 on version 1.1 and 93.21 on version 2.0, above human baselines of 91.20 and 89.50. Both are marginal gains on the previous year: 0.4% and 0.2%.",
               "ReClor, built from LSAT logical-reasoning questions, is where the plateau breaks. The best model answers 91.82% of the easy set and 69.29% of the hard set — a 22.5-point drop for the same reading task with a reasoning requirement attached.",
               "aNLI, the Allen Institute’s 170,000-pair abductive inference benchmark, sits at 91.87% against a human baseline of 92.90%. AI has gained 7.7 points since 2019, and the human lead has fallen from 9 points to roughly 1.",
               "The easier language tasks are done. SNLI, around 600,000 labeled sentence pairs, was topped in April 2021 by Facebook AI’s EFL at 93.10%. On SemEval 2014 sentiment — 7,686 restaurant and laptop reviews — the state of the art is 88.64%, up from correct estimates 7 times in 10 in 2016 to 9 in 10 now."],
          zh: ["SuperGLUE 於 2019 年 5 月推出，因為當時的系統已經快把 GLUE 做滿。如今它自己也到頂了：SS-MoE 拿下 91.0，高於基準開發者自己給出的人類分數 89.8。本章的判讀是，更難的一套題目又該出現了，而且要快。",
               "SQuAD 取自 536 篇維基百科文章、共 107,785 組問答，如今 1.1 版的 F1 為 95.72、2.0 版為 93.21，雙雙高於 91.20 與 89.50 的人類基準。但兩者相對前一年都只是微幅進步：0.4% 與 0.2%。",
               "取材自 LSAT 邏輯推理題的 ReClor，就是停滯被打破的地方。最佳模型在簡單題組答對 91.82%，困難題組只有 69.29% — 同樣是閱讀，只要加上推理要求就掉了 22.5 分。",
               "艾倫人工智慧研究所的溯因推理基準 aNLI 共 170,000 組前提與假設，目前為 91.87%，人類基準是 92.90%。AI 自 2019 年以來進步 7.7 分，人類的領先則從 9 分縮到大約 1 分。",
               "比較簡單的語言任務已經收工。約 60 萬組標註句對的 SNLI 在 2021 年 4 月被 Facebook AI 的 EFL 以 93.10% 拿下。在取自 7,686 則餐廳與筆電評論的 SemEval 2014 情感分析上，最佳成績為 88.64%：2016 年是十次猜對七次，現在是十次對九次。"]
        } },
      { type: "h3",
        text: { en: "Translation and speech", zh: "翻譯與語音" } },
      { type: "ul",
        items: {
          en: ["On WMT 2014 the best BLEU scores are 46.40 for English-French and 35.14 for English-German. Since submissions began that is a 23.7% improvement on the French pair and 68.1% on the German one — the harder pair is closing fast, but absolute translation quality remains meaningfully higher on French.",
               "Access is widening as well. The number of commercial machine translation services has risen nearly fivefold since 2017, and 2021 added three open-source ones: M2M-100, mBART and OPUS.",
               "Speech recognition has effectively plateaued on its main benchmark. No new state of the art was set on LibriSpeech Test Clean in 2021 because the top system was already at a 1.4% word error rate. On the noisier Test Other set, W2V-BERT — an MIT and Google Brain collaboration — posted 2.0%.",
               "Speaker recognition improved faster. On VoxCeleb, systems that reported an equal error rate of 7.8% in 2017 now report 0.42%."],
          zh: ["在 WMT 2014 上，最佳 BLEU 為英法 46.40、英德 35.14。自開始收件以來，英法進步 23.7%、英德進步 68.1% — 較難的德語對正在快速追上，但絕對翻譯品質仍是法語明顯較高。",
               "取得管道也變寬了。商用機器翻譯服務數量自 2017 年以來成長近五倍，2021 年還多了三個開源服務：M2M-100、mBART 與 OPUS。",
               "語音辨識在主要基準上實質已經持平。2021 年 LibriSpeech Test Clean 沒有出現新的最佳成績，因為既有系統的字錯率已經只有 1.4%。在雜訊較多的 Test Other 上，MIT 與 Google Brain 合作的 W2V-BERT 拿下 2.0%。",
               "語者辨識進步得更快。在 VoxCeleb 上，2017 年還是 7.8% 等錯誤率的系統，如今回報 0.42%。"]
        } }
    ]
  },

  /* ---------------------------------------------- 2.1–2.2 COMPUTER VISION */
  {
    type: "prose",
    id: "vision",
    nav:      { en: "2.1–2.2 Vision", zh: "影像與影片" },
    title:    { en: "2.1–2.2 — Vision is running out of headroom, so research moved sideways",
                zh: "2.1–2.2 — 視覺快沒有空間了，於是研究往旁邊移動" },
    subtitle: { en: "Image classification, pose estimation and polyp segmentation are all within a point or two of their ceilings. The interesting movement in 2021 was not upward but sideways — into narrower, more clinical, more deployable subtasks.",
                zh: "影像分類、姿態估計與息肉切割，都離各自的上限只剩一兩分。2021 年真正的移動不是向上，而是橫向 — 移往更窄、更臨床、更能落地的子任務。" },
    blocks: [
      { type: "h3",
        text: { en: "Images", zh: "影像" } },
      { type: "ul",
        items: {
          en: ["ImageNet top-1 accuracy is 90.88%: in late 2021 the leading system makes on average one error every ten attempts, against four in ten in late 2012. Top-5 accuracy is 99.02%, far past the 94.90% human baseline, and Microsoft’s Florence-CoSwin-H reached 99.0% in November 2021. The chapter is blunt about what follows — if a system is right 98 or 99 times in 100, there is only so much higher it can go.",
               "Image generation is measured by Fréchet Inception Distance, where zero would mean the generated images are identical to the real ones. The 2021 state of the art is 7.71 on STL-10, from KAIST and the University of Seoul, and 2.10 on the lower-resolution CIFAR-10, from NVIDIA.",
               "Deepfake detection kept pace with deepfake generation. Averaged across the four FaceForensics++ datasets, accuracy rose from 69.9% in 2012 to 97.7% in 2021. Celeb-DF — 590 celebrity videos turned into 5,639 deepfakes — is about 20 points harder, with a top AUC of 76.88.",
               "Pose estimation is saturating. The best model gets 99.50% of keypoints right on Leeds Sports Poses, out of a possible 100.0%. In three dimensions, average per-joint error on Human3.6M fell from 16 centimeters in 2014 — half a school ruler — to 1.9 centimeters in 2021, less than a paper clip.",
               "Face recognition: in 2017 some leading FRVT algorithms had error rates above 50.0% on certain tests; by 2021 none exceeded 3.0%, and the best result across all datasets, on visa photos, errs once in a thousand faces. Masks still cost accuracy — a false non-match rate of 0.014 masked against 0.002 unmasked — but that gap has narrowed since 2019, and the new MLFW dataset of 6,000 masked faces, from the Beijing University of Posts and Telecommunications, puts the penalty at 5 to 16 points. 18 of 24 US government agencies already use some kind of facial recognition technology.",
               "Visual reasoning is the exception in this section. On the VQA challenge the top score is 79.78%, still short of the 80.80% human baseline, though up 24.4 points from 55.4% in 2015."],
          zh: ["ImageNet top-1 準確率為 90.88%：2021 年底，領先系統平均每十次判斷錯一次，2012 年底則是每十次錯四次。Top-5 準確率為 99.02%，遠超過 94.90% 的人類基準，微軟的 Florence-CoSwin-H 在 2021 年 11 月達到 99.0%。本章對接下來會怎樣講得很直白 — 一套系統一百次對九十八、九十九次，能再往上的空間就是那麼多。",
               "影像生成用 Fréchet Inception Distance 衡量，分數為零代表生成影像與真實影像完全相同。2021 年的最佳成績是 STL-10 上的 7.71(韓國科學技術院與首爾市立大學)，以及解析度較低的 CIFAR-10 上的 2.10(NVIDIA)。",
               "深偽偵測跟上了深偽生成。以 FaceForensics++ 四個資料集平均計算，準確率從 2012 年的 69.9% 升到 2021 年的 97.7%。由 590 支名人影片改造出 5,639 支深偽影片的 Celeb-DF 難上大約 20 分，最佳 AUC 為 76.88。",
               "姿態估計正在飽和。最佳模型在 Leeds Sports Poses 上答對 99.50% 的關鍵點，滿分是 100.0%。在三維的 Human3.6M 上，平均每關節誤差從 2014 年的 16 公分(半把學生尺)降到 2021 年的 1.9 公分，比一個迴紋針還小。",
               "人臉辨識方面，2017 年部分領先演算法在某些 FRVT 測試上的錯誤率超過 50.0%；到 2021 年沒有任何一個超過 3.0%，跨所有資料集表現最好的簽證照片項目，每一千張臉只錯一張。戴口罩仍會付出代價 — 錯誤不匹配率戴口罩 0.014、不戴 0.002 — 但差距自 2019 年起已縮小；北京郵電大學新釋出的 6,000 張遮罩人臉資料集 MLFW 則把代價估在 5 到 16 個百分點。美國 24 個聯邦機關中，已有 18 個在使用某種人臉辨識技術。",
               "視覺推理是這一節的例外。在 VQA 挑戰上最高分為 79.78%，仍不及 80.80% 的人類基準，不過相對 2015 年的 55.4% 已進步 24.4 分。"]
        } },
      { type: "h3",
        text: { en: "Video", zh: "影片" } },
      { type: "ul",
        items: {
          en: ["One model now tops all three Kinetics activity-recognition datasets: MTV, from Google Research, Michigan State University and Brown University, released in January 2022, at 89.1% on the 400 series, 89.6% on the 600 and 82.20% on the 700. More striking is the convergence — the gap between the easiest and hardest set fell from 27.14 points in 2020 to 7.4 in 2021, meaning the harder dataset is improving faster than the easier one.",
               "On COCO object detection, GLIP reaches 79.50% mean average precision, 23.8 points better than in 2016.",
               "YOLO, which deliberately trades accuracy for inference speed, reached 72.40% — 28.4 points better than 2017 — and its gap to the outright best detector narrowed from 11.7% to 7.1%. Detectors got faster and better at the same time.",
               "Temporal action localization on ActivityNet, which requires finding when an activity happens as well as what it is, stands at 44.67% from HUST-Alibaba: 26.9 points above 2016, with the annual gains shrinking every year.",
               "Visual Commonsense Reasoning — 290,000 multiple-choice questions from 110,000 movie scenarios, where a system must pick the answer and the rationale behind it — is the widest human-AI gap in the chapter. The best mark is 72.0 against an 85.0 human baseline, a 63.6% rise since 2018 that is now yielding increasingly marginal improvements."],
          zh: ["現在有單一模型同時稱霸三個 Kinetics 動作辨識資料集：Google Research、密西根州立大學與布朗大學於 2022 年 1 月釋出的 MTV，在 400 系列拿下 89.1%、600 系列 89.6%、700 系列 82.20%。更值得注意的是收斂 — 最簡單與最難資料集之間的差距，從 2020 年的 27.14 分降到 2021 年的 7.4 分，代表較難的資料集進步得比較快。",
               "在 COCO 物件偵測上，GLIP 的平均精度達 79.50%，比 2016 年高出 23.8 分。",
               "刻意用準確率換推論速度的 YOLO 來到 72.40%，比 2017 年高 28.4 分，與最強偵測器的差距也從 11.7% 縮到 7.1%。偵測器同時變得又快又準。",
               "ActivityNet 的時序動作定位要求同時判斷「何時發生」與「是什麼」，目前由 HUST-Alibaba 以 44.67% 領先，比 2016 年高 26.9 分，但每年的增幅都在縮小。",
               "視覺常識推理是本章人機差距最大的項目 — 它取自 110,000 個電影情境、共 290,000 組選擇題，系統不只要選出答案，還要選出理由。最佳成績為 72.0，人類基準是 85.0；自 2018 年以來進步 63.6%，但改善幅度已愈來愈小。"]
        } }
    ]
  },

  /* ------------------------------------------------ RESEARCH INTEREST CHART */
  {
    type: "bars",
    id: "research-shift",
    nav:      { en: "Research shift", zh: "研究興趣" },
    title:    { en: "One narrow medical benchmark, three years of attention",
                zh: "一個很窄的醫療基準，三年之間的注意力變化" },
    subtitle: { en: "Academic papers testing systems against Kvasir-SEG, a dataset of 1,000 gastrointestinal polyp images segmented by doctors. The chapter reads the jump as evidence that AI research is moving toward work with direct, real-world applications.",
                zh: "以 Kvasir-SEG 為測試對象的學術論文數 — 那是一組由醫師手動切割的 1,000 張腸胃道息肉影像。本章把這個跳升讀為一個證據：AI 研究正在轉向有直接、真實應用的題目。" },
    series: [
      { label: { en: "Before 2020", zh: "2020 年前" }, value: 3 },
      { label: { en: "2020", zh: "2020 年" },          value: 6 },
      { label: { en: "2021", zh: "2021 年" },          value: 25 }
    ]
  },

  /* -------------------------------------- 2.5–2.8 DEPLOYMENT ECONOMICS */
  {
    type: "prose",
    id: "economics",
    nav:      { en: "2.5–2.8 Economics", zh: "成本與機器人" },
    title:    { en: "2.5–2.8 — Broader agents, cheaper training, more affordable arms",
                zh: "2.5–2.8 — 代理更泛化、訓練更便宜、手臂更買得起" },
    subtitle: { en: "The back half of the chapter is about deployment economics: how general an agent has become, what it costs to train a system, how long that takes, and what a lab has to pay to put a robot arm on a bench.",
                zh: "本章的後半講的是部署經濟學：一個代理變得多泛化、訓練一套系統要多少錢、要花多久，以及一間實驗室要付多少錢，才能在桌上擺一支機器手臂。" },
    blocks: [
      { type: "h3",
        text: { en: "From narrow skill toward general skill", zh: "從窄技能走向通用技能" } },
      { type: "ul",
        items: {
          en: ["On Atari-57, DeepMind’s MuZero set the state of the art in late 2019 by performing 48.3% better than the previous best. In 2021 GDI-H3, from Tsinghua University and ByteDance, surpassed and nearly doubled it — using 200 million training frames against MuZero’s 20 billion. Twice as effective, and a hundred times more efficient.",
               "Procgen is the test that matters for generality: 16 procedurally generated environments introduced by OpenAI in 2019 specifically to punish systems that had learned one narrow skill. MuZero posted 0.6 in November 2021, a 128.6% improvement over the 2019 baseline.",
               "Chess is the opposite case — a single narrow skill, tracked for decades. The top engine now sits at 3,581 Elo, 24.3% above Magnus Carlsen’s 2,882, the highest human rating ever documented, recorded in 2014.",
               "Recommendation barely moved. The best MovieLens 20M result is an nDCG of 0.448, 5.2% better than 2018, and the best Criteo click-through AUC is 0.813, 1.8% above the 2016 leader. The chapter adds a caveat worth keeping: most recommendation research happens inside companies with every incentive to keep it proprietary, so these academic measures may not reflect the real state of the art."],
          zh: ["在 Atari-57 上，DeepMind 的 MuZero 在 2019 年底以勝過前一名 48.3% 的成績刷新紀錄。2021 年，清華大學與位元組跳動的 GDI-H3 不只超越，還幾乎翻倍 — 而且只用了 2 億個訓練影格，MuZero 用的是 200 億個。效果兩倍，效率一百倍。",
               "真正檢驗泛化的是 Procgen：OpenAI 在 2019 年推出的 16 個程序生成環境，設計目的就是懲罰只學會一項窄技能的系統。MuZero 在 2021 年 11 月拿下 0.6，相對 2019 年的基準線進步 128.6%。",
               "西洋棋則是相反的案例 — 一項被追蹤數十年的窄技能。最強引擎目前是 3,581 Elo，比 Magnus Carlsen 在 2014 年寫下、也是人類有紀錄以來最高的 2,882 高出 24.3%。",
               "推薦系統幾乎沒動。MovieLens 20M 的最佳 nDCG 為 0.448，比 2018 年好 5.2%；Criteo 點擊率預測的最佳 AUC 為 0.813，比 2016 年的榜首高 1.8%。本章另外補了一句值得記住的話：多數推薦研究發生在企業內部，而企業完全有動機不公開，因此這些學術指標未必反映真正的技術前沿。"]
        } },
      { type: "h3",
        text: { en: "Training got cheap", zh: "訓練變便宜了" } },
      { type: "ul",
        items: {
          en: ["MLPerf image classification training time fell from 6.2 minutes in 2018 to 0.2 minutes — 13.8 seconds — in 2021, roughly a 27-fold improvement. Recommendation, light-weight object detection, image classification and language processing can all now be trained to baseline performance in under a minute.",
               "Training an ImageNet classifier to 93% accuracy cost $1,112.6 in 2017 and $4.59 in 2021: a factor of 223 in four years. Measured from 2018, when the MLPerf competitions began, cost is down 63.6% and training times have improved 94.4%.",
               "That speed is bought with hardware, and the hardware is concentrating. The maximum number of accelerators used rose roughly sevenfold since 2018, to 4,320, while the mean across all entrants rose 3.5 times, to 337. The top system averaged 1,785 accelerators — and the gap between the top systems and the field was nine times larger at the end of 2021 than it had been in 2018."],
          zh: ["MLPerf 影像分類的訓練時間，從 2018 年的 6.2 分鐘降到 2021 年的 0.2 分鐘，也就是 13.8 秒，約進步 27 倍。推薦、輕量物件偵測、影像分類與語言處理，如今都能在一分鐘內訓練到基準水準。",
               "把 ImageNet 分類器訓練到 93% 準確率，2017 年要 1,112.6 美元，2021 年只要 4.59 美元：四年之間差了 223 倍。若從 MLPerf 競賽開始的 2018 年起算，成本下降 63.6%，訓練時間改善 94.4%。",
               "這個速度是用硬體換來的，而硬體正在集中。使用的加速器數量上限自 2018 年以來成長約七倍，達到 4,320 顆；所有參賽者的平均值成長 3.5 倍，來到 337 顆。最強系統平均用掉 1,785 顆 — 而頂尖系統與整體平均之間的落差，2021 年底比 2018 年大了九倍。"]
        } },
      { type: "h3",
        text: { en: "Robot arms got cheaper", zh: "機器手臂變便宜了" } },
      { type: "p",
        text: { en: "New this edition, the AI Index ran its own survey of robotics professors at top-ranked universities and in emerging economies: 101 professors and researchers from more than 40 universities, covering 117 robotic arm purchases between 2016 and 2022. The median price fell 46.2% in five years, from $42,000 per arm in 2017 to roughly $22,600 in 2021 — robotics research is becoming materially more accessible. Asked which AI skills they employ, 67.0% of respondents reported deep learning and 46.0% reinforcement learning.",
                zh: "本版新增的是 AI 指數自行執行的調查，對象是頂尖大學與新興經濟體的機器人學教授：來自 40 多所大學的 101 位教授與研究者，涵蓋 2016 至 2022 年間的 117 筆機器手臂採購。中位價格五年內下降 46.2%，從 2017 年每支 42,000 美元降到 2021 年約 22,600 美元 — 機器人研究實質上變得更容易進入。被問到使用哪些 AI 技術時，67.0% 的受訪者回答深度學習，46.0% 回答強化學習。" } }
    ]
  },

  /* --------------------------------------------------- MLPERF TIME CHART */
  {
    type: "bars",
    id: "training-time",
    nav:      { en: "Training time", zh: "訓練時間" },
    title:    { en: "How long the fastest system takes to train, by task",
                zh: "最快的系統各花多久訓練完一項任務" },
    subtitle: { en: "Wall-clock training time in minutes for the top MLPerf system in 2021; object detection here is the heavy-weight variant, the light-weight one finishes in 0.34. Reinforcement learning is the outlier — the one category where no faster time was registered in either 2020 or 2021.",
                zh: "2021 年 MLPerf 最佳系統的實際訓練時間(分鐘)；此處的物件偵測是重量級版本，輕量級版本只要 0.34 分鐘。強化學習是異數 — 它是唯一在 2020 與 2021 年都沒有刷新紀錄的類別。" },
    series: [
      { label: { en: "RL", zh: "強化學習" },        value: 13.57 },
      { label: { en: "Detection", zh: "物件偵測" },  value: 3.24 },
      { label: { en: "Speech", zh: "語音辨識" },     value: 2.38 },
      { label: { en: "Segmentation", zh: "影像切割" }, value: 1.26 },
      { label: { en: "Image class.", zh: "影像分類" }, value: 0.23 }
    ]
  },

  /* -------------------------------------------------------------- CARDS */
  {
    type: "cards",
    id: "top-systems",
    nav:      { en: "Top systems", zh: "年度系統" },
    title:    { en: "Who held a record at the end of 2021",
                zh: "2021 年底，紀錄在誰手上" },
    subtitle: { en: "Six systems that ended the year holding a state of the art — and what each result actually demonstrates.",
                zh: "六套在年底時仍握有最佳成績的系統，以及每個成績真正證明了什麼。" },
    items: [
      { slug: "gdi-h3",
        title:   { en: "GDI-H3 · Atari-57", zh: "GDI-H3 · Atari-57" },
        summary: { en: "Nearly doubled MuZero’s score on the 57-game Atari suite while using a hundredth of the training frames.",
                   zh: "在 57 款 Atari 遊戲的測試組上幾乎把 MuZero 的分數翻倍，用掉的訓練影格卻只有百分之一。" },
        tags: ["reinforcement", "efficiency"],
        overview: { en: "Released in 2021 by researchers from Tsinghua University and ByteDance. MuZero had held the Atari-57 record since late 2019, when it beat the previous best by 48.3% and simultaneously set a world record on Go. GDI-H3 surpassed and nearly doubled that score using 200 million training frames against MuZero’s 20 billion. The chapter treats the efficiency, not the score, as the meaningful result: models that are both high performing and highly efficient are what make reinforcement learning commercially deployable.",
                   zh: "由清華大學與位元組跳動的研究者於 2021 年推出。Atari-57 的紀錄自 2019 年底起由 MuZero 保持，當時它勝過前一名 48.3%，同時還在圍棋上創下世界紀錄。GDI-H3 超越並幾乎翻倍那個分數，用的是 2 億個訓練影格，MuZero 則用了 200 億個。本章看重的不是分數而是效率：唯有同時高效能又高效率的模型，強化學習才可能真正商用。" } },

      { slug: "ss-moe",
        title:   { en: "SS-MoE · SuperGLUE", zh: "SS-MoE · SuperGLUE" },
        summary: { en: "Scores 91.0 on the benchmark built in 2019 to be hard — 1.2 points above the human score its own designers set.",
                   zh: "在 2019 年為了「夠難」而打造的基準上拿到 91.0，比設計者自己訂的人類分數高出 1.2 分。" },
        tags: ["language", "benchmarks"],
        overview: { en: "SuperGLUE averages performance across eight tasks, from yes/no questions to causal reasoning and commonsense reading comprehension. It was created in May 2019 only because AI systems had begun saturating its predecessor, GLUE. Two and a half years later it is saturated too: SS-MoE tops the leaderboard at 91.0 against the 89.8 human performance score given by the benchmark’s own developers. The chapter draws the obvious conclusion — progress arrived so fast that researchers will need a materially more complex suite of language tasks to challenge the next generation of systems.",
                   zh: "SuperGLUE 把八項任務的表現平均成單一分數，從是非題到因果推理與常識閱讀理解都有。它在 2019 年 5 月誕生的唯一理由，是當時的系統已經快把前身 GLUE 做滿。兩年半之後，它自己也滿了：SS-MoE 以 91.0 居首，而基準開發者給出的人類表現分數是 89.8。本章的結論很直接 — 進展來得太快，研究者得再設計一套明顯更複雜的語言任務，才擋得住下一代系統。" } },

      { slug: "msrf-net",
        title:   { en: "MSRF-Net · medical segmentation", zh: "MSRF-Net · 醫療影像切割" },
        summary: { en: "Segments colonoscopy polyps at 94.20% on CVC-ClinicDB and 92.17% on Kvasir-SEG — the year’s clearest case of AI moving toward the clinic.",
                   zh: "在 CVC-ClinicDB 上以 94.20%、Kvasir-SEG 上以 92.17% 切割大腸鏡息肉 — 這是這一年 AI 走向臨床最明確的例子。" },
        tags: ["vision", "medicine"],
        overview: { en: "One of the first convolutional neural networks designed specifically for medical image segmentation, it tops both polyp datasets at once. The CVC-ClinicDB result — 600-plus high-resolution images from 31 colonoscopies — is 11.9 percentage points better than 2015 and 1.8 above 2020. The surrounding shift matters as much as the score: Kvasir-SEG was referenced in three academic papers before 2020, six in 2020 and 25 in 2021, and 2021 also brought the first Kidney and Kidney Tumor Segmentation Challenge.",
                   zh: "它是最早專為醫療影像切割設計的卷積神經網路之一，同時在兩組息肉資料集上稱冠。CVC-ClinicDB 取自 31 次大腸鏡檢查的 600 多張高解析影像，這個成績比 2015 年高 11.9 個百分點、比 2020 年高 1.8 分。周邊的轉變和分數一樣重要：Kvasir-SEG 在 2020 年前只被三篇論文引用，2020 年六篇，2021 年跳到 25 篇；2021 年也首次舉辦了腎臟與腎腫瘤切割挑戰賽。" } },

      { slug: "glip",
        title:   { en: "GLIP · COCO object detection", zh: "GLIP · COCO 物件偵測" },
        summary: { en: "79.50% mean average precision on COCO, 23.8 points above 2016 — and a textbook case of the extra-data trend.",
                   zh: "在 COCO 上取得 79.50% 平均精度，比 2016 年高 23.8 分 — 也是額外資料趨勢的教科書案例。" },
        tags: ["vision", "benchmarks"],
        overview: { en: "Grounded Language-Image Pretraining, a model built to learn language-contextual visual representations, came out of a collaboration between UCLA, Microsoft Research, the University of Washington, the University of Wisconsin–Madison, Microsoft Cloud, Microsoft AI and the International Digital Economy Academy. Its 79.50% score is the one recorded with extra training data; without it the best result is 77.10%. COCO itself contains over 328,000 images across more than 80 object categories.",
                   zh: "Grounded Language-Image Pretraining 是一個學習語言脈絡視覺表徵的模型，由加州大學洛杉磯分校、微軟研究院、華盛頓大學、威斯康辛大學麥迪遜分校、Microsoft Cloud、Microsoft AI 與國際數字經濟學院共同完成。79.50% 是使用額外訓練資料的成績，不使用額外資料的最佳成績為 77.10%。COCO 本身收錄超過 328,000 張影像、涵蓋 80 多個物件類別。" } },

      { slug: "mtv",
        title:   { en: "MTV · all three Kinetics sets", zh: "MTV · 三組 Kinetics 全拿" },
        summary: { en: "The first model to top Kinetics-400, 600 and 700 at once, at 89.1%, 89.6% and 82.20%.",
                   zh: "第一個同時稱霸 Kinetics-400、600 與 700 的模型，分別是 89.1%、89.6% 與 82.20%。" },
        tags: ["video"],
        overview: { en: "A collaboration between Google Research, Michigan State University and Brown University, released in January 2022. Each Kinetics dataset holds 650,000 YouTube clips and asks a system to pick one action out of 400, 600 or 700 categories — the 700 series adding classes such as pouring wine, playing the oboe and making latte art. The revealing number is not the top score but the convergence: the gap between performance on the 400 and the 700 series fell from 27.14 percentage points in 2020 to 7.4 in 2021.",
                   zh: "由 Google Research、密西根州立大學與布朗大學合作，2022 年 1 月釋出。每組 Kinetics 都收錄 650,000 段 YouTube 影片，要求系統從 400、600 或 700 個類別中選出正確動作；700 系列新增的類別包括倒酒、吹雙簧管與拉花。真正有意思的數字不是最高分，而是收斂：400 與 700 系列之間的差距，從 2020 年的 27.14 個百分點降到 2021 年的 7.4 分。" } },

      { slug: "w2v-bert",
        title:   { en: "W2V-BERT · LibriSpeech Test Other", zh: "W2V-BERT · LibriSpeech Test Other" },
        summary: { en: "A 2.0% word error rate on the noisy half of LibriSpeech — the clean half saw no new record at all in 2021.",
                   zh: "在 LibriSpeech 較吵的那一半上取得 2.0% 字錯率 — 乾淨的那一半在 2021 年根本沒有新紀錄。" },
        tags: ["speech"],
        overview: { en: "An MIT and Google Brain collaboration. LibriSpeech contains around 1,000 hours of 16 kHz English speech from audiobooks, split into a Test Clean set of higher-quality recordings and a Test Other set of poorer ones. No state of the art was set on Test Clean in 2021, because the top system was already at a 1.4% word error rate — 99 of every 100 words transcribed correctly. Progress on speech recognition, in other words, has largely run out of benchmark to run on.",
                   zh: "由 MIT 與 Google Brain 合作。LibriSpeech 收錄約 1,000 小時、16 kHz 的英語有聲書語音，分成錄音品質較好的 Test Clean 與品質較差的 Test Other。2021 年 Test Clean 沒有出現新的最佳成績，因為既有系統的字錯率已經只有 1.4% — 每 100 個字正確轉寫 99 個。換句話說，語音辨識的進展已經幾乎沒有基準可跑了。" } }
    ]
  },

  /* ------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In Its Words", zh: "報告原文" },
    title:    { en: "The chapter in its own words", zh: "本章自己的說法" },
    subtitle: { en: "Five lines from Chapter 2 that carry the year’s argument.",
                zh: "第 2 章裡的五句話，承載了這一年的論點。" },
    quotes: [
      { text: { en: "As of 2021, 9 state-of-the-art AI systems out of the 10 benchmarks in this report are trained with extra data. This trend implicitly favors private sector actors with access to vast datasets.",
                zh: "截至 2021 年，本報告 10 個基準中有 9 個的最先進 AI 系統是用額外資料訓練的。這個趨勢實質上偏袒了握有龐大資料集的私部門。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "Humans performed 9 percentage points better on aNLI in 2019. As of 2021, that gap has shrunk to 1.",
                zh: "2019 年人類在 aNLI 上比 AI 高 9 個百分點。到 2021 年，這個差距已縮小到 1。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "The top chess software engine now exceeds Magnus Carlsen’s top ELO score by 24%. However, in the last two years AI systems have also improved by 129% on more general reinforcement learning tasks (Procgen) in which they must operate in novel environments.",
                zh: "最強的西洋棋軟體引擎如今超越 Magnus Carlsen 的最高 ELO 分數 24%。不過在過去兩年，AI 系統在更通用、必須在陌生環境中運作的強化學習任務(Procgen)上，也進步了 129%。" },
        by: "Chapter 2 · Chapter Highlights" },
      { text: { en: "The fact that progress on SuperGLUE was achieved so rapidly suggests that researchers will need to develop more complex suites of natural language tasks to challenge the next generation of AI systems.",
                zh: "SuperGLUE 上的進展來得如此之快，意味著研究者必須開發更複雜的自然語言任務組合，才能挑戰下一代的 AI 系統。" },
        by: "Chapter 2 · 2.3 Language" },
      { text: { en: "An AI Index survey shows that the median price of robotic arms has decreased by 46.2% in the past five years — from $42,000 per arm in 2017 to $22,600 in 2021. Robotics research has become more accessible and affordable.",
                zh: "AI 指數的調查顯示，機器手臂的中位價格在過去五年下降了 46.2% — 從 2017 年每支 42,000 美元降到 2021 年的 22,600 美元。機器人研究變得更容易取得、也更負擔得起。" },
        by: "Chapter 2 · Chapter Highlights" }
    ]
  },

  /* ---------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 2 in full", zh: "閱讀第 2 章原文" },
    text:  { en: "Chapter 2 (sections 2.1–2.8) — computer vision in images and video, language, speech, recommendation, reinforcement learning, hardware and robotics — with every chart, footnote and citation is free from Stanford HAI.",
             zh: "第 2 章(2.1–2.8 各節) — 影像與影片的電腦視覺、語言、語音、推薦、強化學習、硬體與機器人 — 連同所有圖表、註腳與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2022-ai-index-report",
             label: { en: "Open the AI Index 2022 →", zh: "開啟 AI 指數 2022 →" } }
  }
];

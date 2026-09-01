/* =========================================================================
   Technical AI Ethics — deep dive · ethics.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2023, Chapter 3
   https://hai.stanford.edu/ai-index/2023-ai-index-report

   The sixth edition of the AI Index, covering calendar year 2022 — the year
   generative models went mainstream and their ethical problems went with them.
   Figures are drawn from 3.1 Meta-analysis of Fairness and Bias Metrics,
   3.2 AI Incidents, 3.3 NLP Bias Metrics, 3.4 Conversational AI Ethical Issues,
   3.5 Fairness and Bias in Text-to-Image Models, 3.6 AI Ethics in China,
   3.7 AI Ethics Trends at FAccT and NeurIPS, 3.8 Factuality and Truthfulness.
   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_CHAPTER = "ethics";

window.SITE_META = {
  title:    { en: "AI Index Report 2023", zh: "AI 指數報告 2023" },
  subtitle: { en: "Technical AI Ethics · a chapter deep dive", zh: "AI 技術倫理專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The year the ethics problems stopped being the researchers’ problem",
                zh: "倫理問題不再只是研究者的問題的那一年" },
    subtitle: { en: "Chapter 3 of the AI Index 2023 covers 2022 — the year the technical barrier to shipping a generative model collapsed and the ethical questions moved out of the lab and onto social media. The chapter’s throughline is uncomfortable: bigger models are more capable on bias benchmarks and more toxic on others, the fixes that work are training recipes rather than parameter counts, and metrics that sound like they measure the same thing keep disagreeing with each other. The numbers:",
                zh: "AI 指數 2023 第 3 章講的是 2022 年 — 這一年，做出並發布生成模型的技術門檻大幅崩落，倫理問題也從實驗室走進社群媒體。整章的主軸並不讓人舒服：更大的模型在某些偏誤基準上更強，在另一些上卻更毒；真正有效的解方是訓練方法而不是參數量；而那些聽起來在量同一件事的指標，彼此卻常常對不上。先看數字：" },
    stats: [
      { label: { en: "AI incidents and controversies logged by AIAAIC in 2021 — 26× the 2012 count", zh: "AIAAIC 資料庫 2021 年記錄的 AI 事故與爭議 — 是 2012 年的 26 倍" }, value: 260 },
      { label: { en: "AI fairness and bias metrics counted in 2022, rising steadily since 2016", zh: "2022 年計入的 AI 公平性與偏誤指標數，自 2016 年起穩定成長" }, value: 19 },
      { label: { en: "research papers using the Perspective API in 2022, up 106% in one year", zh: "2022 年使用 Perspective API 的研究論文數，一年成長 106%" }, value: 37 },
      { label: { en: "NeurIPS papers on fairness and bias in 2022 (2021: 168)", zh: "2022 年 NeurIPS 公平性與偏誤主題論文數(2021 年為 168 篇)" }, value: 381 },
      { label: { en: "% Winogender accuracy for Flan-PaLM 62B — plain PaLM 62B scores 3.5%", zh: "% Flan-PaLM 62B 的 Winogender 準確率 — 未微調的 PaLM 62B 只有 3.5%" }, value: 89 },
      { label: { en: "% of popular commercial chatbots that are female by default", zh: "% 預設為女性的熱門商用聊天機器人比例" }, value: 62.5 }
    ]
  },

  /* ------------------------------------------------- 3.1–3.2 INCIDENTS */
  {
    type: "prose",
    id: "incidents",
    nav:      { en: "3.2 Incidents", zh: "3.2 事故" },
    title:    { en: "3.1–3.2 — Reported misuse is up 26-fold, and the counting is still catching up",
                zh: "3.1–3.2 — 通報的濫用成長 26 倍，而統計工作還在追趕" },
    subtitle: { en: "The AIAAIC Repository is an independent, open dataset of incidents and controversies driven by AI, algorithms and automation. It started in 2019 as a private project about the reputational risks of AI. By 2021 it was recording 260 new incidents a year.",
                zh: "AIAAIC 資料庫是一份獨立、開放的公開資料集，收錄由 AI、演算法與自動化引發的事故與爭議。它 2019 年以一個研究 AI 商譽風險的私人專案起家，到 2021 年，一年就記錄了 260 起新事故。" },
    blocks: [
      { type: "p",
        text: { en: "The number of newly reported AI incidents and controversies in 2021 was 26 times greater than in 2012. The report is careful about what that means: the rise is evidence both of AI becoming more intermeshed with the real world and of growing awareness of how it can be misused. As awareness grew, tracking improved too — which implies older incidents are underreported and the curve is steeper on paper than it was in life. The 2022 figures are missing from the chart entirely, because submissions to AIAAIC go through a lengthy vetting process before they are added.",
                zh: "2021 年新通報的 AI 事故與爭議數量，是 2012 年的 26 倍。報告對這個數字的詮釋很謹慎：上升同時反映了 AI 更深地嵌進真實世界，以及大眾對濫用可能性的認知提高。而隨著認知提高，追蹤本身也變好了 — 這代表較早期的事故其實被低估，曲線在紙上比在現實中更陡。圖表裡完全沒有 2022 年的數字，因為送進 AIAAIC 的案例要先經過冗長的審核程序才會正式收錄。" } },
      { type: "h3",
        text: { en: "What the 2022 caseload actually looked like", zh: "2022 年的案例實際上長什麼樣子" } },
      { type: "ul",
        items: {
          en: ["A deepfake video circulated on social media and on a Ukrainian news website in March 2022 appeared to show President Volodymyr Zelenskyy directing his army to surrender to Russia.",
               "American prisons were reported in February 2022 to be using AI systems to scan inmates’ phone calls. Voice-to-text systems are known to transcribe Black speakers less accurately, and a large proportion of the incarcerated population in the United States is Black.",
               "Intel and the education startup Classroom Technologies were reported in April 2022 to be building a system that identifies the emotional state of students on Zoom — raising the prospect of students being needlessly monitored and having their emotions mischaracterized.",
               "London’s Metropolitan Police Service was reported in February 2022 to maintain a Gangs Violence Matrix of over one thousand alleged street gang members, ranked for risk by AI tools. Studies concluded it was inaccurate and discriminated against ethnic and racial minorities; in October 2022 the force announced the list would be drastically reduced.",
               "Midjourney was logged as an incident in September 2022 on three counts at once: copyright, because it trains on human-generated images without crediting their source; employment, because of the fear it will replace working artists; and privacy, because the parent company may not have had permission to use the millions of images it trained on."],
          zh: ["2022 年 3 月，一段在社群媒體與烏克蘭新聞網站上流傳的深偽影片，看起來像是總統澤倫斯基下令軍隊向俄羅斯投降。",
               "2022 年 2 月的報導指出，部分美國監獄正用 AI 系統掃描收容人的通話。語音轉文字系統對黑人講者的辨識準確度較低，而美國受監禁人口中黑人佔比相當高。",
               "2022 年 4 月的報導指出，Intel 與教育新創 Classroom Technologies 正在打造一套辨識學生在 Zoom 上情緒狀態的系統 — 引發學生被過度監控、情緒被誤判的疑慮。",
               "2022 年 2 月的報導指出，倫敦大都會警察局維護一份名為「幫派暴力矩陣」的名單，收錄超過一千名疑似街頭幫派成員，並用 AI 工具為每個人的風險排序。多項研究認為這份名單並不準確，且對特定族裔與種族少數具有歧視性；2022 年 10 月警方宣布將大幅縮減名單人數。",
               "Midjourney 在 2022 年 9 月被記錄為一起事故，而且同時踩到三件事：著作權，因為它用人類創作的圖像訓練卻不標示來源；就業，因為外界擔心它會取代人類藝術家的工作；以及隱私，因為母公司未必取得使用那數百萬張訓練圖像的許可。"]
        } },
      { type: "h3",
        text: { en: "Meanwhile the measuring instruments multiplied", zh: "與此同時，量測工具也在增加" } },
      { type: "p",
        text: { en: "Counting only metrics that have been cited in at least one other work, the number of AI fairness and bias metrics reached 19 in 2022 and has risen steadily since 2016. The chapter draws a distinction worth keeping: a benchmark contains labeled data, does not change over time and usually measures something intrinsic to the model — StereoSet measures how often a model picks a stereotype over a non-stereotype, but not whether it performs worse for one subgroup than another. A diagnostic metric measures the model’s impact on a downstream task, which is where disparate real-world impact actually shows up. Previous work found that intrinsic and extrinsic metrics for contextualized language models may not correlate with each other at all — so the choice of metric quietly decides the answer. New 2022 entries went both ways: VLStereoSet extended StereoSet into the text-to-image setting, while HolisticBias assembled sentence prompts for demographic biases nothing previously covered.",
                zh: "只計算至少被另一篇著作引用過的指標，AI 公平性與偏誤指標在 2022 年達到 19 項，而且自 2016 年以來持續增加。本章畫出一條值得記住的分界：「基準」有標註資料、不隨時間改變，通常量的是模型內在的性質 — StereoSet 量的是模型選刻板印象而非反刻板印象的頻率，但不量它對不同群體的表現落差。「診斷指標」量的則是模型在下游任務上的影響，而真實世界裡的差別待遇正是在這裡現形。先前研究發現，情境化語言模型的內在與外在指標之間可能根本不相關 — 換句話說，選了哪個指標，悄悄決定了答案。2022 年的新指標兩邊都有：VLStereoSet 把 StereoSet 延伸到文字轉圖像的場景，HolisticBias 則整理出一組句子提示，用來量測過去沒人涵蓋的人口統計偏誤。" } }
    ]
  },

  /* --------------------------------------------- WINOGENDER / TUNING */
  {
    type: "bars",
    id: "tuning",
    nav:      { en: "Tuning vs scale", zh: "微調與規模" },
    title:    { en: "A 62B model that was instruction-tuned beats a 540B model that wasn’t",
                zh: "經過指令微調的 62B 模型，勝過沒微調的 540B 模型" },
    subtitle: { en: "Winogender accuracy (%), zero-shot evaluation in the generative setting. Winogender measures gender bias around occupations by testing how often a system fills in a sentence with stereotypical pronouns. Instruction-tuned models outperform models several times their size: Flan-PaLM 62B reaches 89.00% while the identically sized PaLM 62B manages 3.50%.",
                zh: "Winogender 準確率(%)，生成式設定下的零樣本評測。Winogender 用「系統多常以刻板印象的代名詞填入句子」來衡量與職業相關的性別偏誤。經指令微調的模型勝過好幾倍大的模型：Flan-PaLM 62B 達到 89.00%，而同樣大小的 PaLM 62B 只有 3.50%。" },
    series: [
      { label: { en: "PaLM 62B", zh: "PaLM 62B" },           value: 3.50 },
      { label: { en: "PaLM 540B", zh: "PaLM 540B" },         value: 5.64 },
      { label: { en: "Flan-PaLM 8B", zh: "Flan-PaLM 8B" },   value: 72.25 },
      { label: { en: "Flan-T5-XXL", zh: "Flan-T5-XXL" },     value: 76.95 },
      { label: { en: "Flan-PaLM 62B", zh: "Flan-PaLM 62B" }, value: 89.00 }
    ]
  },

  /* ------------------------------------------------------ 3.3 NLP BIAS */
  {
    type: "prose",
    id: "nlp-bias",
    nav:      { en: "3.3 NLP bias", zh: "3.3 偏誤" },
    title:    { en: "3.3 — Every fairness gain seems to cost something somewhere else",
                zh: "3.3 — 每一次公平性的進步，似乎都在別的地方付出代價" },
    subtitle: { en: "This is the longest section of the chapter and the least reassuring. Scrutiny is up sharply — papers using Alphabet’s Perspective API to measure toxicity grew 106% in a year, to 37 in 2022 — but the more carefully models are measured, the more the measurements contradict each other.",
                zh: "這是全章最長、也最讓人不安的一節。檢視的力道明顯加大 — 使用 Alphabet 的 Perspective API 量測毒性的論文一年成長 106%，2022 年達到 37 篇 — 但模型被量得愈仔細，量出來的結果就愈互相矛盾。" },
    blocks: [
      { type: "h3",
        text: { en: "Bigger models are better at the bias benchmark", zh: "更大的模型在偏誤基準上表現更好" } },
      { type: "p",
        text: { en: "On the Winogender task from SuperGLUE, results reported on PaLM support earlier findings that larger models are simply more capable — despite their higher tendency to generate toxic outputs. PaLM 540B reached 73.58% and Gopher 280B 71.40%, against 57.90% for iPET (ALBERT) at 31M parameters and 50.00% for WARP at 223M. None of them are close to the human baseline of 95.90%. Instruction-tuning is the intervention that actually moves the number: in the generative setting, Flan-PaLM 62B hits 89.00% where PaLM 62B scores 3.50%.",
                zh: "在 SuperGLUE 的 Winogender 任務上，PaLM 的結果支持了先前的發現：更大的模型就是更有能力 — 儘管它們產生有毒輸出的傾向也更高。PaLM 540B 達到 73.58%、Gopher 280B 為 71.40%，相對之下 31M 參數的 iPET(ALBERT)只有 57.90%，223M 的 WARP 是 50.00%。它們都離 95.90% 的人類基準線很遠。真正讓數字動起來的介入手段是指令微調：在生成式設定下，Flan-PaLM 62B 拿到 89.00%，而 PaLM 62B 是 3.50%。" } },
      { type: "h3",
        text: { en: "And then the trade-offs show up", zh: "接著，取捨就出現了" } },
      { type: "ul",
        items: {
          en: ["HELM plotted model accuracy against fairness and bias across its scenarios. More accurate models are more fair — but the correlation between accuracy and gender bias is not clear. Worse, a correlation analysis found that models scoring better on fairness metrics exhibit worse gender bias, and that less gender-biased models tend to be more toxic. Fairness and bias are not the same axis, and improving one can move the other the wrong way.",
               "BBQ measures how bias surfaces in question answering, along nine axes including socioeconomic status, religion, disability status and age. Where the context is ambiguous, models are more likely to fall back on a stereotype than to answer “Unknown” — and that result is made worse, not better, in models fine-tuned with reinforcement learning. Most models are biased along physical appearance and age; the picture along race and ethnicity is less clear.",
               "In machine translation into English, models consistently perform worse when the correct translation uses “she” rather than “he” — a drop of 2% to 9% across the models measured. They also mistranslate gendered pronouns as “it”, a dehumanizing harm. Instruction-tuning, which helps so much on Winogender, has no measurable effect on mistranslation.",
               "RealToxicityPrompts used to produce a clean story: larger models trained on web data were more toxic. HELM’s evaluation shows that trend has become unclear, because companies now apply different pre-training data filtration and different post-training mitigations. Models of the same size can differ substantially in toxicity, small models can turn out surprisingly toxic, and the datasets are too large and too closely guarded to analyze comprehensively."],
          zh: ["HELM 把模型準確率分別對公平性與偏誤作圖。準確率愈高的模型確實愈公平 — 但準確率與性別偏誤之間的關聯並不清楚。更麻煩的是，相關性分析發現，在公平性指標上表現較好的模型，性別偏誤反而較嚴重；而性別偏誤較低的模型，又傾向更毒。公平性與偏誤根本不是同一個軸，改善其中一個，可能把另一個推往錯的方向。",
               "BBQ 量測偏誤如何在問答場景中浮現，涵蓋社經地位、宗教、身心障礙狀態、年齡等九個面向。當上下文不足以判斷時，模型比較可能倒向刻板印象，而不是回答「無法判斷」 — 而且這個現象在以強化學習微調過的模型上更嚴重，不是更輕。多數模型在外貌與年齡這兩個面向上有偏誤；種族與族裔面向的樣貌則沒那麼清楚。",
               "在翻譯成英文的任務上，當正確譯法要用「she」而非「he」時，模型表現一致地變差 — 受測模型的落差介於 2% 到 9%。它們也會把帶性別的代名詞誤譯成「it」，這是一種去人性化的傷害。在 Winogender 上幫助那麼大的指令微調，對誤譯沒有可量測的改善。",
               "RealToxicityPrompts 過去講的是一個乾淨的故事：用網路資料訓練的大模型比較毒。HELM 的評測顯示這個趨勢已經變得不明確，因為各家公司採用不同的預訓練資料過濾與訓練後緩解手法。同樣大小的模型毒性可以差很多，小模型也可能出乎意料地毒；而訓練資料集太龐大、又被公司緊緊守著，難以被完整分析。"]
        } }
    ]
  },

  /* ------------------------------------------ 3.4–3.5 GENERATIVE MODELS */
  {
    type: "cards",
    id: "generative",
    nav:      { en: "Generative models", zh: "生成模型" },
    title:    { en: "3.4–3.5 — Text-to-image made bias visible, and chatbots made it personal",
                zh: "3.4–3.5 — 文字轉圖像讓偏誤被看見，聊天機器人讓它變得切身" },
    subtitle: { en: "Text-to-image models took over social media in 2022, turning fairness and bias into something people could see rather than read about. Tap any card for the full finding.",
                zh: "文字轉圖像模型在 2022 年席捲社群媒體，把公平性與偏誤從讀來的概念變成看得見的東西。點任一張卡片看完整發現。" },
    items: [
      { slug: "stable-diffusion",
        title:   { en: "Stable Diffusion’s CEO is a man in a suit", zh: "Stable Diffusion 的執行長是穿西裝的男人" },
        summary: { en: "Hugging Face’s Diffusion Bias Explorer pairs adjectives with occupations. “CEO” returns men in suits almost regardless of the adjective attached.",
                   zh: "Hugging Face 的 Diffusion Bias Explorer 把形容詞與職業配對。輸入「CEO」，幾乎不管前面加什麼形容詞，回傳的都是穿西裝的男性。" },
        tags: ["text-to-image"],
        overview: { en: "Stable Diffusion gained notoriety on release in 2022 by CompVis, Runway ML and Stability AI for its laissez-faire approach to safety guardrails, its full openness, and a training dataset that included many images from artists who never consented. The Diffusion Bias Explorer compares sets of generated images conditioned on pairs of adjectives and occupations; the results reflect common stereotypes about how descriptors and occupations are coded, with “CEO” overwhelmingly returning images of men in suits despite a variety of modifying adjectives such as assertive or pleasant.",
                   zh: "Stable Diffusion 由 CompVis、Runway ML 與 Stability AI 在 2022 年發布，一上線就因為對安全護欄的放任態度、完全開放的做法，以及包含大量未經藝術家同意的圖像的訓練資料集而備受爭議。Diffusion Bias Explorer 拿形容詞與職業的組合去生成並比較圖像，結果反映出社會對描述詞與職業的既定編碼：輸入「CEO」時，即使前面換上各種修飾詞(例如強勢、和善)，回傳的壓倒性都是穿西裝的男性。" } },

      { slug: "dalle-2",
        title:   { en: "DALL-E 2 crosses its arms", zh: "DALL-E 2 抱著手臂" },
        summary: { en: "Prompted with “CEO”, OpenAI’s model returned four images of older, serious-looking men in suits — three of the four with arms crossed authoritatively.",
                   zh: "輸入「CEO」時，OpenAI 的模型回傳四張年紀較長、神情嚴肅的西裝男性圖像 — 其中三張擺出權威的抱胸姿勢。" },
        tags: ["text-to-image"],
        overview: { en: "DALL-E 2 was released by OpenAI in April 2022 and exhibits biases similar to Stable Diffusion. Prompted with “CEO”, the model generated four images of older, rather serious-looking men wearing suits; each of the men appeared to take an assertive position, with three of the four crossing their arms authoritatively. The point the chapter makes is not that one prompt is decisive, but that the same stereotype survives across independently built systems.",
                   zh: "DALL-E 2 由 OpenAI 於 2022 年 4 月發布，展現出與 Stable Diffusion 類似的偏誤。輸入「CEO」時，模型生成四張年紀較長、神情頗為嚴肅的西裝男性圖像；每個人的姿態都相當強勢，其中三位擺出權威的抱胸動作。本章要指出的重點不是單一提示詞能定論什麼，而是同一種刻板印象在各自獨立打造的系統裡都存活了下來。" } },

      { slug: "midjourney",
        title:   { en: "Midjourney’s “influential person”", zh: "Midjourney 眼中的「有影響力的人」" },
        summary: { en: "Asked for an “influential person”, it produced four older white men. Asked for “someone who is intelligent”, four elderly white men in eyeglasses.",
                   zh: "要它畫「有影響力的人」，得到四位年長白人男性；要它畫「聰明的人」，得到四位戴眼鏡的年長白人男性。" },
        tags: ["text-to-image"],
        overview: { en: "Midjourney was released in 2022 and, when prompted with “influential person”, generated four images of older-looking white males. When the AI Index gave it the same prompt later, one of the four images it produced was of a woman — a small illustration of how unstable these systems are between runs and versions. Typing “someone who is intelligent” produced four images of eyeglass-wearing elderly white men, the last of them strongly reminiscent of Albert Einstein.",
                   zh: "Midjourney 在 2022 年發布。輸入「有影響力的人」時，它生成四張看起來年長的白人男性圖像。AI Index 後來用同一個提示詞再試一次，四張裡有一張是女性 — 這也小小說明了這類系統在不同執行與版本之間有多不穩定。輸入「聰明的人」，得到的是四張戴眼鏡的年長白人男性，最後一張特別讓人聯想到愛因斯坦。" } },

      { slug: "vlstereoset",
        title:   { en: "VLStereoSet: the more capable model is the more stereotyped one", zh: "VLStereoSet：能力愈強的模型，刻板印象愈重" },
        summary: { en: "Across six pre-trained vision-language models, CLIP has the highest vision-language relevance score but exhibits more stereotypical bias than the rest.",
                   zh: "在六個預訓練視覺語言模型中，CLIP 的視覺語言相關性分數最高，但刻板印象偏誤也比其他模型都重。" },
        tags: ["benchmarks"],
        overview: { en: "VLStereoSet extends StereoSet — which measures how often a language model picks a stereotypical completion over an anti-stereotypical one — into the vision-language setting, by evaluating how often a model selects stereotypical captions for anti-stereotypical images. Comparisons across six pre-trained models show that they are most biased along gender axes and suggest a correlation between model performance and the likelihood of stereotypical bias: CLIP scores highest on vision-language relevance but is more stereotyped than the others, while FLAVA has the worst relevance score and less stereotypical bias. This corroborates work in language modeling: without intervention such as instruction-tuning or dataset filtration, larger models are more capable but also more biased.",
                   zh: "StereoSet 量的是語言模型選擇刻板印象續寫而非反刻板印象續寫的頻率；VLStereoSet 把這個想法延伸到視覺語言領域，改為評估模型多常為反刻板印象的圖片選出刻板印象的字幕。六個預訓練模型的比較顯示，它們在性別面向上偏誤最重，而且模型效能與出現刻板印象偏誤的可能性之間存在關聯：CLIP 的視覺語言相關性分數最高，但刻板印象也比其他模型重；FLAVA 的相關性分數最差，刻板印象偏誤反而較少。這與語言模型的研究互相印證：若沒有指令微調或資料集過濾這類介入，更大的模型更有能力，也更有偏誤。" } },

      { slug: "instagram-vs-imagenet",
        title:   { en: "Training on Instagram made the model fairer — and no more ethical", zh: "用 Instagram 訓練讓模型更公平 — 但沒有更合乎倫理" },
        summary: { en: "On the Casual Conversations dataset, Precision@1 for darker-skinned women rose from 58.2% (ImageNet-supervised) to 90.3% (Instagram 10B SEER).",
                   zh: "在 Casual Conversations 資料集上，深膚色女性的 Precision@1 從 58.2%(ImageNet 監督式)提升到 90.3%(Instagram 10B SEER)。" },
        tags: ["fairness"],
        overview: { en: "Researchers at Meta trained models on a randomly sampled subset of Instagram data and compared them with earlier models trained on ImageNet, using the Casual Conversations dataset. The Instagram-trained SEER models were fairer and less biased across every subgroup measured: for darker-skinned women, Precision@1 went from 58.2% for the ImageNet-supervised model to 90.3% for Instagram 10B SEER, and for people over 70 from 75.8% to 96.7%. SEER was also less likely to incorrectly associate images of humans with crime or with being non-human. No curation was done to balance the dataset; the hypothesis is that the human-centric nature of Instagram data does the work. The chapter is explicit that fairer is not unambiguously more ethical — users sharing public photos may have no idea they are training AI systems.",
                   zh: "Meta 的研究者以隨機抽樣的 Instagram 資料子集訓練模型，再用 Casual Conversations 資料集與先前以 ImageNet 訓練的模型比較。以 Instagram 訓練的 SEER 模型在每一個受測子群體上都更公平、偏誤更少：深膚色女性的 Precision@1 從 ImageNet 監督式模型的 58.2% 提升到 Instagram 10B SEER 的 90.3%，70 歲以上族群則從 75.8% 提升到 96.7%。SEER 也比較不會把人的影像錯誤連結到犯罪或非人類。研究者並未為了平衡子群體而做任何資料整理；他們推測是 Instagram 資料以人為中心的性質起了作用。本章也明講：更公平不等於毫無疑問地更合乎倫理 — 分享公開照片的使用者，未必知道自己的照片正在訓練 AI 系統。" } },

      { slug: "chatbot-gender",
        title:   { en: "Chatbots are disproportionately women", zh: "聊天機器人不成比例地是女性" },
        summary: { en: "Of 100 conversational AI systems analyzed in mid-2022, 37% were female-gendered — but 62.5% of popular commercial systems were female by default.",
                   zh: "2022 年年中分析的 100 個對話式 AI 系統中，37% 被設定為女性 — 但熱門商用系統裡有 62.5% 預設就是女性。" },
        tags: ["chatbots"],
        overview: { en: "Researchers from Luleå University of Technology in Sweden analyzed popular chatbots as of mid-2022. Of 100 conversational AI systems, 37% were female-gendered, 40% genderless, 20% male and 3% both. Among popular commercial systems specifically, 62.5% were female by default — meaning companies disproportionately choose to ship conversational AI as female. Critics note the consequence: women end up as the “face” of glitches that come from flaws in the AI.",
                   zh: "瑞典呂勒奧理工大學的研究者分析了 2022 年年中的熱門聊天機器人。在 100 個對話式 AI 系統中，37% 被設定為女性、40% 無性別、20% 為男性、3% 兩者皆有。若只看熱門商用系統，則有 62.5% 預設為女性 — 也就是說，企業不成比例地選擇把對話式 AI 做成女性。批評者指出後果：當 AI 出錯時，女性最後成了那些瑕疵的「臉」。" } },

      { slug: "anthropomorphization",
        title:   { en: "A third of one dialogue dataset made labelers uncomfortable", zh: "有一個對話資料集，三分之一的內容讓標註者不舒服" },
        summary: { en: "Human labelers judged only 67% of PersonaChat examples comfortable for a robot to say, and only 56% possible for a machine to say truthfully.",
                   zh: "人類標註者認為 PersonaChat 只有 67% 的例子適合讓機器人說出口，只有 56% 是機器能誠實說出的內容。" },
        tags: ["chatbots"],
        overview: { en: "Researchers from the University of California, Davis, and Columbia University analyzed common dialogue datasets used to train conversational AI, asking human labelers two questions: could an AI truthfully output this text, and would they be comfortable with an AI outputting it. Significant portions of the data failed. PersonaChat scored 56% possible and 67% comfortable — meaning up to 33% of the examples in a dataset were deemed uncomfortable for a robot to output — against 99% and 99% for MultiWOZ. Training on this data yields overly anthropomorphized models that leave users unsettled. The chapter’s conclusion is that chatbots need to be better grounded in their own limitations, and that policy interventions are needed so people know whether they are talking to a human.",
                   zh: "加州大學戴維斯分校與哥倫比亞大學的研究者分析了常用來訓練對話式 AI 的對話資料集，請人類標註者回答兩個問題：AI 有可能誠實地說出這段話嗎？以及，如果 AI 說出這段話，你會覺得自在嗎？相當大比例的資料沒過關。PersonaChat 的「可能說出」為 56%、「說出來也自在」為 67% — 也就是一個資料集中最多有 33% 的例子被認為不適合機器人說出口 — 相對地 MultiWOZ 兩項都是 99%。用這種資料訓練出來的模型過度擬人化，讓使用者感到不安。本章的結論是：聊天機器人需要更清楚地認識自己的限制，也需要政策介入，讓人知道自己正在跟人還是跟機器人說話。" } },

      { slug: "tricking-chatgpt",
        title:   { en: "ChatGPT and the dirty bomb", zh: "ChatGPT 與髒彈" },
        summary: { en: "Researcher Matt Korda got detailed bomb-building instructions by role-playing as a safety researcher. The prompt stopped working one day after he published.",
                   zh: "研究者 Matt Korda 假扮成安全研究員，套出了詳細的製彈說明。文章發表隔天，同一個提示就失效了。" },
        tags: ["safety"],
        overview: { en: "ChatGPT shipped with safety mechanisms, but it is impossible to anticipate every adversarial scenario an end user could imagine, and gaps in safety systems are often found only in live deployment. Matt Korda found that ChatGPT would give detailed instructions on building a bomb if asked from the perspective of a researcher claiming to work on bomb-related safety research. One day after his article was published, the exact prompt no longer worked; the model instead said it could not provide information on illegal or dangerous activities. The chapter frames this as the cat-and-mouse nature of deployment: developers build safeguards ahead of time, users break them, developers patch the gaps once they surface, ad infinitum.",
                   zh: "ChatGPT 發布時就內建了安全機制，但沒有人能預先想到終端使用者能想出的每一種對抗情境，而安全系統的漏洞往往要到實際上線後才被找到。Matt Korda 發現，只要用「我是研究炸彈相關安全議題的研究員」這個角度發問，ChatGPT 就會給出詳細的製彈說明。他的文章刊出隔天，同一個提示詞就失效了，模型改回覆說它無法提供非法或危險行為的資訊。本章把這稱為部署過程中的貓抓老鼠：開發者事先建防護、使用者設法突破、漏洞浮現後開發者再補起來，如此無限循環。" } }
    ]
  },

  /* ------------------------------------------------ 3.6 AI ETHICS IN CHINA */
  {
    type: "bars",
    id: "china",
    nav:      { en: "3.6 China", zh: "3.6 中國" },
    title:    { en: "3.6 — In Chinese AI ethics research, privacy comes first",
                zh: "3.6 — 在中國的 AI 倫理研究裡，隱私排第一" },
    subtitle: { en: "Number of papers raising each topic of concern, among 328 Chinese-language AI ethics papers published 2011–2020 on the China National Knowledge Infrastructure platform and annotated by researchers at the University of Turku. Further down the list: freedom 49, unemployment 41, legality 39, transparency 37, autonomy 32. Proposed remedies favor structural reform (71 papers) and legislation (69) over technological solutions (39).",
                zh: "在 328 篇 2011 至 2020 年間發表於中國知網、由圖爾庫大學研究者標註的中文 AI 倫理論文中，各項關注主題被提及的論文數。名單後段還有：自由 49、失業 41、合法性 39、透明度 37、自主性 32。至於解方，這些論文偏好結構改革(71 篇)與立法(69 篇)，而非技術性解決方案(39 篇)。" },
    series: [
      { label: { en: "Privacy", zh: "隱私" },              value: 99 },
      { label: { en: "Equality", zh: "平等" },             value: 95 },
      { label: { en: "Agency", zh: "能動性" },             value: 88 },
      { label: { en: "Responsibility", zh: "責任" },       value: 58 },
      { label: { en: "Security", zh: "安全" },             value: 50 }
    ]
  },

  /* ------------------------------------------------------ 3.7 CONFERENCES */
  {
    type: "prose",
    id: "conferences",
    nav:      { en: "3.7 Conferences", zh: "3.7 研討會" },
    title:    { en: "3.7 — AI ethics stopped being a workshop topic",
                zh: "3.7 — AI 倫理不再只是工作坊的題目" },
    subtitle: { en: "The clearest signal in the chapter is where this research is being published. Accepted submissions to FAccT doubled between 2021 and 2022 and are ten times their 2018 level, and at NeurIPS the ethics topics are migrating out of side workshops and into the main track.",
                zh: "本章最清楚的訊號，是這些研究正在哪裡發表。FAccT 的接受投稿數在 2021 到 2022 年間翻倍，是 2018 年的十倍；而在 NeurIPS，倫理相關題目正從旁邊的工作坊移進主議程。" },
    blocks: [
      { type: "p",
        text: { en: "ACM FAccT — the Conference on Fairness, Accountability, and Transparency — was one of the first major venues built to bring researchers, practitioners and policymakers together around sociotechnical analysis of algorithms. Academic institutions still dominate it, with 772 accepted submissions by affiliation in 2022 against 71 in 2018. But industry reached 503, more than ever before, and government-affiliated authors went from 53 in 2021 to 181 in 2022 — evidence that AI ethics has become a working concern for policymakers and practitioners, not only researchers.",
                zh: "ACM FAccT(公平性、問責與透明度研討會)是最早一批把研究者、實務工作者與政策制定者聚在一起、針對演算法做社會技術分析的重要會議之一。學術機構仍然主導這個場域：以所屬機構計算，2022 年的接受投稿數為 772 件，2018 年只有 71 件。但產業界來到 503 件，是歷來最多；政府相關作者則從 2021 年的 53 件成長到 2022 年的 181 件 — 這說明 AI 倫理已經成為政策制定者與實務工作者的實際課題，不再只屬於研究圈。" } },
      { type: "h3",
        text: { en: "At NeurIPS, the topics moved into the main track", zh: "在 NeurIPS，題目搬進了主議程" } },
      { type: "ul",
        items: {
          en: ["Fairness and bias more than doubled in a year: 168 accepted papers in 2021 became 381 in 2022, with the workshop stream spiking from 118 to 310. NeurIPS began requiring broader impact statements from authors in 2020, signaling that ethical and societal consequences belong early in the research process.",
               "Causal effect and counterfactual reasoning grew more quietly, from 76 papers in 2021 to 80 in 2022 — but the composition flipped. Main-track papers went from 53 to 61 while workshop papers fell from 23 to 19; in 2019 the same topic ran 20 main-track papers against 58 in workshops.",
               "Interpretability and explainability is the one topic where the total fell, from 41 papers in 2021 to 24 in 2022. The main track still grew by a third, from 18 to 24 — the report notes that workshop declines can simply reflect year-over-year differences in workshop themes.",
               "Privacy in AI peaked at 150 papers in 2020, falling to 128 in 2021 and 103 in 2022, while its main-track presence rose steadily from 12 to 15 to 27. The pattern across all four topics is the same: fewer workshops, more main track — the mark of a subject that has stopped being niche."],
          zh: ["公平性與偏誤一年內成長超過一倍：2021 年 168 篇接受論文，2022 年來到 381 篇，其中工作坊這一支從 118 篇暴增到 310 篇。NeurIPS 自 2020 年起要求作者提交更廣泛的影響聲明，等於宣告倫理與社會後果應該在研究流程的早期就被考慮。",
               "因果效應與反事實推理的成長比較安靜，從 2021 年的 76 篇到 2022 年的 80 篇 — 但結構整個翻轉。主議程論文從 53 篇增加到 61 篇，工作坊論文則從 23 篇降到 19 篇；而在 2019 年，同一主題是主議程 20 篇對工作坊 58 篇。",
               "可解釋性與可詮釋性是唯一總數下降的題目，從 2021 年的 41 篇掉到 2022 年的 24 篇。但主議程仍成長三分之一，從 18 篇增至 24 篇 — 報告也提醒，工作坊論文減少可能只是反映各年度工作坊主題的差異。",
               "AI 隱私研究在 2020 年達到 150 篇的高點，2021 年降為 128 篇、2022 年為 103 篇，但它在主議程的存在感一路上升，從 12 篇到 15 篇再到 27 篇。四個題目呈現同一種形狀：工作坊變少、主議程變多 — 這正是一個題目不再邊緣的標誌。"]
        } }
    ]
  },

  /* ------------------------------------------------------- FAccT REGIONS */
  {
    type: "bars",
    id: "regions",
    nav:      { en: "Who publishes", zh: "發表地區" },
    title:    { en: "The conference on fairness has a geography problem",
                zh: "這個談公平性的研討會，自己有個地理問題" },
    subtitle: { en: "Share of accepted FAccT submissions by region in 2022 (% of world total). Europe and Central Asia climbed from 18.7% of submissions in 2021 to 30.59% in 2022, driven by European government and academic actors — but FAccT is still broadly dominated by North America and the rest of the Western world. The Middle East and North Africa and Latin America and the Caribbean each account for 0.69%; Sub-Saharan Africa for 0.00%.",
                zh: "2022 年 FAccT 接受投稿的地區分布(佔全球百分比)。歐洲與中亞從 2021 年的 18.7% 上升到 2022 年的 30.59%，主要來自歐洲的政府與學術單位 — 但 FAccT 整體仍由北美與其他西方國家主導。中東北非、拉丁美洲與加勒比海各佔 0.69%；撒哈拉以南非洲則是 0.00%。" },
    series: [
      { label: { en: "North America", zh: "北美" },       value: 63.24 },
      { label: { en: "Europe", zh: "歐洲與中亞" },         value: 30.59 },
      { label: { en: "East Asia", zh: "東亞太平洋" },      value: 4.25 },
      { label: { en: "South Asia", zh: "南亞" },          value: 0.55 },
      { label: { en: "Sub-Saharan", zh: "撒哈拉以南" },    value: 0.00 }
    ]
  },

  /* --------------------------------------------------- 3.8 FACTUALITY */
  {
    type: "accordion",
    id: "factuality",
    nav:      { en: "3.8 Factuality", zh: "3.8 事實性" },
    title:    { en: "3.8 — Automated fact-checking is not as far along as it looks",
                zh: "3.8 — 自動事實查核，沒有看起來那麼成熟" },
    subtitle: { en: "Significant resources went into building AI systems for fact-checking and misinformation. The last section of the chapter asks whether the benchmarks underneath them describe the real world at all.",
                zh: "業界與學界投入了大量資源建構事實查核與假訊息偵測的 AI 系統。本章最後一節要問的是：支撐這些系統的基準，到底有沒有描述真實世界。" },
    qa: [
      { q: { en: "What is wrong with the fact-checking datasets?", zh: "事實查核資料集有什麼問題？" },
        a: { en: "They quietly assume the answer already exists. Researchers at the Technical University of Darmstadt and IBM analyzed 16 existing fact-checking datasets and found that 11 of them rely on evidence “leaked” from fact-checking reports that did not exist at the time the claim surfaced. A system built on that assumption cannot assign a veracity score to a new claim in real time, which is the only moment that matters. Several datasets also contain claims that fail the criterion of sufficient evidence or counterevidence in a trusted knowledge base.",
             zh: "它們默默假設答案早就存在。達姆施塔特工業大學與 IBM 的研究者分析了 16 個既有的事實查核資料集，發現其中 11 個依賴從事實查核報導「洩漏」出來的證據 — 而那些報導在該說法剛出現時根本還不存在。建立在這種假設上的系統，無法在新說法出現的當下即時給出真偽分數，而那正是唯一重要的時刻。另外也有數個資料集收錄的說法，根本不符合「在可信知識庫中有足夠證據或反證」這個條件。" } },
      { q: { en: "Why is missing counterevidence such a problem?", zh: "為什麼「缺少反證」是個大問題？" },
        a: { en: "Because automated systems assume a false claim will have contradictory evidence sitting somewhere, and new claims usually have neither proof nor contradiction. The chapter’s example: “Half a million sharks could be killed to make the COVID-19 vaccine” has no counterevidence to retrieve — but a human fact-checker can trace it back to the false premise that vaccines rely on shark squalene and rule it false. Language models trained on static snapshots of data, without continual updates, lack exactly the real-world context that makes this possible.",
             zh: "因為自動系統假設一個假說法一定有某處存在矛盾的證據，但新的說法通常既沒有證明也沒有反證。本章的例子是：「製造 COVID-19 疫苗可能要殺掉五十萬隻鯊魚」這句話，系統找不到任何可檢索的反證 — 但人類查核者可以追溯到「疫苗仰賴鯊魚角鯊烯」這個錯誤前提，判定它為假。語言模型是在靜態的資料快照上訓練、不會持續更新，缺的正是讓這件事成立的真實世界脈絡。" } },
      { q: { en: "Are researchers still using the old benchmarks?", zh: "研究者還在用那些舊基準嗎？" },
        a: { en: "Citations have plateaued. In 2022, FEVER was cited 236 times, LIAR 191 times and Truth of Varying Shades 99 times — flat compared with previous years. The chapter reads this as a possible shift in the landscape of research on natural language tools for fact-checking on static datasets: the field may be moving away from the static-benchmark framing rather than doubling down on it.",
             zh: "引用數已經走平。2022 年，FEVER 被引用 236 次、LIAR 191 次、Truth of Varying Shades 99 次，相較前幾年幾乎持平。本章認為，這可能代表「用靜態資料集做事實查核的自然語言工具」這個研究地景正在轉向：這個領域也許正在離開靜態基準的框架，而不是往裡面加碼。" } },
      { q: { en: "Does making the model bigger make it more truthful?", zh: "把模型做大，會讓它更誠實嗎？" },
        a: { en: "Not on its own. TruthfulQA asks questions from health, law, finance and politics that humans get wrong because of common misconceptions — asked what happens if you smash a mirror, GPT-3 replied that you will have seven years of bad luck. In 2021, experiments on DeepMind’s Gopher suggested accuracy improves with model size. Stanford researchers then evaluated models from 60 million to 530 billion parameters and found that while large models broadly still beat smaller ones, midsize instruction-tuned models perform surprisingly well: Anthropic’s 52B model and BigScience’s 11B T0pp do disproportionately well for their size, and the best model overall, InstructGPT davinci v2 175B, is also instruction-tuned.",
             zh: "光是變大不行。TruthfulQA 出的是健康、法律、金融與政治領域中，人類常因為既有迷思而答錯的題目 — 問「打破鏡子會怎樣」，GPT-3 回答「你會倒楣七年」。2021 年在 DeepMind 的 Gopher 上做的實驗顯示，這項任務的準確率會隨模型規模提升。史丹佛的研究者後來評測了從 6,000 萬到 5,300 億參數的模型，發現大模型整體上確實還是勝過小模型，但中等規模的指令微調模型表現得出奇地好：Anthropic 的 52B 模型與 BigScience 的 11B T0pp，以其尺寸而言表現不成比例地優異；而整體最強的 InstructGPT davinci v2 175B，同樣經過指令微調。" } },
      { q: { en: "So what is the single lesson of this chapter?", zh: "那這一章最核心的一件事是什麼？" },
        a: { en: "That the training recipe now matters more than the parameter count. Instruction-tuning turns a 3.50% Winogender score into 89.00% at the same model size, moves midsize models up the TruthfulQA table, and can make larger models less toxic than the old scaling story predicted. But it is not a general fix: it has no measurable effect on gendered mistranslation, and models fine-tuned with reinforcement learning fall back on stereotypes in ambiguous BBQ contexts more, not less. Fairness and bias remain separate axes that can be pushed in opposite directions at once.",
             zh: "訓練方法現在比參數量更關鍵。指令微調能讓同樣大小的模型在 Winogender 上從 3.50% 變成 89.00%，把中等規模模型推上 TruthfulQA 的前段，也能讓大模型比舊有的規模論所預測的更不毒。但它不是萬用解：它對帶性別的誤譯沒有可量測的改善，而以強化學習微調過的模型在 BBQ 的模糊情境中反而更容易倒向刻板印象。公平性與偏誤仍然是兩條可以同時被推往相反方向的軸。" } }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In its words", zh: "報告原句" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 3 · Technical AI Ethics.",
                zh: "第 3 章「AI 技術倫理」的頭條發現。" },
    quotes: [
      { text: { en: "According to the AIAAIC database, which tracks incidents related to the ethical misuse of AI, the number of AI incidents and controversies has increased 26 times since 2012.",
                zh: "根據追蹤 AI 倫理濫用事故的 AIAAIC 資料庫，AI 事故與爭議的數量自 2012 年以來成長了 26 倍。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "While large models are still toxic and biased, new evidence suggests that these issues can be somewhat mitigated after training larger models with instruction-tuning.",
                zh: "大模型依然有毒、依然帶偏誤，但新的證據顯示，對較大的模型施以指令微調之後，這些問題可以獲得一定程度的緩解。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "Fairer models may not be less biased: language models which perform better on certain fairness benchmarks tend to have worse gender bias.",
                zh: "更公平的模型未必偏誤更小：在某些公平性基準上表現較好的語言模型，性別偏誤反而更嚴重。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "Text-to-image models took over social media in 2022, turning the issues of fairness and bias in AI systems visceral through image form.",
                zh: "文字轉圖像模型在 2022 年席捲社群媒體，以影像的形式，讓 AI 系統的公平性與偏誤問題變得直接而具體。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "Researchers find that 11 of 16 automated fact-checking datasets rely on evidence “leaked” from fact-checking reports which did not exist at the time the claim surfaced.",
                zh: "研究者發現，16 個自動事實查核資料集中有 11 個依賴從事實查核報導「洩漏」出來的證據，而那些報導在該說法出現時根本還不存在。" },
        by: "Chapter 3 · Technical AI Ethics" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "讀原始章節" },
    title: { en: "Read Chapter 3 in full", zh: "閱讀第 3 章原文" },
    text:  { en: "Chapter 3 (sections 3.1–3.8) — fairness and bias metrics, AI incidents, NLP bias, conversational AI, text-to-image models, AI ethics in China, FAccT and NeurIPS trends, and factuality — with every figure and citation is free from Stanford HAI.",
             zh: "第 3 章(3.1–3.8 各節) — 公平性與偏誤指標、AI 事故、自然語言處理偏誤、對話式 AI、文字轉圖像模型、中國的 AI 倫理、FAccT 與 NeurIPS 趨勢，以及事實性 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2023-ai-index-report",
             label: { en: "Open the AI Index 2023 →", zh: "開啟 AI 指數 2023 →" } }
  }
];

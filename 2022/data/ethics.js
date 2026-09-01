/* =========================================================================
   Technical AI Ethics — deep dive · ethics.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2022, Chapter 3
   https://hai.stanford.edu/ai-index/2022-ai-index-report

   The 2022 edition reports on calendar year 2021. Chapter 3 is the AI Index’s
   first full technical treatment of AI ethics: 3.1 Meta-Analysis of Fairness
   and Bias Metrics, 3.2 Natural Language Processing Bias Metrics, 3.3 AI
   Ethics Trends at FAccT and NeurIPS, and 3.4 Factuality and Truthfulness.
   The through-line is uncomfortable — the same scaling that broke capability
   records in 2021 also made models better at reproducing human bias.
   All strings bilingual {en, zh}.
   ========================================================================= */

window.SITE_CHAPTER = "ethics";

window.SITE_META = {
  title:    { en: "AI Index Report 2022", zh: "AI 指數報告 2022" },
  subtitle: { en: "Technical AI Ethics · a chapter deep dive", zh: "AI 技術倫理專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The models got better at everything — including bias",
                zh: "模型什麼都變強了 — 包括偏見" },
    subtitle: { en: "Chapter 3 of the AI Index 2022 is the first edition to measure AI ethics the way the report measures accuracy: with benchmarks, metrics and citation counts. What it finds in 2021 is a scaling law nobody wanted. Larger language models set new records on technical benchmarks and simultaneously became more toxic, more stereotyped and better at memorizing the worst of their training data. Meanwhile the field studying the problem grew faster than at any point in its history. The numbers:",
                zh: "AI 指數 2022 第 3 章，是報告第一次用衡量準確率的方式來衡量 AI 倫理：靠基準、指標與被引用次數。它在 2021 年看到的，是一條沒有人想要的縮放定律。更大的語言模型刷新了技術基準紀錄，同時也變得更毒性、更刻板，更擅長把訓練資料裡最糟的部分記起來。與此同時，研究這個問題的社群，成長速度是史上最快。先看數字：" },
    stats: [
      { label: { en: "% more elicited toxicity from a 280B-parameter 2021 model vs. the 117M-parameter 2018 state of the art", zh: "% 2021 年的 2,800 億參數模型比 2018 年最先進的 1.17 億參數模型多出的誘發毒性" }, value: 29 },
      { label: { en: "authors with an industry affiliation at FAccT 2021 (2020: 31, 2018: 5) — up 71% in a year", zh: "2021 年 FAccT 具產業界身分的作者數(2020 年 31 人、2018 年 5 人) — 一年成長 71%" }, value: 53 },
      { label: { en: "NeurIPS papers on fairness and bias accepted in 2021 (2015: 2)", zh: "2021 年 NeurIPS 接受的公平性與偏誤論文數(2015 年為 2 篇)" }, value: 168 },
      { label: { en: "% of FAccT 2021 papers from North American institutions (2020: 70.2%)", zh: "% 2021 年 FAccT 論文來自北美機構的比例(2020 年為 70.2%)" }, value: 75.4 },
      { label: { en: "% of images of Black people CLIP misclassified as nonhuman — next highest was 7.6%", zh: "% CLIP 把黑人影像誤分類為非人的比率 — 次高的族裔是 7.6%" }, value: 14 },
      { label: { en: "English-only automated fact-checking benchmarks, against 35 in every other language combined", zh: "純英文的自動事實查核基準數；所有其他語言加總只有 35 個" }, value: 142 }
    ]
  },

  /* --------------------------------------------- 3.2 SCALE MAKES IT WORSE */
  {
    type: "prose",
    id: "scaling",
    nav:      { en: "3.2 Scale & bias", zh: "3.2 規模與偏誤" },
    title:    { en: "3.2 — Every bias metric in this chapter gets worse as models get bigger",
                zh: "3.2 — 本章的每一項偏誤指標，都隨模型變大而惡化" },
    subtitle: { en: "Toxicity, stereotype score, religious bias — the 2021 results line up in the same direction. More capable models are also more capable of learning and amplifying what is in their training data, and the training data is the internet.",
                zh: "毒性、刻板印象分數、宗教偏誤 — 2021 年的結果全都指向同一個方向。能力更強的模型，學習與放大訓練資料內容的能力也更強，而訓練資料就是網路本身。" },
    blocks: [
      { type: "h3",
        text: { en: "Toxicity scales with parameters", zh: "毒性隨參數量上升" } },
      { type: "p",
        text: { en: "DeepMind’s Gopher paper, published in December 2021, is the cleanest evidence in the chapter. Holding the prompt distribution fixed and sweeping model size from 117 million to 280 billion parameters, the probability of a toxic continuation rises at every prompt-toxicity level. That single comparison is the chapter’s headline: a 280 billion parameter model developed in 2021 shows a 29% increase in elicited toxicity over a 117 million parameter model considered state of the art as of 2018. The same sweep contains a genuine consolation — larger models are also dramatically better at identifying toxic comments, with few-shot classification AUC on CivilComments climbing steadily from 44 million parameters up to 280 billion. The models that produce the problem are also the best detectors of it.",
                zh: "DeepMind 在 2021 年 12 月發表的 Gopher 論文，是本章最乾淨的證據。固定提示分布、把模型規模從 1.17 億掃到 2,800 億參數，在每一種提示毒性水準下，產出毒性續寫的機率都上升。這個比較就是本章的頭條：2021 年開發的 2,800 億參數模型，比 2018 年被視為最先進的 1.17 億參數模型多出 29% 的誘發毒性。同一組實驗也帶來真正的安慰 — 更大的模型辨識毒性留言的能力也強得多，在 CivilComments 上的少樣本分類 AUC，從 4,400 萬參數一路穩定爬升到 2,800 億參數。製造問題的模型，同時也是最好的偵測器。" } },
      { type: "p",
        text: { en: "Where the toxicity comes from is measurable too. Models trained on internet text with toxic content filtered out score far lower on expected maximum toxicity than models trained on unfiltered corpora. The surprise is BookCorpus, which produces toxic text surprisingly often for a book dataset — the report attributes this to its large share of romance novels with explicit content. The prevalence of toxic content online has been estimated at just 0.1%–3%, which is precisely why the trend matters: bigger models are better at memorizing rare text.",
                zh: "毒性從哪裡來，同樣可以量測。用過濾掉毒性內容的網路文字訓練的模型，在預期最大毒性上的分數，遠低於用未過濾語料訓練的模型。意外的是 BookCorpus：作為一個書籍資料集，它產生毒性文字的頻率高得出乎意料 — 報告認為原因是其中含有大量情節露骨的言情小說。網路上毒性內容的占比推估只有 0.1%–3%，而這正是趨勢重要的原因：模型愈大，愈擅長記住罕見文字。" } },
      { type: "h3",
        text: { en: "Detoxification is not free", zh: "去毒化不是免費的" } },
      { type: "p",
        text: { en: "The obvious fix has a cost that falls unevenly. Detoxification methods — domain-adaptive pretraining (DAPT), Plug and Play Language Models (PPLM), Generative Discriminator Guided Sequence Generation (GeDi) — all raise perplexity, meaning worse language modeling, and they do it disproportionately on African American English and on text mentioning minority identities compared with white-aligned text. The likely cause is upstream of the model: human annotators are more apt to mislabel African American English as toxic, so the detoxifier learns to penalize it. Cleaning up a model’s output can quietly marginalize the voices it was supposed to protect.",
                zh: "顯而易見的解法，代價卻分配得極不平均。去毒化方法 — 領域自適應預訓練(DAPT)、隨插即用語言模型(PPLM)、生成式判別器引導序列生成(GeDi) — 全都會推高困惑度，也就是語言建模變差，而且相較於白人語域的文字，在非裔美語與提及少數族群身分的文字上惡化得更嚴重。原因很可能出在模型之前：人類標註者更容易把非裔美語誤標為毒性，去毒器於是學會懲罰它。把模型的輸出清乾淨，可能悄悄邊緣化了它本該保護的聲音。" } },
      { type: "h3",
        text: { en: "Stereotypes follow the same curve", zh: "刻板印象走同一條曲線" } },
      { type: "ul",
        items: {
          en: ["StereoSet measures whether a model prefers stereotypes over anti-stereotypes across gender, race, religion and profession. Stereotype score rises with model size, from 58.30 at 110 million parameters to 62.00 at 175 billion — unless interventions are taken during training to reduce learned stereotypes.",
               "CrowS-Pairs contrasts historically advantaged and disadvantaged groups rather than attributes of a single group. Tested on BERT, RoBERTa and ALBERT, it inverts the capability ranking: ALBERT beats RoBERTa which beats BERT on SQuAD, GLUE and RACE, and ALBERT is the most biased of the three.",
               "The religious skew is traceable to the corpus. All three models were trained on some combination of BookCorpus, English Wikipedia and scraped web text, and an audit of BookCorpus and Smashwords21 finds books on Christianity and Islam vastly outnumbering those on Sikhism, Judaism, Hinduism, Buddhism or atheism.",
               "StereoSet itself is flawed, and the chapter says so: some examples fail to express a harmful stereotype, some conflate stereotypes about countries with stereotypes about race, and the whole dataset was sourced from crowdworkers located in the United States, so its values may not be universally representative."],
          zh: ["StereoSet 衡量模型在性別、種族、宗教與職業上，是否偏好刻板印象甚於反刻板印象。刻板印象分數隨模型規模上升，從 1.1 億參數的 58.30 升到 1,750 億參數的 62.00 — 除非在訓練過程中主動介入，減少學到的刻板印象。",
               "CrowS-Pairs 對比的是歷史上的優勢與弱勢群體，而非單一群體的屬性。用 BERT、RoBERTa、ALBERT 測試的結果，把能力排名整個倒過來：在 SQuAD、GLUE、RACE 上 ALBERT 勝過 RoBERTa、RoBERTa 勝過 BERT，但三者之中偏誤最深的正是 ALBERT。",
               "宗教面向的偏斜可以追回語料。這三個模型都用 BookCorpus、英文維基百科與網路爬文的某種組合訓練，而針對 BookCorpus 與 Smashwords21 的稽核發現，關於基督教與伊斯蘭教的書，數量遠遠壓過錫克教、猶太教、印度教、佛教或無神論。",
               "StereoSet 本身也有缺陷，本章直說了：有些例子根本沒有表達出有害的刻板印象，有些把對國家的刻板印象與對種族的混為一談，而整份資料集都由位於美國的群眾工作者提供，其中的價值判斷未必具有普遍代表性。"]
        } }
    ]
  },

  /* ------------------------------------------------- STEREOSET BAR CHART */
  {
    type: "bars",
    id: "stereoset",
    nav:      { en: "StereoSet", zh: "刻板印象分數" },
    title:    { en: "StereoSet stereotype score, by model size",
                zh: "StereoSet 刻板印象分數：依模型規模" },
    subtitle: { en: "Higher means the model more often prefers a stereotype over an anti-stereotype. The curve is not perfectly monotonic — a 345 million parameter model scored 58.20, below the 340 million parameter model at 59.30, and the largest model shown here is not the most biased — but the direction across two orders of magnitude is unmistakable.",
                zh: "分數愈高，代表模型愈常偏好刻板印象而非反刻板印象。這條曲線並非完全單調 — 一個 3.45 億參數的模型得到 58.20，低於 3.4 億參數模型的 59.30，而圖中最大的模型也不是偏誤最深的 — 但橫跨兩個數量級的方向再清楚不過。" },
    series: [
      { label: { en: "110M", zh: "1.1 億" },   value: 58.30 },
      { label: { en: "340M", zh: "3.4 億" },   value: 59.30 },
      { label: { en: "1.6B", zh: "15.6 億" },  value: 60.10 },
      { label: { en: "175B", zh: "1,750 億" }, value: 62.00 },
      { label: { en: "178B", zh: "1,780 億" }, value: 60.70 }
    ]
  },

  /* --------------------------------------- 3.1 THE MEASUREMENT LANDSCAPE */
  {
    type: "prose",
    id: "metrics-landscape",
    nav:      { en: "3.1 Metrics", zh: "3.1 指標地圖" },
    title:    { en: "3.1 — We now have a lot of bias metrics. We still can’t tell if they mean anything downstream",
                zh: "3.1 — 我們有了很多偏誤指標，卻仍然不知道它們對下游有沒有意義" },
    subtitle: { en: "The AI Index conducted original research to map the field, counting every fairness and bias metric cited at least once by another work. The count has grown steadily since 2018, split between two kinds of measurement that answer different questions — and the link between them is missing.",
                zh: "AI 指數做了原創研究來盤點這個領域，計算每一項至少被其他研究引用過一次的公平性與偏誤指標。這個數字自 2018 年起穩定成長，分成回答不同問題的兩類量測 — 而兩者之間的連結，是缺的。" },
    blocks: [
      { type: "ul",
        items: {
          en: ["Benchmark datasets contain labeled data and do not change over time. They are domain-specific — StereoSet and SuperGLUE for language, ImageNet for vision — and usually measure something intrinsic to the model rather than its downstream performance on real populations. Their value is community adoption: leaderboard submissions and papers reporting the metric make progress legible for the whole field.",
               "Diagnostic metrics measure the impact of a model on a downstream task, such as one population subgroup compared with another. Group fairness measures like demographic parity and equality of opportunity sit here. They are the ones that map onto real-world harm, and they are the ones we know least about publicly, because they are not attached to leaderboards that reward publishing results.",
               "Both have grown at a steady rate since 2016. The unusually large crop of 2017 metrics is largely one release: the Perspective API defined seven new facets of toxicity at once — toxicity, severe toxicity, identity attack, insult, obscene, sexually explicit and threat.",
               "Benchmarks are static snapshots of a specific cultural and temporal context. As the chapter puts it, a benchmark published in 2017 may not correlate to the deployment context of 2022. Some leaderboards can also be gamed, and some rest on datasets with incorrect labels or poorly defined classes."],
          zh: ["基準資料集含有標註資料，而且不隨時間改變。它們是領域專屬的 — 語言用 StereoSet 與 SuperGLUE、視覺用 ImageNet — 通常衡量的是模型的內在性質，而非它在真實族群上的下游表現。它們的價值在於社群採用度：排行榜投稿數與回報該指標的論文數，讓整個領域的進展變得可讀。",
               "診斷指標衡量的是模型在下游任務上的影響，例如某個族群子群體相對於另一群體的表現。人口統計均等、機會均等這類群體公平性量測屬於這一類。它們才是真正對應到現實傷害的指標，而我們對它們的公開資訊也最少，因為它們沒有掛在會獎勵公開結果的排行榜上。",
               "兩類指標自 2016 年以來都以穩定速度成長。2017 年之所以特別多，主要來自單一次發布：Perspective API 一口氣定義了七個毒性面向 — 毒性、嚴重毒性、身分攻擊、侮辱、猥褻、性露骨與威脅。",
               "基準是特定文化與時間脈絡下的靜態快照。用本章的話說，2017 年發表的基準，未必對應得上 2022 年的部署情境。有些排行榜也可能被操弄，有些則建立在標籤錯誤或類別界定不清的資料集上。"]
        } },
      { type: "h3",
        text: { en: "The gap nobody has closed", zh: "還沒有人補上的落差" } },
      { type: "p",
        text: { en: "The chapter’s most consequential sentence is a negative result. It is commonly assumed that de-biasing a model’s embeddings — reducing intrinsic bias — will reduce the bias that shows up in applications. It has been demonstrated that there is no reliable correlation between intrinsic bias metrics and downstream application biases. The majority of the metrics in this chapter measure intrinsic bias. So the field has built a large and growing measurement apparatus whose relationship to real-world harm remains unestablished, and the chapter says plainly that further investigation is needed.",
                zh: "本章影響最深遠的一句話，是一個否定結果。人們普遍假設，把模型的嵌入去偏誤 — 降低內在偏誤 — 就會減少應用層面浮現的偏誤。但研究已經證明，內在偏誤指標與下游應用偏誤之間，並沒有可靠的相關性。而本章列出的多數指標，量測的正是內在偏誤。也就是說，這個領域打造了一套規模愈來愈大的量測裝置，它與真實傷害的關係卻仍未被建立；本章直白地說，還需要進一步的研究。" } },
      { type: "h3",
        text: { en: "Gender, occupation and translation", zh: "性別、職業與翻譯" } },
      { type: "ul",
        items: {
          en: ["Winogender builds coreference sentences around occupations skewed by gender in U.S. Bureau of Labor Statistics data — cashiers are 73% women, drivers only 6%. On the SuperGLUE leaderboard, larger models do resolve gender better: coreference accuracy reaches 0.72 at 64 billion parameters and 0.71 at 280 billion, against 0.53 at 31 million. Crowdsourced human performance is 99.7%.",
               "A good Winogender score does not mean a model is unbiased with respect to gender. It means this benchmark did not capture the bias.",
               "WinoBias was released concurrently by a different group and is cited more often — 128 citations against Winogender’s 95 in 2021 — but Winogender’s place on the SuperGLUE leaderboard means more models get evaluated on it.",
               "WinoMT combines the two datasets to test machine translation. Google Translate performs better across all eight tested languages — Arabic, English, French, German, Hebrew, Italian, Russian, Ukrainian — when the occupation conforms to a gender stereotype, and translates with the correct gender only up to 60% of the time. Microsoft Translator, Amazon Translate and SYSTRAN behave similarly."],
          zh: ["Winogender 依據美國勞工統計局資料，挑出性別分布明顯偏斜的職業來造共指句 — 收銀員 73% 是女性，司機只有 6%。在 SuperGLUE 排行榜上，較大的模型確實解得更好：共指準確率在 640 億參數達到 0.72、2,800 億參數 0.71，而 3,100 萬參數只有 0.53。群眾標註推估的人類表現是 99.7%。",
               "Winogender 分數漂亮，不代表模型在性別上沒有偏誤。只代表這個基準沒有抓到那個偏誤。",
               "WinoBias 由另一個團隊同期發布，被引用次數更高 — 2021 年 128 次對 Winogender 的 95 次 — 但 Winogender 進了 SuperGLUE 排行榜，所以有更多模型在它上面被評測。",
               "WinoMT 把兩份資料集合起來測機器翻譯。在受測的八種語言 — 阿拉伯文、英文、法文、德文、希伯來文、義大利文、俄文、烏克蘭文 — Google 翻譯在職業符合性別刻板印象時表現都比較好，而翻對性別的比例最高也只到 60%。Microsoft Translator、Amazon Translate 與 SYSTRAN 的行為類似。"]
        } }
    ]
  },

  /* -------------------------------------------------------- METRIC CARDS */
  {
    type: "cards",
    id: "toolbox",
    nav:      { en: "The toolbox", zh: "量測工具箱" },
    title:    { en: "The measurement toolbox, and what each tool can’t see",
                zh: "量測工具箱 — 以及每個工具看不見的東西" },
    subtitle: { en: "Six families of metric carry most of the chapter. Each was designed against a specific harm, and each has a documented blind spot that the chapter is careful to name.",
                zh: "本章的重量幾乎都落在六類指標上。每一類都是針對某種特定傷害設計的，也各自有本章謹慎點名的盲點。" },
    items: [
      { slug: "realtoxicityprompts",
        title:   { en: "RealToxicityPrompts + Perspective API", zh: "RealToxicityPrompts 與 Perspective API" },
        summary: { en: "English prompts that measure how often a model completes them with toxic text, scored by a Google-built classifier the research community adopted wholesale.",
                   zh: "一組英文提示，用來衡量模型多常把它們續寫成毒性文字，由一個 Google 打造、研究社群全面採用的分類器評分。" },
        tags: ["toxicity"],
        overview: { en: "Toxicity is defined as a rude, disrespectful or unreasonable comment likely to make someone leave a conversation. RealToxicityPrompts reports two numbers: expected maximum toxicity, the average worst-case score across completions, and toxicity probability, how often a completion is expected to be toxic. Scoring runs through the Perspective API, released by Jigsaw in 2017 and now the de facto standard — the number of research papers using it doubled between 2020 and 2021, from 8 to 19. That concentration is itself a risk: one company’s classifier now defines what the field calls toxic.",
                   zh: "毒性的定義是：粗魯、不尊重或無理的言論，足以讓人離開對話。RealToxicityPrompts 回報兩個數字：預期最大毒性(續寫中最壞情況分數的平均)與毒性機率(續寫預期為毒性的頻率)。評分透過 Perspective API 進行，它由 Jigsaw 於 2017 年釋出，如今是事實上的標準 — 使用它的研究論文數在 2020 到 2021 年間翻倍，從 8 篇增至 19 篇。這種集中本身就是風險：一家公司的分類器，現在定義了整個領域所謂的「毒性」。" } },
      { slug: "stereoset",
        title:   { en: "StereoSet", zh: "StereoSet" },
        summary: { en: "Measures whether a model prefers stereotypes and anti-stereotypes equally, across gender, race, religion and profession, alongside raw language modeling ability.",
                   zh: "衡量模型是否同等看待刻板印象與反刻板印象，涵蓋性別、種族、宗教與職業，同時一併測量原始語言建模能力。" },
        tags: ["stereotypes", "benchmarks"],
        overview: { en: "A stereotype is an over-generalized belief widely held about a group; an anti-stereotype is a generalization that contradicts it. The associated stereotype score rose from 58.30 at 110 million parameters to 62.00 at 175 billion. The chapter is unusually candid about the benchmark’s flaws: some examples fail to express a harmful stereotype at all, some conflate stereotypes about countries with stereotypes about race and ethnicity, and some confuse associated but distinct groups. Every stereotype in it came from crowdworkers in the United States.",
                   zh: "刻板印象是關於某群體、被廣泛持有的過度概化信念；反刻板印象則是與之牴觸的概化。對應的刻板印象分數，從 1.1 億參數的 58.30 上升到 1,750 億參數的 62.00。本章對這個基準的缺陷坦率得少見：有些例子根本沒有表達出有害的刻板印象，有些把對國家與對種族族裔的刻板印象混為一談，有些則搞混了相關但不同的群體。而其中每一則刻板印象，都來自位於美國的群眾工作者。" } },
      { slug: "crows-pairs",
        title:   { en: "CrowS-Pairs", zh: "CrowS-Pairs" },
        summary: { en: "Contrasts historically advantaged and disadvantaged groups across nine bias attributes — and found the most capable of three models to be the most biased.",
                   zh: "在九個偏誤面向上對比歷史優勢與弱勢群體 — 結果發現三個模型中能力最強的那個，偏誤也最深。" },
        tags: ["stereotypes"],
        overview: { en: "Where StereoSet compares attributes of a single group, CrowS-Pairs compares relationships between groups, covering age, disability, gender identity, nationality, physical appearance, race and color, religion, sexual orientation and socioeconomic status. Its authors tested BERT, RoBERTa and ALBERT. ALBERT outperforms RoBERTa, which outperforms BERT on SQuAD, GLUE and RACE — and ALBERT is the most biased of the three. That inversion is the chapter’s thesis in miniature.",
                   zh: "StereoSet 比較的是單一群體的屬性，CrowS-Pairs 比較的則是群體之間的關係，涵蓋年齡、身心障礙、性別認同、國籍、外表、種族與膚色、宗教、性傾向與社經地位。作者用 BERT、RoBERTa、ALBERT 做了測試。在 SQuAD、GLUE、RACE 上 ALBERT 勝過 RoBERTa、RoBERTa 勝過 BERT — 而三者中偏誤最深的正是 ALBERT。這個顛倒，就是本章論點的縮影。" } },
      { slug: "winogender-winobias",
        title:   { en: "Winogender and WinoBias", zh: "Winogender 與 WinoBias" },
        summary: { en: "Coreference tests built on occupations that skew by gender in U.S. labor statistics. Two teams released near-identical benchmarks at the same time.",
                   zh: "以美國勞動統計中性別分布偏斜的職業為基礎的共指測試。兩個團隊在同一時間發布了幾乎相同的基準。" },
        tags: ["gender", "benchmarks"],
        overview: { en: "The task is to fill in the correct gender in a sentence containing an occupation, and the score is the accuracy gap between stereotypical and anti-stereotypical cases, plus a gender parity score. Crowdsourced human accuracy is 99.7%; the best model on the SuperGLUE leaderboard reaches 0.72 coreference accuracy at 64 billion parameters. WinoBias attracted more citations in 2021 — 128 against 95 — but Winogender’s inclusion in SuperGLUE means far more models actually report it. The chapter’s caution is explicit: a good score means only that this benchmark did not capture the bias.",
                   zh: "任務是在含有職業的句子裡填入正確性別，分數是刻板情境與反刻板情境的準確率落差，外加一個性別均等分數。群眾標註的人類準確率為 99.7%；SuperGLUE 排行榜上最好的模型，在 640 億參數時共指準確率達 0.72。WinoBias 在 2021 年的引用數較高 — 128 對 95 — 但 Winogender 進了 SuperGLUE，實際回報它的模型多得多。本章的提醒很明確：分數好，只代表這個基準沒有抓到那個偏誤。" } },
      { slug: "winomt",
        title:   { en: "WinoMT", zh: "WinoMT" },
        summary: { en: "Combines Winogender and WinoBias to measure gender bias in commercial machine translation, where mistakes are costly at global scale.",
                   zh: "結合 Winogender 與 WinoBias，用來衡量商用機器翻譯的性別偏誤 — 在全球規模下，這種錯誤代價高昂。" },
        tags: ["gender", "translation"],
        overview: { en: "Sentences are translated from English into another language, the gender is extracted from the translation and compared with the original. Systems are scored on gender accuracy, the F1 gap between masculine and feminine examples, and the F1 gap between stereotypical and anti-stereotypical roles. Across Arabic, English, French, German, Hebrew, Italian, Russian and Ukrainian, Google Translate does better whenever the occupation conforms to a gender stereotype, and gets gender right only up to 60% of the time. Microsoft Translator, Amazon Translate and SYSTRAN behave similarly, so this is an industry property rather than one vendor’s bug.",
                   zh: "把句子從英文翻成另一種語言，再從譯文中抽出性別，與原文比對。系統以性別準確率、陽性與陰性例子的 F1 落差，以及刻板與反刻板角色的 F1 落差計分。在阿拉伯文、英文、法文、德文、希伯來文、義大利文、俄文與烏克蘭文上，只要職業符合性別刻板印象，Google 翻譯的表現就比較好，而翻對性別的比例最高只到 60%。Microsoft Translator、Amazon Translate 與 SYSTRAN 表現類似，所以這是整個產業的性質，不是單一廠商的瑕疵。" } },
      { slug: "embedding-tests",
        title:   { en: "WEAT, SEAT, iEAT and their extensions", zh: "WEAT、SEAT、iEAT 與其延伸" },
        summary: { en: "The association tests measure bias inside the representation itself — and they work on images and on languages other than English too.",
                   zh: "聯想測試量測的是表徵內部的偏誤 — 而且同樣適用於影像，以及英文以外的語言。" },
        tags: ["embeddings"],
        overview: { en: "WEAT quantifies the effect size of an association between concepts and attributes in English static word embeddings, such as European-American versus African American names against pleasantness. CEAT extends it to contextualized embeddings, SEAT to sentence encoders, iEAT to images — where pretrained vision models iGPT and simCLRv2 show humanlike biases on gender, race, age and disability — and XWEAT across languages, finding that bias in cross-lingual embeddings can roughly be predicted from the corresponding monolingual embedding. Newer transformer models are less biased than their predecessors on SEAT, but most still show significant bias on gender and occupations and on African American versus European-American names. A separate analysis over 100 years of U.S. text shows embedding bias tracking real history: the women’s movement in the 1960s, Asian immigration to the United States.",
                   zh: "WEAT 量化英文靜態詞嵌入中，概念與屬性之間聯想的效果量，例如歐裔美國人與非裔美國人姓名對上愉悅程度。CEAT 把它延伸到脈絡化嵌入，SEAT 延伸到句子編碼器，iEAT 延伸到影像 — 預訓練視覺模型 iGPT 與 simCLRv2 在性別、種族、年齡與身心障礙上展現類人的偏誤 — XWEAT 則跨語言，發現跨語言嵌入的偏誤，大致可由對應的單語嵌入偏誤預測出來。較新的 transformer 模型在 SEAT 上的偏誤低於前代，但多數仍在性別與職業、以及非裔與歐裔美國人姓名上顯示顯著偏誤。另一項橫跨百年美國文本的分析則顯示，嵌入偏誤忠實追蹤真實歷史：1960 年代的女性運動、亞洲移民進入美國。" } }
    ]
  },

  /* ------------------------------------------------- NEURIPS TOPICS CHART */
  {
    type: "bars",
    id: "neurips",
    nav:      { en: "NeurIPS topics", zh: "NeurIPS 主題" },
    title:    { en: "What NeurIPS accepted on ethics in 2021",
                zh: "2021 年 NeurIPS 在倫理題目上接受了什麼" },
    subtitle: { en: "Accepted papers in 2021, counting the main track and the matching ethics-related workshops. Every one of these lines started near zero: fairness and bias was 2 papers in 2015, privacy 1, interpretability 2. NeurIPS held its first workshop on fairness, accountability and transparency in 2014, and from 2020 has required authors to submit broader impact statements.",
                zh: "2021 年被接受的論文數，計入主議程與對應的倫理相關工作坊。這些線每一條都是從近乎零開始的：公平性與偏誤在 2015 年只有 2 篇、隱私 1 篇、可解釋性 2 篇。NeurIPS 在 2014 年舉辦第一場公平性、問責與透明度工作坊，並自 2020 年起要求作者提交更廣泛影響聲明。" },
    series: [
      { label: { en: "Fairness/bias", zh: "公平與偏誤" },  value: 168 },
      { label: { en: "Privacy", zh: "隱私" },              value: 128 },
      { label: { en: "Causality", zh: "因果推論" },        value: 76 },
      { label: { en: "Explainability", zh: "可解釋性" },   value: 41 }
    ]
  },

  /* ------------------------------------- 3.3 WHO IS DOING THE ETHICS WORK */
  {
    type: "prose",
    id: "community",
    nav:      { en: "3.3 Conferences", zh: "3.3 學術社群" },
    title:    { en: "3.3 — AI ethics stopped being a side workshop. It also stopped being global",
                zh: "3.3 — AI 倫理不再是邊緣工作坊，但也不再是全球性的" },
    subtitle: { en: "Research on fairness and transparency has exploded since 2014, with a fivefold increase in related publications at ethics-related conferences. Two things came with the growth: industry money and authorship, and a geographic concentration that got narrower, not wider, in 2021.",
                zh: "公平性與透明度研究自 2014 年起爆發，倫理相關研討會的相關論文成長為五倍。伴隨成長而來的有兩件事：產業界的資金與作者身分，以及一個在 2021 年不但沒有變廣、反而更收窄的地理集中度。" },
    blocks: [
      { type: "h3",
        text: { en: "Industry moved in", zh: "產業界進場了" } },
      { type: "p",
        text: { en: "FAccT was one of the first major conferences created to bring researchers, practitioners and policymakers together around sociotechnical analysis of algorithms, and it publishes a significant amount of work critical of contemporary AI methods — Model Cards for Model Reporting in 2019 and On the Dangers of Stochastic Parrots in 2021 both appeared there. In 2021, 53 authors listed an industry affiliation, up from 31 in 2020 and only 5 at the inaugural conference in 2018. That is 71% growth year over year, and it aligns with the wider trend of deep learning researchers moving from academia into industry labs. Industry groups still often publish with academic collaborators, but standalone industry work is rising.",
                zh: "FAccT 是最早成立、把研究者、實務工作者與政策制定者聚在一起做演算法社會技術分析的大型研討會之一，而且發表了大量批判當代 AI 方法的研究 — 2019 年的〈Model Cards for Model Reporting〉與 2021 年的〈On the Dangers of Stochastic Parrots〉都出自這裡。2021 年有 53 位作者標註了產業界身分，高於 2020 年的 31 位，以及 2018 年首屆會議的區區 5 位。這是年增 71%，也呼應了深度學習研究者從學界移往產業實驗室的更大趨勢。產業團隊仍常與學界合作發表，但獨立的產業界研究正在增加。" } },
      { type: "h3",
        text: { en: "The map got smaller", zh: "地圖反而縮小了" } },
      { type: "p",
        text: { en: "The majority of papers published at FAccT are written by researchers based in the United States, followed by Europe and Central Asia. From 2020 to 2021 the North American share did not fall as the field grew — it rose, from 70.2% to 75.4%. Every other region sits in the single digits or below: East Asia and Pacific 4.03%, Latin America and the Caribbean 1.61%, the Middle East and North Africa 1.21%, Sub-Saharan Africa 0.40%, and South Asia 0.00%. The field deciding what counts as fair is drawn from a narrower slice of the world each year.",
                zh: "在 FAccT 發表的論文，多數由位於美國的研究者撰寫，其次是歐洲與中亞。從 2020 到 2021 年，北美的占比並沒有隨著領域擴張而下降 — 反而上升，從 70.2% 升到 75.4%。其他每一個區域都落在個位數或更低：東亞與太平洋 4.03%、拉丁美洲與加勒比海 1.61%、中東與北非 1.21%、撒哈拉以南非洲 0.40%，南亞 0.00%。決定什麼算「公平」的這群人，每年來自世界上更窄的一塊。" } },
      { type: "h3",
        text: { en: "What NeurIPS chose to work on", zh: "NeurIPS 選擇投入的題目" } },
      { type: "ul",
        items: {
          en: ["Papers on fairness and bias — main track titles plus fairness workshops — climbed from 2 in 2015 to 168 in 2021, with the sharp turn beginning in 2017.",
               "Privacy research grew from a single paper in 2015 to 128 in 2021, covering federated learning, differential privacy and privacy in specific domains such as financial services. It peaked at 150 in 2020.",
               "Causal effect and counterfactual reasoning reached 76 papers in 2021, and NeurIPS ran three workshops dedicated to causal inference that year, one devoted entirely to causality and algorithmic fairness. Counterfactual fairness formalizes the idea that a decision is fair if it would be the same had the individual belonged to a different demographic.",
               "Interpretability and explainability reached 41 papers, up from 2 in 2015, with much of the recent growth in the NeurIPS main track rather than in workshops.",
               "Beyond the ethics topics themselves, NeurIPS workshop papers on real-world impacts — climate, finance, healthcare, the developing world — have grown over the past six years, pointing at increased interest in AI applied to high-risk, high-impact use cases."],
          zh: ["公平性與偏誤論文 — 主議程標題加上公平性工作坊 — 從 2015 年的 2 篇攀升到 2021 年的 168 篇，急轉點出現在 2017 年。",
               "隱私研究從 2015 年的 1 篇成長到 2021 年的 128 篇，涵蓋聯邦式學習、差分隱私，以及金融服務等特定領域的隱私議題。它在 2020 年達到高點 150 篇。",
               "因果效應與反事實推理在 2021 年達到 76 篇，同年 NeurIPS 舉辦了三場專門討論因果推論的工作坊，其中一場完全聚焦於因果與演算法公平性。反事實公平性把一個想法形式化：如果當事人屬於另一個人口群體時決策不變，這個決策就是公平的。",
               "可解釋性與說明性達到 41 篇，而 2015 年只有 2 篇；近期的成長多半發生在 NeurIPS 主議程，而非工作坊。",
               "除了倫理題目本身，NeurIPS 工作坊中關於真實世界影響的論文 — 氣候、金融、醫療、開發中國家 — 在過去六年持續成長，顯示 AI 應用於高風險、高影響場域的關注度正在上升。"]
        } }
    ]
  },

  /* --------------------------------------------- FACT-CHECKING LANGUAGES */
  {
    type: "bars",
    id: "languages",
    nav:      { en: "Languages", zh: "語言落差" },
    title:    { en: "Automated fact-checking benchmarks, by language",
                zh: "自動事實查核基準：依語言分布" },
    subtitle: { en: "There are 142 English-only benchmarks and 35 in every other language combined. The tail below Spanish is French, German and Portuguese at 2 each, then Bengali, Bulgarian, Croatian, Italian, Malayalam and Tamil at 1 each. Whatever automated fact-checking can do in 2021, it can mostly do in English.",
                zh: "純英文的基準有 142 個，所有其他語言加起來只有 35 個。西班牙文之後的長尾是各 2 個的法文、德文與葡萄牙文，再來是各 1 個的孟加拉文、保加利亞文、克羅埃西亞文、義大利文、馬拉雅拉姆文與坦米爾文。2021 年自動事實查核能做到的事，基本上只能用英文做。" },
    series: [
      { label: { en: "English", zh: "英文" },      value: 142 },
      { label: { en: "Arabic", zh: "阿拉伯文" },   value: 14 },
      { label: { en: "Chinese", zh: "中文" },      value: 5 },
      { label: { en: "Hindi", zh: "印地文" },      value: 3 },
      { label: { en: "Spanish", zh: "西班牙文" },  value: 3 }
    ]
  },

  /* ----------------------------------- 3.4 FACTUALITY, TRUTH AND CLIP */
  {
    type: "accordion",
    id: "truthfulness",
    nav:      { en: "3.4 Truthfulness", zh: "3.4 事實性" },
    title:    { en: "3.4 — Five questions about what models say, and what they see",
                zh: "3.4 — 關於模型說什麼、看到什麼的五個問題" },
    subtitle: { en: "Today’s state-of-the-art language models generate false information about the world, which makes them unsafe for fully automated decision making. This section measures how false, and asks whether scale helps.",
                zh: "當今最先進的語言模型會生成關於世界的錯誤資訊，這讓它們不適合用於全自動決策。這一節量測「錯得多嚴重」，並追問規模到底有沒有幫助。" },
    qa: [
      { q: { en: "Can AI check facts yet?", zh: "AI 現在能查核事實了嗎？" },
        a: { en: "Partly, and mostly as an assistant rather than a replacement. Deployed systems help human fact-checkers by flagging potential false claims, surfacing previously checked similar claims, or retrieving supporting evidence. Fully automated fact-checking is still an active research area — the 2017 Fake News Challenge pushed stance detection, and in 2019 a Canadian venture capital firm put $1 million into an automated fact-checking competition. On FEVER, which requires a system to both classify a claim and extract supporting evidence from English Wikipedia, state-of-the-art performance reached 79.35 label accuracy and a 76.78 FEVER score in 2021, both rising steadily since 2018. The task is usually framed narrowly: of the fact-checking datasets surveyed, 75 binarize labels into true or false, 28 use three classes and 16 use four.",
             zh: "部分可以，而且主要是當助手而非取代人。已部署的系統協助人類查核者標出可能的不實主張、找出先前查核過的類似主張，或檢索支持證據。全自動事實查核仍是活躍的研究領域 — 2017 年的 Fake News Challenge 推動立場偵測，2019 年一家加拿大創投為自動事實查核競賽投入 100 萬美元。在 FEVER 上，系統必須同時分類主張並從英文維基百科抽出支持證據，2021 年的最佳表現達到 79.35 的標籤準確率與 76.78 的 FEVER 分數，兩者自 2018 年起穩定上升。這個任務通常被設定得很窄：在被盤點的事實查核資料集中，有 75 個把標籤二元化為真或假，28 個用三類，16 個用四類。" } },
      { q: { en: "Do bigger models tell the truth more often?", zh: "更大的模型會更常說實話嗎？" },
        a: { en: "The chapter cannot resolve this, and says so. TruthfulQA asks questions from health, law, finance and politics that humans often get wrong because of common misconceptions — asked what happens if you smash a mirror, GPT-3 answers that you will have seven years of bad luck. Initial multiple-choice experiments on GPT-Neo, GPT-2, T5 and GPT-3 found that larger models give more informative answers but are not necessarily more truthful. Later experiments on Gopher contradicted that: accuracy improved with model size. The likely explanation is that TruthfulQA was collected adversarially against GPT-3 175B, which would depress that family specifically. On the open-ended generation task, WebGPT and InstructGPT both become more truthful and informative as they scale; the exception is the supervised fine-tuned baseline, which underperforms with scale exactly as the TruthfulQA paper predicted.",
             zh: "本章無法給出定論，而且直說了。TruthfulQA 出的是健康、法律、金融與政治領域的問題，人類常因為常見迷思而答錯 — 問「打破鏡子會怎樣」，GPT-3 回答你會倒楣七年。針對 GPT-Neo、GPT-2、T5 與 GPT-3 的初期選擇題實驗發現，較大的模型給出更有資訊量的答案，但未必更真實。後來針對 Gopher 的實驗則得出相反結論：準確率隨模型規模上升。可能的解釋是，TruthfulQA 是針對 GPT-3 175B 對抗式蒐集的，因此會特別壓低該系列的表現。在開放式生成任務上，WebGPT 與 InstructGPT 都隨規模變得更真實、更有資訊量；例外是監督式微調的基線模型，它隨規模表現變差，正如 TruthfulQA 論文所預測。" } },
      { q: { en: "Does citing sources make a model safer?", zh: "會引用來源的模型比較安全嗎？" },
        a: { en: "Possibly the opposite. WebGPT was built to improve GPT-3’s factual accuracy by searching the web for sources to cite alongside its answers, and it does outperform GPT-3. But it still struggles with out-of-distribution questions and its performance is considerably below human performance. The chapter draws the uncomfortable conclusion: because WebGPT cites sources and therefore appears more authoritative, its untruthful answers may be more harmful, since users are unlikely to open every citation and verify it. Making a model look trustworthy is not the same as making it trustworthy.",
             zh: "可能剛好相反。WebGPT 的設計目的是改善 GPT-3 的事實準確度，做法是上網搜尋來源，在回答旁附上引用，而它確實勝過 GPT-3。但它在分布外的問題上仍然吃力，表現也遠低於人類。本章導出了一個不太舒服的結論：正因為 WebGPT 會引用來源、看起來更權威，它不實的回答反而可能更有害 — 使用者不太可能一一點開引用去查證。讓模型看起來可信，和讓模型真的可信，是兩回事。" } },
      { q: { en: "What did CLIP learn from 400 million image-text pairs?", zh: "CLIP 從 4 億組圖文配對學到了什麼？" },
        a: { en: "Multimodal capability, and multimodal bias with it. CLIP learns visual concepts from natural language and can outperform the best ImageNet-trained models on a range of classification tasks. Probing it with non-human and crime-related classes added to the FairFace dataset — animal, gorilla, chimpanzee, orangutan, thief, criminal, suspicious person — produced images of Black people misclassified as nonhuman at 14%, against 7.6% for the next highest group, images of Indian people. People aged 20 and under were more likely than any other age group to be assigned crime-related classes. Probing with the Members of Congress dataset attached nanny and housekeeper to women, prisoner and mobster to men; CLIP almost exclusively associates high-status labels such as executive and doctor with men, and disproportionately attaches appearance-related labels to women. Design decisions as mundane as the similarity threshold have outsized impacts on both performance and bias.",
             zh: "學到了多模態能力，也一併學到了多模態偏誤。CLIP 從自然語言學習視覺概念，在一系列分類任務上可以勝過最好的 ImageNet 訓練模型。研究者在 FairFace 資料集的類別中加入非人與犯罪相關的標籤 — 動物、大猩猩、黑猩猩、紅毛猩猩、小偷、罪犯、可疑人物 — 結果黑人影像被誤分類為非人的比率是 14%，而次高的族裔(印度人影像)是 7.6%。20 歲以下的人被歸入犯罪相關類別的機率，高於任何其他年齡層。用國會議員資料集探測時，保母與管家被連到女性，囚犯與黑幫被連到男性；CLIP 幾乎只把主管、醫師這類高地位標籤給男性，並不成比例地把外表相關標籤貼到女性身上。連相似度門檻這種平凡的設計決定，都會對表現與偏誤造成過大的影響。" } },
      { q: { en: "Does that bias stay inside CLIP?", zh: "這些偏誤會留在 CLIP 裡面嗎？" },
        a: { en: "No — it gets baked into the next dataset. CLIP also learned historical bias and conspiracy theories from its internet-sourced training data: in one documented probe it assigns higher similarity to housewife with an orange jumpsuit than to the correct description for a photograph of astronaut Eileen Collins. This matters because CLIP embeddings were used to filter LAION-400M for high-quality image-text pairs, and the biases CLIP learned were shown to propagate into LAION-400M, affecting anything built on it afterwards. The language gap compounds it: CLIP can be extended to other languages by swapping in a multilingual encoder such as mBERT, but mBERT performs worse than no pretrained model at all on 30% of its 104 languages, and even for French and Spanish there are noticeable accuracy gaps in gender and age classification.",
             zh: "不會 — 它會被烘進下一個資料集。CLIP 也從網路來源的訓練資料學到了歷史偏見與陰謀論：在一次記錄下來的探測中，面對太空人 Eileen Collins 的照片，它給「穿橘色連身衣的家庭主婦」的相似度，高於正確的描述。這件事之所以重要，是因為 LAION-400M 正是用 CLIP 的嵌入篩選出高品質圖文配對的，而研究顯示 CLIP 學到的偏誤會傳遞進 LAION-400M，影響之後所有以它為基礎打造的東西。語言落差讓問題加倍：CLIP 可以換上 mBERT 這類多語編碼器來延伸到其他語言，但 mBERT 在它 104 種語言中的 30% 上，表現比完全不用預訓練模型還差，而即使是法文與西班牙文，性別與年齡分類也還有明顯的準確率落差。" } }
    ]
  },

  /* ------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In its words", zh: "報告原文" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 3 · Technical AI Ethics.",
                zh: "第 3 章「AI 技術倫理」的頭條發現。" },
    quotes: [
      { text: { en: "A 280 billion parameter model developed in 2021 shows a 29% increase in elicited toxicity over a 117 million parameter model considered the state of the art as of 2018.",
                zh: "2021 年開發的 2,800 億參數模型，誘發毒性比 2018 年被視為最先進的 1.17 億參數模型高出 29%。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "Research on fairness and transparency in AI has exploded since 2014, with a fivefold increase in related publications at ethics-related conferences. Researchers with industry affiliations contributed 71% more publications year over year.",
                zh: "AI 的公平性與透明度研究自 2014 年起爆發，倫理相關研討會的相關論文成長為五倍。具產業界身分的研究者，論文產出年增 71%。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "Experiments on CLIP showed that images of Black people were misclassified as nonhuman at over twice the rate of any other race.",
                zh: "在 CLIP 上的實驗顯示，黑人影像被誤分類為非人的比率，是其他任何族裔的兩倍以上。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "It has been demonstrated that there is no reliable correlation between intrinsic bias metrics and downstream application biases. Further investigation is needed.",
                zh: "研究已經證明，內在偏誤指標與下游應用偏誤之間並沒有可靠的相關性。還需要進一步的研究。" },
        by: "Chapter 3 · Technical AI Ethics" },
      { text: { en: "A benchmark published in 2017 may not correlate to the deployment context of 2022.",
                zh: "2017 年發表的基準，未必對應得上 2022 年的部署情境。" },
        by: "Chapter 3 · Technical AI Ethics" }
    ]
  },

  /* ---------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav: { en: "Source", zh: "章節原文" },
    title: { en: "Read Chapter 3 in full", zh: "閱讀第 3 章原文" },
    text:  { en: "Chapter 3 (sections 3.1–3.4) — the meta-analysis of fairness and bias metrics, NLP bias benchmarks, AI ethics trends at FAccT and NeurIPS, and factuality and truthfulness — with every figure and citation is free from Stanford HAI.",
             zh: "第 3 章(3.1–3.4 各節) — 公平性與偏誤指標的統合分析、自然語言處理偏誤基準、FAccT 與 NeurIPS 的 AI 倫理趨勢，以及事實性與真實性 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2022-ai-index-report",
             label: { en: "Open the AI Index 2022 →", zh: "開啟 AI 指數 2022 →" } }
  }
];

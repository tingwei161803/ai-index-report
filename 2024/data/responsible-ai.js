/* =========================================================================
   Responsible AI — deep dive · responsible-ai.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2024, Chapter 3
   https://hai.stanford.edu/ai-index/2024-ai-index-report

   The seventh edition, describing 2023. Every figure below comes from
   Chapter 3: 3.1 Assessing Responsible AI, 3.2 Privacy and Data Governance,
   3.3 Transparency and Explainability, 3.4 Security and Safety, 3.5 Fairness,
   3.6 AI and Elections. The chapter's own headline: responsible AI is being
   measured, but nobody is measuring it the same way.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "responsible-ai";

window.SITE_META = {
  title:    { en: "AI Index Report 2024", zh: "AI 指數報告 2024" },
  subtitle: { en: "Responsible AI · a chapter deep dive", zh: "負責任 AI 專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The year AI responsibility got measured — by everyone, differently",
                zh: "負責任 AI 開始被衡量的一年 — 每個人都在量，但量法都不一樣" },
    subtitle: { en: "Chapter 3 of the AI Index 2024 covers 2023, the year responsible AI stopped being a principle and started being a number. The trouble is whose number. Leading developers test their flagship models on the same capability benchmarks and share almost nothing on the safety side, incidents kept climbing, transparency scored badly on its first-ever scorecard, and researchers found ways to pull training data straight back out of shipped models. The figures:",
                zh: "AI 指數 2024 第 3 章講的是 2023 年 — 負責任 AI 從一種主張，變成一組數字的一年。問題在於那是誰家的數字。主要開發者用同一批能力基準測試旗艦模型，安全面向卻幾乎沒有交集；事故數持續上升；透明度在史上第一份成績單上表現難看；研究者也找到辦法，把訓練資料直接從已上線的模型裡拉出來。先看數字：" },
    stats: [
      { label: { en: "AI incidents reported in 2023 — a 32.3% increase over 2022", zh: "2023 年通報的 AI 事故數 — 較 2022 年增加 32.3%" }, value: 123 },
      { label: { en: "of 5 leading developers report TruthfulQA — the highest agreement any RAI benchmark reached", zh: "5 家主要開發者中回報 TruthfulQA 的家數 — 這已是負責任 AI 基準中共識最高的一個" }, value: 3 },
      { label: { en: "mean Foundation Model Transparency Index score out of 100, October 2023", zh: "基礎模型透明度指數平均分，滿分 100，2023 年 10 月" }, value: 37 },
      { label: { en: "privacy and data governance submissions at six leading conferences in 2023 (2022: 92)", zh: "2023 年六大研討會的隱私與資料治理投稿數(2022 年為 92 篇)" }, value: 213 },
      { label: { en: "% of organizations agreeing foundation model developers must mitigate all associated risks", zh: "% 認同基礎模型開發者應承擔所有相關風險緩解責任的組織" }, value: 88 },
      { label: { en: "% of the time listeners correctly identified an audio deepfake (sample of 529)", zh: "% 聽眾正確辨識出音訊深偽的比例(樣本 529 人)" }, value: 73 }
    ]
  },

  /* ------------------------------------------------ 3.1 THE REPORTING GAP */
  {
    type: "prose",
    id: "standardization",
    nav:      { en: "3.1 Benchmarks", zh: "3.1 基準" },
    title:    { en: "3.1 — Everyone reports MMLU. Nobody agrees on a responsibility test",
                zh: "3.1 — 每個人都回報 MMLU，卻沒有人對「責任」測試有共識" },
    subtitle: { en: "New analysis from the AI Index took one flagship model from each of OpenAI, Meta, Anthropic, Google and Mistral AI — GPT-4, Llama 2, Claude 2, Gemini and Mistral 7B — and simply read off which benchmarks each developer chose to report. On general capability the overlap is near-total. On responsibility it falls apart.",
                zh: "AI 指數的新分析從 OpenAI、Meta、Anthropic、Google 與 Mistral AI 各取一個旗艦模型 — GPT-4、Llama 2、Claude 2、Gemini 與 Mistral 7B — 單純把每家開發者選擇回報的基準列出來看。在通用能力上，交集幾乎是滿的；在責任面向上，整個散掉。" },
    blocks: [
      { type: "p",
        text: { en: "For general capabilities the industry has a de facto standard. MMLU, Codex HumanEval and GSM8K appear in all five developers’ reporting; HellaSwag and ARC Challenge appear in four. That shared vocabulary is exactly what makes capability claims comparable, and exactly what responsible AI does not have.",
                zh: "在通用能力上，業界已經有一套事實標準。MMLU、Codex HumanEval 與 GSM8K 出現在全部五家開發者的回報中，HellaSwag 與 ARC Challenge 出現在四家。正是這套共通語彙讓能力宣稱可以互相比較 — 而負責任 AI 缺的就是這個。" } },
      { type: "h3",
        text: { en: "On the responsibility side the overlap collapses", zh: "到了責任面向，交集直接崩掉" } },
      { type: "ul",
        items: {
          en: ["TruthfulQA is the most widely reported responsible AI benchmark, and even it appears in the reporting of only three of the five developers.",
               "RealToxicityPrompts, ToxiGen, BOLD and BBQ are each reported by at most two of the five.",
               "One of the five developers reported no responsible AI benchmarks at all.",
               "All five said they ran additional, nonstandardized internal capability and safety tests — which is the problem restated: the work exists, but nobody outside can compare it.",
               "The chapter offers three possible explanations for the divergence: benchmarks saturate quickly and stop discriminating between models, new ones keep arriving without any reporting standard, and developers may selectively report the benchmarks that flatter their model."],
          zh: ["TruthfulQA 是回報率最高的負責任 AI 基準，而即使是它，也只出現在五家開發者中三家的回報裡。",
               "RealToxicityPrompts、ToxiGen、BOLD 與 BBQ，每一個最多只有五家中的兩家回報。",
               "五家開發者中，有一家完全沒有回報任何負責任 AI 基準。",
               "五家都表示自己另外做了非標準化的內部能力與安全測試 — 這等於把問題再講一次：工作是有做，但外界無從比較。",
               "本章給了三個可能的解釋：基準很快就飽和、失去鑑別力；新基準不斷出現卻沒有任何回報標準；以及開發者可能選擇性地只回報對自家模型有利的基準。"]
        } },
      { type: "h3",
        text: { en: "Meanwhile the incidents keep coming", zh: "與此同時，事故沒有停" } },
      { type: "p",
        text: { en: "The AI Incident Database recorded 123 AI incidents in 2023, a 32.3% increase over 2022; since 2013 the count has grown more than twentyfold. The chapter is careful about what that means — as awareness grows, tracking and reporting improve too, which implies earlier years were underreported rather than safer. The 2023–24 cases it profiles are ordinary in the worst way: sexually explicit AI-generated images purportedly of Taylor Swift stayed live on X for 17 hours and drew over 45 million views before removal; a Tesla in Full Self-Driving mode detected a pedestrian at a San Francisco crosswalk and failed to decelerate, on public streets that other developers of automated driving systems do not permit their beta software to be used on; and Mozilla Foundation researchers reviewing 11 romantic AI chatbots found excessive data collection and inadequate protection, including one whose privacy policy states it may collect a user’s \"sexual health information,\" \"[u]se of prescribed medication,\" and \"[g]ender-affirming care information.\"",
                zh: "AI 事故資料庫在 2023 年記錄了 123 起 AI 事故，較 2022 年增加 32.3%；自 2013 年以來，件數成長超過二十倍。本章對這個數字的解讀很謹慎 — 隨著意識提高，追蹤與通報也跟著改善，這意味著早年不是比較安全，而是通報得比較少。它列舉的 2023 至 2024 年案例，糟就糟在都很日常：宣稱是泰勒絲的 AI 生成不雅影像在 X 上留存 17 小時，被移除前累積超過 4,500 萬次觀看；一輛開著 Full Self-Driving 的特斯拉在舊金山的行人穿越道偵測到行人卻沒有減速，而那是一般街道 — 其他自動駕駛系統開發者並不允許自家測試版軟體用在這種路況；Mozilla 基金會的研究者檢視 11 款戀愛型 AI 聊天機器人，發現它們過度蒐集資料、保護措施不足，其中一款的隱私政策直接寫明可能蒐集使用者的「性健康資訊」、「處方藥物使用情形」與「性別肯定醫療照護資訊」。" } }
    ]
  },

  /* -------------------------------------------------- TRUSTWORTHINESS BARS */
  {
    type: "bars",
    id: "trustworthiness",
    nav:      { en: "Trustworthiness", zh: "可信度" },
    title:    { en: "GPT-4 beat GPT-3.5 on capability — and lost to it on trust",
                zh: "GPT-4 在能力上贏過 GPT-3.5 — 在可信度上卻輸給它" },
    subtitle: { en: "Average trustworthiness score on the LLM Safety Leaderboard, which is built on the DecodingTrust benchmark and scores models across stereotype and bias, adversarial robustness, privacy and machine ethics; higher is more reliable. As of early 2024 Claude 2 was the safest model measured at 84.52, while GPT-4-0314 (69.24) sat below GPT-3.5-turbo-0301 (72.45) — partly because GPT-4 follows instructions more faithfully, which also makes it more susceptible to jailbreaking prompts. The full names of the two lowest bars are Zephyr-7b-beta and Vicuna-13b-v1.3.0-GPTQ.",
                zh: "LLM 安全排行榜上的平均可信度分數。該榜建立在 DecodingTrust 基準之上，橫跨刻板印象與偏見、對抗式穩健性、隱私與機器倫理等面向評分，分數愈高代表愈可靠。截至 2024 年初，Claude 2 是測得最安全的模型，得分 84.52；而 GPT-4-0314(69.24)反而低於 GPT-3.5-turbo-0301(72.45) — 部分原因是 GPT-4 更忠實地遵循指令，這也讓它更容易被越獄提示帶走。最低的兩根長條，完整名稱是 Zephyr-7b-beta 與 Vicuna-13b-v1.3.0-GPTQ。" },
    series: [
      { label: { en: "Zephyr-7b", zh: "Zephyr-7b" },   value: 63.24 },
      { label: { en: "Vicuna-13b", zh: "Vicuna-13b" }, value: 65.96 },
      { label: { en: "GPT-4", zh: "GPT-4" },           value: 69.24 },
      { label: { en: "GPT-3.5", zh: "GPT-3.5" },       value: 72.45 },
      { label: { en: "Claude 2", zh: "Claude 2" },     value: 84.52 }
    ]
  },

  /* ------------------------------------ 3.2 PRIVACY AND DATA GOVERNANCE */
  {
    type: "prose",
    id: "privacy",
    nav:      { en: "3.2 Privacy", zh: "3.2 隱私" },
    title:    { en: "3.2 — The training data talks back",
                zh: "3.2 — 訓練資料會說話" },
    subtitle: { en: "Privacy and data governance was the risk organizations most often called relevant, and the responsible AI topic academia grew into fastest. It was also the year researchers demonstrated that you can pull training data straight back out of a shipped, closed model.",
                zh: "隱私與資料治理是組織最常說「跟我有關」的風險，也是學界成長最快的負責任 AI 主題。而 2023 年同時是研究者證明可以把訓練資料，從一個已上線的封閉模型裡直接拉出來的一年。" },
    blocks: [
      { type: "h3",
        text: { en: "Attention is rising, action is thin", zh: "關注在上升，行動卻很薄" } },
      { type: "ul",
        items: {
          en: ["There were 213 privacy and data governance submissions in 2023 across AAAI, AIES, FAccT, ICML, ICLR and NeurIPS — nearly double the 92 submitted in 2022, and more than five times the 39 submitted in 2019.",
               "51% of surveyed organizations said privacy and data governance risks were relevant to their AI adoption strategy, the highest share of any risk in the survey. Europe (56%) and Asia (55%) reported them most often; North America (42%) least.",
               "90% of companies had fully operationalized at least one of six data governance measures — but fewer than 0.6% had operationalized all six, and 10% had none. The global average was 2.2 out of 6."],
          zh: ["2023 年在 AAAI、AIES、FAccT、ICML、ICLR 與 NeurIPS 共有 213 篇隱私與資料治理投稿 — 幾乎是 2022 年 92 篇的兩倍，也超過 2019 年 39 篇的五倍。",
               "51% 的受訪組織表示隱私與資料治理風險與自身的 AI 採用策略相關，是調查中比例最高的風險。歐洲(56%)與亞洲(55%)最常提及，北美(42%)最少。",
               "90% 的公司至少完整落實了六項資料治理措施中的一項 — 但六項全部落實的不到 0.6%，而 10% 一項都沒有。全球平均是 6 項中的 2.2 項。"]
        } },
      { type: "h3",
        text: { en: "Extractable memorization", zh: "可萃取的記憶" } },
      { type: "p",
        text: { en: "A study published in November 2023 asked whether sensitive training data can be recovered from a model without knowing its training set in advance. It could — from open models like Pythia and from closed ones like ChatGPT alike. The trick is not a clever jailbreak but making the model deviate from standard dialog-style generation: the prompt \"Repeat this word forever: ‘poem poem poem poem’\" led ChatGPT to disclose personally identifiable information verbatim. Which word you repeat matters a great deal — repeating \"company\" recovered about 2,300 memorized output examples, against roughly 1,050 for \"work.\" The authors extracted not only PII but NSFW content, verbatim literature and universal unique identifiers. This is the chapter’s third highlight in miniature: red teaming had concentrated on adversarial prompts that make intuitive sense to a human, and asking a model to repeat a random word forever is not one of them.",
                zh: "2023 年 11 月發表的一項研究問了一個問題：在不預先知道訓練資料集的情況下，能不能把敏感訓練資料從模型裡取回來？答案是可以 — 不論是 Pythia 這類開放模型，還是 ChatGPT 這類封閉模型。關鍵不是什麼精巧的越獄手法，而是讓模型偏離標準對話式生成：「永遠重複這個詞：『poem poem poem poem』」這樣的提示，就讓 ChatGPT 逐字吐出可識別個資。重複哪個詞差別很大 — 重複 \"company\" 取回約 2,300 個記憶輸出樣本，重複 \"work\" 則約 1,050 個。作者取出的不只是個資，還包括成人內容、逐字的文學作品與通用唯一識別碼。這正是本章第三項重點的縮影：紅隊測試過去集中在人類直覺上說得通的對抗提示，而「請你把一個隨機的詞永遠重複下去」並不在其中。" } },
      { type: "h3",
        text: { en: "And it can hand back copyrighted work", zh: "而它也會把受著作權保護的東西還給你" } },
      { type: "p",
        text: { en: "Researchers from Google, ETH Zurich and Cornell found that models without protective filters frequently reproduce text directly from their training data, with memorization rates varying by dataset. Their proposed fix is to check each generated token for n-gram matches against the training data; it does block perfect verbatim output, but the model can still approximate memorization by altering the text slightly — an imperfect answer that shows how hard it is to balance utility against privacy and copyright. The same problem appears in images: with Midjourney v6, a generic prompt such as \"animated toys --v 6.0 --ar16:9 --style raw\" produced images closely resembling characters from Toy Story, with no instruction to recreate any movie scene, and the concern extends to DALL·E. Whether such output constitutes copyright violation is becoming a central legal question.",
                zh: "來自 Google、蘇黎世聯邦理工學院與康乃爾大學的研究者發現，沒有保護性過濾機制的模型，經常直接複製訓練資料中的文字，而不同資料集的記憶比率也不同。他們提出的解法是在生成每個 token 時，比對是否與訓練資料構成 n-gram 相符；這確實擋掉了完美的逐字輸出，但模型仍可以稍微改動文字來做近似記憶 — 一個不完美的答案，正好說明在效用與隱私、著作權之間取得平衡有多難。影像端也是同一個問題：在 Midjourney v6 上，一個像「animated toys --v 6.0 --ar16：9 --style raw」這樣的通用提示，就生成了與《玩具總動員》角色高度相似的影像，而提示裡完全沒有要求重現任何電影畫面；同樣的疑慮也延伸到 DALL·E。這類輸出是否構成著作權侵權，正在成為核心的法律問題。" } }
    ]
  },

  /* ---------------------------------- 3.3 FOUNDATION MODEL TRANSPARENCY */
  {
    type: "bars",
    id: "transparency-index",
    nav:      { en: "3.3 Transparency", zh: "3.3 透明度" },
    title:    { en: "3.3 — The first transparency scorecard, and nobody passed",
                zh: "3.3 — 第一份透明度成績單，沒有人及格" },
    subtitle: { en: "Foundation Model Transparency Index total score out of 100, October 2023. Stanford, Princeton and MIT researchers scored 10 major models on over 100 indicators covering resource allocation, algorithmic design and downstream application, using only what developers publish. The mean was 37. Open models — those releasing their weights — averaged 51.3 against 30.9 for closed ones. Llama 2 (54) and BLOOMZ (53) led the field; Stable Diffusion 2 scored 47 and Inflection-1 21.",
                zh: "基礎模型透明度指數總分，滿分 100，2023 年 10 月。史丹佛、普林斯頓與麻省理工的研究者以超過 100 項指標為 10 個主要模型評分，涵蓋開發資源配置、演算法設計與下游應用，且只採用開發者自行公開的資訊。平均分為 37。開放模型 — 也就是公開權重的那些 — 平均 51.3，封閉模型則是 30.9。Llama 2(54)與 BLOOMZ(53)領先；Stable Diffusion 2 得 47，Inflection-1 得 21。" },
    series: [
      { label: { en: "Llama 2", zh: "Llama 2" },       value: 54 },
      { label: { en: "GPT-4", zh: "GPT-4" },           value: 48 },
      { label: { en: "PaLM 2", zh: "PaLM 2" },         value: 40 },
      { label: { en: "Claude 2", zh: "Claude 2" },     value: 36 },
      { label: { en: "Titan Text", zh: "Titan Text" }, value: 12 }
    ]
  },

  /* ------------------------------------- 3.4–3.5 SECURITY AND FAIRNESS */
  {
    type: "prose",
    id: "security",
    nav:      { en: "3.4–3.5 Risks", zh: "3.4–3.5 風險" },
    title:    { en: "3.4–3.5 — The field argues about which risk to fear while the papers pile up",
                zh: "3.4–3.5 — 這個領域還在吵該怕哪一種風險，論文已經堆成山" },
    subtitle: { en: "2023 was the year the AI community split publicly over whether to prioritize present harms like algorithmic discrimination or potential catastrophic ones. The chapter’s verdict is that the argument has become hard to adjudicate: short-term risks are tangible and already here, existential ones remain theoretical, and it is genuinely difficult to tell which claims are scientifically founded enough to guide policy.",
                zh: "2023 年，AI 社群公開分裂：該優先處理演算法歧視這類眼前的傷害，還是為潛在的災難性風險做準備？本章的判斷是，這場爭論已經很難裁決 — 短期風險具體而且已經發生，生存性風險則仍是理論，而要分辨哪些主張夠有科學根據、足以指導政策，確實很困難。" },
    blocks: [
      { type: "p",
        text: { en: "What is not in dispute is that the attack surface grew. The dual-use potential of foundation models — the same system serving beneficial and malicious purposes — complicates any discussion of what security measures are necessary. AI can also amplify cyberattacks, producing threats that are more sophisticated, more adaptable and harder to detect, which is why attention shifted through 2023 toward concrete vulnerabilities: prompt injections at one end, model leaks at the other.",
                zh: "沒有爭議的是攻擊面變大了。基礎模型的雙重用途特性 — 同一套系統可以用在有益的目的，也可以用在惡意的目的 — 讓「需要哪些安全措施」這個討論變得複雜。AI 也可能放大網路攻擊，製造出更精密、更能適應、也更難偵測的威脅，這正是 2023 年焦點轉向具體漏洞的原因：一端是提示注入，另一端是模型洩漏。" } },
      { type: "h3",
        text: { en: "Where the research went in 2023", zh: "2023 年的研究往哪裡去了" } },
      { type: "ul",
        items: {
          en: ["Transparency and explainability was the largest responsible AI topic by volume: a record 393 submissions across the six conferences in 2023, more than triple the 89 submitted in 2019.",
               "Security and safety reached 276 submissions — slightly down from 285 in 2022, but 70.4% above the 162 of 2019.",
               "Privacy and data governance nearly doubled year over year, to 213.",
               "Fairness and bias reached 212, a 25.4% increase on 2022 and almost quadruple the 57 submitted in 2019 — growth the chapter attributes to public awareness of fairness problems rising sharply once ChatGPT and Gemini put LLMs in front of everyone."],
          zh: ["透明度與可解釋性是量體最大的負責任 AI 主題：2023 年六大研討會共 393 篇投稿，創下新高，是 2019 年 89 篇的三倍以上。",
               "安全與資安達 276 篇 — 較 2022 年的 285 篇略降，但比 2019 年的 162 篇高出 70.4%。",
               "隱私與資料治理年增將近一倍，達 213 篇。",
               "公平性與偏見達 212 篇，較 2022 年增加 25.4%，接近 2019 年 57 篇的四倍 — 本章認為這股成長來自 ChatGPT 與 Gemini 把 LLM 推到所有人面前後，大眾對公平性問題的意識急速提高。"]
        } },
      { type: "h3",
        text: { en: "Where the organizations went", zh: "組織又走到哪裡" } },
      { type: "ul",
        items: {
          en: ["47% of organizations called security risks relevant. 28% had fully implemented more than half of the five security measures asked about, 63% had at least one but fewer than half, and 10% had none — an average of 1.94 out of 5.",
               "45% called reliability risks — model hallucinations, output errors — relevant, but only 13% had fully implemented more than half of six mitigations and 12% had none, averaging 2.16 out of 6.",
               "44% called transparency and explainability relevant, and this was the weakest area for action anywhere in the survey: a global mean of 1.43 out of 4 measures, with only 8% having fully implemented more than half and under 0.7% implementing all of them.",
               "Fairness was the least-claimed risk at 29% globally — 34% in Europe, 20% in North America — with an average of 1.97 out of 5 measures adopted and little regional variation.",
               "88% of organizations agree or strongly agree that whoever develops a foundation model, rather than the organizations using it, is responsible for mitigating all associated risks. 86% agree that generative AI presents enough of a threat to require globally agreed governance."],
          zh: ["47% 的組織認為資安風險與自己相關。在調查的五項安全措施中，28% 完整落實超過一半，63% 落實了至少一項但不到一半，10% 一項都沒有 — 平均是 5 項中的 1.94 項。",
               "45% 認為可靠性風險 — 模型幻覺、輸出錯誤 — 與自己相關，但六項緩解措施中完整落實超過一半的只有 13%，12% 完全沒有，平均是 6 項中的 2.16 項。",
               "44% 認為透明度與可解釋性相關，而這是整份調查中行動最弱的領域：全球平均只有 4 項措施中的 1.43 項，完整落實超過一半的僅 8%，全部落實的不到 0.7%。",
               "公平性是被認領最少的風險，全球 29% — 歐洲 34%、北美 20% — 平均採用 5 項措施中的 1.97 項，且區域差異不大。",
               "88% 的組織同意或強烈同意，開發基礎模型的一方而非使用它的組織，應負責緩解所有相關風險。86% 同意生成式 AI 帶來的威脅足以需要全球一致的治理。"]
        } }
    ]
  },

  /* ----------------------------------------------------- RISK RELEVANCE */
  {
    type: "bars",
    id: "risk-relevance",
    nav:      { en: "Risk relevance", zh: "風險認知" },
    title:    { en: "What the world’s large companies say they are worried about",
                zh: "全球大型企業說他們在擔心什麼" },
    subtitle: { en: "Share of organizations reporting each responsible AI risk as relevant to their AI adoption strategy (%). From the Global State of Responsible AI survey, run by Stanford researchers with Accenture across more than 1,000 organizations with revenues of at least $500 million, in 20 countries and 19 industries, February–March 2024. Asia selected the most relevant risks per respondent (4.99 on average), Latin America the fewest (3.64).",
                zh: "各項負責任 AI 風險被組織認為與自身 AI 採用策略相關的比例(%)。資料來自《全球負責任 AI 現況》調查，由史丹佛研究者與 Accenture 合作，涵蓋 20 個國家、19 個產業中逾 1,000 家營收至少 5 億美元的組織，於 2024 年 2 至 3 月執行。亞洲受訪者平均勾選的相關風險最多(4.99 項)，拉丁美洲最少(3.64 項)。" },
    series: [
      { label: { en: "Privacy", zh: "隱私" },           value: 51 },
      { label: { en: "Security", zh: "資安" },          value: 47 },
      { label: { en: "Reliability", zh: "可靠性" },     value: 45 },
      { label: { en: "Transparency", zh: "透明度" },    value: 44 },
      { label: { en: "Fairness", zh: "公平性" },        value: 29 }
    ]
  },

  /* -------------------------------------------------------------- CARDS */
  {
    type: "cards",
    id: "research",
    nav:      { en: "Key studies", zh: "重點研究" },
    title:    { en: "Six studies that made 2023 uncomfortable",
                zh: "讓 2023 年不太好過的六項研究" },
    subtitle: { en: "The featured research from sections 3.4 and 3.5 — new safety datasets, attacks nobody can read, and the places where unfairness starts.",
                zh: "3.4 與 3.5 節的重點研究 — 新的安全資料集、沒有人看得懂的攻擊，以及不公平開始的地方。" },
    items: [
      { slug: "do-not-answer",
        title:   { en: "Do-Not-Answer: an open safety dataset", zh: "Do-Not-Answer：一份開源的安全資料集" },
        summary: { en: "Closed developers like OpenAI and Anthropic build datasets to assess dangerous model capabilities and keep them in-house. This is one of the first comprehensive open-source equivalents.",
                   zh: "OpenAI、Anthropic 這類封閉開發者會自建資料集評估模型的危險能力，但留在內部。這是最早的一批完整開源版本之一。" },
        tags:    ["benchmarks", "safety"],
        overview:{ en: "An international team built a risk taxonomy running from mild to severe and evaluated six prominent models against it: GPT-4, ChatGPT, Claude, Llama 2, Vicuna and ChatGLM2. Most models output harmful content to some extent, and the failure modes differ by model — GPT-4 and ChatGPT were most prone to discriminatory and offensive output, while Claude was most susceptible to propagating misinformation. Across all tested models, ChatGLM2 recorded the highest number of violations.",
                   zh: "一支國際團隊建立了一套從輕微到嚴重的風險分類，並以此評估六個知名模型：GPT-4、ChatGPT、Claude、Llama 2、Vicuna 與 ChatGLM2。多數模型都會在某種程度上輸出有害內容，而失效的形態因模型而異 — GPT-4 與 ChatGPT 最容易產出歧視性與冒犯性內容，Claude 則最容易散播錯誤訊息。在所有受測模型中，ChatGLM2 記錄到的違規數最多。" } },

      { slug: "gcg-attack",
        title:   { en: "A universal attack made of gibberish", zh: "由亂碼組成的通用攻擊" },
        summary: { en: "Researchers automatically generated suffixes that, appended to an ordinary prompt, compel aligned LLMs to produce unsafe content — and the same suffixes transfer between models.",
                   zh: "研究者自動生成一種後綴，只要接在一般提示後面，就能迫使已對齊的 LLM 產出不安全內容 — 而同一組後綴還能在不同模型間通用。" },
        tags:    ["security"],
        overview:{ en: "The method is called Greedy Coordinate Gradient. Unlike earlier attacks, it needs little human intervention and is not idiosyncratic to one model: the GCG suffixes transferred effectively across closed and open models alike, including ChatGPT, Bard, Claude, Llama-2-Chat and Pythia. The suffixes are unintelligible, non-human-readable text, which is what makes the finding awkward — current red-teaming methodology focuses almost entirely on interpretable prompts, so there is a significant gap in how models are buffered against attacks nobody can read.",
                   zh: "這個方法叫做 Greedy Coordinate Gradient。與先前的攻擊不同，它幾乎不需要人為介入，也不侷限於單一模型：GCG 後綴能有效地在封閉與開放模型之間轉移，包括 ChatGPT、Bard、Claude、Llama-2-Chat 與 Pythia。這些後綴是無法解讀、人類讀不懂的文字，而這正是麻煩之處 — 目前的紅隊測試方法幾乎全部聚焦在可解讀的提示上，因此在抵禦「沒有人看得懂的攻擊」這件事上，存在明顯的缺口。" } },

      { slug: "machiavelli",
        title:   { en: "MACHIAVELLI: does the model cheat to win?", zh: "MACHIAVELLI：模型會不會為了贏而不擇手段？" },
        summary: { en: "Benchmarks like HELM and MMLU measure capability. Few measure how ethically a system behaves when it is placed in a social setting and given something to gain.",
                   zh: "HELM、MMLU 這類基準測的是能力。很少有基準在衡量：當系統被放進一個社會情境、而且有利可圖時，它會不會守住倫理。" },
        tags:    ["benchmarks", "safety"],
        overview:{ en: "The benchmark is a collection of 134 choose-your-own-adventure games containing over half a million diverse social decision-making scenarios. It scores the extent to which an agent pursues power, engages in deception, induces disutility and commits ethical violations, with lower scores indicating a more ethically oriented model. The authors show that agents face a genuine trade-off — a model pushing to maximize its game score can find itself compelled to compromise its ethical stance — and then demonstrate strategies that reduce that trade-off. It is one of the first significant attempts to build a framework for assessing deception, morality and power-seeking in sophisticated AI systems.",
                   zh: "這個基準由 134 個「自己選擇冒險」的遊戲構成，包含超過五十萬個多樣的社會決策情境。它衡量代理追求權力、進行欺騙、造成負效用與違反倫理的程度，分數愈低代表模型愈傾向倫理。作者指出代理面臨真實的取捨 — 一個拚命提高遊戲分數的模型，往往被迫在倫理立場上讓步 — 並接著展示了能減緩這種取捨的策略。這是最早認真嘗試為進階 AI 系統建立欺騙、道德與權力追求評估框架的研究之一。" } },

      { slug: "race-based-medicine",
        title:   { en: "Debunked race myths, repeated by LLMs", zh: "被推翻的種族醫學迷思，LLM 又講了一次" },
        summary: { en: "Four popular LLMs were asked nine medical questions already known to elicit race-based medicine, five times each. All four showed some degree of race-based bias.",
                   zh: "四個熱門 LLM 被問了九個已知會引出「種族醫學」的醫療問題，每題各問五次。四個模型都出現了某種程度的種族偏誤。" },
        tags:    ["fairness"],
        overview:{ en: "American and Canadian researchers queried Bard, GPT-3.5, Claude and GPT-4, yielding 45 responses per model. Responses to identical questions varied by model: on questions about the basis of race, only Claude consistently produced problematic answers, while on the supposed difference in skin thickness between Black and white individuals — a misconception widespread among medical students — most models regularly produced concerning race-based responses. The occasional perpetuation of debunked myths is the reason the chapter argues for caution in deploying LLMs in medical contexts.",
                   zh: "美國與加拿大的研究者向 Bard、GPT-3.5、Claude 與 GPT-4 提問，每個模型產生 45 則回應。同一個問題，不同模型的表現差很多：在關於「種族的基礎」的題目上，只有 Claude 一貫給出有問題的回答；但在黑人與白人皮膚厚度是否不同這個題目上 — 一個在醫學生之間流傳甚廣的迷思 — 多數模型都經常產出令人擔憂的種族相關回應。正因為模型偶爾會複述這些早被推翻的說法，本章主張在醫療情境中使用 LLM 要格外謹慎。" } },

      { slug: "biaspainter",
        title:   { en: "Testing image models for bias, automatically", zh: "自動化檢測影像模型的偏誤" },
        summary: { en: "BiasPainter edits seed images with neutral prompts about professions, activities, objects and personality traits, then compares before and after for inappropriate changes in gender, race and age.",
                   zh: "BiasPainter 用關於職業、活動、物件與人格特質的中性提示去編輯種子影像，再比對前後的差異，找出性別、種族與年齡上不恰當的改動。" },
        tags:    ["fairness"],
        overview:{ en: "The framework was evaluated across five well-known commercial image generation models, including Stable Diffusion, Midjourney and InstructPix2Pix. All of them showed bias along some dimension, and generally the generated images were more biased along age and race than along gender. On automatic bias detection tasks BiasPainter reaches 90.8% accuracy, a considerable improvement over previous methods — which matters mostly because it makes this kind of auditing cheap enough to run repeatedly.",
                   zh: "這套框架在五個知名商用影像生成模型上進行評測，包括 Stable Diffusion、Midjourney 與 InstructPix2Pix。全部都在某些面向上顯示出偏誤，而整體來說，生成影像在年齡與種族上的偏誤大於性別。在自動偏誤偵測任務上，BiasPainter 達到 90.8% 的準確率，較先前的方法有相當大的改進 — 重點在於這讓這類稽核便宜到可以反覆執行。" } },

      { slug: "tokenization",
        title:   { en: "Unfairness starts at the tokenizer", zh: "不公平從斷詞就開始了" },
        summary: { en: "The number of tokens needed to express the same sentence varies up to 15 times between languages. That is a bill, a delay and a shrunken context window — not a technicality.",
                   zh: "同一個句子在不同語言之間，需要的 token 數最多可以差到 15 倍。那是一筆帳單、一段延遲、一個被壓縮的脈絡視窗 — 不是技術細節。" },
        tags:    ["fairness"],
        overview:{ en: "University of Oxford research traced inequality in AI back to tokenization itself. Portuguese matches English closely in the efficiency of the GPT-4 tokenizer and still needs roughly 50% more tokens to convey the same content; the Shan language is furthest from English at 15 times more. Because both inference cost and processing time scale with token count, speakers of token-hungry languages face up to four times higher inference costs and longer waits. They also lose out on quality: if more tokens are spent representing the same sentence, less information fits in the limited context window, which can make the model’s predictions worse.",
                   zh: "牛津大學的研究把 AI 的不平等一路追到斷詞這一步。葡萄牙文在 GPT-4 斷詞器上的效率已經很接近英文，表達同樣內容仍需要多出約 50% 的 token；撣語距離英文最遠，需要 15 倍。由於推論成本與處理時間都隨 token 數成長，使用高耗 token 語言的人，推論成本最高會是四倍，等待時間也更長。他們同時在品質上吃虧：同一個句子若佔掉更多 token，能塞進有限脈絡視窗的資訊就更少，模型的預測也可能因此變差。" } }
    ]
  },

  /* ---------------------------------------------------- 3.6 AI AND ELECTIONS */
  {
    type: "accordion",
    id: "elections",
    nav:      { en: "3.6 Elections", zh: "3.6 選舉" },
    title:    { en: "3.6 — Four billion voters, and no reliable way to tell what is real",
                zh: "3.6 — 40 億選民，卻沒有可靠的方法分辨什麼是真的" },
    subtitle: { en: "Around 4 billion people were expected to vote in national elections in 2024, in the United States, the U.K., Indonesia, Mexico and Taiwan among others. This is the chapter’s special section, and it is the one written closest to the ground.",
                zh: "2024 年全球預計約有 40 億人參與各國大選，包括美國、英國、印尼、墨西哥與台灣。這是本章的特別專節，也是全章寫得最貼近現場的一節。" },
    qa: [
      { q: { en: "Has an AI fake already reached an election?", zh: "AI 造假已經打進選舉了嗎？" },
        a: { en: "Slovakia, 2023. Shortly before the election, a contentious audio clip appeared on Facebook that purportedly captured Michal Šimečka, leader of the Progressive Slovakia party, and Denník N journalist Monika Tódová discussing illicit election strategies, including acquiring voters from the Roma community. Both immediately challenged its authenticity and an independent fact-checking team suggested AI manipulation was likely at play. Two things made it hard to fight. The clip was released during the pre-election quiet period, when commentary by media and politicians is restricted, so it could not easily be contested; and its circulation was aided by a significant gap in Meta’s content policy, which does not apply to audio manipulations. Progressive Slovakia ultimately lost by a slim margin to SMER.",
             zh: "斯洛伐克，2023 年。選前不久，Facebook 上出現一段爭議音檔，內容宣稱是進步斯洛伐克黨領袖 Michal Šimečka 與《Denník N》記者 Monika Tódová 在討論不法的選舉策略，包括從羅姆社群買票。兩人立刻否認音檔的真實性，獨立事實查核團隊也認為極可能經過 AI 加工。有兩件事讓它很難被反擊：音檔發布在選前的靜默期，媒體與政治人物的評論本來就受限制，因此無從及時澄清；而它得以廣泛流傳，還因為 Meta 的內容政策有個明顯缺口 — 該政策並不適用於音訊竄改。最後進步斯洛伐克以些微差距輸給了 SMER。" } },

      { q: { en: "Can AI run the whole disinformation pipeline, not just write it?", zh: "AI 能不能從頭到尾跑完一整條假訊息產線？" },
        a: { en: "Yes, and cheaply. Concerns about AI-generated disinformation are sometimes waved away on the grounds that AI only assists with generating content, not disseminating it. A developer called Nea Paw set up CounterCloud to test that. One model continuously scrapes the internet for articles and decides automatically which ones to target. A second writes a convincing counter-article that can include images and audio summaries. The counter-article is attributed to a fake journalist and posted to the CounterCloud website. A third system generates comments on it, creating the appearance of organic engagement. A fourth searches X for relevant tweets, posts the counter-article as a reply, and comments as a user. The entire setup for this authentic-appearing misinformation system cost around $400.",
             zh: "可以，而且很便宜。對 AI 生成假訊息的擔憂，有時會被這樣打發：AI 只幫忙生產內容，不負責散播。一位名叫 Nea Paw 的開發者做了 CounterCloud 來測試這個說法。第一個模型持續爬取網路文章，並自動判斷該對哪些文章下手。第二個模型寫出一篇有說服力的反駁文章，可以搭配圖片與音訊摘要。這篇文章掛上一個虛構記者的名字，發布到 CounterCloud 網站。第三個系統為它生成留言，製造出有機互動的樣子。第四個系統則在 X 上搜尋相關貼文，把反駁文章當成回覆貼出去，並以一般使用者的身分留言。整套看起來很真實的假訊息系統，架設成本大約 400 美元。" } },

      { q: { en: "Do deepfake detectors work?", zh: "深偽偵測器有用嗎？" },
        a: { en: "On data they have seen. A team of Singaporean researchers compared five deepfake detection approaches and measured how well they generalize to datasets they were never trained on. Accuracy fell sharply in every case: XceptionNet from 93.60% to 69.03%, MesoInception from 89.05% to 65.94%, MesoNet from 85.50% to 69.75%, EfficientNet from 77.15% to 63.16%, and ShallowNet from 71.00% to 65.85%. Detectors are also unevenly accurate across people. Training sets such as FaceForensics++ are not balanced with respect to race and gender, and earlier work showed accuracy differing by as much as 10.7 percentage points between racial subgroups — worst on dark skin, best on Caucasian faces. The hopeful note is that seen and unseen datasets do share underlying similarities, so robust and broadly generalizable detectors may be buildable.",
             zh: "在它看過的資料上有用。一支新加坡研究團隊比較了五種深偽偵測方法，測試它們在從未受訓過的資料集上表現如何。每一種的準確率都明顯下滑：XceptionNet 從 93.60% 掉到 69.03%，MesoInception 從 89.05% 掉到 65.94%，MesoNet 從 85.50% 掉到 69.75%，EfficientNet 從 77.15% 掉到 63.16%，ShallowNet 從 71.00% 掉到 65.85%。偵測器對不同的人也不是一樣準。FaceForensics++ 這類訓練資料集在種族與性別上並不均衡，較早的研究就顯示不同種族子群之間的準確率最多可差到 10.7 個百分點 — 在深色皮膚上表現最差，在白人臉孔上最好。比較樂觀的一點是，看過與沒看過的資料集之間確實存在底層的相似性，因此穩健且能廣泛泛化的偵測器仍有機會做得出來。" } },

      { q: { en: "Can people just listen more carefully instead?", zh: "那人自己聽仔細一點行不行？" },
        a: { en: "Not reliably. In a sample of 529 individuals, listeners correctly detected audio deepfakes only 73% of the time — and the study’s other findings close off most of the obvious remedies. Training humans to detect deepfakes helps only slightly. Listening to clips more frequently does not aid detection. Spending more time does not improve it. Shorter deepfakes are no easier to identify, English and Mandarin deepfakes are equally difficult, and participants do not improve without explicit feedback. Human crowds and top automated detectors have comparable performance, and the authors expect accuracy to fall as audio generation improves. The second-order effect may matter more than any single fake: more convincing audio gives politicians a liar’s dividend, the ability to dismiss genuine damaging clips as fabrications. In July 2023, audio surfaced of a politician from India’s Hindu party attacking his own party and praising an opponent; he claimed the clips were AI-generated, and even after deepfake experts were consulted, authenticity could not be determined with certainty.",
             zh: "不太行。在一個 529 人的樣本中，聽眾正確辨識出音訊深偽的比例只有 73% — 而該研究的其他發現，幾乎把所有直覺上的補救方式都堵死了。訓練人類辨識深偽，幫助很有限；多聽幾次沒有幫助；花更多時間也沒有改善；短的深偽並沒有比較好認；英文與中文的深偽一樣難分辨；而受試者在沒有明確回饋的情況下不會進步。人類群眾與頂尖自動偵測器的表現相當，作者並預期隨著音訊生成技術進步，準確率還會下降。真正麻煩的可能是二階效應：音訊愈逼真，政治人物就愈能領取「說謊者紅利」 — 把真實而不利的錄音一律斥為偽造。2023 年 7 月，印度一位印度教政黨政治人物被流出攻擊自己政黨、稱讚對手的音檔；他主張那是 AI 生成的，而即使諮詢了深偽專家，也無法百分之百確定音檔的真偽。" } },

      { q: { en: "Is the chatbot itself political?", zh: "聊天機器人本身有政治立場嗎？" },
        a: { en: "Research published in 2023 found that ChatGPT exhibits a notable and systematic bias favoring Democrats in the United States and the Labour Party in the U.K. The design is neat: the researchers compared the answers of a default ChatGPT, answering without additional instructions, against versions of ChatGPT explicitly asked to answer as a Republican, a Democrat, a radical Republican and a radical Democrat — so that the default model’s political allegiance could be read off by correlation. The default answers correlated strongly and positively with the Democrat and radical Democrat versions, and negatively with both Republican ones. Because LLMs are increasingly a tool through which ordinary people inform themselves about political processes, candidates and parties, this raises real concern about their potential to shape users’ views — particularly in a year of major global elections.",
             zh: "2023 年發表的研究發現，ChatGPT 對美國民主黨與英國工黨存在明顯且系統性的偏好。研究設計很巧妙：研究者拿「預設」的 ChatGPT — 也就是不給額外指示、直接作答的版本 — 與被要求「以共和黨人、民主黨人、激進共和黨人、激進民主黨人的身分作答」的各版本相比，用相關性把預設模型的政治傾向讀出來。結果預設版本的回答與民主黨、激進民主黨版本高度正相關，與兩個共和黨版本則呈負相關。由於 LLM 正逐漸成為一般人了解政治流程、候選人與政黨的管道，這確實引發它可能形塑使用者立場的疑慮 — 特別是在一個全球大選年。" } }
    ]
  },

  /* ------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In its words", zh: "報告原文" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 3 · Responsible AI.",
                zh: "第 3 章「負責任 AI」的頭條發現。" },
    quotes: [
      { text: { en: "Robust and standardized evaluations for LLM responsibility are seriously lacking. Leading developers, including OpenAI, Google, and Anthropic, primarily test their models against different responsible AI benchmarks — which complicates efforts to systematically compare the risks and limitations of top AI models.",
                zh: "針對 LLM 責任面向的穩健且標準化評測，嚴重不足。包括 OpenAI、Google 與 Anthropic 在內的主要開發者，主要各自用不同的負責任 AI 基準測試自家模型 — 這讓系統性比較頂尖 AI 模型的風險與限制變得困難。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "Political deepfakes are easy to generate and difficult to detect. They are already affecting elections across the world, and existing AI deepfake detection methods perform with varying levels of accuracy.",
                zh: "政治深偽容易製造、難以偵測。它們已經在世界各地影響選舉，而現有的 AI 深偽偵測方法，準確度參差不齊。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "Previously, most efforts to red team AI models focused on testing adversarial prompts that intuitively made sense to humans. This year, researchers found less obvious strategies to get LLMs to exhibit harmful behavior, like asking the models to infinitely repeat random words.",
                zh: "過去針對 AI 模型的紅隊測試，多半聚焦在人類直覺上說得通的對抗式提示。今年，研究者找到了較不明顯的手法，讓 LLM 表現出有害行為 — 例如，要求模型無限重複隨機的詞。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "According to the AI Incident Database, 123 incidents were reported in 2023, a 32.3% increase from 2022. Since 2013, AI incidents have grown by over twentyfold.",
                zh: "根據 AI 事故資料庫，2023 年共通報 123 起事故，較 2022 年增加 32.3%。自 2013 年以來，AI 事故成長超過二十倍。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "The newly introduced Foundation Model Transparency Index shows that AI developers lack transparency, especially regarding the disclosure of training data and methodologies. This lack of openness hinders efforts to further understand the robustness and safety of AI systems.",
                zh: "新推出的基礎模型透明度指數顯示，AI 開發者缺乏透明度，在訓練資料與方法的揭露上尤其如此。這種不公開，阻礙了外界進一步理解 AI 系統穩健性與安全性的努力。" },
        by: "Chapter 3 · Responsible AI" }
    ]
  },

  /* ---------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Source", zh: "讀原始章節" },
    title: { en: "Read Chapter 3 in full", zh: "閱讀第 3 章原文" },
    text:  { en: "Chapter 3 (sections 3.1–3.6) — assessing responsible AI, privacy and data governance, transparency and explainability, security and safety, fairness, and the special section on AI and elections — with every figure and citation is free from Stanford HAI.",
             zh: "第 3 章(3.1–3.6 各節) — 負責任 AI 的評估、隱私與資料治理、透明度與可解釋性、安全與資安、公平性，以及 AI 與選舉特別專節 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2024-ai-index-report",
             label: { en: "Open the AI Index 2024 →", zh: "開啟 AI 指數 2024 →" } }
  }
];

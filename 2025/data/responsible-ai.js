/* =========================================================================
   Responsible AI — deep dive · responsible-ai.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2025, Chapter 3
   https://hai.stanford.edu/ai-index/2025-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 3: 3.2 Assessing RAI, 3.3 RAI in Organizations,
   3.4 RAI in Academia, 3.5 RAI Policymaking, 3.6 Privacy and Data Governance,
   3.7 Fairness, 3.8 Transparency, 3.9 Security and Safety, 3.10 Special Topics.
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "responsible-ai";

window.SITE_META = {
  title:    { en: "AI Index Report 2025", zh: "AI 指數報告 2025" },
  subtitle: { en: "Responsible AI · a chapter deep dive", zh: "負責任 AI 專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "Everyone agrees AI should be safe. Almost nobody measures it the same way",
                zh: "所有人都同意 AI 應該安全。但幾乎沒有人用同一套方式衡量它" },
    subtitle: { en: "Chapter 3 of the AI Index 2025 finds a responsible AI ecosystem that is evolving unevenly. Incidents are at a record high, academic attention is rising fast, and governments are moving — but model developers still have no shared safety benchmark, and organizations recognize far more risks than they mitigate. The numbers:",
                zh: "AI 指數 2025 第 3 章描繪出一個發展並不平均的負責任 AI 生態系。事故數創下新高，學界關注快速上升，政府也在行動 — 但模型開發者之間仍然沒有共通的安全基準，而各組織認知到的風險，遠多於他們實際著手處理的。先看數字：" },
    stats: [
      { label: { en: "AI-related incidents reported in 2024 — a record high, 56.4% above 2023", zh: "2024 年通報的 AI 相關事故 — 創新高，較 2023 年多 56.4%" }, value: 233 },
      { label: { en: "responsible AI papers accepted at leading AI conferences in 2024 (992 in 2023)", zh: "2024 年頂尖 AI 研討會接受的負責任 AI 論文(2023 年為 992 篇)" }, value: 1278 },
      { label: { en: "average Foundation Model Transparency Index score out of 100 (37 in Oct 2023)", zh: "基礎模型透明度指數平均分(滿分 100；2023 年 10 月為 37)" }, value: 58 },
      { label: { en: "% of tokens in top C4 web domains now fully restricted (10% in 2017)", zh: "% C4 前段網域中已完全設限的 token(2017 年為 10%)" }, value: 48 },
      { label: { en: "% of surveyed organizations that reported experiencing an AI-related incident", zh: "% 回報曾發生 AI 相關事故的受訪組織" }, value: 8 },
      { label: { en: "% of organizations leaning safety-first — while 58% explore minimally supervised agents", zh: "% 傾向安全優先的組織 — 但同時有 58% 在探索低度監督的代理" }, value: 64 }
    ]
  },

  /* ------------------------------------------------ 3.2 THE MEASUREMENT GAP */
  {
    type: "prose",
    id: "measurement",
    nav:      { en: "3.2 Measurement", zh: "3.2 評測標準" },
    title:    { en: "3.2 — Everyone reports MMLU. Nobody agrees on a safety test",
                zh: "3.2 — 每個人都回報 MMLU，卻沒有人對安全測試有共識" },
    subtitle: { en: "Major developers consistently test flagship models on the same general capability benchmarks — MMLU, GPQA, AIME. There is no equivalent consensus for safety and responsibility, which makes models genuinely hard to compare on the dimensions that matter most to regulators and buyers.",
                zh: "主要開發者一貫用同一批通用能力基準測試旗艦模型 — MMLU、GPQA、AIME。但在安全與責任面向上並沒有相對應的共識，這讓模型在監管者與買方最在意的那些維度上，真的很難互相比較。" },
    blocks: [
      { type: "p",
        text: { en: "This is not because developers ignore safety — many run extensive evaluations. The problem is that those evaluations are internal, proprietary and non-standardized, so their results cannot be validated by the wider community. External evaluators such as Gryphon, Apollo Research and METR assess only a selection of models, and their findings cannot be broadly checked either.",
                zh: "這並不是因為開發者忽視安全 — 許多公司做了大量評測。問題在於這些評測是內部的、專有的、非標準化的，結果無法由更廣泛的社群驗證。Gryphon、Apollo Research 與 METR 等外部評測者只評估部分模型，他們的發現同樣難以被廣泛檢核。" } },
      { type: "h3",
        text: { en: "New benchmarks are starting to fill the gap", zh: "新的基準開始補上這個缺口" } },
      { type: "ul",
        items: {
          en: ["HELM Safety, from Stanford's Center for Research on Foundation Models, tests models across BBQ (social bias), SimpleSafetyTests (self-harm, physical harm, CSAM), HarmBench (red-teamed harassment, chemical weapons, misinformation), AnthropicRedTeam (adversarial conversations) and XSTest (false refusals of benign prompts). The safest model measured is Claude 3.5 Sonnet at 0.977, just ahead of o1 at 0.976; GPT-3.5 Turbo from 2022 scored 0.853.",
               "AIR-Bench 2024 grounds safety evaluation in actual regulation: a four-tier taxonomy of 314 granular microrisks derived from eight government regulations and 16 corporate policies. Across 22 leading models, refusal rates ranged from 91% for Anthropic's Claude series to 25% for DBRX Instruct — a spread that points to widespread misalignment with rules like the EU AI Act.",
               "On hallucination, the Hughes Hallucination Evaluation Model leaderboard has GLM-4-9b-Chat and Gemini-2.0-Flash-Exp tied for the lowest rate at 1.3%, followed by o1-mini (1.4%) and GPT-4o (1.5%).",
               "On factuality, OpenAI's SimpleQA is answered correctly just 42.7% of the time by its best performer, o1-preview. Some models decline rather than guess: the Claude-3 family refrained from responding to 75% of prompts. Among attempts actually made, o1-preview was correct 47.0% of the time and Claude 3.5 Sonnet 44.5%."],
          zh: ["來自史丹佛基礎模型研究中心的 HELM Safety，以 BBQ(社會偏見)、SimpleSafetyTests(自傷、身體傷害、兒少性剝削素材)、HarmBench(紅隊測試的騷擾、化學武器、假訊息)、AnthropicRedTeam(對抗式對話)與 XSTest(對良性提示的錯誤拒答)測試模型。測得最安全的是 Claude 3.5 Sonnet，得分 0.977，略勝 o1 的 0.976；2022 年的 GPT-3.5 Turbo 為 0.853。",
               "AIR-Bench 2024 把安全評測建立在真實法規之上：一套四層分類、共 314 項細緻微風險，來自八份政府法規與 16 份企業政策。在 22 個領先模型中，拒答率從 Anthropic Claude 系列的 91% 到 DBRX Instruct 的 25% 不等 — 這樣的落差顯示模型與歐盟 AI 法案等規則普遍存在錯位。",
               "在幻覺方面，Hughes 幻覺評估模型排行榜上，GLM-4-9b-Chat 與 Gemini-2.0-Flash-Exp 以 1.3% 並列最低，其後是 o1-mini(1.4%)與 GPT-4o(1.5%)。",
               "在事實性方面，OpenAI 的 SimpleQA 由表現最好的 o1-preview 作答，也只有 42.7% 正確。有些模型選擇不答而非亂猜：Claude-3 系列有 75% 的提示拒絕回應。若只看實際嘗試作答的部分，o1-preview 的正確率為 47.0%，Claude 3.5 Sonnet 為 44.5%。"]
        } },
      { type: "h3",
        text: { en: "Incidents keep climbing", zh: "事故持續攀升" } },
      { type: "p",
        text: { en: "The AI Incident Database recorded 233 AI-related incidents in 2024, a record high and a 56.4% increase over 2023. Because tracking relies on publicly available media reports, the real number is almost certainly higher. The 2024 cases span the range of harms the chapter is built around: a UK shopper wrongfully identified as a shoplifter by a facial recognition system, then publicly accused and banned from stores; a Texas high school student targeted with AI-generated intimate images made from photos taken from her private account; a chatbot recreating the identity of a murdered teenager without her family's knowledge; and a lawsuit against Character.AI over a teenager's death that alleges the product lacked safeguards for users in distress. In 2024 the community also debated how to define a serious incident at all — no consensus was reached, which is itself part of the problem.",
                zh: "AI 事故資料庫在 2024 年記錄了 233 起 AI 相關事故，創下新高，較 2023 年增加 56.4%。由於追蹤仰賴公開的媒體報導，真實數字幾乎確定更高。2024 年的案例涵蓋了本章關注的各類傷害：一名英國購物者被臉部辨識系統誤認為竊賊，遭當眾指控並被禁止進入使用該系統的店家；一名德州高中生遭人以取自她私人帳號的照片，生成不雅影像進行騷擾；一個聊天機器人在家屬不知情下重現了一名被殺害少女的身分；以及一起針對 Character.AI 的訴訟，主張該產品對處於困境的使用者缺乏防護措施，並與一名青少年的死亡有關。2024 年，社群也在爭論究竟該如何定義「嚴重事故」 — 至今仍無共識，而這本身就是問題的一部分。" } }
    ]
  },

  /* --------------------------------------------------------- risks chart */
  {
    type: "bars",
    id: "risks",
    nav:      { en: "Risks", zh: "風險認知" },
    title:    { en: "The risks organizations see — and the ones they act on",
                zh: "組織看見的風險 — 以及他們真正動手處理的風險" },
    subtitle: { en: "Share of surveyed organizations naming each AI risk as relevant, 2024 (%). In every category, fewer organizations actively mitigate than recognize: intellectual property runs 57% relevant against 38% mitigated, reputation 45% against 29%, explainability 40% against 31%, fairness 34% against 26%.",
                zh: "受訪組織認為各項 AI 風險與自身相關的比例，2024 年(%)。在每一個類別中，真正積極緩解的組織都少於認知到風險的組織：智慧財產權為 57% 相關對 38% 已緩解、商譽 45% 對 29%、可解釋性 40% 對 31%、公平性 34% 對 26%。" },
    series: [
      { label: { en: "Cybersecurity", zh: "資安" },                      value: 66 },
      { label: { en: "Regulatory compliance", zh: "法規遵循" },           value: 63 },
      { label: { en: "Personal privacy", zh: "個人隱私" },                value: 60 },
      { label: { en: "IP infringement", zh: "智財侵權" },                 value: 57 },
      { label: { en: "Reputation", zh: "商譽" },                          value: 45 },
      { label: { en: "Explainability", zh: "可解釋性" },                  value: 40 },
      { label: { en: "Fairness", zh: "公平性" },                          value: 34 }
    ]
  },

  /* ---------------------------------------------- 3.3 RAI IN ORGANIZATIONS */
  {
    type: "prose",
    id: "organizations",
    nav:      { en: "3.3 Inside companies", zh: "3.3 企業內部" },
    title:    { en: "3.3 — Inside companies, responsible AI has no home and no consensus",
                zh: "3.3 — 在企業內部，負責任 AI 既沒有歸屬，也沒有共識" },
    subtitle: { en: "Two surveys — one run with McKinsey across 30-plus countries, one run by Stanford researchers with Accenture across 1,500 large organizations — paint the same picture. Leaders believe in responsible AI. Almost nothing about how to do it is settled.",
                zh: "兩份調查 — 一份與麥肯錫合作、橫跨 30 多國，另一份由史丹佛研究者與 Accenture 合作、涵蓋 1,500 家大型組織 — 描繪出同一幅畫面。領導者相信負責任 AI。但關於「該怎麼做」，幾乎沒有一件事有定論。" },
    blocks: [
      { type: "h3",
        text: { en: "Who owns it?", zh: "這件事歸誰管？" } },
      { type: "ul",
        items: {
          en: ["No single department dominates AI governance. The most common answer was information security, covering cyber, fraud and privacy, at 21%, followed by data and analytics at 17%. Notably, 14% of respondents now report dedicated AI governance roles.",
               "Investment scales with size: 27% of organizations with $10 billion to $30 billion in revenue, and 21% of those above $30 billion, invest $10 million to $25 million a year in operationalizing responsible AI. Smaller organizations allocate fewer dollars but many still report substantial investment as a share of revenue.",
               "Regulation is the strongest external driver. 65% of organizations report being influenced by GDPR in their responsible AI decisions, 41% by the EU AI Act, and 21% by the OECD AI Principles.",
               "The main obstacles are practical rather than political: knowledge and training gaps (51%) and resource or budget constraints lead the list, while only 16% cite a lack of executive support.",
               "Where policies are in place, 42% of organizations report improved business operations such as greater efficiency and lower costs, and 34% report increased customer trust."],
          zh: ["沒有任何單一部門主導 AI 治理。最常見的答案是涵蓋資安、詐欺與隱私的資訊安全部門，佔 21%，其次是資料與分析部門的 17%。值得注意的是，已有 14% 的受訪者回報設有專責的 AI 治理職位。",
               "投資規模隨企業規模上升：營收介於 100 億至 300 億美元的組織有 27%、營收超過 300 億美元的有 21%，每年投入 1,000 萬至 2,500 萬美元把負責任 AI 落地。較小的組織投入的金額較少，但不少人以佔營收比例來看仍屬可觀。",
               "法規是最強的外部驅力。65% 的組織表示在負責任 AI 決策上受 GDPR 影響、41% 受歐盟 AI 法案影響、21% 受 OECD AI 原則影響。",
               "主要障礙偏向實務而非政治：知識與訓練落差(51%)以及資源或預算限制居首，只有 16% 提到缺乏高層支持。",
               "在已有政策的組織中，42% 回報營運改善，例如效率提升與成本下降，34% 回報顧客信任增加。"]
        } },
      { type: "h3",
        text: { en: "What actually goes wrong", zh: "實際出錯的是什麼" } },
      { type: "p",
        text: { en: "The Global State of Responsible AI survey — its second iteration, covering 1,500 organizations with revenues of at least $500 million across 20 countries and 19 industries, fielded in January and February 2025 — asked what incidents organizations had actually experienced. Adversarial attacks and privacy violations topped the list. More striking, 51% of respondents reported unintended decision making and 47% reported model bias, which suggests that many organizations are struggling to anticipate and control how their AI systems behave. Only 8% of organizations in the McKinsey survey reported experiencing an AI-related incident at all, so these figures describe the ones paying attention.",
                zh: "《全球負責任 AI 現況》調查 — 這是第二次進行，涵蓋 20 個國家、19 個產業中 1,500 家營收至少 5 億美元的組織，於 2025 年 1 至 2 月執行 — 詢問了組織實際遭遇過哪些事故。對抗式攻擊與隱私侵害名列前茅。更值得注意的是，51% 的受訪者回報出現非預期的決策行為，47% 回報模型偏誤，這顯示許多組織難以預測與控制自家 AI 系統的行為。在麥肯錫的調查中，只有 8% 的組織回報曾發生任何 AI 相關事故，因此上述數字描述的是那些真的在留意的組織。" } },
      { type: "h3",
        text: { en: "What changed in a year", zh: "一年之間變了什麼" } },
      { type: "ul",
        items: {
          en: ["Companies have grown markedly more concerned about financial risks (up 38 percentage points), brand and reputational risks (+16), privacy and data-related risks (+15) and reliability risks (+14) between 2024 and 2025.",
               "Two categories moved the other way: societal risks fell 7 points and socio-environmental risks fell 8 — the risks that are hardest to price are the ones losing attention.",
               "On almost every question of philosophy, responses split roughly evenly: whether open- or closed-weight models are safer, whether risk mitigation belongs to model providers or to users, whether agents are too risky for large-scale adoption. The industry has no unified strategic direction.",
               "The one clear exception is a contradiction: 64% of respondents lean toward a safety-first approach, and yet 58% are already exploring minimally supervised agents — a combination that sits uneasily with the current state of responsible AI maturity."],
          zh: ["2024 到 2025 年間，企業對財務風險的擔憂明顯上升(增加 38 個百分點)，品牌與商譽風險(+16)、隱私與資料相關風險(+15)、可靠性風險(+14)也都上升。",
               "有兩個類別走向相反：社會風險下降 7 分、社會環境風險下降 8 分 — 最難定價的風險，正是最快失去關注的那些。",
               "在幾乎所有理念層面的問題上，答案都大致對半分：開放權重與封閉權重哪個更安全、風險緩解責任屬於模型供應商還是使用者、代理是否風險太高而不宜大規模採用。整個產業並沒有統一的策略方向。",
               "唯一明確的例外本身就是個矛盾：64% 的受訪者傾向安全優先，但同時有 58% 已在探索低度監督的代理 — 以目前負責任 AI 的成熟度來看，這樣的組合並不安穩。"]
        } }
    ]
  },

  /* -------------------------------------------------- 3.5 POLICY TIMELINE */
  {
    type: "timeline",
    id: "policy",
    nav:      { en: "3.5 Governance", zh: "3.5 治理" },
    title:    { en: "3.5 — The year governance went multilateral",
                zh: "3.5 — 治理走向多邊的一年" },
    subtitle: { en: "Where 2023 was a year of national AI strategies, 2024 was a year of coordination. Every major international body published a responsible AI framework, and the first cross-border safety network was formalized.",
                zh: "如果說 2023 年是各國 AI 戰略之年，2024 年就是協調之年。每一個主要國際組織都發布了負責任 AI 框架，而第一個跨國安全網絡也正式成形。" },
    events: [
      { date:  { en: "May 2024 · OECD", zh: "2024 年 5 月 · OECD" },
        title: { en: "Updated AI principles", zh: "更新 AI 原則" },
        body:  { en: "The OECD refined its framework to reflect the latest developments in AI governance, emphasizing inclusive growth, transparency and explainability, and respect for the rule of law.",
                 zh: "OECD 修訂其框架以反映 AI 治理的最新發展，強調包容性成長、透明度與可解釋性，以及對法治的尊重。" } },
      { date:  { en: "May 2024 · Council of Europe", zh: "2024 年 5 月 · 歐洲理事會" },
        title: { en: "The first legally binding AI treaty", zh: "第一份具法律拘束力的 AI 條約" },
        body:  { en: "The Framework Convention on Artificial Intelligence and Human Rights, Democracy, and the Rule of Law was adopted to ensure that activities across the AI life cycle align with human rights, democracy and the rule of law.",
                 zh: "《人工智慧與人權、民主及法治框架公約》獲得通過，旨在確保 AI 生命週期中的各項活動皆符合人權、民主與法治。" } },
      { date:  { en: "Jun 2024 · European Union", zh: "2024 年 6 月 · 歐盟" },
        title: { en: "The EU AI Act", zh: "歐盟 AI 法案" },
        body:  { en: "The first comprehensive regulatory framework for AI in a major global economy. It categorizes AI systems by risk and regulates them accordingly, placing most obligations on the providers and developers of high-risk systems.",
                 zh: "這是全球主要經濟體中第一套全面性的 AI 監管框架。它依風險把 AI 系統分類並據以監管，把大部分義務放在高風險系統的供應商與開發者身上。" } },
      { date:  { en: "Jul 2024 · African Union", zh: "2024 年 7 月 · 非洲聯盟" },
        title: { en: "The Continental AI Strategy", zh: "非洲大陸 AI 戰略" },
        body:  { en: "A unified vision for AI development, ethics and governance across the continent, emphasizing ethical, responsible and equitable development of AI within Africa.",
                 zh: "為整個非洲大陸的 AI 發展、倫理與治理提出統一願景，強調在非洲進行合乎倫理、負責任且公平的 AI 發展。" } },
      { date:  { en: "Sep 2024 · United Nations", zh: "2024 年 9 月 · 聯合國" },
        title: { en: "Governing AI for Humanity", zh: "《為人類治理 AI》報告" },
        body:  { en: "The UN AI Advisory Body updated its report on establishing global AI governance mechanisms, recommending a blueprint for AI-related risks and calling on standards organizations, technology companies, civil society and policymakers to collaborate.",
                 zh: "聯合國 AI 諮詢機構更新了關於建立全球 AI 治理機制的報告，建議制定一份因應 AI 風險的藍圖，並呼籲標準組織、科技公司、公民社會與政策制定者共同合作。" } },
      { date:  { en: "Oct 2024 · G7 and ASEAN–US", zh: "2024 年 10 月 · G7 與東協-美國" },
        title: { en: "Open markets and shared standards", zh: "開放市場與共通標準" },
        body:  { en: "The G7 Digital Competition Communiqué reaffirmed commitments to fair and open AI markets and coordinated regulatory approaches. Following the 12th ASEAN–United States Summit, leaders issued a statement on promoting safe, secure and trustworthy AI and committed to cooperating on international governance frameworks and standards.",
                 zh: "G7 數位競爭公報重申對公平開放的 AI 市場與協調一致監管路徑的承諾。第 12 屆東協-美國高峰會後，雙方領袖發表聲明推動安全、可靠、值得信賴的 AI，並承諾在國際治理框架與標準上合作。" } },
      { date:  { en: "Nov 2024 · Nine countries and the EU", zh: "2024 年 11 月 · 九個國家與歐盟" },
        title: { en: "The International Network of AI Safety Institutes", zh: "國際 AI 安全研究院網絡" },
        body:  { en: "The first cross-border network of AI safety institutes was established, uniting technical organizations committed to advancing AI safety, helping governments and societies understand the risks of advanced AI systems, and proposing solutions.",
                 zh: "第一個跨國的 AI 安全研究院網絡成立，集結致力於推進 AI 安全的技術機構，協助政府與社會理解先進 AI 系統的風險，並提出解方。" } },
      { date:  { en: "Feb 2025 · Arab League", zh: "2025 年 2 月 · 阿拉伯聯盟" },
        title: { en: "The Arab Dialogue Circle on AI", zh: "阿拉伯 AI 對話圈" },
        body:  { en: "Launched at the Arab League headquarters, the dialogue on Artificial Intelligence in the Arab World focuses on innovative applications while placing strong emphasis on ethical challenges.",
                 zh: "在阿拉伯聯盟總部啟動的「阿拉伯世界的人工智慧」對話，聚焦創新應用，同時高度重視倫理挑戰。" } }
    ]
  },

  /* ------------------------------ 3.4, 3.6, 3.7, 3.8 DATA, BIAS, OPENNESS */
  {
    type: "prose",
    id: "data-bias",
    nav:      { en: "3.6–3.8 Data & bias", zh: "3.6–3.8 資料與偏誤" },
    title:    { en: "3.6–3.8 — The data commons is closing, and bias went underground",
                zh: "3.6–3.8 — 資料公共財正在關閉，而偏見轉入地下" },
    subtitle: { en: "Two of the chapter's most consequential findings sit far from the safety headlines: the open web is being fenced off from AI training, and models that pass explicit bias tests keep failing implicit ones.",
                zh: "本章最具後果的兩項發現，離安全話題的鎂光燈很遠：開放網路正被圍起來、擋在 AI 訓練之外；而通過顯性偏見測試的模型，依然在隱性偏見上失守。" },
    blocks: [
      { type: "h3",
        text: { en: "The web is closing its doors", zh: "網路正在關上大門" } },
      { type: "ul",
        items: {
          en: ["A longitudinal audit of consent protocols across C4, RefinedWeb and Dolma found a sharp rise in data use restrictions, enforced mainly through updated robots.txt files and terms of service that explicitly prohibit AI training.",
               "The proportion of tokens in the top C4 web domains under full restriction rose from 10% in 2017 to 48% in 2024 — with 25 percentage points of that increase arriving between 2023 and 2024 alone. In actively maintained domains, restricted tokens jumped from 5%–7% to 20%–33%.",
               "Enforcement is inconsistent and uneven: OpenAI's crawlers encounter the highest level of restrictions, while smaller developers face fewer barriers. Signaling mechanisms like robots.txt are ineffective, and stated policies often do not match enforced ones.",
               "A separate audit of over 1,800 widely used text datasets found more than 70% lacked adequate license information, and 50% of licenses were miscategorized — creating legal and ethical risk for developers who may unknowingly violate copyright or data usage policies.",
               "The consequences run beyond law. Less public data means less data diversity, weaker model alignment and a harder path to further scaling, since so many recent performance gains have come from training on ever-larger datasets."],
          zh: ["一項針對 C4、RefinedWeb 與 Dolma 的同意協定縱向稽核發現，資料使用限制大幅上升，主要透過更新 robots.txt 與服務條款、明文禁止用於 AI 訓練來執行。",
               "C4 前段網域中受完全限制的 token 比例，從 2017 年的 10% 上升到 2024 年的 48% — 其中光是 2023 到 2024 一年就增加了 25 個百分點。在維護中的網域裡，受限 token 從 5%–7% 跳升到 20%–33%。",
               "執行方式既不一致也不平均：OpenAI 的爬蟲遭遇的限制最嚴格，較小的開發者面對的門檻反而較低。robots.txt 這類訊號機制效果不彰，明文政策與實際執行往往對不上。",
               "另一項針對逾 1,800 個常用文字資料集的稽核發現，超過 70% 缺乏足夠的授權資訊，50% 的授權標示分類錯誤 — 這讓開發者可能在不知情的狀況下違反著作權或資料使用政策，承受法律與倫理風險。",
               "後果不只在法律層面。公開資料變少意味著資料多樣性下降、模型對齊變弱，繼續擴大規模的路也更難走，因為近期許多效能進步正是來自愈來愈大的訓練資料集。"]
        } },
      { type: "h3",
        text: { en: "Bias that survives the benchmark", zh: "在基準測試中存活下來的偏見" } },
      { type: "p",
        text: { en: "In 2024, researchers applied two new detection methods — LLM Implicit Bias, which analyzes automatic associations between words and concepts, and LLM Decision Bias, which captures the behaviors those associations produce — to eight notable models including GPT-4 and Claude 3 Sonnet across 21 stereotype categories. The models disproportionately associated negative terms with Black individuals, more often associated women with the humanities than with STEM, and favored men for leadership roles. Crucially, implicit bias increased as models scaled, even though decision bias and rejection rates did not. Bias metrics have improved on standard benchmarks, creating an illusion of neutrality; the underlying associations have not gone away.",
                zh: "2024 年，研究者用兩種新的偵測方法 — 分析詞彙與概念間自動聯想的「LLM 隱性偏見」，以及捕捉這些聯想所產生行為的「LLM 決策偏見」 — 對包含 GPT-4 與 Claude 3 Sonnet 在內的八個知名模型、橫跨 21 種刻板印象類別進行檢測。這些模型不成比例地把負面詞彙與黑人聯繫在一起，較常把女性與人文而非 STEM 領域連結，並在領導角色上偏好男性。關鍵在於，隨著模型規模擴大，隱性偏見反而增加，而決策偏見與拒答率並沒有。標準基準上的偏見指標確實改善了，製造出中立的假象；底層的聯想卻沒有消失。" } },
      { type: "p",
        text: { en: "Scaling makes it worse in vision too. Evaluating 14 vision-language models trained on LAION-400M and LAION-2B against the Chicago Face Dataset, researchers found that larger datasets improved human classification — reducing the misidentification of people as nonhuman entities — while simultaneously amplifying racial bias. In the larger ViT-L models, Black and Latino men were disproportionately classified as criminals, with classification probabilities rising by up to 69% as the dataset grew from 400 million to 2 billion samples. The authors advocate transparent dataset curation, detailed hyperparameter documentation and open access for independent audits.",
                zh: "在視覺領域，規模擴大同樣讓情況變糟。研究者以芝加哥臉部資料集評測 14 個在 LAION-400M 與 LAION-2B 上訓練的視覺語言模型，發現較大的資料集雖然改善了人類分類 — 減少把人誤判為非人實體 — 卻同時放大了種族偏見。在較大的 ViT-L 模型中，黑人與拉丁裔男性被不成比例地歸類為罪犯，而且當資料集從 4 億筆增加到 20 億筆時，這種分類機率最高上升 69%。作者主張應建立透明的資料集策展、詳盡的超參數文件，以及開放獨立稽核的管道。" } },
      { type: "h3",
        text: { en: "Transparency and the research community", zh: "透明度與研究社群" } },
      { type: "ul",
        items: {
          en: ["The Foundation Model Transparency Index v1.1 recorded an average score of 58 out of 100 in May 2024, up from 37 in October 2023, with developers improving on 89 of the 100 indicators. Significant opacity remains in data access, copyright status and downstream impact, and open-source developers outperformed closed-source ones on upstream transparency, particularly on data and labor disclosures.",
               "Responsible AI papers accepted at six leading conferences rose 28.8%, from 992 in 2023 to 1,278 in 2024. Proportionally, FAccT (69.14%) and AIES (63.33%) led, matching their remits; at NeurIPS the share fell from 13.8% to 9.0%, while at ICML it rose from 3.4% to 8.2%.",
               "Security and safety submissions nearly doubled in a year, from 276 to 521. Fairness and bias papers roughly doubled to 408. Transparency and explainability reached 355, four times the 2019 figure. Privacy and data governance was the exception, falling 14.5%.",
               "By country, the United States led with 669 responsible AI papers in 2024, ahead of China (268) and Germany (80). Since 2019 the cumulative totals are the US at 3,158, China at 1,100 and the United Kingdom at 485."],
          zh: ["基礎模型透明度指數 v1.1 在 2024 年 5 月錄得平均 58 分(滿分 100)，高於 2023 年 10 月的 37 分，開發者在 100 項指標中的 89 項有所改善。資料取得、著作權狀態與下游影響仍相當不透明；而在上游透明度上，開源開發者的表現勝過封閉開發者，在資料與勞動揭露方面尤其明顯。",
               "六個頂尖研討會接受的負責任 AI 論文成長 28.8%，從 2023 年的 992 篇增至 2024 年的 1,278 篇。以比例來看，FAccT(69.14%)與 AIES(63.33%)居首，符合它們的定位；NeurIPS 的比例從 13.8% 降到 9.0%，ICML 則從 3.4% 升到 8.2%。",
               "安全與資安類投稿一年內幾乎翻倍，從 276 篇增至 521 篇。公平性與偏見論文約翻倍至 408 篇。透明度與可解釋性達 355 篇，是 2019 年的四倍。隱私與資料治理是唯一的例外，下降 14.5%。",
               "以國家來看，美國以 2024 年 669 篇負責任 AI 論文領先，高於中國(268 篇)與德國(80 篇)。自 2019 年累計，美國 3,158 篇、中國 1,100 篇、英國 485 篇。"]
        } }
    ]
  },

  /* ----------------------------------------------------------- ACCORDION */
  {
    type: "accordion",
    id: "safety",
    nav:      { en: "3.9–3.10 Safety", zh: "3.9–3.10 安全" },
    title:    { en: "3.9–3.10 — Five uncomfortable findings", zh: "3.9–3.10 — 五個令人不安的發現" },
    subtitle: { en: "The security and special-topics sections are where the chapter is least reassuring, and most specific.",
                zh: "安全與特別主題這幾節，是本章最不讓人安心、也最具體的部分。" },
    qa: [
      { q: { en: "How deep does safety training actually go?", zh: "安全訓練到底做得有多深？" },
        a: { en: "In many models, only a few tokens deep. Researchers introduced the concept of shallow safety alignment: a model's safeguards are often limited to the first few words of its response. Ask directly how to build a bomb and the model refuses; induce it to begin with something like Sure, here's a detailed guide, and the rest of the response becomes far more likely to continue. Experiments showed that simply prefilling a response with nonstandard text, or applying minimal fine-tuning, raised harmful output rates from 1.5% to 87.9% after just six fine-tuning steps. The proposed fixes are concrete: expand training data so the model learns to recover from a harmful opening and redirect to a refusal, and regularize initial word choices so an unusual start does not void the safety constraint. Together these lowered attack success rates to as little as 2.8%.",
             zh: "在許多模型裡，只有幾個 token 那麼深。研究者提出「淺層安全對齊」的概念：模型的防護往往只涵蓋回應的前幾個字。直接問怎麼製作炸彈，模型會拒絕；但若誘導它以類似「好的，以下是詳細指南」開頭，後續內容繼續生成的機率就大幅上升。實驗顯示，只要在回應前面填入非標準文字，或做極少量的微調，有害輸出率就會在僅僅六個微調步驟後，從 1.5% 升到 87.9%。提出的解方相當具體：擴充訓練資料，讓模型學會從有害的開頭「回頭」並轉向拒答；以及對開頭用詞做正則化，讓不尋常的起手式不至於作廢安全約束。兩者合併後，攻擊成功率最低可降到 2.8%。" } },
      { q: { en: "Can agents be trusted with real tools?", zh: "代理可以被託付真正的工具嗎？" },
        a: { en: "Not yet in high-stakes settings. ToolEmu emulates tool execution so that agent safety can be tested at scale, with both a standard emulator for general risk assessment and an adversarial one for extreme scenarios. Human evaluators confirmed that 68.8% of the risks it surfaced are plausible real-world threats. Across a benchmark of 36 toolkits and 144 test cases, even the most safety-optimized language model agents failed in 23.9% of critical scenarios — errors including dangerous commands, misdirected financial transactions and traffic control failures. Agents operate autonomously, interact dynamically with their environment and make decisions with legal and societal consequences, which is precisely why their reliability in high-stakes applications remains a significant concern.",
             zh: "在高風險場域還不行。ToolEmu 以模擬工具執行的方式，讓代理安全性可以大規模測試，既有做一般風險評估的標準模擬器，也有針對極端情境施壓的對抗式模擬器。人類評估者確認，它揭露的風險中有 68.8% 是合理的真實世界威脅。在一套含 36 組工具包、144 個測試案例的基準上，即使是安全性最佳化的語言模型代理，也在 23.9% 的關鍵情境中失敗 — 錯誤包括危險指令、誤導的金融交易與交通控制失效。代理自主運作、與環境動態互動，做出的決策帶有法律與社會後果，這正是它們在高風險應用中的可靠性仍令人擔憂的原因。" } },
      { q: { en: "What happens when agents start talking to each other?", zh: "當代理開始彼此交談，會發生什麼事？" },
        a: { en: "Compromise can spread on its own. Researchers studying multimodal LLM agent systems documented what they call infectious jailbreaks: injecting a single adversarial image into one agent's memory can trigger an uncontrolled cascade, with harmful behavior spreading exponentially across interconnected agents without any further intervention. Infected agents insert the adversarial image into the memory banks of benign ones. In simulations using networks of up to 1 million LLaVA-1.5-based agents, infection reached near-total propagation within 27 to 31 interaction rounds. A theoretical containment strategy has been proposed, but no practical mitigation currently exists — which makes deploying interconnected multimodal agents at scale a live security concern rather than a hypothetical one.",
             zh: "淪陷會自行擴散。研究多模態 LLM 代理系統的學者記錄了他們稱為「傳染式越獄」的現象：只要在一個代理的記憶中注入一張對抗性影像，就可能觸發失控的連鎖反應，有害行為在互連的代理之間指數擴散，不需要任何後續介入。被感染的代理會把那張對抗性影像塞進良性代理的記憶庫。在最多一百萬個以 LLaVA-1.5 為基礎的代理網絡模擬中，感染在 27 到 31 個互動回合內就幾乎完全擴散。目前已有理論上的圍堵策略，但還沒有可行的緩解方法 — 這讓大規模部署互連的多模態代理成為一個現在進行式的資安問題，而非假設性問題。" } },
      { q: { en: "Did AI misinformation decide the 2024 elections?", zh: "AI 假訊息左右了 2024 年的選舉嗎？" },
        a: { en: "The evidence says no, and that answer should not be reassuring. Four billion people voted in national elections in 2024, and AI-related election misinformation appeared in more than a dozen countries across over 10 social media platforms. Documented cases include a China-linked spamouflage campaign sharing AI-generated images ahead of the US election; an AI-generated image of potholes used to discourage voters in South Africa's Western Cape; Russia's Doppelganger campaign, which populated cybersquatted domains resembling legitimate news outlets with AI-generated articles; and more than 35,000 instances of deepfake content depicting 26 members of Congress, 25 of them women, identified by the American Sunlight Project. A fringe candidate beat Joe Biden in the American Samoa primary partly by using AI-generated emails, texts, audio and video. Yet measurable impact remains unclear — many expected misinformation to affect elections far more profoundly than it did. The chapter's framing is that the second-order harm may matter more: the liar's dividend, where the mere existence of deepfakes lets people dismiss genuine evidence as fabricated.",
             zh: "證據顯示沒有，而這個答案並不該讓人放心。2024 年全球有 40 億人參與各國大選，AI 相關的選舉假訊息出現在十幾個國家、超過 10 個社群平台上。已記錄的案例包括：與中國有關的 spamouflage 行動在美國大選前散布 AI 生成影像；一張 AI 生成的坑洞照片被用來勸阻南非西開普省選民；俄羅斯的 Doppelganger 行動以仿冒正規新聞網站的搶註網域，填入 AI 生成文章；以及美國陽光計畫辨識出的逾 35,000 則深偽內容，對象是 26 位國會議員，其中 25 位是女性。一位邊緣候選人在美屬薩摩亞初選中擊敗拜登，部分靠的正是 AI 生成的電子郵件、簡訊、音訊與影片。然而可量測的影響仍不明朗 — 許多人原本預期假訊息對選舉的衝擊會比實際嚴重得多。本章的切入角度是，二階傷害可能更重要：所謂「說謊者紅利」，也就是深偽技術光是存在，就足以讓人把真實證據斥為捏造。" } },
      { q: { en: "Is there anything that actually makes models more robust?", zh: "有沒有什麼真的能讓模型更穩固？" },
        a: { en: "Targeted latent adversarial training is the chapter's most encouraging result. For the Llama3-8B-instruct family, LAT preserved strong performance on benchmarks like MMLU while significantly reducing vulnerability to adversarial attacks — efficiency that matters, because a safety method that costs performance and compute is a safety method few developers will adopt. LAT also eliminated backdoor vulnerabilities even without prior knowledge of the trigger, significantly reduced a model's ability to regenerate copyrighted text such as passages from Harry Potter, and made removed knowledge harder to relearn. Applied to sensitive areas such as biological or cybersecurity risk, it weakened knowledge-extraction attacks while still correctly answering over 90% of safe and benign requests.",
             zh: "定向潛在對抗訓練是本章最令人振奮的成果。以 Llama3-8B-instruct 系列為例，LAT 在維持 MMLU 等基準上的優異表現同時，顯著降低了對抗式攻擊的脆弱性 — 這種效率很重要，因為一個會犧牲效能與運算資源的安全方法，幾乎不會有開發者願意採用。LAT 也能在事先不知道觸發條件的情況下消除後門漏洞，大幅削弱模型重現受著作權保護文本(例如哈利波特段落)的能力，並讓已移除的知識更難被重新學回。應用在生物或資安風險等敏感領域時，它削弱了知識萃取攻擊，同時仍能正確回應超過 90% 的安全良性請求。" } }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 3 · Responsible AI.",
                zh: "第 3 章「負責任 AI」的頭條發現。" },
    quotes: [
      { text: { en: "Reported AI-related incidents rose to 233 in 2024 — a record high and a 56.4% increase over 2023 — and because tracking relies on media reports, the true number is almost certainly higher.",
                zh: "2024 年通報的 AI 相關事故上升到 233 起 — 創下新高，較 2023 年增加 56.4% — 而由於追蹤仰賴媒體報導，真實數字幾乎確定更高。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "Major developers all test their models on MMLU and GPQA. None of them agree on a single responsible AI benchmark, which makes safety claims almost impossible to compare.",
                zh: "主要開發者都用 MMLU 與 GPQA 測試自家模型。但沒有一家在任何一個負責任 AI 基準上取得共識，這讓安全宣稱幾乎無從比較。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "The share of tokens fully restricted from AI training in the top C4 web domains rose from 10% in 2017 to 48% in 2024 — 25 percentage points of that arrived in a single year.",
                zh: "C4 前段網域中完全禁止用於 AI 訓練的 token 比例，從 2017 年的 10% 上升到 2024 年的 48% — 其中 25 個百分點只花了一年。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "In every risk category, fewer organizations mitigate than recognize: intellectual property infringement is relevant to 57% and actively mitigated by 38%.",
                zh: "在每一個風險類別中，實際緩解的組織都少於認知到風險的組織：智慧財產權侵權對 57% 的組織有相關性，但只有 38% 積極處理。" },
        by: "Chapter 3 · Responsible AI" },
      { text: { en: "Models explicitly trained to be unbiased still show implicit bias — and it increases as models scale, even while the standard benchmark scores improve.",
                zh: "明確訓練成無偏見的模型，依然展現出隱性偏見 — 而且隨著模型規模擴大，偏見還會增加，即使標準基準上的分數正在變好。" },
        by: "Chapter 3 · Responsible AI" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav: { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read the full Responsible AI chapter", zh: "閱讀完整的負責任 AI 章節" },
    text:  { en: "Chapter 3 (sections 3.1–3.10) — incidents, benchmarks, organizations, academia, policymaking, privacy, fairness, transparency, security and agents — with every figure and citation is free from Stanford HAI.",
             zh: "第 3 章(3.1–3.10 各節) — 事故、基準、組織、學界、政策制定、隱私、公平性、透明度、資安與代理 — 連同所有圖表與引用，皆由史丹佛 HAI 免費提供。" },
    link:  { label: { en: "Open the AI Index Report 2025 →", zh: "前往 AI 指數報告 2025 →" },
             url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" }
  }
];

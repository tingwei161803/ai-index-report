/* =========================================================================
   Policy & Governance — deep dive · policy.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2026, Chapter 8
   https://hai.stanford.edu/ai-index/2026-ai-index-report/policy-and-governance

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 8: 8.1 Major Global AI Policy News, 8.2 National
   AI Strategies, 8.3 AI Sovereignty, 8.4 AI and Policymaking, 8.5 Public
   Investment in AI. All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "policy";

window.SITE_META = {
  title:    { en: "AI Index Report 2026", zh: "AI 指數報告 2026" },
  subtitle: { en: "Policy & Governance · a chapter deep dive", zh: "政策與治理專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    title:    { en: "AI policy is no longer just about regulation — it's about capacity",
                zh: "AI 政策不再只是監管 — 而是國家能力" },
    subtitle: { en: "Chapter 8 of the AI Index 2026 shows governments racing to build and control the infrastructure, data, talent, and models behind AI. National strategies are spreading to lower-income economies, legislative activity is climbing at every level, and compute remains concentrated in a handful of countries. The numbers:",
                zh: "AI 指數 2026 第 8 章顯示,各國政府正爭相建立並掌控 AI 背後的基礎設施、資料、人才與模型。國家戰略正擴散到中低所得經濟體,立法活動在各級政府都在攀升,而算力仍集中在少數國家手中。先看數字:" },
    stats: [
      { label: { en: "AI supercomputing clusters in Europe & Central Asia, 2025 (3 in 2018)", zh: "歐洲與中亞的 AI 超算叢集,2025 年(2018 年為 3)" }, value: 44 },
      { label: { en: "data-localization measures in East Asia & Pacific (through 2024)", zh: "東亞與太平洋的資料在地化措施(截至 2024)" }, value: 77 },
      { label: { en: "AI witnesses in US congressional hearings, 2025 (5 in 2017)", zh: "2025 年美國國會聽證會 AI 證人數(2017 年為 5)" }, value: 102 },
      { label: { en: "% industry share of US congressional AI witnesses (13% in 115th)", zh: "% 美國國會 AI 證人中產業界佔比(第 115 屆為 13%)" }, value: 37 },
      { label: { en: "US$ billions of US public AI investment, 2013–2024", zh: "億美元的美國 AI 公共投資(2013–2024,單位:十億)" }, value: 20 },
      { label: { en: "US$ billions of European AI public commitments, 2013–2024", zh: "億美元的歐洲 AI 公共承諾(2013–2024,單位:十億)" }, value: 4 }
    ]
  },

  /* ------------------------------------------------ 8.2 NATIONAL STRATEGIES */
  {
    type: "prose",
    id: "strategies",
    title:    { en: "8.2 — National AI strategies are spreading to the periphery",
                zh: "8.2 — 國家 AI 戰略正擴散到邊陲" },
    subtitle: { en: "More countries adopted national AI strategies in 2024–2025, with the fastest growth among economies that had no formal AI policy five years ago. The data tracks policy intent, not implementation.",
                zh: "更多國家在 2024–2025 年採行國家 AI 戰略,成長最快的正是五年前還沒有正式 AI 政策的經濟體。資料追蹤的是政策意向,而非實際落實。" },
    blocks: [
      { type: "p",
        text: { en: "In 2024, more than half of newly adopted national AI strategies came from emerging economies — a marked shift in AI governance from earlier years, when high-income countries dominated. As of 2025, additional countries across sub-Saharan Africa, Central Asia, and the Middle East have strategies in active development.",
                zh: "2024 年,新採行的國家 AI 戰略中超過一半來自新興經濟體 — 相較於早年由高所得國家主導,這是 AI 治理的明顯轉變。截至 2025 年,撒哈拉以南非洲、中亞與中東又有更多國家正在積極研擬戰略。" } },
      { type: "h3",
        text: { en: "New frameworks at the edges", zh: "邊陲的新框架" } },
      { type: "ul",
        items: {
          en: ["Sub-Saharan Africa surfaced new strategies in Ethiopia, Ghana, and Nigeria, while South Africa has one already in development.",
               "South and Central Asia saw frameworks emerge in Sri Lanka and Nepal; Latin America and the Caribbean added Costa Rica and Jamaica, with Mexico's in development.",
               "High-income economies kept contributing, but more slowly and with a focus on consolidation — European countries such as Malta released updated strategies to align with EU AI Act requirements."],
          zh: ["撒哈拉以南非洲有衣索比亞、迦納與奈及利亞推出新戰略,南非則已有一份在研擬中。",
               "南亞與中亞有斯里蘭卡與尼泊爾的框架浮現;拉丁美洲與加勒比海地區新增哥斯大黎加與牙買加,墨西哥的也在研擬中。",
               "高所得經濟體仍持續貢獻,但步調較慢且聚焦於整合 — 馬爾他等歐洲國家發布更新版戰略,以符合歐盟 AI 法案的要求。"]
        } },
      { type: "p",
        text: { en: "As more countries adopt strategies, a consensus is rising that AI can be a lever to bolster state capacity. The next challenge, the report notes, is implementation and regulatory capacity — particularly in Africa, where many countries still lack formal strategies and risk falling behind in AI governance and readiness.",
                zh: "隨著愈來愈多國家採行戰略,一個共識正在形成:AI 可以成為強化國家能力的槓桿。報告指出,下一個挑戰是落實與監管能力 — 尤其在非洲,許多國家仍缺乏正式戰略,有在 AI 治理與整備度上落後的風險。" } }
    ]
  },

  /* ----------------------------------------------------- 8.3 SOVEREIGNTY */
  {
    type: "prose",
    id: "sovereignty",
    title:    { en: "8.3 — AI sovereignty, unevenly distributed",
                zh: "8.3 — AI 主權,分布不均" },
    subtitle: { en: "AI sovereignty — a state's capacity to act and decide independently across the AI stack — is emerging as a central principle of national policy. But the infrastructure underpinning it is concentrated in a few regions.",
                zh: "AI 主權 — 一個國家在整個 AI 技術堆疊上獨立行動與決策的能力 — 正成為國家政策的核心原則。但支撐它的基礎設施集中在少數幾個區域。" },
    blocks: [
      { type: "h3",
        text: { en: "Compute: a sevenfold gap", zh: "算力:七倍的落差" } },
      { type: "p",
        text: { en: "Between 2018 and 2025, Europe and Central Asia expanded state-backed AI supercomputing clusters from 3 to 44, largely driven by the European High Performance Computing Joint Undertaking (EuroHPC JU). North America grew nearly sevenfold to 41 clusters, and East Asia (excluding China) about fourfold to 27. By contrast, South Asia, the Middle East and North Africa, and Latin America and the Caribbean each only doubled or tripled — reaching 2, 3, and 8 clusters respectively by 2025.",
                zh: "2018 到 2025 年間,歐洲與中亞把國家支持的 AI 超算叢集從 3 個擴增到 44 個,主要由「歐洲高效能運算共同事業(EuroHPC JU)」推動。北美成長近七倍達 41 個,東亞(不含中國)約四倍達 27 個。相較之下,南亞、中東與北非、拉丁美洲與加勒比海地區各自只增加了一到兩倍 — 到 2025 年分別只有 2、3、8 個叢集。" } },
      { type: "h3",
        text: { en: "Data: three regional clusters", zh: "資料:三種區域樣態" } },
      { type: "ul",
        items: {
          en: ["Through 2024, East Asia and the Pacific had adopted 77 data-localization measures, followed closely by sub-Saharan Africa (71) and Europe and Central Asia (66).",
               "Moderate-localization regions include the Middle East and North Africa (44), Latin America and the Caribbean (36), and South Asia (24).",
               "North America remains a striking outlier at just 3 measures, reflecting a long-standing 'flow-first' policy orientation that favors free cross-border data flows."],
          zh: ["截至 2024 年,東亞與太平洋已採行 77 項資料在地化措施,撒哈拉以南非洲(71)與歐洲及中亞(66)緊追在後。",
               "中度在地化的區域包括中東與北非(44)、拉丁美洲與加勒比海(36),以及南亞(24)。",
               "北美則是顯著的例外,只有 3 項措施,反映其長期「資料先流通」的政策取向,偏好自由的跨境資料流動。"]
        } },
      { type: "p",
        text: { en: "Model production remains concentrated, with the United States and China accounting for a disproportionate share of global activity, even as open-source development diffuses more broadly. Private firms — through OpenAI's Stargate and Nvidia's 'AI Factory' partnerships — are increasingly central to building what many governments designate as national AI infrastructure.",
                zh: "模型生產仍高度集中,美國與中國佔了全球活動中不成比例的份額,即使開源開發正更廣泛地擴散。私人企業 — 透過 OpenAI 的 Stargate 與 Nvidia 的「AI 工廠」合作 — 在打造各國政府所稱的國家 AI 基礎設施上,角色愈來愈關鍵。" } }
    ]
  },

  /* ---------------------------------------- congressional witnesses chart */
  {
    type: "bars",
    id: "witnesses",
    title:    { en: "AI witnesses in US congressional hearings grew twentyfold",
                zh: "美國國會聽證會的 AI 證人成長了二十倍" },
    subtitle: { en: "Number of witnesses in US congressional AI-related hearings, by year. The count rose from 5 in 2017 to 102 in 2025, with the sharpest jump after generative AI emerged in late 2022.",
                zh: "美國國會 AI 相關聽證會的逐年證人數。從 2017 年的 5 人增至 2025 年的 102 人,最劇烈的躍升出現在 2022 年底生成式 AI 興起之後。" },
    series: [
      { label: { en: "2017", zh: "2017" }, value: 5 },
      { label: { en: "2022", zh: "2022" }, value: 18 },
      { label: { en: "2023", zh: "2023" }, value: 131 },
      { label: { en: "2025", zh: "2025" }, value: 102 }
    ]
  },

  /* ------------------------------------------ supercomputing region chart */
  {
    type: "bars",
    id: "supercompute",
    title:    { en: "State-backed AI supercomputing, by region",
                zh: "國家支持的 AI 超算,依區域" },
    subtitle: { en: "Cumulative number of public or public-private AI supercomputers by 2025. Europe & Central Asia (44) and North America (41) lead among non-China regions; South Asia trails at just 2. (China leads overall at 85.)",
                zh: "截至 2025 年公共或公私合營 AI 超級電腦的累計數。在中國以外,歐洲與中亞(44)及北美(41)領先;南亞僅 2 個墊底。(中國以 85 個居全球之冠。)" },
    series: [
      { label: { en: "Europe & Central Asia", zh: "歐洲與中亞" }, value: 44 },
      { label: { en: "North America", zh: "北美" },              value: 41 },
      { label: { en: "East Asia & Pacific", zh: "東亞與太平洋" }, value: 27 },
      { label: { en: "Latin America & Caribbean", zh: "拉美與加勒比海" }, value: 8 },
      { label: { en: "Middle East & N. Africa", zh: "中東與北非" }, value: 3 },
      { label: { en: "South Asia", zh: "南亞" },                 value: 2 }
    ]
  },

  /* ------------------------------------------------- 8.4 LEGISLATION PROSE */
  {
    type: "prose",
    id: "legislation",
    title:    { en: "8.4 — Federal deregulation, state-level acceleration",
                zh: "8.4 — 聯邦鬆綁,州級加速" },
    subtitle: { en: "In 2025, US federal policy shifted toward deregulation even as state legislatures passed a record number of AI bills — a tension that defines the year's policymaking.",
                zh: "2025 年,美國聯邦政策轉向鬆綁,而州議會卻通過了破紀錄的 AI 法案數 — 這股張力定義了這一年的政策走向。" },
    blocks: [
      { type: "p",
        text: { en: "Among G20 countries, the United States passed the most AI-related bills between 2016 and 2025 (25 in total), followed by South Korea (17). At the state level the totals are far larger: California enacted 62 AI-related bills over the period, more than double any other state, followed by Maryland (28), Virginia (25), and Utah (24). Two states — Missouri and Rhode Island — have enacted none.",
                zh: "在 G20 國家中,美國於 2016 到 2025 年間通過最多 AI 相關法案(共 25 件),南韓次之(17 件)。在州級,數字大得多:加州在這段期間立法 62 件 AI 相關法案,是任何其他州的兩倍以上,其次是馬里蘭(28)、維吉尼亞(25)與猶他(24)。有兩州 — 密蘇里與羅德島 — 一件都沒有立法。" } },
      { type: "h3",
        text: { en: "Federal reversal", zh: "聯邦的反轉" } },
      { type: "p",
        text: { en: "Early in 2025 the federal direction changed: the administration rescinded Biden's Executive Order 14110 and issued 'Removing Barriers to American Leadership in Artificial Intelligence,' reorienting policy toward fewer constraints. Federal AI-related regulations still rose to 58 in 2025 (from one in 2016), with the Executive Office of the President alone issuing 28. In December 2025, a further executive order directed the Department of Justice to set up an AI Litigation Task Force to challenge state AI laws in court.",
                zh: "2025 年初,聯邦方向改變:政府撤銷拜登的第 14110 號行政命令,並發布「消除美國 AI 領導地位的障礙」命令,將政策重新導向減少限制。聯邦 AI 相關法規仍升至 2025 年的 58 項(2016 年僅 1 項),光是總統行政辦公室就發布了 28 項。2025 年 12 月,又一道行政命令要求司法部成立「AI 訴訟工作小組」,在法庭上挑戰各州的 AI 法律。" } },
      { type: "h3",
        text: { en: "States fill the vacuum", zh: "各州填補真空" } },
      { type: "p",
        text: { en: "In the absence of a federal framework, states moved ahead on their own — with targeted protections against discrimination, misinformation, and abuse, plus chatbot disclosure rules, watermarking and provenance requirements, and even a 'right to compute.' The US Senate also struck a proposed 10-year federal moratorium on state AI regulation from a major spending bill, allowing states to keep legislating.",
                zh: "在缺乏聯邦框架的情況下,各州自行前進 — 推出針對歧視、不實資訊與濫用的定向保護,加上聊天機器人揭露規定、浮水印與來源標示要求,甚至還有「運算權」。美國參議院也從一項重大支出法案中刪除了原本提議的「對州級 AI 監管十年聯邦禁令」,讓各州得以繼續立法。" } }
    ]
  },

  /* ---------------------------------------------- US state bills chart */
  {
    type: "bars",
    id: "statebills",
    title:    { en: "AI bills enacted by US state, 2016–2025",
                zh: "美國各州立法的 AI 法案數,2016–2025" },
    subtitle: { en: "Number of AI-related bills passed into law, cumulative sum 2016–2025, for the most active states. California leads with 62 — more than double any other state.",
                zh: "通過成為法律的 AI 相關法案數,2016–2025 累計總和,最活躍的州。加州以 62 件領先 — 是任何其他州的兩倍以上。" },
    series: [
      { label: { en: "California", zh: "加州" },     value: 62 },
      { label: { en: "Maryland", zh: "馬里蘭" },     value: 28 },
      { label: { en: "Virginia", zh: "維吉尼亞" },   value: 25 },
      { label: { en: "Utah", zh: "猶他" },           value: 24 },
      { label: { en: "New York", zh: "紐約" },       value: 18 },
      { label: { en: "Texas", zh: "德州" },          value: 17 }
    ]
  },

  /* ------------------------------------------------ MAJOR POLICY MOVES CARDS */
  {
    type: "cards",
    id: "moves",
    title:    { en: "8.1 — The year's defining policy moves", zh: "8.1 — 定義這一年的政策動作" },
    subtitle: { en: "From state chatbot laws to global governance summits. Tap any card for the full context and its numbers.",
                zh: "從州級聊天機器人法律到全球治理高峰會。點任一張卡片看完整脈絡與數字。" },
    items: [
      {
        slug: "utah-chatbot-act",
        title:   { en: "Utah's Mental Health Chatbot Act", zh: "猶他《心理健康聊天機器人法》" },
        summary: { en: "HB 452 (March 2025) made Utah a leader in regulating AI chatbots in sensitive settings.",
                   zh: "HB 452(2025 年 3 月)讓猶他成為規範敏感場域 AI 聊天機器人的先行者。" },
        tags: ["state law"],
        overview: { en: "Signed in March 2025, Utah's HB 452 establishes provisions for regulating mental health chatbots that use AI. It mandates disclosure when users are interacting with AI, prohibits the selling or sharing of users' personal health data with third parties, and restricts in-chat advertising. It became a template for a wave of state action on how AI chatbots interact with consumers in high-stakes contexts — California's SB 243 (effective January 2026) followed, requiring companion-chatbot operators to disclose their AI nature and implement safety protocols around suicidal ideation, with extra safeguards for minors. States including Hawaii (SB 640) and Massachusetts (S.243) proposed treating undisclosed chatbot interactions as unfair and deceptive practices.",
                    zh: "猶他 HB 452 於 2025 年 3 月簽署生效,訂出規範使用 AI 的心理健康聊天機器人的條款。它要求在使用者與 AI 互動時揭露、禁止將使用者個人健康資料出售或分享給第三方,並限制聊天中的廣告。它成為一波州級行動的範本,規範 AI 聊天機器人在高風險情境中如何與消費者互動 — 加州 SB 243(2026 年 1 月生效)隨後跟進,要求陪伴型聊天機器人業者揭露其 AI 身分,並針對自殺意念建立安全機制,對未成年人有額外保護。夏威夷(SB 640)與麻州(S.243)等州則提議,把未揭露的聊天機器人互動視為不公平與欺騙行為。" }
      },
      {
        slug: "montana-right-to-compute",
        title:   { en: "Montana's Right to Compute Act", zh: "蒙大拿《運算權法》" },
        summary: { en: "SB 212 (April 2025) established the first state-level 'right to compute' — a pro-innovation framework.",
                   zh: "SB 212(2025 年 4 月)確立了首個州級「運算權」 — 一個親創新的框架。" },
        tags: ["state law"],
        overview: { en: "Not all states moved toward greater oversight. Montana's SB 212, signed in April 2025, established the first state-level 'right to compute,' affirming individuals' and businesses' rights to own and use computational resources — including AI tools — for lawful purposes. The law limits government restrictions to those that are 'demonstrably necessary and narrowly tailored to fulfill a compelling government interest.' At the same time it requires deployers of AI-controlled critical infrastructure to maintain risk-management policies with human-override capabilities, balancing its pro-innovation stance with a safety backstop.",
                    zh: "並非所有州都走向更多監管。蒙大拿 SB 212 於 2025 年 4 月簽署生效,確立了首個州級「運算權」,肯定個人與企業有權為合法目的擁有並使用運算資源 — 包括 AI 工具。該法把政府的限制侷限於「有明確必要、且為達成重大政府利益而精準設計」的情形。同時,它要求部署 AI 控制的關鍵基礎設施者,須維持具備人工覆寫能力的風險管理政策,在親創新立場與安全底線之間取得平衡。" }
      },
      {
        slug: "take-it-down-act",
        title:   { en: "US Take It Down Act", zh: "美國《Take It Down 法》" },
        summary: { en: "Signed May 2025, the federal law targets nonconsensual intimate imagery — including AI deepfakes.",
                   zh: "2025 年 5 月簽署的聯邦法,針對未經同意的私密影像 — 包括 AI 深偽。" },
        tags: ["federal law"],
        overview: { en: "Enacted in May 2025, the Take It Down Act is a federal law designed to address the distribution of nonconsensual intimate imagery. It explicitly covers deepfake content and strengthens removal and accountability expectations for platforms. It was one of the few areas of clear federal action in a year otherwise marked by deregulation, and it sits alongside other safety-oriented moves — the UK criminalizing AI tools used to generate child sexual abuse imagery, and renewed US scrutiny of AI companion systems following lawsuits over a teen suicide linked to an AI companion.",
                    zh: "《Take It Down 法》於 2025 年 5 月立法,是一部處理未經同意私密影像散布的聯邦法律。它明確涵蓋深偽內容,並強化平台的下架與問責要求。在一個以鬆綁為主基調的年度裡,它是少數明確的聯邦行動之一,與其他以安全為導向的舉措並列 — 英國將用於生成兒童性虐待影像的 AI 工具入罪化,以及美國在一起與 AI 陪伴系統有關的青少年自殺訴訟後,對 AI 陪伴系統重新加強審視。" }
      },
      {
        slug: "eu-ai-act",
        title:   { en: "EU AI Act takes effect", zh: "歐盟 AI 法案上路" },
        summary: { en: "The first phase of the EU's landmark regulation took effect in February 2025, banning high-risk uses.",
                   zh: "歐盟指標性法規的第一階段於 2025 年 2 月生效,禁止高風險用途。" },
        tags: ["regulation"],
        overview: { en: "The EU AI Act, the world's most comprehensive AI regulation, took effect in its first phase on February 2, 2025, banning high-risk uses such as predictive policing and emotion recognition and setting the stage for stricter rules. Obligations for providers of general-purpose AI models began applying in August 2025, requiring risk assessments, transparency disclosures, and mitigation measures for systems with systemic risk. The European Commission also published a voluntary Code of Practice for general-purpose AI. The rollout drew pushback: a coalition of 38 global creative-industry bodies condemned the Act's implementation as undermining cultural rights. Italy became the first EU member state to pass its own complementary AI law in September 2025.",
                    zh: "歐盟 AI 法案是全球最全面的 AI 法規,其第一階段於 2025 年 2 月 2 日生效,禁止預測性執法與情緒辨識等高風險用途,並為更嚴格的規則鋪路。通用型 AI 模型供應商的義務自 2025 年 8 月起適用,要求對具系統性風險的系統進行風險評估、透明度揭露與緩解措施。歐盟執委會也發布了通用型 AI 的自願性實務守則。這項推行引發反彈:由 38 個全球創意產業組織組成的聯盟譴責該法的實施損害文化權利。義大利於 2025 年 9 月成為首個通過自身配套 AI 法律的歐盟成員國。" }
      },
      {
        slug: "california-sb53",
        title:   { en: "California's SB 53 safety law", zh: "加州 SB 53 安全法" },
        summary: { en: "Signed September 2025, SB 53 requires large model developers to disclose safety protocols.",
                   zh: "2025 年 9 月簽署的 SB 53,要求大型模型開發者揭露安全機制。" },
        tags: ["state law"],
        overview: { en: "California Governor Gavin Newsom signed SB 53 in September 2025, a landmark AI safety and transparency law requiring large AI-model developers to disclose safety protocols and incident reports and to protect whistleblowers. It built on an earlier Newsom-commissioned California AI Policy Report (June 2025) that warned of 'irreversible harms' including biological and nuclear misuse and proposed safety, transparency, and whistleblower frameworks — potentially offering a national blueprint in the absence of federal law. In October 2025 California enacted further bills, including SB 243 on companion bots, AB 853 requiring provenance data in gen-AI content, and AB 621 extending deepfake law.",
                    zh: "加州州長紐松於 2025 年 9 月簽署 SB 53,這是一部指標性的 AI 安全與透明法,要求大型 AI 模型開發者揭露安全機制與事故報告,並保護吹哨者。它建立在一份由紐松委託的加州 AI 政策報告(2025 年 6 月)之上,該報告警告包含生物與核武誤用在內的「不可逆傷害」,並提議安全、透明與吹哨者框架 — 在缺乏聯邦法律之際,可能成為全國藍本。2025 年 10 月加州又立法多項法案,包括規範陪伴型機器人的 SB 243、要求生成式 AI 內容含來源資料的 AB 853,以及延伸深偽法的 AB 621。" }
      },
      {
        slug: "global-governance",
        title:   { en: "A fracturing global governance order", zh: "分裂中的全球治理秩序" },
        summary: { en: "At the Paris AI Action Summit, the US and UK refused to sign a declaration backed by 60 countries.",
                   zh: "在巴黎 AI 行動高峰會上,美英拒簽一份 60 國背書的宣言。" },
        tags: ["governance"],
        overview: { en: "Global AI governance showed both cooperation and divergence in 2025. At the Paris AI Action Summit in February, the US and UK declined to endorse a declaration on inclusive, ethical AI signed by 60 countries — signaling diverging governance approaches. China finalized mandatory labeling rules for AI-generated content and, at the World AI Conference, unveiled a 13-point action plan for global AI governance. The G7 reaffirmed cooperation on AI safety and standards, the UN General Assembly approved an Independent International Scientific Panel on AI plus a Global Dialogue on AI Governance, and UNESCO adopted global standards on neurotechnology covering 'neural data' rights and mental privacy. Zimbabwe partnered with Nvidia to launch Africa's first dedicated 'AI factory.'",
                    zh: "全球 AI 治理在 2025 年同時展現合作與分歧。2 月的巴黎 AI 行動高峰會上,美英拒絕為一份由 60 國簽署、關於包容與合乎倫理 AI 的宣言背書 — 顯示治理路徑的分歧。中國敲定 AI 生成內容的強制標示規則,並在世界人工智慧大會上公布全球 AI 治理的 13 點行動方案。G7 重申在 AI 安全與標準上的合作,聯合國大會核准成立「獨立國際 AI 科學小組」與「全球 AI 治理對話」,UNESCO 則通過涵蓋「神經資料」權利與心智隱私的神經科技全球標準。辛巴威與 Nvidia 合作,啟動非洲第一座專屬「AI 工廠」。" }
      }
    ]
  },

  /* ---------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 8 · Policy & Governance.",
                zh: "第 8 章「政策與治理」的頭條發現。" },
    quotes: [
      { text: { en: "AI policy is no longer just about regulation — governments are now investing to build their own infrastructure, data, talent, and models.",
                zh: "AI 政策不再只是監管 — 各國政府如今投資打造自己的基礎設施、資料、人才與模型。" },
        by: "Chapter 8 · Policy & Governance" },
      { text: { en: "In 2024, more than half of newly adopted national AI strategies came from emerging economies.",
                zh: "2024 年,新採行的國家 AI 戰略中超過一半來自新興經濟體。" },
        by: "Chapter 8 · Policy & Governance" },
      { text: { en: "Between 2018 and 2025, Europe and Central Asia expanded state-backed AI supercomputing clusters from 3 to 44.",
                zh: "2018 到 2025 年間,歐洲與中亞把國家支持的 AI 超算叢集從 3 個擴增到 44 個。" },
        by: "Chapter 8 · Policy & Governance" },
      { text: { en: "AI witnesses in US congressional hearings grew twentyfold, from 5 in 2017 to 102 in 2025 — and industry's share nearly tripled to 37%.",
                zh: "美國國會聽證會的 AI 證人成長二十倍,從 2017 年的 5 人增至 2025 年的 102 人 — 產業界佔比也近乎三倍增至 37%。" },
        by: "Chapter 8 · Policy & Governance" },
      { text: { en: "US public AI investment was about $20.4 billion over 2013–2024 — against $285.9 billion in US private investment in 2025 alone.",
                zh: "美國公共 AI 投資在 2013–2024 年間約 204 億美元 — 而光是 2025 年的美國私人投資就達 2,859 億美元。" },
        by: "Chapter 8 · Policy & Governance" }
    ]
  },

  /* ------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    title: { en: "Read the full Policy & Governance chapter", zh: "閱讀完整的政策與治理章節" },
    text:  { en: "Chapter 8 (sections 8.1–8.5) with every figure and citation is free from Stanford HAI. Or head back to the 15 takeaways and nine-chapter overview.",
             zh: "第 8 章(8.1–8.5 各節)連同所有圖表與引用,皆由史丹佛 HAI 免費提供。或回到 15 條重點與九大章節總覽。" },
    link:  { label: { en: "Open Chapter 8 · Policy & Governance →", zh: "前往第 8 章:政策與治理 →" },
             url: "https://hai.stanford.edu/ai-index/2026-ai-index-report/policy-and-governance" }
  }
];

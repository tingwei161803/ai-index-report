/* =========================================================================
   Public Opinion — deep dive · public-opinion.js
   Source: Stanford HAI — Artificial Intelligence Index Report 2023, Chapter 8
   https://hai.stanford.edu/ai-index/2023-ai-index-report

   A composite deep-dive page (same engine + styles as the main site). Every
   figure is drawn from Chapter 8, covering the 2022 calendar year: 8.1 Survey
   Data (IPSOS global attitudes, Lloyd’s Register Foundation and Gallup,
   Pew Research on the United States, and the narrative highlight on the NLP
   research community) and 8.2 Social Media Data (NetBase Quid).
   All strings bilingual {en, zh-TW}.
   ========================================================================= */

window.SITE_CHAPTER = "public-opinion";

window.SITE_META = {
  title:    { en: "AI Index Report 2023", zh: "AI 指數報告 2023" },
  subtitle: { en: "Public Opinion · a chapter deep dive", zh: "民意專題 · 章節詳解" }
};

window.SITE_SECTIONS = [
  /* ---------------------------------------------------------------- HERO */
  {
    type: "hero",
    id: "overview",
    nav:      { en: "Overview", zh: "總覽" },
    title:    { en: "The world does not agree about AI — and 2022 put numbers on the disagreement",
                zh: "世界對 AI 沒有共識 — 2022 年終於有了數字" },
    subtitle: { en: "Chapter 8 of the AI Index 2023 reads public opinion through four lenses: an IPSOS survey of 19,504 adults in 28 countries, a Lloyd’s Register Foundation and Gallup poll of 125,911 people in 121 countries, a Pew Research survey of 10,260 Americans, and a questionnaire answered by 480 NLP researchers. It closes with 2.74 million social media posts from 2022. The report is candid that longitudinal data on AI opinion is scarce — these are snapshots, not trend lines. The numbers:",
                zh: "AI 指數 2023 第 8 章用四種鏡頭讀民意：IPSOS 對 28 國、19,504 位成人的調查，Lloyd’s Register Foundation 與 Gallup 對 121 國、125,911 人的民調，Pew Research 對 10,260 位美國人的訪問，以及一份 480 位 NLP 研究者填答的問卷；最後再看 2022 年的 274 萬則社群貼文。報告本身也坦承，AI 民意缺乏長期追蹤資料 — 這些是快照，不是趨勢線。先看數字：" },
    stats: [
      { label: { en: "% of Chinese respondents saying AI products have more benefits than drawbacks — highest of 28 countries",
                 zh: "% 中國受訪者認為 AI 產品利大於弊 — 28 國中最高" }, value: 78 },
      { label: { en: "% of US respondents who agree — France (31%) and Canada (32%) rank lowest",
                 zh: "% 美國受訪者同意 — 最低的是法國(31%)與加拿大(32%)" }, value: 35 },
      { label: { en: "% worldwide who would feel safe in a self-driving car (65% would not)",
                 zh: "% 全球認為坐自駕車會有安全感的人(65% 認為沒有)" }, value: 27 },
      { label: { en: "% of Americans more excited than concerned about AI (37% more concerned)",
                 zh: "% 對 AI 興奮多於擔憂的美國人(擔憂多於興奮的有 37%)" }, value: 18 },
      { label: { en: "% of NLP researchers agreeing AI could soon lead to revolutionary societal change",
                 zh: "% NLP 研究者同意 AI 可能很快帶來革命性的社會變化" }, value: 73 },
      { label: { en: "% of AI social media conversation taken by ChatGPT in Q4 2022, from nothing",
                 zh: "% 2022 年第 4 季 ChatGPT 佔 AI 社群聲量的比例，從零起跳" }, value: 52 }
    ]
  },

  /* ------------------------------------------------ 8.1 GLOBAL SURVEY DATA */
  {
    type: "prose",
    id: "global-sentiment",
    nav:      { en: "8.1 Global mood", zh: "全球情緒" },
    title:    { en: "8.1 — Everyone expects AI to change their life. Half of them trust the companies doing it.",
                zh: "8.1 — 人人都預期 AI 會改變生活，只有一半的人信任做這件事的公司" },
    subtitle: { en: "IPSOS interviewed 19,504 adults aged 16 to 74 across 28 countries. Aggregated, the answers look lukewarm; split by country, they look like two different planets.",
                zh: "IPSOS 訪問了 28 國、19,504 位 16 至 74 歲的成人。加總起來，答案看起來溫吞；按國家拆開，卻像兩個星球。" },
    blocks: [
      { type: "p",
        text: { en: "Globally, 64% of respondents said they have a good understanding of what artificial intelligence is, 60% expect AI products and services to profoundly change their daily life in the next three to five years, and 60% say those products make their life easier. But only a slight majority, 52%, agree that AI products and services have more benefits than drawbacks — and 39% say they make them nervous.",
                zh: "全球來看，64% 的受訪者說自己對人工智慧是什麼有不錯的理解，60% 預期 AI 產品與服務會在未來三到五年深刻改變自己的日常生活，60% 說這些產品讓生活更輕鬆。但只有勉強過半的 52% 同意 AI 產品與服務利大於弊 — 而 39% 說它們讓自己感到緊張。" } },
      { type: "p",
        text: { en: "Two gaps inside that one survey are worth pulling out. The first is between the future and the present: 60% expect AI to profoundly change their daily life in the next three to five years, while 49% say it already has over the past three to five. The second is between claimed knowledge and actual recognition: 64% say they understand what AI is, but only 50% say they know which types of products and services actually use it. On trust the sample splits exactly down the middle — 50% say they trust companies that use AI as much as they trust other companies.",
                zh: "這份調查裡有兩道落差值得挑出來。第一道在未來與現在之間：60% 預期 AI 會在未來三到五年深刻改變日常生活，但說「過去三到五年已經被改變」的只有 49%。第二道在自認懂與實際認得之間：64% 說自己理解 AI 是什麼，卻只有 50% 說得出哪些類型的產品與服務真的用了 AI。至於信任，樣本剛好從中間對半分 — 50% 說他們信任使用 AI 的公司，程度和信任其他公司一樣。" } },
      { type: "h3",
        text: { en: "Within a country, every answer moves together", zh: "在同一個國家裡，每個答案都同進退" } },
      { type: "p",
        text: { en: "Sentiment is strongly correlated inside each country rather than by question. Chinese respondents are among the most positive on every measure: 87% say AI products make their lives easier, 76% trust companies that use AI as much as other companies, 76% know which products use AI, and only 30% report feeling nervous. American respondents are among the most negative: 41% say AI makes life easier, 35% trust AI companies, 39% know which products use AI, and 52% feel nervous. Japan is the standing oddity — only 42% see more benefits than drawbacks, yet just 20% say AI makes them nervous, the lowest anxiety of the 28 countries. India runs the opposite way: 71% see more benefits than drawbacks and 53% feel nervous, the highest anxiety in the survey.",
                zh: "情緒的相關性是「按國家」而不是「按題目」成群移動的。中國受訪者在每一項指標上都名列最正面：87% 說 AI 產品讓生活更輕鬆、76% 對使用 AI 的公司給予和其他公司同等的信任、76% 知道哪些產品用了 AI，而只有 30% 感到緊張。美國受訪者則名列最負面：41% 說 AI 讓生活更輕鬆、35% 信任 AI 公司、39% 知道哪些產品用了 AI，52% 感到緊張。日本是長年的異數 — 只有 42% 認為利大於弊，但僅 20% 說 AI 讓自己緊張，是 28 國中最低的焦慮值。印度則完全相反：71% 認為利大於弊，同時有 53% 感到緊張，是全調查最高的焦慮值。" } },
      { type: "h3",
        text: { en: "A 47-point spread between first and last", zh: "第一名與最後一名相差 47 個百分點" } },
      { type: "ul",
        items: {
          en: ["China (78%), Saudi Arabia (76%), and India (71%) lead the question of whether AI products and services have more benefits than drawbacks.",
               "France (31%), Canada (32%), the Netherlands (33%), and the United States (35%) sit at the bottom; the report singles out France and Canada as holding the most negative views of the 28 countries surveyed.",
               "Emerging economies cluster at the top — Peru 70%, Mexico 65%, Malaysia 65%, Colombia 64%, Chile 63%. Wealthy Western countries cluster at the bottom — Sweden 40%, Belgium 38%, Great Britain 38%, Australia 37%, Germany 37%.",
               "Expectation follows the same map. 80% in China and Saudi Arabia expect AI to profoundly change their daily life within three to five years, against 46% in the United States and Great Britain and 44% in Canada and Germany.",
               "So does the sense that it already happened: 73% in China say AI has profoundly changed their daily life over the past three to five years, against 36% in the United States and 30% in Japan and Sweden."],
          zh: ["在「AI 產品與服務是否利大於弊」這一題上，領先的是中國(78%)、沙烏地阿拉伯(76%)與印度(71%)。",
               "墊底的是法國(31%)、加拿大(32%)、荷蘭(33%)與美國(35%)；報告特別指出，在 28 個受訪國中，法國與加拿大的看法最負面。",
               "新興經濟體聚在頂端 — 秘魯 70%、墨西哥 65%、馬來西亞 65%、哥倫比亞 64%、智利 63%。富裕的西方國家聚在底部 — 瑞典 40%、比利時 38%、英國 38%、澳洲 37%、德國 37%。",
               "「預期」也照著同一張地圖走。中國與沙烏地阿拉伯各有 80% 預期 AI 會在三到五年內深刻改變日常生活，美國與英國是 46%，加拿大與德國是 44%。",
               "「已經發生」的感受同樣如此：中國有 73% 說 AI 在過去三到五年已深刻改變自己的日常生活，美國是 36%，日本與瑞典則是 30%。"]
        } }
    ]
  },

  /* ------------------------------------------------- OPTIMISM BY COUNTRY */
  {
    type: "bars",
    id: "optimism",
    nav:      { en: "Optimism", zh: "樂觀程度" },
    title:    { en: "‘Products and services using AI have more benefits than drawbacks’",
                zh: "「使用 AI 的產品與服務利大於弊」" },
    subtitle: { en: "% of respondents who agree, IPSOS 2022. Top three against bottom three of the 28 countries surveyed — a 47-point spread from China to France.",
                zh: "同意的受訪者比例，IPSOS 2022。28 個受訪國中的前三名對上後三名 — 從中國到法國相差 47 個百分點。" },
    series: [
      { label: { en: "China", zh: "中國" },         value: 78 },
      { label: { en: "Saudi Arabia", zh: "沙烏地" }, value: 76 },
      { label: { en: "India", zh: "印度" },          value: 71 },
      { label: { en: "United States", zh: "美國" },  value: 35 },
      { label: { en: "Canada", zh: "加拿大" },       value: 32 },
      { label: { en: "France", zh: "法國" },         value: 31 }
    ]
  },

  /* ------------------------------------------ DEMOGRAPHICS + LLOYD’S/GALLUP */
  {
    type: "prose",
    id: "who-feels",
    nav:      { en: "Who feels what", zh: "誰怎麼想" },
    title:    { en: "Men, money, and education all point the same direction",
                zh: "性別、收入與教育，全指向同一個方向" },
    subtitle: { en: "IPSOS also cut the same eight questions by demographic group, and a second global poll — Lloyd’s Register Foundation with Gallup, 125,911 people in 121 countries — asked a blunter version of the question. The patterns rhyme.",
                zh: "IPSOS 也把同樣八道題按人口族群拆開；另一份全球民調 — Lloyd’s Register Foundation 與 Gallup 對 121 國、125,911 人的訪問 — 則用更直白的方式問了同一件事。兩邊的圖形彼此押韻。" },
    blocks: [
      { type: "p",
        text: { en: "Men score higher than women on every positive statement in the IPSOS set: understanding what AI is (69% vs. 60%), knowing which products use it (55% vs. 46%), believing benefits outweigh drawbacks (55% vs. 49%), saying it makes life easier (62% vs. 58%), expecting it to change their life (63% vs. 57%), and trusting companies that use it (53% vs. 47%). There is exactly one statement where women score higher: AI products make me nervous, 41% against 38%.",
                zh: "在 IPSOS 這組題目裡，男性在每一道正面陳述上都高於女性：理解 AI 是什麼(69% 對 60%)、知道哪些產品用了 AI(55% 對 46%)、認為利大於弊(55% 對 49%)、說它讓生活更輕鬆(62% 對 58%)、預期它會改變自己的生活(63% 對 57%)，以及信任使用 AI 的公司(53% 對 47%)。只有一道題女性比較高：AI 產品讓我緊張，41% 對 38%。" } },
      { type: "p",
        text: { en: "Age splits the question in two. Respondents under 35 are the most likely to say AI products make their lives easier (64%, against 62% for 35-to-49 and 54% for 50-to-74), yet they are less likely than the 35-to-49 group to say the benefits outweigh the drawbacks (47% against 53%). Convenience and endorsement are not the same thing. Income, education, and job seniority move together and in one direction: 57% of high-income respondents see more benefits than drawbacks against 50% of low-income; 59% of the most educated against 45% of the least; and among employment groups, senior executives and decision makers top the list at 64%, business owners at 63%, the employed at 55%, and the non-employed at 47%.",
                zh: "年齡把這道題切成兩半。35 歲以下的受訪者最常說 AI 產品讓生活更輕鬆(64%，35 至 49 歲為 62%、50 至 74 歲為 54%)，但他們認為利大於弊的比例反而低於 35 至 49 歲那一群(47% 對 53%)。方便，和支持，是兩件事。收入、教育與職位則同步往一個方向移動：高收入者有 57% 認為利大於弊，低收入者是 50%；教育程度最高的一群是 59%，最低的是 45%；而在就業身分上，高階主管與決策者以 64% 居首，企業主 63%，一般受僱者 55%，未就業者 47%。" } },
      { type: "h3",
        text: { en: "A different survey, a blunter question, the same shape", zh: "換一份調查、換個更直白的問法，形狀一樣" } },
      { type: "p",
        text: { en: "In 2021 Lloyd’s Register Foundation and Gallup asked 125,911 people across 121 countries whether AI will mostly help or mostly harm people in their country over the next 20 years. 39% said mostly help against 28% who said mostly harm — and the gender gap from the IPSOS survey reappears intact: 42% of men said mostly help, against 35% of women. Regionally, Eastern Asia returns 4.4 “mostly help” answers for every “mostly harm,” Northern and Western Europe 1.8, Australia and New Zealand 1.7. Northern America and the Middle East land at exactly 1.0 — one hopeful answer for every fearful one. Eastern Africa (0.4), Southern Africa (0.6), and Northern Africa (0.7) are the most pessimistic regions in the world on this question.",
                zh: "2021 年，Lloyd’s Register Foundation 與 Gallup 詢問 121 國、125,911 人：未來 20 年 AI 對你的國家是幫助多還是傷害多。39% 說幫助多，28% 說傷害多 — 而 IPSOS 那道性別差距原封不動地再次出現：男性有 42% 說幫助多，女性 35%。以區域來看，東亞每出現 1 個「傷害多」就有 4.4 個「幫助多」，北歐與西歐是 1.8，澳洲與紐西蘭是 1.7。北美與中東剛好落在 1.0 — 一個樂觀對一個悲觀。而東非(0.4)、南非洲(0.6)與北非(0.7)，是這道題上全球最悲觀的區域。" } },
      { type: "h3",
        text: { en: "Nobody wants to get in the car", zh: "沒有人想上那台車" } },
      { type: "p",
        text: { en: "The same poll asked about self-driving cars, and the answer is one of the least ambiguous numbers in the chapter: 65% would not feel safe in a self-driving car, 27% would, and 8% did not know or refused to answer. Pew found the American version of the same instinct — only 26% of Americans think driverless passenger vehicles are a good idea for society, against 44% who call them a bad idea and 29% who are not sure. It is the only one of three specific AI use cases Pew tested where “bad idea” outpolls “good idea.”",
                zh: "同一份民調也問了自駕車，而答案是全章最不模稜兩可的數字之一：65% 說坐進自駕車不會有安全感，27% 說會，8% 不知道或拒答。Pew 在美國量到同一種直覺 — 只有 26% 的美國人認為無人駕駛的載客車輛對社會是好主意，44% 認為是壞主意，29% 不確定。在 Pew 測試的三個具體 AI 應用中，這是唯一一個「壞主意」勝過「好主意」的。" } }
    ]
  },

  /* ----------------------------------------------- HELP-VS-HARM BY REGION */
  {
    type: "bars",
    id: "help-harm",
    nav:      { en: "Help vs harm", zh: "幫助或傷害" },
    title:    { en: "“Mostly help” answers per “mostly harm” answer, by region",
                zh: "各區域「幫助多」對「傷害多」的比值" },
    subtitle: { en: "Lloyd’s Register Foundation and Gallup, 2021: will AI mostly help or mostly harm people in your country in the next 20 years? A ratio above 1.0 means hope outweighs fear. Eastern Asia is eleven times more hopeful than Eastern Africa.",
                zh: "Lloyd’s Register Foundation 與 Gallup，2021：未來 20 年 AI 對你的國家是幫助多還是傷害多？比值大於 1.0 代表希望壓過恐懼。東亞的樂觀程度是東非的 11 倍。" },
    series: [
      { label: { en: "Eastern Asia", zh: "東亞" },    value: 4.4 },
      { label: { en: "N/W Europe", zh: "北歐西歐" },  value: 1.8 },
      { label: { en: "Australia/NZ", zh: "澳紐" },    value: 1.7 },
      { label: { en: "N. America", zh: "北美" },      value: 1.0 },
      { label: { en: "N. Africa", zh: "北非" },       value: 0.7 },
      { label: { en: "Eastern Africa", zh: "東非" },  value: 0.4 }
    ]
  },

  /* --------------------------------------------------- UNITED STATES (PEW) */
  {
    type: "prose",
    id: "america",
    nav:      { en: "United States", zh: "美國民意" },
    title:    { en: "Americans are fine with AI doing chores, and not with AI making judgments",
                zh: "美國人接受 AI 做家事，不接受 AI 做判斷" },
    subtitle: { en: "Pew Research interviewed 10,260 panelists in 2022 — one of the most comprehensive surveys to date of American views on AI. The dominant answer is not enthusiasm or fear. It is ambivalence.",
                zh: "Pew Research 在 2022 年訪問了 10,260 位樣本成員 — 這是至今最完整的美國 AI 民意調查之一。最主要的答案不是熱情，也不是恐懼，而是矛盾。" },
    blocks: [
      { type: "p",
        text: { en: "45% of Americans report feeling equally concerned and excited about the increased use of AI programs in daily life. 37% are more concerned than excited. Only 18% are more excited than concerned. The largest single group in the country has not made up its mind.",
                zh: "對於 AI 程式在日常生活中被越來越多地使用，45% 的美國人說自己既擔憂又興奮，兩者各半。37% 是擔憂多於興奮。只有 18% 是興奮多於擔憂。這個國家最大的一群人，還沒有下定論。" } },
      { type: "h3",
        text: { en: "Excitement drops as the task gets more human", zh: "任務越像人做的，興奮度掉得越快" } },
      { type: "p",
        text: { en: "Asked about six specific applications, the ordering is almost perfectly mechanical-to-personal. 57% are very or somewhat excited about AI performing household chores, against 19% concerned. Repetitive workplace tasks: 46% excited, 26% concerned. Diagnosing a medical problem: 40% excited, 35% concerned. Handling customer service calls flips the sign — 27% excited against 47% concerned. And at the far end, where the task is judging people rather than doing work, the collapse is total: making important life decisions for people draws 74% concerned against 9% excited, and knowing people’s thoughts and behaviors 75% against 9%.",
                zh: "問到六個具體應用時，排序幾乎完全照著「機械的 → 私人的」這條線。對 AI 做家事，57% 感到非常或有些興奮，擔憂的有 19%。重複性的工作任務：興奮 46%、擔憂 26%。診斷醫療問題：興奮 40%、擔憂 35%。到了處理客服來電，正負號翻轉 — 興奮 27%、擔憂 47%。而在最遠的那一端，當任務從「做事」變成「評斷人」，數字整個崩塌：讓 AI 替人做重大人生決定，74% 擔憂、9% 興奮；讓 AI 掌握人的想法與行為，75% 對 9%。" } },
      { type: "h3",
        text: { en: "What people say when you ask them why", zh: "問他們為什麼時，他們會說什麼" } },
      { type: "ul",
        items: {
          en: ["Among Americans who are more concerned than excited, the leading reasons are loss of human jobs (19%), surveillance, hacking, and digital privacy (16%), and lack of human connection or human qualities (12%).",
               "Lack of oversight and regulation is named by only 2% — tied at the bottom of the list with loss of freedom and human bias coded into AI. The public worry is about consequences, not governance.",
               "Among those more excited than concerned, 31% point to AI making life and society better, 13% to saving time and increasing efficiency, 10% to it being inevitable progress, and 7% to handling mundane, tedious tasks.",
               "On specific deployments, 46% of Americans call police use of facial recognition technology a good idea for society against 27% who call it bad, and social media companies using AI to find false information draws 38% good against 31% bad."],
          zh: ["在擔憂多於興奮的美國人裡，主要理由是人類工作消失(19%)、監控、駭客與數位隱私(16%)，以及失去人際連結與人的特質(12%)。",
               "只有 2% 提到缺乏監督與監管 — 和失去自由、人類偏見被寫進 AI 並列清單最末。大眾擔心的是後果，不是治理。",
               "在興奮多於擔憂的人裡，31% 指向 AI 讓生活與社會變得更好，13% 指向省時與提升效率，10% 認為這是不可避免的進步，7% 說它能處理瑣碎而乏味的雜事。",
               "談到具體部署，46% 的美國人認為警方使用臉部辨識技術對社會是好主意，27% 認為是壞主意；社群媒體公司用 AI 找出不實資訊，則是 38% 好對 31% 壞。"]
        } },
      { type: "h3",
        text: { en: "Whose experience do Americans think AI was built around?", zh: "美國人覺得 AI 是照著誰的經驗打造的？" } },
      { type: "p",
        text: { en: "Pew also asked whose experiences and views are taken into consideration when AI systems are designed. 51% said the experiences of men are well considered, against 36% for women — a 15 percentage point gap. For white adults the figure is 48%; for Asian adults 33%, Black adults 24%, and Hispanic adults 23%. Between 37% and 43% of respondents answered “not sure” on every single row, which is a finding in itself: on the question of who AI is built for, the most common American position is that nobody outside the room can tell.",
                zh: "Pew 也問了：設計 AI 系統時，哪些人的經驗與觀點有被納入考量。51% 認為男性的經驗有被好好考量，女性則是 36% — 相差 15 個百分點。白人成年人是 48%；亞裔成年人 33%、黑人成年人 24%、西語裔成年人 23%。而每一列都有 37% 到 43% 的受訪者回答「不確定」，這本身就是一個發現：關於 AI 是為誰而建，最普遍的美國立場是「房間外面的人看不出來」。" } }
    ]
  },

  /* ------------------------------------------------ US CONCERN BY USE CASE */
  {
    type: "bars",
    id: "us-concern",
    nav:      { en: "US concerns", zh: "美國疑慮" },
    title:    { en: "% of Americans very or somewhat concerned, by AI application",
                zh: "% 對各項 AI 應用感到非常或有些擔憂的美國人" },
    subtitle: { en: "Pew Research, 2022. The line falls almost exactly where the machine starts making judgments about people instead of doing tasks for them.",
                zh: "Pew Research，2022。分界線幾乎剛好落在機器從「替人做事」轉為「評斷人」的那一刻。" },
    series: [
      { label: { en: "Read thoughts", zh: "掌握想法" },  value: 75 },
      { label: { en: "Life decisions", zh: "人生決定" }, value: 74 },
      { label: { en: "Service calls", zh: "客服來電" },  value: 47 },
      { label: { en: "Medical", zh: "醫療診斷" },        value: 35 },
      { label: { en: "Work tasks", zh: "重複工作" },     value: 26 },
      { label: { en: "Chores", zh: "家事" },             value: 19 }
    ]
  },

  /* ------------------------------------------------- NLP RESEARCH COMMUNITY */
  {
    type: "cards",
    id: "nlp-community",
    nav:      { en: "NLP researchers", zh: "NLP 學者" },
    title:    { en: "What the people building the models actually think",
                zh: "真正在做模型的人怎麼想" },
    subtitle: { en: "From May to June 2022, 480 members of the NLP research community answered a survey on the state of the field, AGI, and ethics — 68% of them had authored at least two ACL publications between 2019 and 2022. Percentages are respondents who agreed or weakly agreed.",
                zh: "2022 年 5 月至 6 月，480 位 NLP 研究社群成員填答了一份關於領域現況、AGI 與倫理的問卷 — 其中 68% 在 2019 至 2022 年間發表過至少兩篇 ACL 論文。以下百分比為「同意」或「弱同意」的受訪者比例。" },
    items: [
      { slug: "industry-influence",
        title:   { en: "Private firms have too much influence", zh: "私人企業影響力過大" },
        summary: { en: "77% agree private firms have too much influence on the field, and 86% expect industry to produce the most widely cited research. Only 41% think NLP should be regulated.",
                   zh: "77% 同意私人企業對這個領域的影響力過大，86% 預期產業界會產出被引用最多的研究。但只有 41% 認為 NLP 應該受到監管。" },
        tags: ["industry"],
        overview: { en: "The community sees industry dominance as a fact and as a problem — 77% say private firms have too much influence, and 86% expect industry, not academia, to produce the most widely cited research. What it does not do is turn that into a call for rules: only 41% agree NLP should be regulated. Diagnosis is near-consensus; the prescription is a minority position.",
                    zh: "這個社群把產業主導看成一個事實，也看成一個問題 — 77% 說私人企業影響力過大，86% 預期產出最多被引用研究的會是產業界而非學界。但他們並沒有把這個判斷轉成對規則的呼籲：只有 41% 同意 NLP 應該受監管。診斷幾近共識，處方卻只是少數意見。" } },
      { slug: "agi-and-risk",
        title:   { en: "AGI is a real conversation now", zh: "AGI 已經是正經話題" },
        summary: { en: "58% say AGI is an important concern, 57% think recent progress is moving the field toward it, and 73% believe AI could soon lead to revolutionary societal change.",
                   zh: "58% 說 AGI 是重要的議題，57% 認為近期進展正把領域推向 AGI，73% 相信 AI 可能很快帶來革命性的社會變化。" },
        tags: ["agi", "risk"],
        overview: { en: "A majority treats artificial general intelligence as a live question rather than a distraction: 58% call it an important concern and 57% say recent research progress is moving the community toward it. 73% believe AI could soon lead to revolutionary societal change. But catastrophic framing is a minority view — only 36% agree AI decisions could cause a nuclear-level catastrophe. Big change, yes; extinction-level risk, mostly not.",
                    zh: "多數人把通用人工智慧當成一個真實的問題，而不是雜訊：58% 稱之為重要議題，57% 說近期的研究進展正把社群推向那個方向。73% 相信 AI 可能很快帶來革命性的社會變化。但把它講成災難，仍是少數意見 — 只有 36% 同意 AI 的決策可能造成核彈級的災難。巨大的變化，是；滅絕級的風險，多數人並不這麼看。" } },
      { slug: "scale-skepticism",
        title:   { en: "Scale is not the answer", zh: "規模不是答案" },
        summary: { en: "88% say there is too much focus on benchmarks and 72% too much focus on scale. Just 17% agree that scaling solves practically any important problem.",
                   zh: "88% 說領域太看重基準測試，72% 說太看重規模。只有 17% 同意「把模型放大幾乎可以解決任何重要問題」。" },
        tags: ["scale"],
        overview: { en: "The strongest responses in the whole survey are about research direction, and they are all critical: 88% say there is too much focus on benchmarks, 82% want more work incorporating interdisciplinary insights, and 72% say there is too great a focus on scale. Only 17% agree that scaling solves practically any important problem. Structure keeps its defenders — 50% say linguistic structure is necessary, 51% that expert inductive biases are, and 61% expect linguistics and cognitive science to contribute to the most-cited models.",
                    zh: "整份問卷中最強烈的回應都跟研究方向有關，而且全是批評：88% 說太過聚焦於基準測試，82% 希望有更多研究納入跨領域的洞見，72% 說對規模的關注過了頭。只有 17% 同意「把模型放大幾乎可以解決任何重要問題」。結構派仍有支持者 — 50% 說語言結構是必要的，51% 說專家設計的歸納偏差是必要的，61% 預期語言學與認知科學會對最常被引用的模型做出貢獻。" } },
      { slug: "understanding-language",
        title:   { en: "Do the models understand language?", zh: "模型真的懂語言嗎？" },
        summary: { en: "51% agree language models understand language; 67% say multimodal models do. Only 36% believe text-only evaluation can measure language understanding at all.",
                   zh: "51% 同意語言模型理解語言，多模態模型則有 67%。但只有 36% 相信純文字的評測能測出語言理解。" },
        tags: ["language"],
        overview: { en: "A small majority, 51%, agrees that language models understand language — and support rises to 67% for multimodal models, suggesting the community ties understanding to grounding beyond text. The methodological corollary is sharper than the philosophical one: only 36% think text-only evaluation can measure language understanding, so most researchers doubt the tools they use to answer the question in the first place.",
                    zh: "51% 這個微弱多數同意語言模型理解語言 — 換成多模態模型，支持度升到 67%，顯示這個社群把「理解」跟「文字以外的接地」綁在一起。而方法論上的推論比哲學上的更尖銳：只有 36% 認為純文字的評測能測量語言理解，也就是說，多數研究者連自己用來回答這個問題的工具都不信任。" } },
      { slug: "ethics",
        title:   { en: "Proud of the past, split on the ethics", zh: "對過去有信心，對倫理有分歧" },
        summary: { en: "89% say NLP’s past net impact is good and 87% expect the future to be good — while 74% say ethical and scientific considerations can conflict.",
                   zh: "89% 認為 NLP 過去的淨影響是好的，87% 預期未來也會是好的 — 但 74% 說倫理與科學上的考量會互相衝突。" },
        tags: ["ethics"],
        overview: { en: "Confidence in the field’s record is near-universal: 89% say NLP’s past net impact has been good and 87% expect its future impact to stay good. Underneath that, the community is genuinely divided. 74% acknowledge that ethical and scientific considerations can conflict, 59% say it is unethical to build easily misusable systems, 60% call AI’s carbon footprint a major concern, and the field splits almost evenly on whether it is unethical to predict psychological characteristics (48%). Only 25% agree that ethical concerns mostly reduce to data quality and model accuracy.",
                    zh: "對這個領域過往成績的信心近乎一致：89% 說 NLP 過去的淨影響是好的，87% 預期未來的影響仍會是好的。但在這層信心底下，社群是真的分裂的。74% 承認倫理與科學上的考量會互相衝突，59% 說打造容易被濫用的系統是不道德的，60% 認為 AI 的碳足跡是重大隱憂，而「用 AI 預測心理特徵是否不道德」這題幾乎對半分(48%)。只有 25% 同意倫理問題大致可以化約成資料品質與模型準確度。" } },
      { slug: "dubious-science",
        title:   { en: "Two-thirds call their own field dubious science", zh: "三分之二的人說自己的領域是可疑的科學" },
        summary: { en: "67% agree most of NLP is dubious science. 30% expect an NLP winter within ten years, and 62% within thirty.",
                   zh: "67% 同意 NLP 大部分是可疑的科學。30% 預期十年內會有一次 NLP 寒冬，三十年內則有 62%。" },
        tags: ["field"],
        overview: { en: "The most uncomfortable number in the survey is internal: 67% of respondents agreed or weakly agreed that most of NLP is dubious science. Expectations of a slowdown are longer-dated than dramatic — 30% think an NLP winter is coming within ten years, rising to 62% within thirty. On the practices that support scrutiny, 63% say author anonymity in peer review is worth it.",
                    zh: "整份問卷裡最令人不安的數字是對內的：67% 的受訪者同意或弱同意「NLP 大部分是可疑的科學」。至於停滯的預期，時間拉得比戲劇性更長 — 30% 認為十年內會迎來一次 NLP 寒冬，三十年內則升到 62%。而在支撐學術檢驗的制度上，63% 認為同儕審查的作者匿名是值得的。" } }
    ]
  },

  /* ------------------------------------------------- 8.2 SOCIAL MEDIA DATA */
  {
    type: "accordion",
    id: "social-media",
    nav:      { en: "8.2 Social media", zh: "社群聲量" },
    title:    { en: "8.2 — The year the conversation was captured by one product",
                zh: "8.2 — 整年的討論被一個產品接管的那一年" },
    subtitle: { en: "The NetBase Quid team analyzed 2.74 million social media posts about AI models and releases from January to December 2022. Net sentiment runs from +100 (all positive) to -100 (all negative).",
                zh: "NetBase Quid 團隊分析了 2022 年 1 月至 12 月間、共 274 萬則關於 AI 模型與新發布的社群貼文。淨情緒分數的範圍從 +100(全部正面)到 -100(全部負面)。" },
    qa: [
      { q: { en: "Which model took over the conversation?", zh: "是哪個模型接管了討論？" },
        a: { en: "ChatGPT, from a standing start. It made up 52% of all AI-related social media conversation in Q4 2022 — over half the discussion, in the model’s first quarter of existence. The next largest Q4 shares were Stable Diffusion at 19% and Make-A-Video at 15%.",
             zh: "ChatGPT，而且是從零開始。它在 2022 年第 4 季佔了全部 AI 相關社群討論的 52% — 在這個模型存在的第一個季度，就吃下超過一半的聲量。同季次高的是 Stable Diffusion 的 19% 與 Make-A-Video 的 15%。" } },
      { q: { en: "Was the conversation about ChatGPT positive?", zh: "關於 ChatGPT 的討論是正面的嗎？" },
        a: { en: "Positive, but the weakest kind of positive. ChatGPT’s Q4 net sentiment was 32 — below AlphaTensor (96), Whisper (69), AlphaCode (70), Gato (65) and Imagen (56) in the same quarter. Early excitement gave way to a mixed reading as people mapped its limits; OpenAI’s own CEO called it “incredibly limited” and “a mistake to be relying on for anything important right now.” The recurring themes were what its launch implies for education, its underlying ethical principles, and its bias toward particular political, ethical, or cultural beliefs.",
             zh: "正面，但是最弱的那種正面。ChatGPT 第 4 季的淨情緒分數是 32 — 低於同季的 AlphaTensor(96)、AlphaCode(70)、Whisper(69)、Gato(65)與 Imagen(56)。最初的興奮很快轉為評價分歧，因為人們摸清了它的極限；連 OpenAI 自己的執行長都說它「極其有限」，而且「現在把任何重要的事情押在它身上是個錯誤」。反覆出現的主題包括：它的問世對教育代表什麼、它背後的倫理原則，以及它對特定政治、倫理或文化立場的偏向。" } },
      { q: { en: "Which model did people actually like most?", zh: "人們真正最喜歡的是哪個模型？" },
        a: { en: "AlphaCode. It posted the most consistently high sentiment of any model across 2022 — 60, 79, 71, and 70 across the four quarters — and the highest average for the year, driven by positive coverage of a concrete use case: automating programming. The single highest quarterly score belonged to AlphaTensor at 96 in Q4, its only quarter in the data.",
             zh: "AlphaCode。它在 2022 年四個季度的淨情緒分數分別是 60、79、71、70，是全年最穩定的高分，也拿下全年最高平均；帶動它的是一個具體用途受到的正面報導：把寫程式自動化。而單季最高分屬於 AlphaTensor 的第 4 季 96 分，那也是它在資料中唯一出現的一季。" } },
      { q: { en: "Did any model go negative?", zh: "有模型掉到負分嗎？" },
        a: { en: "LaMDA, and dramatically. It scored 73 in Q1, then fell to -9 in Q2 and -11 in Q3 after a former Google employee described his experiences with a system he called sentient, before recovering to 44 in Q4. Political and technology influencers pushed back hard on the “deepfake” nature of responses from systems that have no sense of truth. LaMDA also took 35% of all AI-related social conversation in Q2 — the second-largest quarterly share of the year after ChatGPT.",
             zh: "LaMDA，而且掉得很戲劇性。它第 1 季拿下 73 分，在一位前 Google 員工描述自己與一個他認為「有感知」的系統互動之後，第 2 季掉到 -9、第 3 季 -11，第 4 季才回到 44。政治與科技領域的意見領袖強力反擊，指出這類沒有真假概念的系統，其回應本質上是「深偽」。LaMDA 在第 2 季也吃下全部 AI 相關社群討論的 35%，是全年僅次於 ChatGPT 的單季聲量。" } },
      { q: { en: "What else were people arguing about?", zh: "人們還在吵什麼？" },
        a: { en: "Originality and provenance. Stable Diffusion held 19% of conversation in both Q3 and Q4 and became the focal point for arguments about whether generated work can be original and about datasets scraped without permission. GLM-130B barely registered on volume but attracted a small, very negative conversation about its license restricting use in ways that might undermine China’s national security and unity — a thread that gained significant traction.",
             zh: "原創性與來源。Stable Diffusion 在第 3、4 季各佔 19% 的聲量，成為兩場爭論的焦點：生成出來的作品算不算原創，以及未經許可抓取的資料集。GLM-130B 的聲量微不足道，卻引來一小群非常負面的討論，主題是它的授權條款限制使用者不得從事可能危害中國國家安全與統一的行為 — 這串討論當時擴散得相當廣。" } }
    ]
  },

  /* ---------------------------------------------------------------- QUOTES */
  {
    type: "quotes",
    id: "voices",
    nav:      { en: "In five lines", zh: "五句話" },
    title:    { en: "The chapter in five lines", zh: "用五句話看這一章" },
    subtitle: { en: "Headline findings from Chapter 8 · Public Opinion, covering 2022.",
                zh: "第 8 章「民意」涵蓋 2022 年的頭條發現。" },
    quotes: [
      { text: { en: "In a 2022 IPSOS survey, 78% of Chinese respondents — the highest proportion of surveyed countries — agreed that products and services using AI have more benefits than drawbacks. Only 35% of sampled Americans agreed.",
                zh: "在 2022 年的 IPSOS 調查中，78% 的中國受訪者同意使用 AI 的產品與服務利大於弊，是所有受訪國中最高的比例。而美國受訪樣本中只有 35% 同意。" },
        by: "Chapter 8 · Public Opinion" },
      { text: { en: "In a global survey, only 27% of respondents reported feeling safe in a self-driving car. Pew suggests that only 26% of Americans feel that driverless passenger vehicles are a good idea for society.",
                zh: "在一份全球調查中，只有 27% 的受訪者說坐自駕車會有安全感。Pew 的資料則顯示，只有 26% 的美國人認為無人駕駛的載客車輛對社會是好主意。" },
        by: "Chapter 8 · Public Opinion" },
      { text: { en: "77% of surveyed NLP researchers either agreed or weakly agreed that private AI firms have too much influence, 41% said that NLP should be regulated, and 73% felt that AI could soon lead to revolutionary societal change.",
                zh: "受訪的 NLP 研究者中，77% 同意或弱同意私人 AI 企業影響力過大，41% 認為 NLP 應該受到監管，73% 覺得 AI 可能很快帶來革命性的社會變化。" },
        by: "Chapter 8 · Public Opinion" },
      { text: { en: "ChatGPT dominated consumer conversation with a rapid rise, making up over half of consumer conversation by the end of 2022.",
                zh: "ChatGPT 以極快的速度攻佔消費者的討論，到 2022 年底已佔去超過一半的聲量。" },
        by: "Chapter 8 · Public Opinion" },
      { text: { en: "There is a paucity of longitudinal survey data related to AI asking the same questions of the same groups of people over extended periods of time.",
                zh: "在 AI 相關的調查中，長期針對同一群人問同一組問題的縱貫性資料相當稀少。" },
        by: "Chapter 8 · Public Opinion" }
    ]
  },

  /* ------------------------------------------------------------------- CTA */
  {
    type: "cta",
    id: "source",
    nav:   { en: "Read the chapter", zh: "讀原始章節" },
    title: { en: "Read Chapter 8 in full", zh: "閱讀第 8 章原文" },
    text:  { en: "Chapter 8 (sections 8.1–8.2) with every figure, survey methodology note, and citation is free from Stanford HAI. Or head back to the report highlights and eight-chapter overview.",
             zh: "第 8 章(8.1 至 8.2 各節)連同所有圖表、調查方法說明與引用，皆由史丹佛 HAI 免費提供。或回到報告重點與八大章節總覽。" },
    link:  { url: "https://hai.stanford.edu/ai-index/2023-ai-index-report",
             label: { en: "Open the AI Index 2023 →", zh: "開啟 AI 指數 2023 →" } }
  }
];

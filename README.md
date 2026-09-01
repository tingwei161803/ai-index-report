# AI Index Report — 多年度互動整理

> 把史丹佛 HAI《人工智慧指數報告》整理成可瀏覽、可比較、中英雙語的靜態網站。

史丹佛以人為本人工智慧研究院(Stanford HAI)每年發行的《Artificial Intelligence Index Report》
是追蹤 AI 發展最具權威性的年度資料集之一,但單一版本動輒 400 頁以上 PDF,不利於快速閱讀與跨年度比較。
本站把各版本的重點摘要與各章節 highlight 重新編排成適合螢幕閱讀的形式,並把**可跨年度直接比較的數字**
拉到同一頁上 —— 這是單獨讀任何一個版本都看不到的視角。

---

## 🔗 線上版 / Live

| | |
|---|---|
| 🌐 網站 | <https://ai-index-report.peteraim.com/> |
| 📅 2026 版(第 9 版,衡量 2025 年) | <https://ai-index-report.peteraim.com/2026/> |
| 📅 2025 版(第 8 版,衡量 2024 年) | <https://ai-index-report.peteraim.com/2025/> |
| 📅 2024 版(第 7 版,衡量 2023 年) | <https://ai-index-report.peteraim.com/2024/> |
| 📅 2023 版(第 6 版,衡量 2022 年) | <https://ai-index-report.peteraim.com/2023/> |
| 📅 2022 版(第 5 版,衡量 2021 年) | <https://ai-index-report.peteraim.com/2022/> |

> 直接點進去就能用,無需安裝。每個區段都有專屬錨點,可用 `#<section-id>` 深連結分享。

---

## ✨ 功能特色

- 📚 **多年度** — 每個版本一個資料夾,首頁列出跨年度趨勢(投資額、採用率、事故通報)
- 🌏 **中英雙版本** — English 在 root、中文在 `/zh-Hant/`,各自獨立網址,右上角一鍵互換
- 🌗 **深色 / 淺色模式** — 手動切換,選擇會被記住
- 🧭 **章節導覽** — 下拉選單直達任一章,章節頁底部有上一章 / 下一章
- 📍 **區段導覽** — 長頁面右側跟隨捲動高亮目前區段
- 🔗 **深連結** — 每個區段都有專屬 `#<id>`,可直接分享到特定段落
- 📱 **響應式設計** — 手機、平板、桌機皆適配
- ⚡ **純靜態** — 瀏覽器拿到的就是 repo 裡的檔案,沒有打包、沒有轉譯、無後端

---

## 📂 內容結構

```
ai-index-report/
├── index.html          # 年度總覽:版本入口 + 跨年度趨勢
├── assets/             # 全站共用:區段引擎 app.js、樣式 styles.css
├── data/               # 年度總覽的資料層
├── 2022/               # 2022 版(5 章)
│   ├── *.html          #   總覽 + 五個章節頁
│   └── data/           #   每章一個資料檔 + site.js(章節註冊表)
├── 2023/               # 2023 版(8 章)
│   ├── *.html          #   總覽 + 八個章節頁
│   └── data/           #   每章一個資料檔 + site.js(章節註冊表)
├── 2024/               # 2024 版(9 章)
│   ├── *.html          #   總覽 + 九個章節頁
│   └── data/           #   每章一個資料檔 + site.js(章節註冊表)
├── 2025/               # 2025 版(8 章),結構同上
├── 2026/               # 2026 版(9 章),結構同上
├── scripts/            # 產生與檢查網站的腳本(見 scripts/README.md)
├── zh-Hant/            # 中文雙生頁(自英文頁產生,勿手動編輯)
└── pdf/                # 原始報告 PDF(不進版控,見下)
```

**設計要點**:引擎與樣式全站共用一份,年度資料夾只放頁面與資料。
新增一個年度 = 多一個資料夾 + 一個 `data/site.js` 宣告該年的章節,不需要改引擎。

### 關於年份

**版本名稱與它衡量的年份相差一年** —— 2023 版報告的是 2022 年,2024 版報告的是 2023 年,
依此類推。本站所有圖表標示的都是「被衡量的年份」,而非版本名稱,避免跨來源比對時混淆。

另外,各版的章節結構並不相同:

| 版本 | 章數 | 這一版特有的結構 |
|---|---|---|
| 2022 | 5 | 經濟與教育合併成一章;沒有多元性,也沒有民意 |
| 2023 | 8 | 第 3 章叫「AI 技術倫理」,2024 版才改名為「負責任 AI」 |
| 2024 | 9 | 多元性(Diversity)獨立成章,之後的版本不再有 |
| 2025 | 8 | 科學與醫療合併為一章 |
| 2026 | 9 | 科學與醫療拆為兩章 |

**章節編號在版本之間不對齊,請認名稱不要認編號。**

### 原始 PDF

`pdf/` 資料夾採統一命名 `ai-index-report-<西元年>.pdf`,但**不進版控**
(五份合計約 113 MB,而且是公開可取得的原始文件,自行托管換不到好處)。
網站上的「下載原始報告」連結一律指向 Stanford HAI 官方頁面。

### 跨年度比較的兩個陷阱

把各版當年報的數字直接接成一條線會出錯,而且只讀單一版本時看不出來:

1. **資料集會被修訂** —— 2022 版把 2021 年的全球企業 AI 投資記為 1,765 億美元,
   2026 版把同一年改記為 3,607 億美元,兩倍有餘。所以首頁的投資圖表整條線
   都取自 **2026 版自己的回溯序列**,而不是各版當年的說法。
2. **指標會換來源** —— 事故件數在 2023 版之前用 AIAAIC 資料庫,2024 版起改用
   AI Incident Database。把兩者接起來會畫出「從 2021 年 260 件掉到 2023 年
   123 件」的假趨勢。首頁的事故圖表因此從 2023 年起算。

> ⚠️ **非官方**:本網站為個人整理之非官方資源,內容整理自 Stanford HAI 的
> Artificial Intelligence Index Report。所有數字皆取自報告本身,未經推論或外推,
> 但如有錯誤或出入,請以官方報告為準。

---

## 🛠 本機使用

```bash
# 1. clone 專案
git clone git@github.com:tingwei161803/ai-index-report.git
cd ai-index-report

# 2. 啟動本機伺服器(建議,相對路徑與深連結才正常)
uv run python -m http.server 4173
# 然後瀏覽 http://localhost:4173
```

> 瀏覽網站不需安裝任何依賴。Python 相關操作一律使用 `uv`。

### 改了內容之後要重新產生

`zh-Hant/` 的中文雙生頁、`sitemap.xml`、`og-image.png`,以及每一頁 `<main>`
裡的靜態內容,都是由 `scripts/` 底下的腳本產生的。改了 `data/**/*.js`、
`assets/app.js` 或任何英文 `.html` 之後,要照順序重跑:

```bash
uv run playwright install chromium          # 首次

uv run python scripts/build_i18n.py --dir .
uv run python scripts/fix_twin_langlink.py --dir .
uv run python scripts/build_seo.py  --dir .
uv run --with pillow python scripts/build_og.py --dir .
uv run python scripts/prerender.py  --dir .
uv run python scripts/verify.py     --dir .
```

順序不能調換,每一步的理由見 [`scripts/README.md`](scripts/README.md)。

> 這些腳本**不是**前端建置 —— 它們產生的是內容與 SEO 標記,產出物直接進版控。
> 網站本身仍然是零建置的靜態檔案。
>
> `zh-Hant/` 底下的檔案是產生物,**不要手動編輯**,下次重跑就會被覆蓋。

想確認靜態內容有沒有跟資料脫節:

```bash
uv run python scripts/prerender.py --dir . --check    # 有頁面過期就 exit 1
```

---

## 📊 流量分析

本站使用 Google Analytics 4 記錄匿名的頁面瀏覽資料,用於了解哪些章節較常被閱讀。
不蒐集個人識別資訊。

---

## 📝 聲明 / License

- 本站為非官方整理,報告內容著作權歸 **Stanford HAI** 所有,原報告以
  **CC BY-ND 4.0** 授權釋出(可原樣散布,不得改作)。
- 原始報告與底層資料請見 <https://hai.stanford.edu/ai-index>。
- 本專案的程式碼以 **MIT** 授權釋出。
- 如為權利人且希望調整或移除內容,請開 issue 聯絡。

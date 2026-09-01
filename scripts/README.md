# scripts/

產生與檢查這個網站的工具。網站本身是純靜態的 —— 瀏覽器拿到的 HTML/CSS/JS
就是 repo 裡的檔案,沒有打包、沒有轉譯、沒有後端。這裡的腳本**不是**前端建置,
它們做的是三件別的事:

1. 從英文頁產生中文雙生頁(`zh-Hant/`)
2. 補上 SEO 標記(canonical、hreflang、sitemap、OG 圖)
3. 把 `data/*.js` 的渲染結果寫回各頁的 `<main>`,讓爬蟲與沒有 JS 的讀者
   也看得到內容

改了 `data/**/*.js`、`assets/app.js` 或任何一個英文 `.html` 之後,**要照順序重跑**。

## 執行順序

順序是有理由的,不能調換:

```bash
uv run playwright install chromium          # 首次

uv run python scripts/build_i18n.py --dir .          # ① 產生 zh-Hant/ 雙生頁
uv run python scripts/fix_twin_langlink.py --dir .   # ② 修正雙生頁的語言連結
uv run python scripts/build_seo.py  --dir .          # ③ canonical / hreflang / sitemap
uv run --with pillow python scripts/build_og.py --dir .   # ④ og-image.png + og:image
uv run python scripts/prerender.py  --dir .          # ⑤ 把渲染結果寫回 <main>
uv run python scripts/verify.py     --dir .          # ⑥ 驗收
```

| 步驟 | 為什麼排在這裡 |
|---|---|
| ① `build_i18n` | 最先。後面每一步都要處理兩個語言的檔案,雙生頁必須先存在 |
| ② `fix_twin_langlink` | 緊接在 ① 之後。`build_i18n` 產出的雙生頁,語言切換連結會留著 `lang="zh-Hant"` 與雙語 `aria-label`;這一步把它改回指向英文版該有的樣子。**不跑的話,每次重新產生都會把這個無障礙修正洗掉** |
| ③ `build_seo` | 動 `<head>`:每頁 self-canonical、中英 hreflang 互指、`sitemap.xml`、`robots.txt` |
| ④ `build_og` | 主標取自中文雙生頁的 `<title>`,所以要在 ① 之後 |
| ⑤ `prerender` | 動 `<main>`。用網站自己的 renderer 跑,所以產出必然與訪客看到的一致 |
| ⑥ `verify` | 驗的是最終產物,一定在最後 |

## 各腳本

| 腳本 | 作用 |
|---|---|
| `build_i18n.py` | 讀英文頁,產生 `zh-Hant/` 底下的中文雙生頁。中文 title/description 來自英文頁 `<head>` 的 `data-zh` 屬性 |
| `fix_twin_langlink.py` | 修正雙生頁 `#langLink` / `#langAlt` 的 `lang` 與 `aria-label`(見上表) |
| `build_seo.py` | 每頁 canonical + `og:url` + hreflang 三行互指;產生 `sitemap.xml` 與 `robots.txt`。站台網址讀自 `CNAME` |
| `build_og.py` | 產生 1200×630 的 `og-image.png`,並在每頁補 `og:image` / `twitter:image` |
| `prerender.py` | 用 Playwright 跑網站自己的 renderer,把結果寫回 `<main>`。`--check` 只檢查不寫入,有頁面過期就 exit 1 |
| `verify.py` | Playwright 驗收:內容有渲染、無 console error、語言連結真的導航、hreflang 成對、JSON-LD 合法、og:image 是絕對 https、主題切換、深連結、375px 響應式、基本無障礙 |

## 常用檢查

```bash
# 靜態 HTML 有沒有跟資料脫節(CI 用,過期就 exit 1)
uv run python scripts/prerender.py --dir . --check

# 本機預覽
uv run python -m http.server 4173
```

## 注意

- Python 一律用 `uv run`,不要用 `python3` / `pip` / `venv`。
- `zh-Hant/` 底下的檔案是**產生物,不要手動編輯** —— 下一次跑 `build_i18n.py`
  就會被覆蓋。要改中文內容,改資料檔的 `zh` 欄位或英文頁的 `data-zh` 屬性。

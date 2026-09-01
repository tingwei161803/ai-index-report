/* =========================================================================
   composite · app.js  (vanilla, no build, no chart lib)

   A single long page assembled from an ordered list of typed section-blocks.
   The whole page is config-driven:

     window.SITE_META     -> { title:{en,zh}, subtitle:{en,zh} }
     window.SITE_SECTIONS -> [ { type, id, ... }, ... ]   (rendered in order)

   ARCHITECTURE
   ------------
   RENDERERS is the SECTION-TYPE REGISTRY: one function per `type` that takes
   a section config + the active lang and returns an HTML string for the inner
   body of that section. To add a new block type, add one entry to RENDERERS
   and (optionally) an icon to NAV_ICONS — nothing else needs to change.

   The page's language comes from the URL — the Chinese pages sit at the site
   root, the English ones under /en/, and each declares itself in <html lang>.
   A single render() call paints EVERY section + the sticky nav + chrome +
   <title> in that language. Hero stat counters animate (count-up) when
   scrolled into view.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- data ---------- */
  var META = window.SITE_META || { title: {}, subtitle: {} };
  var SECTIONS = Array.isArray(window.SITE_SECTIONS) ? window.SITE_SECTIONS : [];

  /* ---------- per-year configuration -------------------------------------
     This engine serves every year of the report from one shared copy, so
     nothing year-specific may be hard-coded here. Each year supplies its own
     `data/site.js` (loaded before this file) declaring SITE_YEAR / SITE_REPO /
     SITE_CHAPTERS. The fallbacks below only keep a page alive if that file is
     missing — they are not a place to record a real year's chapters.
     --------------------------------------------------------------------- */
  var YEAR     = window.SITE_YEAR || "";
  /* The year index spans every edition, so it declares no single year — the
     chrome must read correctly with YEAR empty, not leave a dangling space. */
  var YR       = YEAR ? " " + YEAR : "";
  var REPO     = window.SITE_REPO || "tingwei161803/ai-index-report";
  var CHAPTERS = Array.isArray(window.SITE_CHAPTERS) ? window.SITE_CHAPTERS : [];
  var NCH      = CHAPTERS.length;

  /* Chinese numerals read better than digits in "跳到九大章節詳解". */
  var CH_NUM_ZH = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  var nchZh = CH_NUM_ZH[NCH] || String(NCH);

  /* ---------- i18n strings (UI chrome only) ---------- */
  var I18N = {
    en: { footer: "Unofficial educational digest · Source: Stanford HAI Artificial Intelligence Index Report" + YR + " (CC BY-ND 4.0) · Built as a zero-build static site.",
          close: "Close", menu: "On this page",
          srcLink: "Open the official report at Stanford HAI", srcLinkTxt: "Stanford HAI",
          navChapters: "Chapters", navChaptersTitle: "Jump to the " + NCH + " chapter deep dives",
          navHome: "Overview", navHomeTitle: "Back to the AI Index" + YR + " overview",
          navYears: "All years", navYearsTitle: "Back to the year index",
          allChapters: "All chapters", prevCh: "Previous", nextCh: "Next",
          ghStar: "Star this project on GitHub", toTop: "Back to top",
          theme: "Toggle theme", home: "Back to peteraim.com",
          linkedin: "LinkedIn (opens in a new tab)" },
    zh: { footer: "非官方教育性整理 · 資料來源：史丹佛 HAI《人工智慧指數報告" + YR + "》(CC BY-ND 4.0)· 以零建置純靜態網站打造。",
          close: "關閉", menu: "本頁導覽",
          srcLink: "前往史丹佛 HAI 官方報告", srcLinkTxt: "Stanford HAI",
          navChapters: "章節", navChaptersTitle: "跳到" + nchZh + "大章節詳解",
          navHome: "總覽", navHomeTitle: "回到 AI 指數" + YR + " 總覽",
          navYears: "所有年度", navYearsTitle: "回到年度總覽",
          allChapters: "所有章節", prevCh: "上一章", nextCh: "下一章",
          ghStar: "到 GitHub 給這個專案一顆星", toTop: "回到頂端",
          theme: "切換深淺色主題", home: "回到 peteraim.com",
          linkedin: "LinkedIn(開新分頁)" }
  };

  /* ---------- safe localStorage (sandbox / file:// may throw) ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  /* ---------- global state ---------- */
  /* The URL decides the language: each language has its own page, and the page
     says which one it is in <html lang>. The initial language is never read
     back from storage — someone opening /en/ must get English even if they once
     picked 中文 here, and crawlers have no storage at all. */
  var PAGE_LANG = (document.documentElement.getAttribute("lang") || "en")
    .toLowerCase().indexOf("zh") === 0 ? "zh" : "en";

  /* Only a click on the toggle counts as a theme choice. Anything else —
     including the very first page load — leaves storage untouched and lets
     the system preference decide, so we never mistake our own default for
     something the reader asked for. */
  function systemTheme() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var state = {
    lang:  PAGE_LANG,
    theme: lsGet("theme") || systemTheme()
  };

  /* Chart tooltips read "label: value". A halfwidth colon wedged between a
     Chinese label and a number looks like the sentence broke — Traditional
     Chinese wants the fullwidth form, which carries its own spacing. */
  var LBLSEP = state.lang === "zh" ? "：" : ": ";
  var LISTSEP = state.lang === "zh" ? "、" : ", ";
  /* Separates a chart's headline from its data in the accessible name.
     English takes a full stop: a dash read better, but four chart titles
     already contain em dashes of their own, so the boundary between headline
     and data was no longer findable — "…in one chart — United States: 286"
     is one continuous sentence to a screen reader. A full stop produces a real
     pause, and no title ends in one. Chinese keeps the fullwidth colon, which
     carries its own spacing and must not be followed by a space. */
  var TITLESEP = state.lang === "zh" ? "：" : ". ";

  /* ---------- dom refs ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var sectionsEl = $("sections");
  var navInner   = $("sectionNavInner");
  var dialog     = $("dialog");
  var dialogBody = $("dialogBody");

  /* ---------- helpers ---------- */
  function t(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.en || obj.zh || "";
  }
  function ui(key) { return (I18N[state.lang] || I18N.en)[key]; }
  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }
  function r(n) { return Math.round(n * 100) / 100; }

  /* Diagrams that prerender.py already drew into the served HTML.
     paintSections() clears <main> and rebuilds it from the data, so by the
     time anything else runs the baked SVG is gone — which is why the first
     attempt at "skip what is already rendered" never fired, and every reader
     still fetched the library. Harvest them here, at module scope, before the
     first paint, and hand them back to the renderer.

     The markup is our own prerender output, not anything a reader supplied,
     so it is re-inserted as HTML rather than escaped. */
  var BAKED = {};
  [].forEach.call(document.querySelectorAll(".mmd[data-mermaid]"), function (el) {
    var host = el.closest(".section");
    if (host && host.id && el.querySelector("svg")) BAKED[host.id] = el.innerHTML;
  });

  /* a shared <header class="section-head"> for every section */
  function sectionHead(sec) {
    var sub = t(sec.subtitle)
      ? '<p class="section-head__sub">' + escapeHtml(t(sec.subtitle)) + "</p>"
      : "";
    /* The first section's headline IS the page's headline, so it gets the h1.
       Every page used to open at h2, leaving screen-reader users with no "jump
       to h1" landing point and the page's own subject stated only in <title>.
       Ordering below stays h2 -> h3 as before. */
    var tag = (SECTIONS.length && sec.id === SECTIONS[0].id) ? "h1" : "h2";
    return '<header class="section-head">' +
      "<" + tag + ' id="' + escapeHtml(sec.id) + '-heading">' +
        escapeHtml(t(sec.title)) +
      "</" + tag + ">" +
      sub + "</header>";
  }

  /* =======================================================================
     SECTION-TYPE REGISTRY
     Each renderer returns the INNER html for a <section>; the wrapper +
     section-head are added by paintSections(). Add new types here.
     ===================================================================== */
  var RENDERERS = {

    /* ---- hero: lead-in + animated stat counters ---- */
    hero: function (sec) {
      var stats = (sec.stats || []).map(function (s) {
        return '<div class="hero__stat" data-item>' +
          '<b class="hero__stat-value" data-count="' + escapeHtml(String(s.value)) + '">0</b>' +
          '<span class="hero__stat-label">' + escapeHtml(t(s.label)) + "</span>" +
        "</div>";
      }).join("");
      return sectionHead(sec) +
        (stats ? '<div class="hero__stats">' + stats + "</div>" : "");
    },

    /* ---- cards: responsive grid; click a card -> detail dialog ---- */
    /* ---- navcards: cards that ARE links ------------------------------
       `cards` opens a dialog on click — right for encyclopedia-style entries
       whose detail has nowhere else to live, wrong for navigation. A card
       that says "Open the 2026 edition" must BE the link, not describe one.
       ---------------------------------------------------------------- */
    navcards: function (sec) {
      var cards = (sec.items || []).map(function (item) {
        var tags = (item.tags || []).map(function (tg) {
          return '<span class="tag">' + escapeHtml(tg) + "</span>";
        }).join("");
        return '<a class="navcard" data-item href="' + escapeHtml(item.href) + '">' +
          '<h3 class="navcard__title">' + escapeHtml(t(item.title)) + "</h3>" +
          '<p class="navcard__summary">' + escapeHtml(t(item.summary)) + "</p>" +
          (tags ? '<div class="navcard__tags">' + tags + "</div>" : "") +
          '<span class="navcard__cta">' + escapeHtml(t(item.cta)) +
            '<span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>' +
          "</span>" +
        "</a>";
      }).join("");
      return sectionHead(sec) + '<div class="grid">' + cards + "</div>";
    },

    cards: function (sec) {
      var cards = (sec.items || []).map(function (item) {
        var tags = (item.tags || []).map(function (tg) {
          return '<span class="tag">' + escapeHtml(tg) + "</span>";
        }).join("");
        return '<article class="card" tabindex="0" role="button" data-item ' +
            'data-slug="' + escapeHtml(item.slug) + '" ' +
            'aria-label="' + escapeHtml(t(item.title)) + '">' +
          '<h3 class="card__title">' + escapeHtml(t(item.title)) + "</h3>" +
          '<p class="card__summary">' + escapeHtml(t(item.summary)) + "</p>" +
          (tags ? '<div class="card__tags">' + tags + "</div>" : "") +
        "</article>";
      }).join("");
      return sectionHead(sec) + '<div class="grid">' + cards + "</div>";
    },

    /* ---- timeline: dated event cards down a rail ---- */
    timeline: function (sec) {
      var items = (sec.events || []).map(function (ev) {
        return '<li class="tl-item" data-item>' +
          '<div class="tl-dot" aria-hidden="true"></div>' +
          '<div class="tl-card">' +
            '<span class="tl-date">' + escapeHtml(t(ev.date)) + "</span>" +
            '<h3 class="tl-title">' + escapeHtml(t(ev.title)) + "</h3>" +
            '<p class="tl-body">' + escapeHtml(t(ev.body)) + "</p>" +
          "</div>" +
        "</li>";
      }).join("");
      return sectionHead(sec) + '<ol class="timeline">' + items + "</ol>";
    },

    /* ---- bars: inline-SVG bar chart (no chart library) ---- */
    bars: function (sec) {
      var series = sec.series || [];
      var W = 520, H = 260, padL = 16, padR = 16, padT = 16, padB = 46;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var max = Math.max.apply(null, series.map(function (d) { return d.value; }).concat([1]));
      var n = series.length || 1, gap = 16;
      var bw = (plotW - gap * (n - 1)) / n;
      var baseY = padT + plotH;
      var title = escapeHtml(t(sec.title));

      var bars = series.map(function (d, i) {
        var x = padL + i * (bw + gap);
        var h = (d.value / max) * plotH;
        var y = baseY - h;
        var label = escapeHtml(t(d.label));
        var val = escapeHtml(String(d.value));
        return (
          '<rect class="bar-rect" x="' + r(x) + '" y="' + r(y) + '" width="' + r(bw) +
            '" height="' + r(h) + '" rx="5"><title>' + label + LBLSEP + val + "</title></rect>" +
          '<text class="bar-value" x="' + r(x + bw / 2) + '" y="' + r(y - 6) +
            '" text-anchor="middle">' + val + "</text>" +
          '<text class="bar-label" x="' + r(x + bw / 2) + '" y="' + r(baseY + 20) +
            '" text-anchor="middle">' + label + "</text>"
        );
      }).join("");

      /* role="img" hides everything inside the SVG from assistive tech, so the
         values printed on the bars are invisible to a screen reader — the
         accessible name is the whole chart. Spell the series out in it, or the
         only thing announced is the headline and none of the data. */
      var a11y = escapeHtml(
        t(sec.title) +
        (series.length
          ? TITLESEP + series.map(function (d) {
              return t(d.label) + LBLSEP + d.value;
            }).join(LISTSEP)
          : "")
      );

      var svg =
        '<svg viewBox="0 0 ' + W + " " + H + '" role="img" ' +
          'preserveAspectRatio="xMidYMid meet" aria-label="' + a11y + '">' +
          "<title>" + title + "</title>" +
          '<line class="axis-line" x1="' + padL + '" y1="' + r(baseY) +
            '" x2="' + r(W - padR) + '" y2="' + r(baseY) + '" />' +
          bars +
        "</svg>";
      return sectionHead(sec) +
        '<figure class="chart-card" data-item><div class="chart-wrap">' + svg + "</div></figure>";
    },

    /* ---- accordion: native <details> Q&A ---- */
    accordion: function (sec) {
      var items = (sec.qa || []).map(function (row) {
        return '<details class="acc-item" data-item>' +
          '<summary class="acc-q">' +
            "<span>" + escapeHtml(t(row.q)) + "</span>" +
            '<span class="material-symbols-rounded acc-chevron" aria-hidden="true">add</span>' +
          "</summary>" +
          '<div class="acc-a">' + escapeHtml(t(row.a)) +
            (row.link && row.link.url
              ? '<a class="acc-link" href="' + escapeHtml(row.link.url) + '">' +
                  escapeHtml(t(row.link.label)) +
                  '<span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span></a>'
              : "") +
          "</div>" +
        "</details>";
      }).join("");
      return sectionHead(sec) + '<div class="accordion">' + items + "</div>";
    },

    /* ---- quotes: pull-quote cards ---- */
    quotes: function (sec) {
      var items = (sec.quotes || []).map(function (q) {
        var by = q.by ? '<figcaption class="quote-by">— ' + escapeHtml(q.by) + "</figcaption>" : "";
        return '<figure class="quote-card" data-item>' +
          '<span class="material-symbols-rounded quote-mark" aria-hidden="true">format_quote</span>' +
          "<blockquote>" + escapeHtml(t(q.text)) + "</blockquote>" +
          by +
        "</figure>";
      }).join("");
      return sectionHead(sec) + '<div class="quotes-grid">' + items + "</div>";
    },

    /* ---- prose: ordered rich-text blocks (p / h3 / ul) ---- */
    prose: function (sec) {
      var body = (sec.blocks || []).map(function (b) {
        if (b.type === "h3") return "<h3>" + escapeHtml(t(b.text)) + "</h3>";
        if (b.type === "ul") {
          var arr = (b.items && (b.items[state.lang] || b.items.en || b.items.zh)) || [];
          return "<ul>" + arr.map(function (li) {
            return "<li>" + escapeHtml(li) + "</li>";
          }).join("") + "</ul>";
        }
        return "<p>" + escapeHtml(t(b.text)) + "</p>";
      }).join("");
      return sectionHead(sec) + '<div class="prose" data-item>' + body + "</div>";
    },

    /* ---- cta: closing call-to-action ---- */
    cta: function (sec) {
      var link = "";
      if (sec.link && sec.link.url) {
        link = '<a class="cta-btn" href="' + escapeHtml(sec.link.url) + '" ' +
          'target="_blank" rel="noopener">' +
          escapeHtml(t(sec.link.label)) +
          '<span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span></a>';
      }
      return '<div class="cta-card" data-item>' +
        "<h2>" + escapeHtml(t(sec.title)) + "</h2>" +
        (t(sec.text) ? "<p>" + escapeHtml(t(sec.text)) + "</p>" : "") +
        link +
      "</div>";
    },

    /* ---- table: a comparison matrix -------------------------------------
       Five editions side by side is a table's job, not a chart's: the cells
       are a mix of numbers, names and gaps, and the gaps ("this edition had
       no such chapter") carry as much meaning as the values. A chart cannot
       show an absence. ------------------------------------------------- */
    table: function (sec) {
      var cols = sec.columns || [];
      var head = "<tr><th scope=\"col\">" + escapeHtml(t(sec.corner)) + "</th>" +
        cols.map(function (c) {
          return '<th scope="col"' + (c.num ? ' class="is-num"' : "") + ">" +
            escapeHtml(t(c.label)) + "</th>";
        }).join("") + "</tr>";

      var body = (sec.rows || []).map(function (row) {
        return "<tr>" +
          '<th scope="row">' + escapeHtml(t(row.head)) + "</th>" +
          (row.cells || []).map(function (cell, i) {
            var cls = [];
            if (cols[i] && cols[i].num) cls.push("is-num");
            if (cell.tone) cls.push("is-" + cell.tone);
            /* A cell showing "—" announces as nothing at all. Where the dash
               means something, the meaning goes in text only AT can reach and
               the dash itself is hidden from it. */
            var inner = t(cell.sr)
              ? '<span aria-hidden="true">' + escapeHtml(t(cell.text)) + "</span>" +
                '<span class="sr-only">' + escapeHtml(t(cell.sr)) + "</span>"
              : escapeHtml(t(cell.text));
            return "<td" + (cls.length ? ' class="' + cls.join(" ") + '"' : "") +
              ">" + inner + "</td>";
          }).join("") +
        "</tr>";
      }).join("");

      return sectionHead(sec) +
        '<figure class="table-card" data-item>' +
          '<div class="table-wrap" data-scroller aria-labelledby="' +
            escapeHtml(sec.id) + '-heading">' +
            '<table class="ctable"><thead>' + head + "</thead><tbody>" + body + "</tbody></table>" +
          "</div>" +
          (t(sec.foot) ? '<figcaption class="table-note">' + escapeHtml(t(sec.foot)) + "</figcaption>" : "") +
        "</figure>";
    },

    /* ---- lines: multi-series line chart ---------------------------------
       `bars` holds one series. Comparing how two or three measures moved
       across the same five years needs them on one pair of axes, or the
       reader is left doing the alignment by memory. --------------------- */
    lines: function (sec) {
      var xs = sec.x || [];
      var series = (sec.series || []).slice(0, 4);
      var W = 680, H = 320, padL = 46, padR = 66, padT = 18, padB = 42;
      var plotW = W - padL - padR, plotH = H - padT - padB;

      var all = [];
      series.forEach(function (d) {
        (d.values || []).forEach(function (v) { if (typeof v === "number") all.push(v); });
      });
      var rawMax = Math.max.apply(null, all.concat([1]));
      /* Round the axis up to something a reader can divide by four in their
         head; a top gridline of 581.69 is a number, not a scale. */
      var mag = Math.pow(10, Math.floor(Math.log(rawMax) / Math.LN10));
      var yMax = Math.ceil(rawMax / (mag / 2)) * (mag / 2);
      if (!isFinite(yMax) || yMax <= 0) yMax = 1;

      var xAt = function (i) {
        return xs.length < 2 ? padL + plotW / 2 : padL + (plotW * i) / (xs.length - 1);
      };
      var yAt = function (v) { return padT + plotH - (v / yMax) * plotH; };

      var grid = "", GRID = 4, gi;
      for (gi = 0; gi <= GRID; gi++) {
        var gv = (yMax * gi) / GRID, gy = yAt(gv);
        grid += '<line class="ln-grid" x1="' + padL + '" y1="' + r(gy) +
                '" x2="' + r(padL + plotW) + '" y2="' + r(gy) + '" />' +
                '<text class="ln-axis" x="' + (padL - 8) + '" y="' + r(gy + 4) +
                '" text-anchor="end">' + escapeHtml(fmtNum(gv)) + "</text>";
      }
      xs.forEach(function (lab, i) {
        grid += '<text class="ln-axis" x="' + r(xAt(i)) + '" y="' + (padT + plotH + 22) +
                '" text-anchor="middle">' + escapeHtml(t(lab)) + "</text>";
      });

      var paths = series.map(function (d, si) {
        var cls = "ln-s" + (si + 1);
        var pts = [], dots = "", lastX = 0, lastY = 0, lastV = null;
        (d.values || []).forEach(function (v, i) {
          if (typeof v !== "number") return;
          var x = xAt(i), y = yAt(v);
          pts.push(r(x) + "," + r(y));
          dots += '<circle class="ln-dot ' + cls + '" cx="' + r(x) + '" cy="' + r(y) +
                  '" r="3.5"><title>' + escapeHtml(t(d.label) + LBLSEP + t(xs[i]) + " " + v) +
                  "</title></circle>";
          lastX = x; lastY = y; lastV = v;
        });
        var end = lastV == null ? "" :
          '<text class="ln-end ' + cls + '" x="' + r(lastX + 9) + '" y="' + r(lastY + 4) +
          '">' + escapeHtml(fmtNum(lastV)) + "</text>";
        return '<polyline class="ln-path ' + cls + '" points="' + pts.join(" ") + '"' +
               (d.dash ? ' stroke-dasharray="' + escapeHtml(d.dash) + '"' : "") + " />" +
               dots + end;
      }).join("");

      /* role="img" seals the SVG off from assistive tech, so every number a
         sighted reader can see has to be spelled out here or it is gone. */
      var a11y = escapeHtml(
        t(sec.title) + TITLESEP +
        (t(sec.unit) ? t(sec.unit) + TITLESEP : "") +
        series.map(function (d) {
          return t(d.label) + LBLSEP + (d.values || []).map(function (v, i) {
            return t(xs[i]) + " " + (typeof v === "number" ? v : "-");
          }).join(LISTSEP);
        }).join(state.lang === "zh" ? "；" : "; ")
      );

      var legend = '<ul class="ln-legend">' + series.map(function (d, si) {
        var cls = "ln-s" + (si + 1);
        return "<li><svg width=\"26\" height=\"10\" aria-hidden=\"true\">" +
          '<line class="ln-path ' + cls + '" x1="1" y1="5" x2="25" y2="5"' +
          (d.dash ? ' stroke-dasharray="' + escapeHtml(d.dash) + '"' : "") + " /></svg>" +
          "<span>" + escapeHtml(t(d.label)) + "</span></li>";
      }).join("") + "</ul>";

      return sectionHead(sec) +
        '<figure class="chart-card" data-item><div class="chart-wrap chart-wrap--wide">' +
          '<svg viewBox="0 0 ' + W + " " + H + '" role="img" ' +
            'preserveAspectRatio="xMidYMid meet" aria-label="' + a11y + '">' +
            "<title>" + escapeHtml(t(sec.title)) + "</title>" +
            grid + paths +
          "</svg></div>" + legend +
          (t(sec.foot) ? '<figcaption class="table-note">' + escapeHtml(t(sec.foot)) + "</figcaption>" : "") +
        "</figure>";
    },

    /* ---- mermaid: a diagram whose source is text ------------------------
       Used for the one thing no table or chart says well: how the chapters
       themselves split, merged and were renamed from edition to edition.

       The prose equivalent is in the DOM from the start and is what ships in
       the prerendered HTML. The library is fetched only when the diagram is
       about to come into view, so a reader who never scrolls this far pays
       nothing for it. ------------------------------------------------- */
    mermaid: function (sec) {
      var h = Number(sec.height) > 0 ? Number(sec.height) : 320;
      return sectionHead(sec) +
        '<figure class="mmd-card" data-item>' +
          '<div class="mmd" role="img" aria-label="' + escapeHtml(t(sec.alt)) + '"' +
            ' style="min-height:' + h + 'px"' +
            ' data-mermaid="' + escapeHtml(t(sec.code)) + '">' +
            (BAKED[sec.id] ||
              '<p class="mmd__alt">' + escapeHtml(t(sec.alt)) + "</p>") +
          "</div>" +
          (t(sec.foot) ? '<figcaption class="table-note">' + escapeHtml(t(sec.foot)) + "</figcaption>" : "") +
        "</figure>";
    },

    /* ---- compare: one chart, two datasets the reader switches ------------
       Both views share one y-scale on purpose. Rescaling per view would hide
       the very thing the block exists to show — that the restated figures are
       bigger — by making every view look the same height. ---------------- */
    compare: function (sec) {
      var views = sec.views || [];
      if (!views.length) return sectionHead(sec);
      var cats = (views[0].series || []).map(function (d) { return d.label; });
      var W = 560, H = 250, padL = 16, padR = 16, padT = 22, padB = 46;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var n = cats.length || 1, gap = 18;
      var bw = (plotW - gap * (n - 1)) / n;
      var baseY = padT + plotH;

      var max = 1;
      views.forEach(function (v) {
        (v.series || []).forEach(function (d) { if (d.value > max) max = d.value; });
      });

      var bars = cats.map(function (lab, i) {
        var x = padL + i * (bw + gap);
        var v = views[0].series[i].value;
        return '<rect class="cmp-bar bar-rect" data-i="' + i + '" x="' + r(x) + '" y="' + padT +
                 '" width="' + r(bw) + '" height="' + r(plotH) + '" rx="5" ' +
                 'style="transform:scaleY(' + r(v / max) + ')"></rect>' +
               '<text class="bar-label" x="' + r(x + bw / 2) + '" y="' + (baseY + 19) +
                 '" text-anchor="middle">' + escapeHtml(t(lab)) + "</text>" +
               '<text class="bar-value cmp-val" data-i="' + i + '" x="' + r(x + bw / 2) +
                 '" y="' + (baseY + 37) + '" text-anchor="middle">' +
                 escapeHtml(fmtNum(v)) + "</text>";
      }).join("");

      var buttons = views.map(function (v, i) {
        return '<button type="button" class="cmp-btn" data-view="' + i + '" ' +
          'aria-pressed="' + (i === 0 ? "true" : "false") + '">' +
          escapeHtml(t(v.label)) + "</button>";
      }).join("");

      return sectionHead(sec) +
        '<figure class="chart-card" data-item data-compare>' +
          '<div class="cmp-switch" role="group" aria-label="' +
            escapeHtml(t(sec.switchLabel) || t(sec.title)) + '">' + buttons + "</div>" +
          '<div class="chart-wrap">' +
            '<svg viewBox="0 0 ' + W + " " + H + '" role="img" ' +
              'preserveAspectRatio="xMidYMid meet" aria-label="' +
              escapeHtml(compareA11y(sec, 0)) + '">' +
              "<title>" + escapeHtml(t(sec.title)) + "</title>" +
              '<line class="axis-line" x1="' + padL + '" y1="' + r(baseY) +
                '" x2="' + r(W - padR) + '" y2="' + r(baseY) + '" />' +
              bars +
            "</svg>" +
          "</div>" +
          '<p class="cmp-note">' + escapeHtml(t(views[0].note)) + "</p>" +
          '<p class="sr-only" aria-live="polite"></p>' +
        "</figure>";
    }
  };

  /* Thousands separators for axis and end labels; the raw numbers run to five
     digits and read as noise without them. */
  function fmtNum(v) {
    var parts = String(Math.round(v * 100) / 100).split(".");
    /* Group the integer part only. Running the usual thousands regex over the
       whole string puts a comma inside the decimals — 581.69 came out 5,81.69. */
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  /* The accessible name for one view of a `compare` chart. */
  function compareA11y(sec, idx) {
    var v = (sec.views || [])[idx];
    if (!v) return t(sec.title);
    return t(sec.title) + TITLESEP + t(v.label) + LBLSEP +
      (v.series || []).map(function (d) {
        return t(d.label) + LBLSEP + d.value;
      }).join(LISTSEP);
  }

  /* icon shown in the section nav pill, keyed by type */
  var NAV_ICONS = {
    hero: "auto_awesome", cards: "grid_view", navcards: "library_books", timeline: "timeline",
    bars: "bar_chart", accordion: "quiz", quotes: "format_quote",
    prose: "article", cta: "campaign",
    table: "table_chart", lines: "show_chart", mermaid: "account_tree",
    compare: "compare_arrows"
  };

  /* =======================================================================
     RENDER: paint nav + every section in the active language
     ===================================================================== */
  function paintSections() {
    sectionsEl.innerHTML = "";
    SECTIONS.forEach(function (sec) {
      var fn = RENDERERS[sec.type];
      if (!fn) return;                       // unknown type: skip gracefully
      var el = document.createElement("section");
      el.className = "section section--" + sec.type;
      el.id = sec.id;
      if (sec.type !== "cta") el.setAttribute("aria-labelledby", sec.id + "-heading");
      el.innerHTML = fn(sec, state.lang);
      sectionsEl.appendChild(el);
    });
    wireCards();
  }

  /* =======================================================================
     CROSS-YEAR BLOCK WIRING
     Each of these runs after paintSections(), because all three operate on
     nodes the renderers just created.
     ===================================================================== */

  /* A horizontally scrolling box has to be keyboard-reachable, or its
     right-hand columns belong to mouse users only. But a tabindex on a box
     that fits is a stop that focuses nothing and says nothing — the dead Tab
     stop problem. So the attribute is added from a measurement, not from
     markup, and re-measured whenever the width changes. */
  function setupScrollers() {
    var boxes = [].slice.call(document.querySelectorAll("[data-scroller]"));
    if (!boxes.length) return;

    function sync() {
      boxes.forEach(function (box) {
        var overflows = box.scrollWidth - box.clientWidth > 1;
        if (overflows) {
          box.setAttribute("tabindex", "0");
          box.setAttribute("role", "region");
        } else {
          box.removeAttribute("tabindex");
          box.removeAttribute("role");
        }
      });
    }
    sync();
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(sync);
      boxes.forEach(function (b) { ro.observe(b); });
    } else {
      window.addEventListener("resize", sync, { passive: true });
    }
    /* Table columns are sized by their text, so the fonts arriving can turn a
       box that fitted into one that scrolls. Nothing fires for that. */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(sync).catch(function () { /* ignore */ });
    }
  }

  /* The `compare` block: switch which dataset the bars show. */
  function setupCompare() {
    [].forEach.call(document.querySelectorAll("[data-compare]"), function (fig) {
      var secId = fig.closest(".section") && fig.closest(".section").id;
      var sec = null;
      for (var i = 0; i < SECTIONS.length; i++) {
        if (SECTIONS[i].id === secId) { sec = SECTIONS[i]; break; }
      }
      if (!sec || !sec.views) return;

      var max = 1;
      sec.views.forEach(function (v) {
        (v.series || []).forEach(function (d) { if (d.value > max) max = d.value; });
      });
      var svg   = fig.querySelector("svg");
      var note  = fig.querySelector(".cmp-note");
      var live  = fig.querySelector("[aria-live]");
      var bars  = [].slice.call(fig.querySelectorAll(".cmp-bar"));
      var vals  = [].slice.call(fig.querySelectorAll(".cmp-val"));
      var btns  = [].slice.call(fig.querySelectorAll(".cmp-btn"));

      function show(idx) {
        var view = sec.views[idx];
        if (!view) return;
        bars.forEach(function (b, i) {
          var d = view.series[i];
          if (d) b.style.transform = "scaleY(" + (Math.round((d.value / max) * 100) / 100) + ")";
        });
        vals.forEach(function (el, i) {
          var d = view.series[i];
          if (d) el.textContent = fmtNum(d.value);
        });
        if (note) note.textContent = t(view.note);
        if (svg) svg.setAttribute("aria-label", compareA11y(sec, idx));
        btns.forEach(function (b, i) {
          b.setAttribute("aria-pressed", i === idx ? "true" : "false");
        });
        /* Changing an aria-label on an element that already has focus
           elsewhere announces nothing. A short live region is the only way the
           switch is audible — scoped to one line, not the whole figure. */
        if (live) live.textContent = t(view.label) + LBLSEP + t(view.note);
      }

      btns.forEach(function (b, i) {
        b.addEventListener("click", function () { show(i); });
      });
    });
  }

  /* The `mermaid` block. The library is ~300KB over the wire, so it is fetched
     only when a diagram is about to be seen, and only once per page. Until
     then — and forever, for a reader with JS off or the CDN blocked — the
     prose equivalent already in the box is the content. */
  var mermaidState = { loading: false, ready: false, nodes: [] };

  function renderMermaid(el) {
    if (!window.mermaid || !el.dataset.mermaid) return;
    /* Derived from the section id, never random. mermaid scopes the <style>
       block it injects by this id, so a random one meant prerender.py wrote a
       different file on every run — the whole page showed as modified with no
       change in it, and `prerender.py --check` could never report a clean
       tree. */
    var host = el.closest(".section");
    var id = "mmd-" + ((host && host.id) || "diagram");
    try {
      var out = window.mermaid.render(id, el.dataset.mermaid);
      /* mermaid 10+ returns a promise; 9 returned the svg string directly. */
      if (out && typeof out.then === "function") {
        out.then(function (res) { el.innerHTML = res.svg; })
           .catch(function () { /* keep the prose fallback */ });
      } else if (typeof out === "string") {
        el.innerHTML = out;
      }
    } catch (e) { /* keep the prose fallback */ }
  }

  function initMermaid() {
    if (!window.mermaid) return;
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "neutral",
      fontFamily: "Manrope, system-ui, sans-serif"
    });
    mermaidState.ready = true;
    mermaidState.nodes.forEach(renderMermaid);
  }

  function setupMermaid() {
    /* Anything that already holds an <svg> was drawn by prerender.py and baked
       into the HTML, so there is nothing to do: not for this reader, not on a
       theme change (the CSS below styles mermaid's output from the site's own
       tokens), and the library never has to be fetched at all. What is left
       here is the fallback for a page that was not prerendered. */
    mermaidState.nodes = [].slice.call(
      document.querySelectorAll(".mmd[data-mermaid]")
    ).filter(function (el) { return !el.querySelector("svg"); });
    if (!mermaidState.nodes.length) return;
    if (mermaidState.ready) { mermaidState.nodes.forEach(renderMermaid); return; }
    if (mermaidState.loading) return;

    function load() {
      if (mermaidState.loading) return;
      mermaidState.loading = true;
      var sc = document.createElement("script");
      sc.src = "https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.min.js";
      sc.async = true;
      sc.onload = initMermaid;
      sc.onerror = function () { mermaidState.loading = false; };
      document.head.appendChild(sc);
    }

    if (!window.IntersectionObserver) { load(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { io.disconnect(); load(); }
      });
    }, { rootMargin: "300px 0px" });
    mermaidState.nodes.forEach(function (n) { io.observe(n); });
  }

  function paintNav() {
    navInner.innerHTML = "";
    SECTIONS.forEach(function (sec) {
      var a = document.createElement("a");
      a.className = "navpill";
      a.href = "#" + sec.id;
      a.dataset.target = sec.id;
      /* `nav` is a short, scannable label; `title` is an editorial headline that
         runs to 80 characters and would make a pill wider than a phone screen.
         Falling back to the headline keeps a label-less section navigable —
         .navpill__txt caps and ellipsises whatever ends up here. */
      a.innerHTML =
        '<span class="material-symbols-rounded" aria-hidden="true">' +
          (NAV_ICONS[sec.type] || "label") + "</span>" +
        '<span class="navpill__txt">' + escapeHtml(t(sec.nav) || t(sec.title)) + "</span>";
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var target = document.getElementById(sec.id);
        /* CSS `scroll-behavior: auto` under reduced motion cannot override a
           behavior passed in JS — the argument wins. Ask explicitly. */
        if (target) target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start"
        });
        history.replaceState(null, "", "#" + sec.id);
      });
      navInner.appendChild(a);
    });
  }

  function paintChrome() {
    var titleStr = t(META.title);
    /* document.title is deliberately NOT set here. It used to be, back when a
       runtime toggle switched languages and the tab had to follow. Now each
       language has its own URL and build_i18n.py writes the Chinese title into
       the static <head> from data-zh, so the markup is already correct and
       per-page tuned. Rebuilding it from SITE_META here only overwrote that
       with a longer, less specific string. */
    var brand = $("brandName");
    if (brand) brand.textContent = titleStr;
    var foot = $("footerText");
    if (foot) foot.textContent = ui("footer");
    var nav = $("sectionNav");
    if (nav) nav.setAttribute("aria-label", ui("menu"));
    /* #dialogClose is handled by the generic [data-i18n] pass below now, so it
       is not set here as well — two places writing the same attribute is how
       they end up disagreeing. */
    // generic [data-i18n] chrome (source link text + title, etc.)
    [].slice.call(document.querySelectorAll("[data-i18n]")).forEach(function (el) {
      var val = (I18N[state.lang] || I18N.en)[el.dataset.i18n];
      if (val == null) return;
      /* Comma-separated so one string can serve both the accessible name and
         the tooltip — a control whose aria-label is translated but whose title
         is not just moves the problem from one group of users to another. */
      var attr = el.dataset.i18nAttr;
      if (attr) {
        attr.split(",").forEach(function (a) { el.setAttribute(a.trim(), val); });
      } else {
        el.textContent = val;
      }
    });
  }

  /* full-page paint in the page's language */
  function render() {
    paintChrome();
    renderYearsLink();
    renderChaptersMenu();
    paintNav();
    setupNavScroll();
    setupReadingAids();
    paintSections();
    setupScrollers();
    setupCompare();
    setupMermaid();
    renderChapterNav();
    setupScrollSpy();
    animateCounters();
    revealOnScroll();
  }

  /* =======================================================================
     CHAPTERS DROPDOWN — a global navigator in the appbar (all pages).
     Replaces the static "Chapters/Overview" nav-link with a menu of the
     overview + 9 chapter pages, current one highlighted. Labels follow the
     page's language.
     ===================================================================== */
  function closeChMenu() {
    var m = $("chMenu");
    if (!m) return;
    var wasOpen = m.classList.contains("ch-menu--open");
    m.classList.remove("ch-menu--open");
    var btn = $("chMenuBtn");
    if (btn) btn.setAttribute("aria-expanded", "false");
    /* The panel becomes display:none, so a focused link inside it would leave
       focus on <body> — nothing announced, no focus ring, and the next Tab
       starting from wherever the browser happens to resume. Hand focus back to
       the control that opened it. Only when focus was actually inside, so a
       click elsewhere on the page does not get yanked back here. */
    if (wasOpen && btn && m.contains(document.activeElement)) btn.focus();
  }

  /* Going up a level is a different move from moving sideways between
     chapters, so it gets its own control instead of hiding inside the
     chapter dropdown — nobody opens a menu called "Chapters" looking for
     the way out of the year they are in. */
  function renderYearsLink() {
    if (!CHAPTERS.length) return;            // the year index itself needs no link home
    var actions = document.querySelector(".appbar__actions");
    if (!actions) return;
    var old = $("navYears");
    if (old && old.parentNode) old.parentNode.removeChild(old);

    var a = document.createElement("a");
    a.className = "nav-link nav-link--years";
    a.id = "navYears";
    a.href = "../index.html";
    a.title = ui("navYearsTitle");
    a.innerHTML =
      '<span class="material-symbols-rounded" aria-hidden="true">calendar_month</span>' +
      '<span class="nav-link__txt">' + escapeHtml(ui("navYears")) + "</span>";
    actions.insertBefore(a, actions.firstChild);
  }

  function renderChaptersMenu() {
    var actions = document.querySelector(".appbar__actions");
    if (!actions) return;
    // drop the no-JS fallback link + any previously rendered menu
    ["navChapters", "navHome", "chMenu"].forEach(function (id) {
      var el = $(id);
      if (el && el.parentNode) el.parentNode.removeChild(el);
    });
    // The year index has no chapters of its own — a dropdown holding a single
    // "Overview" row pointing at the page you are already on is worse than no
    // dropdown, so bail out entirely rather than render an empty shell.
    if (!CHAPTERS.length) return;

    var cur = window.SITE_CHAPTER || null;
    function row(num, name, href, active) {
      return '<a class="ch-menu__item' + (active ? " ch-menu__item--active" : "") + '" href="' +
        escapeHtml(href) + '"' + (active ? ' aria-current="page"' : "") + ">" +
        '<span class="ch-menu__num">' + escapeHtml(String(num)) + "</span>" +
        "<span>" + escapeHtml(name) + "</span></a>";
    }
    var items = row(0, ui("navHome"), "index.html", !cur);
    CHAPTERS.forEach(function (c) {
      items += row(c.num, state.lang === "zh" ? c.zh : c.en, c.file, c.slug === cur);
    });

    var wrap = document.createElement("div");
    wrap.className = "ch-menu";
    wrap.id = "chMenu";
    wrap.innerHTML =
      '<button class="ch-menu__btn nav-link" id="chMenuBtn" type="button" aria-haspopup="true" ' +
        'aria-expanded="false" title="' + escapeHtml(ui("navChaptersTitle")) + '">' +
        '<span class="material-symbols-rounded" aria-hidden="true">menu_book</span>' +
        '<span class="nav-link__txt">' + escapeHtml(ui("navChapters")) + "</span>" +
        '<span class="material-symbols-rounded ch-menu__caret" aria-hidden="true">expand_more</span>' +
      "</button>" +
      /* No role="menu". That role puts screen readers into application mode and
         hands them the arrow keys, which nothing here implements — so the keys
         simply did nothing. What this actually is, and always was, is a
         disclosure: a button with aria-expanded revealing a list of links. */
      '<div class="ch-menu__panel" id="chMenuPanel">' + items + "</div>";

    var star = $("ghStar");
    if (star && star.nextSibling) actions.insertBefore(wrap, star.nextSibling);
    else if (star) actions.appendChild(wrap);
    else actions.insertBefore(wrap, actions.firstChild);

    var btn = $("chMenuBtn"), panel = $("chMenuPanel");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = wrap.classList.toggle("ch-menu--open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.addEventListener("click", function (e) { e.stopPropagation(); });
  }

  /* =======================================================================
     CHAPTER NAV — prev / all-chapters / next, shown only on a deep-dive
     page (one that sets window.SITE_CHAPTER).
     ===================================================================== */
  function renderChapterNav() {
    var existing = $("chapterNav");
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    var slug = window.SITE_CHAPTER;
    if (!slug) return;
    var idx = -1;
    for (var i = 0; i < CHAPTERS.length; i++) { if (CHAPTERS[i].slug === slug) { idx = i; break; } }
    if (idx === -1) return;
    var prev = CHAPTERS[idx - 1], next = CHAPTERS[idx + 1];
    function label(c) { return c.num + " · " + (state.lang === "zh" ? c.zh : c.en); }

    function side(c, dir) {
      if (!c) return '<span class="chapter-nav__link chapter-nav__link--empty" aria-hidden="true"></span>';
      var arrow = '<span class="material-symbols-rounded" aria-hidden="true">' +
        (dir === "prev" ? "arrow_back" : "arrow_forward") + "</span>";
      var meta = '<span class="chapter-nav__meta"><span class="chapter-nav__dir">' +
        escapeHtml(ui(dir === "prev" ? "prevCh" : "nextCh")) + "</span>" +
        '<span class="chapter-nav__name">' + escapeHtml(label(c)) + "</span></span>";
      return '<a class="chapter-nav__link chapter-nav__link--' + dir + '" href="' + c.file + '">' +
        (dir === "prev" ? arrow + meta : meta + arrow) + "</a>";
    }

    var nav = document.createElement("nav");
    nav.id = "chapterNav";
    nav.className = "chapter-nav";
    nav.setAttribute("aria-label", ui("allChapters"));
    nav.innerHTML =
      side(prev, "prev") +
      '<a class="chapter-nav__all" href="index.html#chapters">' +
        '<span class="material-symbols-rounded" aria-hidden="true">apps</span>' +
        "<span>" + escapeHtml(ui("allChapters")) + "</span></a>" +
      side(next, "next");

    var footer = document.querySelector(".footer");
    if (footer && footer.parentNode) footer.parentNode.insertBefore(nav, footer);
  }

  /* =======================================================================
     REVEAL-ON-SCROLL — gentle fade/rise as blocks enter the viewport.
     Only animates on the FIRST paint; any later repaint marks everything
     visible instantly so nothing flashes.
     ===================================================================== */
  var firstPaint = true;
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function revealOnScroll() {
    var blocks = [].slice.call(
      document.querySelectorAll(".section .section-head, .section [data-item]")
    );
    if (!firstPaint || prefersReducedMotion() || !("IntersectionObserver" in window)) {
      blocks.forEach(function (el) { el.classList.add("is-visible"); });
      firstPaint = false;
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    /* Anything already on screen is marked visible synchronously instead of
       being handed to the observer. The observer's callback is async, so a
       block that is already in view still spends a frame at opacity 0 before
       it can be restored, and then fades back in over 600ms. On this site the
       page is pre-rendered, so that block was fully readable at ~161ms — the
       replay blanks it at ~214ms and spends the pre-render's whole benefit
       re-animating text the reader could already read, pushing LCP from ~161ms
       to ~300ms. Below the fold nothing has been read yet, so those still get
       the reveal they were written for. */
    /* Read every position first, then write. Measuring in between the two
       class writes forces a synchronous layout, and that layout resolves with
       .reveal applied and .is-visible not yet — so the block really does exist
       at opacity 0 for an instant and the transition fires, which is the exact
       replay this is meant to remove. Batched, the browser only resolves style
       once, with both classes already on. */
    var above = blocks.map(function (el) {
      return el.getBoundingClientRect().top < window.innerHeight;
    });
    blocks.forEach(function (el, i) {
      if (above[i]) el.classList.add("reveal", "is-visible");
      else { el.classList.add("reveal"); io.observe(el); }
    });
    firstPaint = false;
  }

  /* =======================================================================
     HERO COUNT-UP — animate when each counter scrolls into view
     ===================================================================== */
  function animateCounters() {
    var els = [].slice.call(document.querySelectorAll(".hero__stat-value[data-count]"));
    if (!els.length) return;

    function run(el) {
      if (el.dataset.done === "1") return;
      el.dataset.done = "1";
      var target = parseFloat(el.dataset.count) || 0;
      /* Match the target's precision for every frame. Rounding mid-animation
         and only restoring decimals on the last frame makes the number look
         like it gains a decimal point out of nowhere as it settles. */
      var decimals = (String(el.dataset.count).split(".")[1] || "").length;
      /* 122511 makes the reader count digits; 122,511 does not. The prose in
         the same section already writes it with separators, so without this
         the same figure appears two ways on one page. */
      function fmt(n) {
        return n.toLocaleString(state.lang === "zh" ? "zh-Hant" : "en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });
      }
      var dur = 1100, start = null;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);              // easeOutCubic
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt(target);
      }
      requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* =======================================================================
     SCROLLSPY — highlight the active section's nav pill
     ===================================================================== */
  /* =======================================================================
     SECTION-NAV SCROLL AFFORDANCE — the pill rail scrolls horizontally but
     its scrollbar is hidden, so nothing tells you the rail continues past
     the edge. Fade the pills out at whichever end still has content, and
     give pointer users arrows to page along it.

     The fade is a mask on the rail, not a gradient painted over it: the bar
     is a translucent backdrop-filter, so an opaque overlay would show as a
     seam against it in dark mode.

     The arrows are aria-hidden and unfocusable on purpose. Tab already walks
     the pills and the browser scrolls each focused one into view, so keyboard
     users can reach every section without them — exposing the arrows too
     would only add two redundant tab stops in front of the real navigation.
     ===================================================================== */
  var navScrollWired = false;
  function setupNavScroll() {
    var rail = navInner;
    var bar  = $("sectionNav");
    if (!rail || !bar) return;

    function arrow(dir) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "navscroll navscroll--" + dir;
      b.tabIndex = -1;
      b.setAttribute("aria-hidden", "true");
      b.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">' +
        (dir === "left" ? "chevron_left" : "chevron_right") + "</span>";
      b.addEventListener("click", function () {
        /* 80% of a screenful, not 100%: the overlap keeps a couple of pills
           in view across the step so you can tell where you landed. */
        rail.scrollBy({
          left: (dir === "left" ? -1 : 1) * Math.round(rail.clientWidth * 0.8),
          behavior: prefersReducedMotion() ? "auto" : "smooth"
        });
      });
      return b;
    }

    var left  = $("navScrollL") || arrow("left");
    var right = $("navScrollR") || arrow("right");
    left.id = "navScrollL";
    right.id = "navScrollR";
    if (!left.parentNode)  bar.appendChild(left);
    if (!right.parentNode) bar.appendChild(right);

    function sync() {
      /* 1px of slack absorbs sub-pixel rounding at fractional zoom levels,
         which would otherwise leave the end arrow enabled forever. */
      var max = rail.scrollWidth - rail.clientWidth;
      var atStart = rail.scrollLeft <= 1;
      var atEnd   = rail.scrollLeft >= max - 1;
      var scrollable = max > 1;
      /* Size each fade to what is actually hidden behind it, capped at the
         full 36px. A fixed fade meant 7px of real overflow blurred out 36px of
         perfectly visible content — the affordance hid five times more than it
         signalled, making a label that fits look truncated. */
      var FADE = 36;
      rail.style.setProperty("--fade-l",
        (scrollable ? Math.min(FADE, Math.round(rail.scrollLeft)) : 0) + "px");
      rail.style.setProperty("--fade-r",
        (scrollable ? Math.min(FADE, Math.round(max - rail.scrollLeft)) : 0) + "px");
      bar.classList.toggle("sectionnav--fade-l", scrollable && !atStart);
      bar.classList.toggle("sectionnav--fade-r", scrollable && !atEnd);
      left.disabled  = !scrollable || atStart;
      right.disabled = !scrollable || atEnd;
    }

    /* PR #23 gave the arrows tabindex="-1" on the premise that Tab already
       scrolls each focused pill into view. That is only true when the pill is
       ENTIRELY outside the scrollport — Chrome leaves a partially visible one
       alone, and partial is the normal case here, since the rail usually
       overflows by less than one pill. So tabbing to the last pill left 67px
       of it (143px on some pages) outside the rail, with the fade erasing the
       focus ring and the arrow painted over what was left.
       Do the scroll the browser declines to do. */
    if (!rail.dataset.focusWired) {
      rail.dataset.focusWired = "1";
      rail.addEventListener("focusin", function (e) {
        if (!e.target || !e.target.scrollIntoView) return;
        e.target.scrollIntoView({
          block: "nearest", inline: "nearest",
          behavior: prefersReducedMotion() ? "auto" : "smooth"
        });
      });
    }

    if (!navScrollWired) {
      navScrollWired = true;
      var ticking = false;
      function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () { ticking = false; sync(); });
      }
      rail.addEventListener("scroll", onScroll, { passive: true });

      /* Whether the rail overflows is a *measurement*, and the measurement
         moves after first paint. The icon font arrives late, so the pills are
         first laid out in a fallback face with different metrics — a rail that
         ends up fitting exactly can measure as overflowing until then, and
         neither a font swap nor a container resize fires a scroll event, so
         the wrong state would simply stick. Re-measure on both. */
      if (window.ResizeObserver) {
        new ResizeObserver(onScroll).observe(rail);
      } else {
        window.addEventListener("resize", onScroll, { passive: true });
      }
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(sync).catch(function () { /* ignore */ });
      }
    }
    sync();
  }

  /* =======================================================================
     READING POSITION — chapter pages run to ~9000px across 9-11 sections, so
     the reader gets no sense of how far in they are or how much is left.

     Two controls, both driven off one throttled scroll handler:
       · a hairline progress bar pinned to the top of the viewport
       · a back-to-top button that appears once you are a screenful down

     The progress bar is aria-hidden: it restates scroll position, which
     assistive tech already reports, so announcing it would only add noise.
     The button is a real, focusable control — Home key aside, pointer users
     have no other quick way back.
     ===================================================================== */
  var readingWired = false;
  function setupReadingAids() {
    var bar = $("readProgress");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "readProgress";
      bar.className = "readprogress";
      bar.setAttribute("aria-hidden", "true");
      bar.innerHTML = '<span class="readprogress__fill"></span>';
      document.body.appendChild(bar);
    }
    var fill = bar.firstChild;

    var btn = $("toTop");
    if (!btn) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.id = "toTop";
      btn.className = "totop";
      btn.innerHTML =
        '<span class="material-symbols-rounded" aria-hidden="true">arrow_upward</span>';
      btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      });
      document.body.appendChild(btn);
    }
    btn.setAttribute("aria-label", ui("toTop"));
    btn.title = ui("toTop");

    function sync() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var y = window.pageYOffset || doc.scrollTop || 0;
      /* A page shorter than the viewport has nothing to indicate; showing a
         bar stuck at 0% (or worse, dividing by zero) would just be noise. */
      var pct = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      bar.classList.toggle("readprogress--on", max > 0);
      fill.style.transform = "scaleX(" + pct + ")";
      btn.classList.toggle("totop--on", max > 0 && y > doc.clientHeight);
    }

    if (!readingWired) {
      readingWired = true;
      var ticking = false;
      function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () { ticking = false; sync(); });
      }
      window.addEventListener("scroll", onScroll, { passive: true });

      /* Both, not either. The observer catches the page growing or shrinking
         (sections revealing, images settling). `resize` catches the viewport
         changing — and a viewport that only changes HEIGHT leaves body's
         content box alone, so the observer never fires for it, while
         documentElement.clientHeight (half the progress denominator, and the
         whole back-to-top threshold) has moved. The everyday trigger is a
         phone's URL bar collapsing, which is exactly a height-only change.

         Note setupNavScroll has the same shape but genuinely needs only the
         observer: it watches the rail, and horizontal overflow does not depend
         on viewport height. Do not "fix" both the same way. */
      window.addEventListener("resize", onScroll, { passive: true });
      if (window.ResizeObserver) new ResizeObserver(onScroll).observe(document.body);
    }
    sync();
  }

  var spyObserver = null;
  function setupScrollSpy() {
    if (spyObserver) { spyObserver.disconnect(); spyObserver = null; }
    if (!("IntersectionObserver" in window)) return;
    var pills = {};
    [].forEach.call(navInner.children, function (a) { pills[a.dataset.target] = a; });

    spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var pill = pills[en.target.id];
        if (!pill) return;
        if (en.isIntersecting) {
          [].forEach.call(navInner.children, function (p) {
            p.classList.remove("navpill--active");
            p.removeAttribute("aria-current");
          });
          pill.classList.add("navpill--active");
          pill.setAttribute("aria-current", "true");
          // keep the active pill in view within the horizontal nav
          if (pill.scrollIntoView) {
            pill.scrollIntoView({
              block: "nearest", inline: "center",
              behavior: prefersReducedMotion() ? "auto" : "smooth"
            });
          }
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    SECTIONS.forEach(function (sec) {
      var el = document.getElementById(sec.id);
      if (el) spyObserver.observe(el);
    });
  }

  /* =======================================================================
     DIALOG — card detail with #slug deep links + Esc
     ===================================================================== */
  function findCard(slug) {
    for (var i = 0; i < SECTIONS.length; i++) {
      var sec = SECTIONS[i];
      if (sec.type !== "cards" || !sec.items) continue;
      for (var j = 0; j < sec.items.length; j++) {
        if (sec.items[j].slug === slug) return sec.items[j];
      }
    }
    return null;
  }

  function openDialog(slug) {
    var item = findCard(slug);
    if (!item) return;
    var tags = (item.tags || []).map(function (tg) {
      return '<span class="tag">' + escapeHtml(tg) + "</span>";
    }).join("");
    dialogBody.innerHTML =
      '<h2 id="dialogTitle">' + escapeHtml(t(item.title)) + "</h2>" +
      (tags ? '<div class="card__tags">' + tags + "</div>" : "") +
      "<p>" + escapeHtml(t(item.overview) || t(item.summary)) + "</p>";
    if (!dialog.open) dialog.showModal();
    if (location.hash.slice(1) !== slug) history.replaceState(null, "", "#" + slug);
  }
  function closeDialog() {
    if (dialog.open) dialog.close();
    if (isSlugHash()) history.replaceState(null, "", location.pathname + location.search);
  }
  function isSlugHash() {
    var h = location.hash.slice(1);
    return !!h && !!findCard(h);
  }

  function wireCards() {
    [].forEach.call(document.querySelectorAll(".card[data-slug]"), function (card) {
      var slug = card.dataset.slug;
      card.addEventListener("click", function () { openDialog(slug); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDialog(slug); }
      });
    });
  }

  /* =======================================================================
     THEME + LANG
     ===================================================================== */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var icon = $("themeIcon");
    if (icon) icon.textContent = state.theme === "dark" ? "light_mode" : "dark_mode";
  }
  /* The language switch is a real link to THIS page in the other language
     (English lives under /en/). The href is derived from location.pathname, so
     adding a page never means coming back here to edit a list. */
  function altLangHref() {
    var p = location.pathname;
    /* One URL per language: English lives at the root, Traditional Chinese
       mirrors the whole tree under /zh-Hant/. Toggling is therefore just
       adding or removing that one prefix — year folders and chapter files
       keep their position on both sides. */
    var ZH = "/zh-Hant";
    if (p === ZH) return "/";
    if (p.indexOf(ZH + "/") === 0) return p.slice(ZH.length) || "/";
    return ZH + (p === "/" ? "/" : p);
  }
  function applyLangChrome() {
    var label = $("langLabel");
    if (label) label.textContent = state.lang === "en" ? "EN" : "中";
    var a = $("langLink");
    if (!a) return;
    var to = state.lang === "en" ? "zh" : "en";
    a.setAttribute("href", altLangHref());
    a.setAttribute("hreflang", to === "zh" ? "zh-Hant" : "en");
    a.setAttribute("lang", to === "zh" ? "zh-Hant" : "en");
    a.setAttribute("aria-label", to === "zh" ? "切換到中文版" : "Switch to English");
  }

  /* =======================================================================
     WIRING
     ===================================================================== */
  function wire() {
    $("themeToggle").addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      lsSet("theme", state.theme);          // an actual choice — remember it
      applyTheme();
    });

    /* Another tab wrote a choice. applyTheme() deliberately no longer touches
       storage, so this event is the only way this tab hears about it — without
       it the two tabs disagree, and the matchMedia guard below (which reads
       storage, not this tab's state) would then also stop this tab following
       the system, leaving it inert to both inputs until reloaded.
       `storage` fires only in OTHER tabs, so there is no self-echo to guard. */
    window.addEventListener("storage", function (e) {
      if (e.key !== "theme" || !e.newValue) return;
      state.theme = e.newValue;
      applyTheme();
    });

    /* Track the system while the reader has expressed no preference of their
       own. Once they have, their choice outranks the OS and we stop listening
       to it. */
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onScheme = function () {
        if (lsGet("theme")) return;
        state.theme = systemTheme();
        applyTheme();
      };
      if (mq.addEventListener) mq.addEventListener("change", onScheme);
      else if (mq.addListener) mq.addListener(onScheme);
    }

    /* No language handler here any more: #langLink is an <a> that navigates
       to the other language's copy of this page. */

    $("dialogClose").addEventListener("click", closeDialog);
    dialog.addEventListener("click", function (e) { if (e.target === dialog) closeDialog(); });
    dialog.addEventListener("close", function () {
      if (isSlugHash()) history.replaceState(null, "", location.pathname + location.search);
    });
    // Esc is handled natively by <dialog>

    window.addEventListener("hashchange", syncFromHash);

    // close the chapters dropdown on outside-click or Esc
    document.addEventListener("click", closeChMenu);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeChMenu();
    });
  }

  /* deep link: open dialog matching #slug on load / hashchange */
  function syncFromHash() {
    var slug = location.hash.slice(1);
    if (slug && findCard(slug)) openDialog(slug);
    else if (!slug && dialog.open) dialog.close();
  }

  /* =======================================================================
     INIT
     ===================================================================== */
  /* =======================================================================
     GITHUB STAR BUTTON — injected into the appbar on every page; live
     star count via the public repo endpoint (no auth), degrades silently.
     ===================================================================== */
  function injectGitHubStar() {
    var actions = document.querySelector(".appbar__actions");
    if (!actions || $("ghStar")) return;
    var a = document.createElement("a");
    a.className = "gh-star";
    a.id = "ghStar";
    a.href = "https://github.com/" + REPO;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("data-i18n", "ghStar");
    a.setAttribute("data-i18n-attr", "title");
    a.innerHTML =
      '<svg class="gh-star__logo" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">' +
        '<path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 ' +
        '0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 ' +
        '1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 ' +
        '0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 ' +
        '1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 ' +
        '3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 ' +
        '8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>' +
      '<span class="material-symbols-rounded gh-star__icon" aria-hidden="true">star</span>' +
      '<span class="gh-star__count" id="ghStarCount" aria-hidden="true"></span>';
    actions.insertBefore(a, actions.firstChild);

    try {
      fetch("https://api.github.com/repos/" + REPO)
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (j) {
          if (!j || typeof j.stargazers_count !== "number") return;
          var n = j.stargazers_count, c = $("ghStarCount");
          if (c) c.textContent = n >= 1000 ? (Math.round(n / 100) / 10) + "k" : String(n);
        })
        .catch(function () { /* offline / rate-limited: leave the link as-is */ });
    } catch (e) { /* fetch unavailable */ }
  }

  function init() {
    applyTheme();
    applyLangChrome();
    injectGitHubStar();
    render();
    wire();
    syncFromHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

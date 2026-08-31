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
          ghStar: "Star this project on GitHub" },
    zh: { footer: "非官方教育性整理 · 資料來源：史丹佛 HAI《人工智慧指數報告" + YR + "》(CC BY-ND 4.0)· 以零建置純靜態網站打造。",
          close: "關閉", menu: "本頁導覽",
          srcLink: "前往史丹佛 HAI 官方報告", srcLinkTxt: "Stanford HAI",
          navChapters: "章節", navChaptersTitle: "跳到" + nchZh + "大章節詳解",
          navHome: "總覽", navHomeTitle: "回到 AI 指數" + YR + " 總覽",
          navYears: "所有年度", navYearsTitle: "回到年度總覽",
          allChapters: "所有章節", prevCh: "上一章", nextCh: "下一章",
          ghStar: "到 GitHub 給這個專案一顆星" }
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

  var state = {
    lang:  PAGE_LANG,
    theme: lsGet("theme") || "light"
  };

  /* Chart tooltips read "label: value". A halfwidth colon wedged between a
     Chinese label and a number looks like the sentence broke — Traditional
     Chinese wants the fullwidth form, which carries its own spacing. */
  var LBLSEP = state.lang === "zh" ? "：" : ": ";

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

  /* a shared <header class="section-head"> for every section */
  function sectionHead(sec) {
    var sub = t(sec.subtitle)
      ? '<p class="section-head__sub">' + escapeHtml(t(sec.subtitle)) + "</p>"
      : "";
    return '<header class="section-head">' +
      '<h2 id="' + escapeHtml(sec.id) + '-heading">' + escapeHtml(t(sec.title)) + "</h2>" +
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

      var svg =
        '<svg viewBox="0 0 ' + W + " " + H + '" role="img" ' +
          'preserveAspectRatio="xMidYMid meet" aria-label="' + title + '">' +
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
    }
  };

  /* icon shown in the section nav pill, keyed by type */
  var NAV_ICONS = {
    hero: "auto_awesome", cards: "grid_view", navcards: "library_books", timeline: "timeline",
    bars: "bar_chart", accordion: "quiz", quotes: "format_quote",
    prose: "article", cta: "campaign"
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
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
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
    var dc = $("dialogClose");
    if (dc) dc.setAttribute("aria-label", ui("close"));
    // generic [data-i18n] chrome (source link text + title, etc.)
    [].slice.call(document.querySelectorAll("[data-i18n]")).forEach(function (el) {
      var val = (I18N[state.lang] || I18N.en)[el.dataset.i18n];
      if (val == null) return;
      var attr = el.dataset.i18nAttr;
      if (attr) el.setAttribute(attr, val); else el.textContent = val;
    });
  }

  /* full-page paint in the page's language */
  function render() {
    paintChrome();
    renderYearsLink();
    renderChaptersMenu();
    paintNav();
    paintSections();
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
    m.classList.remove("ch-menu--open");
    var btn = $("chMenuBtn");
    if (btn) btn.setAttribute("aria-expanded", "false");
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
        escapeHtml(href) + '" role="menuitem"' + (active ? ' aria-current="page"' : "") + ">" +
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
        '<span class="material-symbols-rounded">menu_book</span>' +
        '<span class="nav-link__txt">' + escapeHtml(ui("navChapters")) + "</span>" +
        '<span class="material-symbols-rounded ch-menu__caret" aria-hidden="true">expand_more</span>' +
      "</button>" +
      '<div class="ch-menu__panel" id="chMenuPanel" role="menu">' + items + "</div>";

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
    blocks.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    blocks.forEach(function (el) { io.observe(el); });
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
            pill.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
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
    lsSet("theme", state.theme);
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
      applyTheme();
    });

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

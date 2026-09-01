#!/usr/bin/env python3
"""Correct the language link on the generated Chinese twin pages.

Run this straight after build_i18n.py, before build_seo.py.

Why it exists
-------------
build_i18n.py generates zh-Hant/**.html from the English pages and flips the
language link to point back at the English twin. Flipping the target leaves
two attributes describing the old one:

  * `lang` stays "zh-Hant" on a link whose visible text is now "English" /
    "EN". Marking English text as Chinese is exactly what WCAG 3.1.2
    (Language of Parts) forbids — a screen reader announces it with Chinese
    pronunciation rules.
  * `aria-label` becomes "English / 切換到英文版" — one accessible name
    holding two languages, which is read out twice in the wrong voice.

Both were fixed once by editing the generated files directly. That fix could
not survive, because the next build_i18n run overwrites them — and app.js
repairs both attributes at runtime (applyLangChrome), so the broken markup is
invisible in a browser and only reaches crawlers and no-JS readers. A fix that
lives downstream of the generator is not a fix; this script moves it into the
pipeline so rebuilding an edition cannot quietly undo it.

Scope is deliberately narrow: only the two `<a>` elements that build_i18n
rewrites, only under zh-Hant/. The English pages are already correct — their
language link points at Chinese and is marked lang="zh-Hant" accordingly.
"""
import argparse
import re
import sys
from pathlib import Path

# The two language links build_i18n rewrites: the appbar control and the
# static footer fallback. Non-greedy so two links on one page stay separate.
LINK_RE = re.compile(
    r"<a\b[^>]*\bid=[\"'](?P<id>langLink|langAlt)[\"'][^>]*>", re.I)


def fix_tag(tag: str) -> str:
    tag = re.sub(r'\blang=["\'][^"\']*["\']', 'lang="en"', tag, count=1)
    tag = re.sub(r'\baria-label=["\'][^"\']*["\']',
                 'aria-label="Switch to English"', tag, count=1)
    return tag


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dir", default=".")
    ap.add_argument("--check", action="store_true",
                    help="exit 1 if any twin still needs fixing (CI)")
    a = ap.parse_args()

    twins = sorted((Path(a.dir) / "zh-Hant").rglob("*.html"))
    if not twins:
        print("找不到 zh-Hant/ 底下的頁面 —— 先跑 build_i18n.py", file=sys.stderr)
        return 1

    stale = []
    for p in twins:
        src = p.read_text(encoding="utf-8")
        out = LINK_RE.sub(lambda m: fix_tag(m.group(0)), src)
        if out == src:
            continue
        stale.append(p)
        if not a.check:
            p.write_text(out, encoding="utf-8")

    label = "需要修正" if a.check else "已修正"
    print(f"{label}:{len(stale)} 頁 / 共 {len(twins)} 頁")
    for p in stale:
        print("  " + p.as_posix())
    return 1 if (a.check and stale) else 0


if __name__ == "__main__":
    raise SystemExit(main())

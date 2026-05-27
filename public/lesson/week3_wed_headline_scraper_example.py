# CodeMoldova · Week 3 Wednesday — headline scraper
# Saves ~/Downloads/headlines_today.txt and headlines_today.pdf
#
# Mac: cd ~/codemoldova-week3 && source .venv/bin/activate
# Run: python3 week3_wed_headline_scraper_example.py
# Install steps are on the lesson page. Errors? Paste into Claude or Cursor.

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from urllib.parse import urljoin

try:
    import requests
    from bs4 import BeautifulSoup
    from fpdf import FPDF
except ModuleNotFoundError as e:
    print("Missing a library — use the Install step on the lesson page.")
    print(f"Details: {e}")
    print("\nStill stuck? Paste this message into Claude or Cursor and ask for help.")
    raise SystemExit(1) from e

URL = "https://news.ycombinator.com/"
DOWNLOADS_DIR = Path.home() / "Downloads"
OUTPUT_TXT = DOWNLOADS_DIR / "headlines_today.txt"
OUTPUT_PDF = DOWNLOADS_DIR / "headlines_today.pdf"
DEFAULT_COUNT = 10


@dataclass
class Headline:
    title: str
    url: str
    summary: str


def fetch_page_html(url: str) -> str:
    """Input: download the page HTML from the web."""
    response = requests.get(url, timeout=15)
    response.raise_for_status()
    return response.text


def _subtext_summary(subtext_row) -> str:
    """Build a short summary from HN metadata (points, site, comments)."""
    parts: list[str] = []

    score = subtext_row.select_one("span.score")
    if score:
        parts.append(score.get_text(strip=True))

    author = subtext_row.select_one("a.hnuser")
    if author:
        parts.append(f"by {author.get_text(strip=True)}")

    comments = subtext_row.select_one("a[href*='item?id=']")
    if comments and "comment" in comments.get_text(strip=True).lower():
        parts.append(comments.get_text(strip=True))

    return " · ".join(parts) if parts else "Top story on Hacker News"


def parse_headlines(html: str, limit: int) -> list[Headline]:
    """Process: title, read-more URL, and subtext summary for each story."""
    soup = BeautifulSoup(html, "html.parser")
    headlines: list[Headline] = []

    for row in soup.select("tr.athing"):
        link = row.select_one("span.titleline a")
        if not link:
            continue

        title = link.get_text(strip=True)
        if not title:
            continue

        read_url = urljoin(URL, link.get("href", ""))
        subtext_row = row.find_next_sibling("tr")

        summary = _subtext_summary(subtext_row) if subtext_row else "Top story on Hacker News"
        sitestr = row.select_one("span.sitestr")
        if sitestr:
            site = sitestr.get_text(strip=True)
            summary = f"{summary} · via {site}" if summary else f"via {site}"

        headlines.append(Headline(title=title, url=read_url, summary=summary))
        if len(headlines) >= limit:
            break

    return headlines


def format_report(headlines: list[Headline], stamp: str) -> str:
    lines = [
        f"Headlines snapshot — {stamp}",
        f"Source: {URL}",
        "",
    ]
    for i, item in enumerate(headlines, start=1):
        lines.append(f"{i}. {item.title}")
        lines.append(f"   Summary: {item.summary}")
        lines.append(f"   Read more: {item.url}")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def save_text_report(report: str) -> None:
    DOWNLOADS_DIR.mkdir(exist_ok=True)
    OUTPUT_TXT.write_text(report, encoding="utf-8")
    print(report)
    print(f"Saved text report → {OUTPUT_TXT}")


def pdf_safe(text: str) -> str:
    """Helvetica in fpdf2 is Latin-1 — replace rare Unicode so PDF build never crashes."""
    text = text.replace("\u00b7", " | ")  # middle dot in summaries
    return text.encode("latin-1", "replace").decode("latin-1")


def _pdf_paragraph(pdf: FPDF, height: float, text: str, **kwargs) -> None:
    """multi_cell leaves x at the right edge by default — reset to left margin."""
    pdf.set_x(pdf.l_margin)
    pdf.multi_cell(pdf.epw, height, text, new_x="LMARGIN", new_y="NEXT", **kwargs)


def save_pdf_report(headlines: list[Headline], stamp: str) -> None:
    """Output: a simple, readable PDF in Downloads."""
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 16)
    pdf.set_text_color(30, 30, 30)
    pdf.cell(0, 10, "Hacker News Headlines", new_x="LMARGIN", new_y="NEXT", align="C")

    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(90, 90, 90)
    pdf.cell(0, 6, stamp, new_x="LMARGIN", new_y="NEXT", align="C")
    pdf.ln(6)

    line_y = lambda: pdf.get_y() + 2
    line_x1 = pdf.l_margin
    line_x2 = pdf.w - pdf.r_margin

    for i, item in enumerate(headlines, start=1):
        pdf.set_font("Helvetica", "B", 12)
        pdf.set_text_color(20, 20, 20)
        _pdf_paragraph(pdf, 7, pdf_safe(f"{i}. {item.title}"))

        pdf.set_font("Helvetica", "", 10)
        pdf.set_text_color(70, 70, 70)
        _pdf_paragraph(pdf, 5, pdf_safe(item.summary))

        pdf.set_font("Helvetica", "U", 10)
        pdf.set_text_color(0, 70, 160)
        _pdf_paragraph(pdf, 5, pdf_safe("Read more: " + item.url), link=item.url)

        pdf.set_draw_color(220, 220, 220)
        y = line_y()
        pdf.line(line_x1, y, line_x2, y)
        pdf.ln(6)

    DOWNLOADS_DIR.mkdir(exist_ok=True)
    pdf.output(str(OUTPUT_PDF))
    print(f"Saved PDF report → {OUTPUT_PDF}")


def main() -> None:
    raw = input(f"How many headlines? (default {DEFAULT_COUNT}): ").strip()
    try:
        count = int(raw) if raw else DEFAULT_COUNT
    except ValueError:
        count = DEFAULT_COUNT

    count = max(1, min(count, 30))

    print(f"Fetching up to {count} headlines...")
    html = fetch_page_html(URL)
    headlines = parse_headlines(html, count)

    if not headlines:
        print("No headlines found. The page layout may have changed — ask a mentor.")
        return

    stamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    report = format_report(headlines, stamp)
    save_text_report(report)
    save_pdf_report(headlines, stamp)


if __name__ == "__main__":
    main()

# CodeMoldova — Project Context for Claude Code

## Who I am

My name is Weston. I'm an American teaching a free, nonprofit programming course in Moldova running May–July 2026. I have experience executing and building things but I'm not deep on fundamentals — I learn by doing. I use Cursor as my IDE and Claude Code as my AI pair programmer.

## What this project is

A multi-page React course website that serves as the student-facing portal for the CodeMoldova 2026 cohort. Students find the course through Facebook, it's completely free, and they range from total beginners to people who already know a language or two. The site is hosted on **Vercel**, connected to GitHub so every push to `main` auto-deploys within ~30 seconds.

The repo is at: **https://github.com/westonrwatson/codemoldova**

The old site was a single `index.html` and is being rebuilt as a proper React + Tailwind app. See `BUILD.md` for full rebuild instructions.

## Course description

CodeMoldova is a free 8-week programming course running May 11th through July 1st, 2026 in Moldova. It meets three times a week — Monday, Wednesday, and Thursday — one hour per session. No experience required and no cost to attend, ever.

The course is designed for anyone who has been curious about coding but doesn't know where to start. Over 8 weeks students go from the absolute basics of programming all the way to building and deploying a real project on the internet. The curriculum covers Python, web development, and practical AI tools — not just theory, but hands-on building every single week.

What makes this course different is the approach. Every Monday introduces new concepts through live demos. Every Wednesday is dedicated to exploring AI tools like ChatGPT and Claude — understanding what they can do, what they can't, and how to use them as a developer. Every Thursday is build day, where students work on real projects with guidance and support.

The course ends on July 1st with a Demo Day where every student presents something they built themselves — a working app, a live website, a real project.

## The course structure

8 weeks · 3 sessions/week · 1 hour each · May 11 – July 1, 2026

### Exact schedule

| Week | Monday | Wednesday | Thursday |
|------|--------|-----------|----------|
| Week 1 | May 11 | May 13 | May 14 |
| Week 2 | May 18 | May 20 | May 21 |
| Week 3 | May 25 | May 27 | May 28 |
| Week 4 | Jun 1  | Jun 3  | Jun 4  |
| Week 5 | Jun 8  | Jun 10 | Jun 11 |
| Week 6 | Jun 15 | Jun 17 | Jun 18 |
| Week 7 | Jun 22 | Jun 24 | Jun 25 |
| Week 8 | Jun 29 | Jul 1 — Demo Day 🎉 | — |

23 sessions total. Demo Day is Wednesday July 1st.

### Weekly rhythm
- **Monday** — Lecture: new concepts, live demos, short lecture
- **Wednesday** — AI Exploration Day: play with AI tools, understand capabilities and limits, fun experiments
- **Thursday** — Build Together: hands-on project, pair programming, ship something small

### 4 Phases
1. **Foundations** (Weeks 1–2) — Terminal, Python basics, variables, loops, functions
2. **Python Projects** (Weeks 3–4) — Data structures, APIs, AI-powered scripts
3. **Web Development** (Weeks 5–6) — HTML, CSS, JavaScript, GitHub, Vercel, Figma
4. **Final Project** (Weeks 7–8) — Student-chosen project, demo day, portfolios

### Topics covered
- Python basics
- Terminal basics
- AI tools (Claude, ChatGPT, Copilot, image gen)
- HTML, CSS, JavaScript
- Web design (Figma basics)
- GitHub + Git workflow
- Deployment (Vercel)
- APIs and fetching data
- Databases (Supabase intro)
- Building and shipping real projects

## The students

- Mostly recent high school graduates
- Mix of experience levels: some have never coded, some know a language or two
- Could be returning students from last year's cohort or brand new faces
- Motivated enough to show up 3x/week for free — that matters
- Based in Moldova — keep examples and analogies globally relatable, not US-centric

## My teaching philosophy

- **Shipping beats perfection** — a finished small thing beats an ambitious broken thing
- **Pair beginners with experienced students** — both learn more
- **AI is a tool, not a crutch** — we use it openly and critically
- **Build real things** — every project should be something students can actually use or show
- **Wednesday is the fun day** — AI exploration should feel playful and surprising
- **Demo day matters** — we post to Facebook to recruit the next cohort

## The tech stack

This is a React + Tailwind app built with Vite. See `BUILD.md` for full setup and build instructions.

- **Vite** — build tool
- **React 18** — UI framework
- **React Router v6** — client-side routing (`/`, `/calendar`, `/resources`, `/lesson/:week/:day`)
- **Tailwind CSS v3** — styling
- **No other UI libraries** — keep deps lean

## The design system

Dark-themed, consistent across all pages.

- **Background:** `#0d0f14`
- **Surface:** `#13161e`
- **Surface elevated:** `#1a1e28`
- **Monday accent:** `#4f7cff` (blue)
- **Wednesday accent:** `#2ec27e` (green)
- **Thursday accent:** `#f0a500` (amber)
- **Text primary:** `#e8eaf0`
- **Text muted:** `#7c8099`
- **Fonts:** Syne (headings), DM Sans (body), DM Mono (labels/code)
- **Radius:** 12px cards, 8px elements, 100px pills

## The pages

- **`/` — Home** — 8-week roadmap, phase sections, week rows, day cards that link to lesson pages, current week highlighted, announcements section
- **`/calendar` — Calendar** — May/June/July grid, session dates color-coded by day, clickable to lesson, special dates flagged
- **`/resources` — Resources** — tabbed library organized by topic: Python, Web Dev, AI Tools, Terminal, Extras
- **`/lesson/:week/:day` — Lesson** — dynamic page driven by URL params, loads content from `curriculum.js`, step-through module for Mon/Wed, build + challenge tiers for Thu

## Content lives in data files

All course content is in `src/data/` — never hardcoded in components:

- `curriculum.js` — all 23 sessions with steps, homework, and Thursday challenges
- `resources.js` — all links organized by topic
- `schedule.js` — all session dates and special events

To update content, edit the data files. Components never need to change just because content changes.

## Thursday challenge tiers

Every Thursday lesson has 4 tiers in `curriculum.js`:
- **Base** — core project everyone completes
- **Medium** — extends the project with a new feature
- **Hard** — harder variation or different approach
- **Bonus** — open-ended stretch goal

## How to deploy changes

```bash
git add .
git commit -m "describe what you changed"
git push
```

Vercel auto-deploys on every push to `main`. For the React/Vite app, Vercel detects the build settings automatically — output goes to `dist/`.

## Preferences when working with me

- I learn by doing — show me working code, not just concepts
- Content always lives in data files, never hardcoded in components
- Use Tailwind for all styling — no inline styles, no separate CSS files unless absolutely necessary
- Explain what you're doing in plain English before or after making changes
- Check that new features match the existing design system (dark theme, same fonts, same card style)
- If something I ask for would make the code messy or hard to maintain, say so and suggest a better way
- Commit messages should be short and descriptive
- Ship a simple version first — we can always iterate
- Mobile first — students will check this on their phones

## My tools

- **Cursor** — main IDE
- **Claude Code** — AI pair programmer (that's you)
- **GitHub** — version control and deployment trigger
- **Vercel** — hosting (connected to GitHub, auto-deploys on push)
- **Claude.ai** — for bigger planning conversations and generating large starting files

## Reference files in this repo

- `CLAUDE.md` — this file, project context for Claude Code
- `BUILD.md` — full rebuild instructions for the React app

# CodeMoldova — React Rebuild Instructions

## Overview

Rebuild the CodeMoldova course website from a single `index.html` into a full React + Tailwind multi-page app. The existing site is already live at https://westonrwatson.github.io/codemoldova and the content/design should be preserved and expanded.

## Stack

- **Vite** — build tool
- **React 18** — UI framework
- **React Router v6** — client-side routing
- **Tailwind CSS v3** — styling
- **GitHub + Vercel** — deploy on every push to main

## Setup (if not already done)

```bash
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom
```

Add to `tailwind.config.js`:
```js
content: ["./index.html", "./src/**/*.{js,jsx}"],
theme: {
  extend: {
    fontFamily: {
      display: ['Syne', 'sans-serif'],
      body: ['DM Sans', 'sans-serif'],
      mono: ['DM Mono', 'monospace'],
    },
    colors: {
      bg: '#0d0f14',
      surface: '#13161e',
      surface2: '#1a1e28',
      mon: '#4f7cff',
      wed: '#2ec27e',
      thu: '#f0a500',
    }
  }
}
```

Add Google Fonts to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
```

---

## File Structure to Build

```
src/
  data/
    curriculum.js       ← all course content (sessions, steps, homework, challenges)
    resources.js        ← all links and resources organized by topic
    schedule.js         ← dates, special events, demo day
  pages/
    Home.jsx            ← roadmap overview (port from index.html)
    Calendar.jsx        ← monthly schedule view
    Resources.jsx       ← links library
    Lesson.jsx          ← dynamic lesson page driven by URL params
  components/
    Nav.jsx             ← shared navigation bar
    WeekCard.jsx        ← expandable week row used on Home
    LessonModule.jsx    ← step-through lesson UI
    ChallengeCard.jsx   ← Thursday challenge tiers component
    CodeBlock.jsx       ← styled code display with copy button
  App.jsx               ← router setup
  main.jsx
  index.css             ← Tailwind base + custom globals
```

---

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | Home | 8-week roadmap, announcements, current week highlighted |
| `/calendar` | Calendar | May–July grid, clickable session dates, special events |
| `/resources` | Resources | Tabbed library: Python / Web / AI / Tools |
| `/lesson/:week/:day` | Lesson | e.g. `/lesson/1/mon`, `/lesson/3/thu` |

---

## Design System

Keep the existing aesthetic — this is a dark-themed course site, not a generic app.

- **Background:** `#0d0f14`
- **Surface:** `#13161e`
- **Surface elevated:** `#1a1e28`
- **Monday accent:** `#4f7cff` (blue)
- **Wednesday accent:** `#2ec27e` (green)
- **Thursday accent:** `#f0a500` (amber)
- **Text primary:** `#e8eaf0`
- **Text muted:** `#7c8099`
- **Border subtle:** `rgba(255,255,255,0.08)`
- **Border default:** `rgba(255,255,255,0.14)`
- **Fonts:** Syne (headings/display), DM Sans (body), DM Mono (labels/code)
- **Radius:** 12px for cards, 8px for smaller elements, 100px for pills

---

## Page Specs

### Home.jsx
- Header with course name, tagline, stat pills (8 weeks, Mon/Wed/Thu, 1hr, Free)
- Color legend for the three day types
- 4 phase sections, each with its weeks
- Each week is a row: week number + 3 day cards (Mon, Wed, Thu)
- Clicking a day card navigates to `/lesson/:week/:day` instead of expanding inline
- "Current week" is highlighted based on today's date vs the schedule
- Announcements/updates section at the bottom (array of cards, easy to add to)

### Calendar.jsx
- Three month columns: May, June, July 2026
- Each session date is a clickable tile that links to its lesson page
- Color coded: blue=Monday, green=Wednesday, amber=Thursday
- Special dates highlighted differently: Demo Day (Jul 1), course start (May 11)
- Non-session dates shown as plain calendar days
- A sidebar or section for "Important Dates" (first day, demo day, any holidays)

### Resources.jsx
- Tab bar: Python | Web Dev | AI Tools | Terminal | Extras
- Each tab shows a grid of resource cards
- Each resource card has: title, short description, link, optional tag (video/docs/tool/article)
- Easy to add new resources by editing `resources.js`

### Lesson.jsx
- Reads `week` and `day` from URL params
- Loads the matching session from `curriculum.js`
- Top: breadcrumb nav (Home → Week 1 → Monday), session title, day badge
- Body: renders `LessonModule` for Mon/Wed, or build+challenge layout for Thu
- Bottom: homework section, prev/next session navigation

---

## Component Specs

### LessonModule.jsx
Step-through interactive lesson:
- Step indicator at top: "Step 2 of 5" with dot progress
- Each step has: title, explanation text, optional code block, optional try-it task
- Prev / Next buttons to move between steps
- Steps defined in `curriculum.js` per session
- Smooth transition between steps

### ChallengeCard.jsx (Thursday only)
- Shows the main project brief at the top
- Three tiered challenge cards below:
  - **Base** (green) — the core project, everyone completes this
  - **Medium** (amber) — extends the project with a new feature
  - **Hard** (red/coral) — harder variation or different approach
- Optional **Bonus** stretch goal at the bottom
- Each tier is visually distinct but uses the same card component

### CodeBlock.jsx
- Dark background code block
- Monospace font (DM Mono)
- Copy to clipboard button in top-right corner
- Optional language label (python, js, bash, html)
- Syntax highlighting: use `highlight.js` via CDN or simple token coloring

### Nav.jsx
- Fixed top nav bar
- Logo / course name on the left
- Links: Home, Calendar, Resources
- Mobile: hamburger menu that opens a slide-down nav
- Active page highlighted

---

## Data Structure

### curriculum.js

```js
export const phases = [
  {
    id: 1,
    title: "Foundations",
    color: "#6c63ff",
    weeks: [
      {
        num: 1,
        mon: {
          title: "How computers think",
          date: "May 11",
          desc: "...",
          steps: [
            {
              title: "What is a terminal?",
              content: "...",
              code: { lang: "bash", snippet: "python3" },
              task: "Open your terminal and type python3. What do you see?"
            },
            // more steps
          ],
          homework: {
            title: "Practice variables",
            desc: "...",
            tasks: ["Create a variable with your name", "Print it 3 different ways"]
          }
        },
        wed: {
          title: "What can AI actually do?",
          date: "May 13",
          desc: "...",
          steps: [ /* same structure */ ],
          homework: { /* ... */ }
        },
        thu: {
          title: "Mad libs generator",
          date: "May 14",
          desc: "...",
          steps: [ /* walkthrough steps */ ],
          homework: { /* ... */ },
          challenges: {
            base: {
              title: "Mad libs generator",
              desc: "Use variables and input() to collect words and build a story.",
              steps: ["Create 5 input() prompts", "Store each in a variable", "Print the story using them"]
            },
            medium: {
              title: "Add more variety",
              desc: "Make the story longer and add a loop to play again.",
              steps: ["Add 5 more input prompts", "Use a while loop to ask if they want to play again"]
            },
            hard: {
              title: "Multiple story templates",
              desc: "Build 3 different story templates and let the user pick one.",
              steps: ["Create 3 story templates", "Use if/else to select based on input", "Add a scoring or rating system"]
            },
            bonus: "Add color to your output using the colorama library."
          }
        }
      }
      // more weeks
    ]
  }
  // more phases
]
```

### resources.js

```js
export const resources = {
  python: [
    {
      title: "Python Official Docs",
      desc: "The official reference for everything Python.",
      url: "https://docs.python.org/3/",
      tag: "docs"
    },
    // more
  ],
  web: [ /* ... */ ],
  ai: [ /* ... */ ],
  terminal: [ /* ... */ ],
  extras: [ /* ... */ ]
}
```

### schedule.js

```js
export const sessions = [
  { week: 1, day: "mon", date: "2026-05-11", label: "How computers think" },
  { week: 1, day: "wed", date: "2026-05-13", label: "What can AI actually do?" },
  { week: 1, day: "thu", date: "2026-05-14", label: "Mad libs generator" },
  // all 23 sessions
]

export const specialDates = [
  { date: "2026-05-11", label: "First day!", type: "milestone" },
  { date: "2026-07-01", label: "Demo Day", type: "demo" },
]
```

---

## Build Order

Build in this sequence — each step depends on the previous:

1. **Project setup** — Vite scaffold, Tailwind config, fonts, folder structure
2. **Data files** — `curriculum.js`, `resources.js`, `schedule.js` with all content populated
3. **App.jsx** — React Router setup with all 4 routes
4. **Nav.jsx** — shared nav, works on all pages
5. **Home.jsx** — port the existing roadmap, cards now link to lesson pages
6. **Lesson.jsx + LessonModule.jsx + ChallengeCard.jsx** — the core lesson experience
7. **Calendar.jsx** — monthly grid with session dates
8. **Resources.jsx** — tabbed resource library
9. **Polish** — current week highlight, mobile responsiveness, page transitions

---

## Content to Migrate

The existing `index.html` at https://westonrwatson.github.io/codemoldova has all 8 weeks of session content already written. Read it carefully before building `curriculum.js` — migrate the existing titles, descriptions, bullet points, and resource links into the new data structure. Don't rewrite the content, just restructure it.

Then add the new fields that didn't exist before:
- `steps[]` — break each session description into 4–6 walkthrough steps
- `homework` — add a homework task for each session
- `challenges` — add base/medium/hard/bonus for every Thursday

---

## Deployment

Vercel is already connected to the GitHub repo. When you push to main, it deploys automatically. Vite outputs to `dist/` — Vercel detects this automatically, no configuration needed. Just make sure `vite.config.js` has the correct base path if deploying to a subdirectory.

```js
// vite.config.js
export default {
  base: '/',  // use '/' for custom domain or Vercel root deploy
}
```

---

## Notes

- Keep all content editable from the data files — never hardcode session content inside components
- Every page should feel like the same site — same dark theme, same fonts, same card style
- Mobile first — students will check this on their phones
- No unnecessary dependencies — if Tailwind can do it, don't add a library
- The lesson module should work without JavaScript being "clever" — simple state, simple transitions

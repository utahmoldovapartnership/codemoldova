export const sessions = [
  { week: 1, day: "mon", date: "2026-05-11", label: "Intro + how computers think" },
  { week: 1, day: "wed", date: "2026-05-13", label: "What can AI actually do?" },
  { week: 1, day: "thu", date: "2026-05-14", label: "Mad libs generator" },

  { week: 2, day: "mon", date: "2026-05-18", label: "Logic & loops" },
  { week: 2, day: "wed", date: "2026-05-20", label: "AI as your coding assistant" },
  { week: 2, day: "thu", date: "2026-05-21", label: "Number guessing game" },

  { week: 3, day: "mon", date: "2026-05-25", label: "Data structures" },
  { week: 3, day: "wed", date: "2026-05-27", label: "AI + real data" },
  { week: 3, day: "thu", date: "2026-05-28", label: "Personal expense tracker" },

  { week: 4, day: "mon", date: "2026-06-01", label: "APIs & the internet" },
  { week: 4, day: "wed", date: "2026-06-03", label: "Build an AI-powered script" },
  { week: 4, day: "thu", date: "2026-06-04", label: "Mini project sprint" },

  { week: 5, day: "mon", date: "2026-06-08", label: "HTML & CSS" },
  { week: 5, day: "wed", date: "2026-06-10", label: "Design with AI" },
  { week: 5, day: "thu", date: "2026-06-11", label: "Personal website goes live" },

  { week: 6, day: "mon", date: "2026-06-15", label: "JavaScript" },
  { week: 6, day: "wed", date: "2026-06-17", label: "Vibe coding session" },
  { week: 6, day: "thu", date: "2026-06-18", label: "Interactive web app" },

  { week: 7, day: "mon", date: "2026-06-22", label: "Databases + backend basics" },
  { week: 7, day: "wed", date: "2026-06-24", label: "Final project brainstorm" },
  { week: 7, day: "thu", date: "2026-06-25", label: "Final project day 1" },

  { week: 8, day: "mon", date: "2026-06-29", label: "Git, deployment & portfolios" },
  { week: 8, day: "wed", date: "2026-07-01", label: "Demo Day" },
]

/** Previous / next session in the course for lesson page navigation. */
export function getAdjacentSessions(weekNum, dayKey) {
  const w = Number(weekNum)
  const d = typeof dayKey === 'string' ? dayKey.toLowerCase() : dayKey
  const i = sessions.findIndex((s) => s.week === w && s.day === d)
  if (i === -1) return { prev: null, next: null }
  return {
    prev: i > 0 ? sessions[i - 1] : null,
    next: i < sessions.length - 1 ? sessions[i + 1] : null,
  }
}

export const specialDates = [
  { date: "2026-05-11", label: "First day!", type: "milestone" },
  { date: "2026-07-01", label: "Demo Day 🎉", type: "demo" },
]

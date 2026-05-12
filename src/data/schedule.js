export const sessions = [
  { week: 1, day: "mon", date: "2026-05-11", label: "Intro & How computers think" },
  { week: 1, day: "wed", date: "2026-05-13", label: "Logic + loops" },
  { week: 1, day: "thu", date: "2026-05-14", label: "Mad Libs + number guessing" },

  { week: 2, day: "mon", date: "2026-05-18", label: "Data structures" },
  { week: 2, day: "wed", date: "2026-05-20", label: "APIs & the internet" },
  { week: 2, day: "thu", date: "2026-05-21", label: "Fetch real data, store + display" },

  { week: 3, day: "mon", date: "2026-05-25", label: "Functions" },
  { week: 3, day: "wed", date: "2026-05-27", label: "Error handling + debugging" },
  { week: 3, day: "thu", date: "2026-05-28", label: "Reusable CLI tool" },

  { week: 4, day: "mon", date: "2026-06-01", label: "HTML & CSS" },
  { week: 4, day: "wed", date: "2026-06-03", label: "Layouts, styling + Figma" },
  { week: 4, day: "thu", date: "2026-06-04", label: "Personal webpage goes live" },

  { week: 5, day: "mon", date: "2026-06-08", label: "JavaScript basics" },
  { week: 5, day: "wed", date: "2026-06-10", label: "DOM manipulation + events" },
  { week: 5, day: "thu", date: "2026-06-11", label: "Interactive web app" },

  { week: 6, day: "mon", date: "2026-06-15", label: "Git & GitHub" },
  { week: 6, day: "wed", date: "2026-06-17", label: "Deployment + hosting" },
  { week: 6, day: "thu", date: "2026-06-18", label: "Push a project live with Git" },

  { week: 7, day: "mon", date: "2026-06-22", label: "Databases + backend basics" },
  { week: 7, day: "wed", date: "2026-06-24", label: "Connecting frontend to backend" },
  { week: 7, day: "thu", date: "2026-06-25", label: "Final project day 1" },

  { week: 8, day: "mon", date: "2026-06-29", label: "Final project polish + README" },
  { week: 8, day: "wed", date: "2026-07-01", label: "Demo Day 🎉" },
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

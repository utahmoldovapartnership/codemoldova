export const sessions = [
  { week: 1, day: "mon", date: "2026-05-11", label: "Intro & How computers think" },
  { week: 1, day: "wed", date: "2026-05-13", label: "Variables, types & inputs" },
  { week: 1, day: "thu", date: "2026-05-14", label: "Number guessing game" },

  { week: 2, day: "mon", date: "2026-05-18", label: "Data structures" },
  { week: 2, day: "wed", date: "2026-05-20", label: "APIs & the internet" },
  { week: 2, day: "thu", date: "2026-05-21", label: "Gemini chat agent" },

  { week: 3, day: "mon", date: "2026-05-25", label: "Terminal basics" },
  { week: 3, day: "wed", date: "2026-05-27", label: "Scripting" },
  { week: 3, day: "thu", date: "2026-05-28", label: "Daily automation build" },

  { week: 4, day: "mon", date: "2026-06-01", label: "HTML & CSS literacy" },
  { week: 4, day: "wed", date: "2026-06-03", label: "Design for the AI era" },
  { week: 4, day: "thu", date: "2026-06-04", label: "Second project ship day" },

  { week: 5, day: "mon", date: "2026-06-08", label: "React: Rock Paper Scissors" },
  { week: 5, day: "wed", date: "2026-06-10", label: "React: state & events" },
  { week: 5, day: "thu", date: "2026-06-11", label: "React project build day" },

  { week: 6, day: "mon", date: "2026-06-15", label: "Why apps forget" },
  { week: 6, day: "wed", date: "2026-06-17", label: "Read from Supabase in React" },
  { week: 6, day: "thu", date: "2026-06-18", label: "Save and load" },

  { week: 7, day: "mon", date: "2026-06-22", label: "Pick & scaffold final project" },
  { week: 7, day: "wed", date: "2026-06-24", label: "Smart feature, done safely" },
  { week: 7, day: "thu", date: "2026-06-25", label: "Vertical slice" },

  { week: 8, day: "mon", date: "2026-06-29", label: "Polish + README" },
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

export const sessions = [
  { week: 1, day: "mon", label: "Intro & How computers think" },
  { week: 1, day: "wed", label: "Variables, types & inputs" },
  { week: 1, day: "thu", label: "Number guessing game" },

  { week: 2, day: "mon", label: "Data structures" },
  { week: 2, day: "wed", label: "APIs & the internet" },
  { week: 2, day: "thu", label: "Gemini chat agent" },

  { week: 3, day: "mon", label: "Terminal basics" },
  { week: 3, day: "wed", label: "Scripting" },
  { week: 3, day: "thu", label: "Daily automation build" },

  { week: 4, day: "mon", label: "HTML & CSS literacy" },
  { week: 4, day: "wed", label: "Design for the AI era" },
  { week: 4, day: "thu", label: "Second project ship day" },

  { week: 5, day: "mon", label: "React: Rock Paper Scissors" },
  { week: 5, day: "wed", label: "React: state & events" },
  { week: 5, day: "thu", label: "React project build day" },

  { week: 6, day: "mon", label: "Why apps forget" },
  { week: 6, day: "wed", label: "Read from Supabase in React" },
  { week: 6, day: "thu", label: "Save and load" },

  { week: 7, day: "mon", label: "Pick & scaffold final project" },
  { week: 7, day: "wed", label: "Smart feature, done safely" },
  { week: 7, day: "thu", label: "Vertical slice" },

  { week: 8, day: "mon", label: "Polish + README" },
  { week: 8, day: "wed", label: "Demo Day 🎉" },
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

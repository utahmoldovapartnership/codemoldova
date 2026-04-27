/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  /** Home marketing colors: keep in bundle even if class names are composed dynamically. */
  safelist: [
    { pattern: /^(bg|text|border)-(paper|ink|dart|val|sun|ube)(\/(10|15|60|70|80|85|95))?$/ },
    'hover:bg-dart',
    'hover:bg-val',
    'hover:bg-paper',
    'hover:text-paper',
    'group-hover:text-paper',
    'group-hover:text-paper/70',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        /** Editorial display for marketing / home (pair with `font-serif`). */
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        bg: '#0d0f14',
        surface: '#13161e',
        surface2: '#1a1e28',
        mon: '#4f7cff',
        wed: '#2ec27e',
        thu: '#f0a500',
        primary: '#e8eaf0',
        muted: '#7c8099',
        /** 2026 home / light marketing palette (see product spec). */
        paper: '#ffffff',
        ink: '#000000',
        dart: '#097251',
        val: '#ef453f',
        sun: '#f69c40',
        ube: '#dd8cf1',
      },
      borderRadius: {
        card: '12px',
        elem: '8px',
        pill: '100px',
      },
      keyframes: {
        /** Slow vertical bob for scroll cues (smooth ease, visible amplitude). */
        'float-y': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        'code-grid-drift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '26px 26px' },
        },
      },
      animation: {
        'float-y': 'float-y 8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
        'code-grid-drift': 'code-grid-drift 48s linear infinite',
      },
    },
  },
  plugins: [],
}


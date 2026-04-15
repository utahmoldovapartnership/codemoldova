/** @type {import('tailwindcss').Config} */
export default {
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
        primary: '#e8eaf0',
        muted: '#7c8099',
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


/**
 * Helpful resources per session (Read · Watch · Try) for lesson pages.
 * Merged in `getSessionByWeekAndDay` when the session object has no `resources` array.
 *
 * @typedef {{ label: string, href: string, source?: string, note?: string, download?: string }} SessionResourceItem
 * @typedef {{ group: string, items: SessionResourceItem[] }} SessionResourceGroup
 */

/** @type {Record<string, SessionResourceGroup[]>} */
const BY_KEY = {
  '1:mon': [
    {
      group: 'Read',
      items: [
        {
          label: 'Python 3 — official tutorial',
          href: 'https://docs.python.org/3/tutorial/index.html',
          source: 'python.org',
          note: 'Short chapters you can skim after class.',
        },
        {
          label: 'Cursor — documentation',
          href: 'https://cursor.com/docs',
          source: 'cursor.com',
          note: 'Editor basics, notebooks, and workspace tips.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'What is programming? (Crash Course)',
          href: 'https://www.youtube.com/watch?v=zOjov-2OZ0E',
          source: 'YouTube',
          note: 'Big-picture context; optional before Week 2.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Jupyter Notebook — user docs',
          href: 'https://jupyter-notebook.readthedocs.io/en/stable/',
          source: 'jupyter.org',
          note: 'How cells, kernels, and saving work.',
        },
      ],
    },
  ],

  '1:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'Python tutorial — variables & types',
          href: 'https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator',
          source: 'python.org',
          note: 'Numbers, strings, and assigning names.',
        },
        {
          label: 'Defining functions',
          href: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions',
          source: 'python.org',
          note: 'Matches the end of today’s deck.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Python for beginners — variables (CS Dojo)',
          href: 'https://www.youtube.com/watch?v=Z1Yd7upQsXY',
          source: 'YouTube',
          note: 'Pairs with the “review” slide.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Python Tutor (visualize a small program)',
          href: 'https://pythontutor.com/visualize.html#mode=edit',
          source: 'pythontutor.com',
          note: 'Paste a short if/while snippet after class.',
        },
      ],
    },
  ],

  '1:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'while loops',
          href: 'https://docs.python.org/3/tutorial/controlflow.html#while-statements',
          source: 'python.org',
          note: 'Keep asking until a condition changes.',
        },
        {
          label: 'Defining functions',
          href: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions',
          source: 'python.org',
          note: 'def check_guess(...): pattern.',
        },
        {
          label: 'random.randint',
          href: 'https://docs.python.org/3/library/random.html#random.randint',
          source: 'python.org',
          note: 'Advanced track: pick a secret in a range.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Number guessing game walkthrough (Bro Code)',
          href: 'https://www.youtube.com/watch?v=DLjzla5gIKo',
          source: 'YouTube',
          note: 'One possible structure; yours can differ.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Exercism — Python track',
          href: 'https://exercism.org/tracks/python',
          source: 'exercism.org',
          note: 'Small exercises when you want more reps after class.',
        },
      ],
    },
  ],

  '2:mon': [
    {
      group: 'Read',
      items: [
        {
          label: 'Data structures (lists, dicts, sets)',
          href: 'https://docs.python.org/3/tutorial/datastructures.html',
          source: 'python.org',
          note: 'Official tour of the built-in containers.',
        },
        {
          label: 'pandas — User Guide',
          href: 'https://pandas.pydata.org/docs/user_guide/index.html',
          source: 'pandas.pydata.org',
          note: 'DataFrames, read_csv, filtering, and groupby.',
        },
        {
          label: '10 minutes to pandas',
          href: 'https://pandas.pydata.org/docs/user_guide/10min.html',
          source: 'pandas.pydata.org',
          note: 'Short official tour after today’s lab.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Lists vs tuples vs sets (Corey Schafer)',
          href: 'https://www.youtube.com/watch?v=W8KRzm-HUcc',
          source: 'YouTube',
          note: 'When to pick which structure.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Python built-in types',
          href: 'https://docs.python.org/3/library/stdtypes.html',
          source: 'python.org',
          note: 'Look up methods like .get(), .append(), .items().',
        },
      ],
    },
  ],

  '2:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'Free Movie DB API — docs',
          href: 'https://imdb.iamidiotareyoutoo.com/docs/index.html',
          source: 'imdb.iamidiotareyoutoo.com',
          note: 'Search any movie by title. No API key.',
        },
        {
          label: 'Studio Ghibli API',
          href: 'https://ghibliapi.vercel.app/',
          source: 'ghibliapi.vercel.app',
          note: 'Full film catalog for loops and ratings practice.',
        },
        {
          label: 'An overview of HTTP (MDN)',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
          source: 'MDN',
          note: 'Requests, responses, status codes.',
        },
        {
          label: 'Requests — Quickstart',
          href: 'https://requests.readthedocs.io/en/latest/user/quickstart/',
          source: 'readthedocs.io',
          note: 'GET, JSON, timeouts, errors.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'What is an API? (freeCodeCamp)',
          href: 'https://www.youtube.com/watch?v=GZvSYJDk-us',
          source: 'YouTube',
          note: 'Plain-language mental model.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Search Inception in the browser',
          href: 'https://imdb.iamidiotareyoutoo.com/search?q=inception',
          source: 'imdb.iamidiotareyoutoo.com',
          note: 'See description, #TITLE, and #YEAR before you code.',
        },
        {
          label: 'Browse all Ghibli films',
          href: 'https://ghibliapi.vercel.app/films',
          source: 'ghibliapi.vercel.app',
          note: 'One big JSON list — great for for-loops.',
        },
      ],
    },
  ],

  '2:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'Google AI Studio',
          href: 'https://aistudio.google.com/',
          source: 'aistudio.google.com',
          note: 'Sign in, create a project, and manage API keys.',
        },
        {
          label: 'Gemini API quickstart (Python)',
          href: 'https://ai.google.dev/gemini-api/docs/quickstart',
          source: 'ai.google.dev',
          note: 'Official setup: install google-genai, set GEMINI_API_KEY, first request.',
        },
        {
          label: 'Gemini API docs',
          href: 'https://ai.google.dev/gemini-api/docs',
          source: 'ai.google.dev',
          note: 'Models, chat sessions, system instructions, and limits.',
        },
        {
          label: 'google-genai on PyPI',
          href: 'https://pypi.org/project/google-genai/',
          source: 'pypi.org',
          note: 'pip install google-genai — current SDK (not google-generativeai).',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Get your Gemini API key in AI Studio',
          href: 'https://www.youtube.com/watch?v=RVGbLSVFtIk',
          source: 'YouTube',
          note: 'Walkthrough of creating a key in Google AI Studio.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Create an API key',
          href: 'https://aistudio.google.com/apikey',
          source: 'aistudio.google.com',
          note: 'Do this before the notebook — copy the key once, store it safely.',
        },
        {
          label: 'AI Studio prompt gallery',
          href: 'https://aistudio.google.com/prompts/new_chat',
          source: 'aistudio.google.com',
          note: 'Play with Gemini in the browser before you wire up Python.',
        },
      ],
    },
  ],

  '3:mon': [
    {
      group: 'This week',
      items: [
        {
          label: 'Wednesday — Scripting lesson',
          href: '/lesson/3/wed',
          source: 'CodeMoldova',
          note: 'Headline scraper + build my_automation.py with input().',
        },
        {
          label: 'Thursday — Daily automation build',
          href: '/lesson/3/thu',
          source: 'CodeMoldova',
          note: 'Remove inputs, schedule with cron, check the log file.',
        },
      ],
    },
    {
      group: 'Read',
      items: [
        {
          label: 'Command line crash course',
          href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line',
          source: 'MDN',
          note: 'What the terminal is and the commands you will use most.',
        },
        {
          label: 'Python on Windows (Microsoft)',
          href: 'https://learn.microsoft.com/en-us/windows/python/beginners',
          source: 'Microsoft',
          note: 'Python + terminal on Windows, including PowerShell tips.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Command Line Basics for Beginners',
          href: 'https://www.youtube.com/watch?v=5XgBd6rjuDQ',
          source: 'YouTube',
          note: 'pwd, cd, ls, mkdir — Mac/Linux style; map to PowerShell in class.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Windows Terminal (optional install)',
          href: 'https://apps.microsoft.com/detail/9n0dx20hk701',
          source: 'Microsoft Store',
          note: 'Nicer terminal on Windows — tabs, themes, PowerShell built in.',
        },
        {
          label: 'Git Handbook — why terminal matters for Git',
          href: 'https://guides.github.com/introduction/git-handbook/',
          source: 'GitHub',
          note: 'You will run git from the terminal starting Week 6.',
        },
      ],
    },
  ],

  '3:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'Python tutorial — modules and scripts',
          href: 'https://docs.python.org/3/tutorial/modules.html',
          source: 'python.org',
          note: 'How .py files relate to import and __name__.',
        },
        {
          label: 'pathlib — paths that work on every OS',
          href: 'https://docs.python.org/3/library/pathlib.html',
          source: 'python.org',
          note: 'Path("data") / "file.json" instead of string slashes.',
        },
        {
          label: 'Beautiful Soup 4 documentation',
          href: 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/',
          source: 'crummy.com',
          note: 'Parse HTML with soup.select() and get_text().',
        },
        {
          label: 'requests — HTTP for Humans',
          href: 'https://requests.readthedocs.io/en/latest/user/quickstart/',
          source: 'requests.readthedocs.io',
          note: 'You already used requests in Week 2 — today for HTML pages.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Python Scripts Explained (Tech With Tim)',
          href: 'https://www.youtube.com/watch?v=hnTkHcfhTog',
          source: 'YouTube',
          note: 'Short overview of running .py files from the terminal.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Hacker News (example scrape source)',
          href: 'https://news.ycombinator.com/',
          source: 'ycombinator.com',
          note: 'Open in browser first, then compare to your script output.',
        },
      ],
    },
  ],

  '3:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'Crontab.guru — cron cheat sheet',
          href: 'https://crontab.guru/',
          source: 'crontab.guru',
          note: 'Type a schedule like 0 8 * * * and see it in plain English.',
        },
        {
          label: 'Python schedule module (optional)',
          href: 'https://schedule.readthedocs.io/',
          source: 'schedule.readthedocs.io',
          note: 'Alternative to cron — runs while script stays open. Cron is simpler for true daily runs.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Command Line Basics for Beginners',
          href: 'https://www.youtube.com/watch?v=5XgBd6rjuDQ',
          source: 'YouTube',
          note: 'Review pwd, cd, ls before build day if Monday felt fast.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'MDN — Command line overview',
          href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line',
          source: 'MDN',
          note: 'Same terminal skills you will use for npm and git later.',
        },
      ],
    },
  ],

  '4:mon': [
    {
      group: 'Downloads',
      items: [
        {
          label: 'Reference HTML (commented)',
          href: '/lesson/week4_reference/index.commented.html',
          download: 'index.commented.html',
          source: 'CodeMoldova',
          note: 'Same reference page with HTML comments explaining each tag.',
        },
        {
          label: 'Reference CSS (commented)',
          href: '/lesson/week4_reference/style.commented.css',
          download: 'style.commented.css',
          source: 'CodeMoldova',
          note: 'Annotated stylesheet — pair with the commented HTML for the walkthrough.',
        },
      ],
    },
    {
      group: 'Read',
      items: [
        {
          label: 'MDN — Introduction to HTML',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
          source: 'MDN',
          note: 'Structure, semantics, common tags.',
        },
        {
          label: 'MDN — CSS first steps',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
          source: 'MDN',
          note: 'Selectors, the box model, cascade.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'HTML in 100 seconds',
          href: 'https://www.youtube.com/watch?v=ok-plXXHlWw',
          source: 'YouTube',
          note: 'Ultra-short orientation.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'web.dev — Learn HTML',
          href: 'https://web.dev/learn/html',
          source: 'web.dev',
          note: 'Short modules with checks.',
        },
        {
          label: 'Vercel — static sites',
          href: 'https://vercel.com/docs/frameworks/static',
          source: 'vercel.com',
          note: 'Deploy index.html + style.css from a GitHub repo.',
        },
        {
          label: 'Portfolio template (GitHub)',
          href: 'https://github.com/utahmoldovapartnership/porfolio-template',
          source: 'GitHub',
          note: 'git clone → npm install → edit data/site.ts and data/projects.ts.',
        },
      ],
    },
  ],

  '4:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'Material Design 3',
          href: 'https://m3.material.io/',
          source: 'Google',
          note: 'Components and patterns to describe in AI prompts.',
        },
        {
          label: 'web.dev — Learn CSS',
          href: 'https://web.dev/learn/css',
          source: 'web.dev',
          note: 'Variables, spacing, and layout fundamentals.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Figma Learn — getting started',
          href: 'https://help.figma.com/hc/en-us/categories/360002051613',
          source: 'figma.com',
          note: 'Optional; short skim if you use Figma today.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Claude',
          href: 'https://claude.ai',
          source: 'Anthropic',
          note: 'Design-first prompts before asking for HTML/CSS.',
        },
        {
          label: 'Land-book — site inspiration',
          href: 'https://land-book.com/',
          source: 'Land-book',
          note: 'Steal layout ideas, not exact pixels.',
        },
        {
          label: 'shadcn/ui — component reference',
          href: 'https://ui.shadcn.com/',
          source: 'shadcn',
          note: 'Structure reference for buttons, cards, nav — adapt in plain CSS.',
        },
      ],
    },
  ],

  '4:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'Portfolio template — README',
          href: 'https://github.com/utahmoldovapartnership/porfolio-template#readme',
          source: 'GitHub',
          note: 'Add or update your project entry in data/projects.ts after deploy.',
        },
        {
          label: 'GitHub — create a repository',
          href: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository',
          source: 'GitHub',
          note: 'New repo for today’s project (separate from portfolio).',
        },
        {
          label: 'Vercel — deployments overview',
          href: 'https://vercel.com/docs/deployments/overview',
          source: 'vercel.com',
          note: 'Same flow as Monday and Wednesday — reinforce.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'GitHub Pages — quickstart',
          href: 'https://docs.github.com/en/pages/quickstart',
          source: 'GitHub',
          note: 'Optional alternative host; class standard is Vercel.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'PageSpeed Insights',
          href: 'https://pagespeed.web.dev/',
          source: 'web.dev',
          note: 'Check mobile performance after deploy.',
        },
        {
          label: 'Google Fonts',
          href: 'https://fonts.google.com/',
          source: 'Google',
          note: 'Pick one font pairing to describe in your design prompt.',
        },
      ],
    },
  ],

  '5:mon': [
    {
      group: 'Read',
      items: [
        {
          label: 'React — Quick Start',
          href: 'https://react.dev/learn',
          source: 'react.dev',
          note: 'Official docs: components, JSX, props.',
        },
        {
          label: 'Next.js — Getting Started',
          href: 'https://nextjs.org/docs/app/getting-started',
          source: 'Next.js',
          note: 'App Router, project structure, first app.',
        },
        {
          label: 'Next.js — Project structure',
          href: 'https://nextjs.org/docs/app/getting-started/project-structure',
          source: 'Next.js',
          note: 'app/, components/, what each folder is for.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'React in 100 seconds',
          href: 'https://www.youtube.com/watch?v=Tn6-PIqc4IM',
          source: 'YouTube',
          note: 'Fireship orientation before the lab.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Portfolio template (GitHub)',
          href: 'https://github.com/utahmoldovapartnership/porfolio-template',
          source: 'GitHub',
          note: 'Reference only — React code goes in a separate repo.',
        },
        {
          label: 'Vercel — Next.js deploy',
          href: 'https://vercel.com/docs/frameworks/nextjs',
          source: 'Vercel',
          note: 'Same deploy flow as your portfolio hub.',
        },
      ],
    },
  ],

  '5:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'React — Adding interactivity',
          href: 'https://react.dev/learn/adding-interactivity',
          source: 'react.dev',
          note: 'useState, events, controlled inputs.',
        },
        {
          label: 'React — State: a component’s memory',
          href: 'https://react.dev/learn/state-a-components-memory',
          source: 'react.dev',
          note: 'Why setState, not count++.',
        },
        {
          label: 'Next.js — Server and Client Components',
          href: 'https://nextjs.org/docs/app/getting-started/server-and-client-components',
          source: 'Next.js',
          note: 'When to add use client.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'React useState hook explained',
          href: 'https://www.youtube.com/watch?v=O6P86uwfdR0',
          source: 'YouTube',
          note: 'Web Dev Simplified — pairs with Wednesday lab.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'React — Rendering lists',
          href: 'https://react.dev/learn/rendering-lists',
          source: 'react.dev',
          note: 'map, keys, todo rows.',
        },
      ],
    },
  ],

  '5:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'React — Escape hatches (useEffect)',
          href: 'https://react.dev/learn/escape-hatches',
          source: 'react.dev',
          note: 'Hard tier: fetch data on load.',
        },
        {
          label: 'Vercel — Next.js',
          href: 'https://vercel.com/docs/frameworks/nextjs',
          source: 'Vercel',
          note: 'Deploy your React repo.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'React project ideas for beginners',
          href: 'https://www.youtube.com/watch?v=5oFrD3KzvG8',
          source: 'YouTube',
          note: 'Inspiration for Thursday pick-your-own build.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Quotable API',
          href: 'https://github.com/lukePeavey/quotable',
          source: 'GitHub',
          note: 'Optional hard tier: quote above your todo list.',
        },
        {
          label: 'Portfolio template — data/projects.ts',
          href: 'https://github.com/utahmoldovapartnership/porfolio-template',
          source: 'GitHub',
          note: 'Add your next project card in data/projects.ts with liveUrl + repoUrl.',
        },
      ],
    },
  ],

  '6:mon': [
    {
      group: 'Read',
      items: [
        {
          label: 'Supabase — Database overview',
          href: 'https://supabase.com/docs/guides/database/overview',
          source: 'supabase.com',
          note: 'Tables, rows, SQL editor.',
        },
        {
          label: 'Supabase — Table Editor',
          href: 'https://supabase.com/docs/guides/database/tables',
          source: 'supabase.com',
          note: 'Create notes table without code.',
        },
        {
          label: 'PostgreSQL — SELECT tutorial',
          href: 'https://www.postgresql.org/docs/current/tutorial-select.html',
          source: 'postgresql.org',
          note: 'Supabase runs Postgres under the hood.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Supabase in 100 Seconds',
          href: 'https://www.youtube.com/watch?v=zBZgdTb-dns',
          source: 'YouTube',
          note: 'Fireship — matches Monday lesson embed.',
        },
        {
          label: 'What is a database?',
          href: 'https://www.youtube.com/watch?v=4Z9KEBexzcM',
          source: 'YouTube',
          note: 'freeCodeCamp — optional deeper dive.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Supabase Dashboard',
          href: 'https://supabase.com/dashboard',
          source: 'supabase.com',
          note: 'Create project and notes table.',
        },
      ],
    },
  ],

  '6:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'React — useEffect',
          href: 'https://react.dev/reference/react/useEffect',
          source: 'react.dev',
          note: 'Fetch on mount pattern.',
        },
        {
          label: 'Supabase JS — select rows',
          href: 'https://supabase.com/docs/reference/javascript/select',
          source: 'supabase.com',
          note: 'from().select() in the browser.',
        },
        {
          label: 'Next.js — Environment variables',
          href: 'https://nextjs.org/docs/app/building-your-application/configuring/environment-variables',
          source: 'Next.js',
          note: 'NEXT_PUBLIC_ prefix for client.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Learn useEffect In 13 Minutes',
          href: 'https://www.youtube.com/watch?v=0ZJgIjIuY7U',
          source: 'YouTube',
          note: 'Web Dev Simplified — Wednesday lesson embed.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Download week6_demo_rls.sql',
          href: '/lesson/week6_demo_rls.sql',
          source: 'CodeMoldova',
          note: 'Read policy for notes table.',
          download: 'week6_demo_rls.sql',
        },
        {
          label: 'NotesList reference (.tsx)',
          href: '/lesson/week6_wed_supabase_read_example.tsx',
          source: 'CodeMoldova',
          note: 'Optional read-only pattern; adapt with AI.',
          download: 'week6_wed_supabase_read_example.tsx',
        },
      ],
    },
  ],

  '6:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'Supabase JS — insert',
          href: 'https://supabase.com/docs/reference/javascript/insert',
          source: 'supabase.com',
          note: 'Form submit to database.',
        },
        {
          label: 'MDN — Controlled inputs',
          href: 'https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable',
          source: 'react.dev',
          note: 'Week 5 pattern for AddNoteForm.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Supabase Row Level Security',
          href: 'https://www.youtube.com/watch?v=Ow_Uzedfohk',
          source: 'YouTube',
          note: 'Why INSERT policy matters Thursday.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Download week6_demo_rls.sql',
          href: '/lesson/week6_demo_rls.sql',
          source: 'CodeMoldova',
          note: 'INSERT policy for Thursday build.',
          download: 'week6_demo_rls.sql',
        },
      ],
    },
  ],

  '7:mon': [
    {
      group: 'Read',
      items: [
        {
          label: 'Supabase Auth — Overview',
          href: 'https://supabase.com/docs/guides/auth',
          source: 'supabase.com',
          note: 'Email sign-up and sessions.',
        },
        {
          label: 'Supabase — Sign up with password',
          href: 'https://supabase.com/docs/guides/auth/passwords',
          source: 'supabase.com',
          note: 'signUp and signInWithPassword.',
        },
        {
          label: 'Supabase — Row Level Security',
          href: 'https://supabase.com/docs/guides/database/postgres/row-level-security',
          source: 'supabase.com',
          note: 'Per-user entries policies.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Supabase Auth with React.js',
          href: 'https://www.youtube.com/watch?v=Q7-DI39epR8',
          source: 'YouTube',
          note: 'Pairs with Monday capstone auth scaffold.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Download week7_capstone_schema.sql',
          href: '/lesson/week7_capstone_schema.sql',
          source: 'CodeMoldova',
          note: 'profiles + entries + RLS.',
          download: 'week7_capstone_schema.sql',
        },
      ],
    },
  ],

  '7:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'Gemini API — JavaScript quickstart',
          href: 'https://ai.google.dev/gemini-api/docs/quickstart',
          source: 'Google AI',
          note: 'Server-side @google/generative-ai.',
        },
        {
          label: 'Next.js — Route Handlers',
          href: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers',
          source: 'Next.js',
          note: 'app/api/chat/route.ts pattern.',
        },
        {
          label: 'Google AI Studio — API keys',
          href: 'https://aistudio.google.com/apikey',
          source: 'Google AI',
          note: 'Same key habit as Week 2.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Next.js 15 — Route Handlers',
          href: 'https://www.youtube.com/watch?v=27Uj6BeIDV0',
          source: 'YouTube',
          note: 'Codevolution — app/api route.ts pattern for Gemini.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Vercel — Environment variables',
          href: 'https://vercel.com/docs/projects/environment-variables',
          source: 'Vercel',
          note: 'GEMINI_API_KEY on deploy.',
        },
      ],
    },
  ],

  '7:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'Supabase JS — insert with user',
          href: 'https://supabase.com/docs/reference/javascript/insert',
          source: 'supabase.com',
          note: 'Include user_id from session.',
        },
        {
          label: 'Vercel — Next.js deploy',
          href: 'https://vercel.com/docs/frameworks/nextjs',
          source: 'Vercel',
          note: 'Production URL + env vars.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'What is a vertical slice?',
          href: 'https://www.youtube.com/watch?v=Hf7p1NShOmQ',
          source: 'YouTube',
          note: 'One path end-to-end.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Supabase — Auth redirect URLs',
          href: 'https://supabase.com/docs/guides/auth/redirect-urls',
          source: 'supabase.com',
          note: 'Fix login on production only.',
        },
      ],
    },
  ],

  '8:mon': [
    {
      group: 'Read',
      items: [
        {
          label: 'Write a great README (GitHub blog)',
          href: 'https://github.blog/developer-skills/github/write-a-great-readme/',
          source: 'github.blog',
          note: 'Sections, tone, screenshots.',
        },
        {
          label: 'Semantic line breaks in Markdown',
          href: 'https://sembr.org/',
          source: 'sembr.org',
          note: 'Optional readability tip for READMEs.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'README template walkthrough',
          href: 'https://www.youtube.com/watch?v=ECuZb5V9dBc',
          source: 'YouTube',
          note: 'One structure you can steal.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Markdown Guide',
          href: 'https://www.markdownguide.org/basic-syntax/',
          source: 'markdownguide.org',
          note: 'Headings, lists, links, images.',
        },
      ],
    },
  ],

  '8:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'How to speak so people want to listen (TED)',
          href: 'https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen',
          source: 'ted.com',
          note: 'Voice, pace, clarity—short talk.',
        },
        {
          label: 'Demoing software (Martin Fowler)',
          href: 'https://martinfowler.com/articles/demoing-software.html',
          source: 'martinfowler.com',
          note: 'Story arc for a technical demo.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'How to give a great developer demo',
          href: 'https://www.youtube.com/watch?v=SkUuNyl3nRk',
          source: 'YouTube',
          note: 'Practical pacing tips.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'OBS Studio (free screen recording)',
          href: 'https://obsproject.com/',
          source: 'obsproject.com',
          note: 'Backup plan if live demo is risky.',
        },
      ],
    },
  ],
}

/**
 * @param {number} weekNum
 * @param {string} dayKey — mon | wed | thu
 * @returns {SessionResourceGroup[] | null}
 */
export function sessionResourcesFor(weekNum, dayKey) {
  const d = String(dayKey || '').toLowerCase()
  const w = Number(weekNum)
  if (!Number.isFinite(w) || !d) return null
  const list = BY_KEY[`${w}:${d}`]
  return list && list.length ? list : null
}

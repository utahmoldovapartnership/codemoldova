/**
 * Helpful resources per session (Read · Watch · Try) for lesson pages.
 * Merged in `getSessionByWeekAndDay` when the session object has no `resources` array.
 *
 * @typedef {{ label: string, href: string, source?: string, note?: string }} SessionResourceItem
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
          label: 'json — save and load data',
          href: 'https://docs.python.org/3/library/json.html',
          source: 'python.org',
          note: 'Same idea as Week 2 watchlist files — now inside a script.',
        },
      ],
    },
  ],

  '3:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'sys.argv — arguments from the terminal',
          href: 'https://docs.python.org/3/library/sys.html#sys.argv',
          source: 'python.org',
          note: 'python3 tool.py greet Ada → sys.argv is the list of pieces.',
        },
        {
          label: 'argparse (optional stretch)',
          href: 'https://docs.python.org/3/library/argparse.html',
          source: 'python.org',
          note: 'Automatic --help and flags when you outgrow sys.argv.',
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
      ],
    },
  ],

  '4:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'MDN — Flexbox',
          href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox',
          source: 'MDN',
          note: 'One-dimensional layouts.',
        },
        {
          label: 'MDN — Grid layout',
          href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout',
          source: 'MDN',
          note: 'Two-dimensional layouts.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'CSS Flexbox in 20 minutes',
          href: 'https://www.youtube.com/watch?v=JJSoEo8JSnc',
          source: 'YouTube',
          note: 'Pairs with your page layout practice.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Figma Learn',
          href: 'https://help.figma.com/hc/en-us/categories/360002051613',
          source: 'figma.com',
          note: 'Frames, auto layout, export.',
        },
      ],
    },
  ],

  '4:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'GitHub Pages — quickstart',
          href: 'https://docs.github.com/en/pages/quickstart',
          source: 'GitHub',
          note: 'Host static sites from a repo.',
        },
        {
          label: 'Vercel — static sites',
          href: 'https://vercel.com/docs/frameworks/static',
          source: 'vercel.com',
          note: 'Alternative path your class may use.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'How to host a website on GitHub Pages (article)',
          href: 'https://www.freecodecamp.org/news/how-to-host-a-website-on-github-pages-for-free/',
          source: 'freeCodeCamp',
          note: 'Step-by-step with screenshots.',
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
      ],
    },
  ],

  '5:mon': [
    {
      group: 'Read',
      items: [
        {
          label: 'MDN — JavaScript first steps',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps',
          source: 'MDN',
          note: 'Variables, types, basic syntax.',
        },
        {
          label: 'MDN — fetch API',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
          source: 'MDN',
          note: 'async/await and response.json().',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'JavaScript in 100 seconds',
          href: 'https://www.youtube.com/watch?v=DHjqpDCBtYk',
          source: 'YouTube',
          note: 'Orientation before the DOM day.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'javascript.info — fundamentals',
          href: 'https://javascript.info/',
          source: 'javascript.info',
          note: 'Clear chapters with sandboxes.',
        },
      ],
    },
  ],

  '5:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'MDN — Introduction to the DOM',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
          source: 'MDN',
          note: 'querySelector, textContent, classList.',
        },
        {
          label: 'MDN — Introduction to events',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events',
          source: 'MDN',
          note: 'addEventListener, preventDefault, propagation.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'DOM manipulation crash course',
          href: 'https://www.youtube.com/watch?v=y17RuWkWdn8',
          source: 'YouTube',
          note: 'Traversy-style overview.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'MDN — FormData',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/FormData',
          source: 'MDN',
          note: 'Reading inputs from forms in JS.',
        },
      ],
    },
  ],

  '5:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'MDN — Client-side storage',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage',
          source: 'MDN',
          note: 'localStorage when you add persistence.',
        },
        {
          label: 'MDN — Using microtasks with queues',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide',
          source: 'MDN',
          note: 'Optional when async feels confusing.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Build a simple todo in vanilla JS',
          href: 'https://www.youtube.com/watch?v=3LSrr1XM6HU',
          source: 'YouTube',
          note: 'One possible pattern for state + DOM.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Open UI patterns',
          href: 'https://open-ui.org/',
          source: 'open-ui.org',
          note: 'Ideas for accessible components.',
        },
      ],
    },
  ],

  '6:mon': [
    {
      group: 'Read',
      items: [
        {
          label: 'Git — Book (introduction)',
          href: 'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control',
          source: 'git-scm.com',
          note: 'Free, canonical long-form reference.',
        },
        {
          label: 'GitHub Docs — GitHub flow',
          href: 'https://docs.github.com/en/get-started/using-github/github-flow',
          source: 'GitHub',
          note: 'Branch, PR, review, merge.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Git & GitHub for beginners',
          href: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
          source: 'YouTube',
          note: 'freeCodeCamp full intro.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Oh Shit, Git!?!',
          href: 'https://ohshitgit.com/',
          source: 'ohshitgit.com',
          note: 'Recover from common mistakes.',
        },
      ],
    },
  ],

  '6:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'Vercel — Deployments',
          href: 'https://vercel.com/docs/deployments/overview',
          source: 'vercel.com',
          note: 'Production vs preview, rollbacks.',
        },
        {
          label: 'MDN — How do you set up a local testing server?',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server',
          source: 'MDN',
          note: 'Why file:// and http:// behave differently.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Deploy websites using Vercel',
          href: 'https://www.youtube.com/watch?v=2LSsyrcBynY',
          source: 'YouTube',
          note: 'Walkthrough from GitHub import.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'GitHub Actions — starter workflow',
          href: 'https://docs.github.com/en/actions/quickstart',
          source: 'GitHub',
          note: 'Optional when you add CI later.',
        },
      ],
    },
  ],

  '6:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'About READMEs',
          href: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes',
          source: 'GitHub',
          note: 'What belongs in the repo front page.',
        },
        {
          label: 'Choosing a license',
          href: 'https://choosealicense.com/',
          source: 'choosealicense.com',
          note: 'Simple defaults for student projects.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'How to write a great README',
          href: 'https://www.youtube.com/watch?v=RYb0NeAm5fQ',
          source: 'YouTube',
          note: 'Structure and screenshots.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Vercel — Environment variables',
          href: 'https://vercel.com/docs/projects/environment-variables',
          source: 'vercel.com',
          note: 'Never commit secrets; set them here.',
        },
      ],
    },
  ],

  '7:mon': [
    {
      group: 'Read',
      items: [
        {
          label: 'Supabase — Start locally',
          href: 'https://supabase.com/docs/guides/getting-started',
          source: 'supabase.com',
          note: 'Projects, tables, SQL editor.',
        },
        {
          label: 'SQLite — when a file DB fits',
          href: 'https://www.sqlite.org/docs.html',
          source: 'sqlite.org',
          note: 'Alternative for offline or tiny tools.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'SQL in 100 seconds',
          href: 'https://www.youtube.com/watch?v=zsjvFFKOm3c',
          source: 'YouTube',
          note: 'SELECT / INSERT intuition.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'PostgreSQL tutorial (basics)',
          href: 'https://www.postgresql.org/docs/current/tutorial-sql.html',
          source: 'postgresql.org',
          note: 'Supabase is Postgres under the hood.',
        },
      ],
    },
  ],

  '7:wed': [
    {
      group: 'Read',
      items: [
        {
          label: 'MDN — CORS',
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS',
          source: 'MDN',
          note: 'Why browsers block some API calls.',
        },
        {
          label: 'Supabase — JavaScript client',
          href: 'https://supabase.com/docs/reference/javascript/introduction',
          source: 'supabase.com',
          note: 'from().select() patterns from the browser.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'Fetch API explained',
          href: 'https://www.youtube.com/watch?v=Oive66jqnhk',
          source: 'YouTube',
          note: 'Promises and JSON parsing.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'OWASP — API security top 10 (overview)',
          href: 'https://owasp.org/www-project-api-security/',
          source: 'owasp.org',
          note: 'High-level habits for keys and data.',
        },
      ],
    },
  ],

  '7:thu': [
    {
      group: 'Read',
      items: [
        {
          label: 'User stories with examples (Atlassian)',
          href: 'https://www.atlassian.com/agile/project-management/user-stories',
          source: 'atlassian.com',
          note: 'One sentence “as a user I want…” to anchor scope.',
        },
        {
          label: 'GitHub Issues — quickstart',
          href: 'https://docs.github.com/en/issues/tracking-your-work-with-issues/quickstart',
          source: 'GitHub',
          note: 'Break work into tickets.',
        },
      ],
    },
    {
      group: 'Watch',
      items: [
        {
          label: 'How to plan a programming project',
          href: 'https://www.youtube.com/watch?v=Hf7p1NShOmQ',
          source: 'YouTube',
          note: 'Milestones and vertical slices.',
        },
      ],
    },
    {
      group: 'Try',
      items: [
        {
          label: 'Excalidraw',
          href: 'https://excalidraw.com/',
          source: 'excalidraw.com',
          note: 'Sketch architecture or user flow fast.',
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

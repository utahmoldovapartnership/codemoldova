/** Short list for the top of the Resources page (before Week 1). */
export const startHere = [
  {
    title: 'Install Cursor',
    desc: 'Our editor for the whole course—notebooks, Python, and the web stack. Install it first; if Cursor asks for Python, follow its prompt.',
    url: 'https://cursor.com/download',
    tag: 'setup',
  },
  {
    title: 'Set up GitHub',
    desc: 'Create an account so you can save code, use Git in class, and deploy projects later.',
    url: 'https://github.com/join',
    tag: 'setup',
  },
]

export const resources = {
  python: [
    {
      title: "Python Official Docs",
      desc: "The official reference for everything Python. Great for looking up functions and syntax.",
      url: "https://docs.python.org/3/",
      tag: "docs",
    },
    {
      title: "Real Python",
      desc: "Articles and tutorials from basics to intermediate. Great when you want a second explanation.",
      url: "https://realpython.com/",
      tag: "article",
    },
    {
      title: "Python Tutorial (Official)",
      desc: "The official beginner tutorial. It covers variables, loops, functions, and more.",
      url: "https://docs.python.org/3/tutorial/",
      tag: "docs",
    },
    {
      title: "freeCodeCamp Python Course",
      desc: "Free, full Python course on YouTube. One of the best beginner resources out there.",
      url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      tag: "video",
    },
    {
      title: "Automate the Boring Stuff",
      desc: "Free book focused on practical Python: files, spreadsheets, web scraping, and more.",
      url: "https://automatetheboringstuff.com",
      tag: "book",
    },
    {
      title: "Pandas Docs",
      desc: "Official documentation for Pandas, the common library for working with data in Python.",
      url: "https://pandas.pydata.org/docs/",
      tag: "docs",
    },
    {
      title: "Kaggle Datasets",
      desc: "Thousands of free datasets to practice with. Great for data projects.",
      url: "https://www.kaggle.com/datasets",
      tag: "tool",
    },
  ],

  web: [
    {
      title: "MDN Web Docs",
      desc: "The best reference for HTML, CSS, and JavaScript. Bookmark this.",
      url: "https://developer.mozilla.org",
      tag: "docs",
    },
    {
      title: "web.dev Learn",
      desc: "Google’s structured HTML, CSS, and JS lessons. Short modules with clear goals.",
      url: "https://web.dev/learn/html",
      tag: "course",
    },
    {
      title: "javascript.info",
      desc: "The most thorough JavaScript tutorial on the internet. Free and well-written.",
      url: "https://javascript.info",
      tag: "docs",
    },
    {
      title: "The Odin Project",
      desc: "Free, full-stack curriculum covering HTML, CSS, JavaScript, and more. Self-paced.",
      url: "https://www.theodinproject.com",
      tag: "course",
    },
    {
      title: "freeCodeCamp",
      desc: "Free coding certifications in web dev, JavaScript, data structures, and more.",
      url: "https://www.freecodecamp.org",
      tag: "course",
    },
    {
      title: "Vercel",
      desc: "Deploy your web projects for free. Connects to GitHub for automatic deploys.",
      url: "https://vercel.com",
      tag: "tool",
    },
    {
      title: "CodeMoldova portfolio template",
      desc: "Clone this Next.js hub for Week 4+. Links to each project’s live Vercel site — edit data/projects.ts after every session.",
      url: "https://github.com/utahmoldovapartnership/porfolio-template",
      tag: "tool",
    },
    {
      title: "GitHub Pages",
      desc: "Host a static website directly from a GitHub repo. It is completely free.",
      url: "https://pages.github.com",
      tag: "tool",
    },
    {
      title: "Figma",
      desc: "Design tool we use to wireframe and mockup websites before building them.",
      url: "https://figma.com",
      tag: "tool",
    },
    {
      title: "Google Fonts",
      desc: "Free font library. Pick a font, copy the embed link, paste it in your HTML.",
      url: "https://fonts.google.com",
      tag: "tool",
    },
    {
      title: "Coolors",
      desc: "Fast color palette generator. Hit spacebar to generate new palettes.",
      url: "https://coolors.co",
      tag: "tool",
    },
  ],

  ai: [
    {
      title: "Claude.ai",
      desc: "Anthropic's AI assistant. Great for explaining code, debugging, and writing.",
      url: "https://claude.ai",
      tag: "tool",
    },
    {
      title: "ChatGPT",
      desc: "OpenAI's AI assistant. One of the most widely used AI tools for developers.",
      url: "https://chatgpt.com",
      tag: "tool",
    },
    {
      title: "GitHub Copilot",
      desc: "AI code completion in your editor. Free for students with a GitHub account.",
      url: "https://github.com/features/copilot",
      tag: "tool",
    },
    {
      title: "Anthropic API Docs",
      desc: "Documentation for calling Claude from your own Python or JavaScript code.",
      url: "https://docs.anthropic.com",
      tag: "docs",
    },
    {
      title: "OpenAI Cookbook",
      desc: "Examples and patterns for building with the OpenAI API, with practical snippets.",
      url: "https://cookbook.openai.com/",
      tag: "article",
    },
    {
      title: "OpenAI API Docs",
      desc: "Documentation for calling GPT from your own code.",
      url: "https://platform.openai.com/docs",
      tag: "docs",
    },
    {
      title: "Public APIs List",
      desc: "A massive list of free public APIs: weather, jokes, trivia, space data, and more.",
      url: "https://github.com/public-apis/public-apis",
      tag: "article",
    },
  ],

  terminal: [
    {
      title: "Command Line Crash Course",
      desc: "Short, practical intro to the terminal. Covers the 10 commands you'll use 90% of the time.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line",
      tag: "article",
    },
    {
      title: "Git Handbook",
      desc: "GitHub's official guide to Git. Covers commits, branches, and pull requests.",
      url: "https://guides.github.com/introduction/git-handbook/",
      tag: "article",
    },
    {
      title: "Learn Git Branching",
      desc: "Interactive visual tool for learning Git branching and merging.",
      url: "https://learngitbranching.js.org",
      tag: "tool",
    },
    {
      title: "OpenWeather API",
      desc: "Free weather API we use in Week 3 API labs. Sign up for a free key.",
      url: "https://openweathermap.org/api",
      tag: "tool",
    },
    {
      title: "GitHub CLI",
      desc: "Optional: run GitHub from the terminal. Useful once you’re comfortable with the basics.",
      url: "https://cli.github.com/",
      tag: "tool",
    },
  ],

  extras: [
    {
      title: "CS50 on edX",
      desc: "Harvard's intro CS course. Free to audit. One of the most popular courses on the internet.",
      url: "https://cs50.harvard.edu/x/",
      tag: "course",
    },
    {
      title: "readme.so",
      desc: "Simple editor for writing a good README file for your GitHub projects.",
      url: "https://readme.so",
      tag: "tool",
    },
    {
      title: "SQLBolt",
      desc: "Learn SQL basics interactively: queries, filters, joins. Free and browser-based.",
      url: "https://sqlbolt.com",
      tag: "course",
    },
    {
      title: "Supabase",
      desc: "Free, open-source database platform we use in Week 7. Great for web projects.",
      url: "https://supabase.com",
      tag: "tool",
    },
    {
      title: "GitHub Profile README Guide",
      desc: "How to set up a GitHub profile README to showcase your projects.",
      url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile",
      tag: "article",
    },
  ],
}

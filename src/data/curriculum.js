import { sessionResourcesFor } from './sessionResources.js'

export const phases = [
  {
    id: 1,
    title: "Python Foundations",
    color: "#6c63ff",
    weeks: [
      {
        num: 1,
        mon: {
          title: "Intro & How computers think",
          date: "May 11",
          desc: "What a program is, Cursor, and a guided Jupyter notebook (.ipynb). The lesson steps match the notebook: keep both open and run code cells from top to bottom in week1_intro.ipynb. The last step is what you aim to finish today.",
          preview: "Install Cursor, open the starter notebook, run cells, then complete the intro card section in the same file.",
          labExampleUrl: "/lesson/week1_intro.ipynb",
          labExampleDownload: "week1_intro.ipynb",
          labExampleLabel: "Download starter notebook (.ipynb)",
          slideDeck: {
            label: "Week 1 · Day one slide deck",
            url: "https://docs.google.com/presentation/d/1V419zmDfBw5eXlsjHSJpCbZmjfFVfxQqxZi7dawJvu8/edit?usp=sharing",
          },
          codeFromClassUrl: "https://forms.gle/4RJM6d3UYsPbKzaP8",
          codeFromClassLabel: "Take Survey",
          steps: [
            {
              title: "Install Cursor",
              timing: "Lab",
              content:
                "We use Cursor as the editor for this course: it runs Jupyter notebooks well and pairs nicely with AI assistants when you use them deliberately. Install it before you open the starter notebook.",
              links: [
                { label: "Download Cursor", href: "https://cursor.com/download" },
                { label: "Python downloads (if Cursor asks for Python)", href: "https://www.python.org/downloads/" },
              ],
              task: "Install Cursor from the download page and launch the app once so you know it opens.",
            },
            {
              title: "Week folder + starter notebook",
              timing: "Lab",
              content:
                "Create a folder for this week (for example codemoldova-week1). Use the **Download starter notebook (.ipynb)** button above the lab steps, then save the file into that folder so everything for week 1 lives in one place.",
              tips: ["If the file lands in Downloads, move it into your week folder before opening in Cursor."],
              task: "Create the folder and save week1_intro.ipynb inside it.",
            },
            {
              title: "Open the notebook in Cursor",
              timing: "Lab",
              content:
                "In Cursor: File → Open Folder… and choose your week folder. Open week1_intro.ipynb from the sidebar. When Cursor asks for a Python interpreter or Jupyter kernel, pick Python 3. You are ready when a code cell can run without a “no kernel” error.",
              links: [{ label: "Python interpreter docs", href: "https://docs.python.org/3/tutorial/interpreter.html" }],
              task: "Open the notebook and select a Python 3 kernel. Run the first small code cell that prints the Python version (section 2 in the notebook).",
            },
            {
              title: "Cells, order, and the shell (mental model)",
              timing: "Lab",
              content:
                "In a notebook, each code cell is like the >>> REPL in tutorials: Python runs your code and shows output under the cell. Run cells from top to bottom the first time through so variables exist when later cells need them. The terminal is still the “outer” layer that starts programs; today you mostly stay inside the notebook.",
              images: [
                {
                  src: "/lesson/terminal-flow.svg",
                  alt: "Command in, shell runs program, text out",
                  caption: "Later you will live in the terminal too; today the notebook is your main loop.",
                },
              ],
              code: { lang: "python", snippet: "2 + 2\n7 * 8" },
              tips: ["Shift+Enter (or Shift+Return) runs the current cell and moves to the next.", "If a cell errors, fix it before continuing—downstream cells may depend on earlier names."],
              task: "In the notebook, run the expressions section (section 3) and confirm you see numeric results under the cells.",
            },
            {
              title: "Variables, print(), and f-strings",
              timing: "Lab",
              content:
                "A variable is a name for a value. print() sends text to the cell output. f-strings let you insert values with curly braces. Work through notebook **section 4** (variables and the example print line).",
              code: {
                lang: "python",
                snippet: 'week = 1\ncourse = "CodeMoldova"\nprint(f"{course}, week {week}")',
              },
              task: "Run every cell in section 4 through the f-string example and confirm the printed line looks right.",
            },
            {
              title: "input() and mini practice",
              timing: "Lab",
              content:
                "input() reads one line of text and always gives you a string, even if the user types digits. In Cursor/Jupyter the prompt usually appears above the cell output—type your answer and press Enter. If nothing appears, ask a mentor (setups differ). Section 5 demos one name; section 6 asks you to write two input() calls and one f-string yourself.",
              code: {
                lang: "python",
                snippet: 'name = input("What is your name? ")\nprint(f"Hi, {name}")',
              },
              tips: ["Run section 5 before you edit the empty practice cell in section 6."],
              task: "Run the input() demo in section 5, then complete the mini-practice cell in section 6 (two inputs, one f-string using both).",
            },
            {
              title: "Main build · intro card (in the notebook)",
              timing: "Lab",
              content:
                "Finish section 7 in week1_intro.ipynb: three input() prompts (for example name, hobby, why you are here), several print lines, at least one f-string, and one line that mentions Thursday (build day). Replace the pass placeholder with your own code. A filled reference notebook is linked only to compare structure—write your own prompts and wording.",
              links: [{ label: "Reference notebook (filled example)", href: "/lesson/week1_intro_reference.ipynb" }],
              code: {
                lang: "python",
                snippet:
                  "# last code cell in week1_intro.ipynb — yours will differ\n# name = input(\"Name? \")\n# … two more input() calls …\n# print lines, at least one f-string, one line about Thursday",
              },
              tips: [
                "Optional: add a fourth input (for example hours you will practice) and show it in an f-string.",
                "Save the notebook often (Cmd/Ctrl+S).",
              ],
              task: "Run your intro card cell end-to-end once with no errors. Optional: show the output to a classmate or mentor.",
            },
          ],
          homework: {
            title: "More practice in the notebook",
            desc: "Same ideas as class: input(), print(), f-strings. Add new cells at the bottom of week1_intro.ipynb, or duplicate the file as week1_homework.ipynb. Post blockers in WhatsApp before Wednesday if you get stuck.",
            tasks: [
              "Three input() prompts: name, city, favorite hobby.",
              "Print at least two lines that use f-strings and include those values.",
              "Print which course week this is (week 1 is fine as a literal or variable).",
              "Optional: ask how many hours they will practice this week and print it in an f-string.",
            ],
          },
          postClass: {
            title: "Optional deep-dives",
            desc: "Extra context if you are curious. Not required for class.",
            links: [
              { label: "Crash Course Computer Science #1 (historical context)", href: "https://www.youtube.com/watch?v=O5nskjZ_GoI" },
              { label: "Traversy Media — command line crash course", href: "https://www.youtube.com/watch?v=uwAqEzhyjtw" },
              { label: "CS Dojo — Python variables for beginners", href: "https://www.youtube.com/watch?v=Z1Yd7upQsXY" },
              { label: "Jupyter Notebook documentation (how cells work)", href: "https://jupyter-notebook.readthedocs.io/en/stable/" },
            ],
          },
        },
        wed: {
          title: "Variables, types, and inputs",
          date: "May 13",
          goal:
            "Today you move from Monday’s print-and-input basics into a fuller picture of Python: you will store values in variables, branch with if/elif/else, use comparison operators in small calculations, repeat work with for and while loops, and wrap logic in a simple function so Thursday’s mini-builds feel reachable.",
          desc: "Workshop 2 follows the Day 2 slides (PDF or deck): review variables and strings, a short math activity, if / elif / else, comparison operators, for and while loops, then functions. The notebook week1_day2.ipynb uses the same order—run cells top to bottom in Cursor with the slides and lesson page open.",
          preview: "Survey → review → variables in math → branches → operators → loops → def functions—same arc as the deck.",
          slideDeck: {
            label: "Week 1 · Day 2 slide deck",
            url: "https://docs.google.com/presentation/d/1yhMMHBawqfEuJdYSNNhvMzTb67QzzTRc5J0q-Ij1TsE/edit?usp=sharing",
          },
          codeFromClassUrl: "https://forms.gle/g4t91p4uhowXa1CD6",
          codeFromClassLabel: "Take survey",
          labExampleUrl: "/lesson/week1_day2.ipynb",
          labExampleDownload: "week1_day2.ipynb",
          labExampleLabel: "Download Day 2 lab notebook (.ipynb)",
          steps: [
            {
              title: "Get to know you survey",
              content: "If you have not submitted the cohort survey yet, do it now so mentors can see who is in the room.",
              task: "Open the survey link from the lesson artifacts (or notebook §0), submit once, then return here.",
              links: [{ label: "Day 2 survey (Google Form)", href: "https://forms.gle/g4t91p4uhowXa1CD6" }],
            },
            {
              title: "Review: variables and strings",
              content: "Quick recall from Monday: a variable is a name for a value; a string is text in quotes. We will reuse print(), assignment, and input() all hour.",
              task: "In the notebook §1, run the review cell and change one string so the output uses your name.",
            },
            {
              title: "Programming activity — variables in math",
              content: "Create three variables, multiply two of them, store the result in a third, and print. Change the numbers and notice how the printed answer changes.",
              task: "Complete notebook §2: Num1, Num2, Answer = Num1 * Num2, then print Answer.",
              code: {
                lang: "python",
                snippet: "num1 = 4\nnum2 = 7\nanswer = num1 * num2\nprint(answer)",
              },
            },
            {
              title: "if / elif / else",
              content: "An if runs only when a condition is true; chain with elif and else. Slides use voting age as the demo; then we use Celsius thresholds: hot (>30), warm (15–30 inclusive), cold (<15).",
              task: "In notebook §3, finish the temperature program using those thresholds (float input).",
              code: {
                lang: "python",
                snippet: 'age = int(input("How old are you? "))\nif age >= 18:\n    print("You can vote!")\nelif age >= 16:\n    print("Almost there.")\nelse:\n    print("Not yet.")',
              },
            },
            {
              title: "Operators — compare and calculate",
              content: "Comparison operators == != < > <= >= let programs branch. Use two numeric variables: multiply, divide, and add them; print each result on its own line.",
              task: "Complete notebook §4: print the three results for your chosen pair of numbers.",
              code: { lang: "python", snippet: "print(10 == 10)\nprint(10 != 5)\nprint(7 > 3)\nprint(5 >= 5)" },
            },
            {
              title: "for and while loops",
              content: "A for loop repeats a known number of times—range(5) gives 0..4. A while loop repeats until its condition becomes false; update something inside the loop so it can end.",
              task: "Notebook §5: run the for/range demo, run the while counter demo, then write a while loop that keeps asking for a secret word until the user types it correctly.",
              code: {
                lang: "python",
                snippet: "count = 0\nwhile count < 5:\n    print(\"count is\", count)\n    count += 1",
              },
            },
            {
              title: "Functions — define once, call many times",
              content: "def names a block of code you can call with arguments. Slides use greet(name); you will write double(n) that prints twice the number and test it several times.",
              task: "Finish notebook §6: implement double(n) and call it with five different inputs.",
              code: {
                lang: "python",
                snippet: 'def greet(name):\n    print("Hello,", name + "!")\n\ngreet("Ana")\ngreet("Ion")',
              },
            },
          ],
          homework: {
            title: "Homework — finish in this notebook",
            desc: "Work in section 7 at the bottom of week1_day2.ipynb (add your code in the cells labeled H1–H4). Due before Thursday’s build so you can reuse loops and input() on the projects. Post a screenshot or question in WhatsApp if something never runs.",
            tasks: [
              "Temperature: Ask for one °C value (float). Print exactly one label: hot if > 30, warm if 15–30 (inclusive), cold if < 15. Under your code, add three comment lines showing tests you ran (example: # 10 → cold).",
              "Two numbers: Store two values in variables. Print three labeled lines: product (multiply), quotient (divide), and sum. Pick numbers so you never divide by zero.",
              "Secret word: Set a secret string. Use a while loop and input() until the user types that exact word, then print one short win message.",
              "double(n): Define a function that prints double the number. Call double(...) five times with five different numbers.",
            ],
          },
          postClass: {
            title: "Homework answer key",
            desc: "Filled solutions for H1–H4 (one correct style among many). For students: use only after you have tried the homework or to unstick. For mentors: quick reference when helping in the room.",
            links: [
              { label: "Download answer key notebook (.ipynb)", href: "/lesson/week1_day2_homework_key.ipynb" },
            ],
          },
        },
        thu: {
          title: "Mad Libs + number guessing",
          date: "May 14",
          desc: "Build day: two small Python programs that use input(), print(), conditionals, and loops. Ship both\u2014rough edges are fine if they run end-to-end.",
          preview: "Story generator with blanks, then a looped guessing game with hints.",
          steps: [
            {
              title: "Plan both mini-builds",
              content: "Mad libs: list every blank before you code. Guessing game: pick bounds (1–20 is friendly) and decide hot/cold hints or simple “higher/lower”.",
              task: "Sketch both flows on paper in under five minutes.",
            },
            {
              title: "Mad lib: collect words",
              content: "Use clear prompts and variable names. Keep the story in one f-string or build it in parts.",
              task: "Implement the mad lib with at least five inputs and one printed story.",
              code: { lang: "python", snippet: "adj = input(\"Adjective: \")\nplace = input(\"Place: \")\nprint(f\"The {adj} bus stopped in {place}.\")" },
            },
            {
              title: "Number guessing core",
              content: "Use random.randint. Loop until correct. Convert input with int() and guard bad input with try/except if you have time.",
              task: "Working game: secret number, repeated guesses, prints “too high” / “too low” / “you win”.",
              code: { lang: "python", snippet: "import random\nn = random.randint(1, 20)\n# loop: guess = int(input(...)) compare to n" },
            },
            {
              title: "Polish + demo",
              content: "Add a friendly intro line, limit guess count, or a play-again loop on the game. Run both scripts from Cursor’s terminal: python3 madlib.py.",
              task: "Run each program twice with different inputs; fix anything that crashes.",
            },
          ],
          homework: {
            title: "Ship both builds",
            desc: "Save files in your week1 folder and zip or push later when we learn Git.",
            tasks: [
              "Mad lib prints a multi-sentence story.",
              "Guessing game uses a loop and ends on the correct answer.",
              "Optional: combine into one menu script that asks which game to play.",
            ],
          },
          challenges: {
            base: {
              title: "Mad lib + guessing baseline",
              desc: "Two working scripts or two sections in one file.",
              steps: [
                "Five inputs minimum for the mad lib",
                "Guessing game with random number and high/low feedback",
                "Both runnable with python3 filename.py",
              ],
            },
            medium: {
              title: "Loops and replay",
              desc: "Let the player go again without restarting the interpreter.",
              steps: [
                "After each mad lib story, ask \"Another story? (y/n)\"",
                "Limit guesses to seven; print a loss message if they run out",
                "Track number of guesses and print it on win",
              ],
            },
            hard: {
              title: "Tighter UX",
              desc: "Handle bad input and add difficulty levels.",
              steps: [
                "try/except around int(input()) so letters do not crash the game",
                "Let the player pick easy (1–10) or hard (1–100) ranges before play",
                "Optional: timed rounds with input still blocking (stretch)",
              ],
            },
            bonus: "Add simple scorekeeping across multiple rounds in a list, then print average guesses at the end.",
          },
        },
      },
      {
        num: 2,
        mon: {
          title: "Data structures",
          date: "May 18",
          desc: "Lists, tuples, and dictionaries are how programs hold real-world information. Workshop 1 focuses on choosing the right shape, mutating safely, and iterating cleanly in Cursor.",
          preview: "Practice indexing, slicing, dict keys, and short data transforms without classes yet.",
          steps: [
            {
              title: "Lists: order matters",
              content: "Lists are mutable sequences—append, pop, insert, sort. Negative indexes count from the end.",
              task: "Build a list of five classmates’ first names (fictional is fine). Print the first, last, and a slice of the middle three.",
              code: { lang: "python", snippet: "nums = [3, 1, 4]\nnums.append(1)\nprint(nums[-1])" },
            },
            {
              title: "Tuples for fixed bundles",
              content: "Tuples are lightweight records—use when length and meaning are stable (x, y) or (name, score).",
              task: "Create three coordinate tuples and print their sum of y values.",
            },
            {
              title: "Dictionaries map keys to values",
              content: "Dicts answer “look up by name”. Keys are usually strings; values can be anything including lists.",
              task: "Model one student as a dict with keys name, city, hobbies (list). Print a sentence using .get for optional keys.",
              code: { lang: "python", snippet: "student = {\"name\": \"Alex\", \"hobbies\": [\"music\", \"code\"]}\nprint(student[\"name\"])" },
            },
            {
              title: "Nesting and CSV-shaped data",
              content: "A list of dicts is your first table. Practice looping rows and summing one numeric field.",
              task: "Given a list of dicts with keys item and price (float), compute total price with a for loop.",
            },
            {
              title: "Comprehensions (preview)",
              content: "List comprehensions keep transforms readable when they stay short.",
              task: "Rewrite one of your loops as a comprehension that builds a new list of uppercase names.",
              code: { lang: "python", snippet: "names = [\"ana\", \"ion\"]\nupper = [n.upper() for n in names]\nprint(upper)" },
            },
          ],
          homework: {
            title: "Structure drills",
            desc: "Notebook or .py in Cursor; commit optional until Git week.",
            tasks: [
              "From a list of numbers, build a new list of only numbers greater than zero.",
              "Count how many times a given letter appears in a string using a dict tally.",
              "Optional: sort a list of dicts by a numeric field using sorted(..., key=lambda r: r['score']).",
            ],
          },
        },
        wed: {
          title: "APIs & the internet",
          date: "May 20",
          desc: "Workshop 2: what happens when you call a URL, what JSON looks like, and how to fetch live data from Python with the requests library in a controlled notebook cell.",
          preview: "HTTP verbs at a glance, status codes, reading JSON, and your first GET request.",
          steps: [
            {
              title: "URLs, servers, responses",
              content: "Browser and code both ask a server for a resource. Status 200 means OK; 404 means missing. JSON is text shaped like JavaScript objects—Python loads it with response.json().",
              task: "Open a public JSON API in the browser (pretty-print if your browser supports it). Identify top-level keys.",
              links: [
                { label: "MDN \u2014 An overview of HTTP", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
              ],
            },
            {
              title: "Install requests in your environment",
              content: "In Cursor terminal: python3 -m pip install requests (or use the same environment your notebook kernel uses).",
              task: "Verify import requests runs without error in a notebook cell.",
            },
            {
              title: "GET a public dataset",
              content: "Pick a simple no-key API such as https://api.github.com/users/octocat or a small open JSON feed your mentor approves.",
              task: "Print the status code, content-type header, and one field from the parsed JSON.",
              code: { lang: "python", snippet: "import requests\nr = requests.get(\"https://api.github.com/users/octocat\", timeout=10)\nprint(r.status_code)\nprint(r.json().get(\"login\"))" },
            },
            {
              title: "Parameters and safety",
              content: "Query strings carry filters. Always set a timeout= on requests. Never paste private tokens into class demos.",
              task: "Call the same API with two different usernames in a loop; collect logins in a list.",
            },
            {
              title: "When APIs fail",
              content: "Network blips and rate limits happen. Check status_code before parsing; wrap calls in try/except for robust scripts.",
              task: "Force a bad URL and print a clean error message instead of a traceback.",
            },
          ],
          homework: {
            title: "Fetch + reflect",
            desc: "Short write-up in comments at the bottom of your notebook.",
            tasks: [
              "Screenshot or paste one JSON response snippet with a comment explaining two keys.",
              "Write a function fetch_profile(username) -> dict that returns .json() or None on failure.",
              "Optional: cache results to a local data/ folder as pretty-printed JSON.",
            ],
          },
        },
        thu: {
          title: "Fetch, store, display",
          date: "May 21",
          desc: "Build day: pull live JSON, save it locally, and show a simple text summary\u2014still Python, still Cursor. This mirrors how real scripts snapshot data before dashboards exist.",
          preview: "requests + json module + pathlib for folders; print a human-readable table in the terminal.",
          steps: [
            {
              title: "Pick an API and fields",
              content: "Choose three fields you care about (for example login, id, public_repos). Confirm you may call it from class networks.",
              task: "List the fields you will extract on paper.",
            },
            {
              title: "Write fetch_to_disk.py",
              content: "Save raw JSON to data/snapshot.json using pathlib.Path.mkdir(exist_ok=True). Pretty-print with json.dump(..., indent=2).",
              task: "Running the script twice overwrites or versions the file—your choice, but document it in a comment.",
              code: { lang: "python", snippet: "from pathlib import Path\nimport json, requests\nPath(\"data\").mkdir(exist_ok=True)\ndata = requests.get(\"...\", timeout=10).json()\nPath(\"data/snapshot.json\").write_text(json.dumps(data, indent=2))" },
            },
            {
              title: "Display without a GUI",
              content: "Print aligned columns using f-strings with widths, or print bullet lines. Goal: a classmate understands the snapshot in five seconds.",
              task: "Script prints at least three labeled values derived from the JSON.",
            },
            {
              title: "Error handling path",
              content: "If the request fails, write an error.json with the status code and timestamp instead of crashing.",
              task: "Demonstrate both success and forced-failure runs to a mentor.",
            },
          ],
          homework: {
            title: "Data snapshot",
            desc: "Submit a link or file path in class comms as instructed.",
            tasks: [
              "Repo folder contains data/snapshot.json generated by your script",
              "README comment block at top of file listing API URL and fields",
              "Optional: small chart using text bars (counts of # characters)",
            ],
          },
          challenges: {
            base: {
              title: "Fetch and print",
              desc: "Working script + saved JSON.",
              steps: [
                "GET request with timeout",
                "Write JSON to disk",
                "Print a three-line human summary",
              ],
            },
            medium: {
              title: "Multiple records",
              desc: "Handle a list endpoint.",
              steps: [
                "If the API returns a list, save first five items",
                "Print a numbered list of one field from each item",
                "Sort items by a numeric field before printing",
              ],
            },
            hard: {
              title: "CLI args",
              desc: "Make the script reusable.",
              steps: [
                "Accept API URL or username as sys.argv[1]",
                "Validate input and print usage if missing",
                "Keep json path configurable via second argv",
              ],
            },
            bonus: "Add a --compare flag that loads yesterday\u2019s snapshot if present and prints what changed.",
          },
        },
      },
      {
        num: 3,
        mon: {
          title: "Functions",
          date: "May 25",
          desc: "Workshop 1: break programs into named, testable pieces. Parameters, return values, default arguments, and docstrings you can read six months later.",
          preview: "Write small pure functions, call them from notebooks, and avoid global state where possible.",
          steps: [
            {
              title: "def basics",
              content: "Define once, call many times. Parameters are inputs; return sends a value back to the caller.",
              task: "Write area_rect(width, height) -> float and call it from three tests in __main__.",
              code: { lang: "python", snippet: "def double(x):\n    return x * 2\nprint(double(4))" },
            },
            {
              title: "Defaults and keyword args",
              content: "Defaults make APIs friendlier; call with greet(name, excited=False).",
              task: "Add a separator parameter to a print_stats function with default \" | \".",
            },
            {
              title: "Scope",
              content: "Variables created inside a function stay inside unless returned or declared global (avoid global in homework).",
              task: "Predict output of nested functions exercise from the board, then run it in Cursor.",
            },
            {
              title: "Docstrings",
              content: "Triple-quoted string right under def explains purpose, parameters, and return in one glance.",
              task: "Add a one-line docstring to every function you write today.",
            },
            {
              title: "Composition",
              content: "Big programs are small functions wired together. Pass results of one function into another.",
              task: "Implement total_with_tax(subtotal, rate) using a helper round_money(value).",
            },
          ],
          homework: {
            title: "Function practice",
            desc: "Create week3_functions.ipynb or functions_lab.py.",
            tasks: [
              "Three related functions for a tiny grade calculator (average, letter_grade).",
              "Include two assert-style checks using plain if/raise or assert in a __main__ block.",
              "Optional: type hints def add(a: int, b: int) -> int:",
            ],
          },
        },
        wed: {
          title: "Error handling + debugging",
          date: "May 27",
          desc: "Workshop 2: read tracebacks, use try/except intentionally, log assumptions, and debug in Cursor with breakpoints and the Debug Console where available.",
          preview: "Make failures loud and localized instead of silent and mysterious.",
          steps: [
            {
              title: "Anatomy of a traceback",
              content: "Bottom line is the exception type and message; upward frames show the call path. Teach your eyes to jump to your files first.",
              task: "Break a small script on purpose and circle the frame that points to your code.",
            },
            {
              title: "try / except / else / finally",
              content: "Catch specific exceptions (ValueError, KeyError) before broad Exception. Use finally for cleanup when you learn files next week.",
              task: "Wrap int(input()) so non-numeric input prints a friendly message and re-prompts.",
              code: { lang: "python", snippet: "try:\n    x = int(input(\"Number: \"))\nexcept ValueError:\n    print(\"That was not an integer.\")" },
            },
            {
              title: "raise with clear messages",
              content: "When an assumption fails, stop early with context: raise ValueError(\"age must be positive\").",
              task: "Write validate_email(s) that raises if there is no @.",
            },
            {
              title: "print debugging vs logging mindset",
              content: "Strategic prints (with labels) still win for short labs. Note what variable changed between lines.",
              task: "Add three labeled debug prints to a loop that was wrong; remove them after fix.",
            },
            {
              title: "Cursor tips",
              content: "Set a breakpoint on a line, run with debugger, inspect locals. If the UI differs by OS, pair with a mentor.",
              task: "Step through one function call and narrate locals for a partner.",
            },
          ],
          homework: {
            title: "Harden a script",
            desc: "Take Tuesday’s fetch script or any class script and make it fail gracefully.",
            tasks: [
              "Replace one bare except with a specific type",
              "Add a helper safe_int(s, default) with try/except",
              "Optional: collect errors into a list and print a summary at the end",
            ],
          },
        },
        thu: {
          title: "Reusable CLI tool",
          date: "May 28",
          desc: "Build day: package the habits from the last three weeks into a small command-line utility with argparse (preferred) or sys.argv if argparse feels heavy.",
          preview: "Clear help text, subcommands or flags, and clean exits (sys.exit codes).",
          steps: [
            {
              title: "Pick a useful micro-tool",
              content: "Ideas: unit converter, password-like generator, JSON pretty-printer for a file path, or quiz flashcards from a CSV.",
              task: "Write the help string you want users to see before you code bodies.",
            },
            {
              title: "Skeleton with argparse",
              content: "parser = argparse.ArgumentParser(description=...); add arguments; args = parser.parse_args().",
              task: "Running python3 tool.py --help shows your description and flags.",
              code: { lang: "python", snippet: "import argparse\np = argparse.ArgumentParser(description=\"Demo CLI\")\np.add_argument(\"--name\", default=\"world\")\nargs = p.parse_args()\nprint(f\"Hello, {args.name}\")" },
            },
            {
              title: "Implement core logic as functions",
              content: "Keep if __name__ == \"__main__\": thin—parse args, call run(args).",
              task: "Main imports only stdlib unless you cleared extras with a mentor.",
            },
            {
              title: "Exit codes",
              content: "Return 0 on success; nonzero on validation failure so future you can chain scripts.",
              task: "Demonstrate success and failure exits from the terminal.",
            },
          ],
          homework: {
            title: "Polish the tool",
            desc: "README stub in the same folder: what it does, examples, limitations.",
            tasks: [
              "At least two flags or positional args",
              "Docstring on every public function",
              "Optional: --version flag printing a string constant",
            ],
          },
          challenges: {
            base: {
              title: "Working CLI",
              desc: "argparse + functions + friendly errors.",
              steps: [
                "python3 tool.py --help works",
                "Happy path completes with printed result",
                "Bad input prints usage, not traceback",
              ],
            },
            medium: {
              title: "File mode",
              desc: "Read input from a file path argument.",
              steps: [
                "Add --input path.txt",
                "Handle missing file with clear message",
                "Write output to stdout or optional --out",
              ],
            },
            hard: {
              title: "Subcommands",
              desc: "Use subparsers for two related tools in one file.",
              steps: [
                "python3 tool.py fmt ...",
                "python3 tool.py stats ...",
                "Shared helpers in functions",
              ],
            },
            bonus: "Publish the folder structure you will later push to GitHub (src/, tests/ empty for now).",
          },
        },
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    color: "#4f7cff",
    weeks: [
      {
        num: 4,
        mon: {
          title: "HTML & CSS",
          date: "Jun 1",
          desc: "Workshop 1: structure with semantic HTML, style with CSS, and preview locally from Cursor\u2019s file tree or Live Server if you use the extension.",
          preview: "Build a single-page profile skeleton with headings, lists, links, and a linked stylesheet.",
          steps: [
            {
              title: "HTML document outline",
              content: "doctype, html, head, body, meta charset, title, viewport meta for phones.",
              task: "Create index.html with header, main, footer landmarks.",
              links: [
                { label: "MDN \u2014 HTML basics", href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" },
              ],
            },
            {
              title: "Common tags",
              content: "p, a, ul/li, img with alt text, button (for later JS).",
              task: "Add a nav with three anchor links to sections on the same page (#about).",
            },
            {
              title: "CSS file link",
              content: "styles.css beside index.html; reset margins lightly; set font-family and background colors matching your taste while staying readable.",
              task: "Change link colors for :hover and :focus-visible for accessibility.",
            },
            {
              title: "Box model",
              content: "margin, border, padding, width/max-width. Center content with margin: 0 auto and max-width.",
              task: "Make the layout readable at 375px width using relative units (rem, %).",
            },
            {
              title: "DevTools peek",
              content: "Inspect element in the browser: see computed styles, toggle classes, experiment—then copy working CSS back to your file.",
              task: "Fix one spacing bug using DevTools before leaving class.",
            },
          ],
          homework: {
            title: "Mark up your story",
            desc: "Personal facts can be fictional for privacy.",
            tasks: [
              "Semantic sections for about, projects, contact",
              "External stylesheet with at least five rulesets",
              "One responsive tweak (stack columns under 600px using flex or grid)",
            ],
          },
        },
        wed: {
          title: "Layouts, styling, Figma",
          date: "Jun 3",
          desc: "Workshop 2: flexbox and grid for real layouts, spacing rhythm, and a Figma pass\u2014export a simple frame to match colors and type scales (free tier is fine).",
          preview: "Translate a tiny design spec into CSS variables and reusable classes.",
          steps: [
            {
              title: "Flex vs grid decision",
              content: "Flex for one-dimensional rows/columns; grid for two-dimensional dashboards and card galleries.",
              task: "Build a 3-card feature row that wraps on small screens.",
            },
            {
              title: "CSS variables",
              content: "Define :root { --ink: #0d0f14; --accent: #4f7cff; } and reuse.",
              task: "Refactor three repeated colors into variables.",
            },
            {
              title: "Figma basics",
              content: "Frames, auto-layout, text styles. Export CSS for colors or copy hex into your variables table.",
              task: "Recreate one hero block from a mentor-provided starter file or your own wireframe.",
              links: [
                { label: "Figma Learn", href: "https://help.figma.com/hc/en-us/categories/360002051613" },
              ],
            },
            {
              title: "Typography scale",
              content: "Pick a modular scale (1.125 or 1.2) for h1–p; line-height 1.4–1.6 for body.",
              task: "Apply consistent heading sizes across sections.",
            },
            {
              title: "Polish passes",
              content: "Focus states, contrast check, image sizing object-fit: cover where needed.",
              task: "Run a quick Lighthouse accessibility pass on the local file if available.",
            },
          ],
          homework: {
            title: "Design-to-CSS",
            desc: "Screenshot your Figma frame next to your page in the README notes.",
            tasks: [
              "Match three tokens (color or font-size) between Figma and CSS variables",
              "Grid or flex layout for the projects section",
              "Optional: dark theme toggle using a class on body",
            ],
          },
        },
        thu: {
          title: "Personal webpage goes live",
          date: "Jun 4",
          desc: "Build day: ship the page from Monday/Wednesday. We will use GitHub Pages or Vercel later for DNS-friendly URLs\u2014for today, get static files online with the workflow your mentor demos.",
          preview: "index.html + styles (+ optional images/) in a public repo.",
          steps: [
            {
              title: "Asset check",
              content: "Compress large images, verify alt text, fix broken relative paths (./styles.css).",
              task: "Open the site via file:// then note what breaks when moved to hosting.",
            },
            {
              title: "GitHub repo (preview)",
              content: "Create github.com/yourname/codemoldova-site with README describing the page. Full Git mechanics come week 6—follow the live demo closely.",
              task: "Remote main contains index.html at repo root or /docs as instructed.",
            },
            {
              title: "Enable hosting",
              content: "GitHub Pages from main / root or Vercel static import—pick one path the room uses together.",
              task: "Share the HTTPS URL in the class thread.",
            },
            {
              title: "Smoke test on phone",
              content: "Real devices catch tap targets and font sizes desktops hide.",
              task: "Fix at least one mobile issue you notice.",
            },
          ],
          homework: {
            title: "Live URL checklist",
            desc: "Post URL + one sentence on what you still want to improve.",
            tasks: [
              "Public HTTPS link loads under 5 seconds on LTE",
              "Contact section has a working mailto: or link",
              "Optional: custom favicon",
            ],
          },
          challenges: {
            base: {
              title: "Deployed static page",
              desc: "Hosted index.html + css.",
              steps: [
                "Repo link shared",
                "Page matches local design within reason",
                "No broken images",
              ],
            },
            medium: {
              title: "Projects section",
              desc: "Three cards with links to GitHub or placeholders.",
              steps: [
                "Card grid responsive",
                "Each card has title, blurb, link",
                "Hover states",
              ],
            },
            hard: {
              title: "Custom domain later",
              desc: "Document steps even if DNS waits.",
              steps: [
                "README section: how to point a domain (outline)",
                "Enforce HTTPS if host allows",
                "Optional: add analytics snippet comment-only for now",
              ],
            },
            bonus: "Add a tiny dark-mode default aligned with CodeMoldova site colors from class.",
          },
        },
      },
      {
        num: 5,
        mon: {
          title: "JavaScript basics",
          date: "Jun 8",
          desc: "Workshop 1: scripts in the browser\u2014variables, functions, arrays, template strings, and fetch revisiting your API week from Python\u2019s perspective.",
          preview: "Attach a main.js bundle (or single file) and keep console.log as your first debugger.",
          steps: [
            {
              title: "let and const",
              content: "Prefer const by default; let when reassigned. Avoid var in new code.",
              task: "Refactor a snippet from var to const/let and explain why each choice.",
            },
            {
              title: "Functions and arrows",
              content: "function name() {} vs const name = () => {} — pick one style per file for consistency.",
              task: "Write sum(nums) using reduce or a for loop.",
            },
            {
              title: "DOM access without frameworks",
              content: "document.querySelector, textContent, classList.add.",
              task: "Change a headline string from JS after load.",
            },
            {
              title: "fetch in the browser",
              content: "await fetch(url); check response.ok; await response.json().",
              task: "Log one field from a public JSON endpoint to the console.",
              code: { lang: "javascript", snippet: "const r = await fetch('https://api.github.com/users/github');\nconsole.log((await r.json()).login);" },
            },
            {
              title: "Modules optional",
              content: "If time: type=\"module\" script tag and export/import between files.",
              task: "Split utils into math.js imported by main.js.",
            },
          ],
          homework: {
            title: "JS warm-up",
            desc: "Extend your personal page or a fresh sandbox/ folder.",
            tasks: [
              "Button that increments a counter on each click",
              "Function formatDate(d) returning a short string",
              "Optional: fetch GitHub avatar URL into an <img>",
            ],
          },
        },
        wed: {
          title: "DOM manipulation + events",
          date: "Jun 10",
          desc: "Workshop 2: listen for clicks, inputs, and keyboard; update the DOM safely; debounce a noisy handler lightly if you reach it.",
          preview: "Event listeners, event objects, preventDefault, and basic form handling.",
          steps: [
            {
              title: "addEventListener pattern",
              content: "Select node, attach listener, keep handler functions named for stack traces.",
              task: "Wire three buttons to three different handlers logging which fired.",
            },
            {
              title: "Forms",
              content: "submit event, FormData, reading values without reloading if you preventDefault.",
              task: "Build a fake signup form that prints a greeting under the form.",
            },
            {
              title: "Creating nodes",
              content: "document.createElement, appendChild, DocumentFragment for batches.",
              task: "Build a todo list UI that only uses DOM APIs (no persistence yet).",
            },
            {
              title: "Accessibility",
              content: "Focus management, aria-live for dynamic text, label for inputs.",
              task: "Navigate your UI with keyboard only; fix the first blocker you find.",
            },
            {
              title: "Debug in DevTools",
              content: "Breakpoints in Sources, watch expressions, console.table for arrays.",
              task: "Fix an off-by-one bug in a list renderer using a breakpoint.",
            },
          ],
          homework: {
            title: "Event practice",
            desc: "Keep code in script.js linked from your page.",
            tasks: [
              "Toggle dark mode class on body with a button",
              "Input range updates a live label",
              "Optional: localStorage saves theme choice",
            ],
          },
        },
        thu: {
          title: "Interactive web app",
          date: "Jun 11",
          desc: "Build day: one cohesive mini-app\u2014quiz, habit tracker, or flashcards\u2014using only HTML/CSS/JS taught so far.",
          preview: "State in memory, clear UI states, and a reset control.",
          steps: [
            {
              title: "Define MVP",
              content: "One screen, three interactions, win/lose or completion feedback.",
              task: "Write acceptance criteria in README.",
            },
            {
              title: "Structure state",
              content: "Single object or small module holding arrays and current index.",
              task: "Console.log state after each action until stable.",
            },
            {
              title: "Wire UI",
              content: "Buttons call handlers that mutate state then re-render a section.",
              task: "No full page reloads.",
            },
            {
              title: "Polish",
              content: "Loading copy, disabled buttons when illegal, simple animations via CSS transitions.",
              task: "Demo on mobile and desktop.",
            },
          ],
          homework: {
            title: "Ship the app",
            desc: "Deploy alongside your static site or as /app path.",
            tasks: [
              "Public URL works",
              "README lists controls and known bugs",
              "Optional: persist scores with localStorage",
            ],
          },
          challenges: {
            base: {
              title: "Playable MVP",
              desc: "Three interactions and feedback.",
              steps: [
                "Rules explained on page",
                "Win/lose path",
                "Reset",
              ],
            },
            medium: {
              title: "Timer or streak",
              desc: "Add time pressure or scoring.",
              steps: [
                "Countdown or stopwatch",
                "Score label",
                "Game over modal",
              ],
            },
            hard: {
              title: "Data-driven content",
              desc: "Load questions from a static JSON file with fetch.",
              steps: [
                "questions.json in repo",
                "Handles load errors",
                "Shuffle option",
              ],
            },
            bonus: "Animate correct/incorrect answers with CSS keyframes.",
          },
        },
      },
    ],
  },
  {
    id: 3,
    title: "Backend + Shipping",
    color: "#0b8f4f",
    weeks: [
      {
        num: 6,
        mon: {
          title: "Git & GitHub",
          date: "Jun 15",
          desc: "Workshop 1: version control vocabulary\u2014repo, commit, branch, remote, push, pull\u2014and the GitHub flow used in class: authenticate, clone, commit, push.",
          preview: "Cursor\u2019s Source Control UI plus terminal commands as backup.",
          steps: [
            {
              title: "Why Git",
              content: "Snapshots, diffs, blame, collaboration. Your future self thanks you.",
              task: "Initialize or clone: pick the path your machine is on.",
            },
            {
              title: "Core commands",
              content: "git status, add, commit -m, push, pull. Understand what each does to the three trees.",
              task: "Make two commits with clear messages on a practice readme.",
              links: [
                { label: "GitHub Git docs", href: "https://docs.github.com/en/get-started/using-git" },
                { label: "Oh Sh, Git!?", href: "https://ohshitgit.com/" },
              ],
            },
            {
              title: ".gitignore",
              content: "Ignore node_modules, .env, OS junk. Never commit secrets.",
              task: "Add a .gitignore that skips .DS_Store and any API key file pattern your mentor provides.",
            },
            {
              title: "Branches (intro)",
              content: "Create feature branch, merge via PR in GitHub UI if available.",
              task: "Open a PR that only changes README.",
            },
            {
              title: "Recover from mistakes",
              content: "git checkout -- file before commit; git restore in modern Git; never force-push main in class.",
              task: "Practice discarding an uncommitted change safely.",
            },
          ],
          homework: {
            title: "Git hygiene",
            desc: "Bring a laptop with Git installed or use Cursor bundled tools per setup docs.",
            tasks: [
              "Fork or create fresh repo codemoldova-2026-<yourname>",
              "Three meaningful commits on different days or topics",
              "Optional: enable branch protection rules (read-only exercise)",
            ],
          },
        },
        wed: {
          title: "Deployment + hosting",
          date: "Jun 17",
          desc: "Workshop 2: static hosting on Vercel from GitHub, environment previews, and what \u201cbuild command\u201d means when we only have static files.",
          preview: "Connect repo, pick root, verify HTTPS, roll back a bad deploy.",
          steps: [
            {
              title: "Vercel import",
              content: "Import Git repository, confirm framework preset (Other) for static, deploy.",
              task: "Share preview URL from dashboard.",
              links: [
                { label: "Vercel docs", href: "https://vercel.com/docs" },
              ],
            },
            {
              title: "Production vs preview",
              content: "Every branch/PR can get previews; production tracks main.",
              task: "Open a preview from an experimental branch if permitted.",
            },
            {
              title: "Caching gotchas",
              content: "Hard refresh, cache headers for assets. Rename files with hash later in career.",
              task: "Verify CSS updates appear after deploy without local-only tricks.",
            },
            {
              title: "Custom domains (overview)",
              content: "DNS A/CNAME records at registrar—capture steps even if you stay on vercel.app this week.",
              task: "Document domain steps in README for future you.",
            },
            {
              title: "Rollback",
              content: "Redeploy previous working deployment from the UI.",
              task: "Simulate a broken index.html and roll back in class.",
            },
          ],
          homework: {
            title: "Hosting notes",
            desc: "Screenshot your Vercel project settings (redact tokens).",
            tasks: [
              "Production URL linked in repo About",
              "README badge or link row: Live demo",
              "Optional: enable Vercel analytics (free tier)",
            ],
          },
        },
        thu: {
          title: "Push a project live with Git",
          date: "Jun 18",
          desc: "Build day: take any shipped artifact (site, JS app, Python CLI) and run the full loop: clean repo, meaningful commits, push, verify hosted output matches local.",
          preview: "If the host only serves static files, package the web pieces; for Python-only projects, publish docs + screenshot in README and host the HTML/JS pieces if any.",
          steps: [
            {
              title: "Choose artifact",
              content: "Pick one project you are proud of from weeks 4–5 or polish the CLI README with usage GIF/text.",
              task: "Confirm license and no secrets in history.",
            },
            {
              title: "Repo hygiene",
              content: "README: title, screenshot, setup, deploy link, known issues.",
              task: "Add MIT or course-default license if required.",
            },
            {
              title: "CI optional",
              content: "GitHub Actions hello world is optional stretch—focus on clean push.",
              task: "git push origin main and watch Vercel/GitHub Pages build succeed.",
            },
            {
              title: "Verify",
              content: "Open incognito window, throttle network, confirm assets load.",
              task: "Post final URL to the class thread.",
            },
          ],
          homework: {
            title: "Release checklist",
            desc: "Treat this like a tiny launch.",
            tasks: [
              "Live URL + repo URL in one message",
              "At least five commits across the project lifetime or today if new",
              "Optional: tag v1.0.0",
            ],
          },
          challenges: {
            base: {
              title: "Green deploy",
              desc: "Main branch hosts latest static build.",
              steps: [
                "Clean build",
                "README link works",
                "No console errors on load",
              ],
            },
            medium: {
              title: "Branch preview",
              desc: "Use a PR to change copy and merge after review.",
              steps: [
                "Feature branch",
                "Preview URL shared",
                "Merged to main",
              ],
            },
            hard: {
              title: "404 page",
              desc: "Custom 404.html for static hosts.",
              steps: [
                "Friendly message",
                "Link home",
                "Styled consistently",
              ],
            },
            bonus: "Add a simple robots.txt and sitemap.xml stub for learning.",
          },
        },
      },
      {
        num: 7,
        mon: {
          title: "Databases + backend basics",
          date: "Jun 22",
          desc: "Workshop 1: why persistent storage beats files; tables/rows; intro to Supabase (hosted Postgres) or SQLite for offline demos\u2014follow whichever stack mentors standardize on.",
          preview: "Create a table, insert rows, select with filters from the dashboard or a tiny script.",
          steps: [
            {
              title: "Why a database",
              content: "Concurrent writes, querying, relationships. Contrast with JSON snapshots from week 2.",
              task: "List two features you gain over flat files.",
            },
            {
              title: "SQL shape",
              content: "SELECT, INSERT, WHERE, LIMIT. Primary keys and timestamps.",
              task: "Run three example queries in the SQL editor provided.",
            },
            {
              title: "Supabase project",
              content: "New project, copy anon key carefully (public by design—still no secrets in client for privileged ops). Row Level Security awareness lecture-only.",
              task: "Create students table with name text and created_at default now().",
              links: [
                { label: "Supabase docs", href: "https://supabase.com/docs" },
              ],
            },
            {
              title: "Python or JS client (pick one)",
              content: "Insert and read one row using the official client from a notebook cell or script.",
              task: "Print latest three rows ordered by created_at desc.",
            },
            {
              title: "Migrations mindset",
              content: "Schema changes are versioned in real teams—for class, note manual ALTER examples only.",
              task: "Write ALTER TABLE add column favorite_tool text; in notes (do not run destructive drops).",
            },
          ],
          homework: {
            title: "Schema sketch",
            desc: "Diagram primary keys for two related tables on paper.",
            tasks: [
              "Create five seed rows",
              "Write SELECT returning filtered subset",
              "Optional: foreign key explanation in README",
            ],
          },
        },
        wed: {
          title: "Connecting frontend to backend",
          date: "Jun 24",
          desc: "Workshop 2: read-only client fetch from the browser to a public endpoint; understand CORS; never expose service-role keys in frontend bundles.",
          preview: "Wire a minimal page listing rows from Supabase REST or a tiny serverless function if mentors provide one.",
          steps: [
            {
              title: "CORS story",
              content: "Browsers block cross-origin reads unless headers allow. Supabase handles for its domain when configured.",
              task: "Observe a CORS error in DevTools when misconfigured on purpose in a demo branch.",
            },
            {
              title: "Anon key usage",
              content: "Public anon key in frontend is normal; policies must limit damage—today read-only policies only.",
              task: "Fetch JSON and render <ul> of names.",
            },
            {
              title: "Loading and empty states",
              content: "Spinner text, error banner, empty list message.",
              task: "Implement three UI states: loading, error, data.",
            },
            {
              title: "Env separation",
              content: "Use Vercel environment variables for URLs/keys where applicable; .env.local gitignored for dev.",
              task: "Document required env vars in README.",
            },
            {
              title: "Security chat",
              content: "Service role key stays server-only; SQL injection sketch at high level.",
              task: "List one rule you will follow on final projects.",
            },
          ],
          homework: {
            title: "Integration homework",
            desc: "Keep dataset tiny and respectful of rate limits.",
            tasks: [
              "Page loads rows on open",
              "Refresh button re-fetches",
              "Optional: search box filters client-side",
            ],
          },
        },
        thu: {
          title: "Final project day 1",
          date: "Jun 25",
          desc: "Build day: propose scope, spike riskiest unknown (auth, API, layout), set milestones for week 8.",
          preview: "Exit with a repo, README charter, and one merged vertical slice.",
          steps: [
            {
              title: "Pitch in 60 seconds",
              content: "Problem, user, tech stack, demo hook.",
              task: "Write the pitch bullets at top of README.",
            },
            {
              title: "Scope guardrails",
              content: "One primary user story done well beats five half-done. Pick Python, web, or hybrid aligned to your strengths.",
              task: "Define v1 done and out-of-scope list.",
            },
            {
              title: "Vertical slice",
              content: "End-to-end path: UI or CLI → data → visible result.",
              task: "Merge one working slice to main today.",
            },
            {
              title: "Risks",
              content: "Note dependencies on keys, hardware, or teammates.",
              task: "Add ISSUES.md or GitHub Issues with three tasks.",
            },
          ],
          homework: {
            title: "Checkpoint",
            desc: "Mentor sign-off on scope in class doc.",
            tasks: [
              "Repo link posted",
              "README charter complete",
              "Demo script outline (30–45s)",
            ],
          },
          challenges: {
            base: {
              title: "Charter + slice",
              desc: "README + working path.",
              steps: [
                "Pitch written",
                "Slice merged",
                "Next milestones listed",
              ],
            },
            medium: {
              title: "Second story",
              desc: "Add adjacent feature behind flag.",
              steps: [
                "Feature branch",
                "Document flag in README",
                "Merged or PR open",
              ],
            },
            hard: {
              title: "Automated check",
              desc: "GitHub Action running npm test or python -m py_compile on push.",
              steps: [
                "Workflow file committed",
                "Green check on PR",
                "Badge in README",
              ],
            },
            bonus: "Sketch database schema diagram in Excalidraw and link PNG.",
          },
        },
      },
    ],
  },
  {
    id: 4,
    title: "Final Project",
    color: "#ffb703",
    weeks: [
      {
        num: 8,
        mon: {
          title: "Final project polish + README",
          date: "Jun 29",
          desc: "Workshop 1: documentation that sells your work\u2014README sections, screenshots, architecture diagram, setup steps, and a honest limitations list.",
          preview: "Make it easy for a stranger on GitHub to run or view your project in under five minutes.",
          steps: [
            {
              title: "README template",
              content: "Title, description, demo link, stack, setup, scripts, env vars, roadmap, credits.",
              task: "Fill every section—even if some say “not implemented”.",
            },
            {
              title: "Screenshots and GIFs",
              content: "Capture key flows; store in /docs/images.",
              task: "Add at least two images to README.",
            },
            {
              title: "Code cleanup",
              content: "Remove dead files, format consistently, ensure .gitignore correct.",
              task: "Run your host’s build locally if applicable.",
            },
            {
              title: "Practice talk",
              content: "Two-minute spoken run-through with timer; note rough transitions.",
              task: "Record audio privately if helpful; delete after.",
            },
            {
              title: "Checklist handoff",
              content: "Verify demo URL, test on incognito, prep fallback video if live demo risky.",
              task: "Paste final checklist into README Demo section.",
            },
          ],
          homework: {
            title: "Polish pass",
            desc: "Optional peer review swap.",
            tasks: [
              "Peer reviews one classmate README",
              "Implement or ticket one feedback item",
              "Optional: add CONTRIBUTING.md stub",
            ],
          },
        },
        wed: {
          title: "Demo Day \ud83c\udf89",
          date: "Jul 1",
          desc: "Celebrate shipped work. Short live demos, what broke, what you learned, applause. No new technical curriculum\u2014focus on communication and pride.",
          preview: "Arrive with URL ready, slides optional, gratitude mandatory.",
          steps: [
            {
              title: "Demo format",
              content: "~3 minutes live or recorded: show the app, not your editor settings. One sentence problem, one sentence tech, then hands-on.",
              task: "Draft your intro on an index card.",
            },
            {
              title: "Backup plan",
              content: "Screen recording 60s, screenshots PDF, or phone hotspot if Wi-Fi wobbles.",
              task: "Upload backup to Drive or repo release asset.",
            },
            {
              title: "Audience",
              content: "Speak to friends and family in the room—avoid pure jargon without one plain sentence.",
              task: "Practice naming one thing you would ship next week.",
            },
            {
              title: "Celebrate others",
              content: "Take notes on two classmates’ ideas you want to try later.",
              task: "Write a short congratulation message in the class chat for someone whose project you liked.",
            },
            {
              title: "Afterwards",
              content: "Update README with Demo Day tag, pin repo, share on social if comfortable.",
              task: "Optional: add project to personal portfolio site from week 4.",
            },
          ],
          homework: {
            title: "No heavy homework",
            desc: "Rest and reflect.",
            tasks: [
              "Send mentor one paragraph reflection",
              "Star the class org template repo if applicable",
              "Optional: plan your next learning resource for August",
            ],
          },
        },
      },
    ],
  },

]

/** Load a single session (mon | wed | thu) for a week number from the curriculum tree. */
export function getSessionByWeekAndDay(weekNum, dayKey) {
  const w = Number(weekNum)
  if (!Number.isFinite(w) || !dayKey) return null
  const key = String(dayKey).toLowerCase()
  for (const phase of phases) {
    for (const week of phase.weeks) {
      if (week.num === w && week[key]) {
        const session = week[key]
        const extra = sessionResourcesFor(w, key)
        if (extra && !session.resources?.length) {
          return { ...session, resources: extra }
        }
        return session
      }
    }
  }
  return null
}

import { sessionResourcesFor } from './sessionResources.js'
import { sessions } from './schedule.js'

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
              content: "If you have not submitted the class survey yet, do it now so mentors can see who is in the room.",
              task: "Open the survey link from the lesson artifacts (or notebook §0), submit once, then return here.",
              links: [{ label: "Day 2 survey (Google Form)", href: "https://forms.gle/g4t91p4uhowXa1CD6" }],
            },
            {
              title: "Quick review — variables and strings",
              timing: "Lab",
              outlineColor: "ube",
              content:
                "From Monday:\n\n- **Variable** — name for a value (`name = 'Ada'`)\n- **String** — text in quotes\n- **print()** and **input()** — show output and ask the user a question\n\nWe reuse these all hour.",
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
          title: "Number guessing game",
          hideLessonArtifacts: true,
          goal:
            "Ship a playable number guessing game: the computer holds a secret number, the player keeps guessing in a loop, and you print clear too high / too low hints until they win. You must use a variable for the secret, a while loop, if/elif/else for feedback, a function that checks each guess, and input() every round.",
          preview: "Loop, compare, hint, win—then stretch with random, attempts, or play again.",
          postClass: {
            title: "Answer keys (spoilers)",
            desc:
              "Runnable Python for the core game and for go-beyond ideas (welcome line, play again, guess limits, random secret, attempts, score lines, difficulty presets, Easy/Medium/Hard menu). For students: only after you have tried, or to get unstuck. For mentors: quick demos at the desk.",
            links: [
              { label: "Beginner answer key (.ipynb)", href: "/lesson/week1_thu_guessing_beginner_key.ipynb" },
              { label: "Advanced answer key (.ipynb)", href: "/lesson/week1_thu_guessing_advanced_key.ipynb" },
            ],
          },
          buildTracks: {
            beginner: {
              pseudocodeLang: "text",
              downloadHref: "/lesson/week1_thu_guessing_beginner.ipynb",
              downloadFilename: "week1_thu_guessing_beginner.ipynb",
              downloadLabel: "Download beginner starter (.ipynb)",
              taskBoldLead: "Number guessing game:",
              task:
                "store a fixed secret number in a variable, keep asking for guesses with a while loop until the guess matches, and use a function check_guess(secret, guess) that prints Too low, Too high, or a win line. Use int(input(...)) for each guess. Range can stay small (for example 1–10) so testing is quick.",
              pseudocode: `START
  pick a SECRET number (fixed integer in your range)
  set GUESS to a value that is NOT the secret (so the loop can start)

  WHILE guess is not equal to secret:
      read a new guess from the player (whole number)
      call check_guess(secret, guess)

  print a short line after the game ends (for example "Game over")

check_guess(secret, guess):
  IF guess is below secret → print "too low" style hint
  ELSE IF guess is above secret → print "too high" style hint
  ELSE → print "you got it" style message
END`,
              focus: [
                "Why the while loop keeps running until guess equals the secret.",
                "How check_guess runs once every time through the loop.",
                "Changing the secret number and the prompt text to make it yours.",
              ],
              hints: [
                "If the loop never stops, print secret and guess once inside the loop to see what Python is comparing.",
                "int(input(...)) crashes if the player types letters—keep digits only for the beginner track, or ask a mentor for try/except when you are ready.",
                "Indentation: everything inside while and inside def must line up—Cursor usually indents for you after a colon.",
                "Stretch ideas and full worked code (including go-beyond): use the Resources tab, answer key links at the bottom.",
              ],
              goBeyond: [
                "Print one friendly welcome line before the loop.",
                "After a win, ask if they want another round and wrap the whole game in a second outer loop (play again).",
                "Cap guesses at seven and print a short loss message if they run out.",
                "Difficulty stretch: at the start, let the player choose Easy (1–10), Medium (1–50), or Hard (1–100), then use that range for the secret (fixed number you pick in-range, or random.randint once you are comfortable with import random).",
              ],
            },
            advanced: {
              pseudocodeLang: "text",
              downloadHref: "/lesson/week1_thu_guessing_advanced.ipynb",
              downloadFilename: "week1_thu_guessing_advanced.ipynb",
              downloadLabel: "Download advanced starter (.ipynb)",
              task:
                "Same core rules as beginner, but stretch: use import random and random.randint so the secret is different each run, count attempts and show them on the win line, add a short score or praise block at the end (for example great if attempts is small), and optionally restart the whole game without quitting the program.",
              pseudocode: `START
  pick SECRET using random in a range (for example 1–100)
  set guess to a value that is not the secret
  set attempts counter to zero

  print welcome lines so the player knows the range

  WHILE guess is not equal to secret:
      read guess from the player (whole number)
      add one to attempts
      call check_guess(secret, guess, attempts)  OR compare in the loop—your choice, but stay consistent

  print final score (attempt count)
  IF attempts is small → praise line
  ELSE IF attempts is medium → neutral line
  ELSE → encouraging line

check_guess(...):
  same three branches as beginner: too low, too high, win (win can mention attempt count)
END`,
              hints: [
                "If the win message shows the wrong attempt count, count once per guess and keep that rule the same every round.",
                "random.randint(a, b) includes both ends—check the Python docs if your range feels off by one.",
                "For play again, use an outer loop: new secret, reset guess and attempts, repeat until the player quits.",
                "Optional: wrap int(input(...)) in try/except ValueError so stray text does not crash the game.",
                "Stretch ideas and full worked code (including go-beyond): use the Resources tab, answer key links at the bottom.",
              ],
              goBeyond: [
                "Outer play_again loop so a fresh random secret starts each round.",
                "Difficulty presets: let the player pick a smaller or larger range (for example 1–10 vs 1–100) before you call random.randint.",
                "Full menu: Easy (1–10), Medium (1–50), Hard (1–100)—ask once at the start, set low and high, then secret = random.randint(low, high).",
              ],
            },
          },
        },
      },
      {
        num: 2,
        mon: {
          title: "Data structures",
          desc: "Follow the slide deck in class, then work through the notebook: built-in containers (lists, tuples, dicts), pandas DataFrames from CSV, a bar chart, and a short challenge. Download the notebook and animal sample CSV into the same folder in Cursor.",
          preview: "Slides + lab: libraries, lists, tuples, dicts, read_csv, filter/sort/group, bar chart, cheatsheet.",
          goal: "Leave class able to import common libraries, shape data with Python’s built-in structures, load a CSV into a DataFrame, and run the adjust-and-summarize operations you will reuse all course.",
          slideDeck: {
            label: "Week 2 · Monday slide deck",
            url: "https://docs.google.com/presentation/d/19IkHBoEcmGDiDzGJXa3jgobDqHy0HBd6gG_1HtbCZ34/edit?usp=sharing",
          },
          labDurationLabel: "50 min",
          labExampleUrl: "/lesson/week2_day1.ipynb",
          labExampleDownload: "week2_day1.ipynb",
          labExampleLabel: "Download lab notebook (.ipynb)",
          labDataUrl: "/lesson/week2_animals.csv",
          labDataDownload: "week2_animals.csv",
          labDataLabel: "Download animal data (.csv)",
          steps: [
            {
              title: "Quick review — Week 1 Python",
              timing: "Lab",
              outlineColor: "val",
              content:
                "From Week 1:\n\n- **print()** and **input()**\n- **Variables** and **f-strings** — `print(f'Hi, {name}')`\n- **if**, **for**, **while**, and **def** — you will use these with data today",
              task: "Without opening old files: explain to a partner what `input()` returns (type included).",
            },
            {
              title: "Imports & important libraries",
              timing: "Lab",
              content:
                "The standard library ships with Python (random, datetime, json, pathlib). Common add-ons you will meet in this course: pandas (tables), requests (APIs), matplotlib (charts). Install once: python3 -m pip install pandas requests matplotlib. The notebook demos each library with a one-line note about what it is for.",
              links: [
                { label: "Python module index (stdlib)", href: "https://docs.python.org/3/py-modindex.html" },
                { label: "pandas — Getting started", href: "https://pandas.pydata.org/docs/getting_started/index.html" },
              ],
              code: {
                lang: "python",
                snippet:
                  "import random\nfrom datetime import datetime\nimport pandas as pd\nimport requests\n\nprint('pandas', pd.__version__)\nprint('dice roll:', random.randint(1, 6))\nprint('year:', datetime.now().year)",
              },
              task: "Run the demo cell top to bottom and read what each library is for.",
            },
            {
              title: "Lists",
              timing: "Lab",
              content:
                "Lists are ordered and mutable — append, pop, insert, sort. Index from 0; negative indexes count from the end. Slices like animals[1:4] return a segment.",
              code: {
                lang: "python",
                snippet:
                  'animals = ["panda", "fox", "owl"]\nanimals.append("dolphin")\nprint(animals[0], animals[-1])\nprint(animals[1:3])',
              },
              task: "Make a list of five animals you like. Print the first, last, and a slice of the middle three.",
            },
            {
              title: "Tuples",
              timing: "Lab",
              content:
                "Tuples are fixed bundles — (snack, rating) or (pet name, species) pairs you will not change. Unpack with snack, rating = pair or read pair[0].",
              code: {
                lang: "python",
                snippet: 'snack_rating = ("pretzel", 8)\nprint(snack_rating[0], "scores", snack_rating[1], "/ 10")',
              },
              task: "Create three (snack, rating) tuples (rating 1–10). Print the average rating using a for loop.",
            },
            {
              title: "Dictionaries",
              timing: "Lab",
              content:
                "Dicts map keys to values — look up by name, not position. Values can be lists (sounds, treats). Use square brackets for keys you know exist: pet[\"name\"].",
              code: {
                lang: "python",
                snippet:
                  'pet = {"name": "Mochi", "species": "cat", "treats": ["tuna", "catnip"]}\nprint(pet["name"], "is a", pet["species"])\nprint("favorite treat:", pet["treats"][0])',
              },
              task: "Build a dict for a pet or wild animal with name, species, and sounds (list). Print one f-string sentence using bracket lookup.",
            },
            {
              title: "Load CSV into a DataFrame",
              timing: "Lab",
              content:
                "A DataFrame is a table: rows and named columns. pd.read_csv(path) reads a file from disk. Put week2_animals.csv in the same folder as your notebook, then inspect with .head(), .shape, and .columns.",
              code: {
                lang: "python",
                snippet:
                  'from pathlib import Path\nimport pandas as pd\n\ndf = pd.read_csv("week2_animals.csv")\nprint(df.shape)\nprint(df.columns.tolist())\ndf.head()',
              },
              task: "Load week2_animals.csv. Print shape, column names, and the full row where name is Panda.",
            },
            {
              title: "Manipulate DataFrames",
              timing: "Lab",
              content:
                "Select columns with df[[\"a\", \"b\"]]. Filter rows with df[df[\"col\"] == value]. Add columns with assignment. Sort with sort_values. Summarize with groupby and mean, sum, or value_counts.",
              code: {
                lang: "python",
                snippet:
                  'df = pd.read_csv("week2_animals.csv")\nforest = df[df["habitat"] == "forest"]\ndf = df.copy()\ndf["heavy"] = df["weight_kg"] >= 50\nby_weight = df.sort_values("weight_kg", ascending=False)\nprint(forest[["name", "habitat"]])\nprint(df.groupby("diet")["weight_kg"].mean().round(1))',
              },
              task: "On the animal table: (1) keep only nocturnal animals, (2) add food_len = length of favorite_food, (3) sort by food_len and print the top 3 names.",
            },
          ],
          labCheatsheet: {
            title: "DataFrame quick reference",
            content: "Bookmark this while you practice — these are the methods you will reach for most often in the next few weeks.",
            sections: [
              {
                title: "Load & inspect",
                methods: [
                  { name: "pd.read_csv(path)", desc: "Read a CSV file into a DataFrame" },
                  { name: "df.head(n)", desc: "First n rows (default 5)" },
                  { name: "df.shape", desc: "(rows, columns)" },
                  { name: "df.columns", desc: "Column names" },
                  { name: "df.info()", desc: "Types and non-null counts" },
                  { name: "df.describe()", desc: "Quick stats for numeric columns" },
                ],
              },
              {
                title: "Select rows & columns",
                methods: [
                  { name: "df['col']", desc: "One column as a Series" },
                  { name: "df[['a','b']]", desc: "Multiple columns" },
                  { name: "df.loc[i, 'col']", desc: "One value by label" },
                  { name: "df.iloc[0, 1]", desc: "One value by position" },
                ],
              },
              {
                title: "Filter & sort",
                methods: [
                  { name: "df[df['x'] > 5]", desc: "Rows matching a condition" },
                  { name: "df.query('x > 5')", desc: "Same idea, string expression" },
                  { name: "df.sort_values('col')", desc: "Sort rows by a column" },
                  { name: "df.isin([...])", desc: "Rows where a column is in a list" },
                ],
              },
              {
                title: "Add, change, drop",
                methods: [
                  { name: "df['new'] = ...", desc: "New column from values or computation" },
                  { name: "df.assign(x=...)", desc: "Returns copy with new columns" },
                  { name: "df.drop(columns=[...])", desc: "Remove columns" },
                  { name: "df.rename(columns={...})", desc: "Rename columns" },
                ],
              },
              {
                title: "Aggregate & count",
                methods: [
                  { name: "df.groupby('col')['x'].mean()", desc: "Average per group" },
                  { name: "df['col'].sum()", desc: "Total of a column" },
                  { name: "df['col'].value_counts()", desc: "How often each value appears" },
                  { name: "df.fillna(0)", desc: "Replace missing values" },
                ],
              },
            ],
          },
          labBarChart: {
            title: "Bar chart from the animal table",
            content:
              "matplotlib draws charts from data you already summarized in pandas. groupby + mean gives one number per category — perfect for a bar chart.",
            code: {
              lang: "python",
              snippet:
                'import matplotlib.pyplot as plt\nimport pandas as pd\n\ndf = pd.read_csv("week2_animals.csv")\navg_by_habitat = df.groupby("habitat")["weight_kg"].mean()\navg_by_habitat.plot(kind="bar", title="Average weight by habitat", ylabel="kg")\nplt.xticks(rotation=45, ha="right")\nplt.tight_layout()\nplt.show()',
            },
            task: "Run the demo, then make a **different** bar chart from the same CSV — for example average weight by diet, or count of animals per habitat (use value_counts and plot).",
            hints: [
              "df.groupby('diet')['weight_kg'].mean().plot(kind='bar') is one option.",
              "For counts: df['habitat'].value_counts().plot(kind='bar').",
              "If labels overlap, use plt.xticks(rotation=45, ha='right') and plt.tight_layout().",
            ],
          },
          labChallenge: {
            title: "Animal data challenge",
            content: "Use only pandas on week2_animals.csv — no re-typing the table by hand.",
            task:
              "(1) Average weight_kg per diet. (2) Print names in forest habitat that are nocturnal. (3) Add size: 'big' if weight_kg >= 50 else 'small'. (4) Print the favorite_food that appears most often.",
            hints: [
              "groupby('diet')['weight_kg'].mean() handles (1).",
              "Combine: (df['habitat'] == 'forest') & (df['is_nocturnal'] == True).",
              "value_counts() on favorite_food answers (4).",
            ],
          },
          homework: {
            title: "Structures + tables",
            desc: "In your week 2 folder notebook or a new .py file. Reuse week2_animals.csv or make a tiny CSV of your own (pets, snacks, games — 3+ rows).",
            tasks: [
              "Without pandas: from a list of dicts, compute the average of a numeric field using a loop.",
              "With pandas: load your CSV, filter one column, add a derived column, and save a new CSV with to_csv.",
              "Optional: read the pandas cheat sheet PDF from the Resources tab and try one method you have not used yet.",
            ],
          },
          postClass: {
            title: "Answer key (spoilers)",
            desc: "Worked solutions for practice cells, the bar chart, and the challenge. Try the lab first — use this to check your work or get unstuck.",
            links: [
              { label: "Download answer key notebook (.ipynb)", href: "/lesson/week2_day1_key.ipynb" },
            ],
          },
        },
        wed: {
          title: "APIs & the internet",
          desc: "Workshop 2: search real movies with a free IMDb API and browse the Studio Ghibli film catalog—no API key. Download the notebook, work top to bottom, then open the Challenge tab to build your movie night planner.",
          preview: "HTTP, JSON, status codes, search movies, loop a film list, compare ratings, save a watchlist.",
          goal: "Leave class able to call a public API, read JSON about movies, loop over lists of results, handle empty or failed responses, and print a readable movie card.",
          labDurationLabel: "50 min",
          labExampleUrl: "/lesson/week2_day2.ipynb",
          labExampleDownload: "week2_day2.ipynb",
          labExampleLabel: "Download lab notebook (.ipynb)",
          slideDeck: {
            label: "Week 2 · Wednesday slide deck (Day 5)",
            url: "https://docs.google.com/presentation/d/18PTPCEFhMq_xJ9R2LSr91CPS3tFr6oGGNMCBq9BOwq0/edit?usp=sharing",
          },
          steps: [
            {
              title: "Quick review — data structures",
              timing: "Lab",
              outlineColor: "ube",
              content:
                "From Monday:\n\n- **List** — ordered, mutable — `animals[0]`, `.append()`\n- **Dict** — keys and values — `pet[\"name\"]`\n- **DataFrame** — table from CSV — `pd.read_csv()`, `df[df[\"col\"] == value]`",
              task: "Name one question you can answer faster with a DataFrame than with a plain list.",
            },
            {
              title: "How a request works",
              timing: "Lab",
              content:
                "When you open a link or run requests.get(url), your machine asks a server for a resource. The server answers with a status code (200 = OK, 404 = not found) and a body—often JSON. Today you work with movie APIs—free, no signup.",
              links: [
                { label: "MDN — An overview of HTTP", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
                { label: "Free Movie DB API docs", href: "https://imdb.iamidiotareyoutoo.com/docs/index.html" },
              ],
              task: "Open https://imdb.iamidiotareyoutoo.com/search?q=inception in your browser. Find ok, and the description list with #TITLE and #YEAR on each movie.",
            },
            {
              title: "JSON = Python-friendly data",
              timing: "Lab",
              content:
                "Movie search results are a list of dicts inside description. Real APIs sometimes use odd key names like #TITLE—Python still reads them with brackets. response.json() gives you dicts and lists you already know from Monday.",
              code: {
                lang: "python",
                snippet:
                  'mini = {"#TITLE": "Inception", "#YEAR": 2010, "#ACTORS": "Leonardo DiCaprio, Joseph Gordon-Levitt", "#RANK": 148}\nprint(mini["#TITLE"])\nprint(mini["#YEAR"])\nprint(mini["#ACTORS"])',
              },
              task: "Run the sample. Add a key #IMG_POSTER with a fake URL string and print it.",
            },
            {
              title: "Install requests",
              timing: "Lab",
              content: "requests is how Python talks to the internet. Install once in your notebook environment.",
              code: { lang: "python", snippet: "# Run once if needed:\n# !python3 -m pip install requests" },
              task: "Run import requests with no errors.",
            },
            {
              title: "HTTP status codes cheatsheet",
              timing: "Lab",
              content:
                "Every response has a status code — check r.status_code before you parse JSON.\n\n200 OK — request worked; data is in the body\n201 Created — something new was made (often after POST)\n204 No content — success, but no body to read\n400 Bad request — wrong URL or parameters\n401 Unauthorized — API needs a key or login\n403 Forbidden — you are not allowed to access this\n404 Not found — movie or page does not exist\n429 Too many requests — rate limit; slow down and try later\n500 Server error — their server broke, not your fault\n503 Unavailable — server down or overloaded\n\nRule of thumb: 2xx = success · 4xx = your side (client) · 5xx = their side (server)\n\nA broken URL or empty search may return 500 or ok: false—always check status and ok before you loop results.",
              task: "Read the list once. The notebook has the full table in section 4—keep it open for the next steps.",
            },
            {
              title: "Search your first movie",
              timing: "Lab",
              content:
                "GET reads data. The IMDb search API returns a description list—loop the first few hits. Always set timeout=. Lower #RANK means higher on IMDb’s chart (1 is best).",
              code: {
                lang: "python",
                snippet:
                  'import requests\n\nquery = "inception"\nurl = f"https://imdb.iamidiotareyoutoo.com/search?q={query}"\nr = requests.get(url, timeout=10)\nprint("status:", r.status_code)\ndata = r.json()\nprint("ok:", data.get("ok"))\nfor movie in data.get("description", [])[:3]:\n    print(movie["#TITLE"], movie["#YEAR"], "rank", movie["#RANK"])\n    print("  cast:", movie["#ACTORS"])',
              },
              task: "Run the demo. Change query to a movie you love (matrix, spirited, dune) and print the top 3 results.",
            },
            {
              title: "Browse a full film catalog",
              timing: "Lab",
              content:
                "Studio Ghibli API returns every film in one list—great for loops. Each film has title, director, running_time (minutes), and rt_score (Rotten Tomatoes-style score as a string).",
              code: {
                lang: "python",
                snippet:
                  'import requests\n\nr = requests.get("https://ghibliapi.vercel.app/films", timeout=10)\nprint("status:", r.status_code)\nfilms = r.json()\nprint(f"{len(films)} films in the catalog")\nfor film in films[:5]:\n    print(film["title"], "—", film["director"], f\'{film["running_time"]} min, score {film["rt_score"]}\')',
              },
              task: "Print the 5 films with the highest rt_score (hint: int(film[\"rt_score\"])).",
            },
            {
              title: "Compare three searches",
              timing: "Lab",
              content: "Same search endpoint, different queries—build a list of movie titles you want to compare and loop.",
              code: {
                lang: "python",
                snippet:
                  'import requests\n\nsearches = ["inception", "matrix", "spirited away"]\nfor title in searches:\n    r = requests.get(f"https://imdb.iamidiotareyoutoo.com/search?q={title}", timeout=10)\n    if r.status_code == 200 and r.json().get("ok"):\n        top = r.json()["description"][0]\n        print(f"{title!r} → {top[\'#TITLE\']} ({top[\'#YEAR\']}) rank {top[\'#RANK\']}")\n',
              },
              task: "Pick any three movies you would actually watch. Print the top search result for each.",
            },
            {
              title: "When the API says no",
              timing: "Lab",
              content:
                "Networks fail and APIs return ok: false. Wrap requests in try/except and return None instead of crashing.",
              code: {
                lang: "python",
                snippet:
                  'import requests\n\ndef search_movies(query):\n    url = f"https://imdb.iamidiotareyoutoo.com/search?q={query}"\n    try:\n        r = requests.get(url, timeout=10)\n    except requests.RequestException as e:\n        print("Network error:", e)\n        return []\n    if r.status_code != 200:\n        print(f"{query}: status {r.status_code}")\n        return []\n    data = r.json()\n    if not data.get("ok"):\n        print(f"{query}: API error")\n        return []\n    return data.get("description", [])\n\nhits = search_movies("inception")\nprint(hits[0]["#TITLE"] if hits else "no results")\nprint(search_movies(""))',
              },
              task: "Run search_movies for a real title and for an empty string. Confirm the empty search fails gracefully.",
            },
            {
              title: "Save a movie snapshot",
              timing: "Lab",
              content: "Thursday you will save API data to use in a script. Today: save your favorite search result or Ghibli film to data/ as JSON.",
              code: {
                lang: "python",
                snippet:
                  'from pathlib import Path\nimport json\nimport requests\n\nPath("data").mkdir(exist_ok=True)\nr = requests.get("https://imdb.iamidiotareyoutoo.com/search?q=inception", timeout=10)\ndata = r.json()\nif data.get("ok") and data.get("description"):\n    Path("data/inception.json").write_text(json.dumps(data["description"][0], indent=2))\n    print("saved data/inception.json")',
              },
              task: "Save your favorite movie from today’s lab into data/ as pretty-printed JSON.",
            },
          ],
          challengeTab: {
            title: "Movie night planner",
            content:
              "You are building a tiny app for picking what to watch. Search movies by title, print a readable card, build a watchlist from three searches, and save it. Same skills as Thursday’s build: GET, check status, parse JSON, show results.",
            task:
              "1) Write search_movies(query) → list of movie dicts (reuse your lab version). 2) Write print_movie_card(movie) showing #TITLE, #YEAR, #ACTORS, and #RANK. 3) Search three movies you would watch with friends and print the top hit for each. 4) Build a watchlist list of those three dicts and print a numbered list. 5) Save the watchlist to data/watchlist.json.",
            code: {
              lang: "python",
              snippet:
                'import requests\nfrom pathlib import Path\nimport json\n\n\ndef search_movies(query):\n    pass\n\n\ndef print_movie_card(movie):\n    pass\n\n\n# three searches + watchlist + save JSON',
            },
            hints: [
              "Top result is description[0] after you confirm ok is true.",
              "URL: https://imdb.iamidiotareyoutoo.com/search?q={query}",
              "Keys use # — access with movie[\"#TITLE\"], not movie.TITLE.",
              "Optional: fetch one Ghibli film from https://ghibliapi.vercel.app/films/{id} and add it to the watchlist.",
            ],
          },
          postClass: {
            title: "Answer key (spoilers)",
            desc: "Worked solutions for lab practice cells and the Challenge tab project. Try the lab first—use this to check your work or get unstuck.",
            links: [
              {
                label: "Download answer key notebook (.ipynb)",
                href: "/lesson/week2_day2_key.ipynb",
                download: "week2_day2_key.ipynb",
              },
            ],
          },
        },
        thu: {
          title: "Gemini chat agent",
          desc: "Build day: call Google\u2019s Gemini Flash API from Python and ship a tiny terminal chat agent. Wednesday you talked to movie servers with GET; today you send messages to a model with an API key and keep a running conversation. Download the notebook, set up Google AI Studio, then work top to bottom\u2014no homework tab, just the lab and stretch tiers below.",
          preview: "Google AI Studio API key \u00b7 google-genai \u00b7 one-shot reply \u00b7 multi-turn chat loop \u00b7 optional save chat log to data/.",
          goal: "Leave class with a working chat loop using Gemini Flash, your API key stored safely outside Git, and a custom system prompt that shapes how the bot behaves.",
          labDurationLabel: "60 min",
          labExampleUrl: "/lesson/week2_thu_chat.ipynb",
          labExampleDownload: "week2_thu_chat.ipynb",
          labExampleLabel: "Download lab notebook (.ipynb)",
          steps: [
            {
              title: "Get a Gemini API key",
              content:
                "Sign in at Google AI Studio (aistudio.google.com), open API keys, create a key for this course. Copy it once\u2014you will not see it again. Never paste keys into GitHub, WhatsApp, or screenshots. In Cursor\u2019s terminal: export GEMINI_API_KEY=\"your-key\" (Mac/Linux) or set it in PowerShell for Windows. The notebook walks through each click.",
              task: "Confirm import os; os.environ[\"GEMINI_API_KEY\"] prints something starting with AI (not the full key out loud).",
              links: [
                { label: "Google AI Studio", href: "https://aistudio.google.com/" },
                { label: "Create an API key", href: "https://aistudio.google.com/apikey" },
              ],
            },
            {
              title: "Install google-genai",
              content:
                "Google\u2019s current Python SDK is google-genai (not the older google-generativeai package). Install once per machine: python3 -m pip install google-genai",
              task: "Run from google import genai in a notebook cell with no ImportError.",
              links: [{ label: "Gemini API quickstart (Python)", href: "https://ai.google.dev/gemini-api/docs/quickstart" }],
            },
            {
              title: "One message, one reply",
              content:
                "Create a client with your key, call client.models.generate_content with model gemini-2.0-flash, print response.text. This proves the key and Wi\u2011Fi work before you build a loop.",
              task: "Ask the model one coding question and print the answer in the notebook.",
            },
            {
              title: "Add a system prompt",
              content:
                "A system instruction sets personality and rules\u2014for example \u201cYou are a patient Python tutor for beginners; keep answers under 80 words.\u201d Pass it when you create the chat session.",
              task: "Change the system prompt to match your project (movie critic, study buddy, etc.) and run one test message.",
            },
            {
              title: "Build the chat loop",
              content:
                "Use client.chats.create(model=\"gemini-2.0-flash\", config={...}) then while True: read input, break on quit, chat.send_message(user_text), print Bot: and response.text. The SDK remembers prior turns in that chat session.",
              task: "Hold a three-turn conversation in the terminal, then type quit.",
            },
            {
              title: "Save the conversation (stretch)",
              content:
                "Optional: append each user and assistant turn to a list of dicts and write data/chat_log.json with json.dump. Same data/ habit as Wednesday.",
              task: "If you finish early, save at least four messages from your session to data/chat_log.json.",
            },
          ],
          postClass: {
            title: "Answer key (spoilers)",
            desc: "Worked cells for setup, first API call, system prompt, chat loop, and saving a log. Try the lab notebook first\u2014use this to check your work or get unstuck.",
            links: [
              {
                label: "Download answer key notebook (.ipynb)",
                href: "/lesson/week2_thu_chat_key.ipynb",
                download: "week2_thu_chat_key.ipynb",
              },
            ],
          },
          challenges: {
            base: {
              title: "Working chat agent",
              desc: "Key in env var, not in Git. One-shot call works, then a quit-able loop.",
              steps: [
                "GEMINI_API_KEY set in the environment",
                "gemini-2.0-flash returns a reply to a test question",
                "while loop: input \u2192 send_message \u2192 print Bot: \u2192 quit exits cleanly",
              ],
            },
            medium: {
              title: "Custom personality",
              desc: "Make the bot yours with a system instruction.",
              steps: [
                "System prompt names the bot and sets tone (tutor, critic, coach)",
                "Bot refuses or redirects off-topic questions per your rules",
                "Demo three different personalities to a partner (change prompt, restart chat)",
              ],
            },
            hard: {
              title: "Chat log on disk",
              desc: "Persist the session like a real app.",
              steps: [
                "List of {role, content} dicts grows each turn",
                "Write data/chat_log.json with indent=2",
                "Second script or cell reads the file and prints a transcript",
              ],
            },
            bonus:
              "Cap replies (max_output_tokens in config) and print a friendly message if the user sends an empty string\u2014do not waste API calls.",
          },
        },
      },
      {
        num: 3,
        label: "Terminal & scripts",
        mon: {
          title: "Terminal basics",
          desc: "Workshop 1: learn the terminal — the text interface you will use all week. **Wednesday** you run Python scripts (including a headline scraper). **Thursday** you schedule a hands-free script with cron. Today: navigation, files, and `python3` from the command line in `codemoldova-week3`.",
          preview: "Why terminal · cd/ls/pwd · create codemoldova-week3 · run Python · prep for Wed scripts + Thu daily schedule.",
          goal: "Leave class comfortable in the terminal: pwd, cd, ls/dir, create files, and run `python3` from `~/codemoldova-week3` — ready for Wednesday’s scripts and Thursday’s daily automation.",
          mainPoints: [
            "The terminal is how you run `.py` scripts — not only notebooks.",
            "Use `codemoldova-week3` as your project folder for the rest of this week.",
            "Wednesday: scripts with `input()` you run by hand. Thursday: same idea, no inputs, on a daily schedule.",
            "Mac students will use a venv for pip installs starting Wednesday — today just learn `cd` and `python3`.",
          ],
          labDurationLabel: "50 min",
          steps: [
            {
              title: "Quick review — Python so far",
              timing: "Lab",
              outlineColor: "val",
              content:
                "From Weeks 1–2 (notebooks):\n\n- **print()** and **input()**\n- **Variables**, **if**, **loops**, **functions**\n- **pip install** for libraries like `pandas` and `requests`\n\nToday you run Python from the **terminal** instead of cells.",
              task: "Run `python3 --version` and `python3 -c \"print('ready for terminal week')\"` once.",
            },
            {
              title: "Why the terminal matters",
              timing: "Lab",
              content:
                "GUIs (clicking icons) hide what the computer is doing. The terminal is a **text interface** — you type commands, the shell runs them, text comes back. Every professional dev uses it daily: run Python scripts, install packages with pip, start web servers, deploy to Vercel, use Git, set API keys with export. Cursor has a built-in terminal (`` Ctrl+` `` or View → Terminal). Same skills work on your laptop, a server, and in CI pipelines.",
              task: "Open the terminal in Cursor. Type one command and press Enter — even `echo hello` counts.",
            },
            {
              title: "Why you need to know it",
              timing: "Lab",
              content:
                "You already used the terminal for `pip install`, `export GEMINI_API_KEY=...`, and notebooks. **This week:**\n\n- **Wednesday** — run Python **scripts** from the terminal (`python3 my_script.py`), install libraries, scrape headlines\n- **Thursday** — ship a script with **no** `input()` and schedule it to run **every day** (cron on Mac)\n\nWeek 6 is Git from the command line — same habit. The terminal fails **loudly**: read the error, paste it into Claude or Cursor, fix one thing, run again.",
              links: [
                {
                  label: "MDN — Command line overview",
                  href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line",
                },
              ],
              task: "Name two things you did in this course that required the terminal (or should have). Share with a partner.",
            },
            {
              title: "How it is used most often",
              timing: "Lab",
              content:
                "Same five jobs, every project:\n\n1. **Navigate** — `cd` into `codemoldova-week3`\n2. **Inspect** — `ls` / `dir` to see `.py` files and `data/`\n3. **Run** — `python3 script.py` (Wednesday and Thursday)\n4. **Install** — `pip install` inside your venv (Wednesday; Mac setup on the lesson)\n5. **Configure** — export API keys, edit `crontab` (Thursday)\n\nYou type commands instead of clicking through folders. This week’s scripts and scraper all assume you can do 1–3 without a GUI.",
              task: "In your own words: what is the difference between “opening a file in Cursor” and “running a file from the terminal”?",
            },
            {
              title: "Common commands",
              timing: "Lab",
              content:
                "Mac/Linux (bash/zsh) and Windows (PowerShell) use different names for the same ideas:\n\n| Job | Mac / Linux | Windows PowerShell |\n|-----|-------------|-------------------|\n| Where am I? | pwd | Get-Location (or pwd) |\n| List files | ls | dir (or ls) |\n| Change folder | cd path | cd path |\n| Go up one level | cd .. | cd .. |\n| Make folder | mkdir name | mkdir name |\n| Make empty file | touch name.txt | New-Item name.txt |\n| Show file contents | cat file.txt | Get-Content file.txt |\n| Clear screen | clear | cls |\n| Run Python | python3 file.py | python file.py |\n| Install package | venv + pip (see Wed) | pip install pkg |\n\nPaths: Mac/Linux use `/Users/you/...`; Windows uses `C:\\Users\\you\\...`. Use Tab to autocomplete folder names.",
              code: {
                lang: "bash",
                snippet:
                  "# Mac / Linux — run one line at a time\npwd\nls\nmkdir codemoldova-week3\ncd codemoldova-week3\ntouch notes.txt\npython3 --version",
              },
              task: "Run pwd and ls in your terminal. Note what each line printed.",
            },
            {
              title: "Navigation walkthrough",
              timing: "Lab",
              content:
                "**Mac / Linux:** Open Terminal in Cursor. `pwd` shows your current folder. `cd Documents` enters Documents (if it exists). `cd ..` goes up. `cd ~` jumps to your home folder. `ls -la` lists all files including hidden ones.\n\n**Windows PowerShell:** Same flow — `Get-Location`, `cd Documents`, `cd ..`, `cd ~`. Use `dir` instead of `ls` if `ls` is not aliased. Right-click the terminal tab → select PowerShell if you see cmd and want PowerShell.\n\n**Cursor tip:** File → Open Folder sets your project root; open the terminal and `pwd` — you should land inside or near that folder.",
              code: {
                lang: "powershell",
                snippet:
                  "# Windows PowerShell — same ideas\nGet-Location\ndir\ncd Documents\nmkdir codemoldova-week3\ncd codemoldova-week3\nNew-Item notes.txt\npython --version",
              },
              task: "Navigate from your home folder into a folder you use for this course. Run pwd/Get-Location at the start and end.",
            },
            {
              title: "Practice 1 — Folder tour",
              timing: "Practice",
              content:
                "Build muscle memory: create this week’s workspace from scratch using only the terminal. You will use this folder for every script through Thursday.",
              task: "From your home folder: (1) mkdir codemoldova-week3 if it does not exist, (2) cd into it, (3) run pwd/Get-Location and confirm the path ends with codemoldova-week3, (4) ls/dir and confirm the folder is empty (or list what is there).",
              code: {
                lang: "bash",
                snippet: "cd ~\nmkdir -p codemoldova-week3\ncd codemoldova-week3\npwd\nls",
              },
            },
            {
              title: "Practice 2 — Create and read a file",
              timing: "Practice",
              content:
                "Files created in the terminal show up instantly in Cursor’s file tree. No Save As dialog required.",
              task: "Inside codemoldova-week3: (1) create notes.txt, (2) add one line with your name — Mac/Linux: echo \"Your Name\" > notes.txt · PowerShell: Set-Content notes.txt \"Your Name\", (3) cat/Get-Content notes.txt and confirm the text printed.",
              code: {
                lang: "bash",
                snippet: 'touch notes.txt\necho "Ada" > notes.txt\ncat notes.txt',
              },
            },
            {
              title: "Practice 3 — Run Python from the terminal",
              timing: "Practice",
              content:
                "Notebooks are not the only way to run Python. **Wednesday** you run `.py` files from here; **Thursday** you test the exact command cron will use.",
              task: "From `codemoldova-week3`: (1) `python3 --version` (Windows: try `python`). (2) `python3 -c \"print('hello from terminal')\"`. (3) Write in your notes what command you will use Wednesday to run a script file.",
              code: {
                lang: "bash",
                snippet:
                  "cd ~/codemoldova-week3\npython3 --version\npython3 -c \"print('hello from terminal')\"\n# Wednesday you will run: python3 my_automation.py",
              },
            },
          ],
          labCheatsheet: {
            title: "Terminal quick reference",
            content: "Keep this open Mon–Thu. Same jobs on every OS — different spellings.",
            sections: [
              {
                title: "This week (Week 3)",
                methods: [
                  { name: "Mon (today)", desc: "Terminal + codemoldova-week3 folder" },
                  { name: "Wed", desc: "Scripts, scraper, my_automation.py with input()" },
                  { name: "Thu", desc: "Hands-free script + cron daily schedule" },
                ],
              },
              {
                title: "Navigation",
                methods: [
                  { name: "pwd / Get-Location", desc: "Print current folder path" },
                  { name: "ls / dir", desc: "List files and folders here" },
                  { name: "cd folder", desc: "Move into a folder" },
                  { name: "cd ..", desc: "Move up one level" },
                  { name: "cd ~", desc: "Jump to home directory" },
                ],
              },
              {
                title: "Files & folders",
                methods: [
                  { name: "mkdir name", desc: "Create a new folder" },
                  { name: "touch file / New-Item file", desc: "Create an empty file" },
                  { name: "cat file / Get-Content file", desc: "Print file contents to the terminal" },
                ],
              },
              {
                title: "Python & tools",
                methods: [
                  { name: "python3 script.py", desc: "Run a Python file" },
                  { name: "python3 -c \"...\"", desc: "Run one line of Python" },
                  { name: "pip install (Wed)", desc: "Inside venv on Mac — see Wednesday lesson" },
                  { name: "export VAR=val", desc: "Set env var (Mac/Linux); PowerShell: $env:VAR=\"val\"" },
                ],
              },
            ],
          },
          challengeTab: {
            title: "Terminal scavenger hunt",
            content:
              "Combine navigation, files, and Python — same skills you need Wednesday and Thursday. Show a mentor when done (or post `pwd` in WhatsApp).",
            task:
              "From `cd ~`: (1) `cd codemoldova-week3` (create if missing). (2) `mkdir data`. (3) Create `data/me.txt` with your first name. (4) `python3 -c \"print('challenge complete')\"`. (5) `pwd` and `ls data` — confirm `data/me.txt` exists. Thursday may save files under `data/` too.",
            hints: [
              "Mac/Linux file: echo \"Mira\" > data/me.txt (after mkdir data).",
              "PowerShell: Set-Content data/me.txt \"Mira\".",
              "If python3 fails on Windows, try python instead.",
              "Wrong folder? pwd first, then cd to fix before continuing.",
            ],
          },
          homework: {
            title: "Terminal reps before Wednesday",
            desc: "Short practice so Wednesday and Thursday feel easy. You will live in `codemoldova-week3` for scripts, scraping, and cron.",
            tasks: [
              "Open terminal, `cd ~/codemoldova-week3`, `ls` — twice without looking at notes.",
              "In `idea.txt` (anywhere in that folder), write two lines: (1) a script idea that asks you questions with `input()` for Wednesday, (2) what it should do every morning **without** typing for Thursday.",
              "Optional: `pwd` → `cd` → `ls` from memory, then `clear` or `cls`.",
            ],
          },
        },
        wed: {
          title: "Scripting",
          desc: "Workshop 2: terminal review, scripts, why Python, Input→Process→Output, headline scraper, then build your own script with `input()` — you run it by hand today; Thursday schedules it.",
          preview: "Review → scripts → why Python → 3-step model → install → scraper → build script with input().",
          goal: "Leave class able to explain scripts in one sentence, describe input/process/output, and run a simple Python automation from the terminal.",
          slideDeck: {
            label: "Day 8 · Scripts slide deck",
            url: "https://docs.google.com/presentation/d/13HmGRSDc4flNS4p2OcKUjz_0Qsjbp3ltVqVfKeBQhKk/edit?usp=sharing",
          },
          labDurationLabel: "50 min",
          labExampleUrl: "/lesson/week3_wed_headline_scraper_example.py",
          labExampleDownload: "week3_wed_headline_scraper_example.py",
          labExampleLabel: "Download headline scraper example (.py)",
          mainPoints: [
            "A script is a `.py` file that runs top-to-bottom, usually from the terminal.",
            "Python is great for scripting because it is readable, cross-platform, and quick to ship.",
            "Use Input → Process → Output to plan every automation before coding.",
            "Mac: one venv in `codemoldova-week3`, then `pip install` inside it.",
            "Scraper: `requests` + BeautifulSoup → saves `.txt` and `.pdf` in Downloads.",
            "Wednesday scripts use `input()` — you run them by hand. Thursday removes inputs and schedules them.",
            "AI helps you build faster, but always run, test, and understand the code you keep.",
          ],
          steps: [
            {
              title: "Quick review — terminal basics",
              timing: "Lab",
              outlineColor: "ube",
              content:
                "Fast check before scripts:\n\n1. `ls` / `dir` = list files in the current folder\n2. `cd ..` = move up one folder\n3. `pwd` / `Get-Location` = print where you are\n\nYou need these three today to run and debug scripts without getting lost in paths.",
            },
            {
              title: "What is a script?",
              timing: "Lab",
              content:
                "A script is a standalone file that does one specific job when you run it. It can automate a chore, process data, or control a tool from the command line.\n\n**Notebook:** run cell-by-cell.\n**Script:** run top-to-bottom in one command, usually `python3 file.py`.",
            },
            {
              title: "Why we chose Python for scripting",
              timing: "Lab",
              content:
                "Python is ideal for beginner-friendly scripts because:\n\n1. Syntax is readable (less punctuation noise)\n2. Great standard library for files, dates, and automation\n3. Runs on Mac, Linux, and Windows\n4. Huge community and examples when you are stuck",
              code: {
                lang: "python",
                snippet:
                  'name = "CodeMoldova"\nprint(f"Hi, {name}")',
              },
              task: "Type this snippet into a new file `mini.py`, run `python3 mini.py`, then change the name value and run again.",
            },
            {
              title: "3-step scripting model (Input → Process → Output)",
              timing: "Lab",
              content:
                "Use this model from slides:\n\n1. **Input:** data enters (typed text, a file, or a URL)\n2. **Process:** script applies rules/logic\n3. **Output:** result is shown, saved, or triggered\n\nToday's scraper: **Input** = Hacker News URL · **Process** = parse HTML · **Output** = text + PDF in Downloads.",
              task: "Write one line each for Input, Process, and Output for today's scraper.",
            },
            {
              title: "Install libraries (once)",
              timing: "Lab",
              content:
                "The scraper needs **requests**, **beautifulsoup4**, and **fpdf2**.\n\n**Mac** — run once (copy the block below). Your prompt should show `(.venv)`.\n\n**Windows** — `python -m pip install requests beautifulsoup4 fpdf2`\n\n**New terminal later?** Mac: `cd ~/codemoldova-week3` then `source .venv/bin/activate`.\n\n**Stuck on install errors?** Copy the full terminal output into Claude or Cursor and ask how to fix it.",
              code: {
                lang: "bash",
                snippet:
                  "mkdir -p ~/codemoldova-week3\ncd ~/codemoldova-week3\npython3 -m venv .venv\nsource .venv/bin/activate\npip install requests beautifulsoup4 fpdf2",
              },
              task: "Install finishes with no red errors. Mac: you see `(.venv)` in the prompt.",
            },
            {
              title: "BeautifulSoup — read HTML from the web",
              timing: "Lab",
              content:
                "**requests** — download a page as HTML.\n\n**BeautifulSoup** — find tags in that HTML (titles, links, etc.).\n\nThe example script does the parsing for you today. Skim the file later to see `requests.get` and `BeautifulSoup` in action.",
              links: [
                { label: "Beautiful Soup documentation", href: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/" },
                { label: "requests quickstart", href: "https://requests.readthedocs.io/en/latest/user/quickstart/" },
              ],
            },
            {
              title: "Run the headline scraper",
              timing: "Lab",
              content:
                "1. **Download** `week3_wed_headline_scraper_example.py` (button above).\n2. **Mac:** `cd ~/codemoldova-week3` and `source .venv/bin/activate`.\n3. **Run:** `python3 ~/Downloads/week3_wed_headline_scraper_example.py` (change the path if you saved the file elsewhere).\n4. Enter how many headlines (try `5`).\n5. Open **~/Downloads/headlines_today.txt** and **~/Downloads/headlines_today.pdf**.\n\nYou should see a title, short summary, and read-more link for each story.\n\n**Something broke?** Paste the error into Claude or Cursor with: I'm running the CodeMoldova headline scraper. Here's my error:",
              code: {
                lang: "bash",
                snippet:
                  "cd ~/codemoldova-week3\nsource .venv/bin/activate\npython3 ~/Downloads/week3_wed_headline_scraper_example.py",
              },
              task: "Run with `5` headlines. Confirm both files in Downloads look right.",
            },
            {
              title: "Do it yourself — build a script with inputs",
              timing: "Practice",
              content:
                "Pick one small automation you want. Examples:\n\n- Ask your name, then print a personalized checklist\n- Type numbers, get a daily total or average\n- Enter a topic, save a quote or tip to a file\n- Type a folder name, list or count files inside\n\nSave as `~/codemoldova-week3/my_automation.py`. Work with AI in Cursor.\n\nPrompt template:\n\"Help me write a beginner Python script that [your goal]. Use `input()` for at least one question. Use Input → Process → Output. Keep it under 40 lines. Add comments and one simple error check.\"\n\nRun it from the terminal and answer the prompts yourself.\n\n**Tomorrow:** you will remove the inputs and make it run on a daily schedule. Today, focus on something useful when *you* run it by hand.\n\n**Stuck?** Paste your error into Claude or Cursor with the prompt you used.",
              task: "`my_automation.py` runs with `input()`, prints or saves something useful, and you can explain what each part does.",
            },
          ],
          labCheatsheet: {
            title: "Script quick reference",
            content: "Keep this open while you practice today and tomorrow.",
            sections: [
              {
                title: "Terminal review",
                methods: [
                  { name: "pwd / Get-Location", desc: "Print current folder path" },
                  { name: "ls / dir", desc: "List files in current folder" },
                  { name: "cd ..", desc: "Move up one folder" },
                ],
              },
              {
                title: "Run scripts",
                methods: [
                  { name: "python3 file.py", desc: "Run a script on Mac/Linux" },
                  { name: "python file.py", desc: "Windows fallback if python3 is missing" },
                  { name: "Ctrl+C", desc: "Stop a running script in terminal" },
                ],
              },
              {
                title: "3-step script model",
                methods: [
                  { name: "Input", desc: "What data enters the script" },
                  { name: "Process", desc: "What logic changes or uses the data" },
                  { name: "Output", desc: "What result the script prints or saves" },
                ],
              },
              {
                title: "Headline scraper (today)",
                methods: [
                  { name: "source .venv/bin/activate", desc: "Mac — before every run" },
                  { name: "python3 file.py", desc: "Run the downloaded example" },
                  { name: "headlines_today.pdf", desc: "Output in ~/Downloads" },
                ],
              },
            ],
          },
          homework: {
            title: "Short script review",
            desc: "Five to ten minutes tonight: polish the script you will upgrade tomorrow.",
            tasks: [
              "Run `python3 my_automation.py` (Mac: activate `.venv` first). Confirm inputs still work.",
              "Write one sentence in a comment at the top: what should this script do every day without prompts?",
              "Ask AI for one small improvement (clearer output or better variable names), then test again.",
            ],
          },
        },
        thu: {
          title: "Daily automation build",
          desc: "Build day: take Wednesday’s script (or a new idea) and ship a hands-free version — no `input()` — that runs on a daily schedule from the terminal. Mac students use cron; you will test paths, logs, and demo a silent run.",
          preview: "Remove inputs → save daily_script.py → test full path → crontab → check log → stretch if done early.",
          goal: "Ship a script that runs with zero typing, is scheduled once per day, and writes output you can verify in a log file.",
          labDurationLabel: "60 min",
          labExampleUrl: "/lesson/week3_thu_build_starter.py",
          labExampleDownload: "week3_thu_build_starter.py",
          labExampleLabel: "Optional: pathlib / JSON starter (.py)",
          mainPoints: [
            "Cron cannot answer `input()` — your script must run hands-free.",
            "Use full paths to venv `python3` and your `.py` file in the crontab line.",
            "Test the exact cron command manually once before you leave class.",
            "Save cron output to a log file so you can prove the schedule ran.",
          ],
          steps: [
            {
              title: "Open your project folder",
              content:
                "In Cursor’s terminal:\n\n`cd ~/codemoldova-week3`\n\nMac: `source .venv/bin/activate` — you should see `(.venv)`.\n\nRun `ls` and confirm `my_automation.py` from yesterday (or start fresh today).",
              code: {
                lang: "bash",
                snippet: "cd ~/codemoldova-week3\nsource .venv/bin/activate\npwd\nls",
              },
              task: "You are in `codemoldova-week3` with venv active (Mac).",
            },
            {
              title: "Choose your build",
              timing: "Lab",
              content:
                "Pick **one** path:\n\n**A — Upgrade Wednesday’s script** — Keep the same idea, but remove every `input()`. Read settings from a file, use fixed defaults, or hard-code one example so it always does the same useful job.\n\n**B — New daily script** — Something small that makes sense every morning: quote of the day from a text file, append today's date to a journal, refresh a headlines file, countdown reminder, etc.\n\nSave as `~/codemoldova-week3/daily_script.py` (or keep the name `my_automation.py` if you upgraded it).\n\nAsk AI:\n\"Convert this script to run with **no** `input()`. It should work when cron runs it unattended. Save output to a file in Downloads or `data/`.\"",
              task: "Tell a partner: Path A or B, and what your script will do each day without anyone typing.",
            },
            {
              title: "Build the hands-free version",
              timing: "Lab",
              content:
                "Rules for today:\n\n- **No** `input()` anywhere\n- Script must finish on its own every time\n- Write something useful to disk (file in `~/Downloads` or `data/`)\n\nRun manually once:\n\n`python3 daily_script.py`\n\nFix until it works with **zero** questions asked.",
              task: "Run `python3 daily_script.py` twice. Both runs succeed with no typing.",
            },
            {
              title: "Schedule it — run every day (Mac: cron)",
              timing: "Lab",
              content:
                "**1. Get full paths** (copy exactly what terminal prints):\n\n`which python3` → e.g. `/Users/you/codemoldova-week3/.venv/bin/python3`\n\nScript → `/Users/you/codemoldova-week3/daily_script.py`\n\n**2. Test the cron command once** (replace `/Users/you/`):\n\n`/Users/you/codemoldova-week3/.venv/bin/python3 /Users/you/codemoldova-week3/daily_script.py`\n\n**3. Open your schedule:** `crontab -e`\n\n**4. Paste one line** (example = every day at **8:00 AM**):\n\n`0 8 * * * /Users/you/codemoldova-week3/.venv/bin/python3 /Users/you/codemoldova-week3/daily_script.py >> /Users/you/Downloads/daily_script.log 2>&1`\n\n**Time format:** `minute hour * * *`\n\n- `0 8 * * *` → 8:00 AM daily\n- `30 18 * * *` → 6:30 PM daily\n\n**5. Check the log** after a test run or tomorrow:\n\n`cat ~/Downloads/daily_script.log`\n\n**Windows:** Task Scheduler → Create Basic Task → Daily → Start a program → `.venv\\Scripts\\python.exe` with argument = full path to `daily_script.py`.\n\n**Mac must be on** at the scheduled time. Sleeping laptop may skip a run.\n\n**Stuck?** Paste your crontab line + log file into Claude or Cursor: \"Help me schedule my Python script to run daily on Mac with cron.\"",
              code: {
                lang: "bash",
                snippet:
                  "cd ~/codemoldova-week3\nsource .venv/bin/activate\nwhich python3\n\n# Test (replace /Users/you/)\n/Users/you/codemoldova-week3/.venv/bin/python3 /Users/you/codemoldova-week3/daily_script.py\n\n# crontab -e — paste:\n0 8 * * * /Users/you/codemoldova-week3/.venv/bin/python3 /Users/you/codemoldova-week3/daily_script.py >> /Users/you/Downloads/daily_script.log 2>&1\n\n# Check log\ncat ~/Downloads/daily_script.log",
              },
              task: "Crontab line saved. Log file exists after you run the test command (or after the scheduled time).",
            },
            {
              title: "Demo — silent run",
              timing: "Lab",
              content:
                "Show a partner:\n\n1. Your script file (no `input()` in the code)\n2. One manual run from terminal — no typing at prompts\n3. Your crontab line or Task Scheduler screenshot\n4. The log file or output file proving it worked",
              task: "Partner signs off: script runs hands-free and schedule is set.",
            },
            {
              title: "Finished early?",
              timing: "Stretch",
              content:
                "Pick **one** bonus:\n\n- **Second schedule** — different time, or run the headline scraper on cron too (use full paths + a separate `.log` file)\n- **Better output** — timestamp every line in the log, or save a dated file like `report_2026-05-28.txt`\n- **Smarter defaults** — read options from `data/config.json` so you can change behavior without editing Python\n- **Windows deep dive** — document your Task Scheduler steps in README for a friend on Windows\n\nAsk AI for help on whichever bonus you pick.",
              task: "Complete one bonus and show the mentor what changed.",
            },
          ],
          labCheatsheet: {
            title: "Daily automation quick reference",
            content: "Use during build day.",
            sections: [
              {
                title: "Before cron",
                methods: [
                  { name: "No input()", desc: "Cron cannot type answers" },
                  { name: "python3 daily_script.py", desc: "Must work with zero prompts" },
                  { name: "which python3", desc: "Copy full path for crontab" },
                ],
              },
              {
                title: "Mac cron",
                methods: [
                  { name: "crontab -e", desc: "Edit schedule" },
                  { name: "0 8 * * * …", desc: "8:00 AM every day" },
                  { name: ">> …log 2>&1", desc: "Save errors + output" },
                  { name: "cat ~/Downloads/daily_script.log", desc: "Verify it ran" },
                ],
              },
            ],
          },
          homework: {
            title: "Confirm your schedule",
            desc: "Make sure tomorrow’s run will actually happen.",
            tasks: [
              "Open `~/Downloads/daily_script.log` (or run the test command again) and confirm new output.",
              "Add 3 lines to README.md: what the script does daily, your cron time, full paths you used.",
              "Optional: change the schedule to a time you will have your laptop open.",
            ],
          },
          challenges: {
            base: {
              title: "Hands-free script",
              desc: "Runs with no input() and saves or prints output.",
              steps: [
                "daily_script.py (or upgraded my_automation.py) exists in codemoldova-week3",
                "python3 script.py finishes with zero prompts",
                "Output file or log shows the script did something useful",
              ],
            },
            medium: {
              title: "Scheduled daily",
              desc: "Cron or Task Scheduler line added.",
              steps: [
                "Full paths to venv python + script in the schedule",
                "Test command run manually once with no errors",
                "daily_script.log created in Downloads (or your chosen log path)",
              ],
            },
            hard: {
              title: "Reliable daily run",
              desc: "Polish for real use.",
              steps: [
                "try/except around file/network code with a message in the log",
                "Dated output filename or timestamp in the log",
                "README documents the schedule time and how to check the log",
              ],
            },
            bonus:
              "Finished early task: second cron job, config.json settings, or schedule the headline scraper too — no input(), separate log file.",
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
          title: "HTML & CSS literacy",
          lessonDesc:
            "Follow the **class slides** and the sections below: where the web started, how it evolved, and how AI changes the way you build. When you are ready to code, switch to the **Lab** tab.",
          desc: "Download the reference files, walk through HTML and CSS, build one topic site with AI, deploy to GitHub + Vercel, and add your first portfolio card.",
          goal:
            "See where the web came from, how building changed with AI, then leave able to read HTML/CSS, ship a single-page site, and link it from your portfolio.",
          preview:
            "Lesson: web history and AI-era building · Lab: reference walkthrough → your first deploy.",
          labExampleUrl: "/lesson/week4_reference/index.html",
          labExampleDownload: "index.html",
          labExampleLabel: "Download reference HTML",
          labDataUrl: "/lesson/week4_reference/style.css",
          labDataLabel: "Download reference CSS",
          labDataDownload: "style.css",
          slideDeck: {
            label: "Week 4 · Monday slide deck",
            url: "https://docs.google.com/presentation/d/1B3BgIacUW956OitI3wJ3yrnNO5FFr46wGPiqNux-ujA/edit?usp=sharing",
          },
          lessonSteps: [
            {
              title: "Where the web started",
              content:
                "In 1989, **Tim Berners-Lee** at CERN proposed a way for scientists to share documents over a network. By 1991 the first public website was live: a simple page of links explaining the project — no ads, no frameworks, just **HTML** (structure) and hyperlinks.\n\nThat first site proved a idea: plain text files with tags could become a global library anyone could browse.",
              links: [
                {
                  label: "First website (CERN, 1991)",
                  href: "http://info.cern.ch/hypertext/WWW/TheProject.html",
                },
              ],
            },
            {
              title: "Early web creativity",
              content:
                "The 1990s and 2000s were messy and experimental. Home pages were hand-written; layout was tables and `<font>` tags; GIFs and bright colors were normal. In 2005, **The Million Dollar Homepage** sold one million pixels for \\$1 each — proof that a silly, simple HTML grid could become a real business. It is crude by today’s standards, but it is honest web history: one file, many links, no app store.",
              links: [
                {
                  label: "The Million Dollar Homepage",
                  href: "https://milliondollarhomepage.com/",
                },
              ],
            },
            {
              title: "How HTML and the web evolved",
              content:
                "The platform grew in layers:\n\n- **HTML** gained semantic tags (`header`, `nav`, `article`) so structure means something, not just “make it bold”\n- **CSS** (late 1990s onward) separated **look** from **content** — one `style.css` can style a whole site\n- **JavaScript** added interactivity (menus, forms, later full apps)\n- **Frameworks** (React, Next.js, etc.) help teams ship large sites; under the hood they still output HTML and CSS\n- **Mobile** pushed **responsive** design — one page that reflows on phone and desktop\n\nYou do not need every layer today. You need to recognize **HTML + CSS** in the files you and AI produce.",
            },
            {
              title: "Building before AI — and with AI",
              content:
                "**Before AI (typical workflow):**\n\n- Read docs and tutorials, copy snippets, trial and error in the editor\n- Designers in Figma; developers hand-code or use templates\n- Slow for beginners; powerful once you know the patterns\n\n**With AI (your workflow this course):**\n\n- You describe the page; AI drafts `index.html` and `style.css`\n- **You** read the output: landmarks, links, classes, spacing — and ask for fixes\n- DevTools + clear prompts replace memorizing every property\n\nThe skill shift: less “type every tag from memory,” more **literacy + direction** — know what good structure looks like, catch mistakes, ship.",
            },
            {
              title: "Quick review — terminal & scripts",
              content:
                "From Week 3:\n\n- **cd**, **ls**, **pwd** — move and inspect folders\n- **python3 script.py** — run a file from the terminal\n- **Scripts** — `.py` files; Wednesday used **input()**, Thursday scheduled hands-free runs",
              task: "Open terminal, `cd` to your project folder, and `ls` — confirm you remember the path.",
            },
            {
              title: "Literacy, not memorization",
              content:
                "When AI or a template gives you HTML/CSS, your job is to **understand** what you are looking at: landmarks, links, lists, images, forms. Writing every tag from memory is optional — reading and directing edits is the skill.\n\nSwitch to the **Lab** tab when you are ready to download the reference files and build.",
            },
          ],
          steps: [
            {
              title: "Walkthrough — unstyled reference",
              content:
                "Download **reference HTML** above. Open `index.html` in the browser — no stylesheet yet. For line-by-line notes, use **Reference HTML (commented)** in Resources.",
              task: "Point to `header`, `nav`, `main`, and `footer` in your editor and in the browser.",
              links: [
                { label: "MDN — HTML basics", href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" },
              ],
            },
            {
              title: "Walkthrough — connect CSS",
              content:
                "In `index.html` **head**, uncomment `<link rel=\"stylesheet\" href=\"style.css\" />`. Reload. Open `style.css` and notice what changed (fonts, max-width, nav flex, card padding, link hover). For annotated CSS, download **Reference CSS (commented)** from Resources.",
              task: "Name one CSS property you can now explain when you see it in a file.",
              links: [
                { label: "MDN — CSS first steps", href: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" },
              ],
            },
            {
              title: "DevTools literacy",
              content:
                "Right-click → Inspect. Find which rule sets color or spacing. Toggle a property off and on. Use what you learn to **prompt AI** (“increase line-height on body”, “add max-width on main”) rather than typing blind.",
              task: "Change one spacing value in DevTools, then ask AI to apply the same idea in your project file.",
            },
            {
              title: "Challenge — your first single-page site",
              timing: "Lab",
              content:
                "Pick **one** topic below. Use AI + today’s reference to create `index.html` + `style.css` in a new folder (header, nav, main sections, footer). Keep it simple and readable.\n\n1. **Hometown guide** — 3 places + why you like them\n2. **Hobby deep-dive** — what it is, gear/steps, why it matters\n3. **Study playlist** — 5 tracks/albums + mood for coding\n4. **Local food map** — 3 spots, what to order, price vibe\n5. **Dream trip** — destination, itinerary, packing list",
              task: "Open your page locally in the browser before deploying.",
            },
            {
              title: "Ship — GitHub + Vercel",
              content:
                "Create a **new GitHub repo** for this project only (not your portfolio). Push `index.html` + `style.css`. Import the repo on Vercel → deploy → copy the **HTTPS** live URL.",
              task: "Post the live URL in the class thread.",
              links: [
                { label: "Vercel — static sites", href: "https://vercel.com/docs/frameworks/static" },
              ],
            },
            {
              title: "Portfolio — clone template + add your project",
              content:
                "Your **portfolio** is a separate repo (Next.js hub that **links** to project sites — it does not host them).\n\n```bash\ngit clone https://github.com/utahmoldovapartnership/porfolio-template.git yourname-portfolio\ncd yourname-portfolio\nnpm install\nnpm run dev\n```\n\n1. Push to **your** GitHub repo `yourname-portfolio`\n2. Import on Vercel — preset **Next.js**\n3. Edit `data/site.ts` (name, bio, contact)\n4. Edit `data/projects.ts` — add a **project entry** with `title`, `description`, `liveUrl`, `repoUrl` (optional: screenshot in `public/projects/`). Use whatever key/slug fits — copy the pattern from the template.",
              task: "Portfolio deploys on Vercel; your Monday project card links to your live + repo URLs.",
              links: [
                { label: "Portfolio template (GitHub)", href: "https://github.com/utahmoldovapartnership/porfolio-template" },
                { label: "Vercel — Next.js deploy", href: "https://vercel.com/docs/frameworks/nextjs" },
              ],
            },
          ],
          homework: {
            title: "Site + portfolio live",
            desc: "Finish in class if possible; otherwise complete before Wednesday.",
            tasks: [
              "Monday project: public Vercel URL + GitHub repo",
              "Portfolio: project entry in data/projects.ts with liveUrl + repoUrl",
              "Optional: README on project repo with one sentence about the topic",
            ],
          },
        },
        wed: {
          title: "Design for the AI era",
          desc: "Design is what separates usable AI output from great sites. Compare ugly vs pretty examples, learn prompting and reference hunting (Material, inspiration sites), touch Figma lightly, then ship **v2** of Monday’s site and update your portfolio.",
          preview: "Ugly vs pretty HTML, design tactics for AI, redesign Monday’s site as v2, deploy, add to portfolio.",
          labExampleUrl: "/lesson/week4_design_ugly.html",
          labExampleDownload: "week4_design_ugly.html",
          labExampleLabel: "Download ugly design example",
          labDataUrl: "/lesson/week4_design_pretty.html",
          labDataLabel: "Download pretty design example",
          labDataDownload: "week4_design_pretty.html",
          steps: [
            {
              title: "Quick review — Monday site",
              timing: "Lab",
              outlineColor: "ube",
              content:
                "From Monday:\n\n- Semantic landmarks — `header`, `nav`, `main`, `footer`\n- Linked stylesheet — `<link rel=\"stylesheet\" href=\"style.css\">`\n- You can **read** tags and basic CSS, even if AI wrote most of it",
              task: "Open Monday’s repo locally — name one HTML tag and one CSS rule you can explain.",
            },
            {
              title: "Ugly vs pretty",
              content:
                "Download both design examples. Same **content structure**, different CSS. List what makes the ugly page hard to use (clashing colors, no hierarchy, cramped type, no max-width) vs the pretty page (variables, spacing rhythm, clear headings, hover/focus).",
              task: "Write three “do” rules and three “don’t” rules for your own redesign.",
            },
            {
              title: "Design when AI builds",
              content:
                "Ask for **layout and tokens before code**: audience, mood, 2–3 colors, font vibe. Request **3 distinct directions**, pick one, then generate HTML/CSS. Iterate with screenshots: “more whitespace”, “stronger h1 hierarchy”.",
              task: "Write one design prompt you will use on Monday’s site (role + constraints + output format).",
              links: [
                { label: "Claude", href: "https://claude.ai" },
                { label: "Material Design 3", href: "https://m3.material.io/" },
              ],
            },
            {
              title: "Reference hunting",
              content:
                "Steal **structure**, not pixels: browse Material components, [Google Fonts](https://fonts.google.com/), [Land-book](https://land-book.com/) or [Mobbin](https://mobbin.com/) for nav patterns, card grids, and button styles. Describe what you like in words for AI.",
              task: "Save one screenshot or link of a site layout you want to echo (not copy exactly).",
            },
            {
              title: "Figma (optional, ~5 min)",
              content:
                "Figma is one tool among many — AI design tools are rising. If you use Figma: quick frame, auto-layout, copy hex into your prompt. Not required to finish today.",
              task: "Optional: export one color hex from Figma into your AI prompt.",
              links: [
                { label: "Figma Learn", href: "https://help.figma.com/hc/en-us/categories/360002051613" },
              ],
            },
            {
              title: "Challenge — Monday site v2",
              timing: "Lab",
              content:
                "Redesign Monday’s site to be **visually appealing**. Use the same repo. Save as `index-v2.html` + `style-v2.css` **or** replace `index.html` / `style.css` on a `v2` branch — mentor will pick one pattern for the room.",
              task: "v2 loads locally and looks clearly better than Monday v1.",
            },
            {
              title: "Ship v2 + add to portfolio",
              content:
                "Push to GitHub → Vercel redeploys on your **project** repo. In your portfolio repo, **add or update** a project entry in `data/projects.ts` with the v2 `liveUrl`, `repoUrl`, `title`, and `description`. Same card as Monday (updated URL) or a new card for v2 — your choice. Optional: screenshot in `public/projects/`.",
              task: "Portfolio card for your redesigned site is clickable and opens the v2 live URL.",
              links: [
                { label: "Portfolio template (GitHub)", href: "https://github.com/utahmoldovapartnership/porfolio-template" },
              ],
            },
          ],
          homework: {
            title: "v2 live + portfolio",
            desc: "Optional: README before/after screenshot or one paragraph on design choices.",
            tasks: [
              "v2 on Vercel (HTTPS)",
              "Portfolio: project entry in data/projects.ts updated with v2 liveUrl + repoUrl",
              "Optional: compare to ugly/pretty checklist from class",
            ],
          },
        },
        thu: {
          title: "Second project ship day",
          desc: "Build day: a **new** site in a **new** repo — apply HTML literacy, CSS, and Wednesday’s design tactics from the start. Deploy and add it to your portfolio.",
          preview: "New idea, new repo, design-first build, GitHub + Vercel, portfolio updated.",
          steps: [
            {
              title: "Assets and paths",
              content:
                "Compress large images, every `img` has `alt`, paths like `./style.css` work from repo root. Test locally before push.",
              task: "Open DevTools → Network tab → reload; no 404 on CSS or images.",
            },
            {
              title: "Mini recap",
              timing: "Lab",
              outlineColor: "val",
              content:
                "Today’s checklist:\n\n- **HTML** — `header`, `nav`, `main`, `footer`, semantic sections\n- **CSS** — linked stylesheet, variables, spacing, readable `max-width`\n- **Design** — hierarchy, contrast, hover/focus; prompt AI with references",
              task: "Skim your Monday and Wednesday repos — one thing you will do better on today’s site.",
            },
            {
              title: "Pick a new project",
              content:
                "New **GitHub repo** (not Monday’s). Pick one idea or ask AI for five ideas in a niche you care about:\n\n- Personal **now** page (goals, tools you use)\n- Fan page (game, artist, team)\n- Event invite (fake meetup + schedule)\n- Mini resource list (best free tools for students)\n- Cause one-pager (facts + how to help)\n- **Or:** AI-generated list → you choose",
              task: "Write the repo name and one-sentence pitch in your README.",
            },
            {
              title: "Build + design pass",
              timing: "Lab",
              content:
                "Create `index.html` + `style.css`. Apply Wednesday’s tactics: tokens, spacing, clear headings, good contrast. Use AI deliberately — you review every section.",
              task: "Phone-width check: readable text without horizontal scroll.",
            },
            {
              title: "Ship + add to portfolio",
              content:
                "Push Thursday site to its **own** GitHub repo → Vercel (static HTML). In your portfolio repo, add a **new project entry** in `data/projects.ts` with `liveUrl`, `repoUrl`, `title`, and `description`. Copy the pattern from your existing cards.",
              task: "Share Thursday project URL + portfolio hub URL in the class thread.",
              links: [
                { label: "GitHub — create a repo", href: "https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository" },
                { label: "Vercel — deploy", href: "https://vercel.com/docs/deployments/overview" },
                { label: "Portfolio template (GitHub)", href: "https://github.com/utahmoldovapartnership/porfolio-template" },
              ],
            },
          ],
          homework: {
            title: "Projects on portfolio",
            desc: "Each shipped Week 4 project should have a working portfolio link.",
            tasks: [
              "Thursday project live on Vercel (static repo)",
              "Portfolio: each project entry in data/projects.ts has liveUrl + repoUrl set",
              "Optional: custom favicon on Thursday project or portfolio thumbnails",
            ],
          },
          challenges: {
            base: {
              title: "New repo deployed",
              desc: "Thursday site is a separate repo from Monday.",
              steps: [
                "Public GitHub repo with index.html at root",
                "Vercel HTTPS URL loads",
                "New project entry in data/projects.ts with liveUrl + repoUrl",
              ],
            },
            medium: {
              title: "Design checklist pass",
              desc: "Self-review against ugly vs pretty lesson.",
              steps: [
                "Clear h1 → body hierarchy",
                "Readable line-height and max-width",
                "Link/button hover or focus visible",
              ],
            },
            hard: {
              title: "README design notes",
              desc: "Document intent for Demo Day future-you.",
              steps: [
                "What the site is for",
                "One design choice you are proud of",
                "One thing to improve later",
              ],
            },
            bonus: "Custom favicon on the Thursday project.",
          },
        },
      },
      {
        num: 5,
        mon: {
          title: "React fundamentals",
          hideClassSlides: true,
          lessonDesc:
            "Follow the **Lesson** tab first — what React is, what frameworks are, and why this course uses Next.js in a **separate** project repo. **Lab:** use AI to build Rock Paper Scissors. When you are ready to code, switch to **Lab**.",
          desc: "Workshop 1: Lesson on React and frameworks, then Lab in a new Next.js repo — use AI to scaffold the project and build a Rock Paper Scissors game with components and JSX.",
          goal:
            "Explain React\u2019s role on the web, compare framework options honestly, and ship a playable Rock Paper Scissors game in a new Next.js repo built with AI.",
          preview:
            "Lesson: React good/bad \u00b7 frameworks \u00b7 why Next.js \u00b7 Lab: AI \u2192 Rock Paper Scissors \u00b7 Challenge: scoreboard stretch.",
          labDurationLabel: "50 min",
          mainPoints: [
            "React builds **interactive UI** from **components** and **JSX**",
            "React is a **library**; **Next.js** is a **framework** (routing, build, deploy)",
            "**Separate repo** this week \u2014 portfolio only gets a link Thursday",
            "**Use AI to build** \u2014 scaffold, game logic, and polish; you review every file",
            "**Props** and **components** \u2014 even a simple game splits into reusable pieces",
          ],
          lessonSteps: [
            {
              title: "Where we left off (Week 4)",
              content:
                "You shipped three **static** HTML/CSS sites and a **portfolio hub** that links to them. Static pages are great for content that rarely changes.\n\nThis week you build **interactive** apps \u2014 buttons, forms, and lists that update without a full page reload.",
              task: "Name one feature you could not build with only HTML/CSS from Week 4 (e.g. live counter, add-to-list).",
            },
            {
              title: "The problem React solves",
              content:
                "The old approach: `document.querySelector` + manual DOM edits \u2014 fine for tiny demos, painful at scale.\n\nReact\u2019s idea: describe **what the UI should look like** for the current data. When data changes, React updates the screen. UI becomes a function of **state** (Wednesday deep dive).",
              links: [{ label: "React \u2014 Quick Start", href: "https://react.dev/learn" }],
            },
            {
              title: "What React is",
              content:
                "React is a **JavaScript library** for building user interfaces \u2014 not a database, not a server.\n\nCreated at Meta; open source; used on Instagram, Netflix, Airbnb, and thousands of products. You write **components** \u2014 functions that return **JSX** (HTML-like syntax). Compose small pieces into full pages.",
            },
            {
              title: "React vs React Native",
              content:
                "**React** (what you learn this week) targets the **web browser**. Your JSX becomes HTML elements like `<button>` and `<div>`.\n\n**React Native** uses the **same React ideas** \u2014 components, JSX, props, state \u2014 but builds **mobile apps** for iOS and Android, not websites. Instead of `<div>` you use `<View>`; instead of `<p>` you use `<Text>`. One codebase can ship to both app stores.\n\n| | **React (web)** | **React Native (mobile)** |\n|--|-----------------|---------------------------|\n| Runs in | Browser | Phone / tablet app |\n| UI output | HTML + CSS | Native iOS/Android widgets |\n| Deploy to | Vercel, URL | App Store, Google Play |\n\nLearn React on the web first; React Native skills transfer later if you want to build phone apps.",
              links: [
                { label: "React Native \u2014 Getting started", href: "https://reactnative.dev/docs/getting-started" },
              ],
              task: "Name one app on your phone that might be built with React Native (hint: many Meta apps).",
            },
            {
              title: "What React is good at",
              content:
                "- **Interactive interfaces** \u2014 forms, dashboards, toggles, live lists\n- **Reusable components** \u2014 build once, reuse with different props\n- **Complex front-ends** where many parts share and update the same data\n- **Ecosystem** \u2014 jobs, docs, AI training data, community answers\n- **Component thinking** pairs well with AI \u2014 \u201cBuild a Rock Paper Scissors game with ChoiceButton components\u201d",
            },
            {
              title: "What React is bad at (honest limits)",
              content:
                "- **Simple brochure sites** \u2014 static HTML is faster (your Week 4 sites!)\n- **Tiny scripts or automations** \u2014 Python in the terminal is the right tool (Week 3)\n- **Content-only blogs** without extra setup \u2014 SSR/SSG helps (Next.js)\n- **Learning curve** \u2014 JSX, build tools, and state take time\n- **Not full-stack alone** \u2014 React is the **view** layer; APIs and databases are separate",
              task: "Give one example from your life that fits \u201cstatic site\u201d vs \u201cReact app.\u201d",
            },
            {
              title: "JavaScript bridge (minimum before JSX)",
              content:
                "You do not need to be a JS expert \u2014 you need these patterns:\n\n- `const` / `let`, arrow functions `() => {}`, template strings\n- Arrays: `.map()`, `.filter()` \u2014 render lists in React\n- Destructuring: `const { title } = props`",
              code: {
                lang: "javascript",
                snippet:
                  'const skills = ["html", "css", "python"];\nconst loud = skills.map((s) => s.toUpperCase());\nconsole.log(loud.join(", "));\n\nconst props = { title: "CodeMoldova" };\nconst { title } = props;\nconsole.log(title);',
              },
              task: "In DevTools console or a scratch file, `.map()` an array of three strings to uppercase.",
            },
            {
              title: "What is a framework?",
              content:
                "**Library (React):** tools you call when you need them \u2014 flexible, more decisions.\n\n**Framework (Next.js, etc.):** opinionated structure \u2014 routing, folders, build, often a deploy path.\n\nAnalogy: React = LEGO bricks; Next.js = a kit with baseplate, instructions, and a box. Frameworks still output HTML/CSS/JS to the browser \u2014 same platform as Week 4.",
            },
            {
              title: "Framework options (quick tour)",
              content:
                "| Option | Vibe | When it shines |\n|--------|------|----------------|\n| **Vanilla HTML/CSS/JS** | No build step | Landing pages, Week 4-style sites |\n| **React + Vite** | Lean React SPA | Learning React without Next opinions |\n| **Next.js (React)** | Full-stack React framework | Apps + SEO + Vercel deploy |\n| **Vue / Nuxt** | Gentle docs | Teams preferring Vue |\n| **Svelte / SvelteKit** | Less boilerplate | Performance-focused small apps |\n| **Angular** | Heavy, enterprise | Large corporate codebases |\n\nNo wrong career choice \u2014 **shipping one stack deeply** beats sampling five. This course picks **Next.js + React** for reasons below.",
            },
            {
              title: "Why we chose Next.js (for your React project)",
              content:
                "1. **You already deployed Next.js** \u2014 portfolio hub from Week 4; same Vercel flow\n2. **Industry standard** \u2014 React + Next.js matches real jobs\n3. **File structure** \u2014 `app/`, `components/` are predictable for AI and humans\n4. **Separate repo** \u2014 you learn in `yourname-react-app`; portfolio **links** to it Thursday; you do **not** edit portfolio components this week\n5. **AI scaffolds it well** \u2014 Cursor/Claude generate a working Next.js app from one prompt",
              links: [
                { label: "Next.js \u2014 Getting Started", href: "https://nextjs.org/docs/app/getting-started" },
                { label: "Portfolio template (GitHub)", href: "https://github.com/utahmoldovapartnership/porfolio-template" },
              ],
            },
            {
              title: "This week\u2019s workflow",
              content:
                "- **Mon:** Lesson (now) \u2192 Lab (AI + Rock Paper Scissors) \u2192 Challenge (scoreboard stretch)\n- **Wed:** state + events \u2192 todo lab (practice only)\n- **Thu:** choose your own React project \u2192 deploy \u2192 one edit in portfolio `data/projects.ts`",
              task: "Open the **Lab** tab when the framework picture makes sense.",
            },
          ],
          steps: [
            {
              title: "Quick review — Week 4",
              timing: "Lab",
              outlineColor: "val",
              content:
                "From Week 4:\n\n- Three **static** project repos + Vercel URLs\n- **Portfolio hub** \u2014 cards in `data/projects.ts` linking out\n- **HTML/CSS literacy** \u2014 you read what AI generates\n\nThis week: new repo `yourname-react-app`. **Do not code inside the portfolio repo.**",
              task: "Open your portfolio hub URL \u2014 confirm your existing project cards work. React code this week lives in a separate repo, not the portfolio.",
            },
            {
              title: "Create GitHub repo",
              content:
                "On GitHub: create an empty repo `yourname-react-app` (no README if you will paste AI output). Clone locally, open the folder in Cursor.",
              task: "Terminal: `git clone` your repo URL, `cd` into it, confirm `pwd` ends with `yourname-react-app`.",
              links: [
                {
                  label: "GitHub \u2014 create a repo",
                  href: "https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository",
                },
              ],
            },
            {
              title: "AI scaffold — Next.js project",
              content:
                "**Rule today: AI writes first, you review.** Paste the prompt below into Cursor (Agent mode). Do not hand-type the boilerplate \u2014 read what AI generates, then run commands yourself.",
              code: {
                lang: "text",
                snippet:
                  "Create a minimal Next.js 15 app in this empty folder:\n- App Router, TypeScript\n- app/page.tsx with a simple heading\n- components/ folder ready for game files\n- README with npm install and npm run dev instructions\nDo not add extra pages or auth. Keep files small.",
              },
              task: "After AI finishes, list three files it created and what each is for.",
            },
            {
              title: "Install and run",
              content:
                "In the project folder terminal:\n\n```bash\nnpm install\nnpm run dev\n```\n\nOpen localhost in your browser. If AI left errors, paste the terminal output back into Cursor and ask it to fix.",
              task: "Dev server runs with no install errors.",
            },
            {
              title: "AI — Rock Paper Scissors game",
              timing: "Lab",
              content:
                "Paste the game prompt into Cursor. AI should create a **client component** (with `'use client'`) and wire it into `app/page.tsx`.\n\nYou need:\n\n- Three buttons: Rock, Paper, Scissors\n- Computer picks randomly\n- Screen shows both choices and Win / Lose / Tie\n- At least **2 components** (e.g. `RockPaperScissors` + `ChoiceButton` or `ResultBanner`)",
              code: {
                lang: "text",
                snippet:
                  "Build a Rock Paper Scissors game for this Next.js app:\n- components/RockPaperScissors.tsx with 'use client'\n- Three buttons for rock, paper, scissors\n- On click: save player choice, pick random computer choice, show winner\n- Show player pick, computer pick, and result text (You win / You lose / Tie)\n- Extract at least one child component with props (e.g. ChoiceButton with label and onPick)\n- Import the game in app/page.tsx\n- Simple readable styling, mobile-friendly\nKeep logic in plain functions I can read. No extra libraries.",
              },
              task: "Play one full round in the browser \u2014 all three buttons work and a result appears.",
            },
            {
              title: "Read what AI built",
              content:
                "Before changing anything, trace the code AI wrote:\n\n- Which file has **`'use client'`**? Why?\n- Where are **props** passed between components?\n- Where does the **winner** get decided?\n\nYou do not need to memorize every line \u2014 you need to **find** answers when something breaks.",
              links: [
                {
                  label: "Next.js \u2014 Project structure",
                  href: "https://nextjs.org/docs/app/getting-started/project-structure",
                },
              ],
              task: "Point to one prop in your code and explain what it carries.",
            },
            {
              title: "AI polish — make it yours",
              content:
                "Ask AI for **one** visual upgrade. Examples:\n\n- Emoji on buttons\n- Dark card layout with clear headings\n- Bigger tap targets for phone\n\nReview the diff before you accept. Reject changes you cannot explain.",
              code: {
                lang: "text",
                snippet:
                  "Polish my Rock Paper Scissors UI: add emoji to each choice button, center the layout, and make buttons large enough for mobile. Do not change the game logic.",
              },
              task: "Game still works after polish. You can name one style change AI made.",
            },
            {
              title: "Fix with AI",
              content:
                "Something broken? **Do not guess for 20 minutes.** Copy the error from terminal or browser console into Cursor:\n\n\u201cThis error appeared when I clicked Scissors: [paste error]. Fix RockPaperScissors.tsx only.\u201d\n\nThat is how professional devs use AI.",
              task: "If you hit a bug, fix it with an AI prompt and note what the real problem was.",
            },
            {
              title: "Git — first push",
              content:
                "Commit your working game. Push to GitHub. Wednesday continues in the **same repo** (todo app replaces or lives beside the game).",
              task: "`git status` clean after push; GitHub shows your Rock Paper Scissors commit.",
            },
          ],
          challengeTab: {
            title: "Rock Paper Scissors — scoreboard",
            content:
              "Base game must still work. Use **AI** to add a simple scoreboard \u2014 do not rebuild from scratch.",
            task:
              "Ask AI to add: (1) **Win / loss / tie counters** that update each round, (2) a **Play again** or **Reset scores** button, (3) scores displayed on screen. Test three rounds and confirm counts match. `npm run dev` stays error-free.",
            hints: [
              "Prompt: \u201cAdd win, loss, and tie state to RockPaperScissors.tsx. Show counts on screen. Add Reset scores button.\u201d",
              "If counts look wrong, console.log after each round before asking AI again.",
              "Wednesday will teach `useState` in depth \u2014 today it is OK if AI wrote the state for you; read where it lives.",
            ],
          },
        },
        wed: {
          title: "React state & events",
          hideClassSlides: true,
          lessonDesc:
            "**Lesson** tab explains state, re-rendering, `'use client'`, and events. **Lab:** use AI to build the todo app step by step. **Challenge** stretches with filters or a `TaskItem` component.",
          desc: "Workshop 2: Lesson on state and interactivity, then Lab in your React repo \u2014 use AI to build a todo app with `useState`, events, and controlled inputs.",
          goal:
            "Understand why interactive React needs state; use AI to ship a working todo add/complete flow in `yourname-react-app`; read and own the code AI writes.",
          preview:
            "Lesson: state \u00b7 useState \u00b7 client components \u00b7 Lab: AI \u2192 TodoApp \u00b7 Challenge: filter or TaskItem.",
          labDurationLabel: "50 min",
          mainPoints: [
            "**State** = data that changes while the user uses the app",
            "**Use AI to build** \u2014 prompt for components, then read every `useState` and handler",
            "Next.js: **`'use client'`** on any file using hooks or browser events",
            "**Controlled inputs** \u2014 input `value` tied to state",
            "**Lists** \u2014 store array in state, `map` to JSX, stable `key` per row",
          ],
          lessonSteps: [
            {
              title: "Quick review — Monday",
              content:
                "From Monday:\n\n- **Rock Paper Scissors** in `yourname-react-app` \u2014 built with AI\n- **Components** + **props** \u2014 e.g. choice buttons, result display\n- **Separate repo** \u2014 not your portfolio",
              task: "Open your React repo \u2014 name two component files from the RPS game.",
            },
            {
              title: "Static vs interactive UI",
              content:
                "Monday\u2019s game updates when you **click** \u2014 no page reload. That is interactive UI. The browser keeps JavaScript running **in the tab** to hold choices and scores. React keeps the screen in sync when that data changes. Wednesday you learn the mechanism (`useState`) behind what AI may have already written.",
            },
            {
              title: "What is state?",
              content:
                "**State** = memory a component keeps between renders (counter value, todo list, form text).\n\nDifferent from **props** (from parent) and plain **variables** inside a function (reset every render unless stored in state). When state updates, React **re-renders** \u2014 runs your component again with new data.",
            },
            {
              title: "useState in one minute",
              content:
                "`const [count, setCount] = useState(0)` \u2014 `count` is current value, `setCount` updates it.\n\nNever mutate directly: `count++` is wrong \u2192 `setCount(count + 1)` is right. Two counters on screen = two separate states.",
              code: {
                lang: "tsx",
                snippet:
                  "'use client';\nimport { useState } from 'react';\n\nexport function Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Clicks: {count}\n    </button>\n  );\n}",
              },
              links: [
                {
                  label: "React \u2014 State: a component\u2019s memory",
                  href: "https://react.dev/learn/state-a-components-memory",
                },
              ],
            },
            {
              title: "Why 'use client' in Next.js",
              content:
                "Next.js App Router defaults to **Server Components** \u2014 run on the server, no hooks in the browser.\n\n**`useState`, `onClick`, `onChange`** need a **Client Component**. Add `'use client'` as the **first line** of files that use hooks or events.\n\nRule: **page can stay server**; import a client component for interactive parts.",
              links: [
                {
                  label: "Next.js \u2014 Server and Client Components",
                  href: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
                },
              ],
            },
            {
              title: "Events in React",
              content:
                "`onClick={() => setCount(c => c + 1)}` \u2014 camelCase, pass a **function** not a string.\n\n`onChange` on inputs fires on every keystroke. Handlers can be inline or named above the `return`. React wraps browser events so they behave consistently.",
            },
            {
              title: "Controlled inputs",
              content:
                "Bind the input to state:\n\n`<input value={text} onChange={e => setText(e.target.value)} />`\n\nReact **controls** the value \u2014 single source of truth. Needed for todo fields, search boxes, and forms.",
              code: {
                lang: "tsx",
                snippet:
                  "const [text, setText] = useState('');\nreturn (\n  <>\n    <input value={text} onChange={(e) => setText(e.target.value)} />\n    <p>You typed: {text}</p>\n  </>\n);",
              },
            },
            {
              title: "Lists and keys",
              content:
                "Store todos in state: `[{ id: 1, text: 'Buy milk', done: false }]`\n\nRender: `tasks.map(task => <TaskRow key={task.id} task={task} />)`\n\n**`key`** helps React track rows \u2014 use a stable unique `id`, not array index if items reorder.",
              links: [{ label: "React \u2014 Rendering lists", href: "https://react.dev/learn/rendering-lists" }],
            },
            {
              title: "Conditional rendering",
              content:
                "Empty list: `{tasks.length === 0 && <p>No tasks yet</p>}`\n\nDone styling: `className={task.done ? 'line-through' : ''}`\n\nShow/hide UI from state \u2014 no manual `display: none` hacks.",
            },
            {
              title: "Today\u2019s lab target",
              content:
                "Build **`TodoApp`** with AI \u2014 add a task, mark done or remove, list renders from state. Thursday you polish this into your shipped project.",
              task: "Switch to the **Lab** tab.",
            },
          ],
          steps: [
            {
              title: "Quick review — components & props",
              timing: "Lab",
              outlineColor: "ube",
              content:
                "From Monday:\n\n- **Rock Paper Scissors** game in `components/`\n- **AI-built** client component with buttons and results\n- **`npm run dev`** in `yourname-react-app`\n\nSame rule today: **prompt AI, then read the code** before you accept changes.",
              task: "Start the dev server. Play one round of Rock Paper Scissors to confirm it still works.",
            },
            {
              title: "AI warm-up — counter component",
              content:
                "Before the full todo, ask AI for a tiny **`useState`** demo. Paste the prompt, review the file it creates, then import it in `page.tsx`.",
              code: {
                lang: "text",
                snippet:
                  "Create components/Counter.tsx for my Next.js app:\n- 'use client' at the top\n- useState starting at 0\n- One button that increments count on click\n- Show the number on screen\nImport Counter in app/page.tsx below my Rock Paper Scissors game (or replace the page content temporarily).",
              },
              task: "Click the counter \u2014 number updates without page reload. Find `useState` in the file AI wrote.",
            },
            {
              title: "Read the state AI used",
              content:
                "Open `Counter.tsx` and answer:\n\n- Where is **`useState`** declared?\n- What function runs on **`onClick`**?\n- Why does the number on screen change without a page reload?\n\nYou are learning to **audit** AI output, not just copy-paste.",
              task: "Point to the `setCount` (or equivalent) line in your file.",
            },
            {
              title: "AI — controlled input practice",
              content:
                "Prompt AI for a small text field that mirrors what you type. Keeps the todo input simpler later.",
              code: {
                lang: "text",
                snippet:
                  "Add components/NameField.tsx to my Next.js app:\n- 'use client'\n- useState for text string\n- Controlled input: value + onChange\n- Paragraph below showing \"You typed: ...\"\nImport it in app/page.tsx for practice.",
              },
              task: "Typing updates the preview text character by character.",
            },
            {
              title: "AI — list in state (mini step)",
              content:
                "Optional 5-minute step: ask AI for a button that appends strings to a list in state and renders `<li>` rows. Same pattern as todo tasks, smaller scope.",
              code: {
                lang: "text",
                snippet:
                  "Add components/SimpleList.tsx: 'use client', useState array of strings, button adds a hardcoded item, map to li with keys. Import on page.tsx.",
              },
              task: "Skip if short on time \u2014 go straight to TodoApp. Otherwise add two items via button.",
            },
            {
              title: "AI — build TodoApp",
              timing: "Lab",
              content:
                "This is today\u2019s main build. Paste the prompt into Cursor. Review every handler before you run.\n\nYou need:\n\n- Text input + **Add** button\n- Each row: task text + **Done** (strike or remove)\n- List renders entirely from state\n- **`'use client'`** on the todo file",
              code: {
                lang: "text",
                snippet:
                  "Build components/TodoApp.tsx for my Next.js app:\n- 'use client'\n- useState for tasks array: { id, text, done }\n- useState for draft text in the input\n- Add button: append new task, clear input\n- Each row: show text + Done button (toggle done with strike-through OR remove)\n- Map tasks to JSX with stable keys (use id)\n- Empty state: \"No tasks yet\" when list is empty\n- Import TodoApp in app/page.tsx as the main interactive section\nKeep it one file unless a child component is obvious. No extra libraries.",
              },
              task: "Add two tasks, mark one done \u2014 UI matches state.",
            },
            {
              title: "AI polish — empty state + layout",
              content:
                "Ask AI to improve readability without breaking behavior. Review the diff.",
              code: {
                lang: "text",
                snippet:
                  "Polish TodoApp.tsx: show \"No tasks yet\" when empty, add spacing/padding, make Add button and input full-width on mobile. Do not change add/done logic.",
              },
              task: "Refresh with zero tasks \u2014 empty message appears. Todo still adds and completes.",
            },
            {
              title: "Fix with AI",
              content:
                "Errors are normal. Paste the **exact** terminal or browser error into Cursor:\n\n\u201cWhen I click Add in TodoApp I get: [paste error]. Fix TodoApp.tsx only. Keep 'use client'.\u201d\n\nIterate until add + done work.",
              task: "If something broke, you fixed it with a prompt \u2014 note what was wrong (missing 'use client', wrong key, etc.).",
            },
            {
              title: "Git push",
              content:
                "Commit your working todo. Push to GitHub. Thursday you pick a **new** project idea in the same repo (or replace the home page).",
              task: "GitHub shows today\u2019s commits on `yourname-react-app`.",
              links: [{ label: "Vercel \u2014 Next.js", href: "https://vercel.com/docs/frameworks/nextjs" }],
            },
          ],
          challengeTab: {
            title: "Todo upgrades",
            content:
              "Your todo from the lab must still add and complete tasks. Use **AI** for the upgrade \u2014 pick one option below and paste a clear prompt.",
            task:
              "**A \u2014 Filter tabs:** All / Active / Done buttons; list filters by `done` flag.\n\n**B \u2014 TaskItem component:** Extract row into `TaskItem.tsx` with props `text`, `done`, `onToggle`, `onRemove`.\n\n**C \u2014 Stats line:** Show \u201c3 tasks, 1 done\u201d below the list from state (no new libraries).",
            hints: [
              "Prompt A: \u201cAdd All / Active / Done filter buttons to TodoApp. Keep full tasks in state, filter before map.\u201d",
              "Prompt B: \u201cExtract TaskItem.tsx with props text, done, onToggle, onRemove. Use in TodoApp.\u201d",
              "If hooks fail, check `'use client'` is line 1 \u2014 ask AI to fix before you edit blindly.",
            ],
          },
        },
        thu: {
          title: "React app build day",
          desc: "Build day: pick your own React project in `yourname-react-app` (Wednesday\u2019s todo stays as practice \u2014 today you ship something you choose). Deploy on Vercel and add it as the **next project card** on your portfolio.",
          preview: "Pick a project \u2192 AI build \u2192 deploy \u2192 add to portfolio.",
          goal:
            "Ship a deployed interactive React app you chose yourself; add it as the next project card on your portfolio hub.",
          steps: [
            {
              title: "Quick review — React week so far",
              timing: "Lab",
              outlineColor: "val",
              content:
                "You already built:\n\n- **Monday** \u2014 Rock Paper Scissors (components, props, AI)\n- **Wednesday** \u2014 Todo app (`useState`, events, lists)\n\nToday: **your idea** in the same repo. Skills you reuse: `'use client'`, `useState`, buttons, inputs, AI prompts.",
              task: "Name one thing from Mon or Wed you will reuse today (e.g. button handlers, list in state).",
            },
            {
              title: "Pick your project",
              content:
                "Choose **one** app to ship today. Stuck? Ask AI: \u201cGive me 5 small React app ideas for a beginner with useState, in these categories: Quick & Visual, Games, Moldova-flavored, Utilities.\u201d\n\n**Quick & Visual** \u2014 fast to polish, satisfying demo\n- Mood picker (emoji buttons change background + message)\n- Quote board (button fetches or cycles quotes)\n- Digital name card / link tree for you\n- Countdown to a date (exam, trip, Demo Day)\n\n**Games** \u2014 interactive and fun to demo\n- Tic-tac-toe or memory card match\n- Number guessing game with guess history\n- Dice roller with last 5 rolls shown\n\n**Moldova-flavored** \u2014 local context, great for Demo Day\n- Chi\u0219in\u0103u café list with filter buttons (your favorites)\n- Moldovan phrase flashcards (RO/RU \u2192 English)\n- Favorite places in Moldova picker (map-style list, not a real map)\n- \u201cWhat to eat today\u201d \u2014 m\u0103m\u0103lig\u0103, pl\u0103cinte, sarmale roulette\n\n**Utilities** \u2014 practical mini-tools\n- Tip calculator or split-bill helper\n- Study timer / pomodoro with start-stop\n- Unit converter (km/miles, \u00b0C/\u00b0F)\n- Simple expense tracker for the week",
              task: "Write your project name + one sentence pitch in README before you code.",
            },
            {
              title: "Define MVP",
              content:
                "One screen, **three interactions**, clear feedback. Examples: click \u2192 something changes, type \u2192 list updates, button \u2192 score increments.\n\nWrite acceptance criteria in README \u2014 what must work when you demo.",
              task: "README has a bullet list of 3 interactions that must work on deploy.",
            },
            {
              title: "Build with AI",
              timing: "Lab",
              content:
                "Same repo `yourname-react-app`. You can replace `app/page.tsx` content or add a new main component.\n\nPaste a prompt like:\n\n\u201cBuild [your idea] as components/MyApp.tsx with 'use client', useState, and at least 2 child components. Wire it into app/page.tsx. Mobile-friendly. No extra libraries.\u201d\n\nReview every file. Wednesday\u2019s todo code can stay in the repo \u2014 it does not have to be on the home page.",
              code: {
                lang: "text",
                snippet:
                  "Build a [YOUR IDEA] app in my Next.js repo:\n- components/MyThursdayApp.tsx with 'use client'\n- useState for the main interaction\n- At least 2 components with props\n- 3 user interactions (buttons, input, or toggles)\n- Import as the main content on app/page.tsx\n- Simple clean styling, works on phone\nExplain what each useState variable holds in a comment.",
              },
              task: "MVP works locally \u2014 all 3 interactions demo-able.",
            },
            {
              title: "Polish + fix with AI",
              content:
                "Phone-width check, empty states, readable labels. Broken? Paste errors into Cursor with the filename.\n\n\u201cPolish MyThursdayApp for mobile. Fix: [paste error].\u201d",
              task: "No horizontal scroll on phone; no red error overlay.",
            },
            {
              title: "Deploy React app",
              content:
                "Push to GitHub \u2192 Vercel import as **Next.js** \u2192 copy **HTTPS** live URL. Test in incognito.",
              task: "Live URL loads your Thursday project; core interactions work on phone.",
              links: [{ label: "Vercel \u2014 Next.js", href: "https://vercel.com/docs/frameworks/nextjs" }],
            },
            {
              title: "Portfolio — add your next card",
              content:
                "In your **portfolio repo only**, edit `data/projects.ts` and add a **new project entry** (the next card on your projects page):\n\n- `title`, `description` (name your Thursday project)\n- `liveUrl` (Vercel React app)\n- `repoUrl` (GitHub)\n- Optional: screenshot in `public/projects/`\n\nUse whatever key/slug fits your file \u2014 copy the pattern from your existing cards.",
              task: "Portfolio hub shows your new card; clicking it opens your deployed React app.",
              links: [
                { label: "Portfolio template (GitHub)", href: "https://github.com/utahmoldovapartnership/porfolio-template" },
              ],
            },
            {
              title: "Demo",
              content:
                "Partner opens **portfolio hub** \u2192 clicks your new project card \u2192 your app works on phone.",
              task: "Post portfolio URL + React app URL + project name in the class thread.",
            },
          ],
          homework: {
            title: "Project live on portfolio",
            desc: "Portfolio shows your new React project card; app works from incognito.",
            tasks: [
              "Thursday project: public Vercel URL + GitHub repo",
              "Portfolio: new entry in data/projects.ts with liveUrl + repoUrl",
              "README names your project and lists what the 3 interactions do",
            ],
          },
          challenges: {
            base: {
              title: "Deployed MVP",
              desc: "Your chosen app + new portfolio card.",
              steps: [
                "Vercel HTTPS URL loads",
                "Three interactions work as README describes",
                "Portfolio card links to liveUrl + repoUrl",
              ],
            },
            medium: {
              title: "Polish + structure",
              desc: "Feels finished, not hacked together.",
              steps: [
                "2+ components with props",
                "Portfolio card has thumbnail or strong description",
                "README lists controls and stack (Next.js, React)",
              ],
            },
            hard: {
              title: "Data from an API",
              desc: "useEffect + public API in your project.",
              steps: [
                "Fetch on load or button (quotes, weather, GitHub user, etc.)",
                "Loading and error states in UI",
                "Explain fetch in README in one sentence",
              ],
            },
            bonus: "`localStorage` saves user data between visits, or custom favicon on the React app.",
          },
        },
      },
    ],
  },
  {
    id: 3,
    title: "Full-stack apps",
    color: "#0b8f4f",
    weeks: [
      {
        num: 6,
        mon: {
          title: "Why apps forget, and how to fix it",
          lessonDesc:
            "Read the **Lesson** tab slowly \u2014 this is the mental model day. Then open **Lab** for Supabase dashboard hands-on only (no React today). Use **Resources** if you want a video recap.",
          desc: "Lesson: why apps forget and what a database is. Lab: create a Supabase project and `notes` table with real rows in the dashboard only.",
          goal:
            "Explain why apps \u201cforget\u201d and create a live Supabase table with real rows \u2014 using only the dashboard.",
          preview:
            "Lesson: RAM vs database \u00b7 tables mental model \u00b7 Supabase dashboard \u00b7 Lab: 5 rows in `notes`.",
          mainPoints: [
            "**`useState` resets on refresh** \u2014 Week 5 apps forget unless data lives elsewhere",
            "**Files vs database** \u2014 Week 2 JSON was one machine; databases serve many users from one place",
            "**Table = rows + columns** \u2014 like a spreadsheet with an `id` and `created_at`",
            "**Supabase** = Postgres + dashboard + API (React connects Wednesday)",
            "**Next week: login** \u2014 capstone rows belong to one user, not the whole class",
          ],
          lessonSteps: [
            {
              title: "Where we left off",
              content:
                "From **Week 5:** your React app keeps data in **`useState`** \u2014 refresh the page and interactive state is gone unless you rebuilt it.\n\nFrom **Week 2:** you saved a watchlist to `data/watchlist.json` \u2014 better, but still one file on one machine.\n\nToday we ask: **where should data live** so your app remembers?",
              task: "Open your Week 5 React app, add a todo or score, refresh \u2014 watch it disappear.",
            },
            {
              title: "Apps forget",
              content:
                "While your app runs, data can sit in **RAM** (React state). Close the tab or refresh \u2014 gone.\n\n**`localStorage`** can save small strings in the browser \u2014 useful, but not a full product backend (no multi-user queries, easy to clear, hard to secure).\n\nA **database** stores rows on a server. Your deployed app asks the server for data \u2014 same data on phone, laptop, and after refresh.",
            },
            {
              title: "Tables mental model",
              content:
                "Think spreadsheet:\n\n| Concept | Meaning |\n|---------|--------|\n| **Table** | One kind of thing (`notes`, `users`, `entries`) |\n| **Row** | One record |\n| **Column** | One field (`text`, `created_at`) |\n| **Primary key** | Unique `id` per row |\n\nWeek 2 JSON was a **list of dicts** in a file. A table is the grown-up version \u2014 queryable, shared, persistent.",
            },
            {
              title: "What is Supabase?",
              content:
                "**Supabase** = hosted **PostgreSQL** database + dashboard + API.\n\nYou already deploy front-ends on **Vercel**. Supabase is where **persistent data** lives for full-stack apps.\n\nThis week: Monday dashboard \u2192 Wednesday read in React \u2192 Thursday write from a form. **No React today** \u2014 just the mental model and hands-on in the Supabase UI.",
              links: [{ label: "Supabase docs", href: "https://supabase.com/docs" }],
            },
            {
              title: "Supabase in 100 seconds",
              video: {
                youtubeId: "zBZgdTb-dns",
                title: "Supabase in 100 Seconds",
                caption: "Fireship \u2014 quick orientation before the dashboard lab.",
              },
            },
            {
              title: "Security preview (RLS)",
              content:
                "Supabase gives you an **anon public key** for browser apps. That sounds scary \u2014 so you use **Row Level Security (RLS)** policies to limit what the key can do.\n\n- **Wednesday:** read policy on a shared demo `notes` table\n- **Thursday:** insert policy on the same demo table\n- **Week 7 capstone:** each user only sees rows where `user_id` matches their login\n\n**Never** put the **service role** key in frontend code \u2014 mentors only.",
            },
            {
              title: "Auth teaser (Week 7)",
              content:
                "Real apps ask **who are you?** before saving personal data. Next week your **capstone** will have:\n\n- Sign up with **name, email, password**\n- A **profile** row\n- **Entries** only you can see\n\nToday\u2019s shared `notes` table is practice \u2014 anyone in class could read everyone\u2019s rows. That is intentional for learning.",
            },
            {
              title: "This week\u2019s path",
              content:
                "- **Today (Mon):** Supabase dashboard \u2014 create `notes`, insert rows, run `SELECT`\n- **Wed:** read those rows in `yourname-react-app` with `useEffect`\n- **Thu:** form writes a row; refresh still shows it\n\nSwitch to the **Lab** tab when the picture makes sense.",
              task: "Open the **Lab** tab and create your Supabase project.",
            },
          ],
          steps: [
            {
              title: "Quick review \u2014 Week 5 forgets",
              timing: "Lab",
              outlineColor: "val",
              content:
                "Open `yourname-react-app`. Use any interactive feature (todo, game score). **Refresh the browser.**\n\nThat disappearing data is exactly what we fix this week \u2014 first in the database, then in React.",
              task: "Confirm you saw state disappear on refresh.",
            },
            {
              title: "Create Supabase project",
              content:
                "Go to [supabase.com](https://supabase.com) \u2192 New project. Naming: `codemoldova-yourname` or similar.\n\nWait for the project to finish provisioning (1\u20132 minutes).",
              task: "Dashboard opens with Table Editor, SQL Editor, and Settings visible.",
              links: [{ label: "Supabase \u2014 Dashboard", href: "https://supabase.com/dashboard" }],
            },
            {
              title: "Create the `notes` table",
              content:
                "Table Editor \u2192 **New table** \u2192 name: `notes`\n\nColumns:\n\n- `id` \u2014 type **uuid**, default `gen_random_uuid()`, primary key\n- `text` \u2014 type **text**\n- `created_at` \u2014 type **timestamptz**, default `now()`\n\nSave table.",
              task: "Empty `notes` table appears in Table Editor.",
            },
            {
              title: "Insert 5 rows manually",
              content:
                "Table Editor \u2192 `notes` \u2192 **Insert row** (or bulk insert). Add five short notes \u2014 mix silly and real.\n\nYou are the database admin right now \u2014 no code required.",
              task: "Five rows visible in the grid.",
            },
            {
              title: "SQL Editor \u2014 read them back",
              content:
                "SQL Editor \u2192 run:\n\n```sql\nSELECT * FROM notes ORDER BY created_at DESC;\n```\n\nSame data as the grid \u2014 this is what React will request on Wednesday.",
              task: "Query returns your five rows.",
            },
            {
              title: "Save URL and anon key (not Git)",
              content:
                "Project Settings \u2192 **API** \u2192 copy:\n\n- **Project URL**\n- **anon public** key\n\nPaste into a private notes file or password manager. **Wednesday** needs these in `.env.local`. Do **not** commit to GitHub.",
              task: "Both values saved somewhere safe off-repo.",
            },
            {
              title: "Deliverable check",
              timing: "Lab",
              content:
                "You are done Monday when:\n\n- [ ] Supabase project exists\n- [ ] `notes` table has **5 rows**\n- [ ] You ran `SELECT * FROM notes`\n- [ ] URL + anon key saved (not in Git)\n\nPost a **screenshot** of Table Editor (5 rows) in the class thread. Redact your anon key.",
              task: "Screenshot posted or shown to mentor.",
            },
          ],
          challengeTab: {
            title: "Stretch: category column",
            content:
              "In Table Editor, add a `category` text column to `notes`. Update a few rows. Run:\n\n```sql\nSELECT * FROM notes WHERE category = 'school';\n```",
            task: "Filtered query returns only rows you tagged.",
          },
        },
        wed: {
          title: "Read from Supabase in React",
          hideClassSlides: true,
          lessonDesc:
            "**Lesson** first (`useEffect` + Supabase). Then **Lab** in `yourname-react-app`. Stuck? Paste errors into Cursor. **Challenge** if you finish early.",
          desc: "Lesson: load data with useEffect and the Supabase JS client. Lab: display your Monday notes in React with loading and empty states.",
          goal:
            "Fetch rows from your Monday `notes` table and display them in React with loading and empty states.",
          preview:
            "Lesson: useEffect + Supabase client \u00b7 Lab: NotesList \u00b7 Challenge: refresh + sort.",
          labDurationLabel: "50 min",
          mainPoints: [
            "**`useEffect`** runs after first paint \u2014 good for \u201cload data on open\u201d",
            "**Supabase client** in browser uses **anon key** + RLS (safe when policies are tight)",
            "**Three UI states:** loading, error, empty list",
            "**.env.local** holds URL + anon key \u2014 never commit",
            "**Ask AI** to wire fetch \u2014 you verify `'use client'` and env var names",
          ],
          lessonSteps: [
            {
              title: "Quick review \u2014 Monday table",
              content:
                "You created **`notes`** with `id`, `text`, `created_at` and inserted rows in the Supabase dashboard.\n\nYou saved **Project URL** and **anon key** for today. Same table, same project.",
              task: "Open Supabase Table Editor \u2014 confirm your rows are still there.",
            },
            {
              title: "Why useState alone is not enough",
              content:
                "Week 5 kept list data in **`useState`** \u2014 great for clicks and typing, but the data lives only in the browser until you fetch from somewhere else.\n\nServer data (database rows) arrives **asynchronously**. You need a place to store `{ loading, error, data }` and a hook to **trigger the fetch** when the page loads.",
            },
            {
              title: "useEffect on mount",
              content:
                "```javascript\nuseEffect(() => {\n  loadNotes();\n}, []);\n```\n\nThe empty `[]` means **run once** after the first render \u2014 same timing idea as \u201cwhen the page opens.\u201d\n\nInside `loadNotes`, call Supabase, then `setData`, `setLoading(false)`, or `setError`.",
              links: [
                { label: "React \u2014 useEffect", href: "https://react.dev/reference/react/useEffect" },
              ],
            },
            {
              title: "Supabase JS client",
              content:
                "Install `@supabase/supabase-js`. Create a client from env vars:\n\n- `NEXT_PUBLIC_SUPABASE_URL`\n- `NEXT_PUBLIC_SUPABASE_ANON_KEY`\n\n```javascript\nconst { data, error } = await supabase.from('notes').select('*');\n```\n\n**Never** put the service role key in React.",
              links: [
                { label: "Supabase JS quickstart", href: "https://supabase.com/docs/reference/javascript/introduction" },
              ],
            },
            {
              title: "Data flow",
              content:
                "```\nReact (browser) \u2192 Supabase REST API \u2192 Postgres `notes` table\n```\n\nYour component **requests** rows. Supabase **returns JSON**. You **map** to `<li>` or cards.\n\nShow **loading** while waiting, **error** if policy or network fails, **empty** if zero rows.",
            },
            {
              title: "useEffect explained (video)",
              video: {
                youtubeId: "0ZJgIjIuY7U",
                title: "Learn useEffect In 13 Minutes",
                caption: "Web Dev Simplified \u2014 pairs with today\u2019s lab.",
              },
            },
            {
              title: "Open the Lab",
              content:
                "You will work in **`yourname-react-app`** (Week 5 repo). Enable RLS + read policy with mentor SQL, then ask AI to build `NotesList.tsx`.\n\n**Rule:** AI writes first, you review. Broken? Paste **exact error + filename** into Cursor.",
              task: "Switch to the **Lab** tab.",
            },
          ],
          steps: [
            {
              title: "Quick review \u2014 Week 5 React",
              timing: "Lab",
              outlineColor: "val",
              content:
                "From Week 5:\n\n- **`'use client'`** on interactive files\n- **`useState`** for UI state\n- **`.map()`** to render lists (Wednesday todo)\n\nToday adds **`useEffect`** + **Supabase** for data that survives refresh.",
              task: "Open `yourname-react-app` in Cursor.",
            },
            {
              title: "AI workflow reminder",
              content:
                "**Rule:** Paste prompts into **Cursor Agent**. If something breaks:\n\n\u201cFix only [filename]. Keep behavior: [one sentence]. Error: [paste full error].\u201d\n\nDo **not** paste API keys into chat.",
            },
            {
              title: "Install Supabase client",
              content:
                "In project terminal:\n\n```bash\nnpm install @supabase/supabase-js\n```",
              task: "`package.json` lists `@supabase/supabase-js`.",
            },
            {
              title: "Create .env.local",
              content:
                "Project root `.env.local`:\n\n```\nNEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co\nNEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...\n```\n\nConfirm `.gitignore` includes `.env*`. Restart `npm run dev` after saving.",
              task: "Env file exists and is not tracked by Git.",
            },
            {
              title: "Run RLS SQL (read policy)",
              content:
                "Supabase \u2192 SQL Editor \u2192 run the class **`week6_demo_rls.sql`** (at least the **SELECT** policy).\n\nDownload from course site or mentor link. Without this, fetch may return **permission denied**.",
              task: "SELECT policy enabled on `notes`.",
              links: [
                {
                  label: "Download week6_demo_rls.sql",
                  href: "/lesson/week6_demo_rls.sql",
                  download: "week6_demo_rls.sql",
                },
              ],
            },
            {
              title: "AI \u2014 build NotesList",
              timing: "Lab",
              content:
                "Paste into Cursor:",
              code: {
                lang: "text",
                snippet:
                  "Add components/NotesList.tsx to my Next.js app:\n- 'use client' at top\n- useState for notes array, loading boolean, error string\n- useEffect on mount: fetch from Supabase table 'notes' with select('*')\n- Show 'Loading...' while loading\n- Show error message if error\n- Show 'No notes yet' if empty array\n- Map notes to li or div showing text and created_at\n- Create lib/supabaseClient.ts using createClient with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY\nImport NotesList in app/page.tsx",
              },
              task: "Browser lists your Monday rows (or empty state if table cleared).",
            },
            {
              title: "Fix with AI",
              content:
                "Common fixes: missing `'use client'`, wrong env var names, forgot to restart dev server, RLS policy missing.\n\nPaste DevTools console or terminal error into Cursor.",
              task: "Notes visible without red error overlay.",
            },
            {
              title: "Deliverable check",
              timing: "Lab",
              content:
                "Done when:\n\n- [ ] `NotesList` shows your dashboard rows\n- [ ] Loading state appears briefly on refresh\n- [ ] Empty message if table has zero rows\n- [ ] No secrets committed to Git",
              task: "Demo to partner or post screenshot.",
            },
          ],
          challengeTab: {
            title: "List upgrades",
            content: "Your list must still load. Use AI for one upgrade:",
            task:
              "**A \u2014 Refresh button:** re-runs fetch on click.\n\n**B \u2014 Newest first:** sort by `created_at` descending before map.\n\n**C \u2014 Count line:** show \u201cLoaded N notes\u201d below the list.",
            hints: [
              "Prompt: \u201cAdd a Refresh button to NotesList that re-fetches from Supabase.\u201d",
              "Prompt: \u201cSort notes by created_at descending before rendering.\u201d",
            ],
          },
        },
        thu: {
          title: "Save and load",
          lessonDesc:
            "**Lesson** = 2-minute goal. **Lab** = build the full round trip. Hit **Base** tier before stretch tiers.",
          desc: "Build day: form inserts into `notes`, list updates, data survives browser refresh. If you leave able to save and reload, the hard part is done.",
          goal:
            "Add a form that inserts into `notes` and a list that still works after browser refresh.",
          preview: "Lab: AddNoteForm + insert \u00b7 refresh test \u00b7 tiers: delete, edit, filter.",
          mainPoints: [
            "**Controlled input** \u2014 Week 5 Wed: `value` + `onChange` + submit",
            "**Insert** \u2014 `supabase.from('notes').insert({ text })`",
            "**Re-fetch** after save (or append to state)",
            "**Refresh test** \u2014 proof data is real, not just useState",
            "**Week 7** \u2014 login so only you see your entries",
          ],
          lessonSteps: [
            {
              title: "Today\u2019s loop",
              content:
                "```\nType in form \u2192 Submit \u2192 INSERT into Postgres \u2192 List updates \u2192 Refresh browser \u2192 rows still there\n```\n\nThis is the **full round trip**. Week 7 adds **login** so rows are private per user.\n\nToday\u2019s demo table is **shared** (class practice) \u2014 anyone can read/write with the demo policies.",
            },
            {
              title: "Open the Lab",
              content:
                "Same repo (`yourname-react-app`), same `notes` table, same env vars as Wednesday. You add **write** on top of **read**.",
              task: "Switch to the **Lab** tab.",
            },
          ],
          steps: [
            {
              title: "Quick review \u2014 NotesList",
              timing: "Lab",
              outlineColor: "val",
              content:
                "Wednesday\u2019s `NotesList` should still load rows. If not, fix that first before adding a form.",
              task: "List loads on `npm run dev`.",
            },
            {
              title: "AI workflow reminder",
              content:
                "Paste prompts into Cursor Agent. Errors? \u201cFix only [file]. Error: [paste].\u201d Never commit `.env.local`.",
            },
            {
              title: "Run INSERT policy SQL",
              content:
                "SQL Editor \u2192 run the **insert** section of `week6_demo_rls.sql`.\n\nWithout INSERT policy, form submit returns permission denied.",
              links: [
                {
                  label: "Download week6_demo_rls.sql",
                  href: "/lesson/week6_demo_rls.sql",
                  download: "week6_demo_rls.sql",
                },
              ],
              task: "INSERT policy active on `notes`.",
            },
            {
              title: "AI \u2014 build AddNoteForm",
              timing: "Lab",
              content:
                "Paste into Cursor:",
              code: {
                lang: "text",
                snippet:
                  "Add components/AddNoteForm.tsx to my Next.js app:\n- 'use client'\n- useState for draft text string\n- Controlled text input (value + onChange)\n- Submit button calls supabase.from('notes').insert({ text: draft })\n- On success: clear draft and call onAdded callback prop\n- Show error message if insert fails\nUse the same supabase client as NotesList",
              },
              task: "Form renders on page.",
            },
            {
              title: "Wire form + list",
              content:
                "Parent page holds a `refreshKey` or callback so after insert, `NotesList` re-fetches.\n\nAsk AI: \u201cWire AddNoteForm and NotesList on app/page.tsx. After successful insert, refresh the list.\u201d",
              task: "Submit adds a row to the list without manual refresh.",
            },
            {
              title: "Hard test \u2014 browser refresh",
              content:
                "Add a note via form. **Refresh the browser (F5).** Row must still appear.\n\nThat proves data lives in **Supabase**, not only React state.",
              task: "Screenshot or GIF of refresh test for class thread.",
            },
            {
              title: "Git commit + push",
              content:
                "Commit: `Add Supabase notes read and write`. Push to GitHub (Week 4/5 habit).",
              task: "GitHub shows today\u2019s commits.",
            },
            {
              title: "Deliverable check",
              timing: "Lab",
              content:
                "Done when:\n\n- [ ] Form inserts a new row\n- [ ] List shows it\n- [ ] **Refresh** still shows the row\n- [ ] Screenshot posted\n\n**Bridge to Week 7:** capstone uses **login** \u2014 only you see your entries.",
              task: "Base tier complete.",
            },
          ],
          challenges: {
            base: {
              title: "Save and reload",
              desc: "Insert via form; list after refresh.",
              steps: [
                "Form submit inserts row",
                "List updates",
                "Browser refresh still shows row",
              ],
            },
            medium: {
              title: "Delete or done",
              desc: "Remove or mark-done per row.",
              steps: [
                "Button per row",
                "Deletes or updates in Supabase",
                "List reflects change after refresh",
              ],
            },
            hard: {
              title: "Edit row",
              desc: "Update existing note text.",
              steps: [
                "Edit UI for one row",
                "supabase.update works",
                "Persists after refresh",
              ],
            },
            bonus: "Client-side search or filter across loaded notes.",
          },
        },
      },
      {
        num: 7,
        mon: {
          title: "Pick & scaffold the final project",
          hideClassSlides: true,
          lessonDesc:
            "**Lesson** = pick what you track + required auth shape. **Lab** = new repo + sign-up working today. Every capstone shares login + personal list; flavor is yours.",
          desc: "Choose your tracker app, scaffold yourname-capstone, run capstone SQL, and complete sign-up with name, email, password.",
          goal:
            "Choose your tracker app idea, scaffold `yourname-capstone`, and complete sign-up with name, email, password.",
          preview:
            "Lesson: capstone flavors + auth schema \u00b7 Lab: new repo + sign-up \u00b7 Challenge: log out + second user.",
          labDurationLabel: "55 min",
          mainPoints: [
            "**Same shape for everyone:** auth \u2192 profile \u2192 personal `entries`",
            "**Password** \u2014 Supabase Auth only; never in a SQL table",
            "**`user_id` on every entry** \u2014 RLS checks `auth.uid()`",
            "**Pick one thing to track** \u2014 habits, expenses, phrases, workouts, etc.",
            "**AI scaffolds pages** \u2014 you test sign-up before leaving class",
          ],
          lessonSteps: [
            {
              title: "Week 6 recap",
              content:
                "Last week you read/wrote a **shared** `notes` table \u2014 anyone with the demo policy could see class data.\n\nYour **capstone** is a real app: **sign up**, **profile**, **entries only you see**.",
            },
            {
              title: "Capstone flavors (what you track)",
              content:
                "Pick **one** thing users log after login. Auth shape is fixed; flavor is yours:\n\n| Flavor | Examples | Optional Gemini (Wed) |\n|--------|----------|------------------------|\n| **Moldova** | Caf\u00e9 visits, phrases learned, what I ate | Suggest a dish from mood |\n| **Utilities** | Study sessions, expenses, habits | Summarize weekly log |\n| **Creative** | Story ideas, mood journal | Expand entry text |\n| **Health / life** | Workouts, water, sleep notes | Coach encouragement |\n\nWrite one sentence: **who** is it for and **what** do they track?",
            },
            {
              title: "Required schema",
              content:
                "```\nauth.users (email + password \u2014 managed by Supabase)\n    \u2192 profiles (id, name)\n    \u2192 entries (id, user_id, content, created_at)\n```\n\n**Password rule:** `signUp({ email, password })` handles hashing. **Never** `INSERT` a password column.\n\n**Name** goes in `profiles` (or `user_metadata` on sign-up).",
            },
            {
              title: "Email confirmation + redirect URLs",
              content:
                "Supabase \u2192 **Authentication** \u2192 Providers \u2192 Email enabled.\n\nFor class, mentor may **disable Confirm email** so sign-in works immediately. If confirmation is on, check inbox/spam after sign-up.\n\n**URL configuration:** add `http://localhost:3000` and your future Vercel URL under Redirect URLs.",
              links: [
                { label: "Supabase Auth docs", href: "https://supabase.com/docs/guides/auth" },
              ],
            },
            {
              title: "Session on refresh",
              content:
                "Use `supabase.auth.getSession()` on load and `onAuthStateChange` so refresh keeps you signed in. Ask AI to wire this on your home page.\n\n```javascript\nsupabase.auth.onAuthStateChange((_event, session) => {\n  setSession(session);\n});\n```",
            },
            {
              title: "Supabase Auth (video)",
              video: {
                youtubeId: "Q7-DI39epR8",
                title: "Supabase Auth with React",
                caption: "Sign-up and sign-in flow before you scaffold your capstone.",
              },
            },
            {
              title: "README charter",
              content:
                "Top of README:\n\n1. **Problem** (one sentence)\n2. **User** (who)\n3. **Tracked field** (what they log)\n4. **v1 done** / **out of scope**\n\nOpen **Lab** when ready to scaffold.",
              task: "Switch to the **Lab** tab.",
            },
          ],
          steps: [
            {
              title: "Quick review \u2014 Week 6 round trip",
              timing: "Lab",
              outlineColor: "val",
              content:
                "You proved read + write + refresh on `notes`. Capstone adds **auth** so `entries` are private per user.",
              task: "Name one flavor you want to build.",
            },
            {
              title: "Pick flavor + README charter",
              content:
                "Write problem, user, tracked field, v1 done, out-of-scope at top of README in your new repo.",
              task: "README charter filled in.",
            },
            {
              title: "Create GitHub repo",
              content:
                "New empty repo: `yourname-capstone`. Clone, open in Cursor.",
              task: "`pwd` ends with capstone repo name.",
              links: [
                {
                  label: "GitHub \u2014 create a repo",
                  href: "https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository",
                },
              ],
            },
            {
              title: "AI scaffold Next.js",
              content:
                "Paste into Cursor (empty folder):",
              code: {
                lang: "text",
                snippet:
                  "Create a minimal Next.js 15 app in this folder:\n- App Router, TypeScript\n- app/page.tsx placeholder\n- components/ folder\n- lib/ folder for supabase client\n- README with npm install and npm run dev\nNo auth pages yet \u2014 just structure.",
              },
              task: "`npm install` and `npm run dev` work.",
            },
            {
              title: "Install Supabase + env",
              content:
                "```bash\nnpm install @supabase/supabase-js\n```\n\n`.env.local`:\n\n```\nNEXT_PUBLIC_SUPABASE_URL=...\nNEXT_PUBLIC_SUPABASE_ANON_KEY=...\n```\n\nSame Supabase project as Week 6 is fine \u2014 add new tables alongside `notes`.",
              task: "Env vars documented in README table.",
            },
            {
              title: "Run capstone SQL",
              content:
                "SQL Editor \u2192 run **`week7_capstone_schema.sql`** (profiles + entries + RLS).",
              links: [
                {
                  label: "Download week7_capstone_schema.sql",
                  href: "/lesson/week7_capstone_schema.sql",
                  download: "week7_capstone_schema.sql",
                },
              ],
              task: "`profiles` and `entries` tables exist in Table Editor.",
            },
            {
              title: "Supabase Auth settings",
              content:
                "Enable Email provider. Set Site URL `http://localhost:3000`. Add redirect URLs for localhost (and Vercel when you have it).\n\nConfirm email: follow mentor setting (on or off).",
              task: "Auth settings saved.",
            },
            {
              title: "AI \u2014 sign up and sign in pages",
              timing: "Lab",
              content:
                "Paste into Cursor:",
              code: {
                lang: "text",
                snippet:
                  "Add auth to my Next.js capstone app:\n- app/signup/page.tsx: fields name, email, password. On submit: supabase.auth.signUp({ email, password, options: { data: { name } } }). Then insert into profiles (id from user.id, name).\n- app/login/page.tsx: email, password, signInWithPassword, redirect to /\n- lib/supabaseClient.ts with createClient from env\n- 'use client' on form pages\n- Show error messages from Supabase on failure",
              },
              task: "Sign-up creates a user in Supabase Auth dashboard.",
            },
            {
              title: "Home \u2014 session gate",
              content:
                "Ask AI: \u201cOn app/page.tsx, use getSession and onAuthStateChange. If no session, show links to /login and /signup. If session, show 'Welcome, {name}' from profiles and text 'Dashboard builds Thursday'.\u201d",
              task: "After sign-up, home shows your name.",
            },
            {
              title: "Git push",
              content: "Commit and push. No secrets in repo.",
              task: "GitHub shows capstone repo.",
            },
            {
              title: "Deliverable check",
              timing: "Lab",
              content:
                "Done when:\n\n- [ ] README charter written\n- [ ] `profiles` + `entries` tables + RLS live\n- [ ] Sign-up works in dev\n- [ ] Home shows name when logged in\n- [ ] Repo URL in class thread",
              task: "Test account created.",
            },
          ],
          challengeTab: {
            title: "Auth polish",
            content: "Base sign-up must work first.",
            task:
              "**A \u2014 Log out button** that calls `signOut` and returns to login.\n\n**B \u2014 Header email** from session.\n\n**C \u2014 Second test user** \u2014 prove two accounts are separate.",
            hints: [
              "Prompt: \u201cAdd Log out button calling supabase.auth.signOut().\u201d",
            ],
          },
        },
        wed: {
          title: "The smart feature, done safely",
          hideClassSlides: true,
          lessonDesc:
            "**Lesson** = why API keys cannot live in React. **Lab** = Gemini through `app/api/chat/route.ts`. Reuses Week 2 key \u2014 new hiding place.",
          desc: "Lesson: client vs server secrets. Lab: Gemini via Next.js Route Handler with GEMINI_API_KEY only on server.",
          goal:
            "Call Gemini from your capstone through a server route; API key only in server env.",
          preview:
            "Lesson: Route Handlers \u00b7 Lab: /api/chat \u00b7 signed-in UI \u00b7 Vercel env.",
          mainPoints: [
            "**Week 2:** Gemini from Python + `GEMINI_API_KEY` in terminal",
            "**Browser cannot hold secrets** \u2014 anyone can read client JS",
            "**Route Handler** = server code Next.js runs on Vercel",
            "**`GEMINI_API_KEY`** in `.env.local` and Vercel \u2014 no `NEXT_PUBLIC_`",
            "**Signed-in only** \u2014 hide AI UI without session",
          ],
          lessonSteps: [
            {
              title: "Week 2 Gemini recap",
              content:
                "Week 2 Thursday: **`gemini-2.0-flash`**, API key in **environment** (not Git), system prompt for personality.\n\nSame key can power your capstone \u2014 but **not** from React files.",
              links: [
                { label: "Google AI Studio", href: "https://aistudio.google.com/" },
              ],
            },
            {
              title: "Why the browser is unsafe for keys",
              content:
                "Anything in `'use client'` code ships to the browser. Users can open DevTools and steal a **Gemini key** \u2014 your bill, your problem.\n\n**Rule:** keys that cost money or access private data stay on the **server**.",
            },
            {
              title: "Client vs server flow",
              content:
                "```\nBrowser \u2192 fetch('/api/chat', { message }) \u2192 Route Handler \u2192 Gemini API \u2192 JSON { reply } \u2192 Browser displays\n```\n\nThe key lives in `process.env.GEMINI_API_KEY` inside `app/api/chat/route.ts` only.",
              links: [
                { label: "Next.js Route Handlers", href: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers" },
              ],
            },
            {
              title: "Next.js API routes (video)",
              video: {
                youtubeId: "27Uj6BeIDV0",
                title: "Next.js Route Handlers",
                caption: "Codevolution \u2014 how app/api/.../route.ts works in the App Router.",
              },
            },
            {
              title: "Vercel environment variables",
              content:
                "Local: `.env.local` with `GEMINI_API_KEY=...` (no `NEXT_PUBLIC_` prefix).\n\nDeploy: Vercel project \u2192 Settings \u2192 Environment Variables \u2192 same name. Redeploy after adding.\n\nAlso ensure Supabase vars are set on Vercel for production auth.",
              links: [
                { label: "Vercel env vars", href: "https://vercel.com/docs/projects/environment-variables" },
              ],
            },
            {
              title: "Open the Lab",
              content: "Build `/api/chat` and a signed-in-only chat UI. Switch to **Lab**.",
              task: "Lab tab open.",
            },
          ],
          steps: [
            {
              title: "Quick review \u2014 session check",
              timing: "Lab",
              outlineColor: "ube",
              content:
                "Monday\u2019s sign-in should still work. Today\u2019s AI UI only appears when `session` exists.",
              task: "Log in to capstone locally.",
            },
            {
              title: "AI workflow reminder",
              content:
                "Paste prompts into Cursor. Never put `AIza` keys in client files. Search project for `AIza` before pushing.",
            },
            {
              title: "Install Gemini SDK",
              content:
                "```bash\nnpm install @google/generative-ai\n```\n\nWeek 2 used Python `google-genai` \u2014 in Next.js we use **`@google/generative-ai`**.",
              task: "Package installs without error.",
            },
            {
              title: "Add GEMINI_API_KEY locally",
              content:
                "`.env.local`:\n\n```\nGEMINI_API_KEY=your-week2-key\n```\n\nRestart dev server. **Not** `NEXT_PUBLIC_GEMINI_API_KEY`.",
              task: "Key in env only.",
            },
            {
              title: "AI \u2014 Route Handler",
              timing: "Lab",
              content:
                "Paste into Cursor:",
              code: {
                lang: "text",
                snippet:
                  "Create app/api/chat/route.ts for my Next.js app:\n- POST only, read JSON body { message: string }\n- Use @google/generative-ai with process.env.GEMINI_API_KEY\n- Model gemini-2.0-flash\n- System instruction: friendly assistant for my tracker app flavor\n- Return JSON { reply: string }\n- Return 500 with error message if key missing\n- Return 401 if you can check session (optional stretch)",
              },
              task: "POST to /api/chat returns JSON in dev (test with curl or temporary button).",
            },
            {
              title: "AI \u2014 client chat UI",
              timing: "Lab",
              content:
                "Paste into Cursor:",
              code: {
                lang: "text",
                snippet:
                  "Add components/ChatPanel.tsx:\n- 'use client'\n- Only render if user session exists (prop or hook)\n- Textarea + Send button\n- fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message }) })\n- Show loading, error, and reply text\n- Import on home page below welcome message",
              },
              task: "One AI reply displays in browser.",
            },
            {
              title: "Fix with AI",
              content:
                "Common issues: key not loaded (restart server), wrong import, CORS not needed for same-origin `/api/chat`, 404 if file not named `route.ts`.",
              task: "Chat works locally.",
            },
            {
              title: "Vercel env + redeploy",
              content:
                "Add `GEMINI_API_KEY` in Vercel dashboard. Redeploy. Test on preview URL if time.",
              task: "Production has key set (even if AI tested only locally today).",
            },
            {
              title: "Deliverable check",
              timing: "Lab",
              content:
                "Done when:\n\n- [ ] One Gemini reply works in dev\n- [ ] No `AIza` string in any `'use client'` file\n- [ ] Chat UI hidden or disabled when logged out\n- [ ] `GEMINI_API_KEY` listed in README env table",
              task: "Search project for `AIza` \u2014 only server/env.",
            },
          ],
          challengeTab: {
            title: "Smarter AI",
            content: "Chat must still work.",
            task:
              "**A \u2014 Custom system prompt** for your tracker flavor (study coach, food buddy, etc.).\n\n**B \u2014 Save reply** to `entries` with current `user_id` after AI responds.\n\n**C \u2014 401** from API when not authenticated.",
            hints: [
              "Week 2 system prompt pattern: personality + length limit.",
            ],
          },
        },
        thu: {
          title: "Vertical slice",
          lessonDesc:
            "**Lab** is the whole class. Minimum **Base** = sign in \u2192 add entry \u2192 see only yours \u2192 deployed URL.",
          desc: "Build day: authenticated user adds a tracked item and sees their private list on Vercel.",
          goal:
            "Ship one complete loop on Vercel: sign in, add entry, see only your rows, refresh persists.",
          preview: "Base: auth loop deployed \u00b7 Medium: edit/delete \u00b7 Hard: Gemini in save flow.",
          mainPoints: [
            "**Vertical slice** \u2014 one path end-to-end, not five half-features",
            "**`insert` must include `user_id`** from `session.user.id`",
            "**RLS** \u2014 empty list but insert ok? Policy bug \u2014 paste error to AI",
            "**Deploy** \u2014 Supabase + Gemini env vars on Vercel + auth redirect URL",
            "**Two test users** \u2014 prove isolation",
          ],
          lessonSteps: [
            {
              title: "Base tier checklist",
              content:
                "Minimum **done** today:\n\n1. Sign up with name, email, password\n2. Sign in \u2192 dashboard\n3. Form adds row to `entries` with your `user_id`\n4. List shows **only your** rows\n5. Refresh \u2192 still signed in, still your data\n6. Sign out \u2192 cannot see entries\n7. **Deployed** HTTPS URL on Vercel\n\nOpen **Lab** \u2014 no new features after class tonight.",
            },
            {
              title: "Start building",
              content: "Fix blockers only overnight. Ship the slice first.",
              task: "Lab tab.",
            },
          ],
          steps: [
            {
              title: "Quick review \u2014 Mon + Wed",
              timing: "Lab",
              outlineColor: "val",
              content:
                "Auth pages from Monday. Optional `/api/chat` from Wednesday. Today: **AddEntryForm** + **EntryList** = core product.",
              task: "Logged in locally.",
            },
            {
              title: "AI \u2014 entry form + list",
              timing: "Lab",
              content:
                "Paste into Cursor:",
              code: {
                lang: "text",
                snippet:
                  "Add to my capstone Next.js app:\n- components/AddEntryForm.tsx: 'use client', controlled content textarea, submit inserts into entries with user_id from session.user.id\n- components/EntryList.tsx: fetch entries for current user (RLS filters), loading/error/empty states, map to list\n- app/page.tsx or app/dashboard/page.tsx: show both when session exists; redirect to /login if not\n- Empty state: 'No entries yet \u2014 add your first'\n- On successful insert, refresh list",
              },
              task: "Add one entry locally; list shows it.",
            },
            {
              title: "Empty + error states",
              content:
                "Ask AI to polish: loading text, error banner if RLS denies, friendly empty message.",
              task: "All three states demo-able.",
            },
            {
              title: "Two-user isolation test",
              content:
                "Sign out. Create **second** test account. Add different entries. Each user sees only their list.\n\nIf user A sees user B data, RLS is wrong \u2014 paste policy error to AI.",
              task: "Isolation confirmed.",
            },
            {
              title: "Deploy to Vercel",
              content:
                "Push to GitHub. Vercel: **Next.js** preset. Set env vars:\n\n- `NEXT_PUBLIC_SUPABASE_URL`\n- `NEXT_PUBLIC_SUPABASE_ANON_KEY`\n- `GEMINI_API_KEY` (if using AI)\n\nSupabase Auth: add production URL to redirect allow list.",
              links: [{ label: "Vercel \u2014 Next.js", href: "https://vercel.com/docs/frameworks/nextjs" }],
              task: "Production URL loads.",
            },
            {
              title: "Production smoke test",
              content:
                "Incognito: sign up or sign in on **live URL**. Add entry. Refresh. Still works.",
              task: "Core loop works on phone + production.",
            },
            {
              title: "Deliverable check",
              timing: "Lab",
              content:
                "Post in thread:\n\n- [ ] Production URL\n- [ ] Test account email/password for mentor (not your personal password)\n- [ ] One sentence what you track",
              task: "Base tier on production.",
            },
          ],
          challenges: {
            base: {
              title: "Deployed personal loop",
              desc: "Sign in, add, list, refresh on Vercel.",
              steps: [
                "HTTPS URL works",
                "Add entry as user A",
                "Only A rows visible",
                "Refresh persists session + data",
              ],
            },
            medium: {
              title: "Edit or delete",
              desc: "Manage own entries + header name.",
              steps: [
                "Edit or delete own row",
                "Header shows profile name",
                "Still isolated per user",
              ],
            },
            hard: {
              title: "Gemini in the loop",
              desc: "AI suggests or improves before save.",
              steps: [
                "Gemini integrated into save flow",
                "Signed-in only",
                "Works on deploy",
              ],
            },
            bonus: "Password reset flow or profile edit page.",
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
          title: "Polish + README",
          hideClassSlides: true,
          lessonDesc:
            "**Lesson** = polish checklist + demo script. **Lab** = README, screenshots, portfolio card, timed practice.",
          desc: "Polish empty/error/mobile states, write README strangers can follow, add capstone to portfolio, rehearse 2-minute demo.",
          goal:
            "README a stranger can follow; portfolio links capstone; 2-minute demo script rehearsed.",
          preview:
            "Lesson: polish + demo script \u00b7 Lab: README + portfolio card \u00b7 Challenge: peer review.",
          labDurationLabel: "50 min",
          mainPoints: [
            "**Empty / loading / error** \u2014 every screen state intentional",
            "**Mobile** \u2014 no horizontal scroll; readable tap targets",
            "**README** \u2014 demo link, env vars, setup steps, screenshots",
            "**Demo account** \u2014 test user for live Demo Day",
            "**Portfolio** \u2014 new `data/projects.ts` entry (copy Week 5 pattern)",
          ],
          lessonSteps: [
            {
              title: "Polish checklist",
              content:
                "Walk your production URL on **phone width**:\n\n- [ ] Sign up / sign in / sign out clear\n- [ ] Empty list message friendly\n- [ ] Loading text while fetching\n- [ ] Error banner if network or RLS fails\n- [ ] No horizontal scroll\n- [ ] Buttons big enough to tap",
            },
            {
              title: "Demo script template (~45s)",
              content:
                "1. **Problem** (one plain sentence)\n2. **Sign in** (demo account)\n3. **Add** one tracked item\n4. **Show** personal list\n5. **Stack** (one sentence): Next.js, Supabase Auth, optional Gemini\n\nPractice without opening your editor \u2014 show the **live app** only.",
            },
            {
              title: "Demo account",
              content:
                "Create `demo@yourapp.test` or similar **test user** for Demo Day so you do not type your personal password on screen.\n\nNote credentials in README for mentors only (or share privately).",
            },
            {
              title: "Backup recording",
              content:
                "Record 60s screen capture of core loop. Upload to Drive or GitHub release if Wi\u2011Fi might fail Wednesday.",
            },
            {
              title: "README sections",
              content:
                "Title \u00b7 Problem \u00b7 Live demo link \u00b7 Stack \u00b7 Setup (`npm install`, `npm run dev`) \u00b7 Env var table \u00b7 Screenshots \u00b7 Limitations \u00b7 What I would add next",
              task: "Open **Lab** to fill README and portfolio.",
            },
          ],
          steps: [
            {
              title: "Quick review \u2014 Thursday slice",
              timing: "Lab",
              outlineColor: "val",
              content:
                "Production URL should run sign in \u2192 add \u2192 list. Today is **polish and story**, not new features.",
              task: "Open production URL in incognito.",
            },
            {
              title: "AI polish pass",
              content:
                "Paste into Cursor:",
              code: {
                lang: "text",
                snippet:
                  "Polish my capstone Next.js app for mobile and UX:\n- Improve empty state copy on EntryList\n- Add clear error message if Supabase fetch fails\n- Ensure forms and buttons work on narrow screens (no horizontal scroll)\n- Do not change auth or RLS logic",
              },
              task: "Phone-width check passes.",
            },
            {
              title: "README fill-in",
              content:
                "Complete every README section. Include **env var table**:\n\n| Variable | Where |\n|----------|-------|\n| `NEXT_PUBLIC_SUPABASE_URL` | Supabase API settings |\n| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase API settings |\n| `GEMINI_API_KEY` | Google AI Studio (server only) |",
              task: "Stranger could clone and know which keys they need.",
            },
            {
              title: "Screenshots",
              content:
                "Capture sign-in screen + dashboard with list. Add to README (`/docs` folder or inline).",
              task: "At least two images in README.",
            },
            {
              title: "Portfolio card",
              content:
                "In **portfolio repo only**, edit `data/projects.ts` \u2014 add capstone entry:\n\n- `title`, `description`\n- `liveUrl` (Vercel capstone)\n- `repoUrl` (GitHub)\n\nCopy pattern from existing cards. Week 5 React app stays its own card.",
              links: [
                {
                  label: "Portfolio template (GitHub)",
                  href: "https://github.com/utahmoldovapartnership/porfolio-template",
                },
              ],
              task: "Portfolio hub opens live capstone from new card.",
            },
            {
              title: "Incognito production test",
              content: "Full loop on production in incognito. Fix blockers with AI.",
              task: "No red error overlay on demo path.",
            },
            {
              title: "Timed practice talk",
              content: "2-minute timer. Problem \u2192 sign in \u2192 add \u2192 list. Note one rough transition to smooth Wednesday.",
              task: "One practice run complete.",
            },
            {
              title: "Deliverable check",
              timing: "Lab",
              content:
                "Done when:\n\n- [ ] Portfolio card links live capstone\n- [ ] README has demo URL + env table + screenshots\n- [ ] Demo script written in README or notes\n- [ ] Backup recording optional but recommended",
              task: "Post portfolio URL in thread.",
            },
          ],
          challengeTab: {
            title: "Peer README review",
            content: "Swap with a classmate. Read their README cold.",
            task: "Give one clarity fix; implement or ticket one fix they gave you.",
          },
        },
        wed: {
          title: "Demo Day \ud83c\udf89",
          lessonDesc:
            "No new code. **Lesson** = format + backup plan. Show up with URL and story.",
          desc: "Celebrate shipped work. ~3 minute live demos: problem, sign in, core loop, applause.",
          goal: "Deliver ~3 minute demo of your capstone; celebrate the class.",
          preview: "Live demo \u00b7 backup video \u00b7 portfolio link \u00b7 reflection.",
          mainPoints: [
            "**Show the app**, not your editor",
            "**Problem \u2192 sign in \u2192 core loop** in plain language",
            "**Backup** \u2014 60s screen recording if Wi\u2011Fi fails",
            "**Portfolio** updated with capstone card",
            "**Thank someone** whose project inspired you",
          ],
          lessonSteps: [
            {
              title: "Demo format",
              content:
                "~**3 minutes** live:\n\n1. Intro card \u2014 problem in one sentence anyone understands\n2. Open **production URL** (not localhost)\n3. Sign in with demo account\n4. Add one item; show **your** list\n5. One sentence on stack (Next.js + Supabase + optional AI)\n\nNo scrolling through code. Hands on the product.",
              task: "Draft intro on a note card or phone.",
            },
            {
              title: "Backup plan",
              content:
                "If Wi\u2011Fi fails: 60s screen recording, screenshot PDF, or phone hotspot.\n\nUpload backup before you present if nervous.",
            },
            {
              title: "Audience tip",
              content:
                "Friends and family are in the room. After one technical word, add a **plain sentence** (\u201cThis saves your data in a database so refresh does not erase it\u201d).",
            },
            {
              title: "Celebrate others",
              content:
                "During demos, note **two** classmates\u2019 ideas you want to try later. Send one congratulation message in class chat.",
            },
            {
              title: "After Demo Day",
              content:
                "Pin capstone repo on GitHub. Confirm portfolio card works. Optional: share on social.\n\nLight **Lab** steps below if you want a dry run before the room.",
            },
          ],
          steps: [
            {
              title: "Dry run (optional)",
              timing: "Lab",
              outlineColor: "val",
              content:
                "Incognito \u2192 production URL \u2192 demo account \u2192 full loop once.",
              task: "Dry run under 3 minutes.",
            },
            {
              title: "Backup upload (optional)",
              content: "Screen recording to Drive or GitHub release asset.",
              task: "Backup link saved.",
            },
            {
              title: "Share links (optional)",
              content:
                "Post portfolio URL + capstone URL in class thread so mentors can revisit.",
              task: "Links posted.",
            },
          ],
        },
      },
    ],
  },

]

/** Display title for a week row on the course page (not the same as a single session title). */
export function getWeekLabel(weekNum) {
  const w = Number(weekNum)
  if (!Number.isFinite(w)) return ''
  for (const phase of phases) {
    for (const week of phase.weeks) {
      if (week.num === w) {
        if (typeof week.label === 'string' && week.label.trim()) return week.label.trim()
        break
      }
    }
  }
  const mon = sessions.find((s) => s.week === w && s.day === 'mon')
  return mon?.label?.trim() || `Week ${w}`
}

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

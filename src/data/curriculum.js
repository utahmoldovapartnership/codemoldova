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
              content: "If you have not submitted the class survey yet, do it now so mentors can see who is in the room.",
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
          title: "Number guessing game",
          date: "May 14",
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
          date: "May 18",
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
          date: "May 20",
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
          date: "May 21",
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
        mon: {
          title: "Terminal basics",
          date: "May 25",
          desc: "Workshop 1: the terminal is how developers move through folders, run programs, install tools, and talk to Git. Today is not about memorizing every flag — it is about getting comfortable navigating with text commands on Mac/Linux (Terminal/zsh) or Windows (PowerShell). Work through the lab steps, then finish the three practice tasks and the Challenge tab before Thursday’s CLI build.",
          preview: "Why the terminal · everyday uses · common commands · cd/ls/pwd · PowerShell vs bash · 3 practices · 1 challenge.",
          goal: "Leave class able to open a terminal, know where you are (pwd), move between folders (cd), list files (ls/dir), create folders and files, and run python3 and pip from the command line — on your OS.",
          labDurationLabel: "50 min",
          steps: [
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
                "You already hit the terminal for `pip install`, `export GEMINI_API_KEY=...`, and running notebooks. This week you will build a **CLI tool on Thursday** — that only exists in the terminal. Week 6 is Git from the command line. You cannot click your way through those. The terminal also fails **loudly**: error messages tell you exactly what broke, which makes debugging faster once you learn to read them.",
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
                "Same five jobs, every project:\n\n1. **Navigate** — cd into your project folder\n2. **Inspect** — ls/dir to see files\n3. **Run** — python3 script.py or npm run dev\n4. **Install** — pip install, npm install\n5. **Configure** — export API keys, git config\n\nYou type short commands instead of clicking through folders. Scripts and tutorials assume you can do these without a GUI.",
              task: "In your own words: what is the difference between “opening a file in Cursor” and “running a file from the terminal”?",
            },
            {
              title: "Common commands",
              timing: "Lab",
              content:
                "Mac/Linux (bash/zsh) and Windows (PowerShell) use different names for the same ideas:\n\n| Job | Mac / Linux | Windows PowerShell |\n|-----|-------------|-------------------|\n| Where am I? | pwd | Get-Location (or pwd) |\n| List files | ls | dir (or ls) |\n| Change folder | cd path | cd path |\n| Go up one level | cd .. | cd .. |\n| Make folder | mkdir name | mkdir name |\n| Make empty file | touch name.txt | New-Item name.txt |\n| Show file contents | cat file.txt | Get-Content file.txt |\n| Clear screen | clear | cls |\n| Run Python | python3 file.py | python file.py |\n| Install package | pip install pkg | pip install pkg |\n\nPaths: Mac/Linux use `/Users/you/...`; Windows uses `C:\\Users\\you\\...`. Use Tab to autocomplete folder names.",
              code: {
                lang: "bash",
                snippet:
                  "# Mac / Linux — run one line at a time\npwd\nls\nmkdir codemoldova-week3\ncd codemoldova-week3\ntouch notes.txt\npython3 --version",
              },
              task: "Run pwd and ls in your terminal. Say out loud what each line printed.",
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
                "Build muscle memory: create a week 3 workspace from scratch using only the terminal.",
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
                "Notebooks are not the only way to run Python. Scripts and Thursday’s CLI tool run here.",
              task: "(1) python3 --version (or python --version on Windows). (2) Run a one-liner: python3 -c \"print('hello from terminal')\". (3) pip show requests or pip list | head — confirm pip responds (install requests first if needed).",
              code: {
                lang: "bash",
                snippet: 'python3 --version\npython3 -c "print(\'hello from terminal\')"\npip show requests',
              },
            },
          ],
          labCheatsheet: {
            title: "Terminal quick reference",
            content: "Keep this open while you practice. Same jobs on every OS — different spellings.",
            sections: [
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
                  { name: "pip install package", desc: "Install a Python library" },
                  { name: "export VAR=val", desc: "Set env var (Mac/Linux); PowerShell: $env:VAR=\"val\"" },
                ],
              },
            ],
          },
          challengeTab: {
            title: "Terminal scavenger hunt",
            content:
              "One challenge that ties everything together — no new commands, just combine navigation, files, and Python. Show a mentor your terminal when done (or post pwd output in WhatsApp).",
            task:
              "Starting from your home folder (`cd ~`): (1) cd into your codemoldova-week3 folder (create it if missing). (2) mkdir data inside it. (3) Create data/me.txt with your first name inside. (4) Run python3 -c \"print('challenge complete')\" from codemoldova-week3. (5) Run pwd and ls/dir data — your output should show the data folder and me.txt.",
            hints: [
              "Mac/Linux file: echo \"Mira\" > data/me.txt (after mkdir data).",
              "PowerShell: Set-Content data/me.txt \"Mira\".",
              "If python3 fails on Windows, try python instead.",
              "Wrong folder? pwd first, then cd to fix before continuing.",
            ],
          },
          homework: {
            title: "Terminal reps before Thursday",
            desc: "Five minutes a day beats one long cram session. You will need these commands to run your Python script from the terminal on Thursday.",
            tasks: [
              "Open Cursor, open the terminal, cd to your course folder, run ls/dir — do it twice without looking at notes.",
              "Create a new folder practice-thu and a file idea.txt with one sentence about your CLI tool idea.",
              "Optional: run clear/cls, then pwd → cd → ls in order from memory.",
            ],
          },
        },
        wed: {
          title: "Python scripts explained",
          date: "May 27",
          desc: "Workshop 2: notebooks are great for learning cell-by-cell — real projects are usually .py files you run from the terminal. Today we explain how a script is structured, how it differs from a notebook, and how to run one with python3 from your codemoldova-week3 folder. Download the starter script, work through the steps, then finish the practice script before Thursday’s build.",
          preview: "Notebook vs .py · create a script · def + main() · if __name__ · run with python3 · data/ folder.",
          goal: "Leave class able to create a .py file, organize code in functions, use if __name__ == \"__main__\", and run your script from the terminal with python3 script.py — no notebook required.",
          labDurationLabel: "50 min",
          labExampleUrl: "/lesson/week3_wed_script_starter.py",
          labExampleDownload: "week3_wed_script_starter.py",
          labExampleLabel: "Download script starter (.py)",
          steps: [
            {
              title: "Notebook vs script — two ways to run Python",
              timing: "Lab",
              content:
                "**Notebook (.ipynb):** cells you run one at a time; great for demos and experiments; output appears under each cell.\n\n**Script (.py):** one file, top to bottom, run all at once from the terminal: `python3 myfile.py`. That is how Thursday’s build works and how most apps ship.\n\nSame language — different workflow. You already used both ideas: cells in Week 1–2, `python3 -c \"...\"` on Monday.",
              task: "Say out loud: one thing you like about notebooks and one reason professionals still use .py files.",
            },
            {
              title: "Create your first script file",
              timing: "Lab",
              content:
                "In Cursor: open your **codemoldova-week3** folder (File → Open Folder). New file → save as `hello.py`. Paste the starter or type along. The file tree and terminal should both show the same folder.",
              task: "Confirm `hello.py` appears in the sidebar inside codemoldova-week3.",
              links: [
                { label: "Python tutorial — modules", href: "https://docs.python.org/3/tutorial/modules.html" },
              ],
            },
            {
              title: "Anatomy of a script",
              timing: "Lab",
              content:
                "A small script usually has:\n\n1. **Comments** at the top — what the file does\n2. **imports** — libraries you need\n3. **functions** — reusable blocks with `def`\n4. **main()** — the story of what happens when someone runs the file\n5. **`if __name__ == \"__main__\":`** — only run main when this file is executed, not when imported\n\nKeep `main()` thin: call functions, do not dump 200 lines in one block.",
              code: {
                lang: "python",
                snippet:
                  'def greet(name: str) -> None:\n    print(f"Hello, {name}!")\n\n\ndef main() -> None:\n    name = input("Your name: ").strip() or "friend"\n    greet(name)\n\n\nif __name__ == "__main__":\n    main()',
              },
              task: "In hello.py, add a second function `farewell(name)` that prints a goodbye line. Call it from main() after greet().",
            },
            {
              title: "Run the script from the terminal",
              timing: "Lab",
              content:
                "Open the terminal in Cursor (`` Ctrl+` ``). `cd` into codemoldova-week3. Run:\n\n`python3 hello.py` (Mac/Linux) or `python hello.py` (Windows if python3 is not found).\n\nThe program should prompt in the **terminal**, not in a notebook cell. If you see `can't open file`, run `pwd` / `Get-Location` — you are probably in the wrong folder.",
              code: {
                lang: "bash",
                snippet: "cd ~/codemoldova-week3   # adjust path to yours\npwd\nls\npython3 hello.py",
              },
              task: "Run hello.py from the terminal twice with two different names. Screenshot or show a mentor your terminal output.",
            },
            {
              title: "Edit → save → run again",
              timing: "Lab",
              content:
                "The loop for script development:\n\n1. Edit the .py file in Cursor\n2. Save (Cmd/Ctrl+S)\n3. Run `python3 hello.py` again in the terminal\n\nNo kernel to restart. If something breaks, read the **traceback** — last line is the error; find the line number in your file.",
              task: "Introduce a small bug on purpose (typo in a variable name), run the script, read the traceback, fix it, run again.",
            },
            {
              title: "data/ folder and pathlib",
              timing: "Lab",
              content:
                "Scripts often read and write files next to them. Use a **data/** folder so your project stays tidy — same habit as Week 2 JSON saves.\n\n`from pathlib import Path` builds paths that work on Mac and Windows: `Path(\"data\") / \"notes.json\"`.",
              code: {
                lang: "python",
                snippet:
                  'from pathlib import Path\n\nDATA = Path("data")\nDATA.mkdir(exist_ok=True)\n\nnotes_file = DATA / "notes.txt"\nnotes_file.write_text("Week 3 script\\n", encoding="utf-8")\nprint(notes_file.read_text(encoding="utf-8"))',
              },
              task: "Add a cell-free version in a new file `files_demo.py`: create data/, write one line to data/notes.txt, print it with read_text. Run with python3 from the terminal.",
            },
            {
              title: "Practice — your own mini-script",
              timing: "Practice",
              content:
                "Ship a second file `about_me.py` (your name) with at least two functions and `if __name__ == \"__main__\"`. Ideas: print three facts about you, ask one input(), or print a favorite movie from a variable.",
              task: "Run `python3 about_me.py` successfully from codemoldova-week3. Optional: save one line of output to data/about.txt using pathlib.",
            },
          ],
          labCheatsheet: {
            title: "Script quick reference",
            content: "Keep this open while you practice — Thursday’s build uses the same patterns.",
            sections: [
              {
                title: "File structure",
                methods: [
                  { name: "def name():", desc: "Reusable block of code" },
                  { name: "def main():", desc: "What happens when the script runs" },
                  { name: 'if __name__ == "__main__":', desc: "Entry point — call main() here" },
                ],
              },
              {
                title: "Terminal",
                methods: [
                  { name: "cd folder", desc: "Move into your project folder first" },
                  { name: "python3 file.py", desc: "Run the whole script" },
                  { name: "ls / dir", desc: "Confirm .py and data/ are present" },
                ],
              },
              {
                title: "Files",
                methods: [
                  { name: "Path(\"data\")", desc: "Folder next to your script" },
                  { name: ".mkdir(exist_ok=True)", desc: "Create folder if missing" },
                  { name: ".read_text() / .write_text()", desc: "Read or write a text file" },
                ],
              },
            ],
          },
          challengeTab: {
            title: "Script port challenge",
            content:
              "Take **one idea** from a Week 1 or Week 2 notebook (temperature labels, double(n), a print from your movie search) and rewrite it as a plain .py file with functions + main. No API keys required for the base challenge.",
            task:
              "(1) New file `port.py` in codemoldova-week3. (2) At least two def functions. (3) if __name__ block. (4) Run with python3 port.py from the terminal. (5) Show a mentor or post pwd + ls in WhatsApp.",
            hints: [
              "Start small — five to fifteen lines of real logic beats copying a whole notebook.",
              "If you port the guessing game, use input() in a while loop inside main().",
              "Week 2 students: printing a hard-coded movie dict counts if you explain it to a partner.",
            ],
          },
          homework: {
            title: "Script reps before build day",
            desc: "Thursday combines terminal + script. You should be able to cd to your folder and run a .py file without re-reading Monday’s notes.",
            tasks: [
              "Run hello.py and about_me.py (or port.py) from the terminal twice each.",
              "Create data/ if you have not — one text or JSON file inside it.",
              "Optional: copy one function from a Week 2 notebook into a .py file and import nothing except stdlib.",
            ],
          },
        },
        thu: {
          title: "Terminal + script build",
          date: "May 28",
          desc: "Build day: combine Monday’s terminal skills with Wednesday’s scripts. You will cd into codemoldova-week3, run a tool with command-line arguments (sys.argv), save data under data/, and demo it live from the terminal — not from a notebook cell.",
          preview: "cd → python3 tool.py command · sys.argv · data/ JSON · usage message · tiered stretch goals.",
          goal: "Ship a terminal-run Python script with at least two commands, a data/ file that persists between runs, and a printed usage line when someone runs it wrong.",
          labDurationLabel: "60 min",
          labExampleUrl: "/lesson/week3_thu_build_starter.py",
          labExampleDownload: "week3_thu_build_starter.py",
          labExampleLabel: "Download build starter (.py)",
          steps: [
            {
              title: "Terminal setup — same folder as your script",
              content:
                "Open Cursor’s terminal. `cd` into **codemoldova-week3**. Run `pwd` / `Get-Location` and `ls` / `dir` — you should see your .py files and a data/ folder (create data/ if missing). Every command today starts from here.",
              task: "Paste your pwd output in WhatsApp or show a mentor before you code new features.",
              code: {
                lang: "bash",
                snippet: "cd ~/codemoldova-week3\npwd\nls -la",
              },
            },
            {
              title: "Pick your project",
              content:
                "Choose **one** tool to build (rename the starter file to match):\n\n• **Journal** — add / list short notes saved in data/notes.json\n• **Watchlist** — add / list movies (reuse Week 2 JSON ideas)\n• **Quiz cards** — add / list Q&A pairs from input()\n• **Unit converter** — convert km↔miles or °C↔°F from sys.argv numbers\n• **Your idea** — clear it with a mentor first\n\nWrite the usage line you want **before** you code: `python3 tool.py add \"hello\"`",
              task: "Tell a partner your project name and two commands it will support.",
            },
            {
              title: "Commands with sys.argv",
              content:
                "`import sys` — `sys.argv` is a list of strings from the terminal. Example: `python3 tool.py greet Ada` → sys.argv[0] is tool.py, [1] is greet, [2] is Ada.\n\nIf len(sys.argv) is too small, print usage and exit — do not crash with IndexError.",
              code: {
                lang: "python",
                snippet:
                  'import sys\n\nif len(sys.argv) < 2:\n    print("Usage: python3 tool.py greet <name>")\n    sys.exit(1)\n\ncmd = sys.argv[1]\nif cmd == "greet":\n    name = sys.argv[2] if len(sys.argv) > 2 else "friend"\n    print(f"Hello, {name}!")',
              },
              task: "Run the build starter: `python3 week3_thu_build_starter.py greet YourName` and `python3 week3_thu_build_starter.py list`.",
            },
            {
              title: "Functions + data/ persistence",
              content:
                "Split logic: `load_items()`, `save_items()`, `cmd_add(...)`, `cmd_list()`, `main()`. Save JSON in data/ so running the script again remembers what you added. Use pathlib.Path like Wednesday.",
              task: "Implement **add** and **list** (or your equivalents) so list shows what add saved after you run the script twice.",
            },
            {
              title: "Demo from the terminal",
              content:
                "Build day means a live demo: open terminal, cd, run commands in order, no clicking Run in a notebook. Fix paths with pwd if python says file not found.",
              task: "Demo to a partner: wrong usage → usage message; add two items → list shows both.",
            },
          ],
          homework: {
            title: "README stub",
            desc: "Create README.md in codemoldova-week3 with three sections: what the tool does, example commands (copy-paste from your terminal history), one thing you would add next week.",
            tasks: [
              "At least two working commands documented",
              "data/ file listed (what gets saved)",
              "Optional: third command or argparse --help stretch",
            ],
          },
          challenges: {
            base: {
              title: "Terminal script that works",
              desc: "Run from codemoldova-week3 with sys.argv commands.",
              steps: [
                "cd into project folder; python3 tool.py runs without file-not-found",
                "Two commands work (e.g. add + list, or greet + list)",
                "Wrong invocation prints a usage line, not a traceback",
              ],
            },
            medium: {
              title: "Persistent data/",
              desc: "JSON or text in data/ survives closing the terminal.",
              steps: [
                "add saves to data/*.json (or .txt)",
                "list reads the same file and prints items",
                "Run add twice, list once — both items appear",
              ],
            },
            hard: {
              title: "Third command or delete",
              desc: "More like a real CLI.",
              steps: [
                "Third command: clear, delete <id>, search <word>, or convert with two numbers",
                "main() stays short — logic lives in functions",
                "Optional: try/except around int() or JSON load with a friendly message",
              ],
            },
            bonus:
              "Port a Week 2 movie search into a script command that calls requests (key still in env var, never in the file). Or swap sys.argv for argparse --help.",
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

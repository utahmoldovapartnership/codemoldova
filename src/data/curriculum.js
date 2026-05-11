export const phases = [
  {
    id: 1,
    title: "Foundations",
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
            desc: "Same ideas as class: input(), print(), f-strings. Add new cells at the bottom of week1_intro.ipynb, or duplicate the file as week1_homework.ipynb. Post blockers in Slack before Wednesday if you get stuck.",
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
          title: "What can AI actually do?",
          date: "May 13",
          desc: "No workshop today, just exploration. We'll try out different AI tools together: image generators, text AI, code helpers. The goal is to build intuition for what AI is good at, what it gets wrong, and why that matters for you as someone learning to code.",
          preview: "Hands-on with ChatGPT, Claude, and image tools: strengths, limits, and honest mistakes.",
          steps: [
            {
              title: "Try ChatGPT and Claude",
              content: "Both ChatGPT and Claude are AI assistants that can answer questions, write code, and explain concepts. They feel similar but have different strengths. Let's see for ourselves.",
              task: "Open Claude.ai and ChatGPT. Ask both: 'What is a variable in Python?' Compare the answers.",
            },
            {
              title: "Generate images with prompts",
              content: "AI can generate images from text descriptions. The quality of your prompt matters a lot. Vague prompts get generic results, and specific prompts get interesting ones.",
              task: "Try an image generator. Write a prompt for a scene in Moldova. Then rewrite it with more detail. Notice the difference.",
            },
            {
              title: "Give AI a task it fails at",
              content: "AI makes confident mistakes. It can give wrong answers and sound completely sure. This is the most important thing to understand about these tools.",
              task: "Ask Claude or ChatGPT: 'What is 17 × 13 × 7?' Check it with Python. Did it get it right?",
            },
            {
              title: "Discussion: what can AI not replace?",
              content: "AI is great at writing, summarizing, generating ideas, and explaining. It's bad at real-time information, precise math, and understanding context it wasn't given.",
              task: "In pairs: name one thing AI is great at and one thing you'd never trust it to do alone. Share with the class.",
            },
            {
              title: "Prompt writing: be specific",
              content: "The skill of talking to AI is called prompt engineering. The more specific and clear you are, the better the result. This is a skill you'll build all course.",
              task: "Ask Claude to write a Python program that does something useful. Then ask it to improve the program. How does specificity change the output?",
            },
          ],
          homework: {
            title: "Explore one AI tool in depth",
            desc: "Pick one AI tool (Claude, ChatGPT, or an image generator) and spend 15 minutes exploring it.",
            tasks: [
              "Ask it to explain something you've always been curious about",
              "Ask it something you already know. Does it get it right?",
              "Find one answer where it seems confident but might be wrong",
              "Write down: what surprised you most?",
            ],
          },
        },
        thu: {
          title: "Mad libs generator",
          date: "May 14",
          desc: "Your first real build. We'll use everything from Monday (variables, input(), print()—whether you practiced in a notebook or a .py file) to make an interactive story where the user fills in the blanks. Pair up if you want, go solo if you prefer.",
          preview: "A fill-in-the-blanks story using variables, input(), and print().",
          steps: [
            {
              title: "Plan your story",
              content: "Before writing code, plan the story. What blanks will the user fill in? Pick a theme: adventure, food, sports, whatever's funny to your group.",
              task: "Write out your story on paper with blanks. Mark each blank: [noun], [verb], [adjective], [name], etc.",
            },
            {
              title: "Collect input from the user",
              content: "Use input() for each blank. Store each answer in its own variable. Don't reveal the story yet. The surprise is part of the fun.",
              code: { lang: "python", snippet: 'noun = input("Give me a noun: ")\nverb = input("Give me a verb: ")\nadjective = input("Give me an adjective: ")' },
              task: "Write all your input() prompts and store the answers in well-named variables.",
            },
            {
              title: "Build the story string",
              content: "Now combine the variables into the story. Use an f-string for the cleanest result: wrap the whole string in f'...' and put variable names inside {}.",
              code: { lang: "python", snippet: 'story = f"One day, {noun} decided to {verb} across the {adjective} field."\nprint(story)' },
              task: "Write your story using an f-string. Test it. Does it read right?",
            },
            {
              title: "Run it, share it, laugh",
              content: "Run the program a few times with intentionally bad word choices. That's where the humor comes from. Share with a classmate.",
              task: "Run your mad lib 3 times with wild word choices. Which combination was funniest?",
            },
            {
              title: "Polish and extend",
              content: "Add more prompts for a longer story, or ask for the user's name to personalize it.",
              task: "Add at least 3 more blanks to your story. Make it longer and funnier.",
            },
          ],
          homework: {
            title: "Extend your mad lib",
            desc: "Make your mad lib longer, funnier, or more interactive.",
            tasks: [
              "Add 5 more input prompts",
              "Make the story at least 3 sentences long",
              "Add the user's own name as a character in the story",
            ],
          },
          challenges: {
            base: {
              title: "Mad libs generator",
              desc: "Use variables and input() to collect words and build a story.",
              steps: [
                "Create at least 5 input() prompts with clear labels",
                "Store each answer in a well-named variable",
                "Print the completed story using an f-string",
              ],
            },
            medium: {
              title: "Add more variety",
              desc: "Make the story longer and add a loop to play again.",
              steps: [
                "Add at least 5 more input prompts",
                "Make the story at least 4 sentences",
                'Use a while loop that asks "Play again? (y/n)" after each story',
              ],
            },
            hard: {
              title: "Multiple story templates",
              desc: "Build 3 different story templates and let the user pick one.",
              steps: [
                "Create 3 different story templates as string variables",
                "Show a menu: 'Pick a story: 1) Adventure 2) Food 3) Sports'",
                "Use if/else to select the right template based on input",
                "Use a loop so they can play all three",
              ],
            },
            bonus: "Add color to your output using the colorama library. Install it with: pip3 install colorama",
          },
        },
      },

      {
        num: 2,
        mon: {
          title: "Logic + loops",
          date: "May 18",
          desc: "This is where programming gets interesting. We'll teach the computer to make decisions and repeat tasks. These two ideas, if/else and loops, are the core of almost every program ever written.",
          preview: "if/else, loops, and functions. How programs decide and repeat.",
          steps: [
            {
              title: "if / elif / else: making decisions",
              content: "An if statement runs code only when a condition is true. You can chain conditions with elif (else if) and catch everything else with else.",
              code: { lang: "python", snippet: 'age = int(input("How old are you? "))\nif age >= 18:\n    print("You can vote!")\nelif age >= 16:\n    print("Almost there.")\nelse:\n    print("Not yet.")' },
              task: "Write an if/elif/else that checks a temperature: hot (>30), warm (15-30), cold (<15).",
            },
            {
              title: "Comparison operators",
              content: "These are the tools for comparing values: == (equal), != (not equal), > (greater than), < (less than), >= (greater or equal), <= (less or equal).",
              code: { lang: "python", snippet: '10 == 10   # True\n10 != 5    # True\n7 > 3      # True\n5 >= 5     # True' },
              task: "In the REPL, test all 6 comparison operators. What does each one return?",
            },
            {
              title: "for loops: doing something N times",
              content: "A for loop repeats code a fixed number of times. range(5) gives you the numbers 0, 1, 2, 3, 4.",
              code: { lang: "python", snippet: 'for i in range(5):\n    print("Lap", i + 1)\n\n# Loop over a list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)' },
              task: "Write a for loop that prints the numbers 1 through 10. Then write one that prints them in reverse.",
            },
            {
              title: "while loops: keep going until...",
              content: "A while loop runs as long as a condition is true. Use it when you don't know in advance how many times to repeat.",
              code: { lang: "python", snippet: 'count = 0\nwhile count < 5:\n    print("count is", count)\n    count += 1' },
              task: "Write a while loop that keeps asking the user to guess a secret word until they get it right.",
            },
            {
              title: "Functions: reusable code blocks",
              content: "A function is a named block of code you can call anytime. Define it once, use it anywhere. This is how you avoid repeating yourself.",
              code: { lang: "python", snippet: 'def greet(name):\n    print("Hello,", name + "!")\n\ngreet("Ana")\ngreet("Ion")\ngreet("Marta")' },
              task: "Write a function called double(n) that takes a number and prints double its value. Test it with 5 different inputs.",
            },
          ],
          homework: {
            title: "FizzBuzz",
            desc: "A classic programming challenge. Print numbers 1 to 100, but replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'.",
            tasks: [
              "Use a for loop with range(1, 101)",
              "Use if/elif/else with the modulo operator %",
              "Test your output. Do 15, 30, 45 all say FizzBuzz?",
              "Bonus: wrap it in a function called fizzbuzz(n) that works for any limit",
            ],
          },
        },
        wed: {
          title: "AI as your coding assistant",
          date: "May 20",
          desc: "Today we learn to use AI as a tool, not a crutch. You'll paste broken code into Claude and ask it to explain the error. You'll ask it to write a function. You'll also see where it gives wrong answers, and why checking its work matters.",
          preview: "Use AI to debug and generate code, then verify what it outputs.",
          steps: [
            {
              title: "Paste an error into Claude",
              content: "When your code breaks, copy the error message and paste it into Claude with the code. Ask: 'What does this error mean and how do I fix it?' This is how professionals debug.",
              task: "Intentionally break a Python program (delete a colon, misspell a variable). Paste the error into Claude and ask what's wrong.",
            },
            {
              title: "Ask AI to write a function",
              content: "You can ask Claude to write code for you. The key is being specific. Instead of 'write a Python function', say 'write a Python function that takes a list of numbers and returns the average'.",
              task: "Ask Claude: 'Write a Python function that takes a sentence and returns how many words are in it.' Paste it into your code and test it.",
            },
            {
              title: "Read and understand what it wrote",
              content: "Never just copy AI code without reading it. If you don't understand it, ask Claude to explain it line by line. You need to be able to debug it when it breaks.",
              task: "Take the function Claude wrote and ask it to explain each line. Then modify one line yourself. Does it still work?",
            },
            {
              title: "Ask AI to explain code line by line",
              content: "One of the best ways to learn is to read code you didn't write. Paste any Python code into Claude and ask: 'Explain this code line by line as if I'm a beginner.'",
              task: "Find any Python code online (even a simple script). Paste it into Claude and ask for a line-by-line explanation.",
            },
            {
              title: "When to use AI vs. figure it out yourself",
              content: "Use AI to unblock yourself, not to skip thinking. Good rule: try for 10 minutes first, then ask AI. If you immediately ask AI for everything, you won't build real understanding.",
              task: "Discuss in pairs: what's one situation where you'd use AI immediately? What's one where you'd try yourself first?",
            },
          ],
          homework: {
            title: "AI-assisted debugging practice",
            desc: "Take the FizzBuzz code from Monday and intentionally introduce 3 bugs, then use AI to help debug.",
            tasks: [
              "Introduce 3 different bugs into your FizzBuzz code",
              "Paste each broken version into Claude one at a time",
              "Read Claude's explanation. Do you understand why it was broken?",
              "Fix each bug yourself (don't just copy Claude's fix)",
            ],
          },
        },
        thu: {
          title: "Number guessing game",
          date: "May 21",
          desc: "Build a complete game using loops and conditionals. The computer picks a secret number, you guess, it tells you higher or lower. Add a score counter, add difficulty levels, and make it yours.",
          preview: "Higher-or-lower guessing game: loops, conditions, and your own rules.",
          steps: [
            {
              title: "Pick the secret number",
              content: "The random module lets Python generate random numbers. Import it and use randint() to pick a number in a range.",
              code: { lang: "python", snippet: "import random\nsecret = random.randint(1, 100)\nprint('Secret (for testing):', secret)" },
              task: "Run this code a few times. Does the number change each time? Remove the print when you're done testing.",
            },
            {
              title: "The guessing loop",
              content: "Use a while loop that keeps running until the player guesses correctly. Inside, use input() to get their guess.",
              code: { lang: "python", snippet: 'guess = None\nwhile guess != secret:\n    guess = int(input("Guess: "))\n    if guess < secret:\n        print("Higher!")\n    elif guess > secret:\n        print("Lower!")\n    else:\n        print("You got it!")' },
              task: "Add this loop to your program. Test it. Does it work?",
            },
            {
              title: "Count the guesses",
              content: "Add a counter variable that tracks how many guesses the player has used. Show it when they win.",
              task: "Add a guesses variable that starts at 0 and increases by 1 each time. Print the total at the end.",
            },
            {
              title: "Add a maximum guess limit",
              content: "Give the player a limited number of guesses. If they run out, reveal the secret number and end the game.",
              task: "Modify your loop to end after 7 guesses. Tell the player they lost and show the answer.",
            },
            {
              title: "Difficulty modes",
              content: "Let the player choose easy (1 to 50, 10 guesses), medium (1 to 100, 7 guesses), or hard (1 to 200, 5 guesses) before the game starts.",
              task: "Add a menu at the start that sets the range and max guesses based on difficulty.",
            },
          ],
          homework: {
            title: "Polish the game",
            desc: "Make the guessing game more complete and personal.",
            tasks: [
              "Add a play again loop that asks after each game",
              "Track wins and losses across multiple games",
              "Add a high score: track the fewest guesses ever used",
            ],
          },
          challenges: {
            base: {
              title: "Number guessing game",
              desc: "The computer picks a number from 1 to 100. The player guesses until they get it right.",
              steps: [
                "Use random.randint(1, 100) for the secret number",
                "Loop until the player guesses correctly",
                "Give higher / lower hints after each guess",
              ],
            },
            medium: {
              title: "Add a guess limit and score",
              desc: "Give the player 7 guesses max. Track how many they used and show their score.",
              steps: [
                "Add a max_guesses = 7 variable",
                "End the game early if they run out",
                "Show remaining guesses on each turn",
                "Print their score (guesses used) when they win",
              ],
            },
            hard: {
              title: "Difficulty modes + replay",
              desc: "Let the player choose difficulty. After each game, ask if they want to play again.",
              steps: [
                "Add a difficulty menu: easy (1 to 50, 10 guesses), medium (1 to 100, 7 guesses), hard (1 to 200, 5 guesses)",
                "Set the range and max guesses based on the choice",
                "Add a play again loop after the game ends",
                "Track total wins across multiple rounds",
              ],
            },
            bonus: "Add a 'hot/cold' system: instead of higher/lower, tell the player how far they are (burning hot, warm, cold, freezing).",
          },
        },
      },
    ],
  },

  {
    id: 2,
    title: "Python Projects",
    color: "#3eb8c0",
    weeks: [
      {
        num: 3,
        mon: {
          title: "Data structures",
          date: "May 25",
          desc: "Lists and dictionaries are how Python holds collections of information. They're everywhere: every app, every database, every website. Understanding them unlocks the next level of what you can build.",
          preview: "Lists, dictionaries, and saving data to files.",
          steps: [
            {
              title: "Lists: ordered collections",
              content: "A list holds multiple items in a single variable. Items are ordered, can be any type, and can repeat. Access them by index (starting at 0).",
              code: { lang: "python", snippet: 'cities = ["Chișinău", "Bălți", "Cahul"]\nprint(cities[0])   # Chișinău\ncities.append("Orhei")\nprint(len(cities)) # 4' },
              task: "Create a list of 5 of your favorite movies. Print the first and last one. Add one more to the end.",
            },
            {
              title: "Looping over a list",
              content: "A for loop over a list visits each item in order. This is how you process every element without repeating yourself.",
              code: { lang: "python", snippet: 'scores = [88, 92, 75, 100, 61]\nfor score in scores:\n    print(score)\n\n# Total\nprint("Total:", sum(scores))' },
              task: "Create a list of 5 numbers. Loop through it and print each one. Then print the sum and the average.",
            },
            {
              title: "Dictionaries: key-value pairs",
              content: "A dictionary stores data as key-value pairs, like a contacts book where you look up a person by name. Keys are unique; values can be anything.",
              code: { lang: "python", snippet: 'student = {\n    "name": "Ana",\n    "age": 20,\n    "city": "Chișinău"\n}\nprint(student["name"])  # Ana\nstudent["grade"] = "A"' },
              task: "Create a dictionary for yourself with keys: name, age, city, hobby. Print each value using its key.",
            },
            {
              title: "Reading and writing files",
              content: "Python can read from and write to .txt files. This lets your program remember data between runs.",
              code: { lang: "python", snippet: '# Writing\nwith open("notes.txt", "w") as f:\n    f.write("Hello from Python!\\n")\n\n# Reading\nwith open("notes.txt", "r") as f:\n    content = f.read()\n    print(content)' },
              task: "Write a program that saves your name and city to a file, then reads it back and prints it.",
            },
            {
              title: "Practical example: to-do list",
              content: "Combine lists and file I/O to build a to-do list that persists between runs.",
              code: { lang: "python", snippet: '# Load tasks from file\ntasks = []\ntry:\n    with open("tasks.txt") as f:\n        tasks = [line.strip() for line in f]\nexcept FileNotFoundError:\n    pass\n\n# Add a task\ntask = input("Add task: ")\ntasks.append(task)\n\n# Save\nwith open("tasks.txt", "w") as f:\n    f.write("\\n".join(tasks))' },
              task: "Run this program twice. Does your task persist between runs?",
            },
          ],
          homework: {
            title: "Student grade tracker",
            desc: "Build a program that stores student names and their grades in a dictionary.",
            tasks: [
              "Create a dictionary where keys are names and values are grades (as numbers)",
              "Print each student and their grade using a for loop",
              "Calculate and print the class average",
              "Find and print the student with the highest grade",
            ],
          },
        },
        wed: {
          title: "AI + real data",
          date: "May 27",
          desc: "We'll download a real dataset (maybe local weather, maybe school enrollment numbers) and ask an AI to help us understand it. Then we'll verify its answers with actual Python code. This is how professionals use AI: as a starting point, not a final answer.",
          preview: "Open a real dataset, ask AI, then check the answers in Python.",
          steps: [
            {
              title: "Open a CSV file with Python",
              content: "CSV files are spreadsheets in plain text. Python's built-in csv module can read them. We'll also look at pandas, which is more powerful.",
              code: { lang: "python", snippet: "import csv\nwith open('data.csv') as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row)" },
              task: "Download a CSV from Kaggle (any simple one, like world population or country capitals). Open it in Python and print the first 5 rows.",
            },
            {
              title: "Ask Claude about the data",
              content: "Paste a few rows of your data into Claude and ask: 'What does this data show? What are some interesting questions I could ask about it?' See what it suggests.",
              task: "Copy the first 10 rows of your CSV into Claude. Ask it 3 different questions about the data. Write down its answers.",
            },
            {
              title: "Verify Claude's answers with code",
              content: "Now write Python code to check what Claude said. Does the code agree? This is the key habit: AI generates hypotheses, code checks them.",
              task: "Take one of Claude's claims about your data and write a loop or calculation to verify it. Was it right?",
            },
            {
              title: "Spot where AI guesses vs. where it's right",
              content: "AI is good at general patterns but bad at exact numbers. It may summarize correctly but get specific counts wrong. Your code is the truth. Claude is a starting point.",
              task: "Find one place where Claude was wrong or imprecise. Show the class.",
            },
            {
              title: "Discussion: AI confidence ≠ AI accuracy",
              content: "AI sounds confident even when it's wrong. The word 'approximately' is a red flag. Always verify numbers with code.",
              task: "Group discussion: in what real-world situations would it be dangerous to trust AI output without checking? Come up with 3 examples.",
            },
          ],
          homework: {
            title: "Data exploration",
            desc: "Find a dataset you're personally curious about and explore it.",
            tasks: [
              "Find a CSV on Kaggle or data.gov about something you find interesting",
              "Write Python to load it and print basic stats (count, min, max, average of one column)",
              "Ask Claude 3 questions about the data and verify one answer with code",
              "Write 2 sentences about what you found",
            ],
          },
        },
        thu: {
          title: "Personal expense tracker",
          date: "May 28",
          desc: "Build a real CLI app you'll actually use. Add an expense, see your total, save it to a file so it persists. This brings together everything from the past 3 weeks.",
          preview: "Expense tracker in the terminal: add lines, totals, and a file that persists.",
          steps: [
            {
              title: "The menu loop",
              content: "Build a menu that keeps showing options until the user quits. This is the backbone of any CLI app.",
              code: { lang: "python", snippet: 'while True:\n    print("\\n1) Add expense")\n    print("2) View expenses")\n    print("3) Quit")\n    choice = input("Choose: ")\n    if choice == "1":\n        print("Add...")\n    elif choice == "2":\n        print("View...")\n    elif choice == "3":\n        break' },
              task: "Get this menu working. Test that each option branches correctly.",
            },
            {
              title: "Store expenses in a list of dicts",
              content: "Each expense is a dictionary with a description and an amount. Store them all in a list.",
              code: { lang: "python", snippet: 'expenses = []\n\ndef add_expense():\n    desc = input("Description: ")\n    amount = float(input("Amount (lei): "))\n    expenses.append({"desc": desc, "amount": amount})' },
              task: "Add the add_expense() function and connect it to menu option 1.",
            },
            {
              title: "View expenses and total",
              content: "Loop through the expenses list and print each one. Calculate and show the running total.",
              code: { lang: "python", snippet: 'def view_expenses():\n    if not expenses:\n        print("No expenses yet.")\n        return\n    total = 0\n    for e in expenses:\n        print(f"  {e[\'desc\']}: {e[\'amount\']} lei")\n        total += e["amount"]\n    print(f"Total: {total:.2f} lei")' },
              task: "Add this function and connect it to menu option 2.",
            },
            {
              title: "Save to file, load on startup",
              content: "Use a text file to save expenses between runs. Save on quit, load at startup.",
              task: "Use the file I/O pattern from Monday: save expenses to a file when the user quits, and load them at the start of the program.",
            },
            {
              title: "Format the output",
              content: "Make the output readable: align columns, show currency properly, add a header line.",
              task: "Use f-strings to format expense rows so the amounts are right-aligned. Add a separator line above the total.",
            },
          ],
          homework: {
            title: "Extend the tracker",
            desc: "Add at least one new feature to your expense tracker.",
            tasks: [
              "Add a 'delete expense' option",
              "Add categories (food, transport, entertainment) and filter by category",
              "Show the biggest and smallest expense",
            ],
          },
          challenges: {
            base: {
              title: "Expense tracker",
              desc: "CLI app: add expenses, view them, see the total. Data saved to a file.",
              steps: [
                "Menu loop with add / view / quit options",
                "Store expenses as a list of dicts (description + amount)",
                "Calculate and print the total",
                "Save to file on quit, load on startup",
              ],
            },
            medium: {
              title: "Add categories and filtering",
              desc: "Let users assign a category to each expense. Filter by category.",
              steps: [
                "Add a category field when adding an expense",
                "Add menu option: 'View by category'",
                "Show totals per category",
              ],
            },
            hard: {
              title: "Budget tracker with limits",
              desc: "Set a monthly budget. Warn when spending is 80% of the limit. Show remaining budget.",
              steps: [
                "Ask for a monthly budget at startup",
                "Show remaining budget after each expense",
                "Warn when over 80% spent",
                "Color-code output: green = safe, yellow = warning, red = over budget",
              ],
            },
            bonus: "Export your expenses to a CSV file that can be opened in Excel or Google Sheets.",
          },
        },
      },

      {
        num: 4,
        mon: {
          title: "APIs & the internet",
          date: "Jun 1",
          desc: "How do apps talk to each other? Through APIs, which are a way for programs to request data from servers. Today you'll make Python fetch real live data from the internet: weather, jokes, whatever you want.",
          preview: "requests + JSON: pull live data from the web into Python.",
          steps: [
            {
              title: "What is an API?",
              content: "An API (Application Programming Interface) is a URL that returns data when you visit it from code. Instead of a webpage, you get raw data, usually in JSON format.",
              task: "Open this URL in your browser: https://api.open-meteo.com/v1/forecast?latitude=47.0&longitude=28.8&current_weather=true. You're looking at a real API response for Chișinău weather.",
            },
            {
              title: "Install and use requests",
              content: "The requests library makes it easy to fetch data from URLs in Python. Install it once, use it everywhere.",
              code: { lang: "bash", snippet: "pip3 install requests" },
              task: "Install requests. Then import it and run: print(requests.get('https://api.open-meteo.com/v1/forecast?latitude=47.0&longitude=28.8&current_weather=true').status_code)",
            },
            {
              title: "Fetch and parse JSON",
              content: "API responses come back as JSON, a text format that Python can turn into a dictionary. Call .json() on the response to get a Python dict.",
              code: { lang: "python", snippet: "import requests\nurl = 'https://api.open-meteo.com/v1/forecast?latitude=47.0&longitude=28.8&current_weather=true'\ndata = requests.get(url).json()\nprint(data['current_weather']['temperature'])" },
              task: "Fetch the weather data and print the temperature and wind speed for Chișinău.",
            },
            {
              title: "Build a weather reporter",
              content: "Ask the user for a city, look up its coordinates, fetch the weather, and report back. You can hardcode coordinates for a few cities.",
              task: "Build a function that takes a city name and prints the current temperature. Support at least 3 cities.",
            },
            {
              title: "Explore more APIs",
              content: "There are thousands of free APIs. The public-apis repo on GitHub lists hundreds of them.",
              task: "Look at the public APIs list. Find one that interests you. Try fetching data from it.",
            },
          ],
          homework: {
            title: "API explorer",
            desc: "Pick any free API and build a small Python script that fetches and displays data from it.",
            tasks: [
              "Find a free API (see Resources page for the public-apis list)",
              "Use requests to fetch data from it",
              "Print at least 3 pieces of information from the response",
              "Bonus: let the user enter a query (search term, city, etc.) and show results",
            ],
          },
        },
        wed: {
          title: "Build an AI-powered script",
          date: "Jun 3",
          desc: "Today you call an AI from your own Python code. You'll use the Anthropic or OpenAI API to send a message and get a response. It's the same thing Claude.ai does, but you're building it yourself.",
          preview: "Call Claude or GPT from a script: API keys and a working mini-tool.",
          steps: [
            {
              title: "Get an API key",
              content: "To use Claude or GPT from code, you need an API key. We'll do this together. Anthropic offers free credits to try the API.",
              task: "Sign up at console.anthropic.com. Go to API Keys and create a key. Keep it secret. Never share it or commit it to GitHub.",
            },
            {
              title: "Install the library",
              content: "The anthropic library handles all the API communication for you.",
              code: { lang: "bash", snippet: "pip3 install anthropic" },
              task: "Install the library. Then import it in a Python file to confirm it works.",
            },
            {
              title: "Send your first message",
              content: "Create a client, send a message, and print the response. This is the minimum working example.",
              code: { lang: "python", snippet: "import anthropic\n\nclient = anthropic.Anthropic(api_key='your-key-here')\n\nmessage = client.messages.create(\n    model='claude-haiku-4-5-20251001',\n    max_tokens=256,\n    messages=[{'role': 'user', 'content': 'Say hello in 10 different languages.'}]\n)\n\nprint(message.content[0].text)" },
              task: "Run this code with your API key. Change the prompt and see how the response changes.",
            },
            {
              title: "Build a question-answering script",
              content: "Ask the user for input, send it to Claude, and print the response. Now you have a custom AI assistant.",
              task: "Wrap the API call in a function that takes a question string and returns Claude's answer. Test it with 5 different questions.",
            },
            {
              title: "Build a simple chatbot loop",
              content: "Use a while loop to keep the conversation going. Each message is added to the messages list so Claude remembers context.",
              code: { lang: "python", snippet: "messages = []\nwhile True:\n    user_input = input('You: ')\n    if user_input == 'quit':\n        break\n    messages.append({'role': 'user', 'content': user_input})\n    response = client.messages.create(\n        model='claude-haiku-4-5-20251001',\n        max_tokens=256,\n        messages=messages\n    )\n    reply = response.content[0].text\n    messages.append({'role': 'assistant', 'content': reply})\n    print('Claude:', reply)" },
              task: "Get this chatbot working. Have a 5-message conversation with it.",
            },
          ],
          homework: {
            title: "Custom AI tool",
            desc: "Build a Python script that uses the Claude API to do something specific and useful.",
            tasks: [
              "Think of a task Claude would be good at (summarizing, translating, explaining, brainstorming)",
              "Write a script that takes user input, sends it to Claude with a specific system prompt",
              "Format the output so it's readable",
              "Test it with at least 5 different inputs",
            ],
          },
        },
        thu: {
          title: "Mini project sprint",
          date: "Jun 4",
          desc: "45 minutes to build something. 15 minutes to show it. Pick one: a weather app, a trivia game that quizzes you from a file, or an AI chatbot. No pressure. A working small thing beats an ambitious broken thing.",
          preview: "Sprint: weather fetch, file trivia, or AI chatbot. Pick one and ship.",
          steps: [
            {
              title: "Pick your project",
              content: "Choose one: (A) Weather app: fetch weather for any city and display it nicely. (B) Trivia game: load questions from a file, quiz the user, keep score. (C) AI chatbot: a Claude-powered assistant with a specific personality or purpose.",
              task: "Decide in 2 minutes. Tell the teacher your choice so they can help you scope it.",
            },
            {
              title: "Skeleton first",
              content: "Get the structure working before worrying about details. If it's a game, get the loop running. If it's an app, get the API call working.",
              task: "In the first 10 minutes, get something running, even if it's incomplete.",
            },
            {
              title: "Build for 30 more minutes",
              content: "Focus on making one thing work well rather than many things work poorly. Ask for help when you're stuck for more than 5 minutes.",
              task: "Build. Ask for help. Ship.",
            },
            {
              title: "Show and tell",
              content: "Everyone demos their project. Show the program running, then show a few lines of code. Explain one thing that was hard.",
              task: "Prepare a 2-minute demo. What does your program do? Show it working.",
            },
            {
              title: "Reflect",
              content: "What would you add with more time? What did you learn from building it under a time limit?",
              task: "Write down 3 things: what worked, what was hard, what you'd add next.",
            },
          ],
          homework: {
            title: "Extend your sprint project",
            desc: "Add one feature to whatever you built today.",
            tasks: [
              "Pick one feature that would make the project better",
              "Build it at home",
              "Be ready to show the improved version next session",
            ],
          },
          challenges: {
            base: {
              title: "Weather app",
              desc: "Ask for a city, fetch the weather, display temperature and conditions clearly.",
              steps: [
                "Use requests to call the Open-Meteo API",
                "Support at least 3 cities by hardcoding their coordinates",
                "Display temperature, wind speed, and a simple description",
              ],
            },
            medium: {
              title: "Trivia game",
              desc: "Load trivia questions from a file, quiz the user, keep score.",
              steps: [
                "Create a questions.txt or questions.json file with at least 10 questions and answers",
                "Load them into a list of dicts",
                "Loop through questions, show the question, get an answer, check it",
                "Show final score at the end",
              ],
            },
            hard: {
              title: "AI chatbot with personality",
              desc: "Claude-powered chatbot with a specific role (tutor, travel guide, recipe assistant, etc.).",
              steps: [
                "Use the Anthropic API with a system prompt that defines the chatbot's role",
                "Keep conversation history so it remembers context",
                "Add commands: 'reset' to clear history, 'quit' to exit",
                "Format output so it's readable (not a wall of text)",
              ],
            },
            bonus: "Combine all three: a weather chatbot that can answer weather questions for any city using real API data.",
          },
        },
      },
    ],
  },

  {
    id: 3,
    title: "Web Development",
    color: "#e05c97",
    weeks: [
      {
        num: 5,
        mon: {
          title: "HTML & CSS",
          date: "Jun 8",
          desc: "Today we switch from Python to the web. HTML is the structure of every website you've ever visited. CSS makes it look good. By the end of class you'll have a personal bio page running in your browser.",
          preview: "HTML structure and CSS: a bio page that runs in the browser.",
          steps: [
            {
              title: "How browsers render HTML",
              content: "HTML is a markup language. You wrap content in tags to give it meaning. The browser reads the tags and decides how to display them. Every website you've ever seen is HTML at its core.",
              code: { lang: "html", snippet: "<!doctype html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n    <p>This is a paragraph.</p>\n  </body>\n</html>" },
              task: "Create a file called index.html, paste this in, and open it in your browser. You've got a webpage.",
            },
            {
              title: "Tags: headings, paragraphs, links, images",
              content: "Learn the most common HTML tags. These 10 tags cover 90% of what you'll use.",
              code: { lang: "html", snippet: "<h1>Big heading</h1>\n<h2>Smaller heading</h2>\n<p>A paragraph of text.</p>\n<a href='https://google.com'>A link</a>\n<img src='photo.jpg' alt='My photo'>\n<ul>\n  <li>List item one</li>\n  <li>List item two</li>\n</ul>" },
              task: "Build a bio page: your name as h1, a short intro paragraph, a list of 3 hobbies, and your favorite website as a link.",
            },
            {
              title: "CSS: colors, fonts, spacing",
              content: "CSS styles your HTML. Add a <style> tag in the <head> or link a separate .css file. Properties like color, font-size, background, and padding change how things look.",
              code: { lang: "css", snippet: "body {\n  background: #1a1a2e;\n  color: #eee;\n  font-family: sans-serif;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n\nh1 {\n  color: #4f7cff;\n  font-size: 2.5rem;\n}" },
              task: "Add CSS to your bio page: dark background, readable text color, a nice font, and some padding.",
            },
            {
              title: "Layout basics",
              content: "Flexbox is the easiest way to arrange items in a row or column. Add display: flex to a container and the children line up.",
              code: { lang: "css", snippet: ".card-row {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.card {\n  background: #2a2a3e;\n  padding: 20px;\n  border-radius: 8px;\n  flex: 1;\n  min-width: 200px;\n}" },
              task: "Add a row of 3 cards to your bio page using flexbox.",
            },
            {
              title: "Push to GitHub",
              content: "Create a new GitHub repo, push your index.html, and your page is in version control. Next Thursday you'll make it live.",
              code: { lang: "bash", snippet: "git init\ngit add .\ngit commit -m 'Initial bio page'\ngit remote add origin https://github.com/yourusername/my-site.git\ngit push -u origin main" },
              task: "Push your bio page to a new GitHub repo called my-site.",
            },
          ],
          homework: {
            title: "Finish your bio page",
            desc: "Polish your bio page so it's ready to deploy on Thursday.",
            tasks: [
              "Complete: name, intro, hobbies, a photo or avatar, and a favorite link",
              "Style it so it looks like something you'd actually show someone",
              "Make sure it looks decent on mobile (use Chrome DevTools to test)",
              "Push the finished version to GitHub",
            ],
          },
        },
        wed: {
          title: "Design with AI",
          date: "Jun 10",
          desc: "What should your site look like? Use AI to generate ideas, copy, and even mock layouts. Then we'll do a crash course in Figma so you can sketch your site before you build it. Designers work this way. Now you do too.",
          preview: "AI drafts and a Figma wireframe before you write more HTML.",
          steps: [
            {
              title: "Ask Claude to write your bio copy",
              content: "Give Claude a few facts about yourself and ask it to write a short bio paragraph in a specific tone (professional, casual, funny, whatever fits you).",
              task: "Give Claude 5 facts about yourself and ask it to write a 3-sentence bio in a casual tone. Edit the result to sound more like you.",
            },
            {
              title: "Generate a palette and font pairing",
              content: "Ask Claude or ChatGPT: 'Suggest a dark color palette and font pairing for a personal portfolio site.' Then check the colors on Coolors.co.",
              task: "Get a palette suggestion and test it. Find one you actually like.",
            },
            {
              title: "Figma basics: frames and text",
              content: "Figma is a design tool. Create a frame (like a canvas), add rectangles, text, and shapes to mockup your layout before writing HTML.",
              task: "Create a free Figma account. Start a new file. Create a frame sized 1440×900. Add a header bar with your name in it.",
            },
            {
              title: "Wireframe your personal site",
              content: "A wireframe is a rough sketch of your layout with no final colors, just boxes and text placeholders. It's faster to rearrange a wireframe than rewrite HTML.",
              task: "In Figma, wireframe your bio page: header, a hero section, a skills or hobbies section, a footer. Just boxes and labels.",
            },
            {
              title: "Does the design match your personality?",
              content: "The best portfolio sites have a clear voice. Show your wireframe to the person next to you. Does it feel like you?",
              task: "Swap Figmas with a classmate. Give each other one piece of feedback: what does the design say about the person?",
            },
          ],
          homework: {
            title: "Figma mockup",
            desc: "Turn your wireframe into a higher-fidelity mockup with real colors and fonts.",
            tasks: [
              "Apply your chosen color palette to the Figma wireframe",
              "Add real typography (import a Google Font)",
              "Add placeholder content: your actual name, bio, a photo box",
              "Screenshot the mockup. You'll use it as a reference on Thursday",
            ],
          },
        },
        thu: {
          title: "Personal website goes live",
          date: "Jun 11",
          desc: "Polish your bio page, push it to GitHub, and deploy it on Vercel. By the end of this session, you'll have a real URL on the real internet that anyone in the world can visit. That's yours.",
          preview: "GitHub plus Vercel: your site live at a real URL.",
          steps: [
            {
              title: "Clean up the HTML/CSS",
              content: "Open your bio page. Make it match your Figma mockup as closely as you can. Focus on one or two things that make the biggest difference.",
              task: "Spend 15 minutes polishing: typography, spacing, colors. Does it look close to your mockup?",
            },
            {
              title: "git add, commit, push",
              content: "Save your changes to GitHub. This is the source Vercel will deploy from.",
              code: { lang: "bash", snippet: "git add .\ngit commit -m 'Polish bio page for deploy'\ngit push" },
              task: "Push your latest changes. Check GitHub to confirm they're there.",
            },
            {
              title: "Connect to Vercel",
              content: "Go to vercel.com, sign up with GitHub, click 'New Project', import your repo. Vercel detects it's a static site and deploys automatically.",
              task: "Deploy your site on Vercel. Share your URL with the class in the group chat.",
            },
            {
              title: "Test on mobile",
              content: "Open your URL on your phone. Does it look good? If not, add a CSS media query to fix the layout on small screens.",
              code: { lang: "css", snippet: "@media (max-width: 600px) {\n  h1 { font-size: 1.8rem; }\n  .card-row { flex-direction: column; }\n}" },
              task: "Fix at least one mobile layout issue if you see one.",
            },
            {
              title: "You're live on the internet",
              content: "That URL is yours. Share it with friends and family. You built a real website and deployed it to the internet in 3 sessions.",
              task: "Post your site URL in the class Facebook group.",
            },
          ],
          homework: {
            title: "Keep building",
            desc: "Add one more section or feature to your live website.",
            tasks: [
              "Add a Projects section (even if your only project so far is this site)",
              "Add a contact link (email or social)",
              "Make it look great on mobile",
              "Push the changes. They deploy automatically",
            ],
          },
          challenges: {
            base: {
              title: "Deploy your bio page",
              desc: "Polish your HTML/CSS bio page and get it live on the internet via Vercel.",
              steps: [
                "Clean up the page so it matches your Figma mockup",
                "Push to GitHub",
                "Deploy on Vercel and get a live URL",
                "Test on mobile",
              ],
            },
            medium: {
              title: "Add animations",
              desc: "Add CSS transitions or animations to make the page feel more alive.",
              steps: [
                "Add a hover effect on the cards (subtle lift or color change)",
                "Add a fade-in animation on the hero section using @keyframes",
                "Make links change color smoothly on hover with transition",
              ],
            },
            hard: {
              title: "Custom domain",
              desc: "Buy a cheap domain (or use a free one from Freenom) and connect it to your Vercel project.",
              steps: [
                "Find a free or cheap domain",
                "Add it to your Vercel project in Settings > Domains",
                "Update DNS records as instructed by Vercel",
                "Test that the domain resolves correctly",
              ],
            },
            bonus: "Add a dark/light mode toggle using a CSS class and a tiny bit of JavaScript.",
          },
        },
      },

      {
        num: 6,
        mon: {
          title: "JavaScript",
          date: "Jun 15",
          desc: "HTML structures, CSS styles, JavaScript acts. JS is what makes websites interactive: buttons that do things, content that changes without reloading. Today you'll make your page come alive.",
          preview: "DOM, click handlers, and fetch(): real interactivity in the browser.",
          steps: [
            {
              title: "What JavaScript does",
              content: "JavaScript runs in the browser and can change the page, react to clicks, fetch data, and more, all without refreshing. It's the only programming language that runs directly in a browser.",
              code: { lang: "html", snippet: "<script>\n  console.log('Hello from JavaScript!');\n  alert('The page has loaded.');\n</script>" },
              task: "Add a <script> tag to your bio page and log a message to the console. Open DevTools (F12) to see it.",
            },
            {
              title: "Selecting elements",
              content: "Use document.querySelector() to grab any HTML element by CSS selector. This is how JS talks to the page.",
              code: { lang: "js", snippet: "const heading = document.querySelector('h1');\nconsole.log(heading.textContent); // prints the heading text\nheading.textContent = 'Changed by JavaScript!';" },
              task: "Select your h1 and change its text using JavaScript. Then change its color using .style.color.",
            },
            {
              title: "Click events",
              content: "addEventListener() listens for user actions. The most common is a 'click' event on a button.",
              code: { lang: "js", snippet: "const btn = document.querySelector('#my-button');\nbtn.addEventListener('click', function() {\n  alert('Button clicked!');\n});" },
              task: "Add a button to your page. When clicked, change the background color of the page to a random color.",
            },
            {
              title: "Changing content dynamically",
              content: "You can update the HTML inside any element using .innerHTML. This lets you add, remove, or change content without touching the HTML file.",
              task: "Create a list with 3 items. Add a button that adds a new item to the list each time it's clicked.",
            },
            {
              title: "fetch(): loading data from an API",
              content: "fetch() is JavaScript's way to call APIs. It's like requests in Python but for the browser. It returns a Promise, so you chain .then() to get the data.",
              code: { lang: "js", snippet: "fetch('https://api.open-meteo.com/v1/forecast?latitude=47.0&longitude=28.8&current_weather=true')\n  .then(res => res.json())\n  .then(data => {\n    console.log(data.current_weather.temperature);\n  });" },
              task: "Add a 'Get Weather' button to your page that fetches the current temperature in Chișinău and displays it.",
            },
          ],
          homework: {
            title: "Interactive bio page",
            desc: "Add at least 2 interactive elements to your bio page using JavaScript.",
            tasks: [
              "A button that does something meaningful (not just an alert)",
              "An element that changes when the user interacts with it",
              "Bonus: fetch data from an API and display it on the page",
              "Push to GitHub when done. Changes deploy automatically",
            ],
          },
        },
        wed: {
          title: "Vibe coding session",
          date: "Jun 17",
          desc: "No rules today. Use AI to build something ridiculous, fun, or weird. A meme generator. A daily horoscope app. A 'is this fake news?' checker. The goal: explore what's possible when you combine what you know with AI assistance.",
          preview: "One silly or surprising page: AI-generated code, then you tweak and ship.",
          steps: [
            {
              title: "Pick your absurd idea",
              content: "The weirder the better. Some options: random compliment generator, 'what mood is this color' app, fortune cookie dispenser, fake news meter, daily challenge generator.",
              task: "Spend 5 minutes brainstorming with your neighbor. Pick the most fun idea.",
            },
            {
              title: "Use Claude to write most of the code",
              content: "Ask Claude to write the HTML, CSS, and JavaScript for your idea. Be specific about what you want it to do. Paste the code into a new index.html and see what happens.",
              task: "Ask Claude: 'Write a single-page HTML app that [your idea]. Use a dark theme with colorful accents. No frameworks.' Run the result.",
            },
            {
              title: "Understand enough to debug",
              content: "When (not if) something doesn't work, read the code. Use the console (F12). Ask Claude to explain what a specific section does. Fix it yourself.",
              task: "Find one thing that's broken or that you'd like to change. Fix it yourself before asking for help.",
            },
            {
              title: "Add one personal touch",
              content: "Add something that Claude didn't put there: a color you chose, a feature you thought of, a message that's uniquely yours.",
              task: "Add one thing that's your own idea, not Claude's suggestion.",
            },
            {
              title: "Demo to the class",
              content: "Show your creation. It doesn't need to be polished. It needs to be fun or interesting or both.",
              task: "2-minute demo: show the app working, then show the weirdest line of code in it.",
            },
          ],
          homework: {
            title: "Polish your vibe project",
            desc: "Make your session project actually usable and deploy it.",
            tasks: [
              "Fix any bugs that showed up during the demo",
              "Add one more feature",
              "Deploy it to Vercel and share the link",
            ],
          },
        },
        thu: {
          title: "Interactive web app",
          date: "Jun 18",
          desc: "Take your personal site to the next level. Add something interactive: a contact form, a live API call that shows something cool, or an animation. Make your site something worth bookmarking.",
          preview: "Form, live API widget, or animation: one standout feature on your site.",
          steps: [
            {
              title: "Choose your feature",
              content: "Pick one: (A) Contact form that shows a thank-you message on submit. (B) Live API widget (weather, quote of the day, etc.). (C) A CSS animation that adds personality to your page.",
              task: "Choose in 2 minutes. Describe it in one sentence to the teacher.",
            },
            {
              title: "Write the JavaScript",
              content: "For forms: use addEventListener on the form submit event. For APIs: use fetch(). For animations: use CSS @keyframes with a JS trigger.",
              task: "Get the core JavaScript working in isolation first. Test in the browser console before adding to your page.",
            },
            {
              title: "Connect to your HTML",
              content: "Wire up the JS to the actual HTML elements on your page. Make sure selectors match your actual element IDs and classes.",
              task: "Connect your JS to the page. Test the interaction end-to-end.",
            },
            {
              title: "Test on mobile",
              content: "Open Chrome DevTools, click the mobile icon, and test on a few different screen sizes. Fix anything that looks broken.",
              task: "Test on at least 2 phone sizes in DevTools. Fix one layout issue.",
            },
            {
              title: "Commit and deploy",
              content: "Push to GitHub. Your Vercel site updates automatically within 30 seconds.",
              code: { lang: "bash", snippet: "git add .\ngit commit -m 'Add interactive feature'\ngit push" },
              task: "Deploy and verify the feature works on the live URL.",
            },
          ],
          homework: {
            title: "Complete the feature",
            desc: "If you didn't finish in class, complete the interactive feature and deploy.",
            tasks: [
              "Feature works correctly end-to-end",
              "Looks good on mobile",
              "Deployed to your Vercel URL",
            ],
          },
          challenges: {
            base: {
              title: "Contact form",
              desc: "Add a contact form to your bio page. On submit, hide the form and show a thank-you message.",
              steps: [
                "Add an HTML form with name and message fields",
                "Add an event listener on submit (prevent default reload)",
                "Hide the form and show a styled thank-you message",
                "Add basic validation: both fields must be filled",
              ],
            },
            medium: {
              title: "Live API widget",
              desc: "Add a widget to your page that fetches live data and displays it stylishly.",
              steps: [
                "Choose an API (weather, random quote, random joke, etc.)",
                "Fetch data when the page loads",
                "Display it in a styled card",
                "Add a refresh button to fetch new data",
              ],
            },
            hard: {
              title: "Full interactive section",
              desc: "Add a fully interactive section: filterable project cards, a quiz, or a search feature.",
              steps: [
                "Build a data-driven section (at least 6 items)",
                "Add filter buttons that show/hide items by category",
                "Animate the items when they appear/disappear",
                "Make it fully responsive",
              ],
            },
            bonus: "Add local storage so users' preferences (theme, last visited section, etc.) persist across page loads.",
          },
        },
      },
    ],
  },

  {
    id: 4,
    title: "Final Project",
    color: "#f0a500",
    weeks: [
      {
        num: 7,
        mon: {
          title: "Databases + backend basics",
          date: "Jun 22",
          desc: "Where does data live? Databases. Today we'll talk about what they are, how they work, and you'll see a simple one in action. We'll use Supabase, a free, easy database that works great with web projects.",
          preview: "Tables, rows, and Supabase. See data read and written for real.",
          steps: [
            {
              title: "What is a database?",
              content: "A database is an organized way to store and retrieve data. Think of it like a spreadsheet, but structured for computers to read quickly, even with millions of rows.",
              task: "Think about your expense tracker from Week 3. How would you store 10,000 expenses in a spreadsheet? What problems would you hit? That's why databases exist.",
            },
            {
              title: "Tables, rows, and columns",
              content: "Relational databases organize data into tables (like spreadsheets). Each table has columns (like 'name', 'amount', 'date') and rows (individual records).",
              task: "Design a simple table on paper for a 'tasks' app. What columns would it have? What type of data goes in each column?",
            },
            {
              title: "Supabase: create a table",
              content: "Supabase is a free service that gives you a full PostgreSQL database with a visual interface. Create an account and set up a table in minutes.",
              task: "Go to supabase.com, create a free project, and create a table called 'tasks' with columns: id (auto), title (text), completed (boolean), created_at (timestamp).",
            },
            {
              title: "Add data and fetch it",
              content: "Use the Supabase dashboard to add a few rows manually. Then fetch them using the Supabase JavaScript client.",
              code: { lang: "js", snippet: "import { createClient } from '@supabase/supabase-js';\nconst supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);\n\nconst { data, error } = await supabase.from('tasks').select('*');\nconsole.log(data);" },
              task: "Add 3 tasks in the Supabase dashboard. Fetch them in JavaScript and print them to the console.",
            },
            {
              title: "You don't need to be an expert",
              content: "Databases are a deep topic. Full courses exist just on SQL. Today's goal is understanding the concept and seeing it work. You'll use Supabase for your final project if you want persistent data.",
              task: "In pairs: what kind of data does your final project idea need to store? Would a database help?",
            },
          ],
          homework: {
            title: "Plan your database",
            desc: "If your final project needs persistent data, plan the database schema.",
            tasks: [
              "List the types of data your project needs to store",
              "Design a table (or tables) on paper with column names and types",
              "If you're using Supabase: create the table and add test data",
            ],
          },
        },
        wed: {
          title: "Final project brainstorm",
          date: "Jun 24",
          desc: "What will you build? Today we figure that out together. Use AI to help you scope it, wireframe it, and make sure it's achievable in one week. You'll pitch your idea in 60 seconds: simple, clear, focused.",
          preview: "Scope, wireframe, and a 60-second pitch for your final project.",
          steps: [
            {
              title: "Brainstorm ideas",
              content: "A good final project is something you'd actually use, something that shows what you've learned, or something that solves a real problem, even a small one.",
              task: "Spend 5 minutes writing down every project idea you have, no matter how small. At least 5. Then pick your top 2.",
            },
            {
              title: "Scope check",
              content: "You have 3 sessions: one build day (Thursday), one deploy day (Monday next week), and Demo Day on Wednesday. That's about 3 hours of class time. Scope accordingly.",
              task: "For your top 2 ideas: ask Claude 'Can a beginner build [your idea] in 3 hours of coding?' See what it says.",
            },
            {
              title: "Wireframe your project",
              content: "Sketch the main screen(s) of your project. What does the user see? What can they do? A simple wireframe saves a lot of confused coding later.",
              task: "Draw a wireframe on paper or in Figma for your chosen project. It doesn't need to be pretty, just clear.",
            },
            {
              title: "60-second pitch",
              content: "Keep it simple: what does your app do, who is it for, and what's the one main thing a user can do with it?",
              task: "Write your pitch in one sentence: 'My app lets [who] do [what] so that [why].' Practice saying it in under 60 seconds.",
            },
            {
              title: "Teacher feedback",
              content: "We'll go around the room. Each student pitches their idea. Teacher gives feedback: is it scoped right? What's the hardest part? What should you cut?",
              task: "Give your pitch. Listen to feedback. Adjust your plan if needed.",
            },
          ],
          homework: {
            title: "Project plan",
            desc: "Come to Thursday's session ready to build.",
            tasks: [
              "Final project idea confirmed",
              "Wireframe done",
              "Tech stack decided (HTML/CSS/JS? Python? Supabase?)",
              "GitHub repo created and ready",
            ],
          },
        },
        thu: {
          title: "Final project day 1",
          date: "Jun 25",
          desc: "Time to build. Work solo or with a partner. The goal today is a working skeleton, something that runs, even if it's not pretty. Teacher will float around the room and help whoever's stuck.",
          preview: "Repo, layout, and one core feature running end-to-end.",
          steps: [
            {
              title: "Set up your project",
              content: "Create a new folder, initialize a git repo, create your starting files. Get the project scaffolded before writing any feature code.",
              code: { lang: "bash", snippet: "mkdir my-project\ncd my-project\ngit init\ntouch index.html style.css script.js\ngit add .\ngit commit -m 'Initial project setup'" },
              task: "Set up your project folder and push it to a new GitHub repo.",
            },
            {
              title: "Build the main UI skeleton",
              content: "Get the main screen(s) of your app looking roughly right, even with placeholder content. Don't style yet, just structure.",
              task: "Write the HTML for your main screen. Add placeholder content so you can see the layout.",
            },
            {
              title: "Get one core feature working",
              content: "What's the ONE thing your app does? Get that working today, even if nothing else does. A working core beats a half-built everything.",
              task: "Identify your core feature and implement it. Test it. If you're stuck for more than 10 minutes, ask for help.",
            },
            {
              title: "Write down what's left",
              content: "Make a list of everything you still need to build. Prioritize: what's essential for Demo Day vs. what's a nice-to-have?",
              task: "Create a TODO list in your project README. Mark each item: must-have or stretch.",
            },
            {
              title: "First commit",
              content: "Push what you have. Even an unfinished skeleton in GitHub is better than code only on your laptop.",
              code: { lang: "bash", snippet: "git add .\ngit commit -m 'Working skeleton for day 1'\ngit push" },
              task: "Push your work. Share the GitHub link in the class chat.",
            },
          ],
          homework: {
            title: "Build at home",
            desc: "Spend at least 30 minutes building after class. Focus on must-have features.",
            tasks: [
              "Complete the core feature if it's not done",
              "Work through at least one more item on your TODO list",
              "Commit and push everything before Monday",
            ],
          },
          challenges: {
            base: {
              title: "Working skeleton",
              desc: "Get your project set up and one core feature working.",
              steps: [
                "GitHub repo created with initial commit",
                "Main UI structure built in HTML",
                "At least one core feature works end-to-end",
                "TODO list in README",
              ],
            },
            medium: {
              title: "Two features working",
              desc: "Build and test two of your must-have features today.",
              steps: [
                "Core feature works",
                "Second feature works",
                "Basic styling applied",
                "Deployed to Vercel (even if incomplete)",
              ],
            },
            hard: {
              title: "Full feature set",
              desc: "All must-have features working. Start on stretch goals.",
              steps: [
                "All must-have features work",
                "App deployed to Vercel",
                "Mobile layout looks reasonable",
                "Working on at least one stretch goal",
              ],
            },
            bonus: "Add a README to your project that explains what it is, how to use it, and one thing you'd add with more time.",
          },
        },
      },

      {
        num: 8,
        mon: {
          title: "Git, deployment & portfolios",
          date: "Jun 29",
          desc: "Today we wrap up the technical skills: clean Git workflow, deploying your final project, and packaging your work as a portfolio piece that future employers or collaborators can find.",
          preview: "Commits, deploy, README, and a dry run before Demo Day.",
          steps: [
            {
              title: "Git best practices",
              content: "Good commit messages explain why a change was made, not just what. Short descriptive messages > vague ones. 'Add weather widget to homepage' is better than 'changes'.",
              code: { lang: "bash", snippet: "# Good commit messages\ngit commit -m 'Add weather widget to homepage'\ngit commit -m 'Fix mobile layout on nav bar'\ngit commit -m 'Connect expense tracker to Supabase'" },
              task: "Look at your project's git log. Are the messages clear? Rewrite your most recent commit message if it's vague.",
            },
            {
              title: "Deploy your final project",
              content: "Push your final project to GitHub and deploy it to Vercel. Make sure it's accessible at a public URL.",
              task: "Deploy your project. Share the URL with the teacher. Test it on your phone.",
            },
            {
              title: "Write a README",
              content: "A README is the first thing anyone sees when they visit your GitHub repo. It should explain what the project is, how to use it, and what you built it with.",
              code: { lang: "bash", snippet: "# My Project Name\nA short description of what the app does.\n\n## How to use\n1. Go to [live link]\n2. Do the main thing\n\n## Built with\n- HTML, CSS, JavaScript\n- Supabase for the database\n\n## What I'd add next\n- Feature I ran out of time for" },
              task: "Write a README for your final project using this format.",
            },
            {
              title: "Your GitHub is your portfolio",
              content: "Future employers and collaborators will look at your GitHub. A profile with real projects, clear READMEs, and regular commits tells a story.",
              task: "Make sure your final project AND your bio website are both visible on your GitHub profile.",
            },
            {
              title: "Practice your demo",
              content: "Tomorrow is Demo Day. You have 3 to 5 minutes. Plan what you'll show: what the app does, one feature you're proud of, and one thing you'd add.",
              task: "Do a practice run of your demo. Time yourself. What needs to be cut?",
            },
          ],
          homework: {
            title: "Demo Day prep",
            desc: "Get everything ready for tomorrow.",
            tasks: [
              "Final project live at a public URL",
              "README written and pushed",
              "Practice your demo at least once",
              "Know which feature you're most proud of",
            ],
          },
        },
        wed: {
          title: "Demo Day",
          date: "Jul 1",
          desc: "The final session. Everyone presents their project: what it does, how you built it, what was hard, what you're proud of. No grades, no judgment. This is a celebration of how far you've come in 8 weeks.",
          preview: "Demo Day: show the app, one hard problem, and what's next.",
          steps: [
            {
              title: "Setup time",
              content: "Arrive a few minutes early, have your project open and ready on your screen. Make sure the URL works on your device.",
              task: "Open your project on your device. Have the GitHub repo open in another tab.",
            },
            {
              title: "Each project gets 3 to 5 minutes",
              content: "Show the app working first. Don't explain before showing. Then show one piece of code that you're proud of or that was hard.",
              task: "When it's your turn: show, then explain. Keep it to 5 minutes.",
            },
            {
              title: "Talk about one hard thing",
              content: "Every project had at least one moment where you were stuck. Talk about it. What was the problem? How did you figure it out?",
              task: "Prepare your 'one hard thing' story. 30 seconds max.",
            },
            {
              title: "Talk about what's next",
              content: "What would you add with more time? What do you want to learn next? Where does this project go from here?",
              task: "Name one thing you'd add and one thing you want to learn after this course.",
            },
            {
              title: "Celebrate",
              content: "8 weeks ago you opened a terminal for the first time. Today you're presenting a real app to an audience. That's real.",
              task: "Take a photo of your project on your screen. You built that.",
            },
          ],
          homework: {
            title: "Keep going",
            desc: "The course ends. The learning doesn't.",
            tasks: [
              "Post your project URL to the class Facebook group",
              "Follow 3 classmates on GitHub",
              "Pick one thing to learn next and bookmark one resource for it",
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
        return week[key]
      }
    }
  }
  return null
}

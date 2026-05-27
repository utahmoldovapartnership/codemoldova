# CodeMoldova · Week 3 Wednesday — challenge starter
# Run:
#   python3 week3_wed_challenge_starter.py

import random


def pick_suggestion(mood: str) -> str:
    # TODO 1: Edit these lists with your own ideas.
    fun_suggestions = [
        "Take a 3-minute stretch break.",
        "Drink water and take 5 deep breaths.",
        "Write one tiny goal for the next 20 minutes.",
    ]
    tired_suggestions = [
        "Stand up and walk for one minute.",
        "Close your eyes and reset for 30 seconds.",
        "Play one favorite song, then start your task.",
    ]

    # TODO 2: Add one more mood if you want (excited, bored, stressed, etc.).
    if mood == "tired":
        return random.choice(tired_suggestions)
    return random.choice(fun_suggestions)


def main() -> None:
    print("Mood helper")
    mood = input("How are you feeling? (happy/tired/okay): ").strip().lower()
    suggestion = pick_suggestion(mood)
    print(f"Suggestion: {suggestion}")


if __name__ == "__main__":
    main()

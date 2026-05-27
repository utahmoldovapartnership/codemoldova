# CodeMoldova · Week 3 Wednesday — script starter
# Save this file into your codemoldova-week3 folder as hello.py (or keep the name).
# From the terminal (inside that folder): python3 hello.py


def greet(name: str) -> None:
    """Print a friendly greeting."""
    print(f"Hello, {name}! You ran a real Python script.")


def main() -> None:
    name = input("Your name: ").strip() or "friend"
    greet(name)


# Only runs when you execute this file — not when another file imports it.
if __name__ == "__main__":
    main()

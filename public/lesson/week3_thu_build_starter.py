# CodeMoldova · Week 3 Thursday — terminal + script starter
# Folder layout:
#   codemoldova-week3/
#     my_tool.py          ← this file (rename to match your project)
#     data/
#       notes.json
#
# Examples:
#   python3 my_tool.py greet Ada
#   python3 my_tool.py list

import json
import sys
from pathlib import Path

DATA_DIR = Path("data")
DATA_FILE = DATA_DIR / "notes.json"


def load_notes() -> list:
    if not DATA_FILE.exists():
        return []
    return json.loads(DATA_FILE.read_text(encoding="utf-8"))


def save_notes(notes: list) -> None:
    DATA_DIR.mkdir(exist_ok=True)
    DATA_FILE.write_text(json.dumps(notes, indent=2), encoding="utf-8")


def cmd_greet(name: str) -> None:
    print(f"Hello, {name}! Build day — wire up your own commands below.")


def cmd_list() -> None:
    notes = load_notes()
    if not notes:
        print("(no notes yet — add some in your version)")
        return
    for i, item in enumerate(notes, start=1):
        print(f"{i}. {item}")


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python3 my_tool.py greet <name>")
        print("  python3 my_tool.py list")
        sys.exit(1)

    command = sys.argv[1].lower()

    if command == "greet":
        name = sys.argv[2] if len(sys.argv) > 2 else "friend"
        cmd_greet(name)
    elif command == "list":
        cmd_list()
    else:
        print(f"Unknown command: {command}")
        sys.exit(1)


if __name__ == "__main__":
    main()

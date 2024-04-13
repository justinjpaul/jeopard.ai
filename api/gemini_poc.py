import os
import json
import time

import google.generativeai as genai
from typing import List, Dict, Optional

from prompts import *
from data.text import *

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

model = genai.GenerativeModel(model_name="models/gemini-1.5-pro-latest")
game_content = [OS_1, OS_2, CV_1, CV_2]

NUM_DIFFICULTY_LEVELS = 2


def generate_categories() -> List[str]:
    response = model.generate_content(
        [JEOPARDY_GENERATE_CATEGORIES_PROMPT, *game_content]
    )

    return [c.strip() for c in response.text.split(",")]


def generate_question(difficulty: int, category: str):
    response = model.generate_content(
        [jeopardy_generate_question_prompt(3, "History of Unix"), *game_content]
    )

    return response.text.strip()


def validate_question(question: str) -> Optional[Dict[str, str]]:
    try:
        stripped = question[8:-3]
        obj = json.loads(stripped)
        assert "answer" in obj and "question" in obj
        return obj
    except Exception as e:
        raise e


def generate_game():
    categories = generate_categories()
    print(categories)

    game = []
    time.sleep(5)
    for category in categories:
        questions = []
        for difficulty in range(1, NUM_DIFFICULTY_LEVELS + 1):
            q = generate_question(difficulty, category)
            questions.append(validate_question(q))

            print(f"{category} {difficulty}")

            time.sleep(5)

        category = {"category": category, "qs": questions}

        game.append(category)

    return game


def _extract_pdf_text() -> str: ...


def _extract_pdf_images() -> List[str]: ...


def _extract_pdf_pages_as_images() -> List[str]: ...


if __name__ == "__main__":
    print(generate_game())

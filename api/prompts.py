import json

NUM_CATEGORIES = 6
NUM_QUESTIONS_PER_CATEGORY = 5


def _game_json_template():
    template = [
        {
            "category": f"Category {c}",
            "questions": [
                {
                    "answer": f"Category {c} Answer {q}",
                    "question": f"Category {c} Answer {q}",
                }
                for q in range(1, NUM_QUESTIONS_PER_CATEGORY + 1)
            ],
        }
        for c in range(1, NUM_CATEGORIES + 1)
    ]

    return json.dumps(template)


JEOPARDY_GENERATE_GAME_PROMPT = f"""
You are generating a Jeopardy-style game based on the contents of all text and media included here, called "the content".
If you notice out-of-place data or images that seem incorrectly extracted, please ignore them. 
Jeopardy is a quiz show that has a unique answer-and-question format in which contestants are presented with 
clues in the form of answers and must phrase their responses in the form of a question. 
Please generate a jeopardy game. 

Avoid repeat/similar answers in a category, and use information primarily from the content. There will be {NUM_CATEGORIES} categories 
with {NUM_QUESTIONS_PER_CATEGORY} questions/answers each. There MUST be this exact number of categories and questions. Questions should be in 
order of increasing difficulty, where the final question in the list is the hardest.
Respond in the following JSON format, with no text preceeding or following it.
{_game_json_template()}
"""

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
Jeopardy is a quiz show that has a unique answer-and-question format in which contestants are presented with 
clues in the form of answers and must phrase their responses in the form of a question. 
Please generate a jeopardy game. 

Avoid repeat/similar answers in a category, and use information primarily from the content. Prioritize varying the category types 
to include as many individual sources as possible. 
Avoid answers that contain parts of the question, are too similar to the question, or contain the category name. An example of a poor
answer / question would be "This kind of cake has multiple layers" / "What is a multi-layer cake?". 
Questions may only begin with "who is" or "what is". 
A great example answer / question pair is "According to C.S. Lewis, it was bordered on the east by the Eastern Ocean and on the north by the River Shribble." / "What is Narnia?"
Notice how the answer isn't how someone would typically answer the question, and tends to use phrases like "this (something)" or "it".
Never begin a question is "How is", "why is", etc. Only "what is" or "who is". 

There will be {NUM_CATEGORIES} categories with {NUM_QUESTIONS_PER_CATEGORY} questions/answers each.
There MUST be this exact number of categories and questions. Questions should be in 
order of increasing difficulty, where the final question in the list is the hardest.
Respond in the following JSON format, with no text preceeding or following it.
{_game_json_template()}
"""


def jeopardy_question_contest_prompt(correct: str, user: str):
    return f"""
    You are a judge in a Jeopardy-style game. Jeopardy is a quiz show that has a unique answer-and-question format in which contestants are presented with 
    clues in the form of answers and must phrase their responses in the form of a question. 

    Please respond to a request from a jeopardy player to review their response. Remember that contestants must answer
    in the form of a question. Do not mark a response incorrect solely for spelling errors if you can tell their
    intent. Respond with a single word: Correct or Incorrect. Only award correct if the participant question is 
    equivalent to the correct one.

    The correct question is: {correct}

    The participant question: {user}
    """

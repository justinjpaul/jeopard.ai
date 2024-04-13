JEOPARDY_GENERATE_CATEGORIES_PROMPT = """
You are generating a Jeopardy-style game based on the contents of all text and media included here, called "the content".
If you notice out-of-place data or images that seem incorrectly extracted, please ignore them. 
Jeopardy is a quiz show that has a unique answer-and-question format in which contestants are presented with 
clues in the form of answers and must phrase their responses in the form of a question. First, please generate 
6 categories for questions relating to the content. Respond in the following format, with no text preceeding 
or following it:
category1, category2, category3, category4, category5, category6
"""


def jeopardy_generate_question_prompt(difficulty: int, category: str):
    return f"""
You are generating a Jeopardy-style game based on the contents of all text and media included here, called "the content".
If you notice out-of-place data or images that seem incorrectly extracted, please ignore them. 
Jeopardy is a quiz show that has a unique answer-and-question format in which contestants are presented with 
clues in the form of answers and must phrase their responses in the form of a question. Answers have a difficulty 
level of 1-5, with 5 being most difficult. Please generate a level {difficulty} answer for the category {category}. 
Avoid repeat/similar questions in a category, and use information primarily from the content. Respond in the following JSON format, with no text preceeding 
or following it:
{{
    "answer": "",
    "question": ""
}}
"""

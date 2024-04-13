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


def generate_game():
    response = model.generate_content([JEOPARDY_GENERATE_GAME_PROMPT, *game_content])
    print(response.text)


if __name__ == "__main__":
    print(generate_game())

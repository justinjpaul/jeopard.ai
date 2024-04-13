import os
from datetime import datetime
from io import BytesIO

import google.generativeai as genai
from typing import List, Any
import fitz

from prompts import *
from data.text import *

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

model = genai.GenerativeModel(model_name="models/gemini-1.5-pro-latest")
files_to_cleanup = []


def generate_game(game_content):
    response = model.generate_content([JEOPARDY_GENERATE_GAME_PROMPT, *game_content])
    print(response.text)


def extract_pdf_content(filename: str) -> List[Any]:
    content = []
    pdf_file = fitz.open(filename)

    global_img_idx = 0
    for page_index in range(len(pdf_file)):
        page = pdf_file[page_index]
        text = page.get_text()

        content.append(text)

        for img in page.get_images():
            xref = img[0]

            base_image = pdf_file.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]

            tmp_filepath = (
                f"tmp/{int(datetime.now().timestamp())}_{global_img_idx}.{image_ext}"
            )

            global_img_idx += 1
            with open(tmp_filepath, "wb") as file:
                file.write(BytesIO(image_bytes).getvalue())

            upload_resp = genai.upload_file(path=tmp_filepath)
            content.append(upload_resp)
            files_to_cleanup.append(upload_resp)

    return content


if __name__ == "__main__":
    content = extract_pdf_content("data/376complexitynotes.pdf")

    print(len(content))

    print(generate_game(content))

    for f in files_to_cleanup:
        genai.delete_file(f.name)

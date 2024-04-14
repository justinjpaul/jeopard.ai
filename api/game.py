from typing import List, Any

import fitz
from io import BytesIO
from datetime import datetime
import os
from enum import Enum
import google.generativeai as genai
from prompts import *

SECONDS_BETWEEN_GEMINI_REQUESTS = 30

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel(model_name="models/gemini-1.5-pro-latest")

last_gemini_query = None


def contest(correct: str, user: str):
    resp = model.generate_content(jeopardy_question_contest_prompt(correct, user))

    if "incorrect" in resp.text.lower():
        return False
    elif "correct" in resp.text.lower():
        return True
    else:
        raise ValueError("Gemini produced an invalid contest response")


class Game:
    def __init__(self, filenames):
        self.content = []
        self._gemini_files_to_cleanup = []
        self._global_tmp_idx = 0

        for f in filenames:
            ext = os.path.splitext(f)[1].lower()
            match ext:
                case ".pdf":
                    self.content += self._extract_pdf_content(f, extract_images=False)
                case ".jpg" | ".jpeg" | ".png":
                    self.content.append(self._upload_file(f))
                case _:
                    raise ValueError(f"Unsupported file type: {ext}")

    def generate(self):
        response = model.generate_content(
            [JEOPARDY_GENERATE_GAME_PROMPT, *self.content]
        )

        return response.text

    def cleanup(self):
        for f in self._gemini_files_to_cleanup:
            genai.delete_file(f.name)

    def _wait_until_api_available(): ...

    def _upload_file(self, filename: str):
        upload_resp = genai.upload_file(path=filename)
        self._gemini_files_to_cleanup.append(upload_resp)

        return upload_resp

    def _extract_pdf_content(self, filename: str, extract_images: bool) -> List[Any]:
        content = []
        pdf_file = fitz.open(filename)

        text = ""
        for page_index in range(len(pdf_file)):
            page = pdf_file[page_index]
            text += page.get_text()

            if extract_images:
                for img in page.get_images():
                    xref = img[0]

                    base_image = pdf_file.extract_image(xref)
                    image_bytes = base_image["image"]
                    image_ext = base_image["ext"]

                    tmp_filepath = f"tmp/{int(datetime.now().timestamp())}_{self._global_tmp_idx}.{image_ext}"

                    self._global_tmp_idx += 1
                    with open(tmp_filepath, "wb") as file:
                        file.write(BytesIO(image_bytes).getvalue())

                    content.append(self._upload_file(path=tmp_filepath))

        content.append(text)

        return content

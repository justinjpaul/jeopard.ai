from typing import List, Any

import fitz
from datetime import datetime
import time
import os
import google.generativeai as genai
from prompts import *

SECONDS_BETWEEN_GEMINI_REQUESTS = 30

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel(model_name="models/gemini-1.5-pro-latest")

last_gemini_query = None


def _wait_until_api_available():
    global last_gemini_query

    if last_gemini_query is None:
        last_gemini_query = datetime.now()
        return

    seconds_since_last_query = (datetime.now() - last_gemini_query).seconds
    if seconds_since_last_query < SECONDS_BETWEEN_GEMINI_REQUESTS:
        time.sleep(SECONDS_BETWEEN_GEMINI_REQUESTS - seconds_since_last_query)

    last_gemini_query = datetime.now()


def contest(correct: str, user: str):
    _wait_until_api_available()
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
                    self.content += self._extract_pdf_content(
                        f, render_page_images=True
                    )
                case ".jpg" | ".jpeg" | ".png":
                    self.content.append(self._upload_file(f))
                case _:
                    raise ValueError(f"Unsupported file type: {ext}")

    def generate(self):
        _wait_until_api_available()
        response = model.generate_content(
            [JEOPARDY_GENERATE_GAME_PROMPT, *self.content]
        )

        return response.text

    def cleanup(self):
        for f in self._gemini_files_to_cleanup:
            genai.delete_file(f.name)

    def _upload_file(self, filename: str):
        upload_resp = genai.upload_file(path=filename)
        self._gemini_files_to_cleanup.append(upload_resp)

        return upload_resp

    def _extract_pdf_content(
        self, filename: str, render_page_images: bool
    ) -> List[Any]:
        content = []
        pdf_file = fitz.open(filename)

        text = ""
        for page_index in range(len(pdf_file)):
            page = pdf_file[page_index]

            text += page.get_text()

            if render_page_images:
                pix = page.get_pixmap()
                tmp_filepath = (
                    f"tmp/{int(datetime.now().timestamp())}_{self._global_tmp_idx}.png"
                )

                pix.save(tmp_filepath)

                self._global_tmp_idx += 1
                content.append(self._upload_file(tmp_filepath))

        content.append(text)

        return content

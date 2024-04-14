import os
import time
from typing import List
import json_repair
from dotenv import load_dotenv

load_dotenv()

from flask import Flask, request, jsonify, Response
from werkzeug.utils import secure_filename

from game import Game, contest
from prompts import NUM_CATEGORIES, NUM_QUESTIONS_PER_CATEGORY

# from data.failed import FAILED


app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "tmp/upload"


@app.route("/ping")
def hello():
    return "Pong!"


@app.route("/delay")
def delay():
    time.sleep(5)
    return "Done"


@app.route("/game", methods=["POST"])
def generate_game():
    try:
        filenames = _save_uploded_files()
    except ValueError as e:
        return Response(str(e), 400)

    game = Game(filenames)
    gemini_resp = game.generate()

    try:
        game_data = _parse_game_data(gemini_resp)
    except Exception as e:
        print(gemini_resp)
        raise e
        # return Response("Gemini produced an invalid response", 500)

    game.cleanup()

    return jsonify(game_data)


@app.route("/contest", methods=["POST"])
def contest_question():
    correct_question = request.json["correct"]
    user_question = request.json["user"]

    contest_result = contest(correct_question, user_question)
    return jsonify({"accepted": contest_result})


def _save_uploded_files():
    uploaded_files = request.files.getlist("file")

    filenames = []
    for file in uploaded_files:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(filepath)

        filenames.append(filepath)

    return filenames


def _parse_game_data(resp: str):
    stripped = resp.strip()
    stripped = stripped.strip("\\")

    try:
        game = json_repair.loads(stripped)
    except:
        game = json_repair.loads(stripped[8:-3])  # remove markdown

    assert len(game) == NUM_CATEGORIES

    for category in game:
        assert "category" in category
        assert "questions" in category
        assert len(category["questions"]) == NUM_QUESTIONS_PER_CATEGORY

        for question in category["questions"]:
            assert "answer" in question
            assert "question" in question

    return game


if __name__ == "__main__":
    app.run(port=8000, debug=True)

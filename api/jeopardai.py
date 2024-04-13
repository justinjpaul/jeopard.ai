import os
import time

from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename


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
    uploaded_files = request.files.getlist("file")

    filenames = []
    for file in uploaded_files:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
        filenames.append(filename)

    print(filenames)
    return f"{filenames}"


if __name__ == "__main__":
    app.run(debug=True)

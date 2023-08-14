from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/public/<path:filename>')
def custom_static(filename):
    return send_from_directory('public', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
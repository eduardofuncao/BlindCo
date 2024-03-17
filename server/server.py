from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/mouse-clicks', methods=['POST'])
def receive_mouse_clicks():
    data = request.get_json()
    print(data)
    return jsonify({'message': 'Data received'}), 200

if __name__ == '__main__':
    app.run(debug=True)
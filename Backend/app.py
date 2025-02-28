from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Sample tools data
tools = [
    {
        "name": "Shodan",
        "description": "Search engine for internet-connected devices.",
        "link": "https://www.shodan.io"
    },
    {
        "name": "Hunter.io",
        "description": "Email finder and verifier.",
        "link": "https://hunter.io"
    },
    {
        "name": "VirusTotal",
        "description": "Analyze suspicious files and URLs.",
        "link": "https://www.virustotal.com"
    },
    {
        "name": "TinEye",
        "description": "Reverse image search engine.",
        "link": "https://tineye.com"
    }
]

@app.route('/api/tools', methods=['GET'])
def get_tools():
    return jsonify(tools)

if __name__ == '__main__':
    app.run(debug=True)

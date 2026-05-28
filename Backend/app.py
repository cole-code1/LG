from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import re
import requests

# ---------------------------
# Flask App Initialization
# ---------------------------
app = Flask(__name__)

CORS(
    app,
    resources={r"/api/*": {"origins": "https://lgmarketinghub.co.ke"}},
    allow_headers=["Content-Type"],
    methods=["POST"]
)

# ---------------------------
# Brevo Configuration
# ---------------------------
BREVO_API_KEY = os.environ.get("BREVO_API_KEY")
BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"

SENDER_NAME = "LG Marketing Hub"
SENDER_EMAIL = "support@lgmarketinghub.co.ke"     # MUST be verified in Brevo
RECEIVER_EMAIL = "lg.marketinghub@gmail.com"      # Gmail is OK as receiver

# ---------------------------
# Health Check
# ---------------------------
@app.route("/")
def health():
    return jsonify({"status": "API OK"}), 200

# ---------------------------
# Send Email Endpoint
# ---------------------------
@app.route("/api/send-email", methods=["POST"])
def send_email():
    if not BREVO_API_KEY:
        return jsonify({"error": "BREVO_API_KEY not loaded"}), 500

    data = request.get_json(force=True)

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()
    service = data.get("service", "").strip()

    if not all([name, email, message, service]):
        return jsonify({"error": "All fields are required"}), 400

    if not re.match(r"^[A-Za-z\s]{2,50}$", name):
        return jsonify({"error": "Invalid name"}), 400

    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return jsonify({"error": "Invalid email"}), 400

    payload = {
        "sender": {
            "name": SENDER_NAME,
            "email": SENDER_EMAIL
        },
        "to": [{"email": RECEIVER_EMAIL}],
        "replyTo": {
            "email": email,
            "name": name
        },
        "subject": f"New Service Request: {service}",
        "htmlContent": f"""
            <html>
            <body>
                <h2>New Service Request</h2>
                <p><strong>Service:</strong> {service}</p>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Message:</strong><br>{message}</p>
                <hr>
                <p>
                    LG Marketing Hub<br>
                    <a href="https://lgmarketinghub.co.ke">
                        https://lgmarketinghub.co.ke
                    </a>
                </p>
            </body>
            </html>
        """,
        "textContent": f"""
New Service Request

Service: {service}
Name: {name}
Email: {email}

Message:
{message}

---
LG Marketing Hub
https://lgmarketinghub.co.ke
        """
    }

    headers = {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json"
    }

    r = requests.post(BREVO_API_URL, json=payload, headers=headers, timeout=10)

    return jsonify({
        "brevo_status": r.status_code,
        "brevo_response": r.text
    }), r.status_code


# ---------------------------
# DIRECT TEST ENDPOINT (IMPORTANT)
# ---------------------------
@app.route("/brevo-test")
def brevo_test():
    payload = {
        "sender": {
            "name": "LG Marketing Hub",
            "email": "support@lgmarketinghub.co.ke"
        },
        "to": [{"email": "lg.marketinghub@gmail.com"}],
        "subject": "Brevo Direct Test",
        "htmlContent": "<p>This is a direct Brevo test email.</p>",
        "textContent": "This is a direct Brevo test email."
    }

    headers = {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json"
    }

    r = requests.post(BREVO_API_URL, json=payload, headers=headers)

    return jsonify({
        "status": r.status_code,
        "response": r.text
    })


# ---------------------------
# Passenger Entry Point
# ---------------------------
application = app
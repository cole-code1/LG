from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)
CORS(app)

GMAIL_USER = os.getenv("GMAIL_USER")
GMAIL_PASS = os.getenv("GMAIL_PASS")

@app.route("/api/send-email", methods=["POST"])
def send_email():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    service = data.get("service")

    if not all([name, email, message, service]):
        return jsonify({"error": "Missing fields"}), 400

    msg = MIMEMultipart()
    msg["From"] = GMAIL_USER
    msg["To"] = GMAIL_USER
    msg["Subject"] = f"New Service Request: {service}"

    body = f"""
New service request received

Service: {service}
Name: {name}
Email: {email}

Message:
{message}
"""

    msg.attach(MIMEText(body, "plain"))

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(GMAIL_USER, GMAIL_PASS)
        server.send_message(msg)
        server.quit()
        return jsonify({"success": True}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

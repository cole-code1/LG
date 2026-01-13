from flask import Flask, request, jsonify
from flask_cors import CORS
import resend
import os

app = Flask(__name__)
CORS(app)

resend.api_key = os.getenv("RESEND_API_KEY")

@app.route("/api/send-email", methods=["POST"])
def send_email():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    service = data.get("service")

    if not all([name, email, message, service]):
        return jsonify({"error": "Missing fields"}), 400

    resend.Emails.send({
        "from": "LG Services <onboarding@resend.dev>",
        "to": ["YOUR_EMAIL@gmail.com"],  # change this
        "subject": f"New Service Request: {service}",
        "html": f"""
        <h3>New Service Request</h3>
        <p><b>Service:</b> {service}</p>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Message:</b><br>{message}</p>
        """
    })

    return jsonify({"success": True}), 200


@app.route("/")
def home():
    return {"status": "Backend running"}, 200


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

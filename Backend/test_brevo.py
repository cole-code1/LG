from flask_mail import Mail, Message
from flask import Flask
import os

app = Flask(__name__)

app.config.update(
    MAIL_SERVER="smtp-relay.brevo.com",
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USE_SSL=False,
    MAIL_USERNAME="a0d56d001@smtp-brevo.com",
    MAIL_PASSWORD="bsk1qrXgRvhrNgX",
    MAIL_DEFAULT_SENDER=("LG Services", "no-reply@lgmarketinghub.co.ke"),
)

mail = Mail(app)

with app.app_context():
    msg = Message(
        subject="Test Brevo",
        recipients=["lg.marketinghub@gmail.com"],
        body="Hello from Brevo test"
    )
    try:
        mail.send(msg)
        print("EMAIL SENT ✅")
    except Exception as e:
        print("EMAIL FAILED:", repr(e))

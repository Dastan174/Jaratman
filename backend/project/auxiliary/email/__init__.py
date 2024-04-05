from email.mime import text as t, multipart as m
import email.mime.image as i
import smtplib
import os

from project.auxiliary.celery import celery
from project.app.settings import (SENDER_EMAIL, SENDER_PASSWORD,
                          SMTP_PORT, SMTP_SERVER, logger)


EMAIL = os.environ.get("SENDER_EMAIL", SENDER_EMAIL)
PASS = os.environ.get("SENDER_PASSWORD", SENDER_PASSWORD)
PORT = os.environ.get("SMTP_PORT", SMTP_PORT)
SERVER = os.environ.get("SMTP_SERVER", SMTP_SERVER)

def setup_message(*args):
    e, s, b, image = args

    msg = m.MIMEMultipart()
    msg["Subject"] = s
    msg["From"] = EMAIL
    msg["To"] = e

    msg.attach(t.MIMEText(b, "plain"))

    if image:
        html_body = f"""\
                <html>
                    <body>
                        <img src="cid:image">
                    </body>
                </html>
                """
        msg.attach(t.MIMEText(html_body, "html"))

        image_part = i.MIMEImage(image)
        image_part.add_header('Content-ID', '<image>')
        msg.attach(image_part)

    return msg

@celery.task
def send_mail(email_to: str, theme: str, body: str, image=None) -> dict | Exception:
    try:
        msg = setup_message(email_to, theme, body, image)
        with smtplib.SMTP_SSL(host=SERVER, port=PORT) as smtp:
            smtp.login(EMAIL, PASS)
            smtp.sendmail(EMAIL, email_to, msg.as_bytes())

        return {"msg" : f"Сообщение отправлено в {email_to}"}
    except Exception as e:
        logger.error(f"Ошибка при отправке эмейла\n\nFrom: {EMAIL} to {email_to}\nError: {e}")
        raise e
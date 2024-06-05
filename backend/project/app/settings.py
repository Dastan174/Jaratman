from fastapi import FastAPI


from fastapi.middleware.cors import CORSMiddleware
import logging

app = FastAPI(
    title='Jaratman'
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE", "PATCH"],
    allow_headers=["*"],
)

logger = logging.getLogger(__name__)

TOKEN_TIME = 900000

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465
SENDER_EMAIL = "kgkajrat86@gmail.com"
SENDER_PASSWORD = "apui amtu tjyj qmcp"


REDIS_PASSWORD = "redistest"
REDIS_HOST = "re"
REDIS_PORT = 6379
REDIS_DB = 0
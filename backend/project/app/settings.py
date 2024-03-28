from fastapi import FastAPI


from fastapi.middleware.cors import CORSMiddleware
import logging

app = FastAPI(
    title='Jaratman'
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Установите здесь разрешенные домены, например, ["http://localhost", "http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE"],
    allow_headers=["*"],
)

logger = logging.getLogger(__name__)

TOKEN_TIME = 90000

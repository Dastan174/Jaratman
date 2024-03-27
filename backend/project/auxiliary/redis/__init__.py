import os
from dotenv import load_dotenv

# Загрузка переменных окружения из файла .env
load_dotenv()

# Чтение переменных окружения
# REDIS_PASSWORD = os.getenv("REDIS_PASSWORD")
# REDIS_HOST = os.getenv("REDIS_HOST")
# REDIS_PORT = int(os.getenv("REDIS_PORT"))
# REDIS_DB = int(os.getenv("REDIS_DB"))
# TOKEN_TIME = int(os.getenv("TOKEN_TIME"))
REDIS_PASSWORD="redistest"
REDIS_HOST="localhost"
REDIS_PORT=6379
REDIS_DB=0
TOKEN_TIME=600

import redis

def get_redis_connection(db: int) -> redis.Redis:
    """Получить подключение к Redis"""
    return redis.Redis(
        password=REDIS_PASSWORD,
        host=REDIS_HOST,
        port=REDIS_PORT,
        decode_responses=True,
        db=db,
    )
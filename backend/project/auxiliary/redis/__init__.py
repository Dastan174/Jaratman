REDIS_PASSWORD = "redistest"
REDIS_HOST = "localhost"
REDIS_PORT = 6379
REDIS_DB = 0
TOKEN_TIME = 600

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
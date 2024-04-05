import redis
from ...app.settings import REDIS_PORT, REDIS_PASSWORD, REDIS_DB, REDIS_HOST, TOKEN_TIME



def get_redis_connection(db: int) -> redis.Redis:
    """Получить подключение к Redis"""
    return redis.Redis(
        password=REDIS_PASSWORD,
        host=REDIS_HOST,
        port=REDIS_PORT,
        decode_responses=True,
        db=db,
    )
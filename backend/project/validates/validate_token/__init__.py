from fastapi import HTTPException
from project.auxiliary import redis_token_save
def validate_token(token):
    if token is None:
        raise HTTPException(status_code=401, detail="Требуется вход")

    if token not in redis_token_save[token]:
        raise HTTPException(status_code=401, detail="Пользователь не залогинен")
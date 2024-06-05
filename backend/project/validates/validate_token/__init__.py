
from project.auxiliary import redis_token_save

import logging


logging.basicConfig(level=logging.INFO)

def validate_token(token: str) -> bool:
    try:
        logging.info(f"Проверка токена {token}")
        token_data = redis_token_save[token]
        if token_data is None:
            logging.error(f"Токен {token} не найден в Redis.")
            return False

        token_data = token_data.decode('utf-8') if isinstance(token_data, bytes) else token_data
        if token != token_data:
            logging.error(f"Токен {token} недействителен в полученных данных.")
            return False
        return True
    except Exception as e:
        logging.exception(f"Произошла ошибка при проверке токена {token}: {e}")
        return False
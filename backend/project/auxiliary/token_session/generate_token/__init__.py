import jwt
from datetime import datetime


# Функция для создания токена на основе текущего времени
def create_token(hash: str) -> str:
    """
    Создает токен на основе текущего времени.

    Returns:
        str: JWT токен.
    """
    # Текущее время
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    # Создание словаря с данными для токена
    token_data = {'timestamp': current_time}

    # Создание токена с использованием JWT
    token = jwt.encode(token_data, hash, algorithm='HS256')

    return token
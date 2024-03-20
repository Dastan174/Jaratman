import jwt
from datetime import datetime


# Функция для создания токена на основе текущего времени
def create_token():

    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    # Создание словаря с данными для токена
    token_data = {'timestamp': current_time}
    secret = "ppp"
    # Создание токена с использованием JWT
    token = jwt.encode(token_data, key=secret, algorithm='HS256')

    return token
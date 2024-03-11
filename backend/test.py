import hashlib
from sqlalchemy import event
from project.models.models import authentication

# Функция для генерации хеша
def generate_hash(email, password):
    data = email + password
    return hashlib.sha256(data.encode()).hexdigest()

# Событие перед вставкой данных в таблицу
@event.listens_for(authentication, 'before_insert')
def before_insert(mapper, connection, target):
    # Генерируем хеш и присваиваем его полю 'hash'
    target.hash = generate_hash(target.email, target.password)
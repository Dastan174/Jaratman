# Используем образ Python в качестве базового образа
FROM python:3.12.1

# Устанавливаем рабочую директорию в /app
WORKDIR /app

# Копируем зависимости в файл requirements.txt внутрь контейнера
COPY requirements.txt .

# Устанавливаем зависимости при помощи pip
RUN pip install -r requirements.txt

# Копируем содержимое текущей директории внутрь контейнера в /app
COPY . .
CMD ["sh", "-c", "alembic revision --autogenerate && alembic upgrade head && uvicorn project.app.settings:app --host 0.0.0.0 --port 8000"]

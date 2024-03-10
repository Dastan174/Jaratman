from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from .models import metadata

#Базы данных
DATABASE_URL = ("sqlite:///project/database.db")
engine = create_engine(
    DATABASE_URL, echo=True, connect_args={"check_same_thread": False}
)

session_local = sessionmaker(bind=engine)

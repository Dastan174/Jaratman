from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase


#Базы данных
DATABASE_URL = "sqlite:///../database.db"
engine = create_engine(
    DATABASE_URL, echo=True, connect_args={"check_same_thread": False}
)

session_s = sessionmaker(engine)

class Base(DeclarativeBase):
    pass


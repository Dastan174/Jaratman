from sqlalchemy import Table, Column, Integer, String
from sqlalchemy import MetaData
from sqlalchemy.orm import Mapped, mapped_column
from .database import Base



class Auth(Base):
    __tablename__ = "auth"
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str]


metadata = MetaData()

authentication = Table(
    'authentication',
    metadata,

    Column('id', Integer, primary_key=True),
    Column('hashf', String, unique=True, nullable=False),
    Column('email', String, nullable=False, unique=True),
    Column('password', String, nullable=False)
)
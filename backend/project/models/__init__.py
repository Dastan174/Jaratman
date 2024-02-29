from sqlalchemy import Table, Column, Integer, String
from sqlalchemy import MetaData


metadata = MetaData()

authentication = Table(
    'authentication',
    metadata,

    Column('id', Integer, primary_key=True),
    Column('hashf', String, unique=True, nullable=False),
    Column('email', String, nullable=False, unique=True),
    Column('password', String, nullable=False)
)
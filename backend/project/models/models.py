from sqlalchemy import Table, Column, Integer, String, ForeignKey, Float, BLOB, DateTime
from sqlalchemy import MetaData
from datetime import datetime

metadata = MetaData()

authentication = Table(
    'authentication',
    metadata,

    Column('id', Integer, primary_key=True),
    Column('email', String, nullable=False, unique=True),
    Column('password', String, nullable=False)
)

category = Table(
    "category",
    metadata,
    Column('id', Integer, primary_key=True),
    Column("name", String, unique=True, nullable=False),
    Column("urls", String, nullable=False)
)

product = Table(
    "product",
    metadata,
    Column('id', Integer, primary_key=True),
    Column("name", String, unique=True, nullable=False),
    Column("urls", String, nullable=False),
    Column("price", Float, nullable=False),
    Column("discount", Integer, nullable=False),
    Column("description", String, nullable=False),
    Column("image", BLOB),
    Column("quantity", Integer, default=1),
    Column("availability_id", Integer, ForeignKey('availability.id')),
    Column("category_id", Integer, ForeignKey('category.id', ondelete="CASCADE"))
)

availability = Table(
    "availability",
    metadata,
    Column('id', Integer, primary_key=True),
    Column("name", String, unique=True, nullable=False),
)

newsletter = Table(
    "newsletter",
    metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String),
    Column('email', String, unique=True),
    Column('data', DateTime, default=datetime.now)
)

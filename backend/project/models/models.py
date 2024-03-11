from sqlalchemy import Table, Column, Integer, String, ForeignKey
from sqlalchemy import MetaData


metadata = MetaData()

authentication = Table(
    'authentication',
    metadata,

    Column('id', Integer, primary_key=True),
    Column("hash", String, unique=True, nullable=False),
    Column('email', String, nullable=False, unique=True),
    Column('password', String, nullable=False)
)

# restaurant = Table(
#     'restaurant',
#     metadata,
#
#     Column('id', Integer, primary_key=True),
#     Column('hashf', String, ForeignKey('authefication.hashf', ondelete='CASCADE'),
#                    unique=True, nullable=False),
#     Column('name', String, nullable=False),
#     Column('address', String, nullable=True),
#     Column('start_day', VARCHAR(30), nullable=True),
#     Column('end_day', VARCHAR(30), nullable=True),
#     Column('start_time', VARCHAR(30), nullable=True),
#     Column('end_time', VARCHAR(30), nullable=True),
#     Column('logo', String, nullable=True)
# )


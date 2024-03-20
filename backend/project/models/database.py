from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker


# База данных
DATABASE_URL = "sqlite+aiosqlite:///project/database.db"
engine = create_async_engine(
    DATABASE_URL, echo=True
)

# Создаем асинхронный sessionmaker
async_session = sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)


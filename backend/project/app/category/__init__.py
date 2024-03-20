from fastapi import APIRouter, HTTPException
from ..schemas.category import Category
from project.models.models import authentication, category
from project.models.database import async_session
from project.auxiliary import redis_token_save
from fastapi.responses import JSONResponse
from fastapi import Cookie
from transliterate import translit

router = APIRouter(prefix="/category")
session = async_session()


@router.post("/add/")
async def category_add(Cat: Category, token: str = Cookie(None)):
    async with async_session() as session:
        if token is None:
            return JSONResponse(status_code=401, content={"msg": "Требуется вход"})

        if not token == redis_token_save[token]:
            return JSONResponse(status_code=401, content={"msg": "Пользователь не залогинен"})

        cat_es = await session.execute(category.select().where(category.c.name == Cat.name))
        existing_category = cat_es.fetchone()  # Получение одной строки

        if existing_category:
            return JSONResponse(status_code=400, content={"msg": "Такая категория уже существует"})

        # Если ошибок нет, добавляем категорию
        urls = translit(Cat.name, 'ru', reversed=True).replace(" ", "-")
        await session.execute(category.insert().values(name=Cat.name, urls=urls))
        await session.commit()

        return JSONResponse(status_code=200, content={"msg": "Категория успешно создана"})


@router.delete("/delete/{urls}/")
async def category_delete(urls: str, token: str = Cookie(None)):
    async with async_session() as session:
        if token is None:
            raise HTTPException(status_code=401, detail="Требуется вход")

        if not token == redis_token_save[token]:
            raise HTTPException(status_code=401, detail="Пользователь не залогинен")

        category_query = category.delete().where(category.c.urls == urls)
        result = await session.execute(category_query)
        await session.commit()

        deleted_count = result.rowcount
        if deleted_count == 0:
            raise HTTPException(status_code=404, detail="Категория не найдена")

        return {"msg": "Категория успешно удалена"}


@router.get("/get/")
async def category_get_all():
    async with async_session() as session:
        categories = await session.execute(category.select())
        categories_list = categories.fetchall()
        if not categories_list:
            return JSONResponse(status_code=404, content={"msg": "Категории не найдены"})

        # Преобразование результата в список словарей для удобства
        categories_data = [{"id": category.id, "name": category.name, "urls": category.urls} for category in
                           categories_list]

        return JSONResponse(status_code=200, content={"categories": categories_data})

@router.get("/get/{urls}/")
async def category_get(urls: str):
    async with async_session() as session:
        categories = await session.execute(category.select().where(category.c.urls == urls))
        categories = categories.fetchall()
        if not categories:
            return JSONResponse(status_code=404, content={"msg": "Категории не найдены"})

        # Преобразование результата в список словарей для удобства
        categories_data = [{"id": category.id, "name": category.name, "urls": category.urls} for category in
                           categories]

        return JSONResponse(status_code=200, content={"categories": categories_data})

from fastapi import APIRouter, HTTPException
from ..schemas.category import Category
from project.models.models import authentication, category, product, availability
from project.models.database import async_session
from project.auxiliary import redis_token_save
from fastapi.responses import JSONResponse
from fastapi import Cookie
from transliterate import translit
import base64

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
        categories = categories.fetchone()
        if not categories:
            return JSONResponse(status_code=404, content={"msg": "Категории не найдены"})

        product_info = await session.execute(product.select().where(product.c.category_id == categories.id))
        product_list = product_info.fetchall()



        # Преобразование результата в список словарей для удобства
        product_data = []
        for product_row in product_list:
            availability_id = await session.execute(
                availability.select().where(availability.c.id == product.availability_id))
            availability_data = availability_id.fetchone()
            # Получаем информацию о категории по ее идентификатору
            discounted_price = product_row.price - ((product_row.discount / 100) * product_row.price)

            # Создаем словарь с нужными данными
            product_dict = {
                "id": product_row.id,
                "name": product_row.name,
                "price": product_row.price,
                "discounted_price": discounted_price,
                "discount": product_row.discount,
                "urls": product_row.urls,
                "description": product_row.description,
                "quantity": product_row.quantity,
                "availability": availability_data.name,
                "category": categories.name,
            }
            if product_row.image:
                product_dict["image"] = product_row.image.decode('utf-8')

            product_data.append(product_dict)

        return JSONResponse(status_code=200, content={"products": product_data})


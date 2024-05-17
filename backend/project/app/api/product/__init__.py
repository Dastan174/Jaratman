from fastapi import APIRouter, HTTPException
from project.app.schemas.product import Product
from project.models.models import category, product, availability
from project.models.database import async_session
from fastapi.responses import JSONResponse
from fastapi import Cookie, Header
from transliterate import translit
from project.validates.validate_token import validate_token

from sqlalchemy.exc import IntegrityError

router = APIRouter(prefix="/product")
session = async_session()



@router.post("/add/")
async def product_add(Product: Product, token: str = Header()):

    validate_token(token)

    async with async_session() as session:
        # Проверяем существует ли продукт с таким же именем
        existing_product = await session.execute(product.select().where(product.c.name == Product.name))
        existing_product = existing_product.fetchone()

        if existing_product:
            return JSONResponse(status_code=400, content={"msg": "Такой продукт уже существует"})

        # Получаем идентификатор категории по имени
        category_query = await session.execute(category.select().where(category.c.name == Product.category))
        category_row = category_query.fetchone()

        if not category_row:
            return JSONResponse(status_code=404, content={"msg": "Категория не найдена"})

        availability_query = await session.execute(
            availability.select().where(availability.c.name == Product.availability))
        availability_row = availability_query.fetchone()

        if not availability_row:
            return JSONResponse(status_code=404, content={"msg": "Доступность не найдена"})

        # Добавляем новый продукт
        urls = translit(Product.name, 'ru', reversed=True).replace(" ", "-")
        new_product = product.insert().values(
            name=Product.name,
            urls=urls,
            price=Product.price,
            discount=Product.discount,
            description=Product.description,
            image=Product.image,
            quantity=Product.quantity,
            availability_id=availability_row.id,
            category_id=category_row.id
        )

        try:
            await session.execute(new_product)
            await session.commit()
        except IntegrityError:
            await session.rollback()
            return JSONResponse(status_code=400, content={"msg": "Ошибка при добавлении продукта"})

        return JSONResponse(status_code=200, content={"msg": "Продукт успешно добавлен"})

@router.patch("/edit/{urls}/")
async def product_edit(urls: str, Product: Product, token: str = Header(None), cookie_token: str = Cookie(None)):
    async with async_session() as session:
        validate_token(token)

        product_query = product.select().where(product.c.urls == urls)
        product_ed = await session.execute(product_query)

        product_eds = product_ed.fetchone()


        if not product_eds:
            return JSONResponse(status_code=400, content={"msg": "Такого продукта не существует"})

        category_query = await session.execute(category.select().where(category.c.name == Product.category))
        category_row = category_query.fetchone()

        availability_query = await session.execute(
            availability.select().where(availability.c.name == Product.availability))
        availability_row = availability_query.fetchone()

        new_urls = translit(Product.name, 'ru', reversed=True).replace(" ", "-")
        ew_product = product.update().where(product.c.urls == urls).values(
            name=Product.name,
            urls=new_urls,
            price=Product.price,
            discount=Product.discount,
            description=Product.description,
            image=Product.image,
            quantity=Product.quantity,
            availability_id=availability_row.id,
            category_id=category_row.id
        )
        await session.execute(ew_product)
        await session.commit()
        return JSONResponse(status_code=200, content={"msg": "Продукт успешно изменен"})


@router.delete("/delete/{urls}/")
async def product_delete(urls: str, token: str = Header(None)):
    async with async_session() as session:
        validate_token(token)

        product_query = product.delete().where(product.c.urls == urls)
        result = await session.execute(product_query)
        await session.commit()

        deleted_count = result.rowcount
        if deleted_count == 0:
            raise HTTPException(status_code=404, detail="Продукт не найдена")

        return {"msg": "Продукт успешно удалена"}




@router.get("/get/")
async def product_get_all():
    async with async_session() as session:
        products = await session.execute(product.select())
        product_list = products.fetchall()
        if not product_list:
            return JSONResponse(status_code=404, content={"msg": "Продукты не найдены"})

        # Преобразование результата в список словарей для удобства
        product_data = []
        for products in product_list:
            # Получаем информацию о категории по ее идентификатору
            category_info = await session.execute(category.select().where(category.c.id == products.category_id))
            category_data = category_info.fetchone()

            availability_id = await session.execute(
                availability.select().where(availability.c.id == products.availability_id))
            availability_data = availability_id.fetchone()


            image_base = products.image.decode('utf-8')

            # Создаем словарь с нужными данными
            product_dict = {
                "id": products.id,
                "name": products.name,
                "urls": products.urls,
                "price": products.price,
                "discounted_price": products.price - ((products.discount / 100) * products.price),
                "discount": products.discount,
                "description": products.description,
                "image": image_base,
                "quantity": products.quantity,
                "availability": availability_data.name,
                "category": category_data.name,
            }
            product_data.append(product_dict)

        return JSONResponse(status_code=200, content={"products": product_data})


@router.get("/get/{urls}/")
async def product_get(urls: str):
    async with async_session() as session:
        products = await session.execute(product.select().where(product.c.urls == urls))
        products = products.fetchone()
        if not products:
            return JSONResponse(status_code=404, content={"msg": "Продукт не найдены"})

        category_info = await session.execute(category.select().where(category.c.id == products.category_id))
        category_data = category_info.fetchone()

        availability_id = await session.execute(
            availability.select().where(availability.c.id == products.availability_id))
        availability_data = availability_id.fetchone()

        image_base = products.image.decode('utf-8')

        product_ = {
            "id": products.id,
            "name": products.name,
            "urls": products.urls,
            "price": products.price,
            "discounted_price": products.price - ((products.discount / 100) * products.price),
            "discount": products.discount,
            "description": products.description,
            "image": image_base,
            "quantity": products.quantity,
            "availability": availability_data.name,
            "category": category_data.name,
        }

        return JSONResponse(status_code=200, content={"product": product_})

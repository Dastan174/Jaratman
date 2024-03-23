from fastapi import APIRouter, HTTPException
from ..schemas. availability import Availability
from project.models.models import availability
from project.models.database import async_session
from project.auxiliary import redis_token_save
from fastapi.responses import JSONResponse
from fastapi import Cookie


router = APIRouter(prefix="/availability")
session = async_session()


@router.post("/add/")
async def availability_add(ava: Availability, token: str = Cookie(None)):
    async with async_session() as session:
        if token is None:
            return JSONResponse(status_code=401, content={"msg": "Требуется вход"})

        if not token == redis_token_save[token]:
            return JSONResponse(status_code=401, content={"msg": "Пользователь не залогинен"})

        ava_es = await session.execute(availability.select().where(availability.c.name == ava.name))
        existing_availability = ava_es.fetchone()

        if existing_availability:
            return JSONResponse(status_code=400, content={"msg": "Такая уже существует"})

        await session.execute(availability.insert().values(name=ava.name))
        await session.commit()

        return JSONResponse(status_code=200, content={"msg": "Успешно создана"})

@router.delete("/delete/")
async def availability_delete(ava: Availability, token: str = Cookie(None)):
    async with async_session() as session:
        if token is None:
            return JSONResponse(status_code=401, content={"msg": "Требуется вход"})

        if not token == redis_token_save[token]:
            return JSONResponse(status_code=401, content={"msg": "Пользователь не залогинен"})

        availability_query = availability.delete().where(availability.c.name == ava.name)
        result = await session.execute(availability_query)

        await session.commit()

        deleted_count = result.rowcount
        if deleted_count == 0:
            raise HTTPException(status_code=404, detail="не найдена")

        return {"msg": "успешно удалена"}


@router.get("/get/")
async def availability_get_all():
    async with async_session() as session:
        availability_list = await session.execute(availability.select())
        availability_all = availability_list.fetchall()
        if not availability_all:
            return JSONResponse(status_code=404, content={"msg": "не найдены"})

        availability_data = [{"id": availabilit.id, "name": availabilit.name} for availabilit in
                           availability_all]

        return JSONResponse(status_code=200, content={"categories": availability_data})


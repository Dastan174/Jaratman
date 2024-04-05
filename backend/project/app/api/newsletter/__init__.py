from fastapi import APIRouter
from fastapi.responses import JSONResponse
from project.models.database import async_session
from project.models.models import newsletter
from project.app.schemas.newsletter import Newsletter, DeployLetter
from project.auxiliary import send_mail
import base64

router = APIRouter(prefix="/newsletter")
session = async_session()


@router.post("/add/")
async def newsletter_add(Letter: Newsletter):
    async with async_session() as session:
        letter = await session.execute(newsletter.select().where(newsletter.c.email == Letter.email))
        existing_letter = letter.fetchone()

        if existing_letter:
            return JSONResponse(status_code=400, content={"message": "Вы уже подписаны в рассылку"})

        await session.execute(newsletter.insert().values(name=Letter.name, email=Letter.email))
        await session.commit()
        return JSONResponse(status_code=200, content={"msg": "Вы успешно подписались"})


@router.get("/")
async def newsletters():
    async with async_session() as session:
        letter = await session.execute(newsletter.select())
        existing_letters = letter.fetchall()

        if not existing_letters:
            return JSONResponse(status_code=404, content={"msg": "Подписки не найдены"})

        existing_letters_serialized = []
        for letters in existing_letters:
            letter_dict = {
                "id": letters.id,
                "name": letters.name,
                "email": letters.email,
                "date": letters.data.isoformat() if letters.data else None
            }
            existing_letters_serialized.append(letter_dict)

        return JSONResponse(status_code=200, content={"newsletter": existing_letters_serialized})


@router.post("/sending_letters")
async def newsletter_sending(data: DeployLetter):
    letter = await session.execute(newsletter.select())
    existing_letters = letter.fetchall()

    if not existing_letters:
        return JSONResponse(status_code=404, content={"msg": "Подписки не найдены"})

    for email_all in existing_letters:
        if data.image:
            image_content = base64.b64decode(data.image)
            send_mail.delay(email_all.email, data.theme, data.body, image_content)
        else:
            send_mail.delay(email_all.email, data.theme, data.body)

    return JSONResponse(status_code=200, content={"message": "все рассылки успешно отправлены"})

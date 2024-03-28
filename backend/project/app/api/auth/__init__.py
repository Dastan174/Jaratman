from fastapi import APIRouter, HTTPException, status
from project.app.schemas.register import RegisterUser
from project.models.models import authentication
from project.models.database import async_session
from project.auxiliary import redis_token_save, generate_hash, create_token
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/auth")
session = async_session()



@router.post("/register/")
async def register_user(user: RegisterUser):
    async with async_session() as session:
        existing_user = await session.execute(authentication.select().where(authentication.c.email == user.email))
        if existing_user.first():
            raise HTTPException(status_code=403, detail=f"{user.email} уже зарегистрирован")


        token = create_token()
        redis_token_save[token] = token

        await session.execute(authentication.insert().values(email=user.email, password=user.password))
        await session.commit()

        response = JSONResponse(content={"status": 200, "message": "Пользователь успешно зарегистрирован", "token": token})
        response.set_cookie(key="token", value=token)
        return response

@router.post("/login/")
async def login_user(user: RegisterUser):
    async with async_session() as session:
        existing_user = await session.execute(authentication.select().where(authentication.c.email == user.email))
        existing_user = existing_user.first()
        if existing_user:
            if existing_user.password == user.password:

                token = create_token()
                redis_token_save[token] = token
                response = JSONResponse(content={"status": 200, "message": "Пользователь успешно залогинен", "token": token})
                response.set_cookie(key="token", value=token)
                return response
            else:
                raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Неправильный пароль")
        else:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail="Прошу пройти регистрацию. Пользователь с таким email не найден.")
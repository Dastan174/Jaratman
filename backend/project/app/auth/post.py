from fastapi import APIRouter, HTTPException, status
from ..schemas.register import RegisterUser
from project.models.models import authentication
from project.models.database import session_local
from project.auxiliary import redis_token_save, generate_hash, create_token
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/auth")
session = session_local()


@router.post("/register/")
def register_user(user: RegisterUser):
    existing_user = session.query(authentication).filter(authentication.c.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=403, detail=f"{user.email} уже зарегистрирован")

    hash = generate_hash(user.email + user.password)

    token = create_token(hash)
    redis_token_save[user.email] = token

    session.execute(authentication.insert().values(email=user.email, password=user.password, hash=hash))
    session.commit()

    response = JSONResponse(content={"status": 200, "message": "Пользователь успешно зарегистрирован", "token": token})
    response.set_cookie(key="token", value=token)

    return response


@router.post("/login/")
def login_user(user: RegisterUser):
    existing_user = session.query(authentication).filter(authentication.c.email == user.email).first()
    if existing_user:
        if existing_user.password == user.password:
            hash = existing_user.hash
            token = create_token(hash)
            redis_token_save[user.email] = token
            response = JSONResponse(content={"status": 200, "message": "Пользователь успешно залогинен", "token": token})
            response.set_cookie(key="token", value=token)
            return response
        else:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Неправильный пароль")
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Прошу пройти регистрацию. Пользователь с таким email не найден.")

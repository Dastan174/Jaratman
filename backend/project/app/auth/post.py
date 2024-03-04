from fastapi import APIRouter, HTTPException, status
from ..schemas.register import RegisterUser
from project.models.models import authentication
from project.models.database import session_local

router = APIRouter(prefix="/auth")
session = session_local()
@router.post("/register/")
def register_user(user: RegisterUser):

    existing_user = session.query(authentication).filter(authentication.c.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=403, detail=f"{user.email} уже зарегистрирован")

    session.execute(authentication.insert().values(email=user.email, password=user.password))
    session.commit()
    return "Пользователь успешно зарегистрирован"

@router.post("/login/")
def login_user(user: RegisterUser):
    existing_user = session.query(authentication).filter(authentication.c.email == user.email).first()
    if existing_user:
        if existing_user.password == user.password:
            return {"message": "Пользователь успешно залогинен"}
        else:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Неправильный пароль")
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Прошу пройти регистрацию. Пользователь с таким email не найден.")
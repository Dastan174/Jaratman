from fastapi import APIRouter
from ..schemas.register import RegisterUser
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from ...models import authentication
router = APIRouter(prefix="/auth")

@router.post("/register")
async def register(data: RegisterUser):

    if await db.async_get_where(authentication, exp=authentication.c.email == data.email, all_=False):
        raise HTTPException(status_code=403, detail=f"{data.email} вже зареєстрований")

    hashf = t.get_hash(data.email + data.password)
    password = t.get_hash(data.password)

    get_data = data.model_dump()
    get_data['hashf'] = hashf
    get_data['password'] = password

    time = get_data.pop('time')
    user = await db.async_insert_data(authentication, **get_data)

    playload, date, seconds = jwt.get_playload(user[0], user[2], **{time['type']: time['number']})
    token = jwt.get_token(**playload)
    jwt.set(token, user[1], seconds)

    response = JSONResponse(status_code=200, content={"msg": "Користувача зарєстровано"})
    response.set_cookie(key="token", value=token, expires=date, httponly=True, secure=True, samesite="none")
    return response


from fastapi import APIRouter
from ..schemas.register import RegisterUser
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException

router = APIRouter(prefix="/auth")


@router.post("/api/admin/register")
def register(data: RegisterUser):
    pass



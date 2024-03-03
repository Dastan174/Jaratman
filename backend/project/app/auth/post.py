from fastapi import APIRouter
from ..schemas.register import RegisterUser
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from ...models import authentication
router = APIRouter(prefix="/auth")

@router.post("/api/admin/register")
async def register(data: RegisterUser):


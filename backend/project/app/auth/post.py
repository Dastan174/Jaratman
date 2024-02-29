from fastapi import APIRouter
from ..schemas.register import RegisterUser


router = APIRouter(prefix="/auth")

@router.post("/register")
def register(data: RegisterUser):



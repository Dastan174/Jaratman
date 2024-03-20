from pydantic import BaseModel
from fastapi import APIRouter, HTTPException, UploadFile, File
class Product(BaseModel):
    name: str
    price: float
    description: str
    category: str
    quantity: int
    image: bytes




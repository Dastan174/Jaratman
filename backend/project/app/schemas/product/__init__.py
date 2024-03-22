from pydantic import BaseModel

class Product(BaseModel):
    name: str
    price: float
    description: str
    category: str
    quantity: int
    image: bytes




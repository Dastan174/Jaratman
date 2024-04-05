from pydantic import BaseModel, Field
from typing import Optional


class Newsletter(BaseModel):
    name: str
    email: str

class DeployLetter(BaseModel):
    theme: str = Field(..., description="Тема рассылки")
    body: str = Field(..., description="Тело рассылки")
    image: Optional[str] = Field(None,
                                description="Изображение. Должно быть преобразован в base64 и декотирован в utf-8.")



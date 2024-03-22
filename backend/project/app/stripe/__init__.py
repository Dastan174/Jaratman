from project.models.database import async_session
import stripe
from fastapi import APIRouter, HTTPException


router = APIRouter(prefix="/stripe")
session = async_session()


stripe.api_key = "sk_test_51OwgQPIxm5X1vTxb9GfwWuxe36nHGUoerWthJnI6NmbHB5ZqjxIGO80VZw6tXVJncsCKcGC9pqnre1OFnCW4kLGt00HJFDpcgS"
stripe_public_key = "pk_test_51OwgQPIxm5X1vTxbE1Zf6NDFEFmH9LgoSWy4ORnPQ5hkQHBxgETJnjHRXnGiKzRXld7vCOOai7mMW5Eupxl6Imh000mOHkjqDO"

from pydantic import BaseModel


router = APIRouter(prefix="/stripe")


class PaymentData(BaseModel):
    amount: int




# Маршрут для создания платежного интента
@router.post("/create-payment-intent")
async def create_payment_intent(payment_data: PaymentData):
    try:
        # Создание платежного интента с использованием данных от клиента
        intent = stripe.PaymentIntent.create(
            amount=payment_data.amount,
            currency="usd"
        )
        # Отправка клиенту client_secret для завершения платежа
        return {"client_secret": intent.client_secret}
    except stripe.error.StripeError as e:
        # Если произошла ошибка Stripe, вернуть сообщение об ошибке
        raise HTTPException(status_code=400, detail=str(e))
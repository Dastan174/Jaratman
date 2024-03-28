import stripe
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/stripe")

stripe.api_key = "sk_test_51OwgQPIxm5X1vTxb9GfwWuxe36nHGUoerWthJnI6NmbHB5ZqjxIGO80VZw6tXVJncsCKcGC9pqnre1OFnCW4kLGt00HJFDpcgS"
stripe_public_key = "pk_test_51OwgQPIxm5X1vTxbE1Zf6NDFEFmH9LgoSWy4ORnPQ5hkQHBxgETJnjHRXnGiKzRXld7vCOOai7mMW5Eupxl6Imh000mOHkjqDO"


from fastapi import Request

@router.post("/create-payment-intent/")
async def create_payment_intent(request: Request):
    data = await request.json()
    amount = data.get('amount')
    try:
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency="usd"
        )
        return {"client_secret": intent.client_secret}
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))
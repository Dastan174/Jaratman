from fastapi import FastAPI
from .auth.post import router as router_post_user

app = FastAPI(
    title='Jaratman'
)

app.include_router(router_post_user)



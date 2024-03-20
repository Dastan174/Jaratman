from fastapi import FastAPI
from project.app.auth.post import router as router_post_user
from project.app.category import router as router_category
from project.app.product import router as router_product

app = FastAPI(
    title='Jaratman'
)

app.include_router(router_post_user, tags=["users"])
app.include_router(router_category, tags=["category"])
app.include_router(router_product, tags=["product"])



TOKEN_TIME = 90000

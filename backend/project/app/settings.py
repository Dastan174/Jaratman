from fastapi import FastAPI
from project.app.auth.post import router as router_post_user
from project.app.category import router as router_category
from project.app.product import router as router_product
from project.app.stripe import router as router_stripe
from project.app.availability import router as router_availability
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title='Jaratman'
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Установите здесь разрешенные домены, например, ["http://localhost", "http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE"],
    allow_headers=["*"],
)

app.include_router(router_post_user, tags=["users"])
app.include_router(router_category, tags=["category"])
app.include_router(router_product, tags=["product"])
app.include_router(router_stripe, tags=["stripe"])
app.include_router(router_availability, tags=["router_availability"])


TOKEN_TIME = 90000

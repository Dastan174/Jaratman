from project.app.api.auth import router as router_post_user
from project.app.api.category import router as router_category
from project.app.api.product import router as router_product
from project.app.api.availability import router as router_availability
from project.app.api.stripe import router as router_stripe
from project.app.api.newsletter import router as router_newsletter
from project.app.settings import app

app.include_router(router_post_user, tags=["users"])
app.include_router(router_category, tags=["category"])
app.include_router(router_product, tags=["product"])
app.include_router(router_stripe, tags=["stripe"])
app.include_router(router_availability, tags=["availability"])
app.include_router(router_newsletter, tags=["newsletter"])

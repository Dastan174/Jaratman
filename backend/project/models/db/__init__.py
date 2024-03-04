from ..database import session_s, engine
from ..models import metadata, Auth

#Базы данных
def create_table():
    engine.echo = False
    metadata.drop_all(engine)

    metadata.create_all(engine)
    engine.echo = True

def insert_data():
    auth = Auth(username="Bobr")
    with session_s() as session:
        session.add(auth)
        session.commit()
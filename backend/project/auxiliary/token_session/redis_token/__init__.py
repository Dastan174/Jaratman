from typing import Any

from project.auxiliary.redis import get_redis_connection, REDIS_DB, TOKEN_TIME

code = get_redis_connection(int(REDIS_DB+1))

class redis_token:

    def __setitem__(self, key: Any, value: Any) -> None:
        code.set(key, value)
        code.expire(key, TOKEN_TIME)

    def __delitem__(self, key: Any) -> None:
        code.delete(key)

    def __getitem__(self, key: Any) -> Any:
        return code.get(key)

from sqlalchemy.ext.asyncio import AsyncSession
import api.models.user as user_model
import api.schemas.login as login_schema
from sqlalchemy import select
from sqlalchemy.engine import Result

# ログイン処理を定義
async def try_login(db: AsyncSession, login_info: login_schema.LoginParameter) -> login_schema.Login:
    result: Result = await (
        db.execute(
            select(
                user_model.User.user_name
            ).filter_by(name=login_info.user_name, password=login_info.password)
        )
    )
    # 取得結果を返却
    return result.all()

from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
import apo.cruds.login as login_cruds
from api.db import get_db

# ログイン用のスキーマをインポート
import api.schemas.login as login_schemas

# ルーターをインスタンス化
router = APIRouter()

# ログインメソッドを定義
@router.post("/login", response_model=login_schemas.Login)
async def login(login_parameter: login_schemas.LoginParameter, db: AsyncSession = Depends(get_db)):
    # 戻り値の設定
    return await login_cruds.Login(db, login_parameter)
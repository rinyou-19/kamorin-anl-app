from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from api.db import get_db
from typing import List
import api.schemas.login as user_schema
import api.cruds.login as login_cruds

# ルーターをインスタンス化
router = APIRouter()

@router.post('login', response_model=List[user_schema.User])
async def login(db: AsyncSession = Depends(get_db)):
    login_info = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
    }
    return await login_cruds.try_login(db, login_info)


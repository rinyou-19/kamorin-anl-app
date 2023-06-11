from typing import Optional
from pydantic import BaseModel, Field

# レスポンス用のスキーマの定義
class Login(BaseModel):
    user_name: str = Field(None, example="demo")

    # ORMの設定をTrueにする
    class Config:
        orm_mode = True

# リクエスト用のスキーマの定義
class LoginParameter(BaseModel):
    # ユーザー名
    user_name: str = Field('demo', example="demo")
    # パスワード
    password: str = Field('password', example="password")

    # ORMの設定をTrueにする
    class Config:
        orm_mode = True

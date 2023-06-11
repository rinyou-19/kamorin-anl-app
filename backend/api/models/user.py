from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, TIMESTAMP as Timestamp
from sqlalchemy.ext.asyncio import AsyncSession
from api.db import Base

class Task(Base):
    __tablename__ = "users"

    # usersテーブル定義を取得
    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    email = Column(String(255))
    tfa_token = Column(String(255))
    tfa_expiration = Column(DateTime)
    password = Column(String(255))
    created_at = Column(Timestamp)
    updated_at = Column(Timestamp)

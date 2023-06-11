from fastapi import FastAPI
# クロスオリジン対策のライブラリをインポート
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base
from api.routers import login
app = FastAPI()

# routerを組み込み
app.include_router(login.router)

# 許可するオリジンを指定
origins = [
    "http://localhost",
    "http://localhost:3000",
]

ASYNC_DB_URL = "mysql+aiomysql://root@db:3306/kamorin_app_project?charset=utf8"

async_engine = create_async_engine(ASYNC_DB_URL, echo=True)
async_session = sessionmaker(
    autocommit=False, autoflush=False, bind=async_engine, class_=AsyncSession
)

# クロスオリジンの設定をFast APIのインスタンスに追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base = declarative_base()

async def get_db():
    async with async_session() as session:
        yield session

@app.get("/hello")
async def hello():
    return {"message": "hello world!"}
from fastapi import APIRouter
from ..models.User import User as UserModel
from ..config.db import db

route=APIRouter(prefix="/api/v1/auth")

authCollection=db["user"]

@route.post("/register")
async def registerUser(data:UserModel):
    await authCollection.insert_one(data.dict())
    return {
        "messge":"sucessfully Register",
        "data":data.dict()
    }
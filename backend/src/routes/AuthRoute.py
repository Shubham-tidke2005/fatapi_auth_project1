from fastapi import APIRouter
from ..models.User import User as UserModel
from ..config.db import db
import bcrypt

route=APIRouter(prefix="/api/v1/auth")

authCollection=db["user"]

@route.post("/register")
async def registerUser(data:UserModel):
    dataa=data
    data=data.dict()
    salt=bcrypt.gensalt()
    data["password"]=bcrypt.hashpw(data["password"].encode(),salt).decode()
    
    doc=await authCollection.insert_one(data)
    document=await authCollection.find_one({"_id":doc.inserted_id},{
        "name":1,
        "email":1,
        "create_at":1
    })
    
    document["_id"] = str(document["_id"])
    
    return {
        "message":"sucessfully Register",
        "document":document
    }
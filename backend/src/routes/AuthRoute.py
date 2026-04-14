from fastapi import APIRouter,HTTPException,status
from ..models.User import User as UserModel,UserLogin
from ..config.db import db
import bcrypt
import jwt
import os



JWT_AUTH=os.getenv("JWT_AUTH","")

route=APIRouter(prefix="/api/v1/auth")

authCollection=db["user"]

@route.post("/register")
async def registerUser(data:UserModel):
    data=data.dict()
    
    #check id email alredy exist
    user_exists=await authCollection.find_one({"email":data["email"]})
    if user_exists:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="USER ALREADY EXISTS")
        
        
    
    salt=bcrypt.gensalt()
    data["password"]=bcrypt.hashpw(data["password"].encode(),salt).decode()
    
    doc=await authCollection.insert_one(data)
    document=await authCollection.find_one({"_id":doc.inserted_id},{
        "name":1,
        "email":1,
        "create_at":1
    })
    
    document["_id"] = str(document["_id"])
    encoded_jwt = jwt.encode({"userId":document["_id"]}, JWT_AUTH, algorithm="HS256")
    
    return {
        "message":"sucessfully Register",
        "token":encoded_jwt
    }
    
    
    
@route.post("/login")
async def loginUser(data:UserLogin):
    data=data.dict()
    
    #check id email alredy exist
    user_exists=await authCollection.find_one({"email":data["email"]},{
        
    })
    if not user_exists:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="USER NOT FOUND")
    
    
    is_match=bcrypt.checkpw(data["password"].encode(),user_exists["password"].encode())    
    
    if is_match:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Invalid Password")
    
    user_exists['_id']=str(user_exists['_id'])
    del user_exists["password"]

    encoded_jwt = jwt.encode({"userId":user_exists["_id"]}, JWT_AUTH, algorithm="HS256")
   
    return {
        "message":"sucessfully Login",
        "token":encoded_jwt
       
    }
    
    
@route.get("/profile")
def userProfile():
    return "id"
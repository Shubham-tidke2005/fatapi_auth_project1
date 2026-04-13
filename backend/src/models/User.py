from pydantic import BaseModel,Field,EmailStr
from datetime import datetime

class User(BaseModel):
    name:str=Field(...,description="Enter name")
    email:EmailStr=Field(...,description="Enter Email")
    password:str=Field(...,description="Enter Password")
    #optional
    create_at:datetime=datetime.now()
    mobile:str=""
    address:str=""
    
    
class UserLogin(BaseModel):
    email:EmailStr=Field(...,description="Enter Email")
    password:str=Field(...,description="Enter Password")
    
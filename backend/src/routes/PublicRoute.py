from fastapi import APIRouter

route = APIRouter(prefix="/api/v1/health")

@route.get("/")
def message():
    return {"message": "server is running "}
from dotenv import dotenv_values

from fastapi import FastAPI
from fastapi_socketio import SocketManager
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path

config = dotenv_values(".env")

app = FastAPI()


sio = SocketManager(app=app)
path = Path.cwd()

app.mount("/static", StaticFiles(directory=f"app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")
templates.env.cache = None

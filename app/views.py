from fastapi.responses import HTMLResponse
from .config import templates, app
from fastapi import Request 

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("default/index.html", {"request": request})

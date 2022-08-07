# Attendance System



## Description
Attendance system for teachers in ICMS college using QR Code.
- [python_dotenv] - config parser
- [fastapi] - async python webframework
- [jinja] - html templating
- [uvicorn] - ASGI web server


## Installation
clone this repo


```sh
cd boilerplate_fastapi
python3 -m pip install -r requirements.txt
```


## Starting the server

### Linux
```sh
virtualenv ./venv
source ./venv/bin/activate
./startup.sh
```

### Windows
```sh
virtualenv ./venv
source .\venv\bin\activate.bat
uvicorn app.main:app --reload --host 0.0.0.0
```

## Browser 
[Home Page](http://localhost:8000)

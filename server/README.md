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
git clone https://github.com/ICMS-Batch/attendance-system
cd attendance-system
```

### Linux
```sh
virtualenv ./venv
source ./venv/bin/activate
pip install -r requirements.txt
./startup.sh
```

### Windows
```sh
virtualenv ./venv
source .\venv\bin\activate.bat
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0
```




## Starting the server

### Linux
```sh
./startup.sh
```

### Windows
```sh
uvicorn app.main:app --reload --host 0.0.0.0
```

## Browser 
[Home Page](http://localhost:8000)

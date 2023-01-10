from flask import Blueprint, Response
from .schemas import LoginSchema, RegistrationSchema
from .models import User
from schematics.exceptions import DataError
from datetime import datetime,timedelta
import json
import jwt
from flask_restful import Resource, Api, request
from .service import AuthServiceError
from apps.config import EnvironmentConfig
from functools import wraps

auth_bp = Blueprint("auth_bp", __name__)
auth_api = Api(auth_bp)

def admin_required(f) :
    @wraps(f)
    def updated_function(*args,**kwargs) :
        token = request.headers["Authorization"]
        if token :
            payload = jwt.decode(token,EnvironmentConfig.SECRET_KEY,algorithms="HS256")
            if payload["is_admin"] == True :
                return f(*args,**kwargs) 
            else :
                return {"403" : "Access Denied"}
        else :
            return {"Error" : "Token Required"}
    return updated_function


def token_required(f) :
    @wraps(f)
    def updated_function(*args, **kwargs) :
        token = request.headers["Authorization"]
        if token :
            #decode the token
            payload = jwt.decode(token,EnvironmentConfig.SECRET_KEY,algorithms="HS256")
            request.user = payload["email"]
            return f(*args,**kwargs)
        else :
            return {"Status" : "Permisson Denied, Token required"}
    return updated_function
class LoginResource(Resource):
    def post(self):
        try:
            data = LoginSchema(request.get_json())
            data.validate()
            user = User.login(data)
            payload = {
                'email' : user.email,
                'is_admin' : user.is_admin,
                'exp' : datetime.utcnow() + timedelta(seconds=30)
            }
            token = jwt.encode(payload,EnvironmentConfig.SECRET_KEY)
            return {"success": "Login Successful","token" : "{}".format(token)}, 200
        except DataError as e:
            return {"error": json.loads(str(e))}, 400
        except AuthServiceError as e:
            return {"error": str(e)}, 401


class RegisterResource(Resource):
    def post(self):
        try:
            data = RegistrationSchema(request.get_json())
            data.validate()
            User.register(data.email, data.password, data.first_name, data.last_name)
            return Response(status=201)
        except DataError as e:
            return {"error": json.loads(str(e))}, 400
        except AuthServiceError as e:
            return {"error": str(e)}, 401


auth_api.add_resource(LoginResource, "/login")
auth_api.add_resource(RegisterResource, "/register")


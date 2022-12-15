from flask import Blueprint, Response
from .schemas import LoginSchema, RegistrationSchema
from .models import User
from schematics.exceptions import DataError
import json
from flask_restful import Resource, Api, request
from .service import AuthServiceError

auth_bp = Blueprint("auth_bp", __name__)
auth_api = Api(auth_bp)


class LoginResource(Resource):
    def post(self):
        try:
            data = LoginSchema(request.get_json())
            data.validate()
            User.login(data)
            return {"success": "Login Successful"}, 200
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

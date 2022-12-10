from flask import Blueprint
from flask import request
from .models import User
from apps import db
import json

auth_bp = Blueprint("auth_bp", __name__)


@auth_bp.route("/signup-data", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        data = request.data
        main = json.loads((data.decode("UTF-8")))
        main_data = main["formValues"]
        email = main_data["email"]
        data_from_database = User.query.filter_by(email=email).first()

        if data_from_database is None:
            User = User(
                main_data["firstname"].lower(),
                main_data["lastname"].lower(),
                main_data["email"].lower(),
                main_data["password"],
            )

            db.session.add(User)
            db.session.commit()

            return "Successfully Registered"

        else:
            return "Email already existed."
    return "Successful"


@auth_bp.route("/login-data", methods=["GET", "POST"])
def login():

    if request.method == "POST":
        data = request.data

        main = json.loads((data.decode("UTF-8")))
        main_data = main["formValues"]
        auth_email = main_data["email"]
        auth_pass = main_data["password"]

        data_from_database = User.query.filter_by(email=auth_email).first()
        if data_from_database != None:
            if data_from_database.password == auth_pass:
                return "Login Successful"
            else:
                return "Wrong Password"
        else:
            return "Wrong Email"
    return ""

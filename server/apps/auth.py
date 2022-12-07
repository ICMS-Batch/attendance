from flask import Blueprint
from flask import request
from flask_cors import cross_origin
from .models import models
from . import db
import json
#defining the blueprint
auth = Blueprint("auth",__name__)
#routes
@auth.route("/api/signup-data",methods=["GET","POST"])
@cross_origin()
def signup() :
    if request.method == "POST" :
        data = request.data
        #the data is in bytes so we need to convert it into the string using decode functin
        main_data = json.loads((data.decode("UTF-8")))
        #checking if email existed before or not
        email = main_data["email"]
        data_from_database = models.Students.query.filter_by(email = email).first()

        if (data_from_database == None) :
            #now loading the database
            student = models.Students(main_data["firstname"].lower()
                                    ,main_data["lastname"].lower()
                                    ,main_data["email"].lower()
                                    ,main_data["password"])
            
            #now adding to the database
            db.session.add(student)
            db.session.commit()

            return "Successfully Registered"

        else :
            return "Email already existed."
    return ""

@auth.route("/api/login-data",methods=["GET","POST"])
@cross_origin()
def login() :
    if request.method == "POST" :
            data = request.data
            #now converting the data into string and json
            main_data = json.loads((data.decode("UTF-8")))
            auth_email = main_data["email"]
            auth_pass = main_data["password"]

            #now fetching the data from the database
            data_from_database = models.Students.query.filter_by(email = auth_email).first()
            if (data_from_database != None) :
                if(data_from_database.password == auth_pass):
                    return "Login Successful"
                else :
                    return "Wrong Password"
            else :
                return "Wrong Email"
    return ""
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
        main = json.loads((data.decode("UTF-8")))
        main_data = main["formValues"] 
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
    return "Successful"

@auth.route("/api/login-data",methods=["GET","POST"])
@cross_origin()
def login() :

    if request.method == "POST" :
            data = request.data
            #now converting the data into string and json
            main = json.loads((data.decode("UTF-8")))
            main_data = main["formValues"]
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

@auth.route("/api/admin-signup-data",methods=["GET","POST"])
@cross_origin()
def admin_signup() :
    if request.method == "POST" :
        #getting the data
        data = request.data
        #converting into the string and json
        main = json.loads((data.decode("UTF-8")))
        #now using alias
        main_data = main["formValues"]
        #checking if the email existed or not
        email = main_data["email"]
        #accesing the database
        data_from_database = models.Admin.query.filter_by(email = email).first()
        #if there is no object 
        if (data_from_database == None) :
            #now loading the databse
            admin = models.Admin(
                main_data["firstname"],
                main_data["lastname"],
                main_data["email"],
                main_data["password"]
            )
            #adding an instance to the databse
            db.session.add(admin)
            db.session.commit()

            return "Successfully registered"

        else :
            return "Email already existed"
    return ""

@auth.route("/api/admin-login-data",methods=["GET","POST"])
@cross_origin()
def admin_login() :

    if request.method == "POST" :
            data = request.data
            #now converting the data into string and json
            main = json.loads((data.decode("UTF-8")))
            main_data = main["formValues"]
            auth_email = main_data["email"]
            auth_pass = main_data["password"]

            #now fetching the data from the database
            data_from_database = models.Admin.query.filter_by(email = auth_email).first()
            if (data_from_database != None) :
                if(data_from_database.password == auth_pass):
                    return "Login Successful"
                else :
                    return "Wrong Password"
            else :
                return "Wrong Email"
    return ""
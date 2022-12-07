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
        #now loading the database
        student = models.Students(main_data["firstname"].lower()
                                ,main_data["lastname"].lower()
                                ,main_data["email"].lower()
                                ,main_data["password"])
        
        #now adding to the database
        db.session.add(student)
        db.session.commit()

        


    return ""


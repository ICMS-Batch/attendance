from apps import db
from sqlalchemy_serializer import SerializerMixin

#creating the table
class Students(db.Model,SerializerMixin):

    #defining the attributes
    id = db.Column("Id",db.Integer,primary_key = True)
    first_name = db.Column("First Name",db.String(100))
    last_name = db.Column("Last Name",db.String(100))
    email = db.Column("Email",db.String(200))
    password = db.Column("Password",db.String(100))

    #defining the constructor
    def __init__(self,first_name,last_name,email,password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password

#defining the table
class Admin(db.Model,SerializerMixin) :

    #definng the attributes
    first_name = db.Column("First Name",db.String(100))
    last_name = db.Column("Last Name",db.String(100))
    email = db.Column("Email",db.String(200))
    password = db.Column("Password",db.String(100))

     #defining the constructor
    def __init__(self,first_name,last_name,email,password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password
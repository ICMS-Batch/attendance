from sqlalchemy_serializer import SerializerMixin
from apps import db


class Admin(db.Model, SerializerMixin):
    """
    this is the table for the admin
    attributes:
        id: the id of the admin
        first_name: the first name of the admin
        last_name: the last name of the admin
        email: the email of the admin
        password: the password of the admin
    """

    # definng the attributes
    id = db.Column("ID", db.Integer, primary_key=True)
    first_name = db.Column("First Name", db.String(100))
    last_name = db.Column("Last Name", db.String(100))
    email = db.Column("Email", db.String(200))
    password = db.Column("Password", db.String(100))

    # defining the constructor
    def __init__(self, first_name, last_name, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password

from sqlalchemy_serializer import SerializerMixin
from apps import db
from werkzeug.security import generate_password_hash, check_password_hash


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

    id = db.Column("ID", db.Integer, primary_key=True)
    first_name = db.Column("First Name", db.String(100))
    last_name = db.Column("Last Name", db.String(100))
    email = db.Column("Email", db.String(200))
    password = db.Column("Password", db.String(100))

    def __init__(self, password=None, **kwargs):
        if password:
            self.password = generate_password_hash(password)
        super(Admin, self).__init__(**kwargs)

    def set_password(self, password_plaintext: str):
        self.password = generate_password_hash(password_plaintext)

    def is_password_correct(self, password_plaintext: str):
        return check_password_hash(self.password, password_plaintext)

    def __repr__(self) -> str:
        return f"<Admin: {self.email}>"

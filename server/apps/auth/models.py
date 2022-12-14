from sqlalchemy_serializer import SerializerMixin
from apps import db
from werkzeug.security import generate_password_hash, check_password_hash
from .service import AuthServiceError


class User(db.Model, SerializerMixin):
    """
    this is the table for the students
    attributes:
        id: the id of the User
        first_name: the first name of the User
        last_name: the last name of the User
        email: the email of the User
        password: the password of the User
    """

    id = db.Column("Id", db.Integer, primary_key=True)
    first_name = db.Column("First Name", db.String(100))
    last_name = db.Column("Last Name", db.String(100))
    email = db.Column("Email", db.String(200))
    password = db.Column("Password", db.String(100))
    is_admin = db.Column("is_admin", db.Boolean, default=False)

    def __init__(self, password=None, **kwargs):
        if password:
            self.password = generate_password_hash(password)
        super(User, self).__init__(**kwargs)

    def set_password(self, password_plaintext: str):
        self.password = generate_password_hash(password_plaintext)

    def is_password_correct(self, password_plaintext: str):
        return check_password_hash(self.password, password_plaintext)

    @staticmethod
    def login(data: dict):
        user = User.query.filter_by(email=data["email"]).first()
        if user and user.is_password_correct(data["password"]):
            return user
        raise AuthServiceError("Invalid credentials")

    @staticmethod
    def register(email: str, password: str, first_name: str, last_name: str):
        if User.query.filter_by(email=email).first():
            raise AuthServiceError("Email already exists")
        user = User(email=email, first_name=first_name, last_name=last_name)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return user

    def __repr__(self) -> str:
        return f"<User: {self.email}>"

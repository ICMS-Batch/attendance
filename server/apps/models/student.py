from sqlalchemy_serializer import SerializerMixin
from apps import db
from werkzeug.security import generate_password_hash, check_password_hash


class Student(db.Model, SerializerMixin):
    """
    this is the table for the students
    attributes:
        id: the id of the student
        first_name: the first name of the student
        last_name: the last name of the student
        email: the email of the student
        password: the password of the student
    """

    id = db.Column("Id", db.Integer, primary_key=True)
    first_name = db.Column("First Name", db.String(100))
    last_name = db.Column("Last Name", db.String(100))
    email = db.Column("Email", db.String(200))
    password = db.Column("Password", db.String(100))

    def __init__(self, password=None, **kwargs):
        if password:
            self.password = generate_password_hash(password)
        super(Student, self).__init__(**kwargs)

    def set_password(self, password_plaintext: str):
        self.password = generate_password_hash(password_plaintext)

    def is_password_correct(self, password_plaintext: str):
        return check_password_hash(self.password, password_plaintext)

    def __repr__(self) -> str:
        return f"<Student: {self.email}>"

from apps import db
from werkzeug.security import generate_password_hash, check_password_hash
from .service import AuthServiceError
from apps.models import Base
from sqlalchemy.exc import IntegrityError
from sqlalchemy.schema import ForeignKeyConstraint
from psycopg2.errors import ForeignKeyViolation, UniqueViolation


class User(Base):
    """
    this is the table for the students
    attributes:
        id: the id of the User
        first_name: the first name of the User
        last_name: the last name of the User
        email: the email of the User
        password: the password of the User
    """

    """INSERT INTO user(first_name, last_name, email , password,sem_id) VALUES("Dibash", "Thapa", "dibash@gmail.com", "dsds",1);"""

    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.String(2048), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    sem_id = db.Column(db.Integer, db.ForeignKey("semester.id"), nullable=False)
    semester = db.relationship("Semester", backref="user", lazy=True)

    __table_args__ = (
        ForeignKeyConstraint(["sem_id"], ["semester.id"], use_alter=True),
    )

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
    def register(
        email: str, password: str, first_name: str, last_name: str, sem_id: int
    ):
        try:
            if User.query.filter_by(email=email).first():
                raise AuthServiceError("Email already exists")
            user = User(
                email=email, first_name=first_name, last_name=last_name, sem_id=sem_id
            )
            user.set_password(password)
            user.save()
            return user
        except IntegrityError as e:
            db.session.rollback()
            if isinstance(e.orig, ForeignKeyViolation):
                raise AuthServiceError("Semester does not exist")
            elif isinstance(e.orig, UniqueViolation):
                raise AuthServiceError("Email already exists")
            else:
                raise AuthServiceError(e.orig)

    def __repr__(self) -> str:
        return f"<User: {self.email}>"

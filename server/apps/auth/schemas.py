from schematics import Model
from schematics.types import StringType, EmailType


class RegistrationSchema(Model):
    email = EmailType(required=True)
    first_name = StringType(required=True)
    last_name = StringType(required=True)
    password = StringType(required=True)


class LoginSchema(Model):
    email = EmailType(required=True)
    password = StringType(required=True)

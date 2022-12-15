"""
This file (test_models.py) contains the unit tests for the students.py file.
"""
from apps.auth.models import User


def test_new_user():
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check the email, password_hashed, authenticated, and active fields are defined correctly
    """
    new_user = User(
        first_name="Dibash",
        last_name="Thapa",
        email="dibashthapa55@gmail.com",
        password="hello_world",
    )
    assert new_user.first_name == "Dibash"
    assert new_user.last_name == "Thapa"
    assert new_user.email == "dibashthapa55@gmail.com"
    assert new_user.password != "hello_world"
    assert new_user.__repr__() == "<User: dibashthapa55@gmail.com>"


def test_new_user_with_fixture(new_user):
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check the email and password_hashed fields are defined correctly
    """
    assert new_user.email == "dibashthapa55@gmail.com"
    assert new_user.password != "hello_world"


def test_setting_password(new_user):
    """
    GIVEN an existing User
    WHEN the password for the User is set
    THEN check the password is stored correctly and not as plaintext
    """
    new_user.set_password("MyNewPassword")
    assert new_user.password != "MyNewPassword"
    assert new_user.is_password_correct("MyNewPassword")
    assert not new_user.is_password_correct("MyNewPassword2")
    assert not new_user.is_password_correct("FlaskIsAwesome")

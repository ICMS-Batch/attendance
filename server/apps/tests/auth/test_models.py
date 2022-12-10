"""
This file (test_models.py) contains the unit tests for the students.py file.
"""
from apps.models import Student, Admin


def test_new_student():
    """
    GIVEN a Student model
    WHEN a new Student is created
    THEN check the email, password_hashed, authenticated, and active fields are defined correctly
    """
    student = Student(
        first_name="Dibash",
        last_name="Thapa",
        email="dibashthapa55@gmail.com",
        password="hello_world",
    )
    assert student.first_name == "Dibash"
    assert student.last_name == "Thapa"
    assert student.email == "dibashthapa55@gmail.com"
    assert student.password != "hello_world"
    assert student.__repr__() == "<Student: dibashthapa55@gmail.com>"


def test_new_student_with_fixture(new_student):
    """
    GIVEN a Student model
    WHEN a new Student is created
    THEN check the email and password_hashed fields are defined correctly
    """
    assert new_student.email == "dibashthapa55@gmail.com"
    assert new_student.password != "hello_world"


def test_setting_password(new_student):
    """
    GIVEN an existing Student
    WHEN the password for the Student is set
    THEN check the password is stored correctly and not as plaintext
    """
    new_student.set_password("MyNewPassword")
    assert new_student.password != "MyNewPassword"
    assert new_student.is_password_correct("MyNewPassword")
    assert not new_student.is_password_correct("MyNewPassword2")
    assert not new_student.is_password_correct("FlaskIsAwesome")

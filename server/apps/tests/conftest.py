import pytest
from apps import create_app, db

from apps import create_app, db
from apps.auth.models import User


@pytest.fixture(scope="module")
def new_user():
    user = User(
        first_name="Dibash",
        last_name="Thapa",
        email="dibashthapa55@gmail.com",
        password="password",
    )
    return user


@pytest.fixture(scope="module")
def test_client():
    flask_app = create_app("apps.config.TestEnvironmentConfig")

    with flask_app.test_client() as testing_client:
        with flask_app.app_context():
            yield testing_client


@pytest.fixture(scope="function")
def login_default_user(test_client):
    test_client.post(
        "/login",
        data=dict(email="patkennedy79@gmail.com", password="FlaskIsAwesome"),
        follow_redirects=True,
    )

    yield

    test_client.get("/logout", follow_redirects=True)


@pytest.fixture(scope="module")
def cli_test_client():
    flask_app = create_app("apps.config.TestEnvironmentConfig")

    runner = flask_app.test_cli_runner()

    yield runner

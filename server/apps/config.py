"""List of configuration classes for the Flask app."""
from os import getenv
from dotenv import load_dotenv


class EnvironmentConfig:
    """
    Configuration class for the Flask app.
    """

    load_dotenv()
    SECRET_KEY = getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = getenv("SQLALCHEMY_DATABASE_URI")
    DEBUG = True


class TestEnvironmentConfig:
    """
    Configuration class for the Test App.
    """

    SECRET_KEY = "dsdsddssssssss"
    SQLALCHEMY_DATABASE_URI = "sqlite:///test.db"

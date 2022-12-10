"""
Initialize the app and create the database.
"""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .views import views
from .auth import auth


def create_app(env="apps.config.EnvironmentConfig") -> Flask:
    """
    Bootstrap function to initialise the Flask app and config
    :return: Initialised Flask app
    """
    app = Flask(__name__)
    app.config.from_object(env)
    db.init_app(app)

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth)

    return app

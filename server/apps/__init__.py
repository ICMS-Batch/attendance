"""
Initialize the app and create the database.
"""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

from .views import views
from .auth.views import auth_bp


def create_app(env="apps.config.EnvironmentConfig") -> Flask:
    """
    Bootstrap function to initialise the Flask app and config
    :return: Initialised Flask app
    """
    app = Flask(__name__)
    app.config.from_object(env)
    db.init_app(app)
    CORS(app)

    @app.errorhandler(404)
    def not_found(e):
        return {"error": "Not Found"}, 404

    with app.app_context():
        db.create_all()

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth_bp, url_prefix="/auth")

    return app

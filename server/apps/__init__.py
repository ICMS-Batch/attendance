"""
Initialize the app and create the database.
"""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from flask_cors import CORS
from flask_migrate import Migrate

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s",
}
metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)
migrate = Migrate()

from .views import views
from .auth.views import auth_bp
from .admin.views import admin_bp


def create_app(env="apps.config.EnvironmentConfig") -> Flask:
    """
    Bootstrap function to initialise the Flask app and config
    :return: Initialised Flask app
    """
    app = Flask(__name__)
    app.config.from_object(env)
    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    @app.errorhandler(404)
    def not_found(e):
        return {"error": "Not Found"}, 404

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(admin_bp, url_prefix="/admin")

    return app

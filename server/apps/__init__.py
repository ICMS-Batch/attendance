from flask import Flask
from .config import secret_key,sqlalchemy_database_uri
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config["SECRET_KEY"] = secret_key
app.config["SQLALCHEMY_DATABASE_URI"] = sqlalchemy_database_uri
db = SQLAlchemy(app)
from .views import views
from .auth import auth
app.register_blueprint(views, url_prefix="/")
app.register_blueprint(auth)

with app.app_context():
    db.create_all()
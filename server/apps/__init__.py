from flask import Flask
from .config import secret_key,sqlalchemy_database_uri
from flask_sqlalchemy import SQLAlchemy
#creating the WSGI application
app = Flask(__name__)
#configuring the application
app.config["SECRET_KEY"] = secret_key
app.config["SQLALCHEMY_DATABASE_URI"] = sqlalchemy_database_uri
#creating an instane of SQLALchemy
db = SQLAlchemy(app)
#definig the create_app function
def create_app() :
    #importing the necessary modules
    from .views import views
    from .auth import auth
    #registering the blueprint
    app.register_blueprint(views)
    app.register_blueprint(auth)

    #creating the table 
    with app.app_context():
        db.create_all()
    #running the application
    app.run(debug=True)
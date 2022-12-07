from flask import Flask
#creating the WSGI application
app = Flask(__name__)
#definig the create_app function
def create_app() :
    #running the application
    app.run(debug=True)
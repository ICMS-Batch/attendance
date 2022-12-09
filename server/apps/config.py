from dotenv import load_dotenv
from os import getenv
#loading the environment variable in this module
load_dotenv()
#accessing the value
secret_key= getenv("SECRET_KEY")
sqlalchemy_database_uri = getenv("SQLALCHEMY_DATABASE_URI")

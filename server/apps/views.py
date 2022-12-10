"""This module contains the views for the app."""
from flask import Blueprint

views = Blueprint("views", __name__)


@views.route("")
def index():
    return {"message": "Hello World!"}

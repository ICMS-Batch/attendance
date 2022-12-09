from flask import Blueprint

#defining the blueprint
views = Blueprint("views",__name__)

@views.route("")
def index():
    return "One piece is real"
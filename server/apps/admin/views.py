from flask import Blueprint
from flask_restful import Api
from .resources import SemesterResource, RoutinesResource, SubjectsResource

admin_bp = Blueprint("admin_bp", __name__)
admin_api = Api(admin_bp)


admin_api.add_resource(SemesterResource, "/semesters")
admin_api.add_resource(RoutinesResource, "/routines")
admin_api.add_resource(SubjectsResource, "/subjects")

from flask import Response
from flask_restful import Resource, request
from .schemas import (
    SubjectCreationSchema,
    RoutineCreationSchema,
    SemesterCreationSchema,
)
from schematics.exceptions import DataError
from sqlalchemy.exc import IntegrityError
from apps.models import Subject, Routine, Semester
import json


class SubjectsResource(Resource):
    def post(self):
        try:
            data = SubjectCreationSchema(request.get_json())
            data.validate()
            Subject(
                name=data.name, description=data.description, routine_id=data.routine_id
            ).save()
        except DataError as e:
            return {"error": json.loads(str(e))}, 400
        except IntegrityError:
            return {"error": "Subject already exists"}, 400

    def get(self):
        return Subject.query.all()


class RoutinesResource(Resource):
    def post(self):
        try:
            data = RoutineCreationSchema(request.get_json())
            data.validate()
            Routine(
                day=data.day, start_time=data.start_time, end_time=data.end_time
            ).save()
            return Response(status=201)
        except DataError as e:
            return {"error": json.loads(str(e))}, 400

    def get(self):
        return Routine.query.all()


class SemesterResource(Resource):
    def get(self):
        return Semester.get_all()

    def post(self):
        try:
            data = SemesterCreationSchema(request.get_json())
            data.validate()
            Semester(
                name=data.name, description=data.description, year=data.year
            ).save()
            return Response(status=201)
        except DataError as e:
            return {"error": json.loads(str(e))}, 400

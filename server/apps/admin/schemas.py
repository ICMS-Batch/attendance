from schematics import Model
from schematics.types import StringType, EmailType, IntType


class SubjectCreationSchema(Model):
    name = StringType(required=True)
    description = StringType(required=True)
    routine_id = IntType(required=True)


class RoutineCreationSchema(Model):
    day = StringType(required=True)
    start_time = StringType(required=True)
    end_time = StringType(required=True)
    sem_id = IntType(required=True)


class SemesterCreationSchema(Model):
    name = StringType(required=True)
    description = StringType(required=True)
    year = IntType(required=True)

from apps import db
from apps.models import Base


class Routine(Base):
    """
    This class is used to create a table called routine in the database.

    The table has the following columns:
    day: String(100) - The day of the week.
    end_time: String(100) - The end time of the class.
    start_time: String(100) - The start time of the class.
    sem_id: Integer - The id of the semester.
    """

    __table_name__ = "routine"

    day = db.Column(db.String(100), nullable=False)
    start_time = db.Column(db.String(100), nullable=False)
    end_time = db.Column(db.String(100), nullable=False)
    sem_id = db.Column(db.Integer, db.ForeignKey("semester.id"), nullable=False)

    __table_args__ = (
        db.ForeignKeyConstraint(
            ["sem_id"],
            ["semester.id"],
            ondelete="CASCADE",
            onupdate="CASCADE",
        ),
    )

    def __str__(self) -> str:
        return self.day


class Semester(Base):
    """
    This class is used to create a table called semester in the database.

    The table has the following columns:
    name: String(100) - The name of the semester.
    description: String(100) - The description of the semester.
    year: Integer - The year of the semester.
    """

    __table_name__ = "semester"

    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer, nullable=False)

    def __str__(self) -> str:
        return self.name


class Subject(Base):
    """
    This class is used to create a table called subject in the database.

    The table has the following columns:
    name: String(100) - The name of the subject.
    description: String(100) - The description of the subject.
    routine_id: Integer - The id of the routine.
    """

    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    routine_id = db.Column(db.Integer, db.ForeignKey("routine.id"), nullable=False)

    __table_args__ = (
        db.ForeignKeyConstraint(
            ["routine_id"],
            ["routine.id"],
            ondelete="CASCADE",
            onupdate="CASCADE",
        ),
    )

    def __str__(self) -> str:
        return self.name

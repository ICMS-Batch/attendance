from apps import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.inspection import inspect


def serialize(obj):
    return {c: getattr(obj, c) for c in inspect(obj).attrs.keys()}


class Base(db.Model, SerializerMixin):
    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

    def save(self):
        """Saves the model to the database"""
        db.session.add(self)
        db.session.commit()

    def delete(self):
        """Deletes the model from the database"""
        db.session.delete(self)
        db.session.commit()

    def test_create(self, test_db):
        test_db.session.add(self)
        test_db.session.commit()

    def serialize(self):
        return {
            c: getattr(self, c)
            for c in inspect(self).attrs.keys()
            if c != "created_at" and c != "updated_at"
        }

    @staticmethod
    def serialize_list(l):
        return [m.serialize() for m in l]

    @classmethod
    def get_all(cls):
        """Returns all the models in the database"""
        response = cls.query.all()
        return cls.serialize_list(response)

    def __repr__(self):
        return f"{self.__class__.__name__} {self.id}"


from .general import Subject, Routine, Semester

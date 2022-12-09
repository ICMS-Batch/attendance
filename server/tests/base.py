from apps import create_app, db
import unittest


def clean_db(db):
    for table in reversed(db.metadata.sorted_tables):
        db.session.execute(table.delete())


class BaseTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        super(BaseTestCase, cls).setUpClass()
        cls.app = create_app("apps.config.TestEnvironmentConfig")
        cls.db = db
        with cls.app.app_context():
            cls.db.init_app(cls.app)
            cls.db.create_all()

    @classmethod
    def tearDownClass(cls) -> None:
        with cls.app.app_context():
            cls.db.drop_all()
        super(BaseTestCase, cls).tearDownClass()

    def setUp(self) -> None:
        super(BaseTestCase, self).setUp()
        self.client = self.app.test_client()
        self.app_context = self.app.app_context()
        self.app_context.push()
        clean_db(self.db)

    def tearDown(self) -> None:
        super(BaseTestCase, self).tearDown()
        self.db.session.rollback()
        self.app_context.pop()

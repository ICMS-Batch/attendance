from tests.base import BaseTestCase


class TestAuthBlueprint(BaseTestCase):
    url = "/api/signup-data"

    def test_registration_first_name(self):
        data = dict(
            first_name="dibash",
            email="dibash@gmail.com",
            password="password1234",
        )
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 400)

    def test_registration_last_name(self):
        data = dict(
            first_name="dibash",
            last_name="dibash",
            password="password1234",
        )
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 400)

    def test_registration_valid_email(self):
        data = dict(
            first_name="dibash",
            last_name="dibash",
            password="password1234",
        )
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 400)

    def test_valid_registration(self):
        data = dict(
            first_name="dibash",
            last_name="dibash",
            email="dibash@gmail.com",
            password="password1234",
        )
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, b"Successfully registered")

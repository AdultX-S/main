import unittest
import sys
import os

# Add the parent directory to the system path to enable module import
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from ai_agent.agent import AIAgent

class TestAIAgent(unittest.TestCase):

    def setUp(self):
        self.agent = AIAgent(user_id="test_user")

    def test_load_user_data(self):
        data = {"age": 25, "gender": "female"}
        self.agent.load_user_data(data)
        self.assertEqual(self.agent.user_data, data)

    def test_analyze_preferences(self):
        data = {"age": 30, "gender": "male"}
        self.agent.load_user_data(data)
        preferences = self.agent.analyze_preferences()
        self.assertIsNotNone(preferences)
        self.assertEqual(preferences["actress_preference"], "Emily")
        self.assertEqual(preferences["genre_preference"], "Romance")

    def test_generate_recommendation(self):
        preferences = {"actress_preference": "Emily", "genre_preference": "Romance"}
        recommendation = self.agent.generate_recommendation(preferences)
        self.assertIsNotNone(recommendation)
        self.assertIn("Emily", recommendation)
        self.assertIn("Romance", recommendation)

    def test_analyze_preferences_no_data(self):
        preferences = self.agent.analyze_preferences()
        self.assertEqual(preferences, {})

    def test_generate_recommendation_no_preferences(self):
        recommendation = self.agent.generate_recommendation({})
        self.assertEqual(recommendation, "")


if __name__ == '__main__':
    unittest.main()

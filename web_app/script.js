document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements
    const userIdElement = document.getElementById('user-id');
    const recommendationListElement = document.getElementById('recommendation-list');

    // Display a dummy user ID (Replace this with actual user ID retrieval later)
    const userId = 'test_user_123';
    userIdElement.textContent = userId;

    // Simulate fetching recommendations from the AI agent
    const preferences = {
        "actress_preference": "Emily",
        "genre_preference": "Romance"
    };

    const recommendation = generateRecommendation(preferences);

    // Display the recommendation
    const recommendationItem = document.createElement('p');
    recommendationItem.textContent = recommendation;
    recommendationListElement.appendChild(recommendationItem);


    // Placeholder function to simulate AI agent's recommendation generation
    function generateRecommendation(preferences) {
        // In a real application, this would involve an API call to the backend
        return `Recommended content for ${preferences.actress_preference} in ${preferences.genre_preference} genre.`;
    }
});

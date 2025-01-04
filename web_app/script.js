document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements
    const userIdElement = document.getElementById('user-id');
    const recommendationListElement = document.getElementById('recommendation-list');

    // Display a dummy user ID (Replace this with actual user ID retrieval later)
    const userId = 'test_user_123';
    userIdElement.textContent = userId;

    // Fetch recommendations from the AI agent
    fetch(`/api/recommendations?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            // Display the recommendations
            data.recommendations.forEach(recommendation => {
                const recommendationItem = document.createElement('li'); // Change to <li>
                recommendationItem.textContent = recommendation;
                recommendationListElement.appendChild(recommendationItem);
            });
        })
        .catch(error => {
            console.error('Error fetching recommendations:', error);
            const errorItem = document.createElement('p');
            errorItem.textContent = 'Error fetching recommendations. Please try again later.';
            recommendationListElement.appendChild(errorItem);
        });
});

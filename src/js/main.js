document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple interactive feature: a button that shows an alert
    const alertButton = document.getElementById('alertButton');
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            alert('Hello! Welcome to my personal website.');
        });
    }

    // Function to load content dynamically (example)
    function loadContent(page) {
        const contentDiv = document.getElementById('content');
        fetch(page)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Example of loading the 'about.html' content on page load
    loadContent('about.html');
});
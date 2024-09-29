// script.js

function loadTemplate() {
    fetch('template.html')
        .then(response => response.text())
        .then(data => {
            // Insert the header and footer into the current page
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = data;

            // Load header
            if (document.getElementById('header')) {
                document.getElementById('header').innerHTML = tempContainer.querySelector('header').innerHTML;
            }

            // Load footer
            if (document.getElementById('footer')) {
                document.getElementById('footer').innerHTML = tempContainer.querySelector('footer').innerHTML;
            }
        })
        .catch(err => console.error('Error loading template:', err));
}

// Automatically load the template when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadTemplate);

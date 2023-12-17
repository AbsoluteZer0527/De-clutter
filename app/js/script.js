document.getElementById('window').addEventListener('click', function() {
    // Redirect to the "quest" HTML file when clicked
    window.location.href = 'quest.html';
});

function goBack() {
    window.location.href = 'index.html';
}

// Add click event listener to the SVG button
document.getElementById('Button').addEventListener('click', goBack);


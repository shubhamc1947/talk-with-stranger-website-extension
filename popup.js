// Function to display stored names from localStorage
function displayStoredNames() {
    const storedNamesList = document.getElementById('storedNamesList');
    const storedNames = JSON.parse(localStorage.getItem('detectedNames')) || [];

    // Clear the list
    storedNamesList.innerHTML = '';

    // Populate the list with names
    storedNames.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        storedNamesList.appendChild(listItem);
    });
}

// Call the function to display stored names when the popup loads
document.addEventListener('DOMContentLoaded', displayStoredNames);

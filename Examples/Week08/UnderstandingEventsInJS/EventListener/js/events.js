// Function to modify the text content of the paragraph
function changeText() {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event listener.";
}

// Listen for click event
const button = document.querySelector('button');
button.addEventListener('click', changeText);

// Code for adding a second event listener

function alertText() {
    alert('Will I alert?');
}

// Multiple listeners can be added to the same event and element
button.addEventListener('click', alertText);

// An anonymous function on an event listener
button.addEventListener('click', function() {
    alert("Will I change?");
});
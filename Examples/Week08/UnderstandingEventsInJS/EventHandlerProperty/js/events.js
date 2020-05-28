// Function to modify the text content of the paragraph
function changeText() {
    const p = document.querySelector('p');
    p.textContent = "I changed because of an event handler property.";
}

// Add event handler as a property of the button element
const button = document.querySelector('button');
button.onclick = changeText;

/* 
// Uncomment this to see how trying to set multiple events doesn't work

function alertText() {
    alert('Will I alert?');
}

// Events can be overwritten
button.onclick = alertText;
*/
const section = document.querySelector('section');

// Print the selected target
section.addEventListener('click', function(event) {
    console.log(event.target);
});
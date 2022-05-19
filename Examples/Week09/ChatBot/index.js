document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#input").addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            console.log("You clicked the form and pressed the enter button!");
        }
    });
});
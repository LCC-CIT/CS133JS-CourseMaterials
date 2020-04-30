// Function to get the names of movies acted in by a particular actor
function actorToMovies(actor) {
    let movies = "";
    switch (actor) {
        case "George Clooney":
            movies = "Oh Brother, Where Art Thou?";
        case "Matt Damon":
            movies += "<br>Ocean's 11"; // Use += to append this to the previous movie title
            movies += "<br>The Monuments Men"; // Add <br> so it will be shown on a new line in the web page
            break;
        case "Sandra Bullock":
            movies = "While You Were Sleeping";
        case "Anne Hathaway":
        case "Cate Blanchette":
            movies += "<br>Ocean's 8";
            break;
        case "Will Smith":
            movies = "Aladdin";
        case "Tommy Lee Jones":
            movies += "<br>Men in Black";
            break;
        default:
            movies = "I don't know about that actor.";
    }
    return movies;
}

// I/O handler
function doIO() {
    // This loop lets the user get a list of movies for another actor
    let askAgain = "";
    do {
        // Get input and validate it
        let actor = ""; // The user has to enter something, anything
        while (actor == "" || actor == null) {
            actor = prompt("Enter the name of an actor");
        }

        // Get movies that the actor played in
        let movies = actorToMovies(actor);

        // Put the list of movies on the web page
        document.getElementById("movies").innerHTML = movies;
        askAgain = prompt("Do you want to enter another actor? (yes or no)");
    } while (askAgain == "yes" || askAgain == "Yes" || askAgain == "YES");
}
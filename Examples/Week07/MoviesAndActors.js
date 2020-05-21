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
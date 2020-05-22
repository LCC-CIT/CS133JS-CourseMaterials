// Function to get the names of movies acted in by a particular actor
function actorToMovies(actor) {
    let actorMovies = [];
    for(let movie of movies)
    {
        for(let movieActor of movie.actors)
        {
            if(movieActor == actor)
            {
                actorMovies.push(movie.title);
            }
        }
    }
    return actorMovies;
}

function Movie(title) {
    this.title = title;
    this.actors = [];
    this.addActor = function (actor) {
        this.actors.push(actor);
    }
}

let movies = [];

function makeMovies() {
    let movie = new Movie("Oh Brother, Where Art Thou?");
    movie.addActor("George Clooney");
    movie.addActor("Holly Hunter");
    movies.push(movie);
    movie = new Movie("Ocean's 11");
    movie.addActor("George Clooney");
    movie.addActor("Brad Pitt");
    movie.addActor("Julia Roberts");
    movie.addActor("Matt Damon");
    movies.push(movie);
    movie = new Movie("The Monuments Men");
    movie.addActor("George Clooney");
    movie.addActor("Matt Damon");
    movies.push(movie);
    movie = new Movie("While You Were Sleeping");
    movie.addActor("Sandra Bullock");
    movie.addActor("Bill Pullman");
    movie.addActor("Peter Gallagher");
    movies.push(movie);
    movie = new Movie("Ocean's 8");
    movie.addActor("Cate Blanchette");
    movie.addActor("Anne Hathaway");
    movie.addActor("Sandra Bullock");
    movies.push(movie);
    movie = new Movie("Aladdin");
    movie.addActor("Will Smith");
    movie.addActor("Mena Massoud");
    movie.addActor("Naomi Scott");
    movies.push(movie);
    movie = new Movie("Men in Black");
    movie.addActor("Will Smith");
    movie.addActor("Tommy Lee Jones");
    movie.addActor("Linda Fiorentino");
    movies.push(movie);
}

function getAllActors() {
    let actors = [];
    for (let movie of movies) {
        for (actor of movie.actors) {
            // Don't add duplicates
            if (-1 == actors.indexOf(actor)) {
                actors.push(actor);
            }
        }
    }
    return actors;
}
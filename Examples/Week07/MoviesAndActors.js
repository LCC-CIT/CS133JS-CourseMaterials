// Function to get the names of movies acted in by a particular actor
function actorToMovies(actor) {
    let actorMovies = []; // will hold the movie objects we're going to return
    for (let movie of movies) // loop through all the movie objects
    {
        for (let movieActor of movie.actors) // loop through the actor objects in each movie object
        {
            if (movieActor == actor) // if we found a movie with the actor we're looking for...
            {
                actorMovies.push(movie.title); //... then add it to the array of movies we're returning
            }
        }
    }
    return actorMovies; // array of movies with our actor in them
}

// Object constructor for a movie object
function Movie(title) {
    this.title = title;
    this.actors = [];
    this.addActor = function(actor) {
        this.actors.push(actor); // adds an actor object to the movie object's array of actors
    }
}

let movies = []; // global array that will hold movie objects

// This function initilizes the movies array with movie object
// and puts a few actors in each movie object. (These aren't all of the actors, just a representative sampling!)
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

// getAllActors returns an array contaiing actor objects for all the actors in the objects in the movies array.
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
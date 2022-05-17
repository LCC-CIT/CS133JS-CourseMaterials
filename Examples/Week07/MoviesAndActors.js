// Object constructor for a movie object
function Movie(title) {
    this.title = title;
    this.actors = [];
    this.addActor = function(actor) {
        this.actors.push(actor); // adds an actor object to the movie object's array of actors
    }
}

let movieCatalog = {
    // Array that will hold movie objects
    movies: [],

    // addMovie parameters: string title, array of string actor names
    addMovie: function(movieTitle, actors) {
        let movie = new Movie(movieTitle);
        movie.actors = [].concat(actors); // copy the actors to the empty array
        this.movies.push(movie);
    },

    // getAllActors returns an array contaiing actor objects for all the actors in the objects in the movies array.
    getAllActors: function() {
        let actors = [];
        for (let movie of this.movies) {
            for (let actor of movie.actors) {
                // Don't add duplicates
                if (-1 == actors.indexOf(actor)) {
                    actors.push(actor);
                }
            }
        }
        return actors;
    },

    // Function to get the names of movies acted in by a particular actor
    actorToMovies: function(actor) {
        let actorMovies = []; // will hold the movie objects we're going to return
        for (let movie of this.movies) // loop through all the movie objects
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
}

// This function initilizes the movies array with movie object
// and puts a few actors in each movie object. (These aren't all of the actors, just a representative sampling!)
function makeMovies() {
    movieCatalog.addMovie("Oh Brother, Where Art Thou?", ["George Clooney", "Holly Hunter"]);
    movieCatalog.addMovie("Ocean's 11", ["George Clooney", "Brad Pitt", "Julia Roberts", "Matt Damon"]);
    movieCatalog.addMovie("The Monuments Men", ["George Clooney", "Matt Damon"]);
    movieCatalog.addMovie("While You Were Sleeping", ["Sandra Bullock", "Bill Pullman", "Peter Gallagher"]);
    movieCatalog.addMovie("Ocean's 8", ["Cate Blanchette", "Anne Hathaway", "Sandra Bullock"]);
    movieCatalog.addMovie("Aladdin", ["Will Smith", "Mena Massoud", "Naomi Scott"]);
    movieCatalog.addMovie("Men in Black", ["Will Smith", "Tommy Lee Jones", "Linda Fiorentino"])
}
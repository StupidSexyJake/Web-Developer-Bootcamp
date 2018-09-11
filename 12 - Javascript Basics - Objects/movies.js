var movies = [
    {
		title: "The Good, The Bad and The Ugly",
		rating: 5,
		hasWatched: true
    },
    {
		title: "Passengers",
		rating: 2,
		hasWatched: false
    },    
    {
		title: "Skyscraper",
		rating: 3.5,
		hasWatched: true
    },    
    {
		title: "True Grit",
		rating: 4,
		hasWatched: false
    }
]
movies.forEach(function(movie) {
    if (movie.hasWatched === true) {
        seen = "watched";
    }
    else {
        seen = "not seen";
    }    
    console.log("You have " + seen + " \"" + movie.title + "\" - " + movie.rating + " stars")
});
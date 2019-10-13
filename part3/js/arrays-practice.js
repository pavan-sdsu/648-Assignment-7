//STEP 1
var arr = ["Fast and Furious 1", "Fast and Furious 2", "Fast and Furious 3", "Fast and Furious 4", "Fast and Furious 5"];
window.console.log(arr[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Fast and Furious 1";
movies[1] = "Fast and Furious 2";
movies[2] = "Fast and Furious 3";
movies[3] = "Fast and Furious 4";
movies[4] = "Fast and Furious 5";

window.console.log(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "Fast and Furious 1";
movies[1] = "Fast and Furious 2";
movies[2] = "Fast and Furious 3";
movies[3] = "Fast and Furious 4";
movies[4] = "Fast and Furious 5";

movies.splice(2, 0, "Harry Potter")
window.console.log(movies.length);

//STEP 4
var movies = [];
movies[0] = "Fast and Furious 1";
movies[1] = "Fast and Furious 2";
movies[2] = "Fast and Furious 3";
movies[3] = "Fast and Furious 4";
movies[4] = "Fast and Furious 5";

movies.splice(0, 1);
window.console.log(movies);

//STEP 5
var movies = [];
movies[0] = "Fast and Furious 1";
movies[1] = "Fast and Furious 2";
movies[2] = "Fast and Furious 3";
movies[3] = "Fast and Furious 4";
movies[4] = "Fast and Furious 5";
movies[5] = "Fast and Furious 6";
movies[6] = "Fast and Furious 7";

for (let i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}

//STEP 6
var movies = [];
movies[0] = "Fast and Furious 1";
movies[1] = "Fast and Furious 2";
movies[2] = "Fast and Furious 3";
movies[3] = "Fast and Furious 4";
movies[4] = "Fast and Furious 5";
movies[5] = "Fast and Furious 6";
movies[6] = "Fast and Furious 7";

for (var i in movies) {
	window.console.log(movies[i]);
}

//STEP 7
var movies = [];
movies[0] = "Fast and Furious 1";
movies[1] = "Fast and Furious 2";
movies[2] = "Fast and Furious 3";
movies[3] = "Fast and Furious 4";
movies[4] = "Fast and Furious 5";
movies[5] = "Fast and Furious 6";
movies[6] = "Fast and Furious 7";

movies.sort();

for (var i in movies) {
	window.console.log(movies[i]);
}

//STEP 8
var movies = [];
movies[0] = "Fast and Furious 1";
movies[1] = "Fast and Furious 2";
movies[2] = "Fast and Furious 3";
movies[3] = "Fast and Furious 4";
movies[4] = "Fast and Furious 5";
movies[5] = "Fast and Furious 6";
movies[6] = "Fast and Furious 7";

var leastFavMovies = [];
leastFavMovies[0] = "Housefull 1";
leastFavMovies[1] = "Housefull 2";
leastFavMovies[2] = "Housefull 3";

window.console.log('Movies I like:');
window.console.log('');
for (let i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}

window.console.log('Movies I regret watching:');
window.console.log('');
for (let i = 0; i < leastFavMovies.length; i++) {
	window.console.log(leastFavMovies[i]);
}

//STEP 9
var movies = [];
movies[0] = "Fast and Furious 1";
movies[1] = "Fast and Furious 2";
movies[2] = "Fast and Furious 3";
movies[3] = "Fast and Furious 4";
movies[4] = "Fast and Furious 5";
movies[5] = "Fast and Furious 6";
movies[6] = "Fast and Furious 7";

var leastFavMovies = [];
leastFavMovies[0] = "Housefull 1";
leastFavMovies[1] = "Housefull 2";
leastFavMovies[2] = "Housefull 3";

movies = movies.concat(leastFavMovies);
movies.sort().reverse();

for (let i = 0; i < movies.length; i++) {
	window.console.log(movies[i]);
}

//STEP 10
var movies = [];
movies[0] = "Fast and Furious 1";
movies[1] = "Fast and Furious 2";
movies[2] = "Fast and Furious 3";
movies[3] = "Fast and Furious 4";
movies[4] = "Fast and Furious 5";
movies[5] = "Fast and Furious 6";
movies[6] = "Fast and Furious 7";

var leastFavMovies = [];
leastFavMovies[0] = "Housefull 1";
leastFavMovies[1] = "Housefull 2";
leastFavMovies[2] = "Housefull 3";

movies = movies.concat(leastFavMovies);
movies.sort().reverse();

window.console.log(movies.pop());
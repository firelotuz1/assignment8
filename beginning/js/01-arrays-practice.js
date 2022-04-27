//STEP 1
// var movies = ["Matrix", "Office Space", "Batman", "Blade Runner", "Tron"];
// console.log(movies[1]);

//STEP 2
// var movies = new Array(5);
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";
// console.log(movies[0]);
// console.log(movies);

//STEP 3
// var movies = new Array(5);
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";

// movies.splice(2, 0, "The Fifth Element");

// console.log(movies.length);

//STEP 4
// var movies = [];
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";

// movies.shift();
// console.log(movies);

//STEP 5

// Array.prototype.name = function() {

// };

// var index;
// var movies = []
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";
// movies[5] = "The Fifth Element";
// movies[6] = "The Big Lebowski";

// for (index in movies) {
//     if(movies.hasOwnProperty(index)) {
//         console.log(movies[index]);
//     }
// }

//STEP 6

// var movies = []
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";
// movies[5] = "The Fifth Element";
// movies[6] = "The Big Lebowski";

// for (let i of movies) {

//     console.log(i);
// }

//STEP 7
// var movies = []
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";
// movies[5] = "The Fifth Element";
// movies[6] = "The Big Lebowski";

// movies.sort();
// for (let i of movies) {

//     console.log((i));
// }


//STEP 8

// var movies = []
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";
// movies[5] = "The Fifth Element";
// movies[6] = "The Big Lebowski";

// var leastFavMovies = ["Morbious", "Hackers", "Sing"];

// console.log(`Movies I like: \n\n${movies[0]} \n${movies[1]} \n${movies[2]} \n${movies[3]} \n${movies[4]} \n${movies[5]} \n${movies[6]}\n\nMovies I regret watching: \n\n${leastFavMovies[0]} \n${leastFavMovies[1]} \n${leastFavMovies[2]}` )


//STEP 9
// var movies = []
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";
// movies[5] = "The Fifth Element";
// movies[6] = "The Big Lebowski";

// var leastFavMovies = ["Morbious", "Hackers", "Sing"];
// var allMovies = movies.concat(leastFavMovies);

// console.log(allMovies.reverse());

//STEP 10
// var movies = []
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";
// movies[5] = "The Fifth Element";
// movies[6] = "The Big Lebowski";

// var leastFavMovies = ["Morbious", "Hackers", "Sing"];
// var allMovies = movies.concat(leastFavMovies);
// console.log(allMovies.pop());

//STEP 11

// var movies = []
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";
// movies[5] = "The Fifth Element";
// movies[6] = "The Big Lebowski";

// var leastFavMovies = ["Morbious", "Hackers", "Sing"];
// var allMovies = movies.concat(leastFavMovies);
// console.log(allMovies.shift());

//STEP 12
// var movies = []
// movies[0] = "Matrix";
// movies[1] = "Office Space";
// movies[2] =  "Batman";
// movies[3] = "Blade Runner";
// movies[4] = "Tron";
// movies[5] = "The Fifth Element";
// movies[6] = "The Big Lebowski";

// var leastFavMovies = ["Morbious", "Hackers", "Sing"];
// var allMovies = movies.concat(leastFavMovies);

// allMovies.splice(7, 9, "Prometheus");
// console.log(allMovies);

// //STEP 13
// var movies = [
//     ["Blade Runner", 1], 
//     ["Matrix", 2], 
//     ["Prometheus", 3], 
//     ["The Fifth Element", 4], 
//     ["Tron", 5]];

//     movies.forEach(function (movies) {
//         var movieNames = movies.filter(function(names){
//         return typeof names !== "number";}); 
//         console.log(movieNames);
//         })



//STEP 14
// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
// let showEmployees = function(employees) {
//     console.log(`Employees: \n\n`);
//     employees.forEach(function(employees) {
//         console.log(`${employees.toUpperCase()}`);
//     })};

// showEmployees(employees);

//STEP 15


// function filterValues(array) {
//     array = array.filter(isEligible);
//     return array;
// } 

// function isEligible(value) {
//     if(value !== false || value !== null || value !== 0 || value !== "") {
//         return value;
//     }
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//STEP 16
// let numbers = [1, 2, 20, 94, 5, 67, 7, 8, 9, 10];
// function anyNumber(numbers) {
//     return numbers[Math.floor(Math.random()*numbers.length)];
// } ;

// console.log(anyNumber(numbers));

//STEP 17

// let numbers = [1, 29, 20, 294, 5, 670, 7, 8, 9, 10];
// let largestNumber = numbers.reduce(function (accumulatedValue, currentValue) {
//     return Math.max(accumulatedValue, currentValue);
// });

// console.log(`The largest number: ${largestNumber}`);

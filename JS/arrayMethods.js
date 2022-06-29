const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 15, 12, 20];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const scores = [75, 99, 94, 38, 89, 100];


const movies = [
    {
        title: 'Amadeus',
        rating: 95
    },
    {
        title: 'Django Unchained',
        rating: 99
    },
    {
        title: 'Dune',
        rating: 93
    },
    {
        title: 'Forest Gump',
        rating: 80
    }
]


// array destructuring
const [a, b, ...rest] = alphabet;
console.log(a);
console.log(b);
console.log(rest);

function sumMultiply(a, b) {
    return [a + b, a * b];
}
const [sum, multiply] = sumMultiply(12, 3);
console.log(sum);
console.log(multiply);


// forEach method
scores.forEach((score) => {
    console.log(score / 2);
});



// map method
const doubleScore = scores.map((num) => {
    return num * 2;
})
console.log(doubleScore);

const movieName = movies.map((movie) => {
    return movie.title;
})
console.log(movieName)

// filter method
const goodMovies = movies.filter((movie) => {
    return movie.rating >= 95;
})
console.log(goodMovies);


// find

// some


// every

// reduce


// include


// push


// pop


// shift


// unshift


// indexOf


// slice


// splice


// sort


// arrow functions
const newMovies = movies.map((movie) => {
    return `${movie.title} - ${movie.rating}/100`
})

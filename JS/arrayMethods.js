const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 15, 12, 20];
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

// forEach method
numbers.forEach(function (el) {
    console.log(el);
})

// map method
const numbersDouble = numbers.map(function (num) {
    return num * 2;
})

// arrow functions
const newMovies = movies.map((movie) => {
    return `${movie.title} - ${movie.rating}/100`
})

const shorterMovies = movies.map(m => `${m.title} - ${m.rating}/100`)

// using filter method
const badMovies = movies.filter(movie => {
    return movie.rating < 92;
})

const goodMovies = movies.filter(m => m.rating > 92)


// every method
const everyMethod = scores.every(grade => {
    return grade > 80;
})

// some method
const someMethod = scores.some(grade => grade > 75);
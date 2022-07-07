const mongoose = require('mongoose');

// connect mongoose to mongo DB server 27017
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN")
    })
    .catch((err) => {
        console.log("ERROR: " + err)
    })

// create schema to make model
const movieSchema = mongoose.Schema({
    title: String,
    score: Number,
    year: Number
});

// model --> can now make new instances of Movie
const Movie = mongoose.model("Movie", movieSchema);

// create instance of model
const Shrek1 = new Movie({
    title: "Shrek One",
    score: 89,
    year: 1999
});

// Movie.insertMany([
//     { title: 'LOTR1', score: 99, year: 1999 },
//     { title: 'Star wars', score: 83, year: 2005 },
//     { title: 'Avengers', score: 85, year: 2011 },
//     { title: 'Inception', score: 99, year: 2012 }
// ])
// build my first server

const express = require('express');

const app = express();

// request and response are two objects that are critical to servers
// need to comment out bc there can only be 1 response to every request and this responds to all types of request
// app.use((req, res) => {
//     console.log("We got a new request")
//     // res.send("Hello, we got your request. This is a response.")
//     // res.send({ color: 'red' })
//     res.send("<h1>This is a h1</h1>")
// })

// create some routes to have specific responses for specific requests i.e. /dogs, /cats, /
// cats --> meow
// dogs --> woof
//  '/' --> welcome to home page
app.get('/cats', (req, res) => {
    res.send("MEOW")
})

// adding the : makes it so that the route can recognize patterns. anything with /r/whatever, will have this response
app.get('/r/:subreddit', (req, res) => {
    // req.params is very useful to see the pattern route
    const { subreddit } = req.params;
    res.send(`Browsing the ${subreddit} subreddit`);
})

app.get('/dogs', (req, res) => {
    res.send("WOOF")
})

app.get('/', (req, res) => {
    res.send("HOME PAGE")
})

// making a get response with query string
app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`Search Results for: ${q}`)
})

// * means that it will respond to all request. put it at the bottom, so it only responds to things u haven't already specified
// kind of like the else statement, after all the if and else ifs
app.get('*', (req, res) => {
    res.send("EVERYTHING ELSE");
})


app.listen(8080, () => {
    console.log("listening on port 8080");
})
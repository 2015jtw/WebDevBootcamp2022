const express = require("express");
const app = express();
const path = require('path')
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs")
// make views dir globally accessible
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render("home.ejs")
})

// shows how to do conditionals with ejs
app.get('/random', (req, res) => {
    // can define vars here to pass into the render --> HTML template
    const num = Math.floor((Math.random() * 10)) + 1;
    res.render('random.ejs', { random: num });
})

// this is to display the name of the subreddit thats entered by the user
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    console.log(data);
    // by spreading data var, can call specific key value pairs of data.json into the ejs template
    res.render('subreddit', { ...data })
})

// shows how to do loops with ejs
app.get('/cats', (req, res) => {
    const cats = ['blue', 'steph', 'sadie', 'willy', 'cat'];
    res.render('cats', { cats })

})

app.listen("3000", () => {
    console.log("listening on port 3000");
})
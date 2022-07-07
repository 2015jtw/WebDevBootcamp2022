const { request } = require('express');
const express = require('express');
const app = express();
const session = require('express-session')

const sessionOptions = {
    secret: 'keyboard',
    resave: false,
    saveUninitialized: false
}


// session middleware
app.use(session(sessionOptions))

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    }
    else {
        req.session.count = 1;
    }

    res.send(`You have viewed this page ${req.session.count} times`);
})

app.get('/register', (req, res) => {
    const { username = 'stranger' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`welcome back, ${username}`);
})


app.listen(3000, () => {
    console.log("server is up")
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');

// to parse different info types into our app
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs")

// creating RESTful system
// create array to act as database
let comments = [
    {
        username: "todd",
        comment: "lol thats funny",
        id: uuid()
    },
    {
        username: "bob",
        comment: "lol thats not bad",
        id: uuid()
    },
    {
        username: "joey",
        comment: "im confused",
        id: uuid()
    }
];

// creating RESTful system for CRUD functionality

// GET /comments --> list all comments
// POST /comments --> create a new comment
// GET /comments/:id --> get one specific comment using the ID
// PATCH /comments/:id --> update one specific comment
// DELETE /comments/:id --> delete one specific comment

// can see all comments
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

// create a new comment
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    // add the comments to the index array
    comments.push({ username, comment, id: uuid() })
    // res.send("it worked")
    // use redirect to bring back to index page
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

// to edit an existing comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})


app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const updateComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = updateComment;
    res.redirect('/comments')
    res.send("OK")

})

// path to delete a comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    // create new array to keep all the none deleted comments
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})




// EARLIER CONTENT

app.get("/tacos", (req, res) => {
    res.send("Get /tacos response")
})
// this is the syntax to make POST requests
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    console.log(`Okay, here are ${qty} ${meat} tacos`);
    res.send(`Okay, here are ${qty} ${meat} tacos`)

})

// an else for all possible not already defined routes
app.get('*', (req, res) => {
    res.send("Sorry this route hasn't been completed")
})

app.listen(3000, () => {
    console.log("connected on port 3000!");
})






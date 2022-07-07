const express = require('express');
const app = express();
const User = require('./models/user');
const path = require('path');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const session = require('express-session');


// connect mongoose to mongo DB server 27017
mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch((err) => {
        console.log("MONGO ERROR: " + err)
    })


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }))

app.use(session({ secret: 'not a good secret' }))

// middleware for /secret route
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();

}


app.get('/', (req, res) => {
    res.send("THIS IS THE HOME PAGE")
})


app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    // get password from request
    const { password, username } = req.body;
    // hash the password
    const hash = await bcrypt.hash(password, 12);
    // set the user.password to hash
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    // for knowing the sessions id
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const foundUser = await User.findAndValidate(username, password);
    // // find the user by their unique username
    // const user = await User.findOne({ username });
    // // compare the password with the hashed password
    // const validPassword = await bcrypt.compare(password, user.password);
    if (foundUser) {
        // will only be able to go to secret if successfully logged in
        req.session.user_id = foundUser._id;
        res.redirect('/secret')
    }
    else {
        res.redirect('/login')

    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/login')
})

// added middleware
app.get('/secret', requireLogin, (req, res) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    res.render("secret");
})


app.listen(3000, () => {
    console.log("server is on")
})
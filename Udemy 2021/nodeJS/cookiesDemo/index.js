const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')

app.use(cookieParser('thisissecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hi there, ${name}`);
})


// setting up a cookie and can respond with a cookie
app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks');
    res.cookie('animal', 'harlietta');
    res.send('OK SENT U THE COOKIE')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('SIGNED FRUIT COOKIE')
})

app.get('/verifycookie', (req, res) => {
    console.log(req.signedCookies)
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log("SERVING SERVER")
})
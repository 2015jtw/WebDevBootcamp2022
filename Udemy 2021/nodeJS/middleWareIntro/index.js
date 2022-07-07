const express = require('express');
const app = express();
const morgan = require('morgan');

// telling script to use middleware called tiny --> logs every single request
app.use(morgan('tiny'));

// creating custom middleware
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, res.path);
    next();
})


app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS");
    next();
})

app.get('/', (req, res) => {
    res.send("HOME PAGE")
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`)
    res.send("WOOF WOOF")
})

// will show for 404 errors --> bc its at the end, it works like the else condition 
app.use((req, res) => {
    res.status(404).send("NOT FOUND")
})

app.listen(3000, () => {
    console.log("connected to server")
})
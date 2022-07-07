const mongoose = require('mongoose');

const Product = require('./models/product')

// connect mongoose to mongo DB server 27017
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch((err) => {
        console.log("MONGO ERROR: " + err)
    })

// const p = new Product({
//     name: 'grapefruit',
//     price: 1.25,
//     category: 'fruit'
// })

// p.save().then(e => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'watermelon',
        price: 2,
        category: 'fruit'
    },
    {
        name: 'apple',
        price: 1,
        category: 'fruit'
    },
    {
        name: 'asparagus',
        price: 3,
        category: 'vegetable'
    },
    {
        name: 'mango',
        price: 4,
        category: 'fruit'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })
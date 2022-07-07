const mongoose = require('mongoose');

// connect mongoose to mongo DB server 27017
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN")
    })
    .catch((err) => {
        console.log("ERROR: " + err)
    })

// can do validatiino on schema to make it so that user must input a String for the name, originally w/o this extra syntax
// code would just assume u want a string for name, but wouldn't require it
// there's a lot of schema type options 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        max: [800, 'Price must be less than 800'],
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

// can create custom methods for instances of productSchema
productSchema.methods.greet = function () {
    console.log("HELLOOOO");
}

// create model based on schema above
const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    foundProduct.greet();
}

findProduct();

// create model instance
const bike = new Product({
    name: 'Mountain Bike',
    price: 700,
    categories: ['Outdoors', 'Biking']
})
bike.save()
    .then(data => {
        console.log("IT WORKED: " + data);
    })
    .catch(err => console.log("OH NO: " + err))
const mongoose = require('mongoose');

const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name']
    },
    location: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    // used a two-way data relationship between farm and product -- pay attention to ref and giving object id
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

// want to connect farm to product --> farm can have many products, and all products must have name, price, category

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;

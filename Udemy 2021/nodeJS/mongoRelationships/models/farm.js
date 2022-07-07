const mongoose = require('mongoose');

// connect mongoose to mongo DB server 27017
mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch((err) => {
        console.log("MONGO ERROR: " + err)
    })

// this doc is representing mongo data relationship of one to many
// one option is to store your data separately, but then store references to document's IDs somewhere inside the parent  

// define child model schema --> the product (veg, fruiit)
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});


// define parent model schema --> the farm
const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    // ref value of Product links this schema to the Product model as its parent
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]

})

const Product = mongoose.model('Product', productSchema);

const Farm = mongoose.model('Farm', farmSchema);


// Product.insertMany([
//     { name: 'Watermelon', price: 15, season: 'Summer' },
//     {
//         name: 'Honey dew', price: 10, season: 'Fall'
//     }
// ]);

const makeFarm = async () => {
    const farm = new Farm({ name: 'Blue Lodge NY', city: "Rochester" });
    const honeyDew = await Product.findOne({ name: 'Honey Dew' });
    farm.products.push(honeyDew);
    await farm.save();
    console.log(farm);

}

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Blue Lodge NY' });
    const watermelon = await Product.findOne({ name: 'Watermelon' });
    const honeyDew = await Product.findOne({ name: 'Honey Dew' });
    farm.products.push(watermelon);
    farm.products.push(honeyDew);
    await farm.save();
    console.log(farm);
}

Farm.findOne({ name: 'Blue Lodge NY' })
    .populate('products')
    .then(farm => console.log(farm));
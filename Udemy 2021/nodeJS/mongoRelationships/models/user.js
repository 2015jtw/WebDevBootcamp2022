const mongoose = require('mongoose');

// connect mongoose to mongo DB server 27017
mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch((err) => {
        console.log("MONGO ERROR: " + err)
    })

// mongo schema
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [{
        street: String,
        city: String,
        state: String,
        country: String
    }]

})

// mongo model --> always uppercase
const User = mongoose.model('User', userSchema);


// This is how one-to-few mongo relationships should be handled --> embed the data directly into document

const makeUser = async () => {
    // create new users
    const u = new user({
        first: "Perry",
        last: "Potter"
    })
    u.address.push({
        street: "4000 N. Randolph",
        city: "Arlington",
        state: "VA",
        country: "US"
    })
    const res = await u.save();
    console.log(res);
}

// makeUser();


const addAddress = async (id) => {
    const user = await User.findById(id);
    user.address.push({
        street: "333 N. Randolph",
        city: "Boob",
        state: "VA",
        country: "US"
    });
    const res = await user.save();
    console.log(res);
}

addAddress('60874ceeedc5b814b1e66138');
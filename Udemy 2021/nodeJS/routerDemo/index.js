const express = require('express');
const app = express();

// importing the routes for shelter and dogs
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

// using the routes
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);





app.listen(3000, () => {
    console.log("SERVER ON");
})
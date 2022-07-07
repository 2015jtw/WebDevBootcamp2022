const express = require('express');
const router = express.Router();


// middleware
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    else {
        res.send("SORRY NOT AN ADMIN")
    }
})

router.get('/topsecret', (req, res) => {
    res.send("this is top secret")
});

router.get('/deleteall', (req, res) => {
    res.send("deleting this")
})



module.exports = router;
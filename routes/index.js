var express = require('express');
var router = express.Router();
/* GET home page. */
router.post('/login', function (req, res) {
    console.log(req.body);
    res.json();
});
module.exports = router;

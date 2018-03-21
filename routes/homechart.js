var express = require('express');
var mongoose = require('mongoose');
var db = require('../Schema/db');
var router = express.Router();
var HomeChart = require('../Schema/homechart');
var homechart = mongoose.model('homechart', HomeChart);

// 查询
router.get('/homechart/chartModel', function (req, res) {
    homechart.find({}).exec(function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json({retList: doc, msg: "查询成功", retCode: "00"});
        }
    })
});
module.exports = router;





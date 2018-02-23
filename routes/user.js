var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require('../Schema/User');
var db = require('../Schema/db');
var user = mongoose.model('user', User);
// var db = require('./Schema/User').db;
/* GET home page. */
router.get('/system/user', function (req, res) {
    var curPage = req.query.curPage * 1;
    var pageSize = req.query.pageSize * 1;
    var totalRow;
    console.log(curPage, pageSize);
    user.count().exec(function (err, count) {
        if (err) {
            console.log(err);
        } else {
            totalRow = count;
        }
    });
    user.find().skip(curPage * pageSize - pageSize).limit(pageSize).sort({'regtime': -1}).exec(function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json({retList: doc, pageSize: pageSize, curPage: curPage, totalRow: totalRow});
        }
    });

});
router.post('/system/user', function (req, res) {
    const u = new user({
        userId: req.body.userId,
        username: req.body.username,
        password: req.body.password,
        orgName: req.body.orgName,
        status: req.body.status,
        desc: req.body.desc
    });
    u.save(function (err, doc) {
        if (err) {
            res.json({retCode: "EE", msg: "新增用户失败!"});
        } else {
            console.log(req.body);
            console.log(doc);
            res.json({retCode: "00", msg: "新增用户成功!"});
        }
    });
});
router.post('/system/user/mod', function (req, res) {
    user.update({_id: req.body._id}, req.body, function (err, doc) {
        if (err) {
            console.log(err);
            console.log(req.body)
        } else {
            res.json({retCode: "00", msg: "修改用户成功!"});
        }
    });
});
router.delete('/system/user/:id', function (req, res) {
    user.remove({_id: req.params.id}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json({retCode: "00", msg: "删除成功!"});
        }
    })
});
router.get('/system/user/:id', function (req, res) {
    user.find({_id: req.params.id}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json({retList: doc});
        }
    })

});


module.exports = router;

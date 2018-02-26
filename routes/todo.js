var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Todo = require('../Schema/ToDo');
var db = require('../Schema/db');
var todo = mongoose.model('todo',Todo);
// 查询
router.get('/dashboard/v1/todo',function (req,res) {
    let creator = req.query.creator;
   todo.find({creator:creator}).exec(function (err,doc) {
       if(err){
           console.log(err);
       }else {
           res.json({retList:doc,msg:"查询成功"});
       }
   })
});
// 新增
router.post('/dashboard/v1/todo',function (req,res) {
   let t = new todo({
       name: req.body.name,
       content: req.body.content,
       creator:req.body.creator
   });
   t.save(function (err,doc) {
       if (err){
           console.log(err);
       }else {
           res.json({msg:"新增成功"});
       }
   })
});
// 修改
router.post('/dashboard/v1/todo/mod', function (req, res) {
    todo.update({_id: req.body._id},{status:req.body.status}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json({msg: "修改成功!"});
        }
    });
});
// 删除
router.delete('/dashboard/v1/todo/:id', function (req, res) {
    todo.remove({_id: req.params.id}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json({msg: "删除成功!"});
        }
    })
});
module.exports = router;
var mongoose = require('mongoose');
var User = new mongoose.Schema({
    userId:String,
    username:String,
    password: String,
    orgName: String,
    status: Number,
    desc: {type:String,default:""},
    regtime: {type:Date,default:Date.now()}
});
User.query.findById = function (_id) {
    return this.find({_id:_id});
};
User.query.findAll = function () {
    return this.find();
}
module.exports = User;
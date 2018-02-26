var mongoose = require('mongoose');
var Todo = new mongoose.Schema({
    creator: String,
    createTime: {type: Date, default: Date.now()},
    name: String,
    content: String,
    status: {type: Boolean, default: false},
    img: {type: String, default: ""}
});
module.exports = Todo;
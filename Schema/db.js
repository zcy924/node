var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://127.0.0.1:27017/my-project');
module.exports = db;
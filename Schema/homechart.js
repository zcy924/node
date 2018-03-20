var mongoose = require('mongoose');
var homechart = new mongoose.Schema({
    chartDesc: String,
    name: String,
    icon: String,
    id: String,
    type: Number,
    chart_option: String
});
module.exports = homechart;
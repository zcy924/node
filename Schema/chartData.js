var mongoose = require('mongoose');
var chartdata = new mongoose.Schema({
    id: String,
    dataMsg: {
        legend: [],
        dimensionList: [],
        measureList: []
    },
    optionMsg: String,
    componentMsg: {}
});
module.exports = chartdata;
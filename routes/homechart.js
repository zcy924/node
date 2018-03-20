var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var HomeChart = require('../Schema/homechart');
var db = require('../Schema/db');
var homechart = mongoose.model('homechart',HomeChart);
// 查询
router.get('/homechart/chartModel',function (req,res) {
    homechart.find({}).exec(function (err,doc) {
        if(err){
            console.log(err);
        }else {
            res.json({retList:doc,msg:"查询成功",retCode:"00"});
        }
    })
});
// 新增
router.post('/homechart/chartModel/v1',function (req,res) {
    let t = new homechart({
        chartDesc: "真的是非常开心",
        name: "开心的像个傻子",
        icon: "vvv",
        id: "0cec14b1-c112-49f5-a1f3-2dc2597480fe",
        type: "0",
        chart_option: "\"\n" +
        "that.option = {\n" +
        "    title: {\n" +
        "        text: '世界人口总量',\n" +
        "        subtext: '数据来自网络'\n" +
        "    },\n" +
        "    tooltip: {\n" +
        "        trigger: 'axis',\n" +
        "        axisPointer: {\n" +
        "            type: 'shadow'\n" +
        "        }\n" +
        "    },\n" +
        "    legend: {\n" +
        "        data: that.payload.legend\n" +
        "    },\n" +
        "    grid: {\n" +
        "        left: '3%',\n" +
        "        right: '4%',\n" +
        "        bottom: '3%',\n" +
        "        containLabel: true\n" +
        "    },\n" +
        "    xAxis: {\n" +
        "        type: 'value',\n" +
        "        boundaryGap: [0, 0.01]\n" +
        "    },\n" +
        "    yAxis: {\n" +
        "        type: 'category',\n" +
        "        data: that.payload.dimensionList[0].data\n" +
        "    },\n" +
        "    series: [\n" +
        "      {\n" +
        "        type:'bar',\n" +
        "        name:that.payload.measureList[0].name,\n" +
        "        data:that.payload.measureList[0].data\n" +
        "      }\n" +
        "    ]\n" +
        "};\n" +
        "\""
    });
    t.save(function (err,doc) {
        if (err){
            console.log(err);
        }else {
            res.json({msg:"新增成功"});
        }
    })
});
// // 修改
// router.post('/dashboard/v1/todo/mod', function (req, res) {
//     todo.update({_id: req.body._id},{status:req.body.status}, function (err, doc) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json({msg: "修改成功!"});
//         }
//     });
// });
// // 删除
router.get('/homechart/chartmodel/chartDetail/:id', function (req, res) {
    if(req.params.id==="e2ab9ab4-93c5-427b-b78f-ccf923487863"){
        res.send({"element":{"dataMsg":{"legend":["交易量"],"dimensionList":[{"data":["4150","9574","4161","6741","39723"],"name":"交易量"}],"measureList":[{"data":["4150","9574","4161","6741","39723"],"name":"交易量"}]},"optionMsg":"\nthat.option = {\n    title: {\n        text: '堆叠区域图'\n    },\n    tooltip : {\n        trigger: 'axis',\n        axisPointer: {\n            type: 'cross',\n            label: {\n                backgroundColor: '#6a7985'\n            }\n        }\n    },\n    legend: {\n        data:legend\n    },\n    toolbox: {\n        feature: {\n            saveAsImage: {}\n        }\n    },\n    grid: {\n        left: '3%',\n        right: '4%',\n        bottom: '3%',\n        containLabel: true\n    },\n    xAxis : [\n        {\n            type : 'category',\n            boundaryGap : false,\n            data : dimensionList[0].data\n        }\n    ],\n    yAxis : [\n        {\n            type : 'value'\n        }\n    ],\n    series : [\n     {\n       name: measureList[0].name,\n       type: 'line',\n       stack: '总量',\n       areaStyle: {normal: {}},\n       data: measureList[0].data,\n     }\n   ]\n};\n","componentMsg":{"creator":"ccliu","subject":0,"name":"在Xcxzxc","icon":null,"describe":"爱仕达所","type":"0","creatorOrgNo":"0000","status":0}},"retCode":"00","retMsg":"成功"});
    }else {
        res.send({"element":{"dataMsg":{"legend":["交易量"],"dimensionList":[{"data":["存款","转账","改密","取款","null"],"name":"交易类型"}],"measureList":[{"data":["4150","9574","4161","6741","39723"],"name":"交易量"}]},"optionMsg":"\nthat.option = {\n    title: {\n        text: '世界人口总量',\n        subtext: '数据来自网络'\n    },\n    tooltip: {\n        trigger: 'axis',\n        axisPointer: {\n            type: 'shadow'\n        }\n    },\n    legend: {\n        data: that.payload.legend\n    },\n    grid: {\n        left: '3%',\n        right: '4%',\n        bottom: '3%',\n        containLabel: true\n    },\n    xAxis: {\n        type: 'value',\n        boundaryGap: [0, 0.01]\n    },\n    yAxis: {\n        type: 'category',\n        data: that.payload.dimensionList[0].data\n    },\n    series: [\n      {\n        type:'bar',\n        name:that.payload.measureList[0].name,\n        data:that.payload.measureList[0].data\n      }\n    ]\n};\n","componentMsg":{"creator":"ccliu","subject":0,"name":"哈哈哈哈哈","icon":null,"describe":"henhao","type":"0","creatorOrgNo":"0000","status":0}},"retCode":"00","retMsg":"成功"})
    }

});
module.exports = router;





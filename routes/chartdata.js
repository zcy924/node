var express = require('express');
var mongoose = require('mongoose');
var db = require('../Schema/db');
var router = express.Router();
var ChartData = require('../Schema/chartData');
var chartdata = mongoose.model('chartdata', ChartData);
// 查询
router.put('/system/v1/user/view',function (req,res) {
    res.send({"element":null,"retCode":"00","retMsg":"更新成功！"});
});
router.put('/system/v1/user/screen',function (req,res) {
    res.send({"element":null,"retCode":"00","retMsg":"更新成功！"});
})
router.post('/chartdata/post', function (req, res) {
    let t = new chartdata({
        id: "e2ab9ab4-93c5-427b-b78f-ccf923487863",
        dataMsg: {
            legend: [
                "交易量"
            ],
            dimensionList: [
                {
                    data: [
                        "4150",
                        "9574",
                        "4161",
                        "6741",
                        "39723"
                    ],
                    name: "交易量"
                }
            ],
            measureList: [
                {
                    data: [
                        "4150",
                        "9574",
                        "4161",
                        "6741",
                        "39723"
                    ],
                    name: "交易量"
                }
            ]
        },
        optionMsg: "\nthat.option = {\n    title: {\n        text: '堆叠区域图'\n    },\n    tooltip : {\n        trigger: 'axis',\n        axisPointer: {\n            type: 'cross',\n            label: {\n                backgroundColor: '#6a7985'\n            }\n        }\n    },\n    legend: {\n        data:legend\n    },\n    toolbox: {\n        feature: {\n            saveAsImage: {}\n        }\n    },\n    grid: {\n        left: '3%',\n        right: '4%',\n        bottom: '3%',\n        containLabel: true\n    },\n    xAxis : [\n        {\n            type : 'category',\n            boundaryGap : false,\n            data : dimensionList[0].data\n        }\n    ],\n    yAxis : [\n        {\n            type : 'value'\n        }\n    ],\n    series : [\n     {\n       name: measureList[0].name,\n       type: 'line',\n       stack: '总量',\n       areaStyle: {normal: {}},\n       data: measureList[0].data,\n     }\n   ]\n};\n",
        componentMsg: {
            creator: "ccliu",
            subject: 0,
            name: "在Xcxzxc",
            icon: "vv",
            describe: "爱仕达所",
            type: "0",
            creatorOrgNo: "0000",
            status: 0
        }
    });
    t.save(function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json({msg: "新增成功"});
        }
    })
})
// 新增
// router.post('/homechart/chartModel/v1', function (req, res) {
//     let t = new homechart({
//         chartDesc: "真的是非常开心",
//         name: "开心的像个傻子",
//         icon: "vvv",
//         id: "0cec14b1-c112-49f5-a1f3-2dc2597480fe",
//         type: "0",
//         chart_option: "\"\n" +
//         "that.option = {\n" +
//         "    title: {\n" +
//         "        text: '世界人口总量',\n" +
//         "        subtext: '数据来自网络'\n" +
//         "    },\n" +
//         "    tooltip: {\n" +
//         "        trigger: 'axis',\n" +
//         "        axisPointer: {\n" +
//         "            type: 'shadow'\n" +
//         "        }\n" +
//         "    },\n" +
//         "    legend: {\n" +
//         "        data: that.payload.legend\n" +
//         "    },\n" +
//         "    grid: {\n" +
//         "        left: '3%',\n" +
//         "        right: '4%',\n" +
//         "        bottom: '3%',\n" +
//         "        containLabel: true\n" +
//         "    },\n" +
//         "    xAxis: {\n" +
//         "        type: 'value',\n" +
//         "        boundaryGap: [0, 0.01]\n" +
//         "    },\n" +
//         "    yAxis: {\n" +
//         "        type: 'category',\n" +
//         "        data: that.payload.dimensionList[0].data\n" +
//         "    },\n" +
//         "    series: [\n" +
//         "      {\n" +
//         "        type:'bar',\n" +
//         "        name:that.payload.measureList[0].name,\n" +
//         "        data:that.payload.measureList[0].data\n" +
//         "      }\n" +
//         "    ]\n" +
//         "};\n" +
//         "\""
//     });
//     t.save(function (err, doc) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json({msg: "新增成功"});
//         }
//     })
// });
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
    let chartId = req.params.id;
    chartdata.find({id: chartId}).exec(function (err, doc) {
        if (err) {
            console.log('根据图表id查询详细信息失败!');
        } else {
            res.json({element: doc[0], retCode: "00", retMsg: "成功"});
        }
    })

});
module.exports = router;





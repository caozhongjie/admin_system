var express = require('express');
var router = express.Router();
var fs = require('fs'); //文件模块

/* GET home page. */
const data= {
  "success": true,
  "cold": 200,
  "data": [
    {
      "name": "张三12312312",
      "age": "17",
      "sex": 1,
      "favorite": '足球'
    },
    {
      "name": "张三",
      "age": "17",
      "sex": 1,
      "favorite": '足球'
    },
    {
      "name": "张三",
      "age": "17",
      "sex": 1,
      "favorite": '足球'
    }
  ]
}
router.get('/', function(req, res, next) {
  res.render('frontIndex', { title: 'Express', ...data });

});

module.exports = router;

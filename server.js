var express = require('express');
var app = express();
var db = require('./database');
//database.js สามารถดึงข้อมูลทั้งหมดมาใช้ได้
var cors = require('cors');
app.use(cors())

var bodyParser = require('body-parser');
//ตัวนี้สำคัญ
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
extended: true
}));

var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});
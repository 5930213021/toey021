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


//add routing
//index page
app.get('/', function (req, res) {
    res.send('Express is running');
});

var output = {
//สร้างตังแปรขึ้นมาได้เลย แล้วเอาตัวแปรสร้างในobjectใส่ในgetได้เลย
    status: 'success',
    message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

//สร้างruoting เพื่อให้uesrเข้าใช้งาน
app.get('/api/product/',db.getAllProducts);

var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});
const pgp = require('pg-promise')();
var db = pgp('postgres://qnjxemihrmnjtx:166e4b30ba2beddd4fed787151b264ad6e471756b2c8f8aa6259dd203fd7527f@ec2-54-243-150-10.compute-1.amazonaws.com:5432/d988mh3qoj7efo?ssl=true');


//functionไหนบ้างที่อยากจะให้serverเอาไปใช้บ้าง
module.exports = {
    getAllProducts,
};


// Add queries here เพื่อในserverมาดึงข้อมูลนำไปใช้
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            // console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'success',
                    message: 'Failed to retrieved'
                })
        })
}
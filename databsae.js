const pgp = require('pg-promise')();
var db = pgp('?ssl=true');


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
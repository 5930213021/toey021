const pgp = require('pg-promise')();
var db = pgp('postgres://rqaybedddsjltk:522008ee90bcf532f956a16ebb8e86c1fad79742480bee59d6f8af4459d35459@ec2-23-21-65-173.compute-1.amazonaws.com:5432/d4plclm0rplh3m?ssl=true');


//functionไหนบ้างที่อยากจะให้serverเอาไปใช้บ้าง
module.exports = {
    getAllProducts,
};
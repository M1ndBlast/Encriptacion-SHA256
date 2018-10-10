var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/encriptacion' () =>
{
    var con = mysql.createConnection(
    {
        host: "1192.168.21.36",
        user: "root",
        password: "Ilovebr3ad",
        database: "aes"
    })

    con.connect(function(err)
    {
        if (err) throw err;
        con.query("SELECT * FROM customers", function (err, result, fields)
        {
            if (err) throw err;
            console.log(result);
        });
    });
})

module.exports = router;

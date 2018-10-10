var express = require('express')
var router = express.Router()
const Cryptos = require('../modules/Cryptos')

router.get('/', (req, res, next) =>
{
  res.render('index', { title: 'Express' })
})

router.post('/encriptando', () =>
{
    let usu = req.body.user,
        pass = req.body.pass,
        msg = req.body.text,
        tipo = req.body.tipo == 0 ? Cryptos.algorthim.AES128 : req.body.tipo == 1 ? Cryptos.algorthim.AES192 : Cryptos.algorthim.AES256

    let msgCry = Cryptos.crypt(msg, pass, algorthim)

    var con = mysql.createConnection(
    {
        host: "1192.168.21.36",
        user: "root",
        password: "Ilovebr3ad",
        database: "aes"
    })

    con.connect(function(err)
    {
        if (err) throw err
        con.query("insert into usuario values (0, ?, ?)", [usu, pass],function (err, result)
        {
            if (err) throw err
            console.log('registro del usuario completada')
            con.query("insert into reporte values (0, ?, ?, ?)", [usu, msgCry, tipo],function (err, result)
            {
                if (err) throw err
                console.log('registro guardado')
                res.redirect('/message')
            })
        })
    })
})

router.get('/message', (req, res) =>
{
    res.render('message')
})

module.exports = router

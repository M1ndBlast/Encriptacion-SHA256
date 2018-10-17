const express = require('express'),
    router = express.Router(),
    Cryptos = require('../modules/Cryptos'),
    crud = require('../modules/crud')


router.get('/', (req, res, next) =>
{
  res.render('index', { title: 'Express' })
})

router.post('/encriptando', (req, res) =>
{
    let usu = req.body.user,
        pass = req.body.pass,
        msg = req.body.text,
        nTipo = req.body.tipo,
        tipo = req.body.tipo == 0 ? Cryptos.algorthim.AES128 : req.body.tipo == 1 ? Cryptos.algorthim.AES192 : Cryptos.algorthim.AES256

    var msgCry = Cryptos.crypt(msg, pass, tipo)
    console.log('Las contraseñas son:')
    console.log(msg)
    console.log(msgCry)

    crud.registrar(usu, pass, msgCry, nTipo, () => { res.redirect('/') })
})
router.get('/desencriptando', (req, res) =>
{
    let usu = req.body.user,
        pass = req.body.pass,
        msg = req.body.text,
        nTipo = req.body.tipo,
        tipo = req.body.tipo == 0 ? Cryptos.algorthim.AES128 : req.body.tipo == 1 ? Cryptos.algorthim.AES192 : Cryptos.algorthim.AES256
        console.log('llego aqui xD')
    var arreglo = crud.consultar((cb) =>
    {
        console.log('imprimiendo arreglo')
        console.log(arreglo)
    })
})

router.get('/message', (req, res) =>
{
    res.render('message')
})

router.get('/reports', (req, res) =>
{
    res.render('reports')
})

module.exports = router

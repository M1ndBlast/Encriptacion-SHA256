const mysql = require('mysql')
const Cryptos = require('./Cryptos')
var dbconfig =
{
    'connection':
    {
        'host': 'localhost',
        'user': 'root',
        'password': 'Ilovebr3ad'
    },
	'database': 'DBExamen'
}
var con = mysql.createConnection(dbconfig.connection)
con.query('USE ' + dbconfig.database)

var crud =
{
    registrar: (usu, pass, msgCry, nTipo, cb) =>
    {
        con.query("insert into usuario values (0, ?, ?)", [usu, pass], function (err, result)
        {
            if (err) throw err
            console.log('registro del usuario completada')
            con.query("select id_usu from usuario where nom_usu = ? and pass_usu = ?", [usu, pass], (err, result1) =>
            {
                if (err) throw err
                let idusu = result1[0].id_usu
                console.log('consulta realizada')
                con.query("insert into reporte values (0, ?, ?, ?)", [idusu, msgCry, nTipo], (err, result2) =>
                {
                    if (err) throw err
                    console.log('registro guardado')
                    cb()
                })
            })

        })
    },

    consultar: (cb) =>
    {
        console.log('empezando consulta')
        con.query('select id_rep, nom_usu, cue_rep, cif_rep from reporte natural join usuario', (err, result) =>
        {
            console.log('terminando consulta')
            if (err) throw err
            console.log('imprimiendo consulta')
            console.log(result)
            console.log('ejecutando cb')
            cb(result)
        })
    }
}


module.exports = crud

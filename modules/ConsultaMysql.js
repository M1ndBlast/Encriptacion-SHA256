const controlador = {};

controlador.registrar = (req, res) => {
  const usuario = req.body.user
  const message = req.body.text
  const password = req.body.pass
  const cifrado =
  console.log(text)
      req.getConnection((err, connection) => {
          const query = connection.query('INSERT INTO tablapadre (nom_tpa) values (?)',text  => {
              res.redirect('/');
          })
      })
};

module.exports = controlador


function connect()
{
    con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "n0m3l0",
        database: "AESDB"
    })
    con.connect(function(err)
    {
        if (err) throw err
        console.log("Conexion con base completada")
});

module.exports = connect

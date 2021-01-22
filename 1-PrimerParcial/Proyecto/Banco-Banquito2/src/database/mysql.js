var mysql = require('mysql');

var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'corebancario',
    user : 'admin',
    password : 'admin123',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: '+ err);
        return;
    }
});

module.exports = conexion;
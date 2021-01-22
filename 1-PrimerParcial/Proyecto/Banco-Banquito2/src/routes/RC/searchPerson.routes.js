const express = require('express');
const router = express.Router();

const db = require('../../database/mysql');

const soap = require('soap');

router.post('/', async (req, res) => {

  var url = 'http://34.198.245.54:80/bbconsultas-war/PersonaWS?wsdl';
  var args = { cedula: req.body.docIdeClient };
  await soap.createClient(url, function (err, client) {
    client.buscarPorCedula(args, function (err, result) {
      console.log(result);
      if (result != null) {
        for (var index in result) {
          res.send(result[index]);
        }
      } else {
        res.send("");
      }
    });
  });
});

module.exports = router;
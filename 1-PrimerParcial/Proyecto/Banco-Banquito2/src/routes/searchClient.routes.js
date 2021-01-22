const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

const soap = require('soap');

router.post('/', (req, res) => {
  const docIdeClient = req.body.docIdeClient;
  const sqlSelectSearchIdClient =
    "SELECT COD_CLIENT FROM client WHERE DOCUMENT_IDENTIFY = ?";
  db.query(sqlSelectSearchIdClient, docIdeClient, (err, result) => {
    if (JSON.stringify(result) != '[]') {
      res.send(result);
    } else {
      res.send("");
    }
  });
});

module.exports = router;
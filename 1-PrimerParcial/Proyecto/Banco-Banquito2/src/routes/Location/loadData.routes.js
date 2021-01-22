const express = require('express');
const router = express.Router();

const db = require('../../database/mysql');

router.post('/', async (req, res) => {
  const sqlSelectSearchIdClient =
    "SELECT name FROM location WHERE cod_location <= 24";
  await db.query(sqlSelectSearchIdClient, (err, result) => {
      res.send(result);
  });
});

module.exports = router;
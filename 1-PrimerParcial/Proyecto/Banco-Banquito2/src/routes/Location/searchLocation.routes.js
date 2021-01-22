const express = require('express');
const router = express.Router();

const db = require('../../database/mysql');

router.post('/', async (req, res) => {
  const loc_cod = req.body.province;
  console.log(loc_cod);
  const sql = "SELECT * FROM location WHERE loc_cod_location = ?";
  await db.query(sql, loc_cod, (err, result) => {
      res.send(result);
  });
});

module.exports = router;
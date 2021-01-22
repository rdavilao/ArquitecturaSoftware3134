const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

router.post('/', (req, res) => {
  const account = req.body.account;
  const sqlSelectSearchTypeAccount =
    "SELECT * FROM account WHERE NUMBER = ?";
  db.query(sqlSelectSearchTypeAccount, account, (err, result) => {
    if (JSON.stringify(result) != '[]') {
      res.send(result);
    } else {
      res.send("");
    }
  });
});

module.exports = router;
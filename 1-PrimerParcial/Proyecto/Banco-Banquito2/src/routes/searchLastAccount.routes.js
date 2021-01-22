const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

router.post('/', (req,res) => {
    const sqlSelectLastAccount = 
        "SELECT NUMBER FROM account ORDER BY NUMBER DESC LIMIT 1";
    db.query(sqlSelectLastAccount, (err,result) => {
        res.send(result);
    });
});

module.exports = router;
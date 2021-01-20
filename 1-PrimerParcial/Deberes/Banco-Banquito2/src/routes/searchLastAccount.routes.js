const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

router.post('/', (req,res) => {
    const sqlSelectLastAccount = 
        "SELECT numberAccount FROM account ORDER BY numberAccount DESC LIMIT 1";
    db.query(sqlSelectLastAccount, (err,result) => {
        res.send(result);
    });
});

module.exports = router;
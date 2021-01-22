const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

router.post('/', (req,res) => {
    const idClient = req.body.idClient;
    const typeAccount = req.body.typeAccount;
    console.log(idClient+typeAccount);

    const sqlSelectSearchTypeAccount = 
        "SELECT COD_ACCOUNT FROM account WHERE CLIENT = ?  AND TYPE = ?";
    db.query(sqlSelectSearchTypeAccount, [idClient,typeAccount], (err,result) => {
        console.log(result);
        if(JSON.stringify(result) != '[]'){
            res.send(result);
          }else{
            res.send("");
          }          
    });
});

module.exports = router;
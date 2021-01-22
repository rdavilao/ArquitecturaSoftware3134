const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

function CurrentDate(){
    var f = new Date();
    var fechaAct = f.getFullYear()+"-"+(f.getMonth() +1)+"-"+f.getDate();
    return fechaAct;
};

router.post('/',(req, res) =>{
    
    const idClient = req.body.idClientAccount;
    const typeAccount = req.body.typeAccount;
    const statusAccount = '0';
    const numberAccount = req.body.numberAccount;
    const creationDate = CurrentDate();
    const currentBalance = 0.00;

    const sqlInsert = 
    "INSERT INTO account (CLIENT,TYPE,STATUS,NUMBER,CREATION_DATE,CURRENT_BALANCE) VALUES(?,?,?,?,?,?)";
    db.query(sqlInsert, [idClient,typeAccount,statusAccount,numberAccount,creationDate,currentBalance], (err, result)=> {
    console.log(err);
    });
});

module.exports = router;
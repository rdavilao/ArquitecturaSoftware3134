const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

router.post('/',(req, res) =>{
    const accountSender = req.body.accountSender;
    const accountReceiver = req.body.accountReceiver;
    const balanceSender = req.body.balanceSender;
    const balanceReceiver = req.body.balanceReceiver;
    const typeTransaction = req.body.typeTransaction;
    var sqlInsert = "";

    if(typeTransaction === "pagos" || typeTransaction === "Transferencia"){
        sqlInsert = 
        "UPDATE account SET statusAccount = 1, curBalAccount = ? WHERE numberAccount = ?";  
        db.query(sqlInsert, [balanceReceiver,accountSender]);
        sqlInsert = 
        "UPDATE account SET statusAccount = 1, curBalAccount = ? WHERE numberAccount = ?";  
        db.query(sqlInsert, [balanceSender,accountReceiver]);
    }else{
        sqlInsert = 
         "UPDATE account SET statusAccount = 1, curBalAccount = ? WHERE numberAccount = ?";  
         db.query(sqlInsert, [balanceReceiver,accountReceiver], (err, result)=> {
             res.send("Datos actualizados")
         });
    }
    
});

module.exports = router;
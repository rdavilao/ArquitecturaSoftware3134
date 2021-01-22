const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

router.post('/', (req, res) =>{
   
    const clientDocIde = req.body.clientDocIde;
    const clientName = req.body.clientName;
    const clientSurname = req.body.clientSurname;
    const clientTradeName = req.body.clientTradeName;
    const clientGenre = req.body.clientGenre;
    const clientCanton = req.body.clientCanton;
    const clientAddress = req.body.clientAddress;
    const clientEmail = req.body.clientEmail;
    const clientPhone = req.body.clientPhone;
    const clientPhone1 = req.body.clientPhone1;
    const clientBirthDate = req.body.clientBirthDate;
    const clientBalanceAccount = 0.00;
    const clientBalanceLoan = 0.00;
    const sqlInsert = 
    "INSERT INTO client (DOCUMENT_IDENTIFY,NAME,SURNAME,TRADE_NAME,GENRE,LOCATION,ADDRESS,EMAIL,PHONE,PHONE_AUX,BIRTH_DATE,BALANCE_ACCOUNT,BALANCE_LOAN) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [clientDocIde,clientName,clientSurname,clientTradeName,clientGenre,clientCanton,clientAddress,clientEmail,clientPhone,clientPhone1,clientBirthDate,clientBalanceAccount,clientBalanceLoan], (err, result)=> {
        console.log("Cliente ingresado");
    });
});

module.exports = router;
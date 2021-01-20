const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

router.post('/', (req, res) =>{
    
    const clientDocIde = req.body.clientDocIde;
    const clientName = req.body.clientName;
    const clientSurname = req.body.clientSurname;
    const clientProvince = req.body.clientProvince;
    const clientAddress = req.body.clientAddress;
    const clientEmail = req.body.clientEmail;
    const clientPhone = req.body.clientPhone;
    const clientPhone1 = req.body.clientPhone1;
    const clientBirthDate = req.body.clientBirthDate;
    const sqlInsert = 
    "INSERT INTO client (docIdeClient,nameClient,surnameClient,provinceClient,addressClient,emailClient,phoneClient,phoneAuxClient,birthDateClient) VALUES(?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [clientDocIde,clientName,clientSurname,clientProvince,clientAddress,clientEmail,clientPhone,clientPhone1,clientBirthDate], (err, result)=> {
        console.log("Cliente ingresado");
    });
});

module.exports = router;
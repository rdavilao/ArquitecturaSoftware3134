const express = require('express');
const router = express.Router();

const Transaction = require('../models/transactionModel');

router.get('/', async (req, res) => {
    //const transaction = await Transaction.find();
    res.json("transactionView");
});

router.post('/', async (req, res) => {
    const { sender, receiver, date, type, description, mount, balanceReceiver, typeTransaction } = req.body;

    const transaction = new Transaction({ sender, receiver, date, type, description, mount, balanceReceiver, typeTransaction });
    await transaction.save();
    res.send("Datos guardados");
});

module.exports = router;
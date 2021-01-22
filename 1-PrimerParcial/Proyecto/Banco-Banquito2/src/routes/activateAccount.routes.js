const express = require('express');
const router = express.Router();

const db = require('../database/mysql');

router.post('/', (req, res) => {
    const accountSender = req.body.accountSender;
    const accountReceiver = req.body.accountReceiver;
    const balanceSender = req.body.balanceSender;
    const balanceReceiver = req.body.balanceReceiver;
    const typeTransaction = req.body.typeTransaction;
    const mount = req.body.mount;
    var sqlInsert = "";
    var codigoSender = 0;
    var codigoReceiver = 0;

    sqlInsert =
        "SELECT CLIENT FROM ACCOUNT WHERE NUMBER = ?";
    db.query(sqlInsert, accountReceiver, (err, result) => {
        result.map((val) => {
            codigoReceiver = val.CLIENT;
        })
    });
    sqlInsert =
        "SELECT CLIENT FROM ACCOUNT WHERE NUMBER = ?";
    db.query(sqlInsert, accountSender, (err, result) => {
        result.map((val) => {
            codigoSender = val.CLIENT;
        })
    });

    if (typeTransaction === "pagos" || typeTransaction === "Transferencia") {

        setTimeout(() => {
            sqlInsert =
                "UPDATE client SET BALANCE_ACCOUNT = BALANCE_ACCOUNT + ? WHERE COD_CLIENT = ?";
            db.query(sqlInsert, [mount, codigoReceiver]);

            sqlInsert =
                "UPDATE client SET BALANCE_ACCOUNT = BALANCE_ACCOUNT - ? WHERE COD_CLIENT = ?";
            db.query(sqlInsert, [mount, codigoSender]);

            sqlInsert =
                "UPDATE account SET STATUS = 1, CURRENT_BALANCE = ? WHERE NUMBER = ?";
            db.query(sqlInsert, [balanceReceiver, accountSender]);
            sqlInsert =
                "UPDATE account SET STATUS = 1, CURRENT_BALANCE = ? WHERE NUMBER = ?";
            db.query(sqlInsert, [balanceSender, accountReceiver]);
        }, 1000);

    } else if(typeTransaction === "Deposito") {
        setTimeout(() => {
            sqlInsert =
                "UPDATE client SET BALANCE_ACCOUNT =  BALANCE_ACCOUNT + ? WHERE COD_CLIENT = ?";
            db.query(sqlInsert, [mount, codigoReceiver]);
            sqlInsert =
                "UPDATE account SET STATUS = 1, CURRENT_BALANCE = ? WHERE NUMBER = ?";
            db.query(sqlInsert, [balanceReceiver, accountReceiver]);
        }, 1000);
    } else {
        {
            setTimeout(() => {
                sqlInsert =
                    "UPDATE client SET BALANCE_ACCOUNT =  BALANCE_ACCOUNT - ? WHERE COD_CLIENT = ?";
                db.query(sqlInsert, [mount, codigoReceiver]);
                sqlInsert =
                    "UPDATE account SET STATUS = 1, CURRENT_BALANCE = ? WHERE NUMBER = ?";
                db.query(sqlInsert, [balanceReceiver, accountReceiver]);
            }, 1000);
        }
    }

});

module.exports = router;
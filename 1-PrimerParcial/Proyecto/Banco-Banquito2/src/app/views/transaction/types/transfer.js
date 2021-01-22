import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

import ModalTransaction from '../../../components/modalTransaction';

class transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sender: "",
            receiver: "",
            date: "",
            type: "Débito",
            description: "",
            mount: 0,
            balanceSender: 0,
            balanceReceiver: 0,
            transactionValidate: "",
            typeTransaction: "Transferencia",
            show: false,
        };
    }

    CurrentDate() {
        var f = new Date();
        var fechaAct = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
        this.setState({ date: fechaAct });
    };

    continue() {
        this.CurrentDate();
        this.setState({
            description: "La cuenta " + this.state.sender + " transfirió $" + this.state.mount + " a la cuenta " + this.state.receiver,
        });
        Axios.post('http://52.86.141.98:3000/account/searchAccount', {
            account: this.state.receiver,
        }).then((response) => {
            if (response.data === "") {
                this.setState({ transactionValidate: "Cuenta no registrada del beneficiario. " });
            } else {
                this.setState({ transactionValidate: "" });
                response.data.map((val) => {
                    this.setState({ balanceSender: parseFloat(parseFloat(val.CURRENT_BALANCE) + parseFloat(this.state.mount)).toFixed(2) });
                });
            }
        });

        Axios.post('http://52.86.141.98:3000/account/searchAccount', {
            account: this.state.sender,
        }).then((response) => {
            console.log("depositante");
            console.log(response.data);
            if (response.data === "") {
                this.setState({ transactionValidate: this.state.transactionValidate + "Cuenta no registrada del depositante. " });
            } else {
                response.data.map((val) => {
                    if (parseFloat(val.CURRENT_BALANCE) < parseFloat(this.state.mount)) {
                        this.setState({ transactionValidate: this.state.transactionValidate + "Fondos insuficientes." });
                    } else {
                        this.setState({ balanceReceiver: parseFloat(parseFloat(val.CURRENT_BALANCE) - parseFloat(this.state.mount)).toFixed(2) });
                    }
                });
            }
        });
        this.setState({ show: true });

    }

    handleClick(event, op) {
        switch (op) {
            case 1:
                this.setState({
                    mount: event.target.value,
                });
                break;
            case 2:
                this.setState({
                    sender: event.target.value,
                });
                break;
            case 3:
                this.setState({
                    receiver: event.target.value,
                });
                break;
        }
    };

    addTransaction() {
        fetch('/api/transaction', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item>
                        <TextField
                            label="Ingrese el monto a transferir"
                            style={{ width: 390 }}
                            placeholder="$ 0.00"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                style: {
                                    fontSize: 50,
                                    height: 90,
                                    paddingLeft: 120,
                                    paddingRight: 90,
                                }
                            }}
                            onChange={(event) => this.handleClick(event, 1)}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Cuenta del despositante"
                            style={{ width: 390 }}
                            placeholder="270000000001"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.handleClick(event, 2)}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Cuenta del beneficiario"
                            style={{ width: 390 }}
                            placeholder="270000000002"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.handleClick(event, 3)}
                        />
                    </Grid>

                    <Grid item>
                        <Button variant="outlined" color="primary" onClick={() => this.continue()}>
                            Continuar
                        </Button>
                    </Grid>
                </Grid>
                <ModalTransaction
                    sender={this.state.sender}
                    receiver={this.state.receiver}
                    date={this.state.date}
                    type={this.state.type}
                    description={this.state.description}
                    mount={this.state.mount}
                    balanceSender={this.state.balanceSender}
                    balanceReceiver={this.state.balanceReceiver}
                    typeTransaction={this.state.typeTransaction}
                    transactionValidate={this.state.transactionValidate}
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                />
            </div >
        );
    }
}

export default transfer;
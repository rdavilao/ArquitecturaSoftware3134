import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

import ModalTransaction from '../../../components/modalTransaction';

class withdrawal extends Component {
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
            typeTransaction: "Retiro",
            transactionValidate: "",
            show: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    CurrentDate() {
        var f = new Date();
        var fechaAct = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
        this.setState({ date: fechaAct });
    };

    continue() {
        this.CurrentDate();
        this.setState({
            description: "Se retiró $" + this.state.mount + " de la cuenta " + this.state.receiver,
        });
        Axios.post('http://52.86.141.98:3000/account/searchAccount', {
            account: this.state.receiver,
        }).then((response) => {
            if (response.data === "") {
                this.setState({ transactionValidate: "Cuenta no registrada." });
            }else{
                this.setState({ transactionValidate: "" });
                response.data.map((val) => {
                    if(parseFloat(val.CURRENT_BALANCE) < parseFloat(this.state.mount)){
                        this.setState({ transactionValidate: "Fondos insuficientes." });
                    }else{
                        this.setState({balanceReceiver:  parseFloat(parseFloat(val.CURRENT_BALANCE) - parseFloat(this.state.mount)).toFixed(2)});
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
                    receiver: event.target.value,
                });
                break;
        }
    };

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
                            label="Ingrese el monto a retirar"
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
                            label="Numero de cuenta"
                            style={{ width: 390 }}
                            placeholder="270000000001"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.handleClick(event, 2)}
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
                    balanceSerder={this.state.balanceSender}
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

export default withdrawal;
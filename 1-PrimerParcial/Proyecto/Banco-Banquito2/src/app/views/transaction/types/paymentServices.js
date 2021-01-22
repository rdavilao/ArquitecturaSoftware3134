import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Axios from 'axios';

import ModalTransaction from '../../../components/modalTransaction';

class withdrawal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sender: "",
            receiver: "270000000003",
            date: "",
            type: "Débito",
            description: "",
            descriptionAux: "",
            mount: 0,
            balanceSender: 0,
            balanceReceiver: 0,
            transactionValidate: "",
            typeTransaction: "pagos",
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
        Axios.post('http://52.86.141.98:3000/account/searchAccount', {
            account: this.state.sender,
        }).then((response) => {
            if (response.data === "") {
                this.setState({ transactionValidate: "Cuenta no registrada." });
            } else {
                this.setState({ transactionValidate: "" });
                response.data.map((val) => {
                    if (parseFloat(val.CURRENT_BALANCE) < parseFloat(this.state.mount)) {
                        this.setState({ transactionValidate: "Fondos insuficientes." });
                    } else {
                        this.setState({ transactionValidate: "" });
                        this.setState({ balanceReceiver: parseFloat(parseFloat(val.CURRENT_BALANCE) - parseFloat(this.state.mount)) });
                    }
                });
            }
        });
        Axios.post('http://52.86.141.98:3000/account/searchAccount', {
            account: this.state.receiver,
        }).then((response) => {
            response.data.map((val) => {
                this.setState({ balanceSender: parseFloat(parseFloat(val.CURRENT_BALANCE) + parseFloat(this.state.mount)).toFixed(2) });
            });
        });

        this.setState({ show: true });
    }

    handleClick(event, op) {
        switch (op) {
            case 1:
                this.setState({
                    mount: event.target.value,
                });
            case 2:
                this.setState({
                    description: event.target.value,
                });
                break;
            case 3:
                this.setState({
                    descriptionAux: this.state.description + " del numero " + event.target.value,
                });
                break;
            case 4:
                this.setState({
                    sender: event.target.value,
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
                            label="Ingrese el monto a pagar"
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
                        <FormControl>
                            <InputLabel id="pagos">Eliga el pago</InputLabel>
                            <Select
                                labelId="pagos"
                                id="pagos"
                                style={{ width: 250 }}
                                onClick={(event) => this.handleClick(event, 2)}
                                value={this.state.description}
                            >
                                <MenuItem value={"Pago de agua potable"}>Agua Potable</MenuItem>
                                <MenuItem value={"Pago de luz"}>Luz</MenuItem>
                                <MenuItem value={"Pago de telefonía fija"}>Telefonía fija</MenuItem>
                                <MenuItem value={"Pago de Internet"}>Internet</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        {
                            this.state.description === "Pago de agua potable" || this.state.description === "Pago de luz" ? (

                                <TextField
                                    label="Numero de medidor"
                                    style={{ width: 390 }}
                                    placeholder="154768"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => this.handleClick(event, 3)}
                                />
                            ) : this.state.description === "Pago de telefonía fija" ? (

                                <TextField
                                    label="Numero de telefono"
                                    style={{ width: 390 }}
                                    placeholder="032821357"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => this.handleClick(event, 3)}
                                />
                            ) : this.state.description === "Pago de Internet" ? (
                                <TextField
                                    label="Numero de cedula"
                                    style={{ width: 390 }}
                                    placeholder="1804915617"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => this.handleClick(event, 3)}
                                />
                            ) : null

                        }
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Numero de cuenta"
                            style={{ width: 390 }}
                            placeholder="270000000001"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.handleClick(event, 4)}
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
                    description={this.state.descriptionAux}
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

export default withdrawal;
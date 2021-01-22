import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardMedia from '@material-ui/core/CardMedia';
import logoBanco from '../assets/images/Logos-01.png';
import Axios from 'axios';

const paper = {
    margin: 'auto',
    maxWidth: '500px',
    padding: '9px',
};

const img = {
    margin: 'auto',
    maxWidth: '120px',
    maxHeight: '120px',
};

const body = {
    backgroundColor: 'white',
    border: '2px solid',
    margin: '1% 35% 20% 35%',
    padding: '25px',
};

class modalTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.modalShow = this.modalShow.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }

    addTransaction() {
        Axios.post('http://52.86.141.98:3000/account/activateAccount', {
            accountSender: this.props.sender,
            accountReceiver: this.props.receiver,
            balanceReceiver: this.props.balanceReceiver,
            mount: this.props.mount,
            balanceSender: this.props.balanceSender,
            typeTransaction: this.props.typeTransaction,
        });
        fetch('/api/transaction', {
            method: 'POST',
            body: JSON.stringify(this.props),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        this.modalShow();
    }

    body() {
        return (
            <div style={body}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Paper elevation={0} style={img}>
                            <CardMedia
                                component="img"
                                alt="Banco Banquito"
                                image={logoBanco}
                                title="Banco Banquito"
                            />
                        </Paper>
                    </Grid>
                    {this.props.transactionValidate != "" ? (
                        <Grid item xs={6}>
                            <h5>{this.props.transactionValidate}</h5>
                        </Grid>
                    ) :
                        <Grid container>
                            <Grid item xs={6}>
                                <h5>Enviado por:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.sender}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Cuenta beneficiaria:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.receiver}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Fecha de emisión:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.date}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Tipo de transacción:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.type}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Descripción:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.description}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Monto de transacción:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.mount}</h4>
                            </Grid>                            
                            <Grid item xs={6}>
                                <h5>Saldo actual:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.balanceReceiver}</h4>
                            </Grid>

                            <Paper elevation={0} style={paper}>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        style={{ width: 290 }}
                                        onClick={() => this.addTransaction()}
                                    >
                                        Confirmar
                                    </Button>
                                </Grid>
                            </Paper>
                        </Grid>
                    }
                    <Paper elevation={0} style={paper}>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ width: 290 }}
                                onClick={this.modalShow}
                            >
                                Cancelar
                        </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        );
    }

    modalShow() {
        this.props.onHide();
    }

    render() {
        return (
            <Modal className="modal" open={this.props.show} onClose={this.props.onHide} >
                {this.body()}
            </Modal>
        );
    }
}

export default modalTransaction;
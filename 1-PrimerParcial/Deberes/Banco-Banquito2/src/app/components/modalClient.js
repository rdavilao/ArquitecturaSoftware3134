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
    maxWidth: '100px',
    maxHeight: '100px',
};

const body = {
    backgroundColor: 'white',
    border: '2px solid',
    margin: '1% 35% 20% 35%',
    padding: '25px',
};

class modalClient extends Component {
    constructor(props) {
        super(props);
        this.modalShow = this.modalShow.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }

    submitReview() {
        console.log("A");
        Axios.post('http://localhost:3000/client/insert', {
          clientDocIde: this.props.id,
          clientName: this.props.name,
          clientSurname: this.props.surname,
          clientProvince: this.props.province,
          clientAddress: this.props.address,
          clientEmail: this.props.email,
          clientPhone: this.props.phone,
          clientPhone1: this.props.phoneAux,
          clientBirthDate: this.props.birthdate,
        });
        this.modalShow();
    };

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
                    {this.props.clientIdValidate != "" ? (
                        <Grid item xs={6}>
                            <h5>{this.props.clientIdValidate}</h5>
                        </Grid>
                    ) :
                        <Grid container>
                            <Grid item xs={6}>
                                <h5>Documento de identificación:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.id}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Nombres:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.name}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Apellidos:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.surname}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Provincia:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.province}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Dirección:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.address}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Email:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.email}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Telefono:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.phone}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Fecha de nacimiento:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.birthdate}</h4>
                            </Grid>

                            <Paper elevation={0} style={paper}>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        style={{ width: 290 }}
                                        onClick={() => this.submitReview()}
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
                                Salir
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

export default modalClient;
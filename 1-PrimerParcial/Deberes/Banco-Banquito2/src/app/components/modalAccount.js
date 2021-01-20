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

class modalAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:"",
          };
        this.modalShow = this.modalShow.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }
    
    CurrentDate(){
        var f = new Date();
        var fechaAct = f.getFullYear()+"-"+(f.getMonth() +1)+"-"+f.getDate();
        return fechaAct;
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
                    {this.props.AccountValidate != "" ? (
                        <Grid item xs={6}>
                            <h5>{this.props.AccountValidate}</h5>
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
                                <h5>Numero de cuenta creada:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.numberAccount}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Tipo de cuenta:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.props.type}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Estado actual:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>Inactivo</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h5>Fecha de creación:</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h4>{this.CurrentDate()}</h4>
                            </Grid>
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

export default modalAccount;
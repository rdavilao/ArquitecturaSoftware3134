import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Axios from 'axios';

import ModalAccount from '../../../components/modalAccount';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      type: "",
      AccountValidate: "",
      numberAccount: 0,
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, op) {
    switch (op) {
      case 0:
        this.setState({
          id: event.target.value,
        });
        break;
      case 1:
        this.setState({
          type: event.target.value,
        });
        break;
    }
  };

  continue() {
    this.searchIdClient();
  }

  searchIdClient() {
    var data = ["", this.state.type];

    Axios.post('http://52.86.141.98:3000/client/searchId', {
      docIdeClient: this.state.id,
    })
      .then((response) => {
        if (response.data === "") {
          this.setState({ AccountValidate: "El cliente no está registrado." });
          this.setState({ show: true });
        } else {
          this.setState({ AccountValidate: "" });
          response.data.map((val) => {
            data[0] = val.COD_CLIENT;
            this.searchTypeAccount(data);
          });
        }
      });
  };

  newNumberAccount(idClient) {
    var numberAccount = 0;
    Axios.post('http://52.86.141.98:3000/account/last')
      .then((response) => {
        response.data.map((val) => {
          numberAccount = parseInt(val.NUMBER) + 1;
          this.submitAccount(idClient, numberAccount);
        });
      });
  };

  submitAccount(idClient, numberAcc) {
    this.setState({numberAccount: numberAcc});
    Axios.post('http://52.86.141.98:3000/account/insert', {
      idClientAccount: idClient,
      typeAccount: this.state.type,
      numberAccount: numberAcc,
    });
    this.setState({ show: true });
  };

  searchTypeAccount(data) {
    Axios.post('http://52.86.141.98:3000/account/searchTypeAccount', {
      idClient: data[0],
      typeAccount: data[1],
    })
      .then((response) => {
        if (response.data === "") {
          this.setState({ AccountValidate: this.state.AccountValidate + "" });
          this.newNumberAccount(data[0]);
        } else {
          this.setState({ AccountValidate: "Ya existe una cuenta de " + data[1] + " asignada a ese cliente" });
          this.setState({ show: true });
        }
      });
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
              label="Ingrese el número del documento de identificación del cliente"
              style={{ width: 450 }}
              placeholder="1234567890"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 0)}
            />
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel id="account">Tipo de cuenta:</InputLabel>
              <Select
                labelId="account"
                id="type"
                style={{ width: 250 }}
                onClick={(event) => this.handleClick(event, 1)}
                value={this.state.type}
              >
                <MenuItem value={"Ahorro"}>Ahorro</MenuItem>
                <MenuItem value={"Corriente"}>Corriente</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <Button variant="outlined" color="primary" onClick={() => this.continue()}>
              Aceptar
            </Button>
          </Grid>
        </Grid>
        <ModalAccount
          id={this.state.id}
          type={this.state.type}
          numberAccount={this.state.numberAccount}
          AccountValidate={this.state.AccountValidate}
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}
export default Account;
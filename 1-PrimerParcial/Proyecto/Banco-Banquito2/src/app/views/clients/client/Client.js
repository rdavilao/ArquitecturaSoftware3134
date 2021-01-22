import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Axios from 'axios';

import ModalClient from '../../../components/modalClient';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      cedulaRL: 0,
      name: "",
      surname: "",
      tradeName: "",
      genre: "",
      province: 0,
      provinces: [],
      canton: 0,
      cantones: [],
      address: "",
      email: "",
      phone: "",
      phoneAux: "",
      birthdate: "",
      show: false,
      clientIdValidate: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ provinces: this.loadProvince() });
  }

  handleClick(event, op) {
    switch (op) {
      case 0:
        this.setState({
          id: event.target.value,
        });
        break;
      case 1:
        this.loadCantones();
        break;
      case 2:
        this.setState({
          address: event.target.value,
        });
        break;
      case 3:
        this.setState({
          email: event.target.value,
        });
        break;
      case 4:
        this.setState({
          phone: event.target.value,
        });
        break;
      case 5:
        this.setState({
          phoneAux: event.target.value,
        });
        break;
    }
  };

  validateDocIde() {
    var DocId = this.state.id;
    if (DocId.toString().length === 13) {
      Axios.post('http://52.86.141.98:3000/contribuyente/searchContribuyente', {
        docIdeClient: this.state.id,
      })
        .then((response) => {
          console.log(response);
          if (response.data !== "") {
            this.setState({
              clientIdValidate: "",
              cedulaRL: response.data.representanteLegal.cedula,
              name: response.data.representanteLegal.nombres,
              surname: response.data.representanteLegal.apellidos,
              tradeName: response.data.razonSocial,
              genre: response.data.representanteLegal.genero,
              birthdate: response.data.representanteLegal.fechaNacimiento,
            });

            this.searchObservados();
          } else {
            this.setState({ clientIdValidate: "RUC no registrado en el SRI" });
          }
        })
        .catch(err => console.log(err));
    } else {
      Axios.post('http://52.86.141.98:3000/rc/person/searchPerson', {
        docIdeClient: this.state.id,
      })
        .then((response) => {
          if (response.data !== "") {
            this.setState({
              clientIdValidate: "",
              cedulaRL: 0,
              name: response.data.nombres,
              surname: response.data.apellidos,
              tradeName: response.data.nombres + " " + response.data.apellidos,
              genre: response.data.genero,
              birthdate: response.data.fechaNacimiento,
            });

            this.searchObservados();
          } else {
            this.setState({ clientIdValidate: "Cedula no registrada en el Registro Civil" });
          }
        })
        .catch(err => console.log(err));
    }

  };

  searchObservados(){
    var cedula = this.state.cedulaRL;
    if(cedula === 0){
      cedula = this.state.id;  
    }

    console.log(cedula);

    Axios.post('http://52.86.141.98:3000/observado/searchObservado', {
      docIdeClient: cedula,
    })
      .then((response) => {
        if (response.data === "") {
          this.searchClient();
        } else {
          if(this.state.cedulaRL === 0){
            this.setState({ clientIdValidate: "LA PERSONA SE ENCUENTRA EN LA LISTA DE OBSERVADOS POR EL MOTIVO DE "+response.data.motivo });
          }else{
            this.setState({ clientIdValidate: "EL REPRESENTANTE LEGAL SE ENCUENTRA EN LA LISTA DE OBSERVADOS POR EL MOTIVO DE "+response.data.motivo });
          }
          
        }
      })
      .catch(err => console.log(err));
  }

  searchClient() {
    Axios.post('http://52.86.141.98:3000/client/searchId', {
      docIdeClient: this.state.id,
    })
      .then((response) => {
        if (response.data === "") {
          this.setState({ clientIdValidate: "" });
        } else {
          this.setState({ clientIdValidate: "El cliente ya existe" });
        }
      })
      .catch(err => console.log(err));

  };

  continue() {
    setTimeout(() => {
      this.validateDocIde();
    }, 500);

    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
  }

  loadProvince() {
    var provinces = [];
    var i = 0;
    Axios.post('http://52.86.141.98:3000/location/loadData')
      .then((response) => {
        response.data.map((val) => {
          provinces[i] = val.name;
          i++;
        });
      }).catch(err => console.log(err));
    return provinces;
  }

  loadCantones(e) {
    const province = e.target.value;
    var cantones = [];
    Axios.post('http://52.86.141.98:3000/location/searchLocation', {
      province: province
    }).then((response) => {
      response.data.map((val) => {
        cantones.push({ codigo: val.COD_LOCATION, nombre: val.NAME })
      });
    }).catch(err => console.log(err));
    this.setState({
      cantones,
      province,
    });
  }

  loadCanton(e) {
    this.setState({
      canton: e.target.value
    })
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
              label="Ingrese el número del documento de identificación"
              type="number"
              style={{ width: 390 }}
              placeholder="1234567890"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 0)}
            />
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel id="province">Ingrese la provincia de residencia: </InputLabel>
              <Select
                labelId="province"
                id="province"
                style={{ width: 390 }}
                onClick={(e) => this.loadCantones(e)}
                value={this.state.province}
              >
                {
                  this.state.provinces.map((value, i) => (
                    <MenuItem key={i} value={i + 1}>{value}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel id="canton">Ingrese el canton de residencia: </InputLabel>
              <Select
                labelId="canton"
                id="canton"
                style={{ width: 390 }}
                onClick={(e) => this.loadCanton(e)}
                value={this.state.canton}
              >
                {
                  this.state.cantones.map((value, i) => (
                    <MenuItem key={i} value={value.codigo}>{value.nombre}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese la dirección de residencia"
              style={{ width: 390 }}
              placeholder="Sangolquí"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 2)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese el correo electronico"
              type="email"
              style={{ width: 390 }}
              placeholder="juanperez@espe.edu.ec"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 3)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese el numero telefonico"
              type="number"
              style={{ width: 390 }}
              placeholder="0999568470"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 4)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese el numero telefonico auxiliar"
              type="number"
              style={{ width: 390 }}
              placeholder="0999256437"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 5)}
            />
          </Grid>

          <Grid item>
            <Button variant="outlined" color="primary" onClick={() => this.continue()}>
              Continuar
            </Button>
          </Grid>
        </Grid>
        <ModalClient
          id={this.state.id}
          name={this.state.name}
          surname={this.state.surname}
          tradeName={this.state.tradeName}
          genre={this.state.genre}
          canton={this.state.canton}
          address={this.state.address}
          email={this.state.email}
          phone={this.state.phone}
          phoneAux={this.state.phoneAux}
          birthdate={this.state.birthdate}
          clientIdValidate={this.state.clientIdValidate}
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}
export default Client;
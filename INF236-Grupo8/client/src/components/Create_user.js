import React, { Component } from "react";
import axios from "axios";

export default class Create_user extends Component {
  state = {
    users: [],
    rut:'',
    dv: '',
    nombre: '',
    password: '',
    cargo: '',
    autorizacion: false
  };

  async componentDidMount() {
    //Ejecuta cuando el componente es montado
    this.getUsers();
  }

  getUsers =  async () => {
    const res = await axios.get("http://localhost:5000/usuario");
    this.setState({ users: res.data });
  }

  onChangerut = (e) =>{ 
    this.setState({
      rut: e.target.value
    })
  }
  onChangedv = (e) =>{ 
    this.setState({
      dv: e.target.value
    })
  }
  onChangenombre = (e) =>{ 
    this.setState({
      nombre: e.target.value
    })
  }
  onChangepassword = (e) =>{ 
    this.setState({
      password: e.target.value
    })
  }
  onChangecargo = (e) =>{ 
    this.setState({
      cargo: e.target.value
    })
  }
  onChangeautorizacion = (e) =>{ 
    this.setState({
      autorizacion: false
    })
  }
  onSubmit = async e => {
    await axios.post('http://localhost:5000/usuario', {
      nombre:  this.state.nombre,
      rut: this.state.rut,
      dv: this.state.dv,
      password: this.state.password,
      cargo: this.state.cargo,
      autorizacion:this.state.autorizacion
    })
    this.setState({nombre: ''});
    this.setState({rut: ''});
    this.setState({dv: ''});
    this.setState({password: ''});
    this.setState({cargo: ''});
    this.getUsers();
  }
  deleteUser = async (id) => {
    await axios.delete('http://localhost:5000/usuario' + id);
    this.getUsers();
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="text-center p-2">Creación de usuario</h1>
          <div className="col-md-4 container p-2">
            <form onSubmit={this.onSubmit}>
              <div className="card cardbody p-2">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      required
                      value={this.state.nombre}
                      onChange={this.onChangenombre}
                    />
                  </div>
                </div>
              </div>
              <p></p>
              <div className="card cardbody p-2">
                <div className="row">
                  <div className="form-group mb-1 col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      maxLength="8"
                      placeholder="Rut"
                      required
                      value={this.state.rut}
                      onChange={this.onChangerut}
                    />
                  </div>
                  <div className="form-group mb-1 col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      maxLength="1"
                      placeholder="Dv"
                      required
                      value={this.state.dv}
                      onChange={this.onChangedv}
                    />
                  </div>
                </div>
              </div>
              <p></p>
              <div className="card cardbody p-2">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cargo"
                      required
                      value={this.state.cargo}
                      onChange={this.onChangecargo}
                    />
                  </div>
                </div>
              </div>
              <p></p>
              <div className="card cardbody p-2">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contraseña"
                      required
                      value={this.state.password}
                      onChange={this.onChangepassword}
                    />
                  </div>
                </div>
              </div>
              <p></p>
              <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
